import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@nsc-app/services/common-common.service';
import { CommonVariableService } from '@nsc-app/services/common-variable-service'; 
import { ApiService } from '@nsc-app/services/api.service';
import { SharedService } from '@nsc-app/shared/services/utils/shared.service';
import { FetchFlowApiService } from '@nsc-app/services/fetch-flow-api.service';
import { SubmitFlowApiService } from '@nsc-app/services/submit-flow-api.service';
import { MetaConfigService } from '@nsc-app/services/meta-config.service';

@Component({
  selector: 'app-mobile-number-verification',
  templateUrl: './mobile-number-verification.component.html',
  styleUrls: ['./mobile-number-verification.component.scss']
})
export class MobileNumberVerificationComponent implements OnInit {
  
  showloader=false;
  metaConfig;
  categoryType:any = "";
  showSubmit=true
  journey;
  tabsData: any;
  config:any
  pageObjList:any =[];
  $scope: any;
  pageCode = 'MOBILE_VERIFY'
  scopeSubscriber: any;
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;  
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService; 
  fetchFlowApiService:FetchFlowApiService;
  constructor( 
    public router:Router,  
    private activeRoute: ActivatedRoute,
    public sharedService:SharedService,
    private changeDetectorRef: ChangeDetectorRef, 
    private route: ActivatedRoute,private injector: Injector) {
      this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService); 
    this.apiService = this.injector.get<ApiService>(ApiService);  
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);  
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode)
    }
 
  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.categoryType = this.activeRoute.snapshot.queryParams.resumeJourney;
    this.route.queryParams.subscribe(params => {
      if (params && params.vkyc) {
        this.bindMappingData();
      }
    } );
    this.dataScopeFetchFlow()
  }
  bindMappingData(){
    this.config[2].sectionContent.options['mapSupplyData']=true;
    this.config[2].sectionContent.options['mapAndDisable']=true;
    this.config[2].sectionContent.options['mappingFields']=this.journey.metaData.globalScopeData["redirectUrlData"];
    this.config[3].sectionContent.config.options[0].completed = true;
    this.changeDetectorRef.detectChanges();
    this.continue();
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

  customInitializerWithRespectToProduct() { 
        this.formDataPrepopulationForProduct() 
        this.contentModerationForProduct() 
  }

  formDataPrepopulationForProduct(){ 
        this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig) 
  } 
  contentModerationForProduct() { 
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
        this.showOtpView() 
  }

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
    }
  }


  sectionBuilderEmitter($event){ 
        if($event.TriggerSection=='OTP'){
          if($event.status!= undefined && $event.status =="OTP_ATTEMPT_DONE"){
            this.resetFlow()
          }
          if($event.status=='OTP_SUCCESS'){
            this.journey = this.commonService.getJourney()
            this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
            this.formSubmitFlow()
          }
          
        }
        if($event.TriggerSection=='FORM'){
        this.commonService.parseJourneyType($event.formValue)
        if($event.status!=undefined){
          if($event.status=='FORM_EDIT'){
            this.resetFlow()
          }
        }
        } 
  }


  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  showOtpView(){
    // remove submit button from the view
    if(this.commonService.sectionValidationSystem(this.config)){
      this.showSubmit=false
      //then remove the checkbox and disable the mobile number
      this.disableForm()
      //this.config[this.metaConfig.formIndex].sectionContent.fields[this.metaConfig.mobileFieldIndex].fieldAccessModifier = 'READ_ONLY'
      // show the otp section with mapping some values
      this.config[this.metaConfig.formIndex].sectionContent.formValueEmitter.next()
      this.hideTriggerOtpSections()
      this.config[this.metaConfig.consentIndex].sectionContent.isShow = false
      if(this.journey.product.productCode=='LA776'){
        this.config[this.metaConfig.otpIndex].sectionContent.options.individualOrCompany = this.config[this.metaConfig.formIndex].sectionContent?.formValue['constitution']
      }
      this.config[this.metaConfig.otpIndex].sectionContent.options.value = this.config[this.metaConfig.formIndex].sectionContent?.formValue['mobileNumber']
      this.config[this.metaConfig.otpIndex].sectionContent.options.loanProduct = this.journey['product']
      this.config[this.metaConfig.otpIndex].sectionContent.isShow=true
    }
  }

  disableForm(){
    this.config[this.metaConfig.formIndex].sectionContent.fields.map(f=>{
      f.fieldAccessModifier = 'READ_ONLY'
    })
  }

  hideTriggerOtpSections(reset?){
    this.config.map(co=>{
      if(co.sectionName){
        if(co.sectionName=='hideOtpView'){
          if(reset){
            co.sectionContent.isShow = true
          }else{
            co.sectionContent.isShow = false
          }
        }
      }
    })
  }

  resetFlow(){
    this.showSubmit=true
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = true
    this.hideTriggerOtpSections(true)
    this.config[this.metaConfig.otpIndex].sectionContent.isShow=false
    this.config[this.metaConfig.formIndex].sectionContent.fields[this.metaConfig.mobileFieldIndex].fieldAccessModifier = 'EDITABLE'
  }

   
 

}
