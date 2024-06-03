import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {EnvironmentService} from '../../environments/environment.service';
import appConfiguration from '../app.config.json';
import {CustomHttpParamEncoder} from '../shared/helpers/customHttpEncoder';
import {Encrypt} from '../shared/helpers/Encrypt';
import {CommonApiService} from './common-api.service';
import {CommonVariableService} from './common-variable-service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public commonApiService:CommonApiService,
        public commonVariableService:CommonVariableService,
        public encrypt:Encrypt,
        public environmentService:EnvironmentService) { 
          
        }
    BASE_URL = this.environmentService.config?.appConfig['primaryHost'];
  BASE_URL_MICROSERVICE = this.environmentService.config?.appConfig['secondaryHost'];
  UI_BASE_URL = this.environmentService.config?.appConfig['UI_BASE_URL'];
  VERIFICATION_MOBILE = `/api-v3/restApi/generateOtpUsingPhoneForExistingAndNonExistingUser`;
  VERIFICATION_EMAIL =  `api-v3/borrower/generateOtpUsingEmailForExistingUser`
  VERIFICATION_AADHAR = `api-v3/admin/sendAadharOTPToRegisteredMobile`
  VERIFY_MOBILE = `api-v3/restApi/validateOtpOfPhoneAndReturnAccessToken`;
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`;
  VERIFY_AADHAR = `api-v3/admin/validateAadharOtpForRegisteredMobile`;
  VERIFY_GST =`api-v3/restPerfiosApi/gstVerification`
  LOANPRODUCT_LIST = `api-v3/loanProducts/introductionList`;
  LOAN_APPLY  = `api/v1/loanApplication/apply`;
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`;
  PERSONAL_DETAILS_UPDATE = `api-v3/borrower/personalProfileUpdate`;
  NAME_MATCH = `perfios/name/match`;
  NAME_MATCH_v2=`api-v3/loanApplication/checkPanAadharName`;
  NAME_MATCH_loan=`/api-v3/loanApplication/checkPanAndAadharForLoan`;
  MASTERDATA_BRANCH='api-v3/restPublic/master-branch-list';
  ASSIGN_USER_HIERARCHY=`/api-v3/loanApplication/assignUserHierarchyUnit`;
  COMMONPROPERTY_FETCH = `api-v3/config/commonPropertySuggest`;
  EMPLOYMENT_DETAILS_UPDATE = `api-v3/borrower/employmentProfileUpdate`;
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`;
  BORROWER_DETAILS=`/api/v1/loanApplication/borrowerDetail`;
  BORROWER_PROFILE_UPDATE='api/v1/borrower/profileUpdate';
  UPDATE_BORROWER_SELFT_EMPLOYEMENT ='api-v3/loanApplication/updateBorrowerSelfEmploymentDetail'
  DOWNLOAD_CONTRACT=`api/v2/contract/downloadContract`
  INITIATE_ESIGN=`api/v1/esign/initiateSignRequest`;
  ACCEPT_CONTRACT = `api-v3/borrower/acceptContract`;
  UDYAM_VERIFICAION=`/api-v3/entityVerification/initiateUdhyamVerification`;
  SELF_EMPLOYMENT_DETAILS = `api/v1/loanApplication/showBorrowerSelfEmploymentDetail`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`;
  FETCH_REPAYMENT_SCHEDULE=`finacle/mudra/repaymentSchedule`
  FETCH_PRODUCT_DETAILS=`/api-v3/loanProducts/details`;
  UPDATE_LOAN_APPLICATION=`api/v1/borrower/updateLoanApplication`;
  SUBMIT_FEEDBACK=`api-v3/loanApplication/submitFeedback`
  SUPPORTING_DOC = 'api-v3/supportingDocument/showAllRequiredDocuments';
  MICROSERVICE_URL = 'api/v1/restPerfiosApi/callPerfiosMicroservice';
  DOCUMENT_LIST = 'api-v3/supportingDocument/documentList';
  DELETE_DOCUMENT = 'api/v1/loanApplication/deleteSupportingDocument';
  CREATE_CROP_DETAIL=`api/v2/businessPatner/createOrUpdateCropDetails`
  CREATE_LAND_DETAIL=`api/v2/businessPatner/createOrUpdateLandHoldingDetail`
  CONSENT_LIST = `api-v3/consent/list`;
  CONSENT_CREATE =`api/v2/consent/create`;
  BASE_ENCRYPT_CONFIG_URL=`assets/configuration/encrypt-configuration/`;
  BASE_PRODUCT_CONFIG_URL=`assets/configuration/product-configurations/`;
  PRODUCTLIST_FOR_SPECIFICGROUP=`api/v2/loanProducts/productListForSpecificGroup`;
  PINCODE_LIST = 'api-v3/config/pincodes'
  UPLOAD_DOCUMENT_FILE=`api/v1/borrower/uploadDocument`;
  ASSIGN_PARKING_BRANCH=`api-v3/loanApplication/assignParkingBranchUserHierarchyUnit`;
  BORROWER_DETAIL=`api/v1/borrower/borrowerDetail`;
  FETCH_CONTRACT_TO_ACCEPT=`api/v1/borrower/fetchContractListToAccept`;
  PAN_VERIFICATION_V2=`api/v1/perfiosServices/fetchPanProfileDetails`;
  EMPLOYER_SEARCH=`/perfiosServices/v2/employerSearchByName`;
  BUISNESS_RULE_CHECK = `businessRules/minimumCheckParameter `;
  CBS_DEDUPE=`finacle/iso/dedupeCheck`;
  DEMOGRAPHIC_DETAILS=`finacle/fetchPersonalDetails`;
  FETCH_SALARY_ACCOUNT=`finacle/fetchSalaryAccounts`;
  UPDATE_SANCTION_DETAILS=`/api-v3/businessPatner/createOrUpdateContractsHtmlDetails`;
  ELIGILBITY_DETAILS=`businessRules/fetchEligibilityDtls `;
  LOAN_WITHOUT_BORROWER_DETAILS=`api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`;
  RATING_SCORE_PL=`businessRules/rating/personalLoan`
  UPDATE_SALARY_ACCOUNT =`finacle/updateSBSalaryAccount`
  ESIGN_FETCH_STATUS = `api/v1/esign/fetchESigningStatus`;
  INSIGHTS_CALLBACK_CHECK =`api-v3/restPerfiosApi/fetchPerfiosDocumentStatus`
  STP_CHECK = `/businessRules/stpCheck`;
  NPA_CHECK = `/finacle/npaCheck`;
  BANK_DETAIL=`api/v1/bankDetails/show`;
  DOWNLOAD_SESSION = `/api/v1/borrower/createSessionId`;
  FETCH_ELIGIBLITY_DATA=`/businessRules/fetchEligibilityData`
 RATING_SCORE_GENERIC = "/businessRules/fetchRatingScore";
 GST_SEARCH_BY_PAN= `/api/v1/perfiosServices/gstSearchByPan`;
 BORROWER_EXTRA_PROPERTY_UPDATE = `/api/v1/profile/updateExtraPropertyForBorrowerProfile`
 DUPLICATE_APPLICATION_CHECK= `/api-v3/loanApplication/checkDuplicateLoanApplication`;
 BRANCH_STATE_MASTER = `/api-v3/restPublic/master-branch-list-new`;
 SAVE_CAMPAIGN = `/api-v3/loanApplication/saveCampaignManagement`
 PREVIEW_DOCUMENT = `/api/v1/loanApplication/previewDocument`;
  generateMobileOtp(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFICATION_MOBILE,body,undefined,undefined,{
        'Content-Type':'application/json',
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })}

  generateEmailOtp(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+ this.VERIFICATION_EMAIL,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }
  
  generateAadharOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    body = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_AADHAR, body, undefined, undefined, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  verifyMobileOtp(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_MOBILE,body,undefined,undefined,{
        'Content-Type':'application/json',
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })}

  verifyEmailOtp(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_EMAIL,body,undefined,undefined,{
        'Content-Type':'application/json',
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  
  verifyAadharOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    body = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_AADHAR, body, undefined, undefined, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  fetchLoanProducts(){
    let body = {};
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.LOANPRODUCT_LIST,body,{
        'Content-Type':'application/json',
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  applyLoan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_APPLY,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  updateLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }


  verifyPanNumber(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_PAN,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  nameMatch(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  nameMatch_v2(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH_v2,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
  })
  }
  nameMatch_loan(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH_loan,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
  })
  }

  personalProfileUpdate(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.PERSONAL_DETAILS_UPDATE,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
  })
  }
  
  employmentProfileUpdate(params){
    let body = {}
    for (const prop in params) {
      if (prop != 'url') {
        if (prop != 'microservicetoken') {
          body[prop] = params[prop]
        }
      }
    }
    body = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.EMPLOYMENT_DETAILS_UPDATE, body, undefined, undefined, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  fetchBranchList(){
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.MASTERDATA_BRANCH,{
      'Content-Type':'application/json',
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
  })
  }
  assignUserHierarchy(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ASSIGN_USER_HIERARCHY,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  
  }

  fetchCommonProperty(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.COMMONPROPERTY_FETCH,body,{
      'Content-Type':'application/json',
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
  })
  }

  showBorrowerDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_DETAILS,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
    
  }

  updateMainLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_MAIN_STATUS,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
    
  }

  fetchContracts(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_CONTRACT_TO_ACCEPT,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
    
  }

  initiateEsign(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INITIATE_ESIGN,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
    
  }

  acceptContract(params){
    let body = {};
    for (const prop in params) {
      if (prop != 'microservicetoken') {
        body[prop] = params[prop]
      }
    }
    body = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ACCEPT_CONTRACT, body, undefined, undefined, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  verifyUdyam(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UDYAM_VERIFICAION,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })}

  updateSelfEmployment(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_BORROWER_SELFT_EMPLOYEMENT,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  encryptFormBodyData(body){
    let temp_body
    let obj={}
    
    if(this.environmentService.configData.appConfig.isEncryption===true){
      temp_body= new HttpParams({ encoder: new CustomHttpParamEncoder() })
      if(body.updates && body.updates.length!=0){
        body.updates.forEach(data=>{
          if(data.param=='access_token'){
            temp_body = temp_body.set(data.param,data.value)
          }else{
            obj[data.param] = data.value
          }
        })
      }
      //encrypt object
      let key  = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
      let iv   = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);  
      let encrypted = this.encrypt.encrypt(key,iv,JSON.stringify(obj))
      temp_body = temp_body.set('encryptedRequestData',encrypted)
      return temp_body
    }else{
      return body
    }
  }
  encryptFormBodyData_JSON(body){
    let obj={}
    let temp_body={}
    if(this.environmentService.configData.appConfig.isEncryption===true){
      let key  = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
      let iv   = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);  
      let encrypted = this.encrypt.encrypt(key,iv,JSON.stringify(body))
      temp_body['encryptedRequestData']=encrypted.toString()
      return temp_body
    }else{
      return body
    }
  }

  decryptFormString(decryptedText){
    let key  = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);
    let iv   = CryptoJS.enc.Latin1.parse(appConfiguration.appConfig.clientApiKey);  
    let decryptStr = this.encrypt.decrypt(key,iv,decryptedText)
  return decryptStr.toString(CryptoJS.enc.Utf8);
  }

  fetchLoanDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LOAN_WITHOUT_BORROWER_DETAILS,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
  })
  }
  borrowerDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_WITHOUT_BORROWER_DETAILS,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }
    

  fetchSelfEmploymentDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.SELF_EMPLOYMENT_DETAILS,body)
  }

  fetchPrincipalApprovedDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRINCIPAL_APPROVED_DETAILS,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  getSupportingDoc(params) {
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SUPPORTING_DOC,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
 }

  EmployeeInfoProfileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_PROFILE_UPDATE,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }
  
  updateborrowerEmploymentDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_BORROWER_SELFT_EMPLOYEMENT,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })}

  
  fetchProductDetail(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRODUCT_DETAILS,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })

  }

  fetchProductDetailInfo(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRODUCT_DETAILS,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  updateLoanApplication(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  fetchRepaymentSchedule(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_REPAYMENT_SCHEDULE,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  submitFeedback(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SUBMIT_FEEDBACK,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  callMicroservice(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.MICROSERVICE_URL,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  uploadDocument(params,url) {
    let form = new FormData();
    for(const property in params) {
        if(property!='document'){
            form.append(property, params[property]);
        }
    }
    form.append("document", params.document, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL + url,form,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  completeTransact(params,url){
    return this.callJsonValidationPost(params,url)
  }
  
  getUploadedDoc(params) {
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.DOCUMENT_LIST,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  deleteDoc(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DELETE_DOCUMENT,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  verifyGst(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_GST,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  fetchCibilData(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BUISNESS_RULE_CHECK,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  createLandDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_LAND_DETAIL,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

  }

  createCropDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_CROP_DETAIL,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

  }

  fetchConsentList(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.CONSENT_LIST,body)

  }

  createConsent(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CONSENT_CREATE,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

  }

  genericPostApiFetchNormal(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+params.url,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  genericPostApiFetch(params){
    if(params['microservicetoken']){
      this.genericPostApiFetchNormal(params)
    }else{
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });

      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body = body.set(prop,params[prop])
          }
        }
      }
      body = this.encryptFormBodyData(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL + params.url,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

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
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + params['url'],body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

  }

  getProductListForProductGroup(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PRODUCTLIST_FOR_SPECIFICGROUP,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

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

  assignParkingBranch(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.ASSIGN_PARKING_BRANCH,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  fetchBorrowerDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_DETAIL,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

  }

  updateEmploymentDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.EMPLOYMENT_DETAILS_UPDATE,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  updateSelfEmploymentDetails(params){
    return this.updateSelfEmployment(params)
  }
  fetchContractToAccept(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_CONTRACT_TO_ACCEPT,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
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
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DOWNLOAD_SESSION,body);
  }

  panVerification_v2(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL+this.PAN_VERIFICATION_V2,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

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
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.EMPLOYER_SEARCH,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
      })
  }

  cibilCheck(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BUISNESS_RULE_CHECK,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
      })
  }

  feedbackSubmit(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SUBMIT_FEEDBACK,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)

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
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CBS_DEDUPE,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
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
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.PINCODE_LIST,body,{
        'Content-Type':'application/json',
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
      })}

  fetchDemographicDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.DEMOGRAPHIC_DETAILS,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  fetchSalaryAccount(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_SALARY_ACCOUNT,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  updateSanctionDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_SANCTION_DETAILS,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  
  fetchRatingScorePl(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.RATING_SCORE_GENERIC,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
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
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.ELIGILBITY_DETAILS,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  fetchEligiblityData(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_ELIGIBLITY_DATA,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }

  updateSalaryAccount(params) {
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_SALARY_ACCOUNT,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  esignFetchStatus(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ESIGN_FETCH_STATUS,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  checkDocumentUploadStatus(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.INSIGHTS_CALLBACK_CHECK,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })}

  stpCheck(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.STP_CHECK,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
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
      body  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NPA_CHECK,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
      })
  }

  fetchBankDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BANK_DETAIL,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  callJsonValidationPost(params,url){
    
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+url,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })}

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
    body = this.encryptFormBodyData(body)
    if(endPointData.RequestType=='GET'){
      return this.commonApiService.doGetApiCall(this.BASE_URL + endPointData.url,body)
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL + endPointData.url,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
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
      body  = this.encryptFormBodyData_JSON(body)
      if(endPointData.RequestType=='GET'){
        return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+endPointData.url,body,{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
          'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
        })
      }
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+endPointData.url,body,undefined,undefined,{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
        'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
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
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+ this.BRANCH_STATE_MASTER,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
  updateBorrowerLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  gstSearchByPan(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GST_SEARCH_BY_PAN,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
  }

  borrowerExtraPropertyUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
      }
    body = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_EXTRA_PROPERTY_UPDATE,body,undefined,undefined,this.commonVariableService.tenentConfiguration.ENCRYPT_FORM_BODY_DATA?this.commonVariableService.encryptionHeaders:undefined)
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
    body  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.DUPLICATE_APPLICATION_CHECK,body,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SAVE_CAMPAIGN,body,undefined,undefined,{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':this.commonVariableService.tenentConfiguration.clientApiKey
    })
  }
}
