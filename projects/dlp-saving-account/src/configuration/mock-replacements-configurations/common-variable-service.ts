import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
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
    selectedFile = "";
    globalLoaderState = false;
    documentList: any = [];
    sanctionProceedBtnEnable: boolean = false
    customDataDetails: any = {}
    customLoanData: any = {}
    isConsentValid = false
    themeConfiguration = {
        "themeSelection": "theme1"
    }
    uploadedDoc: any;
    uploaddone: boolean;
    appLayoutConfig = {
        isShowJourneyHeader: true,
        isShowJourneyFooter: true,
        isShowSubStepper: true,
        isShowStepperPercentage: true,
        "mobileView": false
    }
    isDevMode = false;
    tenentConfiguration = {
      applicationTheme: "default",
      clientApiKey_orignal: "r3hi1dBLmAfKgugG",
      clientApiKey: "defaultKey",
      landingContentView: "PRODUCT",
      "removeAccessToken":true,
      "IG_API_KEY":'api-v3',
      FETCH_PRODUCT_CONFIG_FROM_JSON_FILE: !this.isDevMode,
      devMode: this.isDevMode,
      "encrypt-configuration": !this.isDevMode,
      "campaign_parameters":["partner","websiteUrl","utm_id","utm_source","utm_medium","utm_campaign","utm_code","offerId","leadId","accountId","remarksAndSampleUrl","utm_content","object_type","object_id","utm_term"]
    };
    static_commonProperty_KeyCodes = ["HOME_BRANCH_STATE", "HOME_BRANCH_DISTRICT", "HOME_BRANCH_CITY", "HOME_BRANCH_NAME", "STAR_GOLD", "GOLD_PURPOSE_OF_ADVANCE", "PINCODE", "PINCODE_STATE", "PINCODE_CITY", "DOCUMENT_TYPE", "GST_SEARCH"]
    commonProperty_static = {
        "STATE": [
            {
                "optionCode": "AN",
                "optionKey": "AN",
                "optionName": "ANDAMAN NICOBAR",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "ANDAMAN NICOBAR",
                "sortIndex": 0
            },
            {
                "optionCode": "AP",
                "optionKey": "AP",
                "optionName": "ANDHRA PRADESH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "ANDHRA PRADESH",
                "sortIndex": 1
            },
            {
                "optionCode": "AR",
                "optionKey": "AR",
                "optionName": "ARUNACHAL PRADESH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "ARUNACHAL PRADESH",
                "sortIndex": 2
            },
            {
                "optionCode": "AS",
                "optionKey": "AS",
                "optionName": "ASSAM",
                "optionParentCode": "IN",
                "optionParentProperty": null,
                "optionValue": "ASSAM",
                "sortIndex": 3
            },
            {
                "optionCode": "BR",
                "optionKey": "BR",
                "optionName": "BIHAR",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "BIHAR",
                "sortIndex": 4
            },
            {
                "optionCode": "CH",
                "optionKey": "CH",
                "optionName": "CHANDIGARH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "CHANDIGARH",
                "sortIndex": 5
            },
            {
                "optionCode": "CG",
                "optionKey": "CG",
                "optionName": "CHHATTISGARH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "CHHATTISGARH",
                "sortIndex": 6
            },
            {
                "optionCode": "DN",
                "optionKey": "DN",
                "optionName": "DADRA & NAGAR HAVELI",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "DADRA & NAGAR HAVELI",
                "sortIndex": 7
            },
            {
                "optionCode": "DD",
                "optionKey": "DD",
                "optionName": "DAMAN & DIU",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "DAMAN &DIU",
                "sortIndex": 8
            },
            {
                "optionCode": "DL",
                "optionKey": "DL",
                "optionName": "DELHI",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "DELHI",
                "sortIndex": 9
            },
            {
                "optionCode": "GA",
                "optionKey": "GA",
                "optionName": "GOA",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "GOA",
                "sortIndex": 10
            },
            {
                "optionCode": "GJ",
                "optionKey": "GJ",
                "optionName": "GUJARAT",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "GUJARAT",
                "sortIndex": 11
            },
            {
                "optionCode": "HR",
                "optionKey": "HR",
                "optionName": "HARYANA",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "HARYANA",
                "sortIndex": 12
            },
            {
                "optionCode": "HP",
                "optionKey": "HP",
                "optionName": "HIMACHAL PRADESH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "HIMACHAL PRADESH",
                "sortIndex": 13
            },
            {
                "optionCode": "JK",
                "optionKey": "JK",
                "optionName": "JAMMU & KASHMIR",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "JAMMU & KASHMIR",
                "sortIndex": 14
            },
            {
                "optionCode": "JH",
                "optionKey": "JH",
                "optionName": "JHARKHAND",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "JHARKHAND",
                "sortIndex": 15
            },
            {
                "optionCode": "KA",
                "optionKey": "KA",
                "optionName": "KARNATAKA",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "KARNATAKA",
                "sortIndex": 16
            },
            {
                "optionCode": "KL",
                "optionKey": "KL",
                "optionName": "KERALA",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "KERALA",
                "sortIndex": 17
            },
            {
                "optionCode": "LD",
                "optionKey": "LD",
                "optionName": "LAKSHDWEEP",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "LAKSHDWEEP",
                "sortIndex": 18
            },
            {
                "optionCode": "MP",
                "optionKey": "MP",
                "optionName": "MADHYA PRADESH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "MADHYA PRADESH",
                "sortIndex": 19
            },
            {
                "optionCode": "MH",
                "optionKey": "MH",
                "optionName": "MAHARASHTRA",
                "optionParentCode": "IN",
                "optionParentProperty": null,
                "optionValue": "MAHARASHTRA",
                "sortIndex": 20
            },
            {
                "optionCode": "MN",
                "optionKey": "MN",
                "optionName": "MANIPUR",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "MANIPUR",
                "sortIndex": 21
            },
            {
                "optionCode": "ML",
                "optionKey": "ML",
                "optionName": "MEGHALAYA",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "MEGHALAYA",
                "sortIndex": 22
            },
            {
                "optionCode": "MZ",
                "optionKey": "MZ",
                "optionName": "MIZORAM",
                "optionParentCode": "IN",
                "optionParentProperty": null,
                "optionValue": "MIZORAM",
                "sortIndex": 23
            },
            {
                "optionCode": "NL",
                "optionKey": "NL",
                "optionName": "NAGALAND",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "NAGALAND",
                "sortIndex": 24
            },
            {
                "optionCode": "OR",
                "optionKey": "OR",
                "optionName": "ORISSA",
                "optionParentCode": "IN",
                "optionParentProperty": null,
                "optionValue": "ORISSA",
                "sortIndex": 25
            },
            {
                "optionCode": "PY",
                "optionKey": "PY",
                "optionName": "PONDICHERRY",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "PONDICHERRY",
                "sortIndex": 26
            },
            {
                "optionCode": "PB",
                "optionKey": "PB",
                "optionName": "PUNJAB",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "PUNJAB",
                "sortIndex": 27
            },
            {
                "optionCode": "RJ",
                "optionKey": "RJ",
                "optionName": "RAJASTHAN",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "RAJASTHAN",
                "sortIndex": 28
            },
            {
                "optionCode": "SK",
                "optionKey": "SK",
                "optionName": "SIKKIM",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "SIKKIM",
                "sortIndex": 29
            },
            {
                "optionCode": "TN",
                "optionKey": "TN",
                "optionName": "TAMIL NADU",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "TAMIL NADU",
                "sortIndex": 30
            },
            {
                "optionCode": "TS",
                "optionKey": "TS",
                "optionName": "TELANGANA",
                "optionParentCode": "IN",
                "optionParentProperty": null,
                "optionValue": "TELANGANA",
                "sortIndex": 31
            },
            {
                "optionCode": "TR",
                "optionKey": "TR",
                "optionName": "TRIPURA",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "TRIPURA",
                "sortIndex": 32
            },
            {
                "optionCode": "UP",
                "optionKey": "UP",
                "optionName": "UTTAR PRADESH",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "UTTAR PRADESH",
                "sortIndex": 33
            },
            {
                "optionCode": "UK",
                "optionKey": "UK",
                "optionName": "UTTARANCHAL",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "UTTARANCHAL",
                "sortIndex": 34
            },
            {
                "optionCode": "WB",
                "optionKey": "WB",
                "optionName": "WEST BENGAL",
                "optionParentCode": "IN",
                "optionParentProperty": "COUNTRY",
                "optionValue": "WEST BENGAL",
                "sortIndex": 35
            }
        ],
        "DISTRICT": [
            {
                "optionCode": "030",
                "optionKey": "030",
                "optionName": "AIZWAL",
                "optionParentCode": "MZ",
                "optionParentProperty": null,
                "optionValue": "AIZWAL",
                "sortIndex": 0
            },
            {
                "optionCode": "966",
                "optionKey": "966",
                "optionName": "ALAPPUZHA",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "ALAPPUZHA",
                "sortIndex": 1
            },
            {
                "optionCode": "267",
                "optionKey": "267",
                "optionName": "BADAUN",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BADAUN",
                "sortIndex": 2
            },
            {
                "optionCode": "869",
                "optionKey": "869",
                "optionName": "BAGALKOT",
                "optionParentCode": "KA",
                "optionParentProperty": null,
                "optionValue": "BAGALKOT",
                "sortIndex": 3
            },
            {
                "optionCode": "244",
                "optionKey": "244",
                "optionName": "BAHRAICH",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BAHRAICH",
                "sortIndex": 4
            },
            {
                "optionCode": "544",
                "optionKey": "544",
                "optionName": "BANASKANTHA",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "BANASKANTHA",
                "sortIndex": 5
            },
            {
                "optionCode": "399",
                "optionKey": "399",
                "optionName": "BARDHAMAN",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "BARDHAMAN",
                "sortIndex": 6
            },
            {
                "optionCode": "628",
                "optionKey": "628",
                "optionName": "BEED",
                "optionParentCode": "MH",
                "optionParentProperty": null,
                "optionValue": "BEED",
                "sortIndex": 7
            },
            {
                "optionCode": "304",
                "optionKey": "304",
                "optionName": "BHATINDA",
                "optionParentCode": "PB",
                "optionParentProperty": null,
                "optionValue": "BHATINDA",
                "sortIndex": 8
            },
            {
                "optionCode": "276",
                "optionKey": "276",
                "optionName": "BIJNORE",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BIJNORE",
                "sortIndex": 9
            },
            {
                "optionCode": "184",
                "optionKey": "184",
                "optionName": "BOLANGIR",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "BOLANGIR",
                "sortIndex": 10
            },
            {
                "optionCode": "100",
                "optionKey": "100",
                "optionName": "CALCUTTA",
                "optionParentCode": "WB",
                "optionParentProperty": null,
                "optionValue": "CALCUTTA",
                "sortIndex": 11
            },
            {
                "optionCode": "022",
                "optionKey": "022",
                "optionName": "CHACHER",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "CHACHER",
                "sortIndex": 12
            },
            {
                "optionCode": "284",
                "optionKey": "284",
                "optionName": "CHAMOLI",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "CHAMOLI",
                "sortIndex": 13
            },
            {
                "optionCode": "877",
                "optionKey": "877",
                "optionName": "CHIKAMAGLUR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "CHIKAMAGLUR",
                "sortIndex": 14
            },
            {
                "optionCode": "535",
                "optionKey": "535",
                "optionName": "CHITTORGARH",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "CHITTORGARH",
                "sortIndex": 15
            },
            {
                "optionCode": "880",
                "optionKey": "880",
                "optionName": "DAK. KANNADA",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "DAK. KANNADA",
                "sortIndex": 16
            },
            {
                "optionCode": "007",
                "optionKey": "007",
                "optionName": "DARRANGA",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "DARRANGA",
                "sortIndex": 17
            },
            {
                "optionCode": "287",
                "optionKey": "287",
                "optionName": "DEHRADUN",
                "optionParentCode": "UA",
                "optionParentProperty": null,
                "optionValue": "DEHRADUN",
                "sortIndex": 18
            },
            {
                "optionCode": "860",
                "optionKey": "860",
                "optionName": "DHARWAR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "DHARWAR",
                "sortIndex": 19
            },
            {
                "optionCode": "256",
                "optionKey": "256",
                "optionName": "ETWAH",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "ETWAH",
                "sortIndex": 20
            },
            {
                "optionCode": "306",
                "optionKey": "306",
                "optionName": "FEROZEPUR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "FEROZEPUR",
                "sortIndex": 21
            },
            {
                "optionCode": "540",
                "optionKey": "540",
                "optionName": "GANDHI NAGAR",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "GANDHI NAGAR",
                "sortIndex": 22
            },
            {
                "optionCode": "084",
                "optionKey": "084",
                "optionName": "HAZARIBAGH",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "HAZARIBAGH",
                "sortIndex": 23
            },
            {
                "optionCode": "350",
                "optionKey": "350",
                "optionName": "HISSAR",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "HISSAR",
                "sortIndex": 24
            },
            {
                "optionCode": "107",
                "optionKey": "107",
                "optionName": "HOOGHLY",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "HOOGHLY",
                "sortIndex": 25
            },
            {
                "optionCode": "110",
                "optionKey": "110",
                "optionName": "HOWRAH",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "HOWRAH",
                "sortIndex": 26
            },
            {
                "optionCode": "081",
                "optionKey": "081",
                "optionName": "JAHANABAD",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "JAHANABAD",
                "sortIndex": 27
            },
            {
                "optionCode": "525",
                "optionKey": "525",
                "optionName": "JALORE",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "JALORE",
                "sortIndex": 28
            },
            {
                "optionCode": "753",
                "optionKey": "753",
                "optionName": "JANJGIR - CHAMPA",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "JANJGIR - CHAMPA",
                "sortIndex": 29
            },
            {
                "optionCode": "707",
                "optionKey": "707",
                "optionName": "JASHPUR",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "JASHPUR",
                "sortIndex": 30
            },
            {
                "optionCode": "255",
                "optionKey": "255",
                "optionName": "KANNAUJ",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "KANNAUJ",
                "sortIndex": 31
            },
            {
                "optionCode": "936",
                "optionKey": "936",
                "optionName": "KANYAKUMARI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "KANYAKUMARI",
                "sortIndex": 32
            },
            {
                "optionCode": "452",
                "optionKey": "452",
                "optionName": "KATHUA",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "KATHUA",
                "sortIndex": 33
            },
            {
                "optionCode": "176",
                "optionKey": "176",
                "optionName": "KENDUJHAR",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "KENDUJHAR",
                "sortIndex": 34
            },
            {
                "optionCode": "085",
                "optionKey": "085",
                "optionName": "KHAGARIA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "KHAGARIA",
                "sortIndex": 35
            },
            {
                "optionCode": "882",
                "optionKey": "882",
                "optionName": "KODURU",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "KODURU",
                "sortIndex": 36
            },
            {
                "optionCode": "586",
                "optionKey": "586",
                "optionName": "KUCHCHH",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "KUCHCHH",
                "sortIndex": 37
            },
            {
                "optionCode": "468",
                "optionKey": "468",
                "optionName": "KULLU",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "KULLU",
                "sortIndex": 38
            },
            {
                "optionCode": "044",
                "optionKey": "044",
                "optionName": "LOHARDAGA",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "LOHARDAGA",
                "sortIndex": 39
            },
            {
                "optionCode": "032",
                "optionKey": "032",
                "optionName": "LUNGLEH",
                "optionParentCode": "MZ",
                "optionParentProperty": "STATE",
                "optionValue": "LUNGLEH",
                "sortIndex": 40
            },
            {
                "optionCode": "983",
                "optionKey": "983",
                "optionName": "MALAPURAM",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "MALAPURAM",
                "sortIndex": 41
            },
            {
                "optionCode": "112",
                "optionKey": "112",
                "optionName": "MEDINIPUR",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "MEDINIPUR",
                "sortIndex": 42
            },
            {
                "optionCode": "346",
                "optionKey": "346",
                "optionName": "MOHINDERGARH",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "MOHINDERGARH",
                "sortIndex": 43
            },
            {
                "optionCode": "124",
                "optionKey": "124",
                "optionName": "NADIAD",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "NADIAD",
                "sortIndex": 44
            },
            {
                "optionCode": "008",
                "optionKey": "008",
                "optionName": "NALBARI",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "NALBARI",
                "sortIndex": 45
            },
            {
                "optionCode": "714",
                "optionKey": "714",
                "optionName": "NARASINGHPUR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "NARASINGHPUR",
                "sortIndex": 46
            },
            {
                "optionCode": "018",
                "optionKey": "018",
                "optionName": "NORTH CACHER HILLS",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "NORTH CACHER HILLS",
                "sortIndex": 47
            },
            {
                "optionCode": "190",
                "optionKey": "190",
                "optionName": "NORTH TRIPURA",
                "optionParentCode": "TR",
                "optionParentProperty": "STATE",
                "optionValue": "NORTH TRIPURA",
                "sortIndex": 48
            },
            {
                "optionCode": "362",
                "optionKey": "362",
                "optionName": "NORTH WEST",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "NORTH WEST",
                "sortIndex": 49
            },
            {
                "optionCode": "086",
                "optionKey": "086",
                "optionName": "PALAMU",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "PALAMU",
                "sortIndex": 50
            },
            {
                "optionCode": "548",
                "optionKey": "548",
                "optionName": "PANCHMAHAL",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "PANCHMAHAL",
                "sortIndex": 51
            },
            {
                "optionCode": "285",
                "optionKey": "285",
                "optionName": "PAURI GARHWAL",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "PAURI GARHWAL",
                "sortIndex": 52
            },
            {
                "optionCode": "990",
                "optionKey": "990",
                "optionName": "PONDICHERRY",
                "optionParentCode": "PY",
                "optionParentProperty": "STATE",
                "optionValue": "PONDICHERRY",
                "sortIndex": 53
            },
            {
                "optionCode": "938",
                "optionKey": "938",
                "optionName": "PUDUKOTTAI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "PUDUKOTTAI",
                "sortIndex": 54
            },
            {
                "optionCode": "434",
                "optionKey": "434",
                "optionName": "PULWANA",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "PULWANA",
                "sortIndex": 55
            },
            {
                "optionCode": "053",
                "optionKey": "053",
                "optionName": "PURBA CHAMPARAN",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "PURBA CHAMPARAN",
                "sortIndex": 56
            },
            {
                "optionCode": "036",
                "optionKey": "036",
                "optionName": "PURBI SINGBHUM",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "PURBI SINGBHUM",
                "sortIndex": 57
            },
            {
                "optionCode": "117",
                "optionKey": "117",
                "optionName": "PURULIA",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "PURULIA",
                "sortIndex": 58
            },
            {
                "optionCode": "204",
                "optionKey": "204",
                "optionName": "RAIBAREILLY",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "RAIBAREILLY",
                "sortIndex": 59
            },
            {
                "optionCode": "838",
                "optionKey": "838",
                "optionName": "RANGA REDDY",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "RANGA REDDY",
                "sortIndex": 60
            },
            {
                "optionCode": "347",
                "optionKey": "347",
                "optionName": "REWARI",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "REWARI",
                "sortIndex": 61
            },
            {
                "optionCode": "546",
                "optionKey": "546",
                "optionName": "SABARKANTHA",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "SABARKANTHA",
                "sortIndex": 62
            },
            {
                "optionCode": "231",
                "optionKey": "231",
                "optionName": "SANT RAVIDAS NAGAR BHADOHI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SANT RAVIDAS NAGAR BHADOHI",
                "sortIndex": 63
            },
            {
                "optionCode": "048",
                "optionKey": "048",
                "optionName": "SAUPAL",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "SAUPAL",
                "sortIndex": 64
            },
            {
                "optionCode": "460",
                "optionKey": "460",
                "optionName": "SHIMLA",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "SHIMLA",
                "sortIndex": 65
            },
            {
                "optionCode": "610",
                "optionKey": "610",
                "optionName": "SHOLAPUR",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "SHOLAPUR",
                "sortIndex": 66
            },
            {
                "optionCode": "480",
                "optionKey": "480",
                "optionName": "SIRMOUR",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "SIRMOUR",
                "sortIndex": 67
            },
            {
                "optionCode": "357",
                "optionKey": "357",
                "optionName": "SONEPAT",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "SONEPAT",
                "sortIndex": 68
            },
            {
                "optionCode": "199",
                "optionKey": "199",
                "optionName": "SOUTH SIKKIM",
                "optionParentCode": "SK",
                "optionParentProperty": "STATE",
                "optionValue": "SOUTH SIKKIM",
                "sortIndex": 69
            },
            {
                "optionCode": "364",
                "optionKey": "364",
                "optionName": "SOUTH WEST",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "SOUTH WEST",
                "sortIndex": 70
            },
            {
                "optionCode": "563",
                "optionKey": "563",
                "optionName": "THE DANGS",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "THE DANGS",
                "sortIndex": 71
            },
            {
                "optionCode": "918",
                "optionKey": "918",
                "optionName": "THE NILGIRI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "THE NILGIRI",
                "sortIndex": 72
            },
            {
                "optionCode": "934",
                "optionKey": "934",
                "optionName": "TIRUNELVELI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "TIRUNELVELI",
                "sortIndex": 73
            },
            {
                "optionCode": "902",
                "optionKey": "902",
                "optionName": "TIRUVALLUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "TIRUVALLUR",
                "sortIndex": 74
            },
            {
                "optionCode": "960",
                "optionKey": "960",
                "optionName": "TRIVANDRUM",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "TRIVANDRUM",
                "sortIndex": 75
            },
            {
                "optionCode": "881",
                "optionKey": "881",
                "optionName": "UDUPI",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "UDUPI",
                "sortIndex": 76
            },
            {
                "optionCode": "872",
                "optionKey": "872",
                "optionName": "UTTAR KANNADA",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "UTTAR KANNADA",
                "sortIndex": 77
            },
            {
                "optionCode": "289",
                "optionKey": "289",
                "optionName": "UTTARKASHI",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "UTTARKASHI",
                "sortIndex": 78
            },
            {
                "optionCode": "550",
                "optionKey": "550",
                "optionName": "VADODARA",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "VADODARA",
                "sortIndex": 79
            },
            {
                "optionCode": "812",
                "optionKey": "812",
                "optionName": "VISHAKHAPATNAM",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "VISHAKHAPATNAM",
                "sortIndex": 80
            },
            {
                "optionCode": "064",
                "optionKey": "064",
                "optionName": "WEST CHAMPARAN",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "WEST CHAMPARAN",
                "sortIndex": 81
            },
            {
                "optionCode": "130",
                "optionKey": "130",
                "optionName": "WEST DINAJPUR",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "WEST DINAJPUR",
                "sortIndex": 82
            },
            {
                "optionCode": "634",
                "optionKey": "634",
                "optionName": "YEOTAMAL",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "YEOTAMAL",
                "sortIndex": 83
            },
            {
                "optionCode": "301",
                "optionKey": "301",
                "optionName": "A&N ISLANDS",
                "optionParentCode": "AN",
                "optionParentProperty": "STATE",
                "optionValue": "A&N ISLANDS",
                "sortIndex": 84
            },
            {
                "optionCode": "644",
                "optionKey": "644",
                "optionName": "AMRAVATI",
                "optionParentCode": "MH",
                "optionParentProperty": null,
                "optionValue": "AMRAOTI",
                "sortIndex": 85
            },
            {
                "optionCode": "083",
                "optionKey": "083",
                "optionName": "ARARIA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "ARARIA",
                "sortIndex": 86
            },
            {
                "optionCode": "261",
                "optionKey": "261",
                "optionName": "ARIYALUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "ARIYALUR",
                "sortIndex": 87
            },
            {
                "optionCode": "432",
                "optionKey": "432",
                "optionName": "BADGAM",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "BADGAM",
                "sortIndex": 88
            },
            {
                "optionCode": "202",
                "optionKey": "202",
                "optionName": "BARABANKI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BARABANKI",
                "sortIndex": 89
            },
            {
                "optionCode": "877",
                "optionKey": "877",
                "optionName": "CHIKAMANGALUR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "CHIKAMANGALUR",
                "sortIndex": 90
            },
            {
                "optionCode": "742",
                "optionKey": "742",
                "optionName": "DATIA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "DATIA",
                "sortIndex": 91
            },
            {
                "optionCode": "704",
                "optionKey": "704",
                "optionName": "DHAMTARI",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "DHAMTARI",
                "sortIndex": 92
            },
            {
                "optionCode": "410",
                "optionKey": "410",
                "optionName": "DHEMAJI",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "DHEMAJI",
                "sortIndex": 93
            },
            {
                "optionCode": "094",
                "optionKey": "094",
                "optionName": "EAST SIANG",
                "optionParentCode": "AR",
                "optionParentProperty": "STATE",
                "optionValue": "EAST SIANG",
                "sortIndex": 94
            },
            {
                "optionCode": "976",
                "optionKey": "976",
                "optionName": "IDUKI",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "IDUKI",
                "sortIndex": 95
            },
            {
                "optionCode": "152",
                "optionKey": "152",
                "optionName": "IMPHAL",
                "optionParentCode": "MN",
                "optionParentProperty": "STATE",
                "optionValue": "IMPHAL",
                "sortIndex": 96
            },
            {
                "optionCode": "037",
                "optionKey": "037",
                "optionName": "KAIMUR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "KAIMUR",
                "sortIndex": 97
            },
            {
                "optionCode": "989",
                "optionKey": "989",
                "optionName": "KASARGODE",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "KASARGODE",
                "sortIndex": 98
            },
            {
                "optionCode": "765",
                "optionKey": "765",
                "optionName": "KAWARDHA",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "KAWARDHA",
                "sortIndex": 99
            },
            {
                "optionCode": "049",
                "optionKey": "049",
                "optionName": "KISHANGANJ",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "KISHANGANJ",
                "sortIndex": 100
            },
            {
                "optionCode": "755",
                "optionKey": "755",
                "optionName": "KORBA",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "KORBA",
                "sortIndex": 101
            },
            {
                "optionCode": "436",
                "optionKey": "436",
                "optionName": "KUPWARA",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "KUPWARA",
                "sortIndex": 102
            },
            {
                "optionCode": "551",
                "optionKey": "551",
                "optionName": "NARMADA",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "NARMADA",
                "sortIndex": 103
            },
            {
                "optionCode": "557",
                "optionKey": "557",
                "optionName": "NAVSARI",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "NAVSARI",
                "sortIndex": 104
            },
            {
                "optionCode": "059",
                "optionKey": "059",
                "optionName": "NAWADA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "NAWADA",
                "sortIndex": 105
            },
            {
                "optionCode": "448",
                "optionKey": "448",
                "optionName": "RAJOURI",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "RAJOURI",
                "sortIndex": 106
            },
            {
                "optionCode": "067",
                "optionKey": "067",
                "optionName": "ROHTAS",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "ROHTAS",
                "sortIndex": 107
            },
            {
                "optionCode": "150",
                "optionKey": "150",
                "optionName": "SENAPATI",
                "optionParentCode": "MN",
                "optionParentProperty": "STATE",
                "optionValue": "SENAPATI",
                "sortIndex": 108
            },
            {
                "optionCode": "749",
                "optionKey": "749",
                "optionName": "SHAHDOL",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SHAHDOL",
                "sortIndex": 109
            },
            {
                "optionCode": "737",
                "optionKey": "737",
                "optionName": "SHIVPURI",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SHIVPURI",
                "sortIndex": 110
            },
            {
                "optionCode": "748",
                "optionKey": "748",
                "optionName": "SIDHI",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SIDHI",
                "sortIndex": 111
            },
            {
                "optionCode": "506",
                "optionKey": "506",
                "optionName": "SWAIMADHOPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "SWAIMADHOPUR",
                "sortIndex": 112
            },
            {
                "optionCode": "743",
                "optionKey": "743",
                "optionName": "TIKAMGARH",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "TIKAMGARH",
                "sortIndex": 113
            },
            {
                "optionCode": "910",
                "optionKey": "910",
                "optionName": "TIRUCHIRAPPALLI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "TIRUCHIRAPPALLI",
                "sortIndex": 114
            },
            {
                "optionCode": "988",
                "optionKey": "988",
                "optionName": "WAYANAD",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "WAYANAD",
                "sortIndex": 115
            },
            {
                "optionCode": "805",
                "optionKey": "805",
                "optionName": "ADILABAD",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "ADILABAD",
                "sortIndex": 116
            },
            {
                "optionCode": "260",
                "optionKey": "260",
                "optionName": "AGRA",
                "optionParentCode": "UP",
                "optionParentProperty": null,
                "optionValue": "AGRA",
                "sortIndex": 117
            },
            {
                "optionCode": "570",
                "optionKey": "570",
                "optionName": "AHMEDABAD",
                "optionParentCode": "GJ",
                "optionParentProperty": null,
                "optionValue": "AHMEDABAD",
                "sortIndex": 118
            },
            {
                "optionCode": "510",
                "optionKey": "510",
                "optionName": "AJMER",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "AJMER",
                "sortIndex": 119
            },
            {
                "optionCode": "646",
                "optionKey": "646",
                "optionName": "AKOLA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "AKOLA",
                "sortIndex": 120
            },
            {
                "optionCode": "264",
                "optionKey": "264",
                "optionName": "ALIGARH",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "ALIGARH",
                "sortIndex": 121
            },
            {
                "optionCode": "220",
                "optionKey": "220",
                "optionName": "ALLAHABAD",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "ALLAHABAD",
                "sortIndex": 122
            },
            {
                "optionCode": "282",
                "optionKey": "282",
                "optionName": "ALMORA",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "ALMORA",
                "sortIndex": 123
            },
            {
                "optionCode": "502",
                "optionKey": "502",
                "optionName": "ALWAR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "ALWAR",
                "sortIndex": 124
            },
            {
                "optionCode": "340",
                "optionKey": "340",
                "optionName": "AMBALA",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "AMBALA",
                "sortIndex": 125
            },
            {
                "optionCode": "215",
                "optionKey": "215",
                "optionName": "AMBEDKAR NAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "AMBEDKAR NAGAR",
                "sortIndex": 126
            },
            {
                "optionCode": "574",
                "optionKey": "574",
                "optionName": "AMRELI",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "AMRELI",
                "sortIndex": 127
            },
            {
                "optionCode": "310",
                "optionKey": "310",
                "optionName": "AMRITSAR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "AMRITSAR",
                "sortIndex": 128
            },
            {
                "optionCode": "567",
                "optionKey": "567",
                "optionName": "ANAND",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "ANAND",
                "sortIndex": 129
            },
            {
                "optionCode": "829",
                "optionKey": "829",
                "optionName": "ANANTAPUR",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "ANANTAPUR",
                "sortIndex": 130
            },
            {
                "optionCode": "444",
                "optionKey": "444",
                "optionName": "ANANTNAG",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "ANANTNAG",
                "sortIndex": 131
            },
            {
                "optionCode": "624",
                "optionKey": "624",
                "optionName": "AURANGABAD",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "AURANGABAD",
                "sortIndex": 132
            },
            {
                "optionCode": "226",
                "optionKey": "226",
                "optionName": "AZAMGARH",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "AZAMGARH",
                "sortIndex": 133
            },
            {
                "optionCode": "172",
                "optionKey": "172",
                "optionName": "BALESHWAR",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "BALESHWAR",
                "sortIndex": 134
            },
            {
                "optionCode": "235",
                "optionKey": "235",
                "optionName": "BALLIA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BALLIA",
                "sortIndex": 135
            },
            {
                "optionCode": "241",
                "optionKey": "241",
                "optionName": "BALRAMPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BALRAMPUR",
                "sortIndex": 136
            },
            {
                "optionCode": "218",
                "optionKey": "218",
                "optionName": "BANDA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BANDA",
                "sortIndex": 137
            },
            {
                "optionCode": "046",
                "optionKey": "046",
                "optionName": "BANKA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "BANKA",
                "sortIndex": 138
            },
            {
                "optionCode": "115",
                "optionKey": "115",
                "optionName": "BANKURA",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "BANKURA",
                "sortIndex": 139
            },
            {
                "optionCode": "534",
                "optionKey": "534",
                "optionName": "BANSWARA",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BANSWARA",
                "sortIndex": 140
            },
            {
                "optionCode": "442",
                "optionKey": "442",
                "optionName": "BARAMULLA",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "BARAMULLA",
                "sortIndex": 141
            },
            {
                "optionCode": "512",
                "optionKey": "512",
                "optionName": "BARAN",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BARAN",
                "sortIndex": 142
            },
            {
                "optionCode": "250",
                "optionKey": "250",
                "optionName": "BAREILLY",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BAREILLY",
                "sortIndex": 143
            },
            {
                "optionCode": "523",
                "optionKey": "523",
                "optionName": "BARMER",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BARMER",
                "sortIndex": 144
            },
            {
                "optionCode": "021",
                "optionKey": "021",
                "optionName": "BARPETA",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "BARPETA",
                "sortIndex": 145
            },
            {
                "optionCode": "723",
                "optionKey": "723",
                "optionName": "BARWANI",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "BARWANI",
                "sortIndex": 146
            },
            {
                "optionCode": "762",
                "optionKey": "762",
                "optionName": "BASTAR",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "BASTAR",
                "sortIndex": 147
            },
            {
                "optionCode": "242",
                "optionKey": "242",
                "optionName": "BASTI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BASTI",
                "sortIndex": 148
            },
            {
                "optionCode": "077",
                "optionKey": "077",
                "optionName": "BEGUSARAI",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "BEGUSARAI",
                "sortIndex": 149
            },
            {
                "optionCode": "870",
                "optionKey": "870",
                "optionName": "BELGAUM",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "BELGAUM",
                "sortIndex": 150
            },
            {
                "optionCode": "858",
                "optionKey": "858",
                "optionName": "BELLARY",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "BELLARY",
                "sortIndex": 151
            },
            {
                "optionCode": "717",
                "optionKey": "717",
                "optionName": "BETUL",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "BETUL",
                "sortIndex": 152
            },
            {
                "optionCode": "171",
                "optionKey": "171",
                "optionName": "BHADRAK",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "BHADRAK",
                "sortIndex": 153
            },
            {
                "optionCode": "080",
                "optionKey": "080",
                "optionName": "BHAGALPUR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "BHAGALPUR",
                "sortIndex": 154
            },
            {
                "optionCode": "638",
                "optionKey": "638",
                "optionName": "BHANDARA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "BHANDARA",
                "sortIndex": 155
            },
            {
                "optionCode": "504",
                "optionKey": "504",
                "optionName": "BHARATPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BHARATPUR",
                "sortIndex": 156
            },
            {
                "optionCode": "553",
                "optionKey": "553",
                "optionName": "BHARUCH",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "BHARUCH",
                "sortIndex": 157
            },
            {
                "optionCode": "572",
                "optionKey": "572",
                "optionName": "BHAVNAGAR",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "BHAVNAGAR",
                "sortIndex": 158
            },
            {
                "optionCode": "508",
                "optionKey": "508",
                "optionName": "BHILWARA",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BHILWARA",
                "sortIndex": 159
            },
            {
                "optionCode": "739",
                "optionKey": "739",
                "optionName": "BHIND",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "BHIND",
                "sortIndex": 160
            },
            {
                "optionCode": "359",
                "optionKey": "359",
                "optionName": "BHIWANI",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "BHIWANI",
                "sortIndex": 161
            },
            {
                "optionCode": "052",
                "optionKey": "052",
                "optionName": "BHOJPUR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "BHOJPUR",
                "sortIndex": 162
            },
            {
                "optionCode": "764",
                "optionKey": "764",
                "optionName": "BHOPAL",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "BHOPAL",
                "sortIndex": 163
            },
            {
                "optionCode": "866",
                "optionKey": "866",
                "optionName": "BIDAR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "BIDAR",
                "sortIndex": 164
            },
            {
                "optionCode": "868",
                "optionKey": "868",
                "optionName": "BIJAPUR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "BIJAPUR",
                "sortIndex": 165
            },
            {
                "optionCode": "520",
                "optionKey": "520",
                "optionName": "BIKANER",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BIKANER",
                "sortIndex": 166
            },
            {
                "optionCode": "754",
                "optionKey": "754",
                "optionName": "BILASPUR",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "BILASPUR",
                "sortIndex": 167
            },
            {
                "optionCode": "122",
                "optionKey": "122",
                "optionName": "BIRBHUM",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "BIRBHUM",
                "sortIndex": 168
            },
            {
                "optionCode": "035",
                "optionKey": "035",
                "optionName": "BOKARO",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "BOKARO",
                "sortIndex": 169
            },
            {
                "optionCode": "268",
                "optionKey": "268",
                "optionName": "BULANDSHAHR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BULANDSHAHR",
                "sortIndex": 170
            },
            {
                "optionCode": "648",
                "optionKey": "648",
                "optionName": "BULDHANA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "BULDHANA",
                "sortIndex": 171
            },
            {
                "optionCode": "536",
                "optionKey": "536",
                "optionName": "BUNDI",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "BUNDI",
                "sortIndex": 172
            },
            {
                "optionCode": "045",
                "optionKey": "045",
                "optionName": "BUXAR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "BUXAR",
                "sortIndex": 173
            },
            {
                "optionCode": "195",
                "optionKey": "195",
                "optionName": "CAR NICOBAR",
                "optionParentCode": "AN",
                "optionParentProperty": "STATE",
                "optionValue": "CAR NICOBAR",
                "sortIndex": 174
            },
            {
                "optionCode": "358",
                "optionKey": "358",
                "optionName": "CENTRAL DELHI",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "CENTRAL DELHI",
                "sortIndex": 175
            },
            {
                "optionCode": "851",
                "optionKey": "851",
                "optionName": "CHAMARAJANAGAR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "CHAMARAJANAGAR",
                "sortIndex": 176
            },
            {
                "optionCode": "472",
                "optionKey": "472",
                "optionName": "CHAMBA",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "CHAMBA",
                "sortIndex": 177
            },
            {
                "optionCode": "233",
                "optionKey": "233",
                "optionName": "CHAMPAWAT",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "CHAMPAWAT",
                "sortIndex": 178
            },
            {
                "optionCode": "229",
                "optionKey": "229",
                "optionName": "CHANDAULI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "CHANDAULI",
                "sortIndex": 179
            },
            {
                "optionCode": "157",
                "optionKey": "157",
                "optionName": "CHANDEL",
                "optionParentCode": "MN",
                "optionParentProperty": "STATE",
                "optionValue": "CHANDEL",
                "sortIndex": 180
            },
            {
                "optionCode": "390",
                "optionKey": "390",
                "optionName": "CHANDIGARH",
                "optionParentCode": "CH",
                "optionParentProperty": "STATE",
                "optionValue": "CHANDIGARH",
                "sortIndex": 181
            },
            {
                "optionCode": "636",
                "optionKey": "636",
                "optionName": "CHANDRAPUR",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "CHANDRAPUR",
                "sortIndex": 182
            },
            {
                "optionCode": "900",
                "optionKey": "900",
                "optionName": "CHENNAI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "CHENNAI",
                "sortIndex": 183
            },
            {
                "optionCode": "744",
                "optionKey": "744",
                "optionName": "CHHATARPUR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "CHHATARPUR",
                "sortIndex": 184
            },
            {
                "optionCode": "715",
                "optionKey": "715",
                "optionName": "CHHINDWARA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "CHHINDWARA",
                "sortIndex": 185
            },
            {
                "optionCode": "856",
                "optionKey": "856",
                "optionName": "CHITRADURGA",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "CHITRADURGA",
                "sortIndex": 186
            },
            {
                "optionCode": "826",
                "optionKey": "826",
                "optionName": "CHITTOOR",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "CHITTOOR",
                "sortIndex": 187
            },
            {
                "optionCode": "516",
                "optionKey": "516",
                "optionName": "CHURU",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "CHURU",
                "sortIndex": 188
            },
            {
                "optionCode": "920",
                "optionKey": "920",
                "optionName": "COIMBATORE",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "COIMBATORE",
                "sortIndex": 189
            },
            {
                "optionCode": "906",
                "optionKey": "906",
                "optionName": "CUDDALORE",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "CUDDALORE",
                "sortIndex": 190
            },
            {
                "optionCode": "170",
                "optionKey": "170",
                "optionName": "CUTTACK",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "CUTTACK",
                "sortIndex": 191
            },
            {
                "optionCode": "694",
                "optionKey": "694",
                "optionName": "DAMAN",
                "optionParentCode": "DD",
                "optionParentProperty": "STATE",
                "optionValue": "DAMAN",
                "sortIndex": 192
            },
            {
                "optionCode": "708",
                "optionKey": "708",
                "optionName": "DAMOH",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "DAMOH",
                "sortIndex": 193
            },
            {
                "optionCode": "074",
                "optionKey": "074",
                "optionName": "DARBHANGA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "DARBHANGA",
                "sortIndex": 194
            },
            {
                "optionCode": "509",
                "optionKey": "509",
                "optionName": "DAUSA",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "DAUSA",
                "sortIndex": 195
            },
            {
                "optionCode": "040",
                "optionKey": "040",
                "optionName": "DEOGHAR",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "DEOGHAR",
                "sortIndex": 196
            },
            {
                "optionCode": "236",
                "optionKey": "236",
                "optionName": "DEORIA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "DEORIA",
                "sortIndex": 197
            },
            {
                "optionCode": "719",
                "optionKey": "719",
                "optionName": "DEWAS",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "DEWAS",
                "sortIndex": 198
            },
            {
                "optionCode": "082",
                "optionKey": "082",
                "optionName": "DHANBAD",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "DHANBAD",
                "sortIndex": 199
            },
            {
                "optionCode": "724",
                "optionKey": "724",
                "optionName": "DHAR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "DHAR",
                "sortIndex": 200
            },
            {
                "optionCode": "916",
                "optionKey": "916",
                "optionName": "DHARMAPURI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "DHARMAPURI",
                "sortIndex": 201
            },
            {
                "optionCode": "178",
                "optionKey": "178",
                "optionName": "DHENKANAL",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "DHENKANAL",
                "sortIndex": 202
            },
            {
                "optionCode": "019",
                "optionKey": "019",
                "optionName": "DHUBRI",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "DHUBRI",
                "sortIndex": 203
            },
            {
                "optionCode": "654",
                "optionKey": "654",
                "optionName": "DHULE",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "DHULE",
                "sortIndex": 204
            },
            {
                "optionCode": "097",
                "optionKey": "097",
                "optionName": "DIBANG VALLEY",
                "optionParentCode": "AR",
                "optionParentProperty": "STATE",
                "optionValue": "DIBANG VALLEY",
                "sortIndex": 205
            },
            {
                "optionCode": "009",
                "optionKey": "009",
                "optionName": "DIBRUGARH",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "DIBRUGARH",
                "sortIndex": 206
            },
            {
                "optionCode": "939",
                "optionKey": "939",
                "optionName": "DINDIGUL",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "DINDIGUL",
                "sortIndex": 207
            },
            {
                "optionCode": "711",
                "optionKey": "711",
                "optionName": "DINDORI",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "DINDORI",
                "sortIndex": 208
            },
            {
                "optionCode": "456",
                "optionKey": "456",
                "optionName": "DODA",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "DODA",
                "sortIndex": 209
            },
            {
                "optionCode": "041",
                "optionKey": "041",
                "optionName": "DUMKA",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "DUMKA",
                "sortIndex": 210
            },
            {
                "optionCode": "533",
                "optionKey": "533",
                "optionName": "DUNGARPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "DUNGARPUR",
                "sortIndex": 211
            },
            {
                "optionCode": "750",
                "optionKey": "750",
                "optionName": "DURG",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "DURG",
                "sortIndex": 212
            },
            {
                "optionCode": "367",
                "optionKey": "367",
                "optionName": "EAST DELHI",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "EAST DELHI",
                "sortIndex": 213
            },
            {
                "optionCode": "023",
                "optionKey": "023",
                "optionName": "EAST GARO HILLS",
                "optionParentCode": "ML",
                "optionParentProperty": "STATE",
                "optionValue": "EAST GARO HILLS",
                "sortIndex": 214
            },
            {
                "optionCode": "810",
                "optionKey": "810",
                "optionName": "EAST GODAVARI",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "EAST GODAVARI",
                "sortIndex": 215
            },
            {
                "optionCode": "026",
                "optionKey": "026",
                "optionName": "EAST KHASI HILLS",
                "optionParentCode": "ML",
                "optionParentProperty": "STATE",
                "optionValue": "EAST KHASI HILLS",
                "sortIndex": 216
            },
            {
                "optionCode": "718",
                "optionKey": "718",
                "optionName": "EAST NIMAR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "EAST NIMAR",
                "sortIndex": 217
            },
            {
                "optionCode": "196",
                "optionKey": "196",
                "optionName": "EAST SIKKIM",
                "optionParentCode": "SK",
                "optionParentProperty": "STATE",
                "optionValue": "EAST SIKKIM",
                "sortIndex": 218
            },
            {
                "optionCode": "970",
                "optionKey": "970",
                "optionName": "ERNAKULAM",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "ERNAKULAM",
                "sortIndex": 219
            },
            {
                "optionCode": "924",
                "optionKey": "924",
                "optionName": "ERODE",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "ERODE",
                "sortIndex": 220
            },
            {
                "optionCode": "266",
                "optionKey": "266",
                "optionName": "ETAH",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "ETAH",
                "sortIndex": 221
            },
            {
                "optionCode": "224",
                "optionKey": "224",
                "optionName": "FAIZABAD",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "FAIZABAD",
                "sortIndex": 222
            },
            {
                "optionCode": "361",
                "optionKey": "361",
                "optionName": "FARIDABAD",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "FARIDABAD",
                "sortIndex": 223
            },
            {
                "optionCode": "336",
                "optionKey": "336",
                "optionName": "FARIDKOT",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "FARIDKOT",
                "sortIndex": 224
            },
            {
                "optionCode": "318",
                "optionKey": "318",
                "optionName": "FATEHGARH SAHIB",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "FATEHGARH SAHIB",
                "sortIndex": 225
            },
            {
                "optionCode": "208",
                "optionKey": "208",
                "optionName": "FATEHPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "FATEHPUR",
                "sortIndex": 226
            },
            {
                "optionCode": "859",
                "optionKey": "859",
                "optionName": "GADAG",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "GADAG",
                "sortIndex": 227
            },
            {
                "optionCode": "660",
                "optionKey": "660",
                "optionName": "GADCHIROLI",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "GADCHIROLI",
                "sortIndex": 228
            },
            {
                "optionCode": "518",
                "optionKey": "518",
                "optionName": "GANGANAGAR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "GANGANAGAR",
                "sortIndex": 229
            },
            {
                "optionCode": "162",
                "optionKey": "162",
                "optionName": "GANJAM",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "GANJAM",
                "sortIndex": 230
            },
            {
                "optionCode": "271",
                "optionKey": "271",
                "optionName": "GAUTAM BUDDHA NAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "GAUTAM BUDDHA NAGAR",
                "sortIndex": 231
            },
            {
                "optionCode": "070",
                "optionKey": "070",
                "optionName": "GAYA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "GAYA",
                "sortIndex": 232
            },
            {
                "optionCode": "269",
                "optionKey": "269",
                "optionName": "GHAZIABAD",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "GHAZIABAD",
                "sortIndex": 233
            },
            {
                "optionCode": "234",
                "optionKey": "234",
                "optionName": "GHAZIPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "GHAZIPUR",
                "sortIndex": 234
            },
            {
                "optionCode": "056",
                "optionKey": "056",
                "optionName": "GIRIDIH",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "GIRIDIH",
                "sortIndex": 235
            },
            {
                "optionCode": "003",
                "optionKey": "003",
                "optionName": "GOALPARA",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "GOALPARA",
                "sortIndex": 236
            },
            {
                "optionCode": "013",
                "optionKey": "013",
                "optionName": "GOLAGHAT",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "GOLAGHAT",
                "sortIndex": 237
            },
            {
                "optionCode": "243",
                "optionKey": "243",
                "optionName": "GONDA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "GONDA",
                "sortIndex": 238
            },
            {
                "optionCode": "639",
                "optionKey": "639",
                "optionName": "GONDIA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "GONDIA",
                "sortIndex": 239
            },
            {
                "optionCode": "063",
                "optionKey": "063",
                "optionName": "GOPALGANJ",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "GOPALGANJ",
                "sortIndex": 240
            },
            {
                "optionCode": "240",
                "optionKey": "240",
                "optionName": "GORAKHPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "GORAKHPUR",
                "sortIndex": 241
            },
            {
                "optionCode": "864",
                "optionKey": "864",
                "optionName": "GULBARGA",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "GULBARGA",
                "sortIndex": 242
            },
            {
                "optionCode": "043",
                "optionKey": "043",
                "optionName": "GUMLA",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "GUMLA",
                "sortIndex": 243
            },
            {
                "optionCode": "736",
                "optionKey": "736",
                "optionName": "GUNA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "GUNA",
                "sortIndex": 244
            },
            {
                "optionCode": "822",
                "optionKey": "822",
                "optionName": "GUNTUR",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "GUNTUR",
                "sortIndex": 245
            },
            {
                "optionCode": "312",
                "optionKey": "312",
                "optionName": "GURDASPUR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "GURDASPUR",
                "sortIndex": 246
            },
            {
                "optionCode": "348",
                "optionKey": "348",
                "optionName": "GURGAON",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "GURGAON",
                "sortIndex": 247
            },
            {
                "optionCode": "740",
                "optionKey": "740",
                "optionName": "GWALIOR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "GWALIOR",
                "sortIndex": 248
            },
            {
                "optionCode": "482",
                "optionKey": "482",
                "optionName": "HAMIRPUR",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "HAMIRPUR",
                "sortIndex": 249
            },
            {
                "optionCode": "517",
                "optionKey": "517",
                "optionName": "HANUMANGARH",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "HANUMANGARH",
                "sortIndex": 250
            },
            {
                "optionCode": "706",
                "optionKey": "706",
                "optionName": "HARDA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "HARDA",
                "sortIndex": 251
            },
            {
                "optionCode": "206",
                "optionKey": "206",
                "optionName": "HARDOI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "HARDOI",
                "sortIndex": 252
            },
            {
                "optionCode": "846",
                "optionKey": "846",
                "optionName": "HASSAN",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "HASSAN",
                "sortIndex": 253
            },
            {
                "optionCode": "263",
                "optionKey": "263",
                "optionName": "HATHRAS",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "HATHRAS",
                "sortIndex": 254
            },
            {
                "optionCode": "861",
                "optionKey": "861",
                "optionName": "HAVERI",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "HAVERI",
                "sortIndex": 255
            },
            {
                "optionCode": "627",
                "optionKey": "627",
                "optionName": "HINGOLI",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "HINGOLI",
                "sortIndex": 256
            },
            {
                "optionCode": "716",
                "optionKey": "716",
                "optionName": "HOSHANGABAD",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "HOSHANGABAD",
                "sortIndex": 257
            },
            {
                "optionCode": "332",
                "optionKey": "332",
                "optionName": "HOSHIARPUR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "HOSHIARPUR",
                "sortIndex": 258
            },
            {
                "optionCode": "800",
                "optionKey": "800",
                "optionName": "HYDERABAD",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "HYDERABAD",
                "sortIndex": 259
            },
            {
                "optionCode": "720",
                "optionKey": "720",
                "optionName": "INDORE",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "INDORE",
                "sortIndex": 260
            },
            {
                "optionCode": "710",
                "optionKey": "710",
                "optionName": "JABALPUR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "JABALPUR",
                "sortIndex": 261
            },
            {
                "optionCode": "500",
                "optionKey": "500",
                "optionName": "JAIPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "JAIPUR",
                "sortIndex": 262
            },
            {
                "optionCode": "522",
                "optionKey": "522",
                "optionName": "JAISALMER",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "JAISALMER",
                "sortIndex": 263
            },
            {
                "optionCode": "320",
                "optionKey": "320",
                "optionName": "JALANDHAR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "JALANDHAR",
                "sortIndex": 264
            },
            {
                "optionCode": "212",
                "optionKey": "212",
                "optionName": "JALAUN",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "JALAUN",
                "sortIndex": 265
            },
            {
                "optionCode": "656",
                "optionKey": "656",
                "optionName": "JALGAON",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "JALGAON",
                "sortIndex": 266
            },
            {
                "optionCode": "134",
                "optionKey": "134",
                "optionName": "JALPAIGURI",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "JALPAIGURI",
                "sortIndex": 267
            },
            {
                "optionCode": "450",
                "optionKey": "450",
                "optionName": "JAMMU",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "JAMMU",
                "sortIndex": 268
            },
            {
                "optionCode": "582",
                "optionKey": "582",
                "optionName": "JAMNAGAR",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "JAMNAGAR",
                "sortIndex": 269
            },
            {
                "optionCode": "047",
                "optionKey": "047",
                "optionName": "JAMUI",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "JAMUI",
                "sortIndex": 270
            },
            {
                "optionCode": "228",
                "optionKey": "228",
                "optionName": "JAUNPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "JAUNPUR",
                "sortIndex": 271
            },
            {
                "optionCode": "726",
                "optionKey": "726",
                "optionName": "JHABUA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "JHABUA",
                "sortIndex": 272
            },
            {
                "optionCode": "349",
                "optionKey": "349",
                "optionName": "JHAJJAR",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "JHAJJAR",
                "sortIndex": 273
            },
            {
                "optionCode": "539",
                "optionKey": "539",
                "optionName": "JHALAWAR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "JHALAWAR",
                "sortIndex": 274
            },
            {
                "optionCode": "214",
                "optionKey": "214",
                "optionName": "JHANSI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "JHANSI",
                "sortIndex": 275
            },
            {
                "optionCode": "189",
                "optionKey": "189",
                "optionName": "JHARSUGUDA",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "JHARSUGUDA",
                "sortIndex": 276
            },
            {
                "optionCode": "515",
                "optionKey": "515",
                "optionName": "JHUNJHUNU",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "JHUNJHUNU",
                "sortIndex": 277
            },
            {
                "optionCode": "353",
                "optionKey": "353",
                "optionName": "JIND",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "JIND",
                "sortIndex": 278
            },
            {
                "optionCode": "530",
                "optionKey": "530",
                "optionName": "JODHPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "JODHPUR",
                "sortIndex": 279
            },
            {
                "optionCode": "011",
                "optionKey": "011",
                "optionName": "JORHAT",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "JORHAT",
                "sortIndex": 280
            },
            {
                "optionCode": "576",
                "optionKey": "576",
                "optionName": "JUNAGADH",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "JUNAGADH",
                "sortIndex": 281
            },
            {
                "optionCode": "354",
                "optionKey": "354",
                "optionName": "KAITHAL",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "KAITHAL",
                "sortIndex": 282
            },
            {
                "optionCode": "001",
                "optionKey": "001",
                "optionName": "KAMRUP",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "KAMRUP",
                "sortIndex": 283
            },
            {
                "optionCode": "903",
                "optionKey": "903",
                "optionName": "KANCHEEPURAM",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "KANCHEEPURAM",
                "sortIndex": 284
            },
            {
                "optionCode": "470",
                "optionKey": "470",
                "optionName": "KANGRA",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "KANGRA",
                "sortIndex": 285
            },
            {
                "optionCode": "985",
                "optionKey": "985",
                "optionName": "KANNUR",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "KANNUR",
                "sortIndex": 286
            },
            {
                "optionCode": "314",
                "optionKey": "314",
                "optionName": "KAPURTHALA",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "KAPURTHALA",
                "sortIndex": 287
            },
            {
                "optionCode": "992",
                "optionKey": "992",
                "optionName": "KARAIKAL",
                "optionParentCode": "PY",
                "optionParentProperty": "STATE",
                "optionValue": "KARAIKAL",
                "sortIndex": 288
            },
            {
                "optionCode": "519",
                "optionKey": "519",
                "optionName": "KARAULI",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "KARAULI",
                "sortIndex": 289
            },
            {
                "optionCode": "016",
                "optionKey": "016",
                "optionName": "KARBI ANGLONG",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "KARBI ANGLONG",
                "sortIndex": 290
            },
            {
                "optionCode": "438",
                "optionKey": "438",
                "optionName": "KARGIL",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "KARGIL",
                "sortIndex": 291
            },
            {
                "optionCode": "017",
                "optionKey": "017",
                "optionName": "KARIMGANJ",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "KARIMGANJ",
                "sortIndex": 292
            },
            {
                "optionCode": "807",
                "optionKey": "807",
                "optionName": "KARIMNAGAR",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "KARIMNAGAR",
                "sortIndex": 293
            },
            {
                "optionCode": "342",
                "optionKey": "342",
                "optionName": "KARNAL",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "KARNAL",
                "sortIndex": 294
            },
            {
                "optionCode": "912",
                "optionKey": "912",
                "optionName": "KARUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "KARUR",
                "sortIndex": 295
            },
            {
                "optionCode": "071",
                "optionKey": "071",
                "optionName": "KATIHAR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "KATIHAR",
                "sortIndex": 296
            },
            {
                "optionCode": "709",
                "optionKey": "709",
                "optionName": "KATNI",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "KATNI",
                "sortIndex": 297
            },
            {
                "optionCode": "221",
                "optionKey": "221",
                "optionName": "KAUSHAMBI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "KAUSHAMBI",
                "sortIndex": 298
            },
            {
                "optionCode": "809",
                "optionKey": "809",
                "optionName": "KHAMMAM",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "KHAMMAM",
                "sortIndex": 299
            },
            {
                "optionCode": "566",
                "optionKey": "566",
                "optionName": "KHEDA",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "KHEDA",
                "sortIndex": 300
            },
            {
                "optionCode": "247",
                "optionKey": "247",
                "optionName": "KHERI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "KHERI",
                "sortIndex": 301
            },
            {
                "optionCode": "140",
                "optionKey": "140",
                "optionName": "KOHIMA",
                "optionParentCode": "NL",
                "optionParentProperty": "STATE",
                "optionValue": "KOHIMA",
                "sortIndex": 302
            },
            {
                "optionCode": "020",
                "optionKey": "020",
                "optionName": "KOKRAJHAR",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "KOKRAJHAR",
                "sortIndex": 303
            },
            {
                "optionCode": "852",
                "optionKey": "852",
                "optionName": "KOLAR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "KOLAR",
                "sortIndex": 304
            },
            {
                "optionCode": "608",
                "optionKey": "608",
                "optionName": "KOLHAPUR",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "KOLHAPUR",
                "sortIndex": 305
            },
            {
                "optionCode": "963",
                "optionKey": "963",
                "optionName": "KOLLAM",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "KOLLAM",
                "sortIndex": 306
            },
            {
                "optionCode": "863",
                "optionKey": "863",
                "optionName": "KOPPAL",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "KOPPAL",
                "sortIndex": 307
            },
            {
                "optionCode": "166",
                "optionKey": "166",
                "optionName": "KORAPUT",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "KORAPUT",
                "sortIndex": 308
            },
            {
                "optionCode": "537",
                "optionKey": "537",
                "optionName": "KOTA",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "KOTA",
                "sortIndex": 309
            },
            {
                "optionCode": "968",
                "optionKey": "968",
                "optionName": "KOTTAYAM",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "KOTTAYAM",
                "sortIndex": 310
            },
            {
                "optionCode": "980",
                "optionKey": "980",
                "optionName": "KOZHIKODE",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "KOZHIKODE",
                "sortIndex": 311
            },
            {
                "optionCode": "820",
                "optionKey": "820",
                "optionName": "KRISHNA",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "KRISHNA",
                "sortIndex": 312
            },
            {
                "optionCode": "830",
                "optionKey": "830",
                "optionName": "KURNOOL",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "KURNOOL",
                "sortIndex": 313
            },
            {
                "optionCode": "355",
                "optionKey": "355",
                "optionName": "KURUKSHETRA",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "KURUKSHETRA",
                "sortIndex": 314
            },
            {
                "optionCode": "010",
                "optionKey": "010",
                "optionName": "LAKHIMPUR",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "LAKHIMPUR",
                "sortIndex": 315
            },
            {
                "optionCode": "075",
                "optionKey": "075",
                "optionName": "LAKHISARAI",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "LAKHISARAI",
                "sortIndex": 316
            },
            {
                "optionCode": "662",
                "optionKey": "662",
                "optionName": "LATUR",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "LATUR",
                "sortIndex": 317
            },
            {
                "optionCode": "200",
                "optionKey": "200",
                "optionName": "LUCKNOW",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "LUCKNOW",
                "sortIndex": 318
            },
            {
                "optionCode": "330",
                "optionKey": "330",
                "optionName": "LUDHIANA",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "LUDHIANA",
                "sortIndex": 319
            },
            {
                "optionCode": "068",
                "optionKey": "068",
                "optionName": "MADHEPURA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "MADHEPURA",
                "sortIndex": 320
            },
            {
                "optionCode": "054",
                "optionKey": "054",
                "optionName": "MADHUBANI",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "MADHUBANI",
                "sortIndex": 321
            },
            {
                "optionCode": "930",
                "optionKey": "930",
                "optionName": "MADURAI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "MADURAI",
                "sortIndex": 322
            },
            {
                "optionCode": "834",
                "optionKey": "834",
                "optionName": "MAHBOOBNAGAR",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "MAHBOOBNAGAR",
                "sortIndex": 323
            },
            {
                "optionCode": "994",
                "optionKey": "994",
                "optionName": "MAHE",
                "optionParentCode": "PY",
                "optionParentProperty": "STATE",
                "optionValue": "MAHE",
                "sortIndex": 324
            },
            {
                "optionCode": "542",
                "optionKey": "542",
                "optionName": "MAHESANA",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "MAHESANA",
                "sortIndex": 325
            },
            {
                "optionCode": "258",
                "optionKey": "258",
                "optionName": "MAINPURI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MAINPURI",
                "sortIndex": 326
            },
            {
                "optionCode": "163",
                "optionKey": "163",
                "optionName": "MALKANGIRI",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "MALKANGIRI",
                "sortIndex": 327
            },
            {
                "optionCode": "464",
                "optionKey": "464",
                "optionName": "MANDI",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "MANDI",
                "sortIndex": 328
            },
            {
                "optionCode": "712",
                "optionKey": "712",
                "optionName": "MANDLA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "MANDLA",
                "sortIndex": 329
            },
            {
                "optionCode": "843",
                "optionKey": "843",
                "optionName": "MANDYA",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "MANDYA",
                "sortIndex": 330
            },
            {
                "optionCode": "316",
                "optionKey": "316",
                "optionName": "MANSA",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "MANSA",
                "sortIndex": 331
            },
            {
                "optionCode": "262",
                "optionKey": "262",
                "optionName": "MATHURA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MATHURA",
                "sortIndex": 332
            },
            {
                "optionCode": "802",
                "optionKey": "802",
                "optionName": "MEDAK",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "MEDAK",
                "sortIndex": 333
            },
            {
                "optionCode": "270",
                "optionKey": "270",
                "optionName": "MEERUT",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MEERUT",
                "sortIndex": 334
            },
            {
                "optionCode": "232",
                "optionKey": "232",
                "optionName": "MIRZAPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MIRZAPUR",
                "sortIndex": 335
            },
            {
                "optionCode": "278",
                "optionKey": "278",
                "optionName": "MORADABAD",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MORADABAD",
                "sortIndex": 336
            },
            {
                "optionCode": "738",
                "optionKey": "738",
                "optionName": "MORENA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "MORENA",
                "sortIndex": 337
            },
            {
                "optionCode": "324",
                "optionKey": "324",
                "optionName": "MUKTSAR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "MUKTSAR",
                "sortIndex": 338
            },
            {
                "optionCode": "600",
                "optionKey": "600",
                "optionName": "MUMBAI",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "MUMBAI",
                "sortIndex": 339
            },
            {
                "optionCode": "072",
                "optionKey": "072",
                "optionName": "MUNGER",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "MUNGER",
                "sortIndex": 340
            },
            {
                "optionCode": "126",
                "optionKey": "126",
                "optionName": "MURSHIDABAD",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "MURSHIDABAD",
                "sortIndex": 341
            },
            {
                "optionCode": "272",
                "optionKey": "272",
                "optionName": "MUZAFFARNAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MUZAFFARNAGAR",
                "sortIndex": 342
            },
            {
                "optionCode": "062",
                "optionKey": "062",
                "optionName": "MUZAFFARPUR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "MUZAFFARPUR",
                "sortIndex": 343
            },
            {
                "optionCode": "850",
                "optionKey": "850",
                "optionName": "MYSORE",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "MYSORE",
                "sortIndex": 344
            },
            {
                "optionCode": "397",
                "optionKey": "397",
                "optionName": "NABARANGAPUR",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "NABARANGAPUR",
                "sortIndex": 345
            },
            {
                "optionCode": "511",
                "optionKey": "511",
                "optionName": "NAGAUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "NAGAUR",
                "sortIndex": 346
            },
            {
                "optionCode": "640",
                "optionKey": "640",
                "optionName": "NAGPUR",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "NAGPUR",
                "sortIndex": 347
            },
            {
                "optionCode": "281",
                "optionKey": "281",
                "optionName": "NAINITAL",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "NAINITAL",
                "sortIndex": 348
            },
            {
                "optionCode": "051",
                "optionKey": "051",
                "optionName": "NALANDA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "NALANDA",
                "sortIndex": 349
            },
            {
                "optionCode": "832",
                "optionKey": "832",
                "optionName": "NALGONDA",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "NALGONDA",
                "sortIndex": 350
            },
            {
                "optionCode": "915",
                "optionKey": "915",
                "optionName": "NAMAKKAL",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "NAMAKKAL",
                "sortIndex": 351
            },
            {
                "optionCode": "632",
                "optionKey": "632",
                "optionName": "NANDED",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "NANDED",
                "sortIndex": 352
            },
            {
                "optionCode": "183",
                "optionKey": "183",
                "optionName": "NAYAGARH",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "NAYAGARH",
                "sortIndex": 353
            },
            {
                "optionCode": "729",
                "optionKey": "729",
                "optionName": "NEEMUCH",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "NEEMUCH",
                "sortIndex": 354
            },
            {
                "optionCode": "824",
                "optionKey": "824",
                "optionName": "NELLORE",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "NELLORE",
                "sortIndex": 355
            },
            {
                "optionCode": "290",
                "optionKey": "290",
                "optionName": "NEW DELHI",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "NEW DELHI",
                "sortIndex": 356
            },
            {
                "optionCode": "803",
                "optionKey": "803",
                "optionName": "NIZAMABAD",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "NIZAMABAD",
                "sortIndex": 357
            },
            {
                "optionCode": "101",
                "optionKey": "101",
                "optionName": "NORTH 24 PARGANAS",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "NORTH 24 PARGANAS",
                "sortIndex": 358
            },
            {
                "optionCode": "360",
                "optionKey": "360",
                "optionName": "NORTH DELHI",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "NORTH DELHI",
                "sortIndex": 359
            },
            {
                "optionCode": "690",
                "optionKey": "690",
                "optionName": "NORTH GOA",
                "optionParentCode": "GA",
                "optionParentProperty": "STATE",
                "optionValue": "NORTH GOA",
                "sortIndex": 360
            },
            {
                "optionCode": "630",
                "optionKey": "630",
                "optionName": "OSMANABAD",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "OSMANABAD",
                "sortIndex": 361
            },
            {
                "optionCode": "974",
                "optionKey": "974",
                "optionName": "PALAKKAD",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "PALAKKAD",
                "sortIndex": 362
            },
            {
                "optionCode": "528",
                "optionKey": "528",
                "optionName": "PALI",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "PALI",
                "sortIndex": 363
            },
            {
                "optionCode": "343",
                "optionKey": "343",
                "optionName": "PANIPAT",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "PANIPAT",
                "sortIndex": 364
            },
            {
                "optionCode": "745",
                "optionKey": "745",
                "optionName": "PANNA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "PANNA",
                "sortIndex": 365
            },
            {
                "optionCode": "626",
                "optionKey": "626",
                "optionName": "PARBHANI",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "PARBHANI",
                "sortIndex": 366
            },
            {
                "optionCode": "088",
                "optionKey": "088",
                "optionName": "PASCHIMI SINGHBHUM",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "PASCHIMI SINGHBHUM",
                "sortIndex": 367
            },
            {
                "optionCode": "543",
                "optionKey": "543",
                "optionName": "PATAN",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "PATAN",
                "sortIndex": 368
            },
            {
                "optionCode": "978",
                "optionKey": "978",
                "optionName": "PATHANAMTHITTA",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "PATHANAMTHITTA",
                "sortIndex": 369
            },
            {
                "optionCode": "300",
                "optionKey": "300",
                "optionName": "PATIALA",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "PATIALA",
                "sortIndex": 370
            },
            {
                "optionCode": "060",
                "optionKey": "060",
                "optionName": "PATNA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "PATNA",
                "sortIndex": 371
            },
            {
                "optionCode": "249",
                "optionKey": "249",
                "optionName": "PILIBHIT",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "PILIBHIT",
                "sortIndex": 372
            },
            {
                "optionCode": "283",
                "optionKey": "283",
                "optionName": "PITHORAGARH",
                "optionParentCode": "UA",
                "optionParentProperty": "STATE",
                "optionValue": "PITHORAGARH",
                "sortIndex": 373
            },
            {
                "optionCode": "446",
                "optionKey": "446",
                "optionName": "POONCH",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "POONCH",
                "sortIndex": 374
            },
            {
                "optionCode": "573",
                "optionKey": "573",
                "optionName": "PORBANDAR",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "PORBANDAR",
                "sortIndex": 375
            },
            {
                "optionCode": "825",
                "optionKey": "825",
                "optionName": "PRAKASAM",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "PRAKASAM",
                "sortIndex": 376
            },
            {
                "optionCode": "222",
                "optionKey": "222",
                "optionName": "PRATAPGARH",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "PRATAPGARH",
                "sortIndex": 377
            },
            {
                "optionCode": "620",
                "optionKey": "620",
                "optionName": "PUNE",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "PUNE",
                "sortIndex": 378
            },
            {
                "optionCode": "160",
                "optionKey": "160",
                "optionName": "PURI",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "PURI",
                "sortIndex": 379
            },
            {
                "optionCode": "078",
                "optionKey": "078",
                "optionName": "PURNIA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "PURNIA",
                "sortIndex": 380
            },
            {
                "optionCode": "862",
                "optionKey": "862",
                "optionName": "RAICHUR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "RAICHUR",
                "sortIndex": 381
            },
            {
                "optionCode": "758",
                "optionKey": "758",
                "optionName": "RAIGARH",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "RAIGARH",
                "sortIndex": 382
            },
            {
                "optionCode": "760",
                "optionKey": "760",
                "optionName": "RAIPUR",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "RAIPUR",
                "sortIndex": 383
            },
            {
                "optionCode": "702",
                "optionKey": "702",
                "optionName": "RAISEN",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "RAISEN",
                "sortIndex": 384
            },
            {
                "optionCode": "580",
                "optionKey": "580",
                "optionName": "RAJKOT",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "RAJKOT",
                "sortIndex": 385
            },
            {
                "optionCode": "766",
                "optionKey": "766",
                "optionName": "RAJNANDGAON",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "RAJNANDGAON",
                "sortIndex": 386
            },
            {
                "optionCode": "514",
                "optionKey": "514",
                "optionName": "RAJSAMAND",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "RAJSAMAND",
                "sortIndex": 387
            },
            {
                "optionCode": "932",
                "optionKey": "932",
                "optionName": "RAMANATHAPURAM",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "RAMANATHAPURAM",
                "sortIndex": 388
            },
            {
                "optionCode": "280",
                "optionKey": "280",
                "optionName": "RAMPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "RAMPUR",
                "sortIndex": 389
            },
            {
                "optionCode": "087",
                "optionKey": "087",
                "optionName": "RANCHI",
                "optionParentCode": "JH",
                "optionParentProperty": null,
                "optionValue": "RANCHI",
                "sortIndex": 390
            },
            {
                "optionCode": "727",
                "optionKey": "727",
                "optionName": "RATLAM",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "RATLAM",
                "sortIndex": 391
            },
            {
                "optionCode": "605",
                "optionKey": "605",
                "optionName": "RATNAGIRI",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "RATNAGIRI",
                "sortIndex": 392
            },
            {
                "optionCode": "167",
                "optionKey": "167",
                "optionName": "RAYAGADA",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "RAYAGADA",
                "sortIndex": 393
            },
            {
                "optionCode": "747",
                "optionKey": "747",
                "optionName": "REWA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "REWA",
                "sortIndex": 394
            },
            {
                "optionCode": "344",
                "optionKey": "344",
                "optionName": "ROHTAK",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "ROHTAK",
                "sortIndex": 395
            },
            {
                "optionCode": "334",
                "optionKey": "334",
                "optionName": "RUPNAGAR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "RUPNAGAR",
                "sortIndex": 396
            },
            {
                "optionCode": "705",
                "optionKey": "705",
                "optionName": "SAGAR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SAGAR",
                "sortIndex": 397
            },
            {
                "optionCode": "274",
                "optionKey": "274",
                "optionName": "SAHARANPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SAHARANPUR",
                "sortIndex": 398
            },
            {
                "optionCode": "076",
                "optionKey": "076",
                "optionName": "SAHARSA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "SAHARSA",
                "sortIndex": 399
            },
            {
                "optionCode": "039",
                "optionKey": "039",
                "optionName": "SAHEBGANJ",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "SAHEBGANJ",
                "sortIndex": 400
            },
            {
                "optionCode": "913",
                "optionKey": "913",
                "optionName": "SALEM",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "SALEM",
                "sortIndex": 401
            },
            {
                "optionCode": "055",
                "optionKey": "055",
                "optionName": "SAMASTIPUR",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "SAMASTIPUR",
                "sortIndex": 402
            },
            {
                "optionCode": "182",
                "optionKey": "182",
                "optionName": "SAMBALPUR",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "SAMBALPUR",
                "sortIndex": 403
            },
            {
                "optionCode": "612",
                "optionKey": "612",
                "optionName": "SANGLI",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "SANGLI",
                "sortIndex": 404
            },
            {
                "optionCode": "302",
                "optionKey": "302",
                "optionName": "SANGRUR",
                "optionParentCode": "PB",
                "optionParentProperty": "STATE",
                "optionValue": "SANGRUR",
                "sortIndex": 405
            },
            {
                "optionCode": "227",
                "optionKey": "227",
                "optionName": "SANT KABIR NAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SANT KABIR NAGAR",
                "sortIndex": 406
            },
            {
                "optionCode": "066",
                "optionKey": "066",
                "optionName": "SARAN",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "SARAN",
                "sortIndex": 407
            },
            {
                "optionCode": "615",
                "optionKey": "615",
                "optionName": "SATARA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "SATARA",
                "sortIndex": 408
            },
            {
                "optionCode": "746",
                "optionKey": "746",
                "optionName": "SATNA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SATNA",
                "sortIndex": 409
            },
            {
                "optionCode": "700",
                "optionKey": "700",
                "optionName": "SEHORE",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SEHORE",
                "sortIndex": 410
            },
            {
                "optionCode": "713",
                "optionKey": "713",
                "optionName": "SEONI",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SEONI",
                "sortIndex": 411
            },
            {
                "optionCode": "252",
                "optionKey": "252",
                "optionName": "SHAHJAHANPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SHAHJAHANPUR",
                "sortIndex": 412
            },
            {
                "optionCode": "732",
                "optionKey": "732",
                "optionName": "SHAJAPUR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "SHAJAPUR",
                "sortIndex": 413
            },
            {
                "optionCode": "079",
                "optionKey": "079",
                "optionName": "SHEIKHPURA",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "SHEIKHPURA",
                "sortIndex": 414
            },
            {
                "optionCode": "874",
                "optionKey": "874",
                "optionName": "SHIMOGA",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "SHIMOGA",
                "sortIndex": 415
            },
            {
                "optionCode": "012",
                "optionKey": "012",
                "optionName": "SIBSAGAR",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "SIBSAGAR",
                "sortIndex": 416
            },
            {
                "optionCode": "513",
                "optionKey": "513",
                "optionName": "SIKAR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "SIKAR",
                "sortIndex": 417
            },
            {
                "optionCode": "607",
                "optionKey": "607",
                "optionName": "SINDHUDURG",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "SINDHUDURG",
                "sortIndex": 418
            },
            {
                "optionCode": "526",
                "optionKey": "526",
                "optionName": "SIROHI",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "SIROHI",
                "sortIndex": 419
            },
            {
                "optionCode": "352",
                "optionKey": "352",
                "optionName": "SIRSA",
                "optionParentCode": "HR",
                "optionParentProperty": "STATE",
                "optionValue": "SIRSA",
                "sortIndex": 420
            },
            {
                "optionCode": "245",
                "optionKey": "245",
                "optionName": "SITAPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SITAPUR",
                "sortIndex": 421
            },
            {
                "optionCode": "922",
                "optionKey": "922",
                "optionName": "SIVAGANGA",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "SIVAGANGA",
                "sortIndex": 422
            },
            {
                "optionCode": "057",
                "optionKey": "057",
                "optionName": "SIWAN",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "SIWAN",
                "sortIndex": 423
            },
            {
                "optionCode": "486",
                "optionKey": "486",
                "optionName": "SOLAN",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "SOLAN",
                "sortIndex": 424
            },
            {
                "optionCode": "610",
                "optionKey": "610",
                "optionName": "SOLAPUR",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "SOLAPUR",
                "sortIndex": 425
            },
            {
                "optionCode": "288",
                "optionKey": "288",
                "optionName": "SONBHADRA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SONBHADRA",
                "sortIndex": 426
            },
            {
                "optionCode": "006",
                "optionKey": "006",
                "optionName": "SONITPUR",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "SONITPUR",
                "sortIndex": 427
            },
            {
                "optionCode": "103",
                "optionKey": "103",
                "optionName": "SOUTH 24 PARGANAS",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "SOUTH 24 PARGANAS",
                "sortIndex": 428
            },
            {
                "optionCode": "365",
                "optionKey": "365",
                "optionName": "SOUTH DELHI",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "SOUTH DELHI",
                "sortIndex": 429
            },
            {
                "optionCode": "692",
                "optionKey": "692",
                "optionName": "SOUTH GOA",
                "optionParentCode": "GA",
                "optionParentProperty": "STATE",
                "optionValue": "SOUTH GOA",
                "sortIndex": 430
            },
            {
                "optionCode": "192",
                "optionKey": "192",
                "optionName": "SOUTH TRIPURA",
                "optionParentCode": "TR",
                "optionParentProperty": "STATE",
                "optionValue": "SOUTH TRIPURA",
                "sortIndex": 431
            },
            {
                "optionCode": "815",
                "optionKey": "815",
                "optionName": "SRIKAKULAM",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "SRIKAKULAM",
                "sortIndex": 432
            },
            {
                "optionCode": "440",
                "optionKey": "440",
                "optionName": "SRINAGAR",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "SRINAGAR",
                "sortIndex": 433
            },
            {
                "optionCode": "223",
                "optionKey": "223",
                "optionName": "SULTANPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "SULTANPUR",
                "sortIndex": 434
            },
            {
                "optionCode": "560",
                "optionKey": "560",
                "optionName": "SURAT",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "SURAT",
                "sortIndex": 435
            },
            {
                "optionCode": "584",
                "optionKey": "584",
                "optionName": "SURENDRANAGAR",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "SURENDRANAGAR",
                "sortIndex": 436
            },
            {
                "optionCode": "756",
                "optionKey": "756",
                "optionName": "SURGUJA",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "SURGUJA",
                "sortIndex": 437
            },
            {
                "optionCode": "601",
                "optionKey": "601",
                "optionName": "THANE",
                "optionParentCode": "MH",
                "optionParentProperty": null,
                "optionValue": "THANE",
                "sortIndex": 438
            },
            {
                "optionCode": "908",
                "optionKey": "908",
                "optionName": "THANJAVUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "THANJAVUR",
                "sortIndex": 439
            },
            {
                "optionCode": "942",
                "optionKey": "942",
                "optionName": "THENI",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "THENI",
                "sortIndex": 440
            },
            {
                "optionCode": "902",
                "optionKey": "902",
                "optionName": "THIRUVALLUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "THIRUVALLUR",
                "sortIndex": 441
            },
            {
                "optionCode": "907",
                "optionKey": "907",
                "optionName": "THIRUVARUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "THIRUVARUR",
                "sortIndex": 442
            },
            {
                "optionCode": "972",
                "optionKey": "972",
                "optionName": "THRISSUR",
                "optionParentCode": "KL",
                "optionParentProperty": "STATE",
                "optionValue": "THRISSUR",
                "sortIndex": 443
            },
            {
                "optionCode": "507",
                "optionKey": "507",
                "optionName": "TONK",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "TONK",
                "sortIndex": 444
            },
            {
                "optionCode": "854",
                "optionKey": "854",
                "optionName": "TUMKUR",
                "optionParentCode": "KA",
                "optionParentProperty": "STATE",
                "optionValue": "TUMKUR",
                "sortIndex": 445
            },
            {
                "optionCode": "531",
                "optionKey": "531",
                "optionName": "UDAIPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "UDAIPUR",
                "sortIndex": 446
            },
            {
                "optionCode": "454",
                "optionKey": "454",
                "optionName": "UDHAMPUR",
                "optionParentCode": "JK",
                "optionParentProperty": "STATE",
                "optionValue": "UDHAMPUR",
                "sortIndex": 447
            },
            {
                "optionCode": "730",
                "optionKey": "730",
                "optionName": "UJJAIN",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "UJJAIN",
                "sortIndex": 448
            },
            {
                "optionCode": "484",
                "optionKey": "484",
                "optionName": "UNA",
                "optionParentCode": "HP",
                "optionParentProperty": "STATE",
                "optionValue": "UNA",
                "sortIndex": 449
            },
            {
                "optionCode": "205",
                "optionKey": "205",
                "optionName": "UNNAO",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "UNNAO",
                "sortIndex": 450
            },
            {
                "optionCode": "089",
                "optionKey": "089",
                "optionName": "VAISHALI",
                "optionParentCode": "BR",
                "optionParentProperty": "STATE",
                "optionValue": "VAISHALI",
                "sortIndex": 451
            },
            {
                "optionCode": "556",
                "optionKey": "556",
                "optionName": "VALSAD",
                "optionParentCode": "GJ",
                "optionParentProperty": "STATE",
                "optionValue": "VALSAD",
                "sortIndex": 452
            },
            {
                "optionCode": "230",
                "optionKey": "230",
                "optionName": "VARANASI",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "VARANASI",
                "sortIndex": 453
            },
            {
                "optionCode": "904",
                "optionKey": "904",
                "optionName": "VELLORE",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "VELLORE",
                "sortIndex": 454
            },
            {
                "optionCode": "735",
                "optionKey": "735",
                "optionName": "VIDISHA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "VIDISHA",
                "sortIndex": 455
            },
            {
                "optionCode": "926",
                "optionKey": "926",
                "optionName": "VIRUDHUNAGAR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "VIRUDHUNAGAR",
                "sortIndex": 456
            },
            {
                "optionCode": "836",
                "optionKey": "836",
                "optionName": "VIZIANAGARAM",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "VIZIANAGARAM",
                "sortIndex": 457
            },
            {
                "optionCode": "808",
                "optionKey": "808",
                "optionName": "WARANGAL",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "WARANGAL",
                "sortIndex": 458
            },
            {
                "optionCode": "642",
                "optionKey": "642",
                "optionName": "WARDHA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "WARDHA",
                "sortIndex": 459
            },
            {
                "optionCode": "363",
                "optionKey": "363",
                "optionName": "WEST DELHI",
                "optionParentCode": "DL",
                "optionParentProperty": "STATE",
                "optionValue": "WEST DELHI",
                "sortIndex": 460
            },
            {
                "optionCode": "818",
                "optionKey": "818",
                "optionName": "WEST GODAVARI",
                "optionParentCode": "AP",
                "optionParentProperty": "STATE",
                "optionValue": "WEST GODAVARI",
                "sortIndex": 461
            },
            {
                "optionCode": "090",
                "optionKey": "090",
                "optionName": "WEST KAMENG",
                "optionParentCode": "AR",
                "optionParentProperty": "STATE",
                "optionValue": "WEST KAMENG",
                "sortIndex": 462
            },
            {
                "optionCode": "027",
                "optionKey": "027",
                "optionName": "WEST KHASI HILLS",
                "optionParentCode": "ML",
                "optionParentProperty": "STATE",
                "optionValue": "WEST KHASI HILLS",
                "sortIndex": 463
            },
            {
                "optionCode": "722",
                "optionKey": "722",
                "optionName": "WEST NIMAR",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "WEST NIMAR",
                "sortIndex": 464
            },
            {
                "optionCode": "191",
                "optionKey": "191",
                "optionName": "WEST TRIPURA",
                "optionParentCode": "TR",
                "optionParentProperty": "STATE",
                "optionValue": "WEST TRIPURA",
                "sortIndex": 465
            },
            {
                "optionCode": "259",
                "optionKey": "259",
                "optionName": "AURAIYA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "AURAIYA",
                "sortIndex": 466
            },
            {
                "optionCode": "275",
                "optionKey": "275",
                "optionName": "BAGHPAT",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "BAGHPAT",
                "sortIndex": 467
            },
            {
                "optionCode": "173",
                "optionKey": "173",
                "optionName": "BARGARH",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "BARGARH",
                "sortIndex": 468
            },
            {
                "optionCode": "002",
                "optionKey": "002",
                "optionName": "BONGAIGAON",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "BONGAIGAON",
                "sortIndex": 469
            },
            {
                "optionCode": "061",
                "optionKey": "061",
                "optionName": "CHATRA",
                "optionParentCode": "JH",
                "optionParentProperty": "STATE",
                "optionValue": "CHATRA",
                "sortIndex": 470
            },
            {
                "optionCode": "207",
                "optionKey": "207",
                "optionName": "CHITRAKOOT",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "CHITRAKOOT",
                "sortIndex": 471
            },
            {
                "optionCode": "152",
                "optionKey": "152",
                "optionName": "CHURACHANDPUR",
                "optionParentCode": "MN",
                "optionParentProperty": "STATE",
                "optionValue": "CHURACHANDPUR",
                "sortIndex": 472
            },
            {
                "optionCode": "136",
                "optionKey": "136",
                "optionName": "COOCHBEHAR",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "COOCHBEHAR",
                "sortIndex": 473
            },
            {
                "optionCode": "131",
                "optionKey": "131",
                "optionName": "DAKSHIN DINAJPUR",
                "optionParentCode": "WB",
                "optionParentProperty": "STATE",
                "optionValue": "DAKSHIN DINAJPUR",
                "sortIndex": 474
            },
            {
                "optionCode": "763",
                "optionKey": "763",
                "optionName": "DANTEWADA",
                "optionParentCode": "CG",
                "optionParentProperty": "STATE",
                "optionValue": "DANTEWADA",
                "sortIndex": 475
            },
            {
                "optionCode": "188",
                "optionKey": "188",
                "optionName": "DEBAGARH",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "DEBAGARH",
                "sortIndex": 476
            },
            {
                "optionCode": "505",
                "optionKey": "505",
                "optionName": "DHOLPUR",
                "optionParentCode": "RJ",
                "optionParentProperty": "STATE",
                "optionValue": "DHOLPUR",
                "sortIndex": 477
            },
            {
                "optionCode": "141",
                "optionKey": "141",
                "optionName": "DIMAPUR",
                "optionParentCode": "NL",
                "optionParentProperty": "STATE",
                "optionValue": "DIMAPUR",
                "sortIndex": 478
            },
            {
                "optionCode": "254",
                "optionKey": "254",
                "optionName": "FARUKHABAD",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "FARUKHABAD",
                "sortIndex": 479
            },
            {
                "optionCode": "203",
                "optionKey": "203",
                "optionName": "FIROZABAD",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "FIROZABAD",
                "sortIndex": 480
            },
            {
                "optionCode": "025",
                "optionKey": "025",
                "optionName": "JAINTIA HILLS",
                "optionParentCode": "ML",
                "optionParentProperty": "STATE",
                "optionValue": "JAINTIA HILLS",
                "sortIndex": 481
            },
            {
                "optionCode": "625",
                "optionKey": "625",
                "optionName": "JALNA",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "JALNA",
                "sortIndex": 482
            },
            {
                "optionCode": "279",
                "optionKey": "279",
                "optionName": "JYOTIBA PHULE NAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "JYOTIBA PHULE NAGAR",
                "sortIndex": 483
            },
            {
                "optionCode": "279",
                "optionKey": "279",
                "optionName": "JYOTIBA PHULE NAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "JYOTIBA PHULE NAGAR",
                "sortIndex": 484
            },
            {
                "optionCode": "168",
                "optionKey": "168",
                "optionName": "KALAHANDI",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "KALAHANDI",
                "sortIndex": 485
            },
            {
                "optionCode": "164",
                "optionKey": "164",
                "optionName": "KANDHAMAL",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "KANDHAMAL",
                "sortIndex": 486
            },
            {
                "optionCode": "179",
                "optionKey": "179",
                "optionName": "KENDRAPARA",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "KENDRAPARA",
                "sortIndex": 487
            },
            {
                "optionCode": "237",
                "optionKey": "237",
                "optionName": "KUSHINAGAR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "KUSHINAGAR",
                "sortIndex": 488
            },
            {
                "optionCode": "213",
                "optionKey": "213",
                "optionName": "LALITPUR",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "LALITPUR",
                "sortIndex": 489
            },
            {
                "optionCode": "092",
                "optionKey": "092",
                "optionName": "LOHIT",
                "optionParentCode": "AR",
                "optionParentProperty": "STATE",
                "optionValue": "LOHIT",
                "sortIndex": 490
            },
            {
                "optionCode": "217",
                "optionKey": "217",
                "optionName": "MAHOBA",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MAHOBA",
                "sortIndex": 491
            },
            {
                "optionCode": "225",
                "optionKey": "225",
                "optionName": "MAHRAJGANJ",
                "optionParentCode": "UP",
                "optionParentProperty": "STATE",
                "optionValue": "MAHRAJGANJ",
                "sortIndex": 492
            },
            {
                "optionCode": "174",
                "optionKey": "174",
                "optionName": "MAYURBHANJ",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "MAYURBHANJ",
                "sortIndex": 493
            },
            {
                "optionCode": "014",
                "optionKey": "014",
                "optionName": "NAGAON",
                "optionParentCode": "AS",
                "optionParentProperty": "STATE",
                "optionValue": "NAGAON",
                "sortIndex": 494
            },
            {
                "optionCode": "909",
                "optionKey": "909",
                "optionName": "NAGAPATTINAM",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "NAGAPATTINAM",
                "sortIndex": 495
            },
            {
                "optionCode": "914",
                "optionKey": "914",
                "optionName": "PERAMBALUR",
                "optionParentCode": "TN",
                "optionParentProperty": "STATE",
                "optionValue": "PERAMBALUR",
                "sortIndex": 496
            },
            {
                "optionCode": "148",
                "optionKey": "148",
                "optionName": "PHEK",
                "optionParentCode": "NL",
                "optionParentProperty": "STATE",
                "optionValue": "PHEK",
                "sortIndex": 497
            },
            {
                "optionCode": "034",
                "optionKey": "034",
                "optionName": "SAIHA",
                "optionParentCode": "MZ",
                "optionParentProperty": "STATE",
                "optionValue": "SAIHA",
                "sortIndex": 498
            },
            {
                "optionCode": "180",
                "optionKey": "180",
                "optionName": "SUNDARGARH",
                "optionParentCode": "OR",
                "optionParentProperty": "STATE",
                "optionValue": "SUNDARGARH",
                "sortIndex": 499
            },
            {
                "optionCode": "156",
                "optionKey": "156",
                "optionName": "TAMENGLONG",
                "optionParentCode": "MN",
                "optionParentProperty": "STATE",
                "optionValue": "TAMENGLONG",
                "sortIndex": 500
            },
            {
                "optionCode": "703",
                "optionKey": "703",
                "optionName": "UMARIA",
                "optionParentCode": "MP",
                "optionParentProperty": "STATE",
                "optionValue": "UMARIA",
                "sortIndex": 501
            },
            {
                "optionCode": "647",
                "optionKey": "647",
                "optionName": "WASHIM",
                "optionParentCode": "MH",
                "optionParentProperty": "STATE",
                "optionValue": "WASHIM",
                "sortIndex": 502
            },
            {
                "optionCode": "024",
                "optionKey": "024",
                "optionName": "WEST GARO HILLS",
                "optionParentCode": "ML",
                "optionParentProperty": "STATE",
                "optionValue": "WEST GARO HILLS",
                "sortIndex": 503
            },
            {
                "optionCode": "650",
                "optionKey": "650",
                "optionName": "NASHIK",
                "optionParentCode": "MH",
                "optionParentProperty": null,
                "optionValue": "NASHIK",
                "sortIndex": 504
            },
            {
                "optionCode": "622",
                "optionKey": "622",
                "optionName": "AHMEDNAGAR",
                "optionParentCode": "MH",
                "optionParentProperty": null,
                "optionValue": "AHMEDNAGAR",
                "sortIndex": 505
            },
            {
                "optionCode": "NA",
                "optionKey": "NA",
                "optionName": "NA",
                "optionParentCode": null,
                "optionParentProperty": null,
                "optionValue": "NA",
                "sortIndex": 506
            }
        ],
        "YESNO": [{
            "optionKey": "YES",
            "optionName": "Yes",
            "optionValue": "YES"
        },
        {
            "optionKey": "NO",
            "optionName": "No",
            "optionValue": "NO"
        }],
        "YESNO_DROPDOWN": [{
            "optionKey": "Yes",
            "optionName": "YES",
            "optionValue": "YES"
        },
        {
            "optionKey": "NO",
            "optionName": "No",
            "optionValue": "NO"
        }],
        "GENDER": [{
            "optionCode": "MALE",
            "optionKey": "Male",
            "optionName": "Male",
            "icon": "male",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Male",
            "sortIndex": 0
        }, {
            "optionCode": "FEMALE",
            "optionKey": "Female",
            "optionName": "Female",
            "icon": "female",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Female",
            "sortIndex": 0
        }, {
            "optionCode": "TRANSGENDER",
            "optionKey": "Transgender",
            "optionName": "Transgender",
            "icon": "trans",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Transgender",
            "sortIndex": 0
        }],
        "RATING": [{
            "optionCode": "DISAPPONTED",
            "optionKey": "1",
            "optionName": "Disappointed",
            "icon": "Disappointed",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Disappointed",
            "sortIndex": 0
        }, {
            "optionCode": "POOR",
            "optionKey": "2",
            "optionName": "Poor",
            "icon": "Poor",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Poor",
            "sortIndex": 0
        }, {
            "optionCode": "AVERAGE",
            "optionKey": "3",
            "optionName": "Average",
            "icon": "Average",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Average",
            "sortIndex": 0
        }, {
            "optionCode": "GOOD",
            "optionKey": "4",
            "optionName": "Good",
            "icon": "Good",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Good",
            "sortIndex": 0
        }, {
            "optionCode": "AWESOME",
            "optionKey": "5",
            "optionName": "Awesome",
            "icon": "Awesome",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Awesome",
            "sortIndex": 0
        }],
        "SEASON": [{
            "optionCode": "Summer",
            "optionKey": "SUMMER",
            "optionName": "SUMMER",
            "optionParentCode": "sm",
            "optionParentProperty": "season",
            "optionValue": "Summer",
            "sortIndex": 0
        },
        {
            "optionCode": "winter",
            "optionKey": "WINTER",
            "optionName": "WINTER",
            "optionParentCode": "WINTER",
            "optionParentProperty": "SEASON",
            "optionValue": "WINTER",
            "sortIndex": 0
        },
        ],
        "PURPOSE_OF_LOAN": [{
            "optionCode": "AGRICULTURE",
            "optionKey": "AGRICULTURE",
            "optionName": "Agriculture",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Agriculture",
            "sortIndex": 0
        },
        {
            "optionCode": "OTHER_THAN_AGRICULTURE",
            "optionKey": "OTHER_THAN_AGRICULTURE",
            "optionName": "Other Than Agriculture",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Other Than Agriculture",
            "sortIndex": 0
        }],
        "TENURE": [{
            "optionCode": "UPTO_1_YEAR",
            "optionKey": "UPTO_1_YEAR",
            "optionName": "Upto 1 Year",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Upto 1 Year",
            "sortIndex": 0
        },
        {
            "optionCode": "MORE_THAN_1_YEAR",
            "optionKey": "MORE_THAN_1_YEAR",
            "optionName": "More Than 1 Year",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "More Than 1 Year",
            "sortIndex": 0
        }],
        "ARTICLETYPE": [{
            "optionCode": "COIN",
            "optionKey": "COIN",
            "optionName": "Coin",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Coin",
            "sortIndex": 0
        }, {
            "optionCode": "JEWELLERY",
            "optionKey": "JEWELLERY",
            "optionName": "Jewellery",
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": "Jewellery",
            "sortIndex": 0
        }],
        "PURITY": [{
            "optionCode": 18,
            "optionKey": 18,
            "optionName": 18,
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": 18,
            "sortIndex": 0
        }, {
            "optionCode": 19,
            "optionKey": 19,
            "optionName": 19,
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": 19,
            "sortIndex": 0
        }, {
            "optionCode": 20,
            "optionKey": 20,
            "optionName": 20,
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": 20,
            "sortIndex": 0
        }, {
            "optionCode": 21,
            "optionKey": 21,
            "optionName": 21,
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": 21,
            "sortIndex": 0
        }, {
            "optionCode": 22,
            "optionKey": 22,
            "optionName": 22,
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": 22,
            "sortIndex": 0
        }, {
            "optionCode": 24,
            "optionKey": 24,
            "optionName": 24,
            "optionParentCode": null,
            "optionParentProperty": null,
            "optionValue": 24,
            "sortIndex": 0
        },

        ],
        "MSME_UNIT": [{
            "optionKey": "Bronze",
            "optionName": "Bronze",
            "optionValue": "Bronze"
        },
        {
            "optionKey": "Silver",
            "optionName": "Silver",
            "optionValue": "Silver"
        },
        {
            "optionKey": "Gold",
            "optionName": "Gold",
            "optionValue": "Gold"
        },
        {
            "optionKey": "Diamond",
            "optionName": "Diamond",
            "optionValue": "Diamond"
        },
        {
            "optionKey": "Platinum",
            "optionName": "Platinum",
            "optionValue": "Platinum"
        },],
        "ASSETS_PURCHASED": [{
            "optionKey": "Stock",
            "optionName": "Stock",
            "optionValue": "Stock"
        }, {
            "optionKey": "Book Debt",
            "optionName": "Book Debt",
            "optionValue": "Book Debt"
        }],

    }
    encryptionHeaders = { "clientApiKey": this.tenentConfiguration.clientApiKey, "Content-Type": "application/x-www-form-urlencoded" }
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

                }
            ],
            subMenu: [
                {
                    id: "accountOpening",
                    name: "Account Opening",
                    image: "assets/icons/account_opening.png",
                    hover_image: "assets/icons/accounts_hover.svg",
                    isHover: false,
                    isActive: true,
                    subSection: [{
                        "id": "savingsAccount",
                        "label": "Savings Account",
                        "icon": "assets/icons/Group 17329.svg",
                        "products": [{
                            "id": "savingsBankAccount",
                            "label": "Savings Bank Account",
                            "icon": "assets/icons/Group 17323.svg",
                            "description": "Open a Savings Bank Account online in a jiffy!",
                            "actionLabel": "know More",
                            "productCode": "SBA"
                        }]
                    }]

                },
                {
                    id: "loans",
                    name: "Loans",
                    image: "assets/icons/loans.png",
                    hover_image: "assets/icons/loans_hover.svg",
                    isHover: false,
                    isActive: true,
                    subSection: [{
                        "id": "retail",
                        "label": "Retail",
                        "icon": "assets/icons/Group 17329 (2).svg",
                        "products": [{
                            "id": "savingsBankAccount",
                            "label": "Personal Loan",
                            "description": "Don’t dream! Live your dream! Apply for a Personal Loan with minimal documentation.",
                            "actionLabel": "know More",
                            "icon": "assets/icons/Group 17323.svg",
                            "productCode": "PTL"
                        }, {
                            "id": "savingsBankAccount",
                            "label": "Pensioner Loan",
                            "description": "Rainy Days? Apply for Pensioner Loan with minimal documentation.",
                            "actionLabel": "know More",
                            "productCode": null,
                            "icon": "assets/icons/Group 17323 (2).svg",

                        }, {
                            "id": "savingsBankAccount",
                            "label": "Vehicle Loan",
                            "description": "Grab your dream wheels digitally without any hassle!",
                            "actionLabel": "know More",
                            "productCode": null,
                            "icon": "assets/icons/Group 17323 (3).svg",

                        }, {
                            "id": "savingsBankAccount",
                            "label": "Home Loan",
                            "description": "Get your Home Loan with the Bank of India with minimal documentation.",
                            "actionLabel": "know More",
                            "productCode": null,
                            "icon": "assets/icons/Group 19022.svg",

                        }, {
                            "id": "savingsBankAccount",
                            "label": "Top-Up Loan",
                            "description": "Planning for Holiday, Home renovation, Medical expenses, or Marriage? Apply for a Top-Up loan Now!",
                            "actionLabel": "know More",
                            "productCode": null,
                            "icon": "assets/icons/Group 17323 (4).svg",


                        }, {
                            "id": "savingsBankAccount",
                            "label": "Loan Against Property",
                            "description": "Apply for a Loan against your property with minimal documentation.",
                            "actionLabel": "know More",
                            "productCode": null,
                            "icon": "assets/icons/Group 17323 (5).svg",

                        },]
                    }]


                },
                {
                    id: "insurance",
                    name: "Insurance",
                    image: "assets/icons/insurance.png",
                    hover_image: "assets/icons/insurance_hover.svg",
                    isHover: false,
                    isActive: false,
                    subSection: []

                },
                {
                    id: "investment",
                    name: "Investment",
                    image: "assets/icons/investment.png",
                    hover_image: "assets/icons/investment_hover.svg",
                    isHover: false,
                    isActive: false,
                    subSection: []


                },
                {
                    id: "digitalbanking",
                    name: "Digital Banking",
                    image: "assets/icons/digitalbanking.png",
                    hover_image: "assets/icons/digitalbanking_blue.png",
                    isHover: false,
                    isActive: true,
                    subSection: [{
                        "id": "retail",
                        "label": "Credit Card",
                        "icon": "assets/icons/Group 17329 (1).svg",
                        "products": [{
                            "id": "savingsBankAccount",
                            "label": "Credit Card",
                            "description": "Getting a Credit Card is just a few clicks away!",
                            "actionLabel": "know More",
                            "productCode": null,
                            "icon": "assets/icons/Group 17323 (1).svg",
                        }]


                    }]

                }
            ]
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
                    subSection: []


                },
                {
                    id: "loans",
                    name: "Loans",
                    image: "assets/icons/loans.png",
                    hover_image: "assets/icons/loans_hover.svg",
                    isHover: false,
                    isActive: true,
                    subSection: [{
                        "id": "savingsAccount",
                        "label": "Buisness Loan",
                        "icon": "assets/icons/Group 17327.svg",
                        "products": [{
                            "id": "savingsBankAccount",
                            "label": "PMMY-Shishu (Upto 50K)",
                            "icon": "assets/icons/Group 17323 (6).svg",
                            "description": "Applying Mudra loan was never so easy! Apply Now!",
                            "actionLabel": "know More",
                            "productCode": null
                        }, {
                            "id": "savingsBankAccount",
                            "label": "PMMY-Kishore (50K - 5 Lakhs)",
                            "icon": "assets/icons/Group 17323 (7).svg",
                            "description": "Applying Mudra loan was never so easy! Apply Now!",
                            "actionLabel": "know More",
                            "productCode": null
                        }, {
                            "id": "savingsBankAccount",
                            "label": "PMMY-Tarun (5 Lakhs - 10 Lakhs)",
                            "icon": "assets/icons/Group 17323 (8).svg",
                            "description": "Applying Mudra loan was never so easy! Apply Now!",
                            "actionLabel": "know More",
                            "productCode": null
                        }, {
                            "id": "savingsBankAccount",
                            "label": "Loan above Rs.10 Lakhs up to Rs.25 Lakhs",
                            "icon": "assets/icons/Group 17323 (9).svg",
                            "description": "Need funds for Business? Apply for Business Loan now!",
                            "actionLabel": "know More",
                            "productCode": null
                        }, {
                            "id": "savingsBankAccount",
                            "label": "Loan Above Rs.25 Lakhs Up To Rs.200 Cr.",
                            "icon": "assets/icons/Group 17323 (10).svg",
                            "description": "Need funds for Business? Apply for Business Loan now!",
                            "actionLabel": "know More",
                            "productCode": null
                        }, {
                            "id": "savingsBankAccount",
                            "label": "Star SRTO Loans",
                            "icon": "assets/icons/Group 17323 (11).svg",
                            "description": "Need Loans for Commercial Vehicle for Business? Apply for Star SRTO Loan Now!",
                            "actionLabel": "know More",
                            "productCode": null
                        }, {
                            "id": "savingsBankAccount",
                            "label": "Renewals",
                            "icon": "assets/icons/Group 17323 (12).svg",
                            "description": "Renew your Business Loans in just a few clicks! Apply Now!",
                            "actionLabel": "know More",
                            "productCode": null
                        },]
                    }]


                },
                {
                    id: "insurance",
                    name: "Insurance",
                    image: "assets/icons/insurance.png",
                    hover_image: "assets/icons/insurance_hover.svg",
                    isHover: false,
                    isActive: false,
                    subSection: []


                },
                {
                    id: "investment",
                    name: "Investment",
                    image: "assets/icons/investment.png",
                    hover_image: "assets/icons/investment_hover.svg",
                    isHover: false,
                    isActive: false,
                    subSection: []


                },
            ]
        },
        {
            name: "Rural",
            isActive: false,
            subSectionMenu: [],
            subMenu: [{
                id: "accountOpening",
                name: "Account Opening",
                image: "assets/icons/account_opening.png",
                hover_image: "assets/icons/accounts_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },
            {
                id: "loans",
                name: "Loans",
                image: "assets/icons/loans.png",
                hover_image: "assets/icons/loans_hover.svg",
                isHover: false,
                isActive: true,
                subSection: [{
                    "id": "savingsAccount",
                    "label": "Agriculture Loans",
                    "icon": "assets/icons/Group 17317.svg",
                    "products": [{
                        "id": "savingsBankAccount",
                        "label": "Agriculture Gold Loan",
                        "icon": "assets/icons/Group 17323 (13).svg",
                        "description": "Use Gold to unlock your Golden Future! Apply Now!",
                        "actionLabel": "know More",
                        "productCode": null
                    }, {
                        "id": "savingsBankAccount",
                        "label": "Kisan Credit Card",
                        "icon": "assets/icons/Group 17323 (14).svg",
                        "description": "Need funds for Farming? Apply for Kisan Credit Card Now!",
                        "actionLabel": "know More",
                        "productCode": null
                    }, {
                        "id": "savingsBankAccount",
                        "label": "Crop Loan",
                        "icon": "assets/icons/Group 17323 (15).svg",
                        "description": "Improve your farming business with BOI Crop Loan. Apply Now!",
                        "actionLabel": "know More",
                        "productCode": null
                    },]
                }]


            },
            {
                id: "insurance",
                name: "Insurance",
                image: "assets/icons/insurance.png",
                hover_image: "assets/icons/insurance_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },
            {
                id: "investment",
                name: "Investment",
                image: "assets/icons/investment.png",
                hover_image: "assets/icons/investment_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },]
        },
        {
            name: "NRI",
            isActive: false,
            subSectionMenu: [],
            subMenu: [{
                id: "accountOpening",
                name: "Account Opening",
                image: "assets/icons/account_opening.png",
                hover_image: "assets/icons/accounts_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },
            {
                id: "loans",
                name: "Loans",
                image: "assets/icons/loans.png",
                hover_image: "assets/icons/loans_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },
            {
                id: "insurance",
                name: "Insurance",
                image: "assets/icons/insurance.png",
                hover_image: "assets/icons/insurance_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },
            {
                id: "investment",
                name: "Investment",
                image: "assets/icons/investment.png",
                hover_image: "assets/icons/investment_hover.svg",
                isHover: false,
                isActive: false,
                subSection: []


            },]
        },

    ]
    homeBanner = [
        {
            image: "assets/images/Digital-Product.png",
            title: "",
            description: ""
        },
        {
            image: "assets/images/Home-Loan.png",
            title: "",
            description: ""
        },
        {
            image: "assets/images/kisan-card.png",
            title: "",
            description: ""
        },
        {
            image: "assets/images/MSME-Loan.png",
            title: "",
            description: ""
        }
    ]
    landingPageBanner = [
        {
            image: "assets/images/feedback/Landing-Loan.png",
            title: "",
            description: ""
        },
        {
            image: "assets/images/feedback/Gold-Loan.png",
            title: "",
            description: ""
        },
        {
            image: "assets/images/feedback/Mudra-Loan.png",
            title: "",
            description: ""
        },
    ]
    banner = {
        "SBA": {
            individual: {
                carouselImages: [
                    {
                        image: "assets/images/Digital-Product.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/Home-Loan.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/kisan-card.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/MSME-Loan.png",
                        title: "",
                        description: ""
                    }
                ]
            },
            company: {
                carouselImages: [
                    {
                        image: "assets/images/Digital-Product.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/Home-Loan.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/kisan-card.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/MSME-Loan.png",
                        title: "",
                        description: ""
                    }
                ]
            },
            group: {
                carouselImages: [
                    {
                        image: "assets/images/Digital-Product.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/Home-Loan.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/kisan-card.png",
                        title: "",
                        description: ""
                    },
                    {
                        image: "assets/images/MSME-Loan.png",
                        title: "",
                        description: ""
                    }
                ]
            }
        }
    }
    loanProductInfo = [
        {
            id: "savings-account",
            image: "assets/icons/loan1.png",
            name: "Savings Account",
            info: "Open a Savings Bank Account online in a jiffy",
            color: "#197DFC",
            isActive: true,
            url: "/core/choose-loan",
            basePath: "saving-account",
            showDescription: true,
            productCode: "SBA",
            productType: "SAVINGS_ACCOUNT",
            isCbsFields_ShowAndHide: false
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
            isCbsFields_ShowAndHide: false
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
            productType: "VEHICLE_LOAN"
        }
        ,

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
            isCbsFields_ShowAndHide: false
        },
        // {
        //     id: "home-loan",
        //     image: "assets/icons/loan6.png",
        // info: "Home Loan ! Apply Now",
        // color: "#FF6B6B",
        // isActive: false,
        // url: "product/basicinfo/customer-type",
        // showDescription : false,
        // productCode:"HML",
        // productType:"HOME_LOAN"
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
            productType: "PENSIONER_LOAN"
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
            productType: "PERSONAL_LOAN_EXPRESS"
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
            isCbsFields_ShowAndHide: false
        }, {
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
            isCbsFields_ShowAndHide: false
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
            isCbsFields_ShowAndHide: false
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
            isCbsFields_ShowAndHide: false
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
            isCbsFields_ShowAndHide: false
        },
    ]
    getHelpInfo = [
        {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "title-wrapper",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "paragraphData": "For any query, kindly contact us"
            },
        },
        {
            "componentType": "PARAGRAPH",
            "className": "title-wrapper",
            "sectionContent": {
                "isShow": true,
                "paragraphData": "Phone Numbers",
            },
        },
        {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "pargh-content",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "paragraphData": "1800 103 1906 (Tollfree)",
            },
        },
        {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "pargh-content",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "paragraphData": "1800 220 229 (Tollfree - Covid Support)",
            },
        },
        {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "pargh-content",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "paragraphData": "(022) – 40919191 (chargeable number) 24 X 7"
            },
        },
        {
            "componentType": "PARAGRAPH",
            "className": "title-wrapper",
            "sectionContent": {
                "isShow": true,
                "paragraphData": "E-mail Address",
                "subContent": "boi.callcentre@bankofindia.co.in"
            },
        },
        {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "pargh-content",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "paragraphData": "boi.callcentre@bankofindia.co.in"
            },
        },

    ]

    rejectionConsent = [
        {
            "componentType": "FORM",
            "validateSection": false,
            "sectionContent": {
                "options": {
                    "columnSize": 1,
                    "mapSupplyData": true,
                    "mapAndDisable": true
                },
                "isShow": true,
                "fields": [
                    {
                        "fieldDataType": "DROPDOWN",
                        "dependentField": null,
                        "isMandatory": true,
                        "commonpropertyType": "AWAITING_APPROVAL_L7_REASON",
                        "fieldLabel": "Rejection Reason",
                        "fieldAccessModifier": "EDITABLE",
                        "minLength": 6,
                        "maxLength": 15,
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
                        "placeholderText": "Select Reason",
                        "fieldName": "reason",
                        "showLabel": true,
                        "labelInfo": null,
                        "groupName": "",
                        "groupIndex": 1,
                        "showField": true
                    },
                    {
                        "fieldDataType": "TEXT",
                        "dependentField": null,
                        "isMandatory": false,
                        "fieldLabel": "Remarks",
                        "fieldAccessModifier": "EDITABLE",
                        "minLength": null,
                        "maxLength": 50,
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
                        "placeholderText": "Tell us in words",
                        "fieldName": "remarks",
                        "showLabel": true,
                        "labelInfo": null,
                        "groupName": "",
                        "groupIndex": 2,
                        "showField": true
                    }
                ],
                "validityEmitter": "new Subject<void>()",
                "formValueEmitter": "new Subject<void>()"
            }
        }
    ]

    AadharConsent = [
        {
            "componentType": "PARAGRAPH",
            "mandatory": false,
            "className": "title-wrapper",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "paragraphData": "Kindly Read and Submit The Consent"
            },
        },
        {
            "componentType": "CONSENT",
            "mandatory": false,
            "className": "title-wrapper",
            "validateSection": false,
            "sectionContent": {
                "isShow": true,
                "config": {
                    "options": [{
                        "consentType": "STATIC",  //STATIC,APIFETCH
                        "consentCode": null,
                        "submitConsentCodes": [],
                        label: "I hereby provide my voluntary consent to bank of india to use the Aadhar details provided by me for authentication and agree to terms and conditions related to Aadhar consent and updation",
                        isMultiLabel: true,
                        "completed": null
                    }, {
                        "consentType": "STATIC",  //STATIC,APIFETCH
                        "consentCode": null,
                        "submitConsentCodes": ["DND_Consent", "Privacy_Policy_SBA"],
                        label: "a.I am aware that there are various alternate actions provideed by Bank of establishing my identity address proof for opening a Credit Card and agree to confirm that for opening the online Credit Card variant i.e the Credit Card. i hereby also agree with the below terms pertaining to Aadhar based authentication/verification.I have been informed that (a)upon authentication. UDAI share",
                        isMultiLabel: true,
                        "completed": null,
                    },
                    ]
                },

            },
        },
    ]

    breadCrumbList = [
        {
            name: "home",
            label: "Home",
            url: "/core/home",
            isActive: true
        },
        // {
        //     name: "trackStatus",
        //     label:"Track Status",
        //     url: "/1/landing",
        //     isActive: false
        //   },
        {
            name: "products",
            label: "Products",
            url: "/core/home",
            isActive: true
        },
        {
            name: "savingsAccount",
            label: "Savings Account",
            url: "/core/choose-loan",
            isActive: false
        }
    ];
    /*product desc page jsons*/
    productDesc = {
        
    }

    productDescInfoTabs = {
        
    };

    pageSequenceData = {
        
    }

    stepperData = {
        
    }



    dynamicComponentLayout = {
        "columnSize": 1
    }

    stepper_test_data = [
        {
            "name": "Basic Information",
            "info": "10MinVerifyYou",
            "isActive": true,
            "isCompleted": true,
            "subStep": [
                {
                    "id": "001",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": true
                },
                {
                    "id": "002",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": false
                },
                {
                    "id": "003",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": false
                },
                {
                    "id": "004",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": false
                },
                {
                    "id": "005",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": false
                }
            ],
            "subStepWidth": "16%"
        },
        {
            "name": "borrower",
            "info": "10MinVerifyYou",
            "isActive": true,
            "isCompleted": true,
            "subStep": [
                {
                    "id": "001",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": true
                },
                {
                    "id": "002",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": true
                }
            ],
            "subStepWidth": "40%"
        },
        {
            "name": "consentDocument",
            "info": "10MinVerifyYou",
            "isActive": true,
            "isCompleted": false,
            "subStep": [
                {
                    "id": "001",
                    "name": "subStep1",
                    "isActive": true,
                    "isCompleted": false
                },
                {
                    "id": "002",
                    "name": "subStep1",
                    "isActive": false,
                    "isCompleted": false
                }
            ],
            "subStepWidth": "40%"
        },
        {
            "name": "acknowledgement",
            "info": "10MinVerifyYou",
            "isActive": false,
            "isCompleted": false
        }
    ];

    verifiedFieldsData = {
        
    };


    tabsData = {
        
    }


    pageSectionConfig = {
        
    }


    pageMetaConfig = {
        
    }


    productDocumentList = {
        
    }

    videokycList = {
        "PTLEX": {
            label: "Get Ready for Video KYC",
            list: [
                {
                    icon: "assets/icons/card.svg",
                    content: "PAN Card"
                },
                {
                    icon: "assets/icons/print.svg",
                    content: "Aadhaar Card"
                },
                {
                    icon: "assets/icons/home.svg",
                    content: "Communication Address Proof"
                },
                {
                    icon: "assets/icons/pen.svg",
                    content: "Blank paper & pen"
                },
                {
                    icon: "assets/icons/video.svg",
                    content: "Clear audio, video & brightness"
                },
                {
                    icon: "assets/icons/vpn.svg",
                    content: "No VPN connectivity"
                },
                {
                    icon: "assets/icons/wifi.svg",
                    content: "Stable internet connection"
                },
            ]
        }
    }


    placeholderResponses = {
        cbsDedupe: {
            code: "400",
            isETB: true,
            cutomerId: "300227770"
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
            accountType: "HOME_LOAN_ACCOUNT"
        },
        bureauResponse: {
            cibilScore: 690
        },
        breResponse: {
            brecheckspassed: true,
            sanctionType: "STP"
        },
        sanctionDetails: {
            sanctionAmount: 75000,
            RequestedAmount: 9000
        },
        resumejourneyTesting: {
            "status": "SUCCESS",
            "code": "200",
            "message": "Verification Code sent to number 8273829991",
            "mobileNumber": "8273829991",
            "MOBILE_VERIFY": {
                "mobileNumber": "8273829991"
            },
            "panData": {
                "dateCreated": "",
                "returnCode": "1",
                "panNumber": "AAIPM3854E",
                "panStatus": "E",
                "panStatusMessage": "EXISTING AND VALID",
                "lastName": "Jadhav",
                "firstName": "Vaibhav",
                "middleName": "Dhondiram",
                "panTitle": "Mr",
                "lastUpdateDate": "31/05/2018",
                "nameOnCard": null,
                "aadharSeedingStatus": null,
                "status": "SUCCESS",
                "message": "Pan Verification done successfully",
                "isPanValid": true,
                "objectUuid": "e3a0b8e4-b604-4fcb-ad41-6ac328f38a92",
                "isETB": false,
                "accountNumber": null,
                "etbMessage": ""
            },
            "personalAddress": {
                "line1": "JN 2 Type Room No B 3 Bldg No 38 ",
                "line2": "Sector 10 Navi Mumbai Near Gaon Devi Mandir",
                "line3": "",
                "district": "THANE",
                "city": "THANE",
                "state": "MAHARASHTRA",
                "zipCode": "400703",
                "country": "India",
                "subDistrict": "Near Gaon Devi Mandir"
            },
            "firstName": "Vaibhav",
            "lastName": "Jadhav",
            "middleName": "Dhondiram",
            "gender": "Male",
            "dateOfBirth": "01/04/1986",
            "onlyBirthYearFound": false,
            "existingaadharData": {
                "uuid": "3e712a0f-5e9a-4930-8dbb-1258884dce10",
                "imageDocUuid": "35f4807c-6977-4745-92df-b2ca9eccdf7f",
                "mappingFields": {
                    "personalAddress": {
                        "line1": "JN 2 Type Room No B 3 Bldg No 38 ",
                        "line2": "Sector 10 Navi Mumbai Near Gaon Devi Mandir",
                        "line3": "",
                        "district": "THANE",
                        "city": "THANE",
                        "state": "MAHARASHTRA",
                        "zipCode": "400703",
                        "country": "India",
                        "subDistrict": "Near Gaon Devi Mandir"
                    },
                    "firstName": "Vaibhav",
                    "lastName": "Jadhav",
                    "middleName": "Dhondiram",
                    "gender": "Male",
                    "dateOfBirth": "01/04/1986",
                    "onlyBirthYearFound": false
                },
                "address": "JN - 2 Type, Room No. B - 3, Bldg No. 38Near Gaon Devi MandirSector 10, Navi MumbaiVashi",
                "district": "Thane",
                "state": "Maharashtra",
                "zipCode": "400703",
                "name": "Vaibhav Dhondiram Jadhav",
                "DoB": "01/04/1986",
                "gender": "Male",
                "isETB": false,
                "status": "SUCCESS",
                "code": "200",
                "message": "User Verified Successfully"
            },
            "aadharData": {
                "personalAddress": {
                    "line1": "JN 2 Type Room No B 3 Bldg No 38 ",
                    "line2": "Sector 10 Navi Mumbai Near Gaon Devi Mandir",
                    "line3": "",
                    "district": "THANE",
                    "city": "THANE",
                    "state": "MAHARASHTRA",
                    "zipCode": "400703",
                    "country": "India",
                    "subDistrict": "Near Gaon Devi Mandir"
                },
                "firstName": "Vaibhav",
                "lastName": "Jadhav",
                "middleName": "Dhondiram",
                "gender": "Male",
                "dateOfBirth": "01/04/1986",
                "onlyBirthYearFound": false
            },
            "identityNumberTwo": "BIOPC4152A",
            "identityNumberTwoVerified": true,
            "identityNumberOne": "923923942934",
            "identityNumberOneVerified": true,
            "filler": null,
            "MORE_INFO": {
                "identityNumberTwo": "BIOPC4152A",
                "identityNumberTwoVerified": true,
                "identityNumberOne": "923923942934",
                "identityNumberOneVerified": true,
                "filler": null
            },
            "nameMatchData": {
                "nameMatchResult": {
                    "result": {
                        "result": true,
                        "score": 100
                    },
                    "requestId": "3c2244d5-1ab3-4476-96eb-100668437b5f",
                    "internalStatusCode": 101,
                    "statusCode": 200
                },
                "blacklistedFlag": true,
                "blackListedErrorMessage": ""
            },
            "cbsData": {
                "code": "400",
                "isETB": false,
                "custId": "",
                "message": "DEDUPE CHECK Failed"
            }
        }
    }

    applicationErrorCodes = {
        PTLEX: {

        }
    }

    //journey Events are the events which we need to perform at instant of a journey 
    journeyEventCodes = {
        
    }

    productLocalisations = {
        "PTLEX": {
            "SYSTEM_DOWN": "currently our servers are down please try after some time",
            "SWR": "Something Went Wrong!!"
        },
        "VLN": {
            "SYSTEM_DOWN": "currently our servers are down please try after some time",
            "SWR": "Something Went Wrong!!"
        },
        "PSL": {
            "SYSTEM_DOWN": "currently our servers are down please try after some time",
            "SWR": "Something Went Wrong!!"
        }
    }

    flowTags = {

    }
}
