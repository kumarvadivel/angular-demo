import { Component, OnInit } from '@angular/core';
import { ApiService } from '@cc-app/services/api.service';
import { CommonCommonService } from "@cc-app/services/common-common.service";
import { CommonVariableService } from "@cc-app/services/common-variable-service";
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';
import { ArrayMethod } from '@cc-app/shared/helpers/ArrayMethods';
import { SharedService } from '@cc-app/shared/services/utils/shared.service';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
})
export class EmploymentComponent implements OnInit {
  showSubmit = true;
  showloader = false;
  journey
  config: any;
  tabsData: any;
  metaConfig
  $scope: any = {};
  pageCode = 'EMPLOYMENT_DETAILS'
  scopeSubscriber: any;
  constructor(public commonService: CommonCommonService,
    public apiService: ApiService,
    public ArrayMethods: ArrayMethod,
    public commonVariableService: CommonVariableService, public sharedService: SharedService,public submitFlowApiService: SubmitFlowApiService) {
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
    if (this.scopeSubscriber) {
      this.scopeSubscriber.unsubscribe()
    }
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
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
    this.formdataPrepopulationWithRespectToProduct()
    this.contentModeratorWithRespectToProduct()
  }
  formdataPrepopulationWithRespectToProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }


  contentModeratorWithRespectToProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    this.config[2].sectionContent.options.externalFeedDataforValidationJson = this.$scope
  }

  continue() {
    this.submitValidationForProduct()
  }

  //disabled status of the submit button
  ContinueButtonStatus(): boolean {
    return this.commonService.SectionMandatoryValidationSystem(this.config);
  }

  submitValidationForProduct() {
    this.journey = this.commonService.getJourney();
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode);
      this.journey = this.commonService.getJourney();
      this.formSubmitFlow();
    }
  }

  formSubmitFlow() {
    this.journey = this.commonService.getJourney()
    if (this.metaConfig.formSubmitFlow) {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config, this.$scope)
      } else {
        this.commonVariableService.globalLoaderState = true;
        this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
    } else {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.proceedJourney(this.pageCode, undefined, this.config)
    }
  }
}
