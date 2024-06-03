import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
import { SharedService } from '@kcc-ah-app/shared/services/utils/shared.service';

@Component({
  selector: 'app-account-number-verification',
  templateUrl: './account-number-verification.component.html',
  styleUrls: []
})
export class AccountNumberVerificationComponent implements OnInit {
  journey;
  showloader = false
  tabsData: any;
  metaConfig;
  showSubmit = true
  constructor(public commonService: CommonCommonService,
    public apiService: ApiService, public commonVariableService: CommonVariableService,
    public sharedService: SharedService,
    public router: Router) {
      
      
  
  }
  public mobileNumber: any;
  public transactionId: any;
  public showVerifyBtn: boolean = true;
  config: any


  ngOnInit(): void {
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes('ACCOUNT_VERIFY')
    this.config = this.commonService.fetchProductPageConfig(this.journey, 'ACCOUNT_VERIFY')
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, 'ACCOUNT_VERIFY')
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
        this.config[this.metaConfig.formIndex].sectionContent.fields[1].fieldLabel = label
        this.showRadioBtn();
      }
    })
  }

  showRadioBtn() {
    this.showSubmit = false
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
        this.sharedService.openSnackBar('Kindly contact nearest branch', 'error', 200);
      }
    }
    if ($event.TriggerSection == 'OTP') {
      this.showloader = true;
      this.journey = this.commonService.getJourney()
      if (this.journey.metaData.capturedData?.existingaadharData?.isETB) {
        if(this.journey.metaData.capturedData?.existingaadharData?.etbMessage !== undefined){
          this.formSubmitFlow()
        }
      } else {
        this.formSubmitFlow()
      }
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
    }
  }

  applyLoan() {
    this.journey = this.commonService.getJourney()
    let params = {
      access_token: this.journey.product.access_token,
      loanAmount: 100,
      applicationSource: 'WEB_JOURNEY',
      loanPurposeUuid: this.journey.product.loanPurposeUuid ? this.journey.product.loanPurposeUuid : this.journey.product.userId,
      borrowerUuid: this.journey.product.borrowerUuid
    }

    this.apiService.applyLoan(params).then((res: any) => {
      if (res.code == '200') {
        this.journey.product = { ...this.journey.product, ...res }
        this.journey.metaData.capturedData = { ...this.journey.metaData.capturedData, ...res }
        this.commonService.setJourney(this.journey)
        this.fetchAccountData()
      } else {
        this.sharedService.openSnackBar(res.message, 'error', 400);
      }
    })
  }

  fetchAccountData() {
    this.showloader = true
    let params = {
      access_token: this.journey.product.access_token,
      accountNumber: this.config[this.metaConfig.formIndex].sectionContent?.formValue['accountNumber'],
      microservicetoken: this.journey.product.oauthAccessToken
    }

    this.apiService.fetchAccountData(params).then((res: any) => {
      if (res.code == '200') {
        // res.object['CUSTOMER_ID'] = null
        let isValid = this.checkAccountData(res.object)
        if (isValid) {
          this.journey.metaData.capturedData['AccountData'] = res.object
          this.updateLoanStatus()
        } else {
          //this.reset()
          this.sharedService.openSnackBar('Customer Account is invalid,please enter Valid account number')
          this.router.navigateByUrl(`/1/error`)
        }
        this.showloader = false

      }
    })
  }
  checkAccountData(account){
    const validatekeys = ['CUSTOMER_ID','ACCOUNT_STATUS(D-Dormant/A-Active/I-Inactive)','MOBILE_NUMBER','AADHAAR_NUMBER','CONSTITUTION_CODE','addressOneCountry',
    'addressOneDistrict',
    'addressOneLine1',
    'addressOneLine2',
    'addressOneState',
    'addressOneZipCode',
    'addressTwoCountry',
    'addressTwoDistrict',
    'addressTwoLine1',
    'addressTwoLine2',
    'addressTwoState',
    'addressTwoZipCode',
    'RISK_PROFILE',
    'ACCOUNT_PRODUCT (SCHEME_CODE)',
    'cbsAssetCode',
    'LAST_KYC_DONE_TILL_DATE_Asset_Code',
    ]
    const status = validatekeys.map(key=>{
      if(account[key]==null){
        return false
      }else{
        if(key=='ACCOUNT_STATUS(D-Dormant/A-Active/I-Inactive)' && account[key]=='Inactive' ){
          return false
        }else if(key=='RISK_PROFILE' && account[key]=='Low' ){
          return false
        }else if(key=='ACCOUNT_PRODUCT (SCHEME_CODE)' && (account[key]=='LA321' || account[key]=='LA763') ){
          return false
        }else if(key=='cbsAssetCode' && account[key]=='11' ){
          return false
        }else if(key=='LAST_KYC_DONE_TILL_DATE_Asset_Code' && ((new Date().getFullYear() - new Date(+account[key].split("/")[2], account[key].split("/")[1] - 1, +account[key].split("/")[0]).getFullYear())*12 + (new Date().getMonth() - new Date(+account[key].split("/")[2], account[key].split("/")[1] - 1, +account[key].split("/")[0]).getMonth())>6)  ){
          return false
        }else{
          return true
        }
      }
    })
    return status.every(t=>t)
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
      this.commonService.setJourney(this.journey)
      this.commonService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
    })
  }

  formSubmitFlow() {
    if (this.metaConfig.formSubmitFlow) {
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, 'ACCOUNT_VERIFY', this.metaConfig, this.config)
      } else {
        this.commonService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
      }
    } else {
      this.commonService.proceedJourney('ACCOUNT_VERIFY', undefined, this.config)
    }

  }
}
