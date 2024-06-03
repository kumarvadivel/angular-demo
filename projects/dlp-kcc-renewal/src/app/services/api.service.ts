import { HttpParams } from '@angular/common/http';
import { CustomHttpParamEncoder } from '../shared/helpers/customHttpEncoder'
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../environments/environment.service';
import { CommonApiService } from './common-api.service'
import { CommonVariableService } from './common-variable-service';
import { Encrypt } from '../shared/helpers/Encrypt';
import appConfiguration from '../app.config.json'
import { Formatters } from '@kcc-renewal-app/shared/helpers/Formatters';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public commonApiService: CommonApiService,
    public commonVariableService: CommonVariableService,
    public encrypt: Encrypt,
    private formatters:Formatters,
    public environmentService: EnvironmentService) {

  }
  BASE_URL = this.environmentService.config?.appConfig['primaryHost'];
  BASE_URL_MICROSERVICE = this.environmentService.config?.appConfig['secondaryHost'];
  UI_BASE_URL = this.environmentService.config?.appConfig['UI_BASE_URL'];
  VERIFICATION_MOBILE = `api-v3/restApi/generateOtpUsingPhoneForExistingAndNonExistingUser`;
  VERIFICATION_EMAIL = `api/v1/borrower/generateOtpUsingEmailForExistingUser`
  VERIFICATION_AADHAR = `api-v3/admin/sendAadharOTPToRegisteredMobile`
  VERIFY_MOBILE = `api-v3/restApi/validateOtpOfPhoneAndReturnAccessToken`;
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`;
  VERIFY_AADHAR = `api-v3/admin/validateAadharOtpForRegisteredMobile`;
  VERIFY_GST = `api-v3/restPerfiosApi/gstVerification`
  LOANPRODUCT_LIST = `api-v3/loanProducts/introductionList`;
  LOAN_APPLY = `api/v1/loanApplication/apply`;
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
  UPDATE_LOAN_APPLICATION_TRACKING_STATUS = `api-v3/track/update`;
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`;
  PERSONAL_DETAILS_UPDATE = `/api-v3/borrower/personalProfileUpdate`;
  COMPANY_DETAILS_UPDATE = `api-v3/borrower/companyProfileUpdate`;
  NAME_MATCH = `perfios/name/match`;
  NAME_MATCH_v2 = `api-v3/loanApplication/checkPanAadharName`;
  MASTERDATA_BRANCH = 'api-v3/restPublic/master-branch-list';
  ASSIGN_USER_HIERARCHY = `api-v3/loanApplication/assignUserHierarchyUnit`;
  FETCH_CROP_DETAILS = 'api-v3/businessPatner/fetchCropDetails'
  COMMONPROPERTY_FETCH = `api-v3/config/commonPropertySuggest`;
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`;
  BORROWER_DETAILS = `api-v3/borrower/borrowerDetail`;
  BORROWER_PROFILE_UPDATE = 'api/v1/borrower/profileUpdate';
  UPDATE_BORROWER_SELFT_EMPLOYEMENT = '/api-v3/loanApplication/updateBorrowerSelfEmploymentDetail'
  DOWNLOAD_CONTRACT = `api/v2/contract/downloadContract`
  VERIFY_ACCOUNT_NUM = 'api-v3/restApi/fetchMaskedData';
  FETCH_ACCOUNT_DETAILS = `/finacle/fetchGeneralAccountResponse`;
  UDYAM_VERIFICAION = `/api-v3/entityVerification/initiateUdhyamVerification`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`;
  FETCH_REPAYMENT_SCHEDULE = `finacle/mudra/repaymentSchedule`
  FETCH_PRODUCT_DETAILS_v3 = "api-v3/loanProducts/details";
  UPDATE_LOAN_APPLICATION = `api/v1/borrower/updateLoanApplication`;
  SUBMIT_FEEDBACK = `api/v1/loanApplication/submitFeedback`
  SUPPORTING_DOC = 'api-v3/supportingDocument/showAllRequiredDocuments';
  MICROSERVICE_URL = 'api/v1/restPerfiosApi/callPerfiosMicroservice';
  INTIATATE_PAY_SLIP = 'api/v1/restPerfiosApi/initiateSalarySlipStatementVerification';
  DOCUMENT_LIST = 'api-v3/supportingDocument/documentList';
  FETCH_CIBIL = `/businessRules/minimumCheckParameter`;
  CREATE_CROP_DETAIL = `api/v2/businessPatner/createOrUpdateCropDetails`
  CREATE_LAND_DETAIL = `api/v2/businessPatner/createOrUpdateLandHoldingDetail`
  CONSENT_LIST = `api-v3/consent/list`;
  CONSENT_CREATE = `api/v2/consent/create`;
  BASE_ENCRYPT_CONFIG_URL = `assets/configuration/encrypt-configuration/`;
  BASE_PRODUCT_CONFIG_URL = `assets/configuration/product-configurations/`;
  UPDATE_COMPANY_DETAILS = `api/v1/borrower/stepTwoCompany`;
  PRODUCTLIST_FOR_SPECIFICGROUP = `api/v2/loanProducts/productListForSpecificGroup`;
  PURPOSE_OF_LOAN = `api/v2/assetDetails/fetchPurposeOfAdvance`;
  PINCODE_LIST = 'api-v3/config/pincodes'
  UPLOAD_DOCUMENT_FILE = `api/v1/borrower/uploadDocument`;
  ASSIGN_PARKING_BRANCH = `api-v3/loanApplication/assignParkingBranchUserHierarchyUnit`;
  UPDATE_EMPLOYMENT_DETAILS = `api-v3/borrower/employmentProfileUpdate`;
  INITIATE_ESIGN=`api/v1/esign/initiateSignRequest`;
  ACCEPT_CONTRACT = `api-v3/borrower/acceptContract`;
  FETCH_CONTRACT_TO_ACCEPT=`api/v1/borrower/fetchContractListToAccept`;
  PAN_VERIFICATION_V2 = `api/v1/perfiosServices/fetchPanProfileDetails`;
  EMPLOYER_SEARCH = `/perfiosServices/v2/employerSearchByName`;
  CBS_DEDUPE = `finacle/iso/dedupeCheck`;
  UPDATE_SANCTION_DETAILS = `api/v1/loanApplication/updateLoanSanction`;
  ELIGILBITY_DETAILS = `businessRules/fetchEligibilityDtls `;
  LOAN_WITHOUT_BORROWER_DETAILS = `api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`;
  RATING_SCORE_PL = `businessRules/rating/personalLoan`
  UPDATE_SALARY_ACCOUNT = `finacle/updateSBSalaryAccount`
  INSIGHTS_CALLBACK_CHECK = `api-v3/restPerfiosApi/fetchPerfiosDocumentStatus`
  NPA_CHECK = `/finacle/npaCheck`;
  VALIDATE_ACTIVE_ACCOUNTS = `api-v3/api/cbs/fetchAndValidateActiveAccounts`;
  BANK_DETAIL = `api/v1/bankDetails/show`;
  DOWNLOAD_SESSION = `/api/v1/borrower/createSessionId`;
  CREATE_CBS_DETAIL = `/api/v1/loanApplication/createCBSDetail`;
  DESIGNATIONS = `/api/v1/representative/designations`;
  RETRIEVE = `/api/v1/representative/retrieve`;
  UPDATEREPRESENTATIVE = `/api/v1/representative/updateCompanyRepresentative`
  FETCH_FACILITY_TYPE = "api-v3/multiFacility/fetchFacilities";
  FETCH_SECURITY_DETAILS = "api-v3/businessPatner/fetchPersonalLoanSecurityDetails"
  CREATE_FACILITY = "/api/v1/multiFacility/create";
  UPDATE_FACILITY = "api/v1/multiFacility/update";
  DELETE_FACILITY = "api/v1/multiFacility/delete";
  RETREIVE_FACILITY = "api-v3/multiFacility/retrieve";
  SAVE_OR_UPDATE_RENEWALTYPE = "/api-v3/multiFacility/saveOrUpdateRenwalType";
  RATING_SCORE_VL = "/businessRules/fetchRatingScore";
  GST_SEARCH_BY_PAN = `/api/v1/perfiosServices/gstSearchByPan`;
  SECURITY_DETAILS = "api/v2/businessPatner/createPersonalLoanSecurityDetails";
  SECURITY_DETAILS_UPDATE = "api/v2/businessPatner/updatePersonalLoanSecurityDetails";
  SECURITY_DETAILS_DELETE = "api/v2/businessPatner/deletePersonalLoanSecurityDetail";
  UPDATE_FACILITY_AND_LOAN = "/api/v1/loanApplication/updateFacilityDetailsAndLoanSanction"
  FETCH_CHARGES=`api-v3/loanApplication/fetchCharges`;
  SAVE_CAMPAIGN = `/api-v3/loanApplication/saveCampaignManagement`;
  UPDATE_CBSDETAILS = `/api-v3/loanApplication/updateCBSDetail`;
  CREATE_CHECKLIST = `/api-v3/businessPatner/autoCreateCheckListActivity`;
  LIST_CHECKLIST = `/api-v3/businessPatner/checkListsWebJourney`;
  UPDATE_CHECKLIST_ACTIVITY = `/api-v3/businessPatner/createOrUpdateCheckListActivity`;
  BRANCH_STATE_MASTER = `/api-v3/restPublic/master-branch-list-new`;
  COMPANY_PROFILE_UPDATE = `api/v1/borrower/companyProfileUpdate`;
  UPDATE_LOAN_SANCTION = `/api-v3/loanApplication/createUpdateLoanSanctionForFacilities`;
  ESIGN_FETCH_STATUS=`/api/v1/esign/fetchESigningStatus`;
  VERIFY_PAN_V3 = `nsdlPanValidationService/nsdlPanValidation/check`;

  generateMobileOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_MOBILE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    } : {
      'Content-Type': 'application/json',
    })
  }


  generateEmailOtp(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VERIFICATION_EMAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  generateAadharOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_AADHAR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  verifyMobileOtp(params) {
    let body = {};
    for (const prop in params) {
      body[prop] = params[prop]
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_MOBILE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
    })
  }

  verifyEmailOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_EMAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
    })
  }

  verifyAadharOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_AADHAR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchLoanProducts() {
    let body = {};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.LOANPRODUCT_LIST,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json'
    })
  }

  applyLoan(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_APPLY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationStatus(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationTrackingStatus(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_LOAN_APPLICATION_TRACKING_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  verifyPanNumber(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_PAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  nameMatch(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NAME_MATCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  nameMatch_v2(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NAME_MATCH_v2, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  personalProfileUpdate(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.PERSONAL_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })

  }

  companyProfileUpdate(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.COMPANY_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })

  }


  fetchBranchList() {
    let body = {}
  let encrypted = this.encryptFormBodyData_JSON(body)

    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.MASTERDATA_BRANCH ,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json'
    })
  }
  assignUserHierarchy(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ASSIGN_USER_HIERARCHY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }


  fetchCommonProperty(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body)
    if (params?.microservicetoken) {
      return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.COMMONPROPERTY_FETCH,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
      })
    } else {
      return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.COMMONPROPERTY_FETCH,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json'
      })
    }
  }

  showBorrowerDetails(params) {
    return this.getBorrowerDetails(params)

  }

  updateMainLoanApplicationStatus(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_MAIN_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  verifyUdyam(params) {
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UDYAM_VERIFICAION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateSelfEmployment(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateCompanyProfileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.COMPANY_PROFILE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }
  encryptFormBodyData(body) {
    let temp_body
    let obj = {}

    if (this.environmentService.configData.appConfig.isEncryption === true) {
      temp_body = new HttpParams({ encoder: new CustomHttpParamEncoder() })
      if (body.updates && body.updates.length != 0) {
        body.updates.forEach(data => {
          if (data.param == 'access_token') {
            temp_body = temp_body.set(data.param, data.value)
          } else {
            obj[data.param] = data.value
          }
        })
      }
      //encrypt object
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key = CryptoJS.enc.Latin1.parse(this.environmentService.config.appConfig.clientApiKey);
      let iv = CryptoJS.enc.Latin1.parse(plainiv);
      let encrypted = this.encrypt.encrypt(key, iv, JSON.stringify(obj))
      temp_body = temp_body.set('encryptedRequestData', encrypted)
      return {body:temp_body,plainiv}
    } else {
      return {body}
    }
  }
  encryptFormBodyData_JSON(body) {
    let obj = {}
    let temp_body = {}
    if (this.environmentService.configData.appConfig.isEncryption === true) {
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
      let iv = CryptoJS.enc.Latin1.parse(plainiv);
      let encrypted = this.encrypt.encrypt(key, iv, JSON.stringify(body))
      temp_body['encryptedRequestData'] = encrypted.toString()
      return {body:temp_body,plainiv}
    } else {
      return {body}
    }
  }

  decryptFormString(decryptedText) {
    let key = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
    let iv = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
    let decryptStr = this.encrypt.decrypt(key, iv, decryptedText)
    return decryptStr.toString(CryptoJS.enc.Utf8);
  }

  fetchAccountData(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_ACCOUNT_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  verifyAccNum(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_ACCOUNT_NUM, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
    })
  }

  borrowerDetails(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.LOAN_WITHOUT_BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchPrincipalApprovedDetails(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_PRINCIPAL_APPROVED_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  getSupportingDoc(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.SUPPORTING_DOC, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  EmployeeInfoProfileUpdate(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_PROFILE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateborrowerEmploymentDetails(params) {
    return this.updateSelfEmployment(params)
  }

  fetchProductDetailInfo(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_PRODUCT_DETAILS_v3, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateLoanApplication(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchRepaymentSchedule(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_REPAYMENT_SCHEDULE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitFeedback(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SUBMIT_FEEDBACK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callMicroservice(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.MICROSERVICE_URL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  completeTransact(params, url) {
    return this.callJsonValidationPost(params, url)
  }

  initiatePaySlip(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INTIATATE_PAY_SLIP, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  getUploadedDoc(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.DOCUMENT_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  verifyGst(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_GST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchCibilData(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_CIBIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  createLandDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_LAND_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  createCropDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_CROP_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  fetchCropDetails(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_CROP_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  retreiveFacilityDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.RETREIVE_FACILITY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  saveOrUpdateRenewalType(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.SAVE_OR_UPDATE_RENEWALTYPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  retreiveSecurityDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_SECURITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitFacilityDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_FACILITY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateFacilityDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_FACILITY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  deleteFacilityDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DELETE_FACILITY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  facilityDetailsList(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_FACILITY_TYPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitSecurityDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateSecurityDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  deleteSecurityDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS_DELETE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchConsentList(params){
    let body = {}
    let config = {}
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop]=params[prop]
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body)
    if (this.environmentService.config.appConfig.isEncryption) {
      if (params.microservicetoken) {
        config = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${params.microservicetoken}`,
          'clientApiKey': encrypted.plainiv
        }
      } else {
        config = {
          'Content-Type': 'application/json',
          'clientApiKey': encrypted.plainiv
        }
      }
    } else if (params.microservicetoken) {
        config = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${params.microservicetoken}`
        }
      } else {
        config = {
          'Content-Type': 'application/json',
        }
      }
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CONSENT_LIST, encrypted.body, undefined, undefined, config)

  }

  createConsent(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CONSENT_CREATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  genericPostApiFetchNormal(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + params.url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  genericPostApiFetch(params) {
    if (params['microservicetoken']) {
      this.genericPostApiFetchNormal(params)
    } else {
      let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });

      for (const prop in params) {
        if (prop != 'url') {
          if (prop != 'microservicetoken') {
            body = body.set(prop, params[prop])
          }
        }
      }
      let encrypted = this.encryptFormBodyData(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL + params.url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

    }

  }

  getProductStaticConfig(params) {
    let url;
    if (this.commonVariableService.tenentConfiguration['encrypt-configuration'] === true) {
      url = this.BASE_ENCRYPT_CONFIG_URL;
    } else {
      url = this.BASE_PRODUCT_CONFIG_URL
    }
    return this.commonApiService.doGetApiCall(url + params.url, {})

  }

  updateCompanyDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_COMPANY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  apiEndpointCall(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      if (prop != "url") {
        body = body.set(prop, params[prop])
      }
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + params['url'], encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getProductListForProductGroup(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PRODUCTLIST_FOR_SPECIFICGROUP, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getPurposeOfLoan(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PURPOSE_OF_LOAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  assignParkingBranch(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ASSIGN_PARKING_BRANCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchBorrowerDetails(params) {
    return this.getBorrowerDetails(params)
  }
  getBorrowerDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  updateEmploymentDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_EMPLOYMENT_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateSelfEmploymentDetails(params) {
    return this.updateSelfEmployment(params)
  }
  initiateEsign(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INITIATE_ESIGN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }
  acceptContract(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ACCEPT_CONTRACT, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  fetchContractToAccept(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_CONTRACT_TO_ACCEPT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  downloadContract(params, skipSessionCall?, scope?) {
    if (skipSessionCall) {
      let url = scope.BASE_URL + scope.DOWNLOAD_CONTRACT
      url = `${url}?`
      for (let pr in params) {
        url = url + `${pr}=${params[pr]}&`
      }
      window.open(url, "_blank")
    } else {
      this.createDownloadSession(params, this.downloadContract)
    }
  }

  createDownloadSession(params, callback) {
    let p = {
      access_token: params.access_token,
      applicationSource: 'WEB_JOURNEY',
    }
    this.downloadSession(p).then((res: any) => {
      if (res.code == '200') {
        // params.access_token=res.sessionId
        callback(params, true, this)
      }
    })
  }

  downloadSession(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DOWNLOAD_SESSION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined);
  }

  panVerification_v2(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PAN_VERIFICATION_V2, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  employerSearch(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.EMPLOYER_SEARCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  cibilCheck(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_CIBIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  cbsDedupe(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.CBS_DEDUPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  getPincodeList(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
    }
       let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.PINCODE_LIST,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json'
      })}

  updateSanctionDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_SANCTION_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }


  fetchRatingScorePl(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.RATING_SCORE_PL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  fetchEligilibilityDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ELIGILBITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  loanWithOutBorrowerDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.LOAN_WITHOUT_BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateSalaryAccount(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_SALARY_ACCOUNT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  checkDocumentUploadStatus(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.INSIGHTS_CALLBACK_CHECK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  npaCheck(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NPA_CHECK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchAndValidateActiveAccounts(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VALIDATE_ACTIVE_ACCOUNTS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchBankDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BANK_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callJsonValidationPost(params, url) {

    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)


    return this.commonApiService.doPostApiCall(this.BASE_URL + url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callApiEndpointFromLogic(endpointData) {
    if (endpointData.apiType == 'MICRO_SERVICE') {
      return this.callMicroserviceEnpointFromObject(endpointData)
    } else {
      return this.callPlatformEndpointFromObject(endpointData)
    }
  }

  callPlatformEndpointFromObject(endPointData) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in endPointData.params) {
      body = body.set(prop, endPointData.params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    if (endPointData.RequestType == 'GET') {
      return this.commonApiService.doGetApiCall(this.BASE_URL + endPointData.url, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
        )
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL + endPointData.url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callMicroserviceEnpointFromObject(endPointData) {
    let body = {}
    for (const prop in endPointData.params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = endPointData.params[prop]
        }
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body)
    if (endPointData.RequestType == 'GET') {
      return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + endPointData.url,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`
      })
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + endPointData.url ,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${endPointData.params.microservicetoken}`
    })
  }

  createCBSDetail(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_CBS_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  designations(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DESIGNATIONS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  retrieve(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.RETRIEVE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateCompanyRepresentative(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATEREPRESENTATIVE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchRatingScore(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.RATING_SCORE_VL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  gstSearchByPan(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GST_SEARCH_BY_PAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateFacilityDetailsLoanSanction(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_FACILITY_AND_LOAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  fetchCharges(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_CHARGES, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  saveCampaign(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SAVE_CAMPAIGN,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
    })
  }

  updateCbsDetails(params){
    let body = {}
    let map: any = {};
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          if (prop == 'access_token' || prop == 'loanUuid') {
            body[prop] = params[prop]
          } else {
            map[prop] = params[prop]
          }
        }
      }
    }
    map = [map];
    body['data'] = map;
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_CBSDETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  saveAutoCreateChecklist(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CREATE_CHECKLIST,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
    })
  }

  listChecklist(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }

    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LIST_CHECKLIST,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
    })
  }

  updateChecklistActivity(params){
    let form = new FormData();
    form.append('access_token', params.access_token);
    form.append('loanUuid', params.loanUuid);
    form.append('applicationSource', params.applicationSource);
    form.append('checkListData',params.checkListData)

    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_CHECKLIST_ACTIVITY,form,undefined,undefined,{
      'Authorization':`Bearer ${params.microservicetoken}`,
    })
  }

  fetchBranchStateList(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.BRANCH_STATE_MASTER, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateLoanSanction(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
   let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.UPDATE_LOAN_SANCTION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  esignFetchStatus(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ESIGN_FETCH_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  verifyPanNumber_v3(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_PAN_V3,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
  } :{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
    })
  }

}
