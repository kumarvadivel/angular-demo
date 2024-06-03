import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

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
  submitFeedBack = false

  isDevMode = false;
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
    "campaign_parameters": ["partner","websiteUrl","utm_id","utm_source","utm_medium","utm_campaign","utm_code","offerId","leadId","accountId","remarksAndSampleUrl","utm_content","object_type","object_id","utm_term"]
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
  homeMenu = [
    {
      name: "Personal",
      isActive: true,
      subSectionMenu: [
        {
          id: "accountOpening",
          name: "Account Opening",
          image: "assets/icons/account_opening.png",
          hover_image: "assets/icons/accounts_hover.svg",
          isHover: false,
          isActive: true,
        },
        {
          id: "loans",
          name: "Loans",
          image: "assets/icons/loans.png",
          hover_image: "assets/icons/loans_hover.svg",
          isHover: false,
          isActive: false,
        },
        {
          id: "insurance",
          name: "Insurance",
          image: "assets/icons/insurance.png",
          hover_image: "assets/icons/insurance_hover.svg",
          isHover: false,
          isActive: false,
        },
        {
          id: "investment",
          name: "Investment",
          image: "assets/icons/investment.png",
          hover_image: "assets/icons/investment_hover.svg",
          isHover: false,
          isActive: false,
        },
        {
          id: "digitalbanking",
          name: "Digital Banking",
          image: "assets/icons/digitalbanking.png",
          hover_image: "assets/icons/digitalbanking_blue.png",
          isHover: false,
          isActive: false,
        },
      ],
      subMenu: [
        {
          id: "accountOpening",
          name: "Account Opening",
          image: "assets/icons/account_opening.png",
          hover_image: "assets/icons/accounts_hover.svg",
          isHover: false,
          isActive: true,
          subSection: [
            {
              id: "savingsAccount",
              label: "Savings Account",
              icon: "assets/icons/Group 17329.svg",
              products: [
                {
                  id: "savingsBankAccount",
                  label: "Savings Bank Account",
                  icon: "assets/icons/Group 17323.svg",
                  description: "Open a Savings Bank Account online in a jiffy!",
                  actionLabel: "know More",
                  productCode: "SBA",
                },
              ],
            },
          ],
        },
        {
          id: "loans",
          name: "Loans",
          image: "assets/icons/loans.png",
          hover_image: "assets/icons/loans_hover.svg",
          isHover: false,
          isActive: true,
          subSection: [
            {
              id: "retail",
              label: "Retail",
              icon: "assets/icons/Group 17329 (2).svg",
              products: [
                {
                  id: "savingsBankAccount",
                  label: "Personal Loan",
                  description:
                    "Don’t dream! Live your dream! Apply for a Personal Loan with minimal documentation.",
                  actionLabel: "know More",
                  icon: "assets/icons/Group 17323.svg",
                  productCode: "PTL",
                },
                {
                  id: "savingsBankAccount",
                  label: "Pensioner Loan",
                  description:
                    "Rainy Days? Apply for Pensioner Loan with minimal documentation.",
                  actionLabel: "know More",
                  productCode: null,
                  icon: "assets/icons/Group 17323 (2).svg",
                },
                {
                  id: "savingsBankAccount",
                  label: "Vehicle Loan",
                  description:
                    "Grab your dream wheels digitally without any hassle!",
                  actionLabel: "know More",
                  productCode: null,
                  icon: "assets/icons/Group 17323 (3).svg",
                },
                {
                  id: "savingsBankAccount",
                  label: "Home Loan",
                  description:
                    "Get your Home Loan with the Bank of India with minimal documentation.",
                  actionLabel: "know More",
                  productCode: null,
                  icon: "assets/icons/Group 19022.svg",
                },
                {
                  id: "savingsBankAccount",
                  label: "Top-Up Loan",
                  description:
                    "Planning for Holiday, Home renovation, Medical expenses, or Marriage? Apply for a Top-Up loan Now!",
                  actionLabel: "know More",
                  productCode: null,
                  icon: "assets/icons/Group 17323 (4).svg",
                },
                {
                  id: "savingsBankAccount",
                  label: "Loan Against Property",
                  description:
                    "Apply for a Loan against your property with minimal documentation.",
                  actionLabel: "know More",
                  productCode: null,
                  icon: "assets/icons/Group 17323 (5).svg",
                },
              ],
            },
          ],
        },
        {
          id: "insurance",
          name: "Insurance",
          image: "assets/icons/insurance.png",
          hover_image: "assets/icons/insurance_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "investment",
          name: "Investment",
          image: "assets/icons/investment.png",
          hover_image: "assets/icons/investment_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "digitalbanking",
          name: "Digital Banking",
          image: "assets/icons/digitalbanking.png",
          hover_image: "assets/icons/digitalbanking_blue.png",
          isHover: false,
          isActive: true,
          subSection: [
            {
              id: "retail",
              label: "Credit Card",
              icon: "assets/icons/Group 17329 (1).svg",
              products: [
                {
                  id: "savingsBankAccount",
                  label: "Credit Card",
                  description:
                    "Getting a Credit Card is just a few clicks away!",
                  actionLabel: "know More",
                  productCode: null,
                  icon: "assets/icons/Group 17323 (1).svg",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Business",
      isActive: false,
      subSectionMenu: [],
      subMenu: [
        {
          id: "accountOpening",
          name: "Account Opening",
          image: "assets/icons/account_opening.png",
          hover_image: "assets/icons/accounts_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "loans",
          name: "Loans",
          image: "assets/icons/loans.png",
          hover_image: "assets/icons/loans_hover.svg",
          isHover: false,
          isActive: true,
          subSection: [
            {
              id: "savingsAccount",
              label: "Buisness Loan",
              icon: "assets/icons/Group 17327.svg",
              products: [
                {
                  id: "savingsBankAccount",
                  label: "PMMY-Shishu (Upto 50K)",
                  icon: "assets/icons/Group 17323 (6).svg",
                  description:
                    "Applying Mudra loan was never so easy! Apply Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "PMMY-Kishore (50K - 5 Lakhs)",
                  icon: "assets/icons/Group 17323 (7).svg",
                  description:
                    "Applying Mudra loan was never so easy! Apply Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "PMMY-Tarun (5 Lakhs - 10 Lakhs)",
                  icon: "assets/icons/Group 17323 (8).svg",
                  description:
                    "Applying Mudra loan was never so easy! Apply Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "Loan above Rs.10 Lakhs up to Rs.25 Lakhs",
                  icon: "assets/icons/Group 17323 (9).svg",
                  description:
                    "Need funds for Business? Apply for Business Loan now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "Loan Above Rs.25 Lakhs Up To Rs.200 Cr.",
                  icon: "assets/icons/Group 17323 (10).svg",
                  description:
                    "Need funds for Business? Apply for Business Loan now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "Star SRTO Loans",
                  icon: "assets/icons/Group 17323 (11).svg",
                  description:
                    "Need Loans for Commercial Vehicle for Business? Apply for Star SRTO Loan Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "Renewals",
                  icon: "assets/icons/Group 17323 (12).svg",
                  description:
                    "Renew your Business Loans in just a few clicks! Apply Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
              ],
            },
          ],
        },
        {
          id: "insurance",
          name: "Insurance",
          image: "assets/icons/insurance.png",
          hover_image: "assets/icons/insurance_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "investment",
          name: "Investment",
          image: "assets/icons/investment.png",
          hover_image: "assets/icons/investment_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
      ],
    },
    {
      name: "Rural",
      isActive: false,
      subSectionMenu: [],
      subMenu: [
        {
          id: "accountOpening",
          name: "Account Opening",
          image: "assets/icons/account_opening.png",
          hover_image: "assets/icons/accounts_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "loans",
          name: "Loans",
          image: "assets/icons/loans.png",
          hover_image: "assets/icons/loans_hover.svg",
          isHover: false,
          isActive: true,
          subSection: [
            {
              id: "savingsAccount",
              label: "Agriculture Loans",
              icon: "assets/icons/Group 17317.svg",
              products: [
                {
                  id: "savingsBankAccount",
                  label: "Agriculture Gold Loan",
                  icon: "assets/icons/Group 17323 (13).svg",
                  description:
                    "Use Gold to unlock your Golden Future! Apply Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "Kisan Credit Card",
                  icon: "assets/icons/Group 17323 (14).svg",
                  description:
                    "Need funds for Farming? Apply for Kisan Credit Card Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
                {
                  id: "savingsBankAccount",
                  label: "Crop Loan",
                  icon: "assets/icons/Group 17323 (15).svg",
                  description:
                    "Improve your farming business with BOI Crop Loan. Apply Now!",
                  actionLabel: "know More",
                  productCode: null,
                },
              ],
            },
          ],
        },
        {
          id: "insurance",
          name: "Insurance",
          image: "assets/icons/insurance.png",
          hover_image: "assets/icons/insurance_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "investment",
          name: "Investment",
          image: "assets/icons/investment.png",
          hover_image: "assets/icons/investment_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
      ],
    },
    {
      name: "NRI",
      isActive: false,
      subSectionMenu: [],
      subMenu: [
        {
          id: "accountOpening",
          name: "Account Opening",
          image: "assets/icons/account_opening.png",
          hover_image: "assets/icons/accounts_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "loans",
          name: "Loans",
          image: "assets/icons/loans.png",
          hover_image: "assets/icons/loans_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "insurance",
          name: "Insurance",
          image: "assets/icons/insurance.png",
          hover_image: "assets/icons/insurance_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
        {
          id: "investment",
          name: "Investment",
          image: "assets/icons/investment.png",
          hover_image: "assets/icons/investment_hover.svg",
          isHover: false,
          isActive: false,
          subSection: [],
        },
      ],
    },
  ];
  homeBanner = [
    {
      image: "assets/images/Digital-Product.webp",
      title: "",
      description: "",
    },
    {
      image: "assets/images/Home-Loan.webp",
      title: "",
      description: "",
    },
    {
      image: "assets/images/kisan-card.webp",
      title: "",
      description: "",
    },
    {
      image: "assets/images/MSME-Loan.webp",
      title: "",
      description: "",
    },
  ];
  landingPageBanner = [
    {
      image: "assets/images/feedback/Landing-Loan.png",
      title: "",
      description: "",
    },
    {
      image: "assets/images/feedback/Gold-Loan.png",
      title: "",
      description: "",
    },
    {
      image: "assets/images/feedback/Mudra-Loan.png",
      title: "",
      description: "",
    },
  ];
  banner = {
    CCA: {
      individual: {
        carouselImages: [
          {
            image: 'assets/images/Integreat-banner1.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner2.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner3.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner4.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner5.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner6.jpg',
            title: '',
            description: ''
          }
        ]
      },
      company: {
        carouselImages: [
          {
            image: 'assets/images/Integreat-banner1.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner2.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner3.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner4.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner5.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner6.jpg',
            title: '',
            description: ''
          }
        ]
      },
      group: {
        carouselImages: [
          {
            image: 'assets/images/Integreat-banner1.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner2.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner3.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner4.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner5.jpg',
            title: '',
            description: ''
          },
          {
            image: 'assets/images/Integreat-banner6.jpg',
            title: '',
            description: ''
          }
        ]
      }
    }
  };
  loanProductInfo = [
    {
      id: "savings-account",
      image: "assets/icons/loan1.png",
      name: "Savings Account",
      info: "Open a Savings Bank Account online in a jiffy",
      color: "#197DFC",
      isActive: true,
      url: "/1/saving-account/product-description",
      basePath: "saving-account",
      showDescription: true,
      productCode: "SBA",
      productType: "SAVINGS_ACCOUNT",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: "shishu-mudra",
      image: "assets/icons/loan5.png",
      name: "Shishu-Mudra Loan",
      info: "Applying Mudra Loan Was Never So Easy! Apply Now",
      color: "#FD6738",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: false,
      isShowJourneyHeader: true,
      productCode: "SML",
      productType: "SHISHU_MUDRA",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: "vehicle-loan",
      image: "assets/icons/loan2.png",
      name: "Vehicle Loan",
      info: "Grab your dream wheels digitally without any hassle!",
      color: "#197DFC",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: true,
      productCode: "VLN",
      productType: "VEHICLE_LOAN",
    },
    {
      id: "kcc-loan",
      image: "assets/icons/loan3.png",
      name: "KCC Loan",
      info: " Getting a Credit Card is just a few clicks away! ",
      color: "#297F87",
      isActive: true,
      url: "product/basicinfo/customer-type",
      productCode: "LA763",
      productType: "KCC_LOAN",
      isCbsFields_ShowAndHide: false,
    },
    // {
    //     id: 'home-loan',
    //     image: 'assets/icons/loan6.png',
    // info: 'Home Loan ! Apply Now',
    // color: '#FF6B6B',
    // isActive: false,
    // url: 'product/basicinfo/customer-type',
    // showDescription : false,
    // productCode:'HML',
    // productType:'HOME_LOAN'
    //  },
    {
      id: "pensioner-loan",
      image: "assets/icons/loan4.png",
      name: "Pensioner Loan",
      info: "Don’t dream! Live your dream! Apply for a Pensioner Loan with minimal documentation.",
      color: "#7C83FD",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: true,
      productCode: "PSL",
      productType: "PENSIONER_LOAN",
    },
    {
      id: "personal-loan-express",
      image: "assets/icons/loan4.png",
      name: "Personal Loan Express",
      info: "Don’t dream! Live your dream! Apply for a Personal Loan with minimal documentation.",
      color: "#7C83FD",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: true,
      productCode: "PTLEX",
      productType: "PERSONAL_LOAN_EXPRESS",
    },

    {
      id: "personal-loan",
      image: "assets/icons/loan3.png",
      name: "Personal Loan",
      info: "Don’t dream! Live your dream! Apply for a Personal Loan with minimal documentation. ",
      color: "#297F87",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: false,
      productCode: "PTL",
      productType: "PERSONAL_LOAN",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: "kishore-mudra",
      image: "assets/icons/loan5.png",
      name: "Kishore-Mudra Loan",
      info: "Applying Mudra Loan Was Never So Easy! Apply Now",
      color: "#FD6738",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: false,
      isShowJourneyHeader: true,
      productCode: "KML",
      productType: "KISHORE_MUDRA",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: "tarun-mudra",
      image: "assets/icons/loan5.png",
      name: "Tarun-Mudra Loan",
      info: "Applying Mudra Loan Was Never So Easy! Apply Now",
      color: "#FD6738",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: false,
      isShowJourneyHeader: true,
      productCode: "TML",
      productType: "TARUN_MUDRA",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: "gold-loan",
      image: "assets/icons/loan4.png",
      name: "Agri Gold Loan",
      info: "Use Gold to unlock your Golden Future! Apply Now!",
      color: "#7C83FD",
      isActive: true,
      url: "product/basicinfo/customer-type",
      showDescription: false,
      productCode: "LA776",
      productType: "GOLD_LOAN",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: "current-account",
      image: "assets/icons/loan1.png",
      name: "Current Account",
      info: "Open a Current Bank Account online in a jiffy",
      color: "#197DFC",
      isActive: true,
      url: "/1/current-account/product-description",
      basePath: "current-account",
      showDescription: true,
      productCode: "CA",
      productType: "CURRENT_ACCOUNT",
      isCbsFields_ShowAndHide: false,
    },
    {
      id: 'credit-card',
      image: 'assets/icons/loan1.png',
      name: 'Credit Card',
      info: ' Getting a Credit Card is just a few clicks away!',
      color: '#197DFC',
      isActive: true,
      url: '/1/credit-card/product-description',
      basePath: 'credit-card',
      showDescription: true,
      productCode: 'CCA',
      productType: 'CREDIT_CARD',
      isCbsFields_ShowAndHide: false
    }
  ];
  getHelpInfo = [
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "title-wrapper",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "For any query, kindly contact us",
      },
    },
    {
      componentType: "PARAGRAPH",
      className: "title-wrapper",
      sectionContent: {
        isShow: true,
        paragraphData: "Phone Numbers",
      },
    },
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "pargh-content",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "1800 103 1906 (Tollfree)",
      },
    },
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "pargh-content",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "1800 220 229 (Tollfree - Covid Support)",
      },
    },
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "pargh-content",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "(022) – 40919191 (chargeable number) 24 X 7",
      },
    },
    {
      componentType: "PARAGRAPH",
      className: "title-wrapper",
      sectionContent: {
        isShow: true,
        paragraphData: "E-mail Address",
        subContent: "boi.callcentre@bankofindia.co.in",
      },
    },
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "pargh-content",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "boi.callcentre@bankofindia.co.in",
      },
    },
  ];

  rejectionConsent = [
    {
      componentType: "FORM",
      validateSection: false,
      sectionContent: {
        options: {
          columnSize: 1,
          mapSupplyData: true,
          mapAndDisable: true,
        },
        isShow: true,
        fields: [
          {
            fieldDataType: "DROPDOWN",
            dependentField: null,
            isMandatory: true,
            commonpropertyType: "AWAITING_APPROVAL_L7_REASON",
            fieldLabel: "Rejection Reason",
            fieldAccessModifier: "EDITABLE",
            minLength: 6,
            maxLength: 15,
            error: null,
            value: null,
            validationJson: "",
            rulesFor: null,
            regex: null,
            options: [],
            regexErrorMessage: null,
            errorIconPath: null,
            rowNo: null,
            columnNo: null,
            placeholderText: "Select Reason",
            fieldName: "reason",
            showLabel: true,
            labelInfo: null,
            groupName: "",
            groupIndex: 1,
            showField: true,
          },
          {
            fieldDataType: "TEXT",
            dependentField: null,
            isMandatory: false,
            fieldLabel: "Remarks",
            fieldAccessModifier: "EDITABLE",
            minLength: null,
            maxLength: 50,
            error: null,
            value: null,
            validationJson: null,
            rulesFor: null,
            regex: null,
            options: [],
            regexErrorMessage: null,
            errorIconPath: null,
            rowNo: null,
            columnNo: null,
            placeholderText: "Tell us in words",
            fieldName: "remarks",
            showLabel: true,
            labelInfo: null,
            groupName: "",
            groupIndex: 2,
            showField: true,
          },
        ],
        validityEmitter: new Subject<void>(),
        formValueEmitter: new Subject<void>(),
      },
    },
  ];

  AadharConsent = [
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "title-wrapper",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "Kindly Read and Submit The Consent",
      },
    },
    {
      componentType: "CONSENT",
      mandatory: false,
      className: "title-wrapper",
      validateSection: false,
      sectionContent: {
        isShow: true,
        config: {
          options: [
            {
              consentType: "STATIC", //STATIC,APIFETCH
              consentCode: null,
              submitConsentCodes: [],
              label:
                "I hereby provide my voluntary consent to bank of india to use the Aadhar details provided by me for authentication and agree to terms and conditions related to Aadhar consent and updationI am aware that submission of Aadhaar is not mandatory, and I have voluntarily opted and give consent for Aadhaar OVD KYC or e-KYC or offline verification instead of other alternative option available for KYC to establish identity including by way of physical KYC with OVD i.e., Officially Valid Documents other than Aadhaar I voluntarily submit my Aadhaar number or Virtual ID or e-Aadhaar or XML or Masked Aadhaar to Bank of India along with details like Name, DOB, gender photo, registered mobile number, email ID, address, Iris authentication details and/or biometric information or other type of information (collectively, information). I understand that the Aadhaar number and core biometrics will not be stored/ shared except as per law and for CIDR submission. I have downloaded the e-Aadhaar myself using the OTP received on my Aadhaar registered mobile. I will not hold Bank of India or its officials responsible in the event this document is not found to be in order and / or in case of any incorrect information provided by me. I am aware that for e-KYC/authentication/offline verification, Bank will share Aadhaar number and/or biometrics with CIDR/UIDAI, and CIDR/UIDAI will share with Bank, authentication data, Aadhaar data, demographic details, registered mobile number, identity information, which shall be used for the informed purpose mentioned below and I hereby give my irrevocable consent for the same. I authorize and give my consent to Bank of India (and its service providers), for following purposes: a. KYC and periodic KYC process as per the Prevention of Money Laundering Act, 2002 and rules thereunder and / or RBI guidelines, for establishing my identity, carrying out my identification, offline verification or e-KYC or Yes/No authentication/demographic or other authentication/verification/identification as may permitted as per applicable law, for all account, facilities, services, and relationship of/through the Bank, existing and future. b. collecting, sharing, storing, preserving Information, maintaining records, and using the Information and /or authentication/verification/identification records: (a) for the informed purposes above, and /or (b) as well as for regulatory and legal reporting and filings and/or (c) where required under applicable law, rules, regulations: c. enabling my account for Aadhaar enabled Payment Services (PLEPS) d. producing records and logs of the consent, Information, Authentication, identification, verification etc. for evidentiary purposes including before a court of law, any statutory, Regulatory authority or in arbitration.",
              isMultiLabel: false,
              completed: null,
            },
          ],
        },
      },
    },
  ];

  breadCrumbList = [
    {
      name: "home",
      label: "Home",
      url: "/1/landing",
      isActive: true,
    },
    // {
    //     name: 'trackStatus',
    //     label:'Track Status',
    //     url: '/1/landing',
    //     isActive: false
    //   },
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
  productDesc = {
    "CCA": [{
      id: 'credit-card',
      name: 'Credit Card',
      info: '',
      color: '#197DFC',
      description: 'Experience Financial Freedom like never before, with rewards, perks and benefits tailored just for you. Apply now to seize this opportunity and embark on a journey of financial empowerment. Don’t miss out this chance to make every purchase count. Your dreams await, apply today.'
    }]
  };

  productDescInfoTabs = {};

  pageSequenceData = {
    CCA: {

      'journeyPages': {
        individual: [
          {
            pageCode: 'PRODUCT_DESCRIPTION',
            pageName: 'Description',
            status: null,
            subStatus: null,
            subStatusChangeDescription: null,
            url: 'basicinfo/choose-loan',
            lastPage: false,
            pageIndex: 0,
            resumeJourneySequences: []
          },
          {
            pageIndex: 0,
            pageCode: 'ACCOUNT_VERIFY',
            pageName: 'ACCOUNT_VERIFY',
            status: 'INITIALIZED',
            subStatus: 'SUB_STATUS_1',
            lastPage: false,
            subStatusChangeDescription: 'Account Number Verified',
            url: 'basicinfo/account-number-verification',
            resumeJourneySequences: []
          },
          {
            pageIndex: 1,
            pageCode: 'CHOOSE_CC',
            pageName: 'Credit Card Selection',
            status: 'INITIALIZED',
            subStatus: 'SUB_STATUS_4',
            subStatusChangeDescription: 'More Info Verification Completed',
            lastPage: false,
            url: 'cards/cc-details',
            resumeJourneySequences: []

          }, {
            pageIndex: 2,
            pageCode: 'CC_DECLARATION',
            pageName: 'Declaration',
            status: 'INITIALIZED',
            subStatus: 'SUB_STATUS_5',
            subStatusChangeDescription: 'Consent Declaration',
            lastPage: false,
            url: 'cards/ccdeclaration',
            resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_4']]

          },
          {
            pageIndex: 3,
            pageCode: "MORE_INFO",
            pageName: "Personal Information",
            subStatus: [
              {
                subStatus: "SUB_STATUS_5",
                subStatusChangeDescription: "Consent Declaration",
              },
              {
                subStatus: "SUB_STATUS_8",
                subStatusChangeDescription: "Pan verification",
              },
            ],
            url: "cards/more-info",
            resumeJourneySequences: [["INITIALIZED", "SUB_STATUS_5"], ["INITIALIZED", "SUB_STATUS_6"], ["INITIALIZED", "SUB_STATUS_7"], ["INITIALIZED", "SUB_STATUS_8"], ["INITIALIZED", "SUB_STATUS_9"]],
          },
          {
            pageIndex: 4,
            pageCode: 'EMPLOYMENT_DETAILS',
            pageName: 'Employment Details',
            status: 'DOCUMENTATION_COMPLETE',
            subStatus: 'SUB_STATUS_9',
            lastPage: false,
            subStatusChangeDescription: null,
            url: 'cards/employment',
            resumeJourneySequences: [['AWAITING_APPROVAL_L4', 'SUB_STATUS_1']]


          },
          {
            pageIndex: 5,
            pageCode: 'ADD_ON_CARD',
            pageName: 'Add On Card Detail',
            status: 'DOCUMENTATION_COMPLETE',
            subStatus: 'SUB_STATUS_2',
            lastPage: false,
            subStatusChangeDescription: "Add on details",
            url: 'cards/add-on-card',
            resumeJourneySequences: [['AWAITING_APPROVAL_L21', 'SUB_STATUS_1']]
          },
          {
            pageIndex: 6,
            pageCode: 'DOCUMENT_LIST',
            pageName: 'Upload Documents',
            status: 'INITIALIZED',
            subStatus: "SUB_STATUS_3",
            lastPage: false,
            subStatusChangeDescription: "Document details",
            url: 'cards/document-list',
            resumeJourneySequences: [['AWAITING_APPROVAL_L21', 'SUB_STATUS_2']]
          },
          {
            pageIndex: 7,
            pageCode: 'JOURNEY_PREVIEW',
            status: '',
            pageName: 'Verify Your Details',
            subStatus: '',
            subStatusChangeDescription: '',
            url: 'cards/preview-page',
            resumeJourneySequences: [['AWAITING_APPROVAL_L21', 'SUB_STATUS_3']]
          },
          {
            pageIndex: 8,
            pageCode: "CC_SUMMARY",
            pageName: "Personal Information",
            status: "INITIALIZED",
            subStatus: "SUB_STATUS_4",
            subStatusChangeDescription: "Aadhaar Verification Completed",
            lastPage: false,
            url: "cards/cc-summary",
            resumeJourneySequences: [["AWAITING_APPROVAL_L6", "SUB_STATUS_1"], ["AWAITING_APPROVAL_L23", "SUB_STATUS_1"]],
          },
          {
            pageIndex: 9,
            pageCode: "CONGRATULATIONS",
            pageName: "Personal Information",
            status: "INITIALIZED",
            subStatus: "SUB_STATUS_4",
            subStatusChangeDescription: "Aadhaar Verification Completed",
            lastPage: false,
            url: "cards/congratulations",
            resumeJourneySequences: [],
          },
        ],
        company: [],
        group: []
      },
      'otherPages': {
        'individual': [
          {
            pageIndex: 1,
            pageCode: 'PRODUCT_ERROR',
            pageName: 'Product error',
            url: 'cards/product-error',
            resumeJourneySequences: []
          },
          {
            pageIndex: 2,
            pageCode: 'MOBILE_VERIFY',
            pageName: 'Resume your Application',
            url: 'basicinfo/mobile-verify',
            resumeJourneySequences: []
          },
        ],
        "company": []
      }
    }
  };

  stepperData = {
    CCA: {
      "individual": [
        {
          "name": "Basic Information, Card Selection & Declaration",
          "info": "10MinVerifyYou",
          "isActive": true,
          "isCompleted": false,
          "subStep": [
            {
              "id": "001",
              "pageCode": "ACCOUNT_VERIFY",
              "name": "Basic Information",
              "isActive": false,
              "isCompleted": false
            },
            {
              "id": "002",
              "pageCode": "CHOOSE_CC",
              "name": "Card Selection",
              "isActive": false,
              "isCompleted": false
            },
            {
              "id": "003",
              "pageCode": "CC_DECLARATION",
              "name": "",
              "isActive": false,
              "isCompleted": false
            },
          ]
        },
        {
          "name": "Borrower, Employment & Add on Card Details",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "subStep": [
            {
              "id": "001",
              "pageCode": "MORE_INFO",
              "isActive": false,
              "name": "Borrower information",
              "isCompleted": false
            },
            {
              "id": "002",
              "pageCode": "EMPLOYMENT_DETAILS",
              "isActive": false,
              "name": "Employment Information",
              "isCompleted": false
            },
            {
              "id": "003",
              "pageCode": "ADD_ON_CARD",
              "isActive": false,
              "name": "Add on Card Details",
              "isCompleted": false
            }
          ]
        },
        {
          "name": "Document",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
        },
        {
          "name": "Acknowledgement",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false
        }
      ]
      ,
      'company': [],
      'group': []
    }
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
    CCA: {
      "individual": [{
        "name": "Account Number",
        "info": "10MinVerifyYou",
        "isActive": false,
        "isCompleted": false,
        "pageCode": 'ACCOUNT_VERIFY',
      },
      {
        "name": "Credit Card Selection",
        "info": "10MinVerifyYou",
        "isActive": false,
        "isCompleted": false,
        "pageCode": 'CHOOSE_CC'
      },
      {
        "name": "Declaration",
        "info": "10MinVerifyYou",
        "isActive": false,
        "isCompleted": false,
        "pageCode": 'CC_DECLARATION'
      },
      ]
      ,
      'company': [],
      'group': []
    }
  };

  tabsData = {
    CCA: [
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
              label: 'Aadhar Card',
              icon: 'assets/icons/aadhaar.png'
            },
            {
              label: 'GST',
              icon: 'assets/icons/gst.png'
            },
            {
              label: 'ITR',
              icon: 'assets/icons/itr.png'
            },
          ]
        },
      },
      {
        displayType: 'bulletPoints',
        name: 'features',
        label: 'Features',
        displayData: [
          'Card valid in India, Nepal and at all foreign centers across the GLOBE, wherever MASTER logo is displayed.',
          'Maximum amount of cash limit is 50% of the spending limit.',
          'Maximum amount of cash that can be withdrawn from - ATM - Rs. 15,000 per day.',
          'Billing cycle is from 16th of current month to 15th of next month.',
          'Payment is to be made on or before 5th of succeeding month which mostly suits the requirement of salaried class.',
          'EMI at POS facility is available on POS that are managed/owned by M/S WorldLine Private Limited.',
          'Flexible credit limits for add-on cards.',
          'Reward programme on card usage.',
        ]
      }
    ]
  };

  pageSectionConfig = {
    CCA: {
      'individual': {
        "CUSTOMER_TYPE": [
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "common-info",
            "sectionContent": {
              "isShow": true,
              "endLinks": [{
                "label": "Resume your Journey",
                "linkType": "REDIRECT",
                "url": 'credit-card/basicinfo/mobile-verify?resumeJourney=true'
              }
              ],
              "paragraphData": "Already Applied?",
              "subContent": "Resume your Application"
            },

          },
          {
            "componentType": "TITLE",
            "className": "mt-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Welcome!"
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "mandatory": true,
            "className": 'large mt15',
            "sectionContent": {
              "options": { 'columnSize': 1 },
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "BUTTON_TOGGLE",
                  "otpType": 'PHONE', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                  "isMandatory": false,
                  "fieldLabel": "Identify Yourself",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                  "fieldName": "identifyYourself",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "isVertical": true,
                  "options": [
                    {

                      "optionCode": "NC",
                      "optionKey": "NewCustomer",
                      "optionName": "I'm a New Customer",
                      "optionParentCode": "-",
                      "optionParentPropertyType": null,
                      "optionValue": "",
                      "icon": "newCustomer",
                      "sortIndex": 0
                    },
                    {
                      "optionCode": "EC",
                      "optionKey": "ExistingCustomer",
                      "optionName": " I'm an Existing Customer",
                      "optionParentCode": "-",
                      "optionParentPropertyType": null,
                      "optionValue": "",
                      "icon": "existingCustomer",
                      "sortIndex": 1
                    }
                  ]
                },

              ],
              validityEmitter: new Subject<void>(),
              formValueEmitter: new Subject<void>()
            }
          }

        ],
        "ACCOUNT_VERIFY": [
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "common-info mb-10",
            "sectionContent": {
              "isShow": true,
              "endLinks": [{
                "label": "Resume your Application",
                "linkType": "REDIRECT",
                "url": 'basicinfo/mobile-verify?resumeJourney=true'
              }
                // {
                //   "label":"application",
                //   "linkType":"POPUP",
                //   "popupContent":{
                //     "label":"popupContentLabel",
                //     "content":[{ id: 1, value: 'The loan is repayable on demand and should be secured by pledge of Gold Jewellery/Ornaments/Coins. Bank may, at its sole discretion, allow the Borrower to repay the loan in installments, if a request is made by Borrower in this regard, without prejudice to the right of the Bank to recall/demand payment of the entire dues under the loan at any time'},]
                //   }
                // },
              ],
              "paragraphData": "Already Applied?",
              "subContent": "Resume your Application"
            },

          },
          {
            "componentType": "TITLE",
            "validateSection": false,
            "mandatory": false,
            "className": "mb-1",
            "sectionContent": {
              "isShow": true,
              "titleData": "Account Number Verification"
            }
          },
          {
            "validateSection": false,
            "mandatory": false,
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, provide your Account Number to get started.",
            },
          },

          {
            "componentType": "FORM",
            "validateSection": true,
            "mandatory": true,
            "className": "medium",
            "sectionContent": {
              "options": { 'columnSize': 1 },
              "isShow": true,
              "fields": [
                {

                  "fieldDataType": "NUMBER",
                  "Masking": true,
                  "isMandatory": true,
                  "fieldLabel": "Enter your Account Number",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": 0,
                  "maxLength": 999999999999999,
                  "error": null,
                  "value": null,
                  "dataMasking":true,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "isAccountNumber": true,
                  "placeholderText": "Enter 15 digit Account Number",
                  "fieldName": "accountNumber",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": true,
                  "onlyNumber": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Is 9999999 your Mobile Number?",
                  "fieldAccessModifier": "EDITABLE",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "mobileConsent",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": false
                },
              ],
              validityEmitter: new Subject<void>(),
              formValueEmitter: new Subject<void>()
            }
          },
          {
            "componentType": "CONSENT",
            "validateSection": true,
            "mandatory": true,
            "className": "consent-text",
            "sectionContent": {
              "config": {
                "options": [{
                  "consentType": "APIFETCH",  //STATIC,APIFETCH
                  "consentCode": "DND_CONSENT_CC",
                  "submitConsentCodes": ['DND_CONSENT_CC', 'PRIVACY_POLICY_CC'],
                  label: null,
                  "isMultiLabel": false,
                  "className": "check-container",
                  "completed": null,
                }]
              },
              "isShow": true,
              "showField": true,
            },
          },
          {
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
            "validateSection": false,
            "sectionContent": {
              "paragraphData": "A 6 digit OTP has been sent to the above Mobile Number.",
              "isShow": false
            }
          },
          {
            'componentType': 'OTP',
            "validateSection": false,

            "sectionContent": {
              "fields": {
                "fieldDataType": "OTP",
                "otpType": 'MOBILE', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                "isMandatory": true,
                "fieldLabel": "Enter Mobile OTP",
                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                "otpDataType": 'NUMBER',
                "otpAttempts": 3,
                "waitTimeInSeconds": 120
              },
              "options": {
                'value': null,
                'transactionId': null,
                'notificationType': 'COMMON_OTP_TWO',
                'loanProduct': null,
                'createBorrower': true,
                'generateOtp': true,
                /* 'journeyEventCode': 'ACCOUNT_VERIFY' */
              },
              "isShow": false,
            }
          },
        ],
        "MOBILE_VERIFY": [{
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
              "paragraphData": "Please provide your mobile number to get started. We recommend providing mobile no registered with Aadhaar for quicker processing of your application",

          },

      },

      {
          "componentType": "FORM",
          "className": "medium",
          "validateSection": true,
          "sectionContent": {
              "options": { 'columnSize': 1 },
              "isShow": true,
              "fields": [
                  {

                      "fieldDataType": "MOBILE_NO",
                      "isMandatory": true,
                      "fieldLabel": "Enter Mobile number",
                      "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                      "minLength": 10,
                      "maxLength": 10,
                      "error": null,
                      "value": null,
                      "dataMasking":true,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": "^[1-9][0-9]{9}$",
                      "countryCode": "+91",
                      "regexErrorMessage": "Please enter a valid Mobile Number.",
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "Enter 10 digit Mobile Number",
                      "fieldName": "mobileNumber",
                      "labelInfo": null,
                      "showLabel": true,
                      "groupName": null,
                      "groupIndex": null,
                      "showField": true,
                      "isEditableOnDisable": true
                  },
              ],
              validityEmitter: new Subject<void>(),
              formValueEmitter: new Subject<void>()
          }
      },
      {
          "componentType": "CONSENT",
          "validateSection": true,
          "className": "consent-text",
          "sectionContent": {
              "config": {
                  "options": [{
                      "consentType": "APIFETCH",  //STATIC,APIFETCH
                      "consentCode": "DND_CONSENT_CC",
                      "submitConsentCodes": ['DND_CONSENT_CC','PRIVACY_POLICY_CC'],
                      label: null,
                      "className": "check-container",
                      "completed": null,
                  },
                  ]
              },
              "isShow": true,
              "showField": true,
          },
      },
      {
          'componentType': 'OTP',
          "sectionContent": {
              "fields": {
                  "fieldDataType": "OTP",
                  "otpType": 'MOBILE', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                  "isMandatory": true,
                  "fieldLabel": "Enter Mobile OTP",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                  "otpDataType": 'NUMBER',
                  "otpAttempts": 3,
                  "waitTimeInSeconds": 120,
                  "infoText": "A 6 digit OTP has been sent to the above number",
              },
              "options": {
                  'value': null,
                  'notificationType': 'COMMON_OTP_TWO',
                  'loanProduct': null,
                  'createBorrower': true,
                  'generateOtp': true,
              }, "isShow": false,

          }
      },
        ],
        "CHOOSE_CC": [
          {
            "componentType": "TITLE",
            "sectionContent": {
              "titleData": "Credit Card Selection",
              "isShow": true,
            },
            "className": " mb-0 "
          },
          {
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
            "validateSection": false,
            "sectionContent": {
              "paragraphData": "Please, select Credit Card and fill details.",
              "isShow": true
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": ".font-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
            "validateSection": false,
            "sectionContent": {
              "paragraphData": "Credit Card Selection",
              "isShow": true
            }
          },
          // {
          //   "componentType": "TITLE",
          //   "sectionContent": {
          //     "titleData": "Credit Card Selection",
          //     "isShow": true,
          //   },
          //   "className": " mb-0 "
          // },
          /* {
            "componentType": "PARAGRAPH",
            "sectionContent": {
              "paragraphData": "Compare Card Charges",
              "isShow": true,
            },
            "className": "card-text underscore-orange compare-card"
          }, */
          // {
          //   "componentType": "CONSENT",
          //   "validateSection": false,
          //   "className": "card-text underscore-orange compare-card",
          //   "mandatory": false,
          //   "sectionContent": {
          //     "config": {
          //       "hideCheckBox": false,
          //       "options": [
          //         {
          //           "consentType": "STATIC",
          //           "consentCode": null,
          //           "endLinks": [
          //             {
          //               "label": "Compare Card Charges",
          //               "height": "70%",
          //               "width": "70%",
          //               "linkType": "POPUP",
          //               "popupContent": [{
          //                 "componentType": "HTML_CONTENT",
          //                 "sectionContent": {
          //                   "isShow": true,
          //                   "htmlData": `
          //                                           <p><span style=\"font-size: 13pt;\"><strong>Schedule of Charges:</strong></span></p>
          //                                           \r\n
          //                                           <p>Entrance Fee, Anual Membership Fees and Replacement Card Charges without GST.</p>
          //                                           \r\n<table class=\"table table-responsive table-borderless\" style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\r\n
          //                                           <thead>
          //                                             \r\n
          //                                             <tr class=\"bg-light\">
          //                                               \r\n<th style=\"width: 15.5267%;\"><strong>Card</strong></th>\r\n<th style=\"width: 17.8067%;\"><strong>Type</strong></th>\r\n<th style=\"width: 16.6667%;\"><strong>Entrance Fee</strong></th>\r\n<th style=\"width: 16.6667%;\">\r\n
          //                                               <p><strong>Annual Membership Fee</strong></p>
          //                                               \r\n
          //                                               <p><strong>Principle&nbsp;</strong></p>
          //                                               \r\n</th>\r\n<th style=\"width: 16.6667%;\">\r\n
          //                                               <p><strong>Annual Membership Fee</strong></p>
          //                                               \r\n
          //                                               <p><strong>Add-On</strong></p>
          //                                               \r\n</th>\r\n<th style=\"width: 16.6667%;\">\r\n
          //                                               <p><strong>Replacement Charges&nbsp;</strong></p>
          //                                               \r\n
          //                                               <p><strong>Principle/Add-on</strong></p>
          //                                               \r\n</th>\r\n
          //                                             </tr>
          //                                             \r\n
          //                                           </thead>
          //                                           \r\n
          //                                           <tbody>
          //                                             \r\n
          //                                             <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;India Card</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
                                                      
          //                                             <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;SwaDhan Rupay Platinum</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n</tr>
                                                      
          //                                             <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Gold Card International – Visa</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
                                                      
          //                                             <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Rupay Platinum</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;0</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
                                                      
          //                                               <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Visa Platinum-international</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
                                                        
          //                                                 <tr class=\"tablebottom\">\r\n<td style=\"width: 15.5267%;\">&nbsp;Master Platinum-international</td>\r\n<td style=\"width: 17.8067%;\">&nbsp;Credit</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 1000</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 1000</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 500</td>\r\n<td style=\"width: 16.6667%;\">&nbsp;Rs. 300</td>\r\n</tr>
          //                                             \r\n
          //                                           </tbody>
          //                                           \r\n</table>
                                                    
          //                                           \r\n
          //                                           <p><strong>Note: Issuance and Annual charges in respect of all cards are exempt for the following categories:</strong></p>
          //                                           \r\n
          //                                           <ol>
          //                                             \r\n
          //                                             <ol>
          //                                               \r\n
          //                                               <li>Staff/Ex-Staff</li>
          //                                               \r\n
          //                                               <li>Senior Citizen</li>
          //                                               \r\n
          //                                             </ol>
          //                                             \r\n
          //                                           </ol>
          //                                           \r\n`
          //                 }
          //               }]
          //             }
          //           ]
          //         }
          //       ]
          //     },
          //     "isShow": true,
          //     "showField": true
          //   }
          // },
          {
            "componentType": "CARD",
            "sectionContent": {
              "titleData": "Credit Card Selection",
              "isShow": true,
              "config": {
                "cardsData": []
              }
            },
            "className": " mb-0",
          },
          {
            "componentType": 'TABLE',
            "className": "mb-5",
            "validationJson": {
              "showSection": {
                "if": [
                  {
                    "and": [
                      {
                        "==": [
                          {
                            "var": "$scope.fetchFDAccountsDetails.code"
                          },
                          "200"
                        ]
                      },
                      {
                        "!=": [
                          {
                            "var": "$scope.fetchFDAccountsDetails.accountList.length"
                          },
                          0
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
              "config": {
                "title": "Existing FD Details",
                "showRecordActions": false,
                "showSerialNo": true,
                "showFooterAction": false,
                "showFooterCalculations": true,
                "showCheckBox": true,
                "footerActionLabel": "+ Add New Borrower",
                headers: [{ fieldLabel: "FD Account", fieldName: "termDepositAccNum", "masking":true }, { fieldLabel: "₹ FD Limit", fieldName: "depositAmount", "currency":true }, { fieldLabel: "FD Maturity Date", fieldName: "maturityDate", "dateFormat":true }],
                data: []
              }
            }
          },
          {
            "componentType": "TITLE",
            "sectionContent": {
              "titleData": "Existing FD Details",
              "isShow": true,
            },
            "className": "mb-0 f-16",
            "validationJson": {
              "showSection": {
                "if": [
                  {
                    "and": [
                      {
                        "==": [
                          {
                            "var": "$scope.fetchFDAccountsDetails.code"
                          },
                          "200"
                        ]
                      },
                      {
                        "!=": [
                          {
                            "var": "$scope.fetchFDAccountsDetails.accountList.length"
                          },
                          0
                        ]
                      },
                    ]
                  },
                  false,
                  true
                ]
              }
            },
          },
          {
            "componentType": "PARAGRAPH",
            "className": "font-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
            "validateSection": false,
            "validationJson": {
              "showSection": {
                "if": [
                  {
                    "and": [
                      {
                        "==": [
                          {
                            "var": "$scope.fetchFDAccountsDetails.code"
                          },
                          "200"
                        ]
                      },
                      {
                        "!=": [
                          {
                            "var": "$scope.fetchFDAccountsDetails.accountList.length"
                          },
                          0
                        ]
                      },
                    ]
                  },
                  false,
                  true
                ]
              }
            },
            "sectionContent": {
              "paragraphData": "There are no FD Account Detail(s) to be displayed",
              "isShow": true
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                mapSupplyData: true,
              },
              "isShow": true,
              "fields":
                [
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Credit Card Type",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": 256,
                    "error": null,
                    "value": null,  //TEMPORARY
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Credit Card Information",
                    "groupIndex": 1,
                    "placeholderText": "Selected Card Type",
                    "fieldName": "selectedCreditCardType",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Name to be Embossed on Card",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 18,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "Credit Card Information",
                    "groupIndex": 1,
                    "placeholderText": "Name on Card",
                    "fieldName": "borrowerDetailTextVariable65",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "onlyText":true,
                  }
                ]
            }
          },
          {
            "componentType": "TITLE",
            "className": 'f-16 mt15',
            "validateSection": false,
            "mandatory": false,
            "sectionContent": {
              "titleData": "Existing Card Details",
              "isShow": true
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "validateSection": false,
            "className": "mb-30 ml-5 text-info",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "There are no Credit Card(s) to be displayed",

            }
          },
        ],
        "CC_DECLARATION": [
          {
            "componentType": "TITLE",
            "className": "mb-5",
            "validateSection": false,
            "mandatory": false,
            "sectionContent": {
              "titleData": "Declaration",
              "isShow": true
            }
          },
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, read and declare before submiting"
            }
          },
          {
            "componentType": "TITLE",
            "className": "f-16",
            "validateSection": false,
            "mandatory": false,
            "sectionContent": {
              "titleData": "I here by provide my consent for",
              "isShow": true
            }
          },
          {
            "componentType": "CONSENT",
            "validateSection": true,
            "mandatory": true,
            "className": "para-padding mt-20",
            "sectionContent": {
              "config": {
                "options": [
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "BUREAU_CONSENT_CC",
                    "label": null,
                    "className": "check-container",
                    "completed": null,
                    "submitConsentCodes": [
                      "BUREAU_CONSENT_CC"
                    ],
                  },
                  {
                    "consentType": "STATIC",
                    "consentCode": null,
                    "submitConsentCodes": [
                      "TERMS_AND_CONDITIONS_CONSENT_CC",
                      "PRIVACY_POLICY_CC",
                      "DISCLAIMER_CC"
                    ],
                    "label": "I agree to",
                    "isMultiLabel": false,
                    "className": "w-100",
                    "completed": null,
                    "endLinks": [
                      {
                        "label": "Terms & Conditions,",
                        "linkType": "REDIRECT",
                        "consentCode": "TERMS_AND_CONDITIONS_CONSENT_CC",
                        "popupContent": [],
                      },
                      {
                        "label": "Privacy Policy",
                        "linkType": "POPUP",
                        "consentCode": "PRIVACY_POLICY_CC",
                        "popupContent": [],
                      },
                      {
                        "label": "&",
                        "isMultiLabel": false,
                        "className": "check-container",
                        "completed": null
                      },
                      {
                        "label": "Disclaimer.",
                        "linkType": "POPUP",
                        "consentCode": "DISCLAIMER_CC",
                        "popupContent": [],
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
        "MORE_INFO": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "sectionContent": {
              "titleData": "Tell us more about you",
              "isShow": true
            }
          },
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, * fill in the mandatory details."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "sectionContent": {
              "options": { 'columnSize': 3, 'journeyEventCode': 'MORE_INFO', mapSupplyData: true, mapAndDisable: true }, /**mapSupplyData: true, mapAndDisable: true flag used to map the data */
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "First Name",
                  "fieldAccessModifier": "EDITABLE",
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "firstName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  'prefixfieldAccessModifier': 'EDITABLE',
                  'prefixCommonProperty': 'TITLE',
                  "includePrefixtoFormValue": true,
                  "prefixfieldName": "title",
                  "prefixType": 'DROPDOWN',
                  "prefix": null,
                  "showprefix": true,
                  "prefixplaceholderText": 'Title'
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Middle Name",
                  "fieldAccessModifier": "EDITABLE",
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "middleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Last Name",
                  "fieldAccessModifier": "EDITABLE",
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "lastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "DOB",
                  "fieldAccessModifier": "EDITABLE",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 1,
                  "placeholderText": "Enter your Date of Birth",
                  "fieldName": "dateOfBirth",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Gender",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "options": this.commonProperty_static.GENDER,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "gender",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'MARITAL_STATUS',
                  "fieldLabel": "Marital Status",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": ['borrowerDetailTextVariable10'],
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Marital Status",
                  "fieldName": "maritalStatus",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Father's Name",
                  "fieldAccessModifier": "EDITABLE",
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailTextVariable6",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "editableForCbs": true,
                  "onlyText":true,
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "No of Dependent(s)",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 0,
                  "maxLength": 5,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "numberOfDependents",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "onlyNumber": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'EDUCATION_TYPE',
                  "fieldLabel": "Education Qualification",
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
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Education Qualification",
                  "fieldName": "educationType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
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
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Coapplicant Information",
                  "groupIndex": 1,
                  "placeholderText": "Employment Type",
                  "fieldName": "borrowerEmploymentType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Nationality",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": { 'default': 'INDIAN' },
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Nationality",
                  "fieldName": "citizenship",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "commonpropertyType": 'RESIDENT_OWNERSHIP_TYPE',
                  "isMandatory": true,
                  "fieldLabel": "Residental Status",
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
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Residental Status",
                  "fieldName": "residentOwnershipType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "commonpropertyType": 'BORROWER_DETAIL_VARIABLE11',
                  "isMandatory": true,
                  "fieldLabel": "Religion",
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
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Religion",
                  "fieldName": "borrowerDetailTextVariable11",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_DETAIL_VARIABLE21',
                  "fieldLabel": "Social Category",
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
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Social Category",
                  "fieldName": "borrowerDetailTextVariable21",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Name as per PAN",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 0,
                  "maxLength": 80,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "disable": {
                      "if": [
                        {
                          "==": [
                            {
                              "var": "identityNumberTwo"
                            },
                            null
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
                  "maxDate": [
                    null,
                    null,
                    null,
                    true
                  ],
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "disable": {
                      "if": [
                        {
                          "==": [
                            {
                              "var": "identityNumberTwo"
                            },
                            null
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
                  "fieldDataType": "PAN_CARD",
                  "isMandatory": true,
                  "verificationType": "PAN_V3",
                  "fieldLabel": "PAN Number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 12,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": ["panholdername", "panholderdob"],
                  "regex": "[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$",
                  "dataMasking": true,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Pan number",
                  "fieldName": "identityNumberTwo",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "",
                  "groupIndex": 1,
                  "showField": true,
                  "externalValidate": false,
                  "journeyEventCode": "PAN_VERIFY",
                  "WrapperclassName": "mob-w-100",
                  "options": {
                    "extraParams": {}
                  }
                },
                // {
                //   "fieldDataType": "TEXT",
                //   "isMandatory": true,
                //   "fieldLabel": "PAN Number",
                //   "fieldAccessModifier": "READ_ONLY",
                //   "minLength": 6,
                //   "maxLength": 15,
                //   "dataMasking":true,
                //   "error": null,
                //   "value": null,
                //   "validationJson": null,
                //   "rulesFor": null,
                //   "regex": null,
                //   "regexErrorMessage": null,
                //   "rowNo": null,
                //   "columnNo": null,
                //   "groupName": "",
                //   "groupIndex": 1,
                //   "placeholderText": "Borrower Information",
                //   "fieldName": "identityNumberTwo",
                //   "verificationType": true,
                //   "labelInfo": null,
                //   "showLabel": true,
                //   "showField": true,
                // },
                //Aadhaar Number
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Aadhaar number",
                  "dataMasking":true,
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
                  "placeholderText": "Aadhaar number",
                  "fieldName": "identityNumberOne",
                  "EditableOnDisable":false,
                  /* "labelInfo": "Enter Borrower Email Id for further Communication", */
                  "showLabel": true,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "showField": true,
                  "consentPopUp": true,
                  "consentPopUpConfig":[
                    {
                      componentType: "PARAGRAPH",
                      mandatory: false,
                      className: "title-wrapper",
                      validateSection: true,
                      sectionContent: {
                        isShow: true,
                        paragraphData: "Kindly Read and Submit The Consent",
                      },
                    },
                    {
                      componentType: "CONSENT",
                      mandatory: true,
                      className: "title-wrapper",
                      validateSection: true,
                      sectionContent: {
                        isShow: true,
                        config: {
                          options: [
                            {
                              consentType: "APIFETCH",
                              consentCode: "AADHAR_CONSENT_CC",
                              submitConsentCodes: ["AADHAR_CONSENT_CC"],
                              label:null,
                              "className": "check-container",
                              completed: null,
                            }
                          ],
                        },
                      },
                    },
                  ],
                  "verificationType": 'AADHAR',
                  "verificationFieldName": 'aadharOtp',
                  "dontShowSnackBar": true,
                  "alwaysReadOnly": true
                }, {
                  "fieldDataType": "OTP",
                  "otpType": 'AADHAR', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                  "isMandatory": true,
                  "fieldLabel": "Enter Aadhaar OTP",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "aadharOtp",
                  "labelInfo": null,
                  "showLabel": false,
                  "showField": false,
                  "OtpMasking": true,
                  "otpDataType": 'NUMBER',
                  "otpAttempts": 3,
                  "excludeToFormValue": true,
                  "waitTimeInSeconds": 120,
                  "options": {
                    'value': null,
                    'notificationType': 'COMMON_OTP_TWO',
                    'loanProduct': null,
                    'createBorrower': true,
                    'generateOtp': true,
                    'className': 'w-100',
                    'journeyEventCode': 'AADHAR_VERIFY',
                    "callNameMatch": true
                  }
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Are you physically challenged person ?",
                  "fieldAccessModifier": "EDITABLE",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": { "default": 'NO' },
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable26",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Miscellaneous Details',
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Are you an Ex-serviceman ?",
                  "fieldAccessModifier": "EDITABLE",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": { "default": 'NO' },
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable23",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Miscellaneous Details',
                  "groupIndex": 2,
                  "showField": true
                },
                //contact information
                {
                  "fieldDataType": "MOBILE_NO",
                  "isMandatory": true,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
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
                  "columnNo": null,
                  "dataMasking":true,
                  "placeholderText": "Mobile Number",
                  "fieldName": "mobileNumber",
                  "isEditableOnDisable": false,
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 3,
                  "showField": true,
                  "showCountryCode": false
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Personal Email ID",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "dataMasking":true,
                  "rulesFor": null,
                  "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  "regexErrorMessage": 'Invalid Email id',
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "alternativeUsername",
                  "EditableOnDisable":true,
                  /* "labelInfo": "Enter Borrower Email Id for further Communication", */
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 3,
                  "showField": true,
                  "verificationType": 'EMAIL',
                  "verificationFieldName": 'emailOtp',
                  "alwaysReadOnly": false
                }, {
                  "fieldDataType": "OTP",
                  "otpType": 'EMAIL', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                  "isMandatory": true,
                  "fieldLabel": "Enter Email OTP",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                  "groupName": "Contact Information",
                  "groupIndex": 3,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "emailOtp",
                  "labelInfo": null,
                  "showLabel": false,
                  "showField": false,
                  "OtpMasking": true,
                  "otpDataType": 'NUMBER',
                  "otpAttempts": 3,
                  "excludeToFormValue": true,
                  "waitTimeInSeconds": 120,
                  "options": {
                    'value': null,
                    'notificationType': 'COMMON_OTP_TWO',
                    'loanProduct': null,
                    'createBorrower': true,
                    'generateOtp': true,
                    'className': 'w-100',
                    'journeyEventCode': 'EMAIL_VERIFY'
                  }
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Where do you wish to receive your Card ?",
                  "fieldAccessModifier": "EDITABLE",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": [{
                    "optionKey": "Permanent_Address",
                    "optionName": "Permanent Address",
                    "optionValue": "Permanent Address"
                  },
                  {
                    "optionKey": "Communication_Address",
                    "optionName": "Communication Address",
                    "optionValue": "Communication Address"
                  }],
                  "validationJson": { "default": 'Communication_Address' },
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable73",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Choose Delivery Address',
                  "groupIndex": 4,
                  "showField": true
                },
                {
                  "fieldDataType": "ADDRESS",
                  "fieldLabel": "Permanent Address",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": "asdsfdsfsd",
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "personalAddress",
                  "showLabel": false,
                  "showField": true,
                  "groupName": "Permanent Address",
                  "groupIndex": 5,
                  "addressFields": [
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "Address Line 1",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 256,
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
                      "minLength": 6,
                      "maxLength": 256,
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
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "",
                      "fieldName": "line3",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": false,
                      "fieldLabel": "Landmark",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "",
                      "fieldName": "subDistrict",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "Pincode",
                      "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                      "commonpropertyType": "PINCODE",
                      "minLength": null,
                      "maxLength": 999999,
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
                      "placeholderText": "Enter Pincode",
                      "fieldName": "zipCode",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "City",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                      "minLength": null,
                      "maxLength": null,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "onlyText":true,
                      "rowNo": null,
                      "columnNo": null,
                      "groupName": null,
                      "groupIndex": null,
                      "placeholderText": "",
                      "fieldName": "city",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "State",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
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
                      "groupName": null,
                      "groupIndex": null,
                      "placeholderText": "Select State",
                      "fieldName": "state",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "columnNo": 2,
                      "dependentField": null,
                      "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                      "fieldDataType": "DROPDOWN",
                      "fieldLabel": "Address Type",
                      "fieldName": "ownershipType",
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
                      "showLabel": true
                    },
                    {
                      "fieldDataType": "DATE",
                      "isMandatory": true,
                      "fieldLabel": "Residing Since",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 15,
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
                  ]
                },
                {
                  "fieldDataType": "ADDRESS",
                  "fieldLabel": "Communication Address",
                  "fieldAccessModifier": "EDITABLE",
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
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "permanentAddress",
                  "showLabel": false,
                  "showField": true,
                  "groupName": "Communication Address",
                  "groupIndex": 6,
                  "addressFields": [
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "Address Line 1",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 256,
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
                      "minLength": 6,
                      "maxLength": 256,
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
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "",
                      "fieldName": "addressOneLine3",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": false,
                      "fieldLabel": "Landmark",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "",
                      "fieldName": "addressOneSubDistrict",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "Pincode",
                      "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                      "commonpropertyType": "PINCODE",
                      "minLength": null,
                      "maxLength": 999999,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": ['state', 'city'],
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
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "City",
                      "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                      "groupName": null,
                      "groupIndex": null,
                      "onlyText":true,
                      "placeholderText": "",
                      "fieldName": "addressOneCity",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "State",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
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
                      "groupName": null,
                      "groupIndex": null,
                      "placeholderText": "Select State",
                      "fieldName": "addressOneState",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "columnNo": 2,
                      "dependentField": null,
                      "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                      "fieldDataType": "DROPDOWN",
                      "fieldLabel": "Address Type",
                      "fieldName": "addressOneOwnershipType",
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
                      "showLabel": true
                    },
                    {
                      "fieldDataType": "DATE",
                      "isMandatory": true,
                      "fieldLabel": "Residing Since",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 15,
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
                      "placeholderText": "xx x  xxxxx",
                      "fieldName": "addressOneLivingSince",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    }
                  ]
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
                  "validationJson": null,
                  "rulesFor": [
                    "homeBranchDistrict"
                  ],
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 7,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": "homeBranchState",
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch District",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "homeBranchState"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "homeBranchState"
                            },
                            ""
                          ]}]
                          
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "state",
                              "homeBranchState"
                            ]
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
                      ]
                    }
                  },
                  "rulesFor": [
                    "homeBranchCity"
                  ],
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 7,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": "homeBranchDistrict",
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch City",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "homeBranchDistrict"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "homeBranchDistrict"
                            },
                            ""
                          ]}]
                          
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "district",
                              "homeBranchDistrict"
                            ],
                            [
                              "fetchCities",
                              "STATIC",
                              true
                            ]
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
                      ]
                    }
                  },
                  "rulesFor": [
                    "branchCode"
                  ],
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 7,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "commonpropertyType": null,
                  "dependentField": "homeBranchCity",
                  "isMandatory": true,
                  "fieldLabel": "Home Branch",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{                          "!=": [
                            {
                              "var": "homeBranchCity"
                            },
                            null
                          ]},{                          "!=": [
                            {
                              "var": "homeBranchCity"
                            },
                            ""
                          ]}]

                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "city",
                              "homeBranchCity"
                            ]
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
                      ]
                    }
                  },
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 7,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT_AREA",
                  "isMandatory": true,
                  "fieldLabel": "Branch Address",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "branchCode"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "branchCode"
                            },
                            ""
                          ]}]
                          
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            "branchCode"
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 7,
                  "showLabel": true,
                  "rows": 3
                }

              ],
              validityEmitter: new Subject<void>(),
              formValueEmitter: new Subject<void>()
            }
          }
        ],
        "EMPLOYMENT_DETAILS": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "sectionContent": {
              "titleData": "Employment Information",
              "isShow": true
            }
          },
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, fill the details."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "sectionContent": {
              "options": { 'columnSize': 3, 'journeyEventCode': 'EMPLOYMENT_DETAILS', mapSupplyData: true, mapAndDisable: true }, /**mapSupplyData: true, mapAndDisable: true flag used to map the data */
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE11',
                  "fieldLabel": "Working With",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-WORKING WITH-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable11",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Salaried Employment Information",
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": '',
                  "fieldLabel": "Employer/Company Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": "^[a-zA-Z ]{0,99}$",
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "organizationName",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Salaried Employment Information",
                  "groupIndex": 1,
                  "showField": true,
                  "alphaOnly": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": false,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE14',
                  "fieldLabel": "Designation",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-DESIGNATION-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable14",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": false,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE15',
                  "fieldLabel": "Profession",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-PROFESSION-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable15",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Date of Joining",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "minDate": null,
                  "maxDate": [null,null,null,true],
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "borrowerEmploymentHistoryDateVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE23',
                  "fieldLabel": "Length of Service",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-LENGTH OF SERVICE-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable23",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
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
                  "dataMasking":true,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  "regexErrorMessage": 'Invalid Email id',
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "officialEmailId",
                  /* "labelInfo": "Enter Borrower Email Id for further Communication", */
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 3,
                  "showField": true,
                  "verificationType": 'EMAIL',
                  "verificationFieldName": 'emailOtp'
                }, {
                  "fieldDataType": "OTP",
                  "otpType": 'EMAIL', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                  "isMandatory": true,
                  "fieldLabel": "Enter Email OTP",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
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
                  "groupName": "Contact Information",
                  "groupIndex": 3,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "emailOtp",
                  "labelInfo": null,
                  "showLabel": false,
                  "showField": false,
                  "OtpMasking": true,
                  "otpDataType": 'NUMBER',
                  "otpAttempts": 3,
                  "excludeToFormValue": true,
                  "waitTimeInSeconds": 120,
                  "options": {
                    'value': null,
                    'notificationType': 'COMMON_OTP_TWO',
                    'loanProduct': null,
                    'createBorrower': true,
                    'generateOtp': true,
                    'className': 'w-100'
                  }
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE11',
                  "fieldLabel": "Professionals & Self Employed Persons",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Professionals & Self Employed Persons",
                  "fieldName": "textVariable11",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "showField": true
                },
                // {
                //   "fieldDataType": "TEXT",
                //   "dependentField": null,
                //   "isMandatory": false,
                //   "commonpropertyType": '',
                //   "fieldLabel": "GST Number",
                //   "fieldAccessModifier": "EDITABLE",
                //   "minLength": null,
                //   "maxLength": null,
                //   "error": null,
                //   "value": "",
                //   "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                //   "rulesFor": null,
                //   "regex": "(UDYAM-)([A-Z]{2}-)([0-9]{2}-)([0-9]{7})",
                //   "regexErrorMessage": "Udyam Registration Number should be as per format \"UDYAM-AA-00-0000000\".",
                //   "options": [],
                //   "errorIconPath": null,
                //   "rowNo": null,
                //   "columnNo": null,
                //   "placeholderText": "",
                //   "fieldName": "textVariable5",
                //   "showLabel": true,
                //   "labelInfo": null,
                //   "groupName": "Employer Details",
                //   "groupIndex": 4,
                //   "showField": true,
                //   "udyamHyphen": true,
                //   "upperCase": true,
                // },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "GST Number",
                  "fieldAccessModifier": "EDITABLE",
                  "verificationType":"GST",
                  "minLength": null,
                  "maxLength": 15,
                  "error": null,
                  "hideVerify":true,
                  "value": null,
                  "validationJson": {
                    "showField": {
                      "if": [
                        {
                          "==": [
                            {
                              "var": "borrowerDetail.borrowerDetail.borrowerEmploymentType"
                            },
                            "SELF_EMPLOYED"
                          ]
                        }
                      ]
                    }
                  },
                  "rulesFor": null,
                  "regex":"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z][0-9A-Z]{1}$",
                  "regexErrorMessage":"Please enter valid Gst Number.",
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Gst Number",
                  "fieldName": "textVariable5",
                  "udyamHyphen": false,
                  "upperCase": true,
                  "labelInfo": "Kindly provide GST Number of Business for verification",
                  "showLabel": true,
                  "showField": true,
                  "groupName": "Employer Details",
                  "groupIndex": 4
                },
                {
                  "fieldDataType": "TEXT",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": '',
                  "fieldLabel": "Business Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": "^[a-zA-Z ]{0,99}$",
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "textVariable6",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "showField": true,
                  "alphaOnly":true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE36',
                  "fieldLabel": "Period in Business/ Profession",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Period in Business/ Profession",
                  "fieldName": "textVariable36",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Business Established On",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "minDate":null,
                  "maxDate":[null,null,null,true],
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "placeholderText": "",
                  "fieldName": "dateVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
              ]
            }
          }
        ],
        "ADD_ON_CARD": [
          {
            "componentType": "TITLE",
            "className": "mb-1",
            "sectionContent": {
              "isShow": true,
              "titleData": "Add on Card Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, fill the Add on Card details."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "sectionContent": {
              "options": { 'columnSize': 3, 'journeyEventCode': 'MORE_INFO', mapSupplyData: true, mapAndDisable: false }, /**mapSupplyData: true, mapAndDisable: true flag used to map the data */
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Do you want to apply for Add-on Card ?",
                  "fieldAccessModifier": "EDITABLE",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": { "default": 'YES' },
                  "regex": null,
                  "rulesFor": ['addOnfirstName',
                    'addOnmiddleName',
                    'addOnlastName',
                    'addOnCardDetailsDateVariable1',
                    'addOnCardDetailsTextVariable1',
                    'addOngender',
                    'addOnmobileNumber',
                    'emailAddress',
                    'relationshipStatus'],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable23",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "Add on Card Details",
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "First Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": "^[a-zA-Z ]{0,99}$",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "addOnfirstName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  'prefixfieldAccessModifier': 'EDITABLE',
                  'prefixCommonProperty': 'TITLE',
                  "includePrefixtoFormValue": true,
                  "prefixfieldName": "addOnCardDetailsTextVariable2",
                  "prefixType": 'DROPDOWN',
                  "prefix": null,
                  "showprefix": true,
                  "prefixplaceholderText": 'Title'
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Middle Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": "^[a-zA-Z ]{0,99}$",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "addOnmiddleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Last Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": "^[a-zA-Z ]{0,99}$",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "addOnlastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "DOB",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "minDate": null,
                  "maxDate": [null,null,null,true],
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": 'Add on Card Details',
                  "groupIndex": 2,
                  "placeholderText": "Enter your Date of Birth",
                  "fieldName": "addOnCardDetailsDateVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Name on Card",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": "^[a-zA-Z ]{0,99}$",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "addOnCardDetailsTextVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Gender",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "default":
                      'Male'
                    ,
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "options": this.commonProperty_static.GENDER,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "addOngender",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                //contact information
                {
                  "fieldDataType": "MOBILE_NO",
                  "isMandatory": false,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": 10,
                  "error": null,
                  "value": null,
                  "dataMasking":true,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": "^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$",
                  "countryCode": "+91",
                  "regexErrorMessage": "Please enter 10 digit Mobile Number.",
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Mobile Number",
                  "fieldName": "addOnmobileNumber",
                  "isEditableOnDisable": false,
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "showField": true,
                  "showCountryCode": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Personal Email ID",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "dataMasking":true,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  "regexErrorMessage": 'Please enter valid email ID.',
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "emailAddress",
                  "showLabel": true,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "showField": true,
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'RELATIONSHIP_STATUS',
                  "fieldLabel": "Relationship Status",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    'showField': {
                      "if": [{ "==": [{ "var": 'borrowerDetailTextVariable23' }, 'YES'] }, true, false]
                    }
                  },
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-Relationship Status-",
                  "fieldName": "relationshipStatus",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 2,
                  "showField": true
                },
              ],
              validityEmitter: new Subject<void>(),
              formValueEmitter: new Subject<void>()
            }
          }
        ],
        "DOCUMENT_LIST": [
          {
            "componentType": "TITLE",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "options": { 'journeyEventCode': 'DOCUMENT_LIST' },
              "isShow": true,
              "titleData": "Get your Credit Card Approved by uploading your documents"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "validateSection": false,
            "className": "mb-30",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Your Application reference  #",

            }
          },
        ],
        // "JOURNEY_PREVIEW1": [
        //   {
        //     "fields":
        //       [
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": true,
        //           "fieldLabel": "Credit Card Type",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": null,
        //           "maxLength": 256,
        //           "error": null,
        //           "value": null,  //TEMPORARY
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": "Credit Card Information",
        //           "groupIndex": 1,
        //           "placeholderText": "Selected Card Type",
        //           "fieldName": "CCType",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": true,
        //           "fieldLabel": "Name on card",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": null,
        //           "maxLength": 18,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": "Credit Card Detail",
        //           "groupIndex": 1,
        //           "placeholderText": "Name on Card",
        //           "fieldName": "borrowerDetailTextVariable65",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         }
        //       ],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Credit Card Detail',
        //     "pageCode": 'CHOOSE_CC'
        //   },
        //   {
        //     "fields":[
        //       {
        //         "fieldDataType": "SECTION",
        //         "isMandatory": false,
        //         "fieldLabel": "",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": null,
        //         "maxLength": 256,
        //         "error": null,
        //         "value": null,  //TEMPORARY
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Existing FD Details",
        //         "groupIndex": 1,
        //         "placeholderText": "Selected Card Type",
        //         "fieldName": "CCType",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //     ],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       "className": "mt-10",
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": false,
        //     "sectionTitle": 'Existing FD Details',
        //     "pageCode": ''
        //   },
        //   {
        //     "fields": [
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "First Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your First Name",
        //         "fieldName": "firstName",
        //         "labelInfo": null,
        //         "showprefix": true,
        //         "showLabel": true,
        //         "showField": true,
        //         "prefixType": 'DROPDOWN',
        //         "prefix": null,
        //         "options": [],
        //         'prefixfieldAccessModifier': 'READ_ONLY',
        //         'prefixCommonProperty': 'TITLE',
        //         "includePrefixtoFormValue": true,
        //         "prefixfieldName": "title",
        //         "prefixplaceholderText": 'Title'
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": false,
        //         "fieldLabel": "Middle Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Middle Name",
        //         "fieldName": "middleName",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "Last Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Last Name",
        //         "fieldName": "lastName",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DATE",
        //         "isMandatory": true,
        //         "fieldLabel": "DOB",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Date of Birth",
        //         "fieldName": "dateOfBirth",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "RADIO",
        //         "isMandatory": true,
        //         "fieldLabel": "Gender",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "options": [{
        //           "optionCode": "MALE",
        //           "optionKey": "Male",
        //           "optionName": "Male",
        //           "icon": 'male',
        //           "optionParentCode": null,
        //           "optionParentProperty": null,
        //           "optionValue": "Male",
        //           "sortIndex": 0
        //         }, {
        //           "optionCode": "FEMALE",
        //           "optionKey": "Female",
        //           "optionName": "Female",
        //           "icon": 'female',
        //           "optionParentCode": null,
        //           "optionParentProperty": null,
        //           "optionValue": "Female",
        //           "sortIndex": 0
        //         }, {
        //           "optionCode": "TRANSGENDER",
        //           "optionKey": "Transgender",
        //           "optionName": "Transgender",
        //           "icon": 'trans',
        //           "optionParentCode": null,
        //           "optionParentProperty": null,
        //           "optionValue": "Transgender",
        //           "sortIndex": 0
        //         }],
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "gender",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'MARITAL_STATUS',
        //         "fieldLabel": "Marital Status",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "maritalStatus",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "Father's Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Last Name",
        //         "fieldName": "borrowerDetailTextVariable6",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "NUMBER",
        //         "isMandatory": true,
        //         "fieldLabel": "No of Dependent(s)",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "numberOfDependents",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'EDUCATION_TYPE',
        //         "fieldLabel": "Education Qualification",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Borrower Information",
        //         "groupIndex": 3,
        //         "placeholderText": "Education Qualification",
        //         "fieldName": "educationType",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'BORROWER_EMPLOYMENT_TYPE',
        //         "fieldLabel": "Employment Type",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Borrower Information",
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "borrowerEmploymentType",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "Nationality",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": { 'default': 'INDIAN' },
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Borrower Information",
        //         "groupIndex": 3,
        //         "placeholderText": "Nationality",
        //         "fieldName": "citizenship",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'RESIDENT_OWNERSHIP_TYPE',
        //         "fieldLabel": "Residental Status",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Borrower Information",
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "residentOwnershipType",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "commonpropertyType": 'BORROWER_DETAIL_VARIABLE11',
        //         "isMandatory": true,
        //         "fieldLabel": "Religion",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Borrower Information",
        //         "groupIndex": 3,
        //         "placeholderText": "Religion",
        //         "fieldName": "borrowerDetailTextVariable11",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "commonpropertyType": 'BORROWER_DETAIL_VARIABLE21',
        //         "isMandatory": true,
        //         "fieldLabel": "Social Category",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Borrower Information",
        //         "groupIndex": 3,
        //         "placeholderText": "Social Category",
        //         "fieldName": "borrowerDetailTextVariable21",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {

        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "PAN Number",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": 6,
        //         "maxLength": 12,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Enter Valid Email ID",
        //         "fieldName": "identityNumberTwo",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "NUMBER",
        //         "isMandatory": true,
        //         "fieldLabel": "Aadhaar Number",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "",
        //         "fieldName": "identityNumberOne",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "Masking": true,
        //         "groupName": 'Borrower Information',
        //         "groupIndex": 3,
        //         "showField": true
        //       }

        //     ],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Borrower Information',
        //     "pageCode": 'MORE_INFO'
        //   },
        //   {
        //     "fields": [
        //       {

        //         "fieldDataType": "MOBILE_NO",
        //         "isMandatory": true,
        //         "fieldLabel": "Mobile number",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": 6,
        //         "maxLength": 12,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": "^[1-9][0-9]{9}$",
        //         "countryCode": "+91",
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Enter 10 digit Mobile Number",
        //         "fieldName": "mobileNumber",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "groupName": 'Contact Information',
        //         "groupIndex": 4,
        //         "showField": true,
        //         "showCountryCode": false
        //       }
        //       , {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "Personal Email ID",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
        //         "countryCode": "+91",
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Enter your Email ID",
        //         "fieldName": "alternativeUsername",
        //         "showLabel": true,
        //         "groupName": 'Contact Information',
        //         "groupIndex": 4,
        //         "showField": true
        //       },
        //     ],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Contact Information',
        //     "pageCode": 'MORE_INFO'
        //   },
        //   {
        //     "fields": [
        //       {
        //         "fieldDataType": "RADIO",
        //         "isMandatory": false,
        //         "fieldLabel": "Are you physically challenged person ?",
        //         "fieldAccessModifier": "READ_ONLY",  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
        //         "options": this.commonProperty_static.YESNO,
        //         "validationJson": { "default": 'NO' },
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "fieldName": "borrowerDetailTextVariable26",
        //         "placeholderText": "xx x  xxxxx",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "groupName": 'Miscellaneous Details',
        //         "groupIndex": 5,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "RADIO",
        //         "isMandatory": false,
        //         "fieldLabel": "Are you an Ex-serviceman ?",
        //         "fieldAccessModifier": "READ_ONLY",  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
        //         "options": this.commonProperty_static.YESNO,
        //         "validationJson": { "default": 'NO' },
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "fieldName": "borrowerDetailTextVariable23",
        //         "placeholderText": "xx x  xxxxx",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "groupName": 'Miscellaneous Details',
        //         "groupIndex": 5,
        //         "showField": true
        //       },
        //     ],
        //     "options": {
        //       'columnSize': 2,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Miscellaneous Details',
        //     "pageCode": 'MORE_INFO'
        //   },
        //   {
        //     "fields": [
        //       {
        //         "componentType": "TITLE",
        //         "validateSection": false,
        //         "sectionContent": {
        //           "titleData": "Choose Delivery Address",
        //           "isShow": true
        //         }
        //       },
        //       {
        //         "fieldDataType": "RADIO",
        //         "isMandatory": true,
        //         "fieldLabel": "Where do you wish to receive your Card ?",
        //         "fieldAccessModifier": "READ_ONLY",  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
        //         "options": [{
        //           "optionKey": "Permanent_Address",
        //           "optionName": "Permanent Address",
        //           "optionValue": "Permanent Address"
        //         },
        //         {
        //           "optionKey": "Communication_Address",
        //           "optionName": "Communication Address",
        //           "optionValue": "Communication Address"
        //         }],
        //         "validationJson": { "default": 'Communication_Address' },
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "fieldName": "borrowerDetailTextVariable73",
        //         "placeholderText": "xx x  xxxxx",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "groupName": 'Choose Delivery Address',
        //         "groupIndex": 6,
        //         "showField": true
        //       },
        //     ],
        //     "options": {
        //       'columnSize': 2,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Choose Delivery Address',
        //     "pageCode": 'MORE_INFO'
        //   },
        //   {
        //     "fields": [{
        //       "fieldDataType": "ADDRESS",
        //       "fieldLabel": "Address as per Aadhaar",
        //       "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //       "minLength": 6,
        //       "maxLength": 15,
        //       "error": null,
        //       "value": "asdsfdsfsd",
        //       "validationJson": null,
        //       "rulesFor": null,
        //       "regex": null,
        //       "regexErrorMessage": null,
        //       "rowNo": null,
        //       "columnNo": null,
        //       "placeholderText": "",
        //       "fieldName": "personalAddress",
        //       "showLabel": false,
        //       "showField": true,
        //       "groupName": 'Permanent Address',
        //       "groupIndex": 1,
        //       "addressFields": [
        //         {
        //           "fieldDataType": "TEXT_AREA",
        //           "isMandatory": true,
        //           "fieldLabel": "Address Line 1",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": 256,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "Enter Address Line1",
        //           "fieldName": "line1",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT_AREA",
        //           "isMandatory": true,
        //           "fieldLabel": "Address Line 2",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": null,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "Enter Address Line2",
        //           "fieldName": "line2",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT_AREA",
        //           "isMandatory": false,
        //           "fieldLabel": "Address Line 3",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": null,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "Enter Address Line3",
        //           "fieldName": "line3",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": false,
        //           "fieldLabel": "Landmark",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": 256,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "",
        //           "fieldName": "subDistrict",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": true,
        //           "fieldLabel": "Pincode",
        //           "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //           "minLength": 6,
        //           "maxLength": 15,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": null,
        //           "groupIndex": null,
        //           "placeholderText": "Enter Pincode",
        //           "fieldName": "zipCode",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": true,
        //           "fieldLabel": "City",
        //           "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //           "minLength": null,
        //           "maxLength": null,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": null,
        //           "groupIndex": null,
        //           "placeholderText": "",
        //           "fieldName": "city",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //         {
        //           "columnNo": 1,
        //           "dependentField": null,
        //           "fieldDataType": "TEXT",
        //           "fieldLabel": "State",
        //           "fieldName": "state",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "groupName": "Communication Detail",
        //           "isMandatory": true,
        //           "isMasking": false,
        //           "maxLength": null,
        //           "minLength": null,
        //           "options": this.commonProperty_static.STATE,
        //           "regex": null,
        //           "regexForJS": null,
        //           "regexErrorMessage": null,
        //           "rowNo": 4,
        //           "rulesFor": null,
        //           "showField": true,
        //           "sortIndex": 6,
        //           "validationJson": null,
        //           "value": null,
        //           "visibleInAdminSection": true,
        //           "visibleInBorrowerSection": true,
        //           "visibleInDsaSection": true,
        //           "visibleInInvestorSection": false,
        //           "showLabel": true
        //         },
        //         {
        //           "columnNo": 2,
        //           "dependentField": null,
        //           "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
        //           "fieldDataType": "DROPDOWN",
        //           "fieldLabel": "Address Type",
        //           "fieldName": "ownershipType",
        //           "groupName": "Communication Detail",
        //           "isMandatory": true,
        //           "isMasking": false,
        //           "maxLength": null,
        //           "minLength": null,
        //           "options": [],
        //           "regex": null,
        //           "regexForJS": null,
        //           "regexErrorMessage": null,
        //           "rowNo": 4,
        //           "rulesFor": null,
        //           "showField": true,
        //           "sortIndex": 5,
        //           "validationJson": null,
        //           "value": null,
        //           "visibleInAdminSection": true,
        //           "visibleInBorrowerSection": true,
        //           "visibleInDsaSection": true,
        //           "placeholderText": "Address Type",
        //           "visibleInInvestorSection": false,
        //           "showLabel": true
        //         },
        //         {
        //           "fieldDataType": "DATE",
        //           "isMandatory": true,
        //           "fieldLabel": "Residing Since",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": 15,
        //           "minDate": null,
        //           "maxDate": [null,null,null,true],
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": "ProductDeclaration",
        //           "groupIndex": null,
        //           "placeholderText": "",
        //           "fieldName": "livingSince",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //       ],
        //     }],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Address Details',
        //     "pageCode": 'MORE_INFO'
        //   },
        //   {
        //     "fields": [{
        //       "fieldDataType": "ADDRESS",
        //       "fieldLabel": "CommunicationAddress",
        //       "fieldAccessModifier": "READ_ONLY",  //editable,readonly  //top,right,bottom,left
        //       "minLength": 6,
        //       "maxLength": 15,
        //       "error": null,
        //       "value": null,
        //       "validationJson": null,
        //       "rulesFor": null,
        //       "regex": null,
        //       "regexErrorMessage": null,
        //       "rowNo": null,
        //       "columnNo": null,
        //       "placeholderText": "",
        //       "fieldName": "addressOne",
        //       "showLabel": false,
        //       "showField": true,
        //       "groupName": 'Communication Address',
        //       "groupIndex": 6,
        //       "addressFields": [
        //         {
        //           "fieldDataType": "TEXT_AREA",
        //           "isMandatory": true,
        //           "fieldLabel": "Address Line 1",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": 256,
        //           "error": null,
        //           "value": null,
        //           "validationJson": {},
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "Enter Address Line1",
        //           "fieldName": "addressOneLine1",
        //           "labelInfo": null,
        //           "showField": true,
        //           "showLabel": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT_AREA",
        //           "isMandatory": true,
        //           "fieldLabel": "Address Line 2",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": null,
        //           "error": null,
        //           "value": null,
        //           "validationJson": {},
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "Enter Address Line2",
        //           "fieldName": "addressOneLine2",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT_AREA",
        //           "isMandatory": false,
        //           "fieldLabel": "Address Line 3",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": null,
        //           "error": null,
        //           "value": null,
        //           "validationJson": {},
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "Enter Address Line3",
        //           "fieldName": "line3",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": false,
        //           "fieldLabel": "Landmark",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": 256,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "placeholderText": "",
        //           "fieldName": "subDistrict",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "rows": 3
        //         },
        //         {
        //           "fieldDataType": "DROPDOWN",
        //           "isMandatory": true,
        //           "fieldLabel": "Pincode",
        //           "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //           "commonpropertyType": "PINCODE",
        //           "minLength": null,
        //           "maxLength": 999999,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": null,
        //           "groupIndex": null,
        //           "placeholderText": "Enter Pincode",
        //           "fieldName": "addressOneZipCode",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //         {
        //           "fieldDataType": "TEXT",
        //           "isMandatory": true,
        //           "fieldLabel": "City",
        //           "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //           "minLength": null,
        //           "maxLength": null,
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": null,
        //           "groupIndex": null,
        //           "placeholderText": "",
        //           "fieldName": "addressOneCity",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //         {
        //           "columnNo": 1,
        //           "dependentField": null,
        //           "fieldDataType": "TEXT",
        //           "fieldLabel": "State",
        //           "fieldName": "addressOneState",
        //           "groupName": "Communication Detail",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "isMandatory": true,
        //           "isMasking": false,
        //           "maxLength": null,
        //           "minLength": null,
        //           "options": this.commonProperty_static.STATE,
        //           "regex": null,
        //           "regexForJS": null,
        //           "regexErrorMessage": null,
        //           "rowNo": 4,
        //           "rulesFor": null,
        //           "showField": true,
        //           "sortIndex": 6,
        //           "validationJson": {},
        //           "value": null,
        //           "visibleInAdminSection": true,
        //           "visibleInBorrowerSection": true,
        //           "visibleInDsaSection": true,
        //           "visibleInInvestorSection": false,
        //           "showLabel": true,
        //         },
        //         {
        //           "columnNo": 2,
        //           "dependentField": null,
        //           "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
        //           "fieldDataType": "DROPDOWN",
        //           "fieldLabel": "Address Type",
        //           "fieldName": "addressOneOwnershipType",
        //           "groupName": "Communication Detail",
        //           "isMandatory": true,
        //           "isMasking": false,
        //           "maxLength": null,
        //           "minLength": null,
        //           "options": [],
        //           "regex": null,
        //           "regexForJS": null,
        //           "regexErrorMessage": null,
        //           "rowNo": 4,
        //           "rulesFor": null,
        //           "showField": true,
        //           "sortIndex": 5,
        //           "validationJson": null,
        //           "value": null,
        //           "visibleInAdminSection": true,
        //           "visibleInBorrowerSection": true,
        //           "visibleInDsaSection": true,
        //           "placeholderText": "Address Type",
        //           "visibleInInvestorSection": false,
        //           "showLabel": true
        //         },
        //         {
        //           "fieldDataType": "DATE",
        //           "isMandatory": true,
        //           "fieldLabel": "Residing Since",
        //           "fieldAccessModifier": "READ_ONLY",
        //           "minLength": 6,
        //           "maxLength": 15,
        //           "minDate": null,
        //           "maxDate": [null,null,null,true],
        //           "error": null,
        //           "value": null,
        //           "validationJson": null,
        //           "rulesFor": null,
        //           "regex": null,
        //           "regexErrorMessage": null,
        //           "rowNo": null,
        //           "columnNo": null,
        //           "groupName": "ProductDeclaration",
        //           "groupIndex": null,
        //           "placeholderText": "",
        //           "fieldName": "addressOneLivingSince",
        //           "labelInfo": null,
        //           "showLabel": true,
        //           "showField": true
        //         },
        //       ],

        //     }],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Address Details',
        //     "pageCode": 'MORE_INFO'
        //   }, {
        //     "fields": [
        //       {
        //         "fieldDataType": "AUTO_COMPLETE",
        //         "dependentField": null,
        //         "isMandatory": true,
        //         "commonpropertyType": "HOME_BRANCH_STATE",
        //         "fieldLabel": "Home Branch State",
        //         "fieldAccessModifier": "EDITABLE",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": [
        //           "homeBranchDistrict"
        //         ],
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Home Branch State",
        //         "fieldName": "homeBranchState",
        //         "showLabel": true,
        //         "labelInfo": "This will be your Bank Branch State where your case will be initiated",
        //         "groupName": "Your Branch Details",
        //         "groupIndex": 9,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "AUTO_COMPLETE",
        //         "dependentField": "homeBranchState",
        //         "commonpropertyType": null,
        //         "isMandatory": true,
        //         "fieldLabel": "Home Branch District",
        //         "fieldAccessModifier": "EDITABLE",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": {
        //           "dontTriggerSelf": true,
        //           "showLoaderOnEndpoints": true,
        //           "apiEndpoint": {
        //             "if": [
        //               {
        //                 "and":[{"!=": [
        //                   {
        //                     "var": "homeBranchState"
        //                   },
        //                   null
        //                 ]},{"!=": [
        //                   {
        //                     "var": "homeBranchState"
        //                   },
        //                   ""
        //                 ]}]
                        
        //               },
        //               {
        //                 "apiType": "MICRO_SERVICE",
        //                 "parameterConfig": [
        //                   [
        //                     "microservicetoken",
        //                     "oauthAccessToken"
        //                   ],
        //                   [
        //                     "state",
        //                     "homeBranchState"
        //                   ]
        //                 ],
        //                 "url": "/api-v3/restPublic/master-branch-list-new",
        //                 "RequestType": "POST",
        //                 "parserMethodName": "branchParser"
        //               },
        //               "REJECT_CALL"
        //             ]
        //           }
        //         },
        //         "rulesFor": [
        //           "homeBranchCity"
        //         ],
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Home Branch District",
        //         "fieldName": "homeBranchDistrict",
        //         "showLabel": true,
        //         "labelInfo": "This will be your Bank Branch District where your case will be initiated",
        //         "groupName": "Branch Details",
        //         "groupIndex": 9,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "AUTO_COMPLETE",
        //         "dependentField": "homeBranchDistrict",
        //         "commonpropertyType": null,
        //         "isMandatory": true,
        //         "fieldLabel": "Home Branch City",
        //         "fieldAccessModifier": "EDITABLE",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": {
        //           "dontTriggerSelf": true,
        //           "showLoaderOnEndpoints": true,
        //           "apiEndpoint": {
        //             "if": [
        //               {
        //                 "and":[{"!=": [
        //                   {
        //                     "var": "homeBranchDistrict"
        //                   },
        //                   null
        //                 ]},{"!=": [
        //                   {
        //                     "var": "homeBranchDistrict"
        //                   },
        //                   ""
        //                 ]}]
                        
        //               },
        //               {
        //                 "apiType": "MICRO_SERVICE",
        //                 "parameterConfig": [
        //                   [
        //                     "microservicetoken",
        //                     "oauthAccessToken"
        //                   ],
        //                   [
        //                     "district",
        //                     "homeBranchDistrict"
        //                   ],
        //                   [
        //                     "fetchCities",
        //                     "STATIC",
        //                     true
        //                   ]
        //                 ],
        //                 "url": "/api-v3/restPublic/master-branch-list-new",
        //                 "RequestType": "POST",
        //                 "parserMethodName": "branchParser"
        //               },
        //               "REJECT_CALL"
        //             ]
        //           }
        //         },
        //         "rulesFor": [
        //           "branchCode"
        //         ],
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Home Branch City",
        //         "fieldName": "homeBranchCity",
        //         "showLabel": true,
        //         "labelInfo": "This will be your Bank Branch City where your case will be initiated",
        //         "groupName": "Your Branch Details",
        //         "groupIndex": 9,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "AUTO_COMPLETE",
        //         "commonpropertyType": null,
        //         "dependentField": "homeBranchCity",
        //         "isMandatory": true,
        //         "fieldLabel": "Home Branch",
        //         "fieldAccessModifier": "EDITABLE",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": {
        //           "dontTriggerSelf": true,
        //           "showLoaderOnEndpoints": true,
        //           "apiEndpoint": {
        //             "if": [
        //               {
        //                 "and":[{"!=": [
        //                   {
        //                     "var": "homeBranchCity"
        //                   },
        //                   null
        //                 ]},{"!=": [
        //                   {
        //                     "var": "homeBranchCity"
        //                   },
        //                   ""
        //                 ]}]

        //               },
        //               {
        //                 "apiType": "MICRO_SERVICE",
        //                 "parameterConfig": [
        //                   [
        //                     "microservicetoken",
        //                     "oauthAccessToken"
        //                   ],
        //                   [
        //                     "city",
        //                     "homeBranchCity"
        //                   ]
        //                 ],
        //                 "url": "/api-v3/restPublic/master-branch-list-new",
        //                 "RequestType": "POST",
        //                 "parserMethodName": "branchParser"
        //               },
        //               "REJECT_CALL"
        //             ]
        //           }
        //         },
        //         "rulesFor": [
        //           "branchAddress"
        //         ],
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Home Branch",
        //         "fieldName": "branchCode",
        //         "showLabel": true,
        //         "labelInfo": "This will be your Bank Branch where your case will be initiated",
        //         "groupName": "Your Branch Details",
        //         "groupIndex": 9,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT_AREA",
        //         "isMandatory": true,
        //         "fieldLabel": "Branch Address",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": {
        //           "dontTriggerSelf": true,
        //           "showLoaderOnEndpoints": true,
        //           "apiEndpoint": {
        //             "if": [
        //               {
        //                 "and":[{"!=": [
        //                   {
        //                     "var": "branchCode"
        //                   },
        //                   null
        //                 ]},{"!=": [
        //                   {
        //                     "var": "branchCode"
        //                   },
        //                   ""
        //                 ]}]
                        
        //               },
        //               {
        //                 "apiType": "MICRO_SERVICE",
        //                 "parameterConfig": [
        //                   [
        //                     "microservicetoken",
        //                     "oauthAccessToken"
        //                   ],
        //                   "branchCode"
        //                 ],
        //                 "url": "/api-v3/restPublic/master-branch-list-new",
        //                 "RequestType": "POST",
        //                 "parserMethodName": "branchParser"
        //               },
        //               "REJECT_CALL"
        //             ]
        //           }
        //         },
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "",
        //         "fieldName": "branchAddress",
        //         "labelInfo": null,
        //         "groupName": "Your Branch Details",
        //         "groupIndex": 9,
        //         "showLabel": true,
        //         "rows": 3
        //       }],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Branch Details',
        //     "pageCode": 'MORE_INFO'
        //   },
        //   {
        //     "fields": [
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE11',
        //         "fieldLabel": "Working With",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": "",
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "-WORKING WITH-",
        //         "fieldName": "borrowerEmploymentHistoryTextVariable11",
        //         "showLabel": true,
        //         "labelInfo": null,
        //         "groupName": "Salaried Employment Information",
        //         "groupIndex": 1,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "dependentField": null,
        //         "isMandatory": true,
        //         "commonpropertyType": '',
        //         "fieldLabel": "Employer/Company Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": "",
        //         "validationJson": "",
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "",
        //         "fieldName": "organizationName",
        //         "showLabel": true,
        //         "labelInfo": null,
        //         "groupName": "Salaried Employment Information",
        //         "groupIndex": 1,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": false,
        //         "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE14',
        //         "fieldLabel": "Designation",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": "",
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "",
        //         "fieldName": "borrowerEmploymentHistoryTextVariable14",
        //         "showLabel": true,
        //         "labelInfo": null,
        //         "groupName": "Employment Information",
        //         "groupIndex": 2,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": false,
        //         "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE15',
        //         "fieldLabel": "Profession",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": "",
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "-PROFESSION-",
        //         "fieldName": "borrowerEmploymentHistoryTextVariable15",
        //         "showLabel": true,
        //         "labelInfo": null,
        //         "groupName": "Employment Information",
        //         "groupIndex": 2,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DATE",
        //         "isMandatory": true,
        //         "fieldLabel": "Date of Joining",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": "Employment Information",
        //         "groupIndex": 2,
        //         "placeholderText": "",
        //         "fieldName": "borrowerEmploymentHistoryDateVariable1",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE23',
        //         "fieldLabel": "Length of Service",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": "",
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "-LENGTH OF SERVICE-",
        //         "fieldName": "borrowerEmploymentHistoryTextVariable23",
        //         "showLabel": true,
        //         "labelInfo": null,
        //         "groupName": "Employment Information",
        //         "groupIndex": 2,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": false,
        //         "fieldLabel": "Office Email ID",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
        //         "regexErrorMessage": 'Invalid Email id',
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Enter Valid Email ID",
        //         "fieldName": "officialEmailId",
        //         /* "labelInfo": "Enter Borrower Email Id for further Communication", */
        //         "showLabel": true,
        //         "groupName": "Contact Information",
        //         "groupIndex": 3,
        //         "showField": true,
        //         /* "verificationType": 'EMAIL',
        //         "verificationFieldName": 'emailOtp' */
        //       },
        //     ],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Employment Details',
        //     "pageCode": 'EMPLOYMENT_DETAILS'
        //   },
        //   {
        //     "fields": [
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "First Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your First Name",
        //         "fieldName": "firstName",
        //         "labelInfo": null,
        //         "showprefix": true,
        //         "showLabel": true,
        //         "showField": true,
        //         "prefixType": 'DROPDOWN',
        //         "prefix": null,
        //         "options": [],
        //         'prefixfieldAccessModifier': 'READ_ONLY',
        //         'prefixCommonProperty': 'TITLE',
        //         "includePrefixtoFormValue": true,
        //         "prefixfieldName": "addOnCardDetailsTextVariable2",
        //         "prefixplaceholderText": 'Title'
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": false,
        //         "fieldLabel": "Middle Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Middle Name",
        //         "fieldName": "middleName",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "Last Name",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Last Name",
        //         "fieldName": "lastName",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DATE",
        //         "isMandatory": true,
        //         "fieldLabel": "DOB",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "placeholderText": "Enter your Date of Birth",
        //         "fieldName": "addOnCardDetailsDateVariable1",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": true,
        //         "fieldLabel": "Name on Card",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "addOnCardDetailsTextVariable1",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "RADIO",
        //         "isMandatory": true,
        //         "fieldLabel": "Gender",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": 6,
        //         "maxLength": 15,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "options": [{
        //           "optionCode": "MALE",
        //           "optionKey": "Male",
        //           "optionName": "Male",
        //           "icon": 'male',
        //           "optionParentCode": null,
        //           "optionParentProperty": null,
        //           "optionValue": "Male",
        //           "sortIndex": 0
        //         }, {
        //           "optionCode": "FEMALE",
        //           "optionKey": "Female",
        //           "optionName": "Female",
        //           "icon": 'female',
        //           "optionParentCode": null,
        //           "optionParentProperty": null,
        //           "optionValue": "Female",
        //           "sortIndex": 0
        //         }, {
        //           "optionCode": "TRANSGENDER",
        //           "optionKey": "Transgender",
        //           "optionName": "Transgender",
        //           "icon": 'trans',
        //           "optionParentCode": null,
        //           "optionParentProperty": null,
        //           "optionValue": "Transgender",
        //           "sortIndex": 0
        //         }],
        //         "rulesFor": null,
        //         "regex": null,
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "placeholderText": "",
        //         "fieldName": "gender",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "showField": true
        //       },
        //       {

        //         "fieldDataType": "MOBILE_NO",
        //         "isMandatory": false,
        //         "fieldLabel": "Mobile number",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": 6,
        //         "maxLength": 12,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": "^[1-9][0-9]{9}$",
        //         "countryCode": "+91",
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Enter 10 digit Mobile Number",
        //         "fieldName": "mobileNumber",
        //         "labelInfo": null,
        //         "showLabel": true,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "showField": true,
        //         "showCountryCode": false
        //       }
        //       , {
        //         "fieldDataType": "TEXT",
        //         "isMandatory": false,
        //         "fieldLabel": "Personal Email ID",
        //         "fieldAccessModifier": "READ_ONLY",
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": null,
        //         "rulesFor": null,
        //         "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
        //         "countryCode": "+91",
        //         "regexErrorMessage": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "Enter your Email ID",
        //         "fieldName": "emailAddress",
        //         "showLabel": true,
        //         "groupName": 'Add on Card Details',
        //         "groupIndex": 3,
        //         "showField": true
        //       },
        //       {
        //         "fieldDataType": "DROPDOWN",
        //         "isMandatory": true,
        //         "commonpropertyType": 'RELATIONSHIP_STATUS',
        //         "fieldLabel": "Relationship Status",
        //         "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
        //         "minLength": null,
        //         "maxLength": null,
        //         "error": null,
        //         "value": null,
        //         "validationJson": "",
        //         "rulesFor": null,
        //         "regex": null,
        //         "options": [],
        //         "regexErrorMessage": null,
        //         "errorIconPath": null,
        //         "rowNo": null,
        //         "columnNo": null,
        //         "placeholderText": "-Relationship Status-",
        //         "fieldName": "relationshipStatus",
        //         "showLabel": true,
        //         "labelInfo": null,
        //         "groupName": "Add on Card Details",
        //         "groupIndex": 3,
        //         "showField": true
        //       }
        //     ],
        //     "options": {
        //       'columnSize': 3,
        //       'mapSupplyData': true,
        //       'mapAndDisable': true,
        //       'mappingFields': null,
        //       validityEmitter: new Subject<void>(),
        //       formValueEmitter: new Subject<void>()
        //     },
        //     "isEdit": true,
        //     "sectionTitle": 'Add on Card Details',
        //     "pageCode": 'ADD_ON_CARD'
        //   },
        // ],
        "JOURNEY_PREVIEW":[
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Verify Your Details"
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Credit Card Type",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": 256,
                  "error": null,
                  "value": null,  //TEMPORARY
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Credit Card Information",
                  "groupIndex": 1,
                  "placeholderText": "Selected Card Type",
                  "fieldName": "CCType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Name on card",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": 18,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Credit Card Information",
                  "groupIndex": 1,
                  "placeholderText": "Name on Card",
                  "fieldName": "borrowerDetailTextVariable65",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ],
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": "Credit Card Detail",
              "pageCode": "CHOOSE_CC"
            }
          },
          {
            "componentType": 'TABLE',
            "className": "mb-5",
            "validationJson": {
              "showSection": {
                "if": [
                  {
                    "!=": [
                      {
                        "var":"$scope.fetchFDAccountsDetails.fetchFDAccountsDetails.accountList.length"
                      },
                      0
                    ]
                  },
                  true,
                  false
                ]
              }
            },
            "sectionContent": {
              "isShow": true,
              "config": {
                "title": "Existing FD Details",
                "showRecordActions": false,
                "showSerialNo": true,
                "showFooterAction": false,
                "showFooterCalculations": true,
                "showCheckBox": true,
                "footerActionLabel": "+ Add New Borrower",
                headers: [{ fieldLabel: "FD Account", fieldName: "termDepositAccNum", "masking":true }, { fieldLabel: "₹ FD Limit", fieldName: "depositAmount", "currency":true }, { fieldLabel: "FD Maturity Date", fieldName: "maturityDate", "dateFormat":true }],
                data: []
              }
            }
          },
          {
            "componentType": "TITLE",
            "sectionContent": {
              "titleData": "Existing FD Details",
              "isShow": true,
            },
            "className": "mb-0 f-16",
            "validationJson": {
              "showSection": {
                "if": [
                  {
                    "==": [
                      {
                        "var":"$scope.fetchFDAccountsDetails.fetchFDAccountsDetails.accountList.length"
                      },
                      0
                    ]
                  },
                  true,
                  false
                ]
              }
            },
          },
          {
            "componentType": "PARAGRAPH",
            "className": "font-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
            "validateSection": false,
            "validationJson": {
              "showSection": {
                "if": [
                  {
                    "==": [
                      {
                        "var":"$scope.fetchFDAccountsDetails.fetchFDAccountsDetails.accountList.length"
                      },
                      0
                    ]
                  },
                  true,
                  false
                ]
              }
            },
            "sectionContent": {
              "paragraphData": "There are no FD Account Detail(s) to be displayed",
              "isShow": true
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "First Name",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "Enter your First Name",
                  "fieldName": "firstName",
                  "labelInfo": null,
                  "showprefix": true,
                  "showLabel": true,
                  "showField": true,
                  "prefixType": 'DROPDOWN',
                  "prefix": null,
                  "options": [],
                  'prefixfieldAccessModifier': 'READ_ONLY',
                  'prefixCommonProperty': 'TITLE',
                  "includePrefixtoFormValue": true,
                  "prefixfieldName": "title",
                  "prefixplaceholderText": 'Title'
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Middle Name",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Middle Name",
                  "fieldName": "middleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Last Name",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Last Name",
                  "fieldName": "lastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "DOB",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Date of Birth",
                  "fieldName": "dateOfBirth",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Gender",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "options": [{
                    "optionCode": "MALE",
                    "optionKey": "Male",
                    "optionName": "Male",
                    "icon": 'male',
                    "optionParentCode": null,
                    "optionParentProperty": null,
                    "optionValue": "Male",
                    "sortIndex": 0
                  }, {
                    "optionCode": "FEMALE",
                    "optionKey": "Female",
                    "optionName": "Female",
                    "icon": 'female',
                    "optionParentCode": null,
                    "optionParentProperty": null,
                    "optionValue": "Female",
                    "sortIndex": 0
                  }, {
                    "optionCode": "TRANSGENDER",
                    "optionKey": "Transgender",
                    "optionName": "Transgender",
                    "icon": 'trans',
                    "optionParentCode": null,
                    "optionParentProperty": null,
                    "optionValue": "Transgender",
                    "sortIndex": 0
                  }],
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "gender",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'MARITAL_STATUS',
                  "fieldLabel": "Marital Status",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "maritalStatus",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Father's Name",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Last Name",
                  "fieldName": "borrowerDetailTextVariable6",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "No of Dependent(s)",
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
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "numberOfDependents",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'EDUCATION_TYPE',
                  "fieldLabel": "Education Qualification",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 3,
                  "placeholderText": "Education Qualification",
                  "fieldName": "educationType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_TYPE',
                  "fieldLabel": "Employment Type",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "borrowerEmploymentType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Nationality",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": { 'default': 'INDIAN' },
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 3,
                  "placeholderText": "Nationality",
                  "fieldName": "citizenship",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'RESIDENT_OWNERSHIP_TYPE',
                  "fieldLabel": "Residental Status",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "residentOwnershipType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "commonpropertyType": 'BORROWER_DETAIL_VARIABLE11',
                  "isMandatory": true,
                  "fieldLabel": "Religion",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 3,
                  "placeholderText": "Religion",
                  "fieldName": "borrowerDetailTextVariable11",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "commonpropertyType": 'BORROWER_DETAIL_VARIABLE21',
                  "isMandatory": true,
                  "fieldLabel": "Social Category",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Borrower Information",
                  "groupIndex": 3,
                  "placeholderText": "Social Category",
                  "fieldName": "borrowerDetailTextVariable21",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
  
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "PAN Number",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": 6,
                  "maxLength": 12,
                  "error": null,
                  "dataMasking":true,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "identityNumberTwo",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "Aadhaar Number",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "dataMasking":true,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "identityNumberOne",
                  "labelInfo": null,
                  "showLabel": true,
                  "Masking": true,
                  "groupName": 'Borrower Information',
                  "groupIndex": 3,
                  "showField": true
                }  
              ],
              "options": {
                'columnSize': 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": 'Borrower Information',
              "pageCode": 'MORE_INFO'
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {

                  "fieldDataType": "MOBILE_NO",
                  "isMandatory": true,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": 6,
                  "dataMasking":true,
                  "maxLength": 12,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "^[1-9][0-9]{9}$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter 10 digit Mobile Number",
                  "fieldName": "mobileNumber",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Contact Information',
                  "groupIndex": 4,
                  "showField": true,
                  "showCountryCode": false
                }
                , {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Personal Email ID",
                  "fieldAccessModifier": "READ_ONLY",
                  "dataMasking":true,
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter your Email ID",
                  "fieldName": "alternativeUsername",
                  "showLabel": true,
                  "groupName": 'Contact Information',
                  "groupIndex": 4,
                  "showField": true
                },
              ],
              "options": {
                'columnSize': 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": 'Contact Information',
              "pageCode": 'MORE_INFO'
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Are you physically challenged person ?",
                  "fieldAccessModifier": "READ_ONLY",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": { "default": 'NO' },
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable26",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Miscellaneous Details',
                  "groupIndex": 5,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Are you an Ex-serviceman ?",
                  "fieldAccessModifier": "READ_ONLY",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": { "default": 'NO' },
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable23",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Miscellaneous Details',
                  "groupIndex": 5,
                  "showField": true
                },
              ],
              "options": {
                'columnSize': 2,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": 'Miscellaneous Details',
              "pageCode": 'MORE_INFO'
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Where do you wish to receive your Card ?",
                  "fieldAccessModifier": "READ_ONLY",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": [{
                    "optionKey": "Permanent_Address",
                    "optionName": "Permanent Address",
                    "optionValue": "Permanent Address"
                  },
                  {
                    "optionKey": "Communication_Address",
                    "optionName": "Communication Address",
                    "optionValue": "Communication Address"
                  }],
                  "validationJson": { "default": 'Communication_Address' },
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "borrowerDetailTextVariable73",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Choose Delivery Address',
                  "groupIndex": 6,
                  "showField": true
                },
              ],
              "options": {
                'columnSize': 2,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": 'Choose Delivery Address',
              "pageCode": 'MORE_INFO'
            },
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "ADDRESS",
                  "fieldLabel": "Address as per Aadhaar",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": "asdsfdsfsd",
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "personalAddress",
                  "showLabel": false,
                  "showField": true,
                  "groupName": 'Permanent Address',
                  "groupIndex": 1,
                  "addressFields": [
                    {
                      "fieldDataType": "TEXT_AREA",
                      "isMandatory": true,
                      "fieldLabel": "Address Line 1",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
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
                      "fieldDataType": "TEXT_AREA",
                      "isMandatory": true,
                      "fieldLabel": "Address Line 2",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": null,
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
                      "fieldDataType": "TEXT_AREA",
                      "isMandatory": false,
                      "fieldLabel": "Address Line 3",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": null,
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
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "",
                      "fieldName": "subDistrict",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "Pincode",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
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
                      "groupName": null,
                      "groupIndex": null,
                      "placeholderText": "Enter Pincode",
                      "fieldName": "zipCode",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "City",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
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
                      "groupName": null,
                      "groupIndex": null,
                      "placeholderText": "",
                      "fieldName": "city",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "columnNo": 1,
                      "dependentField": null,
                      "fieldDataType": "TEXT",
                      "fieldLabel": "State",
                      "fieldName": "state",
                      "fieldAccessModifier": "READ_ONLY",
                      "groupName": "Communication Detail",
                      "isMandatory": true,
                      "isMasking": false,
                      "maxLength": null,
                      "minLength": null,
                      "options": this.commonProperty_static.STATE,
                      "regex": null,
                      "regexForJS": null,
                      "regexErrorMessage": null,
                      "rowNo": 4,
                      "rulesFor": null,
                      "showField": true,
                      "sortIndex": 6,
                      "validationJson": null,
                      "value": null,
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
                      "fieldAccessModifier": "READ_ONLY",
                      "fieldDataType": "DROPDOWN",
                      "fieldLabel": "Address Type",
                      "fieldName": "ownershipType",
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
                      "showLabel": true
                    },
                    {
                      "fieldDataType": "DATE",
                      "isMandatory": true,
                      "fieldLabel": "Residing Since",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 15,
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
                  ],
                }
              ],
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": "Address Details",
              "pageCode": "MORE_INFO"
            } 
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "ADDRESS",
                  "fieldLabel": "CommunicationAddress",
                  "fieldAccessModifier": "READ_ONLY",  //editable,readonly  //top,right,bottom,left
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
                  "placeholderText": "",
                  "fieldName": "addressOne",
                  "showLabel": false,
                  "showField": true,
                  "groupName": 'Communication Address',
                  "groupIndex": 6,
                  "addressFields": [
                    {
                      "fieldDataType": "TEXT_AREA",
                      "isMandatory": true,
                      "fieldLabel": "Address Line 1",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": {},
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "Enter Address Line1",
                      "fieldName": "addressOneLine1",
                      "labelInfo": null,
                      "showField": true,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT_AREA",
                      "isMandatory": true,
                      "fieldLabel": "Address Line 2",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": null,
                      "error": null,
                      "value": null,
                      "validationJson": {},
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "Enter Address Line2",
                      "fieldName": "addressOneLine2",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT_AREA",
                      "isMandatory": false,
                      "fieldLabel": "Address Line 3",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": null,
                      "error": null,
                      "value": null,
                      "validationJson": {},
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "Enter Address Line3",
                      "fieldName": "line3",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": false,
                      "fieldLabel": "Landmark",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": null,
                      "rulesFor": null,
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "placeholderText": "",
                      "fieldName": "subDistrict",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "Pincode",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                      "commonpropertyType": "PINCODE",
                      "minLength": null,
                      "maxLength": 999999,
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
                      "placeholderText": "Enter Pincode",
                      "fieldName": "addressOneZipCode",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": true,
                      "fieldLabel": "City",
                      "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
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
                      "groupName": null,
                      "groupIndex": null,
                      "placeholderText": "",
                      "fieldName": "addressOneCity",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "columnNo": 1,
                      "dependentField": null,
                      "fieldDataType": "TEXT",
                      "fieldLabel": "State",
                      "fieldName": "addressOneState",
                      "groupName": "Communication Detail",
                      "fieldAccessModifier": "READ_ONLY",
                      "isMandatory": true,
                      "isMasking": false,
                      "maxLength": null,
                      "minLength": null,
                      "options": this.commonProperty_static.STATE,
                      "regex": null,
                      "regexForJS": null,
                      "regexErrorMessage": null,
                      "rowNo": 4,
                      "rulesFor": null,
                      "showField": true,
                      "sortIndex": 6,
                      "validationJson": {},
                      "value": null,
                      "visibleInAdminSection": true,
                      "visibleInBorrowerSection": true,
                      "visibleInDsaSection": true,
                      "visibleInInvestorSection": false,
                      "showLabel": true,
                    },
                    {
                      "columnNo": 2,
                      "dependentField": null,
                      "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                      "fieldAccessModifier": "READ_ONLY",
                      "fieldDataType": "DROPDOWN",
                      "fieldLabel": "Address Type",
                      "fieldName": "addressOneOwnershipType",
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
                      "showLabel": true
                    },
                    {
                      "fieldDataType": "DATE",
                      "isMandatory": true,
                      "fieldLabel": "Residing Since",
                      "fieldAccessModifier": "READ_ONLY",
                      "minLength": 6,
                      "maxLength": 15,
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
                  ],
                }
              ],
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": "Address Details",
              "pageCode": "MORE_INFO"
            }  
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
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
                  "rulesFor": [
                    "homeBranchDistrict"
                  ],
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 9,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": "homeBranchState",
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch District",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "homeBranchState"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "homeBranchState"
                            },
                            ""
                          ]}]
                          
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "state",
                              "homeBranchState"
                            ]
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
                      ]
                    }
                  },
                  "rulesFor": [
                    "homeBranchCity"
                  ],
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
                  "groupName": "Branch Details",
                  "groupIndex": 9,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": "homeBranchDistrict",
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch City",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "homeBranchDistrict"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "homeBranchDistrict"
                            },
                            ""
                          ]}]
                          
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "district",
                              "homeBranchDistrict"
                            ],
                            [
                              "fetchCities",
                              "STATIC",
                              true
                            ]
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
                      ]
                    }
                  },
                  "rulesFor": [
                    "branchCode"
                  ],
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 9,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "commonpropertyType": null,
                  "dependentField": "homeBranchCity",
                  "isMandatory": true,
                  "fieldLabel": "Home Branch",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "homeBranchCity"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "homeBranchCity"
                            },
                            ""
                          ]}]
  
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "city",
                              "homeBranchCity"
                            ]
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
                      ]
                    }
                  },
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 9,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT_AREA",
                  "isMandatory": true,
                  "fieldLabel": "Branch Address",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "dontTriggerSelf": true,
                    "showLoaderOnEndpoints": true,
                    "apiEndpoint": {
                      "if": [
                        {
                          "and":[{"!=": [
                            {
                              "var": "branchCode"
                            },
                            null
                          ]},{"!=": [
                            {
                              "var": "branchCode"
                            },
                            ""
                          ]}]
                          
                        },
                        {
                          "apiType": "MICRO_SERVICE",
                          "parameterConfig": [
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            "branchCode"
                          ],
                          "url": "/api-v3/restPublic/master-branch-list-new",
                          "RequestType": "POST",
                          "parserMethodName": "branchParser"
                        },
                        "REJECT_CALL"
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
                  "groupName": "Your Branch Details",
                  "groupIndex": 9,
                  "showLabel": true,
                  "rows": 3
                }
              ],
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter":"new Subject<void>()",
                "formValueEmitter":"new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": "Address Details",
              "pageCode": "MORE_INFO"
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE11',
                  "fieldLabel": "Working With",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-WORKING WITH-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable11",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Salaried Employment Information",
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "dependentField": null,
                  "isMandatory": true,
                  "fieldLabel": "Employer/Company Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
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
                  "groupName": "Salaried Employment Information",
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": false,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE14',
                  "fieldLabel": "Designation",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "borrowerEmploymentHistoryTextVariable14",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": false,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE15',
                  "fieldLabel": "Profession",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-PROFESSION-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable15",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Date of Joining",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "borrowerEmploymentHistoryDateVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_EMPLOYMENT_VARIABLE23',
                  "fieldLabel": "Length of Service",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-LENGTH OF SERVICE-",
                  "fieldName": "borrowerEmploymentHistoryTextVariable23",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employment Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Office Email ID",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "dataMasking":true,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]}]}},
                  "rulesFor": null,
                  "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  "regexErrorMessage": 'Invalid Email id',
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "officialEmailId",
                  /* "labelInfo": "Enter Borrower Email Id for further Communication", */
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 3,
                  "showField": true,
                  /* "verificationType": 'EMAIL',
                  "verificationFieldName": 'emailOtp' */
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE11',
                  "fieldLabel": "Professionals & Self Employed Persons",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Professionals & Self Employed Persons",
                  "fieldName": "textVariable11",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "showField": true
                },
                // // {
                // //   "fieldDataType": "TEXT",
                // //   "dependentField": null,
                // //   "isMandatory": false,
                // //   "commonpropertyType": '',
                // //   "fieldLabel": "GST Number",
                // //   "fieldAccessModifier": "EDITABLE",
                // //   "minLength": null,
                // //   "maxLength": null,
                // //   "error": null,
                // //   "value": "",
                // //   "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                // //   "rulesFor": null,
                // //   "regex": "(UDYAM-)([A-Z]{2}-)([0-9]{2}-)([0-9]{7})",
                // //   "regexErrorMessage": "Udyam Registration Number should be as per format \"UDYAM-AA-00-0000000\".",
                // //   "options": [],
                // //   "errorIconPath": null,
                // //   "rowNo": null,
                // //   "columnNo": null,
                // //   "placeholderText": "",
                // //   "fieldName": "textVariable5",
                // //   "showLabel": true,
                // //   "labelInfo": null,
                // //   "groupName": "Employer Details",
                // //   "groupIndex": 4,
                // //   "showField": true,
                // //   "udyamHyphen": true,
                // //   "upperCase": true,
                // // },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "GST Number",
                  "fieldAccessModifier": "READ_ONLY",
                  "verificationType":"GST",
                  "minLength": null,
                  "maxLength": 15,
                  "error": null,
                  "hideVerify":true,
                  "value": null,
                  "validationJson": {
                    "showField": {
                      "if": [
                        {
                          "==": [
                            {
                              "var": "borrowerDetail.borrowerDetail.borrowerEmploymentType"
                            },
                            "SELF_EMPLOYED"
                          ]
                        }
                      ]
                    }
                  },
                  "rulesFor": null,
                  "regex":"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z][0-9A-Z]{1}$",
                  "regexErrorMessage":"Please enter valid Gst Number.",
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Gst Number",
                  "fieldName": "textVariable5",
                  "udyamHyphen": false,
                  "upperCase": true,
                  "labelInfo": "Kindly provide GST Number of Business for verification",
                  "showLabel": true,
                  "showField": true,
                  "groupName": "Employer Details",
                  "groupIndex": 4
                },
                {
                  "fieldDataType": "TEXT",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": '',
                  "fieldLabel": "Business Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
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
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "showField": true,
                  "alphaOnly":true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE36',
                  "fieldLabel": "Period in Business/ Profession",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Period in Business/ Profession",
                  "fieldName": "textVariable36",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Business Established On",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "minDate":null,
                  "maxDate":[null,null,null,true],
                  "error": null,
                  "value": null,
                  "validationJson": {"showField":{"if":[{"==":[{"var":"borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SELF_EMPLOYED"]}]}},
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Employer Details",
                  "groupIndex": 4,
                  "placeholderText": "",
                  "fieldName": "dateVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
              ],
              "options": {
                'columnSize': 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": false,
                "disableMode": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
              },
              "isEdit": true,
              "isShow": true,
              "showEditMode": true,
              "sectionTitle": 'Employment Details',
              "pageCode": 'EMPLOYMENT_DETAILS'
            }
          },     
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "fields":[
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "First Name",
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
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "placeholderText": "Enter your First Name",
                  "fieldName": "addOnfirstName",
                  "labelInfo": null,
                  "showprefix": true,
                  "showLabel": true,
                  "showField": true,
                  "prefixType": 'DROPDOWN',
                  "prefix": null,
                  "options": [],
                  'prefixfieldAccessModifier': 'READ_ONLY',
                  'prefixCommonProperty': 'TITLE',
                  "includePrefixtoFormValue": true,
                  "prefixfieldName": "addOnCardDetailsTextVariable2",
                  "prefixplaceholderText": 'Title'
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Middle Name",
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
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Middle Name",
                  "fieldName": "addOnmiddleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Last Name",
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
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Last Name",
                  "fieldName": "addOnlastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "DOB",
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
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "placeholderText": "Enter your Date of Birth",
                  "fieldName": "addOnCardDetailsDateVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Name on Card",
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
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "addOnCardDetailsTextVariable1",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": true,
                  "fieldLabel": "Gender",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "options": [{
                    "optionCode": "MALE",
                    "optionKey": "Male",
                    "optionName": "Male",
                    "icon": 'male',
                    "optionParentCode": null,
                    "optionParentProperty": null,
                    "optionValue": "Male",
                    "sortIndex": 0
                  }, {
                    "optionCode": "FEMALE",
                    "optionKey": "Female",
                    "optionName": "Female",
                    "icon": 'female',
                    "optionParentCode": null,
                    "optionParentProperty": null,
                    "optionValue": "Female",
                    "sortIndex": 0
                  }, {
                    "optionCode": "TRANSGENDER",
                    "optionKey": "Transgender",
                    "optionName": "Transgender",
                    "icon": 'trans',
                    "optionParentCode": null,
                    "optionParentProperty": null,
                    "optionValue": "Transgender",
                    "sortIndex": 0
                  }],
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "placeholderText": "",
                  "fieldName": "addOngender",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
  
                  "fieldDataType": "MOBILE_NO",
                  "isMandatory": false,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": 6,
                  "maxLength": 12,
                  "error": null,
                  "dataMasking":true,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "^[1-9][0-9]{9}$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter 10 digit Mobile Number",
                  "fieldName": "addOnmobileNumber",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "showField": true,
                  "showCountryCode": false
                }
                , {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Personal Email ID",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "dataMasking":true,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter your Email ID",
                  "fieldName": "emailAddress",
                  "showLabel": true,
                  "groupName": 'Add on Card Details',
                  "groupIndex": 3,
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": 'RELATIONSHIP_STATUS',
                  "fieldLabel": "Relationship Status",
                  "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": "",
                  "rulesFor": null,
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "-Relationship Status-",
                  "fieldName": "relationshipStatus",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": "Add on Card Details",
                  "groupIndex": 3,
                  "showField": true
                }
              ],
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true,
                "validityEmitter":"new Subject<void>()",
                "formValueEmitter":"new Subject<void>()"
              },
              "isShow": true,
              "showEditMode": true,
              "isEdit": true,
              "sectionTitle": "Add on Card Details",
              "pageCode": "ADD_ON_CARD"
            }
          }
        ],
        "CC_SUMMARY": [
          {
            componentType: "TITLE",
            validateSection: false,
            className: "mt-5 d-flex align-items-center",
            validationJson: {
              content: {
                cat: [
                  "Congratulations ! ",
                  {
                    var: "$scope.fetchAtosCardDetails.cardHolderName",
                  },
                ],
              },
            },
            sectionContent: {
              titleData: ",",
              isShow: true,
              endContent: [
                {
                  componentType: "ICON",
                  className: "ml-10 display-flex",
                  sectionContent: {
                    isShow: true,
                    iconPath: "assets/icons/gift (1).png",
                  },
                },
              ],
            },
          },
          {
            "componentType": "HTML_CONTENT",
            "className": "common-info mt-5 display-flex a-i-c",
            "validationJson": {
              "content": {
                "cat": ["Your Credit Card is sanctioned and the total available limit is <div class='redirectAction ml-5 font-weight-bolder'> ",
                  {
                    "currencyFormatter": [{ "var": "$scope.fetchAtosCardDetails.creditCardLimit" }]
                  }
                  , "&nbsp;</div>  "]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": "Your Credit Card is sanctioned and the total available limit is"
            }
          },
          {
            "componentType": "HTML_CONTENT",
            "className": "common-info mt-10 display-flex a-i-c",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": "Please click on “Yes” below for Card generation."
            }
          },
          {
            componentType: "PARAGRAPH",
            className: "form-label-lg mt-4",
            validateSection: false,
            validationJson: {
              content: {
                cat: [
                  "Your Application Reference # ",
                  { var: "$scope.loanDetailsWithoutBorrowerDetails.loanDetails.crmLeadId" },
                ],
              },
            },
            sectionContent: {
              isShow: true,
              paragraphData: "",
            },
          },
        ],
        "CONGRATULATIONS": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": " mb-0 mt-5 d-flex align-items-center",
            "validationJson": { "content": { "cat": ["Congratulations, ", { "var": "$scope.loanDetailsWithoutBorrowerDetails.loanDetails.borrower" }] } },
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
            "className": "common-info mt-5 display-flex a-i-c",
            "validationJson": {
              "content": {
                "cat": ["Your Credit Card is generated and the total available limit is <div class='redirectAction ml-5 font-weight-bolder f-'> ", {
                  "currencyFormatter": [{ "var": "$scope.fetchAtosCardDetails.creditCardLimit" }]
                },
                  "&nbsp;</div>  "]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": "Your Credit Card is generated and the total available limit is"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "validateSection": false,
            "className": "mb-30",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Your Application reference  #",

            }
          },
        ],
        PRODUCT_ERROR: [
          {
            componentType: "TITLE",
            validateSection: false,
            validationJson: {
              content: {
                cat: [
                  "Dear, ",
                  {
                    or: [
                      {
                        var: "$scope.loanDetailsWithoutBorrowerDetails.loanDetails.borrower",
                      },
                      "Applicant",
                    ],
                  },
                ],
              },
            },
            className: " mb-0 mt-5 d-flex align-items-center",
            sectionContent: {
              titleData: "Dear,",
              isShow: true,
              endContent: [
                {
                  componentType: "ICON",
                  className: "ml-10",
                  sectionContent: {
                    isShow: true,
                    iconPath: "/assets/icons/sad.png",
                  },
                },
              ],
            },
          },
          {
            componentType: "PARAGRAPH",
            className: "text-info mt-3 f-17",
            validateSection: false,
            sectionContent: {
              isShow: true,
              paragraphData:
                "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance",
            },
          },
          {
            componentType: "PARAGRAPH",
            className: "form-label-lg mt-4",
            validateSection: false,
            validationJson: {
              content: {
                cat: [
                  "Your Lead Reference ID # ",
                  {
                    or: [
                      {
                        var: "$scope.loanDetails.loanDetails.crmLeadId",
                      },
                      {
                        var: "$scope.loanDetails.loanDetails.loanId",
                      },
                    ],
                  },
                ],
              },
              showSection: {
                if: [
                  {
                    "==": [
                      {
                        or: [
                          {
                            var: "$scope.loanDetails.loanDetails.crmLeadId",
                          },
                          {
                            var: "$scope.loanDetails.loanDetails.loanId",
                          },
                        ],
                      },
                      null,
                    ],
                  },
                  false,
                  true,
                ],
              },
            },
            sectionContent: {
              isShow: true,
              paragraphData: "Your Lead Reference ID #",
            },
          },
        ],
      },

    }
  };

  pageMetaConfig = {
    CCA: {
      'individual': {
        'CUSTOMER_TYPE': {
          'showLeftContent': true,
          'showStepper': true,
          'fieldLabel': 'Continue'
        },
        "MOBILE_VERIFY": {
          "showLeftContent": true,
          "showStepper": true,
          "showSubStepper": true,
          "consentIndex": 3,
          "formIndex": 2,
          "mobileFieldIndex": 0,
          "otpIndex": 4,
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
              "validationJson": {
                "if": [
                  {
                    "==": [
                      {
                        "checkResumeJourney": []
                      },
                      false
                    ]
                  },
                  "EXECUTE",
                  "NEXT"
                ]
              },
              "submitflow": "applyLoan",
              "dataFeedCloud": [
                "product",
                "formValue",
                "metaData"
              ],
              "saveResponseToProduct": true,
              "apiError": "PRODUCT_ERROR",
              "params": [
                "access_token",
                "borrowerUuid",
                "loanPurposeUuid",
                [
                  "loanAmount",
                  "minLoanAmount"
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ],
                [
                  "loanApplicationTextVariable4",
                  "STATIC",
                  "Web Portal"
                ]
              ],
              "journeyEventCodeAfterResponseSucess": "MOBILE_VERIFY"
            }
          ]
        },
        "ACCOUNT_VERIFY": {
          'showLeftContent': true,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Verify',
          'otpConsent': 5,
          'otpIndex': 6,
          'consentIndex': 4,
          'formIndex': 3,
          'paragraphIndex': 2,
          'formSubmitFlow': [
            {
              "submitflow": "applyLoan",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'borrowerUuid', 'loanPurposeUuid', ['loanAmount', 'STATIC', 100], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
              "journeyEventCodeAfterResponseSucess": "ACCOUNT_VERIFY",
              "apiError": "PRODUCT_ERROR",
            },
            {
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
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['newSubStatus', 'STATIC', 'SUB_STATUS_2'], ['subStatusChangeDescription', 'STATIC', 'Mobile OTP Verification']],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['newSubStatus', 'STATIC', 'SUB_STATUS_3'], ['subStatusChangeDescription', 'STATIC', 'EDW Bank Statement']],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "fetchAccountData",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "saveResponseToCapturedData": true,
              "params": ['access_token', 'accountNumber', ['microservicetoken', 'oauthAccessToken'], ['requestFor', 'STATIC', 'BORROWER'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "getCards",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', "loanUuid", ["customerId", "AccountData.borrowerProfileTextVariable1"], ['microservicetoken', 'oauthAccessToken']],
              "apiError": "PRODUCT_ERROR",
              "saveResponseToCapturedData": true,
              "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.isCard"},false]},"PROCEED","PRODUCT_ERROR"]}
            },
            {
              "validationJson": { "if": [{"==":[{"var":"isCard"},true]}, 'EXECUTE', 'NEXT'] },
              "submitflow": "changeLoanApplicationStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'WITHDRAW'], ['subStatusToBeChanged', 'STATIC', ''], ['statusChangeDescription', 'STATIC', 'Rejection review'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
            },
            {
              "validationJson": { "if": [{"==":[{"var":"isCard"},true]}, 'EXECUTE', 'NEXT'] },
              "submitflow": "changeLoanApplicationStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'REJECTED'], ['subStatusToBeChanged', 'STATIC', ''], ['statusChangeDescription', 'STATIC', 'Rejected Application'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
            },
            {
              "validationJson": { "if": [{"==":[{"var":"isCard"},false]}, 'EXECUTE', 'NEXT'] },
              "submitflow": "npaCheck",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', "loanUuid", ["custId", "AccountData.borrowerProfileTextVariable1"], ['microservicetoken', 'oauthAccessToken'], ["applicationSource", "STATIC", "WEB_JOURNEY"]],
              "saveResponseToCapturedData": true,
              "apiError": "PRODUCT_ERROR",
              "validateResponse": {"if":[{"==":[{"var":"code"},"200"]},{"if":[{"==":[{"var":"npaFlag"},"N"]},"PROCEED","PRODUCT_ERROR"]},"PRODUCT_ERROR"]}
            },
            {
              "validationJson": { "if": [{"==":[{"var":"isCard"},false]}, 'EXECUTE', 'NEXT'] },
              "submitflow": "personalProfileUpdate",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken'],
              ["drawingPower","AccountData.drawingPower"],
              ["JOINT_HOLDER_NAME_1","AccountData.JOINT_HOLDER_NAME_1"],
              ["glSubheadCode","AccountData.glSubheadCode"],
              ["customerSolId","AccountData.customerSolId"],
              ["AADHAAR_NUMBER","AccountData.AADHAAR_NUMBER"],
              ["educationType","AccountData.educationType"],
              ["JOINT_HOLDER_NAME_2","AccountData.JOINT_HOLDER_NAME_2"],
              ["borrowerEmploymentHistoryDateVariable1","AccountData.borrowerEmploymentHistoryDateVariable1"],
              ["JOINT_HOLDER_NAME_3","AccountData.JOINT_HOLDER_NAME_3"],
              ["companyName","AccountData.companyName"],
              ["PHYSICAL_HANDICAPPED","AccountData.PHYSICAL_HANDICAPPED"],
              ["accountOpenDate","AccountData.accountOpenDate"],
              ["PIN_CODE","AccountData.PIN_CODE"],
              ["borrowerDetailTextVariable19","AccountData.borrowerDetailTextVariable19"],
              ["ACCOUNT_STATUS_OPEN_CLOSED","AccountData.ACCOUNT_STATUS_OPEN_CLOSED"],
              ["addressTwoDistrict","AccountData.addressTwoDistrict"],
              ["personalAddressCountry","AccountData.personalAddressCountry"],
              ["personalAddressLine2","AccountData.personalAddressLine2"],
              ["constitutionCode","AccountData.constitutionCode"],
              ["borrowerDetailTextVariable24","AccountData.borrowerDetailTextVariable24"],
              ["personalAddressLine1","AccountData.personalAddressLine1"],
              ["accountFreezStatus","AccountData.accountFreezStatus"],
              ["state","AccountData.state"],
              ["purposeOfAdvanceCode","AccountData.purposeOfAdvanceCode"],
              ["referenceKey","AccountData.referenceKey"],
              ["addressOneZipCode","AccountData.addressOneZipCode"],
              ["addressOneCountry","AccountData.addressOneCountry"],
              ["LANGUAGE","AccountData.LANGUAGE"],
              ["addressOneLine1","AccountData.addressOneLine1"],
              ["addressOneLine2","AccountData.addressOneLine2"],
              ["addressTwoZipCode","AccountData.addressTwoZipCode"],
              ["personalAddressDistrict","AccountData.personalAddressDistrict"],
              ["SME_FLG","AccountData.SME_FLG"],
              ["addressOneDistrict","AccountData.addressOneDistrict"],
              ["companyIdentityNumberTwo","AccountData.companyIdentityNumberTwo"],
              ["STATE_CODE_SECOND","AccountData.STATE_CODE_SECOND"],
              ["PIN_CODE_SECOND","AccountData.PIN_CODE_SECOND"],
              ["RELIGION","AccountData.RELIGION"],
              ["borrowerDetailTextVariable11","AccountData.borrowerDetailTextVariable11"],
              ["DRAWING_POWER","AccountData.DRAWING_POWER"],
              ["locationCode","AccountData.locationCode"],
              ["cbsAccountStatus","AccountData.cbsAccountStatus"],
              ["COUNTRY_CODE","AccountData.COUNTRY_CODE"],
              ["NATIONALITY","AccountData.NATIONALITY"],
              ["LAST_KYC_DONE_TILL_DATE_Asset_Code","AccountData.LAST_KYC_DONE_TILL_DATE_Asset_Code"],
              ["lastName","AccountData.lastName"],
              ["schemeCode","AccountData.schemeCode"],
              ["riskProfile","AccountData.riskProfile"],
              ["STAFF_FLG","AccountData.STAFF_FLG"],
              ["gender","AccountData.gender"],
              ["CUSTOMER_TYPE","AccountData.CUSTOMER_TYPE"],
              ["accountBranchDetail","AccountData.accountBranchDetail"],
              ["EDUCATION","AccountData.EDUCATION"],
              ["isoRequest","AccountData.isoRequest"],
              ["addressOneState","AccountData.addressOneState"],
              ["coApplicantTextVariable30","AccountData.coApplicantTextVariable30"],
              ["accountStatus","AccountData.accountStatus"],
              ["LOCATION_CODE","AccountData.LOCATION_CODE"],
              ["customerBranchDetail","AccountData.customerBranchDetail"],
              ["personalAddressState","AccountData.personalAddressState"],
              ["addressTwoCountry","AccountData.addressTwoCountry"],
              ["accountProduct","AccountData.accountProduct"],
              ["ADDRESS_LINE_2_SECOND","AccountData.ADDRESS_LINE_2_SECOND"],
              ["DEBT_ACKNOWLEDGEMEnt","AccountData.DEBT_ACKNOWLEDGEMEnt"],
              ["addressTwoLine1","AccountData.addressTwoLine1"],
              ["addressTwoLine2","AccountData.addressTwoLine2"],
              ["UDYAM_NUMBER_MASKED","AccountData.UDYAM_NUMBER_MASKED"],
              ["operativeAccount","AccountData.operativeAccount"],
              ["cbsAssetCode","AccountData.cbsAssetCode"],
              ["lastKycTillAssetCode","AccountData.lastKycTillAssetCode"],
              ["CUSTOMER_SOL_ID","AccountData.CUSTOMER_SOL_ID"],
              ["companyCategory","AccountData.companyCategory"],
              ["dateOfBirth","AccountData.dateOfBirth"],
              ["accountNumber","AccountData.accountNumber"],
              ["CITY_CODE_SECOND","AccountData.CITY_CODE_SECOND"],
              ["CHARGE_CODE","AccountData.CHARGE_CODE"],
              ["LIEN_AMOUNT","AccountData.LIEN_AMOUNT"],
              ["GL_SUBHEAD_CODE","AccountData.GL_SUBHEAD_CODE"],
              ["coApplicantTextVariable18","AccountData.coApplicantTextVariable18"],
              ["OCCUPATION","AccountData.OCCUPATION"],
              ["smeFlg","AccountData.smeFlg"],
              ["PAN","AccountData.PAN"],
              ["country","AccountData.country"],
              ["zipCode","AccountData.zipCode"],
              ["isExistingUser","AccountData.isExistingUser"],
              ["borrowerProfileTextVariable1","AccountData.borrowerProfileTextVariable1"],
              ["ACCOUNT_NAME","AccountData.ACCOUNT_NAME"],
              ["dateOfArticle","AccountData.dateOfArticle"],
              ["SALUTATION","AccountData.SALUTATION"],
              ["lieuAmount","AccountData.lieuAmount"],
              ["RESTRUCTURE_FLG","AccountData.RESTRUCTURE_FLG"],
              ["addressTwoState","AccountData.addressTwoState"],
              ["freecode3","AccountData.freecode3"],
              ["line2","AccountData.line2"],
              ["branchDetailJson","AccountData.branchDetailJson"],
              ["freecode7","AccountData.freecode7"],
              ["line1","AccountData.line1"],
              ["debtAcknowledgement","AccountData.debtAcknowledgement"],
              ["CITY_CODE","AccountData.CITY_CODE"],
              ["staffFlag","AccountData.staffFlag"],
              ["ADDRESS_LINE_1","AccountData.ADDRESS_LINE_1"],
              ["OPERATIVE_ACCOUNT","AccountData.OPERATIVE_ACCOUNT"],
              ["ADDRESS_LINE_2","AccountData.ADDRESS_LINE_2"],
              ["accountType","AccountData.accountType"],
              ["CUSTOMER_ID","AccountData.CUSTOMER_ID"],
              ["virtualAccountNumber","AccountData.virtualAccountNumber"],
              ["RENEWAL","AccountData.RENEWAL"],
              ["firstName","AccountData.firstName"],
              ["district","AccountData.district"],
              ["borrowerDetailTextVariable6","AccountData.borrowerDetailTextVariable6"],
              ["assestCode","AccountData.assestCode"],
              ["maritalStatus","AccountData.maritalStatus"],
              ["chargeCode","AccountData.chargeCode"],
              ["ACCOUNT_TYPE","AccountData.ACCOUNT_TYPE"],
              ["restructureFlg","AccountData.restructureFlg"],
              ["identityNumberTwo","AccountData.identityNumberTwo"],
              ["CONSTITUTION_CODE","AccountData.CONSTITUTION_CODE"],
              ["title","AccountData.title"],
              ["borrowerDetailTextVariable43","AccountData.borrowerDetailTextVariable43"],
              ["sourceInfo","AccountData.sourceInfo"],
              ["borrowerDetailTextVariable44","AccountData.borrowerDetailTextVariable44"],
              ["accountOpenStatus","AccountData.accountOpenStatus"],
              ["ADDRESS_LINE_1_SECOND","AccountData.ADDRESS_LINE_1_SECOND"],
              ["FATHER_NAME","AccountData.FATHER_NAME"],
              ["DATE_OF_BIRTH","AccountData.DATE_OF_BIRTH"],
              ["identityNumberOne","AccountData.identityNumberOne"],
              ["modeOfOperationCode","AccountData.modeOfOperationCode"],
              ["FREE_CODE3","AccountData.FREE_CODE3"],
              ["PURPOSE_OF_ADVANCE","AccountData.PURPOSE_OF_ADVANCE"],
              ["SECTOR","AccountData.SECTOR"],
              ["UDYAM_NUMBER","AccountData.UDYAM_NUMBER"],
              ["borrowerDetailTextVariable26","AccountData.borrowerDetailTextVariable26"],
              ["STATE_CODE","AccountData.STATE_CODE"],
              ["personalAddressZipCode","AccountData.personalAddressZipCode"],
              ["accountActiveStatus","AccountData.accountActiveStatus"],
              ["SUB_SECTOR","AccountData.SUB_SECTOR"],
              ["MARITIAL_STATUS","AccountData.MARITIAL_STATUS"],
              ["CUSTOMER_NAME","AccountData.CUSTOMER_NAME"],
              ["Mode_of_Operation_code","AccountData.Mode_of_Operation_code"],
              ["directorTextVariable30","AccountData.directorTextVariable30"],
              ["RISK_PROFILE","AccountData.RISK_PROFILE"],
              ["udyamNumber","AccountData.udyamNumber"],
              ["middleName","AccountData.middleName"],
              ["accountSolId","AccountData.accountSolId"]]
            },
            
          ]
        },
        "CHOOSE_CC": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Continue',
          "dataScopeFetchFlow": [{
            "fetchflow": "fetchFDDetails",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "params": ['access_token', ['applicationSource', 'STATIC', 'WEB_JOURNEY'], 'loanUuid', ["microservicetoken", "oauthAccessToken"],['custId','object.CUSTOMER_ID']],
            "validateResponse":"PROCEED"
          },
          {
            "validate": { "if": [{ "==": [{ "var": "scope.fetchFDDetails.code" }, "200"] }, "EXECUTE", "NEXT"] },
            "fetchflow": "fetchFDAccountsDetails",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "params": ['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
            "validateResponse":"PROCEED"
          },
          {
            "fetchflow": "fetchAllEligibleLoanPrograms",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "params": ['access_token', 'loanUuid'],
            "validateResponse":"PROCEED"

          },
          {
            "fetchflow": "fetchExistingCreditCardDetails",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "params": ['access_token', 'loanUuid'],
            "validateResponse":"PROCEED"

          }],
          'formSubmitFlow': [
            {
              "submitflow": "updateNameOnCard",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY'], 'borrowerDetailTextVariable65'],
              "validateResponse": "PROCEED",
              "validationErrorMessage": "Something went wrong!!",
            },
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue'],
              "params": ['access_token', 'loanUuid', ['newSubStatus', 'STATIC', 'SUB_STATUS_4'], ['subStatusChangeDescription', 'STATIC', 'Card Selection']],
              "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "ERROR"] },
              "validationErrorMessage": "Something went wrong!!",
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updateLoanProgram",
              "dataFeedCloud": ['product', 'formValue', 'capturedData', 'selectedCreditCardUuid'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ['isOnboarding', 'STATIC', true], ['programUuid', "selectedCreditCard.uuid"], ["microservicetoken", "oauthAccessToken"]],
              "validationErrorMessage": "Something went wrong!!",
            },
          ],
          "tableIndex": 2,
          "prepopulationRemaps":{
            "selectedCreditCardType":"fetchExistingCreditCardDetails.cardType",
            "borrowerDetailTextVariable65":"fetchExistingCreditCardDetails.borrowerDetailTextVariable65"
          }
        },
        "CC_DECLARATION": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Submit',
          "tableIndex": 3,
          'formSubmitFlow': [
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['newSubStatus', 'STATIC', 'SUB_STATUS_5'], ['subStatusChangeDescription', 'STATIC', 'Consent Declaration']],
              "apiError": "PRODUCT_ERROR",
            }]
        },
        "MORE_INFO": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': false,
          'fieldLabel': 'Continue',
          'callUserHierarchy': false,
          'formSectionIndex': 2,
          "dataScopeFetchFlow": [{
            "fetchflow": "fetchGeneralAccountResponse",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "saveResponseToProduct": true,
            "params": ['access_token', ['accountNumber', 'object.accountNumber'], ["microservicetoken", "oauthAccessToken"]],
            apiError: "PRODUCT_ERROR",
          },
          {
            "fetchflow": "npaCheck",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "saveResponseToProduct": true,
            "params": ['access_token', ['custId', 'object.CUSTOMER_ID'], 'loanUuid', ["microservicetoken", "oauthAccessToken"]],
            validateResponse: { if: [{ "==": [{ var: "code" }, '200'] }, { if: [{ "==": [{ var: "npaFlag" }, 'N'] }, 'PROCEED', 'PRODUCT_ERROR'] }, 'PRODUCT_ERROR'] },
            apiError: "PRODUCT_ERROR",
          },
          // {
          //   "fetchflow": "verifyPanNumber",
          //   "dataFeedCloud": ['product', 'formValue', 'capturedData'],
          //   "params": ['access_token', 'loanUuid', ['identityNumberTwo', 'object.PAN'], 'objectUuid', ['requestFor', 'STATIC', 'BORROWER'], ["microservicetoken", "oauthAccessToken"]],
          // },
          // {
          //   "fetchflow": "updatesubStatus",
          //   "dataFeedCloud": ['product', 'formValue', 'capturedData'],
          //   "params": ['access_token', 'loanUuid', ['newSubStatus', 'STATIC', 'SUB_STATUS_8'], ['subStatusChangeDescription', 'STATIC', 'Pan verification']],
          //   "apiError": "PRODUCT_ERROR",
          // },
          ],
          "prepopulationRemaps": {
            "title": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.title",{"prefixfieldAccessModifier":"EDITABLE"}],
            "maritalStatus":["metaData.globalScopeData.borrowerDetail.borrowerDetail.maritalStatus",{"fieldAccessModifier":"EDITABLE"}],
            "numberOfDependents":["metaData.globalScopeData.borrowerDetail.borrowerDetail.maritalStatus",{"fieldAccessModifier":"EDITABLE"}],
            "educationType":["metaData.globalScopeData.borrowerDetail.borrowerDetail.educationType",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerEmploymentType":["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentType",{"fieldAccessModifier":"EDITABLE"}],
            "residentOwnershipType":["metaData.globalScopeData.borrowerDetail.borrowerDetail.residentOwnershipType",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerDetailTextVariable11":["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerDetailTextVariable11",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerDetailTextVariable21":["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerDetailTextVariable21",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerDetailTextVariable23":["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerDetailTextVariable23",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerDetailTextVariable73":["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerDetailTextVariable73",{"fieldAccessModifier":"EDITABLE"}],
            "firstName": {"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},false]},"fetchGeneralAccountResponse.object.firstName","metaData.globalScopeData.borrowerDetail.borrowerDetail.firstName"]},
            "middleName": {"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},false]},"fetchGeneralAccountResponse.object.middleName","metaData.globalScopeData.borrowerDetail.borrowerDetail.middleName"]},
            "lastName": {"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},false]},"fetchGeneralAccountResponse.object.lastName","metaData.globalScopeData.borrowerDetail.borrowerDetail.lastName"]},
            "dateOfBirth": "fetchGeneralAccountResponse.object.dateOfBirth",
            "mobileNumber": "fetchGeneralAccountResponse.object.mobileNumber",
            "gender": "fetchGeneralAccountResponse.object.gender",
            "aadhaarNumber": "fetchGeneralAccountResponse.object.AADHAAR_NUMBER",
            "identityNumberOne": ["fetchGeneralAccountResponse.object.identityNumberOne",{"isVerified":{"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},true]},true,false]}}],
            "identityNumberTwo": "fetchGeneralAccountResponse.object.identityNumberTwo",
            "panholdername": {"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},false]},"","metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerProfileTextVariable15"]},
            "panholderdob": {"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},false]},"fetchGeneralAccountResponse.object.dateOfBirth","metaData.globalScopeData.borrowerDetail.borrowerDetail.dateOfBirth"]},
            "borrowerDetailTextVariable6": ["fetchGeneralAccountResponse.object.borrowerDetailTextVariable6",{"fieldAccessModifier":"EDITABLE"}],
            "line1": "fetchGeneralAccountResponse.object.addressOneLine1",
            "line2": "fetchGeneralAccountResponse.object.addressOneLine2",
            "zipCode": "fetchGeneralAccountResponse.object.PIN_CODE",
            "addressOneLine1": "fetchGeneralAccountResponse.object.addressTwoLine1",
            "addressOneLine2": "fetchGeneralAccountResponse.object.addressTwoLine2",
            "addressOneZipCode": "fetchGeneralAccountResponse.object.addressOneZipCode",
            "alternativeUsername": ["fetchGeneralAccountResponse.object.alternativeUsername",{"isVerified":{"if":[{"==":[{"var":"metaData.globalScopeData.isPreview"},true]},true,false]}}],
            "city": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.personalAddress.city",{"fieldAccessModifier":"EDITABLE"}],
            "state": "fetchGeneralAccountResponse.object.state",
            "addressOneState": "fetchGeneralAccountResponse.object.addressOneState",
            "addressOneCity": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.addressOne.addressOneCity",{"fieldAccessModifier":"EDITABLE"}],
            "addressOneOwnershipType":["metaData.globalScopeData.borrowerDetail.borrowerDetail.addressOne.addressOneOwnershipType",{"fieldAccessModifier":"EDITABLE"}],
            "ownershipType":["metaData.globalScopeData.borrowerDetail.borrowerDetail.personalAddress.ownershipType",{"fieldAccessModifier":"EDITABLE"}],
            "livingSince":["metaData.globalScopeData.borrowerDetail.borrowerDetail.personalAddress.livingSince",{"fieldAccessModifier":"EDITABLE"}],
            "addressOneLivingSince":["metaData.globalScopeData.borrowerDetail.borrowerDetail.addressOne.addressOneLivingSince",{"fieldAccessModifier":"EDITABLE"}],
            "homeBranchState": "fetchGeneralAccountResponse.object.branchDetailJson.borrowerDetailTextVariable17",
            "homeBranchDistrict": "fetchGeneralAccountResponse.object.branchDetailJson.borrowerDetailTextVariable18",
            "homeBranchCity": "fetchGeneralAccountResponse.object.branchDetailJson.borrowerDetailTextVariable19",
            "branchCode": "fetchGeneralAccountResponse.object.customerBranchDetail.userHierarchyUnitDetails.unitCode",
            "branchAddress": "fetchGeneralAccountResponse.object.branchDetailJson.borrowerDetailTextVariable20",
          },
          'formSubmitFlow': [
            {
              "validationJson":{"if":[{"==":[{"var":"appConfig.ispandedupe"},true]},"EXECUTE","NEXT"]},
              "submitflow": "duplicateApplicationCheck",
              "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
              ],
              "params": [
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
              "apiError": "PRODUCT_ERROR"
            },
            {
              "submitflow": "assignUserHierarchyUnit",
              "dataFeedCloud": ['product', 'formValue'],
              "params": ['loanUuid', 'access_token', ["userHierarchyUnitCode", "branchCode"], ['microservicetoken', 'oauthAccessToken']],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "personalProfileUpdate",
              "dataFeedCloud": ['product', 'formValue'],
              "params": [
                'title',
                'firstName',
                'middleName',
                'lastName',
                'dateOfBirth',
                'gender',
                'maritalStatus',
                'borrowerDetailTextVariable6',
                'numberOfDependents',
                'educationType',
                'borrowerEmploymentType',
                'citizenship',
                'residentOwnershipType',
                "alternativeUsername",
                'borrowerDetailTextVariable11',
                'borrowerDetailTextVariable21',
                'identityNumberTwo',
                'identityNumberOne',
                'borrowerDetailTextVariable26',
                'borrowerDetailTextVariable23',
                'borrowerDetailTextVariable73',
                'line1',
                'line2',
                'line3',
                'landMark',
                'zipCode',
                'city',
                'state',
                'ownershipType',
                'livingSince',
                'addressOneLine1',
                'addressOneLine2',
                'addressOneLine3',
                'addressOneSubDistrict',
                'addressOneZipCode',
                'addressOneCity',
                'addressOneState',
                'addressOneOwnershipType',
                'addressOneLivingSince',
                ['isOnboarding', 'STATIC', false],
                ['isValidationRequired', 'STATIC', false],
                'borrowerUuid',
                'loanUuid',
                ["microservicetoken", "oauthAccessToken"],
                'access_token'      
              ],
              "journeyEventCodeAfterResponseSucess": "PERSONAL_DETAILS",
            },
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['newSubStatus', 'STATIC', 'SUB_STATUS_9'], ['subStatusChangeDescription', 'STATIC', 'Personal Details']],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "changeLoanApplicationStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L4'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_1'], ['statusChangeDescription', 'STATIC', 'Credit Bureau'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
            },
            {
              "submitflow": 'minimumCheckParameter',
              "dataFeedCloud": ['product', 'formValue','capturedData'],
              "saveResponseToProduct": true,
              "saveResponseToCapturedData": true,
              "params": ['access_token', ['applicationId', 'loanUuid'], ['microservicetoken', 'oauthAccessToken']],
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
                            "var": "cibilCheckStatus"
                          },
                          "Qualified"
                        ]
                      },
                      "PROCEED",
                      "PROCCED"
                    ]
                  },
                  "PRODUCT_ERROR"
                ]
              },
              "apiError": "PRODUCT_ERROR",
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
                  {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "currentFormSubmitResponses.minimumCheckParameter.code"
                          },
                          "200"
                        ]
                      },
                      {
                        "if": [
                          {
                            "and": [
                              {
                                "==": [
                                  {
                                    "var": "currentFormSubmitResponses.minimumCheckParameter.cibilCheckStatus"
                                  },
                                  "Qualified"
                                ]
                              }
                            ]
                          },
                          "SUB_STATUS_2",
                          "SUB_STATUS_3"
                        ]
                      }
                    ]
                  }
                ],
                [
                  "subStatusChangeDescription",
                  "RULE_OUTPUT",
                  {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "currentFormSubmitResponses.minimumCheckParameter.code"
                          },
                          "200"
                        ]
                      },
                      {
                        "if": [
                          {
                            "and": [
                              {
                                "==": [
                                  {
                                    "var": "currentFormSubmitResponses.minimumCheckParameter.cibilCheckStatus"
                                  },
                                  "Qualified"
                                ]
                              }
                            ]
                          },
                          "MCP API Call Success",
                          "MCP API Call Failure"
                        ]
                      }
                    ]
                  }
                ]
              ],
              "validateResponse": {
                "if": [
                  {
                    "and": [
                      {
                        "==": [
                          {
                            "var": "formSubmitResponse.code"
                          },
                          200
                        ]
                      },
                      {
                        "==": [
                          {
                            "var": "currentFormSubmitResponses.minimumCheckParameter.code"
                          },
                          "200"
                        ]
                      },
                      {
                        "==": [
                          {
                            "var": "currentFormSubmitResponses.minimumCheckParameter.cibilCheckStatus"
                          },
                          "Qualified"
                        ]
                      }
                    ]
                  },
                  "PROCEED",
                  "PRODUCT_ERROR"
                ]
              },
              "apiError": "PRODUCT_ERROR",
              "validationErrorMessage": "something went wrong Please Try again!!"
            },
            /* {
              "submitflow": "loanUpdate",
              "dataFeedCloud": ["product", "formValue"],
              "params": ["access_token", "loanUuid", "loanAmount"],
              "journeyEventCodeAfterResponseSucess": ["CREDIT_BUREAU", "BASIC_INFO", "BRANCH_VERIFY"],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": 'stpCheck',
              "dataFeedCloud": ['product', 'formValue'],
              "params": ['access_token', ['applicationId', 'loanUuid'], ['microservicetoken', 'oauthAccessToken']],
              "validateResponse": { "if": [{ "==": [{ "var": "stpFlag" }, 'STP'] }, "KCC_LAND", 'PROCEED'] },
              "saveResponseToCapturedData": true,
              "apiError": "PRODUCT_ERROR",
            } */
          ]
        },
        "EMPLOYMENT_DETAILS": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Continue',
          "prepopulationRemaps": {
            "borrowerEmploymentHistoryTextVariable11": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable11",{"fieldAccessModifier":"EDITABLE"}],
            "organizationName": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.organizationName",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerEmploymentHistoryTextVariable14": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable14",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerEmploymentHistoryTextVariable15": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable15",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerEmploymentHistoryDateVariable1": ["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentHistoryDateVariable1",{"fieldAccessModifier":"EDITABLE"}],
            "borrowerEmploymentHistoryTextVariable23":["metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable23",{"fieldAccessModifier":"EDITABLE"}],
            "officialEmailId":["metaData.globalScopeData.borrowerDetail.borrowerDetail.officialEmailId",{"fieldAccessModifier":"EDITABLE"}],
            "textVariable11":["metaData.globalScopeData.borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable11",{"fieldAccessModifier":"EDITABLE"}],
            "textVariable5":["metaData.globalScopeData.borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable5",{"fieldAccessModifier":"EDITABLE"}],
            "textVariable6":["metaData.globalScopeData.borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable6",{"fieldAccessModifier":"EDITABLE"}],
            "textVariable36":["metaData.globalScopeData.borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable36",{"fieldAccessModifier":"EDITABLE"}],
            "dateVariable1":["metaData.globalScopeData.borrowerDetail.borrowerDetail.selfEmploymentDetailVO.dateVariable1",{"fieldAccessModifier":"EDITABLE"}],
        },
          "dataScopeFetchFlow": [
            {
              "fetchflow": "borrowerDetail",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
              "apiError": "PRODUCT_ERROR",
            }],
          'formSubmitFlow': [
            {
              "submitflow": "employmentProfileUpdate",
              "dataFeedCloud": ['product', 'formValue', 'metaData'],
              "validationJson": {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentType"},"SALARIED"]},"EXECUTE","NEXT"]},
              "params": [
                'borrowerEmploymentHistoryTextVariable11',
                'organizationName',
                'borrowerEmploymentHistoryTextVariable14',
                'borrowerEmploymentHistoryTextVariable15',
                'borrowerEmploymentHistoryDateVariable1',
                'borrowerEmploymentHistoryTextVariable23',
                'officialEmailId',
                ['isOnboarding', 'STATIC', false],
                ['isValidationRequired', 'STATIC', false],
                ["microservicetoken", "oauthAccessToken"],
                'loanUuid',
                'access_token'
              ]
            },
            {
              "submitflow": "selfemploymentUpdate",
              "dataFeedCloud": [
                "product",
                "formValue",
                "metaData"
              ],
              "validationJson": { "if": [{ "==": [{ "var": "metaData.globalScopeData.borrowerDetail.borrowerDetail.borrowerEmploymentType" }, "SELF_EMPLOYED"] }, "EXECUTE", "NEXT"] },
              "params": [
                "textVariable11",
                "textVariable5",
                "textVariable6",
                "textVariable36",
                "dateVariable1",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                [
                  "loanApplicationUuid",
                  "loanUuid"
                ],
                "access_token"
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
              },
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['loanUuid', 'access_token', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L21'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_1'], ['statusChangeDescription', 'STATIC', 'In-Process'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
              "apiError": "PRODUCT_ERROR",
            }
          ]
        },
        "ADD_ON_CARD": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Continue',
          'callUserHierarchy': false,
          'formSectionIndex': 2,
          "prepopulationRemaps": {
            "addOnfirstName": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "firstName"] },{},"RULE_OUTPUT"],
            "addOnmiddleName": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "middleName"] },{},"RULE_OUTPUT"],
            "addOnlastName": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "lastName"] },{},"RULE_OUTPUT"],
            "emailAddress": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "emailAddress"] },{},"RULE_OUTPUT"],
            "addOngender": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "gender"] },{},"RULE_OUTPUT"],
            "relationshipStatus": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "relationshipStatus"] },{},"RULE_OUTPUT"],
            "addOnmobileNumber": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "mobileNumber"] },{},"RULE_OUTPUT"],
            "addOnCardDetailsDateVariable1": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "addOnCardDetailsDateVariable1"] },{},"RULE_OUTPUT"],
            "addOnCardDetailsTextVariable2": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "addOnCardDetailsTextVariable2"] },{},"RULE_OUTPUT"],
            "addOnCardDetailsTextVariable1": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "metaData.globalScopeData.fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "addOnCardDetailsTextVariable1"] },{},"RULE_OUTPUT"],
        },
        'dataScopeFetchFlow':[
          {
            "fetchflow": "fetchAddOnCardDetails",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "saveResponseToProduct":true,
            "params": ['access_token', 'loanUuid', ['max', 'STATIC', 0], ['offset', 'STATIC', 0]],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
          },
        ],
          'formSubmitFlow': [
            {
              "submitflow": "CreateOrUpdateAddOnCardDetails",
              "dataFeedCloud": ['product', 'formValue','capturedData'],
              "params": [
                'access_token',
                'loanUuid',
                ["firstName",'addOnfirstName'],
                ['middleName','addOnmiddleName'],
                ['lastName','addOnlastName'],
                'emailAddress',
                ['gender','addOngender'],
                'relationshipStatus',
                ['mobileNumber','addOnmobileNumber'],
                'addOnCardDetailsTextVariable2',
                'mobileNumberCountryCode',
                ['isOnboarding', 'STATIC', false],
                ['isValidationRequired', 'STATIC', false],
                'addOnCardDetailsDateVariable1',
                'addOnCardDetailsTextVariable1',
                ['uuid', 'RULE_OUTPUT',{
                  "getObjectKeyValue": [
                    {
                      "getArrayIndexValue": [
                        {
                          "var": "fetchAddOnCardDetails.addOnCardDetailsList"
                        },
                        0
                      ]
                    },
                    "uuid"
                  ]
                },],
              ],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['loanUuid', 'access_token', ['newSubStatus', 'STATIC', 'SUB_STATUS_2'], ['statusChangeDescription', 'STATIC', 'Add on details']],
              "apiError": "PRODUCT_ERROR",
            }
          ]
        },
        "DOCUMENT_LIST": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': false,
          'fieldLabel': 'Application Preview',
          "dataScopeFetchFlow": [
            {
              "fetchflow": "fetchExistingCreditCardDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid']
            },
            {
              "fetchflow": "borrowerDetail",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
              apiError: "PRODUCT_ERROR",
            },
            {
              "fetchflow": "loanDetailsWithoutBorrowerDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"]],
              apiError: "PRODUCT_ERROR",
            },
            {
              "fetchflow": "documentList",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid',["microservicetoken", "oauthAccessToken"]],
              apiError: "PRODUCT_ERROR",
            },
            {
              "fetchflow": "showAllRequiredDocuments",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"]],
              apiError: "PRODUCT_ERROR",
            }],
          'formSubmitFlow': [
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['loanUuid', 'access_token', ['newSubStatus', 'STATIC', 'SUB_STATUS_3'], ['statusChangeDescription', 'STATIC', 'Document details']],
              "apiError": "PRODUCT_ERROR",
            }
          ]
        },
        "JOURNEY_PREVIEW": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': false,
          'fieldLabel': 'Submit',
          'dataScopeFetchFlow': [
            {
              "fetchflow": "fetchFDAccountsDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
              "validateResponse":"PROCEED"
            },
            {
              "fetchflow": "fetchExistingCreditCardDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid'],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "fetchflow": "fetchAddOnCardDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct":true,
              "params": ['access_token', 'loanUuid', ['max', 'STATIC', 0], ['offset', 'STATIC', 0]],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
            },
            {
              "fetchflow": "borrowerDetail",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
            },
            {
              "fetchflow": "loanDetailsWithoutBorrowerDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"]],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
            }
          ],
          "prepopulationRemaps": {
            "title": "borrowerDetail.borrowerDetail.title",
            "maritalStatus":"borrowerDetail.borrowerDetail.maritalStatus",
            "numberOfDependents":"borrowerDetail.borrowerDetail.maritalStatus",
            "educationType":"borrowerDetail.borrowerDetail.educationType",
            "borrowerEmploymentType":"borrowerDetail.borrowerDetail.borrowerEmploymentType",
            "residentOwnershipType":"borrowerDetail.borrowerDetail.residentOwnershipType",
            "borrowerDetailTextVariable11":"borrowerDetail.borrowerDetail.borrowerDetailTextVariable11",
            "borrowerDetailTextVariable21":"borrowerDetail.borrowerDetail.borrowerDetailTextVariable21",
            "borrowerDetailTextVariable23":"borrowerDetail.borrowerDetail.borrowerDetailTextVariable23",
            "borrowerDetailTextVariable73":"borrowerDetail.borrowerDetail.borrowerDetailTextVariable73",
            "firstName": "borrowerDetail.borrowerDetail.firstName",
            "lastName": "borrowerDetail.borrowerDetail.lastName",
            "middleName":"borrowerDetail.borrowerDetail.middleName",
            "dateOfBirth": "borrowerDetail.borrowerDetail.dateOfBirth",
            "mobileNumber": "borrowerDetail.borrowerDetail.mobileNumber",
            "gender": "borrowerDetail.borrowerDetail.gender",
            "identityNumberOne":"borrowerDetail.borrowerDetail.identityNumberOne",
            "identityNumberTwo": "borrowerDetail.borrowerDetail.identityNumberTwo",
            "borrowerDetailTextVariable6": "borrowerDetail.borrowerDetail.borrowerDetailTextVariable6",
            "line1": "borrowerDetail.borrowerDetail.personalAddress.line1",
            "line2": "borrowerDetail.borrowerDetail.personalAddress.line2",
            "zipCode": "borrowerDetail.borrowerDetail.personalAddress.zipCode",
            "addressOneLine1": "borrowerDetail.borrowerDetail.addressOne.addressOneLine1",
            "addressOneLine2": "borrowerDetail.borrowerDetail.addressOne.addressOneLine2",
            "addressOneZipCode": "borrowerDetail.borrowerDetail.addressOne.addressOneZipCode",
            "alternativeUsername": "borrowerDetail.borrowerDetail.alternativeUsername",
            "city": "borrowerDetail.borrowerDetail.personalAddress.city",
            "state": "borrowerDetail.borrowerDetail.personalAddress.state",
            "addressOneState": "borrowerDetail.borrowerDetail.addressOne.addressOneState",
            "addressOneCity": "borrowerDetail.borrowerDetail.addressOne.addressOneCity",
            "addressOneOwnershipType":"borrowerDetail.borrowerDetail.addressOne.addressOneOwnershipType",
            "ownershipType":"borrowerDetail.borrowerDetail.personalAddress.ownershipType",
            "livingSince":"borrowerDetail.borrowerDetail.personalAddress.livingSince",
            "addressOneLivingSince":"borrowerDetail.borrowerDetail.addressOne.addressOneLivingSince",
            "homeBranchState":"product.object.accountBranchDetail.userHierarchyUnitDetails.address.stateValue",
            "homeBranchDistrict":"product.object.accountBranchDetail.userHierarchyUnitDetails.address.districtValue",
            "homeBranchCity":"product.object.accountBranchDetail.userHierarchyUnitDetails.address.cityValue",
            "branchCode":"product.object.accountBranchDetail.userHierarchyUnitDetails.unitCode",
            "branchAddress":"product.object.accountBranchDetail.userHierarchyUnitDetails.address.line1Value",
            "addOnfirstName": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "firstName"] },{},"RULE_OUTPUT"],
            "addOnmiddleName": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "middleName"] },{},"RULE_OUTPUT"],
            "addOnlastName": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "lastName"] },{},"RULE_OUTPUT"],
            "emailAddress": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "emailAddress"] },{},"RULE_OUTPUT"],
            "addOngender": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "gender"] },{},"RULE_OUTPUT"],
            "relationshipStatus": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "relationshipStatus"] },{},"RULE_OUTPUT"],
            "addOnmobileNumber": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "mobileNumber"] },{},"RULE_OUTPUT"],
            "addOnCardDetailsDateVariable1": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "addOnCardDetailsDateVariable1"] },{},"RULE_OUTPUT"],
            "addOnCardDetailsTextVariable2": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "addOnCardDetailsTextVariable2"] },{},"RULE_OUTPUT"],
            "addOnCardDetailsTextVariable1": [{ "getObjectKeyValue": [{ "getArrayIndexValue": [{ "var": "fetchAddOnCardDetails.addOnCardDetailsList" }, 0] }, "addOnCardDetailsTextVariable1"] },{},"RULE_OUTPUT"],
            "borrowerEmploymentHistoryTextVariable11": "borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable11",
            "organizationName": "borrowerDetail.borrowerDetail.organizationName",
            "borrowerEmploymentHistoryTextVariable14": "borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable14",
            "borrowerEmploymentHistoryTextVariable15": "borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable15",
            "borrowerEmploymentHistoryDateVariable1": "borrowerDetail.borrowerDetail.borrowerEmploymentHistoryDateVariable1",
            "borrowerEmploymentHistoryTextVariable23":"borrowerDetail.borrowerDetail.borrowerEmploymentHistoryTextVariable23",
            "officialEmailId":"borrowerDetail.borrowerDetail.officialEmailId",
            "textVariable11":"borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable11",
            "textVariable5":"borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable5",
            "textVariable6":"borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable6",
            "textVariable36":"borrowerDetail.borrowerDetail.selfEmploymentDetailVO.textVariable36",
            "dateVariable1":"borrowerDetail.borrowerDetail.selfEmploymentDetailVO.dateVariable1",
            "CCType":"fetchExistingCreditCardDetails.cardType",
            "borrowerDetailTextVariable65":"fetchExistingCreditCardDetails.borrowerDetailTextVariable65"
          },
          'formSubmitFlow': [
            {
              "submitflow": "fetchEligibilityDtls",
              "dataFeedCloud": ['product', 'formValue'],
              "params": ['access_token', ['applicationId', 'loanUuid'], ["microservicetoken", "oauthAccessToken"], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
              "apiError": "PRODUCT_ERROR",
            }, {
              "submitflow": "changeLoanApplicationStatus",
              "dataFeedCloud": ['product', 'formValue'],
              "params": ['loanUuid', 'access_token', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L6'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_1'], ['statusChangeDescription', 'STATIC', 'Eligibility Parameter'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updatesubStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['loanUuid', 'access_token', ['newSubStatus', 'STATIC', 'SUB_STATUS_3'], ['statusChangeDescription', 'STATIC', 'Document details']],
              "apiError": "PRODUCT_ERROR",
            }
          ],
          "journeyEventCodeAfterResponseSucess": "PREVIEW_PAGE"
        },
        "CC_SUMMARY": {
          showLeftContent: false,
          showStepper: false,
          showSubStepper: false,
          showAccountOpenBtn: true,
          fieldLabel: "continue",
          titleIndex: 0,
          loanAmountIndex: 1,
          refNoInx: 2,
          showRepaymentSchedule: false,
          showEmiCalculatorSection: false,
          showBranchSection: true,
          showRatingSection: false,
          showRejectionSection: false,
          showMainContent: true,
          showGoldLoanEligiblityCalculator: true,
          acceptAndProceed: "Do you want to generate card ? ",
          downLoadRepaymentSchedule: "Download Repayment Schedule",
          branchDetails: "Your branch detail",
          repaymentSchedule: "Repayment Schedule",
          summaryError:
            "We appreciate your effort for showing interest with our banking.",
          backToHomeLabel: "Go Back to Home",
          openSavingAccount: "To Open a savings account with Bank Of India",
          continueToSavingAccount: "Continue to savings account",
          "branchConfig": {
            "status": "Credit Card Information is sent to your Email address and Mobile Number.",
            "accountDetails": [{
              "label": "Card type",
              "icon": "assets/icons/card_type.svg",
              "value": "",
              "name": "cardType"
            },
            {
              "label": "Name On Card",
              "icon": "assets/icons/building.png",
              "value": "",
              "name": "cardHolderName"
            },
            {
              "label": "Name On Addon Card",
              "icon": "assets/icons/name_on_card.svg",
              "value": "",
              "name": "addOnCardHolderName"
            },
            {
              "label": "Credit Card Limit Amount",
              "icon": "assets/icons/cc_limit.svg",
              "value": "",
              "name": "creditCardLimit"
            }
            ],
            branchDetails: [{
              "label": "Branch Details",
              "icon": "assets/icons/location.png",
              "value": "",
              "name": "line1Value"
            }]
          },
          dataScopeFetchFlow: [
            {
              fetchflow: "loanDetailsWithoutBorrowerDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", "loanUuid", ["microservicetoken", "oauthAccessToken"]],
            },
            {
              "fetchflow": "fetchExistingCreditCardDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid']
            },
            {
              "fetchflow": "fetchAddOnCardDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', 'loanUuid', ['max', 'STATIC', 0], ['offset', 'STATIC', 0]],
              apiError: "PRODUCT_ERROR",
            },  
            {
              "fetchflow": "fetchAtosCardDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", "loanUuid", ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
            }
          ],
          'formSubmitFlow': [
            {
              "submitflow": "fetchAtosCardDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", "loanUuid", ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
            },
            {
              "submitflow": "changeLoanApplicationStatus",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L23'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_1'], ['statusChangeDescription', 'STATIC', 'Generate Credit Card'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
            },
          ],
        },
        "CONGRATULATIONS": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "fieldLabel": "continue",
          "titleIndex": 0,
          "loanAmountIndex": 1,
          "refNoInx": 3,
          "showRepaymentSchedule": false,
          "showEmiCalculatorSection": false,
          "showBranchSection": true,
          "showRatingSection": true,
          "showRejectionSection": false,
          "showMainContent": true,
          "showAccountOpenBtn": false,
          "rejectionView": [
            {
              "componentType": "TITLE",
              "validateSection": false,
              "className": " mb-0 mt-5 d-flex align-items-center",
              "sectionContent": {
                "titleData": "Dear",
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
          "branchConfig": {
            "status": "Credit Card Information is sent to your Email address and Mobile Number.",
            "accountDetails": [
              {
                "value": "",
                "name": "programImageDownloadUrl"
              },
              {
                "label": "Card type",
                "icon": "assets/icons/card_type.svg",
                "value": "",
                "name": "cardType"
              },
              {
                "label": "Name on Add on Card",
                "icon": "assets/icons/name_on_card.svg",
                "value": "",
                "name": "addOnCardHolderName"
              },
              {
                "label": "Name On Card",
                "icon": "assets/icons/name_on_card.svg",
                "value": "",
                "name": "cardHolderName"
              },
              {
                "label": "Credit Card Limit Amount",
                "icon": "assets/icons/cc_limit.svg",
                "value": "",
                "name": "creditCardLimit"
              }
            ],
            branchDetails: [{
              "label": "Branch Details",
              "icon": "assets/icons/location.png",
              "value": "",
              "name": "line1Value"
            }]
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
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()",
                "options": {
                  "columnSize": 1
                },
                "fields": [
                  {
                    "fieldDataType": "CARD_OPTIONS",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "How do you feel about our service?",
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
                    "commonpropertyType": "FEEDBACK_REASON",
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
                    "fieldLabel": "Would you like to share something with us ?",
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
          dataScopeFetchFlow: [{
            fetchflow: "fetchAtosCardDetails",
            dataFeedCloud: ["product", "formValue", "capturedData"],
            params: ["access_token", "loanUuid", ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
          },
          {
            fetchflow: "loanDetailsWithoutBorrowerDetails",
            dataFeedCloud: ["product", "formValue", "capturedData"],
            params: ["access_token", "loanUuid", ["microservicetoken", "oauthAccessToken"]],
          }],
          'formSubmitFlow': [{
            "submitflow": "feedbackSubmit",
            "dataFeedCloud": ['product', 'formValue'],
            "params": ['remarks', 'feedbackComments', 'rating', 'access_token', ['loanApplicationUuid', 'loanUuid'],["microservicetoken", "oauthAccessToken"]],
            "apiError": "PRODUCT_ERROR",
          }],
        },
        PRODUCT_ERROR: {
          showLeftContent: false,
          showStepper: false,
          showSubStepper: false,
          errorCodes: {
            nameMatch:
              "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance",
              "mobileError":"Sorry! We are unable to process your application due to Bank's Internal Policy. Please visit nearest BOI Bank Branch for further assistance."
          },
          dataScopeFetchFlow: [
            {
              fetchflow: "loanDetailsWithoutBorrowerDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", "loanUuid", ["microservicetoken", "oauthAccessToken"]],
            },
          ],
        },


      },
      "company": {}
    }
  };

  productDocumentList = {
    'CCA': {
      documentList: [
        {
          title: "minimum6MonthsBankStatement",
          documentName: "6 Months Bank Statement",
          documentCategoryCode: "DOC70",
          loanPurposeDocumentCategoryCode: "DOC70",
          label: "Minimum 12 months Bank Statement",
          isReceived: false,
          required: false,
          isRadioButton: false,
          documentList: [
            {
              icon: "../../../assets/icons/download.png",
              label: "Get Online",
              info: "Through Bank Portal",
              type: "redirectURL",
              category: "onlineFetch",
              documentCategoryCode: "DOC70",
              loanPurposeDocumentCategoryCode: "DOC70",
              disable: false,
            },
            {
              icon: "../../../assets/icons/file_brand.png",
              label: "Upload Digital ePDF",
              info: "only .pdf files less than 5Mb",
              type: "redirectURL",
              category: "statementUpload",
              documentCategoryCode: "DOC70",
              loanPurposeDocumentCategoryCode: "DOC70",
              disable: false,
            },
            {
              icon: "../../../assets/icons/file_brand.png",
              label: "Upload Scanned Document",
              info: "only .pdf files less than 5Mb",
              type: "redirectURL",
              category: "scannedStatementUpload",
              disable: true,
              documentCategoryCode: "DOC70",
              loanPurposeDocumentCategoryCode: "DOC70",
            }
          ]
        },
        {
          title: "threeMonthSalarySlip",
          documentName: "threeMonthSalarySlip",
          documentCategoryCode: "DOC2",
          loanPurposeDocumentCategoryCode: "DOC2",
          label: "3 Month Salary Slip",
          isReceived: false,
          required: false,
          isRadioButton: false,
          documentList: [
            {
              icon: "../../../assets/icons/download.png",
              label: "Get Online",
              info: "",
              type: "redirectURL",
              category: "onlineFetch",
              documentCategoryCode: "DOC2",
              loanPurposeDocumentCategoryCode: "DOC2",
              disable: true
            },
            {
              icon: "../../../assets/icons/file_brand.png",
              label: "Upload Digital ePDF",
              info: "only .pdf files less than 5Mb",
              type: "selfUpload",
              category: "self",
              documentCategoryCode: "DOC2",
              loanPurposeDocumentCategoryCode: "DOC2",
              disable: false
            },
            {
              icon: "../../../assets/icons/file_brand.png",
              label: "Upload Scanned Document",
              info: "only .pdf files less than 5Mb",
              type: "redirectURL",
              category: "scannedStatementUpload",
              documentCategoryCode: "DOC2",
              loanPurposeDocumentCategoryCode: "DOC2",
              disable: true
            }
          ]
        }
      ]
    }
  };

  videokycList = {};

  placeholderResponses = {
    cbsDedupe: {
      code: "400",
      isETB: true,
      cutomerId: "300227770",
    },
    crmLeadId: {
      leadId: "crmLeadid999999",
      kycStatus: "OK",
      customeridStatus: "ACTIVE",
      isUserisNPA: true,
      cbsAadharMatch: true,
      pancbsMatch: true,
    },
    fetchgeneralaccountresponse: {
      accountType: "HOME_LOAN_ACCOUNT",
    },
    bureauResponse: {
      cibilScore: 690,
    },
    breResponse: {
      brecheckspassed: true,
      sanctionType: "STP",
    },
    sanctionDetails: {
      sanctionAmount: 75000,
      RequestedAmount: 9000,
    },
    resumejourneyTesting: {
      status: "SUCCESS",
      code: "200",
      message: "Verification Code sent to number 8273829991",
      mobileNumber: "8273829991",
      MOBILE_VERIFY: {
        mobileNumber: "8273829991",
      },
      panData: {
        dateCreated: "",
        returnCode: "1",
        panNumber: "AAIPM3854E",
        panStatus: "E",
        panStatusMessage: "EXISTING AND VALID",
        lastName: "Jadhav",
        firstName: "Vaibhav",
        middleName: "Dhondiram",
        panTitle: "Mr",
        lastUpdateDate: "31/05/2018",
        nameOnCard: null,
        aadharSeedingStatus: null,
        status: "SUCCESS",
        message: "Pan Verification done successfully",
        isPanValid: true,
        objectUuid: "e3a0b8e4-b604-4fcb-ad41-6ac328f38a92",
        isETB: false,
        accountNumber: null,
        etbMessage: "",
      },
      personalAddress: {
        line1: "JN 2 Type Room No B 3 Bldg No 38 ",
        line2: "Sector 10 Navi Mumbai Near Gaon Devi Mandir",
        line3: "",
        district: "THANE",
        city: "THANE",
        state: "MAHARASHTRA",
        zipCode: "400703",
        country: "India",
        subDistrict: "Near Gaon Devi Mandir",
      },
      firstName: "Vaibhav",
      lastName: "Jadhav",
      middleName: "Dhondiram",
      gender: "Male",
      dateOfBirth: "01/04/1986",
      onlyBirthYearFound: false,
      existingaadharData: {
        uuid: "3e712a0f-5e9a-4930-8dbb-1258884dce10",
        imageDocUuid: "35f4807c-6977-4745-92df-b2ca9eccdf7f",
        mappingFields: {
          personalAddress: {
            line1: "JN 2 Type Room No B 3 Bldg No 38 ",
            line2: "Sector 10 Navi Mumbai Near Gaon Devi Mandir",
            line3: "",
            district: "THANE",
            city: "THANE",
            state: "MAHARASHTRA",
            zipCode: "400703",
            country: "India",
            subDistrict: "Near Gaon Devi Mandir",
          },
          firstName: "Vaibhav",
          lastName: "Jadhav",
          middleName: "Dhondiram",
          gender: "Male",
          dateOfBirth: "01/04/1986",
          onlyBirthYearFound: false,
        },
        address:
          "JN - 2 Type, Room No. B - 3, Bldg No. 38Near Gaon Devi MandirSector 10, Navi MumbaiVashi",
        district: "Thane",
        state: "Maharashtra",
        zipCode: "400703",
        name: "Vaibhav Dhondiram Jadhav",
        DoB: "01/04/1986",
        gender: "Male",
        isETB: false,
        status: "SUCCESS",
        code: "200",
        message: "User Verified Successfully",
      },
      aadharData: {
        personalAddress: {
          line1: "JN 2 Type Room No B 3 Bldg No 38 ",
          line2: "Sector 10 Navi Mumbai Near Gaon Devi Mandir",
          line3: "",
          district: "THANE",
          city: "THANE",
          state: "MAHARASHTRA",
          zipCode: "400703",
          country: "India",
          subDistrict: "Near Gaon Devi Mandir",
        },
        firstName: "Vaibhav",
        lastName: "Jadhav",
        middleName: "Dhondiram",
        gender: "Male",
        dateOfBirth: "01/04/1986",
        onlyBirthYearFound: false,
      },
      identityNumberTwo: "BIOPC4152A",
      identityNumberTwoVerified: true,
      identityNumberOne: "923923942934",
      identityNumberOneVerified: true,
      filler: null,
      MORE_INFO: {
        identityNumberTwo: "BIOPC4152A",
        identityNumberTwoVerified: true,
        identityNumberOne: "923923942934",
        identityNumberOneVerified: true,
        filler: null,
      },
      nameMatchData: {
        nameMatchResult: {
          result: {
            result: true,
            score: 100,
          },
          requestId: "3c2244d5-1ab3-4476-96eb-100668437b5f",
          internalStatusCode: 101,
          statusCode: 200,
        },
        blacklistedFlag: true,
        blackListedErrorMessage: "",
      },
      cbsData: {
        code: "400",
        isETB: false,
        custId: "",
        message: "DEDUPE CHECK Failed",
      },
    },
  };

  applicationErrorCodes = {
    PTLEX: {},
  };

  //journey Events are the events which we need to perform at instant of a journey
  journeyEventCodes = {
    CCA: {
      ACCOUNT_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_1",
          subStatusChangeDescription: "Savings Account Verification",
        },
        "APPICE_EVENT": {
          "key": "CCVerifyBasicInfo",
          "properties": {
            "Verify": true
          }
        }
      },
      MOBILE_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_2",
          subStatusChangeDescription: "Mobile OTP Verification",
        },
      },
      BANK_STATEMENT: {
        subStatus: {
          newSubStatus: "SUB_STATUS_3",
          subStatusChangeDescription: "EDW Bank Statement",
        },
      },
      CHOOSE_CC: {
        subStatus: {
          newSubStatus: "SUB_STATUS_4",
          subStatusChangeDescription: "Card Selection",
        },
        "APPICE_EVENT": {
          "key": "CCSelectCard",
          "properties": {
            "CCSelected": "$scope.selectedCreditCardType",
            "Continue": true,
          }
        }
      },
      CC_DECLARATION: {
        subStatus: {
          newSubStatus: "SUB_STATUS_5",
          subStatusChangeDescription: "Consent declaration",
        },
        "APPICE_EVENT": {
          "key": "CCSelectCard",
          "properties": {
            "Submit": true,
          }
        }
      },
      EMAIL_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_6",
          subStatusChangeDescription: "E-Mail OTP Verification",
        },
      },
      AADHAR_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_7",
          subStatusChangeDescription: "Aadhar Verification",
        },
      },
      PAN_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_8",
          subStatusChangeDescription: "Pan verification",
        },
      },
      PERSONAL_DETAILS: {
        subStatus: {
          newSubStatus: "SUB_STATUS_9",
          subStatusChangeDescription: "Personal Details",
        },
      },
      CREDIT_BUREAU: {
        subStatus: {
          newSubStatus: "SUB_STATUS_1",
          subStatusChangeDescription: "Credit Bureau",
        },
      },
      EMPLOYMENT_DETAILS: {
        subStatus: {
          newSubStatus: "SUB_STATUS_1",
          subStatusChangeDescription: "Employment Details",
        },
        "APPICE_EVENT": {
          "key": "CCAddBorrower",
          "properties": {
            "AddOnCardApplied": true,
            "Continue": true
          }
        }
      },
      ADD_ON_CARD: {
        subStatus: {
          newSubStatus: "SUB_STATUS_2",
          subStatusChangeDescription: "Add on details",
        },
        "APPICE_EVENT": {
          "key": "CCAddBorrower",
          "properties": {
            "AddOnCardApplied": true,
            "Continue": true
          }
        }
      },
      DOCUMENT_LIST: {
        subStatus: {
          newSubStatus: "SUB_STATUS_3",
          subStatusChangeDescription: "Document details",
        },
      },
      ELIGIBILITY_PARAM: {
        subStatus: {
          newSubStatus: "SUB_STATUS_1",
          subStatusChangeDescription: "Eligibility Parameter",
        }
      },
      CC_SUMMARY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_1",
          subStatusChangeDescription: "Card Initiation",
        },
        "APPICE_EVENT": {
          "key": "CCUploadDocs",
          "properties": {
            "AppPreview": true,
            "Submit": true,
            "CardGenerated":true,
            "CardLimit":"",
            "CardType":"",
            "FailureMessage":""
          }
        }
      },
      CONGRATULATIONS: {
        subStatus: {
          newSubStatus: "SUB_STATUS_2",
          subStatusChangeDescription: "Card Success",
        },
        "APPICE_EVENT": {
          "key": "CCRateUs",
          "properties": {
            "Rating": true,
            "Submit": true
          }
        }
      },
      CARD_FAIL: {
        subStatus: {
          newSubStatus: "SUB_STATUS_3",
          subStatusChangeDescription: "Card Failed",
        },
      }
    },
    WITHDRAW :{
      "status": {
        "statusToBeChanged": 'WITHDRAW',
        "statusChangeDescription": 'Rejection review',
    },
    },
    REJECTED:{
      "status": {
        "statusToBeChanged": 'REJECTED',
        "statusChangeDescription": 'Rejected Application',
    },
    }
  };

  productLocalisations = {
    PTLEX: {
      SYSTEM_DOWN: "currently our servers are down please try after some time",
      SWR: "Something Went Wrong!!",
    },
    VLN: {
      SYSTEM_DOWN: "currently our servers are down please try after some time",
      SWR: "Something Went Wrong!!",
    },
    PSL: {
      SYSTEM_DOWN: "currently our servers are down please try after some time",
      SWR: "Something Went Wrong!!",
    },
    CCA: {
      SYSTEM_DOWN: "currently our servers are down please try after some time",
      SWR: "Something Went Wrong!!",
    },
  };

  flowTags = {};
}
