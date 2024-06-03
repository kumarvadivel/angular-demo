import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonCommonService } from '@ca-app/services/common-common.service';
import { CommonVariableService } from '@ca-app/services/common-variable-service';
import { FetchFlowApiService } from '@ca-app/services/fetch-flow-api.service';


@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
})
export class BusinessDetailsComponent implements OnInit {

  journey
  config
  metaConfig
  pageCode = 'BUSINESS_DETAILS';
  scopeSubscriber
  tabsData
  showloader = false;
  $scope: any = {}
  public isPreview = false;


  constructor(private route: ActivatedRoute,public commonService: CommonCommonService, public commonVariableService: CommonVariableService, public fetchFlowApiService: FetchFlowApiService) {
    this.journey = this.commonService.getJourney();
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow();
    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
      this.isPreview = true;
    }
    this.bindMappingData();
  });
  }

  ngOnDestroy(): void {
    if (this.scopeSubscriber) {
      this.scopeSubscriber.unsubscribe()
    }
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
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
  }

  bindMappingData() {
    if (this.isPreview) {
      this.config[2].sectionContent.options['mapSupplyData'] = true;
      this.config[2].sectionContent.options['mapAndDisable'] = false;
      this.config[2].sectionContent.options['mappingFields'] = { ...this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail'] }
      this.config[3].sectionContent.options['mapSupplyData'] = true;
      this.config[3].sectionContent.options['mapAndDisable'] = false;
      this.config[3].sectionContent.options['mappingFields'] = { ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0], ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0].addressOne, ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0].addressTwo }
    } else {
      this.config[2].sectionContent.options['mapSupplyData'] = true;
      this.config[2].sectionContent.options['mapAndDisable'] = true;
      this.config[2].sectionContent.options['mappingFields'] = JSON.parse(JSON.stringify({ ...this.journey.metaData.capturedData.udyamData, ...this.journey.metaData.capturedData.borrowerDetails }));
    }
  }
  continue() {
    this.submitValidationForProduct()
  }
  ContinueButtonStatus() {
    return this.commonService.sectionMandatoryValidationSystem(this.config)
  }

  submitValidationForProduct() {
    if (this.journey.product.productCode == "CA") {
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
      this.commonVariableService.globalLoaderState = true
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config, this.$scope)
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
