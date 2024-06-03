import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomHttpParamEncoder } from "../shared/helpers/customHttpEncoder";

import {
  Configuration,
  EnvironmentService,
} from "../../environments/environment.service";
import { CommonApiService } from "./common-api.service";
import { CommonVariableService } from "./common-variable-service";
import { Encrypt } from "../shared/helpers/Encrypt";
import appConfiguration from "../app.config.json";
import { Formatters } from "../shared/helpers/Formatters";

const BASEURL = {
  encrypt: `assets/configuration/encrypt-configuration/`,
  product: `assets/configuration/product-configurations/`,
};
@Injectable({
  providedIn: "root",
})
export class ApiService {
  config: Configuration = this.environmentService.config;
  isEncryption: boolean =
    this.environmentService.configData.appConfig.isEncryption;
  tenentConfiguration = this.commonVariableService.tenentConfiguration;
  clientApiKey: string = this.tenentConfiguration.clientApiKey;
  constructor(
    public commonApiService: CommonApiService,
    public commonVariableService: CommonVariableService,
    public encrypt: Encrypt,
    private formatters:Formatters,
    public environmentService: EnvironmentService
  ) {}

  BASE_URL = this.config?.appConfig["primaryHost"];
  BASE_URL_MICROSERVICE = this.config?.appConfig["secondaryHost"];
  UI_BASE_URL = this.config?.appConfig["UI_BASE_URL"];

  //API
  VERIFY_PAN = `nsdlPanValidationService/nsdlPanValidation/verify`; //NAT_Migrate
  NAME_MATCH = `perfios/name/match`; //NAT_Migrate
  FETCH_ACCOUNT_DETAILS = `/finacle/fetchGeneralAccountResponse`; //NAT_Migrate
  EXPOSURE_CHECK=`/businessRules/exposureCheck`;
  NPA_CHECK=`/finacle/npaCheck`;
  FETCH_PRINCIPAL_APPROVED_DETAILS = `finacle/mudra/pricipalApprovedLoanDetails`; //NAT_Migrate
  FETCH_REPAYMENT_SCHEDULE = `finacle/mudra/repaymentSchedule`; //NAT_Migrate
  EMPLOYER_SEARCH = `/perfiosServices/v2/employerSearchByName`; //NAT_Migrate
  RATING_SCORE_VL = "/businessRules/fetchRatingScore"; //NAT_Migrate
  VERIFY_MOBILE = `restApi/validateOtpOfPhoneAndReturnAccessToken`;

  //V2
  UPDATE_LOAN_APPLICATION_TRACKING_STATUS = `api-v3/track/update`; //NAT_Migrate
  CONSENT_LIST = `api-v3/consent/list`; //NAT_Migrate
  CONSENT_CREATE = `api/v2/consent/create`; //NAT_Migrate
  GOLD_RATE_LIST = `api/v2/borrower/fetchGoldRateList`; //NAT_Migrate
  GOLD_RATE_TV = `api/v2/borrower/fetchAgriGoldLtvList`; //NAT_Migrate
  PRODUCTLIST_FOR_SPECIFICGROUP = `api/v2/loanProducts/productListForSpecificGroup`; //NAT_Migrate
  PURPOSE_OF_LOAN = `api/v2/assetDetails/fetchPurposeOfAdvance`; //NAT_Migrate

