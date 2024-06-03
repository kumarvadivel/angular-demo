import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AadharConsent, 
    commonProperty_static, 
    getHelpInfo, homeBanner, 
    homeMenu, landingPageBanner, 
    loanProductInfo, rejectionConsent} from '../services/utils/data'
import appConfig from '../../configuration/product-configurations/PTLTP.json'
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
    ];
    readonly FETCH_FLOW_METHOD_MAPPER= {
        'loanDetails': 'fetchLoanDetails',
        'borrowerDetails': 'fetchBorrowerDetails',
        'documentTypeFetch': 'getSupportingDoc',
        'fetchSalaryAccount': 'fetchSalaryAccount',
        'documentFetch': 'getUploadedDoc',
        'fetchEligibilityData': 'fetchEligiblityData',
        'fetchEligibiltyDetails': 'fetchEligilibilityDetails',
        'fetchRepaymentSchedule': 'fetchRepaymentSchedule',
        'rating_score_personal_loan': 'fetchRatingScorePl',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'updatesubStatus': 'updateLoanApplicationStatus',
        'fetchCoApplicant':'fetchCoApplicant',
        'cbsDedupe': 'cbsDedupe',
        'demographicDetailsFetch': 'fetchDemographicDetails',
        "fetchHlAssesmentDetails":"fetchHlAssesmentDetails",
        "fetchPlAssesmentDetails":"fetchPlAssessmentDetails",
        "fetchHlIncomeAssesmentDetails":"fetchHlIncomeAssesmentDetails",
        "fetchContracts":"fetchContracts",
        "fetchCoapplicant":"fetchCoapplicant",
        "fetchAssesmentToolData":"fetchAssesmentToolData",
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
        'updatePensionerEmploymentDetails':"updatePensionerEmploymentDetails",
        'fetchEligibiltyDetails': 'fetchEligilibilityDetails',
        'sanctionUpdate': 'updateSanctionDetails',
        'nstpValidate': 'updateSanctionDetails',
        'rating_score_personal_loan': 'fetchRatingScorePl',
        'esignStatus': 'esignFetchStatus',
        'npaCheck': 'npaCheck',
        'borrowerExtraPropertyUpdate': 'borrowerExtraPropertyUpdate',
        'duplicateApplicationCheck': 'duplicateApplicationCheck',
        'saveCampaign':'saveCampaign',
        'addCoApplicant':'addCoApplicant',
        'updateCoApplicant':'updateCoApplicant',
        'deleteCoApplicant':'deleteCoApplicant',
        'lookupUserProfile':'lookupUserProfile',
        'propertyDetailsCreate':'propertyDetailsCreate',
        'validateIdentityNumbersForEntities':'validateIdentityNumbersForEntities'
    }
    commonProperty_static = commonProperty_static
    encryptionHeaders = {
        clientApiKey: this.tenentConfiguration.clientApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    homeMenu = homeMenu;
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {
        'PTLTP': appConfig.banner
    };
    loanProductInfo = loanProductInfo
    getHelpInfo = getHelpInfo
    rejectionConsent = rejectionConsent
    AadharConsent = AadharConsent
    pageSequenceData = {
        'PTLTP': {
            'journeyPages':appConfig.pageSequenceData.journeyPages,
            'otherPages': appConfig.pageSequenceData.otherPages
        },
    };
    stepperData = {
        'PTLTP': appConfig.stepperData
    };
    dynamicComponentLayout = {
        columnSize: 1,
    };
    
    verifiedFieldsData = {
        'PTLTP': {
            "individual": [{
                "name": "Account Number",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "pageCode": 'ACCOUNT_VERIFY',
            },
                {
                    "name": "Aadhar Number",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'EKYC_VERIFY'
                },
                {
                    "name": "More Details",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'MORE_INFO'
                },
                {
                    "name": "More Information",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": 'DOCUMENT_LIST'
                },
            ]
        },
    };
    tabsData = {
        PTLTP:appConfig.tabsData
    };
    pageSectionConfig = {
        'PTLTP': appConfig.pageSectionConfig,
    };
    pageMetaConfig = {
        'PTLTP': appConfig.pageMetaConfig
    };
    applicationErrorCodes = {
        PTLTP: {},
    };
    journeyEventCodes = {
        PTLTP: appConfig.journeyEventCodes,
    };
    productLocalisations = {
        PTLTP: appConfig.localisation
    };
    flowTags = {};
}