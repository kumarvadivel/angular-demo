import {Injectable} from '@angular/core';
import { AadharConsent, commonProperty_static, getHelpInfo, homeBanner, homeMenu, landingPageBanner, loanProductInfo, rejectionConsent } from '@hl-app/services/utils/data';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonVariableService {
    journey: any;
    _journeyEvents = new Subject<void>();
    _journeyEvents$ = this._journeyEvents.asObservable()
    _formSubmitEvents = new Subject<void>();
    _formSubmitEvents$ = this._formSubmitEvents.asObservable()
    scopeSubject = new Subject<void>();
    scopeSubject$ = this.scopeSubject.asObservable()
    selectedProductInfo: any;
    validLoans: any = [];
    reqSupportingDocList: any = [];
    borrowerDetails: any = [];
    disableProceedBtn: boolean = true;
    uploadedDocList: any = [];
    esignTxnId;
    selectedFile = '';
    globalLoaderState = false;
    documentList: any = [];
    sanctionProceedBtnEnable: boolean = false
    customDataDetails: any = {}
    customLoanData: any = {}
    isConsentValid = false;
    themeConfiguration = {
        "themeSelection": "theme1"
    }
    appLayoutConfig = {
        isShowJourneyHeader: true,
        isShowJourneyFooter: true,
        isShowSubStepper: true,
        isShowStepperPercentage: true,
        mobileView: false,
    }
    tenentConfiguration = {
        "applicationTheme": "default",
        "clientApiKey_orignal": 'r3hi1dBLmAfKgugG',
        'clientApiKey': 'defaultKey',
        'landingContentView': 'PRODUCT',
        "FETCH_PRODUCT_CONFIG_FROM_JSON_FILE": true,
        "removeAccessToken":true,
        "IG_API_KEY":'api-v3',
        "devMode": false,
        "encrypt-configuration": true,
        "campaign_parameters":["partner","websiteUrl","utm_id","utm_source","utm_medium","utm_campaign","utm_code","offerId","leadId","accountId","remarksAndSampleUrl","utm_content","object_type","object_id","utm_term"]
    }
    readonly FETCH_FLOW_METHOD_MAPPER= {
        'loanDetails': 'fetchLoanDetails',
        'borrowerDetails': 'fetchBorrowerDetails',
        'documentTypeFetch': 'getSupportingDoc',
        'fetchSalaryAccount': 'fetchSalaryAccount',
        'documentFetch': 'getUploadedDoc',
        'fetchEligibilityData': 'fetchEligiblityData',
        'fetchRepaymentSchedule': 'fetchRepaymentSchedule',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'updatesubStatus': 'updateLoanApplicationStatus',
        'fetchCoApplicant':'fetchCoApplicant',
        'cbsDedupe': 'cbsDedupe',
        'rating_score_personal_loan': 'fetchRatingScorePl',
        'demographicDetailsFetch': 'fetchDemographicDetails',
        "fetchHlAssesmentDetails":"fetchHlAssesmentDetails",
        "fetchPlAssesmentDetails":"fetchPlAssessmentDetails",
        "fetchAssesmentToolData":"fetchAssesmentToolData",
        "fetchHlIncomeAssesmentDetails":"fetchHlIncomeAssesmentDetails",
        "fetchContracts":"fetchContracts",
        'fetchEligibiltyDetails': 'fetchEligilibilityDetails',
        "fetchCoapplicant":"fetchCoapplicant"
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
    static_commonProperty_KeyCodes = ['HOME_BRANCH_STATE', 'HOME_BRANCH_DISTRICT', 'HOME_BRANCH_CITY', 'HOME_BRANCH_NAME', 'STAR_GOLD', 'PINCODE', 'PINCODE_STATE', 'PINCODE_CITY', 'DOCUMENT_TYPE']
    commonProperty_static = commonProperty_static
    encryptionHeaders = {
        'clientApiKey': this.tenentConfiguration.clientApiKey,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    homeMenu = homeMenu;
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {}
    loanProductInfo = loanProductInfo
    getHelpInfo = getHelpInfo
    rejectionConsent = rejectionConsent
    AadharConsent = AadharConsent
    pageSequenceData = {}
    stepperData = {}
    dynamicComponentLayout = {
        "columnSize": 1
    }
    verifiedFieldsData = {
        'HL': {
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
    tabsData = {}
    pageSectionConfig = {}
    pageMetaConfig = {}
    applicationErrorCodes = {
        PTLEX: {}
    }
    journeyEventCodes = {
        PTLEX: {},
    }
    productLocalisations = {
        PTLEX: {
        },
    };
    flowTags = {}
}
