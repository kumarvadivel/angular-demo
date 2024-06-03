import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from '@pmmy-app/services/common-common.service';
import { CommonVariableService } from '@pmmy-app/services/common-variable-service';
import { ApiService } from '@pmmy-app/services/api.service';

@Component({
  selector: 'app-email-id-verification',
  templateUrl: './email-id-verification.component.html',
  styleUrls: []
})
export class EmailIdVerificationComponent implements OnInit {
  journey: any;
  tabsData: any;
  metaConfig;
  pageCode =  "EMAIL_VERIFY"
  scopeSubscriber: any;
  $scope:any = {} 
  constructor(public commonService:CommonCommonService,
    public theme1ApiService:ApiService,public commonVariableService:CommonVariableService) { 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
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
      this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)
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
    if(this.journey.product.productCode == "KML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
    if(this.journey.product.productCode == "TML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
    if(this.journey.product.productCode == "SML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
  }
  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }
  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
  }
  
  continue(){
    this.submitValidationForProduct()
  }

  ContinueButtonStatus(){
    if(this.journey.product.productCode == "KML"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
    if(this.journey.product.productCode == "TML"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
    if(this.journey.product.productCode == "SML"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "KML"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.showOtpView()
      }
    }
    if(this.journey.product.productCode == "TML"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.showOtpView()
      }
    }
    if(this.journey.product.productCode == "SML"){
      this.journey = this.commonService.getJourney()
      if(this.config[2].sectionContent.fields[0].value != null){
        if(this.commonService.SectionValidationSystem(this.config)){
          this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
          this.journey = this.commonService.getJourney()   
          this.showOtpView()
        }
      } else {
        this.SkipPage()
      }

    }
  }

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.commonVariableService.globalLoaderState = true;
        this.commonService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.commonVariableService.globalLoaderState = true;
      this.commonService.proceedJourney(this.pageCode,undefined,this.config)
    }
  }


   //------------------------------custom/other methods and varaible should be writtern down below this line------------------
  showOtpView(){
    this.showSubmit=false
    if(this.commonService.SectionValidationSystem(this.config)){
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
      this.commonService.proceedJourney('EMAIL_VERIFY',undefined,this.config)
      }
    }
    if($event.TriggerSection=='FORM'){
      if($event.status!=undefined){
        if($event.status=='FORM_EDIT'){
          this.resetFlow()
        }
      }
    }
     //this.commonService.proceedJourney('MOBILE_VERIFY')
   }

   SkipPage(){
    let skipped = true;
    this.commonService.proceedJourney(this.pageCode, skipped,this.config)
   }

   resetFlow(){
    this.showSubmit=true;
    this.config[2].sectionContent.isShow = true
    this.config[3].sectionContent.isShow=false
    this.config[2].sectionContent.fields[0].fieldAccessModifier = 'EDITABLE'
  }
}
