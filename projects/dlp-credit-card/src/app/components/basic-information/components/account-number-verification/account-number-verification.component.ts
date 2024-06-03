import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { ApiService } from "@cc-app/services/api.service";
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';

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
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    public sharedService: SharedService,
    public router: Router,
    public apiService: ApiService, private localStorage: LocalStorage, public submitFlowApiService: SubmitFlowApiService,) {
    this.commonService.bindHeaderFooterTypes(this.pageCode);
    this.journey = this.commonService.getJourney();
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode);
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode);
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
    this.showloader = true
    let accountNm;
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.config[this.metaConfig.formIndex].sectionContent.formValueEmitter.next()
      accountNm = this.config[this.metaConfig.formIndex].sectionContent?.formValue['accountNumber']
    }
    let params = {}
    params['accountNumber'] = accountNm
    params['applicationSource'] = "WEB_JOURNEY"
    params['requestFor'] = 'BORROWER'
    params['finacleRequest'] = this.journey.product.productType;
    this.apiService.verifyAccNum(params).then((res: any) => {
      this.showloader = false
      if (res.status == 200) {
        this.showVerifyBtn = false;
        this.mobileNumber = res.maskedMobileNumber;
        this.transactionId = res.transactionId;
        let num = this.mobileNumber.substring(6, 10)
        let label = "Is +91- XXXXXX" + num + " your Mobile Number?"
        this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = "READ_ONLY"
        this.config[this.metaConfig.formIndex].sectionContent.fields[1].fieldLabel = label
        this.showRadioBtn();
      }
    })
  }

  showRadioBtn() {
    this.showSubmit = false
    this.config[this.metaConfig.paragraphIndex].sectionContent.paragraphData = "Please, confirm your Mobile Number to get started.";
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].showField = true;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;
  }




  isValid() {
    return this.commonService.SectionMandatoryValidationSystem(this.config)
  }

  checkConsentMobile($event) {
    if ($event.TriggerSection == 'FORM') {
      if ($event.formValue['mobileConsent'] == 'YES') {
        this.showOtpView()
      }
      if ($event.formValue['mobileConsent'] == 'NO') {
        this.config[this.metaConfig.otpIndex].sectionContent.isShow = false
        this.config[this.metaConfig.otpConsent].sectionContent.isShow = false
        this.commonService.NavigateJourney('PRODUCT_ERROR',undefined,undefined,"errorCode=mobileError")
      }
    }
    if ($event.TriggerSection == 'OTP') {
      this.showloader = true;
      this.journey = this.commonService.getJourney();
      this.formSubmitFlow();
    }
  }

  reset() {
    this.showVerifyBtn = true;
    this.config[this.metaConfig.otpIndex].sectionContent.isShow = false
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].showField = false;
    this.config[this.metaConfig.formIndex].sectionContent.fields[1].value = null;
    this.config[this.metaConfig.formIndex].sectionContent.fields[0].value = null;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;

  }

  showOtpView() {
    this.showSubmit = false
    if (this.commonService.SectionValidationSystem(this.config)) {

      this.config[this.metaConfig.otpIndex].sectionContent.options.transactionId = this.transactionId
      this.config[this.metaConfig.otpIndex].sectionContent.options.accountNumber = this.config[this.metaConfig.formIndex].sectionContent.formValue['accountNumber']
      this.config[this.metaConfig.otpIndex].sectionContent.isShow = true
      this.config[this.metaConfig.otpConsent].sectionContent.isShow = true
    }
  }

  updateLoanStatus() {
    let params = {
      completedPage: 'BORROWER_BASIC_DETAIL',
      nextPage: 'BORROWER_PERSONAL_DETAIL',
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
    }
    this.apiService.updateLoanApplicationTrackingStatus(params).then((res: any) => {
      this.journey.product = { ...this.journey.product, ...res }
      this.commonService.saveSectionFormDataToJourney(this.config, 'ACCOUNT_VERIFY')
      this.localStorage.SessionSetItem('CURRENT_JOURNEY', this.journey)
      this.commonService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)

      // this.journey = this.localStoragegetItem('CURRENT_JOURNEY'));
      // if(this.journey.isEtb == true) {
      // this.commonService.proceedJourney(this.journey['etbProcceedPageCode'])
      // } else {
      //   this.commonService.proceedJourney('ACCOUNT_VERIFY')
      // }
    })
  }

  formSubmitFlow() {
    if (this.metaConfig.formSubmitFlow) {
      this.localStorage.SessionSetItem('CURRENT_JOURNEY', this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, 'ACCOUNT_VERIFY', this.metaConfig, this.config)
      } else {
        this.commonService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
      }
    } else {
      this.commonService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
    }

  }
}
