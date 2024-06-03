import { Injectable } from '@angular/core';
import { CommonVariableService } from './common-variable-service';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorage } from "@pmmy-app/shared/helpers/localStorage";
import { cloneDeep, findLastIndex } from '@pmmy-app/shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class MetaConfigService {

  constructor(
    public commonVariableService: CommonVariableService,
    public theme1ApiService: ApiService,
    public localStorage:LocalStorage
) {
}

fetchProductPageConfig(journey, pageCode) {
    let productConfig
    let temp
    if (this.commonVariableService.tenentConfiguration.FETCH_PRODUCT_CONFIG_FROM_JSON_FILE) {
        productConfig = this.localStorage.SessionGetItem('PRODUCT_CONFIGURATION')
        temp = cloneDeep(productConfig.pageSectionConfig[journey.productUserType][pageCode])
        temp = this.ParseConfig(temp)
    } else {
        temp = cloneDeep(this.commonVariableService.pageSectionConfig[journey.product.productCode][journey.productUserType][pageCode])
        temp = this.ParseConfig(temp)
    }
    return temp
}

ParseConfigFormJourneyPreview(config) {
    config.forEach((section) => {
        section.options = {
            ...section.options,
            validityEmitter: new Subject<void>(),
            formValueEmitter: new Subject<void>(),
        };
    });
    return config;
}

fetchProductMetaConfig(journey, pageCode) {
    if (this.commonVariableService.tenentConfiguration.FETCH_PRODUCT_CONFIG_FROM_JSON_FILE) {
        let productConfig = this.localStorage.SessionGetItem('PRODUCT_CONFIGURATION')
        let temp = cloneDeep(productConfig.pageMetaConfig[journey.productUserType][pageCode])
        temp = this.parseMetaConfig(temp)
        return temp
    } else {
        let temp = this.commonVariableService.pageMetaConfig[journey.product.productCode][journey.productUserType][pageCode]
        temp = this.parseMetaConfig(temp)
        return temp
    }
}

parseMetaConfig(metaConfig) {
    let sectionBuilderConfigKeys = ['addConfig', 'rejectionView', 'ratingSection']
    let formConfigKeys = ['temp']
    let chartConfigKeys = ['chartConfig']
    for (const prop in metaConfig) {
        if (sectionBuilderConfigKeys.includes(prop)) {
            metaConfig[prop] = this.ParseConfig(metaConfig[prop])
        }
        if (formConfigKeys.includes(prop)) {
            metaConfig[prop].options = {
                ...metaConfig[prop].options,
                validityEmitter: new Subject<void>(),
                formValueEmitter: new Subject<void>()
            }
        }
        if (chartConfigKeys.includes(prop)) {
            metaConfig[prop]['updateChart'] = new Subject<void>()
        }
    }
    return metaConfig
}

ParseConfig(config) {
    this.commonVariableService.globalLoaderState = true
    let lastConsentSectionIndex = findLastIndex(config, n => n.componentType == 'CONSENT');
    if (lastConsentSectionIndex == -1) {
        this.commonVariableService.globalLoaderState = false
    }
    config.forEach((conf, indx) => {
        if (conf.componentType == 'CONSENT') {
            this.parseConsentConfig(conf, indx, lastConsentSectionIndex)
        }
        if (conf.componentType == 'FORM') {
            conf.sectionContent = {
                ...conf.sectionContent,
                validityEmitter: new Subject<void>(),
                formValueEmitter: new Subject<void>(),
                verificationExternalTrigger: new Subject<void>()
            }
        }
        if(conf.componentType=='CHART'){
            conf.sectionContent = {...conf.sectionContent, updateChart: new Subject<void>()}
        }
        if (conf.componentType == 'CAPCHA') {
            conf.sectionContent = {...conf.sectionContent, validityEmitter: new Subject<void>()}
        }
        if(conf.componentType=='GRID'){
            conf.sectionContent.items = this.ParseConfig(conf.sectionContent.items)
        }
    })
    return config
}

parseConsentConfig(conf, indx, lastConsentSectionIndex) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    conf.sectionContent = {...conf.sectionContent, validityEmitter: new Subject<void>()}
    let lastIndex = findLastIndex(conf.sectionContent.config.options, n => n.consentType == 'APIFETCH')
    if (lastConsentSectionIndex == indx && lastIndex == -1) {
        this.commonVariableService.globalLoaderState = false
    }
    conf.sectionContent.config.options.forEach((consent, i) => {
        if (consent.consentType == 'APIFETCH') {
            let params = {
                consentCode: consent.consentCode,
                loanPurposeUuid:journey.product.loanPurposeUuid
            }
            this.theme1ApiService.fetchConsentList(params).then((res: any) => {
                if (res.code == '200') {
                    let cons = res.loanPurposeTemplateList[0]
                    consent.label = cons.description
                }
                if (indx == lastConsentSectionIndex && lastIndex == i) {
                    this.commonVariableService.globalLoaderState = false
                }
            })
        }
        this.fetchSubmitConsentCodesData(consent)
    })
}

fetchSubmitConsentCodesData(consent) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let submitConsentData = []
    if (consent.submitConsentCodes) {
        consent.submitConsentCodes.forEach((code, i) => {
            let params = {
                consentCode: code,
                loanPurposeUuid:journey.product.loanPurposeUuid
            }
            this.theme1ApiService.fetchConsentList(params).then((res: any) => {
                if (res.code == '200') {
                    let obj = res.loanPurposeTemplateList[0]
                    submitConsentData.push(obj)
                    if (i == consent.submitConsentCodes.length - 1) {
                        consent['submitConsentData'] = submitConsentData
                    }
                }
            })
        })
    }
}
}
