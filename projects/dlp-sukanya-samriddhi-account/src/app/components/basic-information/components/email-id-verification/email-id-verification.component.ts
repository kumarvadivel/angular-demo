import { Component, Injector, OnInit } from '@angular/core';
import { CommonCommonService } from '@ssa-app/services/common-common.service';
import { CommonVariableService } from '@ssa-app/services/common-variable-service'; 
import { ApiService } from '@ssa-app/services/api.service';
import { FetchFlowApiService } from '@ssa-app/services/fetch-flow-api.service';
import { SubmitFlowApiService } from '@ssa-app/services/submit-flow-api.service';
import { MetaConfigService } from '@ssa-app/services/meta-config.service';

@Component({
  selector: 'app-email-id-verification',
  templateUrl: './email-id-verification.component.html'
})
export class EmailIdVerificationComponent implements OnInit {
  journey: any;
  tabsData: any;
  metaConfig;
  pageCode =  "EMAIL_VERIFY"
  scopeSubscriber: any;
  $scope:any = {} 
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;  
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService; 
  fetchFlowApiService:FetchFlowApiService 
  constructor(private injector: Injector) { 
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService); 
    this.apiService = this.injector.get<ApiService>(ApiService);  
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);  
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode);
      
    }

  showloader = false
  showSubmit=true
  config;
  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()
  }

  ngOnDestroy():void{
    this.scopeSubscriber.unsubscribe()
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

  ContinueButtonStatus(){ 
        return this.commonService.sectionMandatoryValidationSystem(this.config) 
  }

  submitValidationForProduct(){ 
        this.journey = this.commonService.getJourney()
        if(this.commonService.sectionValidationSystem(this.config)){
          this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
          this.journey = this.commonService.getJourney()   
          this.showOtpView()
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

   //------------------------------custom/other methods and varaible should be writtern down below this line------------------
  showOtpView(){
    this.showSubmit=false
    if(this.commonService.sectionValidationSystem(this.config)){
      this.config[2].sectionContent.fields[0].fieldAccessModifier = 'READ_ONLY'
      //this.config[2].sectionContent.fields[1].showField=false
      // show the otp section with mapping some values
      this.config[2].sectionContent.formValueEmitter.next()
      this.config[3].sectionContent.options.value = this.config[2].sectionContent?.formValue['alternativeUsername']
      this.config[3].sectionContent.options.loanProduct = this.journey['product']
      this.config[3].sectionContent.isShow=true
    }
  }

  otpCompleteTrigger($event){
    // this.updateSubStatus()
    if($event.TriggerSection=='OTP'){
      if($event.status!= undefined && $event.status =="OTP_ATTEMPT_DONE"){
        this.resetFlow()
      }
      else{
      this.commonService.saveSectionFormDataToJourney(this.config,'EMAIL_VERIFY')
      this.submitFlowApiService.proceedJourney('EMAIL_VERIFY',undefined,this.config)
      }
    }
     //this.submitFlowApiService.proceedJourney('MOBILE_VERIFY')
   }

   SkipPage(){
    let skipped = true;
    this.submitFlowApiService.proceedJourney(this.pageCode, skipped,this.config)
   }

   resetFlow(){
    this.showSubmit=true;
    this.config[2].sectionContent.isShow = true
    this.config[3].sectionContent.isShow=false
    this.config[2].sectionContent.fields[0].fieldAccessModifier = 'EDITABLE'
  }
}
