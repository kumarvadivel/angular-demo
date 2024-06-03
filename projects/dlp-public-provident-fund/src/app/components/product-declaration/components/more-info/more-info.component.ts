import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonCommonService } from '@ppf-app/services/common-common.service';
import { CommonVariableService } from '@ppf-app/services/common-variable-service';
import { FetchFlowApiService } from '@ppf-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@ppf-app/services/meta-config.service';
import { SubmitFlowApiService } from '@ppf-app/services/submit-flow-api.service';
import { ApiService } from '../../../../services/api.service';
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods';
import { SharedService } from '../../../../shared/services/utils/shared.service';
declare let Appice: any;
@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html'
})
export class MoreInfoComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader=false;
  metaConfig;
  $scope: any;
  config:any
  pageCode = 'MORE_INFO'
  scopeSubscriber: any;
  public isPreview = false;
  submitFlowApiService:SubmitFlowApiService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService; 
  fetchFlowApiService:FetchFlowApiService;
  sharedService:SharedService;
  metaConfigService:MetaConfigService;
  constructor( 
    public apiService:ApiService,
    public ArrayMethods:ArrayMethod, 
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute, private injector: Injector) { 
      this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
      this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
      this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService); 
      this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
      this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode)
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

  ngOnDestroy():void{
    this.scopeSubscriber.unsubscribe()
  }
  bindMappingData(){
    if(this.journey?.isEtb){
      this.config[1].sectionContent.options['mapSupplyData']=true;
      //this.config[1].sectionContent.options['mapAndDisable']=true;
      this.config[1].sectionContent.options['mappingFields']=JSON.parse(JSON.stringify({...this.journey.metaData.capturedData.aadharData,...this.journey.metaData.capturedData.EMAIL_VERIFY,...this.journey.metaData.capturedData.borrowerDetails}));
        delete  this.config[1].sectionContent.options['mappingFields']['title'];
    }else{
      this.config[1].sectionContent.options['mapSupplyData']=true; 
      if(this.isPreview ){ 
      this.config[1].sectionContent.options['mappingFields']=this.journey.metaData.globalScopeData['fetchBorrowerDetails']['borrowerDetail'];
      this.config[1].sectionContent.options['mapAndDisable']=false;
      }else{
        this.config[1].sectionContent.options['mappingFields']=JSON.parse(JSON.stringify({...this.journey.metaData.capturedData.aadharData,...this.journey.metaData.capturedData.EMAIL_VERIFY,...this.journey.metaData.capturedData.borrowerDetails}));
        //delete  this.config[1].sectionContent.options['mappingFields']['title'];
        //this.config[1].sectionContent.options['mapAndDisable']=true;
      }
      this.config[1].sectionContent.options['mappingFields']['emailId']=this.config[1].sectionContent.options['mappingFields']['alternativeUsername'];
    }
    
    
}
  dataScopeFetchFlow(){
    if(this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length){
      this.showloader=true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)
    }else{
      this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData)=>{
      this.$scope = scopeData
      this.triggerAfterScopeEffect()
    })
  }
  triggerAfterScopeEffect(){
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct(){ 
        this.formdataPrepopulationWithRespectToProduct() 
        this.contentModeratorWithRespectToProduct() 
  }
  formdataPrepopulationWithRespectToProduct() { 
        this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig) 
  }
 
  
  contentModeratorWithRespectToProduct() { 
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})  
  }

  continue(){
    this.submitValidationForProduct()
  }

  //disabled status of the submit button
  ContinueButtonStatus(){ 
        return this.commonService.sectionMandatoryValidationSystem(this.config) 
  }

  submitValidationForProduct(){ 
        this.journey = this.commonService.getJourney()
        if(this.commonService.sectionValidationSystem(this.config)){
          this.commonVariableService.globalLoaderState=true
          this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
          this.journey = this.commonService.getJourney()   
          this.formSubmitFlow()
        } 
  }
  

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.commonVariableService.globalLoaderState = true;
        this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.commonVariableService.globalLoaderState = true;
      this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
    }
  }

  //section builder event observer
  sectionBuilderEmitter($event){ 
        if($event.TriggerSection=='CONSENT'){
          if(this.config[3].sectionContent?.isValid && this.commonService.validationCheck(this.config[2].sectionContent.fields[1])){
            if(!this.config[2].sectionContent.fields[1].isVerified){
              this.config[2].sectionContent.verificationExternalTrigger.next({"ok":true,"fieldName":'identityNumberOne'})
              this.config[3].sectionContent.config.options[0].completed = true
              this.changeDetectorRef.detectChanges();
              this.config[3].sectionContent.config.options[0].completed = false
              this.changeDetectorRef.detectChanges();
            }
          }else{
            
              this.config[3].sectionContent.config.options[0].completed = true
              this.changeDetectorRef.detectChanges();
              this.config[3].sectionContent.config.options[0].completed = false
              this.changeDetectorRef.detectChanges();
            this.sharedService.openSnackBar("Please Enter a valid Aadhaar Number")
            
          }
        }
        if($event.TriggerSection=='FORM'){
          if($event?.data?.eventName=='OTP_ERROR'){
              this.config[3].sectionContent.config.options[0].completed = true
              this.changeDetectorRef.detectChanges();
              this.config[3].sectionContent.config.options[0].completed = false
              this.changeDetectorRef.detectChanges();
          }
          if($event?.data?.eventName=='OTP_GENERATE_SUCCESS'){
            this.config[3].sectionContent.config.options[0].completed = false
            this.changeDetectorRef.detectChanges();
            this.config[3].sectionContent.config.options[0].completed = true
            this.changeDetectorRef.detectChanges();
            this.config[3].sectionContent.config.options[0].disabled = true 
          }
          if($event?.formValue?.identityNumberOneVerified){
            this.config[3].sectionContent.config.options[0].disabled = true 
          }
        } 
  } 
}
