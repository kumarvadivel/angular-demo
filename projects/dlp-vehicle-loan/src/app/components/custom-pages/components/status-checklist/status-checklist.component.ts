import {Component, OnDestroy} from '@angular/core';
import {ApiService} from '@vl-app/services/api.service';
import {CommonCommonService} from '@vl-app/services/common-common.service';
import {CommonVariableService} from '@vl-app/services/common-variable-service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-status-checklist',
    templateUrl: './status-checklist.component.html',
    styleUrls: ['./status-checklist.component.scss']
})
export class StatusChecklistComponent implements OnDestroy {
    journey;
    showloader = false
    tabsData: any;
    metaConfig;
    showSubmit = true
    config: any;
    formSubmitEventSubsription: Subscription;
    pageCode = 'STATUS_CHECK'
    $scope: any;
    scopeSubscriber: Subscription;

    constructor(public commonService: CommonCommonService,
                public theme1ApiService: ApiService,
                public commonVariableService: CommonVariableService) {
        this.journey = this.commonService.getJourney()
        this.commonService.bindHeaderFooterTypes(this.pageCode)
        this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
        this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
        this.dataScopeFetchFlow()
    }

    ngOnDestroy(): void {
        this.formSubmitEventSubsription.unsubscribe()
        this.scopeSubscriber.unsubscribe()
    }

    dataScopeFetchFlow() {
        if (this.metaConfig.dataScopeFetchFlow?.length) {
            this.showloader = true
            this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
        } else {
            this.triggerAfterScopeEffect()
        }
        this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
            this.$scope = scopeData
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
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
        }
    }

    contentModeratorWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.pageSectionContentModeration(this.config, {
                "$scope": {...this.$scope},
                "journey": {...this.journey},
                "metaConfig": {...this.metaConfig}
            })
            this.formSubmitFlow()
            this.formSubmitEventSubsription = this.commonVariableService._formSubmitEvents.subscribe((formsubmit: any) => {
                let indx = this.metaConfig.checkList.findIndex(e => e.submitflow == formsubmit.submitflow || e.submitflow == formsubmit.submitflowAlias)
                if (indx != -1) {
                    this.metaConfig.checkList[indx].isCompleted = true
                    if ((indx == 0) || (indx != 0 && indx != this.metaConfig.checkList.length - 1)) {
                        this.metaConfig.checkList[indx + 1].isActive = true
                    }
                }
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
            if (this.commonService.SectionValidationSystem(this.config)) {
                this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
                this.formSubmitFlow()
            }
        }
    }

    formSubmitFlow() {
        this.journey = this.commonService.getJourney()
        if (this.metaConfig.formSubmitFlow) {
            this.showloader = false;
            this.commonService.setJourney(this.journey)
            if (this.metaConfig.formSubmitFlow.length) {
                this.commonService.apiCall({ submitflow: this.metaConfig.formSubmitFlow[0], currentIndex: 0, totalLength: this.metaConfig.formSubmitFlow.length, pageCode: this.pageCode, configList: this.metaConfig, pageconfig: this.config, extraCloudParams: this.$scope, _noLoader: true })
            } else {
                this.showloader = false;
                this.commonService.proceedJourney(this.pageCode, undefined, this.config)
            }
        } else {
            this.showloader = false;
            this.commonService.proceedJourney(this.pageCode, undefined, this.config)
        }
    }

    //------------------------------custom/other methods and varaible should be writtern down below this line------------------
}
