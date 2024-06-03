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

  ErrorCodeSubStatus = {
    "CC321": "SUB_STATUS_20",
  }

  static_commonProperty_KeyCodes = [
    "HOME_BRANCH_STATE",
    "HOME_BRANCH_DISTRICT",
    "HOME_BRANCH_CITY",
    "HOME_BRANCH_NAME",
    "SOF_CROP_DETAILS",
    "PINCODE",
    "PINCODE_STATE",
    "PINCODE_CITY",
    "DOCUMENT_TYPE",
    "GST_SEARCH",
  ];
  static_landMasters_KeyCodes = {
    "state":{
      "apiUrl":"stateList",
      "param":"",
      "mappingName":"name"
    },
    "district":{
      "apiUrl":"districtList",
      "param": "stateId",
      "mappingName":"translated_name"
    },
    "tehsil":{
      "apiUrl":"tehsilList",
      "param": "districtId",
      "mappingName":"translated_name"
    },
    "revenueVillage":{
      "apiUrl":"villageListByTehsil",
      "param": "tehsilId",
      "mappingName":"village_name"
    },
    "surveyNo":{
      "apiUrl":"surveyList",
      "param": "villageId",
      "mappingName":"survey_number"
    },
    "subSurveyNo":{
      "apiUrl":"subSurveyList",
      "param": "surveyId",
      "mappingName":"name"
    }
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
    CC321: {
      individual: {
        carouselImages: [
          {
            image: "assets/images/Agri-goldLoan.webp",
            title: "",
            description: "",
          },
        ],
      },
      company: {
        carouselImages: [
          {
            image: "assets/images/Agri-goldLoan.webp",
            title: "",
            description: "",
          },
        ],
      }
    },
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
      id: "kisan-credit-card",
      image: "assets/icons/loan3.png",
      name: "Kisan Credit Card",
      info: "  Improve your farming business with BOI Kisan Credit Card. ",
      color: "#297F87",
      isActive: true,
      url: "product/basicinfo/customer-type",
      productCode: "LA763",
      productType: "KCC_CROP",
      isCbsFields_ShowAndHide: false,
    },
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
      id: "kcc-ah",
      image: "assets/icons/loan3.png",
      name: "Kisan Credit Card",
      info: "  Improve your farming business with BOI Kisan Credit Card - Animal Husbandry. ",
      color: "#297F87",
      isActive: true,
      url: "product/basicinfo/customer-type",
      productCode: "CC321",
      productType: "KCC_CROP",
      isCbsFields_ShowAndHide: false,
    },
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
        paragraphData: "Kindly read and submit the consent",
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
              "consentType": "APIFETCH",
              "consentCode": "AADHAAR_CONSENT_AGRI_KCC",
              "submitConsentCodes": [
                "AADHAAR_CONSENT_AGRI_KCC"
              ],
              "label": null,
              "className": "check-container",
              "completed": null
            }
          ]
        }
      }
    }
  ];

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
    }
  ];
  /*product desc page jsons*/
  productDesc = {

  };

  productDescInfoTabs = {};

  pageSequenceData = {
    CC321: {
      journeyPages: {
        individual: [
          {
            "pageIndex": 0,
            "pageCode": "CUSTOMER_TYPE",
            "pageName": "Customer Type",
            "status": "INITIALIZED",
            "subStatus": null,
            "subStatusChangeDescription": null,
            "validateBeforeNextPage": {
                "navigate": {
                    "if": [
                        {
                            "==": [
                                {
                                    "var": "capturedData.CUSTOMER_TYPE.identifyYourself"
                                },
                                "ExistingCustomer"
                            ]
                        },
                        "ACCOUNT_VERIFY",
                        "NEXT"
                    ]
                }
            },
            "url": "basicinfo/customer-type",
            "lastPage": false,
            "resumeJourneySequences": []
        },
        {
          "pageIndex": 1,
          "pageCode": "MOBILE_VERIFY",
          "pageName": "Mobile Verify",
          "status": "INITIALIZED",
          "subStatus": "SUB_STATUS_2",
          "subStatusChangeDescription": "Mobile Number Verified",
          "lastPage": false,
          "url": "basicinfo/mobile-verify",
          "resumeJourneySequences": []
        },
          {
            "pageIndex": 2,
            "pageCode": "MORE_INFO",
            "pageName": "Personal Information",
            "status": "INITIALIZED",
            "subStatus": "SUB_STATUS_4",
            "subStatusChangeDescription": "More Info Verification Completed",
            "lastPage": false,
            "url": "basicinfo/more-info",
            "resumeJourneySequences": [
              [
                "INITIALIZED",
                "SUB_STATUS_1"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_2"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_3"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_6"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_4"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_11"
              ]
            ]
          },
          {
            "pageIndex": 3,
            "pageCode": "KCC_LAND",
            "pageName": "Kcc Land Details",
            "status": "",
            "subStatus": "SUB_STATUS_2",
            "lastPage": false,
            "subStatusChangeDescription": null,
            "url": "product-declaration/details/kcc_land",
            "resumeJourneySequences": [
              [
                "SUB_STATUS_2"
              ]
            ]
          },
          {
            "pageIndex": 4,
            "pageCode": "KCC_CROP",
            "pageName": "Kcc Crop Details",
            "status": "",
            "subStatus": "SUB_STATUS_3",
            "lastPage": false,
            "subStatusChangeDescription": null,
            "url": "product-declaration/details/kcc_crop",
            "resumeJourneySequences": [
              [
                "SUB_STATUS_3"
              ]
            ]
          },
          {
            "pageIndex": 5,
            "pageCode": "DECLARATION",
            "pageName": "Declaration Page",
            "status": "",
            "subStatus": "",
            "subStatusChangeDescription": null,
            "lastPage": false,
            "url": "consent-document/declaration",
            "resumeJourneySequences": []
          },
          {
            "pageIndex": 6,
            "pageCode": "JOURNEY_PREVIEW",
            "status": "",
            "pageName": "Personal Information",
            "subStatus": "",
            "subStatusChangeDescription": null,
            "url": "journey-preview/preview",
            "lastPage": false
          },
          {
            "pageIndex": 7,
            "pageCode": "LOAN_ELIGIBILITY",
            "pageName": "Eligibility Page",
            "status": "",
            "subStatus": null,
            "lastPage": true,
            "subStatusChangeDescription": null,
            "url": "loan/eligibility"
          },
          {
            "pageIndex": 8,
            "pageCode": "LOAN_SUMMARY",
            "pageName": "Congratulations Page",
            "status": "",
            "subStatus": null,
            "lastPage": true,
            "subStatusChangeDescription": null,
            "url": "loan/summary"
          },
          {
            pageIndex: 5,
            pageCode: "ESIGN",
            pageName: 'KCC Esign',
            lastPage: false,
            url: 'custom-information/esign',
            resumeJourneySequences: []
        }
        ],
        company: [
          {
            "pageIndex": 0,
            "pageCode": "CUSTOMER_TYPE",
            "pageName": "Customer Type",
            "status": "INITIALIZED",
            "subStatus": null,
            "subStatusChangeDescription": null,
            "validateBeforeNextPage": {
                "navigate": {
                    "if": [
                        {
                            "==": [
                                {
                                    "var": "capturedData.CUSTOMER_TYPE.identifyYourself"
                                },
                                "ExistingCustomer"
                            ]
                        },
                        "ACCOUNT_VERIFY",
                        "NEXT"
                    ]
                }
            },
            "url": "basicinfo/customer-type",
            "lastPage": false,
            "resumeJourneySequences": []
        },
        {
          "pageIndex": 1,
          "pageCode": "MOBILE_VERIFY",
          "pageName": "Mobile Verify",
          "status": "INITIALIZED",
          "subStatus": "SUB_STATUS_2",
          "subStatusChangeDescription": "Mobile Number Verified",
          "lastPage": false,
          "url": "basicinfo/mobile-verify",
          "resumeJourneySequences": []
        },
        {
          "pageIndex": 2,
          "pageCode": "EMAIL_VERIFY",
          "pageName": "Email Verify",
          "subStatus": "SUB_STATUS_4",
          "subStatusChangeDescription": "Email ID Verification Complete",
          "lastPage": false,
          "url": "basicinfo/email-verify",
          "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_2']]
      },
      {
          "pageIndex": 3,
          "pageCode": "PAN_VERIFY",
          "pageName": "Company Pan Verify",
          "subStatus": "SUB_STATUS_9",
          "subStatusChangeDescription": "Company Pan Verification Complete",
          "url": "basicinfo/pan-verify",
          "exitjourneyEventCode": "PAN_VERIFY",
          "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_4']]
      },
      {
          "pageIndex": 4,
          "pageCode": "UDYAM_VERIFY",
          "pageName": "Udyam Verify",
          "subStatus": "SUB_STATUS_7",
          "subStatusChangeDescription": "Udyam Verification Completed",
          "url": "basicinfo/udyam-verify",
          "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_9']]
      },

          {
            "pageIndex": 5,
            "pageCode": "MORE_INFO",
            "pageName": "Personal Information",
            "status": "INITIALIZED",
            "subStatus": "SUB_STATUS_4",
            "subStatusChangeDescription": "More Info Verification Completed",
            "lastPage": false,
            "url": "basicinfo/more-info",
            "resumeJourneySequences": [
              [
                "INITIALIZED",
                "SUB_STATUS_1"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_2"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_3"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_6"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_4"
              ],
              [
                "INITIALIZED",
                "SUB_STATUS_11"
              ]
            ]
          },
          {
            "pageIndex": 6,
            "pageCode": "KCC_CROP",
            "pageName": "Kcc Crop Details",
            "status": "",
            "subStatus": "SUB_STATUS_3",
            "lastPage": false,
            "subStatusChangeDescription": null,
            "url": "product-declaration/details/kcc_crop",
            "resumeJourneySequences": [
              [
                "SUB_STATUS_3"
              ]
            ]
          },
          {
            "pageIndex": 7,
            "pageCode": "DECLARATION",
            "pageName": "Declaration Page",
            "status": "",
            "subStatus": "",
            "subStatusChangeDescription": null,
            "lastPage": false,
            "url": "consent-document/declaration",
            "resumeJourneySequences": []
          },
          {
            "pageIndex": 8,
            "pageCode": "JOURNEY_PREVIEW",
            "status": "",
            "pageName": "Personal Information",
            "subStatus": "",
            "subStatusChangeDescription": null,
            "url": "journey-preview/preview",
            "lastPage": false
          },
          {
            "pageIndex": 9,
            "pageCode": "LOAN_ELIGIBILITY",
            "pageName": "Eligibility Page",
            "status": "",
            "subStatus": null,
            "lastPage": true,
            "subStatusChangeDescription": null,
            "url": "loan/eligibility"
          },
          {
            "pageIndex": 10,
            "pageCode": "LOAN_SUMMARY",
            "pageName": "Congratulations Page",
            "status": "",
            "subStatus": null,
            "lastPage": true,
            "subStatusChangeDescription": null,
            "url": "loan/summary"
          },
          {
            pageIndex: 11,
            pageCode: "ESIGN",
            pageName: 'KCC Esign',
            lastPage: false,
            url: 'custom-information/esign',
            resumeJourneySequences: []
        }
        ],
      },
      otherPages: {
        individual: [
          {
            "pageIndex": 1,
            "pageCode": "ACCOUNT_VERIFY",
            "pageName": "ACCOUNT_VERIFY",
            "status": "INITIALIZED",
            "subStatus": "SUB_STATUS_1",
            "lastPage": false,
            "subStatusChangeDescription": "Account Number Verified",
            "url": "basicinfo/account-number-verification"
          },
          {
            "pageIndex": 2,
            "pageCode": "PRODUCT_ERROR",
            "pageName": "Pan Verify",
            "url": "custom-information/product-error",
            "resumeJourneySequences": []
          },
          {
            "pageIndex": 2,
            "pageCode": "CONTACT_BRANCH",
            "pageName": "Thank you page",
            "lastPage": false,
            "url": "basicinfo/contact-branch"
          },
          {
            "pageIndex": 3,
            "pageCode": "STP_CONGRATULATIONS",
            "pageName": "Congratulations Page",
            "lastPage": false,
            "url": "loan/stp-congratulations"
          }
        ],
        company: [
          {
            "pageIndex": 1,
            "pageCode": "ACCOUNT_VERIFY",
            "pageName": "ACCOUNT_VERIFY",
            "status": "INITIALIZED",
            "subStatus": "SUB_STATUS_1",
            "lastPage": false,
            "subStatusChangeDescription": "Account Number Verified",
            "url": "basicinfo/account-number-verification"
          },
          {
            "pageIndex": 2,
            "pageCode": "PRODUCT_ERROR",
            "pageName": "Pan Verify",
            "url": "custom-information/product-error",
            "resumeJourneySequences": []
          },
          {
            "pageIndex": 2,
            "pageCode": "CONTACT_BRANCH",
            "pageName": "Thank you page",
            "lastPage": false,
            "url": "basicinfo/contact-branch"
          },
          {
            "pageIndex": 3,
            "pageCode": "STP_CONGRATULATIONS",
            "pageName": "Congratulations Page",
            "lastPage": false,
            "url": "loan/stp-congratulations"
          }
        ],
      },
    },
  };

  stepperData = {
    CC321: {
      individual: [
        {
          "name": "Basic Information",
          "info": "10MinVerifyYou",
          "isActive": true,
          "isCompleted": false,
          "subStep": [
            {
                "id": "001",
                "pageCode": 'MOBILE_VERIFY',
                "name": 'Mobile Number',
                "isActive": false,
                "isCompleted": false
            },

        ],
        },
        {
          "name": "Borrower Detail",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "pageCode": "MORE_INFO"
        },
        {
          "name": "Land & Crop Detail",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "subStep": [
            {
              "id": "001",
              "isActive": false,
              "pageCode": "KCC_LAND",
              "name": "Land Detail",
              "isCompleted": false
            },
            {
              "id": "002",
              "isActive": false,
              "pageCode": "KCC_CROP",
              "name": "Crop Detail",
              "isCompleted": false
            }
          ],
          "subStepWidth": "40%"
        },
        {
          "name": "Consent & Preview",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "subStep": [
            {
              "id": "001",
              "isActive": false,
              "pageCode": "JOURNEY_PREVIEW",
              "name": "Preview",
              "isCompleted": false
            }
          ],
          "subStepWidth": "50%"
        },
        {
          "name": "Acknowledgement",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "pageCode": "JOURNEY_PREVIEW"
        }
      ],
      company: [
        {
          "name": "Basic Information",
          "info": "10MinVerifyYou",
          "isActive": true,
          "isCompleted": false,
          "subStep": [
            {
                "id": "001",
                "pageCode": 'MOBILE_VERIFY',
                "name": 'Mobile Number',
                "isActive": false,
                "isCompleted": false
            },

        ],
        },
        {
          "name": "Borrower Detail",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "pageCode": "MORE_INFO"
        },
        {
          "name": "Land & Crop Detail",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "subStep": [
            {
              "id": "001",
              "isActive": false,
              "pageCode": "KCC_LAND",
              "name": "Land Detail",
              "isCompleted": false
            },
            {
              "id": "002",
              "isActive": false,
              "pageCode": "KCC_CROP",
              "name": "Crop Detail",
              "isCompleted": false
            }
          ],
          "subStepWidth": "40%"
        },
        {
          "name": "Consent & Preview",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "subStep": [
            {
              "id": "001",
              "isActive": false,
              "pageCode": "JOURNEY_PREVIEW",
              "name": "Preview",
              "isCompleted": false
            }
          ],
          "subStepWidth": "50%"
        },
        {
          "name": "Acknowledgement",
          "info": "10MinVerifyYou",
          "isActive": false,
          "isCompleted": false,
          "pageCode": "JOURNEY_PREVIEW"
        }
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
    CC321: {
      individual: [
        {
          name: "Mobile Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "MOBILE_VERIFY",
        },
        {
          name: "Aadhar Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "EKYC_VERIFY",
        },
      ],
      company: [
        {
          name: "Mobile Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "MOBILE_VERIFY",
        },
        {
          name: "Aadhar Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "EKYC_VERIFY",
        },
      ]
    },
  };

  tabsData = {
    CC321: [
      {
        "displayType": "card",
        "name": "docRequired",
        "label": "Document Required",
        "docReqData": {
          "Individual": [
            {
              "label": "Aadhaar Card",
              "icon": "assets/icons/aadhaar.png"
            },
            {
              "label": "Land Record",
              "icon": "assets/icons/file_black.png"
            }
          ]
        }
      },
      {
        "displayType": "bulletPoints",
        "name": "charges",
        "label": "Charges",
        "displayData": [
          "Digital convenience Fees Rs.500/-plus taxes applicable if final loan approval obtained in web journey"
        ]
      },
      {
        "displayType": "bulletPoints",
        "name": "features",
        "label": "Features",
        "displayData": [
          "Advances for Crop Production , Animal Husbandry and Consumption needs with easy terms.",
          "Effective ROI 4% p.a on prompt repayment.",
          "No security required for limits upto Rs.1.60 lacs.",
          "No processing fees for limits upto Rs.3.0 lacs.",
          "Comprehensive limits for 5 years available."
        ]
      }
    ]
  };

  pageSectionConfig = {
    CC321: {
      "individual": {
        "CUSTOMER_TYPE": [
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "common-info mb-5",
            "sectionContent": {
              "isShow": true,
              "endLinks": [
                {
                  "label": "Resume your Application",
                  "linkType": "REDIRECT",
                  "url": "business-loan/basicinfo/mobile-verify?resumeJourney=true"
                }
              ],
              "paragraphData": "Already Applied?",
              "subContent": "Resume your Application"
            }
          },
          {
            "componentType": "TITLE",
            "mandatory": false,
            "className": "common-title mt-5",
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
            "className": "mt-10 medium",
            "sectionContent": {
              "options": {
                "columnSize": 1
              },
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "DROPDOWN",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": "BORROWER_PROFILE_VARIABLE24",
                  "fieldLabel": "Constitution",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "default": "Individual"
                  },
                  "rulesFor": ["entityMessage"],
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Select Constitution",
                  "fieldName": "constitution",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": true
                },
                {
                  "fieldLabel": "Only Proprietorship Firm, Partnership Firm & Private Limited Company are allowed for Web Journey",
                  "rowNo": null,
                  "columnNo": null,
                  "labelInfo": null,
                  "fieldName": "entityMessage",
                  "validationJson": {
                    "showField": {
                      "if": [
                        {
                          "==": [
                            {
                              "var": "constitution"
                            },
                            "Entity"
                          ]
                        },
                        true,
                        false
                      ]
                    }
                  },
                  "showLabel": true,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": false,
                  "showLabelLightColor": true
                },
                {
                  "fieldDataType": "BUTTON_TOGGLE",
                  "otpType": "PHONE",
                  "isMandatory": true,
                  "fieldLabel": "Identify Yourself",
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
                }
              ]
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
              "endLinks": [
                {
                  "label": "Resume your Application",
                  "linkType": "REDIRECT",
                  "url": "basicinfo/mobile-verify?resumeJourney=true"
                }
              ],
              "paragraphData": "Already Applied?",
              "subContent": "Resume your Application"
            }
          },
          {
            "componentType": "TITLE",
            "validateSection": false,
            "mandatory": false,
            "className": "mb-1",
            "sectionContent": {
              "isShow": true,
              "titleData": "Welcome!"
            }
          },
          {
            "validateSection": false,
            "mandatory": false,
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, provide your savings account number to get started."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "mandatory": true,
            "className": "medium",
            "sectionContent": {
              "options": {
                "columnSize": 1
              },
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "NUMBER",
                  "Masking": true,
                  "isMandatory": true,
                  "fieldLabel": "Enter your Account Number",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 0,
                  "maxLength": 999999999999999,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "",
                  "dataMasking":true,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter 15 digit Account Number",
                  "fieldName": "accountNumber",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": true,
                  "isAccountNumber": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Is 9999999 your Mobile Number?",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL",
                  "options": [
                    {
                      "optionKey": "YES",
                      "optionName": "Yes",
                      "optionValue": "YES"
                    },
                    {
                      "optionKey": "NO",
                      "optionName": "No",
                      "optionValue": "NO"
                    }
                  ],
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
                }
              ]
            }
          },
          {
            "componentType": "CONSENT",
            "className": "mt15",
            "validateSection": true,
            "sectionContent": {
              "config": {
                "options": [
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DND_CONSENT_AGRI_KCC",
                    "submitConsentCodes": [
                      "DND_CONSENT_AGRI_KCC"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "BUREAU_CONSENT_AGRI_KCC",
                    "submitConsentCodes": [
                      "BUREAU_CONSENT_AGRI_KCC"
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
            "validateSection": false,
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
                "waitTimeInSeconds": 120
              },
              "options": {
                "value": null,
                "transactionId": null,
                "notificationType": "COMMON_OTP_TWO",
                "loanProduct": null,
                "createBorrower": true,
                "generateOtp": true
              },
              "isShow": false
            }
          }
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
                      "dataMasking":true,
                      "error": null,
                      "value": null,
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
                      "consentCode": "DND_CONSENT_MSME",
                      "submitConsentCodes": [ "DND_CONSENT_MSME","PRIVACY_POLICY_MSME","TERMS_AND_CONDITIONS_CONSENT_MSME", "DISCLAIMER_MSME"],
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
        "MORE_INFO": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "sectionContent": {
              "isShow": true,
              "titleData": "Tell us more about you"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "common-info mb-10",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please Fill all * mandatory Details."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "mapAndDisable": true,  
                sendOptionKeyForDropDowns:true
               // "autoVerifyMappedFields": true
              },
              "isShow": true,
              "mandatory": true,
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "First Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 0,
                  "maxLength": null,
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
                  "placeholderText": "Enter your First Name",
                  "fieldName": "firstName",
                  "labelInfo": null,
                  "showprefix": true,
                  "showLabel": true,
                  "showField": true,
                  "prefixType": "DROPDOWN",
                  "prefix": null,
                  "options": [],
                  "prefixfieldAccessModifier": "EDITABLE",
                  "prefixCommonProperty": "TITLE",
                  "includePrefixtoFormValue": true,
                  "isPrefixMandatory": true,
                  "prefixfieldName": "title"
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Middle Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": 256,
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
                  "placeholderText": "Enter your Middle Name",
                  "fieldName": "middleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Last Name",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": 256,
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
                  "placeholderText": "Enter your Last Name",
                  "fieldName": "lastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Date Of Birth",
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
                  "commonpropertyType": "MARITAL_STATUS",
                  "fieldLabel": "Marital Status",
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
                  "placeholderText": "Select Maritial Status",
                  "fieldName": "maritalStatus",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Father's / Husband Name",
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
                  "showField": true
                },
                {
                  "fieldDataType": "DROPDOWN",
                  "isMandatory": true,
                  "commonpropertyType": "EDUCATION_TYPE",
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
                  "fieldDataType": "AUTO_COMPLETE",
                  "isMandatory": true,
                  "fieldLabel": "Occupation",
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE24",
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
                  "placeholderText": "Occupation",
                  "fieldName": "borrowerDetailTextVariable24",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "isMandatory": false,
                  "commonpropertyType": "CITIZENSHIP",
                  "fieldLabel": "Nationality",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "default": "INDIAN"
                  },
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
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE11",
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
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE21",
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
                  "fieldName": "borrowerDetailTextVariable12",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
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
                          "!=": [
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
                  "isMandatory": false,
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
                          "!=": [
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
                  "isMandatory": false,
                  "verificationType": "PAN_V3",
                  "fieldLabel": "PAN Number",
                  "fieldAccessModifier": "EDITABLE",
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
                //   "dataMasking":true,
                //   "maxLength": 12,
                //   "error": null,
                //   "value": null,
                //   "validationJson": {
                //     "mandatory":{
                //       "if":[
                //         {
                //           "!=":[
                //             {
                //               "var":"identityNumberTwo"
                //             },
                //             null
                //           ]
                //         },
                //         true,
                //         false
                //       ]
                //     }
                //   },
                //   "rulesFor": null,
                //   "regex": null,
                //   "countryCode": "+91",
                //   "regexErrorMessage": null,
                //   "rowNo": null,
                //   "columnNo": null,
                //   "placeholderText": "",
                //   "fieldName": "identityNumberTwo",
                //   "showLabel": true,
                //   "groupName": "Borrower Information",
                //   "groupIndex": 1,
                //   "showField": true,
                //   "verificationType": true
                // },
                {
                  "fieldDataType": "AADHAR",
                  "isMandatory": true,
                  "className": "mx-w100",
                  "fieldLabel": "Aadhaar Number",
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
                  "placeholderText": "",
                  "fieldName": "identityNumberOne",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "showField": true,
                  "verificationType": "AADHAR",
                  "verificationFieldName": "aadharOtp",
                  "journeyEventCode": "KYC_PASS",
                  "consentPopUp": true,
                  "dataMasking": true,
                  "verifyDisable": false
                },
                {
                  "fieldDataType": "OTP",
                  "otpType": "AADHAR",
                  "isMandatory": true,
                  "fieldLabel": "Enter Aadhar OTP",
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
                  "groupName": "",
                  "groupIndex": 1,
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
                    "requestFor": "BORROWER"
                  }
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "dataMasking":true,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "^[1-9][0-9]{9}$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter a Mobile Number",
                  "fieldName": "mobileNumber",
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Email ID",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": 100,
                  "dataMasking":true,
                  "error": null,
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
                  "groupIndex": 2,
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
                  "groupIndex": 2,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "emailOtp",
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
                    "className": "w-100"
                  }
                },
                {
                  "fieldDataType": "ADDRESS",
                  "fieldLabel": "Address as per Aadhaar",
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
                      "isMandatory": false,
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
                      "isMandatory": false,
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
                      "placeholderText": "Enter Address Line3",
                      "fieldName": "line3",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3,
                      "address":true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": false,
                      "fieldLabel": "Landmark",
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
                      "placeholderText": "Enter Landmark",
                      "fieldName": "subDistrict",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3,
                      "address":true
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
                      "fieldName": "zipCode",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true
                    },
                    {
                      "columnNo": 1,
                      "dependentField": null,
                      "fieldDataType": "DROPDOWN",
                      "fieldLabel": "State",
                      "fieldName": "state",
                      "groupName": null,
                      "commonpropertyType": "PINCODE_STATE",
                      "fieldAccessModifier": "EDITABLE",
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
                      "fieldDataType": "DROPDOWN",
                      "fieldAccessModifier": "EDITABLE",
                      "fieldLabel": "District",
                      "fieldName": "district",
                      "groupName": null,
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
                            "addressOneDistrict"
                          ]
                        }
                      },
                      "value": null,
                      "placeholderText": "Select District",
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
                      "fieldName": "ownershipType",
                      "groupName": null,
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
                      "fieldLabel": "Residing Since (in years)",
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
                    {
                      "fieldDataType": "RADIO",
                      "isMandatory": false,
                      "fieldLabel": "Is Communication Address same as Permanent Address?",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": null,
                      "maxLength": null,
                      "error": null,
                      "value": null,
                      "radioGroupOrientation": "HORIZONTAL",
                      "options": [
                        {
                          "optionKey": "YES",
                          "optionName": "Yes",
                          "optionValue": "YES"
                        },
                        {
                          "optionKey": "NO",
                          "optionName": "No",
                          "optionValue": "NO"
                        }
                      ],
                      "validationJson": {
                        "default": "NO"
                      },
                      "rulesFor": [
                        "addressOneLine1",
                        "addressOneLine2",
                        "addressOneLine3",
                        "addressOneSubDistrict",
                        "addressOneZipCode",
                        "addressOneState",
                        "addressOneDistrict",
                        "addressOneOwnershipType",
                        "addressOneLivingSince"
                      ],
                      "regex": null,
                      "regexErrorMessage": null,
                      "rowNo": null,
                      "columnNo": null,
                      "fieldName": "isComAddress",
                      "placeholderText": "xx x  xxxxx",
                      "labelInfo": null,
                      "showLabel": true,
                      "groupName": null,
                      "groupIndex": null,
                      "showField": true
                    }
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
                  "showLabel": true,
                  "showField": true,
                  "groupName": "Communication Address",
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
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "line1"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
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
                      "placeholderText": "Enter Address Line1",
                      "fieldName": "addressOneLine1",
                      "labelInfo": null,
                      "showField": true,
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
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "line2"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
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
                      "placeholderText": "Enter Address Line2",
                      "fieldName": "addressOneLine2",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true,
                      "rows": 3,
                      "address":true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": false,
                      "fieldLabel": "Address Line 3",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "line3"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
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
                      "placeholderText": "Enter Address Line3",
                      "fieldName": "addressOneLine3",
                      "labelInfo": null,
                      "showLabel": true,
                      "showField": true,
                      "rows": 3,
                      "address":true
                    },
                    {
                      "fieldDataType": "TEXT",
                      "isMandatory": false,
                      "fieldLabel": "Landmark",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 256,
                      "error": null,
                      "value": null,
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "subDistrict"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
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
                      "placeholderText": "Enter Landmark",
                      "fieldName": "addressOneSubDistrict",
                      "labelInfo": null,
                      "showLabel": true,
                      "rows": 3,
                      "address":true
                    },
                    {
                      "fieldDataType": "AUTO_COMPLETE",
                      "isMandatory": true,
                      "fieldLabel": "Pincode",
                      "commonpropertyType": "PINCODE",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 15,
                      "error": null,
                      "value": null,
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "zipCode"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            true,
                            false
                          ]
                        }
                      },
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
                      "showField": true,
                      "options": []
                    },
                    {
                      "columnNo": 1,
                      "dependentField": null,
                      "fieldDataType": "TEXT",
                      "fieldLabel": "State",
                      "placeholderText": "Enter State",
                      "fieldName": "addressOneState",
                      "commonpropertyType": "PINCODE_STATE",
                      "groupName": "Communication Detail",
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
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "state"
                            },
                            {
                              "findPinMasterObject": [
                                "PINBRANCH",
                                "pincode",
                                {
                                  "var": "addressOneZipCode"
                                },
                                "state"
                              ]
                            }
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            true,
                            false
                          ]
                        }
                      },
                      "value": null,
                      "visibleInAdminSection": true,
                      "visibleInBorrowerSection": true,
                      "visibleInDsaSection": true,
                      "visibleInInvestorSection": false,
                      "showLabel": true
                    },
                    {
                      "columnNo": 2,
                      "dependentField": "state",
                      "fieldDataType": "TEXT",
                      "fieldLabel": "District",
                      "fieldAccessModifier": "READ_ONLY",
                      "placeholderText": "Enter District",
                      "fieldName": "addressOneDistrict",
                      "commonpropertyType": "PINCODE_DISTRICT",
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
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "district"
                            },
                            {
                              "findPinMasterObject": [
                                "PINBRANCH",
                                "pincode",
                                {
                                  "var": "addressOneZipCode"
                                },
                                "district"
                              ]
                            }
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            true,
                            false
                          ]
                        }
                      },
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
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "ownershipType"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            true,
                            false
                          ]
                        }
                      },
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
                      "fieldLabel": "Residing Since (in years)",
                      "fieldAccessModifier": "EDITABLE",
                      "minLength": 6,
                      "maxLength": 15,
                      "error": null,
                      "value": null,
                      "minDate": null,
                      "maxDate": [null,null,null,true],
                      "validationJson": {
                        "dontTriggerSelf": true,
                        "calculation": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
                              ]
                            },
                            {
                              "var": "livingSince"
                            },
                            null
                          ]
                        },
                        "disable": {
                          "if": [
                            {
                              "==": [
                                {
                                  "var": "isComAddress"
                                },
                                "YES"
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
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "Annual Agricultural Income ₹",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailNumberVariable7"
                  ],
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 6,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable5",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "onlyNumber":true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "Other Income ₹",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailNumberVariable7"
                  ],
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 6,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable6",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "onlyNumber":true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Total Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "calculation": {
                      "+": [
                        {
                          "var": "borrowerDetailNumberVariable5"
                        },
                        {
                          "var": "borrowerDetailNumberVariable6"
                        }
                      ]
                    }
                  },
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 6,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable7",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "Loan Requirement ₹",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": 160000,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Loan Detail",
                  "groupIndex": 7,
                  "placeholderText": "",
                  "fieldName": "numberVariable3",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "onlyNumber":true
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
                  "groupIndex": 8,
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
                  "groupIndex": 8,
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
                  "groupIndex": 8,
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
                  "groupIndex": 8,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT_AREA",
                  "isMandatory": false,
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
                  "groupIndex": 8,
                  "showLabel": true,
                  "rows": 3
                }
              ]
            }
          }
        ],
        "KCC_LAND_NSTP": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Enter LandHolding  Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please,*fill in the mandatory details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Landholding  Details",
            "sectionContent": {
              "isShow": true,
              "config": {
                "showSerialNo": true,
                "showFooterAction": true,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": true,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldName": "tehsil"
                  },
                  {
                    "fieldLabel": "Revenue Village",
                    "fieldName": "revenueVillage"
                  },
                  {
                    "fieldLabel": "Khatuni No/Agri Land Acct No",
                    "fieldName": "khatuniNo"
                  },
                  {
                    "fieldLabel": "Survey No /Khasra No/ Block No",
                    "fieldName": "khasraNo"
                  }
                ],
                "data": []
              }
            }
          }
        ],
        "KCC_LAND_STP": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Enter LandHolding  Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please,*fill in the mandatory details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Landholding  Details",
            "sectionContent": {
              "isShow": true,
              "config": {
                "showSerialNo": true,
                "showFooterAction": true,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": true,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldName": "tehsil"
                  },
                  {
                    "fieldLabel": "Revenue Village",
                    "fieldName": "revenueVillage"
                  },
                  {
                    "fieldLabel": "Survey Number",
                    "fieldName": "khasraNo"
                  },
                  {
                    "fieldLabel": "Sub Survey Number",
                    "fieldName": "subSurveyNo"
                  }
                ],
                "data": []
              }
            }
          }
        ],
        "KCC_CROP": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Enter Crop Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please,*fill the mandatory details."
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Note: Limit upto 1.60 lakhs can be availed with out any collateral security."
            }
          },
          {
            "componentType": "TABLE",
            "sectionContent": {
              "isShow": true,
              "config": {
                "showSerialNo": true,
                "showFooterAction": true,
                "showFooterCalculations": true,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": true,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Season",
                    "fieldName": "season"
                  },
                  {
                    "fieldLabel": "Crop Name",
                    "fieldName": "crop"
                  },
                  {
                    "fieldLabel": "Irrigated Area (Acre)",
                    "fieldName": "irrigatedAreaInAcre"
                  },
                  {
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldName": "unIrrigatedAreaInAcre"
                  }
                ],
                "data": []
              }
            }
          }
        ],
        "DECLARATION": [
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
                    "consentCode": "DECLARATION_CONSENT_AGRI_KCC",
                    "submitConsentCodes": [
                      "DECLARATION_CONSENT_AGRI_KCC"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DISCLAIMER_AGRI_KCC_1",
                    "submitConsentCodes": [
                      "DISCLAIMER_AGRI_KCC_1"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DISCLAIMER_AGRI_KCC_2",
                    "submitConsentCodes": [
                      "DISCLAIMER_AGRI_KCC_2"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DISCLAIMER_AGRI_KCC_3",
                    "submitConsentCodes": [
                      "DISCLAIMER_AGRI_KCC_3",
                      "TERMS_AND_CONDITIONS_CONSENT_AGRI_KCC",
                      "PRIVACY_POLICY_AGRI_KCC",
                      "DISCLAIMER_AGRI_KCC"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "STATIC",
                    "consentCode": null,
                    "submitConsentCodes": [],
                    "label": "I agree to",
                    "isMultiLabel": false,
                    "className": "w-100",
                    "completed": null,
                    "endLinks": [
                      {
                        "label": "Terms & Conditions",
                        "linkType": "POPUP",
                        "consentCode": "TERMS_AND_CONDITIONS_CONSENT_AGRI_KCC",
                        "popupContent": []
                      },
                      {
                        "label": "Privacy Policy",
                        "linkType": "POPUP",
                        "consentCode": "PRIVACY_POLICY_AGRI_KCC",
                        "popupContent": []
                      },
                      {
                        "label": "and",
                        "isMultiLabel": false,
                        "className": "check-container",
                        "completed": null
                      },
                      {
                        "label": "Disclaimer",
                        "linkType": "POPUP",
                        "consentCode": "DISCLAIMER_AGRI_KCC",
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
        "JOURNEY_PREVIEW": [
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
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "First Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 0,
                  "maxLength": null,
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
                  "placeholderText": "Enter your First Name",
                  "fieldName": "firstName",
                  "labelInfo": null,
                  "showprefix": true,
                  "showLabel": true,
                  "showField": true,
                  "prefixType": "DROPDOWN",
                  "prefix": null,
                  "options": [],
                  "prefixfieldAccessModifier": "READ_ONLY",
                  "prefixCommonProperty": "TITLE",
                  "includePrefixtoFormValue": true,
                  "isPrefixMandatory": true,
                  "prefixfieldName": "title"
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Enter your Middle Name",
                  "fieldName": "middleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Last Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 0,
                  "maxLength": null,
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
                  "placeholderText": "Enter your Last Name",
                  "fieldName": "lastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Enter your Date of Birth",
                  "fieldName": "dateOfBirth",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Gender",
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "gender",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "MARITAL_STATUS",
                  "fieldLabel": "Marital Status",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailTextVariable10"
                  ],
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
                  "isMandatory": false,
                  "fieldLabel": "Father's / Husband Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 0,
                  "maxLength": null,
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
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "EDUCATION_TYPE",
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
                  "groupIndex": 1,
                  "placeholderText": "Education Qualification",
                  "fieldName": "educationType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Occupation",
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE24",
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
                  "groupIndex": 1,
                  "placeholderText": "Occupation",
                  "fieldName": "borrowerDetailTextVariable24",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "CITIZENSHIP",
                  "fieldLabel": "Nationality",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "default": "INDIAN"
                  },
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
                  "fieldDataType": "TEXT",
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE11",
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
                  "groupIndex": 1,
                  "placeholderText": "Religion",
                  "fieldName": "borrowerDetailTextVariable11",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE21",
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
                  "groupIndex": 1,
                  "placeholderText": "Social Category",
                  "fieldName": "borrowerDetailTextVariable12",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "PAN Number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 12,
                  "error": null,
                  "value": null,
                  "dataMasking":true,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "identityNumberTwo",
                  "showLabel": true,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "className": "mx-w100",
                  "fieldLabel": "Aadhaar Number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "dataMasking":true,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "identityNumberOne",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "showField": true,
                  "verificationFieldName": "aadharOtp",
                  "verifyDisable": false
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "OTP",
                  "otpType": "AADHAR",
                  "isMandatory": true,
                  "fieldLabel": "Enter Aadhar OTP",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupName": "",
                  "groupIndex": 1,
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
                    "requestFor": "BORROWER"
                  }
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "dataMasking":true,
                  "rulesFor": null,
                  "regex": "^[1-9][0-9]{9}$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter a Mobile Number",
                  "fieldName": "mobileNumber",
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Email ID",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": 100,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "rowNo": null,
                  "dataMasking":true,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "alternativeUsername",
                  "labelInfo": "Enter Borrower Email Id for further Communication",
                  "showLabel": true,
                  "groupName": "",
                  "groupIndex": 2,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
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
                  "groupName": "Permanent Address",
                  "placeholderText": "Enter Address Line1",
                  "fieldName": "line1",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Address Line 2",
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
                  "groupName": "Permanent Address",
                  "placeholderText": "Enter Address Line2",
                  "fieldName": "line2",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
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
                  "groupName": "Permanent Address",
                  "columnNo": null,
                  "placeholderText": "Enter Address Line3",
                  "fieldName": "line3",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Landmark",
                  "groupName": "Permanent Address",
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
                  "placeholderText": "Enter Landmark",
                  "fieldName": "subDistrict",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Pincode",
                  "groupName": "Permanent Address",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupIndex": 1,
                  "placeholderText": "Enter Pincode",
                  "fieldName": "zipCode",
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
                  "groupName": "Permanent Address",
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
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": null,
                  "fieldDataType": "TEXT",
                  "fieldAccessModifier": "READ_ONLY",
                  "fieldLabel": "District",
                  "fieldName": "district",
                  "commonpropertyType": "PINCODE_CITY",
                  "isMandatory": true,
                  "isMasking": false,
                  "maxLength": null,
                  "groupName": "Permanent Address",
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
                        "addressOneDistrict"
                      ]
                    }
                  },
                  "value": null,
                  "placeholderText": "Select District",
                  "visibleInAdminSection": true,
                  "visibleInBorrowerSection": true,
                  "visibleInDsaSection": true,
                  "visibleInInvestorSection": false,
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": null,
                  "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                  "fieldDataType": "TEXT",
                  "fieldLabel": "Address Type",
                  "fieldAccessModifier": "READ_ONLY",
                  "fieldName": "ownershipType",
                  "groupName": "Permanent Address",
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
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Residing Since (in years)",
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
                  "groupName": "Permanent Address",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "livingSince",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Address Line 1",
                  "fieldAccessModifier": "READ_ONLY",
                  "groupName": "Communication Address",
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
                  "showField": true,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Address Line 2",
                  "groupName": "Communication Address",
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
                  "placeholderText": "Enter Address Line2",
                  "fieldName": "addressOneLine2",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "rows": 3,
                  "groupIndex": 1,
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
                  "placeholderText": "Enter Address Line3",
                  "fieldName": "addressOneLine3",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "rows": 3,
                  "groupIndex": 1,
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
                  "placeholderText": "Enter Landmark",
                  "fieldName": "addressOneSubDistrict",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Pincode",
                  "commonpropertyType": "PINCODE",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
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
                  "groupIndex": 1,
                  "placeholderText": "Enter Pincode",
                  "fieldName": "addressOneZipCode",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "options": []
                },
                {
                  "columnNo": 1,
                  "dependentField": null,
                  "fieldDataType": "TEXT",
                  "fieldLabel": "State",
                  "fieldAccessModifier": "READ_ONLY",
                  "placeholderText": "Enter State",
                  "fieldName": "addressOneState",
                  "commonpropertyType": "PINCODE_STATE",
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
                  "sortIndex": 6,
                  "validationJson": null,
                  "value": null,
                  "visibleInAdminSection": true,
                  "visibleInBorrowerSection": true,
                  "visibleInDsaSection": true,
                  "visibleInInvestorSection": false,
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": "state",
                  "fieldDataType": "TEXT",
                  "fieldLabel": "District",
                  "fieldAccessModifier": "READ_ONLY",
                  "placeholderText": "Enter District",
                  "fieldName": "addressOneDistrict",
                  "commonpropertyType": "PINCODE_DISTRICT",
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
                  "visibleInInvestorSection": false,
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": null,
                  "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                  "fieldAccessModifier": "READ_ONLY",
                  "fieldDataType": "TEXT",
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
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Residing Since (in years)",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "minDate": null,
                  "maxDate": [null,null,null,true],
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "ProductDeclaration",
                  "groupIndex": 1,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "addressOneLivingSince",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Annual Agricultural Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailNumberVariable7"
                  ],
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable5",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Other Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailNumberVariable7"
                  ],
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable6",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Total Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "calculation": {
                      "+": [
                        {
                          "var": "borrowerDetailNumberVariable5"
                        },
                        {
                          "var": "borrowerDetailNumberVariable6"
                        }
                      ]
                    }
                  },
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable7",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "Loan Requirement ₹",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupName": "Loan Detail",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "loanAmount",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": "HOME_BRANCH_STATE",
                  "fieldLabel": "Home Branch State",
                  "fieldAccessModifier": "READ_ONLY",
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
                "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": null,
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch District",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": null,
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch City",
                  "fieldAccessModifier": "READ_ONLY",
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
                "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "commonpropertyType": null,
                  "dependentField": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "labelInfo": null,
                  "groupName": "Your Branch Details",
                  "groupIndex": 1,
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
                  "groupIndex": 1,
                  "showLabel": true,
                  "rows": 3
                }
              ]
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Landholding Details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Landholding Details",
            "sectionContent": {
              "isShow": true,
              "showEditMode": true,
              "pageCode": "KCC_LAND",
              "config": {
                "showSerialNo": true,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": false,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldName": "tehsil"
                  },
                  {
                    "fieldLabel": "Revenue Village",
                    "fieldName": "revenueVillage"
                  },
                  {
                    "fieldLabel": "Khatuni No/Agri Land Acct No",
                    "fieldName": "khatuniNo"
                  },
                  {
                    "fieldLabel": "Survey No /Khasra No/ Block No",
                    "fieldName": "khasraNo"
                  }
                ],
                "data": [],
                "fields": []
              }
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Crop Details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Crop Details",
            "sectionContent": {
              "isShow": true,
              "showEditMode": true,
              "pageCode": "KCC_CROP",
              "config": {
                "showSerialNo": true,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": false,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Season",
                    "fieldName": "season"
                  },
                  {
                    "fieldLabel": "Crop Name",
                    "fieldName": "crop"
                  },
                  {
                    "fieldLabel": "Irrigated Area (Acre)",
                    "fieldName": "irrigatedAreaInAcre"
                  },
                  {
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldName": "unIrrigatedAreaInAcre"
                  }
                ],
                "data": [],
                "fields": []
              }
            }
          }
        ],
        "LOAN_ELIGIBILITY":[
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Congratulations! ",
                  {
                    "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
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
              "paragraphData": ""
            }
          }
        ],
        "LOAN_SUMMARY": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Congratulations! ",
                  {
                    "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
                "cat": [
                  "You have received an Approval of <div class='redirectAction ml-5'>₹ ",
                  {
                    "roundOff": [{"var":"$scope.fetchEligibility.output.kccOutput.totalKCCLimit"}]
                  },
                  "</div>",
                  "&nbsp;",
                  "for your Loan Application.",
                  "&nbsp;"
                ]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
            }
          }, 
          {
            "componentType": "PARAGRAPH",
            "className": "common-info display-flex a-i-c mt-10",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Our Executives will contact you within three business days to complete all formalities."
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
              "paragraphData": ""
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
                    "iconPath": "/assets/icons/smile.png"
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
              "paragraphData": "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details."
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg mt-4",
            "validationJson": {
              "content": {
                "cat": [
                  "Your Lead Reference ID #",
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
                "if":[{"==":[{"or": [
                  {
                    "var": "$scope.loanDetails.loanDetails.crmLeadId"
                  },
                  {
                    "var": "$scope.loanDetails.loanDetails.loanId"
                  }
                ]},null]},false,true]
                
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Your Lead Reference ID #"
            }
          }
        ],
        "STP_CONGRATULATIONS":[
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Congratulations! ",
                  {
                    "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
                "cat": [
                  "You are eligible for loan amount of <div class='redirectAction ml-5'>₹ ",
                  {
                    "roundOff": [{"var":"$scope.fetchEligibility.output.kccOutput.totalKCCLimit"}]
                  },
                  "</div>",
                  "&nbsp;",
                  "(as per calculation)",
                  "&nbsp;"
                ]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
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
              "paragraphData": ""
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "text-info mt-3 f-15",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Note : Table as per calculation and Key Fact statement will be displayed here."
            }
          }
        ],
        "PRODUCT_ERROR": [
          {
              "componentType": "TITLE",
              "validateSection": false,
              "className": "' mb-0 mt-5 d-flex align-items-center'",
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
              "sectionContent": {
                  "titleData": "Dear,",
                  "isShow": true,
                  "endContent": [
                      {
                          "componentType": "ICON",
                          "className": "'ml-10",
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
                  "paragraphData": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
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
        "ESIGN": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Dear ",
                  {
                    "var": "$scope.fetchLoanDetails.loanDetails.borrower"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
                        "var": "$scope.fetchLoanDetails.loanDetails.crmLeadId"
                      },
                      {
                        "var": "$scope.fetchLoanDetails.loanDetails.loanId"
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
                            "var": "$scope.fetchLoanDetails.loanDetails.crmLeadId"
                          },
                          {
                            "var": "$scope.fetchLoanDetails.loanDetails.loanId"
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
              "paragraphData": ""
            }
          },
          {
            "componentType": "HTML_CONTENT",
            "className": "common-info display-flex a-i-c",
            "validationJson": {
              "content": {
                "cat": [
                  "<div class='col-sm-6 bank-detail-info'>Congratulations your loan has been sanctioned with ₹",
                  {
                    "roundOff": [{"var":"$scope.fetchLoanDetails.loanDetails.loanAmount"}]
                  },
                  " amount. Please proceed with e-signing & E-stamping to complete the applications. Kindly visit the Bank Branch in case of any discrepancies</div>",
                ]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
            }
          }, ],
      },
      "company": {
        "CUSTOMER_TYPE": [
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "common-info mb-5",
            "sectionContent": {
              "isShow": true,
              "endLinks": [
                {
                  "label": "Resume your Application",
                  "linkType": "REDIRECT",
                  "url": "business-loan/basicinfo/mobile-verify?resumeJourney=true"
                }
              ],
              "paragraphData": "Already Applied?",
              "subContent": "Resume your Application"
            }
          },
          {
            "componentType": "TITLE",
            "mandatory": false,
            "className": "common-title mt-5",
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
            "className": "mt-10 medium",
            "sectionContent": {
              "options": {
                "columnSize": 1
              },
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "DROPDOWN",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": "BORROWER_PROFILE_VARIABLE24",
                  "fieldLabel": "Constitution",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "default": "Individual"
                  },
                  "rulesFor": ["entityMessage"],
                  "regex": null,
                  "options": [],
                  "regexErrorMessage": null,
                  "errorIconPath": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Select Constitution",
                  "fieldName": "constitution",
                  "showLabel": true,
                  "labelInfo": null,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": true
                },
                {
                  "fieldLabel": "Only Proprietorship Firm, Partnership Firm & Private Limited Company are allowed for Web Journey",
                  "rowNo": null,
                  "columnNo": null,
                  "labelInfo": null,
                  "fieldName": "entityMessage",
                  "validationJson": {
                    "showField": {
                      "if": [
                        {
                          "==": [
                            {
                              "var": "constitution"
                            },
                            "Entity"
                          ]
                        },
                        true,
                        false
                      ]
                    }
                  },
                  "showLabel": true,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": false,
                  "showLabelLightColor": true
                },
                {
                  "fieldDataType": "BUTTON_TOGGLE",
                  "otpType": "PHONE",
                  "isMandatory": true,
                  "fieldLabel": "Identify Yourself",
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
                }
              ]
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
              "endLinks": [
                {
                  "label": "Resume your Application",
                  "linkType": "REDIRECT",
                  "url": "basicinfo/mobile-verify?resumeJourney=true"
                }
              ],
              "paragraphData": "Already Applied?",
              "subContent": "Resume your Application"
            }
          },
          {
            "componentType": "TITLE",
            "validateSection": false,
            "mandatory": false,
            "className": "mb-1",
            "sectionContent": {
              "isShow": true,
              "titleData": "Welcome!"
            }
          },
          {
            "validateSection": false,
            "mandatory": false,
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, provide your savings account number to get started."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "mandatory": true,
            "className": "medium",
            "sectionContent": {
              "options": {
                "columnSize": 1
              },
              "isShow": true,
              "fields": [
                {
                  "fieldDataType": "NUMBER",
                  "Masking": true,
                  "isMandatory": true,
                  "fieldLabel": "Enter your Account Number",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": 0,
                  "maxLength": 999999999999999,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "",
                  "dataMasking":true,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter 15 digit Account Number",
                  "fieldName": "accountNumber",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": null,
                  "groupIndex": null,
                  "showField": true,
                  "isAccountNumber": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Is 9999999 your Mobile Number?",
                  "fieldAccessModifier": "EDITABLE",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL",
                  "options": [
                    {
                      "optionKey": "YES",
                      "optionName": "Yes",
                      "optionValue": "YES"
                    },
                    {
                      "optionKey": "NO",
                      "optionName": "No",
                      "optionValue": "NO"
                    }
                  ],
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
                }
              ]
            }
          },
          {
            "componentType": "CONSENT",
            "className": "mt15",
            "validateSection": true,
            "sectionContent": {
              "config": {
                "options": [
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DND_CONSENT_AGRI_KCC",
                    "submitConsentCodes": [
                      "DND_CONSENT_AGRI_KCC"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "BUREAU_CONSENT_AGRI_KCC",
                    "submitConsentCodes": [
                      "BUREAU_CONSENT_AGRI_KCC"
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
            "validateSection": false,
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
                "waitTimeInSeconds": 120
              },
              "options": {
                "value": null,
                "transactionId": null,
                "notificationType": "COMMON_OTP_TWO",
                "loanProduct": null,
                "createBorrower": true,
                "generateOtp": true
              },
              "isShow": false
            }
          }
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
                      "dataMasking":true,
                      "error": null,
                      "value": null,
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
                      "consentCode": "DND_CONSENT_MSME",
                      "submitConsentCodes": [ "DND_CONSENT_MSME","PRIVACY_POLICY_MSME","TERMS_AND_CONDITIONS_CONSENT_MSME", "DISCLAIMER_MSME"],
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
      "EMAIL_VERIFY": [
        {
            "componentType": "TITLE",
            "className": 'mb-1 mt-20',
            "validateSection": false,
            "mandatory": false,
            "sectionContent": {
                "isShow": true,
                "titleData": "Enter Your Email Id"
            }
        },
        {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,

            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 ",
            "sectionContent": {
                "isShow": true,
                "paragraphData": "Registering your Email Id would ensure that you’re connected with Bank with ease of receiving your Bank Account statement, transaction alerts and OTP alerts.",

            },

        },
        {
            "componentType": "FORM",
            "className":"mb-3 medium mr-10",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
                "options": { 'columnSize': 1,'mapSupplyData': true,'mapAndDisable': true, "journeyEventCode": "EMAIL_VERIFY",},
                "isShow": true,
                "fields": [
                    {

                        "fieldDataType": "TEXT",
                        "isMandatory": false,
                        "fieldLabel": "Email Id",
                        "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                        "minLength": null,
                        "maxLength": null,
                        "error": null,
                        "value": null,
                        "validationJson": null,
                        "dataMasking":true,
                        "rulesFor": null,
                        "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                        "regexErrorMessage": "Please enter a valid E-Mail ID.",
                        "rowNo": null,
                        "columnNo": null,
                        "placeholderText": "Enter Valid Email ID",
                        "fieldName": "alternativeUsername",
                        "labelInfo": null,
                        "showLabel": true,
                        "groupName": null,
                        "groupIndex": null,
                        "showField": true
                    },
                ],
                validityEmitter: new Subject<void>(),
                formValueEmitter: new Subject<void>()
            }
        },
        {
            'componentType': 'OTP',
            "validateSection": false,
            "sectionContent": {
                "fields": {
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
                    "infoText": "A 6 digit OTP has been sent to the above email",
                },
                "options": {
                    'value': null,
                    'notificationType': 'COMMON_OTP_TWO',
                    'loanProduct': null,
                    'createBorrower': true,
                    'generateOtp': true,
                    'journeyEventCode': 'EMAIL_VERIFY'
                }, "isShow": false,

            }
        },
    ],
    "UDYAM_VERIFY": [
        {
            "componentType": "TITLE",
            "classNames": "mb-1 mt-5",
            "validateSection": false,
            "mandatory": false,
            "sectionContent": {
                "titleData": "Udyam Registration Verification",
                "isShow": true
            }
        },
        {
            "componentType": "FORM",
            "className": "medium mt-20",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
                "options": { 'columnSize': 1, 'journeyEventCode': 'UDYAM_VERIFY',"mapSupplyData": true, "mapAndDisable": true},
                "isShow": true,
                "fields": [
                    {
                        "fieldDataType": "TEXT",
                        "isMandatory": true,
                        "fieldLabel": "Udyam Registration Number",
                        "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                        "minLength": null,
                        "maxLength": 19,
                        "error": null,
                        "value": null,
                        "validationJson": null,
                        "rulesFor": null,
                        "regex": "(UDYAM-)((AN|AP|AR|AS|BR|CH|CG|DL|GA|GJ|HR|HP|JK|JH|KR|KL|LA|LD|MP|MH|MN|ML|MZ|NL|OD|PY|PB|RJ|SK|TN|TS|DN|TR|UK|UP|WB)-)((?!0{2})[0-9]{2}-)((?!0{7})[0-9]{7})",
                        "regexErrorMessage": "Udyam Registration Number should be as per format \"UDYAM-AA-00-0000000\".",
                        "rowNo": null,
                        "columnNo": null,
                        "placeholderText": "UDYAM-XX-XX-XXXXXXX",
                        "fieldName": "textVariable3",
                        "udyamHyphen": true,
                        "upperCase": true,
                        "labelInfo": null,
                        "showLabel": true,
                        "groupName": null,
                        "groupIndex": null,
                        "showField": true
                    },
                ]
            }
        }
    ],
    "PAN_VERIFY":[
        {
          "componentType": "TITLE",
          "classNames": "mb-1",
          "validateSection": false,
          "sectionContent": {
            "titleData": "Enter Your PAN Detail",
            "soleProprietorshipTitle": "Enter SoleProprietorship Pan Detail",
            "isShow": true
          }
        },
        {
          "componentType": "FORM",
          "className": "mt-10 medium pan w-50 mob-w-100",
          "validateSection": true,
          "sectionContent": {
            "options": {
              "columnSize": 2,
              "journeyEventCode": "PAN_VERIFY"
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
                "maxDate": [
                  null,
                  null,
                  null,
                  true
                ],
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
                "fieldDataType": "PAN_CARD",
                "isMandatory": true,
                "fieldLabel": "PAN Number",
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 12,
                "error": null,
                "value": null,
                "validationJson": {
                    "property": {
                        "Masking": { "if": [{ "==": [{ "journeyValue": ["isEtb"] }, true] }, true, false] }
                    }
                },
                "rulesFor": null,
                "regex": "^[a-zA-Z]{3}[PFC]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$",
                "regexErrorMessage": "PAN Number should be as per format \"AAAPA9999A, AAAFA9999A OR AAACA9999A\".",
                "dataMasking": true,
                "rowNo": null,
                "columnNo": null,
                "placeholderText": "Enter Valid Email ID",
                "fieldName": "identityNumberTwo",
                "labelInfo": null,
                "showLabel": true,
                "groupName": "",
                "groupIndex": 1,
                "showField": true
            }
            ],
            "validityEmitter": "new Subject<void>()",
            "formValueEmitter": "new Subject<void>()"
          }
        }
      ],
        "MORE_INFO": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "sectionContent": {
              "isShow": true,
              "titleData": "Tell us more about you"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "common-info mb-10",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please Fill all * mandatory Details."
            }
          },
          {
            "componentType": "FORM",
            "validateSection": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "mapAndDisable": true,  
                sendOptionKeyForDropDowns:true
               // "autoVerifyMappedFields": true
              },
              "isShow": true,
              "mandatory": true,
              "fields": [
                {
                    "fieldDataType": "TEXT",
                    "dependentField": null,
                    "isMandatory": true,
                    "commonpropertyType": "BORROWER_PROFILE_VARIABLE5",
                    "fieldLabel": "Constitution",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    // "validationJson": { default: 'Sole Proprietorship' },
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Select Constitution",
                    "fieldName": "companyCategory",
                    "showLabel": true,
                    "labelInfo": null,
                    "groupName": "Business Information",
                    "groupIndex": 1,
                    "showField": true
                },
                {
                    "fieldDataType": "TEXT",
                    "dependentField": null,
                    "isMandatory": true,
                    "commonpropertyType": "BORROWER_PROFILE_VARIABLE5",
                    "fieldLabel": "Business Name",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": "50",
                    "error": null,
                    "value": "",
                    "validationJson": "",
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "companyName",
                    "showLabel": true,
                    "labelInfo": null,
                    "groupName": "Business Information",
                    "groupIndex": 1,
                    "showField": true
                },
                // {
                //     "fieldDataType": "DATE",
                //     "isMandatory": true,
                //     "fieldLabel": "Business Established On",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": null,
                //     "maxLength": null,
                //     "maxDate": [null,null,null,true],
                //     "error": null,
                //     "value": null,
                //     "validationJson": null,
                //     "rulesFor": null,
                //     "regex": null,
                //     "regexErrorMessage": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "groupName": "Borrower Information",
                //     "groupIndex": 1,
                //     "placeholderText": "Enter your Date of Birth",
                //     "fieldName": "dateOfArticle",
                //     "labelInfo": null,
                //     "showLabel": true,
                //     "showField": true
                // },

                {
                    "fieldDataType": "TEXT",
                    "dependentField": null,
                    "isMandatory": true,
                    "commonpropertyType": "BORROWER_PROFILE_VARIABLE5",
                    "fieldLabel": "Number of Directors",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": "2",
                    "maxLength": "2",
                    "error": null,
                    "value": "",
                    "validationJson": {
                        "showField": {
                            "if": [
                                {
                                    "==": [
                                        {
                                            "journeyValue":["metaData.capturedData.constitution"]
                                        },
                                        "Sole Proprietorship"
                                    ]
                                },
                                false,
                                true
                            ]
                        }},
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "textVariable19",
                    "showLabel": true,
                    "labelInfo": null,
                    "groupName": "Business Information",
                    "groupIndex": 1,
                    "showField": false
                },

                // {
                //     "fieldDataType": "TEXT",
                //     "dependentField": null,
                //     "isMandatory": false,
                //     "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE19",
                //     "fieldLabel": "PAN Number",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": 6,
                //     "maxLength": 15,
                //     "error": null,
                //     "value": null,
                //     "validationJson": "",
                //     "rulesFor": null,
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "",
                //     "fieldName": "textVariable19",
                //     "showLabel": true,
                //     "labelInfo": "Kindly provide the PAN Number of Business for Verification which registered with ministry of finance",
                //     "groupName": "Business Information",
                //     "groupIndex": 1,
                //     "showField": true
                // },

                {
                    "fieldDataType": "TEXT",
                    "dependentField": null,
                    "isMandatory": true,
                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE19",
                    "fieldLabel": "CIN Number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 21,
                    "maxLength": 21,
                    "error": null,
                    "value": null,
                    "validationJson": {"showField": {"if": [{"or": [{"==": [{"journeyValue":["metaData.capturedData.constitution"]},"Public Limited"]},{"==": [{"journeyValue":["metaData.capturedData.constitution"]},"Private Limited"]}]},true,false]}},
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "textVariable19",
                    "showLabel": true,
                    "labelInfo": "Kindly provide the GST Number of Business for Verification which registered with ministry of finance",
                    "groupName": "Business Information",
                    "groupIndex": 1,
                    "showField": true
                },

                // {
                //     "fieldDataType": "DROPDOWN",
                //     "dependentField": null,
                //     "isMandatory": false,
                //     "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE19",
                //     "fieldLabel": "GST Number",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": 6,
                //     "maxLength": 15,
                //     "error": null,
                //     "value": null,
                //     "validationJson": "",
                //     "rulesFor": null,
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "",
                //     "fieldName": "textVariable19",
                //     "showLabel": true,
                //     "labelInfo": "Kindly provide the GST Number of Business for Verification which registered with ministry of finance",
                //     "groupName": "Business Information",
                //     "groupIndex": 1,
                //     "showField": true,
                //     "verificationType": 'EMAIL',
                //     "verificationFieldName": 'emailOtp'
                // },
                {
                    "verificationType": "GST",
                    "fieldDataType": "DROPDOWN",
                    "autoSuggest": true,
                    "dependentField": null,
                    "isMandatory": false,
                    "commonpropertyType": "GST_SEARCH",
                    "autosuggestCode": "GST_SEARCH",
                    "fieldLabel": "GST Number",
                    "upperCase": true,
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 15,
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
                    "placeholderText": "",
                    "fieldName": "textVariable5",
                    "showLabel": true,
                    "labelInfo": "kindly provide the GST Number of business for verification",
                    "groupName": "Business Information",
                    "groupIndex": 1,
                    "showField": true,
                    "verifyDisable": false
                },

                {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "commonpropertyType": 'BORROWER_DETAIL_VARIABLE29',
                    "fieldLabel": "Business Id Proof Type",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "showField":{"if":[{"==":[{"journeyValue":["isEtb"]},true]},false,true]}
                    },
                    "rulesFor": ['idProofNo', 'identityNumberTwoDueDate'],
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": 'ID Proof Details',
                    "groupIndex": 2,
                    "placeholderText": "Business Id Proof Type",
                    "fieldName": "borrowerDetailTextVariable29",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": false
                },
                {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Business Id Proof Number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 16,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "default":{"if":[{"or":[{"==":[{"var":"borrowerDetailTextVariable29"},"Aadhaar Cards"]},{"==":[{"var":"borrowerDetailTextVariable29"},"Aadhar Cards"]}]},{"maskData":[{ "journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]},{"==":[{"var":"borrowerDetailTextVariable29"},"PAN Card"]},{"maskData":[{"journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]},{"if":[{"or":[{"==":[{"var":"idProofNo"},{"maskData":[{ "journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]}]},{"==":[{"var":"idProofNo"},{"maskData":[{ "journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]}]}]},null,{"var":"idProofNo"}]}]},
                        "calculation":{"if":[{"or":[{"==":[{"var":"borrowerDetailTextVariable29"},"Aadhaar Cards"]},{"==":[{"var":"borrowerDetailTextVariable29"},"Aadhar Cards"]}]},{"maskData":[{"journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]},{"==":[{"var":"borrowerDetailTextVariable29"},"PAN Card"]},{"maskData":[{"journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]},{"if":[{"or":[{"==":[{"var":"idProofNo"},{"maskData":[{ "journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]}]},{"==":[{"var":"idProofNo"},{"maskData":[{"journeyValue":["metaData.capturedData.companyIdentityNumberTwo"]}]}]}]},null,{"var":"idProofNo"}]}]},
                        "disable": {"if":[{"or":[{"==": [{"var":"borrowerDetailTextVariable29"},"Aadhaar Cards"]}, {"==":[{"var":"borrowerDetailTextVariable29"},"Aadhar Cards"]}]},true, {"==":[{"var":"borrowerDetailTextVariable29"},"PAN Card"]},true,false]},
                        "showField":{"if":[{"==":[{"journeyValue":["isEtb"]},true]},false,true]}
                    },
                    "rulesFor": null,
                    "regex": "",
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "idProofNo",
                    "showLabel": true,
                    "groupName": 'ID Proof Details',
                    "groupIndex": 2,
                    "showField": false
                },
                {
                    "fieldDataType": "DATE",
                    "isMandatory": true,
                    "fieldLabel": "Expiry Date",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "minDate": [null,null,null,true],
                    "maxDate": null,
                    "error": null,
                    "value": null,
                    "validationJson":
                        {
                            'showField': {
                                "if": [
                                    {"and" : [
                                            { "==": [{"journeyValue":["isEtb"]}, false]},
                                            { "or": [
                                                    { "==": [{ "var": 'borrowerDetailTextVariable29' }, 'Driving License'] },
                                                    { "==": [{ "var": 'borrowerDetailTextVariable29' }, 'Passport']},
                                                    { "==": [{ "var": 'borrowerDetailTextVariable29' }, undefined] }
                                                ]
                                            },
                                        ]},
                                    true, false]
                            },
                            "mandatory": {
                                "if": [{ "or": [{ "==": [{ "var": 'borrowerDetailTextVariable29' }, 'Driving License'] }, { "==": [{ "var": 'borrowerDetailTextVariable29' }, 'Passport'] }, { "==": [{ "var": 'borrowerDetailTextVariable29' }, undefined] }] }, true, false]
                            }
                        },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": 'ID Proof Details',
                    "groupIndex": 2,
                    "placeholderText": "DD/MM/YYYY",
                    "fieldName": "identityNumberTwoDueDate",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": false
                },

                // {
                //     "fieldDataType":"ADDRESS",
                //     "fieldLabel": "Address",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":"asdsfdsfsd",
                //     "validationJson":null,
                //     "rulesFor":null,
                //     "regex":null,
                //     "regexErrorMessage":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"xx x  xxxxx",
                //     "fieldName":"companyAddress",
                //     "showLabel":false,
                //     "showField":true,
                //     "groupName": "Company Registered Address",
                //     "groupIndex":2,
                //     "addressFields":[
                //         {
                //             "fieldDataType":"TEXT",
                //             "isMandatory":true,
                //             "fieldLabel": "Address Line 1",
                //             "fieldAccessModifier":"EDITABLE",
                //             "minLength":3,
                //             "maxLength":20,
                //             "error":null,
                //             "value": null,
                //             "validationJson": null,
                //             "rulesFor": null,
                //             "regex": null,
                //             "regexErrorMessage": null,
                //             "rowNo": null,
                //             "columnNo": null,
                //             "placeholderText": "Enter Address Line1",
                //             "fieldName": "line1",
                //             "labelInfo": null,
                //             "showLabel": true,
                //             "rows": 3
                //         },
                //         {
                //             "fieldDataType": "TEXT",
                //             "isMandatory": true,
                //             "fieldLabel": "Address Line 2",
                //             "fieldAccessModifier": "EDITABLE",
                //             "minLength": 3,
                //             "maxLength": 20,
                //             "error": null,
                //             "value": null,
                //             "validationJson": null,
                //             "rulesFor": null,
                //             "regex": null,
                //             "regexErrorMessage": null,
                //             "rowNo": null,
                //             "columnNo": null,
                //             "placeholderText": "Enter Address Line2",
                //             "fieldName": "line2",
                //             "labelInfo": null,
                //             "showLabel": true,
                //             "rows": 3
                //         },
                //         {
                //             "fieldDataType": "TEXT",
                //             "isMandatory": false,
                //             "fieldLabel": "Address Line 3",
                //             "fieldAccessModifier": "EDITABLE",
                //             "minLength": 3,
                //             "maxLength": 20,
                //             "error": null,
                //             "value": null,
                //             "validationJson": null,
                //             "rulesFor": null,
                //             "regex": null,
                //             "regexErrorMessage": null,
                //             "rowNo": null,
                //             "columnNo": null,
                //             "placeholderText": "Enter Address Line3",
                //             "fieldName": "line3",
                //             "labelInfo": null,
                //             "showLabel": true,
                //             "rows": 3
                //         },
                //         {
                //             "fieldDataType":"TEXT",
                //             "isMandatory":false,
                //             "fieldLabel": "Pincode",
                //             "fieldAccessModifier":"EDITABLE",
                //             "commonpropertyType": "PINCODE",
                //             "minLength":null,
                //             "maxLength":999999,
                //             "error":null,
                //             "value":null,
                //             "validationJson":null,
                //             "rulesFor":["state","city"],
                //             "regex":null,
                //             "regexErrorMessage":null,
                //             "rowNo":null,
                //             "columnNo":null,
                //             "groupName":null,
                //             "groupIndex":null,
                //             "placeholderText":"Enter Pincode",
                //             "fieldName":"zipCode",
                //             "labelInfo":null,
                //             "showLabel":true,
                //             "showField":true
                //         },
                //         {
                //             "columnNo": 1,
                //             "dependentField": null,
                //             "fieldDataType": "TEXT",
                //             "fieldLabel": "State",
                //             "fieldName": "state",
                //             "groupName": "Communication Detail",
                //             "fieldAccessModifier": "EDITABLE",
                //             "isMandatory": true,
                //             "isMasking": false,
                //             "maxLength": null,
                //             "minLength": null,
                //             "options": [],
                //             "regex": null,
                //             "regexForJS": null,
                //             "regexErrorMessage": null,
                //             "rowNo": 4,
                //             "rulesFor": null,
                //             "showField": true,
                //             "sortIndex": 6,
                //             "validationJson": {
                //                 "calculation": {
                //                     "findPinMasterObject": [
                //                         "PINBRANCH",
                //                         "pincode",
                //                         {
                //                             "var": "zipCode"
                //                         },
                //                         "state"
                //                     ]
                //                 }
                //             },
                //             "value": null,
                //             "placeholderText":"Select State",
                //             "visibleInAdminSection": true,
                //             "visibleInBorrowerSection": true,
                //             "visibleInDsaSection": true,
                //             "visibleInInvestorSection": false,
                //             "showLabel":true
                //         },
                //         {
                //             "columnNo": 2,
                //             "dependentField": "state",
                //             "fieldDataType": "TEXT",
                //             "fieldAccessModifier": "EDITABLE",
                //             "fieldLabel": "City",
                //             "fieldName": "city",
                //             "groupName": "Communication Detail",
                //             "commonpropertyType": "PINCODE_CITY",
                //             "isMandatory": false,
                //             "isMasking": false,
                //             "maxLength": null,
                //             "minLength": null,
                //             "options": [],
                //             "regex": null,
                //             "regexForJS": null,
                //             "regexErrorMessage": null,
                //             "rowNo": 4,
                //             "rulesFor": null,
                //             "showField": true,
                //             "sortIndex": 5,
                //             "validationJson": {
                //                 "calculation": {
                //                     "findPinMasterObject": [
                //                         "PINBRANCH",
                //                         "pincode",
                //                         {
                //                             "var": "zipCode"
                //                         },
                //                         "city"
                //                     ]
                //                 }
                //             },
                //             "value": null,
                //             "placeholderText":"Select City",
                //             "visibleInAdminSection": true,
                //             "visibleInBorrowerSection": true,
                //             "visibleInDsaSection": true,
                //             "visibleInInvestorSection": false,
                //             "showLabel":true
                //         },
                //         {
                //             "columnNo": 3,
                //             "dependentField": null,
                //             "fieldDataType": "TEXT",
                //             "fieldAccessModifier": "EDITABLE",
                //             "fieldLabel": "District",
                //             "fieldName": "district",
                //             "groupName": "Communication Detail",
                //             "isMandatory": true,
                //             "isMasking": false,
                //             "maxLength": null,
                //             "minLength": null,
                //             "options": [],
                //             "regex": null,
                //             "regexForJS": null,
                //             "regexErrorMessage": null,
                //             "rowNo": 4,
                //             "rulesFor": null,
                //             "showField": true,
                //             "sortIndex": 5,
                //             "validationJson": null,
                //             "value": null,
                //             "placeholderText":"Select district",
                //             "visibleInAdminSection": true,
                //             "visibleInBorrowerSection": true,
                //             "visibleInDsaSection": true,
                //             "visibleInInvestorSection": false,
                //             "showLabel":true
                //         }
                //     ]
                // },


                {
                    "fieldDataType": "ADDRESS",
                    "fieldLabel": "Company Registered Address",
                    "fieldAccessModifier": "READ_ONLY",
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
                    "groupName": "Business address",
                    "groupIndex": 3,
                    "addressFields": [
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "Address 1",
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
                            "fieldName": "line1",
                            "labelInfo": null,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": false,
                            "fieldLabel": "Address 2",
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
                            "fieldName": "line2",
                            "labelInfo": null,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": false,
                            "fieldLabel": "Address 3",
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
                        }, {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": false,
                            "fieldLabel": "Pincode",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": 6,
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
                            "columnNo": 2,
                            "dependentField": null,
                            "fieldDataType": "TEXT",
                            "fieldLabel": "District",
                            "fieldName": "district",
                            "groupName": "Communication Detail",
                            "isMandatory": false,
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
                            "validationJson": null,
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "visibleInInvestorSection": false,
                            "showLabel": true,
                            "fieldAccessModifier": "READ_ONLY"
                        },
                        {
                            "columnNo": 1,
                            "dependentField": null,
                            "fieldDataType": "TEXT",
                            "fieldLabel": "State",
                            "fieldName": "state",
                            "groupName": "Communication Detail",
                            "isMandatory": false,
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
                            "validationJson": null,
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "visibleInInvestorSection": false,
                            "showLabel": true,
                            "fieldAccessModifier": "READ_ONLY"
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
                            "fieldDataType": "RADIO",
                            "isMandatory": false,
                            "fieldLabel": "Is Communication Address same as Permanent Address?",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "radioGroupOrientation": "HORIZONTAL",
                            "options": [
                                {
                                    "optionKey": "yes",
                                    "optionName": "Yes",
                                    "optionValue": "YES"
                                },
                                {
                                    "optionKey": "no",
                                    "optionName": "No",
                                    "optionValue": "NO"
                                }
                            ],
                            "validationJson": {
                                "default": "no"
                            },
                            "rulesFor": [
                                "addressOneLine1",
                                "addressOneLine2",
                                "addressOneLine3",
                                "addressOneZipCode",
                                "addressOneState",
                                "addressOneDistrict",
                                "borrowerDetailTextVariable30",
                                "addressOneDocument"
                            ],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "fieldName": "borrowerDetailTextVariable60",
                            "placeholderText": "",
                            "labelInfo": null,
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": null,
                            "showField": true
                        }
                    ]
                },

                {
                    "fieldDataType": "ADDRESS",
                    "fieldLabel": "Business/Godown address",
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
                    "placeholderText": "",
                    "fieldName": "addressOne",
                    "showLabel": true,
                    "showField": true,
                    "groupName": "Business/Godown address",
                    "groupIndex": 4,
                    "addressFields": [
                        {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": true,
                            "fieldLabel": "Address 1",
                            "fieldAccessModifier": "EDITABLE",
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "dontTriggerSelf":true,
                                "calculation": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        {
                                            "var": "line1"
                                        },
                                        ""
                                    ]
                                },
                                "disable": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
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
                            "placeholderText": "",
                            "fieldName": "addressOneLine1",
                            "labelInfo": null,
                            "showField": true,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": true,
                            "fieldLabel": "Address 2",
                            "fieldAccessModifier": "EDITABLE",
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "dontTriggerSelf":true,
                                "calculation": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        {
                                            "var": "line2"
                                        },
                                        null
                                    ]
                                },
                                "disable": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
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
                            "placeholderText": "",
                            "fieldName": "addressOneLine2",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": false,
                            "fieldLabel": "Address 3",
                            "fieldAccessModifier": "EDITABLE",
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "dontTriggerSelf":true,
                                "calculation": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        {
                                            "var": "line3"
                                        },
                                        null
                                    ]
                                },
                                "disable": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
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
                            "placeholderText": "",
                            "fieldName": "addressOneLine3",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "AUTO_COMPLETE",
                            "isMandatory": true,
                            "fieldLabel": "Pincode",
                            "fieldAccessModifier": "EDITABLE",
                            "commonpropertyType": "PINCODE",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "calculation": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        {
                                            "var": "zipCode"
                                        },
                                        null
                                    ]
                                },
                                "disable": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        true,
                                        false
                                    ]
                                },
                                "dontTriggerSelf":true
                            },
                            "rulesFor": ["addressOneState","addressOneDistrict"],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": "Communication Address",
                            "groupIndex": 2,
                            "placeholderText": "",
                            "fieldName": "addressOneZipCode",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            "dontTriggerSelfValidation": true
                        },
                        {
                            "columnNo": 1,
                            "fieldDataType": "TEXT",
                            "fieldLabel": "State",
                            "fieldAccessModifier": "READ_ONLY",
                            "fieldName": "addressOneState",
                            "groupName": "Communication Detail",
                            "isMandatory": false,
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
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        {
                                            "var": "state"
                                        },
                                        {"if":[{"==":[{"checkNull":[{"var":"addressOneZipCode"}]},false]},  {
                                                "findPinMasterObject": [
                                                    "PINBRANCH",
                                                    "pincode",
                                                    {
                                                        "var": "addressOneZipCode"
                                                    },
                                                    "state"
                                                ]
                                            },""]}
                                    ]
                                }
                            },
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "visibleInInvestorSection": false,
                            "showLabel": true,
                            "placeholderText": ""

                        },
                        {
                            "columnNo": 2,
                            "fieldDataType": "TEXT",
                            "fieldLabel": "District",
                            "fieldAccessModifier": "READ_ONLY",
                            "fieldName": "addressOneDistrict",
                            "groupName": "Communication Detail",
                            "isMandatory": false,
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
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerDetailTextVariable60"
                                                },
                                                "yes"
                                            ]
                                        },
                                        {
                                            "var": "district"
                                        },
                                        {"if":[{"==":[{"checkNull":[{"var":"addressOneZipCode"}]},false]},  {
                                                "findPinMasterObject": [
                                                    "PINBRANCH",
                                                    "pincode",
                                                    {
                                                        "var": "addressOneZipCode"
                                                    },
                                                    "district"
                                                ]
                                            },""]}
                                    ]
                                }
                            },
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "visibleInInvestorSection": false,
                            "showLabel": true,
                            "placeholderText": ""
                        },

                    ]
                },

                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "commonpropertyType":"BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE10",
                //     "fieldLabel": "sector",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":["crp","loanApplicationNumberVariable26"],
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Select sector",
                //     "fieldName":"borrowerCompanyTextVariable10",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "commonpropertyType":"BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE7",
                //     "fieldLabel": "sub sector",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Select sub sector",
                //     "fieldName":"borrowerCompanyTextVariable1",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "fieldLabel": "Occupation",
                //     "commonpropertyType":"BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE47",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor": [
                //         "textVariable48",
                //         "textVariable49"
                //     ],
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Occupation",
                //     "fieldName":"textVariable47",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                //
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":"textVariable47",
                //     "isMandatory":true,
                //     "fieldLabel": "Borrower Category",
                //     "commonpropertyType":"BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE48",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson": {
                //         "disable":
                //             {
                //                 "if": [{
                //                     "==": [{ "var": "textVariable47" }, null]
                //                 }, true, false]
                //             }
                //     },
                //     "rulesFor": [
                //         "textVariable49"
                //     ],
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Borrower Category",
                //     "fieldName":"textVariable48",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":"textVariable48",
                //     "isMandatory":true,
                //     "fieldLabel": "Purpose of Advance",
                //     "commonpropertyType":"BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE49",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson": {
                //         "disable": {
                //             "if": [{
                //                 "==": [{ "var": "textVariable48" }, null]
                //             }, true, false]
                //         }
                //     },
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Purpose of Advance",
                //     "fieldName":"textVariable49",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "commonpropertyType":"COMPANY_VARIABLE14",
                //     "isMandatory":true,
                //     "fieldLabel": "Type of Activity",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"-type of activity-",
                //     "fieldName":"borrowerCompanyTextVariable14",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "commonpropertyType":"CBS_TEXT_VARIABLE15",
                //     "isMandatory":true,
                //     "fieldLabel": "Line of Activity",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"-line of activity-",
                //     "fieldName":"borrowerCompanyTextVariable13",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                //
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "commonpropertyType":"COMPANY_REPRESENTATIVE_VARIABLE5",
                //     "fieldLabel": "Experience in line of business",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Experience in line of business",
                //     "fieldName":"textVariable35",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Employment Information",
                //     "groupIndex":3,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"TEXT",
                //     "dependentField":null,
                //     "isMandatory":false,
                //     "fieldLabel": "Product Name",
                //     "fieldAccessModifier":"READ_ONLY",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":"Kishore Mudra",
                //     "validationJson":{
                //         "default": "Kishore Mudra"
                //     },
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"productName",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "commonpropertyType":"LOAN_APPLICATION_VARIABLE14",
                //     "fieldLabel": "Type of Facility",
                //     "fieldAccessModifier":"READ_ONLY",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":"Term Loan",
                //     "validationJson":{
                //         "default": "Term Loan"
                //     },
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Type of Facility",
                //     "fieldName":"loanApplicationTextVariable14",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                //
                // {
                //     "fieldDataType":"DROPDOWN",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "commonpropertyType":"LOAN_APPLICATION_VARIABLE13",
                //     "fieldLabel": "Purpose of Loan",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":["loanApplicationTextVariable15"],
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"Purpose of Loan",
                //     "fieldName":"loanApplicationTextVariable13",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                // {
                //     "fieldDataType": "TEXT",
                //     "dependentField": null,
                //     "isMandatory": true,
                //     "fieldLabel": "Details of purpose of loan",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": 1,
                //     "maxLength": 15,
                //     "error": null,
                //     "value": "",
                //     "validationJson":{
                //         "showField":{
                //             "if":[{"==":[{"var":"loanApplicationTextVariable13"},"Others"]}]
                //         },
                //         "mandatory": {
                //             "if": [{"==": [{"var": "loanApplicationTextVariable13"},"Others"]},true,false]
                //         }
                //     },
                //     "rulesFor": [],
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "",
                //     "fieldName": "loanApplicationTextVariable15",
                //     "showLabel": true,
                //     "labelInfo": null,
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField": true
                // },
                // {
                //     "fieldDataType":"TABLE",
                //     "dependentField":null,
                //     "isMandatory":false,
                //     "fieldLabel": "",
                //     "fieldAccessModifier":"READ_ONLY",
                //     "addTableFields": true,
                //     "minLength":null,
                //     "maxLength":null,
                //     "error":null,
                //     "value":[],
                //     "validationJson":"",
                //     "rulesFor":["loanApplicationNumberVariable4","loanApplicationNumberVariable5","loanAmount"],
                //     "regex":null,
                //     "addStatus":false,
                //     "isTableFooter":true,
                //     "tableFooterData":{
                //         "fieldLabel":"Total Project Cost",
                //         "value":0,"mappingKey":"PID4",
                //         "fieldName":"loanApplicationNumberVariable3", "valuePrefix": "₹"
                //     },
                //     "emitedValue":[],
                //     "showAction":true,
                //     "addMore": true,
                //     "tableRowActions":[
                //         {"actionCode": "ACCEPT","icon": "check",
                //             "className": "clr-green","isDisplay": true
                //         },
                //         {"actionCode": "EDIT","icon": "edit",
                //             "className": "clr-blue","isDisplay": false
                //         },
                //         {"actionCode": "DELETE","icon": "delete",
                //             "className": "clr-red","isDisplay": true
                //         }
                //     ],
                //     "validateRowBeforeAdd": true,
                //     "showSerialNo": true,
                //     "tableFields":[
                //         {
                //             "fieldDataType":"TEXT",
                //             "dependentField":null,
                //             "isMandatory":true,
                //             "fieldLabel": "Details of Items to be Purchased",
                //             "fieldAccessModifier":"EDITABLE",
                //             "minLength":null,
                //             "maxLength":null,
                //             "error":null,
                //             "value":"",
                //             "validationJson":"",
                //             "rulesFor":null,
                //             "regex":"^[A-Za-z ]+$",
                //             "options":[],
                //             "regexErrorMessage":null,
                //             "errorIconPath":null,
                //             "rowNo":null,
                //             "columnNo":null,
                //             "placeholderText":"",
                //             "fieldName":"PID1",
                //             "showLabel":true,
                //             "labelInfo":null,
                //             "groupName":"Loan Information",
                //             "groupIndex":1,
                //             "showField":true
                //         },
                //         {
                //             "fieldDataType":"TEXT",
                //             "dependentField":null,
                //             "isMandatory":true,
                //             "fieldLabel": "Name of Supplier",
                //             "fieldAccessModifier":"EDITABLE",
                //             "minLength":null,
                //             "maxLength":null,
                //             "error":null,
                //             "value":"",
                //             "validationJson":"",
                //             "rulesFor":null,
                //             "regex":null,
                //             "options":[],
                //             "regexErrorMessage":null,
                //             "errorIconPath":null,
                //             "rowNo":null,
                //             "columnNo":null,
                //             "placeholderText":"",
                //             "fieldName":"PID2",
                //             "showLabel":true,
                //             "labelInfo":null,
                //             "groupName":"",
                //             "groupIndex":1,
                //             "showField":true
                //         },
                //         {
                //             "fieldDataType":"TEXT",
                //             "dependentField":null,
                //             "isMandatory":false,
                //             "fieldLabel": "Supplier's Address",
                //             "fieldAccessModifier":"EDITABLE",
                //             "minLength":null,
                //             "maxLength":null,
                //             "error":null,
                //             "value":"",
                //             "validationJson":"",
                //             "rulesFor":null,
                //             "regex":null,
                //             "options":[],
                //             "regexErrorMessage":null,
                //             "errorIconPath":null,
                //             "rowNo":null,
                //             "columnNo":null,
                //             "placeholderText":"",
                //             "fieldName":"PID3",
                //             "showLabel":true,
                //             "labelInfo":null,
                //             "groupName":"",
                //             "groupIndex":1,
                //             "showField":true
                //         },
                //         {
                //             "fieldDataType":"NUMBER",
                //             "dependentField":null,
                //             "isMandatory":true,
                //             "fieldLabel": "Item Cost (in Rs.)",
                //             "fieldAccessModifier":"EDITABLE",
                //             "minLength":null,
                //             "maxLength":null,
                //             "error":null,
                //             "value":"",
                //             "validationJson":"",
                //             "rulesFor":["loanApplicationNumberVariable4"],
                //             "regex":null,
                //             "options":[],
                //             "regexErrorMessage":null,
                //             "errorIconPath":null,
                //             "rowNo":null,
                //             "columnNo":null,
                //             "placeholderText":"",
                //             "fieldName":"PID4",
                //             "numberOnly":true,
                //             "showLabel":true,
                //             "labelInfo":null,
                //             "groupName":null,
                //             "groupIndex":1,
                //             "showField":true
                //         }
                //
                //     ],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"loanApplicationTableVariable1",
                //     "showLabel":true,
                //     "labelInfo":null,
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                //
                // },
                // {
                //     "fieldDataType":"NUMBER",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "fieldLabel": "Requested Loan Amount ₹",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":1000,
                //     "maxLength":50000,
                //     "error":null,
                //     "value":null,
                //     "validationJson": {
                //         "validation": {
                //             "if": [
                //                 {">": [{"var": "loanApplicationTableVariable1"},{"var": "loanAmount"}]}
                //             ]
                //         },
                //         "validationError": "Requested Loan Amount should not be greater than Total Project Cost"
                //     },
                //     "rulesFor":["loanApplicationNumberVariable4"],
                //     "regex":"^[0-9]+00$",
                //     "options":[],
                //     "regexErrorMessage":"Requested Loan Amount should be in multiples of 100",
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"loanAmount",
                //     "showLabel":true,
                //     "labelInfo":"Kindly enter the Requested Loan Amount in multiple of 100",
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"NUMBER",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "fieldLabel": "Requested tenure in month(s)",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":1,
                //     "maxLength":84,
                //     "error":null,
                //     "value":null,
                //     "validationJson":"",
                //     "rulesFor":null,
                //     "regex": "^([1-9]|[1234567]\\d|8[0-4])$",
                //     "options":[],
                //     "regexErrorMessage": "Requested Tenure should not exceed 84",
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"loanTenure",
                //     "showLabel":true,
                //     "labelInfo":"Kindly provide the requested laon period in Months. Loan period need to be below product max limit",
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"DATE",
                //     "dependentField":null,
                //     "isMandatory":true,
                //     "fieldLabel": "Requested First EMI Date",
                //     "fieldAccessModifier":"EDITABLE",
                //     "minLength":6,
                //     "maxLength":15,
                //     "minDate": "new Date(new Date().setMonth(new Date().getMonth()+1))",
                //     "maxDate": "new Date(new Date().setMonth(new Date().getMonth()+2))",
                //     "error":null,
                //     "value":null,
                //     "validationJson":{
                //         "default":{
                //             "addDate":[{"currentDate":[]},1,"MONTHS"]
                //         }
                //     }
                //     ,
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"loanApplicationDateVariable1",
                //     "showLabel":true,
                //     "labelInfo":"This will be your main home branch and your account will be maintained",
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"NUMBER",
                //     "dependentField":null,
                //     "isMandatory":false,
                //     "fieldLabel": "Margin/ Borrower Contribution ₹",
                //     "fieldAccessModifier":"READ_ONLY",
                //     "minLength":0,
                //     "maxLength":9999999999,
                //     "error":null,
                //     "value":"",
                //     "validationJson":{
                //         "default":0,
                //         "calculation":{
                //             "if": [
                //                 {">": [
                //                         {"-":[{"var":"loanApplicationTableVariable1"},{"var":"loanAmount"}]},
                //                         0]},
                //                 {"-":[{"var":"loanApplicationTableVariable1"},{"var":"loanAmount"}]},
                //                 0]
                //         }},
                //     "rulesFor":["loanApplicationNumberVariable5"],
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"loanApplicationNumberVariable4",
                //     "showLabel":true,
                //     "labelInfo":"This will be difference between Total Project Cost and Requested loan amount which will be contribute from Borrower",
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                // {
                //     "fieldDataType":"NUMBER",
                //     "dependentField":null,
                //     "isMandatory":false,
                //     "fieldLabel": "Margin/ Borrower Contribution Percentage",
                //     "fieldAccessModifier":"READ_ONLY",
                //     "minLength":0,
                //     "maxLength":9999999999,
                //     "error":null,
                //     "value":"",
                //     "validationJson":{
                //         "runAlways": true,
                //         "calculation":{
                //             "*":[
                //                 100,
                //                 {"/": [
                //                         {"var":"loanApplicationNumberVariable4"},
                //                         {"var":"loanApplicationTableVariable1"}
                //                     ]}
                //             ]
                //         }
                //     },
                //     "rulesFor":null,
                //     "regex":null,
                //     "options":[],
                //     "regexErrorMessage":null,
                //     "errorIconPath":null,
                //     "rowNo":null,
                //     "columnNo":null,
                //     "placeholderText":"",
                //     "fieldName":"loanApplicationNumberVariable5",
                //     "showLabel":true,
                //     "labelInfo":"This will be percentage of difference between Total Project Cost and Requested loan amount which will be contribute from Borrower",
                //     "groupName":"Loan Information",
                //     "groupIndex":4,
                //     "showField":true
                // },
                //
                // {
                //     "fieldDataType": "DROPDOWN",
                //     "dependentField": null,
                //     "isMandatory": false,
                //     "fieldLabel": "crp",
                //     "fieldAccessModifier": "READ_ONLY",
                //     "minLength": null,
                //     "maxLength": 9999999999,
                //     "error": null,
                //     "value": "0",
                //     "validationJson": {
                //         "runAlways": true,
                //         "calculation":{"if":[{"==":[{"var":"textvariable10"},"MICRO"]},"0","0.5"]},
                //         "default":"0"
                //     },
                //     "rulesFor": null,
                //     "regex": null,
                //     "options": [
                //         {"value":"0","sortIndex": 0,"name":"0"},
                //         {"value":"0.5","sortIndex": 1,"name":"0.5"}],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "crp",
                //     "fieldName": "crp",
                //     "showLabel": true,
                //     "labelInfo":null,
                //     "groupName": null,
                //     "groupIndex": null,
                //     "showField": false
                // },
                // {
                //     "fieldDataType": "NUMBER",
                //     "dependentField": null,
                //     "isMandatory": true,
                //     "fieldLabel": "Preferential Interest Rate",
                //     "fieldAccessModifier": "READ_ONLY",
                //     "minLength": 0,
                //     "maxLength": 9999999999,
                //     "error": null,
                //     "value": "",
                //     "validationJson": {
                //         "runAlways": true,
                //         "calculation":{"if":[{"==":[{"var":"textvariable10"},"MICRO"]},2.75,3.25]}
                //     },
                //     "rulesFor": null,
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "preferential_interest_rate",
                //     "fieldName": "loanApplicationNumberVariable26",
                //     "showLabel": true,
                //     "labelInfo":null,
                //     "groupName": null,
                //     "groupIndex": null,
                //     "showField": false
                // },
                //
                // {
                //     "fieldDataType": "AUTO_COMPLETE",
                //     "dependentField": null,
                //     "isMandatory": true,
                //     "commonpropertyType": "HOME_BRANCH_STATE",
                //     "fieldLabel": "Home Branch State",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": null,
                //     "maxLength": null,
                //     "error": null,
                //     "value": null,
                //     "validationJson": null,
                //     "rulesFor": [
                //         "homeBranchDistrict"
                //     ],
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "Home Branch State",
                //     "fieldName": "homeBranchState",
                //     "showLabel": true,
                //     "labelInfo": "This Will Be Bank Branch State where your case will be initiated",
                //     "groupName": "Choose your branch",
                //     "groupIndex": 8,
                //     "showField": true
                // },
                // {
                //     "fieldDataType": "AUTO_COMPLETE",
                //     "dependentField": "homeBranchState",
                //     "commonpropertyType": "HOME_BRANCH_DISTRICT",
                //     "isMandatory": true,
                //     "fieldLabel": "Home Branch District",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": null,
                //     "maxLength": null,
                //     "error": null,
                //     "value": null,
                //     "validationJson": {
                //         "property": {
                //             "dependentField": {
                //                 "if": [
                //                     {
                //                         "==": [
                //                             {
                //                                 "journeyValue": [
                //                                     "isEtb"
                //                                 ]
                //                             },
                //                             true
                //                         ]
                //                     },
                //                     null,
                //                     "homeBranchState"
                //                 ]
                //             }
                //         },
                //         "dontTriggerSelf": true,
                //         "showLoaderOnEndpoints": true,
                //         "apiEndpoint": {
                //             "if": [
                //                 {
                //                     "and": [
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "homeBranchState"
                //                                 },
                //                                 null
                //                             ]
                //                         },
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "homeBranchState"
                //                                 },
                //                                 ""
                //                             ]
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     "apiType": "MICRO_SERVICE",
                //                     "parameterConfig": [
                //                         [
                //                             "microservicetoken",
                //                             "oauthAccessToken"
                //                         ],
                //                         [
                //                             "state",
                //                             "homeBranchState"
                //                         ]
                //                     ],
                //                     "url": "/api-v3/restPublic/master-branch-list-new",
                //                     "RequestType": "POST",
                //                     "parserMethodName": "branchParser"
                //                 },
                //                 "REJECT_CALL"
                //             ]
                //         }
                //     },
                //     "rulesFor": [
                //         "homeBranchCity"
                //     ],
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "Home Branch District",
                //     "fieldName": "homeBranchDistrict",
                //     "showLabel": true,
                //     "labelInfo": "This Will Be Bank Branch district where your case will be initiated",
                //     "groupName": "Choose your branch",
                //     "groupIndex": 8,
                //     "showField": true
                // },
                // {
                //     "fieldDataType": "AUTO_COMPLETE",
                //     "dependentField": "homeBranchDistrict",
                //     "commonpropertyType": "HOME_BRANCH_CITY",
                //     "isMandatory": true,
                //     "fieldLabel": "Home Branch City",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": null,
                //     "maxLength": null,
                //     "error": null,
                //     "value": null,
                //     "validationJson": {
                //         "property": {
                //             "dependentField": {
                //                 "if": [
                //                     {
                //                         "==": [
                //                             {
                //                                 "journeyValue": [
                //                                     "isEtb"
                //                                 ]
                //                             },
                //                             true
                //                         ]
                //                     },
                //                     null,
                //                     "homeBranchDistrict"
                //                 ]
                //             }
                //         },
                //         "dontTriggerSelf": true,
                //         "showLoaderOnEndpoints": true,
                //         "apiEndpoint": {
                //             "if": [
                //                 {
                //                     "and": [
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "homeBranchDistrict"
                //                                 },
                //                                 null
                //                             ]
                //                         },
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "homeBranchDistrict"
                //                                 },
                //                                 ""
                //                             ]
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     "apiType": "MICRO_SERVICE",
                //                     "parameterConfig": [
                //                         [
                //                             "microservicetoken",
                //                             "oauthAccessToken"
                //                         ],
                //                         [
                //                             "district",
                //                             "homeBranchDistrict"
                //                         ],
                //                         [
                //                             "fetchCities",
                //                             "STATIC",
                //                             true
                //                         ]
                //                     ],
                //                     "url": "/api-v3/restPublic/master-branch-list-new",
                //                     "RequestType": "POST",
                //                     "parserMethodName": "branchParser"
                //                 },
                //                 "REJECT_CALL"
                //             ]
                //         }
                //     },
                //     "rulesFor": [
                //         "branchCode"
                //     ],
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "Home Branch City",
                //     "fieldName": "homeBranchCity",
                //     "showLabel": true,
                //     "labelInfo": "This Will Be Bank Branch city where your case will be initiated",
                //     "groupName": "Choose your branch",
                //     "groupIndex": 8,
                //     "showField": true
                // },
                // {
                //     "fieldDataType": "AUTO_COMPLETE",
                //     "commonpropertyType": "HOME_BRANCH_NAME",
                //     "dependentField": "homeBranchCity",
                //     "isMandatory": true,
                //     "fieldLabel": "Home Branch",
                //     "fieldAccessModifier": "EDITABLE",
                //     "minLength": null,
                //     "maxLength": null,
                //     "error": null,
                //     "value": null,
                //     "validationJson": {
                //         "property": {
                //             "dependentField": {
                //                 "if": [
                //                     {
                //                         "==": [
                //                             {
                //                                 "journeyValue": [
                //                                     "isEtb"
                //                                 ]
                //                             },
                //                             true
                //                         ]
                //                     },
                //                     null,
                //                     "homeBranchCity"
                //                 ]
                //             }
                //         },
                //         "dontTriggerSelf": true,
                //         "showLoaderOnEndpoints": true,
                //         "apiEndpoint": {
                //             "if": [
                //                 {
                //                     "and": [
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "homeBranchCity"
                //                                 },
                //                                 null
                //                             ]
                //                         },
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "homeBranchCity"
                //                                 },
                //                                 ""
                //                             ]
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     "apiType": "MICRO_SERVICE",
                //                     "parameterConfig": [
                //                         [
                //                             "microservicetoken",
                //                             "oauthAccessToken"
                //                         ],
                //                         [
                //                             "city",
                //                             "homeBranchCity"
                //                         ]
                //                     ],
                //                     "url": "/api-v3/restPublic/master-branch-list-new",
                //                     "RequestType": "POST",
                //                     "parserMethodName": "branchParser"
                //                 },
                //                 "REJECT_CALL"
                //             ]
                //         }
                //     },
                //     "rulesFor": [
                //         "branchAddress"
                //     ],
                //     "regex": null,
                //     "options": [],
                //     "regexErrorMessage": null,
                //     "errorIconPath": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "Home Branch",
                //     "fieldName": "branchCode",
                //     "showLabel": true,
                //     "labelInfo": "This Will Be Bank Branch where your case will be initiated",
                //     "groupName": "Choose your branch",
                //     "groupIndex": 8,
                //     "showField": true
                // },
                // {
                //     "fieldDataType": "TEXT_AREA",
                //     "isMandatory": false,
                //     "fieldLabel": "Branch Address",
                //     "fieldAccessModifier": "READ_ONLY",
                //     "minLength": null,
                //     "maxLength": null,
                //     "error": null,
                //     "value": null,
                //     "validationJson": {
                //         "property": {
                //             "value": {
                //                 "if": [
                //                     {
                //                         "==": [
                //                             {
                //                                 "var": "branchCode"
                //                             },
                //                             null
                //                         ]
                //                     },
                //                     null
                //                 ]
                //             }
                //         },
                //         "dontTriggerSelf": true,
                //         "showLoaderOnEndpoints": true,
                //         "apiEndpoint": {
                //             "if": [
                //                 {
                //                     "and": [
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "branchCode"
                //                                 },
                //                                 null
                //                             ]
                //                         },
                //                         {
                //                             "!=": [
                //                                 {
                //                                     "var": "branchCode"
                //                                 },
                //                                 ""
                //                             ]
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     "apiType": "MICRO_SERVICE",
                //                     "parameterConfig": [
                //                         [
                //                             "microservicetoken",
                //                             "oauthAccessToken"
                //                         ],
                //                         "branchCode"
                //                     ],
                //                     "url": "/api-v3/restPublic/master-branch-list-new",
                //                     "RequestType": "POST",
                //                     "parserMethodName": "branchParser"
                //                 },
                //                 "REJECT_CALL"
                //             ]
                //         }
                //     },
                //     "rulesFor": null,
                //     "regex": null,
                //     "regexErrorMessage": null,
                //     "rowNo": null,
                //     "columnNo": null,
                //     "placeholderText": "",
                //     "fieldName": "branchAddress",
                //     "labelInfo": null,
                //     "groupName": "Choose your branch",
                //     "groupIndex": 8,
                //     "showLabel": true,
                //     "rows": 3
                // }
            ]
            }
          }
        ],
        "KCC_LAND_NSTP": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Enter LandHolding  Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please,*fill in the mandatory details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Landholding  Details",
            "sectionContent": {
              "isShow": true,
              "config": {
                "showSerialNo": true,
                "showFooterAction": true,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": true,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldName": "tehsil"
                  },
                  {
                    "fieldLabel": "Revenue Village",
                    "fieldName": "revenueVillage"
                  },
                  {
                    "fieldLabel": "Khatuni No/Agri Land Acct No",
                    "fieldName": "khatuniNo"
                  },
                  {
                    "fieldLabel": "Survey No /Khasra No/ Block No",
                    "fieldName": "khasraNo"
                  }
                ],
                "data": []
              }
            }
          }
        ],
        "KCC_LAND_STP": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Enter LandHolding  Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please,*fill in the mandatory details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Landholding  Details",
            "sectionContent": {
              "isShow": true,
              "config": {
                "showSerialNo": true,
                "showFooterAction": true,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": true,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldName": "tehsil"
                  },
                  {
                    "fieldLabel": "Revenue Village",
                    "fieldName": "revenueVillage"
                  },
                  {
                    "fieldLabel": "Survey Number",
                    "fieldName": "khasraNo"
                  },
                  {
                    "fieldLabel": "Sub Survey Number",
                    "fieldName": "subSurveyNo"
                  }
                ],
                "data": []
              }
            }
          }
        ],
        "KCC_CROP": [
          {
            "componentType": "TITLE",
            "className": "mb-10",
            "mandatory": false,
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "titleData": "Enter Crop Details"
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please,*fill the mandatory details."
            }
          },
          {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Note: Limit upto 1.60 lakhs can be availed with out any collateral security."
            }
          },
          {
            "componentType": "TABLE",
            "sectionContent": {
              "isShow": true,
              "config": {
                "showSerialNo": true,
                "showFooterAction": true,
                "showFooterCalculations": true,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": true,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Season",
                    "fieldName": "season"
                  },
                  {
                    "fieldLabel": "Crop Name",
                    "fieldName": "crop"
                  },
                  {
                    "fieldLabel": "Irrigated Area (Acre)",
                    "fieldName": "irrigatedAreaInAcre"
                  },
                  {
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldName": "unIrrigatedAreaInAcre"
                  }
                ],
                "data": []
              }
            }
          }
        ],
        "DECLARATION": [
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
                    "consentCode": "DECLARATION_CONSENT_AGRI_KCC",
                    "submitConsentCodes": [
                      "DECLARATION_CONSENT_AGRI_KCC"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DISCLAIMER_AGRI_KCC_1",
                    "submitConsentCodes": [
                      "DISCLAIMER_AGRI_KCC_1"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DISCLAIMER_AGRI_KCC_2",
                    "submitConsentCodes": [
                      "DISCLAIMER_AGRI_KCC_2"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "APIFETCH",
                    "consentCode": "DISCLAIMER_AGRI_KCC_3",
                    "submitConsentCodes": [
                      "DISCLAIMER_AGRI_KCC_3",
                      "TERMS_AND_CONDITIONS_CONSENT_AGRI_KCC",
                      "PRIVACY_POLICY_AGRI_KCC",
                      "DISCLAIMER_AGRI_KCC"
                    ],
                    "label": null,
                    "className": "check-container",
                    "completed": null
                  },
                  {
                    "consentType": "STATIC",
                    "consentCode": null,
                    "submitConsentCodes": [],
                    "label": "I agree to",
                    "isMultiLabel": false,
                    "className": "w-100",
                    "completed": null,
                    "endLinks": [
                      {
                        "label": "Terms & Conditions",
                        "linkType": "POPUP",
                        "consentCode": "TERMS_AND_CONDITIONS_CONSENT_AGRI_KCC",
                        "popupContent": []
                      },
                      {
                        "label": "Privacy Policy",
                        "linkType": "POPUP",
                        "consentCode": "PRIVACY_POLICY_AGRI_KCC",
                        "popupContent": []
                      },
                      {
                        "label": "and",
                        "isMultiLabel": false,
                        "className": "check-container",
                        "completed": null
                      },
                      {
                        "label": "Disclaimer",
                        "linkType": "POPUP",
                        "consentCode": "DISCLAIMER_AGRI_KCC",
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
        "JOURNEY_PREVIEW": [
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
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "First Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 0,
                  "maxLength": null,
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
                  "placeholderText": "Enter your First Name",
                  "fieldName": "firstName",
                  "labelInfo": null,
                  "showprefix": true,
                  "showLabel": true,
                  "showField": true,
                  "prefixType": "DROPDOWN",
                  "prefix": null,
                  "options": [],
                  "prefixfieldAccessModifier": "READ_ONLY",
                  "prefixCommonProperty": "TITLE",
                  "includePrefixtoFormValue": true,
                  "isPrefixMandatory": true,
                  "prefixfieldName": "title"
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Enter your Middle Name",
                  "fieldName": "middleName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Last Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 0,
                  "maxLength": null,
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
                  "placeholderText": "Enter your Last Name",
                  "fieldName": "lastName",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "Enter your Date of Birth",
                  "fieldName": "dateOfBirth",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Gender",
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
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "gender",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "MARITAL_STATUS",
                  "fieldLabel": "Marital Status",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailTextVariable10"
                  ],
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
                  "isMandatory": false,
                  "fieldLabel": "Father's / Husband Name",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 0,
                  "maxLength": null,
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
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "EDUCATION_TYPE",
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
                  "groupIndex": 1,
                  "placeholderText": "Education Qualification",
                  "fieldName": "educationType",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Occupation",
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE24",
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
                  "groupIndex": 1,
                  "placeholderText": "Occupation",
                  "fieldName": "borrowerDetailTextVariable24",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "CITIZENSHIP",
                  "fieldLabel": "Nationality",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "default": "INDIAN"
                  },
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
                  "fieldDataType": "TEXT",
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE11",
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
                  "groupIndex": 1,
                  "placeholderText": "Religion",
                  "fieldName": "borrowerDetailTextVariable11",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "commonpropertyType": "BORROWER_DETAIL_VARIABLE21",
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
                  "groupIndex": 1,
                  "placeholderText": "Social Category",
                  "fieldName": "borrowerDetailTextVariable12",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "PAN Number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 12,
                  "error": null,
                  "value": null,
                  "dataMasking":true,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "identityNumberTwo",
                  "showLabel": true,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "className": "mx-w100",
                  "fieldLabel": "Aadhaar Number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "dataMasking":true,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "",
                  "fieldName": "identityNumberOne",
                  "labelInfo": null,
                  "showLabel": true,
                  "groupName": "Borrower Information",
                  "groupIndex": 1,
                  "showField": true,
                  "verificationFieldName": "aadharOtp",
                  "verifyDisable": false
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "OTP",
                  "otpType": "AADHAR",
                  "isMandatory": true,
                  "fieldLabel": "Enter Aadhar OTP",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupName": "",
                  "groupIndex": 1,
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
                    "requestFor": "BORROWER"
                  }
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Mobile number",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "dataMasking":true,
                  "rulesFor": null,
                  "regex": "^[1-9][0-9]{9}$",
                  "countryCode": "+91",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "placeholderText": "Enter a Mobile Number",
                  "fieldName": "mobileNumber",
                  "showLabel": true,
                  "groupName": "Contact Information",
                  "groupIndex": 2,
                  "showField": true
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Email ID",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": 100,
                  "error": null,
                  "value": null,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "rowNo": null,
                  "dataMasking":true,
                  "columnNo": null,
                  "placeholderText": "Enter Valid Email ID",
                  "fieldName": "alternativeUsername",
                  "labelInfo": "Enter Borrower Email Id for further Communication",
                  "showLabel": true,
                  "groupName": "",
                  "groupIndex": 2,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
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
                  "groupName": "Permanent Address",
                  "placeholderText": "Enter Address Line1",
                  "fieldName": "line1",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Address Line 2",
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
                  "groupName": "Permanent Address",
                  "placeholderText": "Enter Address Line2",
                  "fieldName": "line2",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
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
                  "groupName": "Permanent Address",
                  "columnNo": null,
                  "placeholderText": "Enter Address Line3",
                  "fieldName": "line3",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": false,
                  "fieldLabel": "Landmark",
                  "groupName": "Permanent Address",
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
                  "placeholderText": "Enter Landmark",
                  "fieldName": "subDistrict",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Pincode",
                  "groupName": "Permanent Address",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupIndex": 1,
                  "placeholderText": "Enter Pincode",
                  "fieldName": "zipCode",
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
                  "groupName": "Permanent Address",
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
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": null,
                  "fieldDataType": "TEXT",
                  "fieldAccessModifier": "READ_ONLY",
                  "fieldLabel": "District",
                  "fieldName": "district",
                  "commonpropertyType": "PINCODE_CITY",
                  "isMandatory": true,
                  "isMasking": false,
                  "maxLength": null,
                  "groupName": "Permanent Address",
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
                        "addressOneDistrict"
                      ]
                    }
                  },
                  "value": null,
                  "placeholderText": "Select District",
                  "visibleInAdminSection": true,
                  "visibleInBorrowerSection": true,
                  "visibleInDsaSection": true,
                  "visibleInInvestorSection": false,
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": null,
                  "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                  "fieldDataType": "TEXT",
                  "fieldLabel": "Address Type",
                  "fieldAccessModifier": "READ_ONLY",
                  "fieldName": "ownershipType",
                  "groupName": "Permanent Address",
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
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Residing Since (in years)",
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
                  "groupName": "Permanent Address",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "livingSince",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Address Line 1",
                  "fieldAccessModifier": "READ_ONLY",
                  "groupName": "Communication Address",
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
                  "showField": true,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Address Line 2",
                  "groupName": "Communication Address",
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
                  "placeholderText": "Enter Address Line2",
                  "fieldName": "addressOneLine2",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "rows": 3,
                  "groupIndex": 1,
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
                  "placeholderText": "Enter Address Line3",
                  "fieldName": "addressOneLine3",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "rows": 3,
                  "groupIndex": 1,
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
                  "placeholderText": "Enter Landmark",
                  "fieldName": "addressOneSubDistrict",
                  "labelInfo": null,
                  "showLabel": true,
                  "rows": 3,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "TEXT",
                  "isMandatory": true,
                  "fieldLabel": "Pincode",
                  "commonpropertyType": "PINCODE",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
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
                  "groupIndex": 1,
                  "placeholderText": "Enter Pincode",
                  "fieldName": "addressOneZipCode",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true,
                  "options": []
                },
                {
                  "columnNo": 1,
                  "dependentField": null,
                  "fieldDataType": "TEXT",
                  "fieldLabel": "State",
                  "fieldAccessModifier": "READ_ONLY",
                  "placeholderText": "Enter State",
                  "fieldName": "addressOneState",
                  "commonpropertyType": "PINCODE_STATE",
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
                  "sortIndex": 6,
                  "validationJson": null,
                  "value": null,
                  "visibleInAdminSection": true,
                  "visibleInBorrowerSection": true,
                  "visibleInDsaSection": true,
                  "visibleInInvestorSection": false,
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": "state",
                  "fieldDataType": "TEXT",
                  "fieldLabel": "District",
                  "fieldAccessModifier": "READ_ONLY",
                  "placeholderText": "Enter District",
                  "fieldName": "addressOneDistrict",
                  "commonpropertyType": "PINCODE_DISTRICT",
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
                  "visibleInInvestorSection": false,
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "columnNo": 2,
                  "dependentField": null,
                  "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                  "fieldAccessModifier": "READ_ONLY",
                  "fieldDataType": "TEXT",
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
                  "showLabel": true,
                  "groupIndex": 1,
                },
                {
                  "fieldDataType": "DATE",
                  "isMandatory": true,
                  "fieldLabel": "Residing Since (in years)",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": 6,
                  "maxLength": 15,
                  "error": null,
                  "value": null,
                  "minDate": null,
                  "maxDate": [null,null,null,true],
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "ProductDeclaration",
                  "groupIndex": 1,
                  "placeholderText": "xx x  xxxxx",
                  "fieldName": "addressOneLivingSince",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Annual Agricultural Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailNumberVariable7"
                  ],
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable5",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Other Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": "",
                  "validationJson": null,
                  "rulesFor": [
                    "borrowerDetailNumberVariable7"
                  ],
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable6",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": false,
                  "fieldLabel": "Total Income ₹",
                  "fieldAccessModifier": "READ_ONLY",
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "validationJson": {
                    "calculation": {
                      "+": [
                        {
                          "var": "borrowerDetailNumberVariable5"
                        },
                        {
                          "var": "borrowerDetailNumberVariable6"
                        }
                      ]
                    }
                  },
                  "rulesFor": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "groupName": "Annual Income Details",
                  "groupIndex": 1,
                  "placeholderText": "",
                  "fieldName": "borrowerDetailNumberVariable7",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                },
                {
                  "fieldDataType": "NUMBER",
                  "isMandatory": true,
                  "fieldLabel": "Loan Requirement ₹",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupName": "Loan Detail",
                  "groupIndex": 2,
                  "placeholderText": "",
                  "fieldName": "loanAmount",
                  "labelInfo": null,
                  "showLabel": true,
                  "showField": true
                }
              ]
            }
          },
          {
            "componentType": "FORM",
            "className": "mb-1 w-100 overdraft-width",
            "validateSection": true,
            "mandatory": true,
            "sectionContent": {
              "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "disableMode": true
              },
              "isShow": true,
              "showEditMode": true,
              "pageCode": "MORE_INFO",
              "fields": [
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": null,
                  "isMandatory": true,
                  "commonpropertyType": "HOME_BRANCH_STATE",
                  "fieldLabel": "Home Branch State",
                  "fieldAccessModifier": "READ_ONLY",
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
                "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": null,
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch District",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "dependentField": null,
                  "commonpropertyType": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch City",
                  "fieldAccessModifier": "READ_ONLY",
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
                "groupIndex": 1,
                  "showField": true
                },
                {
                  "fieldDataType": "AUTO_COMPLETE",
                  "commonpropertyType": null,
                  "dependentField": null,
                  "isMandatory": true,
                  "fieldLabel": "Home Branch",
                  "fieldAccessModifier": "READ_ONLY",
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
                  "labelInfo": null,
                  "groupName": "Your Branch Details",
                  "groupIndex": 1,
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
                  "groupIndex": 1,
                  "showLabel": true,
                  "rows": 3
                }
              ]
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Landholding Details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Landholding Details",
            "sectionContent": {
              "isShow": true,
              "showEditMode": true,
              "pageCode": "KCC_LAND",
              "config": {
                "showSerialNo": true,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": false,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldName": "tehsil"
                  },
                  {
                    "fieldLabel": "Revenue Village",
                    "fieldName": "revenueVillage"
                  },
                  {
                    "fieldLabel": "Khatuni No/Agri Land Acct No",
                    "fieldName": "khatuniNo"
                  },
                  {
                    "fieldLabel": "Survey No /Khasra No/ Block No",
                    "fieldName": "khasraNo"
                  }
                ],
                "data": [],
                "fields": []
              }
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Crop Details"
            }
          },
          {
            "componentType": "TABLE",
            "title": "Crop Details",
            "sectionContent": {
              "isShow": true,
              "showEditMode": true,
              "pageCode": "KCC_CROP",
              "config": {
                "showSerialNo": true,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "footerActionLabel": "+ Add New Item",
                "showRecordActions": false,
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit.png",
                    "name": "Edit"
                  },
                  {
                    "actionCode": "CLOSE",
                    "icon": "../../../../assets/icons/trash-icon.png",
                    "name": "Close"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "State",
                    "fieldName": "state"
                  },
                  {
                    "fieldLabel": "District",
                    "fieldName": "district"
                  },
                  {
                    "fieldLabel": "Season",
                    "fieldName": "season"
                  },
                  {
                    "fieldLabel": "Crop Name",
                    "fieldName": "crop"
                  },
                  {
                    "fieldLabel": "Irrigated Area (Acre)",
                    "fieldName": "irrigatedAreaInAcre"
                  },
                  {
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldName": "unIrrigatedAreaInAcre"
                  }
                ],
                "data": [],
                "fields": []
              }
            }
          }
        ],
        "LOAN_ELIGIBILITY":[
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Congratulations! ",
                  {
                    "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
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
              "paragraphData": ""
            }
          }
        ],
        "LOAN_SUMMARY": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Congratulations! ",
                  {
                    "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
                "cat": [
                  "You have received an Approval of <div class='redirectAction ml-5'>₹ ",
                  {
                    "roundOff": [{"var":"$scope.fetchEligibility.output.kccOutput.totalKCCLimit"}]
                  },
                  "</div>",
                  "&nbsp;",
                  "for your Loan Application.",
                  "&nbsp;"
                ]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
            }
          }, 
          {
            "componentType": "PARAGRAPH",
            "className": "common-info display-flex a-i-c mt-10",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Our Executives will contact you within three business days to complete all formalities."
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
              "paragraphData": ""
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
                    "iconPath": "/assets/icons/smile.png"
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
              "paragraphData": "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details."
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg mt-4",
            "validationJson": {
              "content": {
                "cat": [
                  "Your Lead Reference ID #",
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
                "if":[{"==":[{"or": [
                  {
                    "var": "$scope.loanDetails.loanDetails.crmLeadId"
                  },
                  {
                    "var": "$scope.loanDetails.loanDetails.loanId"
                  }
                ]},null]},false,true]
                
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Your Lead Reference ID #"
            }
          }
        ],
        "STP_CONGRATULATIONS":[
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Congratulations! ",
                  {
                    "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
                "cat": [
                  "You are eligible for loan amount of <div class='redirectAction ml-5'>₹ ",
                  {
                    "roundOff": [{"var":"$scope.fetchEligibility.output.kccOutput.totalKCCLimit"}]
                  },
                  "</div>",
                  "&nbsp;",
                  "(as per calculation)",
                  "&nbsp;"
                ]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
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
              "paragraphData": ""
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "text-info mt-3 f-15",
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Note : Table as per calculation and Key Fact statement will be displayed here."
            }
          }
        ],
        "PRODUCT_ERROR": [
          {
              "componentType": "TITLE",
              "validateSection": false,
              "className": "' mb-0 mt-5 d-flex align-items-center'",
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
              "sectionContent": {
                  "titleData": "Dear,",
                  "isShow": true,
                  "endContent": [
                      {
                          "componentType": "ICON",
                          "className": "'ml-10",
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
                  "paragraphData": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
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
        "ESIGN": [
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mt-5 d-flex align-items-center mb-20",
            "validationJson": {
              "content": {
                "cat": [
                  "Dear ",
                  {
                    "var": "$scope.fetchLoanDetails.loanDetails.borrower"
                  }
                ]
              }
            },
            "sectionContent": {
              "titleData": "Congratulations!",
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
                        "var": "$scope.fetchLoanDetails.loanDetails.crmLeadId"
                      },
                      {
                        "var": "$scope.fetchLoanDetails.loanDetails.loanId"
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
                            "var": "$scope.fetchLoanDetails.loanDetails.crmLeadId"
                          },
                          {
                            "var": "$scope.fetchLoanDetails.loanDetails.loanId"
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
              "paragraphData": ""
            }
          },
          {
            "componentType": "HTML_CONTENT",
            "className": "common-info display-flex a-i-c",
            "validationJson": {
              "content": {
                "cat": [
                  "<div class='col-sm-6 bank-detail-info'>Congratulations your loan has been sanctioned with ₹",
                  {
                    "roundOff": [{"var":"$scope.fetchLoanDetails.loanDetails.loanAmount"}]
                  },
                  " amount. Please proceed with e-signing & E-stamping to complete the applications. Kindly visit the Bank Branch in case of any discrepancies</div>",
                ]
              }
            },
            "validateSection": false,
            "sectionContent": {
              "isShow": true,
              "htmlData": ""
            }
          }, ],
      }

    },
  };

  pageMetaConfig = {
    CC321: {
      "individual": {
        "CUSTOMER_TYPE": {
          "showLeftContent": true,
          "showStepper": true,
          "fieldLabel": "Continue"
        },
        "ACCOUNT_VERIFY": {
          "showLeftContent": true,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Verify",
          "otpIndex": 5,
          "consentIndex": 4,
          "formIndex": 3,
          "formSubmitFlow": [
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
                "capturedData"
              ],
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "borrowerUuid",
                "loanPurposeUuid",
                [
                  "loanAmount",
                  "STATIC",
                  1000
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ]
              ],
              "journeyEventCodeAfterResponseSucess": [
                "ACCOUNT_VERIFY",
                "MOBILE_VERIFY"
              ],
              "journeyEventCodeAfterResponseFailure":
                "ACCOUNT_VERIFY_ERROR"
              ,
              "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED",{
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "formSubmitResponse.message"
                  }
                ]
              }]} 
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
              "submitflow": "fetchAccountData",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "accountNumber",
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
                ]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "formSubmitResponse.message"
                  }
                ]
              }]}
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
              "submitflow": "npaCheck",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "custId",
                  "object.borrowerProfileTextVariable1"
                ],
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "apiError": "PRODUCT_ERROR",
              "validateResponse": {
                "if": [
                  {
                    "==": [
                      {
                        "var": "code"
                      },
                      "200"
                    ]
                  },
                  {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "npaFlag"
                          },
                          "N"
                        ]
                      },
                      "PROCEED",
                      "PRODUCT_ERROR"
                    ]
                  },
                  "PRODUCT_ERROR"
                ]
              }
            },
          ]
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
                  {
                    "getResume": []
                  },
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
                "formValue"
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
              "journeyEventCodeAfterResponseSucess": "MOBILE_VERIFY",
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
            }
          ]
        },
        "MORE_INFO": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "callUserHierarchy": false,
          "formSectionIndex": 2,
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
              ],
              "apiError": "PRODUCT_ERROR",
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
            },
            // {
            //   "validate":{ "if": [{ "!=": [{ "var": "product.object.PAN" }, ""] }, "EXECUTE", "NEXT"]},
            //   "fetchflow": "verifyPanNumber",
            //   "dataFeedCloud": ["product", "formValue", "capturedData"],
            //   "saveResponseToProduct": true,
            //   "params": ["access_token", ["objectUuid", "borrowerUuid"], ["identityNumberTwo","object.identityNumberTwo"], ["microservicetoken", "oauthAccessToken"], ["requestFor", "STATIC", "BORROWER"]],
            //   "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.isPanValid" }, true] }, "PROCEED", {
            //     "cat": [
            //         "ERROR[ERROR_MESSAGE]",
            //         {
            //             "var": "formSubmitResponse.message"
            //         }
            //     ]
            //   }]},
            //   "apiError": "ERROR" 
            // },
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
          ],
          "prepopulationRemaps": {
            "title": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.title",
                "borrowerDetails.borrowerDetail.title"
              ]
            },
            "firstName": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.firstName",
                "borrowerDetails.borrowerDetail.firstName"
              ]
            },
            "lastName": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.lastName",
                "borrowerDetails.borrowerDetail.lastName"
              ]
            },
            "middleName": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.middleName",
                "borrowerDetails.borrowerDetail.middleName"
              ]
            },
            "gender": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.gender",
                "borrowerDetails.borrowerDetail.gender"
              ]
            },
            "dateOfBirth": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.dateOfBirth",
                "borrowerDetails.borrowerDetail.dateOfBirth"
              ]
            },
            "maritalStatus": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.maritalStatus",
                "borrowerDetails.borrowerDetail.maritalStatus"
              ]
            },
            "borrowerDetailTextVariable6": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.borrowerDetailTextVariable6",
                "borrowerDetails.borrowerDetail.borrowerDetailTextVariable6"
              ]
            },
            "educationType": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.educationType",
                "borrowerDetails.borrowerDetail.educationType"
              ]
            },
            "borrowerDetailTextVariable24": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.borrowerDetailTextVariable24",
                "borrowerDetails.borrowerDetail.borrowerDetailTextVariable24"
              ]
            },
            "citizenship": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.citizenship",
                "borrowerDetails.borrowerDetail.citizenship"
              ]
            },
            "borrowerDetailTextVariable11": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.borrowerDetailTextVariable11",
                "borrowerDetails.borrowerDetail.borrowerDetailTextVariable11"
              ]
            },
            "borrowerDetailTextVariable12": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.borrowerDetailTextVariable12",
                "borrowerDetails.borrowerDetail.borrowerDetailTextVariable12"
              ]
            },
            "identityNumberTwo":[
              {
              "if": [
                {
                  "var": "product.object.identityNumberTwo"
                },
                "product.object.identityNumberTwo",
                ""
              ]
            },
          //   {"isVerified":[
          //     {
          //       "if": [
          //         {
          //           "var": "product.object.identityNumberTwo"
          //         },
          //         true,
          //         false
          //       ]
          //     },
          // ]}
            ],
            "panholdername": {
              "if": [{ "and": [{ "==": [{ "checkResumeJourney": [] }, false] }, { "==": [{ "checkPreviewUpdate": [] }, false] }] },
                "",
                "borrowerDetails.borrowerDetail.borrowerProfileTextVariable15"
              ]
            },
            "panholderdob": {
              "if": [{ "and": [{ "==": [{ "checkResumeJourney": [] }, false] }, { "==": [{ "checkPreviewUpdate": [] }, false] }] },
                "product.object.dateOfBirth",
                "borrowerDetails.borrowerDetail.dateOfBirth"
              ]
            },
            "identityNumberOne": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.identityNumberOne",
                "borrowerDetails.borrowerDetail.identityNumberOne"
              ]
            },
            "mobileNumber": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.mobileNumber",
                "borrowerDetails.borrowerDetail.mobileNumber"
              ]
            },
            "alternativeUsername": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.alternativeUsername",
                "borrowerDetails.borrowerDetail.alternativeUsername"
              ]
            },
            "line1": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.line1",
                "borrowerDetails.borrowerDetail.personalAddress.line1"
              ]
            },
            "line2": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.line2",
                "borrowerDetails.borrowerDetail.personalAddress.line2"
              ]
            },
            "line3": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.line3",
                "borrowerDetails.borrowerDetail.personalAddress.line3"
              ]
            },
            "subDistrict": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.subDistrict",
                "borrowerDetails.borrowerDetail.personalAddress.subDistrict"
              ]
            },
            "zipCode": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.zipCode",
                "borrowerDetails.borrowerDetail.personalAddress.zipCode"
              ]
            },
            "state": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.state",
                "borrowerDetails.borrowerDetail.personalAddress.state"
              ]
            },
            "district": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.district",
                "borrowerDetails.borrowerDetail.personalAddress.district"
              ]
            },
            "ownershipType": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.ownershipType",
                "borrowerDetails.borrowerDetail.personalAddress.ownershipType"
              ]
            },
            "livingSince": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.livingSince",
                "borrowerDetails.borrowerDetail.personalAddress.livingSince"
              ]
            },
            "addressOneLine1": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneLine1",
                "borrowerDetails.borrowerDetail.addressOne.addressOneLine1"
              ]
            },
            "addressOneLine2": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneLine2",
                "borrowerDetails.borrowerDetail.addressOne.addressOneLine2"
              ]
            },
            "addressOneLine3": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneLine3",
                "borrowerDetails.borrowerDetail.addressOne.addressOneLine3"
              ]
            },
            "addressOneSubDistrict": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneSubDistrict",
                "borrowerDetails.borrowerDetail.addressOne.addressOneSubDistrict"
              ]
            },
            "addressOneZipCode": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneZipCode",
                "borrowerDetails.borrowerDetail.addressOne.addressOneZipCode"
              ]
            },
            "addressOneState": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneState",
                "borrowerDetails.borrowerDetail.addressOne.addressOneState"
              ]
            },
            "addressOneDistrict": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneDistrict",
                "borrowerDetails.borrowerDetail.addressOne.addressOneDistrict"
              ]
            },
            "addressOneOwnershipType": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneOwnershipType",
                "borrowerDetails.borrowerDetail.addressOne.addressOneOwnershipType"
              ]
            },
            "addressOneLivingSince": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.addressOneLivingSince",
                "borrowerDetails.borrowerDetail.addressOne.addressOneLivingSince"
              ]
            },
            "borrowerDetailNumberVariable5": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "",
                "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable5"
              ]
            },
            "borrowerDetailNumberVariable6": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "",
                "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable6"
              ]
            },
            "borrowerDetailNumberVariable7": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "",
                "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable7"
              ]
            },
            "borrowerDetailTextVariable16": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "",
                "borrowerDetails.borrowerDetail.borrowerDetailTextVariable16"
              ]
            },
            "numberVariable3": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]}, 
                "",
                "loanDetails.loanDetails.loanAmount"
              ]
            },
            "homeBranchState": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.accountBranchDetail.userHierarchyUnitDetails.address.stateValue",
                "loanDetails.userHierarchyUnit.addressAssigned.stateValue"
              ]
            },
            "homeBranchDistrict": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.accountBranchDetail.userHierarchyUnitDetails.address.districtValue",
                "loanDetails.userHierarchyUnit.addressAssigned.districtValue"
              ]
            },
            "homeBranchCity": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.accountBranchDetail.userHierarchyUnitDetails.address.cityValue",
                "loanDetails.userHierarchyUnit.addressAssigned.cityValue"
              ]
            },
            "branch": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.accountBranchDetail.userHierarchyUnitDetails.name",
                "loanDetails.userHierarchyUnit.userHierarchyUnitName"
              ]
            },
            "branchAddress": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.accountBranchDetail.userHierarchyUnitDetails.address.line1Value",
                "loanDetails.userHierarchyUnit.addressAssigned.line1Value"
              ]
            },
            "branchCode": {
              "if": [{"and":[{ "==": [{"checkResumeJourney": []},false] },{ "==":[{"checkPreviewUpdate": []},false]}]},
                "product.object.accountBranchDetail.userHierarchyUnitDetails.unitCode",
                "loanDetails.userHierarchyUnit.userHierarchyUnitUnitCode"
              ]
            }
          },
          "formSubmitFlow": [
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
              "submitflow": "personalProfileUpdate",
              "dataFeedCloud": [
                "product",
                "formValue"
              ],
              "params": [
                "access_token",
                ["microservicetoken", "oauthAccessToken"],
                [
                  "isOnboarding",
                  "STATIC",
                  false
                ],
                [
                  "isValidationRequired",
                  "STATIC",
                  false
                ],
                "loanUuid",
                "borrowerUuid",
                "title",
                "firstName",
                "middleName",
                "lastName",
                "gender",
                [
                  "dateOfBirth",
                  "STATIC",
                  "22/06/1988"
                ],
                "maritalStatus",
                "borrowerDetailTextVariable6",
                "educationType",
                "citizenship",
                "borrowerDetailTextVariable11",
                "identityNumberTwo",
                "identityNumberOne",
                "borrowerDetailTextVariable24",
                "borrowerDetailTextVariable12",
                "numberVariable3",
                "line1",
                "line2",
                "line3",
                "subDistrict",
                "zipCode",
                "district",
                "state",
                "ownershipType",
                "livingSince",
                "isComAddress",
                "addressOneLine1",
                "addressOneLine2",
                "addressOneLine3",
                "addressOneSubDistrict",
                "addressOneZipCode",
                "addressOneState",
                "addressOneDistrict",
                "addressOneOwnershipType",
                "addressOneLivingSince",
                "borrowerDetailNumberVariable5",
                "borrowerDetailNumberVariable6",
                "borrowerDetailNumberVariable7"
              ]
            },
            {
              "submitflow": "updateMainLoanApplicationStatus",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "loanUuid",
                [
                  "statusToBeChanged",
                  "STATIC",
                  "INITIALIZED"
                ],
                [
                  "subStatusToBeChanged",
                  "STATIC",
                  "SUB_STATUS_6"
                ],
                [
                  "statusChangeDescription",
                  "STATIC",
                  "Credit Bureau"
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ]
              ]
            },
            {
              "submitflow": "assignUserHierarchyUnit",
              "dataFeedCloud": [
                "product",
                "formValue"
              ],
              "params": [
                "access_token",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                "loanUuid",
                [
                  "userHierarchyUnitCode",
                  "branchCode"
                ]
              ]
            },
            {
              "submitflow": "loanUpdate",
              "dataFeedCloud": [
                "product",
                "formValue"
              ],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "loanAmount",
                  "numberVariable3"
                ]
              ],
              "journeyEventCodeAfterResponseSucess": [
                "BASIC_INFO",
                "BRANCH_VERIFY",
                "BRE_CREDIT_BUREAU"
              ],
              "journeyEventCodeAfterResponseFailure": [
                "BASIC_INFO_ERROR",
              ],
              "apiError": "PRODUCT_ERROR"
            },
            // {
            //   "submitflow": "cibilfetch",
            //   "dataFeedCloud": [
            //     "product",
            //     "formValue"
            //   ],
            //   "params": [
            //     "access_token",
            //     [
            //       "applicationId",
            //       "loanUuid"
            //     ],
            //     [
            //       "microservicetoken",
            //       "oauthAccessToken"
            //     ]
            //   ],
            //   "validateResponse": {
            //     "if": [
            //       {
            //         "==": [
            //           {
            //             "var": "cibilCheckStatus"
            //           },
            //           "Qualified"
            //         ]
            //       },
            //       "PROCEED",
            //       "PRODUCT_ERROR"
            //     ]
            //   },
            //   "apiError": "PRODUCT_ERROR"
            // },
            // {
            //   "submitflow": "stpCheck",
            //   "dataFeedCloud": [
            //     "product",
            //     "formValue"
            //   ],
            //   "params": [
            //     "access_token",
            //     [
            //       "applicationId",
            //       "loanUuid"
            //     ],
            //     [
            //       "microservicetoken",
            //       "oauthAccessToken"
            //     ]
            //   ],
            //   "validateResponse": {
            //     "if": [
            //       {
            //         "==": [
            //           {
            //             "var": "stpFlag"
            //           },
            //           "STP"
            //         ]
            //       },
            //       "KCC_LAND",
            //       "PROCEED"
            //     ]
            //   },
            //   "saveResponseToCapturedData": true,
            //   "apiError": "PRODUCT_ERROR"
            // }
          ]
        },
        "KCC_LAND_NSTP": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "prepopulationRemaps": {
            "state": "product.object.state",
            "district": "product.object.district"
          },
          "addConfig": [
            {
              "componentType": "TITLE",
              "mandatory": false,
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "titleData": "Land Holding Details"
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
                  "mapSupplyData": true,
                  "mapAndDisable": true,
                  "autoVerifyMappedFields": true,
                  "mappingFields": null,
                  "sendOptionKeyForDropDowns": false,
                  "mapOptionsBasedOnOptionName": true
                },
                "isShow": true,
                "prepopulationRemaps": {
                  "state": "product.object.state",
                  "district": "product.object.district"
                },
                "fields": [
                  {
                    "columnNo": 1,
                    "dependentField": null,
                    "fieldDataType": "TEXT",
                    "fieldLabel": "State",
                    "fieldName": "state",
                    "groupName": null,
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
                    "sortIndex": 1,
                    "groupIndex": 1,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneState" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneState"] }
                    },
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
                    "fieldDataType": "TEXT",
                    "fieldAccessModifier": "READ_ONLY",
                    "fieldLabel": "District",
                    "fieldName": "district",
                    "groupName": null,
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
                    "sortIndex": 1,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneDistrict" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneDistrict"] }
                    },
                    "value": null,
                    "visibleInAdminSection": true,
                    "visibleInBorrowerSection": true,
                    "visibleInDsaSection": true,
                    "visibleInInvestorSection": false,
                    "showLabel": true,
                    "groupIndex": 1,
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Enter Taluka",
                    "fieldName": "tehsil",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": 1,
                    "showField": true,
                    "options": [],
                    "alphaOnly": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Revenue Village",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter your village Name",
                    "fieldName": "revenueVillage",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "alphaOnly": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Khatuni No/Agri Land Acct No",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Khatuni Number",
                    "fieldName": "khatuniNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Survey No /Khasra No/ Block No",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Kharsa Number",
                    "fieldName": "khasraNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "North Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter North Boundary Number",
                    "fieldName": "northBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "East Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter East Boundary Number",
                    "fieldName": "eastBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "West Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter West Boundary Number",
                    "fieldName": "westBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "South Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter South Boundary Number",
                    "fieldName": "southBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Irrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 9999999999,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": [
                      "totalArea",
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Irrigated area",
                    "fieldName": "areaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 9999999999,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": [
                      "totalArea",
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Unirrigated area",
                    "fieldName": "unirrigatedAreaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Total Area",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "calculation": {
                        "+": [
                          {
                            "var": "unirrigatedAreaInAcre"
                          },
                          {
                            "var": "areaInAcre"
                          }
                        ]
                      }
                    },
                    "rulesFor": [
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter total area in acre",
                    "fieldName": "totalArea",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Market Value (per Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 99999999999,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": [
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Market Value per Acre",
                    "fieldName": "costPerAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Total Cost Of Land",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "calculation": {
                        "*": [
                          {
                            "var": "totalArea"
                          },
                          {
                            "var": "costPerAcre"
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
                    "placeholderText": "Enter Cost per Acre",
                    "fieldName": "marketValue",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                    "fieldLabel": "Ownership Type",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "options": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Ownership Type",
                    "fieldName": "ownershipType",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "dontClearTheValue": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "fieldAccessModifier": "READ_ONLY",
                    "fieldLabel": "Number of Owners",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "default": 1
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Number of Owners",
                    "fieldName": "noOfOwners",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT_AREA",
                    "isMandatory": true,
                    "fieldLabel": "Owner's Name",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 200,
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
                    "placeholderText": "Enter Owners name",
                    "fieldName": "ownerNames",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "alphaOnly": true
                  }
                ]
              }
            }
          ],
          "tableIndex": 2
        },
        "KCC_LAND_STP": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "prepopulationRemaps": {
            "state": "product.object.state",
            "district": "product.object.district"
          },
          "addConfig": [
            {
              "componentType": "TITLE",
              "mandatory": false,
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "titleData": "Land Holding Details"
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
                  "mapSupplyData": true,
                  "mapAndDisable": true,
                  "autoVerifyMappedFields": true,
                  "mappingFields": null,
                  "sendOptionKeyForDropDowns": false,
                  "mapOptionsBasedOnOptionName": false
                },
                "isShow": true,
                "prepopulationRemaps": {
                  "state": "product.object.state?product.object.state:''",
                  "district": "product.object.district?product.object.district:''"
                },
                "fields": [
                  {
                    "columnNo": 1,
                    "dependentField": null,
                    "fieldDataType": "DROPDOWN",
                    "dropdownPropertyType":"",
                    "fieldLabel": "State",
                    "fieldName": "state",
                    "groupName": null,
                    "fieldAccessModifier": "EDITABLE",
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
                      "default": { "if": [true, { "var": "addressOneState" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneState"] }
                    },
                    "value": null,
                    "visibleInAdminSection": true,
                    "visibleInBorrowerSection": true,
                    "visibleInDsaSection": true,
                    "visibleInInvestorSection": false,
                    "showLabel": true,
                    "placeholderText":"State",
                    "groupIndex": 1,
                    "nextDependentFiels":"district",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.district
                  },
                  {
                    "columnNo": 2,
                    "dependentField": null,
                    "fieldDataType": "DROPDOWN",
                    "fieldAccessModifier": "READ_ONLY",
                    "fieldLabel": "District",
                    "fieldName": "district",
                    "groupName": null,
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
                      "default": { "if": [true, { "var": "addressOneDistrict" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneDistrict"] }
                    },
                    "value": null,
                    "visibleInAdminSection": true,
                    "visibleInBorrowerSection": true,
                    "visibleInDsaSection": true,
                    "visibleInInvestorSection": false,
                    "showLabel": true,
                    "placeholderText":"District",
                    "groupIndex": 1,
                    "nextDependentFiels":"tehsil",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.tehsil
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"district"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Taluka/Tehsil",
                    "fieldName": "tehsil",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": 1,
                    "showField": true,
                    "options": [], 
                    "nextDependentFiels":"revenueVillage",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.revenueVillage
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "Revenue Village",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"tehsil"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Revenue Village",
                    "fieldName": "revenueVillage",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "nextDependentFiels":"surveyNo",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.surveyNo
                  },  
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "Survey Number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"revenueVillage"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Survey Number",
                    "fieldName": "surveyNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "nextDependentFiels":"subSurveyNo",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.subSurveyNo
                  },  
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": false,
                    "fieldLabel": "Sub Survey Number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"surveyNo"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Sub Survey Number",
                    "fieldName": "subSurveyNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  }
                ]
              }
            }
          ],
          "tableIndex": 2
        },
        "KCC_CROP": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "addConfig": [
            {
              "componentType": "TITLE",
              "mandatory": false,
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "titleData": "Basic Information"
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
                  "mapSupplyData": true,
                  "mapAndDisable": true,
                  "mappingFields": null,
                  "sendOptionKeyForDropDowns": false,
                  "mapOptionsBasedOnOptionName": true
                },
                "isShow": true,
                "fields": [
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "dependentField": null,
                    "fieldLabel": "State",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneState" }] },
                      // "default": { "masterValue": ["addressOneState"] }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": null,
                    "fieldName": "state",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "District",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneDistrict" }] },
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": null,
                    "fieldName": "district",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "fieldLabel": "Season",
                    "commonpropertyType": "SEASON_SCALE_OF_FINANCE",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 0,
                    "maxLength": 10,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Select Season",
                    "fieldName": "season",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "fieldLabel": "Crop Name",
                    "commonpropertyType": "SOF_CROP_DETAILS",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 0,
                    "maxLength": 10,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Select crop",
                    "fieldName": "crop",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "\tIrrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 9999999999,
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
                    "placeholderText": "Enter irrigated area in acre",
                    "fieldName": "irrigatedAreaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 0,
                    "maxLength": 9999999999,
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
                    "placeholderText": "Enter un irrigated area in acre",
                    "fieldName": "unIrrigatedAreaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  }
                ]
              }
            }
          ],
          "tableIndex": 3
        },
        "DECLARATION": {
          "showLeftContent": false,
          "showSubStepper": false,
          "showStepper": true,
          "fieldLabel": "Submit",
          "formSubmitFlow": [],
          "journeyEventCodeAfterResponseSucess": [
            "DECLARATION",
            "JOURNEY_PREVIEW"
          ]
        },
        "JOURNEY_PREVIEW": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": false,
          "fieldLabel": "Proceed",
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
              ],
              "apiError": "PRODUCT_ERROR",
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
            }
          ],
          "formSubmitFlow": [
            {
              "submitflow": "fetchEligibilityDtls",
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
              "saveResponseToCapturedData": true,
            },
            {
              "submitflow": "updateMainLoanApplicationStatus",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "loanUuid",
                [
                  "statusToBeChanged",
                  "STATIC",
                  "DOCUMENTATION_COMPLETE"
                ],
                [
                  "subStatusToBeChanged",
                  "STATIC",
                  "SUB_STATUS_1"
                ],
                [
                  "statusChangeDescription",
                  "STATIC",
                  "Success"
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ]
              ],
            },
            {
              "validate":{"if":[{"!=":[{"var":"fetchEligibilityDtls.output.kccOutput.totalKCCLimit"},0]},"EXECUTE","NEXT"]},
              "submitflow": "fetchKccAssesment",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "saveResponseToCapturedData": true,
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updateKccAssesment",
              "dataFeedCloud": ['product', 'formValue', 'capturedData',"metaData"],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken",
                ],
                ["uuid","fetchKccAssesment.uuid"],
                ["postHarvestExpense","fetchEligibilityDtls.output.kccOutput.postHarvestOrHouseholdOrExpenseOrConsumption"],
                ["farmMaintainanceLimit","fetchEligibilityDtls.output.kccOutput.farmMaintainenceLimit"],
                
              ],
              "saveResponseToProduct": true,
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "sanctionUpdate",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken",
                ],
                ["loanSanctionAmount","fetchEligibilityDtls.output.kccOutput.totalKCCLimit"],
                ["loanSanctionNumberVariable4","fetchEligibilityDtls.output.kccOutput.sanctionAmountInWords"],
                ["loanSanctionTextVariable13","fetchEligibilityDtls.output.kccOutput.drawingAmount"],
                
              ],
              "validateResponse":{"if":[{"==":[{"var":"fetchEligibilityDtls.output.kccOutput.stpFlag"},"NSTP"]}, {"if":[{"==":[{"var":"fetchEligibilityDtls.output.kccOutput.inPrincipalFlag"},true]},"PROCEED","CONTACT_BRANCH[PARAMS]errorCode=branchAssignment"]},"STP_CONGRATULATIONS"]},
              "saveResponseToProduct": true,
              "apiError": "PRODUCT_ERROR",
            }
          ],
          "prepopulationRemaps": {
            "title": "borrowerDetails.borrowerDetail.title",
            "firstName": "borrowerDetails.borrowerDetail.firstName",
            "lastName": "borrowerDetails.borrowerDetail.lastName",
            "middleName": "borrowerDetails.borrowerDetail.middleName",
            "gender": "borrowerDetails.borrowerDetail.gender",
            "dateOfBirth": "borrowerDetails.borrowerDetail.dateOfBirth",
            "maritalStatus": "borrowerDetails.borrowerDetail.maritalStatus",
            "borrowerDetailTextVariable6": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable6",
            "educationType": "borrowerDetails.borrowerDetail.educationType",
            "borrowerDetailTextVariable24": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable24",
            "citizenship": "borrowerDetails.borrowerDetail.citizenship",
            "borrowerDetailTextVariable11": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable11",
            "borrowerDetailTextVariable12": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable12",
            "identityNumberTwo": "borrowerDetails.borrowerDetail.identityNumberTwo",
            "identityNumberOne": "borrowerDetails.borrowerDetail.identityNumberOne",
            "mobileNumber": "borrowerDetails.borrowerDetail.mobileNumber",
            "alternativeUsername": "borrowerDetails.borrowerDetail.alternativeUsername",
            "line1": "borrowerDetails.borrowerDetail.personalAddress.line1",
            "line2": "borrowerDetails.borrowerDetail.personalAddress.line2",
            "line3": "borrowerDetails.borrowerDetail.personalAddress.line3",
            "subDistrict": "borrowerDetails.borrowerDetail.personalAddress.subDistrict",
            "zipCode": "borrowerDetails.borrowerDetail.personalAddress.zipCode",
            "state": "borrowerDetails.borrowerDetail.personalAddress.state",
            "district": "borrowerDetails.borrowerDetail.personalAddress.district",
            "ownershipType": "borrowerDetails.borrowerDetail.personalAddress.ownershipType",
            "livingSince": "borrowerDetails.borrowerDetail.personalAddress.livingSince",
            "addressOneLine1": "borrowerDetails.borrowerDetail.addressOne.addressOneLine1",
            "addressOneLine2": "borrowerDetails.borrowerDetail.addressOne.addressOneLine2",
            "addressOneLine3": "borrowerDetails.borrowerDetail.addressOne.addressOneLine3",
            "addressOneSubDistrict": "borrowerDetails.borrowerDetail.addressOne.addressOneSubDistrict",
            "addressOneZipCode": "borrowerDetails.borrowerDetail.addressOne.addressOneZipCode",
            "addressOneState": "borrowerDetails.borrowerDetail.addressOne.addressOneState",
            "addressOneDistrict": "borrowerDetails.borrowerDetail.addressOne.addressOneDistrict",
            "addressOneOwnershipType": "borrowerDetails.borrowerDetail.addressOne.addressOneOwnershipType",
            "addressOneLivingSince": "borrowerDetails.borrowerDetail.addressOne.addressOneLivingSince",
            "borrowerDetailNumberVariable5": "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable5",
            "borrowerDetailNumberVariable6": "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable6",
            "borrowerDetailNumberVariable7": "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable7",
            "borrowerDetailTextVariable16": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable16",
            "loanAmount": "loanDetails.loanDetails.loanAmount",
            "homeBranchState": "loanDetails.userHierarchyUnit.addressAssigned.stateValue",
            "homeBranchDistrict": "loanDetails.userHierarchyUnit.addressAssigned.districtValue",
            "homeBranchCity": "loanDetails.userHierarchyUnit.addressAssigned.cityValue",
            "branchCode": "loanDetails.userHierarchyUnit.userHierarchyUnitUnitCode",
            "branchAddress": "loanDetails.userHierarchyUnit.addressAssigned.line1Value"
          }
        },
        "LOAN_ELIGIBILITY":{
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "fieldLabel1": "Yes",
          "fieldLabel2": "Want to add more land ?",
          "titleIndex": 0,
          "loanAmountIndex": 1,
          "refNoInx": 2,
          "loanAmountSuffix": "(amount as per calculation)",
          "showRepaymentSchedule": false,
          "showEmiCalculatorSection": false,
          "showBranchSection": false,
          "showRatingSection": false,
          "showRejectionSection": false,
          "showMainContent": true,
          "showKccdataSection": true,
          "showProceedSection": false,
          "showDownloadKFSBtn":true,
          "showKccdBtnSection":true,
          "downloadKFSConfig":{
            "iconPath":"assets/icons/download_orange.png",
            "buttonLabel":"Download KFS"
          },
          "kfsTableClassName":"kfs-table",
          "kccViewConfig": [  
            {
              "componentType": "IMAGE",
              "validateSection": false,
              "className": "mb-20 f-20 text-center ",
              "sectionContent": {
                "imagePath": "assets/icons/logo_legend.png",
                "isShow": true
              }
            },
            {
              "componentType": "TITLE",
              "validateSection": false,
              "className": "mb-20 f-20 common-title text-center",
              "sectionContent": {
                "titleData": "Key Fact Statement",
                "isShow": true
              }
            },
            {
              "componentType": "TABLE",
              "validateSection": false,
              "className": "mb-20 w-100 tableoddeven verticalTable",
              "validationJson":true,
              "sectionContent": {
                "isShow": true,
                "config": {
                  "showRecordActions": false,
                  "showSerialNo": false,
                  "showFooterAction": false,
                  "showFooterCalculations": false,
                  "showHeaders": false,
                  "footerActionLabel": "+ Add New Borrower",
                  "recordActions": [
                    {
                      "actionCode": "EDIT",
                      "icon": "../../../../assets/icons/edit-new.svg",
                      "name": "Edit"
                    }
                  ],
                  "headers": [
                    {
                      "fieldLabel": "Headings",
                      "fieldName": "title"
                    },
                    {
                      "fieldLabel": "Data",
                      "fieldName": "data"
                    }
                  ],
                  "data": [
                    {
                      "title": "Loan Amount Sanctioned",
                      "data": {
                        "cat": [
                          "₹ ",
                          {
                            "roundOff": [{"var": "$scope.fetchEligibility.output.kccOutput.totalKCCLimit"}]
                          },
                          "<br><br>10% increase p.a. subject to satisfactory annual review."
                        ]
                      },
                    },
                    {
                      "title": "Total Interest Charge During Entire Tenor Of Loan (G)",
                      "data": "The Total Interest charged will be based on Daily product Yearly Compounding at the rate of 7% p.a<br><br>3% prompt repayment incentive (Up to sanction limit of Rs. 3,00,000) available for timely repayment."
                    },
                    {
                      "title": "Other Upfront Charges (Non Refundable)-(F)",
                      "data": "Processing Fees -NIL<br><br>Documentation Fees - NIL<br><br>Personal Accident Insurance Fees - To be borne by applicant as & when debited in the account by insurance company.<br><br>Crop Insurance Fees -To be paid by applicant as & when debited in the account by insurance company.<br><br>Digital convenience Fees - Rs. 500 + applicable taxes (Only for final approval cases)<br><br>Other Charges - E-signing and E-stamping charges as per state law applicable (Only for final approval cases)."
                    },
                    {
                      "title": "Net disbursement amount",
                      "data": "Limit amount - Other upfront charges"
                    },
                    {
                      "title": "Total amount to be paid by borrower in Year1",
                      "data": "Limit amount + Interest + Other upfront charges."
                    },
                    {
                      "title": "Annual Percentage Rate",
                      "data": "7% per annum"
                    },
                    {
                      "title": "Tenor of The Loan",
                      "data": "Initially for the period of 5 year, account to be renewed annually"
                    }, 
                    {
                      "title": "Number of Installment Of Repayment",
                      "data": "Payable on demand or as per harvesting and marketing period of crop."
                    },
                    {
                      "title": "Installment Amount(IN RUPEES)",
                      "data": "Not Applicable"
                    },
                    {
                      "title": "Contingent Charges/Penal Charges",
                      "data": "NIL" 
                    },
                    {
                      "title": "Cooling Off/Look Up Period",
                      "data": "3 days. No additional charges only interim period interest to be serviced on prepayment of loan(Only for STP cases where customer avails disbursement online)"
                    },
                    {
                      "title": "Name Designation and Contact details of Nodal grievance redressal officer for any issues/complaints",
                      "data": "Name - Sri Pravakar Shinde,<br><br>Designation - Chief Manager<br><br>Address : Digital Lending Department, BOI, Head Office,<br><br>G Block, Bandra Kurla Complex, Mumbai - 400051<br><br>Phone number - 022 69179496"
                    }
                  ]
                }
              }
            },
            {
              "componentType": "CONSENT",
              "validateSection": true,
              "className":"kfs-action-items",
              "sectionContent": {
                "isShow": true,
                "config": {
                  "options": [
                    {
                      "consentType": "STATIC",
                      "consentCode": null,
                      "submitConsentCodes": [],
                      "label": "I have read all the Key Fact Statement details mentioned above and accept all the Interest, Charges and EMI Details mentioned as per the Key Fact Statement for availing this loan.",
                      "isMultiLabel": false,
                      "completed": null
                    }
                  ]
                }
              }
            },
            {
              "componentType": "PARAGRAPH",
              "validateSection": false,
              "className": "mt-3 kfs-action-items",
              "sectionContent": {
                "paragraphData": "Do you want to proceed further ?",
                "isShow": true
              }
            }
          ],
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
                "paragraphData": "Your application is not eligible for online processing as per bank benchmark criteria. Please contact your branch for more information."
              }
            },
            {
              "componentType": "PARAGRAPH",
              "className": "form-label-lg mt-4",
              "validateSection": false,
              "sectionContent": {
                "isShow": false,
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
            "status": "Loan Information is sent to your Email address and Mobile Number",
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
              "validateSection": false,
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
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
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
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
            },
            {
              "fetchflow": "fetchEligibility",
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
              "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
              "validationErrorMessage":"Something went wrong !"
            },
            {
              "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
              "fetchflow": "fetchRatingScore",
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
                  "loanUuid",
                ],
                [
                  "risk",
                  "STATIC",
                  false
                ]
              ],
              "validationErrorMessage":"Something went wrong !"
            },
            {
              "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
              "fetchflow": "fetchRatingScore",
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
                  "loanUuid",
                ],
                [
                  "risk",
                  "STATIC",
                  true
                ],
                [
                  "ratingScore","scope.fetchRatingScore.output.ratingOutput.totalMarks"
                ],
                [
                  "sanctionAmount","scope.fetchEligibility.output.kccOutput.totalKCCLimit"
                ]
              ],
              "validationErrorMessage":"Something went wrong !"
            },
            {
              "fetchflow": "fetchEligibility",
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
              "validateResponse": { "if": [{ "==": [{ "var": "output.kccOutput.stpFlag" }, "STP"] }, "ESIGN","PROCEED"]},
              "validationErrorMessage":"Something went wrong !"
            }
          ]
        },
        "LOAN_SUMMARY": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "fieldLabel": "", 
          "titleIndex": 0,
          "loanAmountIndex": 1,
          "refNoInx": 2,
          "loanAmountSuffix": "",
          "showRepaymentSchedule": false,
          "showEmiCalculatorSection": false,
          "showBranchSection": true,
          "showRatingSection": false,
          "showRejectionSection": false,
          "showMainContent": true,
          "showKccdataSection": false,
          "showProceedSection": false,
          "showDownloadKFSBtn":false,
          "showKccdBtnSection":false,    
          "branchConfig": {
            "status": "Loan Information is sent to your Email address and Mobile Number",
            "branchDetails": {
              "name": null,
              "address": null
            }
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
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "journeyEventCodeAfterResponseFailure":"CONGRATULATIONS_PAGE_ERROR",
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]CONGRATULATIONS_PAGE",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
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
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
            },
            {
              "fetchflow": "fetchEligibility",
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
              "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
              "validationErrorMessage":"Something went wrong !"
            },
            {
            "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
            "fetchflow": "fetchRatingScore",
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
                "loanUuid",
              ],
              [
                "risk",
                "STATIC",
                false
              ]
            ],
            "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
            "validationErrorMessage":"Something went wrong !"
          },
          {
            "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
            "fetchflow": "fetchRatingScore",
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
                "loanUuid",
              ],
              [
                "risk",
                "STATIC",
                true
              ],
              [
                "ratingScore","scope.fetchRatingScore.output.ratingOutput.totalMarks"
              ],
              [
                "sanctionAmount","scope.fetchEligibility.output.kccOutput.totalKCCLimit"
              ]
            ],
            "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
            "validationErrorMessage":"Something went wrong !"
          },
          {
            "fetchflow": "fetchEligibility",
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
            "validateResponse": { "if": [{ "==": [{ "var": "output.kccOutput.stpFlag" }, "STP"] }, "ESIGN","PROCEED"]},
            "validationErrorMessage":"Something went wrong !"
          },
          {
            "fetchflow": "updateMainLoanApplicationStatus",
            "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
            ],
            
            "saveResponseToProduct": true,
            "params": [
              "access_token",
              "loanUuid",
              [
                "statusToBeChanged",
                "STATIC",
                "AWAITING_APPROVAL_L22"
              ],
              [
                "subStatusToBeChanged",
                "STATIC",
                "SUB_STATUS_2"
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Success"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED","PRODUCT_ERROR"]},
          },
          {
            "fetchflow": "updateMainLoanApplicationStatus",
            "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
            ],
            
            "saveResponseToProduct": true,
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
                "SUB_STATUS_3"
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Success"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED","PRODUCT_ERROR"]},
          },
          {
            "fetchflow": "updateMainLoanApplicationStatus",
            "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
            ],
            
            "saveResponseToProduct": true,
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
                "SUB_STATUS_4"
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Success"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "ESIGN","PROCEED"]},
          },
          ]
        }, 
        "CONTACT_BRANCH": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "errorCodes": {
              "branchAssignment": "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details."
          },
          "branchConfig": { 
            "branchDetails": {
              "name": null,
              "address": null
            }
          }, 
          "dataScopeFetchFlow": [{
              "fetchflow": "loanDetails",
              "dataFeedCloud": ["product", "formValue", "capturedData"],
              "params": ["access_token", "loanUuid",["microservicetoken", "oauthAccessToken"]],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
          }
          ]
      },
      "STP_CONGRATULATIONS":{
        "showLeftContent": false,
        "showStepper": false,
        "showSubStepper": false,
        "fieldLabel1": "Accept",
        "fieldLabel2": "Decline",
        "titleIndex": 0,
        "loanAmountIndex": 1,
        "refNoInx": 2,
        "loanAmountSuffix": "(amount as per calculation)",
        "showRepaymentSchedule": false,
        "showEmiCalculatorSection": false,
        "showBranchSection": false,
        "showRatingSection": false,
        "showRejectionSection": false,
        "showMainContent": true,
        "showKccdataSection": true,
        "showProceedSection": false,
        "showDownloadKFSBtn":true,
        "showKccdBtnSection":true,
        "downloadKFSConfig":{
          "iconPath":"assets/icons/download_orange.png",
          "buttonLabel":"Download KFS"
        },
        "kfsTableClassName":"kfs-table",
        "kccViewConfig": [  
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mb-20 f-20 common-title kfs-action-items",
            "sectionContent": {
              "titleData": "Calculation Table",
              "isShow": true
            }
          }, 
          {
            "componentType": "TABLE",
            "validateSection": false,
            "className": "mb-20 w-100 tableoddeven verticalTable kfs-action-items",
            "validationJson":true,
            "sectionContent": {
              "isShow": true,
              "config": {
                "showRecordActions": false,
                "showSerialNo": false,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "showHeaders": false,
                "footerActionLabel": "+ Add New Borrower",
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit-new.svg",
                    "name": "Edit"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "Headings",
                    "fieldName": "title"
                  },
                  {
                    "fieldLabel": "Data",
                    "fieldName": "data"
                  }
                ],
                "data": [
                  {
                    "title": "Total Cost of Cultivation Expenses",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.totalCostofCultivationExpenses" }]
                        },
                      ]
                    },
                  },
                  {
                    "title": "Farm Maintenance Limit",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.farmMaintainenceLimit" }]
                        },
                      ]
                    }
                  },
                  {
                    "title": "Post Harvest/Household Expense/Consumption",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.postHarvestOrHouseholdOrExpenseOrConsumption" }]
                        },
                      ]
                    }
                  },
                  {
                    "title": "Total Crop Limit for First Year",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.totalCropLimitforFirstYear" }]
                        },
                      ]
                    }
                  },
                ]
              }
            }
          },
          {
            "componentType": "GRID",
            "validateSection": false,
            "className": "",
            "sectionContent": {
              "isShow": true,
              "items": [
                {
                  "componentType": "BUTTON",
                  "validateSection": false,
                  "parentclassName": "key-download-fact-button",
                  "rootClassName": "key-download-fact-button",
                  "className": "text-right kfs-action-items",
                  "sectionContent": {
                    "label": "Download KFS",
                    "actionId": "KEYFACT_DOWNLOAD",
                    "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base text-right",
                    "prefixIcon": {
                      "className": "material-symbols-outlined clr-orange ",
                      "iconName": "download"
                    },
                    "isShow": true
                  }
                }
              ]
            }
          },

          {
            "componentType": "IMAGE",
            "validateSection": false,
            "className": "mb-20 f-20 text-center ",
            "sectionContent": {
              "imagePath": "assets/icons/logo_legend.png",
              "isShow": true
            }
          },
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mb-20 f-20 common-title",
            "sectionContent": {
              "titleData": "Key Fact Statement",
              "isShow": true
            }
          },
          {
            "componentType": "TABLE",
            "validateSection": false,
            "className": "mb-20 w-100 tableoddeven verticalTable",
            "validationJson":true,
            "sectionContent": {
              "isShow": true,
              "config": {
                "showRecordActions": false,
                "showSerialNo": false,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "showHeaders": false,
                "footerActionLabel": "+ Add New Borrower",
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit-new.svg",
                    "name": "Edit"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "Headings",
                    "fieldName": "title"
                  },
                  {
                    "fieldLabel": "Data",
                    "fieldName": "data"
                  }
                ],
                "data": [
                  {
                    "title": "Loan Amount Sanctioned",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.totalKCCLimit" }]
                        },
                        "<br><br>10% increase p.a. subject to satisfactory annual review."
                      ]
                    },
                  },
                  {
                    "title": "Total Interest Charge During Entire Tenor Of Loan (G)",
                    "data": "The Total Interest charged will be based on Daily product Yearly Compounding at the rate of 7% p.a<br><br>3% prompt repayment incentive (Up to sanction limit of Rs. 3,00,000) available for timely repayment."
                  },
                  {
                    "title": "Other Upfront Charges (Non Refundable)",
                    "data": "Processing Fees -NIL <br><br> Documentation Fees - NIL <br><br> Personal Accident Insurance Fees - To be borne by applicant as & when debited in the account by insurance co. <br><br> Crop Insurance Fees - To be paid by applicant as & when debited in the account by insurance co. <br><br> Digital convenience Fees - Rs. 500 + applicable taxes (Only for final approval cases) <br><br> Other Charges - E-signing and E-stamping charges as per state law applicable (Only for final approval cases)."
                  },
                  {
                    "title": "Net Disbursement Amount(Year-1)---(H)",
                  "data": {
                    "cat": [
                      "₹ ",
                      {
                        "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.netDisbursementAmount" }]
                      },
                    ]
                  },
                  },
                  {
                    "title": "Total Amount To Be Paid By Borrower In Year-1",
                    "data": "Limit amount + Interest + Other upfront charges.",
                    "validationJson": {
                      "content": {
                        "cat": [
                          "₹ ",
                          {
                            "roundOff": [{"var": "$scope.fetchEligibility.output.kccOutput.totalAmountTobePaidBorrower"}]
                          }
                        ]
                      }
                  }
                  },
                  {
                    "title": "Annual Percentage Rate",
                    "data": "7% per annum",
                    "validationJson": {
                      "content": { 
                          "roundOff": [{"var": "$scope.fetchEligibility.output.kccOutput.annualPercentageRate"}] 
                      }
                  }
                  }, 
                  {
                    "title": "Number Of Installment Of Repayment",
                    "data": "Payable on demand or as per harvesting and marketing period of crop."
                  },
                  {
                    "title": "Installment Amount(IN RUPEES)",
                    "data": "Not Applicable"
                  },
                  {
                    "title": "Contingent Charges/Penal Charges",
                    "data": "NIL" 
                  },
                  {
                    "title": "Cooling Off/Look Up Period",
                    "data": "3 days. No additional charges only interim period interest to be serviced on prepayment of loan(Only for STP cases where customer avails disbursement online)"
                  },
                  {
                    "title": "Details of Lsp Acting As Recovery Agent And Authorized To Approach Applicant",
                    "data": "------------"
                  },
                  {
                    "title": "Name Designation and Contact details of Nodal grievance redressal officer for any issues/complaints",
                    "data": "Name - Sri Pravakar Shinde,<br><br>Designation - Chief Manager<br><br>Address : Digital Lending Department, BOI, Head Office,<br><br>G Block, Bandra Kurla Complex, Mumbai - 400051<br><br>Phone number - 022 69179496"
                  }
                ]
              }
            }
          },
          {
            "componentType": "CONSENT",
            "validateSection": true,
            "className":"kfs-action-items",
            "sectionContent": {
              "isShow": true,
              "config": {
                "options": [
                  {
                    "consentType": "STATIC",
                    "consentCode": null,
                    "submitConsentCodes": [],
                    "label": "I have read all the Key Fact Statement details mentioned above and accept all the Interest, Charges and EMI Details mentioned as per the Key Fact Statement for availing this loan.",
                    "isMultiLabel": false,
                    "completed": null
                  }
                ]
              }
            }
          },
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "className": "mt-3 kfs-action-items",
            "sectionContent": {
              "paragraphData": "Please accept to proceed further",
              "isShow": true
            }
          }
        ],
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
              "paragraphData": "Your application is not eligible for online processing as per bank benchmark criteria. Please contact your branch for more information."
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg mt-4",
            "validateSection": false,
            "sectionContent": {
              "isShow": false,
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
          "status": "Loan Information is sent to your Email address and Mobile Number",
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
            "validateSection": false,
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
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
              "cat": [
                "ERROR[ERROR_MESSAGE]",
                {
                  "var": "fetchFlowResponse.message"
                }
              ]
            }]}
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
              "loanUuid",
              [
                "microservicetoken",
                "oauthAccessToken"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
              "cat": [
                "ERROR[ERROR_MESSAGE]",
                {
                  "var": "fetchFlowResponse.message"
                }
              ]
            }]}
          },
          {
            "fetchflow": "fetchEligibility",
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
            "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
            "validationErrorMessage":"Something went wrong !"
          },
        ]
      },
        "PRODUCT_ERROR": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "errorCodes": {
            "nameMatch": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
          },
          "dataScopeFetchFlow": [{
            "fetchflow": "loanDetails",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]]
          }]
        },
        "ESIGN": {
          'showLeftContent': false,
          'showStepper': false,
          'showSubStepper': false,
          'showBranchSection':true,
          'fieldLabel': 'Accept to Proceed with e-signing',
          "branchConfig": {
            "branchDetails": {
              "name": null,
              "address": null
            }
          }, 
          "dataScopeFetchFlow": [
            {
              "fetchflow": "fetchLoanDetails",
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
              "apiError": "PRODUCT_ERROR"
            },
          ],
      },
      },
      "company": {
        "CUSTOMER_TYPE": {
          "showLeftContent": true,
          "showStepper": true,
          "fieldLabel": "Continue"
        },
        "ACCOUNT_VERIFY": {
          "showLeftContent": true,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Verify",
          "otpIndex": 5,
          "consentIndex": 4,
          "formIndex": 3,
          "formSubmitFlow": [
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
                "capturedData"
              ],
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "borrowerUuid",
                "loanPurposeUuid",
                [
                  "loanAmount",
                  "STATIC",
                  1000
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ]
              ],
              "journeyEventCodeAfterResponseSucess": [
                "ACCOUNT_VERIFY",
                "MOBILE_VERIFY"
              ],
              "journeyEventCodeAfterResponseFailure":
                "ACCOUNT_VERIFY_ERROR"
              ,
              "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED",{
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "formSubmitResponse.message"
                  }
                ]
              }]} 
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
              "submitflow": "fetchAccountData",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "accountNumber",
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
                ]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "formSubmitResponse.message"
                  }
                ]
              }]}
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
              "submitflow": "npaCheck",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "custId",
                  "object.borrowerProfileTextVariable1"
                ],
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "apiError": "PRODUCT_ERROR",
              "validateResponse": {
                "if": [
                  {
                    "==": [
                      {
                        "var": "code"
                      },
                      "200"
                    ]
                  },
                  {
                    "if": [
                      {
                        "==": [
                          {
                            "var": "npaFlag"
                          },
                          "N"
                        ]
                      },
                      "PROCEED",
                      "PRODUCT_ERROR"
                    ]
                  },
                  "PRODUCT_ERROR"
                ]
              }
            },
          ]
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
                  {
                    "getResume": []
                  },
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
                "formValue"
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
              "journeyEventCodeAfterResponseSucess": "MOBILE_VERIFY",
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
            }
          ]
        },
        "EMAIL_VERIFY": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Continue',
          'buttonSkip': 'Skip this Step',
          'skipPage': true,
          "prepopulationRemaps": {
              "alternativeUsername": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.alternativeUsername"]},
          },
          'formSubmitFlow': [{
              "journeyEventCodeAfterResponseSucess": "EMAIL_VERIFY",
              "journeyEventCodeAfterResponseFailure": "EMAIL_VERIFY_FAILED",
          }],
      },
      "PAN_VERIFY": {
          'showLeftContent': false,
          'showStepper': true,
          'showSubStepper': false,
          'fieldLabel': 'Continue',
          "dataScopeFetchFlow": [
              {
                  "fetchflow": "fetchBorrowerDetails",
                  "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                  "apiError": "PRODUCT_ERROR",
                  "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                  "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
              }
          ],
          "prepopulationRemaps": {
              "identityNumberTwo": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.identityNumberTwo","fetchBorrowerDetails.borrowerDetail.identityNumberTwo"]},
          },
          'formSubmitFlow': [{
              "submitflow": "verifyPanNumber_v3",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "loanUuid",
                [
                  "objectUuid",
                  "borrowerUuid"
                ],
                "identityNumberTwo",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                [
                  "requestFor",
                  "STATIC",
                  "BORROWER_COMPANY"
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ],
                [
                  "name",
                  "panholdername"
                ],
                [
                  "dateOfBirth",
                  "panholderdob"
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
                      "ERROR[ERROR_MESSAGE]",
                      {
                        "var": "formSubmitResponse.message"
                      }
                    ]
                  }
                ]
              },
              "journeyEventCodeAfterResponseSucess": "PAN_VERIFY",
              "journeyEventCodeAfterResponseFailure": "PAN_VERIFY_FAILED",
              "apiError": "ERROR[ERROR_MESSAGE]Something went Wrong please Try again after some time!!!"
            },
          {
              "submitflow": "companyProfileUpdate",
              "dataFeedCloud": ["product","formValue","capturedData"],
              "params": [
                  "access_token","loanUuid",["microservicetoken", "oauthAccessToken"],
                  ["companyCategory","currentFormSubmitResponses.verifyPanNumber_v3.constitution"],
                  ["isOnboarding","STATIC",false],
                  ["isValidationRequired","STATIC",false]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
          },
      ],
      },

      "UDYAM_VERIFY": {
          "showLeftContent": false,
          "showSubStepper": true,
          "showStepper": true,
          "buttonSkip": "Skip this Step",
          "skipPage": false,
          "fieldLabel": "Continue",
          "dataScopeFetchFlow": [{
              "fetchflow": "borrowerDetails",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
              "apiError": "PRODUCT_ERROR",
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
          }],
          "prepopulationRemaps": {
              "textVariable3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.UDYAM_NUMBER_MASKED",""]},
          },
          "formSubmitFlow": [
              {
                  "submitflow": "verifyUdyam",
                  "dataFeedCloud": ["product","formValue", "metaData"],
                  "params": ["access_token","loanUuid",
                      ["infoType","STATIC","udhyam"],
                      ["requestFor","STATIC","COMPANY_DETAIL"],
                      ["udhyamNumber",{"if":[{"==":[{"journeyValue":["isEtb"]},true]},{"if":[{"==":[{"var":"metaData.capturedData.AccountData"},null]},"textVariable3","metaData.capturedData.AccountData.UDYAM_NUMBER"]},"textVariable3"]}],
                      ["microservicetoken","oauthAccessToken"]],
                  "validateResponse": {
                      "if": [
                          {"==": [{"var": "formSubmitResponse.code"},"200"]},
                          "PROCEED",
                          {"cat": ["ERROR[ERROR_MESSAGE]",{"var": "formSubmitResponse.message"}]}
                      ]
                  },
                  "validationErrorMessage": "Please provide a valid udyam number",
                  "apiError": "PRODUCT_ERROR",
                  "SaveResponseToCapturedData": true
              },
              {
                  "submitflow": "companyProfileUpdate",
                  "dataFeedCloud": ["product","formValue","capturedData"],
                  "params": [
                      "access_token","loanUuid",["microservicetoken", "oauthAccessToken"],
                      // ["companyCategory","currentFormSubmitResponses.verifyUdyam.mappingFields.companyCategory"],
                      ["isOnboarding","STATIC","false"],
                      ["isValidationRequired","STATIC",false],
                      ["companyName","currentFormSubmitResponses.verifyUdyam.mappingFields.companyName"],
                      ["companyIdentityNumberOne","textVariable3"],
                      ["line1","currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line1"],
                      ["line2","currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line2"],
                      ["city","currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.city"],
                      ["state","currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.state"],
                      ["district","currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.district"],
                      ["zipCode","currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.zipCode"],
                      ["borrowerCompanyTextVariable10","currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable10"],
                      ["borrowerCompanyTextVariable1","currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable1"],
                      ["dateOfArticle","currentFormSubmitResponses.verifyUdyam.mappingFields.dateOfArticle"],
                      ["borrowerCompanyTextVariable2","currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable2"],
                      ["borrowerCompanyTextVariable5","currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable5"],
                      ["borrowerCompanyTextVariable14","currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable14"],
                      ["nicCode","currentFormSubmitResponses.verifyUdyam.mappingFields.nicCode"],
                      ["nicCodeDescription","currentFormSubmitResponses.verifyUdyam.mappingFields.nicCodeDescription"],
                      ["borrowerCompanyTextVariable19","currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable19"],
                  ],
                  "journeyEventCodeAfterResponseSucess": "UDYAM_VERIFY",
                  "journeyEventCodeAfterResponseFailure": "UDYAM_VERIFY_FAILED",
              },
              {
                  "submitflow": "nameMatch_v2",
                  "saveResponseToCapturedData": true,
                  "dataFeedCloud": [
                      "product",
                      "formValue",
                      "capturedData",
                      "metaData"
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
                          "metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"
                      ],
                      [
                          "identityType",
                          "STATIC",
                          "UDYAM"
                      ],
                      [
                          "applicantType",
                          "RULE_OUTPUT",
                          "BORROWER_COMPANY"
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
                          { "==": [{ "var": "formSubmitResponse.code" }, "200"] },"PROCEED",
                          {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}
                      ]
                  },
                  "apiError": "PRODUCT_ERROR"
              }
          ]
      },
        "MORE_INFO": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "callUserHierarchy": false,
          "formSectionIndex": 2,
          "dataScopeFetchFlow": [
            {
                "fetchflow": "borrowerDetails",
                "dataFeedCloud": ["product","formValue","capturedData"],
                "params": ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
                "validateResponse": {
                    "if": [{"==": [{"var": "fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]},
                "apiError": "PRODUCT_ERROR"
            },
            {
                "fetchflow":"getCinNumber",
                "validate": {"if":[{"or":[{"==":[{"journeyValue":["metaData.globalScopeData.borrowerDetails.borrowerDetail.companyCategory"]},"Public Limited"]},{"==":[{"journeyValue":["metaData.globalScopeData.borrowerDetails.borrowerDetail.companyCategory"]},"Private Limited"]}]},"EXECUTE","NEXT"]},
                "dataFeedCloud":["product","formValue","capturedData", "metaData"],
                "apiError": "PRODUCT_ERROR",
                "params":["access_token","loanUuid",["panNumber", "metaData.globalScopeData.borrowerDetails.borrowerDetail.identityNumberTwo"], ["microservicetoken", "oauthAccessToken"]],
                "saveResponseToCapturedData": true
            },
            {
                "fetchflow":"loanWithOutBorrowerDetails",
                "dataFeedCloud":["product","formValue","capturedData"],
                "apiError": "PRODUCT_ERROR",
                "params":["access_token","loanUuid",["microservicetoken", "oauthAccessToken"]],
                "saveResponseToCapturedData": true
            },
        ],
        "prepopulationRemaps": {
            "companyCategory": "borrowerDetails.borrowerDetail.companyCategory",
            "companyName": "borrowerDetails.borrowerDetail.companyName",
            "dateOfArticle": "borrowerDetails.borrowerDetail.dateOfArticle",
            "line1": "borrowerDetails.borrowerDetail.companyAddress.line1",
            "line2": "borrowerDetails.borrowerDetail.companyAddress.line2",
            "zipCode": "borrowerDetails.borrowerDetail.companyAddress.zipCode",
            "state": "borrowerDetails.borrowerDetail.companyAddress.state",
            "city": "borrowerDetails.borrowerDetail.companyAddress.city",
            "district": "borrowerDetails.borrowerDetail.companyAddress.district",
            "borrowerCompanyTextVariable10": "borrowerDetails.borrowerDetail.borrowerCompanyTextVariable10",
            "borrowerCompanyTextVariable1": "borrowerDetails.borrowerDetail.borrowerCompanyTextVariable1",
            "companyIdentityNumberThree": [{
                "getObjectKeyValue": [
                    {
                        "getArrayIndexValue": [
                            {
                                "var": "getCinNumber.mapping"
                            },
                            0
                        ]
                    },
                    "entityId"
                ]
            }, {},"RULE_OUTPUT"],

            "borrowerCompanyTextVariable13": "borrowerDetails.borrowerDetail.borrowerCompanyTextVariable13",
            "textVariable35": "borrowerDetails.borrowerDetail.textVariable35",

            "loanApplicationTextVariable13": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationTextVariable13", null]
            },
            "loanApplicationTextVariable15": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationTextVariable15", null]
            },
            "loanApplicationTableVariable1": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationTableVariable1", null]
            },
            "loanApplicationNumberVariable3": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationNumberVariable3", null]
            },
            "loanApplicationNumberVariable8": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationNumberVariable8", null]
            },
            "loanTenure": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationNumberVariable8", null]
            },
            "loanApplicationDateVariable1": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationDateVariable1", null]
            },
            "loanApplicationNumberVariable4": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationNumberVariable4", null]
            },
            "loanApplicationNumberVariable5": {
                "if": [{ "var": "loanWithOutBorrowerDetails" },
                    "loanWithOutBorrowerDetails.loanDetails.loanApplicationNumberVariable5", null]
            },
            "borrowerCompanyTextVariable67": "borrowerDetails.borrowerDetail.borrowerCompanyTextVariable67",
            "homeBranchState": { "if": [{ "journeyValue": ["isEtb"] }, "metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.stateValue", ""] },
            "homeBranchDistrict": { "if": [{ "journeyValue": ["isEtb"] }, "metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.districtValue", ""] },
            "homeBranchCity": { "if": [{ "journeyValue": ["isEtb"] }, "metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.cityValue", ""] },
            "branchCode": { "if": [{ "journeyValue": ["isEtb"] }, "metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.unitCode", ""] },
            "branchAddress": { "if": [{ "journeyValue": ["isEtb"] }, "metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.line1Value", ""] }
        },

        "formSubmitFlow": [
            {
                "submitflow": "companyProfileUpdate",
                "dataFeedCloud": ["product", "formValue", "capturedData", "metaData"],
                "params": [
                    "access_token",
                    "loanUuid",
                    ["microservicetoken", "oauthAccessToken"],
                    "companyCategory",
                    "companyName",
                    "companyIdentityNumberFour",
                    "borrowerCompanyTextVariable3",
                    "borrowerCompanyTextVariable11",
                    "companyIdentityNumberSevenDueDate",
                    "line1",
                    "line2",
                    "line3",
                    "subDistrict",
                    "zipCode",
                    "state",
                    "city",
                    "ownershipType",
                    "livingSince",
                    "companyAddressOneLine1",
                    "companyAddressOneLine2",
                    "companyAddressOneLine3",
                    "companyAddressOneSubDistrict",
                    "companyAddressOneZipCode",
                    "companyAddressOneState",
                    "companyAddressOneDistrict",
                    "companyAddressOneOwnershipType",
                    "companyAddressOneLivingSince",
                    "companyIdentityNumberThree",
                    // "borrowerCompanyNumberVariable1",
                    ["borrowerCompanyNumberVariable1","RULE_OUTPUT",{"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyCategory"},"Sole Proprietorship"]},1,{"var":"borrowerCompanyNumberVariable1"}]}],
                    ["borrowerCompanyTextVariable4", "STATIC", "UDYAM"],
                    ["borrowerCompanyTextVariable12", "metaData.globalScopeData.borrowerDetails.borrowerDetail.companyIdentityNumberOne"],
                    ["borrowerCompanyTextVariable17", "STATIC", "No"]
                ],
                "journeyEventCodeAfterResponseSucess": "MORE_INFO"
            },
            // {
            //     "submitflow": "assignUserHierarchyUnit",
            //     "dataFeedCloud": ["product", "formValue", "capturedData"],
            //     "saveResponseToProduct": true,
            //     "params": ['access_token', 'loanUuid', ['userHierarchyUnitCode', 'branchCode'],["microservicetoken","oauthAccessToken"]],
            //     "apiError": "PRODUCT_ERROR",
            //     "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
            // }

        ]
        },
        "KCC_LAND_NSTP": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "prepopulationRemaps": {
            "state": "product.object.state",
            "district": "product.object.district"
          },
          "addConfig": [
            {
              "componentType": "TITLE",
              "mandatory": false,
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "titleData": "Land Holding Details"
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
                  "mapSupplyData": true,
                  "mapAndDisable": true,
                  "autoVerifyMappedFields": true,
                  "mappingFields": null,
                  "sendOptionKeyForDropDowns": false,
                  "mapOptionsBasedOnOptionName": true
                },
                "isShow": true,
                "prepopulationRemaps": {
                  "state": "product.object.state",
                  "district": "product.object.district"
                },
                "fields": [
                  {
                    "columnNo": 1,
                    "dependentField": null,
                    "fieldDataType": "TEXT",
                    "fieldLabel": "State",
                    "fieldName": "state",
                    "groupName": null,
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
                    "sortIndex": 1,
                    "groupIndex": 1,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneState" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneState"] }
                    },
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
                    "fieldDataType": "TEXT",
                    "fieldAccessModifier": "READ_ONLY",
                    "fieldLabel": "District",
                    "fieldName": "district",
                    "groupName": null,
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
                    "sortIndex": 1,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneDistrict" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneDistrict"] }
                    },
                    "value": null,
                    "visibleInAdminSection": true,
                    "visibleInBorrowerSection": true,
                    "visibleInDsaSection": true,
                    "visibleInInvestorSection": false,
                    "showLabel": true,
                    "groupIndex": 1,
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Enter Taluka",
                    "fieldName": "tehsil",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": 1,
                    "showField": true,
                    "options": [],
                    "alphaOnly": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Revenue Village",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter your village Name",
                    "fieldName": "revenueVillage",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "alphaOnly": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Khatuni No/Agri Land Acct No",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Khatuni Number",
                    "fieldName": "khatuniNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Survey No /Khasra No/ Block No",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Kharsa Number",
                    "fieldName": "khasraNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "North Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter North Boundary Number",
                    "fieldName": "northBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "East Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter East Boundary Number",
                    "fieldName": "eastBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "West Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter West Boundary Number",
                    "fieldName": "westBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "South Boundary",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": "",
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter South Boundary Number",
                    "fieldName": "southBoundryDesc",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Irrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 9999999999,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": [
                      "totalArea",
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Irrigated area",
                    "fieldName": "areaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 9999999999,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": [
                      "totalArea",
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Unirrigated area",
                    "fieldName": "unirrigatedAreaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Total Area",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "calculation": {
                        "+": [
                          {
                            "var": "unirrigatedAreaInAcre"
                          },
                          {
                            "var": "areaInAcre"
                          }
                        ]
                      }
                    },
                    "rulesFor": [
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter total area in acre",
                    "fieldName": "totalArea",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Market Value (per Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 99999999999,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": [
                      "marketValue"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Market Value per Acre",
                    "fieldName": "costPerAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Total Cost Of Land",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "calculation": {
                        "*": [
                          {
                            "var": "totalArea"
                          },
                          {
                            "var": "costPerAcre"
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
                    "placeholderText": "Enter Cost per Acre",
                    "fieldName": "marketValue",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                    "fieldLabel": "Ownership Type",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "options": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Ownership Type",
                    "fieldName": "ownershipType",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "dontClearTheValue": true
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "fieldAccessModifier": "READ_ONLY",
                    "fieldLabel": "Number of Owners",
                    "minLength": null,
                    "maxLength": 30,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "default": 1
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Enter Number of Owners",
                    "fieldName": "noOfOwners",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  },
                  {
                    "fieldDataType": "TEXT_AREA",
                    "isMandatory": true,
                    "fieldLabel": "Owner's Name",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 200,
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
                    "placeholderText": "Enter Owners name",
                    "fieldName": "ownerNames",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "alphaOnly": true
                  }
                ]
              }
            }
          ],
          "tableIndex": 2
        },
        "KCC_LAND_STP": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "prepopulationRemaps": {
            "state": "product.object.state",
            "district": "product.object.district"
          },
          "addConfig": [
            {
              "componentType": "TITLE",
              "mandatory": false,
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "titleData": "Land Holding Details"
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
                  "mapSupplyData": true,
                  "mapAndDisable": true,
                  "autoVerifyMappedFields": true,
                  "mappingFields": null,
                  "sendOptionKeyForDropDowns": false,
                  "mapOptionsBasedOnOptionName": false
                },
                "isShow": true,
                "prepopulationRemaps": {
                  "state": "product.object.state?product.object.state:''",
                  "district": "product.object.district?product.object.district:''"
                },
                "fields": [
                  {
                    "columnNo": 1,
                    "dependentField": null,
                    "fieldDataType": "DROPDOWN",
                    "dropdownPropertyType":"",
                    "fieldLabel": "State",
                    "fieldName": "state",
                    "groupName": null,
                    "fieldAccessModifier": "EDITABLE",
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
                      "default": { "if": [true, { "var": "addressOneState" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneState"] }
                    },
                    "value": null,
                    "visibleInAdminSection": true,
                    "visibleInBorrowerSection": true,
                    "visibleInDsaSection": true,
                    "visibleInInvestorSection": false,
                    "showLabel": true,
                    "placeholderText":"State",
                    "groupIndex": 1,
                    "nextDependentFiels":"district",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.district
                  },
                  {
                    "columnNo": 2,
                    "dependentField": null,
                    "fieldDataType": "DROPDOWN",
                    "fieldAccessModifier": "READ_ONLY",
                    "fieldLabel": "District",
                    "fieldName": "district",
                    "groupName": null,
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
                      "default": { "if": [true, { "var": "addressOneDistrict" }] },
                      // "default": { "masterValue": ["MORE_INFO.addressOneDistrict"] }
                    },
                    "value": null,
                    "visibleInAdminSection": true,
                    "visibleInBorrowerSection": true,
                    "visibleInDsaSection": true,
                    "visibleInInvestorSection": false,
                    "showLabel": true,
                    "placeholderText":"District",
                    "groupIndex": 1,
                    "nextDependentFiels":"tehsil",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.tehsil
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "Taluka/Tehsil",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"district"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Taluka/Tehsil",
                    "fieldName": "tehsil",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": 1,
                    "showField": true,
                    "options": [], 
                    "nextDependentFiels":"revenueVillage",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.revenueVillage
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "Revenue Village",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"tehsil"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Revenue Village",
                    "fieldName": "revenueVillage",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "nextDependentFiels":"surveyNo",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.surveyNo
                  },  
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "fieldLabel": "Survey Number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"revenueVillage"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Survey Number",
                    "fieldName": "surveyNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "nextDependentFiels":"subSurveyNo",
                    "onChangeApiCall":this.static_landMasters_KeyCodes.subSurveyNo
                  },  
                  {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": false,
                    "fieldLabel": "Sub Survey Number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 20,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "disable": {
                        "if": [{"==":[{"checkNull":[{"var":"surveyNo"}]},true]}, true, false]
                    }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": null,
                    "groupIndex": 1,
                    "placeholderText": "Sub Survey Number",
                    "fieldName": "subSurveyNo",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                  }
                ]
              }
            }
          ],
          "tableIndex": 2
        },
        "KCC_CROP": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": true,
          "fieldLabel": "Continue",
          "addConfig": [
            {
              "componentType": "TITLE",
              "mandatory": false,
              "validateSection": false,
              "sectionContent": {
                "isShow": true,
                "titleData": "Basic Information"
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
                  "mapSupplyData": true,
                  "mapAndDisable": true,
                  "mappingFields": null,
                  "sendOptionKeyForDropDowns": false,
                  "mapOptionsBasedOnOptionName": true
                },
                "isShow": true,
                "fields": [
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "dependentField": null,
                    "fieldLabel": "State",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneState" }] },
                      // "default": { "masterValue": ["addressOneState"] }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": null,
                    "fieldName": "state",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "District",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                      "default": { "if": [true, { "var": "addressOneDistrict" }] },
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": null,
                    "fieldName": "district",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "fieldLabel": "Season",
                    "commonpropertyType": "SEASON_SCALE_OF_FINANCE",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 0,
                    "maxLength": 10,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Select Season",
                    "fieldName": "season",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "fieldLabel": "Crop Name",
                    "commonpropertyType": "SOF_CROP_DETAILS",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 0,
                    "maxLength": 10,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Select crop",
                    "fieldName": "crop",
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true,
                    "options": []
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "\tIrrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 9999999999,
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
                    "placeholderText": "Enter irrigated area in acre",
                    "fieldName": "irrigatedAreaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  },
                  {
                    "fieldDataType": "NUMBER",
                    "isMandatory": true,
                    "fieldLabel": "Unirrigated Area (Acre)",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 0,
                    "maxLength": 9999999999,
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
                    "placeholderText": "Enter un irrigated area in acre",
                    "fieldName": "unIrrigatedAreaInAcre",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true,
                    "decimalNumber": true,
                  }
                ]
              }
            }
          ],
          "tableIndex": 3
        },
        "DECLARATION": {
          "showLeftContent": false,
          "showSubStepper": false,
          "showStepper": true,
          "fieldLabel": "Submit",
          "formSubmitFlow": [],
          "journeyEventCodeAfterResponseSucess": [
            "DECLARATION",
            "JOURNEY_PREVIEW"
          ]
        },
        "JOURNEY_PREVIEW": {
          "showLeftContent": false,
          "showStepper": true,
          "showSubStepper": false,
          "fieldLabel": "Proceed",
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
              ],
              "apiError": "PRODUCT_ERROR",
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
            }
          ],
          "formSubmitFlow": [
            {
              "submitflow": "fetchEligibilityDtls",
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
              "saveResponseToCapturedData": true,
            },
            {
              "submitflow": "updateMainLoanApplicationStatus",
              "dataFeedCloud": [
                "product",
                "formValue",
                "capturedData"
              ],
              
              "saveResponseToProduct": true,
              "params": [
                "access_token",
                "loanUuid",
                [
                  "statusToBeChanged",
                  "STATIC",
                  "DOCUMENTATION_COMPLETE"
                ],
                [
                  "subStatusToBeChanged",
                  "STATIC",
                  "SUB_STATUS_1"
                ],
                [
                  "statusChangeDescription",
                  "STATIC",
                  "Success"
                ],
                [
                  "applicationSource",
                  "STATIC",
                  "WEB_JOURNEY"
                ]
              ],
            },
            {
              "validate":{"if":[{"!=":[{"var":"fetchEligibilityDtls.output.kccOutput.totalKCCLimit"},0]},"EXECUTE","NEXT"]},
              "submitflow": "fetchKccAssesment",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "saveResponseToCapturedData": true,
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "updateKccAssesment",
              "dataFeedCloud": ['product', 'formValue', 'capturedData',"metaData"],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken",
                ],
                ["uuid","fetchKccAssesment.uuid"],
                ["postHarvestExpense","fetchEligibilityDtls.output.kccOutput.postHarvestOrHouseholdOrExpenseOrConsumption"],
                ["farmMaintainanceLimit","fetchEligibilityDtls.output.kccOutput.farmMaintainenceLimit"],
                
              ],
              "saveResponseToProduct": true,
              "apiError": "PRODUCT_ERROR",
            },
            {
              "submitflow": "sanctionUpdate",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "params": [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken",
                ],
                ["loanSanctionAmount","fetchEligibilityDtls.output.kccOutput.totalKCCLimit"],
                ["loanSanctionNumberVariable4","fetchEligibilityDtls.output.kccOutput.sanctionAmountInWords"],
                ["loanSanctionTextVariable13","fetchEligibilityDtls.output.kccOutput.drawingAmount"],
                
              ],
              "validateResponse":{"if":[{"==":[{"var":"fetchEligibilityDtls.output.kccOutput.stpFlag"},"NSTP"]}, {"if":[{"==":[{"var":"fetchEligibilityDtls.output.kccOutput.inPrincipalFlag"},true]},"PROCEED","CONTACT_BRANCH[PARAMS]errorCode=branchAssignment"]},"STP_CONGRATULATIONS"]},
              "saveResponseToProduct": true,
              "apiError": "PRODUCT_ERROR",
            }
          ],
          "prepopulationRemaps": {
            "title": "borrowerDetails.borrowerDetail.title",
            "firstName": "borrowerDetails.borrowerDetail.firstName",
            "lastName": "borrowerDetails.borrowerDetail.lastName",
            "middleName": "borrowerDetails.borrowerDetail.middleName",
            "gender": "borrowerDetails.borrowerDetail.gender",
            "dateOfBirth": "borrowerDetails.borrowerDetail.dateOfBirth",
            "maritalStatus": "borrowerDetails.borrowerDetail.maritalStatus",
            "borrowerDetailTextVariable6": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable6",
            "educationType": "borrowerDetails.borrowerDetail.educationType",
            "borrowerDetailTextVariable24": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable24",
            "citizenship": "borrowerDetails.borrowerDetail.citizenship",
            "borrowerDetailTextVariable11": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable11",
            "borrowerDetailTextVariable12": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable12",
            "identityNumberTwo": "borrowerDetails.borrowerDetail.identityNumberTwo",
            "identityNumberOne": "borrowerDetails.borrowerDetail.identityNumberOne",
            "mobileNumber": "borrowerDetails.borrowerDetail.mobileNumber",
            "alternativeUsername": "borrowerDetails.borrowerDetail.alternativeUsername",
            "line1": "borrowerDetails.borrowerDetail.personalAddress.line1",
            "line2": "borrowerDetails.borrowerDetail.personalAddress.line2",
            "line3": "borrowerDetails.borrowerDetail.personalAddress.line3",
            "subDistrict": "borrowerDetails.borrowerDetail.personalAddress.subDistrict",
            "zipCode": "borrowerDetails.borrowerDetail.personalAddress.zipCode",
            "state": "borrowerDetails.borrowerDetail.personalAddress.state",
            "district": "borrowerDetails.borrowerDetail.personalAddress.district",
            "ownershipType": "borrowerDetails.borrowerDetail.personalAddress.ownershipType",
            "livingSince": "borrowerDetails.borrowerDetail.personalAddress.livingSince",
            "addressOneLine1": "borrowerDetails.borrowerDetail.addressOne.addressOneLine1",
            "addressOneLine2": "borrowerDetails.borrowerDetail.addressOne.addressOneLine2",
            "addressOneLine3": "borrowerDetails.borrowerDetail.addressOne.addressOneLine3",
            "addressOneSubDistrict": "borrowerDetails.borrowerDetail.addressOne.addressOneSubDistrict",
            "addressOneZipCode": "borrowerDetails.borrowerDetail.addressOne.addressOneZipCode",
            "addressOneState": "borrowerDetails.borrowerDetail.addressOne.addressOneState",
            "addressOneDistrict": "borrowerDetails.borrowerDetail.addressOne.addressOneDistrict",
            "addressOneOwnershipType": "borrowerDetails.borrowerDetail.addressOne.addressOneOwnershipType",
            "addressOneLivingSince": "borrowerDetails.borrowerDetail.addressOne.addressOneLivingSince",
            "borrowerDetailNumberVariable5": "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable5",
            "borrowerDetailNumberVariable6": "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable6",
            "borrowerDetailNumberVariable7": "borrowerDetails.borrowerDetail.borrowerDetailNumberVariable7",
            "borrowerDetailTextVariable16": "borrowerDetails.borrowerDetail.borrowerDetailTextVariable16",
            "loanAmount": "loanDetails.loanDetails.loanAmount",
            "homeBranchState": "loanDetails.userHierarchyUnit.addressAssigned.stateValue",
            "homeBranchDistrict": "loanDetails.userHierarchyUnit.addressAssigned.districtValue",
            "homeBranchCity": "loanDetails.userHierarchyUnit.addressAssigned.cityValue",
            "branchCode": "loanDetails.userHierarchyUnit.userHierarchyUnitUnitCode",
            "branchAddress": "loanDetails.userHierarchyUnit.addressAssigned.line1Value"
          }
        },
        "LOAN_ELIGIBILITY":{
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "fieldLabel1": "Yes",
          "fieldLabel2": "Want to add more land ?",
          "titleIndex": 0,
          "loanAmountIndex": 1,
          "refNoInx": 2,
          "loanAmountSuffix": "(amount as per calculation)",
          "showRepaymentSchedule": false,
          "showEmiCalculatorSection": false,
          "showBranchSection": false,
          "showRatingSection": false,
          "showRejectionSection": false,
          "showMainContent": true,
          "showKccdataSection": true,
          "showProceedSection": false,
          "showDownloadKFSBtn":true,
          "showKccdBtnSection":true,
          "downloadKFSConfig":{
            "iconPath":"assets/icons/download_orange.png",
            "buttonLabel":"Download KFS"
          },
          "kfsTableClassName":"kfs-table",
          "kccViewConfig": [  
            {
              "componentType": "IMAGE",
              "validateSection": false,
              "className": "mb-20 f-20 text-center ",
              "sectionContent": {
                "imagePath": "assets/icons/logo_legend.png",
                "isShow": true
              }
            },
            {
              "componentType": "TITLE",
              "validateSection": false,
              "className": "mb-20 f-20 common-title text-center",
              "sectionContent": {
                "titleData": "Key Fact Statement",
                "isShow": true
              }
            },
            {
              "componentType": "TABLE",
              "validateSection": false,
              "className": "mb-20 w-100 tableoddeven verticalTable",
              "validationJson":true,
              "sectionContent": {
                "isShow": true,
                "config": {
                  "showRecordActions": false,
                  "showSerialNo": false,
                  "showFooterAction": false,
                  "showFooterCalculations": false,
                  "showHeaders": false,
                  "footerActionLabel": "+ Add New Borrower",
                  "recordActions": [
                    {
                      "actionCode": "EDIT",
                      "icon": "../../../../assets/icons/edit-new.svg",
                      "name": "Edit"
                    }
                  ],
                  "headers": [
                    {
                      "fieldLabel": "Headings",
                      "fieldName": "title"
                    },
                    {
                      "fieldLabel": "Data",
                      "fieldName": "data"
                    }
                  ],
                  "data": [
                    {
                      "title": "Loan Amount Sanctioned",
                      "data": {
                        "cat": [
                          "₹ ",
                          {
                            "roundOff": [{"var": "$scope.fetchEligibility.output.kccOutput.totalKCCLimit"}]
                          },
                          "<br><br>10% increase p.a. subject to satisfactory annual review."
                        ]
                      },
                    },
                    {
                      "title": "Total Interest Charge During Entire Tenor Of Loan (G)",
                      "data": "The Total Interest charged will be based on Daily product Yearly Compounding at the rate of 7% p.a<br><br>3% prompt repayment incentive (Up to sanction limit of Rs. 3,00,000) available for timely repayment."
                    },
                    {
                      "title": "Other Upfront Charges (Non Refundable)-(F)",
                      "data": "Processing Fees -NIL<br><br>Documentation Fees - NIL<br><br>Personal Accident Insurance Fees - To be borne by applicant as & when debited in the account by insurance company.<br><br>Crop Insurance Fees -To be paid by applicant as & when debited in the account by insurance company.<br><br>Digital convenience Fees - Rs. 500 + applicable taxes (Only for final approval cases)<br><br>Other Charges - E-signing and E-stamping charges as per state law applicable (Only for final approval cases)."
                    },
                    {
                      "title": "Net disbursement amount",
                      "data": "Limit amount - Other upfront charges"
                    },
                    {
                      "title": "Total amount to be paid by borrower in Year1",
                      "data": "Limit amount + Interest + Other upfront charges."
                    },
                    {
                      "title": "Annual Percentage Rate",
                      "data": "7% per annum"
                    },
                    {
                      "title": "Tenor of The Loan",
                      "data": "Initially for the period of 5 year, account to be renewed annually"
                    }, 
                    {
                      "title": "Number of Installment Of Repayment",
                      "data": "Payable on demand or as per harvesting and marketing period of crop."
                    },
                    {
                      "title": "Installment Amount(IN RUPEES)",
                      "data": "Not Applicable"
                    },
                    {
                      "title": "Contingent Charges/Penal Charges",
                      "data": "NIL" 
                    },
                    {
                      "title": "Cooling Off/Look Up Period",
                      "data": "3 days. No additional charges only interim period interest to be serviced on prepayment of loan(Only for STP cases where customer avails disbursement online)"
                    },
                    {
                      "title": "Name Designation and Contact details of Nodal grievance redressal officer for any issues/complaints",
                      "data": "Name - Sri Pravakar Shinde,<br><br>Designation - Chief Manager<br><br>Address : Digital Lending Department, BOI, Head Office,<br><br>G Block, Bandra Kurla Complex, Mumbai - 400051<br><br>Phone number - 022 69179496"
                    }
                  ]
                }
              }
            },
            {
              "componentType": "CONSENT",
              "validateSection": true,
              "className":"kfs-action-items",
              "sectionContent": {
                "isShow": true,
                "config": {
                  "options": [
                    {
                      "consentType": "STATIC",
                      "consentCode": null,
                      "submitConsentCodes": [],
                      "label": "I have read all the Key Fact Statement details mentioned above and accept all the Interest, Charges and EMI Details mentioned as per the Key Fact Statement for availing this loan.",
                      "isMultiLabel": false,
                      "completed": null
                    }
                  ]
                }
              }
            },
            {
              "componentType": "PARAGRAPH",
              "validateSection": false,
              "className": "mt-3 kfs-action-items",
              "sectionContent": {
                "paragraphData": "Do you want to proceed further ?",
                "isShow": true
              }
            }
          ],
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
                "paragraphData": "Your application is not eligible for online processing as per bank benchmark criteria. Please contact your branch for more information."
              }
            },
            {
              "componentType": "PARAGRAPH",
              "className": "form-label-lg mt-4",
              "validateSection": false,
              "sectionContent": {
                "isShow": false,
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
            "status": "Loan Information is sent to your Email address and Mobile Number",
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
              "validateSection": false,
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
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
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
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
            },
            {
              "fetchflow": "fetchEligibility",
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
              "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
              "validationErrorMessage":"Something went wrong !"
            },
            {
              "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
              "fetchflow": "fetchRatingScore",
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
                  "loanUuid",
                ],
                [
                  "risk",
                  "STATIC",
                  false
                ]
              ],
              "validationErrorMessage":"Something went wrong !"
            },
            {
              "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
              "fetchflow": "fetchRatingScore",
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
                  "loanUuid",
                ],
                [
                  "risk",
                  "STATIC",
                  true
                ],
                [
                  "ratingScore","scope.fetchRatingScore.output.ratingOutput.totalMarks"
                ],
                [
                  "sanctionAmount","scope.fetchEligibility.output.kccOutput.totalKCCLimit"
                ]
              ],
              "validationErrorMessage":"Something went wrong !"
            },
            {
              "fetchflow": "fetchEligibility",
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
              "validateResponse": { "if": [{ "==": [{ "var": "output.kccOutput.stpFlag" }, "STP"] }, "ESIGN","PROCEED"]},
              "validationErrorMessage":"Something went wrong !"
            }
          ]
        },
        "LOAN_SUMMARY": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "fieldLabel": "", 
          "titleIndex": 0,
          "loanAmountIndex": 1,
          "refNoInx": 2,
          "loanAmountSuffix": "",
          "showRepaymentSchedule": false,
          "showEmiCalculatorSection": false,
          "showBranchSection": true,
          "showRatingSection": false,
          "showRejectionSection": false,
          "showMainContent": true,
          "showKccdataSection": false,
          "showProceedSection": false,
          "showDownloadKFSBtn":false,
          "showKccdBtnSection":false,    
          "branchConfig": {
            "status": "Loan Information is sent to your Email address and Mobile Number",
            "branchDetails": {
              "name": null,
              "address": null
            }
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
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "journeyEventCodeAfterResponseFailure":"CONGRATULATIONS_PAGE_ERROR",
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]CONGRATULATIONS_PAGE",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
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
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ]
              ],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
            },
            {
              "fetchflow": "fetchEligibility",
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
              "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
              "validationErrorMessage":"Something went wrong !"
            },
            {
            "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
            "fetchflow": "fetchRatingScore",
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
                "loanUuid",
              ],
              [
                "risk",
                "STATIC",
                false
              ]
            ],
            "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
            "validationErrorMessage":"Something went wrong !"
          },
          {
            "validate":{"if":[{"==":[{"var":"scope.fetchEligibility.output.kccOutput.stpFlag"},"STP"]},"EXECUTE","NEXT"]},
            "fetchflow": "fetchRatingScore",
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
                "loanUuid",
              ],
              [
                "risk",
                "STATIC",
                true
              ],
              [
                "ratingScore","scope.fetchRatingScore.output.ratingOutput.totalMarks"
              ],
              [
                "sanctionAmount","scope.fetchEligibility.output.kccOutput.totalKCCLimit"
              ]
            ],
            "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
            "validationErrorMessage":"Something went wrong !"
          },
          {
            "fetchflow": "fetchEligibility",
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
            "validateResponse": { "if": [{ "==": [{ "var": "output.kccOutput.stpFlag" }, "STP"] }, "ESIGN","PROCEED"]},
            "validationErrorMessage":"Something went wrong !"
          },
          {
            "fetchflow": "updateMainLoanApplicationStatus",
            "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
            ],
            
            "saveResponseToProduct": true,
            "params": [
              "access_token",
              "loanUuid",
              [
                "statusToBeChanged",
                "STATIC",
                "AWAITING_APPROVAL_L22"
              ],
              [
                "subStatusToBeChanged",
                "STATIC",
                "SUB_STATUS_2"
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Success"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED","PRODUCT_ERROR"]},
          },
          {
            "fetchflow": "updateMainLoanApplicationStatus",
            "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
            ],
            
            "saveResponseToProduct": true,
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
                "SUB_STATUS_3"
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Success"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED","PRODUCT_ERROR"]},
          },
          {
            "fetchflow": "updateMainLoanApplicationStatus",
            "dataFeedCloud": [
              "product",
              "formValue",
              "capturedData"
            ],
            
            "saveResponseToProduct": true,
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
                "SUB_STATUS_4"
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Success"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "ESIGN","PROCEED"]},
          },
          ]
        }, 
        "CONTACT_BRANCH": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "errorCodes": {
              "branchAssignment": "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details."
          },
          "branchConfig": { 
            "branchDetails": {
              "name": null,
              "address": null
            }
          }, 
          "dataScopeFetchFlow": [{
              "fetchflow": "loanDetails",
              "dataFeedCloud": ["product", "formValue", "capturedData"],
              "params": ["access_token", "loanUuid",["microservicetoken", "oauthAccessToken"]],
              "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
                "cat": [
                  "ERROR[ERROR_MESSAGE]",
                  {
                    "var": "fetchFlowResponse.message"
                  }
                ]
              }]}
          }
          ]
      },
      "STP_CONGRATULATIONS":{
        "showLeftContent": false,
        "showStepper": false,
        "showSubStepper": false,
        "fieldLabel1": "Accept",
        "fieldLabel2": "Decline",
        "titleIndex": 0,
        "loanAmountIndex": 1,
        "refNoInx": 2,
        "loanAmountSuffix": "(amount as per calculation)",
        "showRepaymentSchedule": false,
        "showEmiCalculatorSection": false,
        "showBranchSection": false,
        "showRatingSection": false,
        "showRejectionSection": false,
        "showMainContent": true,
        "showKccdataSection": true,
        "showProceedSection": false,
        "showDownloadKFSBtn":true,
        "showKccdBtnSection":true,
        "downloadKFSConfig":{
          "iconPath":"assets/icons/download_orange.png",
          "buttonLabel":"Download KFS"
        },
        "kfsTableClassName":"kfs-table",
        "kccViewConfig": [  
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mb-20 f-20 common-title kfs-action-items",
            "sectionContent": {
              "titleData": "Calculation Table",
              "isShow": true
            }
          }, 
          {
            "componentType": "TABLE",
            "validateSection": false,
            "className": "mb-20 w-100 tableoddeven verticalTable kfs-action-items",
            "validationJson":true,
            "sectionContent": {
              "isShow": true,
              "config": {
                "showRecordActions": false,
                "showSerialNo": false,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "showHeaders": false,
                "footerActionLabel": "+ Add New Borrower",
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit-new.svg",
                    "name": "Edit"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "Headings",
                    "fieldName": "title"
                  },
                  {
                    "fieldLabel": "Data",
                    "fieldName": "data"
                  }
                ],
                "data": [
                  {
                    "title": "Total Cost of Cultivation Expenses",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.totalCostofCultivationExpenses" }]
                        },
                      ]
                    },
                  },
                  {
                    "title": "Farm Maintenance Limit",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.farmMaintainenceLimit" }]
                        },
                      ]
                    }
                  },
                  {
                    "title": "Post Harvest/Household Expense/Consumption",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.postHarvestOrHouseholdOrExpenseOrConsumption" }]
                        },
                      ]
                    }
                  },
                  {
                    "title": "Total Crop Limit for First Year",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.totalCropLimitforFirstYear" }]
                        },
                      ]
                    }
                  },
                ]
              }
            }
          },
          {
            "componentType": "GRID",
            "validateSection": false,
            "className": "",
            "sectionContent": {
              "isShow": true,
              "items": [
                {
                  "componentType": "BUTTON",
                  "validateSection": false,
                  "parentclassName": "key-download-fact-button",
                  "rootClassName": "key-download-fact-button",
                  "className": "text-right kfs-action-items",
                  "sectionContent": {
                    "label": "Download KFS",
                    "actionId": "KEYFACT_DOWNLOAD",
                    "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base text-right",
                    "prefixIcon": {
                      "className": "material-symbols-outlined clr-orange ",
                      "iconName": "download"
                    },
                    "isShow": true
                  }
                }
              ]
            }
          },

          {
            "componentType": "IMAGE",
            "validateSection": false,
            "className": "mb-20 f-20 text-center ",
            "sectionContent": {
              "imagePath": "assets/icons/logo_legend.png",
              "isShow": true
            }
          },
          {
            "componentType": "TITLE",
            "validateSection": false,
            "className": "mb-20 f-20 common-title",
            "sectionContent": {
              "titleData": "Key Fact Statement",
              "isShow": true
            }
          },
          {
            "componentType": "TABLE",
            "validateSection": false,
            "className": "mb-20 w-100 tableoddeven verticalTable",
            "validationJson":true,
            "sectionContent": {
              "isShow": true,
              "config": {
                "showRecordActions": false,
                "showSerialNo": false,
                "showFooterAction": false,
                "showFooterCalculations": false,
                "showHeaders": false,
                "footerActionLabel": "+ Add New Borrower",
                "recordActions": [
                  {
                    "actionCode": "EDIT",
                    "icon": "../../../../assets/icons/edit-new.svg",
                    "name": "Edit"
                  }
                ],
                "headers": [
                  {
                    "fieldLabel": "Headings",
                    "fieldName": "title"
                  },
                  {
                    "fieldLabel": "Data",
                    "fieldName": "data"
                  }
                ],
                "data": [
                  {
                    "title": "Loan Amount Sanctioned",
                    "data": {
                      "cat": [
                        "₹ ",
                        {
                          "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.totalKCCLimit" }]
                        },
                        "<br><br>10% increase p.a. subject to satisfactory annual review."
                      ]
                    },
                  },
                  {
                    "title": "Total Interest Charge During Entire Tenor Of Loan (G)",
                    "data": "The Total Interest charged will be based on Daily product Yearly Compounding at the rate of 7% p.a<br><br>3% prompt repayment incentive (Up to sanction limit of Rs. 3,00,000) available for timely repayment."
                  },
                  {
                    "title": "Other Upfront Charges (Non Refundable)",
                    "data": "Processing Fees -NIL <br><br> Documentation Fees - NIL <br><br> Personal Accident Insurance Fees - To be borne by applicant as & when debited in the account by insurance co. <br><br> Crop Insurance Fees - To be paid by applicant as & when debited in the account by insurance co. <br><br> Digital convenience Fees - Rs. 500 + applicable taxes (Only for final approval cases) <br><br> Other Charges - E-signing and E-stamping charges as per state law applicable (Only for final approval cases)."
                  },
                  {
                    "title": "Net Disbursement Amount(Year-1)---(H)",
                  "data": {
                    "cat": [
                      "₹ ",
                      {
                        "roundOff": [{ "var": "$scope.fetchEligibility.output.kccOutput.netDisbursementAmount" }]
                      },
                    ]
                  },
                  },
                  {
                    "title": "Total Amount To Be Paid By Borrower In Year-1",
                    "data": "Limit amount + Interest + Other upfront charges.",
                    "validationJson": {
                      "content": {
                        "cat": [
                          "₹ ",
                          {
                            "roundOff": [{"var": "$scope.fetchEligibility.output.kccOutput.totalAmountTobePaidBorrower"}]
                          }
                        ]
                      }
                  }
                  },
                  {
                    "title": "Annual Percentage Rate",
                    "data": "7% per annum",
                    "validationJson": {
                      "content": { 
                          "roundOff": [{"var": "$scope.fetchEligibility.output.kccOutput.annualPercentageRate"}] 
                      }
                  }
                  }, 
                  {
                    "title": "Number Of Installment Of Repayment",
                    "data": "Payable on demand or as per harvesting and marketing period of crop."
                  },
                  {
                    "title": "Installment Amount(IN RUPEES)",
                    "data": "Not Applicable"
                  },
                  {
                    "title": "Contingent Charges/Penal Charges",
                    "data": "NIL" 
                  },
                  {
                    "title": "Cooling Off/Look Up Period",
                    "data": "3 days. No additional charges only interim period interest to be serviced on prepayment of loan(Only for STP cases where customer avails disbursement online)"
                  },
                  {
                    "title": "Details of Lsp Acting As Recovery Agent And Authorized To Approach Applicant",
                    "data": "------------"
                  },
                  {
                    "title": "Name Designation and Contact details of Nodal grievance redressal officer for any issues/complaints",
                    "data": "Name - Sri Pravakar Shinde,<br><br>Designation - Chief Manager<br><br>Address : Digital Lending Department, BOI, Head Office,<br><br>G Block, Bandra Kurla Complex, Mumbai - 400051<br><br>Phone number - 022 69179496"
                  }
                ]
              }
            }
          },
          {
            "componentType": "CONSENT",
            "validateSection": true,
            "className":"kfs-action-items",
            "sectionContent": {
              "isShow": true,
              "config": {
                "options": [
                  {
                    "consentType": "STATIC",
                    "consentCode": null,
                    "submitConsentCodes": [],
                    "label": "I have read all the Key Fact Statement details mentioned above and accept all the Interest, Charges and EMI Details mentioned as per the Key Fact Statement for availing this loan.",
                    "isMultiLabel": false,
                    "completed": null
                  }
                ]
              }
            }
          },
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "className": "mt-3 kfs-action-items",
            "sectionContent": {
              "paragraphData": "Please accept to proceed further",
              "isShow": true
            }
          }
        ],
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
              "paragraphData": "Your application is not eligible for online processing as per bank benchmark criteria. Please contact your branch for more information."
            }
          },
          {
            "componentType": "PARAGRAPH",
            "className": "form-label-lg mt-4",
            "validateSection": false,
            "sectionContent": {
              "isShow": false,
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
          "status": "Loan Information is sent to your Email address and Mobile Number",
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
            "validateSection": false,
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
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
              "cat": [
                "ERROR[ERROR_MESSAGE]",
                {
                  "var": "fetchFlowResponse.message"
                }
              ]
            }]}
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
              "loanUuid",
              [
                "microservicetoken",
                "oauthAccessToken"
              ]
            ],
            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED",   {
              "cat": [
                "ERROR[ERROR_MESSAGE]",
                {
                  "var": "fetchFlowResponse.message"
                }
              ]
            }]}
          },
          {
            "fetchflow": "fetchEligibility",
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
            "validateResponse": {"if":[{"==":[{"checkNull":[{"var":"fetchFlowResponse.output"}]},false]},"PROCEED","ERROR"]},
            "validationErrorMessage":"Something went wrong !"
          },
        ]
      },
        "PRODUCT_ERROR": {
          "showLeftContent": false,
          "showStepper": false,
          "showSubStepper": false,
          "errorCodes": {
            "nameMatch": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
          },
          "dataScopeFetchFlow": [{
            "fetchflow": "loanDetails",
            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
            "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]]
          }]
        },
        "ESIGN": {
          'showLeftContent': false,
          'showStepper': false,
          'showSubStepper': false,
          'showBranchSection':true,
          'fieldLabel': 'Accept to Proceed with e-signing',
          "branchConfig": {
            "branchDetails": {
              "name": null,
              "address": null
            }
          }, 
          "dataScopeFetchFlow": [
            {
              "fetchflow": "fetchLoanDetails",
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
              "apiError": "PRODUCT_ERROR"
            },
          ],
      },
      }

    },
  };

  productDocumentList = {};

  videokycList = {};

  applicationErrorCodes = {
    CC321: {},
  };

  //journey Events are the events which we need to perform at instant of a journey
  journeyEventCodes = {
    CC321: {
      "ACCOUNT_VERIFY": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_1",
          "subStatusChangeDescription": "Savings/Current A/c NO Verification"
        },
        "APPICE_EVENT": {
        "key": "KCCVerifyBasicInfo",
        "properties": {
          "Verify": "True"
          } 
        }
      },
      "ACCOUNT_VERIFY_ERROR":{
        "APPICE_EVENT": {
          "key": "KCCVerifyBasicInfo",
          "properties": {
            "Verify": "False",
            "FailureMessage":["formSubmitResponse.code"]
          }
        }
      },  
      "MOBILE_VERIFY": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_2",
          "subStatusChangeDescription": "Mobile OTP Verification"
        }
      },
      "KYC_PASS": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_3",
          "subStatusChangeDescription": "Adhaar Verification"
        }
      },
      "BASIC_INFO": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_4",
          "subStatusChangeDescription": "Basic Information",
        },
        "APPICE_EVENT": {
          "key": "KCCAddBorrower",
          "properties": {
            "Continue": "True"
          }
        }
      },
      "BASIC_INFO_ERROR":{
        "APPICE_EVENT": {
          "key": "KCCAddBorrower",
          "properties": {
            "Continue": "False",
            "FailureMessage":["formSubmitResponse.code"]
          }
        }
      },
      "BRANCH_VERIFY": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_11",
          "subStatusChangeDescription": "Branch Verification"
        }
      },
      "BRE_CREDIT_BUREAU": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_9",
          "subStatusChangeDescription": "BRE-Minimum Credit Parameters"
        },
      },
      "KCC_LAND": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_13",
          "subStatusChangeDescription": "Submit Landholding Details ",
        },
        "APPICE_EVENT": {
          "key": "KCCAddLand&CropInfo",
          "properties": {
            "Continue": "True"
          }
        }
      },
      "KCC_CROP": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_14",
          "subStatusChangeDescription": "Submit Crop Details",
        },
        "APPICE_EVENT": {
          "key": "KCCAddLand&CropInfo",
          "properties": {
            "Continue": "True"
          }
        }
      },
      "DECLARATION": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_15",
          "subStatusChangeDescription": "Declaration Submit"
        }
      },
      "JOURNEY_PREVIEW": {
        "subStatus": {
          "newSubStatus": "SUB_STATUS_16",
          "subStatusChangeDescription": "Preview"
        }
      },
      "CONGRATULATIONS_PAGE":{
        "APPICE_EVENT": {
          "key": "KCCLoanApproved",
          "properties": {
            "LoanApproved": "True",
            "LoanAmount": ['fetchFlowResponse.loanDetails.loanAmount'],
            "LoanNumber":['fetchFlowResponse.loanDetails.loanId'],
            "CustomerID":['fetchFlowResponse.loanDetails.crmLeadId'],
            "LoanApprovedDate":['fetchFlowResponse.loanDetails.loanApplyDate']
          }
        }
      },
      "CONGRATULATIONS_PAGE_ERROR":{
        "APPICE_EVENT": {
          "key": "KCCLoanApproved",
          "properties": {
            "LoanApproved": "False",
            "FailureMessage":["fetchFlowResponse.code"],
          }
        }
      }
    }
  };

  productLocalisations = {
    CC321: {
      SYSTEM_DOWN: "currently our servers are down please try after some time",
      SWR: "Something Went Wrong!!",
    }
  };

  flowTags = {};
}
