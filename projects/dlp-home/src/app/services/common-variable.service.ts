import { Injectable } from '@angular/core';
import { homeMenu, homeBanner, landingPageBanner, getHelpInfo, loanProductInfo, AadharConsent } from './utlis/data';

@Injectable({
  providedIn: 'root'
})
export class CommonVariableService {


  
  static_commonProperty_KeyCodes = [
    "HOME_BRANCH_STATE",
    "HOME_BRANCH_DISTRICT",
    "HOME_BRANCH_CITY",
    "HOME_BRANCH_NAME",
    "STAR_GOLD",
    "GOLD_PURPOSE_OF_ADVANCE",
    "PINCODE",
    "PINCODE_STATE",
    "PINCODE_CITY",
    "DOCUMENT_TYPE",
    "GST_SEARCH",
];
 

  readonly FETCH_FLOW_METHOD_MAPPER= {
    'loanDetails': 'fetchLoanDetails',
    'borrowerDetails': 'fetchBorrowerDetails',
    'documentTypeFetch': 'getSupportingDoc',
    'fetchSalaryAccount': 'fetchSalaryAccount',
    'documentFetch': 'getUploadedDoc',
    'fetchEligibilityData': 'fetchEligiblityData',
    'fetchRepaymentSchedule': 'fetchRepaymentSchedule',
    'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
}
readonly SUBMIT_FLOW_METHOD_MAPPER = {
    'assignUserHierarchyUnit': 'assignUserHierarchy',
    'personalProfileUpdate': 'personalProfileUpdate',
    'loanUpdate': 'updateLoanApplication',
    'updateSelfEmploymentDetails': 'updateSelfEmployment',
    'profileUpdate': 'EmployeeInfoProfileUpdate',
    'applyLoan': 'applyLoan',
    'showBorrowerDetails': 'showBorrowerDetails',
    'updatesubStatus': 'updateLoanApplicationStatus',
    'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
    'updateLoanApplicationTrackingStatus': 'updateLoanApplicationTrackingStatus',
    'updateCompany': 'updateCompanyDetails',
    'nameMatch': 'nameMatch',
    'nameMatch_v2': 'nameMatch_v2',
    'nameMatch_loan': 'nameMatch_loan',
    'cbsDedupe': 'cbsDedupe',
    'demographicDetailsFetch': 'fetchDemographicDetails',
    'assignParkingBranch': 'assignParkingBranch',
    'updateEmploymentDetails': 'updateEmploymentDetails',
    'fetchEligibiltyDetails': 'fetchEligilibilityDetails',
    'sanctionUpdate': 'updateSanctionDetails',
    'nstpValidate': 'updateSanctionDetails',
    'rating_score_personal_loan': 'fetchRatingScorePl',
    'esignStatus': 'esignFetchStatus',
    'npaCheck': 'npaCheck',
    'borrowerExtraPropertyUpdate': 'borrowerExtraPropertyUpdate',
    'duplicateApplicationCheck': 'duplicateApplicationCheck',
    'saveCampaign':'saveCampaign'
}
  appLayoutConfig = {
    isShowJourneyHeader: true,
    isShowJourneyFooter: true,
    isShowSubStepper: true,
    isShowStepperPercentage: true,
    mobileView: false,
};
isDevMode = true;
tenentConfiguration = {
  applicationTheme: "default",
  ENCRYPT_FORM_BODY_DATA: !this.isDevMode,
  clientApiKey_orignal: "r3hi1dBLmAfKgugG",
  clientApiKey: "defaultKey",
  landingContentView: "PRODUCT",
  removeAccessToken:true,
  IG_API_KEY:'api-v3',
  FETCH_PRODUCT_CONFIG_FROM_JSON_FILE: !this.isDevMode,
  devMode: this.isDevMode,
  "encrypt-configuration": !this.isDevMode,
  "campaign_parameters":["partner","websiteUrl","utm_id","utm_source","utm_medium","utm_campaign","utm_code","offerId","leadId","accountId","remarksAndSampleUrl","utm_content","object_type","object_id","utm_term"]
};
homeMenu = homeMenu;
homeBanner = homeBanner
landingPageBanner = landingPageBanner
AadharConsent = AadharConsent
loanProductInfo = loanProductInfo
    getHelpInfo = getHelpInfo
    isConsentValid = false;
    globalLoaderState = false;
    sanctionProceedBtnEnable: boolean = false;
    encryptionHeaders = {
      clientApiKey: this.tenentConfiguration.clientApiKey,
      "Content-Type": "application/x-www-form-urlencoded",
  };
  disableProceedBtn: boolean = true;
  dynamicComponentLayout = {
    columnSize: 1,
};
journeyEventCodes = {
}
}
