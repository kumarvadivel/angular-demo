import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonCommonService } from '@fd-app/services/common-common.service';
import { CommonVariableService } from '@fd-app/services/common-variable-service'; 
import { ApiService } from '@fd-app/services/api.service';
import { SharedService } from '@fd-app/shared/services/utils/shared.service';
import { SubmitFlowApiService } from '@fd-app/services/submit-flow-api.service';
import { MetaConfigService } from '@fd-app/services/meta-config.service';
import { FetchFlowApiService } from '@fd-app/services/fetch-flow-api.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
    showSubmit=true;
    showloader=false;
    journey
    config:any;
    tabsData: any; 
    metaConfig;
    public isPreview = false;
    metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService; 
  sharedService:SharedService; 
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService;   
  fetchFlowApiService:FetchFlowApiService;
  $scope: any = {};
  constructor(private route: ActivatedRoute,private injector: Injector) { 
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
    this.sharedService = this.injector.get<SharedService>(SharedService); 
    this.apiService = this.injector.get<ApiService>(ApiService);  
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);  
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);   
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService);
        this.journey = this.commonService.getJourney()
        this.config = this.metaConfigService.fetchProductPageConfig(this.journey,'ADDRESS_DETAILS')
        this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,'ADDRESS_DETAILS')
    }

  ngOnInit(): void {
     
    this.journey = this.commonService.getJourney();
    this.tabsData= this.journey['tabsData']                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    this.commonService.bindHeaderFooterTypes('ADDRESS_DETAILS')
    //this.test_config = this.commonService.mapCommonPropertiestoConfig(this.test_config)
    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
      this.isPreview = true;
    }
    this.bindMappingData()
    this.dataScopeFetchFlow()
  });
    
  }

  Continue(){
    if(this.commonService.sectionValidationSystem(this.config)){
        this.showloader=true
        this.commonService.saveSectionFormDataToJourney(this.config,'ADDRESS_DETAILS')
        this.formSubmitFlow()
    }
  }
  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, "ADDRESS_DETAILS")
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
  formDataPrepopulationForProduct() {    
    this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
  }
  contentModerationForProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 

  }
  formSubmitFlow(){
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'ADDRESS_DETAILS',this.metaConfig,this.config)
      }else{
        this.submitFlowApiService.proceedJourney('ADDRESS_DETAILS',undefined,this.config)
      }
    }else{
      this.submitFlowApiService.proceedJourney('ADDRESS_DETAILS',undefined,this.config)
    }
    
  }


  
  bindMappingData(){
      if(this.journey?.isEtb){
        this.config[1].sectionContent.options['mapSupplyData']=true;
        this.config[1].sectionContent.options['mapAndDisable']=true;
        this.config[1].sectionContent.options['mappingFields']={...this.journey.metaData.capturedData.AccountData,...this.journey.metaData.capturedData.aadharData,...this.journey.metaData.capturedData.fetchBorrowerDetails};
      }else{
        this.config[1].sectionContent.options['mapSupplyData']=true;
        if(this.isPreview ){ 
          this.config[1].sectionContent.options['mapAndDisable']=false;
          this.config[1].sectionContent.options['mappingFields']={...this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail'],...this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']['userHierarchyUnitDetails'],...this.journey.metaData.globalScopeData['fetchUserHierarchyDetails']['userHierarchyUnitDetails']["address"]};
          this.config[1].sectionContent.options['mappingFields']['borrowerDetailTextVariable20']= this.config[1].sectionContent.options['mappingFields']['line1Value'];
          this.config[1].sectionContent.options['mappingFields']['branchAddress']= this.config[1].sectionContent.options['mappingFields']['line1Value'];
          this.config[1].sectionContent.options['mappingFields']['borrowerDetailTextVariable19']= this.config[1].sectionContent.options['mappingFields']['name'];
          this.config[1].sectionContent.options['mappingFields']['branchCode']= this.config[1].sectionContent.options['mappingFields']['name'];
          this.config[1].sectionContent.options['mappingFields']['borrowerDetailTextVariable18']= this.config[1].sectionContent.options['mappingFields']['districtValue'];
          this.config[1].sectionContent.options['mappingFields']['homeBranchDistrict']= this.config[1].sectionContent.options['mappingFields']['districtValue'];
          this.config[1].sectionContent.options['mappingFields']['borrowerDetailTextVariable17']= this.config[1].sectionContent.options['mappingFields']['stateValue'];
          this.config[1].sectionContent.options['mappingFields']['homeBranchState']= this.config[1].sectionContent.options['mappingFields']['stateValue'];
          this.config[1].sectionContent.options['mappingFields']['homeBranchCity']= this.config[1].sectionContent.options['mappingFields']['cityValue'];
          this.config[1].sectionContent.options['mappingFields']['personalAddress']['borrowerDetailTextVariable60']= this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail']['addressOne']['addressOneLine1'] == this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail']['personalAddress']['line1'] ? "yes" : "no";
        }else{
          this.config[1].sectionContent.options['mapAndDisable']=true;
          this.config[1].sectionContent.options['mappingFields']={...this.journey.metaData.capturedData.AccountData,...this.journey.metaData.capturedData.aadharData,...this.journey.metaData.capturedData.borrowerDetails};
        }
   
      }
      
      
  }

}
