import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonCommonService } from '@sba-app/services/common-common.service';
import { CommonVariableService } from '@sba-app/services/common-variable-service'; 
import { ApiService } from '@sba-app/services/api.service';
import { SharedService } from '@sba-app/shared/services/utils/shared.service';
import { SubmitFlowApiService } from '@sba-app/services/submit-flow-api.service';
import { MetaConfigService } from '@sba-app/services/meta-config.service';

@Component({
  selector: 'app-account-number-verification',
  templateUrl: './account-number-verification.component.html'
})
export class AccountNumberVerificationComponent implements OnInit {
  journey;
  showloader=false
  tabsData:any;
  metaConfig;
  showSubmit=true;
  pageCode = 'ACCOUNT_VERIFY'
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService; 
  sharedService:SharedService; 
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService;   
  constructor(public router:Router,   private injector: Injector) { 
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
    this.sharedService = this.injector.get<SharedService>(SharedService); 
    this.apiService = this.injector.get<ApiService>(ApiService);  
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);  
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);   
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.journey = this.commonService.getJourney()
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode)
     
    }
    public mobileNumber: any;
    public transactionId:any;
    public showVerifyBtn:boolean = true;
    config:any


  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
  }

  ngOnDestroy(){
    this.journey = undefined
    this.config= undefined
    this.metaConfig = undefined
    this.tabsData =undefined
  }

  verify() {
    this.commonVariableService.isConsentValid = true
    this.showloader=true
    let accountNm;
    if(this.commonService.sectionValidationSystem(this.config)){
      this.config[this.metaConfig.formIndex].sectionContent.formValueEmitter.next()
      accountNm = this.config[this.metaConfig.formIndex].sectionContent?.formValue['accountNumber']
    }
    let params= {}
    params['accountNumber']=accountNm
    params['applicationSource']="WEB_JOURNEY"
    params['requestFor']='BORROWER'
    params['finacleRequest']=this.journey.product.productType;
    params['microservicetoken']=this.journey.product.oauthAccessToken;
    this.apiService.verifyAccNum(params).then((res:any)=>{
      this.showloader=false
      if(res.status==200){
        this.showVerifyBtn = false;
        this.mobileNumber = res.maskedMobileNumber;
        this.transactionId = res.transactionId;
        let num = this.mobileNumber.substring(6,10) 
        let label = "Is +91- XXXXXX" + num+ " your Mobile Number?"
        this.config[this.metaConfig.formIndex].sectionContent.fields[1].fieldLabel = label
        this.showRadioBtn();
      }else{
        this.sharedService.openSnackBar(res.message, 'error', res.statusCode);
      }
    })
  }

  showRadioBtn() {
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].showField = true;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;
    this.config[this.metaConfig.paragraphIndex].sectionContent.isShow = false;
  }

   
  

  isValid() {
   return this.commonService.sectionMandatoryValidationSystem(this.config)
  }

  checkConsentMobile($event){
    if($event.TriggerSection=='FORM'){
      if($event.formValue['mobileConsent']=='YES'){
        this.showOtpView()
      }
      if($event.formValue['mobileConsent']=='NO'){
        this.sharedService.openSnackBar('Kindly contact nearest branch', 'error', 200);
      }
    }
    if($event.TriggerSection=='OTP'){
      this.showloader = true;
      this.journey = this.commonService.getJourney()
      this.formSubmitFlow();
    }
  }

  reset(){
    this.showVerifyBtn = true;
    this.config[this.metaConfig.otpIndex].sectionContent.isShow=false
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].showField = false;
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].value = null;
    this.config[this.metaConfig.formIndex].sectionContent.fields[0].value = null;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;

  }

  showOtpView(){
    this.showSubmit = false
    if(this.commonService.sectionValidationSystem(this.config)){
      
      this.config[this.metaConfig.otpIndex].sectionContent.options.transactionId= this.transactionId
      this.config[this.metaConfig.otpIndex].sectionContent.options.accountNumber= this.config[this.metaConfig.formIndex].sectionContent.formValue['accountNumber']
      this.config[this.metaConfig.otpIndex].sectionContent.isShow=true
    }
  } 

  formSubmitFlow(){
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'ACCOUNT_VERIFY',this.metaConfig,this.config)
      }else{
        this.submitFlowApiService.proceedJourney('ACCOUNT_VERIFY',undefined,this.config)
      }
    }else{
      this.submitFlowApiService.proceedJourney('ACCOUNT_VERIFY',undefined,this.config)
    }
    
  }
}
