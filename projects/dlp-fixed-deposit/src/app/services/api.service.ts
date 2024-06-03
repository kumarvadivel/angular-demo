import { HttpParams } from '@angular/common/http';
import { CustomHttpParamEncoder } from '../shared/helpers/customHttpEncoder'
import { Injectable } from '@angular/core'; 
import { Encrypt } from '../shared/helpers/Encrypt';
import appConfiguration from '@fd-app/app.config.json'
import { CommonApiService } from './common-api.service';
import { CommonVariableService } from './common-variable-service';
import { EnvironmentService } from '@fd-environments/environment.service';
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
  VERIFY_MOBILE =  `restApi/validateOtpOfPhoneAndReturnAccessToken`;
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`;
  VERIFY_AADHAR = `api-v3/admin/validateAadharOtpForRegisteredMobile`;
  VERIFY_GST = 'api-v3/restPerfiosApi/gstVerification'  
  LOANPRODUCT_LIST = `api-v3/loanProducts/introductionList`;
  LOAN_APPLY  = `api/v1/loanApplication/apply`;
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
  UPDATE_LOAN_APPLICATION_TRACKING_STATUS = `api-v3/track/update`;
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`;
  PERSONAL_DETAILS_UPDATE = `api-v3/borrower/personalProfileUpdate`;
  NAME_MATCH = `perfios/name/match`;
  NAME_MATCH_v2=`api-v3/loanApplication/checkPanAadharName`;
  MASTERDATA_BRANCH= 'api-v3/restPublic/master-branch-list'  
  ASSIGN_USER_HIERARCHY= '/api-v3/loanApplication/assignUserHierarchyUnit'  
  FETCH_USER_HIERARCHY = '/api-v3/loanApplication/fetchStructuredUserHierarchyUnitDetails'    
  COMMONPROPERTY_FETCH = `api-v3/config/commonPropertySuggest`;
  EMPLOYMENT_DETAILS_UPDATE = `api-v3/borrower/employmentProfileUpdate`;
  NOMINEE_CREATE = `/api-v3/nominee/create`;
  NOMINEE_UPDATE = 'api-v3/nominee/update';
  NOMINEE_LIST = `api-v3/nominee/list`
  LOAN_PROGRAM_LIST = `businessRules/programSelection`;
  SUBMIT_VAS=`/api/v2/vas/create`;
  SHOW_VAS = `/api/v2/vas/show`;
  UPDATE_LOAN_PROGRAM=`/api-v3/borrower/updateProgramInLoanApplication`;
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`;
  BORROWER_DETAILS=`api-v3/borrower/borrowerDetail`;
  BORROWER_PROFILE_UPDATE='/api-v3/borrower/profileUpdate'  
  UPDATE_BORROWER_SELFT_EMPLOYEMENT ='api-v3/loanApplication/updateBorrowerSelfEmploymentDetail'
  FETCH_CONTRACTS = `api/v1/borrower/fetchContractListToAccept`;
  DOWNLOAD_CONTRACT=`api/v2/contract/downloadContract`
  ACCEPT_CONTRACT = `api-v3/borrower/acceptContract`;
  VERIFY_ACCOUNT_NUM = 'api-v3/restApi/fetchMaskedData';
  FETCH_ACCOUNT_DETAILS=`/finacle/fetchGeneralAccountResponse`;
  UDYAM_VERIFICAION=`/api-v3/entityVerification/initiateUdhyamVerification`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`;
  UPDATE_LOAN_APPLICATION=`api/v1/borrower/updateLoanApplication`;
  SUBMIT_FEEDBACK=`api-v3/loanApplication/submitFeedback` 
  SUPPORTING_DOC = '/api-v3/supportingDocument/showAllRequiredDocuments'  
  MICROSERVICE_URL = 'api/v1/restPerfiosApi/callPerfiosMicroservice';
  CONSENT_LIST = `api-v3/consent/list`;
  CONSENT_CREATE =`api/v2/consent/create`;
  BASE_ENCRYPT_CONFIG_URL=`assets/configuration/encrypt-configuration/`;
  BASE_PRODUCT_CONFIG_URL=`assets/configuration/product-configurations/`;
  UPDATE_COMPANY_DETAILS=`api-v3/borrower/stepTwoCompany`;
  PRODUCTLIST_FOR_SPECIFICGROUP=`api/v2/loanProducts/productListForSpecificGroup`;
  PURPOSE_OF_LOAN=`api/v2/assetDetails/fetchPurposeOfAdvance`;
  PINCODE_LIST = 'api-v3/config/pincodes'   
  UPLOAD_DOCUMENT_FILE=`api-v3/borrower/uploadDocument`;
  UPLOAD_DOCUMENT_V3='api-v3/supportingDocument/uploadDocument';
  FETCH_CONTRACT_TO_ACCEPT=`api/v1/borrower/fetchContractListToAccept`;
  PAN_VERIFICATION_V2=`api/v1/perfiosServices/fetchPanProfileDetails`;
  EMPLOYER_SEARCH=`/perfiosServices/v2/employerSearchByName`;
  CBS_DEDUPE=`finacle/iso/dedupeCheck`;
  LOAN_WITHOUT_BORROWER_DETAILS=`api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`;
  NPA_CHECK = `/finacle/npaCheck`;
  BANK_DETAIL=`api/v1/bankDetails/show`;
  DOWNLOAD_SESSION = `/api/v1/borrower/createSessionId`;
 RATING_SCORE_VL = "/businessRules/fetchRatingScore";
 GST_SEARCH_BY_PAN= `/api/v1/perfiosServices/gstSearchByPan`;
 VKYC_GENERATE_LINK = "api/vkyc/generateLink";
 SAVE_CAMPAIGN = `/api-v3/loanApplication/saveCampaignManagement`;
 DUPLICATE_APPLICATION_CHECK = `/api-v3/loanApplication/checkDuplicateLoanApplication`;
 BRANCH_STATE_MASTER =`/api-v3/restPublic/master-branch-list-new`;
 DOCUMENT_LIST = 'api-v3/supportingDocument/documentList';
 REMOVE_DOCUMENT = 'api-v3/loanApplication/deleteSupportingDocument';
 VERIFY_PAN_V3 = `nsdlPanValidationService/nsdlPanValidation/check`;

  generateMobileOtp(params){
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_AADHAR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
      let encrypted = this.encryptFormBodyData_JSON(body) 
      let headersObj = this.environmentService.configData.appConfig.isEncryption ?{
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json'
      }
  
      if (params.microservicetoken){ 
          headersObj['Authorization']=`Bearer ${params.microservicetoken}`;
      }
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_MOBILE_MICROSERVICE,encrypted.body,undefined,undefined,headersObj)
    }else{
   let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
    body = body.set(prop,params[prop])
    }
     let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+ this.VERIFY_MOBILE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_AADHAR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.LOANPRODUCT_LIST,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json'
    })
  }

  applyLoan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_APPLY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateLoanApplicationTrackingStatus(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_LOAN_APPLICATION_TRACKING_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_PAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NAME_MATCH_v2, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  
  }

  personalProfileUpdate(params){
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
  
  employmentProfileUpdate(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.EMPLOYMENT_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  fetchBranchList() {
    let body ={};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.MASTERDATA_BRANCH, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
  }
  assignUserHierarchy(params){ 
     let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.ASSIGN_USER_HIERARCHY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.COMMONPROPERTY_FETCH, body, {
      'Content-Type': 'application/json',
      'clientApiKey': this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  nomineeCreate(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NOMINEE_CREATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  nomineeUpdate(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NOMINEE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  nomineeShow(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.NOMINEE_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  fetchLoanProgramData(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LOAN_PROGRAM_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  submitVas(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SUBMIT_VAS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  showVas(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SHOW_VAS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  } 

  updateLoanProgram(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_LOAN_PROGRAM, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_MAIN_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  fetchContracts(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_CONTRACTS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  acceptContract(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ACCEPT_CONTRACT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  verifyUdyam(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UDYAM_VERIFICAION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    
    if(this.environmentService.configData.appConfig.isEncryption){
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
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      //encrypt object
      let key  = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
      let iv = CryptoJS.enc.Latin1.parse(plainiv); 
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
    if(this.environmentService.configData.appConfig.isEncryption){
      for(const param in body){
        if(param == 'access_token'){
          temp_body[param] =body[param]
        }else{
          obj[param] = body[param]
        }
      }
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key  = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
      let iv = CryptoJS.enc.Latin1.parse(plainiv); 
      let encrypted = this.encrypt.encrypt(key,iv,JSON.stringify(obj))
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
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_ACCOUNT_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_ACCOUNT_NUM, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.LOAN_WITHOUT_BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    }) 
  } 
    
  fetchPrincipalApprovedDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRINCIPAL_APPROVED_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  getSupportingDoc(params) {
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SUPPORTING_DOC, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })  
   }

  employeeInfoProfileUpdate(params){ 
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BORROWER_PROFILE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })  
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  submitFeedback(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SUBMIT_FEEDBACK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption  ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.MICROSERVICE_URL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  uploadDocument(params,url) { 
    let form = new FormData();
    for(const property in params) {
        if(property!='document'){
            form.append(property, params[property]);
        }
    } 
    form.append("document", params.document, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL + url,form)
  }


  verifyGst(params){
     let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CONSENT_CREATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  genericPostApiFetch(params) {
    let body;
    if (params['microservicetoken']) {
      body = this.prepareBody(params);
     let encrypted = this.encryptFormBodyData_JSON(body);
      const headers = this.prepareHeaders(params.microservicetoken,encrypted.plainiv);
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + params.url, encrypted.body, undefined, undefined, headers);
    } else {
      body = this.prepareHttpBody(params);
      let encrypted = this.encryptFormBodyData(body);
      const headers = this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined;
      return this.commonApiService.doPostApiCall(this.BASE_URL + params.url, encrypted.body, undefined, undefined, headers);
    }
  }
  prepareBody(params) {
    let body = {};
    for (const prop in params) {
      if (prop === 'url' || prop === 'microservicetoken') continue;
      body[prop] = params[prop];
    }
    return body;
  }

  prepareHttpBody(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      if (prop === 'url' || prop === 'microservicetoken') continue;
      body = body.set(prop, params[prop]);
    }
    return body;
  }

  prepareHeaders(microservicetoken,iv) {
    return this.environmentService.configData.appConfig.isEncryption ?{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${microservicetoken}`,
      'clientApiKey': iv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${microservicetoken}`,
    };
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

  updateCompanyDetails(params) {
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_COMPANY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  apiEndpointCall(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      if(prop!="url"){
        body = body.set(prop,params[prop])
      }
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + params['url'], encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getProductListForProductGroup(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PRODUCTLIST_FOR_SPECIFICGROUP, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  getPurposeOfLoan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PURPOSE_OF_LOAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }
  
  uploadDocumentFile(params){
    let form = new FormData();
    for(const property in params) {
        if(property!='document' && property != 'microservicetoken'){
            form.append(property, params[property]);
        }
    }
    form.append("document", params.document, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL_MICROSERVICE+this.UPLOAD_DOCUMENT_FILE, form, undefined, undefined, {
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  uploadDocumentV3(params) {
    let form =new FormData();
    for(const prop in params){
          form.append(prop,params[prop])
    }
    const blobObj = new Blob([], { type: 'multipart/form-data' });
    form.append('document', blobObj, params.document.name);

    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL_MICROSERVICE + this.UPLOAD_DOCUMENT_V3, form, undefined, undefined, {
      'Authorization': `Bearer ${params.microservicetoken}`
    })

  }

  fetchBorrowerDetails(params){
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
  
  fetchUserHierarchyDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body) 
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.FETCH_USER_HIERARCHY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DOWNLOAD_SESSION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined);
  }

  panVerification_v2(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+this.PAN_VERIFICATION_V2, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.EMPLOYER_SEARCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
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
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CBS_DEDUPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }
  getPincodeList() {
    let body = {};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE + this.PINCODE_LIST, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
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
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NPA_CHECK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BANK_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  callJsonValidationPost(params,url){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)


    return this.commonApiService.doPostApiCall(this.BASE_URL + url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.RATING_SCORE_VL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GST_SEARCH_BY_PAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  getVKYCLink(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VKYC_GENERATE_LINK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    let encrypted=this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SAVE_CAMPAIGN,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + endPointData.url,encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.BRANCH_STATE_MASTER, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
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
  removeDocument(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
   let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.REMOVE_DOCUMENT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
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
