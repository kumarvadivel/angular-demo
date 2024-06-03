import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonCommonService} from '@vl-app/services/common-common.service';
import {CommonVariableService} from '@vl-app/services/common-variable-service';
import {EnvironmentService} from '@vl-environments/environment.service';
import {SharedService} from '../../../../shared/services/utils/shared.service';
import {ApiService} from '@vl-app/services/api.service';

@Component({
    selector: 'app-e-sign',
    templateUrl: './e-sign.component.html',
    styleUrls: []
})
export class ESignComponent implements OnInit {
    journey;
    showloader = false
    tabsData: any;
    metaConfig;
    showSubmit = true
    config: any;
    pageCode = 'ESIGN'
    $scope: any;
    scopeSubscriber: any;

    constructor(public commonService: CommonCommonService,
                public theme1ApiService: ApiService,
                public commonVariableService: CommonVariableService,
                public sharedService: SharedService,
                public environmentService: EnvironmentService,
                private route: ActivatedRoute,
                public router: Router) {
        this.journey = this.commonService.getJourney()
        this.commonService.bindHeaderFooterTypes(this.pageCode)
        this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
        this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    }

    ngOnInit(): void {
        this.tabsData = this.journey['tabsData']
        this.dataScopeFetchFlow()
    }

    ngOnDestroy(): void {
        this.scopeSubscriber.unsubscribe()
    }

    dataScopeFetchFlow() {
        if (this.metaConfig.dataScopeFetchFlow?.length) {
            this.showloader = true
            this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
        } else {
            this.$scope = {}
            this.triggerAfterScopeEffect()
        }
        this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData: any) => {
            this.$scope = scopeData || {}
            this.triggerAfterScopeEffect()
        })
    }

    triggerAfterScopeEffect() {
        this.showloader = false
        this.customInitializerWithRespectToProduct()
    }

    customInitializerWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.formdataPrepopulationWithRespectToProduct()
            this.parameterSubscriberWithRespectToProduct()
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
        }
    }

    parameterSubscriberWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.route.queryParams.subscribe((params: any) => {
                if (params.eSignStatus) {
                    if (params.eSignStatus == 'success') {
                        this.formSubmitFlow()
                    }
                    if (params.eSignStatus == 'error') {
                        this.formSubmitFlow()
                    }
                } else {
                    this.showloader = true
                    let params1 = {
                        access_token: this.journey.product.access_token,
                        loanUuid: this.journey.product.loanUuid,
                        forESign: true
                    }
                    this.theme1ApiService.fetchContractToAccept(params1).then((res: any) => {
                            this.$scope['fetchContracts'] = res
                            this.metaConfig['customData'] = {}
                            this.metaConfig['customData']['SelectedContract'] = res.activeContracts[0]
                            this.acceptContract()
                        },
                        (_err) => {
                            this.errorNavigate()
                        })
                }
            })
        }
    }

    contentModeratorWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.pageSectionContentModeration(this.config, {
                "$scope": {...this.$scope},
                "journey": {...this.journey},
                "metaConfig": {...this.metaConfig}
            })
        }
    }

    continue() {
        this.submitValidationForProduct()
    }

    ContinueButtonStatus() {
        if (this.journey.product.productCode == 'VLN') {
            return this.commonService.SectionMandatoryValidationSystem(this.config)
        }
        return false
    }

    submitValidationForProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.journey = this.commonService.getJourney()
            if (this.commonService.SectionValidationSystem(this.config)) {
                this.commonVariableService.globalLoaderState = true
                this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
                this.journey = this.commonService.getJourney()
                this.formSubmitFlow()
            }
        }
    }

    formSubmitFlow() {
        this.journey = this.commonService.getJourney()
        if (this.metaConfig.formSubmitFlow) {
            this.commonVariableService.globalLoaderState = true;
            this.commonService.setJourney(this.journey)
            if (this.metaConfig.formSubmitFlow.length) {
                this.commonService.apiCall({ submitflow: this.metaConfig.formSubmitFlow[0], currentIndex: 0, totalLength: this.metaConfig.formSubmitFlow.length, pageCode: this.pageCode, configList: this.metaConfig, pageconfig: this.config, extraCloudParams: this.$scope })
            } else {
                this.commonVariableService.globalLoaderState = true;
                this.commonService.proceedJourney(this.pageCode, undefined, this.config)
            }
        } else {
            this.commonVariableService.globalLoaderState = true;
            this.commonService.proceedJourney(this.pageCode, undefined, this.config)
        }
    }

    //------------------------------custom/other methods and varaible should be writtern down below this line------------------
    initiateEsign(productName) {
        let params = {
            "access_token": this.journey.product.access_token,
            "loanUuid": this.journey.product.loanUuid,
            "contractUuid": this.$scope.fetchContracts.activeContracts[0].contractUuid,
            "successUrl": this.returnPLUrl(productName) + `?eSignStatus=success`,
            "errorUrl": this.returnPLUrl(productName) + `?eSignStatus=error`,
            "f2f": true
        }
        this.theme1ApiService.initiateEsign(params).then((res: any) => {
                this.journey.metaData.capturedData['ESIGN'] = res
                this.commonService.setJourney(this.journey)
                let decodeHtml = window.atob(res.docHtml);
                let fileHtml = new Blob([decodeHtml], {type: 'text/html'});
                let fileURL = URL.createObjectURL(fileHtml);
                window.open(fileURL, '_self');
                this.commonVariableService.globalLoaderState = false
            },
            (_err) => {
                this.errorNavigate()
            })
    }

    readOrigin() {
        let getOrigin = window.origin;
        return getOrigin.includes('localhost') ? window.origin + "/#" : window.origin + '/vehicle-loan' + "/#";
    }

    returnPLUrl(_productName) {
        let org = this.readOrigin();
        return org + this.router.url.split('?')[0];
    }

    acceptContract() {
        let params1 = {
            access_token: this.journey.product.access_token,
            loanId: this.journey.product.loanUuid,
            contractId: this.$scope.fetchContracts.activeContracts[0].contractUuid,
            activityStatus: 'acceptContract'
        }
        this.theme1ApiService.acceptContract(params1).then((res: any) => {
                this.$scope['acceptContract'] = res
                this.initiateEsign('vehicle-loan')
            },
            (_err) => {
                this.errorNavigate()
            })
    }

    errorNavigate() {
        this.commonService.NavigateJourney('PRODUCT_ERROR')
        this.commonVariableService.globalLoaderState = false
        this.showloader = false
    }
}
