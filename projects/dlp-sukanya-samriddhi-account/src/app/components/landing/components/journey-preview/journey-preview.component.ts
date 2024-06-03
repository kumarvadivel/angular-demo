import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods'; 
import {MatDialog } from '@angular/material/dialog';
import { VkycComponent } from '../../../vkyc/vkyc/vkyc.component';
import { CommonCommonService } from '@ssa-app/services/common-common.service';
import { CommonVariableService } from '@ssa-app/services/common-variable-service';
import { FetchFlowApiService } from '@ssa-app/services/fetch-flow-api.service';
import { SubmitFlowApiService } from '@ssa-app/services/submit-flow-api.service';
import { InitializeJourneyService } from '@ssa-app/services/initialize-journey.service';
import { MetaConfigService } from '@ssa-app/services/meta-config.service';

@Component({
  selector: 'app-journey-preview',
  templateUrl: './journey-preview.component.html',
  styleUrls: ['./journey-preview.component.scss']
})
export class JourneyPreviewComponent implements OnInit {

  showloader = false
  previewData
  config;
  metaConfig;
  $scope: any = {}
  apifetchedData = {}
  journey
  tabsData: any;
  pageCode = 'JOURNEY_PREVIEW'
  isEdit: boolean;
  dialog:MatDialog;
  submitFlowApiService:SubmitFlowApiService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;
  initializeJourneyService:InitializeJourneyService;
  fetchFlowApiService:FetchFlowApiService;
  metaConfigService:MetaConfigService;
  constructor( 
    public apiService: ApiService,  
    private injector: Injector,
    public sharedService: SharedService, public ArrayMethods: ArrayMethod
  ) {
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(InitializeJourneyService);
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService); 
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
    this.journey = this.commonService.getJourney();
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.previewData = this.metaConfigService.fetchProductPageConfig(this.journey, this.pageCode)
    this.config = this.metaConfigService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey, this.pageCode)
  } 

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()

  }
  ngOnDestroy() {
    this.config = undefined
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, 'JOURNEY_PREVIEW')
    } else {
      this.triggerAfterScopeEffect()
    }
    this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
      this.$scope = scopeData 
      this.triggerAfterScopeEffect()
    })
  }

  triggerAfterScopeEffect() {
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct() {
    this.contentModerationForProduct()
    this.formDataPrepopulationForProduct()
  }


  contentModerationForProduct() {
    if (this.config) {
      this.config.forEach(e => e.options.externalFeedDataforValidationJson = this.$scope)
      this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    }
  }

  formDataPrepopulationForProduct() {
    this.mapDataForEdit();
  }

  mapDataForEdit() {
    this.journey = this.commonService.getJourney();
    this.previewData.forEach(form => {
      switch (form.sectionTitle) {
        case "Vas Details":
          form.options.mappingFields = this.journey.metaData.globalScopeData['fetchVas'] ? this.journey.metaData.globalScopeData['fetchVas']['vasData'][0] : {};
          break;

        case "Nominee Details":
          if (this.journey.metaData.globalScopeData['fetchNominee'] && this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'] && this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'].length > 0) {
            let nomineeDetails = { ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0], ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0].addressOne, ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0].addressTwo }
            form.options.mappingFields = nomineeDetails;
          }
          break;

        case "Branch Details":
          if (this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']) {
            form.options.mappingFields = { ...this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']['userHierarchyUnitDetails']["address"], ...this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']['userHierarchyUnitDetails'] };
            form.options.mappingFields['borrowerDetailTextVariable20'] = form.options.mappingFields['line1Value'];
            form.options.mappingFields['branchAddress'] = form.options.mappingFields['line1Value'];
            form.options.mappingFields['borrowerDetailTextVariable19'] = form.options.mappingFields['name'];
            form.options.mappingFields['branchCode'] = form.options.mappingFields['name'];
            form.options.mappingFields['borrowerDetailTextVariable18'] = form.options.mappingFields['districtValue'];
            form.options.mappingFields['homeBranchDistrict'] = form.options.mappingFields['districtValue'];
            form.options.mappingFields['homeBranchCity'] = form.options.mappingFields['cityValue'];
            form.options.mappingFields['borrowerDetailTextVariable17'] = form.options.mappingFields['stateValue'];
            form.options.mappingFields['homeBranchState'] = form.options.mappingFields['stateValue'];
          }
          break;

        default:
          form.options.mappingFields = this.journey.metaData.globalScopeData['fetchBorrowerDetails'] ? this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail'] : {};
          break;  
      } 
    }
    )
    this.config = this.previewData
  } 
  Continue() {
    this.formSubmitFlow();
  }

  formSubmitFlow() {
    if (this.metaConfig.formSubmitFlow) {
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCallJourneyPage(this.metaConfig.formSubmitFlow[0], 0,
          this.metaConfig.formSubmitFlow.length, 'JOURNEY_PREVIEW', this.metaConfig, this.config);
        this.openVYCPopup();
      } else {
        this.openVYCPopup();
        this.commonVariableService.globalLoaderState = false
      }
    } else {
      this.openVYCPopup();
      this.commonVariableService.globalLoaderState = false
    }

  }

  openVYCPopup() {
    this.dialog.open(VkycComponent, {
      role:"dialog",
      ariaLabel:"popup",
      width: '50%',
      height: 'auto',
      disableClose: true
    });
  }
}
