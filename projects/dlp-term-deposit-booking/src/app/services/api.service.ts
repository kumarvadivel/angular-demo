import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {EnvironmentService} from '../../environments/environment.service';
import appConfiguration from '../app.config.json';
import {CustomHttpParamEncoder} from '../shared/helpers/customHttpEncoder';
import {Encrypt} from '../shared/helpers/Encrypt';
import {CommonApiService} from './common-api.service';
import {CommonVariableService} from './common-variable-service';
import { Formatters } from '@tlad-app/shared/helpers/Formatters';

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
  VERIFICATION_MOBILE = `restApi/generateOtpUsingPhoneForExistingAndNonExistingUser`;
  VERIFICATION_EMAIL =  `api-v3/borrower/generateOtpUsingEmailForExistingUser`
  VERIFICATION_AADHAR = `api/v1/admin/sendAadharOTPToRegisteredMobile`
  VERIFY_MOBILE = `restApi/validateOtpOfPhoneAndReturnAccessToken`;
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`;
  VERIFY_AADHAR = `api/v1/admin/aadharValidationUsingOtpOrBioMetric`;
  VERIFY_GST =`api-v3/restPerfiosApi/gstVerification`
  LOANPRODUCT_LIST = `api/v2/loanProducts/introductionList`;
  LOAN_APPLY  = `api/v1/loanApplication/apply`;
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
  UPDATE_LOAN_APPLICATION_TRACKING_STATUS = `api/v2/track/update`;
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`;
  PERSONAL_DETAILS_UPDATE = `api/v1/borrower/personalProfileUpdate`;
  COMPANY_DETAILS_UPDATE = `api/v1/borrower/companyProfileUpdate`;
  NAME_MATCH = `perfios/name/match`;
  NAME_MATCH_v2=`api-v3/loanApplication/checkPanAadharName`;
  NAME_MATCH_loan=`/api-v3/loanApplication/checkPanAndAadharForLoan`;
  MASTERDATA_BRANCH='api-v3/restPublic/master-branch-list';
  ASSIGN_USER_HIERARCHY=`/api-v3/loanApplication/assignUserHierarchyUnit`;
  FETCH_CROP_DETAILS='api-v3/businessPatner/fetchCropDetails'
  FETCH_LAND_DETAILS='api/v2/businessPatner/fetchLandHoldingDetails'
  COMMONPROPERTY_FETCH = `api-v3/config/commonPropertySuggest`;
  EMPLOYMENT_DETAILS_UPDATE = `api/v1/borrower/employmentProfileUpdate`;
  NOMINEE_CREATE = `api/v1/nominee/create`;
  NOMINEE_LIST = `api/v1/nominee/list`
  LOAN_PROGRAM_LIST = `finacle/businessRules/programSelection`;
  SUBMIT_VAS=`/api/v2/vas/create`;
  SHOW_VAS = `/api/v2/vas/show`;
  UPDATE_LOAN_PROGRAM=`api/v1/borrower/updateProgramInLoanApplication`;
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`;
  BORROWER_DETAILS=`api-v3/borrower/borrowerDetail`;
  BORROWER_PROFILE_UPDATE='api/v1/borrower/profileUpdate';
  UPDATE_BORROWER_LOAN_APPLICATION='api/v1/borrower/updateLoanApplication'
  UPDATE_BORROWER_SELFT_EMPLOYEMENT ='api/v1/loanApplication/updateBorrowerSelfEmploymentDetail'
  FETCH_CONTRACTS = `api/v1/borrower/fetchContractListToAccept`;
  DOWNLOAD_CONTRACT=`api/v2/contract/downloadContract`
  INITIATE_ESIGN=`api/v1/esign/initiateSignRequest`;
  ACCEPT_CONTRACT = `api/v1/borrower/acceptContract`;
  VERIFY_ACCOUNT_NUM = 'restApi/fetchMaskedData';
  FETCH_ACCOUNT_DETAILS=`/finacle/fetchGeneralAccountResponse`;
  UDYAM_VERIFICAION=`/api/v1/entityVerification/initiateUdhyamVerification`;
  UPDATE_SELF_EMPLOYMENT=`api/v1/loanApplication/updateBorrowerSelfEmploymentDetail`;
  LOAN_DETAILS = `/api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`;
  SELF_EMPLOYMENT_DETAILS = `api/v1/loanApplication/showBorrowerSelfEmploymentDetail`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`;
  FETCH_REPAYMENT_SCHEDULE=`finacle/mudra/repaymentSchedule`
  FETCH_PRODUCT_DETAILS=`/api-v3/loanProducts/details`;
  FETCH_PRODUCT_DETAILS_v3 = "api-v3/loanProducts/details";
  UPDATE_LOAN_APPLICATION=`api/v1/borrower/updateLoanApplication`;
  SUBMIT_FEEDBACK=`api-v3/loanApplication/submitFeedback`
  LOAN_WITHOUT_BORROWER = 'api/v1/loanApplication/loanDetailsWithoutBorrowerDetails';
  SUPPORTING_DOC = 'api-v3/supportingDocument/showAllRequiredDocuments';
  MICROSERVICE_URL = 'api/v1/restPerfiosApi/callPerfiosMicroservice';
  COAPPLICANT_SHOW = `api/v1/coApplicant/show`;
  COAPPLICANT_ADD = `api/v1/coApplicant/add`;
  COAPPLICANT_UPDATE = `api/v1/coApplicant/update`;
  COAPPLICANT_DELETE = `api/v1/coApplicant/delete`;
  INTIATATE_PAY_SLIP = 'api/v1/restPerfiosApi/initiateSalarySlipStatementVerification';
  DOCUMENT_LIST = 'api-v3/supportingDocument/documentList';
  DELETE_DOCUMENT = 'api/v1/loanApplication/deleteSupportingDocument';
  FETCH_CIBIL = `/businessRules/minimumCheckParameter`;
  CREATE_CROP_DETAIL=`api/v2/businessPatner/createOrUpdateCropDetails`
  CREATE_LAND_DETAIL=`api/v2/businessPatner/createOrUpdateLandHoldingDetail`
  CONSENT_LIST = `api-v3/consent/list`;
  CONSENT_CREATE =`api/v2/consent/create`;
  BASE_ENCRYPT_CONFIG_URL=`assets/configuration/encrypt-configuration/`;
  BASE_PRODUCT_CONFIG_URL=`assets/configuration/product-configurations/`;
  UPDATE_COMPANY_DETAILS=`api/v1/borrower/stepTwoCompany`;
  GOLD_LOAN_TENURE_EMI_CALCULATOR=`api/v1/restConfig/fetchAgriGoldProductsAndTenure`;
  GOLD_LOAN_EMI_CALCULATOR=`api/v2/borrower/goldLoanCalculator`
  DELETE_LAND_HOLDING_DETAIL=`api/v2/businessPatner/deleteLandHoldingDetail`;
  DELETE_CROP_DETAIL=`api/v2/businessPatner/deleteCropDetails`
  PRODUCTLIST_FOR_SPECIFICGROUP=`api/v2/loanProducts/productListForSpecificGroup`;
  PURPOSE_OF_LOAN=`api/v2/assetDetails/fetchPurposeOfAdvance`;
  PINCODE_LIST = 'api/v2/config/pincodes'
  UPLOAD_DOCUMENT_FILE=`api/v1/borrower/uploadDocument`;
  ASSIGN_PARKING_BRANCH=`api/v1/loanApplication/assignParkingBranchUserHierarchyUnit`;
  UPDATE_EMPLOYMENT_DETAILS=`api/v1/borrower/employmentProfileUpdate`;
  FETCH_CONTRACT_TO_ACCEPT=`api/v1/borrower/fetchContractListToAccept`;
  PAN_VERIFICATION_V2=`api/v1/perfiosServices/fetchPanProfileDetails`;
  EMPLOYER_SEARCH=`/perfiosServices/v2/employerSearchByName`;
  BUISNESS_RULE_CHECK = `businessRules/minimumCheckParameter `;
  FEEDBACK_SUBMIT=`api-v3/loanApplication/submitFeedback`;
  EDW_DOCUMENT_FETCH=`edw/generateCsvFileAndUploadToInsight`;
  CBS_DEDUPE=`finacle/iso/dedupeCheck`;
  DEMOGRAPHIC_DETAILS=`finacle/fetchPersonalDetails`;
  FETCH_SALARY_ACCOUNT=`finacle/fetchSalaryAccounts`;
  UPDATE_SANCTION_DETAILS=`/api-v3/businessPatner/createOrUpdateContractsHtmlDetails`;
  ELIGILBITY_DETAILS=`businessRules/fetchEligibilityDtls `;
  LOAN_WITHOUT_BORROWER_DETAILS=`api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`;
  RATING_SCORE_PL=`businessRules/rating/personalLoan`
  UPDATE_SALARY_ACCOUNT =`finacle/updateSBSalaryAccount`
  ESIGN_FETCH_STATUS = `api/v1/esign/fetchESigningStatus`;
  INSIGHTS_CALLBACK_CHECK =`/api/v1/restPerfiosApi/fetchPerfiosDocumentStatus`
  STP_CHECK = `/businessRules/stpCheck`;
  NPA_CHECK = `/finacle/npaCheck`;
  BANK_DETAIL=`api/v1/bankDetails/show`;
  DOWNLOAD_SESSION = `/api/v1/borrower/createSessionId`;
  FETCH_ELIGIBLITY_DATA=`/businessRules/fetchEligibilityData`
 VEHICLE_LIST=`api-v3/vehicle/fetchVehicleDetails`;
 VEHICLE_CREATE=`/api/v2/vehicleOwned/create`;
 VEHICLE_UPDATE=`/api/v2/vehicleOwned/update`;
 CREATE_CBS_DETAIL=`/api/v1/loanApplication/createCBSDetail`;
 DESIGNATIONS=`/api/v1/representative/designations`;
 RETRIEVE=`/api/v1/representative/retrieve`;
 FETCH_FACILITY_TYPE = "api-v3/multiFacility/fetchFacilities";
 FETCH_SECURITY_DETAILS = "/api/v2/businessPatner/fetchPersonalLoanSecurityDetails"
 CREATE_FACILITY = "/api/v1/multiFacility/create";
 UPDATE_FACILITY = "api/v1/multiFacility/update";
 RETREIVE_FACILITY="api-v3/multiFacility/retrieve";
 RATING_SCORE_VL = "/businessRules/fetchRatingScore";
 GST_SEARCH_BY_PAN= `/api/v1/perfiosServices/gstSearchByPan`;
 SECURITY_DETAILS = "api/v2/businessPatner/createPersonalLoanSecurityDetails";
 BORROWER_EXTRA_PROPERTY_UPDATE = `/api/v1/profile/updateExtraPropertyForBorrowerProfile`
 SECURITY_DETAILS_UPDATE = "api/v2/businessPatner/updatePersonalLoanSecurityDetails";
 SECURITY_DETAILS_DELETE = "api/v2/businessPatner/deletePersonalLoanSecurityDetail";
 UPDATE_FACILITY_AND_LOAN= "/api/v1/loanApplication/updateFacilityDetailsAndLoanSanction"
 DUPLICATE_APPLICATION_CHECK= `/api-v3/loanApplication/checkDuplicateLoanApplication`;
 BRANCH_STATE_MASTER = `/api-v3/restPublic/master-branch-list-new`;
  generateMobileOtp(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }

    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VERIFICATION_MOBILE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
  
  generateAadharOtp(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VERIFICATION_AADHAR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  verifyMobileOtp(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VERIFY_MOBILE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VERIFY_AADHAR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchLoanProducts(){
    let body = {};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.LOANPRODUCT_LIST,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      )
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
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_TRACKING_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  verifyPanNumber(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
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
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH_v2, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  nameMatch_loan(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.NAME_MATCH_loan, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  personalProfileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PERSONAL_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }

  companyProfileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.COMPANY_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }
  
  employmentProfileUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.EMPLOYMENT_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }
  fetchBranchList(){
    let body = {}
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.MASTERDATA_BRANCH,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json'
    })
  }
  assignUserHierarchy(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.ASSIGN_USER_HIERARCHY,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
    })
  
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
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.COMMONPROPERTY_FETCH,encrypted.body,{
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
  })
  }

  nomineeCreate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.NOMINEE_CREATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  
  }

  nomineeShow(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.NOMINEE_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchLoanProgramData(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
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

  updateLoanProgram(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_PROGRAM, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
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

  initiateEsign(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INITIATE_ESIGN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  acceptContract(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ACCEPT_CONTRACT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  verifyUdyam(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UDYAM_VERIFICAION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
  }

  updateSelfEmployment(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_SELF_EMPLOYMENT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    
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
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key  = CryptoJS.enc.Latin1.parse(this.environmentService.config.appConfig.clientApiKey);
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
    if(this.environmentService.configData.appConfig.isEncryption===true){
      let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key  = CryptoJS.enc.Latin1.parse(this.environmentService.config.appConfig.clientApiKey);
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
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VERIFY_ACCOUNT_NUM, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchLoanDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LOAN_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  borrowerDetails(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.LOAN_WITHOUT_BORROWER, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
    

  fetchSelfEmploymentDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.SELF_EMPLOYMENT_DETAILS,encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchPrincipalApprovedDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
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
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.SUPPORTING_DOC, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_PROFILE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  updateborrowerEmploymentDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  
  fetchProductDetail(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRODUCT_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_PRODUCT_DETAILS_v3, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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

  fetchRepaymentSchedule(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_REPAYMENT_SCHEDULE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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

  fetchCoApplicant(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.COAPPLICANT_SHOW, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  addCoApplicant(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      if(typeof params[prop]=='object'){
        body = body.set(prop,JSON.stringify(params[prop]))
      }else{
        body = body.set(prop,params[prop])
      }
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.COAPPLICANT_ADD, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  updateCoApplicant(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      if(typeof params[prop]=='object'){
        body = body.set(prop,JSON.stringify(params[prop]))
      }else{
        body = body.set(prop,params[prop])
      }
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.COAPPLICANT_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  deleteCoApplicant(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.COAPPLICANT_DELETE, encrypted.body,  this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }
  
  deleteLandHolding(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.DELETE_LAND_HOLDING_DETAIL, encrypted.body,  this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  deleteCropHolding(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.DELETE_CROP_DETAIL, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  uploadDocument(params,url) {
    let form = new FormData();
    for(const property in params) {
        if(property!='document'){
            form.append(property, params[property]);
        }
    }
    form.append("document", params.document, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL + url,form,undefined,undefined,this.environmentService.configData.appConfig.isEncryption?this.commonVariableService.encryptionHeaders:undefined)
  }

  completeTransact(params,url){
    return this.callJsonValidationPost(params,url)
  }

  initiatePaySlip(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INTIATATE_PAY_SLIP, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  getUploadedDoc(params) {
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.DOCUMENT_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DELETE_DOCUMENT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  verifyGst(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VERIFY_GST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_CIBIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_LAND_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  createCropDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_CROP_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }
  
  fetchCropDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_CROP_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.FETCH_LAND_DETAILS, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  getFacilityDetails(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_FACILITY_TYPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.RETREIVE_FACILITY, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  retreiveSecurityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FETCH_SECURITY_DETAILS, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  submitFacilityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_FACILITY, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateFacilityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_FACILITY, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_FACILITY_TYPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateSecurityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.SECURITY_DETAILS_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  deleteSecurityDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
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

  genericPostApiFetchNormal(params){
    let body = {}
      for(const prop in params){
        if(prop!='url'){
          if(prop!='microservicetoken'){
            body[prop]=params[prop]
          }
        }
      }
      let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+params.url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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

  updateCompanyDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_COMPANY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  fetchAgriGoldLoanTenure(){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL + this.GOLD_LOAN_TENURE_EMI_CALCULATOR, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  fetchGoldLoanEmiCalculator(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.GOLD_LOAN_EMI_CALCULATOR, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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
    let form =new FormData();
    for(const prop in params){
        form.append(prop,params[prop])
    }
    const blobObj = new Blob([], { type: 'multipart/form-data' });
    form.append('document', blobObj, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(this.BASE_URL+this.UPLOAD_DOCUMENT_FILE,form)
  }

  assignParkingBranch(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.ASSIGN_PARKING_BRANCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  fetchBorrowerDetails(params){
    return this.showBorrowerDetails(params);
  }

  updateEmploymentDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_EMPLOYMENT_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  updateSelfEmploymentDetails(params){
    return this.updateSelfEmployment(params)
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
      let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.EMPLOYER_SEARCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
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
      let encrypted  = this.encryptFormBodyData_JSON(body)
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BUISNESS_RULE_CHECK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }

  feedbackSubmit(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.FEEDBACK_SUBMIT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }

  edwFetch(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.EDW_DOCUMENT_FETCH, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.CBS_DEDUPE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.microservicetoken}`
      })
  }
  getPincodeList(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.PINCODE_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  fetchDemographicDetails(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.DEMOGRAPHIC_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_SALARY_ACCOUNT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_SANCTION_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.RATING_SCORE_PL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.ELIGILBITY_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.LOAN_WITHOUT_BORROWER_DETAILS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
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
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_ELIGIBLITY_DATA, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.UPDATE_SALARY_ACCOUNT, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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

  checkDocumentUploadStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)

    return this.commonApiService.doPostApiCall(this.BASE_URL + this.INSIGHTS_CALLBACK_CHECK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.STP_CHECK, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
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
      return this.commonApiService.doGetApiCall(this.BASE_URL + endPointData.url, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
    }
    return this.commonApiService.doPostApiCall(this.BASE_URL + endPointData.url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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
        return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+endPointData.url, encrypted.body,  this.environmentService.configData.appConfig.isEncryption ? {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${endPointData.params.microservicetoken}`,
          'clientApiKey': encrypted.plainiv
        }:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${endPointData.params.microservicetoken}`
        })
      }
      return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+endPointData.url, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${endPointData.params.microservicetoken}`,
        'clientApiKey': encrypted.plainiv
      }:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${endPointData.params.microservicetoken}`
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
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+ this.BRANCH_STATE_MASTER, encrypted.body,  this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
  updateBorrowerLoanApplicationStatus(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_BORROWER_LOAN_APPLICATION, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  
  fetchVehicleList(params){
    let body = {}
    for(const prop in params){
      if(prop!='url'){
        if(prop!='microservicetoken'){
          body[prop]=params[prop]
        }
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.VEHICLE_LIST, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }

  createVehicleDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.VEHICLE_CREATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

  }
  
  createCBSDetail(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
  return this.commonApiService.doPostApiCall(this.BASE_URL + this.CREATE_CBS_DETAIL, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  updateVehicleDetails(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
  return this.commonApiService.doPostApiCall(this.BASE_URL + this.VEHICLE_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  designations(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.DESIGNATIONS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }
  retrieve(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.RETRIEVE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
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

  borrowerExtraPropertyUpdate(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.BORROWER_EXTRA_PROPERTY_UPDATE, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)
  }

  updateFacilityDetailsLoanSanction(params){
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for(const prop in params){
      body = body.set(prop,params[prop])
    }
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL + this.UPDATE_FACILITY_AND_LOAN, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined)

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
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.DUPLICATE_APPLICATION_CHECK, encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`,
      'clientApiKey': encrypted.plainiv
    }:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.microservicetoken}`
    })
  }
}
