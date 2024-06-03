import { HttpParams } from '@angular/common/http';
import { CustomHttpParamEncoder } from '../shared/helpers/customHttpEncoder'
import { Injectable } from '@angular/core';
import {EnvironmentService} from '../../environments/environment.service';
import { CommonApiService } from './common-api.service'
import { CommonVariableService } from './common-variable-service';
import { Encrypt } from '../shared/helpers/Encrypt';
import appConfiguration from '../app.config.json'
import { Formatters } from '../shared/helpers/Formatters';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isEncryption: boolean = this.environmentService.configData.appConfig.isEncryption;
  tenentConfiguration = this.commonVariableService.tenentConfiguration;
  clientApiKey: string = this.tenentConfiguration.clientApiKey;
  constructor(public commonApiService:CommonApiService,
    public commonVariableService:CommonVariableService,
    public encrypt:Encrypt,
    private formatters:Formatters,
    public environmentService:EnvironmentService) { 
      
    }

  BASE_URL = this.environmentService.config?.appConfig['primaryHost'];
  BASE_URL_MICROSERVICE = this.environmentService.config?.appConfig['secondaryHost'];
  UI_BASE_URL = this.environmentService.config?.appConfig['UI_BASE_URL'];
  VERIFICATION_MOBILE = `api-v3/restApi/generateOtpUsingPhoneForExistingAndNonExistingUser`;
  VERIFICATION_EMAIL =  `api-v3/borrower/generateOtpUsingEmailForExistingUser`
  VERIFICATION_AADHAR = `api-v3/admin/sendAadharOTPToRegisteredMobile`
  VERIFY_MOBILE = `api-v3/restApi/validateOtpOfPhoneAndReturnAccessToken`;
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`;
  VERIFY_AADHAR = `api-v3/admin/validateAadharOtpForRegisteredMobile`;
  //VERIFY_GST =`api-v3/restPerfiosApi/gstVerification`
  VERIFY_GST = `api-v3/entityVerification/gspGstVerification`;
  LOANPRODUCT_LIST = `api-v3/loanProducts/introductionList`;
  LOAN_APPLY  = `api/v1/loanApplication/apply`;
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
  UPDATE_LOAN_APPLICATION_TRACKING_STATUS = `api-v3/track/update`;
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`;
  PERSONAL_DETAILS_UPDATE = `/api-v3/borrower/personalProfileUpdate`;
  NAME_MATCH = `perfios/name/match`;
  NAME_MATCH_v2=`api-v3/loanApplication/checkPanAadharName`;
  MASTERDATA_BRANCH = 'api-v3/restPublic/master-branch-list';
  ASSIGN_USER_HIERARCHY = `/api-v3/loanApplication/assignUserHierarchyUnit`;
  COMMONPROPERTY_FETCH = `api-v3/config/commonPropertySuggest`;
  EMPLOYMENT_DETAILS_UPDATE = `api-v3/borrower/employmentProfileUpdate`;
  NOMINEE_LIST = `api-v3/nominee/list`
  SHOW_VAS = `/api/v2/vas/show`;
  UPDATE_LOAN_PROGRAM=`/api-v3/borrower/updateProgramInLoanApplication`;
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`;
  BORROWER_DETAILS=`/api-v3/borrower/borrowerDetail`;
  BORROWER_PROFILE_UPDATE = '/api-v3/borrower/profileUpdate';
  UPDATE_BORROWER_SELFT_EMPLOYEMENT ='api-v3/loanApplication/updateBorrowerSelfEmploymentDetail'
  DOWNLOAD_CONTRACT=`api/v2/contract/downloadContract`
  VERIFY_ACCOUNT_NUM = 'api-v3/restApi/fetchMaskedData';
  FETCH_ACCOUNT_DETAILS=`/finacle/fetchGeneralAccountResponse`;
  UDYAM_VERIFICAION=`/api-v3/entityVerification/initiateUdhyamVerification`;
  SELF_EMPLOYMENT_DETAILS = `api/v1/loanApplication/showBorrowerSelfEmploymentDetail`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`;
  FETCH_REPAYMENT_SCHEDULE=`finacle/mudra/repaymentSchedule`
  FETCH_PRODUCT_DETAILS=`/api-v3/loanProducts/details`;
  UPDATE_LOAN_APPLICATION=`api/v1/borrower/updateLoanApplication`;
  SUBMIT_FEEDBACK=`api-v3/loanApplication/submitFeedback`
  LOAN_WITHOUT_BORROWER = '/api-v3/loanApplication/loanDetailsWithoutBorrowerDetails';
  SUPPORTING_DOC = '/api-v3/supportingDocument/showAllRequiredDocuments';
  MICROSERVICE_URL = 'api/v1/restPerfiosApi/callPerfiosMicroservice';
  UPLOAD_DOCUMENT = 'api/v1/restPerfiosApi/uploadScannedDocuments';
  COMPLETE_TRANSACTION = 'api/v1/restPerfiosApi/completeScannedBankStatementTransaction';
  INTIATATE_PAY_SLIP = 'api/v1/restPerfiosApi/initiateSalarySlipStatementVerification';
  DOCUMENT_LIST = 'api-v3/supportingDocument/documentList';
  DELETE_DOCUMENT = 'api/v1/loanApplication/deleteSupportingDocument';
  FETCH_CIBIL = `/businessRules/minimumCheckParameter`;
  CONSENT_LIST = `api-v3/consent/list`;
  CONSENT_CREATE =`api/v2/consent/create`;
  BASE_ENCRYPT_CONFIG_URL=`assets/configuration/encrypt-configuration/`;
  BASE_PRODUCT_CONFIG_URL=`assets/configuration/product-configurations/`;
  PRODUCTLIST_FOR_SPECIFICGROUP=`api/v2/loanProducts/productListForSpecificGroup`;
  PURPOSE_OF_LOAN=`api/v2/assetDetails/fetchPurposeOfAdvance`;
  PINCODE_LIST = 'api-v3/config/pincodes'
  UPLOAD_DOCUMENT_FILE=`api-v3/borrower/uploadDocument`;
  BORROWER_DETAIL=`api/v1/borrower/borrowerDetail`;
  PAN_VERIFICATION_V2=`api/v1/perfiosServices/fetchPanProfileDetails`;
  EMPLOYER_SEARCH=`/perfiosServices/v2/employerSearchByName`;
  CBS_DEDUPE=`finacle/iso/dedupeCheck`;
  ELIGILBITY_DETAILS=`businessRules/fetchEligibilityDtls `;
  STP_CHECK = `/businessRules/stpCheck`;
  NPA_CHECK = `finacle/npaCheck`;
  BANK_DETAIL=`api/v1/bankDetails/show`;
  DOWNLOAD_SESSION = `/api/v1/borrower/createSessionId`;
  DEALER_MASTER=`/api/v2/vehicleOwned/filterDealerMaster`
  VEHICLE_MODEL=`/api/v2/vehicleOwned/fetchVehicleModelByManufacturerID`
  VEHICLE_VARIANT=`/api/v2/vehicleOwned/fetchVehicleVariantByModelID`
 MANUFACTURER_MASTER =`/api/v2/vehicleOwned/filterManufacturerMasterByVehicleType`;
 RETRIEVE=`/api/v1/representative/retrieve`;
 FETCH_FACILITY_TYPE = "api-v3/multiFacility/fetchFacilities";
 CREATE_FACILITY = "/api/v1/multiFacility/create";
 UPDATE_FACILITY = "/api-v3/multiFacility/update";
 FACILITY_DETAILS_LIST = "/api-v3/multiFacility/retrieve";
 RATING_SCORE_VL = "/businessRules/fetchRatingScore";
 GST_SEARCH_BY_PAN= `/api/v1/perfiosServices/gstSearchByPan`;
 GST_STATUS=`/api/v1/restPerfiosApi/gstVerificationStatusApi`
 SECURITY_DETAILS = "api/v2/businessPatner/createPersonalLoanSecurityDetails";
  ELIGIBLE_LOAN_PROGRAM = 'api/v1/borrower/fetchAllEligibleLoanPrograms';
  FETCH_EXISTING_CCDETAILS = "/api/v2/businessPatner/fetchExistingCreditCardDetails";
  FETCH_FD_DETAILS = 'finacle/fdDetails';
  FETCH_FD_ACCOUNTS = '/api/v1/loanApplication/fetchFDAccounts';
  ADD_CARD_DETAILS = "/api/v1/loanApplication/CreateOrUpdateAddOnCardDetails";
  FETCH_CARD_DETAILS = "/api/v1/loanApplication/fetchAddOnCardDetails";
  UPDATE_NAME_ON_CARD = 'api/v2/businessPatner/createOrUpdateExistingCreditCardDetails';
  FETCH_ATOS_CARD_DETAILS = `api/v2/businessPatner/fetchAtosCardDetails`;
  SAVE_CAMPAIGN = `/api-v3/loanApplication/saveCampaignManagement`;
  DUPLICATE_APPLICATION_CHECK = `/api-v3/loanApplication/checkDuplicateLoanApplication`;
  BRANCH_STATE_MASTER = `/api-v3/restPublic/master-branch-list-new`;
  GET_CARDS =`/creditCard/getCards`
  PROFILE_UPDATE =`api/v1/borrower/personalProfileUpdate`
  VERIFY_PAN_V3 = `nsdlPanValidationService/nsdlPanValidation/check`;

  generateMobileOtp(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_MOBILE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
    })
  }

  generateEmailOtp(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_EMAIL, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
    })
  }
  
  generateAadharOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_AADHAR, encrypted.body, undefined, undefined, this.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_MOBILE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
    })
  }

  verifyEmailOtp(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_EMAIL, encrypted.body, undefined, undefined, this.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_AADHAR, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchLoanProducts(){
    let body = {};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.LOANPRODUCT_LIST,encrypted.body,this.isEncryption?{
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
  })
  }

  applyLoan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_APPLY, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationTrackingStatus(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_LOAN_APPLICATION_TRACKING_STATUS, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  verifyPanNumber(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_PAN, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  nameMatch(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH, encrypted.body, undefined, undefined, this.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NAME_MATCH_v2, encrypted.body, undefined, undefined, this.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.PERSONAL_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  employmentProfileUpdate(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.EMPLOYMENT_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  
  }
  fetchBranchList() {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.MASTERDATA_BRANCH, encrypted.body,this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined);
  }
  assignUserHierarchy(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ASSIGN_USER_HIERARCHY, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchCommonProperty(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.COMMONPROPERTY_FETCH,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
    })

  }

  nomineeShow(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NOMINEE_LIST, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  showVas(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SHOW_VAS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  showBorrowerDetails(params) {
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

  updateLoanProgram(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_LOAN_PROGRAM, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  updateMainLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_MAIN_STATUS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  verifyUdyam(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UDYAM_VERIFICAION, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  private encryptFormBodyData(body) {
    let temp_body;
    let obj = {};

    if (this.isEncryption) {
      temp_body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
      if (body.updates && body.updates.length != 0) {
        body.updates.map((data) => {
          if (data.param == "access_token") {
            temp_body = temp_body.set(data.param, data.value);
          } else {
            obj[data.param] = data.value;
          }
        });
      }
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      //encrypt object
      let key = CryptoJS.enc.Latin1.parse(
        this.environmentService.config?.appConfig.clientApiKey
      );
      let iv = CryptoJS.enc.Latin1.parse(
       plainiv
      );
      let encrypted = this.encrypt.encrypt(key, iv, JSON.stringify(obj));
      temp_body = temp_body.set("encryptedRequestData", encrypted);
      return {body:temp_body,plainiv};
    } else {
      return {body};
    }
  }
  private encryptFormBodyData_JSON(body) {
    let obj = {};
    let temp_body = {};
    if (this.isEncryption) {
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key = CryptoJS.enc.Latin1.parse(
        this.environmentService.config?.appConfig.clientApiKey
      );
      let iv = CryptoJS.enc.Latin1.parse(
        plainiv
      );
      let encrypted = this.encrypt.encrypt(key, iv, JSON.stringify(body));
      temp_body["encryptedRequestData"] = encrypted.toString();
      return {body:temp_body,plainiv};
    } else {
      return {body};
    }
  }

  decryptFormString(decryptedText) {
    const key = CryptoJS.enc.Latin1.parse(
      appConfiguration.appConfig.clientApiKey
    );
    const iv = CryptoJS.enc.Latin1.parse(
      appConfiguration.appConfig.clientApiKey
    );
    const decryptStr = this.encrypt.decrypt(key, iv, decryptedText);
    return decryptStr.toString(CryptoJS.enc.Utf8);
  }
  
  fetchAccountData(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_ACCOUNT_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv,
              'Authorization':`Bearer ${params.microservicetoken}`,
    }:{
      'Content-Type': 'application/json',
              'Authorization':`Bearer ${params.microservicetoken}`,
    })
  }
  verifyAccNum(params) {
    let body = {};
    for (const prop in params) {
        body[prop] = params[prop]
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_ACCOUNT_NUM, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
    })
  }

  fetchLoanDetails(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.LOAN_WITHOUT_BORROWER, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  
  borrowerDetails(params) {
    return this.fetchLoanDetails(params);
  }
    

  fetchSelfEmploymentDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.SELF_EMPLOYMENT_DETAILS,encrypted.body,this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchPrincipalApprovedDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRINCIPAL_APPROVED_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  getSupportingDoc(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.SUPPORTING_DOC, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  EmployeeInfoProfileUpdate(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.BORROWER_PROFILE_UPDATE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  
  updateborrowerEmploymentDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  
  fetchProductDetail(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_PRODUCT_DETAILS, encrypted.body, this.isEncryption?{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  updateLoanApplication(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchRepaymentSchedule(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_REPAYMENT_SCHEDULE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitFeedback(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SUBMIT_FEEDBACK, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  callMicroservice(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.MICROSERVICE_URL, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  uploadDocument(params,_url?) {
    let form = new FormData();
    for(const property in params) {
        if(property!='document'){
            form.append(property, params[property]);
        }
    }
    form.append("document", params.document, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL_MICROSERVICE+this.UPLOAD_DOCUMENT_FILE, form, undefined, undefined, {
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  completeTransact(params,url){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + url, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  initiatePaySlip(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INTIATATE_PAY_SLIP, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  getUploadedDoc(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.DOCUMENT_LIST, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  deleteDoc(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DELETE_DOCUMENT, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  verifyGst(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_GST, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchCibilData(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_CIBIL, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitFacilityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_FACILITY, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateFacilityDetails(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_FACILITY, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  facilityDetailsList(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_FACILITY_TYPE, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitSecurityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    if (this.isEncryption) {
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
    } else {
      if (params.microservicetoken) {
        config = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${params.microservicetoken}`
        }
      } else {
        config = {
          'Content-Type': 'application/json',
        }
      }
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CONSENT_LIST, encrypted.body, undefined, undefined, config)

  }

  createConsent(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CONSENT_CREATE, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  private  isEncryptedData(plainiv) {
    return this.isEncryption
      ? {...this.commonVariableService.encryptionHeaders,clientapikey:plainiv}
      : undefined;
  }

  genericPostApiFetch(params) {
    let body;
    if (params["microservicetoken"]) {
      body = this.prepareBody(params);
      let encrypted = this.encryptFormBodyData_JSON(body);
      const headers = this.getAuthorizationHeader(params,encrypted.plainiv);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + params.url,
        body,
        undefined,
        undefined,
        headers
      );
    } else {
      body = this.prepareHttpBody(params);
      let encrypted = this.encryptFormBodyData(body);
      const headers = this.isEncryptedData(encrypted.plainiv);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL + params.url,
        body,
        undefined,
        undefined,
        headers
      );
    }
  }

  private prepareBody(params) {
    let body = {};
    for (const prop in params) {
      if (prop === "url" || prop === "microservicetoken") continue;
      body[prop] = params[prop];
    }
    return body;
  }

  private getAuthorizationHeader(params,plainiv) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.microservicetoken}`,
      clientApiKey:plainiv,
    };
  }

  private prepareHttpBody(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      if (prop === "url" || prop === "microservicetoken") continue;
      body = body.set(prop, params[prop]);
    }
    return body;
  }

  getProductStaticConfig(params){
    let url;
    if(this.commonVariableService.tenentConfiguration['encrypt-configuration']){
      url = this.BASE_ENCRYPT_CONFIG_URL;
    }else{
      url = this.BASE_PRODUCT_CONFIG_URL
    }
    return this.commonApiService.doGetApiCall(url + params.url ,{})

  }

  apiEndpointCall(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      if(prop!="url"){
        body = body.set(prop,params[prop])
      }
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + params['url'], encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getProductListForProductGroup(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PRODUCTLIST_FOR_SPECIFICGROUP, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getPurposeOfLoan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PURPOSE_OF_LOAN, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  fetchBorrowerDetails(params){
    return this.showBorrowerDetails(params);
  }
  downloadContract(params,skipSessionCall?,scope?){
    if(skipSessionCall){
      let url = scope.BASE_URL+scope.DOWNLOAD_CONTRACT
      url = `${url}?`
      for(let pr in params){
        url = url+`${pr}=${params[pr]}&`
      }
      window.open(url,"_blank")
    }else{
      this.createDownloadSession(params,this.downloadContract)
    }
  }

  createDownloadSession(params,callback){
    let p  ={
      access_token:params.access_token,
      applicationSource:'WEB_JOURNEY',
    }
    this.downloadSession(p).then((res:any)=>{
      if(res.code=='200'){
        // params.access_token=res.sessionId
        callback(params,true,this)
      }
    })
  }

  downloadSession(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DOWNLOAD_SESSION, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined);
  }

  panVerification_v2(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+this.PAN_VERIFICATION_V2, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  employerSearch(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.EMPLOYER_SEARCH, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    } : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  feedbackSubmit(params){
    return this.submitFeedback(params);
  }

  cbsDedupe(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CBS_DEDUPE, encrypted.body, undefined, undefined, this.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }
  getPincodeList(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.PINCODE_LIST,encrypted.body, this.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json'
    })
  }


  fetchEligilibilityDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.ELIGILBITY_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  loanWithOutBorrowerDetails(params){
    return this.fetchLoanDetails(params);
  }

  stpCheck(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.STP_CHECK, encrypted.body, undefined, undefined, this.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }

  npaCheck(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NPA_CHECK, encrypted.body, undefined, undefined, this.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }

  fetchBankDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BANK_DETAIL, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  retrieve(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.RETRIEVE, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchRatingScore(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.RATING_SCORE_VL, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  gstSearchByPan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GST_SEARCH_BY_PAN, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  /**Fetch FD Details for Credit Card Journey*/
  fetchFDDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_FD_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  /**Fetch Credit Card Details for Credit Card Journey*/
  fetchCreditCardData(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ELIGIBLE_LOAN_PROGRAM, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  /* Fetch Existing Credit Card Details for Credit Card Journey*/
  fetchExistingCCData(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
     let encrypted = this.encryptFormBodyData(body);
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.FETCH_EXISTING_CCDETAILS, encrypted.body, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined);
  }

  /**Fetch FD Accounts for Credit Card Journey */
  fetchFDAccountsData(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
     let encrypted = this.encryptFormBodyData(body);
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.FETCH_FD_ACCOUNTS, encrypted.body, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined);
  }

  /**Fetch General Account Response for Credit Card Journey*/
  fetchGeneralAccountResponse(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_ACCOUNT_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  /**Add on Cards for Credit Card Journey */
  CreateOrUpdateAddOnCardDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ADD_CARD_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  /**Fetch Add On Card Details for Preview Journey Screen */
  fetchAddOnCardDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_CARD_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  /**Update Name of Card for Credit Card Journey */
  updateNameOnCard(params): Promise<any> {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_NAME_ON_CARD, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  /**Fetch Credit Card Details for Congratulations Page */
  fetchAtosCardDetails(params): Promise<any> {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_ATOS_CARD_DETAILS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callJsonValidationPost(params, url) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + url,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  private getBodyParams(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop]);
    }
    return this.encryptFormBodyData(body);
  }

  saveCampaign(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }

    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.SAVE_CAMPAIGN, encrypted.body, undefined, undefined, this.isEncryption?{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
    })
  }

  callApiEndpointFromLogic(endpointData){
    if(endpointData.apiType == 'MICRO_SERVICE'){
     return this.callMicroserviceEnpointFromObject(endpointData)
    }else{
      return this.callPlatformEndpointFromObject(endpointData)
    }
  }
  callPlatformEndpointFromObject(endPointData){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in endPointData.params){
      body = body.set(prop,endPointData.params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    if(endPointData.RequestType=='GET'){
      return this.commonApiService.doGetApiCall(this.BASE_URL + endPointData.url,encrypted.body, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL + endPointData.url,encrypted.body,undefined,undefined,this.isEncryption?{...this.commonVariableService.encryptionHeaders,clientapikey:encrypted.plainiv}:undefined)
  }

  callMicroserviceEnpointFromObject(endPointData){
    let body = {}
      for(const prop in endPointData.params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=endPointData.params[prop]
          }
        }
      }
       let encrypted  = this.encryptFormBodyData_JSON(body)
      if(endPointData.RequestType=='GET'){
        return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+endPointData.url,encrypted.body,this.isEncryption?{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
          'clientApiKey':encrypted.plainiv
        }:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`
        })
      }
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+endPointData.url,encrypted.body,undefined,undefined,this.isEncryption?{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
      })
  }

  duplicateApplicationCheck(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
     let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.DUPLICATE_APPLICATION_CHECK,encrypted.body,this.isEncryption?{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.BRANCH_STATE_MASTER, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  gstStatusCheck(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GST_STATUS, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  getCards(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.GET_CARDS, encrypted.body, undefined, undefined, this.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  profileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PROFILE_UPDATE, encrypted.body, undefined, undefined, this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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
