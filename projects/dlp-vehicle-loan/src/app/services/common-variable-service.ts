import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { AadharConsent, getHelpInfo, homeBanner, homeMenu, landingPageBanner, loanProductInfo, rejectionConsent } from './utils/data';

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
        "VLN":"SUB_STATUS_20"
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
    ];
    readonly FETCH_FLOW_METHOD_MAPPER= {
        'loanDetails': 'fetchLoanDetails',
        'borrowerDetails': 'fetchBorrowerDetails',
        'documentTypeFetch': 'getSupportingDoc',
        'fetchSalaryAccount': 'fetchSalaryAccount',
        'documentFetch': 'getUploadedDoc',
        'fetchEligibilityData': 'fetchEligiblityData',
        'fetchVehicleList': 'fetchVehicleList',
        'fetchRepaymentSchedule': 'fetchRepaymentSchedule',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'ProductDetails_v3': 'fetchProductDetailInfo'
    }
   readonly SUBMIT_FLOW_METHOD_MAPPER = {
        'assignUserHierarchyUnit': 'assignUserHierarchy',
        'personalProfileUpdate': 'personalProfileUpdate',
        'employmentProfileUpdate': 'EmployeeInfoProfileUpdate',
        'loanUpdate': 'updateLoanApplication',
        'selfemploymentUpdate': 'updateborrowerEmploymentDetails',
        'employeeDetailsUpdate': 'employmentProfileUpdate',
        'updateSelfEmploymentDetails': 'updateSelfEmployment',
        'cibilfetch': 'fetchCibilData',
        'profileUpdate': 'EmployeeInfoProfileUpdate',
        'companyProfileUpdate': 'companyProfileUpdate',
        'applyLoan': 'applyLoan',
        'showBorrowerDetails': 'showBorrowerDetails',
        'updatesubStatus': 'updateLoanApplicationStatus',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
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
        'npaCheck': 'npaCheck',
        'createVehicle': 'createVehicleDetails',
        'updateVehicle': 'updateVehicleDetails',
        'borrowerExtraPropertyUpdate': 'borrowerExtraPropertyUpdate',
        'duplicateApplicationCheck': 'duplicateApplicationCheck',
        'saveCampaign':'saveCampaign',
        'updateLoanApplicationTrackingStatus': 'updateLoanApplicationTrackingStatus',
    }
    commonProperty_static = {
        STATE: [
            {
                optionCode: "AN",
                optionKey: "AN",
                optionName: "ANDAMAN NICOBAR",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "ANDAMAN NICOBAR",
                sortIndex: 0,
            },
            {
                optionCode: "AP",
                optionKey: "AP",
                optionName: "ANDHRA PRADESH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "ANDHRA PRADESH",
                sortIndex: 1,
            },
            {
                optionCode: "AR",
                optionKey: "AR",
                optionName: "ARUNACHAL PRADESH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "ARUNACHAL PRADESH",
                sortIndex: 2,
            },
            {
                optionCode: "AS",
                optionKey: "AS",
                optionName: "ASSAM",
                optionParentCode: "IN",
                optionParentProperty: null,
                optionValue: "ASSAM",
                sortIndex: 3,
            },
            {
                optionCode: "BR",
                optionKey: "BR",
                optionName: "BIHAR",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "BIHAR",
                sortIndex: 4,
            },
            {
                optionCode: "CH",
                optionKey: "CH",
                optionName: "CHANDIGARH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "CHANDIGARH",
                sortIndex: 5,
            },
            {
                optionCode: "CG",
                optionKey: "CG",
                optionName: "CHHATTISGARH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "CHHATTISGARH",
                sortIndex: 6,
            },
            {
                optionCode: "DN",
                optionKey: "DN",
                optionName: "DADRA & NAGAR HAVELI",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "DADRA & NAGAR HAVELI",
                sortIndex: 7,
            },
            {
                optionCode: "DD",
                optionKey: "DD",
                optionName: "DAMAN & DIU",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "DAMAN &DIU",
                sortIndex: 8,
            },
            {
                optionCode: "DL",
                optionKey: "DL",
                optionName: "DELHI",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "DELHI",
                sortIndex: 9,
            },
            {
                optionCode: "GA",
                optionKey: "GA",
                optionName: "GOA",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "GOA",
                sortIndex: 10,
            },
            {
                optionCode: "GJ",
                optionKey: "GJ",
                optionName: "GUJARAT",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "GUJARAT",
                sortIndex: 11,
            },
            {
                optionCode: "HR",
                optionKey: "HR",
                optionName: "HARYANA",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "HARYANA",
                sortIndex: 12,
            },
            {
                optionCode: "HP",
                optionKey: "HP",
                optionName: "HIMACHAL PRADESH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "HIMACHAL PRADESH",
                sortIndex: 13,
            },
            {
                optionCode: "JK",
                optionKey: "JK",
                optionName: "JAMMU & KASHMIR",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "JAMMU & KASHMIR",
                sortIndex: 14,
            },
            {
                optionCode: "JH",
                optionKey: "JH",
                optionName: "JHARKHAND",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "JHARKHAND",
                sortIndex: 15,
            },
            {
                optionCode: "KA",
                optionKey: "KA",
                optionName: "KARNATAKA",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "KARNATAKA",
                sortIndex: 16,
            },
            {
                optionCode: "KL",
                optionKey: "KL",
                optionName: "KERALA",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "KERALA",
                sortIndex: 17,
            },
            {
                optionCode: "LD",
                optionKey: "LD",
                optionName: "LAKSHDWEEP",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "LAKSHDWEEP",
                sortIndex: 18,
            },
            {
                optionCode: "MP",
                optionKey: "MP",
                optionName: "MADHYA PRADESH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "MADHYA PRADESH",
                sortIndex: 19,
            },
            {
                optionCode: "MH",
                optionKey: "MH",
                optionName: "MAHARASHTRA",
                optionParentCode: "IN",
                optionParentProperty: null,
                optionValue: "MAHARASHTRA",
                sortIndex: 20,
            },
            {
                optionCode: "MN",
                optionKey: "MN",
                optionName: "MANIPUR",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "MANIPUR",
                sortIndex: 21,
            },
            {
                optionCode: "ML",
                optionKey: "ML",
                optionName: "MEGHALAYA",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "MEGHALAYA",
                sortIndex: 22,
            },
            {
                optionCode: "MZ",
                optionKey: "MZ",
                optionName: "MIZORAM",
                optionParentCode: "IN",
                optionParentProperty: null,
                optionValue: "MIZORAM",
                sortIndex: 23,
            },
            {
                optionCode: "NL",
                optionKey: "NL",
                optionName: "NAGALAND",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "NAGALAND",
                sortIndex: 24,
            },
            {
                optionCode: "OR",
                optionKey: "OR",
                optionName: "ORISSA",
                optionParentCode: "IN",
                optionParentProperty: null,
                optionValue: "ORISSA",
                sortIndex: 25,
            },
            {
                optionCode: "PY",
                optionKey: "PY",
                optionName: "PONDICHERRY",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "PONDICHERRY",
                sortIndex: 26,
            },
            {
                optionCode: "PB",
                optionKey: "PB",
                optionName: "PUNJAB",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "PUNJAB",
                sortIndex: 27,
            },
            {
                optionCode: "RJ",
                optionKey: "RJ",
                optionName: "RAJASTHAN",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "RAJASTHAN",
                sortIndex: 28,
            },
            {
                optionCode: "SK",
                optionKey: "SK",
                optionName: "SIKKIM",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "SIKKIM",
                sortIndex: 29,
            },
            {
                optionCode: "TN",
                optionKey: "TN",
                optionName: "TAMIL NADU",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "TAMIL NADU",
                sortIndex: 30,
            },
            {
                optionCode: "TS",
                optionKey: "TS",
                optionName: "TELANGANA",
                optionParentCode: "IN",
                optionParentProperty: null,
                optionValue: "TELANGANA",
                sortIndex: 31,
            },
            {
                optionCode: "TR",
                optionKey: "TR",
                optionName: "TRIPURA",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "TRIPURA",
                sortIndex: 32,
            },
            {
                optionCode: "UP",
                optionKey: "UP",
                optionName: "UTTAR PRADESH",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "UTTAR PRADESH",
                sortIndex: 33,
            },
            {
                optionCode: "UK",
                optionKey: "UK",
                optionName: "UTTARANCHAL",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "UTTARANCHAL",
                sortIndex: 34,
            },
            {
                optionCode: "WB",
                optionKey: "WB",
                optionName: "WEST BENGAL",
                optionParentCode: "IN",
                optionParentProperty: "COUNTRY",
                optionValue: "WEST BENGAL",
                sortIndex: 35,
            },
        ],
        DISTRICT: [
            {
                optionCode: "030",
                optionKey: "030",
                optionName: "AIZWAL",
                optionParentCode: "MZ",
                optionParentProperty: null,
                optionValue: "AIZWAL",
                sortIndex: 0,
            },
            {
                optionCode: "966",
                optionKey: "966",
                optionName: "ALAPPUZHA",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "ALAPPUZHA",
                sortIndex: 1,
            },
            {
                optionCode: "267",
                optionKey: "267",
                optionName: "BADAUN",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BADAUN",
                sortIndex: 2,
            },
            {
                optionCode: "869",
                optionKey: "869",
                optionName: "BAGALKOT",
                optionParentCode: "KA",
                optionParentProperty: null,
                optionValue: "BAGALKOT",
                sortIndex: 3,
            },
            {
                optionCode: "244",
                optionKey: "244",
                optionName: "BAHRAICH",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BAHRAICH",
                sortIndex: 4,
            },
            {
                optionCode: "544",
                optionKey: "544",
                optionName: "BANASKANTHA",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "BANASKANTHA",
                sortIndex: 5,
            },
            {
                optionCode: "399",
                optionKey: "399",
                optionName: "BARDHAMAN",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "BARDHAMAN",
                sortIndex: 6,
            },
            {
                optionCode: "628",
                optionKey: "628",
                optionName: "BEED",
                optionParentCode: "MH",
                optionParentProperty: null,
                optionValue: "BEED",
                sortIndex: 7,
            },
            {
                optionCode: "304",
                optionKey: "304",
                optionName: "BHATINDA",
                optionParentCode: "PB",
                optionParentProperty: null,
                optionValue: "BHATINDA",
                sortIndex: 8,
            },
            {
                optionCode: "276",
                optionKey: "276",
                optionName: "BIJNORE",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BIJNORE",
                sortIndex: 9,
            },
            {
                optionCode: "184",
                optionKey: "184",
                optionName: "BOLANGIR",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "BOLANGIR",
                sortIndex: 10,
            },
            {
                optionCode: "100",
                optionKey: "100",
                optionName: "CALCUTTA",
                optionParentCode: "WB",
                optionParentProperty: null,
                optionValue: "CALCUTTA",
                sortIndex: 11,
            },
            {
                optionCode: "022",
                optionKey: "022",
                optionName: "CHACHER",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "CHACHER",
                sortIndex: 12,
            },
            {
                optionCode: "284",
                optionKey: "284",
                optionName: "CHAMOLI",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "CHAMOLI",
                sortIndex: 13,
            },
            {
                optionCode: "877",
                optionKey: "877",
                optionName: "CHIKAMAGLUR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "CHIKAMAGLUR",
                sortIndex: 14,
            },
            {
                optionCode: "535",
                optionKey: "535",
                optionName: "CHITTORGARH",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "CHITTORGARH",
                sortIndex: 15,
            },
            {
                optionCode: "880",
                optionKey: "880",
                optionName: "DAK. KANNADA",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "DAK. KANNADA",
                sortIndex: 16,
            },
            {
                optionCode: "007",
                optionKey: "007",
                optionName: "DARRANGA",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "DARRANGA",
                sortIndex: 17,
            },
            {
                optionCode: "287",
                optionKey: "287",
                optionName: "DEHRADUN",
                optionParentCode: "UA",
                optionParentProperty: null,
                optionValue: "DEHRADUN",
                sortIndex: 18,
            },
            {
                optionCode: "860",
                optionKey: "860",
                optionName: "DHARWAR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "DHARWAR",
                sortIndex: 19,
            },
            {
                optionCode: "256",
                optionKey: "256",
                optionName: "ETWAH",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "ETWAH",
                sortIndex: 20,
            },
            {
                optionCode: "306",
                optionKey: "306",
                optionName: "FEROZEPUR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "FEROZEPUR",
                sortIndex: 21,
            },
            {
                optionCode: "540",
                optionKey: "540",
                optionName: "GANDHI NAGAR",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "GANDHI NAGAR",
                sortIndex: 22,
            },
            {
                optionCode: "084",
                optionKey: "084",
                optionName: "HAZARIBAGH",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "HAZARIBAGH",
                sortIndex: 23,
            },
            {
                optionCode: "350",
                optionKey: "350",
                optionName: "HISSAR",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "HISSAR",
                sortIndex: 24,
            },
            {
                optionCode: "107",
                optionKey: "107",
                optionName: "HOOGHLY",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "HOOGHLY",
                sortIndex: 25,
            },
            {
                optionCode: "110",
                optionKey: "110",
                optionName: "HOWRAH",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "HOWRAH",
                sortIndex: 26,
            },
            {
                optionCode: "081",
                optionKey: "081",
                optionName: "JAHANABAD",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "JAHANABAD",
                sortIndex: 27,
            },
            {
                optionCode: "525",
                optionKey: "525",
                optionName: "JALORE",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "JALORE",
                sortIndex: 28,
            },
            {
                optionCode: "753",
                optionKey: "753",
                optionName: "JANJGIR - CHAMPA",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "JANJGIR - CHAMPA",
                sortIndex: 29,
            },
            {
                optionCode: "707",
                optionKey: "707",
                optionName: "JASHPUR",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "JASHPUR",
                sortIndex: 30,
            },
            {
                optionCode: "255",
                optionKey: "255",
                optionName: "KANNAUJ",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "KANNAUJ",
                sortIndex: 31,
            },
            {
                optionCode: "936",
                optionKey: "936",
                optionName: "KANYAKUMARI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "KANYAKUMARI",
                sortIndex: 32,
            },
            {
                optionCode: "452",
                optionKey: "452",
                optionName: "KATHUA",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "KATHUA",
                sortIndex: 33,
            },
            {
                optionCode: "176",
                optionKey: "176",
                optionName: "KENDUJHAR",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "KENDUJHAR",
                sortIndex: 34,
            },
            {
                optionCode: "085",
                optionKey: "085",
                optionName: "KHAGARIA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "KHAGARIA",
                sortIndex: 35,
            },
            {
                optionCode: "882",
                optionKey: "882",
                optionName: "KODURU",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "KODURU",
                sortIndex: 36,
            },
            {
                optionCode: "586",
                optionKey: "586",
                optionName: "KUCHCHH",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "KUCHCHH",
                sortIndex: 37,
            },
            {
                optionCode: "468",
                optionKey: "468",
                optionName: "KULLU",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "KULLU",
                sortIndex: 38,
            },
            {
                optionCode: "044",
                optionKey: "044",
                optionName: "LOHARDAGA",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "LOHARDAGA",
                sortIndex: 39,
            },
            {
                optionCode: "032",
                optionKey: "032",
                optionName: "LUNGLEH",
                optionParentCode: "MZ",
                optionParentProperty: "STATE",
                optionValue: "LUNGLEH",
                sortIndex: 40,
            },
            {
                optionCode: "983",
                optionKey: "983",
                optionName: "MALAPURAM",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "MALAPURAM",
                sortIndex: 41,
            },
            {
                optionCode: "112",
                optionKey: "112",
                optionName: "MEDINIPUR",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "MEDINIPUR",
                sortIndex: 42,
            },
            {
                optionCode: "346",
                optionKey: "346",
                optionName: "MOHINDERGARH",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "MOHINDERGARH",
                sortIndex: 43,
            },
            {
                optionCode: "124",
                optionKey: "124",
                optionName: "NADIAD",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "NADIAD",
                sortIndex: 44,
            },
            {
                optionCode: "008",
                optionKey: "008",
                optionName: "NALBARI",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "NALBARI",
                sortIndex: 45,
            },
            {
                optionCode: "714",
                optionKey: "714",
                optionName: "NARASINGHPUR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "NARASINGHPUR",
                sortIndex: 46,
            },
            {
                optionCode: "018",
                optionKey: "018",
                optionName: "NORTH CACHER HILLS",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "NORTH CACHER HILLS",
                sortIndex: 47,
            },
            {
                optionCode: "190",
                optionKey: "190",
                optionName: "NORTH TRIPURA",
                optionParentCode: "TR",
                optionParentProperty: "STATE",
                optionValue: "NORTH TRIPURA",
                sortIndex: 48,
            },
            {
                optionCode: "362",
                optionKey: "362",
                optionName: "NORTH WEST",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "NORTH WEST",
                sortIndex: 49,
            },
            {
                optionCode: "086",
                optionKey: "086",
                optionName: "PALAMU",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "PALAMU",
                sortIndex: 50,
            },
            {
                optionCode: "548",
                optionKey: "548",
                optionName: "PANCHMAHAL",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "PANCHMAHAL",
                sortIndex: 51,
            },
            {
                optionCode: "285",
                optionKey: "285",
                optionName: "PAURI GARHWAL",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "PAURI GARHWAL",
                sortIndex: 52,
            },
            {
                optionCode: "990",
                optionKey: "990",
                optionName: "PONDICHERRY",
                optionParentCode: "PY",
                optionParentProperty: "STATE",
                optionValue: "PONDICHERRY",
                sortIndex: 53,
            },
            {
                optionCode: "938",
                optionKey: "938",
                optionName: "PUDUKOTTAI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "PUDUKOTTAI",
                sortIndex: 54,
            },
            {
                optionCode: "434",
                optionKey: "434",
                optionName: "PULWANA",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "PULWANA",
                sortIndex: 55,
            },
            {
                optionCode: "053",
                optionKey: "053",
                optionName: "PURBA CHAMPARAN",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "PURBA CHAMPARAN",
                sortIndex: 56,
            },
            {
                optionCode: "036",
                optionKey: "036",
                optionName: "PURBI SINGBHUM",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "PURBI SINGBHUM",
                sortIndex: 57,
            },
            {
                optionCode: "117",
                optionKey: "117",
                optionName: "PURULIA",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "PURULIA",
                sortIndex: 58,
            },
            {
                optionCode: "204",
                optionKey: "204",
                optionName: "RAIBAREILLY",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "RAIBAREILLY",
                sortIndex: 59,
            },
            {
                optionCode: "838",
                optionKey: "838",
                optionName: "RANGA REDDY",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "RANGA REDDY",
                sortIndex: 60,
            },
            {
                optionCode: "347",
                optionKey: "347",
                optionName: "REWARI",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "REWARI",
                sortIndex: 61,
            },
            {
                optionCode: "546",
                optionKey: "546",
                optionName: "SABARKANTHA",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "SABARKANTHA",
                sortIndex: 62,
            },
            {
                optionCode: "231",
                optionKey: "231",
                optionName: "SANT RAVIDAS NAGAR BHADOHI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SANT RAVIDAS NAGAR BHADOHI",
                sortIndex: 63,
            },
            {
                optionCode: "048",
                optionKey: "048",
                optionName: "SAUPAL",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "SAUPAL",
                sortIndex: 64,
            },
            {
                optionCode: "460",
                optionKey: "460",
                optionName: "SHIMLA",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "SHIMLA",
                sortIndex: 65,
            },
            {
                optionCode: "610",
                optionKey: "610",
                optionName: "SHOLAPUR",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "SHOLAPUR",
                sortIndex: 66,
            },
            {
                optionCode: "480",
                optionKey: "480",
                optionName: "SIRMOUR",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "SIRMOUR",
                sortIndex: 67,
            },
            {
                optionCode: "357",
                optionKey: "357",
                optionName: "SONEPAT",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "SONEPAT",
                sortIndex: 68,
            },
            {
                optionCode: "199",
                optionKey: "199",
                optionName: "SOUTH SIKKIM",
                optionParentCode: "SK",
                optionParentProperty: "STATE",
                optionValue: "SOUTH SIKKIM",
                sortIndex: 69,
            },
            {
                optionCode: "364",
                optionKey: "364",
                optionName: "SOUTH WEST",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "SOUTH WEST",
                sortIndex: 70,
            },
            {
                optionCode: "563",
                optionKey: "563",
                optionName: "THE DANGS",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "THE DANGS",
                sortIndex: 71,
            },
            {
                optionCode: "918",
                optionKey: "918",
                optionName: "THE NILGIRI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "THE NILGIRI",
                sortIndex: 72,
            },
            {
                optionCode: "934",
                optionKey: "934",
                optionName: "TIRUNELVELI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "TIRUNELVELI",
                sortIndex: 73,
            },
            {
                optionCode: "902",
                optionKey: "902",
                optionName: "TIRUVALLUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "TIRUVALLUR",
                sortIndex: 74,
            },
            {
                optionCode: "960",
                optionKey: "960",
                optionName: "TRIVANDRUM",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "TRIVANDRUM",
                sortIndex: 75,
            },
            {
                optionCode: "881",
                optionKey: "881",
                optionName: "UDUPI",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "UDUPI",
                sortIndex: 76,
            },
            {
                optionCode: "872",
                optionKey: "872",
                optionName: "UTTAR KANNADA",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "UTTAR KANNADA",
                sortIndex: 77,
            },
            {
                optionCode: "289",
                optionKey: "289",
                optionName: "UTTARKASHI",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "UTTARKASHI",
                sortIndex: 78,
            },
            {
                optionCode: "550",
                optionKey: "550",
                optionName: "VADODARA",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "VADODARA",
                sortIndex: 79,
            },
            {
                optionCode: "812",
                optionKey: "812",
                optionName: "VISHAKHAPATNAM",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "VISHAKHAPATNAM",
                sortIndex: 80,
            },
            {
                optionCode: "064",
                optionKey: "064",
                optionName: "WEST CHAMPARAN",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "WEST CHAMPARAN",
                sortIndex: 81,
            },
            {
                optionCode: "130",
                optionKey: "130",
                optionName: "WEST DINAJPUR",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "WEST DINAJPUR",
                sortIndex: 82,
            },
            {
                optionCode: "634",
                optionKey: "634",
                optionName: "YEOTAMAL",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "YEOTAMAL",
                sortIndex: 83,
            },
            {
                optionCode: "301",
                optionKey: "301",
                optionName: "A&N ISLANDS",
                optionParentCode: "AN",
                optionParentProperty: "STATE",
                optionValue: "A&N ISLANDS",
                sortIndex: 84,
            },
            {
                optionCode: "644",
                optionKey: "644",
                optionName: "AMRAVATI",
                optionParentCode: "MH",
                optionParentProperty: null,
                optionValue: "AMRAOTI",
                sortIndex: 85,
            },
            {
                optionCode: "083",
                optionKey: "083",
                optionName: "ARARIA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "ARARIA",
                sortIndex: 86,
            },
            {
                optionCode: "261",
                optionKey: "261",
                optionName: "ARIYALUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "ARIYALUR",
                sortIndex: 87,
            },
            {
                optionCode: "432",
                optionKey: "432",
                optionName: "BADGAM",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "BADGAM",
                sortIndex: 88,
            },
            {
                optionCode: "202",
                optionKey: "202",
                optionName: "BARABANKI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BARABANKI",
                sortIndex: 89,
            },
            {
                optionCode: "877",
                optionKey: "877",
                optionName: "CHIKAMANGALUR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "CHIKAMANGALUR",
                sortIndex: 90,
            },
            {
                optionCode: "742",
                optionKey: "742",
                optionName: "DATIA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "DATIA",
                sortIndex: 91,
            },
            {
                optionCode: "704",
                optionKey: "704",
                optionName: "DHAMTARI",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "DHAMTARI",
                sortIndex: 92,
            },
            {
                optionCode: "410",
                optionKey: "410",
                optionName: "DHEMAJI",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "DHEMAJI",
                sortIndex: 93,
            },
            {
                optionCode: "094",
                optionKey: "094",
                optionName: "EAST SIANG",
                optionParentCode: "AR",
                optionParentProperty: "STATE",
                optionValue: "EAST SIANG",
                sortIndex: 94,
            },
            {
                optionCode: "976",
                optionKey: "976",
                optionName: "IDUKI",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "IDUKI",
                sortIndex: 95,
            },
            {
                optionCode: "152",
                optionKey: "152",
                optionName: "IMPHAL",
                optionParentCode: "MN",
                optionParentProperty: "STATE",
                optionValue: "IMPHAL",
                sortIndex: 96,
            },
            {
                optionCode: "037",
                optionKey: "037",
                optionName: "KAIMUR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "KAIMUR",
                sortIndex: 97,
            },
            {
                optionCode: "989",
                optionKey: "989",
                optionName: "KASARGODE",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "KASARGODE",
                sortIndex: 98,
            },
            {
                optionCode: "765",
                optionKey: "765",
                optionName: "KAWARDHA",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "KAWARDHA",
                sortIndex: 99,
            },
            {
                optionCode: "049",
                optionKey: "049",
                optionName: "KISHANGANJ",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "KISHANGANJ",
                sortIndex: 100,
            },
            {
                optionCode: "755",
                optionKey: "755",
                optionName: "KORBA",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "KORBA",
                sortIndex: 101,
            },
            {
                optionCode: "436",
                optionKey: "436",
                optionName: "KUPWARA",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "KUPWARA",
                sortIndex: 102,
            },
            {
                optionCode: "551",
                optionKey: "551",
                optionName: "NARMADA",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "NARMADA",
                sortIndex: 103,
            },
            {
                optionCode: "557",
                optionKey: "557",
                optionName: "NAVSARI",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "NAVSARI",
                sortIndex: 104,
            },
            {
                optionCode: "059",
                optionKey: "059",
                optionName: "NAWADA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "NAWADA",
                sortIndex: 105,
            },
            {
                optionCode: "448",
                optionKey: "448",
                optionName: "RAJOURI",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "RAJOURI",
                sortIndex: 106,
            },
            {
                optionCode: "067",
                optionKey: "067",
                optionName: "ROHTAS",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "ROHTAS",
                sortIndex: 107,
            },
            {
                optionCode: "150",
                optionKey: "150",
                optionName: "SENAPATI",
                optionParentCode: "MN",
                optionParentProperty: "STATE",
                optionValue: "SENAPATI",
                sortIndex: 108,
            },
            {
                optionCode: "749",
                optionKey: "749",
                optionName: "SHAHDOL",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SHAHDOL",
                sortIndex: 109,
            },
            {
                optionCode: "737",
                optionKey: "737",
                optionName: "SHIVPURI",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SHIVPURI",
                sortIndex: 110,
            },
            {
                optionCode: "748",
                optionKey: "748",
                optionName: "SIDHI",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SIDHI",
                sortIndex: 111,
            },
            {
                optionCode: "506",
                optionKey: "506",
                optionName: "SWAIMADHOPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "SWAIMADHOPUR",
                sortIndex: 112,
            },
            {
                optionCode: "743",
                optionKey: "743",
                optionName: "TIKAMGARH",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "TIKAMGARH",
                sortIndex: 113,
            },
            {
                optionCode: "910",
                optionKey: "910",
                optionName: "TIRUCHIRAPPALLI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "TIRUCHIRAPPALLI",
                sortIndex: 114,
            },
            {
                optionCode: "988",
                optionKey: "988",
                optionName: "WAYANAD",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "WAYANAD",
                sortIndex: 115,
            },
            {
                optionCode: "805",
                optionKey: "805",
                optionName: "ADILABAD",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "ADILABAD",
                sortIndex: 116,
            },
            {
                optionCode: "260",
                optionKey: "260",
                optionName: "AGRA",
                optionParentCode: "UP",
                optionParentProperty: null,
                optionValue: "AGRA",
                sortIndex: 117,
            },
            {
                optionCode: "570",
                optionKey: "570",
                optionName: "AHMEDABAD",
                optionParentCode: "GJ",
                optionParentProperty: null,
                optionValue: "AHMEDABAD",
                sortIndex: 118,
            },
            {
                optionCode: "510",
                optionKey: "510",
                optionName: "AJMER",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "AJMER",
                sortIndex: 119,
            },
            {
                optionCode: "646",
                optionKey: "646",
                optionName: "AKOLA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "AKOLA",
                sortIndex: 120,
            },
            {
                optionCode: "264",
                optionKey: "264",
                optionName: "ALIGARH",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "ALIGARH",
                sortIndex: 121,
            },
            {
                optionCode: "220",
                optionKey: "220",
                optionName: "ALLAHABAD",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "ALLAHABAD",
                sortIndex: 122,
            },
            {
                optionCode: "282",
                optionKey: "282",
                optionName: "ALMORA",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "ALMORA",
                sortIndex: 123,
            },
            {
                optionCode: "502",
                optionKey: "502",
                optionName: "ALWAR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "ALWAR",
                sortIndex: 124,
            },
            {
                optionCode: "340",
                optionKey: "340",
                optionName: "AMBALA",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "AMBALA",
                sortIndex: 125,
            },
            {
                optionCode: "215",
                optionKey: "215",
                optionName: "AMBEDKAR NAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "AMBEDKAR NAGAR",
                sortIndex: 126,
            },
            {
                optionCode: "574",
                optionKey: "574",
                optionName: "AMRELI",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "AMRELI",
                sortIndex: 127,
            },
            {
                optionCode: "310",
                optionKey: "310",
                optionName: "AMRITSAR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "AMRITSAR",
                sortIndex: 128,
            },
            {
                optionCode: "567",
                optionKey: "567",
                optionName: "ANAND",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "ANAND",
                sortIndex: 129,
            },
            {
                optionCode: "829",
                optionKey: "829",
                optionName: "ANANTAPUR",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "ANANTAPUR",
                sortIndex: 130,
            },
            {
                optionCode: "444",
                optionKey: "444",
                optionName: "ANANTNAG",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "ANANTNAG",
                sortIndex: 131,
            },
            {
                optionCode: "624",
                optionKey: "624",
                optionName: "AURANGABAD",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "AURANGABAD",
                sortIndex: 132,
            },
            {
                optionCode: "226",
                optionKey: "226",
                optionName: "AZAMGARH",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "AZAMGARH",
                sortIndex: 133,
            },
            {
                optionCode: "172",
                optionKey: "172",
                optionName: "BALESHWAR",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "BALESHWAR",
                sortIndex: 134,
            },
            {
                optionCode: "235",
                optionKey: "235",
                optionName: "BALLIA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BALLIA",
                sortIndex: 135,
            },
            {
                optionCode: "241",
                optionKey: "241",
                optionName: "BALRAMPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BALRAMPUR",
                sortIndex: 136,
            },
            {
                optionCode: "218",
                optionKey: "218",
                optionName: "BANDA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BANDA",
                sortIndex: 137,
            },
            {
                optionCode: "046",
                optionKey: "046",
                optionName: "BANKA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "BANKA",
                sortIndex: 138,
            },
            {
                optionCode: "115",
                optionKey: "115",
                optionName: "BANKURA",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "BANKURA",
                sortIndex: 139,
            },
            {
                optionCode: "534",
                optionKey: "534",
                optionName: "BANSWARA",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BANSWARA",
                sortIndex: 140,
            },
            {
                optionCode: "442",
                optionKey: "442",
                optionName: "BARAMULLA",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "BARAMULLA",
                sortIndex: 141,
            },
            {
                optionCode: "512",
                optionKey: "512",
                optionName: "BARAN",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BARAN",
                sortIndex: 142,
            },
            {
                optionCode: "250",
                optionKey: "250",
                optionName: "BAREILLY",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BAREILLY",
                sortIndex: 143,
            },
            {
                optionCode: "523",
                optionKey: "523",
                optionName: "BARMER",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BARMER",
                sortIndex: 144,
            },
            {
                optionCode: "021",
                optionKey: "021",
                optionName: "BARPETA",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "BARPETA",
                sortIndex: 145,
            },
            {
                optionCode: "723",
                optionKey: "723",
                optionName: "BARWANI",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "BARWANI",
                sortIndex: 146,
            },
            {
                optionCode: "762",
                optionKey: "762",
                optionName: "BASTAR",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "BASTAR",
                sortIndex: 147,
            },
            {
                optionCode: "242",
                optionKey: "242",
                optionName: "BASTI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BASTI",
                sortIndex: 148,
            },
            {
                optionCode: "077",
                optionKey: "077",
                optionName: "BEGUSARAI",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "BEGUSARAI",
                sortIndex: 149,
            },
            {
                optionCode: "870",
                optionKey: "870",
                optionName: "BELGAUM",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "BELGAUM",
                sortIndex: 150,
            },
            {
                optionCode: "858",
                optionKey: "858",
                optionName: "BELLARY",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "BELLARY",
                sortIndex: 151,
            },
            {
                optionCode: "717",
                optionKey: "717",
                optionName: "BETUL",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "BETUL",
                sortIndex: 152,
            },
            {
                optionCode: "171",
                optionKey: "171",
                optionName: "BHADRAK",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "BHADRAK",
                sortIndex: 153,
            },
            {
                optionCode: "080",
                optionKey: "080",
                optionName: "BHAGALPUR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "BHAGALPUR",
                sortIndex: 154,
            },
            {
                optionCode: "638",
                optionKey: "638",
                optionName: "BHANDARA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "BHANDARA",
                sortIndex: 155,
            },
            {
                optionCode: "504",
                optionKey: "504",
                optionName: "BHARATPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BHARATPUR",
                sortIndex: 156,
            },
            {
                optionCode: "553",
                optionKey: "553",
                optionName: "BHARUCH",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "BHARUCH",
                sortIndex: 157,
            },
            {
                optionCode: "572",
                optionKey: "572",
                optionName: "BHAVNAGAR",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "BHAVNAGAR",
                sortIndex: 158,
            },
            {
                optionCode: "508",
                optionKey: "508",
                optionName: "BHILWARA",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BHILWARA",
                sortIndex: 159,
            },
            {
                optionCode: "739",
                optionKey: "739",
                optionName: "BHIND",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "BHIND",
                sortIndex: 160,
            },
            {
                optionCode: "359",
                optionKey: "359",
                optionName: "BHIWANI",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "BHIWANI",
                sortIndex: 161,
            },
            {
                optionCode: "052",
                optionKey: "052",
                optionName: "BHOJPUR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "BHOJPUR",
                sortIndex: 162,
            },
            {
                optionCode: "764",
                optionKey: "764",
                optionName: "BHOPAL",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "BHOPAL",
                sortIndex: 163,
            },
            {
                optionCode: "866",
                optionKey: "866",
                optionName: "BIDAR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "BIDAR",
                sortIndex: 164,
            },
            {
                optionCode: "868",
                optionKey: "868",
                optionName: "BIJAPUR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "BIJAPUR",
                sortIndex: 165,
            },
            {
                optionCode: "520",
                optionKey: "520",
                optionName: "BIKANER",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BIKANER",
                sortIndex: 166,
            },
            {
                optionCode: "754",
                optionKey: "754",
                optionName: "BILASPUR",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "BILASPUR",
                sortIndex: 167,
            },
            {
                optionCode: "122",
                optionKey: "122",
                optionName: "BIRBHUM",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "BIRBHUM",
                sortIndex: 168,
            },
            {
                optionCode: "035",
                optionKey: "035",
                optionName: "BOKARO",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "BOKARO",
                sortIndex: 169,
            },
            {
                optionCode: "268",
                optionKey: "268",
                optionName: "BULANDSHAHR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BULANDSHAHR",
                sortIndex: 170,
            },
            {
                optionCode: "648",
                optionKey: "648",
                optionName: "BULDHANA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "BULDHANA",
                sortIndex: 171,
            },
            {
                optionCode: "536",
                optionKey: "536",
                optionName: "BUNDI",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "BUNDI",
                sortIndex: 172,
            },
            {
                optionCode: "045",
                optionKey: "045",
                optionName: "BUXAR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "BUXAR",
                sortIndex: 173,
            },
            {
                optionCode: "195",
                optionKey: "195",
                optionName: "CAR NICOBAR",
                optionParentCode: "AN",
                optionParentProperty: "STATE",
                optionValue: "CAR NICOBAR",
                sortIndex: 174,
            },
            {
                optionCode: "358",
                optionKey: "358",
                optionName: "CENTRAL DELHI",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "CENTRAL DELHI",
                sortIndex: 175,
            },
            {
                optionCode: "851",
                optionKey: "851",
                optionName: "CHAMARAJANAGAR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "CHAMARAJANAGAR",
                sortIndex: 176,
            },
            {
                optionCode: "472",
                optionKey: "472",
                optionName: "CHAMBA",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "CHAMBA",
                sortIndex: 177,
            },
            {
                optionCode: "233",
                optionKey: "233",
                optionName: "CHAMPAWAT",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "CHAMPAWAT",
                sortIndex: 178,
            },
            {
                optionCode: "229",
                optionKey: "229",
                optionName: "CHANDAULI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "CHANDAULI",
                sortIndex: 179,
            },
            {
                optionCode: "157",
                optionKey: "157",
                optionName: "CHANDEL",
                optionParentCode: "MN",
                optionParentProperty: "STATE",
                optionValue: "CHANDEL",
                sortIndex: 180,
            },
            {
                optionCode: "390",
                optionKey: "390",
                optionName: "CHANDIGARH",
                optionParentCode: "CH",
                optionParentProperty: "STATE",
                optionValue: "CHANDIGARH",
                sortIndex: 181,
            },
            {
                optionCode: "636",
                optionKey: "636",
                optionName: "CHANDRAPUR",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "CHANDRAPUR",
                sortIndex: 182,
            },
            {
                optionCode: "900",
                optionKey: "900",
                optionName: "CHENNAI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "CHENNAI",
                sortIndex: 183,
            },
            {
                optionCode: "744",
                optionKey: "744",
                optionName: "CHHATARPUR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "CHHATARPUR",
                sortIndex: 184,
            },
            {
                optionCode: "715",
                optionKey: "715",
                optionName: "CHHINDWARA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "CHHINDWARA",
                sortIndex: 185,
            },
            {
                optionCode: "856",
                optionKey: "856",
                optionName: "CHITRADURGA",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "CHITRADURGA",
                sortIndex: 186,
            },
            {
                optionCode: "826",
                optionKey: "826",
                optionName: "CHITTOOR",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "CHITTOOR",
                sortIndex: 187,
            },
            {
                optionCode: "516",
                optionKey: "516",
                optionName: "CHURU",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "CHURU",
                sortIndex: 188,
            },
            {
                optionCode: "920",
                optionKey: "920",
                optionName: "COIMBATORE",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "COIMBATORE",
                sortIndex: 189,
            },
            {
                optionCode: "906",
                optionKey: "906",
                optionName: "CUDDALORE",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "CUDDALORE",
                sortIndex: 190,
            },
            {
                optionCode: "170",
                optionKey: "170",
                optionName: "CUTTACK",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "CUTTACK",
                sortIndex: 191,
            },
            {
                optionCode: "694",
                optionKey: "694",
                optionName: "DAMAN",
                optionParentCode: "DD",
                optionParentProperty: "STATE",
                optionValue: "DAMAN",
                sortIndex: 192,
            },
            {
                optionCode: "708",
                optionKey: "708",
                optionName: "DAMOH",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "DAMOH",
                sortIndex: 193,
            },
            {
                optionCode: "074",
                optionKey: "074",
                optionName: "DARBHANGA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "DARBHANGA",
                sortIndex: 194,
            },
            {
                optionCode: "509",
                optionKey: "509",
                optionName: "DAUSA",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "DAUSA",
                sortIndex: 195,
            },
            {
                optionCode: "040",
                optionKey: "040",
                optionName: "DEOGHAR",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "DEOGHAR",
                sortIndex: 196,
            },
            {
                optionCode: "236",
                optionKey: "236",
                optionName: "DEORIA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "DEORIA",
                sortIndex: 197,
            },
            {
                optionCode: "719",
                optionKey: "719",
                optionName: "DEWAS",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "DEWAS",
                sortIndex: 198,
            },
            {
                optionCode: "082",
                optionKey: "082",
                optionName: "DHANBAD",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "DHANBAD",
                sortIndex: 199,
            },
            {
                optionCode: "724",
                optionKey: "724",
                optionName: "DHAR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "DHAR",
                sortIndex: 200,
            },
            {
                optionCode: "916",
                optionKey: "916",
                optionName: "DHARMAPURI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "DHARMAPURI",
                sortIndex: 201,
            },
            {
                optionCode: "178",
                optionKey: "178",
                optionName: "DHENKANAL",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "DHENKANAL",
                sortIndex: 202,
            },
            {
                optionCode: "019",
                optionKey: "019",
                optionName: "DHUBRI",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "DHUBRI",
                sortIndex: 203,
            },
            {
                optionCode: "654",
                optionKey: "654",
                optionName: "DHULE",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "DHULE",
                sortIndex: 204,
            },
            {
                optionCode: "097",
                optionKey: "097",
                optionName: "DIBANG VALLEY",
                optionParentCode: "AR",
                optionParentProperty: "STATE",
                optionValue: "DIBANG VALLEY",
                sortIndex: 205,
            },
            {
                optionCode: "009",
                optionKey: "009",
                optionName: "DIBRUGARH",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "DIBRUGARH",
                sortIndex: 206,
            },
            {
                optionCode: "939",
                optionKey: "939",
                optionName: "DINDIGUL",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "DINDIGUL",
                sortIndex: 207,
            },
            {
                optionCode: "711",
                optionKey: "711",
                optionName: "DINDORI",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "DINDORI",
                sortIndex: 208,
            },
            {
                optionCode: "456",
                optionKey: "456",
                optionName: "DODA",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "DODA",
                sortIndex: 209,
            },
            {
                optionCode: "041",
                optionKey: "041",
                optionName: "DUMKA",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "DUMKA",
                sortIndex: 210,
            },
            {
                optionCode: "533",
                optionKey: "533",
                optionName: "DUNGARPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "DUNGARPUR",
                sortIndex: 211,
            },
            {
                optionCode: "750",
                optionKey: "750",
                optionName: "DURG",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "DURG",
                sortIndex: 212,
            },
            {
                optionCode: "367",
                optionKey: "367",
                optionName: "EAST DELHI",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "EAST DELHI",
                sortIndex: 213,
            },
            {
                optionCode: "023",
                optionKey: "023",
                optionName: "EAST GARO HILLS",
                optionParentCode: "ML",
                optionParentProperty: "STATE",
                optionValue: "EAST GARO HILLS",
                sortIndex: 214,
            },
            {
                optionCode: "810",
                optionKey: "810",
                optionName: "EAST GODAVARI",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "EAST GODAVARI",
                sortIndex: 215,
            },
            {
                optionCode: "026",
                optionKey: "026",
                optionName: "EAST KHASI HILLS",
                optionParentCode: "ML",
                optionParentProperty: "STATE",
                optionValue: "EAST KHASI HILLS",
                sortIndex: 216,
            },
            {
                optionCode: "718",
                optionKey: "718",
                optionName: "EAST NIMAR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "EAST NIMAR",
                sortIndex: 217,
            },
            {
                optionCode: "196",
                optionKey: "196",
                optionName: "EAST SIKKIM",
                optionParentCode: "SK",
                optionParentProperty: "STATE",
                optionValue: "EAST SIKKIM",
                sortIndex: 218,
            },
            {
                optionCode: "970",
                optionKey: "970",
                optionName: "ERNAKULAM",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "ERNAKULAM",
                sortIndex: 219,
            },
            {
                optionCode: "924",
                optionKey: "924",
                optionName: "ERODE",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "ERODE",
                sortIndex: 220,
            },
            {
                optionCode: "266",
                optionKey: "266",
                optionName: "ETAH",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "ETAH",
                sortIndex: 221,
            },
            {
                optionCode: "224",
                optionKey: "224",
                optionName: "FAIZABAD",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "FAIZABAD",
                sortIndex: 222,
            },
            {
                optionCode: "361",
                optionKey: "361",
                optionName: "FARIDABAD",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "FARIDABAD",
                sortIndex: 223,
            },
            {
                optionCode: "336",
                optionKey: "336",
                optionName: "FARIDKOT",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "FARIDKOT",
                sortIndex: 224,
            },
            {
                optionCode: "318",
                optionKey: "318",
                optionName: "FATEHGARH SAHIB",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "FATEHGARH SAHIB",
                sortIndex: 225,
            },
            {
                optionCode: "208",
                optionKey: "208",
                optionName: "FATEHPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "FATEHPUR",
                sortIndex: 226,
            },
            {
                optionCode: "859",
                optionKey: "859",
                optionName: "GADAG",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "GADAG",
                sortIndex: 227,
            },
            {
                optionCode: "660",
                optionKey: "660",
                optionName: "GADCHIROLI",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "GADCHIROLI",
                sortIndex: 228,
            },
            {
                optionCode: "518",
                optionKey: "518",
                optionName: "GANGANAGAR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "GANGANAGAR",
                sortIndex: 229,
            },
            {
                optionCode: "162",
                optionKey: "162",
                optionName: "GANJAM",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "GANJAM",
                sortIndex: 230,
            },
            {
                optionCode: "271",
                optionKey: "271",
                optionName: "GAUTAM BUDDHA NAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "GAUTAM BUDDHA NAGAR",
                sortIndex: 231,
            },
            {
                optionCode: "070",
                optionKey: "070",
                optionName: "GAYA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "GAYA",
                sortIndex: 232,
            },
            {
                optionCode: "269",
                optionKey: "269",
                optionName: "GHAZIABAD",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "GHAZIABAD",
                sortIndex: 233,
            },
            {
                optionCode: "234",
                optionKey: "234",
                optionName: "GHAZIPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "GHAZIPUR",
                sortIndex: 234,
            },
            {
                optionCode: "056",
                optionKey: "056",
                optionName: "GIRIDIH",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "GIRIDIH",
                sortIndex: 235,
            },
            {
                optionCode: "003",
                optionKey: "003",
                optionName: "GOALPARA",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "GOALPARA",
                sortIndex: 236,
            },
            {
                optionCode: "013",
                optionKey: "013",
                optionName: "GOLAGHAT",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "GOLAGHAT",
                sortIndex: 237,
            },
            {
                optionCode: "243",
                optionKey: "243",
                optionName: "GONDA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "GONDA",
                sortIndex: 238,
            },
            {
                optionCode: "639",
                optionKey: "639",
                optionName: "GONDIA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "GONDIA",
                sortIndex: 239,
            },
            {
                optionCode: "063",
                optionKey: "063",
                optionName: "GOPALGANJ",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "GOPALGANJ",
                sortIndex: 240,
            },
            {
                optionCode: "240",
                optionKey: "240",
                optionName: "GORAKHPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "GORAKHPUR",
                sortIndex: 241,
            },
            {
                optionCode: "864",
                optionKey: "864",
                optionName: "GULBARGA",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "GULBARGA",
                sortIndex: 242,
            },
            {
                optionCode: "043",
                optionKey: "043",
                optionName: "GUMLA",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "GUMLA",
                sortIndex: 243,
            },
            {
                optionCode: "736",
                optionKey: "736",
                optionName: "GUNA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "GUNA",
                sortIndex: 244,
            },
            {
                optionCode: "822",
                optionKey: "822",
                optionName: "GUNTUR",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "GUNTUR",
                sortIndex: 245,
            },
            {
                optionCode: "312",
                optionKey: "312",
                optionName: "GURDASPUR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "GURDASPUR",
                sortIndex: 246,
            },
            {
                optionCode: "348",
                optionKey: "348",
                optionName: "GURGAON",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "GURGAON",
                sortIndex: 247,
            },
            {
                optionCode: "740",
                optionKey: "740",
                optionName: "GWALIOR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "GWALIOR",
                sortIndex: 248,
            },
            {
                optionCode: "482",
                optionKey: "482",
                optionName: "HAMIRPUR",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "HAMIRPUR",
                sortIndex: 249,
            },
            {
                optionCode: "517",
                optionKey: "517",
                optionName: "HANUMANGARH",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "HANUMANGARH",
                sortIndex: 250,
            },
            {
                optionCode: "706",
                optionKey: "706",
                optionName: "HARDA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "HARDA",
                sortIndex: 251,
            },
            {
                optionCode: "206",
                optionKey: "206",
                optionName: "HARDOI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "HARDOI",
                sortIndex: 252,
            },
            {
                optionCode: "846",
                optionKey: "846",
                optionName: "HASSAN",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "HASSAN",
                sortIndex: 253,
            },
            {
                optionCode: "263",
                optionKey: "263",
                optionName: "HATHRAS",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "HATHRAS",
                sortIndex: 254,
            },
            {
                optionCode: "861",
                optionKey: "861",
                optionName: "HAVERI",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "HAVERI",
                sortIndex: 255,
            },
            {
                optionCode: "627",
                optionKey: "627",
                optionName: "HINGOLI",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "HINGOLI",
                sortIndex: 256,
            },
            {
                optionCode: "716",
                optionKey: "716",
                optionName: "HOSHANGABAD",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "HOSHANGABAD",
                sortIndex: 257,
            },
            {
                optionCode: "332",
                optionKey: "332",
                optionName: "HOSHIARPUR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "HOSHIARPUR",
                sortIndex: 258,
            },
            {
                optionCode: "800",
                optionKey: "800",
                optionName: "HYDERABAD",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "HYDERABAD",
                sortIndex: 259,
            },
            {
                optionCode: "720",
                optionKey: "720",
                optionName: "INDORE",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "INDORE",
                sortIndex: 260,
            },
            {
                optionCode: "710",
                optionKey: "710",
                optionName: "JABALPUR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "JABALPUR",
                sortIndex: 261,
            },
            {
                optionCode: "500",
                optionKey: "500",
                optionName: "JAIPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "JAIPUR",
                sortIndex: 262,
            },
            {
                optionCode: "522",
                optionKey: "522",
                optionName: "JAISALMER",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "JAISALMER",
                sortIndex: 263,
            },
            {
                optionCode: "320",
                optionKey: "320",
                optionName: "JALANDHAR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "JALANDHAR",
                sortIndex: 264,
            },
            {
                optionCode: "212",
                optionKey: "212",
                optionName: "JALAUN",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "JALAUN",
                sortIndex: 265,
            },
            {
                optionCode: "656",
                optionKey: "656",
                optionName: "JALGAON",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "JALGAON",
                sortIndex: 266,
            },
            {
                optionCode: "134",
                optionKey: "134",
                optionName: "JALPAIGURI",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "JALPAIGURI",
                sortIndex: 267,
            },
            {
                optionCode: "450",
                optionKey: "450",
                optionName: "JAMMU",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "JAMMU",
                sortIndex: 268,
            },
            {
                optionCode: "582",
                optionKey: "582",
                optionName: "JAMNAGAR",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "JAMNAGAR",
                sortIndex: 269,
            },
            {
                optionCode: "047",
                optionKey: "047",
                optionName: "JAMUI",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "JAMUI",
                sortIndex: 270,
            },
            {
                optionCode: "228",
                optionKey: "228",
                optionName: "JAUNPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "JAUNPUR",
                sortIndex: 271,
            },
            {
                optionCode: "726",
                optionKey: "726",
                optionName: "JHABUA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "JHABUA",
                sortIndex: 272,
            },
            {
                optionCode: "349",
                optionKey: "349",
                optionName: "JHAJJAR",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "JHAJJAR",
                sortIndex: 273,
            },
            {
                optionCode: "539",
                optionKey: "539",
                optionName: "JHALAWAR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "JHALAWAR",
                sortIndex: 274,
            },
            {
                optionCode: "214",
                optionKey: "214",
                optionName: "JHANSI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "JHANSI",
                sortIndex: 275,
            },
            {
                optionCode: "189",
                optionKey: "189",
                optionName: "JHARSUGUDA",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "JHARSUGUDA",
                sortIndex: 276,
            },
            {
                optionCode: "515",
                optionKey: "515",
                optionName: "JHUNJHUNU",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "JHUNJHUNU",
                sortIndex: 277,
            },
            {
                optionCode: "353",
                optionKey: "353",
                optionName: "JIND",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "JIND",
                sortIndex: 278,
            },
            {
                optionCode: "530",
                optionKey: "530",
                optionName: "JODHPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "JODHPUR",
                sortIndex: 279,
            },
            {
                optionCode: "011",
                optionKey: "011",
                optionName: "JORHAT",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "JORHAT",
                sortIndex: 280,
            },
            {
                optionCode: "576",
                optionKey: "576",
                optionName: "JUNAGADH",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "JUNAGADH",
                sortIndex: 281,
            },
            {
                optionCode: "354",
                optionKey: "354",
                optionName: "KAITHAL",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "KAITHAL",
                sortIndex: 282,
            },
            {
                optionCode: "001",
                optionKey: "001",
                optionName: "KAMRUP",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "KAMRUP",
                sortIndex: 283,
            },
            {
                optionCode: "903",
                optionKey: "903",
                optionName: "KANCHEEPURAM",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "KANCHEEPURAM",
                sortIndex: 284,
            },
            {
                optionCode: "470",
                optionKey: "470",
                optionName: "KANGRA",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "KANGRA",
                sortIndex: 285,
            },
            {
                optionCode: "985",
                optionKey: "985",
                optionName: "KANNUR",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "KANNUR",
                sortIndex: 286,
            },
            {
                optionCode: "314",
                optionKey: "314",
                optionName: "KAPURTHALA",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "KAPURTHALA",
                sortIndex: 287,
            },
            {
                optionCode: "992",
                optionKey: "992",
                optionName: "KARAIKAL",
                optionParentCode: "PY",
                optionParentProperty: "STATE",
                optionValue: "KARAIKAL",
                sortIndex: 288,
            },
            {
                optionCode: "519",
                optionKey: "519",
                optionName: "KARAULI",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "KARAULI",
                sortIndex: 289,
            },
            {
                optionCode: "016",
                optionKey: "016",
                optionName: "KARBI ANGLONG",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "KARBI ANGLONG",
                sortIndex: 290,
            },
            {
                optionCode: "438",
                optionKey: "438",
                optionName: "KARGIL",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "KARGIL",
                sortIndex: 291,
            },
            {
                optionCode: "017",
                optionKey: "017",
                optionName: "KARIMGANJ",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "KARIMGANJ",
                sortIndex: 292,
            },
            {
                optionCode: "807",
                optionKey: "807",
                optionName: "KARIMNAGAR",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "KARIMNAGAR",
                sortIndex: 293,
            },
            {
                optionCode: "342",
                optionKey: "342",
                optionName: "KARNAL",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "KARNAL",
                sortIndex: 294,
            },
            {
                optionCode: "912",
                optionKey: "912",
                optionName: "KARUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "KARUR",
                sortIndex: 295,
            },
            {
                optionCode: "071",
                optionKey: "071",
                optionName: "KATIHAR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "KATIHAR",
                sortIndex: 296,
            },
            {
                optionCode: "709",
                optionKey: "709",
                optionName: "KATNI",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "KATNI",
                sortIndex: 297,
            },
            {
                optionCode: "221",
                optionKey: "221",
                optionName: "KAUSHAMBI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "KAUSHAMBI",
                sortIndex: 298,
            },
            {
                optionCode: "809",
                optionKey: "809",
                optionName: "KHAMMAM",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "KHAMMAM",
                sortIndex: 299,
            },
            {
                optionCode: "566",
                optionKey: "566",
                optionName: "KHEDA",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "KHEDA",
                sortIndex: 300,
            },
            {
                optionCode: "247",
                optionKey: "247",
                optionName: "KHERI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "KHERI",
                sortIndex: 301,
            },
            {
                optionCode: "140",
                optionKey: "140",
                optionName: "KOHIMA",
                optionParentCode: "NL",
                optionParentProperty: "STATE",
                optionValue: "KOHIMA",
                sortIndex: 302,
            },
            {
                optionCode: "020",
                optionKey: "020",
                optionName: "KOKRAJHAR",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "KOKRAJHAR",
                sortIndex: 303,
            },
            {
                optionCode: "852",
                optionKey: "852",
                optionName: "KOLAR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "KOLAR",
                sortIndex: 304,
            },
            {
                optionCode: "608",
                optionKey: "608",
                optionName: "KOLHAPUR",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "KOLHAPUR",
                sortIndex: 305,
            },
            {
                optionCode: "963",
                optionKey: "963",
                optionName: "KOLLAM",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "KOLLAM",
                sortIndex: 306,
            },
            {
                optionCode: "863",
                optionKey: "863",
                optionName: "KOPPAL",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "KOPPAL",
                sortIndex: 307,
            },
            {
                optionCode: "166",
                optionKey: "166",
                optionName: "KORAPUT",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "KORAPUT",
                sortIndex: 308,
            },
            {
                optionCode: "537",
                optionKey: "537",
                optionName: "KOTA",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "KOTA",
                sortIndex: 309,
            },
            {
                optionCode: "968",
                optionKey: "968",
                optionName: "KOTTAYAM",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "KOTTAYAM",
                sortIndex: 310,
            },
            {
                optionCode: "980",
                optionKey: "980",
                optionName: "KOZHIKODE",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "KOZHIKODE",
                sortIndex: 311,
            },
            {
                optionCode: "820",
                optionKey: "820",
                optionName: "KRISHNA",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "KRISHNA",
                sortIndex: 312,
            },
            {
                optionCode: "830",
                optionKey: "830",
                optionName: "KURNOOL",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "KURNOOL",
                sortIndex: 313,
            },
            {
                optionCode: "355",
                optionKey: "355",
                optionName: "KURUKSHETRA",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "KURUKSHETRA",
                sortIndex: 314,
            },
            {
                optionCode: "010",
                optionKey: "010",
                optionName: "LAKHIMPUR",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "LAKHIMPUR",
                sortIndex: 315,
            },
            {
                optionCode: "075",
                optionKey: "075",
                optionName: "LAKHISARAI",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "LAKHISARAI",
                sortIndex: 316,
            },
            {
                optionCode: "662",
                optionKey: "662",
                optionName: "LATUR",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "LATUR",
                sortIndex: 317,
            },
            {
                optionCode: "200",
                optionKey: "200",
                optionName: "LUCKNOW",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "LUCKNOW",
                sortIndex: 318,
            },
            {
                optionCode: "330",
                optionKey: "330",
                optionName: "LUDHIANA",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "LUDHIANA",
                sortIndex: 319,
            },
            {
                optionCode: "068",
                optionKey: "068",
                optionName: "MADHEPURA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "MADHEPURA",
                sortIndex: 320,
            },
            {
                optionCode: "054",
                optionKey: "054",
                optionName: "MADHUBANI",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "MADHUBANI",
                sortIndex: 321,
            },
            {
                optionCode: "930",
                optionKey: "930",
                optionName: "MADURAI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "MADURAI",
                sortIndex: 322,
            },
            {
                optionCode: "834",
                optionKey: "834",
                optionName: "MAHBOOBNAGAR",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "MAHBOOBNAGAR",
                sortIndex: 323,
            },
            {
                optionCode: "994",
                optionKey: "994",
                optionName: "MAHE",
                optionParentCode: "PY",
                optionParentProperty: "STATE",
                optionValue: "MAHE",
                sortIndex: 324,
            },
            {
                optionCode: "542",
                optionKey: "542",
                optionName: "MAHESANA",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "MAHESANA",
                sortIndex: 325,
            },
            {
                optionCode: "258",
                optionKey: "258",
                optionName: "MAINPURI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MAINPURI",
                sortIndex: 326,
            },
            {
                optionCode: "163",
                optionKey: "163",
                optionName: "MALKANGIRI",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "MALKANGIRI",
                sortIndex: 327,
            },
            {
                optionCode: "464",
                optionKey: "464",
                optionName: "MANDI",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "MANDI",
                sortIndex: 328,
            },
            {
                optionCode: "712",
                optionKey: "712",
                optionName: "MANDLA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "MANDLA",
                sortIndex: 329,
            },
            {
                optionCode: "843",
                optionKey: "843",
                optionName: "MANDYA",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "MANDYA",
                sortIndex: 330,
            },
            {
                optionCode: "316",
                optionKey: "316",
                optionName: "MANSA",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "MANSA",
                sortIndex: 331,
            },
            {
                optionCode: "262",
                optionKey: "262",
                optionName: "MATHURA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MATHURA",
                sortIndex: 332,
            },
            {
                optionCode: "802",
                optionKey: "802",
                optionName: "MEDAK",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "MEDAK",
                sortIndex: 333,
            },
            {
                optionCode: "270",
                optionKey: "270",
                optionName: "MEERUT",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MEERUT",
                sortIndex: 334,
            },
            {
                optionCode: "232",
                optionKey: "232",
                optionName: "MIRZAPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MIRZAPUR",
                sortIndex: 335,
            },
            {
                optionCode: "278",
                optionKey: "278",
                optionName: "MORADABAD",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MORADABAD",
                sortIndex: 336,
            },
            {
                optionCode: "738",
                optionKey: "738",
                optionName: "MORENA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "MORENA",
                sortIndex: 337,
            },
            {
                optionCode: "324",
                optionKey: "324",
                optionName: "MUKTSAR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "MUKTSAR",
                sortIndex: 338,
            },
            {
                optionCode: "600",
                optionKey: "600",
                optionName: "MUMBAI",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "MUMBAI",
                sortIndex: 339,
            },
            {
                optionCode: "072",
                optionKey: "072",
                optionName: "MUNGER",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "MUNGER",
                sortIndex: 340,
            },
            {
                optionCode: "126",
                optionKey: "126",
                optionName: "MURSHIDABAD",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "MURSHIDABAD",
                sortIndex: 341,
            },
            {
                optionCode: "272",
                optionKey: "272",
                optionName: "MUZAFFARNAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MUZAFFARNAGAR",
                sortIndex: 342,
            },
            {
                optionCode: "062",
                optionKey: "062",
                optionName: "MUZAFFARPUR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "MUZAFFARPUR",
                sortIndex: 343,
            },
            {
                optionCode: "850",
                optionKey: "850",
                optionName: "MYSORE",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "MYSORE",
                sortIndex: 344,
            },
            {
                optionCode: "397",
                optionKey: "397",
                optionName: "NABARANGAPUR",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "NABARANGAPUR",
                sortIndex: 345,
            },
            {
                optionCode: "511",
                optionKey: "511",
                optionName: "NAGAUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "NAGAUR",
                sortIndex: 346,
            },
            {
                optionCode: "640",
                optionKey: "640",
                optionName: "NAGPUR",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "NAGPUR",
                sortIndex: 347,
            },
            {
                optionCode: "281",
                optionKey: "281",
                optionName: "NAINITAL",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "NAINITAL",
                sortIndex: 348,
            },
            {
                optionCode: "051",
                optionKey: "051",
                optionName: "NALANDA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "NALANDA",
                sortIndex: 349,
            },
            {
                optionCode: "832",
                optionKey: "832",
                optionName: "NALGONDA",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "NALGONDA",
                sortIndex: 350,
            },
            {
                optionCode: "915",
                optionKey: "915",
                optionName: "NAMAKKAL",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "NAMAKKAL",
                sortIndex: 351,
            },
            {
                optionCode: "632",
                optionKey: "632",
                optionName: "NANDED",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "NANDED",
                sortIndex: 352,
            },
            {
                optionCode: "183",
                optionKey: "183",
                optionName: "NAYAGARH",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "NAYAGARH",
                sortIndex: 353,
            },
            {
                optionCode: "729",
                optionKey: "729",
                optionName: "NEEMUCH",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "NEEMUCH",
                sortIndex: 354,
            },
            {
                optionCode: "824",
                optionKey: "824",
                optionName: "NELLORE",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "NELLORE",
                sortIndex: 355,
            },
            {
                optionCode: "290",
                optionKey: "290",
                optionName: "NEW DELHI",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "NEW DELHI",
                sortIndex: 356,
            },
            {
                optionCode: "803",
                optionKey: "803",
                optionName: "NIZAMABAD",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "NIZAMABAD",
                sortIndex: 357,
            },
            {
                optionCode: "101",
                optionKey: "101",
                optionName: "NORTH 24 PARGANAS",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "NORTH 24 PARGANAS",
                sortIndex: 358,
            },
            {
                optionCode: "360",
                optionKey: "360",
                optionName: "NORTH DELHI",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "NORTH DELHI",
                sortIndex: 359,
            },
            {
                optionCode: "690",
                optionKey: "690",
                optionName: "NORTH GOA",
                optionParentCode: "GA",
                optionParentProperty: "STATE",
                optionValue: "NORTH GOA",
                sortIndex: 360,
            },
            {
                optionCode: "630",
                optionKey: "630",
                optionName: "OSMANABAD",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "OSMANABAD",
                sortIndex: 361,
            },
            {
                optionCode: "974",
                optionKey: "974",
                optionName: "PALAKKAD",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "PALAKKAD",
                sortIndex: 362,
            },
            {
                optionCode: "528",
                optionKey: "528",
                optionName: "PALI",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "PALI",
                sortIndex: 363,
            },
            {
                optionCode: "343",
                optionKey: "343",
                optionName: "PANIPAT",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "PANIPAT",
                sortIndex: 364,
            },
            {
                optionCode: "745",
                optionKey: "745",
                optionName: "PANNA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "PANNA",
                sortIndex: 365,
            },
            {
                optionCode: "626",
                optionKey: "626",
                optionName: "PARBHANI",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "PARBHANI",
                sortIndex: 366,
            },
            {
                optionCode: "088",
                optionKey: "088",
                optionName: "PASCHIMI SINGHBHUM",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "PASCHIMI SINGHBHUM",
                sortIndex: 367,
            },
            {
                optionCode: "543",
                optionKey: "543",
                optionName: "PATAN",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "PATAN",
                sortIndex: 368,
            },
            {
                optionCode: "978",
                optionKey: "978",
                optionName: "PATHANAMTHITTA",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "PATHANAMTHITTA",
                sortIndex: 369,
            },
            {
                optionCode: "300",
                optionKey: "300",
                optionName: "PATIALA",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "PATIALA",
                sortIndex: 370,
            },
            {
                optionCode: "060",
                optionKey: "060",
                optionName: "PATNA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "PATNA",
                sortIndex: 371,
            },
            {
                optionCode: "249",
                optionKey: "249",
                optionName: "PILIBHIT",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "PILIBHIT",
                sortIndex: 372,
            },
            {
                optionCode: "283",
                optionKey: "283",
                optionName: "PITHORAGARH",
                optionParentCode: "UA",
                optionParentProperty: "STATE",
                optionValue: "PITHORAGARH",
                sortIndex: 373,
            },
            {
                optionCode: "446",
                optionKey: "446",
                optionName: "POONCH",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "POONCH",
                sortIndex: 374,
            },
            {
                optionCode: "573",
                optionKey: "573",
                optionName: "PORBANDAR",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "PORBANDAR",
                sortIndex: 375,
            },
            {
                optionCode: "825",
                optionKey: "825",
                optionName: "PRAKASAM",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "PRAKASAM",
                sortIndex: 376,
            },
            {
                optionCode: "222",
                optionKey: "222",
                optionName: "PRATAPGARH",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "PRATAPGARH",
                sortIndex: 377,
            },
            {
                optionCode: "620",
                optionKey: "620",
                optionName: "PUNE",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "PUNE",
                sortIndex: 378,
            },
            {
                optionCode: "160",
                optionKey: "160",
                optionName: "PURI",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "PURI",
                sortIndex: 379,
            },
            {
                optionCode: "078",
                optionKey: "078",
                optionName: "PURNIA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "PURNIA",
                sortIndex: 380,
            },
            {
                optionCode: "862",
                optionKey: "862",
                optionName: "RAICHUR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "RAICHUR",
                sortIndex: 381,
            },
            {
                optionCode: "758",
                optionKey: "758",
                optionName: "RAIGARH",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "RAIGARH",
                sortIndex: 382,
            },
            {
                optionCode: "760",
                optionKey: "760",
                optionName: "RAIPUR",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "RAIPUR",
                sortIndex: 383,
            },
            {
                optionCode: "702",
                optionKey: "702",
                optionName: "RAISEN",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "RAISEN",
                sortIndex: 384,
            },
            {
                optionCode: "580",
                optionKey: "580",
                optionName: "RAJKOT",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "RAJKOT",
                sortIndex: 385,
            },
            {
                optionCode: "766",
                optionKey: "766",
                optionName: "RAJNANDGAON",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "RAJNANDGAON",
                sortIndex: 386,
            },
            {
                optionCode: "514",
                optionKey: "514",
                optionName: "RAJSAMAND",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "RAJSAMAND",
                sortIndex: 387,
            },
            {
                optionCode: "932",
                optionKey: "932",
                optionName: "RAMANATHAPURAM",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "RAMANATHAPURAM",
                sortIndex: 388,
            },
            {
                optionCode: "280",
                optionKey: "280",
                optionName: "RAMPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "RAMPUR",
                sortIndex: 389,
            },
            {
                optionCode: "087",
                optionKey: "087",
                optionName: "RANCHI",
                optionParentCode: "JH",
                optionParentProperty: null,
                optionValue: "RANCHI",
                sortIndex: 390,
            },
            {
                optionCode: "727",
                optionKey: "727",
                optionName: "RATLAM",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "RATLAM",
                sortIndex: 391,
            },
            {
                optionCode: "605",
                optionKey: "605",
                optionName: "RATNAGIRI",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "RATNAGIRI",
                sortIndex: 392,
            },
            {
                optionCode: "167",
                optionKey: "167",
                optionName: "RAYAGADA",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "RAYAGADA",
                sortIndex: 393,
            },
            {
                optionCode: "747",
                optionKey: "747",
                optionName: "REWA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "REWA",
                sortIndex: 394,
            },
            {
                optionCode: "344",
                optionKey: "344",
                optionName: "ROHTAK",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "ROHTAK",
                sortIndex: 395,
            },
            {
                optionCode: "334",
                optionKey: "334",
                optionName: "RUPNAGAR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "RUPNAGAR",
                sortIndex: 396,
            },
            {
                optionCode: "705",
                optionKey: "705",
                optionName: "SAGAR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SAGAR",
                sortIndex: 397,
            },
            {
                optionCode: "274",
                optionKey: "274",
                optionName: "SAHARANPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SAHARANPUR",
                sortIndex: 398,
            },
            {
                optionCode: "076",
                optionKey: "076",
                optionName: "SAHARSA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "SAHARSA",
                sortIndex: 399,
            },
            {
                optionCode: "039",
                optionKey: "039",
                optionName: "SAHEBGANJ",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "SAHEBGANJ",
                sortIndex: 400,
            },
            {
                optionCode: "913",
                optionKey: "913",
                optionName: "SALEM",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "SALEM",
                sortIndex: 401,
            },
            {
                optionCode: "055",
                optionKey: "055",
                optionName: "SAMASTIPUR",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "SAMASTIPUR",
                sortIndex: 402,
            },
            {
                optionCode: "182",
                optionKey: "182",
                optionName: "SAMBALPUR",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "SAMBALPUR",
                sortIndex: 403,
            },
            {
                optionCode: "612",
                optionKey: "612",
                optionName: "SANGLI",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "SANGLI",
                sortIndex: 404,
            },
            {
                optionCode: "302",
                optionKey: "302",
                optionName: "SANGRUR",
                optionParentCode: "PB",
                optionParentProperty: "STATE",
                optionValue: "SANGRUR",
                sortIndex: 405,
            },
            {
                optionCode: "227",
                optionKey: "227",
                optionName: "SANT KABIR NAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SANT KABIR NAGAR",
                sortIndex: 406,
            },
            {
                optionCode: "066",
                optionKey: "066",
                optionName: "SARAN",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "SARAN",
                sortIndex: 407,
            },
            {
                optionCode: "615",
                optionKey: "615",
                optionName: "SATARA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "SATARA",
                sortIndex: 408,
            },
            {
                optionCode: "746",
                optionKey: "746",
                optionName: "SATNA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SATNA",
                sortIndex: 409,
            },
            {
                optionCode: "700",
                optionKey: "700",
                optionName: "SEHORE",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SEHORE",
                sortIndex: 410,
            },
            {
                optionCode: "713",
                optionKey: "713",
                optionName: "SEONI",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SEONI",
                sortIndex: 411,
            },
            {
                optionCode: "252",
                optionKey: "252",
                optionName: "SHAHJAHANPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SHAHJAHANPUR",
                sortIndex: 412,
            },
            {
                optionCode: "732",
                optionKey: "732",
                optionName: "SHAJAPUR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "SHAJAPUR",
                sortIndex: 413,
            },
            {
                optionCode: "079",
                optionKey: "079",
                optionName: "SHEIKHPURA",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "SHEIKHPURA",
                sortIndex: 414,
            },
            {
                optionCode: "874",
                optionKey: "874",
                optionName: "SHIMOGA",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "SHIMOGA",
                sortIndex: 415,
            },
            {
                optionCode: "012",
                optionKey: "012",
                optionName: "SIBSAGAR",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "SIBSAGAR",
                sortIndex: 416,
            },
            {
                optionCode: "513",
                optionKey: "513",
                optionName: "SIKAR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "SIKAR",
                sortIndex: 417,
            },
            {
                optionCode: "607",
                optionKey: "607",
                optionName: "SINDHUDURG",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "SINDHUDURG",
                sortIndex: 418,
            },
            {
                optionCode: "526",
                optionKey: "526",
                optionName: "SIROHI",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "SIROHI",
                sortIndex: 419,
            },
            {
                optionCode: "352",
                optionKey: "352",
                optionName: "SIRSA",
                optionParentCode: "HR",
                optionParentProperty: "STATE",
                optionValue: "SIRSA",
                sortIndex: 420,
            },
            {
                optionCode: "245",
                optionKey: "245",
                optionName: "SITAPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SITAPUR",
                sortIndex: 421,
            },
            {
                optionCode: "922",
                optionKey: "922",
                optionName: "SIVAGANGA",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "SIVAGANGA",
                sortIndex: 422,
            },
            {
                optionCode: "057",
                optionKey: "057",
                optionName: "SIWAN",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "SIWAN",
                sortIndex: 423,
            },
            {
                optionCode: "486",
                optionKey: "486",
                optionName: "SOLAN",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "SOLAN",
                sortIndex: 424,
            },
            {
                optionCode: "610",
                optionKey: "610",
                optionName: "SOLAPUR",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "SOLAPUR",
                sortIndex: 425,
            },
            {
                optionCode: "288",
                optionKey: "288",
                optionName: "SONBHADRA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SONBHADRA",
                sortIndex: 426,
            },
            {
                optionCode: "006",
                optionKey: "006",
                optionName: "SONITPUR",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "SONITPUR",
                sortIndex: 427,
            },
            {
                optionCode: "103",
                optionKey: "103",
                optionName: "SOUTH 24 PARGANAS",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "SOUTH 24 PARGANAS",
                sortIndex: 428,
            },
            {
                optionCode: "365",
                optionKey: "365",
                optionName: "SOUTH DELHI",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "SOUTH DELHI",
                sortIndex: 429,
            },
            {
                optionCode: "692",
                optionKey: "692",
                optionName: "SOUTH GOA",
                optionParentCode: "GA",
                optionParentProperty: "STATE",
                optionValue: "SOUTH GOA",
                sortIndex: 430,
            },
            {
                optionCode: "192",
                optionKey: "192",
                optionName: "SOUTH TRIPURA",
                optionParentCode: "TR",
                optionParentProperty: "STATE",
                optionValue: "SOUTH TRIPURA",
                sortIndex: 431,
            },
            {
                optionCode: "815",
                optionKey: "815",
                optionName: "SRIKAKULAM",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "SRIKAKULAM",
                sortIndex: 432,
            },
            {
                optionCode: "440",
                optionKey: "440",
                optionName: "SRINAGAR",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "SRINAGAR",
                sortIndex: 433,
            },
            {
                optionCode: "223",
                optionKey: "223",
                optionName: "SULTANPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "SULTANPUR",
                sortIndex: 434,
            },
            {
                optionCode: "560",
                optionKey: "560",
                optionName: "SURAT",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "SURAT",
                sortIndex: 435,
            },
            {
                optionCode: "584",
                optionKey: "584",
                optionName: "SURENDRANAGAR",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "SURENDRANAGAR",
                sortIndex: 436,
            },
            {
                optionCode: "756",
                optionKey: "756",
                optionName: "SURGUJA",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "SURGUJA",
                sortIndex: 437,
            },
            {
                optionCode: "601",
                optionKey: "601",
                optionName: "THANE",
                optionParentCode: "MH",
                optionParentProperty: null,
                optionValue: "THANE",
                sortIndex: 438,
            },
            {
                optionCode: "908",
                optionKey: "908",
                optionName: "THANJAVUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "THANJAVUR",
                sortIndex: 439,
            },
            {
                optionCode: "942",
                optionKey: "942",
                optionName: "THENI",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "THENI",
                sortIndex: 440,
            },
            {
                optionCode: "902",
                optionKey: "902",
                optionName: "THIRUVALLUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "THIRUVALLUR",
                sortIndex: 441,
            },
            {
                optionCode: "907",
                optionKey: "907",
                optionName: "THIRUVARUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "THIRUVARUR",
                sortIndex: 442,
            },
            {
                optionCode: "972",
                optionKey: "972",
                optionName: "THRISSUR",
                optionParentCode: "KL",
                optionParentProperty: "STATE",
                optionValue: "THRISSUR",
                sortIndex: 443,
            },
            {
                optionCode: "507",
                optionKey: "507",
                optionName: "TONK",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "TONK",
                sortIndex: 444,
            },
            {
                optionCode: "854",
                optionKey: "854",
                optionName: "TUMKUR",
                optionParentCode: "KA",
                optionParentProperty: "STATE",
                optionValue: "TUMKUR",
                sortIndex: 445,
            },
            {
                optionCode: "531",
                optionKey: "531",
                optionName: "UDAIPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "UDAIPUR",
                sortIndex: 446,
            },
            {
                optionCode: "454",
                optionKey: "454",
                optionName: "UDHAMPUR",
                optionParentCode: "JK",
                optionParentProperty: "STATE",
                optionValue: "UDHAMPUR",
                sortIndex: 447,
            },
            {
                optionCode: "730",
                optionKey: "730",
                optionName: "UJJAIN",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "UJJAIN",
                sortIndex: 448,
            },
            {
                optionCode: "484",
                optionKey: "484",
                optionName: "UNA",
                optionParentCode: "HP",
                optionParentProperty: "STATE",
                optionValue: "UNA",
                sortIndex: 449,
            },
            {
                optionCode: "205",
                optionKey: "205",
                optionName: "UNNAO",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "UNNAO",
                sortIndex: 450,
            },
            {
                optionCode: "089",
                optionKey: "089",
                optionName: "VAISHALI",
                optionParentCode: "BR",
                optionParentProperty: "STATE",
                optionValue: "VAISHALI",
                sortIndex: 451,
            },
            {
                optionCode: "556",
                optionKey: "556",
                optionName: "VALSAD",
                optionParentCode: "GJ",
                optionParentProperty: "STATE",
                optionValue: "VALSAD",
                sortIndex: 452,
            },
            {
                optionCode: "230",
                optionKey: "230",
                optionName: "VARANASI",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "VARANASI",
                sortIndex: 453,
            },
            {
                optionCode: "904",
                optionKey: "904",
                optionName: "VELLORE",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "VELLORE",
                sortIndex: 454,
            },
            {
                optionCode: "735",
                optionKey: "735",
                optionName: "VIDISHA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "VIDISHA",
                sortIndex: 455,
            },
            {
                optionCode: "926",
                optionKey: "926",
                optionName: "VIRUDHUNAGAR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "VIRUDHUNAGAR",
                sortIndex: 456,
            },
            {
                optionCode: "836",
                optionKey: "836",
                optionName: "VIZIANAGARAM",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "VIZIANAGARAM",
                sortIndex: 457,
            },
            {
                optionCode: "808",
                optionKey: "808",
                optionName: "WARANGAL",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "WARANGAL",
                sortIndex: 458,
            },
            {
                optionCode: "642",
                optionKey: "642",
                optionName: "WARDHA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "WARDHA",
                sortIndex: 459,
            },
            {
                optionCode: "363",
                optionKey: "363",
                optionName: "WEST DELHI",
                optionParentCode: "DL",
                optionParentProperty: "STATE",
                optionValue: "WEST DELHI",
                sortIndex: 460,
            },
            {
                optionCode: "818",
                optionKey: "818",
                optionName: "WEST GODAVARI",
                optionParentCode: "AP",
                optionParentProperty: "STATE",
                optionValue: "WEST GODAVARI",
                sortIndex: 461,
            },
            {
                optionCode: "090",
                optionKey: "090",
                optionName: "WEST KAMENG",
                optionParentCode: "AR",
                optionParentProperty: "STATE",
                optionValue: "WEST KAMENG",
                sortIndex: 462,
            },
            {
                optionCode: "027",
                optionKey: "027",
                optionName: "WEST KHASI HILLS",
                optionParentCode: "ML",
                optionParentProperty: "STATE",
                optionValue: "WEST KHASI HILLS",
                sortIndex: 463,
            },
            {
                optionCode: "722",
                optionKey: "722",
                optionName: "WEST NIMAR",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "WEST NIMAR",
                sortIndex: 464,
            },
            {
                optionCode: "191",
                optionKey: "191",
                optionName: "WEST TRIPURA",
                optionParentCode: "TR",
                optionParentProperty: "STATE",
                optionValue: "WEST TRIPURA",
                sortIndex: 465,
            },
            {
                optionCode: "259",
                optionKey: "259",
                optionName: "AURAIYA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "AURAIYA",
                sortIndex: 466,
            },
            {
                optionCode: "275",
                optionKey: "275",
                optionName: "BAGHPAT",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "BAGHPAT",
                sortIndex: 467,
            },
            {
                optionCode: "173",
                optionKey: "173",
                optionName: "BARGARH",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "BARGARH",
                sortIndex: 468,
            },
            {
                optionCode: "002",
                optionKey: "002",
                optionName: "BONGAIGAON",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "BONGAIGAON",
                sortIndex: 469,
            },
            {
                optionCode: "061",
                optionKey: "061",
                optionName: "CHATRA",
                optionParentCode: "JH",
                optionParentProperty: "STATE",
                optionValue: "CHATRA",
                sortIndex: 470,
            },
            {
                optionCode: "207",
                optionKey: "207",
                optionName: "CHITRAKOOT",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "CHITRAKOOT",
                sortIndex: 471,
            },
            {
                optionCode: "152",
                optionKey: "152",
                optionName: "CHURACHANDPUR",
                optionParentCode: "MN",
                optionParentProperty: "STATE",
                optionValue: "CHURACHANDPUR",
                sortIndex: 472,
            },
            {
                optionCode: "136",
                optionKey: "136",
                optionName: "COOCHBEHAR",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "COOCHBEHAR",
                sortIndex: 473,
            },
            {
                optionCode: "131",
                optionKey: "131",
                optionName: "DAKSHIN DINAJPUR",
                optionParentCode: "WB",
                optionParentProperty: "STATE",
                optionValue: "DAKSHIN DINAJPUR",
                sortIndex: 474,
            },
            {
                optionCode: "763",
                optionKey: "763",
                optionName: "DANTEWADA",
                optionParentCode: "CG",
                optionParentProperty: "STATE",
                optionValue: "DANTEWADA",
                sortIndex: 475,
            },
            {
                optionCode: "188",
                optionKey: "188",
                optionName: "DEBAGARH",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "DEBAGARH",
                sortIndex: 476,
            },
            {
                optionCode: "505",
                optionKey: "505",
                optionName: "DHOLPUR",
                optionParentCode: "RJ",
                optionParentProperty: "STATE",
                optionValue: "DHOLPUR",
                sortIndex: 477,
            },
            {
                optionCode: "141",
                optionKey: "141",
                optionName: "DIMAPUR",
                optionParentCode: "NL",
                optionParentProperty: "STATE",
                optionValue: "DIMAPUR",
                sortIndex: 478,
            },
            {
                optionCode: "254",
                optionKey: "254",
                optionName: "FARUKHABAD",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "FARUKHABAD",
                sortIndex: 479,
            },
            {
                optionCode: "203",
                optionKey: "203",
                optionName: "FIROZABAD",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "FIROZABAD",
                sortIndex: 480,
            },
            {
                optionCode: "025",
                optionKey: "025",
                optionName: "JAINTIA HILLS",
                optionParentCode: "ML",
                optionParentProperty: "STATE",
                optionValue: "JAINTIA HILLS",
                sortIndex: 481,
            },
            {
                optionCode: "625",
                optionKey: "625",
                optionName: "JALNA",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "JALNA",
                sortIndex: 482,
            },
            {
                optionCode: "279",
                optionKey: "279",
                optionName: "JYOTIBA PHULE NAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "JYOTIBA PHULE NAGAR",
                sortIndex: 483,
            },
            {
                optionCode: "279",
                optionKey: "279",
                optionName: "JYOTIBA PHULE NAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "JYOTIBA PHULE NAGAR",
                sortIndex: 484,
            },
            {
                optionCode: "168",
                optionKey: "168",
                optionName: "KALAHANDI",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "KALAHANDI",
                sortIndex: 485,
            },
            {
                optionCode: "164",
                optionKey: "164",
                optionName: "KANDHAMAL",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "KANDHAMAL",
                sortIndex: 486,
            },
            {
                optionCode: "179",
                optionKey: "179",
                optionName: "KENDRAPARA",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "KENDRAPARA",
                sortIndex: 487,
            },
            {
                optionCode: "237",
                optionKey: "237",
                optionName: "KUSHINAGAR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "KUSHINAGAR",
                sortIndex: 488,
            },
            {
                optionCode: "213",
                optionKey: "213",
                optionName: "LALITPUR",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "LALITPUR",
                sortIndex: 489,
            },
            {
                optionCode: "092",
                optionKey: "092",
                optionName: "LOHIT",
                optionParentCode: "AR",
                optionParentProperty: "STATE",
                optionValue: "LOHIT",
                sortIndex: 490,
            },
            {
                optionCode: "217",
                optionKey: "217",
                optionName: "MAHOBA",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MAHOBA",
                sortIndex: 491,
            },
            {
                optionCode: "225",
                optionKey: "225",
                optionName: "MAHRAJGANJ",
                optionParentCode: "UP",
                optionParentProperty: "STATE",
                optionValue: "MAHRAJGANJ",
                sortIndex: 492,
            },
            {
                optionCode: "174",
                optionKey: "174",
                optionName: "MAYURBHANJ",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "MAYURBHANJ",
                sortIndex: 493,
            },
            {
                optionCode: "014",
                optionKey: "014",
                optionName: "NAGAON",
                optionParentCode: "AS",
                optionParentProperty: "STATE",
                optionValue: "NAGAON",
                sortIndex: 494,
            },
            {
                optionCode: "909",
                optionKey: "909",
                optionName: "NAGAPATTINAM",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "NAGAPATTINAM",
                sortIndex: 495,
            },
            {
                optionCode: "914",
                optionKey: "914",
                optionName: "PERAMBALUR",
                optionParentCode: "TN",
                optionParentProperty: "STATE",
                optionValue: "PERAMBALUR",
                sortIndex: 496,
            },
            {
                optionCode: "148",
                optionKey: "148",
                optionName: "PHEK",
                optionParentCode: "NL",
                optionParentProperty: "STATE",
                optionValue: "PHEK",
                sortIndex: 497,
            },
            {
                optionCode: "034",
                optionKey: "034",
                optionName: "SAIHA",
                optionParentCode: "MZ",
                optionParentProperty: "STATE",
                optionValue: "SAIHA",
                sortIndex: 498,
            },
            {
                optionCode: "180",
                optionKey: "180",
                optionName: "SUNDARGARH",
                optionParentCode: "OR",
                optionParentProperty: "STATE",
                optionValue: "SUNDARGARH",
                sortIndex: 499,
            },
            {
                optionCode: "156",
                optionKey: "156",
                optionName: "TAMENGLONG",
                optionParentCode: "MN",
                optionParentProperty: "STATE",
                optionValue: "TAMENGLONG",
                sortIndex: 500,
            },
            {
                optionCode: "703",
                optionKey: "703",
                optionName: "UMARIA",
                optionParentCode: "MP",
                optionParentProperty: "STATE",
                optionValue: "UMARIA",
                sortIndex: 501,
            },
            {
                optionCode: "647",
                optionKey: "647",
                optionName: "WASHIM",
                optionParentCode: "MH",
                optionParentProperty: "STATE",
                optionValue: "WASHIM",
                sortIndex: 502,
            },
            {
                optionCode: "024",
                optionKey: "024",
                optionName: "WEST GARO HILLS",
                optionParentCode: "ML",
                optionParentProperty: "STATE",
                optionValue: "WEST GARO HILLS",
                sortIndex: 503,
            },
            {
                optionCode: "650",
                optionKey: "650",
                optionName: "NASHIK",
                optionParentCode: "MH",
                optionParentProperty: null,
                optionValue: "NASHIK",
                sortIndex: 504,
            },
            {
                optionCode: "622",
                optionKey: "622",
                optionName: "AHMEDNAGAR",
                optionParentCode: "MH",
                optionParentProperty: null,
                optionValue: "AHMEDNAGAR",
                sortIndex: 505,
            },
            {
                optionCode: "NA",
                optionKey: "NA",
                optionName: "NA",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "NA",
                sortIndex: 506,
            },
        ],
        YESNO: [
            {
                optionKey: "YES",
                optionName: "Yes",
                optionValue: "YES",
            },
            {
                optionKey: "NO",
                optionName: "No",
                optionValue: "NO",
            },
        ],
        GENDER: [
            {
                optionCode: "MALE",
                optionKey: "Male",
                optionName: "Male",
                icon: "male",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Male",
                sortIndex: 0,
            },
            {
                optionCode: "FEMALE",
                optionKey: "Female",
                optionName: "Female",
                icon: "female",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Female",
                sortIndex: 0,
            },
            {
                optionCode: "TRANSGENDER",
                optionKey: "Transgender",
                optionName: "Transgender",
                icon: "trans",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Transgender",
                sortIndex: 0,
            },
        ],
        RATING: [
            {
                optionCode: "DISAPPONTED",
                optionKey: "1",
                optionName: "Disappointed",
                icon: "Disappointed",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Disappointed",
                sortIndex: 0,
            },
            {
                optionCode: "POOR",
                optionKey: "2",
                optionName: "Poor",
                icon: "Poor",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Poor",
                sortIndex: 0,
            },
            {
                optionCode: "AVERAGE",
                optionKey: "3",
                optionName: "Average",
                icon: "Average",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Average",
                sortIndex: 0,
            },
            {
                optionCode: "GOOD",
                optionKey: "4",
                optionName: "Good",
                icon: "Good",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Good",
                sortIndex: 0,
            },
            {
                optionCode: "AWESOME",
                optionKey: "5",
                optionName: "Awesome",
                icon: "Awesome",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Awesome",
                sortIndex: 0,
            },
        ],
        SEASON: [
            {
                optionCode: "Summer",
                optionKey: "SUMMER",
                optionName: "SUMMER",
                optionParentCode: "sm",
                optionParentProperty: "season",
                optionValue: "Summer",
                sortIndex: 0,
            },
            {
                optionCode: "winter",
                optionKey: "WINTER",
                optionName: "WINTER",
                optionParentCode: "WINTER",
                optionParentProperty: "SEASON",
                optionValue: "WINTER",
                sortIndex: 0,
            },
        ],
        PURPOSE_OF_LOAN: [],
        TENURE: [],
        ARTICLETYPE: [
            {
                optionCode: "COIN",
                optionKey: "COIN",
                optionName: "Coin",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Coin",
                sortIndex: 0,
            },
            {
                optionCode: "JEWELLERY",
                optionKey: "JEWELLERY",
                optionName: "Jewellery",
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: "Jewellery",
                sortIndex: 0,
            },
        ],
        PURITY: [
            {
                optionCode: 18,
                optionKey: 18,
                optionName: 18,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: 18,
                sortIndex: 0,
            },
            {
                optionCode: 19,
                optionKey: 19,
                optionName: 19,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: 19,
                sortIndex: 0,
            },
            {
                optionCode: 20,
                optionKey: 20,
                optionName: 20,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: 20,
                sortIndex: 0,
            },
            {
                optionCode: 21,
                optionKey: 21,
                optionName: 21,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: 21,
                sortIndex: 0,
            },
            {
                optionCode: 22,
                optionKey: 22,
                optionName: 22,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: 22,
                sortIndex: 0,
            },
            {
                optionCode: 24,
                optionKey: 24,
                optionName: 24,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: 24,
                sortIndex: 0,
            },
        ],
        MSME_UNIT: [
            {
                optionKey: "Bronze",
                optionName: "Bronze",
                optionValue: "Bronze",
            },
            {
                optionKey: "Silver",
                optionName: "Silver",
                optionValue: "Silver",
            },
            {
                optionKey: "Gold",
                optionName: "Gold",
                optionValue: "Gold",
            },
            {
                optionKey: "Diamond",
                optionName: "Diamond",
                optionValue: "Diamond",
            },
            {
                optionKey: "Platinum",
                optionName: "Platinum",
                optionValue: "Platinum",
            },
        ],
        ASSETS_PURCHASED: [
            {
                optionKey: "Stock",
                optionName: "Stock",
                optionValue: "Stock",
            },
            {
                optionKey: "Book Debt",
                optionName: "Book Debt",
                optionValue: "Book Debt",
            },
        ],
    };
    encryptionHeaders = {
        clientApiKey: this.tenentConfiguration.clientApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    homeMenu = homeMenu
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {
        'VLN': {
            individual: {
                carouselImages: [
                    {
                        image: 'assets/images/Home-Loan.webp',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'assets/images/kisan-card.webp',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'assets/images/MSME-Loan.webp',
                        title: '',
                        description: ''
                    }
                ]
            },
            company: {
                carouselImages: [
                    {
                        image: 'assets/images/Home-Loan.webp',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'assets/images/kisan-card.webp',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'assets/images/MSME-Loan.webp',
                        title: '',
                        description: ''
                    }
                ]
            },
            group: {
                carouselImages: [
                    {
                        image: 'assets/images/Home-Loan.webp',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'assets/images/kisan-card.webp',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'assets/images/MSME-Loan.webp',
                        title: '',
                        description: ''
                    }
                ]
            }
        }
    };
    loanProductInfo = loanProductInfo
    getHelpInfo =getHelpInfo
    rejectionConsent = rejectionConsent
    AadharConsent =AadharConsent
   
    pageSequenceData = {
        'VLN': {
            journeyPages: {
                individual: [
                    {
                        pageIndex: 0,
                        pageCode: "MOBILE_VERIFY",
                        pageName: "Mobile Number Verification",
                        lastPage: false,
                        url: "basicinfo/mobile-verify",
                        resumeJourneySequences: [
                            [
                                "INITIALIZED",
                                "SUB_STATUS_1"
                            ]
                        ],
                    },
                    {
                        pageIndex: 1,
                        pageCode: "MORE_INFO",
                        pageName: "Personal Information",
                        lastPage: false,
                        url: "product-declaration/more-info",
                        resumeJourneySequences: [
                            [
                                "INITIALIZED",
                                "SUB_STATUS_14"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_3"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_2"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_4"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_5"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_6"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_7"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_8"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_9"
                            ]
                        ],
                        exitjourneyEventCode: "MORE_INFO_COMPLETE"
                    },
                    {
                        pageIndex: 1,
                        pageCode: "STATUS_CHECK",
                        pageName: "Status Check list",
                        resumeJourneySequences: [],
                        lastPage: false,
                        url: "custom-information/status-checklist"
                    },
                    {
                        pageIndex: 2,
                        pageCode: "PERSONAL_DETAILS",
                        pageName: "Personal Information",
                        lastPage: false,
                        url: "product-declaration/personal-details",
                        resumeJourneySequences: [
                            [
                                "INITIALIZED",
                                "SUB_STATUS_12"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_13"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_14"
                            ],
                            [
                                "INITIALIZED",
                                "SUB_STATUS_15"
                            ],
                            [
                                "AWAITING_APPROVAL_L4",
                                "SUB_STATUS_1"
                            ]
                        ],
                    },
                    {
                        pageIndex: 0,
                        pageCode: "EMPLOYMENT_DETAILS",
                        pageName: "Employment Details",
                        lastPage: false,
                        url: "product-declaration/employment-details",
                        resumeJourneySequences: [
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_1"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_2"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_3"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_4"
                            ]
                        ],
                    },
                    {
                        pageIndex: 0,
                        pageCode: "VEHICLE_DETAILS",
                        pageName: "Vehicle Details",
                        lastPage: false,
                        url: "custom-information/vehicle-details",
                        resumeJourneySequences: [
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_5"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_6"
                            ]
                        ],
                        "exitjourneyEventCode": "VEHICLE_DETAILS_SUBMIT"
                    },
                    {
                        pageIndex: 0,
                        pageCode: "DOCUMENT_UPLOAD_V2",
                        pageName: "Document Upload",
                        url: "custom-information/document-upload-v2",
                        lastPage: false,
                        resumeJourneySequences: [
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_7"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_8"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_9"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_10"
                            ],
                            [
                                "AWAITING_APPROVAL_L21",
                                "SUB_STATUS_11"
                            ],
                            [
                                "AWAITING_APPROVAL_L6",
                                "SUB_STATUS_1"
                            ],
                            [
                                "AWAITING_APPROVAL_L6",
                                "SUB_STATUS_2"
                            ],
                            [
                                "AWAITING_APPROVAL_L6",
                                "SUB_STATUS_3"
                            ]
                        ]
                    },
                    {
                        pageIndex: 3,
                        pageCode: "SANCTION_DETAILS",
                        pageName: "Sanction Details Update",
                        lastPage: false,
                        url: "sanction-details/sanction",
                        resumeJourneySequences: [
                            [
                                "AWAITING_APPROVAL_L6",
                                "SUB_STATUS_4"
                            ],
                            [
                                "AWAITING_APPROVAL_L6",
                                "SUB_STATUS_5"
                            ]
                        ],
                        exitjourneyEventCode: "SANCTION_DETAILS_COMPLETE"
                    },
                    {
                        pageIndex: 2,
                        pageCode: "KEY_FACT_DETAILS",
                        pageName: "Key fact Statement",
                        lastPage: false,
                        url: "custom-information/key-fact-statement",
                        resumeJourneySequences: [['AWAITING_APPROVAL_L18', 'SUB_STATUS_3'], ['AWAITING_APPROVAL_L18', 'SUB_STATUS_4']],
                        exitjourneyEventCode: "KEY_FACT_COMPLETE"
                    },
                    {
                        pageIndex: 4,
                        pageCode: "LOAN_SUMMARY",
                        pageName: "Personal Information",
                        lastPage: true,
                        url: "loan/summary",
                        resumeJourneySequences: [['APPROVED', 'SUB_STATUS_1'], ['APPROVED', 'SUB_STATUS_2', '?esignDone=true'], ['AWAITING_APPROVAL_L30', 'SUB_STATUS_1'], ['AWAITING_APPROVAL_L30', 'SUB_STATUS_2']]
                    },
                    {
                        pageIndex: 5,
                        pageCode: "ESIGN",
                        pageName: 'Personal Information',
                        lastPage: false,
                        url: 'custom-information/e-sign',
                        resumeJourneySequences: []
                    }
                ],
                company: [],
                group: []
            },
            otherPages: {
                individual: [
                    {
                        pageIndex: 1,
                        pageCode: "CONTACT_BRANCH",
                        pageName: "Thank you page",
                        lastPage: false,
                        url: "basicinfo/contact-branch",
                        resumeJourneySequences: [
                            [
                                "INITIALIZED",
                                "SUB_STATUS_11"
                            ]
                        ]
                    },
                    {
                        pageIndex: 0,
                        pageCode: "BRANCH_DETAILS",
                        pageName: "Branch information",
                        lastPage: false,
                        url: "custom-information/branch-details",
                        exitjourneyEventCode: "BRANCH_SELECT",
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 0,
                        pageCode: "ADDITIONAL_INFORMATION",
                        pageName: "Additional information",
                        lastPage: false,
                        url: "custom-information/additional-information",
                        resumeJourneySequences: [
                            [
                                "INITIALIZED",
                                "SUB_STATUS_10"
                            ]
                        ]
                    },
                    {
                        pageIndex: 1,
                        pageCode: "PRODUCT_ERROR",
                        pageName: "Product error",
                        lastPage: false,
                        url: "custom-information/product-error",
                        resumeJourneySequences: []
                    }
                ]
            }
        },
    };
    stepperData = {
        'VLN': {
            "individual": [{
                "name": "Basic Information",
                "info": "10MinVerifyYou",
                "isActive": true,
                "isCompleted": false,
                'pageCode': 'MOBILE_VERIFY'

            },
            {
                "name": "Application details,Documents",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "pageCode": 'MORE_INFO',
                        "isActive": false,
                        "name": 'More Information',
                        "isCompleted": false
                    },
                    {
                        "id": "002",
                        "pageCode": 'PERSONAL_DETAILS',
                        "isActive": false,
                        "name": 'Personal Information',
                        "isCompleted": false
                    },

                    {
                        "id": "003",
                        "pageCode": 'EMPLOYMENT_DETAILS',
                        "isActive": false,
                        "name": 'Account Number',
                        "isCompleted": false
                    },
                    {
                        "id": "004",
                        "pageCode": 'DOCUMENT_UPLOAD_V2',
                        "isActive": false,
                        "name": 'Account Number',
                        "isCompleted": false
                    },
                ]
            },
            {
                "name": "Sanction Details",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "pageCode": "SANCTION",
                "subStep": [
                    {
                        "id": "001",
                        "pageCode": 'SANCTION_DETAILS',
                        "isActive": false,
                        "name": 'Sanction Details',
                        "isCompleted": false
                    },
                    {
                        "id": "002",
                        "pageCode": 'KEY_FACT_DETAILS',
                        "isActive": false,
                        "name": 'Key Fact  Information',
                        "isCompleted": false
                    },
                    {
                        "id": "003",
                        "pageCode": 'LOAN_SUMMARY',
                        "isActive": false,
                        "name": 'Account Number',
                        "isCompleted": false
                    },
                ]
            },
            ]
        },
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
        'VLN': {
            "individual": [{
                "name": "Account Number",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "pageCode": 'ACCOUNT_VERIFY',
            },
            {
                "name": "Aadhaar Number",
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
        VLN: [
            {
                displayType: 'bulletPoints',
                name: 'features',
                label: 'Features',
                displayData: [
                    "ROI Starting from 8.85%",
                    "Maximum Tenure upto 84 Months",
                    "Maximum quantum up to 90% of on Road Price",
                    "No Third Party Guarantee required",
                    "No Prepayment Penalty",
                    "Minimal Documentation"
                ]
            },
            {
                displayType: 'card',
                name: 'docRequired',
                label: 'Document Required',
                docReqData: {
                    'Individual': [
                        {
                            label: 'PAN Card',
                            icon: 'assets/icons/pan.png'
                        },
                        {
                            label: 'Aadhaar Card',
                            icon: 'assets/icons/aadhaar.png'
                        }
                    ]
                }
            },
            {
                displayType: 'bulletPoints',
                name: 'charges',
                label: 'Charges',
                displayData: [
                    'One Time Processing Charges = Rs. 1000 + GST'
                ]
            },
            {
                displayType: 'emiCalculator',
                name: 'emiCalculator',
                label: 'EMI Calculator',
                LoanData: {
                    interest: 13.25,
                    minLoanAmount: 10000,
                    maxLoanAmount: 2500000,
                    minTenure: 1,
                    maxTenure: 84
                }

            }
        ]
    };
    pageSectionConfig = {
        'VLN': {
            "individual": {
                "MOBILE_VERIFY": [
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "mandatory": false,
                        "className": "common-info mb-5",
                        "sectionContent": {
                            "isShow": true,
                            "endLinks": [{
                                "label": "Resume your Application",
                                "linkType": "REDIRECT",
                                "url": 'basicinfo/mobile-verify?resumeJourney=true'
                            }
                            ],
                            "paragraphData": "Already Applied?",
                            "subContent": "Resume your Application"
                        },

                    },
                    {
                        "componentType": "TITLE",
                        "className": "mb-1",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Mobile Number Verification"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please provide your mobile number to get started. We recommend providing mobile no registered with Aadhaar for quicker processing of your application"
                        }
                    },
                    {
                        "componentType": "FORM",
                        "className": "medium",
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "columnSize": 1
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "MOBILE_NO",
                                    "isMandatory": true,
                                    "fieldLabel": "Enter Mobile number",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 10,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": "^[1-9][0-9]{9}$",
                                    "countryCode": "+91",
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "dataMasking":true,
                                    "columnNo": null,
                                    "placeholderText": "Enter 10 digit Mobile Number",
                                    "fieldName": "mobileNumber",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": null,
                                    "groupIndex": null,
                                    "showField": true
                                }
                            ]
                        }
                    },
                    {
                        "componentType": "CONSENT",
                        "validateSection": true,
                        "className": "consent-text",
                        "sectionContent": {
                            "config": {
                                "options": [
                                    {
                                        "consentType": "APIFETCH",
                                        "consentCode": "DND_CONSENT_VL",
                                        "submitConsentCodes": [
                                            "DND_CONSENT_VL",
                                            "PRIVACY_POLICY_VL"
                                        ],
                                        "label": null,
                                        "className": "check-container",
                                        "completed": null
                                    }
                                ]
                            },
                            "isShow": true,
                            "showField": true
                        }
                    },
                    {
                        "componentType": "OTP",
                        "sectionContent": {
                            "fields": {
                                "fieldDataType": "OTP",
                                "otpType": "MOBILE",
                                "isMandatory": true,
                                "fieldLabel": "Enter Mobile OTP",
                                "fieldAccessModifier": "EDITABLE",
                                "minLength": 6,
                                "maxLength": 15,
                                "length": 6,
                                "error": null,
                                "value": null,
                                "validationJson": null,
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": null,
                                "groupIndex": null,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "accountNo",
                                "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                                "showLabel": true,
                                "showField": true,
                                "OtpMasking": true,
                                "otpDataType": "NUMBER",
                                "otpAttempts": 3,
                                "waitTimeInSeconds": 120,
                                "infoText": "A 6 digit OTP has been sent to the above number"
                            },
                            "options": {
                                "value": null,
                                "notificationType": "COMMON_OTP_TWO",
                                "loanProduct": null,
                                "createBorrower": true,
                                "generateOtp": true
                            },
                            "isShow": false
                        }
                    }
                ],
                "MORE_INFO": [
                    {
                      "componentType": "TITLE",
                      "classname": "mb-10",
                      "validateSection": false,
                      "sectionContent": {
                        "titleData": "Applicant Details",
                        "isShow": true
                      }
                    },
                    {
                      "componentType": "PARAGRAPH",
                      "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
                      "validateSection": false,
                      "sectionContent": {
                        "paragraphData": "Please, * fill the mandatory details",
                        "isShow": true
                      }
                    },
                    {
                        "componentType": "FORM",
                        "className": "w-50 mob-w-100",
                        "validateSection": true,
                        "mandatory": true,
                        "sectionContent": {
                          "options": {
                            "columnSize": 2,
                            "mapSupplyData": true,
                            "mapAndDisable": true,
                            "autoVerifyMappedFields": true
                          },
                          "isShow": true,
                          "fields": [
                            {
                                "fieldDataType": "TEXT",
                                "isMandatory": true,
                                "fieldLabel": "Name as per PAN",
                                "fieldAccessModifier": "EDITABLE",
                                "minLength": 0,
                                "maxLength": 80,
                                "error": null,
                                "value": null,
                                "validationJson": null,
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "placeholderText": "Enter Name as per PAN",
                                "fieldName": "panholdername",
                                "labelInfo": null,
                                "showLabel": true,
                                "groupName": "",
                                "groupIndex": 1,
                                "showField": true,
                                "className": "mob-w-100",
                                "WrapperclassName": "mob-w-100"
                            },
                            {
                              "fieldDataType": "DATE",
                              "isMandatory": true,
                              "fieldLabel": "Date of birth/ incorporation as per PAN",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": null,
                              "maxLength": 0,
                              "minDate": null,
                              "maxDate": [null,null,null,true],
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": null,
                              "regex": null,
                              "regexErrorMessage": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "Enter Date of Birth",
                              "fieldName": "panholderdob",
                              "labelInfo": null,
                              "showLabel": true,
                              "groupName": "",
                              "groupIndex": 1,
                              "showField": true,
                              "WrapperclassName": "mob-w-100"
                            },
                            {
                              "externalVerificationTrigger": false,
                              "verificationType": "PAN_V3",
                              "fieldDataType": "PAN_CARD",
                              "isMandatory": true,
                              "fieldLabel": "PAN",
                              "disableVerifyButton":true,
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 12,
                              "error": null,
                              "value": null,
                              "dataMasking":true,
                              "validationJson": null,
                              "className": "mob-w-100",
                              "rulesFor": null,
                              "regex": "[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$",
                              "regexErrorMessage": "Entered Pan Number is Invalid",
                              "rowNo": 1,
                              "columnNo": 1,
                              "placeholderText": "Enter Valid Email ID",
                              "fieldName": "identityNumberTwo",
                              "labelInfo": null,
                              "showLabel": true,
                              "groupName": null,
                              "groupIndex": 1,
                              "showField": true,
                              "externalValidate": false,
                              "journeyEventCode": "PAN_VERIFY",
                              "WrapperclassName": "mob-w-100",
                              "options":{
                                "extraParams":{}
                                }
                            },
                          ]
                        }
                      },
                    {
                      "componentType": "FORM",
                      "className": "mb-10",
                      "validateSection": true,
                      "mandatory": true,
                      "sectionContent": {
                        "options": {
                          "columnSize": 2,
                          "mapSupplyData": true,
                          "mapAndDisable": true,
                          "autoVerifyMappedFields": true
                        },
                        "isShow": true,
                        "fields": [
                          {
                            "verificationType": "AADHAR",
                            "fieldDataType": "AADHAR",
                            "isMandatory": true,
                            "fieldLabel": "KYC Aadhaar Verification",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 12,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": 1,
                            "columnNo": 2,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "identityNumberOne",
                            "labelInfo": null,
                            "showLabel": true,
                            "Masking": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true,
                            "verificationSuccessMessage": "KYC Aadhaar Verification Successfull!!",
                            "verificationFieldName": "aadharOtp",
                            "journeyEventCode": "AADHAR_VERIFY",
                            "externalVerificationTrigger": true,
                            "externalValidate": true
                          },
                          {
                            "fieldDataType": "OTP",
                            "otpType": "AADHAR",
                            "isMandatory": true,
                            "fieldLabel": "Enter Aadhaar OTP",
                            "fieldAccessModifier": "EDITABLE",
                            "className": "w-50 mob-w-100",
                            "minLength": 6,
                            "maxLength": 15,
                            "length": 6,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": 1,
                            "columnNo": 2,
                            "groupName": null,
                            "groupIndex": 2,
                            "placeholderText": "xx x  xxxxx",
                            "fieldName": "aadharOtp",
                            "labelInfo": null,
                            "showLabel": false,
                            "showField": false,
                            "OtpMasking": true,
                            "otpDataType": "NUMBER",
                            "otpAttempts": 3,
                            "excludeToFormValue": true,
                            "waitTimeInSeconds": 120,
                            "options": {
                              "value": null,
                              "notificationType": "COMMON_OTP_TWO",
                              "loanProduct": null,
                              "createBorrower": true,
                              "generateOtp": true,
                              "className": "w-100",
                              "requestFor": "BORROWER",
                              "extraParams": {
                                "isPhysicallyVerified": false
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "componentType": "CONSENT",
                      "validateSection": true,
                      "mandatory": true,
                      "className": "consent-text mb-20",
                      "sectionContent": {
                        "config": {
                          "options": [
                            {
                              "consentType": "STATIC",
                              "consentCode": null,
                              "submitConsentCodes": [
                                "AADHAR_CONSENT_VL"
                              ],
                              "label": " Click here to agree",
                              "isMultiLabel": false,
                              "completed": null,
                              "endLinks": [
                                {
                                  "label": "Aadhaar consent.",
                                  "height": "70%",
                                  "width": "70%",
                                  "linkType": "POPUP",
                                  "consentCode": "AADHAR_CONSENT_VL",
                                  "popupContent": []
                                }
                              ]
                            }
                          ]
                        },
                        "isShow": true,
                        "showField": true
                      }
                    }
                  ],
                "ADDITIONAL_INFORMATION": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": { "content": { "cat": ["Hello, ", { "var": "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle" }, "!"] } },
                        "sectionContent": {
                            "titleData": "Hello",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "sectionContent": {
                            "titleData": "Let us help you find the best loan offer",
                            "isShow": true
                        },
                        "className": "text-info mt-20"
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "sectionContent": {
                            "titleData": "Personal Details",
                            "isShow": true
                        },
                        "className": "f-15 mt-3"
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "sectionContent": {
                            "paragraphData": "Pre-filled from UIDAI Aadhaar Database",
                            "isShow": true
                        },
                        "className": "text-info mt-3 mb-20"
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "sectionContent": {
                            "isShow": true,
                            "options": {
                                "columnSize": 3,
                                "mapSupplyData": true,
                                "mapAndDisable": true,
                                "autoVerifyMappedFields": true
                            },
                            "fields": [
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "First Name",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 100,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter First Name",
                                    "fieldName": "firstName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": false,
                                    "fieldLabel": "Middle Name",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 100,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Middle Name",
                                    "fieldName": "middleName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "Last Name",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 100,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Last Name",
                                    "fieldName": "lastName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DATE",
                                    "isMandatory": true,
                                    "fieldLabel": "Date of Birth",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 0,
                                    "minDate": null,
                                    "maxDate": [null,null,null,true],
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Date of Birth",
                                    "fieldName": "dateOfBirth",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "RADIO",
                                    "isMandatory": true,
                                    "fieldLabel": "Gender",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [
                                        {
                                            "optionCode": "MALE",
                                            "optionKey": "Male",
                                            "optionName": "Male",
                                            "icon": "male",
                                            "optionParentCode": null,
                                            "optionParentProperty": null,
                                            "optionValue": "Male",
                                            "sortIndex": 0
                                        },
                                        {
                                            "optionCode": "FEMALE",
                                            "optionKey": "Female",
                                            "optionName": "Female",
                                            "icon": "female",
                                            "optionParentCode": null,
                                            "optionParentProperty": null,
                                            "optionValue": "Female",
                                            "sortIndex": 0
                                        },
                                        {
                                            "optionCode": "TRANSGENDER",
                                            "optionKey": "Transgender",
                                            "optionName": "Transgender",
                                            "icon": "trans",
                                            "optionParentCode": null,
                                            "optionParentProperty": null,
                                            "optionValue": "Transgender",
                                            "sortIndex": 0
                                        }
                                    ],
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Applicant Education Qualification",
                                    "fieldName": "gender",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "Personal Email Id",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 100,
                                    "error": null,
                                    "dataMasking":true,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Valid Email ID",
                                    "fieldName": "alternativeUsername",
                                    "labelInfo": "Enter Borrower Email Id for further Communication",
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verificationType": "EMAIL",
                                    "verificationFieldName": "emailOtp",
                                    "journeyEventCode": "EMAIL_PASS"
                                },
                                {
                                    "fieldDataType": "OTP",
                                    "otpType": "EMAIL",
                                    "isMandatory": true,
                                    "fieldLabel": "Enter Email OTP",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "length": 6,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "xx x  xxxxx",
                                    "fieldName": "emailOtp",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "showField": false,
                                    "OtpMasking": true,
                                    "otpDataType": "NUMBER",
                                    "otpAttempts": 3,
                                    "excludeToFormValue": true,
                                    "waitTimeInSeconds": 60,
                                    "options": {
                                        "value": null,
                                        "notificationType": "COMMON_OTP_TWO",
                                        "loanProduct": null,
                                        "createBorrower": true,
                                        "generateOtp": true,
                                        "className": "w-100"
                                    }
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "EDUCATION_TYPE",
                                    "fieldLabel": "Highest Education",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Applicant Education Qualification",
                                    "fieldName": "educationType",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "MARITAL_STATUS",
                                    "fieldLabel": "Applicant Marital Status",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 2,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Applicant Marital Status",
                                    "fieldName": "maritalStatus",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "SECTION",
                                    "isMandatory": true,
                                    "fieldLabel": "Permanent Address (as Per aadhar Card)",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": 6,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 2,
                                    "placeholderText": "Enter Address Line2",
                                    "fieldName": "personalAddress",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "rows": 3,
                                    "groupIndex": 3,
                                    "groupName": "Permanent Address (as Per aadhar Card)"
                                },
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "fieldLabel": "Use a different communication address for this Loan",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "default": false
                                    },
                                    "rulesFor": [
                                        "addressOne"
                                    ],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "differenceCommunicationAddress",
                                    "showLabel": false,
                                    "groupName": "",
                                    "groupIndex": 4
                                },
                                {
                                    "fieldDataType": "ADDRESS",
                                    "fieldLabel": "Address as per Aadhaar",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "asdsfdsfsd",
                                    "validationJson": {
                                        "showField": {
                                            "==": [
                                                {
                                                    "var": "differenceCommunicationAddress"
                                                },
                                                true
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "xx x  xxxxx",
                                    "fieldName": "addressOne",
                                    "showLabel": false,
                                    "showField": true,
                                    "groupName": null,
                                    "groupIndex": 5,
                                    "addressFields": [
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": true,
                                            "fieldLabel": "Address Line 1",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Address Line1",
                                            "fieldName": "line1",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": true,
                                            "fieldLabel": "Address Line 2",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Address Line2",
                                            "fieldName": "line2",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": false,
                                            "fieldLabel": "Address Line 3",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Address Line3",
                                            "fieldName": "line3",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": false,
                                            "fieldLabel": "Landmark",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Landmark",
                                            "fieldName": "subDistrict",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "DROPDOWN",
                                            "isMandatory": true,
                                            "fieldLabel": "Pincode",
                                            "commonpropertyType": "PINCODE",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": 999999,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": [
                                                "state",
                                                "city"
                                            ],
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "groupName": null,
                                            "groupIndex": null,
                                            "placeholderText": "Enter Pincode",
                                            "fieldName": "zipCode",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": "state",
                                            "fieldDataType": "TEXT",
                                            "fieldLabel": "City",
                                            "fieldName": "city",
                                            "groupName": "Communication Detail",
                                            "fieldAccessModifier": "READ_ONLY",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "validationJson": {
                                                "calculation": {
                                                    "findPinMasterObject": [
                                                        "PINBRANCH",
                                                        "pincode",
                                                        {
                                                            "var": "zipCode"
                                                        },
                                                        "city"
                                                    ]
                                                }
                                            },
                                            "value": null,
                                            "placeholderText": "Select City",
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "columnNo": 1,
                                            "dependentField": null,
                                            "fieldDataType": "TEXT",
                                            "fieldLabel": "State",
                                            "fieldName": "state",
                                            "groupName": "Communication Detail",
                                            "fieldAccessModifier": "READ_ONLY",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 6,
                                            "validationJson": {
                                                "calculation": {
                                                    "findPinMasterObject": [
                                                        "PINBRANCH",
                                                        "pincode",
                                                        {
                                                            "var": "zipCode"
                                                        },
                                                        "state"
                                                    ]
                                                }
                                            },
                                            "value": null,
                                            "placeholderText": "Select State",
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                            "fieldDataType": "DROPDOWN",
                                            "fieldLabel": "Address Type",
                                            "fieldName": "typeOfAddress",
                                            "groupName": "Communication Detail",
                                            "isMandatory": false,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": "Address Type",
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "fieldDataType": "DATE",
                                            "isMandatory": false,
                                            "fieldLabel": "Resident Since",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 6,
                                            "maxLength": 0,
                                            "minDate": null,
                                            "maxDate": [null,null,null,true],
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "groupName": "ProductDeclaration",
                                            "groupIndex": null,
                                            "placeholderText": "",
                                            "fieldName": "livingSince",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "commonpropertyType": "DOCUMENT_TYPE",
                                            "fieldDataType": "DROPDOWN",
                                            "fieldLabel": "Address Proof Document Type",
                                            "fieldName": "addressTwoDocumentType",
                                            "groupName": "Communication Detail",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": "Address Type",
                                            "visibleInInvestorSection": false,
                                            "showLabel": true,
                                            "documentCategorycode": "IND_PAP",
                                            "uploadTypeInputfieldName": "addressTwoDocument"
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                            "fieldDataType": "DOCUMENT",
                                            "fieldLabel": "Address Proof Document",
                                            "fieldName": "addressTwoDocument",
                                            "groupName": "Communication Detail",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "fileDependentField": "addressTwoDocumentType",
                                            "documentData": {
                                                "documentCategoryCode": "IND_PAP"
                                            },
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": "Address Type",
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "PERSONAL_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": { "content": { "cat": ["Hello, ", { "var": "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle" }] } },
                        "sectionContent": {
                            "titleData": "Hello",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "sectionContent": {
                            "titleData": "Let us help you find the best loan offer",
                            "isShow": true
                        },
                        "className": "text-info mt-10 mb-20"
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "columnSize": 3,
                                "sendOptionKeyForDropDowns": true,
                                "autoVerifyMappedFields": true,
                                "mapSupplyData": true,
                                "mapAndDisable": true
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "Personal Email Id",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 100,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "dataMasking":true,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Valid Email ID",
                                    "fieldName": "alternativeUsername",
                                    "labelInfo": "Enter Borrower Email Id for further Communication",
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verificationType": "EMAIL",
                                    "verificationFieldName": "emailOtp",
                                    "journeyEventCode": "EMAIL_PASS",
                                    "verifyDisable": true
                                },
                                {
                                    "fieldDataType": "OTP",
                                    "otpType": "EMAIL",
                                    "isMandatory": true,
                                    "fieldLabel": "Enter Email OTP",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "length": 6,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "xx x  xxxxx",
                                    "fieldName": "emailOtp",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "showField": false,
                                    "OtpMasking": true,
                                    "otpDataType": "NUMBER",
                                    "otpAttempts": 3,
                                    "excludeToFormValue": true,
                                    "waitTimeInSeconds": 60,
                                    "options": {
                                        "value": null,
                                        "notificationType": "COMMON_OTP_TWO",
                                        "loanProduct": null,
                                        "createBorrower": true,
                                        "generateOtp": true,
                                        "className": "w-100"
                                    }
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "EDUCATION_TYPE",
                                    "fieldLabel": "Highest Education",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "groupName": "",
                                    "groupIndex": 2,
                                    "placeholderText": "Applicant Education Qualification",
                                    "fieldName": "educationType",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "MARITAL_STATUS",
                                    "fieldLabel": "Applicant Marital Status",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 2,
                                    "groupName": "",
                                    "groupIndex": 2,
                                    "placeholderText": "Applicant Marital Status",
                                    "fieldName": "maritalStatus",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "SECTION",
                                    "isMandatory": false,
                                    "fieldLabel": "Communication Address",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": 6,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "WrapperclassName": "fieldlabel-f-16",
                                    "validationJson": {
                                        "property": {
                                            "fieldLabel": { "if": [{ "==": [{ "var": "borrowerDetails.borrowerDetail.isReKyc" }, false] }, "Communication Address (As Per Bank Records)", "Communication Address (Details As per Aadhaar Card)"] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 2,
                                    "placeholderText": "Enter Address Line2",
                                    "fieldName": "communicationAddress",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "rows": 3,
                                    "groupIndex": 3,
                                    "groupName": ""
                                },
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "className": "mt15",
                                    "fieldLabel": "Use a different communication address for this Loan",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "default": false
                                    },
                                    "rulesFor": [
                                        "addressOne"
                                    ],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "differenceCommunicationAddress",
                                    "showLabel": false,
                                    "groupName": "",
                                    "groupIndex": 4
                                },
                                {
                                    "fieldDataType": "ADDRESS",
                                    "fieldLabel": "Address as per Aadhaar",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "asdsfdsfsd",
                                    "validationJson": {
                                        "showField": {
                                            "==": [
                                                {
                                                    "var": "differenceCommunicationAddress"
                                                },
                                                true
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "xx x  xxxxx",
                                    "fieldName": "addressOne",
                                    "showLabel": false,
                                    "showField": true,
                                    "groupName": null,
                                    "groupIndex": 5,
                                    "addressFields": [
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": true,
                                            "fieldLabel": "Address Line 1",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Address Line1",
                                            "fieldName": "addressOneLine1",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": true,
                                            "fieldLabel": "Address Line 2",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Address Line2",
                                            "fieldName": "addressOneLine2",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": false,
                                            "fieldLabel": "Address Line 3",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Address Line3",
                                            "fieldName": "addressOneLine3",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "isMandatory": false,
                                            "fieldLabel": "Landmark",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 3,
                                            "maxLength": 20,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "Enter Landmark",
                                            "fieldName": "addressOneSubDistrict",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "rows": 3
                                        },
                                        {
                                            "fieldDataType": "AUTO_COMPLETE",
                                            "isMandatory": true,
                                            "fieldLabel": "Pincode",
                                            "fieldAccessModifier": "EDITABLE",
                                            "commonpropertyType": "PINCODE",
                                            "minLength": null,
                                            "maxLength": 999999,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": [
                                                "addressOneState",
                                                "addressOneDistrict"
                                            ],
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "groupName": null,
                                            "groupIndex": null,
                                            "placeholderText": "Enter Pincode",
                                            "fieldName": "addressOneZipCode",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "fieldDataType": "TEXT",
                                            "fieldAccessModifier": "READ_ONLY",
                                            "fieldLabel": "City",
                                            "fieldName": "addressOneDistrict",
                                            "groupName": "Communication Detail",
                                            "commonpropertyType": "PINCODE_CITY",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "validationJson": {
                                                "calculation": {
                                                    "findPinMasterObject": [
                                                        "PINBRANCH",
                                                        "pincode",
                                                        {
                                                            "var": "addressOneZipCode"
                                                        },
                                                        "city"
                                                    ]
                                                }
                                            },
                                            "value": null,
                                            "placeholderText": "Select City",
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "columnNo": 1,
                                            "dependentField": null,
                                            "fieldDataType": "TEXT",
                                            "fieldLabel": "State",
                                            "fieldName": "addressOneState",
                                            "groupName": "Communication Detail",
                                            "commonpropertyType": "PINCODE_STATE",
                                            "fieldAccessModifier": "READ_ONLY",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 6,
                                            "validationJson": {
                                                "calculation": {
                                                    "findPinMasterObject": [
                                                        "PINBRANCH",
                                                        "pincode",
                                                        {
                                                            "var": "addressOneZipCode"
                                                        },
                                                        "state"
                                                    ]
                                                }
                                            },
                                            "value": null,
                                            "placeholderText": "Select State",
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                            "fieldDataType": "DROPDOWN",
                                            "fieldLabel": "Address Type",
                                            "fieldName": "addressOneOwnershipType",
                                            "groupName": "Communication Detail",
                                            "isMandatory": false,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": "Address Type",
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "fieldDataType": "DATE",
                                            "isMandatory": false,
                                            "fieldLabel": "Resident Since",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": 6,
                                            "maxLength": 0,
                                            "minDate": null,
                                            "maxDate": [null,null,null,true],
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "regexErrorMessage": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "groupName": "ProductDeclaration",
                                            "groupIndex": null,
                                            "placeholderText": "",
                                            "fieldName": "addressOneLivingSince",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "commonpropertyType": "DOCUMENT_TYPE",
                                            "fieldDataType": "DROPDOWN",
                                            "fieldLabel": "Address Proof Document Type",
                                            "fieldName": "addressTwoDocumentType",
                                            "groupName": "Communication Detail",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": "Address Type",
                                            "visibleInInvestorSection": false,
                                            "showLabel": true,
                                            "uploadTypeInputfieldName": "addressTwoDocument",
                                            "documentCategorycode": "IND_PAP"
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                            "fieldDataType": "DOCUMENT",
                                            "fieldLabel": "Address Proof Document",
                                            "fieldName": "addressTwoDocument",
                                            "groupName": "Communication Detail",
                                            "isMandatory": true,
                                            "isMasking": false,
                                            "maxLength": null,
                                            "minLength": null,
                                            "options": [],
                                            "regex": null,
                                            "regexForJS": null,
                                            "regexErrorMessage": null,
                                            "rowNo": 4,
                                            "rulesFor": null,
                                            "showField": true,
                                            "sortIndex": 5,
                                            "fileDependentField": "addressTwoDocumentType",
                                            "documentData": {
                                                "documentCategoryCode": "IND_PAP"
                                            },
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": "Address Type",
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        }
                                    ]
                                },
                                {
                                    "fieldDataType": "SECTION",
                                    "isMandatory": false,
                                    "fieldLabel": "Assigned Branch",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": 6,
                                    "maxLength": null,
                                    "className": "w-100",
                                    "error": null,
                                    "value": null,
                                    "pageSectionValidationJson": {
                                        "value": {
                                            "cat": [
                                                "<div class='bank-detail-status back-clr-white medium m-override-0 p-0verride-0'><div class='mb-0 form-label-lg d-flex align-items-start'><img src='../../../assets/icons/building.png' alt=''><div class='details-content'>Bank of India ",
                                                {
                                                    "var": "$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName"
                                                },
                                                " Branch<div class='address-content'><span class='common-info'>",
                                                {
                                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value"
                                                },
                                                {
                                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue"
                                                },
                                                ",",
                                                {
                                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue"
                                                },
                                                ",",
                                                {
                                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue"
                                                },
                                                "</span></div></div></div>"
                                            ]
                                        }

                                    },
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 2,
                                    "placeholderText": "Enter assigned Branch",
                                    "fieldName": "assignedBranch",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "rows": 3,
                                    "groupName": "Assigned Branch",
                                    "groupIndex": 6
                                },
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "className": "mt15",
                                    "fieldLabel": "Use a different branch for this Loan",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "default": false
                                    },
                                    "rulesFor": [
                                        "homeBranchState",
                                    ],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "differencebranch",
                                    "showLabel": false,
                                    "groupName": "",
                                    "groupIndex": 7
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "HOME_BRANCH_STATE",
                                    "fieldLabel": "Home Branch State",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {"showField":{"==": [{"var": "differencebranch"}, true]}},
                                    "rulesFor": ['homeBranchDistrict'],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch State",
                                    "fieldName": "homeBranchState",
                                    "showLabel": true,
                                    "labelInfo": "This will be your Bank Branch State where your case will be initiated",
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 8,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "dependentField": 'homeBranchState',
                                    "commonpropertyType": null,
                                    "isMandatory": true,
                                    "fieldLabel": "Home Branch District",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson":  {
                                        "showField": {"==": [{"var": "differencebranch"}, true]},
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{
                                            "if":[
                                                {
                                                    "and":[{"!=":[{"var":"homeBranchState"},null]},{"!=":[{"var":"homeBranchState"},""]}]
                                                    },
                                            {
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'],['state','homeBranchState']],
                                                "url":"/api-v3/restPublic/master-branch-list-new",
                                                "RequestType":"POST",
                                                "parserMethodName":"branchParser"
                                            },"REJECT_CALL"]
                                        }
                                        
                                        
                                    },
                                    "rulesFor": ["homeBranchCity"],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch District",
                                    "fieldName": "homeBranchDistrict",
                                    "showLabel": true,
                                    "labelInfo": 'This will be your Bank Branch District where your case will be initiated',
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 8,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "dependentField": 'homeBranchDistrict',
                                    "commonpropertyType": null,
                                    "isMandatory": true,
                                    "fieldLabel": "Home Branch City",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField":{"==": [{"var": "differencebranch"}, true]},
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"homeBranchDistrict"},null]},{"!=":[{"var":"homeBranchDistrict"},""]}]
                                            },{
                                            "apiType":"MICRO_SERVICE",
                                            "parameterConfig":[['microservicetoken','oauthAccessToken'],['district','homeBranchDistrict'],['fetchCities','STATIC',true]],
                                            "url":"/api-v3/restPublic/master-branch-list-new",
                                            "RequestType":"POST",
                                            "parserMethodName":"branchParser"
                                        },'REJECT_CALL']
                                        }
                                    },
                                    "rulesFor": ['branchCode'],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch City",
                                    "fieldName": "homeBranchCity",
                                    "showLabel": true,
                                    "labelInfo": "This will be your Bank Branch City where your case will be initiated",
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 8,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "commonpropertyType": null,
                                    "dependentField": 'homeBranchCity',
                                    "isMandatory": true,
                                    "fieldLabel": "Home Branch",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField":{"==": [{"var": "differencebranch"}, true]},
                                        "showLoaderOnEndpoints":true,
                                        "dontTriggerSelf":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"homeBranchCity"},null]},{"!=":[{"var":"homeBranchCity"},""]}]
                                            },{
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'],['city','homeBranchCity']],
                                                "url":"/api-v3/restPublic/master-branch-list-new",
                                                "RequestType":"POST",
                                                "parserMethodName":"branchParser"
                                            },'REJECT_CALL']
                                        }
                                    },
                                    "rulesFor": ['branchAddress'],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch",
                                    "fieldName": "branchCode",
                                    "showLabel": true,
                                    "labelInfo": "This will be your Bank Branch where your case will be initiated",
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 8,
                                    "showField": true
                                }, {
                                    "fieldDataType": "TEXT_AREA",
                                    "isMandatory": true,
                                    "fieldLabel": "Branch Address",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "value": {"if":[{"==":[{"var":"branchCode"},null]},null]}
                                        },
                                        "showField":{"==": [{"var": "differencebranch"}, true]},
                                        "showLoaderOnEndpoints":true,
                                        "dontTriggerSelf":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"branchCode"},null]},{"!=":[{"var":"branchCode"},""]}]
                                            },{
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'],['branchCode','branchCode']],
                                                "url":"/api-v3/restPublic/master-branch-list-new",
                                                "RequestType":"POST",
                                                "parserMethodName":"branchParser"
                                            },'REJECT_CALL']
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "branchAddress",
                                    "labelInfo": null,
                                    "groupName": "Choose Your branch",
                                    "groupIndex": 8,
                                    "showLabel": true,
                                    "rows": 3
                                },
                            ]
                        }
                    },
                    {
                        "componentType": "CONSENT",
                        "validateSection": true,
                        "className": "consent-text mb-20",
                        "sectionContent": {
                            "config": {
                                "options": [
                                    {
                                        "consentType": "APIFETCH",
                                        "consentCode": "BUREAU_CONSENT_VL",
                                        "submitConsentCodes": [
                                            "BUREAU_CONSENT_VL"
                                        ],
                                        "label": null,
                                        "className": "check-container",
                                        "completed": null
                                    }
                                ]
                            },
                            "isShow": true,
                            "showField": true
                        }
                    }
                ],
                "BRANCH_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": "common-title mb-10",
                        "sectionContent": {
                            "titleData": "Please Select the branch",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "className": "common-info mb-10",
                        "sectionContent": {
                            "paragraphData": "Select a branch where you want your loan Application to be Processed",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "options": {
                                "columnSize": 3,
                                "sendOptionKeyForDropDowns": true,
                                "mapSupplyData": true
                            },
                            "fields": [
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "HOME_BRANCH_STATE",
                                    "fieldLabel": "Home Branch State",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": ['homeBranchDistrict'],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch State",
                                    "fieldName": "homeBranchState",
                                    "showLabel": true,
                                    "labelInfo": "This will be your Bank Branch State where your case will be initiated",
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "dependentField": 'homeBranchState',
                                    "commonpropertyType": null,
                                    "isMandatory": true,
                                    "fieldLabel": "Home Branch District",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson":  {
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{
                                            "if":[{
                                                "and":[{"!=":[{"var":"homeBranchState"},null]},{"!=":[{"var":"homeBranchState"},""]}]
                                                },
                                            {
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'],['state','homeBranchState']],
                                                "url":"/api-v3/restPublic/master-branch-list-new",
                                                "RequestType":"POST",
                                                "parserMethodName":"branchParser"
                                            },"REJECT_CALL"]
                                        }
                                    },
                                    "rulesFor": ["homeBranchCity"],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch District",
                                    "fieldName": "homeBranchDistrict",
                                    "showLabel": true,
                                    "labelInfo": 'This will be your Bank Branch District where your case will be initiated',
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "dependentField": 'homeBranchDistrict',
                                    "commonpropertyType": null,
                                    "isMandatory": true,
                                    "fieldLabel": "Home Branch City",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"homeBranchDistrict"},null]},{"!=":[{"var":"homeBranchDistrict"},""]}]
                                            },{
                                            "apiType":"MICRO_SERVICE",
                                            "parameterConfig":[['microservicetoken','oauthAccessToken'],['district','homeBranchDistrict'],['fetchCities','STATIC',true]],
                                            "url":"/api-v3/restPublic/master-branch-list-new",
                                            "RequestType":"POST",
                                            "parserMethodName":"branchParser"
                                        },'REJECT_CALL']
                                        }
                                    },
                                    "rulesFor": ['branchCode'],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch City",
                                    "fieldName": "homeBranchCity",
                                    "showLabel": true,
                                    "labelInfo": "This will be your Bank Branch City where your case will be initiated",
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "AUTO_COMPLETE",
                                    "commonpropertyType": null,
                                    "dependentField": 'homeBranchCity',
                                    "isMandatory": true,
                                    "fieldLabel": "Home Branch",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"homeBranchCity"},null]},{"!=":[{"var":"homeBranchCity"},""]}]
                                            },{
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'],['city','homeBranchCity']],
                                                "url":"/api-v3/restPublic/master-branch-list-new",
                                                "RequestType":"POST",
                                                "parserMethodName":"branchParser"
                                            },'REJECT_CALL']
                                        }
                                    },
                                    "rulesFor": ['branchAddress'],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Home Branch",
                                    "fieldName": "branchCode",
                                    "showLabel": true,
                                    "labelInfo": "This will be your Bank Branch where your case will be initiated",
                                    "groupName": 'Choose Your branch',
                                    "groupIndex": 2,
                                    "showField": true
                                }, {
                                    "fieldDataType": "TEXT_AREA",
                                    "isMandatory": false,
                                    "fieldLabel": "Branch Address",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "value": {"if":[{"==":[{"var":"branchCode"},null]},null]}
                                        },
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{"if":[{"!=":[{"var":"branchCode"},null]},{
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'],'branchCode'],
                                                "url":"/api-v3/restPublic/master-branch-list-new",
                                                "RequestType":"POST",
                                                "parserMethodName":"branchParser"
                                            },'REJECT_CALL']
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "branchAddress",
                                    "labelInfo": null,
                                    "groupName": "Choose Your branch",
                                    "groupIndex": 2,
                                    "showLabel": true,
                                    "rows": 3
                                },
                            ]
                        }
                    }
                ],
                "EMPLOYMENT_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Employment Details"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "text-info mb-20",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please Share Your Details About Your Current Employment"
                        }
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "mandatory": false,
                        "className": "mb-10 x-large coapplicant-padding",
                        "sectionContent": {
                            "options": {
                                "columnSize": 3,
                                "mapSupplyData": true
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_EMPLOYMENT_TYPE",
                                    "fieldLabel": "Employment Type",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": [
                                        "textVariable6",
                                        "borrowerEmploymentHistoryTextVariable11",
                                        "borrowerEmploymentHistoryTextVariable15",
                                        "emailId",
                                        "borrowerEmploymentHistoryTextVariable4",
                                        "officialEmailId",
                                        "employedSince",
                                        "textVariable35",
                                        "textVariable36",
                                        "textVariable5",
                                        "textVariable3",
                                        "dateVariable2",
                                        "dateVariable1",
                                        "textVariable11",
                                        "emiPaid",
                                        "borrowerEmploymentHistoryTextVariable24",
                                        "numberVariable3",
                                        "organizationName",
                                        "buisnessEmail"
                                    ],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Employment Type",
                                    "fieldName": "borrowerEmploymentType",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "fieldLabel": "Organisation Type",
                                    "commonpropertyType": "BORROWER_EMPLOYMENT_VARIABLE11",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SALARIED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Organisation Type",
                                    "fieldName": "borrowerEmploymentHistoryTextVariable11",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_EMPLOYMENT_VARIABLE15",
                                    "fieldLabel": "Profession",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SALARIED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Profession",
                                    "fieldName": "borrowerEmploymentHistoryTextVariable15",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": false,
                                    "fieldLabel": "Office Email ID",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SALARIED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "countryCode": "+91",
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "dataMasking":true,
                                    "placeholderText": "Enter your Email ID",
                                    "fieldName": "officialEmailId",
                                    "showLabel": true,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verificationType": "EMAIL",
                                    "verificationFieldName": "emailOtp",
                                    "journeyEventCode": "ORGANISATION_VERIFY"
                                },
                                {
                                    "fieldDataType": "OTP",
                                    "otpType": "EMAIL",
                                    "isMandatory": true,
                                    "fieldLabel": "Enter Email OTP",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "length": 6,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "xx x  xxxxx",
                                    "fieldName": "emailOtp",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "showField": false,
                                    "OtpMasking": true,
                                    "otpDataType": "NUMBER",
                                    "otpAttempts": 3,
                                    "excludeToFormValue": true,
                                    "waitTimeInSeconds": 60,
                                    "options": {
                                        "value": null,
                                        "notificationType": "COMMON_OTP_TWO",
                                        "loanProduct": null,
                                        "createBorrower": true,
                                        "generateOtp": true,
                                        "className": "w-100",
                                        "extraValidateParams": {
                                            "saveEmail": false
                                        }
                                    }
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "",
                                    "fieldLabel": "Employer Name",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SALARIED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "organizationName",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "autoSuggest": true,
                                    "autosuggestCode": "employerSearch",
                                    "autoSuggestSelectDisable": false,
                                    "journeyEventCode": "EMPLOYMENT_DETAILS_CHECK"
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Total Monthly Deductions",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "and": [
                                                        {
                                                            "!=": [
                                                                {
                                                                    "var": "borrowerEmploymentType"
                                                                },
                                                                null
                                                            ]
                                                        },
                                                        {
                                                            "==": [
                                                                {
                                                                    "var": "borrowerEmploymentType"
                                                                },
                                                                "SALARIED"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "",
                                    "fieldName": "borrowerEmploymentHistoryTextVariable24",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE11",
                                    "fieldLabel": "Professionals and Self employed persons",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SELF_EMPLOYED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Professionals and Self employed persons",
                                    "fieldName": "textVariable11",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "verificationType": "UDYAM",
                                    "fieldDataType": "TEXT",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "commonpropertyType": "",
                                    "fieldLabel": "Udyam Number",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 19,
                                    "maxLength": 19,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SELF_EMPLOYED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "UDYAM-XX-XX-XXXXXXX",
                                    "fieldName": "textVariable3",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "upperCase": true
                                },
                                {
                                    "verificationType": "GST",
                                    "fieldDataType": "DROPDOWN",
                                    "autoSuggest": true,
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "commonpropertyType": null,
                                    "autosuggestCode": "GST_SEARCH",
                                    "fieldLabel": "GST Number",
                                    "upperCase": true,
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 15,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "apiEndpoint": {
                                            "if": [
                                                {"and":[{
                                                    "!=": [
                                                      {
                                                        "var": "borrowerEmploymentType"
                                                      },
                                                      null
                                                    ]
                                                  },{
                                                    "==": [{ "var": "borrowerEmploymentType" }, "SELF_EMPLOYED"]
                                                }]}
                                              ,
                                              {
                                                "apiType": "PLATFORM",
                                                "parameterConfig": [
                                                  "access_token",
                                                  "loanUuid",
                                                  [
                                                    "applicationSource",
                                                    "STATIC",
                                                    "WEB_JOURNEY"
                                                  ],
                                                  [
                                                    "requestFor",
                                                    "STATIC",
                                                    "BORROWER"
                                                  ]
                                                ],
                                                "url": "/api/v1/perfiosServices/gstSearchByPan",
                                                "RequestType": "POST",
                                                "parserMethodName": "GstPanSearchParser"
                                              },
                                              "REJECT_CALL"
                                            ]
                                          },
                                          "dontTriggerSelf": true,
                                        "showField": {
                                            "if": [{
                                                "==": [{ "var": "borrowerEmploymentType" }, "SELF_EMPLOYED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "textVariable5",
                                    "showLabel": true,
                                    "labelInfo": "kindly provide the GST Number of business for verification",
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verifyDisable": false
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "autoSuggest": true,
                                    "commonpropertyType": "",
                                    "fieldLabel": "Business Name",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 3,
                                    "maxLength": 20,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SELF_EMPLOYED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "textVariable6",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DATE",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "commonpropertyType": "",
                                    "fieldLabel": "Business Started On",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 0,
                                    "error": null,
                                    "value": null,
                                    "minDate": null,
                                    "maxDate": [null,null,null,true],
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SELF_EMPLOYED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "dateVariable2",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "Buisness Email ID",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SELF_EMPLOYED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "countryCode": "+91",
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "placeholderText": "Enter your Email ID",
                                    "fieldName": "buisnessEmail",
                                    "showLabel": true,
                                    "groupName": null,
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Total Annual Deductions",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SELF_EMPLOYED"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 2,
                                    "placeholderText": "",
                                    "fieldName": "numberVariable3",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                }
                            ]
                        }
                    }
                ],
                "VEHICLE_DETAILS": [
        {
          "componentType": "TITLE",
          "className": "mb-1",
          "sectionContent": {
            "isShow": true,
            "titleData": "Enter Vehicle Details"
          }
        },
        {
          "componentType": "PARAGRAPH",
          "validateSection": false,
          "sectionContent": {
            "paragraphData": "Please, Fill the Details",
            "isShow": true
          },
          "className": "text-info mt-3"
        },
        {
          "componentType": "FORM",
          "validateSection": true,
          "mandatory": false,
          "className": "mb-10 x-large coapplicant-padding",
          "sectionContent": {
            "options": {
              "columnSize": 3,
              "sendOptionKeyForDropDowns": true,
              "mapOptionsBasedOnOptionName": false,
              "mapSupplyData": true
            },
            "isShow": true,
            "fields": [
              {
                "fieldDataType": "AUTO_COMPLETE",
                "isMandatory": true,
                "fieldLabel": "Dealer City",
                "dependentField": null,
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 2,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "engineType"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/fetchDealerMasterCity",
                      "/api/v2/vehicleOwned/fetchDealerMasterCity"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable4",
                  "vehicleOwnedTextVariable5",
                  "vehicleOwnedTextVariable6",
                  "dealerName"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Dealer City",
                "fieldName": "dealerCity",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "isMandatory": true,
                "fieldLabel": "Vehicle Type",
                "commonpropertyType": "VEHICLE_TYPE",
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                    "default":"FOUR WHEELER",
                    "disable":true
                },
                "rulesFor": [
                  "manufacturer"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Vehicle Type",
                "fieldName": "vehicleType",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "isMandatory": true,
                "fieldLabel": "Vehicle Status",
                "commonpropertyType": "VEHICLE_OWNED_TEXT_VARIABLE_18",
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                    "default":"New Vehicle",
                    "disable":true
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable16"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Vehicle Status",
                "fieldName": "vehicleOwnedTextVariable18",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "dependentField": "vehicleType",
                "isMandatory": true,
                "fieldLabel": "Manufacturer",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "vehicleType"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/filterManufacturerMasterByVehicleType",
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "rulesFor": [
                  "vehicleModel"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Manufacturer",
                "fieldName": "manufacturer",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "dependentField": "manufacturer",
                "isMandatory": true,
                "fieldLabel": "Model",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "manufacturer"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/fetchVehicleModelByManufacturerID",
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable4",
                  "variant"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Model",
                "fieldName": "vehicleModel",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "dependentField": "vehicleModel",
                "isMandatory": true,
                "fieldLabel": "Variant",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "vehicleModel"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/fetchVehicleVariantByModelID",
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "rulesFor": [
                  "engineType"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Variant",
                "fieldName": "variant",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "TEXT",
                "isMandatory": true,
                "dependentField": "variant",
                "fieldLabel": "Engine Type",
                "commonpropertyType": null,
                "fieldAccessModifier": "READ_ONLY",
                "minLength": 6,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "variant"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/filterVehicleVariantMasterByVariantId",
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable4",
                  "dealerCity"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Engine Type",
                "fieldName": "engineType",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "isMandatory": true,
                "fieldLabel": "Manufacturing Year",
                "commonpropertyType": "VEHICLE_OWNED_TEXT_VARIABLE_3",
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": null,
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Manufacturing Year",
                "fieldName": "vehicleOwnedTextVariable3",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": true,
                "fieldLabel": "Vehicle Ex showroom Price",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "clearIfEnabled": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "and": [
                          {
                            "!=": [
                              {
                                "var": "variant"
                              },
                              null
                            ]
                          },
                          {
                            "!=": [
                              {
                                "var": "dealerCity"
                              },
                              null
                            ]
                          },
                          {
                            "!=": [
                              {
                                "var": "vehicleType"
                              },
                              null
                            ]
                          }
                        ]
                      },
                      {
                        "apiType": "MICRO_SERVICE",
                        "parameterConfig": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          [
                            "vehicleOwnedTextVariable20",
                            "dealerCity"
                          ],
                          [
                            "variant",
                            "variant"
                          ],
                          [
                            "vehicleType",
                            "vehicleType"
                          ]
                        ],
                        "url": "/api-v3/vehicle/fetchVariantPriceFromCarDekho",
                        "RequestType": "POST",
                        "parserMethodName": "variantPriceParser"
                      },
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "regex": null,
                "rulesFor": [
                  "vehicleOwnedTextVariable11"
                ],
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Vehicle Ex showroom Price",
                "fieldName": "vehicleOwnedTextVariable4",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": true,
                "fieldLabel": "Registration Cost",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "clearIfEnabled": true,
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable11"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Registration Cost",
                "fieldName": "vehicleOwnedTextVariable5",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": true,
                "fieldLabel": "Insurance Cost",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "clearIfEnabled": true,
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable11"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Insurance Cost",
                "fieldName": "vehicleOwnedTextVariable6",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Accessories Cost",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": null,
                "regex": null,
                "rulesFor": [],
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Accessories Cost",
                "fieldName": "vehicleOwnedTextVariable7",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Others Cost",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": null,
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "rulesFor": [],
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Others Cost",
                "fieldName": "vehicleOwnedTextVariable8",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Loan Suraksha Insurance Premium",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": null,
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "rulesFor": [
                    "vehicleOwnedTextVariable13"
                  ],  
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Loan Suraksha Insurance Premium",
                "fieldName": "vehicleOwnedNumberVariable3",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Vehicle Discount",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": null,
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "rulesFor": [
                  "vehicleOwnedTextVariable11"
                ],
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Vehicle Discount",
                "fieldName": "vehicleOwnedNumberVariable4",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "On Road Price(Excl. Accessories/Discount/Other Cost)",
                "commonpropertyType": null,
                "fieldAccessModifier": "READ_ONLY",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "calculation": {
                    "-": [
                      {
                        "+": [
                          {
                            "var": "vehicleOwnedTextVariable4"
                          },
                          {
                            "var": "vehicleOwnedTextVariable5"
                          },
                          {
                            "var": "vehicleOwnedTextVariable6"
                          }
                        ]
                      },
                      {
                        "var": "vehicleOwnedNumberVariable4"
                      }
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rulesFor": [
                  "vehicleOwnedTextVariable9",
                  "vehicleOwnedTextVariable13"
                ],
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Vehicle On Road Price",
                "fieldName": "vehicleOwnedTextVariable11",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Margin %",
                "commonpropertyType": null,
                "fieldAccessModifier": "READ_ONLY",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "default": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "vehicleOwnedTextVariable18"
                          },
                          "New Vehicle"
                        ]
                      },
                      10,
                      {
                        "var": "vehicleOwnedTextVariable16"
                      }
                    ]
                  },
                  "calculation": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "vehicleOwnedTextVariable18"
                          },
                          "New Vehicle"
                        ]
                      },
                      10,
                      {
                        "var": "vehicleOwnedTextVariable16"
                      }
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Margin %",
                "fieldName": "vehicleOwnedTextVariable16",
                "labelInfo": "Margin Contribution Percentage",
                "showLabel": true,
                "showField": false
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Margin Money",
                "commonpropertyType": null,
                "fieldAccessModifier": "READ_ONLY",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "default": {
                    "math.round": [
                      {
                        "/": [
                          {
                            "*": [
                              {
                                "var": "vehicleOwnedTextVariable11"
                              },
                              10
                            ]
                          },
                          100
                        ]
                      }
                    ]
                  },
                  "calculation": {
                    "math.round": [
                      {
                        "/": [
                          {
                            "*": [
                              {
                                "var": "vehicleOwnedTextVariable11"
                              },
                              10
                            ]
                          },
                          100
                        ]
                      }
                    ]
                  }
                },
                "rulesFor": [
                  "vehicleOwnedTextVariable13"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Margin Money",
                "fieldName": "vehicleOwnedTextVariable9",
                "labelInfo": "Margin money contributed On top of the Loan",
                "showLabel": true,
                "showField": false
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Actual Max loan amount",
                "commonpropertyType": null,
                "fieldAccessModifier": "READ_ONLY",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "default": {
                    "-": [
                      {
                        "+": [
                        {
                            "var": "vehicleOwnedNumberVariable3"
                        },    
                          {
                            "var": "vehicleOwnedTextVariable11"
                          }
                        ]
                      },
                      {
                        "var": "vehicleOwnedTextVariable9"
                      }
                    ]
                  },
                  "calculation": {
                    "-": [
                      {
                        "+": [
                            {
                                "var": "vehicleOwnedNumberVariable3"
                            },
                          {
                            "var": "vehicleOwnedTextVariable11"
                          }
                        ]
                      },
                      {
                        "var": "vehicleOwnedTextVariable9"
                      }
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Vehicle Detail",
                "groupIndex": 0,
                "placeholderText": "Actual Max loan amount",
                "fieldName": "vehicleOwnedTextVariable13",
                "labelInfo": "This amount defines the maximum loan Amount can be Sanctioned",
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "DROPDOWN",
                "isMandatory": true,
                "dependentField": "dealerCity",
                "fieldLabel": "Select Dealer Name",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 2,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerCity"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/filterDealerMaster",
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true
                },
                "rulesFor": [
                  "contactPerson",
                  "dealerMobile",
                  "dealerPhone",
                  "dealerEmail",
                  "addressOneLine1",
                  "addressOneLine2",
                  "addressOneLine3",
                  "addressOneState_dummy",
                  "addressOneZipCode",
                  "addressOneSubDistrict",
                  "addressOneCity_dummy",
                  "vehicleOwnedTextVariable17"
                ],
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "placeholderText": "Dealer Name",
                "fieldName": "dealerName",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "TEXT",
                "isMandatory": true,
                "fieldLabel": "Enter Dealer Name",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 2,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "showField": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  }
                },
                "rulesFor": null,
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "placeholderText": "Dealer Name",
                "fieldName": "vehicleOwnedTextVariable17",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "TEXT",
                "isMandatory": false,
                "fieldLabel": "Dealer Contact Person",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 2,
                "maxLength": 15,
                "error": null,
                "value": null,
                "validationJson": {
                  "showLoaderOnEndpoints": true,
                  "apiEndpoint": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerName"
                          },
                          null
                        ]
                      },
                      "/api/v2/vehicleOwned/fetchDealerMaster",
                      "REJECT_CALL"
                    ]
                  },
                  "dontTriggerSelf": true,
                  "disable": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  },
                  "mandatory": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "placeholderText": "Dealer Contact Person",
                "fieldName": "contactPerson",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Dealer Phone Number",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": 9999999999,
                "error": null,
                "value": null,
                "validationJson": {
                  "disable": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  },
                  "mandatory": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "placeholderText": "Dealer Phone Number",
                "fieldName": "dealerPhone",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "NUMBER",
                "isMandatory": false,
                "fieldLabel": "Dealer Mobile Number",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": 9999999999,
                "error": null,
                "value": null,
                "validationJson": {
                  "disable": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  },
                  "mandatory": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "placeholderText": "Dealer Mobile Number",
                "fieldName": "dealerMobile",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "TEXT",
                "isMandatory": false,
                "fieldLabel": "Dealer Email ID",
                "commonpropertyType": null,
                "fieldAccessModifier": "EDITABLE",
                "minLength": 2,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "disable": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  },
                  "mandatory": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  }
                },
                "regex": null,
                "options": [],
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "placeholderText": "Dealer Email ID",
                "fieldName": "dealerEmail",
                "labelInfo": null,
                "showLabel": true,
                "showField": true
              },
              {
                "fieldDataType": "ADDRESS",
                "fieldLabel": "",
                "fieldAccessModifier": "EDITABLE",
                "minLength": null,
                "maxLength": null,
                "error": null,
                "value": null,
                "validationJson": {
                  "disable": {
                    "if": [
                      {
                        "!=": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  },
                  "mandatory": {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "dealerName"
                          },
                          "OTHERS"
                        ]
                      },
                      true,
                      false
                    ]
                  }
                },
                "rulesFor": null,
                "regex": null,
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "placeholderText": "xx x  xxxxx",
                "fieldName": "vehicleAddressVariable1",
                "showLabel": false,
                "showField": true,
                "groupName": "Dealer Detail",
                "groupIndex": 1,
                "addressFields": [
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": false,
                    "fieldLabel": "Address Line 1",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 2,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [
                          {
                            "!=": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      },
                      "mandatory": {
                        "if": [
                          {
                            "==": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      }
                    },
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "Address Line 1",
                    "fieldName": "addressOneLine1",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": false,
                    "fieldLabel": "Address Line 2",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 2,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [
                          {
                            "!=": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      }
                    },
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "Address Line 2",
                    "fieldName": "addressOneLine2",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": false,
                    "fieldLabel": "Address Line 3",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 2,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [
                          {
                            "!=": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      }
                    },
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "Address Line 3",
                    "fieldName": "addressOneLine3",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": false,
                    "fieldLabel": "Pincode",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 999999,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [
                          {
                            "!=": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      },
                      "mandatory": {
                        "if": [
                          {
                            "==": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      }
                    },
                    "regex": null,
                    "rulesFor": [
                      "addressOneCity_dummy",
                      "addressOneState_dummy"
                    ],
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "Pincode",
                    "fieldName": "addressOneZipCode",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": false,
                    "fieldLabel": "City",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": 2,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "calculation": {
                        "findPinMasterObject": [
                          "PINBRANCH",
                          "pincode",
                          {
                            "var": "addressOneZipCode"
                          },
                          "city"
                        ]
                      }
                    },
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "City",
                    "fieldName": "addressOneCity_dummy",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": false,
                    "fieldLabel": "State",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": 2,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "calculation": {
                        "findPinMasterObject": [
                          "PINBRANCH",
                          "pincode",
                          {
                            "var": "addressOneZipCode"
                          },
                          "state"
                        ]
                      }
                    },
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "State",
                    "fieldName": "addressOneState_dummy",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": false,
                    "fieldLabel": "Landmark",
                    "commonpropertyType": null,
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 2,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [
                          {
                            "!=": [
                              {
                                "var": "dealerName"
                              },
                              "OTHERS"
                            ]
                          },
                          true,
                          false
                        ]
                      }
                    },
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Dealer Detail",
                    "groupIndex": 1,
                    "placeholderText": "Landmark",
                    "fieldName": "addressOneSubDistrict",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  }
                ]
              }
            ]
          }
        }
      ],
                "CONTACT_BRANCH": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": {
                            "content": {
                                "cat": [
                                    "Dear, ",
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.borrowerDisplayName"
                                            },
                                            "Applicant"
                                        ]
                                    }
                                ]
                            }
                        },
                        "className": " mb-0 mt-5 d-flex align-items-center",
                        "sectionContent": {
                            "titleData": "Dear,",
                            "isShow": true,
                            "endContent": [
                                {
                                    "componentType": "ICON",
                                    "className": "ml-10",
                                    "sectionContent": {
                                        "isShow": true,
                                        "iconPath": "/assets/icons/sad.png"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info mt-3 f-17",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "We have received your Vehicle Loan application and\n                    look forward to seeing you at the bank soon to complete the process. Please visit nearest BOI bank branch for further assistance"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "form-label-lg mt-4",
                        "validationJson": {
                            "content": {
                                "cat": [
                                    "Your Lead Reference ID #, ",
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "showSection": {
                                "if": [{
                                    "==": [{
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    }, null]
                                }, false, true]

                            }
                        },
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Your Lead Reference ID #"
                        }
                    }
                ],
                "PRODUCT_ERROR": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": {
                            "content": {
                                "cat": [
                                    "Dear, ",
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.borrowerDisplayName"
                                            },
                                            "Applicant"
                                        ]
                                    }
                                ]
                            }
                        },
                        "className": " mb-0 mt-5 d-flex align-items-center",
                        "sectionContent": {
                            "titleData": "Dear,",
                            "isShow": true,
                            "endContent": [
                                {
                                    "componentType": "ICON",
                                    "className": "ml-10",
                                    "sectionContent": {
                                        "isShow": true,
                                        "iconPath": "/assets/icons/sad.png"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info mt-3 f-17",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Sorry! We are unable to process your application. We apologize for the Inconvenience.Kindly resume your journey again OR visit your BOI branch for further assistance."
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "form-label-lg mt-4",
                        "validateSection": false,
                        "validationJson": {
                            "content": {
                                "cat": [
                                    "Your Lead Reference ID # ",
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "showSection": {
                                "if": [{
                                    "==": [{
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    }, null]
                                }, false, true]

                            }
                        },
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Your Lead Reference ID #"
                        }
                    }
                ],
                "DOCUMENT_UPLOAD_V2": [
                    {
                        "componentType": "TITLE",
                        "className": "mb-10",
                        "mandatory": false,
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Supporting Documents"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "mb-10 common-info",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please share document online or upload .pdf files less than 5 Mb each."
                        }
                    }
                ],
                "SANCTION_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "In Principle Sanction Details"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "f-16 clr-lt-grey col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-20 common-info",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please Customise Your Loan Details to Suit your Best Needs"
                        }
                    }
                ],
                "KEY_FACT_DETAILS": [
                    {
                        "componentType":"GRID",
                        "validateSection":false,
                        "className":"display-flex j-c-sb a-i-c",
                        "sectionContent":{
                            "isShow":true,
                            "items":[
                                {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "parentclassName": "display-flex j-c-sb a-i-c",
                        "className": "common-title download-ref-key-fact",
                        "sectionContent": {
                            "titleData": "Key Fact Statement",
                            "isShow": true
                        }
                    },
                    {
                        "componentType":"BUTTON",
                        "validateSection":false,
                        "parentclassName":"key-download-fact-button",
                        "rootClassName":"key-download-fact-button",
                        "className":"",
                        "sectionContent":{
                            "label":"Download Key Fact Statement",
                            "actionId":"KEYFACT_DOWNLOAD",
                            "className":"btn-orange",
                            "isShow":true
                        }
                    }
                            ]
                        }
                    },
                    
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "className": "common-info mb-20",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please, Read and Declare before Submitting"
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": "f-15 common-title",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Applicant Details"
                        }
                    },
                    {
                        "componentType": "HTML_CONTENT",
                        "validateSection": false,
                        "className": "",
                        "validationJson": {
                            "content": {
                                "cat": [`<div class="data_wrapper w-100 border-radius-8 bgblue p-30 mb-20">
                          <div class="display-flex key-fact-details-container">
                              <div class="display-flex flex-col">
                                  <label class="text-info">Applicant Name</label>
                                  <span>`, {"var": "$scope.loanDetails.loanDetails.borrower"}, `</span>
                                  </div>
                                  <div class="display-flex flex-col">
                                      <label class="text-info">Home Branch Address</label>
                                      <span class="fw-bold f-15"> Bank of India `, {"var": "$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName"},
                                    `</span>
                                  <span class="common-info">`,
                                  {"var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value"},
                                    ` Branch</span>
                                  </div>
                                  <div class="display-flex flex-col mb-20">
                                      <label class="text-info">Sanction Date</label>
                                      <span>`, {"var": "metaConfig.customData.todayDate"},
                                    `</span>
                                  </div>
                              </div>
                          </div>`]
                            }
                        },
                        "sectionContent": {
                            "isShow": true,
                            "htmlData": null
                        }
                    },
                    {
                        "componentType":"TABLE",
                        "validateSection":false,
                        "className":"mb-20 keyfact-table",
                        "sectionContent":{
                            "isShow":true,
                            "config":{
                                "showRecordActions": false,
                                "showSerialNo": false,
                                "showFooterAction": false,
                                "showFooterCalculations": false,
                                "showHeaders": true,
                                "title": "Sanction Details",
                                "footerActionLabel": "+ Add New Borrower",
                                "recordActions": [
                                    {
                                        "actionCode": "EDIT",
                                        "icon": "../../../../assets/icons/edit.png",
                                        "name": "Edit"
                                    }
                                ],
                                "headers": [
                                    {
                                        "fieldLabel": "S.No",
                                        "fieldName": "sno"
                                    },
                                    {
                                        "fieldLabel": "Parameter",
                                        "fieldName": "title"
                                    },
                                    {
                                        "fieldLabel": "Details",
                                        "fieldName": "data"
                                    }
                                ],
                                "data": [
                                    {
                                        "sno": "(i)",
                                        "title": "Loan Amount",
                                        "data": {"var":"$scope.fetchRepaymentSchedule.object.principal"}
                                    },
                                    {
                                        "sno": "(ii)",
                                        "title": "Total Interest  charge during the entire tenor of the loan",
                                        "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                                    },
                                    {
                                        "sno": "(iii)",
                                        "title": "Other up-front charges, if any",
                                        "data": {"+":[{"math.min":[{"math.max":[1000,{"*":[0.25,{"/":[{"var":"$scope.loanDetails.loanDetails.loanAmount"},100]}]}]},5000]},0,0]}
                                    },
                                    {
                                        "sno": "a",
                                        "title": "Processing Fees, if any",
                                        "data": {"math.min":[{"math.max":[1000,{"*":[0.25,{"/":[{"var":"$scope.loanDetails.loanDetails.loanAmount"},100]}]}]},5000]}
                                    },
                                    {
                                        "sno": "b",
                                        "title": "Insurance Charges if any",
                                        "data": 0
                                    },
                                    {
                                        "sno": "c",
                                        "title": "Others, if any",
                                        "data": 0
                                    },
                                    {
                                        "sno": "(iv)",
                                        "title": "Net Disbursed Amount",
                                        "data": {"-":[{"var":"$scope.fetchRepaymentSchedule.object.principal"},{"+":[{"math.min":[{"math.max":[1000,{"*":[0.25,{"/":[{"var":"$scope.loanDetails.loanDetails.loanAmount"},100]}]}]},5000]},0,0]}]}
                                    },
                                    {
                                        "sno": "(v)",
                                        "title": "Total amount to be paid by the borrower",
                                        "data": {"+":[{"var":"$scope.fetchRepaymentSchedule.object.principal"},{"var":"$scope.fetchRepaymentSchedule.object.payableInterest"},{"+":[{"math.min":[{"math.max":[1000,{"*":[0.25,{"/":[{"var":"$scope.loanDetails.loanDetails.loanAmount"},100]}]}]},5000]},0,0]}]}
                                    },
                                    {
                                        "sno": "(vi)",
                                        "title": "Annual Percentage Rate - Effective annualized interest rate",
                                        "data": {"var":"$scope.fetchRepaymentSchedule.object.rateOfInterest"}
                                    },
                                    {
                                        "sno": "(vii)",
                                        "title": "Tenor of the Loan",
                                        "data": {"var":"$scope.fetchRepaymentSchedule.object.loanTenure"}
                                    },
                                    {
                                        "sno": "(viii)",
                                        "title": "Repayment frequency by the borrower",
                                        "data": "Monthly"
                                    },
                                    {
                                        "sno": "(ix)",
                                        "title": "Number of installments of repayment",
                                        "data": {"var":"$scope.fetchRepaymentSchedule.object.loanTenure"}
                                    },
                                    {
                                        "sno": "(x)",
                                        "title": "Amount of each installments of repayment",
                                        "data": {"var":"$scope.fetchRepaymentSchedule.object.emiToBePaid"}
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "componentType":"TABLE",
                        "validateSection":false,
                        "className":"mb-20 keyfact-table",
                        "sectionContent":{
                            "isShow":true,
                            "config":{
                                "showRecordActions": false,
                                "showSerialNo": false,
                                "showFooterAction": false,
                                "showFooterCalculations": false,
                                "showHeaders": false,
                                "title": "Details about  Contingent Charges",
                                "footerActionLabel": "+ Add New Borrower",
                                "recordActions": [
                                    {
                                        "actionCode": "EDIT",
                                        "icon": "../../../../assets/icons/edit.png",
                                        "name": "Edit"
                                    }
                                ],
                                "headers": [
                                    {
                                        "fieldLabel": "S.no",
                                        "fieldName": "sno"
                                    },
                                    {
                                        "fieldLabel": "Details About Contigent charges",
                                        "fieldName": "title"
                                    },
                                    {
                                        "fieldLabel": "",
                                        "fieldName": "data"
                                    }
                                ],
                                "data": [
                                    {
                                        "sno": "",
                                        "title": "Rate of annualized penal charges in case of delayed payements",
                                        "data": null
                                    },
                                    {
                                        "sno": "(xi)",
                                        "title": "Rate of annualized other penal charges",
                                        "data": "2% overdue amount"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "componentType":"TABLE",
                        "validateSection":false,
                        "className":"mb-20 keyfact-table",
                        "sectionContent":{
                            "isShow":true,
                            "config":{
                                "showRecordActions": false,
                                "showSerialNo": false,
                                "showFooterAction": false,
                                "showFooterCalculations": false,
                                "showHeaders": false,
                                "title": "Other Disclosures",
                                "footerActionLabel": "+ Add New Borrower",
                                "recordActions": [
                                    {
                                        "actionCode": "EDIT",
                                        "icon": "../../../../assets/icons/edit.png",
                                        "name": "Edit"
                                    }
                                ],
                                "headers": [
                                    {
                                        "fieldLabel": "S.no",
                                        "fieldName": "sno"
                                    },
                                    {
                                        "fieldLabel": "other Disclosures",
                                        "fieldName": "title"
                                    },
                                    {
                                        "fieldLabel": "",
                                        "fieldName": "data"
                                    }
                                ],
                                "data": [
                                    {
                                        "sno": "(xii)",
                                        "title": "Cooling off/look-up period during which borrower shall not be charged any penalty on prepayment of loan ",
                                        "data": "NA"
                                    },
                                    {
                                        "sno": "(xiii)",
                                        "title": "Details of LSP acting as recovery agent and authorized to approach the borrower ",
                                        "data": "NA"
                                    },
                                    {
                                        "sno": "(xiv)",
                                        "title": "Rate of annualized other penal charges",
                                        "data": "NA"
                                    }
                                ]
                            }
                        }
                    },{
                        "componentType":"GRID",
                        "validateSection":false,
                        "className":"display-flex j-c-sb a-i-c mb-3",
                        "sectionContent":{
                            "isShow":true,
                            "items":[
                                {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "parentclassName": "display-flex j-c-sb a-i-c",
                        "className": "form-label-xl",
                        "sectionContent": {
                            "titleData": "Repayment Schedule",
                            "isShow": true
                        }
                    },
                    {
                        "componentType":"BUTTON",
                        "validateSection":false,
                        "parentclassName":"key-download-fact-button",
                        "rootClassName":"key-download-fact-button",
                        "className":"",
                        "sectionContent":{
                            "label":"Download Repayment Schedule",
                            "actionId":"REPAYMENT_SCHEDULE_DOWNLOAD",
                            "className":"mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                            "prefixIcon":{
                                "className":"material-symbols-outlined clr-orange ",
                                "iconName":"download"
                            },
                            "isShow":true
                        }
                    }
                            ]
                        }
                    },{
                        "componentType":"TABLE",
                        "validateSection":false,
                        "className":"mb-20 ",
                        "sectionContent":{
                            "isShow":true,
                            "config":{
                                "headers": [
                                    {
                                        "fieldLabel": "Month",
                                        "fieldName": "repaymentDate"
                                    },
                                    {
                                        "fieldLabel": "Interest",
                                        "fieldName": "interest"
                                    },
                                    {
                                        "fieldLabel": "Principle Repayment",
                                        "fieldName": "principal"
                                    },
                                    {
                                        "fieldLabel": "Closing Balance",
                                        "fieldName": "closingBalance"
                                    }
                                ],
                                "data": null
                            }
                        }
                    },
                    {
                        "componentType": "CONSENT",
                        "validateSection": true,
                        "mandatory":true,
                        "className": "consent-text mb-20",
                        "sectionContent": {
                          "config": {
                            "options": [
                              {
                                "consentType": "APIFETCH",
                                "consentCode": "KFS_Consent_VL",
                                "submitConsentCodes": [
                                  "KFS_Consent_VL"
                                ],
                                "label": null,
                                "className": "check-container",
                                "completed": null
                              }
                            ]
                          },
                          "isShow": true,
                          "showField": true
                        }
                      },
                    {
                        "componentType":"GRID",
                        "validateSection":false,
                        "className":"display-flex gap-10 action-wrapper  a-i-c mb-3",
                        "sectionContent":{
                            "isShow":true,
                            "items":[
                    {
                        "componentType":"BUTTON",
                        "validateSection":false,
                        "parentclassName":"key-download-fact-button",
                        "rootClassName":"key-download-fact-button",
                        "className":"",
                        "sectionContent":{
                            "label":"Proceed",
                            "actionId":"KEYFACT_ACCEPT",
                            "className":"mat-focus-indicator btn-orange mat-stroked-button mat-button-base",
                            "isShow":true,
                            "disabled":{"var":"sectionValidity"}
                        }
                    },{
                        "componentType":"BUTTON",
                        "validateSection":false,
                        "parentclassName":"key-download-fact-button",
                        "rootClassName":"key-download-fact-button",
                        "className":"",
                        "sectionContent":{
                            "label":"Decline",
                            "actionId":"KEYFACT_DECLINE",
                            "className":"mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                            "isShow":true,
                            "disabled":{"var":"sectionValidity"}
                        }
                    }
                            ]
                        }
                    }
                ],
                "STATUS_CHECK": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": "common-title",
                        "sectionContent": {
                            "titleData": "Please Wait For Few Minutes we are setting up something",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "className": "common-info",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Note: Please Dont Refresh The page, Page Will automatically Redirect"
                        }
                    }
                ],
                "ESIGN": [
                    {
                        "componentType": "TITLE",
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Esign Details"
                        }
                    }],
                "LOAN_SUMMARY": [
                    {
                      "componentType": "TITLE",
                      "validateSection": false,
                      "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
                      "validationJson": {
                        "content": {
                          "if": [
                            {
                              "==": [
                                {
                                  "getUrlParameter": [
                                    "esignDone"
                                  ]
                                },
                                "true"
                              ]
                            },
                            {
                              "cat": [
                                "Congratulations, ",
                                {
                                  "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                                },
                                " Your Vehicle Loan is Sanctioned. Please visit branch for the disbursement"
                              ]
                            },
                            {
                              "cat": [
                                "Congratulations, ",
                                {
                                  "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      "sectionContent": {
                        "titleData": "Congratulations,",
                        "isShow": true,
                        "endContent": [
                          {
                            "componentType": "ICON",
                            "className": "ml-10",
                            "sectionContent": {
                              "isShow": true,
                              "iconPath": "/assets/icons/gift.png"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "componentType": "HTML_CONTENT",
                      "className": "common-info display-flex a-i-c",
                      "validationJson": {
                        "content": {
                          "if": [
                            {
                              "==": [
                                {
                                  "getUrlParameter": [
                                    "esignDone"
                                  ]
                                },
                                "true"
                              ]
                            },
                            {
                              "cat": [
                                "Your Loan has been sanctioned for  <div class='redirectAction ml-5'>",
                                {
                                  "currencyFormatter": [
                                    {
                                      "var": "$scope.loanDetails.loanDetails.loanAmount"
                                    }
                                  ]
                                },
                                " /- </div> &nbsp; Kindly visit branch for disbursement.  "
                              ]
                            },
                            {
                              "cat": [
                                "Your Loan has been successfully processed for an amount of <div class='redirectAction ml-5'>",
                                {
                                  "currencyFormatter": [
                                    {
                                      "var": "$scope.loanDetails.loanDetails.loanAmount"
                                    }
                                  ]
                                },
                                " /- &nbsp; </div>  "
                              ]
                            }
                          ]
                        }
                      },
                      "validateSection": false,
                      "sectionContent": {
                        "isShow": true,
                        "htmlData": "Your loan has been successfully processed for an amount of <div class='redirectAction ml-5'>₹ "
                      }
                    },
                    {
                      "componentType": "PARAGRAPH",
                      "className": "form-label-lg mt-4",
                      "validateSection": false,
                      "validationJson": {
                        "content": {
                          "cat": [
                            "Your Application Reference # ",
                            {
                              "or": [
                                {
                                  "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                },
                                {
                                  "var": "$scope.loanDetails.loanDetails.loanId"
                                }
                              ]
                            }
                          ]
                        },
                        "showSection": {
                          "if": [
                            {
                              "==": [
                                {
                                  "or": [
                                    {
                                      "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                    },
                                    {
                                      "var": "$scope.loanDetails.loanDetails.loanId"
                                    }
                                  ]
                                },
                                null
                              ]
                            },
                            false,
                            true
                          ]
                        }
                      },
                      "sectionContent": {
                        "isShow": true,
                        "paragraphData": "Your Application Reference #"
                      }
                    },
                    {
                      "componentType": "PARAGRAPH",
                      "className": "form-label-lg mt-4",
                      "validationJson": {
                        "showSection": {
                          "if": [
                            {
                              "and": [
                                {
                                  "==": [
                                    {
                                      "getUrlParameter": [
                                        "esignDone"
                                      ]
                                    },
                                    "true"
                                  ]
                                },
                                {
                                  "!=": [
                                    {
                                      "getObjectKeyValue": [
                                        {
                                          "getArrayIndexValue": [
                                            {
                                              "var": "$scope.bankDetails.bankDetails"
                                            },
                                            0
                                          ]
                                        },
                                        "accountNumber"
                                      ]
                                    },
                                    null
                                  ]
                                }
                              ]
                            },
                            true,
                            false
                          ]
                        },
                        "content": {
                          "cat": [
                            "Your Loan Account Number is ",
                            {
                              "getObjectKeyValue": [
                                {
                                  "getArrayIndexValue": [
                                    {
                                      "var": "$scope.bankDetails.bankDetails"
                                    },
                                    0
                                  ]
                                },
                                "accountNumber"
                              ]
                            }
                          ]
                        }
                      },
                      "sectionContent": {
                        "isShow": false,
                        "paragraphData": null
                      }
                    },
                    {
                      "componentType": "HTML_CONTENT",
                      "sectionContent": {
                        "isShow": true,
                        "htmlData": "<div class=\"summary-status mt-3\" >\n                        <img src=\"../../../assets/icons/tick.png\" alt=\"\" class=\"me-2\"> Account Information is sent to your Email address and Mobile Number\n                    </div>"
                      }
                    },
                    {
                      "componentType": "TITLE",
                      "className": "f-16 mt-15",
                      "sectionContent": {
                        "isShow": true,
                        "titleData": "Your Branch Details"
                      }
                    },
                    {
                      "componentType": "HTML_CONTENT",
                      "validationJson": {
                        "content": {
                          "cat": [
                            "<div class=\"bank-detail-status medium\">\n                            <div class=\"mb-0 form-label-lg d-flex align-items-start\">\n                                <img src=\"../../../assets/icons/building.png\" alt=\"\">\n                                <div class=\"details-content\"> Bank Of India ",
                            {
                              "var": "$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName"
                            },
                            " Branch",
                            "<div class=\"address-content\">\n                                <span class=\"common-info\">",
                            {
                              "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value"
                            },
                            "</br>",
                            {
                              "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue"
                            },
                            "  ",
                            {
                              "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue"
                            },
                            " - ",
                            {
                              "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue"
                            }
                          ]
                        }
                      },
                      "sectionContent": {
                        "isShow": true,
                        "htmlData": null
                      }
                    },
                    {
                      "componentType": "BUTTON",
                      "validationJson": {
                        "showSection": {
                          "if": [
                            {
                              "and": [
                                {
                                  "==": [
                                    {
                                      "var": "$scope.fetchEligibilityData.output.plEligOutput.stpFlag"
                                    },
                                    "STP"
                                  ]
                                },
                                {
                                  "==": [
                                    {
                                      "var": "journey.metaData.capturedData.esignStatus.data.signAffixed"
                                    },
                                    null
                                  ]
                                },
                                {
                                  "==": [
                                    {
                                      "var": "$scope.loanDetails.loanDetails.loanApplicationTextVariable54"
                                    },
                                    "false"
                                  ]
                                }
                              ]
                            },
                            true,
                            false
                          ]
                        }
                      },
                      "sectionContent": {
                        "isShow": true,
                        "label": "Continue to E-sign",
                        "actionId": "ESIGN_PROCEED",
                        "className": "btn-orange"
                      }
                    }
                  ]
            }
        },
    };
    pageMetaConfig = {
        'VLN': {
            "individual": {
                "MOBILE_VERIFY": {
                    "showLeftContent": true,
                    "showStepper": true,
                    "showSubStepper": true,
                    "consentIndex": 4,
                    "formIndex": 3,
                    "mobileFieldIndex": 0,
                    "otpIndex": 5,
                    "fieldLabel": "Continue",
                    "formSubmitFlow": [
                        {
                            "validationJson": {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "checkResumeJourney": []
                                    },
                                    true
                                  ]
                                },
                                "EXECUTE",
                                "NEXT"
                              ]
                            },
                            "submitflow": "showBorrowerDetails",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData",
                              "resumeJourney"
                            ],
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "params": [
                              "access_token",
                              ["microservicetoken", "oauthAccessToken"],
                              "loanUuid"
                            ],
                            "validateResponse": {
                              "if": [
                                {
                                  
                                  "==": [
                                    {
                                      "checkResumeJourney": []
                                    },
                                    true
                                  ]
                                },
                                {"if":[{
                                  "==":[{
                                    "var":"product.isAllowedToResume"
                                  },true]
                                },{
                                  "getResume": []
                                },{
                                  "cat": [
                                    "PRODUCT_ERROR[PARAMS]errorCode=",
                                    {
                                      "var": "product.message"
                                    }
                                  ]
                                }]},
                                
                                "PROCEED"
                              ]
                            }
                          },
                    {
                        "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                        "submitflow": "applyLoan",
                        "dataFeedCloud": ['product', 'formValue'],
                        "saveResponseToProduct": true,
                        "apiError": "PRODUCT_ERROR",
                        "params": ['access_token', 'borrowerUuid', 'loanPurposeUuid', ['loanAmount', 'STATIC', 10000], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['loanApplicationTextVariable4', 'STATIC', 'Web Portal'], ['loanApplicationTextVariable21', 'STATIC', 'Monthly'], ['loanApplicationTextVariable7', 'STATIC', 'Floating'], ['loanApplicationTextVariable23', 'STATIC', 'Unsecured'], ['loanApplicationTextVariable13', 'STATIC', 'Any other Personal Expenses']],
                    },{
                        "validationJson": {"if": [{"==": [{"checkResumeJourney": []}, false]}, "EXECUTE", "NEXT"]},
                        "submitflow": "updateLoanApplicationTrackingStatus",
                        "dataFeedCloud": [
                            "product",
                            "formValue"
                        ],
                        "validateResponse":"PROCEED",
                        "apiError":"PRODUCT_ERROR",
                        "params":["access_token","loanUuid",["completedPage","STATIC","BORROWER_BASIC_DETAIL"],["nextPage","STATIC","BORROWER_PERSONAL_DETAIL"]]
                    },{
                        "validationJson": {
                            "if": [
                                {
                                    "getLocalStorage": [
                                        "isApplicationExternallySourced"
                                    ]
                                },
                                "EXECUTE",
                                "NEXT"
                            ]
                        },
                        "submitflow": "saveCampaign",
                        "dataFeedCloud": [
                            "product",
                            "formValue"
                        ],
                        "params": [
                            [
                                "microservicetoken",
                                "oauthAccessToken"
                            ],
                            "loanUuid",
                            [
                                "utmSource",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_source"
                                    ]
                                }
                            ],
                            [
                                "utmMedium",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_medium"
                                    ]
                                }
                            ],
                            [
                                "utmCampaign",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_campaign"
                                    ]
                                }
                            ],
                            [
                                "utmId",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_id"
                                    ]
                                }
                            ],
                            [
                                "utmTerm",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_term"
                                    ]
                                }
                            ],
                            [
                                "utmContent",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_content"
                                    ]
                                }
                            ],
                            [
                                "objectType",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_Objecttype"
                                    ]
                                }
                            ],
                            [
                                "objectId",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_objectid"
                                    ]
                                }
                            ],
                            [
                                "partner",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "partner"
                                    ]
                                }
                            ],
                            [
                                "websiteUrl",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "websiteUrl"
                                    ]
                                }
                            ],
                            [
                                "utmCode",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "utm_code"
                                    ]
                                }
                            ],
                            [
                                "offerId",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "offerId"
                                    ]
                                }
                            ],
                            [
                                "leadId",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "leadId"
                                    ]
                                }
                            ],
                            [
                                "accountId",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "accountId"
                                    ]
                                }
                            ],
                            [
                                "remarksAndSampleUrl",
                                "RULE_OUTPUT",
                                {
                                    "getLocalStorage": [
                                        "remarksAndSampleUrl"
                                    ]
                                }
                            ]
                        ],
                        "validateResponse": {
                            "cat": [
                                {
                                    "removeLocalStorage": [
                                        "isApplicationExternallySourced"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_source"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_medium"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_campaign"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_id"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_term"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_content"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_Objecttype"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_objectid"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "partner"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "websiteUrl"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "utm_code"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "offerId"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "leadId"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "accountId"
                                    ]
                                },
                                {
                                    "removeLocalStorage": [
                                        "remarksAndSampleUrl"
                                    ]
                                },
                                "PROCEED"
                            ]
                        }
                    },
                                    {
                                        "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                                        "submitflow": "updatesubStatus",
                                        "dataFeedCloud": [
                                        "product",
                                        "formValue",
                                        "capturedData"
                                        ],
                                        "params": [
                                        "access_token",
                                        "loanUuid",
                                        [
                                            "newSubStatus",
                                            "STATIC",
                                            "SUB_STATUS_1"
                                        ],
                                        [
                                            "subStatusChangeDescription",
                                            "STATIC",
                                            "Mobile Verification Success"
                                        ]
                                        ],
                                        "validateResponse": {
                                        "if": [
                                            {
                                            "==": [
                                                {
                                                "var": "formSubmitResponse.code"
                                                },
                                                200
                                            ]
                                            },
                                            "PROCEED",
                                            "PRODUCT_ERROR"
                                        ]
                                        },
                                        "apiError": "PRODUCT_ERROR",
                                        "validationErrorMessage": "something went wrong Please Try again!!"
                            },
                                {
                                    "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                                    "submitflow": "updatesubStatus",
                                    "dataFeedCloud": [
                                    "product",
                                    "formValue",
                                    "capturedData"
                                    ],
                                    "params": [
                                    "access_token",
                                    "loanUuid",
                                    [
                                        "newSubStatus",
                                        "STATIC",
                                        "SUB_STATUS_3"
                                    ],
                                    [
                                        "subStatusChangeDescription",
                                        "STATIC",
                                        "Mobile Verification page completed"
                                    ]
                                    ],
                                    "validateResponse": {
                                    "if": [
                                        {
                                        "==": [
                                            {
                                            "var": "formSubmitResponse.code"
                                            },
                                            200
                                        ]
                                        },
                                        "PROCEED",
                                        "PRODUCT_ERROR"
                                    ]
                                    },
                                    "apiError": "PRODUCT_ERROR",
                                    "validationErrorMessage": "something went wrong Please Try again!!"
                        }
                    ]
                },
                "ADDITIONAL_INFORMATION": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Proceed",
                    "formSectionIndex": 4,
                    "prepopulationRemaps": {
                        "firstName": "borrowerDetails.borrowerDetail.firstName",
                        "lastName": "borrowerDetails.borrowerDetail.lastName",
                        "dateOfBirth": "borrowerDetails.borrowerDetail.dateOfBirth",
                        "middleName": "borrowerDetails.borrowerDetail.middleName",
                        "gender": "borrowerDetails.borrowerDetail.gender",
                        "personalAddress": "[APPEND]borrowerDetails.borrowerDetail.personalAddress.line1+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.line2+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.line3+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.state+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.district+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.country+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.zipCode"
                    },
                    "formSubmitFlow": [
                        {
                            "submitflow": "profileUpdate",
                            "params": [
                                "access_token",
                                [
                                    "microservicetoken",
                                    "oauthAccessToken"
                                ],
                                "loanUuid",
                                "firstName",
                                "middleName",
                                "lastName",
                                "dateOfBirth",
                                "alternativeUsername",
                                "maritalStatus",
                                "educationType",
                                "gender",
                                [
                                    "addressOneLine1",
                                    "line1"
                                ],
                                [
                                    "addressOneLine2",
                                    "line2"
                                ],
                                [
                                    "addressOneLine3",
                                    "line3"
                                ],
                                [
                                    "addressOneSubDistrict",
                                    "subDistrict"
                                ],
                                [
                                    "addressOneZipCode",
                                    "zipCode"
                                ],
                                [
                                    "addressOneCity",
                                    "city"
                                ],
                                [
                                    "addressOneState",
                                    "state"
                                ],
                                [
                                    "addressOnetypeOfAddress",
                                    "typeOfAddress"
                                ],
                                [
                                    "addressOneLivingSince",
                                    "livingSince"
                                ],
                                [
                                    "personalAddressCountry",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.country"
                                ],
                                [
                                    "personalAddressDistrict",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.district"
                                ],
                                [
                                    "personalAddressLine1",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line1"
                                ],
                                [
                                    "personalAddressLine2",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line2"
                                ],
                                [
                                    "personalAddressLine3",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line3"
                                ],
                                [
                                    "personalAddressState",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.state"
                                ],
                                [
                                    "personalAddressZipCode",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.zipCode"
                                ]
                            ],
                            "validationJson": {
                                "if": [
                                    {
                                        "var": "differenceCommunicationAddress"
                                    },
                                    "EXECUTE",
                                    "NEXT"
                                ]
                            },
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": "BRANCH_DETAILS"
                        },
                        {
                            "submitflow": "profileUpdate",
                            "params": [
                                "access_token",
                                [
                                    "microservicetoken",
                                    "oauthAccessToken"
                                ],
                                "loanUuid",
                                "firstName",
                                "middleName",
                                "lastName",
                                "dateOfBirth",
                                "alternativeUsername",
                                "maritalStatus",
                                "educationType",
                                "gender",
                                [
                                    "addressOneLine1",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line1"
                                ],
                                [
                                    "addressOneLine2",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line2"
                                ],
                                [
                                    "addressOneLine3",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line3"
                                ],
                                [
                                    "addressOneSubDistrict",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.subDistrict"
                                ],
                                [
                                    "addressOneZipCode",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.zipCode"
                                ],
                                [
                                    "addressOneCity",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.district"
                                ],
                                [
                                    "addressOneState",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.state"
                                ],
                                [
                                    "addressOnetypeOfAddress",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.typeOfAddress"
                                ],
                                [
                                    "addressOneLivingSince",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.livingSince"
                                ],
                                [
                                    "personalAddressCountry",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.country"
                                ],
                                [
                                    "personalAddressDistrict",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.district"
                                ],
                                [
                                    "personalAddressLine1",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line1"
                                ],
                                [
                                    "personalAddressLine2",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line2"
                                ],
                                [
                                    "personalAddressLine3",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.line3"
                                ],
                                [
                                    "personalAddressState",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.state"
                                ],
                                [
                                    "personalAddressZipCode",
                                    "capturedData.existingaadharData.mappingFields.personalAddress.zipCode"
                                ]
                            ],
                            "validationJson": {
                                "if": [
                                    {
                                        "var": "differenceCommunicationAddress"
                                    },
                                    "NEXT",
                                    "EXECUTE"
                                ]
                            },
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": "BRANCH_DETAILS[JOURNEY_EVENT_CODE]PERSONAL_DETAILS_COMPLETE_NTB"
                        }
                    ],
                    "dataScopeFetchFlow": [
                        {
                            "validate": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "checkNull": [
                                                    {
                                                        "var": "resumeJourney"
                                                    }
                                                ]
                                            },
                                            false
                                        ]
                                    },
                                    "NEXT",
                                    "EXECUTE"
                                ]
                            },
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                ["microservicetoken", "oauthAccessToken"],
                                "loanUuid"
                            ]
                        }
                    ]
                },
                "CONTACT_BRANCH": {
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    "errorCodes": {
                        "nameMatch": "We have received your Vehicle Loan application and look forward to seeing you at the bank soon to complete the process!"
                    },
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow": "loanDetails",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                ['microservicetoken','oauthAccessToken']
                            ]
                        }
                    ]
                },
                "PRODUCT_ERROR": {
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    "errorCodes": {
                        "nameMatch": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
                    },
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow": "loanDetails",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                ['microservicetoken','oauthAccessToken']
                            ]
                        }
                    ]
                },
                "MORE_INFO": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Proceed",
                    "prepopulationRemaps": {
                        "panholdername":"borrowerDetails.borrowerDetail.borrowerProfileTextVariable15",
                        "panholderdob": "borrowerDetails.borrowerDetail.dateOfBirth",
                      "identityNumberTwo": "borrowerDetails.borrowerDetail.identityNumberTwo",
                      "identityNumberOne": "borrowerDetails.borrowerDetail.identityNumberOne"
                    },
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          ["microservicetoken", "oauthAccessToken"],
                          "loanUuid"
                        ]
                      }
                    ],
                    "formSubmitFlow": [
                        {
                            "validationJson":{"if":[{"==":[{"var":"appConfig.ispandedupe"},true]},"EXECUTE","NEXT"]},
                            "submitflow":"duplicateApplicationCheck",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params":['loanUuid',[
                                "microservicetoken",
                                "oauthAccessToken"
                              ]],
                            "validateResponse":{"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED",{
                                "cat": [
                                  "PRODUCT_ERROR[PARAMS]errorCode=",
                                  {
                                    "var": "formSubmitResponse.message"
                                  }
                                ]
                              }]},
                            "apiError":"PRODUCT_ERROR"
                        },
                        {
                            "submitflow": "personalProfileUpdate",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                "identityNumberOne",
                                "identityNumberOneVerified",
                                "identityNumberTwo",
                                "identityNumberTwoVerified",
                                ["microservicetoken","oauthAccessToken"]
                            ],
                            "validateResponse": "PROCEED"
                        }
                      
                    ]
                  },
                "STATUS_CHECK": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Proceed',
                    "dataScopeFetchFlow": [
                        {
                          "fetchflow": "borrowerDetails",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            ["microservicetoken", "oauthAccessToken"],
                            "loanUuid"
                          ]
                        }
                    ],
                    'formSubmitFlow': [
                        //crm lead id generate
                        {
                            "submitflow": "updatesubStatus",
                            "submitflowAlias": "crmLeadIdgenerate",
                            "description": "crm lead ID substatus call",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                [
                                    "newSubStatus",
                                    "STATIC",
                                    "SUB_STATUS_9"
                                ],
                                [
                                    "subStatusChangeDescription",
                                    "STATIC",
                                    "CRM Lead Id generation Successfull"
                                ]
                            ],
                            "validateResponse": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "formSubmitResponse.code"
                                            },
                                            200
                                        ]
                                    },
                                    "PROCEED",
                                    "PRODUCT_ERROR"
                                ]
                            },
                            "apiError": "PRODUCT_ERROR",
                            "validationErrorMessage": "something went wrong Please Try again!!"
                        },
                        {
                            "submitflow": "cbsDedupe",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                            ],
                            "params": [
                              "access_token",
                              "loanUuid",
                              [{
                                "if":[{"==":[{"var":"borrowerDetails.borrowerDetail.referenceKey"},null]},"aadhaarNumber","referenceKey"]
                            },
                            "RULE_OUTPUT",
                            {
                                "if":[{"==":[{"var":"borrowerDetails.borrowerDetail.referenceKey"},null]},{"var":"borrowerDetails.borrowerDetail.identityNumberOne"},{"var":"borrowerDetails.borrowerDetail.referenceKey"}]
                            }],
                              [
                                "panNumber",
                                "borrowerDetails.borrowerDetail.identityNumberTwo"
                              ],
                              [
                                "microservicetoken",
                                "oauthAccessToken"
                              ],
                              [
                                "requestFor",
                                "STATIC",
                                "BORROWER"
                              ],
                              [
                                "applicationSource",
                                "STATIC",
                                "WEB_JOURNEY"
                              ],
                              "finacleRequest"
                            ],
                            "validateResponse": {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "formSubmitResponse.code"
                                    },
                                    "200"
                                  ]
                                },
                                "PROCEED",
                                {
                                  "cat": [
                                    "PRODUCT_ERROR[PARAMS]errorCode=",
                                    {
                                      "var": "formSubmitResponse.message"
                                    }
                                  ]
                                }
                              ]
                            },
                            "apiError": {
                              "cat": [
                                "PRODUCT_ERROR[PARAMS]errorCode=",
                                {
                                  "var": "formSubmitResponse.message"
                                }
                              ]
                            },
                            "journeyEventCodeAfterResponseSucess": "DEDUPE_CHECK"
                          },
                        {
                            "validationJson":{"if":[{"==":[{"var":"currentFormSubmitResponses.cbsDedupe.isETB"},true]},'EXECUTE','NEXT']},
                            "submitflow":"borrowerExtraPropertyUpdate",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',"loanUuid",['microservicetoken','oauthAccessToken'],["borrowerProfileTextVariable1","currentFormSubmitResponses.cbsDedupe.custId"],["isExistingUser","STATIC",true]],
                            "validateResponse":{"if":[{"==":[{"var":"formSubmitResponse.code"},'200']},"PROCEED","PRODUCT_ERROR"]},
                        },
                        {
                            "validationJson":{"if":[{"==":[{"var":"currentFormSubmitResponses.cbsDedupe.isETB"},true]},'EXECUTE','NEXT']},
                            "submitflow":"npaCheck",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',"loanUuid",["custId","currentFormSubmitResponses.cbsDedupe.custId"],['microservicetoken','oauthAccessToken'],"finacleRequest",["applicationSource","STATIC","WEB_JOURNEY"]],
                            "saveResponseToCapturedData":true,
                            "apiError":"PRODUCT_ERROR",
                            "validateResponse":{"if":[{"==":[{"var":"code"},'200']},{"if":[{"and":[{"==":[{"var":"npaFlag"},'N']},{"==":[{"var":"smaFlag"},'N']}]},'PROCEED','PRODUCT_ERROR[JOURNEY_EVENT_CODE]NPA_FAIL']},'PRODUCT_ERROR']}
                        },
                        {
                            "validationJson":{"if":[{"==":[{"var":"currentFormSubmitResponses.cbsDedupe.isETB"},true]},'EXECUTE','NEXT']},
                            "submitflow":"demographicDetailsFetch",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":["access_token","loanUuid",['requestFor','STATIC','BORROWER'],'finacleRequest',['applicationSource','STATIC','WEB_JOURNEY'],['custId','currentFormSubmitResponses.cbsDedupe.custId'],['microservicetoken','oauthAccessToken']],
                            "validateResponse":{"if":[{"==":[{"var":"formSubmitResponse.code"},'200']},{"if":[{"==":[{"var":"formSubmitResponse.isReKyc"},false]},'PROCEED','PROCEED']},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]},
                            "apiError":{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]},
                        },
                        {
                            "submitflow":"nameMatch",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token','loanUuid','finacleRequest',["applicationSource",'STATIC',"WEB_JOURNEY"],['microservicetoken','oauthAccessToken'],['preset','STATIC','G'],['type','STATIC','Individual'],[ 'allowPartialMatch','STATIC',true],["name1",'STATIC',""],["name2","STATIC",""]],
                            "validateResponse":{"if":[{"and":[{"==":[{"var":"nameMatchResult.result.result"},true]},{"==":[{"var":"blacklistedFlag"},false]}]},{"if":[{"==":[{"var":"currentFormSubmitResponses.cbsDedupe.isETB"},true]},'PROCEED[JOURNEY_EVENT_CODE]NAME_MATCH','ADDITIONAL_INFORMATION[JOURNEY_EVENT_CODE]NAME_MATCH']},'CONTACT_BRANCH[PARAMS]errorCode=nameMatch']},
                            "apiError":"PRODUCT_ERROR",
                        },
                    ],
                    "checkList": [
                        {
                            "name": "Lead Generation",
                            "description": "",
                            "submitflow": "crmLeadIdgenerate",
                            "isCompleted": false,
                            "isActive": true
                        },
                        {
                            "name": "Checking Personal Details",
                            "description": "Checking the customer Data From the Bank Records",
                            "submitflow": "cbsDedupe",
                            "isCompleted": false,
                            "isActive": false
                        },
                        {
                            "name": "Fetching Demographic Details",
                            "description": "",
                            "submitflow": "demographicDetailsFetch",
                            "isCompleted": false,
                            "isActive": false
                        },
                        {
                            "name": "Name Match",
                            "description": "Cross Validating the Aadhaar and Pan Card Details",
                            "submitflow": "nameMatch",
                            "isCompleted": false,
                            "isActive": false
                        },

                    ]
                },
                "EMPLOYMENT_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "formSubmitFlow": [
                        {
                            "submitflow": "personalProfileUpdate",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                "borrowerEmploymentType",
                                ["microservicetoken","oauthAccessToken"]
                            ],
                            "validateResponse": "PROCEED",
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "submitflow": "updateEmploymentDetails",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                ["microservicetoken","oauthAccessToken"],
                                "loanUuid",
                                "textVariable6",
                                "borrowerEmploymentHistoryTextVariable11",
                                "borrowerEmploymentHistoryTextVariable15",
                                "officialEmailId",
                                "officialEmailIdVerified",
                                "organizationName",
                                "borrowerEmploymentHistoryTextVariable24",
                                [
                                    "borrowerEmploymentHistoryTextVariable3",
                                    "STATIC",
                                    "No"
                                ]
                            ],
                            "validationJson": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "borrowerEmploymentType"
                                            },
                                            "SALARIED"
                                        ]
                                    },
                                    "EXECUTE",
                                    "NEXT"
                                ]
                            },
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "submitflow": "updateSelfEmploymentDetails",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                [
                                    "loanApplicationUuid",
                                    "loanUuid"
                                ],
                                "textVariable11",
                                "textVariable3",
                                "textVariable3Verified",
                                "textVariable5Verified",
                                "textVariable5",
                                "textVariable6",
                                "dateVariable2",
                                "textVariable36",
                                "buisnessEmail",
                                "numberVariable3"
                            ],
                            "validationJson": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "borrowerEmploymentType"
                                            },
                                            "SELF_EMPLOYED"
                                        ]
                                    },
                                    "EXECUTE",
                                    "NEXT"
                                ]
                            },
                            "apiError": "PRODUCT_ERROR"
                        },
                        
                        {
                            "submitflow": "updatesubStatus",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                [
                                    "newSubStatus",
                                    "RULE_OUTPUT",
                                    { "if": [{ "==": [{ "var": "borrowerEmploymentType" }, "SALARIED"] }, "SUB_STATUS_2", "SUB_STATUS_1"] }
                                ],
                                [
                                    "subStatusChangeDescription",
                                    "RULE_OUTPUT",
                                    { "if": [{ "==": [{ "var": "borrowerEmploymentType" }, "SALARIED"] }, "Employment Details Salaried", "Employment Details Self Employed"] }
                                ]
                            ],
                            "validateResponse": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "formSubmitResponse.code"
                                            },
                                            200
                                        ]
                                    },
                                    "PROCEED",
                                    "ERROR"
                                ]
                            },
                            "apiError": "ERROR",
                            "validationErrorMessage": "something went wrong Please Try again!!"
                        },
                        {
                            "submitflow": "updatesubStatus",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                "loanUuid",
                                [
                                    "newSubStatus",
                                    "STATIC",
                                    "SUB_STATUS_5"
                                ],
                                [
                                    "subStatusChangeDescription",
                                    "STATIC",
                                    "ETB Employment page submited"
                                ]
                            ],
                            "validateResponse": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "formSubmitResponse.code"
                                            },
                                            200
                                        ]
                                    },
                                    "PROCEED[JOURNEY_EVENT_CODE]EMPLOYMENT_DETAILS_COMPLETE",
                                    "ERROR"
                                ]
                            },
                            "apiError": "ERROR",
                            "validationErrorMessage": "something went wrong Please Try again!!"
                        },
                    ],
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "access_token",
                                ["microservicetoken", "oauthAccessToken"],
                                "loanUuid"
                            ]
                        },
                        {
                            "fetchflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "apiError": "ERROR",
                            "validateResponse": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "fetchFlowResponse.code"
                                            },
                                            200
                                        ]
                                    },
                                    "PROCEED",
                                    "ERROR"
                                ]
                            },
                            "validationErrorMessage": "something went wrong Please Try again!!",
                            "params": [
                                "access_token",
                                "loanUuid",
                                [
                                    "statusToBeChanged",
                                    "STATIC",
                                    "AWAITING_APPROVAL_L21"
                                ],
                                [
                                    "statusChangeDescription",
                                    "STATIC",
                                    "AWAITING_APPROVAL_L21"
                                ],
                                [
                                    "applicationSource",
                                    "STATIC",
                                    "WEB_JOURNEY"
                                ]
                            ]
                        },
                    ],
                    "prepopulationRemaps": {
                        "borrowerEmploymentType": {
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "",
                                "borrowerDetails.borrowerDetail.borrowerEmploymentType"
                            ]
                        },
                        "organizationName": {
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "",
                                "borrowerDetails.borrowerDetail.organizationName"
                            ]
                        },
                        "borrowerEmploymentHistoryTextVariable11": {
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "",
                                "borrowerDetails.borrowerDetail.borrowerEmploymentHistoryTextVariable11"
                            ]
                        },
                        "borrowerEmploymentHistoryTextVariable15": {
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "",
                                "borrowerDetails.borrowerDetail.borrowerEmploymentHistoryTextVariable15"
                            ]
                        },
                        "officialEmailId": {
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "",
                                "borrowerDetails.borrowerDetail.officialEmailId"
                            ]
                        },
                        "borrowerEmploymentHistoryTextVariable24": {
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "",
                                "borrowerDetails.borrowerDetail.borrowerEmploymentHistoryTextVariable24"
                            ]
                        }
                    }
                },
                "VEHICLE_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "formSubmitFlow": [
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "getObjectKeyValue": [
                                    {
                                      "getArrayIndexValue": [
                                        {
                                          "var": "fetchVehicleList.vehicleDetails"
                                        },
                                        0
                                      ]
                                    },
                                    "uuid"
                                  ]
                                },
                                null
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "submitflow": "createVehicle",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          [
                            "loanApplicationUuid",
                            "loanUuid"
                          ],
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          "vehicleType",
                          "vehicleOwnedTextVariable18",
                          "manufacturer",
                          "vehicleModel",
                          "variant",
                          [
                            "vehicleOwnedTextVariable19",
                            "STATIC",
                            "Direct"
                          ],
                          "vehicleOwnedTextVariable3",
                          "vehicleOwnedTextVariable10",
                          [
                            "vehicleOwnedTextVariable20",
                            "dealerCity"
                          ],
                          "vehicleOwnedTextVariable4",
                          "vehicleOwnedTextVariable5",
                          "vehicleOwnedTextVariable6",
                          "vehicleOwnedTextVariable7",
                          "vehicleOwnedTextVariable8",
                          "vehicleOwnedTextVariable11",
                          "vehicleOwnedTextVariable1",
                          "vehicleOwnedTextVariable16",
                          "vehicleOwnedTextVariable9",
                          "vehicleOwnedTextVariable13",
                          "vehicleOwnedNumberVariable3",
                          "vehicleOwnedNumberVariable4",
                          "dealerCity",
                          "dealerName",
                          "contactPerson",
                          "dealerPhone",
                          "dealerMobile",
                          "dealerEmail",
                          "addressOneLine1",
                          "addressOneLine2",
                          "addressOneLine3",
                          "addressOneSubDistrict",
                          "addressOneZipCode",
                          "vehicleOwnedTextVariable17",
                          [
                            "addressOneCity",
                            "addressOneCity_dummy"
                          ],
                          [
                            "addressOneState",
                            "addressOneState_dummy"
                          ],
                          "engineType"
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "400"
                              ]
                            },
                            "ERROR",
                            "PROCEED"
                          ]
                        },
                        "validationErrorMessage": "something went wrong !!! please Check the inputs and Try again",
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "getObjectKeyValue": [
                                    {
                                      "getArrayIndexValue": [
                                        {
                                          "var": "fetchVehicleList.vehicleDetails"
                                        },
                                        0
                                      ]
                                    },
                                    "uuid"
                                  ]
                                },
                                null
                              ]
                            },
                            "NEXT",
                            "EXECUTE"
                          ]
                        },
                        "submitflow": "updateVehicle",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          "vehicleType",
                          "vehicleOwnedTextVariable18",
                          "manufacturer",
                          "vehicleModel",
                          "variant",
                          [
                            "vehicleOwnedTextVariable20",
                            "dealerCity"
                          ],
                          [
                            "vehicleOwnedTextVariable19",
                            "STATIC",
                            "Direct"
                          ],
                          "vehicleOwnedTextVariable10",
                          "vehicleOwnedTextVariable4",
                          "vehicleOwnedTextVariable5",
                          "vehicleOwnedTextVariable6",
                          "vehicleOwnedTextVariable7",
                          "vehicleOwnedTextVariable8",
                          "vehicleOwnedTextVariable1",
                          "vehicleOwnedTextVariable11",
                          "vehicleOwnedTextVariable16",
                          "vehicleOwnedTextVariable9",
                          "vehicleOwnedTextVariable13",
                          "vehicleOwnedNumberVariable3",
                          "vehicleOwnedNumberVariable4",
                          "dealerCity",
                          "dealerName",
                          "contactPerson",
                          "dealerPhone",
                          "dealerMobile",
                          "dealerEmail",
                          "addressOneLine1",
                          "addressOneLine2",
                          "addressOneLine3",
                          "addressOneSubDistrict",
                          "addressOneZipCode",
                          [
                            "addressOneCity",
                            "addressOneCity_dummy"
                          ],
                          "vehicleOwnedTextVariable17",
                          "vehicleOwnedTextVariable3",
                          "engineType",
                          [
                            "uuid",
                            "RULE_OUTPUT",
                            {
                              "getObjectKeyValue": [
                                {
                                  "getArrayIndexValue": [
                                    {
                                      "var": "fetchVehicleList.vehicleDetails"
                                    },
                                    0
                                  ]
                                },
                                "uuid"
                              ]
                            }
                          ],
                          [
                            "addressOneState",
                            "addressOneState_dummy"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "400"
                              ]
                            },
                            "ERROR",
                            "PROCEED"
                          ]
                        },
                        "validationErrorMessage": "something went wrong !!! please Check the inputs and Try again",
                        "apiError": "PRODUCT_ERROR"
                      }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow": "fetchVehicleList",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          [
                            "access_token",
                            "oauthAccessToken"
                          ],
                          [
                            "loanApplicationUuid",
                            "loanUuid"
                          ],
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ]
                      }
                    ],
                    "prepopulationRemaps": {
                      "vehicleOwnedNumberVariable3": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedNumberVariable3"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedNumberVariable4": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedNumberVariable3"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable3": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable3"
                            ]
                          }
                        ]
                      },
                      "vehicleType": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleType"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable18": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable18"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable17": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable17"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable1": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable1"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable19": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable19"
                            ]
                          }
                        ]
                      },
                      "manufacturer": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "manufacturer"
                            ]
                          }
                        ]
                      },
                      "vehicleModel": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleModel"
                            ]
                          }
                        ]
                      },
                      "variant": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "variant"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable2": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable2"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable10": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable10"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable4": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable4"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable5": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable5"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable6": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable6"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable7": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable7"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable8": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable8"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable11": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable11"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable16": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable16"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable9": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable9"
                            ]
                          }
                        ]
                      },
                      "vehicleOwnedTextVariable13": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "vehicleOwnedTextVariable13"
                            ]
                          }
                        ]
                      },
                      "dealerCity": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "dealerCity"
                            ]
                          }
                        ]
                      },
                      "dealerName": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "dealerName"
                            ]
                          }
                        ]
                      },
                      "contactPerson": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "contactPerson"
                            ]
                          }
                        ]
                      },
                      "dealerPhone": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "dealerPhone"
                            ]
                          }
                        ]
                      },
                      "dealerMobile": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "dealerMobile"
                            ]
                          }
                        ]
                      },
                      "dealerEmail": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "dealerEmail"
                            ]
                          }
                        ]
                      },
                      "addressOneLine1": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneLine1"
                            ]
                          }
                        ]
                      },
                      "addressOneLine2": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneLine2"
                            ]
                          }
                        ]
                      },
                      "addressOneLine3": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneLine3"
                            ]
                          }
                        ]
                      },
                      "addressOneSubDistrict": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneSubDistrict"
                            ]
                          }
                        ]
                      },
                      "addressOneZipCode": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneZipCode"
                            ]
                          }
                        ]
                      },
                      "addressOneCity_dummy": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneCity"
                            ]
                          }
                        ]
                      },
                      "addressOneState_dummy": {
                        "cat": [
                          "[HARD_CODEDED]",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "fetchVehicleList.vehicleDetails"
                                  },
                                  0
                                ]
                              },
                              "addressOneState"
                            ]
                          }
                        ]
                      }
                    }
                  },
                "PERSONAL_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "formSectionIndex": 2,
                    "prepopulationRemaps": {
                      "alternativeUsername": "borrowerDetails.borrowerDetail.alternativeUsername",
                      "educationType": "borrowerDetails.borrowerDetail.educationType",
                      "maritalStatus": "borrowerDetails.borrowerDetail.maritalStatus",
                      "assignedCode": "loanDetails.userHierarchyUnit.userHierarchyUnitName",
                      "differenceCommunicationAddress": [
                        "borrowerDetails.borrowerDetail.borrowerDetailTextVariable60",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneDistrict": "borrowerDetails.borrowerDetail.addressOne.addressOneDistrict",
                      "addressOneLine1": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneLine1",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneLine3": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneLine3",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneLine2": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneLine2",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneLivingSince": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneLivingSince",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneOwnershipType": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneOwnershipType",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneState": "borrowerDetails.borrowerDetail.addressOne.addressOneState",
                      "addressOneSubDistrict": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneSubDistrict",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "addressOneZipCode": [
                        "borrowerDetails.borrowerDetail.addressOne.addressOneZipCode",
                        {
                          "fieldAccessModifier": "EDITABLE"
                        }
                      ],
                      "communicationAddress": "[APPEND]borrowerDetails.borrowerDetail.personalAddress.line1+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.line2+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.line3+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.state+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.district+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.country+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.zipCode"
                    },
                    "formSubmitFlow": [
                      {
                        "submitflow": "assignParkingBranch",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "userHierarchyUnitCode",
                            "branchCode"
                          ],
                          ["microservicetoken","oauthAccessToken"]
                        ],
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "differencebranch"
                                },
                                true
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "submitflow": "personalProfileUpdate",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          "alternativeUsername",
                          "alternativeUsernameVerified",
                          "educationType",
                          "maritalStatus",
                          "addressOneDistrict",
                          "addressOneLine1",
                          "addressOneLine3",
                          "addressOneLine2",
                          "addressOneLivingSince",
                          "addressOneOwnershipType",
                          "addressOneState",
                          "addressOneSubDistrict",
                          "addressOneZipCode",
                          [
                            "borrowerDetailTextVariable60",
                            "differenceCommunicationAddress"
                          ],
                          [
                            "borrowerDetailTextVariable28",
                            "STATIC",
                            "Individual"
                          ],
                          [
                            "firstName",
                            "borrowerDetails.borrowerDetail.firstName"
                          ],
                          [
                            "middleName",
                            "borrowerDetails.borrowerDetail.middleName"
                          ],
                          [
                            "lastName",
                            "borrowerDetails.borrowerDetail.lastName"
                          ],
                          [
                            "dateOfBirth",
                            "borrowerDetails.borrowerDetail.dateOfBirth"
                          ],
                          [
                            "gender",
                            "borrowerDetails.borrowerDetail.gender"
                          ],
                          [
                            "residentStatus",
                            "STATIC",
                            "Resident"
                          ],
                          [
                            "citizenship",
                            "STATIC",
                            "INDIAN"
                          ],
                          [
                            "personalAddressCountry",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressCountry"
                          ],
                          [
                            "personalAddressDistrict",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressDistrict"
                          ],
                          [
                            "personalAddressLine1",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressLine1"
                          ],
                          [
                            "personalAddressLine2",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressLine2"
                          ],
                          [
                            "personalAddressLine3",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressLine3"
                          ],
                          [
                            "personalAddressState",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressState"
                          ],
                          [
                            "personalAddressZipCode",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressZipCode"
                          ]
                        ],
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "differenceCommunicationAddress"
                                },
                                true
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "validateResponse": "PROCEED",
                        "journeyEventCodeAfterResponseSucess": [
                          "ADDRESS_DETAILS",
                          "BUREAU_CALL"
                        ],
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "submitflow": "personalProfileUpdate",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          "alternativeUsername",
                          "alternativeUsernameVerified",
                          "educationType",
                          "maritalStatus",
                          [
                            "borrowerDetailTextVariable60",
                            "differenceCommunicationAddress"
                          ],
                          [
                            "addressOneDistrict",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneDistrict"
                          ],
                          [
                            "addressOneLine1",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneLine1"
                          ],
                          [
                            "addressOneLine3",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneLine3"
                          ],
                          [
                            "addressOneLine2",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneLine2"
                          ],
                          [
                            "addressOneLivingSince",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneLivingSince"
                          ],
                          [
                            "addressOneOwnershipType",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneOwnershipType"
                          ],
                          [
                            "addressOneState",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneState"
                          ],
                          [
                            "addressOneSubDistrict",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneSubDistrict"
                          ],
                          [
                            "addressOneZipCode",
                            "borrowerDetails.borrowerDetail.addressOne.addressOneZipCode"
                          ],
                          [
                            "borrowerDetailTextVariable28",
                            "STATIC",
                            "Individual"
                          ],
                          [
                            "firstName",
                            "borrowerDetails.borrowerDetail.firstName"
                          ],
                          [
                            "middleName",
                            "borrowerDetails.borrowerDetail.middleName"
                          ],
                          [
                            "lastName",
                            "borrowerDetails.borrowerDetail.lastName"
                          ],
                          [
                            "dateOfBirth",
                            "borrowerDetails.borrowerDetail.dateOfBirth"
                          ],
                          [
                            "gender",
                            "borrowerDetails.borrowerDetail.gender"
                          ],
                          [
                            "residentStatus",
                            "STATIC",
                            "Resident"
                          ],
                          [
                            "citizenship",
                            "STATIC",
                            "INDIAN"
                          ],
                          [
                            "personalAddressCountry",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressCountry"
                          ],
                          [
                            "personalAddressDistrict",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressDistrict"
                          ],
                          [
                            "personalAddressLine1",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressLine1"
                          ],
                          [
                            "personalAddressLine2",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressLine2"
                          ],
                          [
                            "personalAddressLine3",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressLine3"
                          ],
                          [
                            "personalAddressState",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressState"
                          ],
                          [
                            "personalAddressZipCode",
                            "borrowerDetails.borrowerDetail.personalAddress.personalAddressZipCode"
                          ]
                        ],
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "differenceCommunicationAddress"
                                },
                                false
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_14"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "Address Details"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_15"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "ETB Personal details page submit"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                        "submitflow": "updateMainLoanApplicationStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "apiError": "ERROR",
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "ERROR"
                          ]
                        },
                        "validationErrorMessage": "something went wrong Please Try again!!",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "statusToBeChanged",
                            "STATIC",
                            "AWAITING_APPROVAL_L4"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_1"
                          ],
                          [
                            "statusChangeDescription",
                            "RULE_OUTPUT",
                            "Bureau call"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
                      },
                      {
                        "submitflow": "bureauCall",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          [
                            "applicationId",
                            "loanUuid"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ],
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ],
                        "saveResponseToCapturedData": true,
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "cibilCheckStatus"
                                },
                                "Qualified"
                              ]
                            },
                            "PROCEED[JOURNEY_EVENT_CODE]PERSONAL_DETAILS_COMPLETE",
                            "CONTACT_BRANCH"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
                      }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ]
                      },
                      {
                        "validate": {
                          "if": [
                            {
                              "==": [
                                {
                                  "checkNull": [
                                    {
                                      "var": "resumeJourney"
                                    }
                                  ]
                                },
                                false
                              ]
                            },
                            "NEXT",
                            "EXECUTE"
                          ]
                        },
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          ["microservicetoken", "oauthAccessToken"],
                          "loanUuid"
                        ]
                      }
                    ]
                  },
                "BRANCH_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "formSubmitFlow": [
                        {
                            "submitflow": "assignUserHierarchyUnit",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "loanUuid",
                                "access_token",
                                [
                                    "userHierarchyUnitCode",
                                    "branchCode"
                                ],
                                ["microservicetoken","oauthAccessToken"]
                            ],
                            "validateResponse": "PROCEED",
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "submitflow": "assignParkingBranch",
                            "saveResponseToCapturedData": false,
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                            ],
                            "params": [
                                "loanUuid",
                                "access_token",
                                [
                                    "userHierarchyUnitCode",
                                    "branchCode"
                                ],
                                ["microservicetoken","oauthAccessToken"]
                            ],
                            "validateResponse": "CONTACT_BRANCH",
                            "apiError": "PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseFailure": "NTB_CONTACT_BRANCH"
                        }
                    ]
                },
                "DOCUMENT_UPLOAD_V2": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Done",
                    "documentStatusCheckData": {
                        "iteration": 2,
                        "iterationDelay": 5
                    },
                    "documentList": [
                        {
                            "documentCategoryCode": "DOC17",
                            "documentFor": "MAIN_APPLICANT",
                            "mandatory": true,
                            "showDocument": true,
                            "multipleUploadOption": false,
                            "multiBankOption": true,
                            "showUpload": false,
                            "documentType": "BANK_STATEMENT",
                            "selectedBankData": {
                                "value": "OB",
                                "options": [
                                    {
                                        "name": "Auto Fetch"
                                    },
                                    {
                                        "name": "Statement Upload"
                                    }
                                ]
                            },
                            "selectedBank": {
                                "OB": {
                                    "uploadOptions": {
                                        "label": "Select Bank",
                                        "options": [
                                            {
                                                "icon": "ios_share",
                                                "name": "Share With AA",
                                                "code": "AA",
                                                "perfiosAnalysis":"generateLink",
                                                "processingType":"account",
                                                "applicationSource":"WEB_JOURNEY",
                                                "disabled": false,
                                                "underContent": "<span>Rbi Recommended</span>"
                                            },
                                            {
                                                "icon": "cloud_upload",
                                                "name": "Share With Netbanking",
                                                "code": "NB",
                                                "disabled": false,
                                                "perfiosAnalysis": "onlineFetch",
                                                "documentType": "ONLINE_FETCH",
                                                "underContent": ""
                                            },
                                            {
                                                "icon": "file_upload",
                                                "name": "e-PDF Statement",
                                                "code": "EDF",
                                                "perfiosAnalysis": "statementUpload",
                                                "disabled": false,
                                                "documentType": null,
                                                "underContent": null
                                            }
                                        ]
                                    },
                                    "label": "Please Select a option for sharing Your bank statement",
                                    "bankname": null
                                },
                                "BOI": {
                                    "uploadOptions": {
                                        "label": "Salary Account",
                                        "value": null,
                                        "options": null
                                    }
                                }
                            },
                            "documentUploadStatus": "IN_PROGRESS",
                            "documentUploadStatuslocalisation": "In Progress"
                        },
                        {
                            "documentCategoryCode": "ITR_SELF",
                            "documentFor": "MAIN_APPLICANT",
                            "showDocument": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"
                                            },
                                            "SELF EMPLOYED"
                                        ]
                                    }
                                ]
                            },
                            "multipleUploadOption": false,
                            "mandatory": true,
                            "multiBankOption": false,
                            "showUpload": false,
                            "documentType": "ITR",
                            "journeyEventCode": "ITR_UPLOAD",
                            "uploadOptions": [
                                {
                                    "icon": "cloud_upload",
                                    "name": "Share With Income Tax Portal",
                                    "code": "NB",
                                    "disabled": false,
                                    "perfiosAnalysis": "onlineFetch",
                                    "documentType": "ONLINE_FETCH",
                                    "underContent": ""
                                },
                                {
                                    "icon": "file_upload",
                                    "name": "Upload ITR (e-PDF Doc)",
                                    "code": "EDF",
                                    "perfiosAnalysis": "statementUpload",
                                    "disabled": false,
                                    "documentType": null,
                                    "underContent": null
                                }
                            ],
                            "label": "Please Select a option for sharing ITR statement",
                            "bankname": null,
                            "documentUploadStatus": "IN_PROGRESS",
                            "documentUploadStatuslocalisation": "In Progress"
                        },
                        {
                            "documentCategoryCode": "IND_DEAQUO",
                            "documentFor": "MAIN_APPLICANT",
                            "showDocument": true,
                            "multipleUploadOption": false,
                            "mandatory": true,
                            "multiBankOption": false,
                            "showUpload": false,
                            "documentType": "DOCUMENT",
                            "documentUploadStatus": "IN_PROGRESS",
                            "documentUploadStatuslocalisation": "In Progress",
                            "label": "Please Upload your Dealer Finalised Quotation"
                        }
                    ],
                    "customData": {},
                    "formSubmitFlow": [
                        {
                          "validationJson": {
                            "if": [
                              {
                                "and": [
                                  {
                                    "==": [
                                      {
                                        "var": "DOCUMENT_UPLOAD_V2.DOCUMENT_DATA.0.selectedBankData.value"
                                      },
                                      "Statement Upload"
                                    ]
                                  },
                                  {
                                    "==": [
                                      {
                                        "var": "appConfig.nameMatchForDocumentPage"
                                      },
                                      true
                                    ]
                                  }
                                ]
                              },
                              "EXECUTE",
                              "NEXT"
                            ]
                          },
                          "submitflow": "nameMatch_v2",
                          "saveResponseToCapturedData": true,
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            [
                              "applicationSource",
                              "STATIC",
                              "WEB_JOURNEY"
                            ],
                            [
                              "isValidationRequired",
                              "STATIC",
                              true
                            ],
                            [
                              "objectUuid",
                              "borrowerUuid"
                            ],
                            [
                              "identityType",
                              "STATIC",
                              "BSA"
                            ],
                            [
                              "applicantType",
                              "STATIC",
                              "BORROWER"
                            ],
                            [
                              "selectedModule",
                              "STATIC",
                              ""
                            ],
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ]
                          ],
                          "validateResponse": {
                            "if": [
                              {
                                "==": [
                                  {
                                    "var": "formSubmitResponse.BORROWER.Is Matched"
                                  },
                                  true
                                ]
                              },
                              "PROCEED",
                              "CONTACT_BRANCH[PARAMS]errorCode=nameMatch"
                            ]
                          },
                          "apiError": "PRODUCT_ERROR"
                        },
                        {
                          "submitflow": "rating_score_personal_loan",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            [
                              "applicationId",
                              "loanUuid"
                            ],
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ]
                          ],
                          "saveResponseToCapturedData": true,
                          "validateResponse": {
                            "if": [
                              {
                                "==": [
                                  {
                                    "var": "output.ratingOutput.isQualified"
                                  },
                                  "YES"
                                ]
                              },
                              "PROCEED",
                              "CONTACT_BRANCH"
                            ]
                          },
                          "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                        },
                        {
                          "validationJson":{ "if": [{ "==": [{ "var": "loanDetails.loanDetails.loanApplicationStatus" }, "AWAITING_APPROVAL_L21"] }, "EXECUTE", "NEXT"] },
                          "submitflow": "updatesubStatus",
                          "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                          ],
                          "params": [
                              "access_token",
                              "loanUuid",
                              [
                                  "newSubStatus",
                                  "STATIC",
                                  "SUB_STATUS_9"
                              ],
                              [
                                  "subStatusChangeDescription",
                                  "STATIC",
                                  "ETB Document page submited"
                              ]
                          ],
                          "validateResponse": {
                              "if": [
                                  {
                                      "==": [
                                          {
                                              "var": "formSubmitResponse.code"
                                          },
                                          200
                                      ]
                                  },
                                  "PROCEED[JOURNEY_EVENT_CODE]DOCUMENT_UPLOAD_COMPLETE",
                                  "ERROR"
                              ]
                          },
                          "apiError": "ERROR",
                          "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                          "validationJson":{ "if": [{ "==": [{ "var": "loanDetails.loanDetails.loanApplicationStatus" }, "AWAITING_APPROVAL_L21"] }, "EXECUTE", "NEXT"] },
                          "submitflow": "updateMainLoanApplicationStatus",
                          "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                          ],
                          "apiError": "ERROR",
                          "validateResponse": {
                              "if": [
                                  {
                                      "==": [
                                          {
                                              "var": "formSubmitResponse.code"
                                          },
                                          200
                                      ]
                                  },
                                  "PROCEED",
                                  "ERROR"
                              ]
                          },
                          "validationErrorMessage": "something went wrong Please Try again!!",
                          "params": [
                              "access_token",
                              "loanUuid",
                              [
                                  "statusToBeChanged",
                                  "STATIC",
                                  "AWAITING_APPROVAL_L6"
                              ],
                              [
                                  "subStatusToBeChanged",
                                  "STATIC",
                                  "SUB_STATUS_1"
                              ],
                              [
                                  "statusChangeDescription",
                                  "STATIC",
                                  "BRE Initiate"
                              ],
                              [
                                  "applicationSource",
                                  "STATIC",
                                  "WEB_JOURNEY"
                              ]
                          ]
                      },
                        {
                          "submitflow": "fetchEligibiltyDetails",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "applicationId",
                              "loanUuid"
                            ],
                            [
                              "applicationSource",
                              "STATIC",
                              "WEB_JOURNEY"
                            ],
                            [
                              "ratingScore",
                              "RatingScoreCardData.output.ratingOutput.totalMarks"
                            ]
                          ],
                          "saveResponseToCapturedData": true,
                          "validateResponse": {
                            "if": [
                              {
                                "==": [
                                  {
                                    "var": "output.plEligOutput.stpFlag"
                                  },
                                  "NA"
                                ]
                              },
                              "CONTACT_BRANCH[JOURNEY_EVENT_CODE]BRE_FAILURE",
                              {
                                "if": [
                                  {
                                    "==": [
                                      {
                                        "var": "output.plEligOutput.stpFlag"
                                      },
                                      "STP"
                                    ]
                                  },
                                  "PROCEED[JOURNEY_EVENT_CODE]BRE_SUCCESS_STP",
                                  "PROCEED[JOURNEY_EVENT_CODE]BRE_SUCCESS_NSTP"
                                ]
                              }
                            ]
                          },
                          "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_FAILURE[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                        }
                      ],
                      "dataScopeFetchFlow": [
                        {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ]
                      },
                        {
                          "fetchflow": "borrowerDetails",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            ["microservicetoken", "oauthAccessToken"],
                            "loanUuid"
                          ],
                          "validateResponse": "PROCEED",
                          "apiError": "PRODUCT_ERROR"
                        },
                        {
                          "fetchflow": "documentTypeFetch",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            "loanPurposeUuid",
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            "loanUuid",
                            [
                              "applicationSource",
                              "STATIC",
                              "WEB_JOURNEY"
                            ],
                            [
                              "documentFor",
                              "STATIC",
                              "MAIN_APPLICANT"
                            ]
                          ],
                          "validateResponse": "PROCEED",
                          "apiError": "PRODUCT_ERROR"
                        },
                        {
                          "fetchflow": "fetchSalaryAccount",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            "loanUuid",
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "custId",
                              "scope.borrowerDetails.borrowerDetail.borrowerProfileTextVariable1"
                            ]
                          ],
                          "validateResponse": {
                            "if": [
                              {
                                "==": [
                                  {
                                    "var": "fetchFlowResponse.code"
                                  },
                                  "200"
                                ]
                              },
                              "PROCEED",
                              "PRODUCT_ERROR"
                            ]
                          },
                          "apiError": "PRODUCT_ERROR"
                        },
                        {
                          "fetchflow": "documentFetch",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "params": [
                            "access_token",
                            "loanUuid",
                            ["microservicetoken","oauthAccessToken"]
                          ],
                          "validateResponse": "PROCEED[JOURNEY_EVENT_CODE]DOCUMENT_UPLOAD",
                          "apiError": "PRODUCT_ERROR"
                        }
                      ]
                },
                "SANCTION_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Proceed",
                    "customData": {
                      "sanctionedAmount": null,
                      "sanctionTitle": "Maximum Loan Amount Sanctioned",
                      "EnhanceSanctionButtonlabel": "Enhance Loan Amount",
                      "continueCurrentSanction": "Return to Sanctioned Amount ",
                      "visitBank": "Submit Enhanced Loan Request",
                      "loanAmountDisp": null,
                      "loanAmount": null,
                      "minLoanAmount": null,
                      "maxLoanAmount": null,
                      "minTenure": null,
                      "tenure": null,
                      "MaxTenure": null,
                      "emiToBePaid": null,
                      "totalInterestPaid": null,
                      "totalLoanPaid": null,
                      "interest": null,
                      "dontCalculate": true,
                      "BranchDetails": {
                        "title": "Nearest Bank Branch",
                        "name": "Bank Branch",
                        "address": "Plot No 6,DoorNo 10 Mahalingapiram Main Road,chennai,tamilNadu - 60035"
                      },
                      "isshowEnhancedDetails": false
                    },
                    "addConfig": [
                      {
                        "componentType": "TITLE",
                        "mandatory": false,
                        "validateSection": false,
                        "sectionContent": {
                          "isShow": true,
                          "titleData": "Select Bank Branch"
                        }
                      },
                      {
                        "componentType": "TITLE",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "text-info",
                        "sectionContent": {
                          "isShow": true,
                          "titleData": "Please select a Bank of India Branch Nearest To Your Location"
                        }
                      },
                      {
                        "componentType": "FORM",
                        "validateSection": true,
                        "mandatory": true,
                        "className": "mb-3",
                        "sectionContent": {
                          "options": {
                            "columnSize": 2,
                            "sendOptionKeyForDropDowns": true
                          },
                          "isShow": true,
                          "fields": [
                            {
                              "fieldDataType": "AUTO_COMPLETE",
                              "dependentField": null,
                              "isMandatory": true,
                              "commonpropertyType": "HOME_BRANCH_STATE",
                              "fieldLabel": "Home Branch State",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 15,
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": null,
                              "regex": null,
                              "options": [],
                              "regexErrorMessage": null,
                              "errorIconPath": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "Home Branch State",
                              "fieldName": "homeBranchState",
                              "showLabel": true,
                              "labelInfo": "This will be your Bank Branch State where your case will be initiated",
                              "groupName": "",
                              "groupIndex": 2,
                              "showField": true
                            },
                            {
                              "fieldDataType": "AUTO_COMPLETE",
                              "dependentField": "homeBranchState",
                              "commonpropertyType": "HOME_BRANCH_DISTRICT",
                              "isMandatory": true,
                              "fieldLabel": "Home Branch District",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 15,
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": null,
                              "regex": null,
                              "options": [],
                              "regexErrorMessage": null,
                              "errorIconPath": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "Home Branch District",
                              "fieldName": "homeBranchDistrict",
                              "showLabel": true,
                              "labelInfo": "This will be your Bank Branch District where your case will be initiated",
                              "groupName": "",
                              "groupIndex": 2,
                              "showField": true
                            },
                            {
                              "fieldDataType": "DROPDOWN",
                              "dependentField": "homeBranchDistrict",
                              "commonpropertyType": "HOME_BRANCH_CITY",
                              "isMandatory": true,
                              "fieldLabel": "Home Branch City",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 15,
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": null,
                              "regex": null,
                              "options": [],
                              "regexErrorMessage": null,
                              "errorIconPath": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "Home Branch City",
                              "fieldName": "homeBranchCity",
                              "showLabel": true,
                              "labelInfo": "This will be your Bank Branch City where your case will be initiated",
                              "groupName": "",
                              "groupIndex": 2,
                              "showField": true
                            },
                            {
                              "fieldDataType": "DROPDOWN",
                              "commonpropertyType": "HOME_BRANCH_NAME",
                              "dependentField": "homeBranchCity",
                              "isMandatory": false,
                              "fieldLabel": "Home Branch",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 15,
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": [
                                "branchAddress"
                              ],
                              "regex": null,
                              "options": [],
                              "regexErrorMessage": null,
                              "errorIconPath": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "Home Branch",
                              "fieldName": "branchCode",
                              "showLabel": true,
                              "labelInfo": "This will be your Bank Branch where your case will be initiated",
                              "groupName": "",
                              "groupIndex": 2,
                              "showField": true
                            },
                            {
                              "fieldDataType": "TEXT_AREA",
                              "isMandatory": false,
                              "fieldLabel": "Branch Address",
                              "fieldAccessModifier": "READ_ONLY",
                              "minLength": 6,
                              "maxLength": null,
                              "error": null,
                              "value": null,
                              "validationJson": {
                                "calculation": {
                                  "findMasterObject": [
                                    "BRANCH",
                                    "branchCode",
                                    {
                                      "var": "branchCode"
                                    },
                                    "address"
                                  ]
                                }
                              },
                              "rulesFor": null,
                              "regex": null,
                              "regexErrorMessage": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "",
                              "fieldName": "branchAddress",
                              "labelInfo": null,
                              "groupName": "",
                              "groupIndex": 2,
                              "showLabel": true,
                              "rows": 3
                            }
                          ]
                        }
                      }
                    ],
                    "chartFooter": [
                      {
                        "label": "Principle Amount",
                        "fieldName": "principal",
                        "prefix": "₹",
                        "value": null
                      },
                      {
                        "label": "Total Payable",
                        "fieldName": "totalPayable",
                        "prefix": "₹",
                        "value": null
                      },
                      {
                        "label": "Payable Interest",
                        "fieldName": "payableInterest",
                        "prefix": "₹",
                        "value": null
                      },
                      {
                        "label": "First EMI Date",
                        "fieldName": "firstEmiDate",
                        "value": null
                      }
                    ],
                    "chartConfig": {
                      "data": [
                        {
                          "fieldLabel": "Principle Amount",
                          "value": null,
                          "bgColor": "#0090E5"
                        },
                        {
                          "fieldLabel": "Interest Amount",
                          "value": null,
                          "bgColor": "#00C5AB"
                        }
                      ],
                      "chartType": "GAUGE",
                      "centerData": {
                        "label": "EMI",
                        "value": 4500
                      }
                    },
                    "formSubmitFlow": [
                      {
                        "validationJson": {
                          "if": [
                            {
                              "var": "SANCTION_DETAILS.isSanctionEnhanced"
                            },
                            "NEXT",
                            "EXECUTE"
                          ]
                        },
                        "submitflow": "loanUpdate",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "loanAmount",
                            "SANCTION_DETAILS.loanAmount"
                          ],
                          [
                            "loanTenure",
                            "SANCTION_DETAILS.tenure"
                          ],
                          [
                            "loanApplicationNumberVariable8",
                            "SANCTION_DETAILS.tenure"
                          ],
                          [
                            "interestRate",
                            "SANCTION_DETAILS.interest"
                          ],
                          [
                            "loanApplicationNumberVariable20",
                            "SANCTION_DETAILS.interest"
                          ],
                          [
                            "loanApplicationNumberVariable3",
                            "SANCTION_DETAILS.loanAmount"
                          ],
                          [
                            "loanApplicationTextVariable54",
                            "SANCTION_DETAILS.isSanctionEnhanced"
                          ],
                          [
                            "skipBreValidation",
                            "SANCTION_DETAILS.isSanctionEnhanced"
                          ]
                        ],
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            {
                              "cat": [
                                "ERROR[ERROR_MESSAGE]",
                                {
                                  "var": "formSubmitResponse.message"
                                }
                              ]
                            }
                          ]
                        },
                        "apiError": {
                          "cat": [
                            "ERROR[ERROR_MESSAGE]",
                            {
                              "var": "formSubmitResponse.message"
                            }
                          ]
                        }
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "var": "SANCTION_DETAILS.isSanctionEnhanced"
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "submitflow": "loanUpdate",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "loanAmount",
                            "SANCTION_DETAILS.enhancedsanctionedAmount"
                          ],
                          [
                            "loanTenure",
                            "SANCTION_DETAILS.enhancedtenure"
                          ],
                          [
                            "loanApplicationTextVariable54",
                            "SANCTION_DETAILS.isSanctionEnhanced"
                          ],
                          [
                            "skipBreValidation",
                            "SANCTION_DETAILS.isSanctionEnhanced"
                          ]
                        ],
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "200"
                              ]
                            },
                            "LOAN_SUMMARY",
                            {
                              "cat": [
                                "ERROR[ERROR_MESSAGE]",
                                {
                                  "var": "formSubmitResponse.message"
                                }
                              ]
                            }
                          ]
                        },
                        "apiError": {
                          "cat": [
                            "ERROR[ERROR_MESSAGE]",
                            {
                              "var": "formSubmitResponse.message"
                            }
                          ]
                        }
                      },
                      {
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_4"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "ETB Sanction page submit"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchEligibilityData.output.plEligOutput.stpFlag"
                                },
                                "STP"
                              ]
                            },
                            {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "loanDetails.loanDetails.loanApplicationStatus"
                                    },
                                    "AWAITING_APPROVAL_L6"
                                  ]
                                },
                                "EXECUTE",
                                "NEXT"
                              ]
                            },
                            "NEXT"
                          ]
                        },
                        "submitflow": "updateMainLoanApplicationStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "apiError": "ERROR",
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "ERROR"
                          ]
                        },
                        "validationErrorMessage": "something went wrong Please Try again!!",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "statusToBeChanged",
                            "STATIC",
                            "AWAITING_APPROVAL_L32"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_1"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "Deviation Check"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
                      },
                      {
                        "submitflow": "sanctionUpdate",
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchEligibilityData.output.plEligOutput.stpFlag"
                                },
                                "STP"
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "skipBreValidation",
                            "STATIC",
                            "false"
                          ],
                          [
                            "loanSanctionAmount",
                            "capturedData.SANCTION_DETAILS.loanAmount"
                          ],
                          [
                            "loanSanctionTextVariable7",
                            "capturedData.SANCTION_DETAILS.tenure"
                          ],
                          [
                            "loanSanctionNumberVariable3",
                            "capturedData.SANCTION_DETAILS.interest"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ],
                          [
                            "loanSanctionTextVariable3",
                            "capturedData.SANCTION_DETAILS.emiToBePaid"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "200"
                              ]
                            },
                            {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "fetchEligibilityData.output.plEligOutput.stpFlag"
                                    },
                                    "STP"
                                  ]
                                },
                                "KEY_FACT_DETAILS",
                                "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                              ]
                            },
                            {
                              "cat": [
                                "ERROR[ERROR_MESSAGE]",
                                {
                                  "var": "formSubmitResponse.message"
                                }
                              ]
                            }
                          ]
                        },
                        "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchEligibilityData.output.plEligOutput.stpFlag"
                                },
                                "NSTP"
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "submitflow": "nstpValidate",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "skipBreValidation",
                            "STATIC",
                            "false"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ],
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "200"
                              ]
                            },
                            {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "fetchEligibilityData.output.plEligOutput.stpFlag"
                                    },
                                    "NSTP"
                                  ]
                                },
                                "LOAN_SUMMARY",
                                "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                              ]
                            },
                            {
                              "cat": [
                                "ERROR[ERROR_MESSAGE]",
                                {
                                  "var": "formSubmitResponse.message"
                                }
                              ]
                            }
                          ]
                        },
                        "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                      }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchFlowResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "fetchflow": "fetchEligibilityData",
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          [
                            "applicationId",
                            "loanUuid"
                          ],
                          [
                            "txnType",
                            "STATIC",
                            "ELIGIBILITY_CHECK"
                          ]
                        ],
                        "validateResponse": "PROCEED"
                      },
                      {
                        "fetchflow": "fetchRepaymentSchedule",
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          [
                            "interestRate",
                            "scope.fetchEligibilityData.output.plEligOutput.roi"
                          ],
                          [
                            "loanTenure",
                            "scope.fetchEligibilityData.output.plEligOutput.tenure"
                          ],
                          [
                            "loanAmount",
                            "scope.fetchEligibilityData.output.plEligOutput.sanctionedFinalAmount"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchFlowResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        }
                      }
                    ]
                  },
                "KEY_FACT_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "DownloadKeyFact": true,
                    "DownloadMode": "API",
                    "customData": {
                      "showEsignButton": false
                    },
                    "formSubmitFlow": [
                      {
                        "submitflow": "updateMainLoanApplicationStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "saveResponseToProduct": true,
                        "apiError": "PRODUCT_ERROR",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "statusToBeChanged",
                            "STATIC",
                            "AWAITING_APPROVAL_L18"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_2"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "Sent for Approval"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        }
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.KEY_FACT_DETAILS.acceptStatus"
                                },
                                "ACCEPT"
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_3"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "KeyFact statement STP - agreed by the customer "
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.KEY_FACT_DETAILS.acceptStatus"
                                },
                                "ACCEPT"
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_4"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "ETB KFS page submit for stp customer"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                        "validationJson": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.KEY_FACT_DETAILS.acceptStatus"
                                },
                                "ACCEPT"
                              ]
                            },
                            "EXECUTE",
                            "NEXT"
                          ]
                        },
                        "submitflow": "updateMainLoanApplicationStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "apiError": "ERROR",
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "validationErrorMessage": "something went wrong Please Try again!!",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "statusToBeChanged",
                            "STATIC",
                            "APPROVED"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_1"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "Bureau fetch initiated"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
                      },
                      {
                        "submitflow": "checkKeyfactStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          [
                            "applicationId",
                            "loanUuid"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ],
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.KEY_FACT_DETAILS.acceptStatus"
                                },
                                "ACCEPT"
                              ]
                            },
                            {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "fetchEligibilityData.output.plEligOutput.stpFlag"
                                    },
                                    "STP"
                                  ]
                                },
                                "LOAN_SUMMARY[JOURNEY_EVENT_CODE]KEY_FACT_ACCEPT",
                                "LOAN_SUMMARY[JOURNEY_EVENT_CODE]KEY_FACT_ACCEPT"
                              ]
                            },
                            "CONTACT_BRANCH[JOURNEY_EVENT_CODE]KEY_FACT_DECLINE"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
                      }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow": "fetchEligibilityData",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          [
                            "applicationId",
                            "loanUuid"
                          ],
                          [
                            "txnType",
                            "STATIC",
                            "ELIGIBILITY_CHECK"
                          ]
                        ],
                        "validateResponse": "PROCEED[JOURNEY_EVENT_CODE]KEY_FACT_NSTP",
                        "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                      },
                      {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchFlowResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                      },
                      {
                        "fetchflow": "fetchRepaymentSchedule",
                        "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          [
                            "applicationId",
                            "loanUuid"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchFlowResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE"
                          ]
                        }
                      }
                    ]
                  },
                  "ESIGN":{
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "dataScopeFetchFlow": [],
                    "formSubmitFlow": [
                      {
                        "submitflow": "esignStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          [
                            "txnId",
                            "capturedData.ESIGN.txnId"
                          ]
                        ],
                        "saveResponseToCapturedData": true,
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "data.signAffixed"
                                },
                                true
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_2"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "E-Sign And E-Stamp completion"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED[JOURNEY_EVENT_CODE]ESIGN_COMPLETE",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      },
                      {
                        "submitflow": "updateMainLoanApplicationStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "apiError": "ERROR",
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "ERROR"
                          ]
                        },
                        "validationErrorMessage": "something went wrong Please Try again!!",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "statusToBeChanged",
                            "STATIC",
                            "AWAITING_APPROVAL_L2"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_1"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "Push To CBS"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
                      },
                      {
                        "submitflow": "updateMainLoanApplicationStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "apiError": "ERROR",
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "PROCEED",
                            "ERROR"
                          ]
                        },
                        "validationErrorMessage": "something went wrong Please Try again!!",
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "statusToBeChanged",
                            "STATIC",
                            "AWAITING_APPROVAL_L30"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_1"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "CBS process"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
                      },
                      {
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "newSubStatus",
                            "STATIC",
                            "SUB_STATUS_2"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "Congratulations Page"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "formSubmitResponse.code"
                                },
                                200
                              ]
                            },
                            "LOAN_SUMMARY[PARAMS]esignDone=true",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                      }
                    ]
                  },
                "LOAN_SUMMARY": {
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    "fieldLabel": "continue",
                    "titleIndex": 0,
                    "loanAmountIndex": 1,
                    "refNoInx": 3,
                    "bankDetails": {
                      "iterationCount": 7,
                      "delay": 10000
                    },
                    "showRepaymentSchedule": false,
                    "showEmiCalculatorSection": false,
                    "showBranchSection": false,
                    "showRatingSection": false,
                    "showRejectionSection": false,
                    "showMainContent": true,
                    "showAccountOpenBtn": false,
                    "rejectionView": [
                      {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": " mb-0 mt-5 d-flex align-items-center",
                        "sectionContent": {
                          "titleData": "Dear ",
                          "isShow": true,
                          "endContent": [
                            {
                              "componentType": "ICON",
                              "className": "ml-10",
                              "sectionContent": {
                                "isShow": true,
                                "iconPath": "/assets/icons/smile.png"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "componentType": "PARAGRAPH",
                        "className": "text-info mt-3",
                        "validateSection": false,
                        "sectionContent": {
                          "isShow": true,
                          "paragraphData": "Thank you for your application & feedback. We may reach you shortly or kindly visit our nearest Branch for further assistance."
                        }
                      },
                      {
                        "componentType": "PARAGRAPH",
                        "className": "form-label-lg mt-4",
                        "validateSection": false,
                        "sectionContent": {
                          "isShow": true,
                          "paragraphData": "Your Application Reference #"
                        }
                      }
                    ],
                    "tableConfig": {
                      "headers": [
                        {
                          "fieldLabel": "Month",
                          "fieldName": "repaymentDate"
                        },
                        {
                          "fieldLabel": "Opening Balance",
                          "fieldName": "loanAmountRemaining"
                        },
                        {
                          "fieldLabel": "Interest",
                          "fieldName": "interest"
                        },
                        {
                          "fieldLabel": "Principle Repayment",
                          "fieldName": "principal"
                        },
                        {
                          "fieldLabel": "Closing Balance",
                          "fieldName": "closingBalance"
                        }
                      ],
                      "data": null
                    },
                    "branchConfig": {
                      "status": "Account Information is sent to your Email address and Mobile Number",
                      "branchDetails": {
                        "name": null,
                        "address": null
                      }
                    },
                    "ratingSection": [
                      {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": " mb-0 mt-5 d-flex align-items-center",
                        "sectionContent": {
                          "titleData": "Rate Us!",
                          "isShow": true
                        }
                      },
                      {
                        "componentType": "PARAGRAPH",
                        "className": "text-info",
                        "validateSection": false,
                        "sectionContent": {
                          "isShow": true,
                          "paragraphData": "Please help us improving our services by providing your valuable feedback"
                        }
                      },
                      {
                        "componentType": "FORM",
                        "className": "mb-3 w-50 mt-25",
                        "validateSection": true,
                        "sectionContent": {
                          "isShow": true,
                          "options": {
                            "columnSize": 1
                          },
                          "fields": [
                            {
                              "fieldDataType": "CARD_OPTIONS",
                              "dependentField": null,
                              "isMandatory": true,
                              "fieldLabel": "How do you feel about our service",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 15,
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": [
                                "remarks"
                              ],
                              "regex": null,
                              "options": [
                                {
                                  "optionCode": "DISAPPONTED",
                                  "optionKey": "1",
                                  "optionName": "Disappointed",
                                  "icon": "Disappointed",
                                  "optionParentCode": null,
                                  "optionParentProperty": null,
                                  "optionValue": "Disappointed",
                                  "sortIndex": 0
                                },
                                {
                                  "optionCode": "POOR",
                                  "optionKey": "2",
                                  "optionName": "Poor",
                                  "icon": "Poor",
                                  "optionParentCode": null,
                                  "optionParentProperty": null,
                                  "optionValue": "Poor",
                                  "sortIndex": 0
                                },
                                {
                                  "optionCode": "AVERAGE",
                                  "optionKey": "3",
                                  "optionName": "Average",
                                  "icon": "Average",
                                  "optionParentCode": null,
                                  "optionParentProperty": null,
                                  "optionValue": "Average",
                                  "sortIndex": 0
                                },
                                {
                                  "optionCode": "GOOD",
                                  "optionKey": "4",
                                  "optionName": "Good",
                                  "icon": "Good",
                                  "optionParentCode": null,
                                  "optionParentProperty": null,
                                  "optionValue": "Good",
                                  "sortIndex": 0
                                },
                                {
                                  "optionCode": "AWESOME",
                                  "optionKey": "5",
                                  "optionName": "Awesome",
                                  "icon": "Awesome",
                                  "optionParentCode": null,
                                  "optionParentProperty": null,
                                  "optionValue": "Awesome",
                                  "sortIndex": 0
                                }
                              ],
                              "regexErrorMessage": null,
                              "errorIconPath": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "please Select",
                              "fieldName": "rating",
                              "showLabel": true,
                              "labelInfo": null,
                              "groupName": null,
                              "groupIndex": null,
                              "showField": true
                            },
                            {
                              "fieldDataType": "DROPDOWN",
                              "dependentField": null,
                              "isMandatory": true,
                              "commonpropertyType": "AWAITING_APPROVAL_L7_REASON",
                              "fieldLabel": "Reason",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": 6,
                              "maxLength": 15,
                              "error": null,
                              "value": null,
                              "validationJson": {
                                "showField": {
                                  "if": [
                                    {
                                      "or": [
                                        {
                                          "==": [
                                            {
                                              "var": "rating"
                                            },
                                            "1"
                                          ]
                                        },
                                        {
                                          "==": [
                                            {
                                              "var": "rating"
                                            },
                                            "2"
                                          ]
                                        },
                                        {
                                          "==": [
                                            {
                                              "var": "rating"
                                            },
                                            "3"
                                          ]
                                        }
                                      ]
                                    },
                                    true,
                                    false
                                  ]
                                }
                              },
                              "rulesFor": null,
                              "regex": null,
                              "options": [],
                              "regexErrorMessage": null,
                              "errorIconPath": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "please Select",
                              "fieldName": "remarks",
                              "showLabel": true,
                              "labelInfo": null,
                              "groupName": null,
                              "groupIndex": null,
                              "showField": true
                            },
                            {
                              "fieldDataType": "TEXT_AREA",
                              "isMandatory": false,
                              "fieldLabel": "Remarks",
                              "fieldAccessModifier": "EDITABLE",
                              "minLength": null,
                              "maxLength": null,
                              "error": null,
                              "value": null,
                              "validationJson": null,
                              "rulesFor": null,
                              "regex": null,
                              "regexErrorMessage": null,
                              "rowNo": null,
                              "columnNo": null,
                              "placeholderText": "Tell us in words",
                              "groupName": null,
                              "groupIndex": null,
                              "fieldName": "feedbackComments",
                              "labelInfo": null,
                              "showLabel": true,
                              "showField": true,
                              "rows": 3
                            }
                          ]
                        }
                      }
                    ],
                    "chartFooter": [
                      {
                        "label": "Principle Amount",
                        "fieldName": "principal",
                        "prefix": "₹",
                        "value": null
                      },
                      {
                        "label": "Total Payable",
                        "fieldName": "totalPayable",
                        "prefix": "₹",
                        "value": null
                      },
                      {
                        "label": "Payable Interest",
                        "fieldName": "payableInterest",
                        "prefix": "₹",
                        "value": null
                      },
                      {
                        "label": "First EMI Date",
                        "fieldName": "firstEmiDate",
                        "value": null
                      }
                    ],
                    "chartConfig": {
                      "title": "Review Your Loan",
                      "data": [
                        {
                          "fieldLabel": "Principle Amount",
                          "value": 25000,
                          "bgColor": "#0090E5"
                        },
                        {
                          "fieldLabel": "Interest Amount",
                          "value": 4000,
                          "bgColor": "#00C5AB"
                        }
                      ],
                      "chartType": "PIE_CHART"
                    },
                    "temp": {
                      "options": {
                        "layout": "sideLayout",
                        "columnSize": 1
                      },
                      "fields": [
                        {
                          "fieldDataType": "TEXT",
                          "isMandatory": false,
                          "fieldLabel": "Loan Amount",
                          "fieldAccessModifier": "READ_ONLY",
                          "minLength": 6,
                          "maxLength": 15,
                          "error": null,
                          "value": null,
                          "validationJson": {
                            "runAlways": true,
                            "default": {
                              "if": [
                                true,
                                {
                                  "var": "loanAmountCopy"
                                }
                              ]
                            },
                            "calculation": {
                              "if": [
                                true,
                                {
                                  "var": "loanAmountCopy"
                                }
                              ]
                            }
                          },
                          "rulesFor": null,
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "",
                          "fieldName": "loanAmount",
                          "labelInfo": null,
                          "showLabel": true,
                          "showField": true,
                          "prefixfieldAccessModifier": "READ_ONLY",
                          "prefixCommonProperty": null,
                          "includePrefixtoFormValue": false,
                          "prefixfieldName": "ruppe",
                          "prefixType": "TEXT",
                          "prefix": "INR",
                          "showprefix": true,
                          "prefixplaceholderText": "Title"
                        },
                        {
                          "fieldDataType": "RANGE",
                          "isMandatory": false,
                          "fieldLabel": "Enter your account number",
                          "fieldAccessModifier": "EDITABLE",
                          "minLength": 100,
                          "maxLength": 50000,
                          "error": null,
                          "value": null,
                          "validationJson": {},
                          "rulesFor": [
                            "loanAmount"
                          ],
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "xx x  xxxxx",
                          "fieldName": "loanAmountCopy",
                          "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                          "showLabel": false,
                          "showField": true,
                          "prefix": "₹",
                          "suffix": null,
                          "excludeToFormValue": true
                        },
                        {
                          "fieldDataType": "TEXT",
                          "isMandatory": false,
                          "fieldLabel": "Tenure",
                          "fieldAccessModifier": "READ_ONLY",
                          "minLength": 6,
                          "maxLength": 15,
                          "error": null,
                          "value": null,
                          "validationJson": {
                            "runAlways": true,
                            "default": {
                              "if": [
                                true,
                                {
                                  "var": "tenureCopy"
                                }
                              ]
                            },
                            "calculation": {
                              "if": [
                                true,
                                {
                                  "var": "tenureCopy"
                                }
                              ]
                            }
                          },
                          "rulesFor": null,
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "",
                          "fieldName": "tenure",
                          "labelInfo": null,
                          "showLabel": true,
                          "showField": true
                        },
                        {
                          "fieldDataType": "RANGE",
                          "isMandatory": false,
                          "fieldLabel": "Enter your account number",
                          "fieldAccessModifier": "EDITABLE",
                          "minLength": 1,
                          "maxLength": 84,
                          "error": null,
                          "value": null,
                          "validationJson": {},
                          "rulesFor": [
                            "tenure"
                          ],
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "xx x  xxxxx",
                          "fieldName": "tenureCopy",
                          "labelInfo": null,
                          "showLabel": false,
                          "showField": true,
                          "prefix": null,
                          "suffix": "months",
                          "excludeToFormValue": true
                        },
                        {
                          "fieldDataType": "TEXT",
                          "isMandatory": false,
                          "fieldLabel": "Interest per annum (%)",
                          "fieldAccessModifier": "READ_ONLY",
                          "minLength": 6,
                          "maxLength": 15,
                          "error": null,
                          "value": null,
                          "validationJson": null,
                          "rulesFor": null,
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "",
                          "fieldName": "interestRate",
                          "labelInfo": null,
                          "showLabel": true,
                          "showField": true
                        },
                        {
                          "fieldDataType": "TEXT",
                          "isMandatory": false,
                          "fieldLabel": "EMI to be paid",
                          "fieldAccessModifier": "READ_ONLY",
                          "minLength": 6,
                          "maxLength": 15,
                          "error": null,
                          "value": null,
                          "validationJson": null,
                          "rulesFor": null,
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "",
                          "fieldName": "emiToBePaid",
                          "labelInfo": null,
                          "showLabel": true,
                          "showField": true
                        },
                        {
                          "fieldDataType": "TEXT",
                          "isMandatory": false,
                          "fieldLabel": "Type of ROI",
                          "fieldAccessModifier": "READ_ONLY",
                          "minLength": 6,
                          "maxLength": 15,
                          "error": null,
                          "value": null,
                          "validationJson": null,
                          "rulesFor": null,
                          "regex": null,
                          "regexErrorMessage": null,
                          "rowNo": null,
                          "columnNo": null,
                          "groupName": "Your Loan Details",
                          "groupIndex": 1,
                          "placeholderText": "",
                          "fieldName": "typeOfRoi",
                          "labelInfo": null,
                          "showLabel": true,
                          "showField": true
                        }
                      ]
                    },
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow": "fetchEligibilityData",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ],
                          [
                            "applicationId",
                            "loanUuid"
                          ],
                          [
                            "txnType",
                            "STATIC",
                            "ELIGIBILITY_CHECK"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchFlowResponse.output.plEligOutput.stpFlag"
                                },
                                "STP"
                              ]
                            },
                            "PROCEED",
                            {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "fetchFlowResponse.output.plEligOutput.stpFlag"
                                    },
                                    "NSTP"
                                  ]
                                },
                                "PROCEED",
                                "PROCEED"
                              ]
                            }
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          "loanUuid",
                          [
                            "microservicetoken",
                            "oauthAccessToken"
                          ]
                        ],
                        "validateResponse": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "fetchFlowResponse.code"
                                },
                                "200"
                              ]
                            },
                            "PROCEED",
                            "PRODUCT_ERROR"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": [
                          "product",
                          "formValue",
                          "capturedData"
                        ],
                        "params": [
                          "access_token",
                          ["microservicetoken", "oauthAccessToken"],
                          "loanUuid"
                        ],
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR"
                      }
                    ]
                  }
            }
        },
    };
    applicationErrorCodes = {
        VLN: {},
    };
    journeyEventCodes = {
        VLN: {
            "MOBILE_VERIFY": {},
            "MOBILE_SUCCESS": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Mobile Verification Successfull"
                }
            },
            "MOBILE_FAIL": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "Pan Verification Successfull"
                }
            },
            "MOBILE_VERIFICATION_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_3",
                    "subStatusChangeDescription": "Mobile Verification page completed"
                }
            },
            "PAN_VERIFY": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "Pan Verification Successfull"
                },
                "APPICE_EVENT": {
                    "key": "VLAddBasicInfo",
                    "properties": {
                      "Continue": true
                    }
               }
            
            },
            "AADHAR_VERIFY": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "Aadhaar Verification Successfull"
                },
                "APPICE_EVENT": {
                    "key": "VLAddBasicInfo",
                    "properties": {
                      "Continue": true
                    }
               }
            },
            "MORE_INFO_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_6",
                    "subStatusChangeDescription": "PAN & AADHAAR Verification page completed"
                }
            },
            "NAME_MATCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_7",
                    "subStatusChangeDescription": "Name Match Successfull"
                }
            },
            "NPA_FAIL":{
                "status": {
                  "statusToBeChanged": "WITHDRAW",
                  "statusChangeDescription": "Npa Fail",
                  "subStatusToBeChanged": "SUB_STATUS_1"
                }
            },
            "DEDUPE_CHECK": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_8",
                    "subStatusChangeDescription": "Dedupe Check Successfull"
                }
            },
            "CRM_LEAD_ID": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_9",
                    "subStatusChangeDescription": "CRM Lead Id generation Successfull"
                }
            },
            "BRANCH_SELECT": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_10",
                    "subStatusChangeDescription": "Branch Selection Successfull"
                }
            },
            "NTB_CONTACT_BRANCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_11",
                    "subStatusChangeDescription": "NTB Journey Thankyou page"
                }
            },
            "EMAIL_PASS": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_12",
                    "subStatusChangeDescription": "Email Verification Pass"
                }
            },
            "EMAIL_FAIL": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_13",
                    "subStatusChangeDescription": "Email Verification Fail"
                }
            },
            "ADDRESS_DETAILS": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_14",
                    "subStatusChangeDescription": "Address Details"
                }
            },
            "PERSONAL_DETAILS_COMPLETE_NTB": {
                "APPICE_SET_CUSTOMVARIABLE": {
                  "key": "VLAddBasicInfo",
                  "properties": {
                    "highestEducation": [
                      "capturedData.ADDITIONAL_INFORMATION.educationType"
                    ],
                    "martialStatus": [
                      "capturedData.ADDITIONAL_INFORMATION.maritalStatus"
                    ],
                    "dob": [
                      "capturedData.existingaadharData.mappingFields.personalAddress.zipCode"
                    ]
                  }
                },
                "APPICE_SETUSER": {
                  "properties": {
                    "name": [
                      "borrowerDetails.borrowerDetail.firstName"
                    ],
                    "phone": [
                      "borrowerDetails.borrowerDetail.mobileNumber"
                    ],
                    "email": [
                      "borrowerDetails.borrowerDetail.alternativeUsername"
                    ],
                    "gender": [
                      "borrowerDetails.borrowerDetail.gender"
                    ],
                    "dob": [
                      "borrowerDetails.borrowerDetail.dateOfBirth"
                    ]
                  }
                }
              },
            "PERSONAL_DETAILS_COMPLETE": {
                "APPICE_SET_CUSTOMVARIABLE": {
                    "properties": {
                      "highestEducation": [
                        "capturedData.PERSONAL_DETAILS.educationType"
                      ],
                      "martialStatus": [
                        "capturedData.PERSONAL_DETAILS.maritalStatus"
                      ],
                      "pincode": [ 
                            "borrowerDetails.borrowerDetail.personalAddress.zipCode"
                      ],
                      "language": [
                        
                            "borrowerDetails.borrowerDetail.borrowerDetailTextVariable24"
                          
                      ]
                    }
                  },
                  "APPICE_SETUSER": {
                    "properties": {
                      "name": [
                        
                            "borrowerDetails.borrowerDetail.firstName"
                         
                      ],
                      "phone": [
                        
                            "borrowerDetails.borrowerDetail.mobileNumber"
                         
                      ],
                      "email": [
                        
                            "borrowerDetails.borrowerDetail.alternativeUsername"
                          
                      ],
                      "gender": [
                        
                            "borrowerDetails.borrowerDetail.gender"
                         
                      ],
                      "dob": [
                        
                            "borrowerDetails.borrowerDetail.dateOfBirth"
                         
                      ]
                    }
                  },
                  "APPICE_SETUSERID": {
                    "properties": {
                      "userId": [
                        "loanDetails.loanDetails.crmLeadId"
                      ]
                    }
                  }
            },
            "BUREAU_CALL": {
                "status": {
                    "statusToBeChanged": "AWAITING_APPROVAL_L4",
                    "statusChangeDescription": "Bureau call",
                    "subStatusToBeChanged": "SUB_STATUS_1"
                }
            },
            "SELF_EMPLOYED_UPDATE": {
                "status": {
                    "statusToBeChanged": "AWAITING_APPROVAL_L21",
                    "statusChangeDescription": "In process"
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Employment Details Self Employed"
                }
            },
            "SALARIED_UPDATE": {
                "status": {
                    "statusToBeChanged": "AWAITING_APPROVAL_L21",
                    "statusChangeDescription": "In process"
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "Employment Details Salaried"
                }
            },
            "ORGANISATION_VERIFY": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_3",
                    "subStatusChangeDescription": "Organization verification"
                }
            },
            "EMPLOYMENT_DETAILS_CHECK": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "Employment Details Check"
                }
            },
            "EMPLOYMENT_DETAILS_COMPLETE": {
               
                "APPICE_SET_CUSTOMVARIABLE": {
                    "key": "VLAddBasicInfo",
                    "properties": {
                      "nationality": "Indian",
                      "employmentType": [
                        "capturedData.EMPLOYMENT_DETAILS.borrowerEmploymentType"
                      ],
                      "organizationType": [
                        "capturedData.EMPLOYMENT_DETAILS.borrowerEmploymentHistoryTextVariable11"
                      ],
                      "profession": [
                        "capturedData.EMPLOYMENT_DETAILS.borrowerEmploymentHistoryTextVariable15"
                      ]
                    }
                  }
            },
            "VEHICLE_DETAILS_SUBMIT": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_6",
                    "subStatusChangeDescription": "Vehicle details page submitted"
                }
            },
            "EDW_FETCH_INITIATE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_7",
                    "subStatusChangeDescription": "EDW Bank Statement"
                }
            },
            "DOCUMENT_UPLOAD": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_8",
                    "subStatusChangeDescription": "Document Upload"
                }
            },
            "BSA_FETCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_9",
                    "subStatusChangeDescription": "Banking statement fetch"
                }
            },
            "ITR_UPLOAD": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_10",
                    "subStatusChangeDescription": "ITR upload for Self employed "
                }
            },
            "DOCUMENT_UPLOAD_COMPLETE": {
                "APPICE_EVENT": {
                    "key": "VLUploadDocs",
                    "properties": {
                      "Done": true
                    }
               }
            },
            "BRE_INITIATE": {
                "status": {
                    "statusToBeChanged": "AWAITING_APPROVAL_L6",
                    "statusChangeDescription": "Eligiblity Assesment"
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "BRE call initiated"
                }
            },
            "BRE_SUCCESS_NSTP": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "BRE Call Success Non STP"
                }
            },
            "BRE_FAILURE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_3",
                    "subStatusChangeDescription": "BRE call Failure"
                }
            },
            "SANCTION_DETAILS_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "ETB Sanction page"
                },
                "APPICE_EVENT": {
                    "key": "VLAddSanctionDetails",
                    "properties": {
                      "Proceed": true
                    }
               }
            },
            "KEY_FACT_NSTP": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "KeyFact statement Non-STP"
                }
            },
            "KEY_FACT_ACCEPT":{
                 "APPICE_EVENT": {
                    "key": "VLApproveLoan",
                    "properties": {
                      "Proceed": true
                    }
               }
            },
            "KEY_FACT_DECLINE":{
                 "APPICE_EVENT": {
                    "key": "VLApproveLoan",
                    "properties": {
                      "Decline": true
                    }
               }
            },
            "RATINGS_SUBMIT":{
                "APPICE_EVENT": {
                    "key": "VLApproveLoan",
                    "mapExternalParams":true,
                    "properties": {
                        "Submit":true
                    }
               }
            },
            "RATINGS_CANCEL":{
                "APPICE_EVENT": {
                    "key": "VLApproveLoan",
                    "properties": {
                        "Submit":false
                    }
               }
            },
            "FAILURE_APPICE": {
                "APPICE_EVENT": {
                  "key": "PLApproveLoan",
                  "properties": {
                    "FailureMessage": [
                      "formSubmitResponse.message"
                    ]
                  }
                }
              },
              "LOAN_SUMMARY":{
                "APPICE_EVENT": {
                  "key": "PLApproveLoan",
                  "mapExternalParams":true,
                  "properties": {
                    
                  }
                }
              }
            
        },
    };
    productLocalisations = {
        VLN: {
            SYSTEM_DOWN: "currently our servers are down please try after some time",
            SWR: "Something Went Wrong!!",
        },
        PSL: {
            SYSTEM_DOWN: "currently our servers are down please try after some time",
            SWR: "Something Went Wrong!!",
        },
    };
    flowTags = {};
}
