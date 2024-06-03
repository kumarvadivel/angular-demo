import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@gl-app/services/common-common.service';
import { CommonVariableService } from '@gl-app/services/common-variable-service';
import { ApiService } from "@gl-app/services/api.service";
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { LocalStorage } from '@gl-app/shared/helpers/localStorage';
import { SubmitFlowApiService } from '@gl-app/services/submit-flow-api.service';
import { MetaConfigService } from '@gl-app/services/meta-config.service';
import { InitializeJourneyService } from '@gl-app/services/initialize-journey.service';

@Component({
  selector: 'app-account-number-verification',
  templateUrl: './account-number-verification.component.html',
  
})
export class AccountNumberVerificationComponent implements OnInit {
  journey;
  showloader = false;
  tabsData: any;
  metaConfig;
  showSubmit = true;
  pageCode = 'ACCOUNT_VERIFY';
  metaConfigService:MetaConfigService;
  initializeJourneyService:InitializeJourneyService;
  localStorage:LocalStorage;
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    private inject:Injector,
    public sharedService: SharedService,
    public router: Router,
    public apiService: ApiService, 
    public submitFlowApiService: SubmitFlowApiService,) {
      this.localStorage = this.inject.get<LocalStorage>(LocalStorage)
    this.metaConfigService = this.inject.get<MetaConfigService>(MetaConfigService)
    this.initializeJourneyService = this.inject.get<InitializeJourneyService>(InitializeJourneyService)
    this.commonService.bindHeaderFooterTypes(this.pageCode);
    this.journey = this.commonService.getJourney();
    this.config = this.metaConfigService.fetchProductPageConfig(this.journey, this.pageCode);
    this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey, this.pageCode);
  }
  public mobileNumber: any;
  public transactionId: any;
  public showVerifyBtn: boolean = true;
  config: any


  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
  }

  ngOnDestroy() {
    this.journey = undefined
    this.config = undefined
    this.metaConfig = undefined
    this.tabsData = undefined
  }

  verify() {
    this.commonVariableService.isConsentValid = true
    this.commonVariableService.globalLoaderState = true
    let accountNm;
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.config[this.metaConfig.formIndex].sectionContent.formValueEmitter.next()
      accountNm = this.config[this.metaConfig.formIndex].sectionContent?.formValue['accountNumber']
      let params = {}
      params['accountNumber'] = accountNm
      params['applicationSource'] = "WEB_JOURNEY"
      params['requestFor'] = this.config[this.metaConfig.formIndex].sectionContent?.formValue.constitution=='Individual'?'BORROWER':"BORROWER_COMPANY"
      params['finacleRequest'] = this.journey.product.productType;
      this.apiService.verifyAccNum(params).then((res: any) => {
        this.commonVariableService.globalLoaderState = false
        if (res.status == 200) {
          this.showVerifyBtn = false;
          this.mobileNumber = res.maskedMobileNumber;
          this.transactionId = res.transactionId;
          let num = this.mobileNumber.substring(6, 10)
          let label = "Is +91- XXXXXX" + num + " your Mobile Number?"
          this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = "READ_ONLY"
          this.config[this.metaConfig.formIndex].sectionContent.fields[1].fieldAccessModifier = "READ_ONLY"
          this.config[this.metaConfig.formIndex].sectionContent.fields[2].fieldAccessModifier = "READ_ONLY"
          this.config[this.metaConfig.formIndex].sectionContent.fields[3].fieldLabel = label
          this.showRadioBtn();
        }
      })
    }
  }

  showRadioBtn() {
    this.showSubmit = false
    this.config[this.metaConfig.paragraphIndex].sectionContent.paragraphData = "Please, confirm your Mobile Number to get started.";
    this.config[this.metaConfig.formIndex].sectionContent.fields[3].showField = true;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;
  }




  isValid() {
    return this.commonService.sectionMandatoryValidationSystem(this.config)
  }

  sectionBuilderEmitter($event) {
    if ($event.TriggerSection == 'FORM') {
      if ($event.formValue['mobileConsent'] == 'YES') {
        this.showOtpView()
      }
      if ($event.formValue['mobileConsent'] == 'NO') {
        this.config[this.metaConfig.otpIndex].sectionContent.isShow = false
        this.config[this.metaConfig.otpConsent].sectionContent.isShow = false
        this.initializeJourneyService.navigateJourney('PRODUCT_ERROR',undefined,undefined,"errorCode=mobileError")
      }
    }
    if ($event.TriggerSection == 'OTP') {
      if($event.status == 'OTP_SUCCESS'){
        this.journey = this.commonService.getJourney();
        this.formSubmitFlow();
      }
      if($event.status == 'OTP_ATTEMPT_DONE'){
          this.reset()
      }
    }
  }

  reset() {
    this.showSubmit = true
    this.showVerifyBtn = true;
    this.config[this.metaConfig.otpIndex].sectionContent.isShow = false
    this.config[this.metaConfig.otpConsent].sectionContent.isShow = false
    this.config[this.metaConfig.formIndex].sectionContent.fields[3].showField = false;
    this.config[this.metaConfig.formIndex].sectionContent.fields[3].value = null;
    this.config[this.metaConfig.formIndex].sectionContent.fields[2].value = null;
    this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = 
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].fieldAccessModifier = 
    this.config[this.metaConfig.formIndex].sectionContent.fields[2].fieldAccessModifier = "EDITABLE"
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = true;

  }

  showOtpView() {
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.showSubmit = false
      this.config[this.metaConfig.otpIndex].sectionContent.options.transactionId = this.transactionId
      this.config[this.metaConfig.otpIndex].sectionContent.options.accountNumber = this.config[this.metaConfig.formIndex].sectionContent.formValue['accountNumber']
      this.config[this.metaConfig.otpIndex].sectionContent.isShow = true
      this.config[this.metaConfig.otpConsent].sectionContent.isShow = true
    }
  }

  formSubmitFlow() {
    this.commonVariableService.globalLoaderState=true
    if (this.metaConfig.formSubmitFlow) {
      this.localStorage.SessionSetItem('CURRENT_JOURNEY', this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, 'ACCOUNT_VERIFY', this.metaConfig, this.config)
      } else {
        this.submitFlowApiService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
      }
    } else {
      this.submitFlowApiService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
    }

  }
}
