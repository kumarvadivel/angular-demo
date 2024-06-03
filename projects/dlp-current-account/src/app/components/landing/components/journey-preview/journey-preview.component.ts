import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods'; 
import {MatDialog } from '@angular/material/dialog';
import { VkycComponent } from '../../../vkyc/vkyc/vkyc.component';
import { CommonCommonService } from '@ca-app/services/common-common.service';
import { CommonVariableService } from '@ca-app/services/common-variable-service';
import { FetchFlowApiService } from '@ca-app/services/fetch-flow-api.service';
import { SubmitFlowApiService } from '@ca-app/services/submit-flow-api.service';
import { InitializeJourneyService } from '@ca-app/services/initialize-journey.service';
import { MetaConfigService } from '@ca-app/services/meta-config.service';

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

  assignExternalValue(con) {
    if (con.componentType == 'FORM') {
      con.sectionContent.options.externalFeedDataforValidationJson = this.$scope
    }
    return con;
  }

  contentModerationForProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    this.config.forEach(s => {
      this.assignExternalValue(s)
    })
  }

  formDataPrepopulationForProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
    if (this.journey.constitution == "Individual") {
      this.mapDataForEdit();
    }
  }
  ContinueButtonStatus() {
    return false;
  }

  navigateToResume(form) {
    this.showloader = true
    this.initializeJourneyService.navigateJourney(form.TriggerSection, true);
  }

  mapDataForEdit() {
    this.journey = this.commonService.getJourney();
    this.previewData.forEach(form => {
      try {
        switch (form.sectionContent.sectionTitle) {
          case "Director Info":
            this.mapDirectorDetails(form);
            break;
          case "Vas Details":
            this.mapVasDetails(form);
            break;
          case "Nominee Details":
            this.mapNomineeDetails(form);
            break;
          case "Branch Details":
            this.mapBranchDetails(form);
            break;
          default:
            this.mapDefault(form);
            break;
        }
      } catch (error) {
      }
    });
    this.config = this.previewData;
  }

  continue() {
    this.formSubmitFlow();
  }

  mapDirectorDetails(form) {
    if (this.journey.metaData.globalScopeData['retrieve']) {
      form.sectionContent.options.mappingFields = { ...this.journey.metaData.globalScopeData['retrieve'], ...this.journey.metaData.globalScopeData['retrieve']['companyRepresentativeList'][0] }
    }
  }
  mapVasDetails(form) {
    form.sectionContent.options.mappingFields = this.journey.metaData.globalScopeData['fetchVas'] ? this.journey.metaData.globalScopeData['fetchVas']['vasData'][0] : {};
  }
  mapNomineeDetails(form) {
    if (this.journey.metaData.globalScopeData['fetchNominee'] && this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'] && this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'].length > 0) {
      let nomineeDetails = { ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0], ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0].addressOne, ...this.journey.metaData.globalScopeData['fetchNominee']['nomineeList'][0].addressTwo }
      form.sectionContent.options.mappingFields = nomineeDetails;
    }
  }
  mapBranchDetails(form) {
    if (this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']) {
      form.sectionContent.options.mappingFields = {
        ...this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']['userHierarchyUnitDetails']["address"], ...this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']['userHierarchyUnitDetails']
      };
      form.sectionContent.options.mappingFields['borrowerDetailTextVariable20'] = form.sectionContent.options.mappingFields['line1Value'];
      form.sectionContent.options.mappingFields['branchAddress'] = form.sectionContent.options.mappingFields['line1Value'];
      form.sectionContent.options.mappingFields['borrowerDetailTextVariable19'] = form.sectionContent.options.mappingFields['name'];
      form.sectionContent.options.mappingFields['branchCode'] = form.sectionContent.options.mappingFields['name'];
      form.sectionContent.options.mappingFields['borrowerDetailTextVariable18'] = form.sectionContent.options.mappingFields['districtValue'];
      form.sectionContent.options.mappingFields['homeBranchDistrict'] = form.sectionContent.options.mappingFields['districtValue'];
      form.sectionContent.options.mappingFields['homeBranchCity'] = form.sectionContent.options.mappingFields['cityValue'];
      form.sectionContent.options.mappingFields['borrowerDetailTextVariable17'] = form.sectionContent.options.mappingFields['stateValue'];
      form.sectionContent.options.mappingFields['homeBranchState'] = form.sectionContent.options.mappingFields['stateValue'];
    }
  }
  mapDefault(form) {
    form.sectionContent.options.mappingFields = this.journey.metaData.globalScopeData['fetchBorrowerDetails'] ? this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail'] : {};
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
      width: '50%',
      height: 'auto',
      ariaLabel:"popup",
      role:"dialog",
      disableClose: true
    });
  }
}