  //V1
  VERIFICATION_EMAIL = `api-v3/borrower/generateOtpUsingEmailForExistingUser`; //NAT_Migrate
  VERIFICATION_AADHAR = `api-v3/admin/sendAadharOTPToRegisteredMobile`; //NAT_Migrate
  VERIFY_EMAIL = `api-v3/borrower/validateEmailOTPForExistingUser`; //NAT_Migrate
  VERIFY_AADHAR = `api-v3/admin/validateAadharOtpForRegisteredMobile`; //NAT_Migrate
  LOAN_APPLY = `api/v1/loanApplication/apply`; //NAT_Migrate
  UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`; //NAT_Migrate
  PERSONAL_DETAILS_UPDATE = `api/v1/borrower/personalProfileUpdate`; //NAT_Migrate
  UPDATE_LOAN_APPLICATION_MAIN_STATUS = `api/v1/loanApplication/changeLoanApplicationStatus`; //NAT_Migrate
  BORROWER_DETAILS = `api-v3/borrower/borrowerDetail`; //NAT_Migrate
  UPDATE_BORROWER_SELFT_EMPLOYEMENT =
    "api/v1/loanApplication/updateBorrowerSelfEmploymentDetail"; //NAT_Migrate
  UPDATE_LOAN_APPLICATION = `api/v1/borrower/updateLoanApplication`; //NAT_Migrate
  SUBMIT_FEEDBACK = `api-v3/loanApplication/submitFeedback`; //NAT_Migrate
  UPDATE_COMPANY_DETAILS = `api-v3/borrower/stepTwoCompany`; //NAT_Migrate
  GOLD_LOAN_TENURE_EMI_CALCULATOR = `api/v1/restConfig/fetchAgriGoldProductsAndTenure`; //NAT_Migrate
  UPLOAD_DOCUMENT_FILE = `api/v1/borrower/uploadDocument`; //NAT_Migrate
  PAN_VERIFICATION_V2 = `api/v1/perfiosServices/fetchPanProfileDetails`; //NAT_Migrate
  GST_SEARCH_BY_PAN = `/api/v1/perfiosServices/gstSearchByPan`; //NAT_Migrate
  COMPANY_DETAILS_UPDATE = `api/v1/borrower/companyProfileUpdate`;

  //V3
  BORROWER_PROFILE_UPDATE_V3 = "api-v3/borrower/profileUpdate";
  ASSIGN_USER_HIERARCHY_V3 = `api-v3/loanApplication/assignUserHierarchyUnit`;
  VERIFY_MOBILE_V3 = "api-v3/restApi/validateOtpOfPhoneAndReturnAccessToken";
  COMPANY_DETAILS_UPDATE_V3 = `api-v3/borrower/companyProfileUpdate`;
  NAME_MATCH_v2 = "api-v3/loanApplication/checkPanAadharName"; //NA
  MASTERDATA_BRANCH_V3 = "api-v3/restPublic/master-branch-list"; //Working
  COMMONPROPERTY_FETCH = "api-v3/config/commonPropertySuggest"; //Working
  UDYAM_VERIFICAION = `api-v3/entityVerification/initiateUdhyamVerification`; //working
  LOAN_WITHOUT_BORROWER_DETAILS = `api-v3/loanApplication/loanDetailsWithoutBorrowerDetails`; //Working
  SUPPORTING_DOC = "api-v3/supportingDocument/showAllRequiredDocuments"; //NA
  PINCODE_LIST = "api-v3/config/pincodes"; //working
  BRANCH_STATE_MASTER = `api-v3/restPublic/master-branch-list-new`; //working
  VERIFICATION_MOBILE_V3 = `api-v3/restApi/generateOtpUsingPhoneForExistingAndNonExistingUser`; //working
  LOANPRODUCT_LIST_V3 = `api-v3/loanProducts/introductionList`; //working
  PERSONAL_DETAILS_UPDATE_V3 = `api-v3/borrower/personalProfileUpdate`; //working
  SAVE_CAMPAIGN = `/api-v3/loanApplication/saveCampaignManagement` //working
  UPDATE_BORROWER_SELFT_EMPLOYEMENT_V3 = "api-v3/loanApplication/updateBorrowerSelfEmploymentDetail"; //Need to check
  DUPLICATE_APPLICATION_CHECK = `/api-v3/loanApplication/checkDuplicateLoanApplication`;
 VERIFY_PAN_V3 = `nsdlPanValidationService/nsdlPanValidation/check`;
  VERIFY_ACCOUNT_NUM = 'api-v3/restApi/fetchMaskedData';
  FETCH_LOAN_PROGRAM = 'api-v3/loanProducts/fetchLoanProgramList'
 BORROWER_SUBMIT_BASIC_FIELDS="/api-v3/borrower/stepOne";

  private  isEncryptedData(plainiv) {
    return  this.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:plainiv} : undefined;
  }

  private getAuthorizationHeader(params,plainiv) {
    if (params?.microservicetoken) {
      return this.isEncryption?{
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.microservicetoken}`,
        clientApiKey: plainiv,
      }:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.microservicetoken}`
      };
    }
    return this.isEncryption?{
      "Content-Type": "application/json",
      clientApiKey: plainiv,
    }:{
      "Content-Type": "application/json",
    };
  }

  private getBodyParams(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      if(prop !="microservicetoken"){
        body = body.set(prop, params[prop]);
      }
    }
    return this.encryptFormBodyData(body);
  }
  private getBodyParams_json(params) {
    let body = {};
    for (const prop in params) {
      if(prop !="microservicetoken"){
      body[prop] = params[prop]
      }
    }
    return this.encryptFormBodyData_JSON(body);
  }
  private getBodyParam(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      body = body.set(prop, params[prop]);
    }
    return body;
  }

  generateMobileOtp(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.VERIFICATION_MOBILE_V3,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  callApiEndpointFromLogic(endpointData) {
    if (endpointData.apiType == "MICRO_SERVICE") {
      return this.callMicroserviceEnpointFromObject(endpointData);
    } else {
      return this.callPlatformEndpointFromObject(endpointData);
    }
  }

  private callPlatformEndpointFromObject(endPointData) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in endPointData.params) {
      body = body.set(prop, endPointData.params[prop]);
    }
     let encrypted = this.encryptFormBodyData(body);
    if (endPointData.RequestType == "GET") {
      return this.commonApiService.doGetApiCall(
        this.BASE_URL + endPointData.url,
        encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
      );
    }
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + endPointData.url,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryption
        ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv}
        : undefined
    );
  }

  private callMicroserviceEnpointFromObject(endPointData) {
    let body = {};
    for (const prop in endPointData.params) {
      if (prop != "url") {
        if (prop != "microservicetoken") {
          body[prop] = endPointData.params[prop];
        }
      }
    }
     let encrypted = this.encryptFormBodyData_JSON(body);
    if (endPointData.RequestType == "GET") {
      return this.commonApiService.doGetApiCall(
        this.BASE_URL_MICROSERVICE + endPointData.url
        ,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
          'clientApiKey':encrypted.plainiv
        }:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${endPointData.params.microservicetoken}`
        }
      
      );
    }
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + endPointData.url,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`,
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${endPointData.params.microservicetoken}`
      }
    );
  }

  fetchBranchStateList(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "url") {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.BRANCH_STATE_MASTER,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`
      }
    );
  }

  generateEmailOtp(params) {
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFICATION_AADHAR, encrypted.body, undefined, undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv))
  }

  verifyMobileOtp(params, v3API = true) {
    if (v3API) {
      let body = {};
      for (const prop in params) {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
      let encrypted = this.encryptFormBodyData_JSON(body);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + this.VERIFY_MOBILE_V3,
        encrypted.body,
        undefined,
        undefined,
        this.getAuthorizationHeader(params,encrypted.plainiv)
      );
    } else {
      let encrypted = this.getBodyParams(params);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL + this.VERIFY_MOBILE,
        encrypted.body,
        undefined,
        undefined,
        this.isEncryptedData(encrypted.plainiv)
      );
    }
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
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.VERIFY_AADHAR, encrypted.body, undefined, undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv));
  }

  fetchLoanProducts() {
    let body = {};
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doGetApiCall(
      this.BASE_URL_MICROSERVICE + this.LOANPRODUCT_LIST_V3,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json'
      }
    
    );
  }

  applyLoan(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.LOAN_APPLY,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  updateLoanApplicationStatus(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  updateLoanApplicationTrackingStatus(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.UPDATE_LOAN_APPLICATION_TRACKING_STATUS,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  verifyPanNumber(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.VERIFY_PAN,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  nameMatch(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.NAME_MATCH,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  nameMatch_v2(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.NAME_MATCH_v2,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  personalProfileUpdate(params, v3API = true) {
    if (v3API) {
      let body = {};
      for (const prop in params) {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
      let encrypted = this.encryptFormBodyData_JSON(body);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + this.PERSONAL_DETAILS_UPDATE_V3,
        encrypted.body,
        undefined,
        undefined,
        this.getAuthorizationHeader(params,encrypted.plainiv)
      );
    } else {
      let encrypted = this.getBodyParams(params);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL + this.PERSONAL_DETAILS_UPDATE,
        encrypted.body,
        undefined,
        undefined,
        this.isEncryptedData(encrypted.plainiv)
      );
    }
  }

  companyProfileUpdate(params, v3API = true) {
    if (v3API) {
      let body = {};
      for (const prop in params) {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
      let encrypted = this.encryptFormBodyData_JSON(body);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + this.COMPANY_DETAILS_UPDATE_V3,
        encrypted.body,
        undefined,
        undefined,
        this.getAuthorizationHeader(params,encrypted.plainiv)
      );
    } else {
      let encrypted = this.getBodyParams(params);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL + this.COMPANY_DETAILS_UPDATE,
        encrypted.body,
        undefined,
        undefined,
        this.isEncryptedData(encrypted.plainiv)
      );
    }
  }

  fetchBranchList() {
    let body = {};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(
      this.BASE_URL_MICROSERVICE + this.MASTERDATA_BRANCH_V3,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json'
      }
    
    );
  }

  assignUserHierarchy(params, v3API = true) {
    if (v3API) {
      let body = {};
      for (const prop in params) {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
      let encrypted = this.encryptFormBodyData_JSON(body);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + this.ASSIGN_USER_HIERARCHY_V3,
        encrypted.body,
        undefined,
        undefined,
        this.getAuthorizationHeader(params,encrypted.plainiv)
      );
    }
  }

  fetchCommonProperty(params) {
    let encrypted = this.getBodyParams_json(params);
    return this.commonApiService.doGetApiCall(
      this.BASE_URL_MICROSERVICE + this.COMMONPROPERTY_FETCH,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json',
      }
    
    );
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

  updateMainLoanApplicationStatus(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.UPDATE_LOAN_APPLICATION_MAIN_STATUS,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  verifyUdyam(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.UDYAM_VERIFICAION,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
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

      let plainiv = `${this.environmentService.config?.appConfig?.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      //encrypt object
      let key = CryptoJS.enc.Latin1.parse(
        this.environmentService?.config?.appConfig?.clientApiKey
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
      let plainiv = `${this.environmentService.config?.appConfig?.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
      let key = CryptoJS.enc.Latin1.parse(
        this.environmentService.config?.appConfig?.clientApiKey
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

  fetchAccountData(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.FETCH_ACCOUNT_DETAILS,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }
  checkNPAValidation(params){
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.NPA_CHECK,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  exposureCheck(params){
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.EXPOSURE_CHECK,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }
  fetchLoanDetails(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.LOAN_WITHOUT_BORROWER_DETAILS,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  borrowerDetails(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.LOAN_WITHOUT_BORROWER_DETAILS,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  fetchPrincipalApprovedDetails(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.FETCH_PRINCIPAL_APPROVED_DETAILS,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }
  getSupportingDoc(params) {
    let encrypted = this.getBodyParams(params);

    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.SUPPORTING_DOC,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  employeeInfoProfileUpdate(params, v3API = true) {
    if (v3API) {
      let body = {};
      for (const prop in params) {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
      let encrypted = this.encryptFormBodyData_JSON(body);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + this.BORROWER_PROFILE_UPDATE_V3,
        encrypted.body,
        undefined,
        undefined,
        this.getAuthorizationHeader(params,encrypted.plainiv)
      );
    }
  }

  updateborrowerEmploymentDetails(params, v3API = true) {
    if (v3API) {
      let body = {};
      for (const prop in params) {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
      let encrypted = this.encryptFormBodyData_JSON(body);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT_V3,
        encrypted.body,
        undefined,
        undefined,
        this.getAuthorizationHeader(params,encrypted.plainiv)
      );
    } else {
      let encrypted = this.getBodyParams(params);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL + this.UPDATE_BORROWER_SELFT_EMPLOYEMENT,
        encrypted.body,
        undefined,
        undefined,
        this.isEncryptedData(encrypted.plainiv)
      );
    }
  }

  updateLoanApplication(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.UPDATE_LOAN_APPLICATION,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  fetchRepaymentSchedule(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "microservicetoken") {
        body[prop] = params[prop];
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.FETCH_REPAYMENT_SCHEDULE,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  submitFeedback(params) {
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

  createConsent(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.CONSENT_CREATE,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  genericPostApiFetch(params) {
    let body;
    if (params["microservicetoken"]) {
      body = this.prepareBody(params);
      let encrypted = this.encryptFormBodyData_JSON(body);
      const headers = this.getAuthorizationHeader(params,encrypted.plainiv);
      return this.commonApiService.doPostApiCall(
        this.BASE_URL_MICROSERVICE + params.url,
        encrypted.body,
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
        encrypted.body,
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

  private prepareHttpBody(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      if (prop === "url" || prop === "microservicetoken") continue;
      body = body.set(prop, params[prop]);
    }
    return body;
  }

  getProductStaticConfig(params) {
    let url;
    if (this.tenentConfiguration["encrypt-configuration"]) {
      url = BASEURL.encrypt;
    } else {
      url = BASEURL.product;
    }
    return this.commonApiService.doGetApiCall(url + params.url, {});
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
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE + this.UPDATE_COMPANY_DETAILS,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
    })
  }

  fetchAgriGoldLoanTenure(params) {
    let body = this.getBodyParam(params);
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(
      this.BASE_URL + this.GOLD_LOAN_TENURE_EMI_CALCULATOR,
      encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
    );
  }

  fetchGoldRateList(params) {
    let body = this.getBodyParam(params);
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(
      this.BASE_URL + this.GOLD_RATE_LIST,
      encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined
    );
  }

  fetchGoldRateTvList(params) {
    let body = this.getBodyParam(params);
    let encrypted = this.encryptFormBodyData(body)
    return this.commonApiService.doGetApiCall(
      this.BASE_URL + this.GOLD_RATE_TV,
      encrypted.body, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined

    );
  }

  apiEndpointCall(params) {
    let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    for (const prop in params) {
      if (prop != "url") {
        body = body.set(prop, params[prop]);
      }
    }
    let encrypted = this.encryptFormBodyData(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + params["url"],
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  getProductListForProductGroup(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.PRODUCTLIST_FOR_SPECIFICGROUP,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  getPurposeOfLoan(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.PURPOSE_OF_LOAN,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  uploadDocumentFile(params) {
    let form = new FormData();
    for (const prop in params) {
      form.append(prop, params[prop]);
    }
    const blobObj = new Blob([], { type: "multipart/form-data" });
    form.append("document", blobObj, params.document.name);
    return this.commonApiService.doPostApiCallForUploadFile(
      this.BASE_URL + this.UPLOAD_DOCUMENT_FILE,
      form
    );
  }

  fetchBorrowerDetails(params) {
    return this.showBorrowerDetails(params);
  }

  panVerification_v2(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.PAN_VERIFICATION_V2,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
  }

  employerSearch(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "url") {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.EMPLOYER_SEARCH,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  getPincodeList() {
    let body ={};
    let encrypted = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(
      this.BASE_URL_MICROSERVICE + this.PINCODE_LIST,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
        'Content-Type':'application/json',
        'clientApiKey':encrypted.plainiv
      }:{
        'Content-Type':'application/json'
      });
  }

  loanWithOutBorrowerDetails(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "url") {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.LOAN_WITHOUT_BORROWER_DETAILS,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
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

  fetchRatingScore(params) {
    let body = {};
    for (const prop in params) {
      if (prop != "url") {
        if (prop != "microservicetoken") {
          body[prop] = params[prop];
        }
      }
    }
    let encrypted = this.encryptFormBodyData_JSON(body);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL_MICROSERVICE + this.RATING_SCORE_VL,
      encrypted.body,
      undefined,
      undefined,
      this.getAuthorizationHeader(params,encrypted.plainiv)
    );
  }

  gstSearchByPan(params) {
    let encrypted = this.getBodyParams(params);
    return this.commonApiService.doPostApiCall(
      this.BASE_URL + this.GST_SEARCH_BY_PAN,
      encrypted.body,
      undefined,
      undefined,
      this.isEncryptedData(encrypted.plainiv)
    );
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
     let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.DUPLICATE_APPLICATION_CHECK,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`
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

  loanProgramList(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doGetApiCall(this.BASE_URL_MICROSERVICE+this.FETCH_LOAN_PROGRAM,encrypted.body,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'clientApiKey':encrypted.plainiv
    }:{
      'Content-Type':'application/json'
    })
  }

  borrowerStepOne(params){
    let body = {};
    for(const prop in params){
      if(prop!='microservicetoken'){
        body[prop] = params[prop]
      }
    }
    let encrypted  = this.encryptFormBodyData_JSON(body)
    return this.commonApiService.doPostApiCall(this.BASE_URL_MICROSERVICE+this.BORROWER_SUBMIT_BASIC_FIELDS,encrypted.body,undefined,undefined,this.environmentService.configData.appConfig.isEncryption ? {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${params.microservicetoken}`,
      'clientApiKey':encrypted.plainiv
  } :{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${params.microservicetoken}`,
    })
  }

}
