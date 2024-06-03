import { Injectable } from "@angular/core";
import {AadharConsent, 
    commonProperty_static, 
    getHelpInfo, homeBanner, 
    homeMenu, landingPageBanner, 
    loanProductInfo, rejectionConsent} from '../services/utils/data'
import { Subject } from "rxjs";
import  appConfig  from "../../configuration/product-configurations/BL10AB.json";
 
@Injectable({
  providedIn: "root",
})
export class CommonVariableService {
  journey: any;
    _journeyEvents = new Subject<void>();
    _journeyEvents$ = this._journeyEvents.asObservable();
    _formSubmitEvents = new Subject<void>();
    _formSubmitEvents$ = this._formSubmitEvents.asObservable();
    scopeSubject = new Subject<void>();
    scopeSubject$ = this.scopeSubject.asObservable();
    selectedProductInfo: any;
    validLoans: any = [];
    reqSupportingDocList: any = [];
    borrowerDetails: any = [];
    disableProceedBtn: boolean = true;
    uploadedDocList: any = [];
    esignTxnId;
    selectedFile = "";
    globalLoaderState = false;
    documentList: any = [];
    sanctionProceedBtnEnable: boolean = false;
    customDataDetails: any = {};
    customLoanData: any = {};
    isConsentValid = false;
    themeConfiguration = {
        themeSelection: "theme1",
    };
    ErrorCodeSubStatus = {
        "BL10AB":"SUB_STATUS_20",
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
        "GST_SEARCH_V3"
    ];
    readonly FETCH_FLOW_METHOD_MAPPER= {
        'loanDetails': 'borrowerDetails',
        'loanWithOutBorrowerDetails': 'loanWithOutBorrowerDetails',
        'borrowerDetails': 'fetchBorrowerDetails',
        'documentTypeFetch': 'getSupportingDoc',
        'documentFetch': 'getUploadedDoc',
        'fetchEligibilityDtls': 'fetchEligilibilityDetails',
        'fetchRepaymentSchedule': 'fetchRepaymentSchedule',
        'fetchContracts': 'fetchContractToAccept',
        'fetchBorrowerDetails': 'fetchBorrowerDetails',
        'fetchLoanDetails': 'fetchLoanDetails',
        'fetchSelfEmploymentDetails': 'fetchSelfEmploymentDetails',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'cibilfetch': 'fetchCibilData',
        'fetchMultiFacilityList': 'facilityDetailsList',
        'securityDetailsCreate': 'submitSecurityDetails',
        'fetchSecurityDetails': 'retreiveSecurityDetails',
        'ProductDetails_v3': 'fetchProductDetailInfo',
        'fetchCharges':'fetchCharges',
        'listChecklist':'listChecklist',
        'showCBSDetail': 'showCBSDetail',
        'fetchEligiblityData': 'fetchEligiblityData',
        'designations': 'designations',
        'updateSanctionDetails':'updateSanctionDetails',
        'updateLoanSanction':'updateSanctionDetails',
        'showLoanSanctionDetail': 'showLoanSanctionDetail',
        'fetchPrincipalApprovedDetails':'fetchPrincipalApprovedDetails',
        "breEligiblityCheck": "breEligiblityCheck",
        "getGstData": "getGstData",
        "fetchDemographicDetails": "fetchDemographicDetails"
    }
   readonly SUBMIT_FLOW_METHOD_MAPPER = {
        'assignUserHierarchyUnit': 'assignUserHierarchy',
        'personalProfileUpdate': 'personalProfileUpdate',
        'personalProfileUpdateforCommunicationAddressChange': 'personalProfileUpdateforCommunicationAddressChange',
        'multiFacilityCreate': 'submitFacilityDetails',
        'updateMultiFacility': 'updateFacilityDetails',
        'securityDetailsCreate': 'submitSecurityDetails',
        'employmentProfileUpdate': 'EmployeeInfoProfileUpdate',
        'loanUpdate': 'updateLoanApplication',
        'selfemploymentUpdate': 'updateborrowerEmploymentDetails',
        'updateSelfEmploymentDetails': 'updateSelfEmployment',
        'cibilfetch': 'fetchCibilData',
        'profileUpdate': 'EmployeeInfoProfileUpdate',
        'companyProfileUpdate': 'companyProfileUpdate',
        'applyLoan': 'applyLoan',
        'showBorrowerDetails': 'showBorrowerDetails',
        'updatesubStatus': 'updateLoanApplicationStatus',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'updateLoanApplicationTrackingStatus': 'updateLoanApplicationTrackingStatus',
        'updateCompany': 'updateCompanyDetails',
        'nameMatch': 'nameMatch',
        'nameMatch_v2': 'nameMatch_v2',
        'cbsDedupe': 'cbsDedupe',
        'assignParkingBranch': 'assignParkingBranch',
        'updateEmploymentDetails': 'updateEmploymentDetails',
        'BRECall_personal_loan': 'fetchEligilibilityDetails',
        'fetchEligibiltyDetails': 'fetchEligilibilityDetails',
        'sanctionUpdate': 'updateSanctionDetails',
        'nstpValidate': 'updateSanctionDetails',
        'rating_score_personal_loan': 'fetchRatingScorePl',
        'fetchRatingScore': 'fetchRatingScore',
        'fetchAccountData': 'fetchAccountData',
        'verifyPanNumber': 'verifyPanNumber',
        'panVerificationV2': 'panVerification_v2',
        "verifyPanNumber_v3":"verifyPanNumber_v3",
        'verifyUdyam': 'verifyUdyam',
        'createCBSDetail': 'createCBSDetail',
        'npaCheck': 'npaCheck',
        'updateLoanApplication': 'updateLoanApplication',
        'designations': 'designations',
        'retrieve': 'retrieve',
        'repaymentSchedule': 'fetchRepaymentSchedule',
        'updateFacilityDetailsLoanSanction': 'updateFacilityDetailsLoanSanction',
        'saveCampaign':'saveCampaign',
        'updateCbsDetails':'updateCbsDetails',
        'saveAutoCreateChecklist':'saveAutoCreateChecklist',
        'updateChecklistActivity':'updateChecklistActivity',
        'updateCompanyRepresentative': 'updateCompanyRepresentative',
        "saveCompanyRepresentative": "saveCompanyRepresentative",
        'fetchEligibilityDtls': 'fetchEligilibilityDetails',
        "checkDocumentStatus":"checkDocumentStatus",
        "breEligiblityCheck": "breEligiblityCheck",
        "fetchDemographicDetails": "fetchDemographicDetails"
    }
    commonProperty_static = commonProperty_static
    encryptionHeaders = {
        clientApiKey: this.tenentConfiguration.clientApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    homeMenu = homeMenu
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {
      'BL10AB': appConfig.banner
    };
    loanProductInfo = loanProductInfo
    getHelpInfo = getHelpInfo
    rejectionConsent = rejectionConsent
    AadharConsent = AadharConsent
    breadCrumbList = [
        {
            name: "home",
            label: "Home",
            url: "/1/landing",
            isActive: true,
        },
        {
            name: "products",
            label: "Products",
            url: "/1/landing",
            isActive: true,
        },
        {
            name: "savingsAccount",
            label: "Savings Account",
            url: "1/savings-account/product-description",
            isActive: false,
        },
    ];
    /*product desc page jsons*/
    productDesc = {};
    productDescInfoTabs = {};
    pageSequenceData = {
        'BL10AB': appConfig.pageSequenceData
    };
    stepperData = {
      'BL10AB': appConfig.stepperData
    };
    dynamicComponentLayout = {
        columnSize: 1,
    };
    stepper_test_data = [
        {
            name: "Basic Information",
            info: "10MinVerifyYou",
            isActive: true,
            isCompleted: true,
            subStep: [
                {
                    id: "001",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: true,
                },
                {
                    id: "002",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: false,
                },
                {
                    id: "003",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: false,
                },
                {
                    id: "004",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: false,
                },
                {
                    id: "005",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: false,
                },
            ],
            subStepWidth: "16%",
        },
        {
            name: "borrower",
            info: "10MinVerifyYou",
            isActive: true,
            isCompleted: true,
            subStep: [
                {
                    id: "001",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: true,
                },
                {
                    id: "002",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: true,
                },
            ],
            subStepWidth: "40%",
        },
        {
            name: "consentDocument",
            info: "10MinVerifyYou",
            isActive: true,
            isCompleted: false,
            subStep: [
                {
                    id: "001",
                    name: "subStep1",
                    isActive: true,
                    isCompleted: false,
                },
                {
                    id: "002",
                    name: "subStep1",
                    isActive: false,
                    isCompleted: false,
                },
            ],
            subStepWidth: "40%",
        },
        {
            name: "acknowledgement",
            info: "10MinVerifyYou",
            isActive: false,
            isCompleted: false,
        },
    ];
    verifiedFieldsData = {
        'BL10AB': {
            "individual": [
                {
                    "name": "Mobile Number",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'MOBILE_VERIFY',
                },
                {
                    "name": "Email",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'EMAIL_VERIFY',
                },
                {
                    "name": "PAN",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'PAN_VERIFY',
                },
                {
                    "name": "Aadhaar Number",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'EKYC_VERIFY'
                },
                {
                    "name": "Address Details",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'ADDRESS_DETAILS'
                },
                {
                    "name": "More Information",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'MORE_INFO'
                },
                {
                    "name": "personal Details",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'PERSONAL_DETAILS'
                },
                {
                    "name": "product selection",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'PRODUCT_SELECTION'
                }
            ],
            'company': [],
            'group': []
        }
    };
    tabsData = {
        BL10AB: appConfig.tabsData
    };
    pageSectionConfig = {
        'BL10AB': appConfig.pageSectionConfig  
    };
    pageMetaConfig = {
        'BL10AB': appConfig.pageMetaConfig
    };
    productDocumentList = appConfig.productDocumentList;
    videokycList = {};
    applicationErrorCodes = {
        BL10AB: {},
    };
    journeyEventCodes = {
        BL10AB: appConfig.journeyEventCodes
    };
    productLocalisations = {
        BL10AB: {
            SYSTEM_DOWN: "currently our servers are down please try after some time",
            SWR: "Something Went Wrong!!",
        }
    };
    flowTags = {};
}
