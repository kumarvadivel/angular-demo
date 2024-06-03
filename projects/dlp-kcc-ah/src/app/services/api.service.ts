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
  VERIFY_MOBILE_MICROSERVICE = 'api-v3/restApi/validateOtpOfPhoneAndReturnAccessToken'
  VERIFY_MOBILE = `restApi/validateOtpOfPhoneAndReturnAccessToken`;
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`;
  VERIFY_AADHAR = `api-v3/admin/validateAadharOtpForRegisteredMobile`;
  VERIFY_GST = `api-v3/restPerfiosApi/gstVerification`;
  LOANPRODUCT_LIST = `api-v3/loanProducts/introductionList`;
  LOAN_APPLY  = `api/v1/loanApplication/apply`;
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
  UPDATE_LOAN_APPLICATION_TRACKING_STATUS = `api-v3/track/update`;
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`;
  PERSONAL_DETAILS_UPDATE = `api-v3/borrower/personalProfileUpdate`;
  NAME_MATCH = `perfios/name/match`;
  NAME_MATCH_v2=`api-v3/loanApplication/checkPanAadharName`;
  MASTERDATA_BRANCH='api-v3/restPublic/master-branch-list';
  ASSIGN_USER_HIERARCHY=`api-v3/loanApplication/assignUserHierarchyUnit`;
  FETCH_CROP_DETAILS='api-v3/businessPatner/fetchCropDetails'
  FETCH_LAND_DETAILS='api/v2/businessPatner/fetchLandHoldingDetails'
  COMMONPROPERTY_FETCH = `api-v3/config/commonPropertySuggest`;
  EMPLOYMENT_DETAILS_UPDATE = `api-v3/borrower/employmentProfileUpdate`;
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`;
  BORROWER_DETAILS=`api-v3/borrower/borrowerDetail`;
  BORROWER_PROFILE_UPDATE='api/v1/borrower/profileUpdate';
  UPDATE_BORROWER_SELFT_EMPLOYEMENT ='api-v3/loanApplication/updateBorrowerSelfEmploymentDetail'
  VERIFY_ACCOUNT_NUM = 'api-v3/restApi/fetchMaskedData';
  FETCH_ACCOUNT_DETAILS=`/finacle/fetchGeneralAccountResponse`;
  UDYAM_VERIFICAION=`/api-v3/entityVerification/initiateUdhyamVerification`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`;
  FETCH_PRODUCT_DETAILS=`/api/v2/loanProducts/details`;
  UPDATE_LOAN_APPLICATION=`api/v1/borrower/updateLoanApplication`;
  SUPPORTING_DOC = '/api-v3/supportingDocument/showAllRequiredDocuments';
  MICROSERVICE_URL = 'api/v1/restPerfiosApi/callPerfiosMicroservice';
  DOCUMENT_LIST = 'api-v3/supportingDocument/documentList';
  CREATE_CROP_DETAIL=`api/v2/businessPatner/createOrUpdateCropDetails`
  CREATE_LAND_DETAIL=`api/v2/businessPatner/createOrUpdateLandHoldingDetail`
  CONSENT_LIST = `api-v3/consent/list`;
  CONSENT_CREATE =`api/v2/consent/create`;
  BASE_ENCRYPT_CONFIG_URL=`assets/configuration/encrypt-configuration/`;
  BASE_PRODUCT_CONFIG_URL=`assets/configuration/product-configurations/`;
  DELETE_LAND_HOLDING_DETAIL=`api/v2/businessPatner/deleteLandHoldingDetail`;
  DELETE_CROP_DETAIL=`api/v2/businessPatner/deleteCropDetails`
  CROP_LIST=`api-v3/config/fetchCropDetailsList`;
  PINCODE_LIST = 'api-v3/config/pincodes'
  UPLOAD_DOCUMENT_FILE=`api/v1/borrower/uploadDocument`;
  PAN_VERIFICATION_V2=`api/v1/perfiosServices/fetchPanProfileDetails`;
  EMPLOYER_SEARCH=`/perfiosServices/v2/employerSearchByName`;
  BUISNESS_RULE_CHECK = `businessRules/minimumCheckParameter `;
  CBS_DEDUPE=`finacle/iso/dedupeCheck`;
  ELIGILBITY_DETAILS=`businessRules/fetchEligibilityDtls `;
  LOAN_WITHOUT_BORROWER_DETAILS=`api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`;
  STP_CHECK = `/businessRules/stpCheck`;
  NPA_CHECK = `/finacle/npaCheck`;
  BANK_DETAIL=`api/v1/bankDetails/show`;
 FETCH_FACILITY_TYPE = "api-v3/multiFacility/fetchFacilities";
 UPDATE_FACILITY = "/api/v1/multiFacility/update";
 RATING_SCORE_VL = "/businessRules/fetchRatingScore";
 GST_SEARCH_BY_PAN= `/api/v1/perfiosServices/gstSearchByPan`;
 SECURITY_DETAILS = "api/v2/businessPatner/createPersonalLoanSecurityDetails";
 SECURITY_DETAILS_UPDATE = "api/v2/businessPatner/updatePersonalLoanSecurityDetails";
 SECURITY_DETAILS_DELETE = "api/v2/businessPatner/deletePersonalLoanSecurityDetail";
 LAND_MASTERS = 'landRecords/masters/';
 CHECK_LAND_RECORD="landRecords/checkLandRecord";
 SAVE_CAMPAIGN = `/api-v3/loanApplication/saveCampaignManagement` 
 BRANCH_STATE_MASTER = `/api-v3/restPublic/master-branch-list-new`;
 DUPLICATE_APPLICATION_CHECK = `/api-v3/loanApplication/checkDuplicateLoanApplication`;
 FETCH_KCC_ASSESMENT = `api/v2/businessPatner/fetchKCCAssessmentParameters`;
 CREATE_OR_UPDATE_KCC_ASSESMENT =`api/v2/businessPatner/createOrUpdateKCCAssessmentParameters`
 UPDATE_SANCTION_DETAILS = `api/v1/loanApplication/updateLoanSanction`;
 INITIATE_ESIGN=`api/v1/esign/initiateSignRequest`;
 ACCEPT_CONTRACT = `api-v3/borrower/acceptContract`;
 FETCH_CONTRACT_TO_ACCEPT=`api/v1/borrower/fetchContractListToAccept`;
 ESIGN_FETCH_STATUS = `api/v1/esign/fetchESigningStatus`;
 VERIFY_PAN_V3 = `nsdlPanValidationService/nsdlPanValidation/check`;
 COMPANY_DETAILS_UPDATE = `api-v3/borrower/companyProfileUpdate`;

  generateMobileOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_MOBILE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_EMAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_AADHAR, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchLandMasters(url,params){ 
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.LAND_MASTERS + url, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
   }
   checkLandRecord(params){ 
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.CHECK_LAND_RECORD, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
   }
  verifyMobileOtp(params,callMicroservice=true){ 
    if(callMicroservice){
      let body = {};
      for(const prop in params){
        if(prop!='microservicetoken'){
          body[prop] = params[prop]
        }
      }
      let encrypted  = this.encryptFormBodyData_JSON(body) 
      let headersObj = {
        'Content-Type':'application/json',
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
      }
  
      if (params.microservicetoken){ 
          headersObj['Authorization']=`Bearer ${params.microservicetoken}`;
      }
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_MOBILE_MICROSERVICE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
      })
    }else{
   let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
    body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+ this.VERIFY_MOBILE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    }
   
 
}

  verifyEmailOtp(params){
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
  
  verifyAadharOtp(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_AADHAR, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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

  fetchLoanProducts(){
    let body = {};
  let encrypted = this.encryptFormBodyData_JSON(body)

    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.LOANPRODUCT_LIST,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json'
    }
  )
  }

  applyLoan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_APPLY, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationTrackingStatus(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_LOAN_APPLICATION_TRACKING_STATUS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_PAN, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  nameMatch_v2(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NAME_MATCH_v2, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.PERSONAL_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.EMPLOYMENT_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchBranchList(){
    let body = {}
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.MASTERDATA_BRANCH,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ASSIGN_USER_HIERARCHY, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
      'Content-Type':'application/json'
    })
  }

  showBorrowerDetails(params){
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

  updateMainLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_MAIN_STATUS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  verifyUdyam(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UDYAM_VERIFICAION, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  encryptFormBodyData(body){
    let temp_body
    let obj={}
    
    if(this.environmentService.config?.appConfig.isEncryption===true){
      temp_body= new HttpParams({ encoder: new CustomHttpParamEncoder() })
      if(body.updates && body.updates.length!=0){
        body.updates.map(data=>{
          if(data.param=='access_token'){
            temp_body = temp_body.set(data.param,data.value)
          }else{
            obj[data.param] = data.value
          }
        })
      }
      //encrypt object
      let plainiv = `${this.environmentService.config?.appConfig?.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key  = CryptoJS.enc.Latin1.parse(this.environmentService.config?.appConfig.clientApiKey);
      let iv   = CryptoJS.enc.Latin1.parse(plainiv);  
      let encrypted = this.encrypt.encrypt(key,iv,JSON.stringify(obj))
      temp_body = temp_body.set('encryptedRequestData',encrypted)
      return {body:temp_body,plainiv}
    }else{
      return {body}
    }
  }
  encryptFormBodyData_JSON(body){
    let obj={}
    let temp_body={}
    if(this.environmentService.config?.appConfig.isEncryption===true){
      let plainiv = `${this.environmentService.config?.appConfig?.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key  = CryptoJS.enc.Latin1.parse(this.environmentService.config?.appConfig.clientApiKey);
      let iv   = CryptoJS.enc.Latin1.parse(plainiv);  
      let encrypted = this.encrypt.encrypt(key,iv,JSON.stringify(body))
      temp_body['encryptedRequestData']=encrypted.toString()
      return {body:temp_body,plainiv}
    }else{
      return {body}
    }
  }

  decryptFormString(decryptedText){
    let key  = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
    let iv   = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);  
    let decryptStr = this.encrypt.decrypt(key,iv,decryptedText)
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_ACCOUNT_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
        body[prop] = params[prop]
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_ACCOUNT_NUM, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
    })
  }
  fetchLoanDetails(params){

    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LOAN_WITHOUT_BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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

  fetchPrincipalApprovedDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRINCIPAL_APPROVED_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  getSupportingDoc(params) {
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SUPPORTING_DOC, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
    }

  EmployeeInfoProfileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_PROFILE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  updateborrowerEmploymentDetails(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  
  fetchProductDetail(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
      }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.FETCH_PRODUCT_DETAILS,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
  }

  updateLoanApplication(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callMicroservice(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.MICROSERVICE_URL, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  
  deleteLandHolding(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.DELETE_LAND_HOLDING_DETAIL,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
  }
  deleteCropHolding(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.DELETE_CROP_DETAIL,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
  }
  
  uploadDocument(params, url) {
    let form = new FormData();
    for (const property in params) {
      if (property != 'document') {
        form.append(property, params[property]);
      }
    }
    form.append("document", params.document, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL + url, form, undefined, this.environmentService.configData.appConfig.isEncryption ? this.commonVariableService.encryptionHeaders : undefined)
  }

  completeTransact(params,url){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + url, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  getUploadedDoc(params) {
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.DOCUMENT_LIST, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BUISNESS_RULE_CHECK, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  createLandDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_LAND_DETAIL, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  createCropDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_CROP_DETAIL, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }
  
  fetchCropDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_CROP_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })

  }

  fetchLandHoldingDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.FETCH_LAND_DETAILS,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
  }

  getFacilityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_FACILITY_TYPE,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
  }

  updateFacilityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_FACILITY,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined      )
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
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_FACILITY_TYPE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateSecurityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  deleteSecurityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS_DELETE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CONSENT_CREATE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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

  getProductStaticConfig(params){
    let url;
    if(this.commonVariableService.tenentConfiguration['encrypt-configuration']===true){
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + params['url'], encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getCropList(params){

    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CROP_LIST, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })


  }
  
  uploadDocumentFile(params){
    let form =new FormData();
    for(const prop in params){
        form.append(prop,params[prop])
    }
    const blobObj = new Blob([], { type: 'multipart/form-data' });
    form.append('document', blobObj, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL+this.UPLOAD_DOCUMENT_FILE,form)
  }

  fetchBorrowerDetails(params){
    return this.showBorrowerDetails(params);
  }

  panVerification_v2(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+this.PAN_VERIFICATION_V2, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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
     let encrypted = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.EMPLOYER_SEARCH, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }

  cibilCheck(params){
    return this.fetchCibilData(params);
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
     let encrypted = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CBS_DEDUPE, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.PINCODE_LIST,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
    })
  }

  fetchEligibilityDtls(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.ELIGILBITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  loanWithOutBorrowerDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LOAN_WITHOUT_BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
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
     let encrypted = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.STP_CHECK, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
     let encrypted = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NPA_CHECK, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }

  cibilfetch(params){
    return this.fetchCibilData(params);
  }
 
   

  fetchBankDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BANK_DETAIL, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callJsonValidationPost(params,url){
    return this.completeTransact(params,url);  
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
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.RATING_SCORE_VL, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GST_SEARCH_BY_PAN, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
  let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SAVE_CAMPAIGN,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
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
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.DUPLICATE_APPLICATION_CHECK,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
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
      return this.commonApiService.doGetApiCall(this.BASE_URL + endPointData.url,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
        )
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL + endPointData.url,  encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
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
      let encrypted = this.encryptFormBodyData_JSON(body)
      if(endPointData.RequestType=='GET'){
        return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+endPointData.url,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
          'clientApiKey':encrypted.plainiv
        }:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`
        })
      }
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+endPointData.url,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`
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
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.BRANCH_STATE_MASTER, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  updateLoanSanction(params){
    return this.saveCampaign(params);
  }
  fetchKccAssesment(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_KCC_ASSESMENT, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }
  
  updateKccAssesment(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_OR_UPDATE_KCC_ASSESMENT, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }
  initiateEsign(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INITIATE_ESIGN, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_CONTRACT_TO_ACCEPT, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  esignFetchStatus(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ESIGN_FETCH_STATUS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  sanctionUpdate(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_SANCTION_DETAILS, encrypted.body, undefined, undefined, this.environmentService.config?.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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

}
