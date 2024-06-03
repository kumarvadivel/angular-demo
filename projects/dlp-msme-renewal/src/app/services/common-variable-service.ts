import { Injectable } from "@angular/core";
import {AadharConsent, 
    commonProperty_static, 
    getHelpInfo, homeBanner, 
    homeMenu, landingPageBanner, 
    loanProductInfo, rejectionConsent} from '../services/utils/data';
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
    ErrorCodeSubStatus = {
        "MSMERE":"SUB_STATUS_20",
    }
    appLayoutConfig = {
        isShowJourneyHeader: true,
        isShowJourneyFooter: true,
        isShowSubStepper: true,
        isShowStepperPercentage: true,
        mobileView: false,
    };
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
        'loanDetails': 'borrowerDetails',
        'loanWithOutBorrowerDetails': 'loanWithOutBorrowerDetails',
        'borrowerDetails': 'fetchBorrowerDetails',
        'documentTypeFetch': 'getSupportingDoc',
        'fetchSalaryAccount': 'fetchSalaryAccount',
        'documentFetch': 'getUploadedDoc',
        'fetchEligibilityDtls': 'fetchEligilibilityDetails',
        'fetchEligibilityData': 'fetchEligiblityData',
        'fetchVehicleList': 'fetchVehicleList',
        'fetchRepaymentSchedule': 'fetchRepaymentSchedule',
        'fetchContracts': 'fetchContractToAccept',
        'acceptContract': 'acceptContract',
        'fetchSelfEmploymentDetails': 'fetchSelfEmploymentDetails',
        'fetchBorrowerDetails': 'fetchBorrowerDetails',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'cibilfetch': 'fetchCibilData',
        'securityDetailsCreate': 'submitSecurityDetails',
        'fetchSecurityDetails': 'retreiveSecurityDetails',
        'ProductDetails_v3': 'fetchProductDetailInfo',
        'fetchCharges':'fetchCharges',
        'listChecklist':'listChecklist',
        "saveOrUpdateRenewalType":"saveOrUpdateRenewalType",
        'fetchRatingScore': 'fetchRatingScore',
        "breEligiblityCheck": "breEligiblityCheck",
        "saveMsmeSecurityDcoument": "saveMsmeSecurityDcoument"
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
        'employeeDetailsUpdate': 'employmentProfileUpdate',
        'nomineeCreate': 'nomineeCreate',
        'updateLoanProgram': 'updateLoanProgram',
        'updateVas': 'submitVas',
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
        'nameMatch_loan': 'nameMatch_loan',
        'cbsDedupe': 'cbsDedupe',
        'demographicDetailsFetch': 'fetchDemographicDetails',
        'assignParkingBranch': 'assignParkingBranch',
        'updateEmploymentDetails': 'updateEmploymentDetails',
        'BRECall_personal_loan': 'fetchEligilibilityDetails',
        'fetchEligibiltyDetails': 'fetchEligilibilityDetails',
        'sanctionUpdate': 'updateSanctionDetails',
        'nstpValidate': 'updateSanctionDetails',
        'rating_score_personal_loan': 'fetchRatingScorePl',
        'fetchRatingScore': 'fetchRatingScore',
        'fetchAccountData': 'fetchAccountData',
        'esignStatus': 'esignFetchStatus',
        'verifyPanNumber': 'verifyPanNumber',
        'panVerificationV2': 'panVerification_v2',
        'verifyUdyam': 'verifyUdyam',
        'stpCheck': 'stpCheck',
        'createCBSDetail': 'createCBSDetail',
        'npaCheck': 'npaCheck',
        'fetchAndValidateActiveAccounts':'fetchAndValidateActiveAccounts',
        'createVehicle': 'createVehicleDetails',
        'updateLoanApplication': 'updateLoanApplication',
        'updateVehicle': 'updateVehicleDetails',
        'designations': 'designations',
        'retrieve': 'retrieve',
        'borrowerExtraPropertyUpdate': 'borrowerExtraPropertyUpdate',
        'duplicateApplicationCheck': 'duplicateApplicationCheck',
        'repaymentSchedule': 'fetchRepaymentSchedule',
        'updateFacilityDetailsLoanSanction': 'updateFacilityDetailsLoanSanction',
        'saveCampaign':'saveCampaign',
        'updateCbsDetails':'updateCbsDetails',
        'saveAutoCreateChecklist':'saveAutoCreateChecklist',
        'updateChecklistActivity':'updateChecklistActivity',
        "updateCompanyProfileUpdate":"updateCompanyProfileUpdate",
        "updateLoanSanction":"updateLoanSanction",
        "updateCompanyRepresentative": "updateCompanyRepresentative",
        "breEligiblityCheck": "breEligiblityCheck",
        "checkDocumentStatus":"checkDocumentStatus"
    }
    commonProperty_static = commonProperty_static;
    encryptionHeaders = {
        clientApiKey: this.tenentConfiguration.clientApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    homeMenu = homeMenu
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {
    'MSMERE': {
        individual: {
            carouselImages: [
                {
                    image: 'assets/images/feedback/Landing-Loan.webp',
                    title: '',
                    description: ''
                },
                {
                    image: 'assets/images/Home-Loan.webp',
                    title: '',
                    description: ''
                },
                {
                    image: 'assets/images/Vehicle-Loan.webp',
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
                    image: 'assets/images/feedback/Landing-Loan.png',
                    title: '',
                    description: ''
                },
                {
                    image: 'assets/images/Home-Loan.webp',
                    title: '',
                    description: ''
                },
                {
                    image: 'assets/images/Vehicle-Loan.webp',
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
                    image: 'assets/images/Digital-Product.webp',
                    title: '',
                    description: ''
                },
                {
                    image: 'assets/images/Home-Loan.webp',
                    title: '',
                    description: ''
                },
                {
                    image: 'assets/images/Vehicle-Loan.webp',
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
    loanProductInfo = loanProductInfo;
    getHelpInfo = getHelpInfo;
    rejectionConsent = rejectionConsent;
    AadharConsent = AadharConsent;
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
    'MSMERE': {
        "journeyPages": {
            "individual": [  
                    {
                        "pageIndex": 0,
                        "pageCode": "ACCOUNT_VERIFY",
                        "pageName": "Account Verify",
                        "status": "INITIALIZED",
                        "subStatus": null,
                        "subStatusChangeDescription": null,
                        "lastPage": false,
                        // "validateBeforeNextPage": {
                        //     "navigate": {
                        //         "if": [
                        //             {
                        //                 "==": [
                        //                     {
                        //                         "var": "capturedData.individualorcompany"
                        //                     },
                        //                     "INDIVIDUAL"
                        //                 ]
                        //             },
                        //             "EKYC_VERIFY",
                        //             "NEXT"
                        //         ]
                        //     }
                        // },
                        "url": "product/basicinfo/account-number-verification"
                    },
                    {
                        "pageIndex": 1,
                        "pageCode": "EKYC_VERIFY",
                        "pageName": "Aadhaar Verify",
                        "status": "INITIALIZED",
                        "subStatus": null,
                        "subStatusChangeDescription": "Aadhaar Verification Completed",
                        "lastPage": false,
                        "url": "product/basicinfo/kyc-verify",
                        "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_2'], ['INITIALIZED', 'SUB_STATUS_3'], ['INITIALIZED', 'SUB_STATUS_22'], ['INITIALIZED', 'SUB_STATUS_23'], ['INITIALIZED', 'SUB_STATUS_24'], ['INITIALIZED', 'SUB_STATUS_25']],
                    },
                    {
                        "pageIndex": 2,
                        "pageCode": "UDYAM_VERIFY",
                        "pageName": "Udyam Verify",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_7",
                        "subStatusChangeDescription": "Udyam Verification Completed",
                        "lastPage": false,
                        "url": "product/basicinfo/udyam-verify",
                        "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_6']],
                    },
                    {
                        "pageIndex": 3,
                        "pageCode": "EMPLOYMENT_DETAILS",
                        "pageName": "Personal Information",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_16",
                        "subStatusChangeDescription": "Loan Information",
                        "lastPage": false,
                        "url": "product/product-declaration/employment-details",
                        "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_11'],['INITIALIZED', 'SUB_STATUS_28'], ['INITIALIZED', 'SUB_STATUS_38'], ['INITIALIZED', 'SUB_STATUS_30'], ['INITIALIZED', 'SUB_STATUS_31'], ['INITIALIZED', 'SUB_STATUS_32'], ['INITIALIZED', 'SUB_STATUS_39'], ['INITIALIZED', 'SUB_STATUS_29'], ['INITIALIZED', 'SUB_STATUS_33']]
                    },
                    {
                        pageIndex: 4,
                        pageCode: 'DOCUMENT_UPLOAD_V2',
                        pageName: 'Document Upload',
                        subStatus: "SUB_STATUS_15",
                        subStatusChangeDescription: null,
                        url: 'product/custom-information/document-upload-v2',
                        resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_34']],
                        exitjourneyEventCode: 'DOCUMENT_UPLOAD_COMPLETE'
    
                    },
                    {
                        "pageIndex": 5,
                        "pageCode": "MORE_INFO",
                        "pageName": "Personal Information",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_5",
                        "subStatusChangeDescription": "Applicant Verification Completed",
                        "lastPage": false,
                        "url": "product/product-declaration/more-info",
                        resumeJourneySequences: [
                            ['INITIALIZED', 'SUB_STATUS_15'], ['AWAITING_APPROVAL_L6', 'SUB_STATUS_4'],['AWAITING_APPROVAL_L6', 'SUB_STATUS_5'],['AWAITING_APPROVAL_L7', 'SUB_STATUS_12'],['AWAITING_APPROVAL_L6', 'SUB_STATUS_6'],['AWAITING_APPROVAL_L6', 'SUB_STATUS_7']],
                    },
                    {
                        pageIndex: 6,
                        pageCode: "KEY_FACT_DETAILS",
                        pageName: 'Key fact Statement',
                        lastPage: false,
                        url: 'product/custom-information/key-fact-statement',
                        resumeJourneySequences: [['AWAITING_APPROVAL_L7', 'SUB_STATUS_13'], ['AWAITING_APPROVAL_L7', 'SUB_STATUS_15']],
                        exitjourneyEventCode: 'KEY_FACT_COMPLETE'
                    },
                    {
                        "pageIndex": 7,
                        "pageCode": "LOAN_SUMMARY",
                        "status": "INITIALIZED",
                        "pageName": "Personal Information",
                        "subStatus": "SUB_STATUS_4",
                        "subStatusChangeDescription": "Aadhaar Verification Completed",
                        "lastPage": false,
                        "url": "product/loan/summary",
                        "resumeJourneySequences": [['AWAITING_APPROVAL_L7', 'SUB_STATUS_14'],['AWAITING_APPROVAL_L7', 'SUB_STATUS_16']],
                        "exitjourneyEventCode": "DOCUMENT_LIST"
                    }
                
            ],
            "company": [
                {
                    "pageIndex": 0,
                    "pageCode": "ACCOUNT_VERIFY",
                    "pageName": "Account Verify",
                    "status": "INITIALIZED",
                    "subStatus": null,
                    "subStatusChangeDescription": null,
                    "lastPage": false,
                    // "validateBeforeNextPage": {
                    //     "navigate": {
                    //         "if": [
                    //             {
                    //                 "==": [
                    //                     {
                    //                         "var": "capturedData.individualorcompany"
                    //                     },
                    //                     "INDIVIDUAL"
                    //                 ]
                    //             },
                    //             "EKYC_VERIFY",
                    //             "NEXT"
                    //         ]
                    //     }
                    // },
                    "url": "product/basicinfo/account-number-verification"
                },
              
                {
                    "pageIndex": 1,
                    "pageCode": "UDYAM_VERIFY",
                    "pageName": "Udyam Verify",
                    "status": "INITIALIZED",
                    "subStatus": "SUB_STATUS_7",
                    "subStatusChangeDescription": "Udyam Verification Completed",
                    "lastPage": false,
                    "url": "product/basicinfo/udyam-verify",
                    resumeJourneySequences: [["INITIALIZED", "SUB_STATUS_2"], ["INITIALIZED", "SUB_STATUS_3"], ["INITIALIZED", "SUB_STATUS_22"], ["INITIALIZED", "SUB_STATUS_23"], ['INITIALIZED', 'SUB_STATUS_24'], ['INITIALIZED', 'SUB_STATUS_25']],
                },
                {
                    "pageIndex": 2,
                    "pageCode": "EMPLOYMENT_DETAILS",
                    "pageName": "Personal Information",
                    "status": "INITIALIZED",
                    "subStatus": "SUB_STATUS_16",
                    "subStatusChangeDescription": "Loan Information",
                    "lastPage": false,
                    "url": "product/product-declaration/employment-details",
                    "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_11'],['INITIALIZED', 'SUB_STATUS_28'], ['INITIALIZED', 'SUB_STATUS_38'], ['INITIALIZED', 'SUB_STATUS_30'], ['INITIALIZED', 'SUB_STATUS_31'], ['INITIALIZED', 'SUB_STATUS_32'], ['INITIALIZED', 'SUB_STATUS_39'], ['INITIALIZED', 'SUB_STATUS_29'], ['INITIALIZED', 'SUB_STATUS_33']]
                },
                {
                    pageIndex: 3,
                    pageCode: 'DOCUMENT_UPLOAD_V2',
                    pageName: 'Document Upload',
                    subStatus: "SUB_STATUS_15",
                    subStatusChangeDescription: null,
                    url: 'product/custom-information/document-upload-v2',
                    resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_34']],
                    exitjourneyEventCode: 'DOCUMENT_UPLOAD_COMPLETE'

                },
                {
                    "pageIndex": 4,
                    "pageCode": "MORE_INFO",
                    "pageName": "Personal Information",
                    "status": "INITIALIZED",
                    "subStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "Applicant Verification Completed",
                    "lastPage": false,
                    "url": "product/product-declaration/more-info",
                    resumeJourneySequences: [
                        ['INITIALIZED', 'SUB_STATUS_15'], ['AWAITING_APPROVAL_L6', 'SUB_STATUS_4'],['AWAITING_APPROVAL_L6', 'SUB_STATUS_5'],['AWAITING_APPROVAL_L7', 'SUB_STATUS_12'],['AWAITING_APPROVAL_L6', 'SUB_STATUS_6'],['AWAITING_APPROVAL_L6', 'SUB_STATUS_7']],
                },
                {
                    pageIndex: 5,
                    pageCode: "KEY_FACT_DETAILS",
                    pageName: 'Key fact Statement',
                    lastPage: false,
                    url: 'product/custom-information/key-fact-statement',
                    resumeJourneySequences: [['AWAITING_APPROVAL_L7', 'SUB_STATUS_13'], ['AWAITING_APPROVAL_L7', 'SUB_STATUS_15']],
                    exitjourneyEventCode: 'KEY_FACT_COMPLETE'
                },
                {
                    "pageIndex": 6,
                    "pageCode": "LOAN_SUMMARY",
                    "status": "INITIALIZED",
                    "pageName": "Personal Information",
                    "subStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "Aadhaar Verification Completed",
                    "lastPage": false,
                    "url": "product/loan/summary",
                    "resumeJourneySequences": [["AWAITING_APPROVAL_L7", "SUB_STATUS_14"],["AWAITING_APPROVAL_L7", "SUB_STATUS_16"]],
                    "exitjourneyEventCode": "DOCUMENT_LIST"
                }
            ],
            "group": []
        },
        "otherPages": {
            "individual": [
                {
                    "pageIndex": 0,
                    "pageCode": "ACCOUNT_VERIFY",
                    "pageName": "Customer Type",
                    "status": "INITIALIZED",
                    "subStatus": null,
                    "subStatusChangeDescription": null,
                    "lastPage": false,
                    "validateBeforeNextPage": {
                        "navigate": "EMAIL_VERIFY"
                    },
                    "url": "product/basicinfo/account-number-verification"
                },
                {
                    "pageIndex": 1,
                    "pageCode": "EKYC_VERIFY",
                    "pageName": "Aadhaar Verify",
                    "status": "INITIALIZED",
                    "subStatus": null,
                    "subStatusChangeDescription": "Aadhaar Verification Completed",
                    "lastPage": false,
                    "validateBeforeNextPage": {
                        "navigate": "UDYAM_VERIFY"
                    },
                    "url": "product/basicinfo/kyc-verify",

                },
                {
                    pageIndex: 2,
                    pageCode: 'PRODUCT_ERROR',
                    pageName: 'Product error',
                    status: 'INITIALIZED',
                    subStatus: ['SUB_STATUS_9'],
                    lastPage: false,
                    subStatusChangeDescription: 'Account Number Verified',
                    url: 'product/custom-information/product-error',
                    resumeJourneySequences: []
                    //entryjourneyEventCode:'CONTACT_BRANCH'
                },
            ],
            "company":[
                {
                    "pageIndex": 0,
                    "pageCode": "ACCOUNT_VERIFY",
                    "pageName": "Customer Type",
                    "status": "INITIALIZED",
                    "subStatus": null,
                    "subStatusChangeDescription": null,
                    "lastPage": false,
                    "validateBeforeNextPage": {
                        "navigate": "EMAIL_VERIFY"
                    },
                    "url": "product/basicinfo/account-number-verification"
                },
                {
                    "pageIndex": 1,
                    "pageCode": "EKYC_VERIFY",
                    "pageName": "Aadhaar Verify",
                    "status": "INITIALIZED",
                    "subStatus": null,
                    "subStatusChangeDescription": "Aadhaar Verification Completed",
                    "lastPage": false,
                    "validateBeforeNextPage": {
                        "navigate": "UDYAM_VERIFY"
                    },
                    "url": "product/basicinfo/kyc-verify",

                },
                {
                    pageIndex: 2,
                    pageCode: 'PRODUCT_ERROR',
                    pageName: 'Product error',
                    status: 'INITIALIZED',
                    subStatus: ['SUB_STATUS_9'],
                    lastPage: false,
                    subStatusChangeDescription: 'Account Number Verified',
                    url: 'product/custom-information/product-error',
                    resumeJourneySequences: []
                    //entryjourneyEventCode:'CONTACT_BRANCH'
                },
            ]

        }
    },
    };
    stepperData = {
    'MSMERE': {
        "individual": [
            {
                "name": "Onboarding",
                "info": "10MinVerifyYou",
                "isActive": true,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "isActive": false,
                        "pageCode": 'EKYC_VERIFY',
                        "name": 'Aadhaar Verify',
                        "isCompleted": false
                    },
                    {
                        "id": "002",
                        "isActive": false,
                        "pageCode": 'UDYAM_VERIFY',
                        "name": 'Udyam Number',
                        "isCompleted": false
                    }
                ],
            },
            {
                "name": "Business Details",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "isActive": false,
                        "pageCode": "EMPLOYMENT_DETAILS",
                        "name": "employment details",
                        "isCompleted": false
                    } ,
                    {
                        "id": "002",
                        "isActive": false,
                        "pageCode": "DOCUMENT_UPLOAD_V2",
                        "name": "Document Upload",
                        "isCompleted": false
                    }     

                ],
                "subStepWidth": "40%"
            },
            {
                "name": "Facility Renewal Details",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "pageCode": "MORE_INFO",
                        "isActive": false,
                        "isCompleted": false,
                        "pageName": "Personal Information"
                    },
                    {
                        "id": "002",
                        "pageCode": "KEY_FACT_DETAILS",
                        "isActive": false,
                        "isCompleted": false,
                        "pageName": "Key fact Statement"
                    }
                ],
                "subStepWidth": "40%"
            }
        ],
        "company":[
            {
                "name": "Onboarding",
                "info": "10MinVerifyYou",
                "isActive": true,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "isActive": false,
                        "pageCode": 'UDYAM_VERIFY',
                        "name": 'Udyam Number',
                        "isCompleted": false
                    }
                ],
            },
            {
                "name": "Business Details",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "isActive": false,
                        "pageCode": "EMPLOYMENT_DETAILS",
                        "name": "employment details",
                        "isCompleted": false
                    } ,
                    {
                        "id": "002",
                        "isActive": false,
                        "pageCode": "DOCUMENT_UPLOAD_V2",
                        "name": "Document Upload",
                        "isCompleted": false
                    }     

                ],
                "subStepWidth": "40%"
            },
            {
                "name": "Facility Renewal Details",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "subStep": [
                    {
                        "id": "001",
                        "pageCode": "MORE_INFO",
                        "isActive": false,
                        "isCompleted": false,
                        "pageName": "Personal Information"
                    },
                    {
                        "id": "002",
                        "pageCode": "KEY_FACT_DETAILS",
                        "isActive": false,
                        "isCompleted": false,
                        "pageName": "Key fact Statement"
                    }
                ],
                "subStepWidth": "40%"
            }
        ],
        'group': []
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
    'MSMERE': {
        "individual": [
            {
                "name": "Mobile Number",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "pageCode": 'MOBILE_VERIFY',
            },
            // {
            //     "name": "Udyam Verify",
            //     "info": "10MinVerifyYou",
            //     "isActive": false,
            //     "isCompleted": false,
            //     "pageCode": 'UDYAM_VERIFY',
            // },
            {
                "name": "Customer Type",
                "info": "10MinVerifyYou",
                "isActive": false,
                "isCompleted": false,
                "pageCode": 'ACCOUNT_VERIFY',
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
                "name": "Aadhar Number",
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
    MSMERE: [
        {
            displayType: 'accordion',
            name: 'docRequired',
            label: 'Document Required',
            docReqData: {
                'Individual': [
                    {
                        name: 'idproof',
                        label: 'ID Proof',
                        data: [
                            {
                                label: 'Pan Card',
                                icon: 'assets/icons/pan.png'
                            },
                            {
                                label: 'Aadhar Card',
                                icon: 'assets/icons/aadhaar.png'
                            },
                            {

                                label: 'Voter Id Card',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Driving license',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Passport',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Others',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]

                    },
                    {
                        name: 'addressproof ',
                        label: 'Address Proof',
                        data: [
                            {
                                label: 'Telephone bill',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Electricity bill',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Property tax',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Aadhaar card',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Voter Id Card ',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Driving license',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Passport',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'udyamregistration',
                        label: 'Udyam Registration',
                        data: [
                            {
                                label: 'Udyam Registration',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'financialstatement',
                        label: 'Financial Statement',
                        data: [
                            {
                                label: 'Bank Statement',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Income Tax Return',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'GST Return',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },

                ],
                'Sole Proprietorship': [
                    {
                        name: 'idproof',
                        label: 'ID Proof',
                        data: [
                            {
                                label: 'Pan Card',
                                icon: 'assets/icons/pan.png'
                            },
                            {
                                label: 'Aadhar Card',
                                icon: 'assets/icons/aadhaar.png'
                            },
                            {

                                label: 'Voter Id Card',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Driving license',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Passport',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Others',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]

                    },
                    {
                        name: 'addressproof ',
                        label: 'Address Proof',
                        data: [
                            {
                                label: 'Telephone bill',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Electricity bill',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Property tax',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Aadhaar card',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Voter Id Card ',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Driving license',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'Passport',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'udyamregistration',
                        label: 'Udyam Registration',
                        data: [
                            {
                                label: 'Udyam Registration',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'bankstatement',
                        label: 'Bank Statement',
                        data: [
                            {
                                label: 'Bank Statement',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },

                ],
                'Partnership': [
                    {
                        name: 'panofthefirm',
                        label: 'PAN of the Firm',
                        data: [
                            {
                                label: 'PAN of the Firm',
                                icon: 'assets/icons/pan.png'
                            }
                        ]

                    },
                    {
                        name: 'Partners KYC ',
                        label: 'Partners KYC',
                        data: [
                            {
                                label: 'KYC Documents',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'udyamregistration',
                        label: 'Udyam Registration',
                        data: [
                            {
                                label: 'Udyam Registration',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'Consent froms',
                        label: 'Consent froms',
                        data: [
                            {
                                label: 'Consent froms',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'Udyam Aadhar Memorandum',
                        label: 'Udyam Aadhar Memorandum',
                        data: [
                            {
                                label: 'Udyam Aadhar Memorandum',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'GST Registration',
                        label: 'GST Registration',
                        data: [
                            {
                                label: 'GST Registration',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'GST Returns',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'Promotores/Directors Shareholding',
                        label: 'Promotores/Directors Shareholding',
                        data: [
                            {
                                label: 'Shareholding Documents',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'Bank statement',
                        label: 'Bank statement',
                        data: [
                            {
                                label: 'Bank statement',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },


                ],
                'Public Limited': [
                    {
                        name: 'PAN',
                        label: 'PAN',
                        data: [
                            {
                                label: 'PAN Card',
                                icon: 'assets/icons/pan.png'
                            }
                        ]

                    },
                    {
                        name: 'Udyam Aadhar Memorandum ',
                        label: 'Udyam Aadhar Memorandum',
                        data: [
                            {
                                label: 'Udyam Aadhar Memorandum',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'GST Registration',
                        label: 'GST Registration',
                        data: [
                            {
                                label: 'GST Registration',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'GST Returns',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'bankstatement',
                        label: 'Bank Statement',
                        data: [
                            {
                                label: 'Bank Statement',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }, {
                        displayType: 'accordion',
                        name: 'Promotores/Directors Shareholding',
                        label: 'Promotores/Directors Shareholding',
                        data: [
                            {
                                label: 'Shareholding Documents',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }, {
                        displayType: 'accordion',
                        name: 'Bureau to be checked for Entity',
                        label: 'Bureau to be checked for Entity',
                        data: [
                            {
                                label: 'Bureau to be checked for Entity',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }

                ],
                'Private Limited': [
                    {
                        name: 'PAN',
                        label: 'PAN',
                        data: [
                            {
                                label: 'Pan Card',
                                icon: 'assets/icons/pan.png'
                            }
                        ]

                    },
                    {
                        name: 'Udyam Aadhar Memorandum ',
                        label: 'Udyam Aadhar Memorandum',
                        data: [
                            {
                                label: 'Udyam Aadhar Memorandum',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'GST Registration',
                        label: 'GST Registration',
                        data: [
                            {
                                label: 'GST Registration',
                                icon: 'assets/icons/file_black.png'
                            },
                            {
                                label: 'GST Returns',
                                icon: 'assets/icons/file_black.png'
                            },
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'bankstatement',
                        label: 'Bank Statement',
                        data: [
                            {
                                label: 'Bank Statement',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }, {
                        displayType: 'accordion',
                        name: 'Promotores/Directors Shareholding',
                        label: 'Promotores/Directors Shareholding',
                        data: [
                            {
                                label: 'Shareholding Documents',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }, {
                        displayType: 'accordion',
                        name: 'Bureau to be checked for Entity',
                        label: 'Bureau to be checked for Entity',
                        data: [
                            {
                                label: 'Bureau to be checked for Entity',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }

                ],
                'Limited Liability Partnership': [
                    {
                        name: 'LLP PAN',
                        label: 'LLP PAN',
                        data: [
                            {
                                label: 'LLP PAN',
                                icon: 'assets/icons/pan.png'
                            }
                        ]

                    },
                    {
                        name: 'Udyam Aadhar Memorandum ',
                        label: 'Udyam Aadhar Memorandum',
                        data: [
                            {
                                label: 'Udyam Aadhar Memorandum',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'GST registration',
                        label: 'GST registration',
                        data: [
                            {
                                label: 'GST Returns',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'Promotores/Directors Shareholding',
                        label: 'Promotores/Directors Shareholding',
                        data: [
                            {
                                label: 'Shareholding Documents',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },
                    {
                        displayType: 'accordion',
                        name: 'Bank statement',
                        label: 'Bank statement',
                        data: [
                            {
                                label: 'Bank statement',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    }, {
                        displayType: 'accordion',
                        name: 'Bureau to be checked for Entity',
                        label: 'Bureau to be checked for Entity',
                        data: [
                            {
                                label: 'Bureau to be checked for Entity',
                                icon: 'assets/icons/file_black.png'
                            }
                        ]
                    },

                ],
            }

        },
        {
            displayType: 'bulletPoints',
            name: 'charges',
            label: 'Charges',
            displayData: [
                'Processing Charges will be 1 % of Loan Amount or minimum Rs. 2500/-'
            ]
        },
        {
            displayType: 'emiCalculator',
            name: 'emiCalculator',
            label: 'EMI Calculator',
            LoanData: {
                interest: 8.25,
                minLoanAmount: 10000,
                maxLoanAmount: 1000000,
                minTenure: 1,
                maxTenure: 84
            }
        }
    ],
    };
    pageSectionConfig = {
        'MSMERE': {
            'individual': {
                "ACCOUNT_VERIFY": [
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "mandatory": false,
                        "isShow": false,
                        "className": "common-info mt-5 p-50",
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
                            "titleData": "Welcome !"
                        }
                    },
                    {
                        "validateSection": false,
                        "mandatory": false,
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Lets start the renewal of your loan.",
                        },
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "className": 'medium',
                        "mandatory": true,
                        "sectionContent": {
                            "options": { 'columnSize': 1 },
                            "isShow": true,
                            "fields": [
                                {

                                    "fieldDataType": "NUMBER",
                                    "Masking": true,
                                    "isMandatory": true,
                                    "fieldLabel": "Account Number",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 0,
                                    "maxLength": 999999999999999,
                                    "error": null,
                                    "value": null,
                                    "dataMasking":true,
                                    "validationJson": {
                                        "property": {
                                            "isMandatory": { "if": [{ "==": [{ "var": "cifId" }, null] }, true, false] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "",
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
                                    "isAccountNumber": true,
                                    "orSectionTop": true
                                },
                                // {
                                //     "fieldLabel": "OR",
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "groupName": null,
                                //     "groupIndex": null,
                                //     "showField": true,
                                //     "orSection": true
                                // },
                                // {

                                //     "fieldDataType": "NUMBER",
                                //     "Masking": true,
                                //     "isMandatory": false,
                                //     "fieldLabel": "CIF Id",
                                //     "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                //     "minLength": 0,
                                //     "maxLength": 999999999999999,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson":{
                                //         "property": {
                                //             "isMandatory": { "if": [{ "==": [{ "var": "cifId" }, null] }, false, true] }
                                //         }
                                //     },
                                //     "rulesFor": null,
                                //     "regex": "",
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "placeholderText": "Enter 15 digit Account Number",
                                //     "fieldName": "CifId",
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "groupName": null,
                                //     "groupIndex": null,
                                //     "showField": true,
                                //     "isAccountNumber": true
                                // },
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
                                        "optionKey": "Yes",
                                        "optionName": "Yes",
                                        "optionValue": "Yes"
                                      },
                                      {
                                        "optionKey": "No",
                                        "optionName": "No",
                                        "optionValue": "No"
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
                            ],
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        }
                    },
                    {
                        "validateSection": false,
                        "mandatory": false,
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
                        "sectionContent": {
                            "isShow": false,
                            "paragraphData": "You can enter Operative Account Number",
                        },
                    },
                    {
                        "componentType": "CONSENT",
                        "className": 'mb-20 x-large',
                        "validateSection": true,
                        "mandatory": true,
                        "sectionContent": {
                            "isShow": true,
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
                            }
                        }
                    },
                    {
                        'componentType': 'OTP',
                        "validateSection": false,
                        "mandatory": false,
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
                                'notificationType': 'COMMON_OTP_TWO',
                                'loanProduct': null,
                                'createBorrower': true,
                                'generateOtp': true,
                            },
                            "isShow": false,
                        }
                    },
                ],
                "CUSTOMER_TYPE": [
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
                                "url": '/basicinfo/mobile-verify?resumeJourney=true'
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
                        "mandatory": false,
                        "className": 'common-title mt-5',
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
                        "className": 'mt-10 medium',
                        "sectionContent": {
                            "options": { 'columnSize': 1 },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": 'BORROWER_PROFILE_VARIABLE5',
                                    "fieldLabel": "Constitution",
                                    "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": { default: 'Individual' },
                                    "rulesFor": null,
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
                                    "fieldDataType": "BUTTON_TOGGLE",
                                    "otpType": 'PHONE', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                                    "isMandatory": true,
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
                                "validationJson": null,
                                "rulesFor": null,
                                "regex": "^[1-9][0-9]{9}$",
                                "countryCode": "+91",
                                "regexErrorMessage": "Please enter a valid Mobile Number.",
                                "rowNo": null,
                                "dataMasking":true,
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
                "EKYC_VERIFY": [{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "className": 'display-flex mb-5',
                    "sectionContent": {
                        "titleData": "KYC Aadhaar Verification",
                        "isShow": true,
                        "endContent": [{
                            "componentType": 'ICON',
                            "className": 'ml-10',
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": '/assets/icons/aadhaar-colored.png'
                            }
                        }]
                    }
                },
                {
                    "componentType": "FORM",
                    "validateSection": true,
                    "className": 'mt-5',
                    "sectionContent": {
                        "options": { 'columnSize': 1,'mapSupplyData': true,'mapAndDisable': true },
                        "isShow": true,
                        "fields": [
                            {
                                "fieldDataType": "AADHAR",
                                "isMandatory": true,
                                "fieldLabel": "Enter Your Aadhaar Number",
                                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": null,
                                "rulesFor": null,
                                "regex": "^[0-9]{12}$",
                                "regexErrorMessage": "Only numbers are allowed.",
                                "rowNo": null,
                                "columnNo": null,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "identityNumberOne",
                                "labelInfo": null,
                                "showLabel": true,
                                "Masking": true,
                                "groupName": null,
                                "groupIndex": null,
                                "isPreview": true,
                                "showField": true,
                                "aadhaarNumberFirstMask": true,
                                "aadhaarNumberSecondMask": true,
                                "aadhaarNumberThirdMask": false
                            },
                        ],
                        validityEmitter: new Subject<void>(),
                        formValueEmitter: new Subject<void>()
                    }
                },
                {
                    "componentType": "CONSENT",
                    "validateSection": true,
                    "className": "mt15 consent-text",
                    "sectionContent": {
                        "isShow": true,
                        "config": {
                            "options": [{
                                "consentType": "APIFETCH",  //STATIC,APIFETCH
                                "consentCode": "AADHAR_CONSENT_MSME",
                                "submitConsentCodes":['AADHAR_CONSENT_MSME'],
                                "isMultiLabel": true,
                                label: null,
                                "className": "check-container",
                                "completed": null,
                            },

                            ]
                        }
                    }
                },
                {
                    'componentType': 'OTP',
                    "validateSection": false,
                    "className": "w-45",
                    "sectionContent": {
                        "fields": {
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
                            "infoText": "A 6 digit OTP code has been sent to aadhaar registered mobile number",
                        },
                        "options": {
                            'value': null,
                            'notificationType': 'COMMON_OTP_TWO',
                            'loanProduct': null,
                            'createBorrower': true,
                            'generateOtp': true,
                            'requestFor': 'BORROWER'
                        }, "isShow": false,

                    }
                }
                ],
                "UDYAM_VERIFY": [
                    {
                        "componentType": "TITLE",
                        "classNames": "mb-1",
                        "validateSection": false,
                        "mandatory": false,
                        "sectionContent": {
                            "titleData": "Udyam Registration Verification",
                            "isShow": true
                        }
                    }, {
                        "componentType": "FORM",
                        "className": "medium mt-10",
                        "validateSection": true,
                        "mandatory": true,
                        "sectionContent": {
                            "options": { 'columnSize': 1,'mapSupplyData': true,'mapAndDisable': true  },
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
                                "otpType": 'UDYAM', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
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
                                // 'notificationType': 'COMMON_OTP_TWO',
                                'loanProduct': null,
                                'createBorrower': true,
                                'generateOtp': true,
                            },"isShow": false,
                        }
                    }
                ],
                "MORE_INFO": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "sectionContent": {
                          "titleData": "Credit Facility Details",
                          "isShow": true
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
                                "sendOptionKeyForDropDowns":true,
                                "autoVerifyMappedFields":true
                            },
                            "isShow": true,
                            "fields": [
                                // {
                                //     "fieldDataType": "BOOLEAN",
                                //     "isMandatory": false,
                                //     "fieldLabel": "Renew limits with Enhancement",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson": {
                                //       "default": true
                                //     },
                                //     "rulesFor": null,
                                //     "regex": null,
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "fieldName": "differenceCommunicationAddress",
                                //     "labelInfo": null,
                                //     "showLabel": false,
                                //     "groupName": "Please verify your credit facility details",
                                //     "groupIndex": 1,
                                //     "showField": true
                                //   },
                                {
                                    "fieldDataType": "TABLE",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "fieldLabel": "Financial Details",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "addTableFields": true,
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": [],
                                    "rulesFor": [],
                                    "regex": null,
                                    "addStatus": false,
                                    "isTableFooter": false,
                                    "tableFooterData": { "fieldLabel": 'Total Assets Secured', "value": 4, "mappingKey": "eligibleAmount", "fieldName": "facilityDetailsNumberVariable20", "valuePrefix": "₹" },
                                    "tableFooterActions": [{
                                        "label": "Add Term Loan",
                                        "code": "TL",
                                        "actionType":"POPUP_ACTION",
                                        "isDisplay": true,
                                        "popupConfig": [{
                                            "componentType": "FORM",
                                            "validateSection": true,
                                            "sectionContent": {
                                                "options": {
                                                    "columnSize": 3,
                                                    "mapSupplyData": true,
                                                    "mapAndDisable": true
                                                },
                                                "isShow": true,
                                                "fields": [
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "commonpropertyType": "FACILITY_DETAIL_VARIABLE_19",
                                                        "fieldLabel": "Purpose of Loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsTextVariable2"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Purpose of Loan",
                                                        "fieldName": "facilityDetailsTextVariable1",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TEXT",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Details of purpose of loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "mandatory": {
                                                                "if": [{ "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"] }, true, false]
                                                            },
                                                            "showField": {
                                                                "if": [
                                                                    {
                                                                        "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "facilityDetailsTextVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TABLE",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "fieldLabel": "Term Loan",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "addTableFields": true,
                                                        "minLength": null,
                                                        "maxLength": null,
                                                        "error": null,
                                                        "value": [],
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsNumberVariable3"],
                                                        "regex": null,
                                                        "addStatus": false,
                                                        "isTableFooter": true,
                                                        "tableFooterData": { "fieldLabel": 'Total Project Cost', "value": 0, "mappingKey": "PID4", "fieldName": "facilityDetailsNumberVariable1", "valuePrefix": "₹" },
                                                        "emitedValue": [],
                                                        "showAction": true,
                                                        "addMore": true,
                                                        "tableFields": [
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Details of item to be purchased",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID1",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Name of Supplier",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID2",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": false,
                                                                "fieldLabel": "Supplier's Address",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID3",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "NUMBER",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Item Cost (in Rs.)",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": 0,
                                                                "maxLength": 10000000,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "requestedLimit"],
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID4",
                                                                "numberOnly": true,
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            }
                                                        ],
                                                        "tableRowActions": [{
                                                            "actionCode": "ACCEPT",
                                                            "icon": "check",
                                                            "className": "clr-green",
                                                            "isDisplay": true,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "EDIT",
                                                            "icon": "edit",
                                                            "className": "clr-blue",
                                                            "isDisplay": false,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "DELETE",
                                                            "icon": "delete",
                                                            "className": "clr-red",
                                                            "isDisplay": true
                                                        }],
                                                        "validateRowBeforeAdd": true,
                                                        "showSerialNo": true,
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "facilityDetailsTableVariable1",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true
                    
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested loan amount for TL",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": {
                                                            "validation": {"if":[{"<":[{"var":"requestedLimit"},10000]},false,{"<=":[{"var":"facilityDetailsTableVariable1"},0]},true,{"<":[{"var":"facilityDetailsTableVariable1"},{"var":"requestedLimit"}]},false,true]}, 
                                                            "validationError": {"if":[{"<":[{"var":"requestedLimit"},10000]},"Requested amount should not be less than Rs. 10,000",{"<=":[{"var":"facilityDetailsTableVariable1"},0]},true,{"<":[{"var":"facilityDetailsTableVariable1"},{"var":"requestedLimit"}]},"Requested loan Amount cannot be greater than Project Cost.",true]},
                                                        },
                                                        "rulesFor": ["facilityDetailsNumberVariable3", "REQUESTED_LIMIT", "facilityDetailsNumberVariable4"],
                                                        "regex": "^[1-9]+[0-9]*00$",
                                                        "regexErrorMessage": "Requested loan amount for TL should be in multiples of 100",
                                                        "options": [],
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Requested loan amount for TL",
                                                        "fieldName": "requestedLimit",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested tenure in month(s)",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsNumberVariable6"],
                                                        "regex": "^([1-9]|[1234567]\\d|8[0-4])$",
                                                        "options": [],
                                                        "regexErrorMessage": "Loan Period should be between 1 - 84 months.",
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Requested tenure in month(s)",
                                                        "fieldName": "tenure",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "DATE",
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested first EMI date",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "minDate": [null,null,null,true,null,1,null],
                                                        "maxDate": [null,null,null,true,null,3,null],
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": {
                                                          "default": {
                                                            "addDate": [{ "currentDate": [] }, 1, "MONTHS"]
                                                          }
                                                        },
                                                        "rulesFor": [
                                                          "facilityDetailsNumberVariable5"
                                                        ],
                                                        "regex": null,
                                                        "regexErrorMessage": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "placeholderText": "Enter Requested first EMI date",
                                                        "fieldName": "facilityDetailsDateVariable1",
                                                        "labelInfo": null,
                                                        "showLabel": true,
                                                        "showField": true
                                                      },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Projceted Sales/Turnover",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": null,
                                                        "rulesFor": null,
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Projceted Sales/Turnover",
                                                        "fieldName": "facilityDetailsNumberVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Margin/Borrower contribution",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "calculation": {
                                                                "-": [{ "var": "facilityDetailsTableVariable1" }, { "var": "requestedLimit" }]
                                                            }
                                                        },
                                                        "rulesFor": ["facilityDetailsNumberVariable4"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Margin/Borrower contribution",
                                                        "fieldName": "facilityDetailsNumberVariable3",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "fieldLabel": "Margin/Borrower contribution percentage",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "calculation": { "*": [100, { "/": [{ "var": "facilityDetailsNumberVariable3" }, { "var": "facilityDetailsTableVariable1" }] }] }, "validation": { "<": [14.99, { "var": "facilityDetailsNumberVariable4" }] }, "validationError": "Margin should be greater than 15%"
                                                        },
                                                        "rulesFor": null,
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Margin/Borrower contribution percentage",
                                                        "fieldName": "facilityDetailsNumberVariable4",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "isMandatory": true,
                                                        "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE46",
                                                        "fieldLabel": "Guarantee Cover Type",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "validationJson": null,
                                                        "regexErrorMessage": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "placeholderText": "Guarantee Cover Type",
                                                        "fieldName": "facilityDetailsTextVariable13",
                                                        "labelInfo": null,
                                                        "showLabel": true,
                                                        "showField": true
                                                    },
                                                    {
                                                        "regex": "^[0-3]\\d*$",
                                                        "regexMessage": "Moratorium Period should not be more than 3 months.",
                                                        "maxLength": 1,
                                                        "minLength": null,
                                                        "sortIndex": null,
                                                        "isMasking": false,
                                                        "isMandatory": false,
                                                        "fieldDataType": "NUMBER",
                                                        "rulesFor": [
                                                            "facilityDetailsNumberVariable6"
                                                        ],
                                                        "dependentField": null,
                                                        "fieldAccessModifier": "HIDDEN",
                                                        "fieldName": "facilityDetailsNumberVariable5",
                                                        "regexForJS": "^[0-3]\\d*$",
                                                        "formula": null,
                                                        "isVerified": false,
                                                        "isPhysicallyVerified": false,
                                                        "validationJson": { "calanderMonthCalculation": [{ "var": "facilityDetailsDateVariable1" }] },
                                                        "fieldLabel": "Moratorium Period (For Months)",
                                                        "documentCategoryFields": null,
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "",
                                                        "groupIndex": 5,
                                                        "showField": false
                                                    },
                                                    {
                                                        "regex": null,
                                                        "regexMessage": null,
                                                        "maxLength": null,
                                                        "minLength": null,
                                                        "sortIndex": null,
                                                        "isMasking": false,
                                                        "isMandatory": false,
                                                        "fieldDataType": "NUMBER",
                                                        "onboardingVerificationType": null,
                                                        "documentCategory": null,
                                                        "rulesFor": null,
                                                        "dependentField": null,
                                                        "fieldAccessModifier": "HIDDEN",
                                                        "fieldName": "facilityDetailsNumberVariable6",
                                                        "regexForJS": null,
                                                        "formula": null,
                                                        "validationJson": { "default": { "-": [{ "var": "tenure" }, { "var": "facilityDetailsNumberVariable5" }] }, "calculation": { "-": [{ "var": "tenure" }, { "var": "facilityDetailsNumberVariable5" }] } },
                                                        "fieldLabel": "Repayment Period (in Months)",
                                                        "documentCategoryFields": null,
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "",
                                                        "groupIndex": 5,
                                                        "showField": false
                                                    },
                                                   
                                                ]
                                            }
                                        }],
                                        "submitFlow": 
                                            {
                                                "dataFeedCloud": ['product', 'formValue', "capturedData"],
                                                "params": [
                                                    [
                                                        "loanFacilityUuid",
                                                        "RULE_OUTPUT",
                                                        {
                                                            "getObjectKeyValue": [
                                                                {
                                                                    "getArrayIndexValue": [
                                                                        {
                                                                            "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                        },
                                                                        {
                                                                            "if":[
                                                                                {
                                                                                  "==": [
                                                                                    {
                                                                                      "getObjectKeyValue": [
                                                                                        {
                                                                                          "getArrayIndexValue": [
                                                                                            {
                                                                                              "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                                            },
                                                                                            0
                                                                                          ]
                                                                                        },
                                                                                        "code"
                                                                                      ]
                                                                                    },
                                                                                    "TL"
                                                                                  ]
                                                                                },
                                                                                0,
                                                                                1
                                                                            ]
                                                                        }
                                                                        
                                                                    ]
                                                                },
                                                                "uuid"
                                                            ]
                                                        }
                                                    ],
                                                'loanUuid', 'access_token', ["isOnboarding", "STATIC", false], "loanPurposeUuid", ["loanFacilityName", "STATIC", "Term Loan"], ["applicationSource", "STATIC", "WEB_JOURNEY"], "facilityDetailsTableVariable1", "facilityDetailsNumberVariable1", "requestedLimit", "facilityDetailsNumberVariable3", "facilityDetailsNumberVariable4", ["facilityType", "STATIC", "TERM_LOAN"],
                                                "facilityDetailsTextVariable1",
                                                "facilityDetailsTextVariable2",
                                                "facilityDetailsNumberVariable2",
                                                "tenure",
                                                "facilityDetailsNumberVariable5",
                                                "facilityDetailsNumberVariable6",
                                                "facilityDetailsTextVariable13",
                                                "facilityDetailsDateVariable1"]
                                            }
                                    },
                                    {
                                        "label": "Add Cash Credit",
                                        "code": "CC",
                                        "actionType":"POPUP_ACTION",
                                        "isDisplay": true,
                                        "popupConfig": [{
                                            "componentType": "FORM",
                                            "validateSection": true,
                                            "sectionContent": {
                                                "options": {
                                                    "columnSize": 3,
                                                    "mapSupplyData": true,
                                                    "mapAndDisable": true
                                                },
                                                "isShow": true,
                                                "fields": [
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "commonpropertyType": "LOAN_APPLICATION_VARIABLE13",
                                                        "fieldLabel": "Purpose of Loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "rulesFor": ["facilityDetailsTextVariable2"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Purpose of Loan",
                                                        "fieldName": "facilityDetailsTextVariable1",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 1,
                                                        "showField": false,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TEXT",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Details of purpose of loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "mandatory": {
                                                                "if": [{ "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"] }, false, true]
                                                            },
                                                            "showField": {
                                                                "if": [
                                                                    {
                                                                        "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "facilityDetailsTextVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Net/Projected Sale",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 0,
                                                        "maxLength": 2500000000,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": null,
                                                        "rulesFor": ["requestedLimit"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": "Amount should be upto  2500000000.",
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Net/Projected Sale",
                                                        "fieldName": "facilityDetailsNumberVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TABLE",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "fieldLabel": "Cash Credit",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "addTableFields": true,
                                                        "minLength": null,
                                                        "maxLength": null,
                                                        "error": null,
                                                        "value": [],
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsNumberVariable3", "requestedLimit"],
                                                        "regex": null,
                                                        "addStatus": false,
                                                        "isTableFooter": true,
                                                        "tableFooterData": { "fieldLabel": 'Total Assets Secured', "value": 0, "mappingKey": "eligibleAmount", "fieldName": "facilityDetailsNumberVariable20", "valuePrefix": "₹" },
                                                        "emitedValue": [],
                                                        "showAction": true,
                                                        "addMore": true,
                                                        "tableRowActions": [{
                                                            "actionCode": "ACCEPT",
                                                            "icon": "check",
                                                            "className": "clr-green",
                                                            "isDisplay": true,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "EDIT",
                                                            "icon": "edit",
                                                            "className": "clr-blue",
                                                            "isDisplay": false,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "DELETE",
                                                            "icon": "delete",
                                                            "className": "clr-red",
                                                            "isDisplay": true
                                                        }],
                                                        "validateRowBeforeAdd": true,
                                                        "showSerialNo": true,
                                                        "tableFields": [
                                                            {
                                                                "fieldDataType": "DROPDOWN",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Details of Security Provided",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": ["eligibleAmount"],
                                                                "regex": null,
                                                                "options": this.commonProperty_static.ASSETS_PURCHASED,
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "securityType",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Security Description",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "description",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "NUMBER",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Value",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": 0,
                                                                "maxLength": 10000000,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": ["eligibleAmount"],
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "valuationAmount",
                                                                "numberOnly": true,
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "NUMBER",
                                                                "dependentField": null,
                                                                "isMandatory": false,
                                                                "fieldLabel": "Total Eligible Amount",
                                                                "fieldAccessModifier": "DISABLED",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": {
                                                                    "calculation": {
                                                                        "-": [
                                                                            {
                                                                                "var": "valuationAmount"
                                                                            },
                                                                            {
                                                                                "*": [
                                                                                    {
                                                                                        "/": [
                                                                                            {
                                                                                                "var": "valuationAmount"
                                                                                            },
                                                                                            100
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "if": [
                                                                                            {
                                                                                                "==": [
                                                                                                    {
                                                                                                        "var": "securityType"
                                                                                                    },
                                                                                                    "Stock"
                                                                                                ]
                                                                                            },
                                                                                            25,
                                                                                            40
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "rulesFor": [],
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "eligibleAmount",
                                                                "numberOnly": true,
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                    
                                                        ],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "loanApplicationTableVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true
                    
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested loan amount for CC",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": {
                                                            "validation": {"if":[{"<":[{"var":"requestedLimit"},10000]},false,{">":[{"var":"requestedLimit"},{"min":[{"var":"facilityDetailsNumberVariable2"},{"var":"loanApplicationTableVariable2"}]}]},false,true]},
                                                            "validationError": {"if":[{"<":[{"var":"requestedLimit"},10000]},"Requested amount should not be less than Rs. 10,000",{">":[{"var":"requestedLimit"},{"min":[{"var":"facilityDetailsNumberVariable2"},{"var":"loanApplicationTableVariable2"}]}]},"Requested loan amount for CC should be less than Net/Projected Sale or Total Assets Secured",null]}
                                                        },
                                                        "rulesFor":null,
                                                        "regex": "^[1-9]+[0-9]*00$",
                                                        "regexErrorMessage": "Requested loan amount for CC should be in multiples of 100",
                                                        "options": [],
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Requested loan amount for CC",
                                                        "fieldName": "requestedLimit",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Investment in Plant and Machinery",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": null,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": null,
                                                        "rulesFor": null,
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Investment in Plant and Machinery",
                                                        "fieldName": "facilityDetailsTextVariable20",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "numberOnly": true,
                                                        "showField": true
                                                    },
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "isMandatory": true,
                                                        "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE46",
                                                        "fieldLabel": "Guarantee Cover Type",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "validationJson": null,
                                                        "regexErrorMessage": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "placeholderText": "Guarantee Cover Type",
                                                        "fieldName": "facilityDetailsTextVariable13",
                                                        "labelInfo": null,
                                                        "showLabel": true,
                                                        "showField": true
                                                    }
                                                ]
                                            }
                                        }],
                                        "submitFlow":{
                                            "dataFeedCloud": ['product', 'formValue', "capturedData"],
                                            "params": [
                                                [
                                                    "loanFacilityUuid",
                                                    "RULE_OUTPUT",
                                                    {
                                                        "getObjectKeyValue": [
                                                            {
                                                                "getArrayIndexValue": [
                                                                    {
                                                                        "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                    },
                                                                    {
                                                                        "if":[
                                                                        {
                                                                          "==": [
                                                                            {
                                                                              "getObjectKeyValue": [
                                                                                {
                                                                                  "getArrayIndexValue": [
                                                                                    {
                                                                                      "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                                    },
                                                                                    0
                                                                                  ]
                                                                                },
                                                                                "code"
                                                                              ]
                                                                            },
                                                                            "CC"
                                                                          ]
                                                                        },
                                                                        0,
                                                                        1
                                                                    ]
                                                                }   
                                                                ]
                                                            },
                                                            "uuid"
                                                        ]
                                                    }
                                                ],
                                                'loanUuid', 'access_token', ["isOnboarding", "STATIC", false], "loanPurposeUuid", ["loanFacilityName", "STATIC", "Cash Credit"], ["applicationSource", "STATIC", "WEB_JOURNEY"], ["facilityDetailsTextVariable1","STATIC","To meet day to day business requirement"], "facilityDetailsNumberVariable2", "requestedLimit", "facilityDetailsTextVariable2", "facilityDetailsTextVariable13", "facilityDetailsTextVariable20",["facilityType", "STATIC", "CASH_CREDIT"]]
                                        },

                                        
                                    }],
                                    "emitedValue": [],
                                    "showAction": true,
                                    "addMoreForTl": true,
                                    "addMoreForCc": true,
                                    "addMoreMsme": true,
                                    "tableRowActions": [{
                                        "actionCode": "ACCEPT",
                                        "icon": "check",
                                        "className": "clr-green",
                                        "isDisplay": true,
                                        // "submitFlow":[]
                                    },
                                    {
                                        "actionCode": "EDIT",
                                        "icon": "edit",
                                        "className": "clr-blue",
                                        "isDisplay": false,
                                        // "submitFlow":[]
                                    },
                                    {
                                        "actionCode": "DELETE",
                                        "icon": "delete",
                                        "className": "clr-red",
                                        "isDisplay": true
                                    }],
                                    "validateRowBeforeAdd": false,
                                    "showSerialNo": true,
                                    "tableFields": [
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Account Type",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": [],
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "loanFacilityName",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Account Number",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "dataMasking":true,
                                            "maxLength": null,
                                            "error": null,
                                            "value": [],
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "facilityDetailsTextVariable12",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Current Limit",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "existingLimit",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Outstanding Balance",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": "",
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "facilityDetailsNumberVariable24",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Requested Amount",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": {
                                                "validation":{"if":[{"!=":[{"var":"loanFacilityName"},"Cash Credit"]},true,{">=":[{"var":"requestedLimit"},{"var":"fetchEligibilityDetails.output.assessmentEligibility.ccExistingLimit"}]},true,false]},
                                                "validationError": "Requested amount shall not be lower than existing Cash Credit limit"
                                            },
                                            "rulesFor": "",
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "requestedLimit",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        }
                                       
                                    ],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "facilityDetailsListTable",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "",
                                    "groupIndex": 2,
                                    "showField": true

                                }
                            ],
     
                            
                        }
                    },
                ],
                "CREDIT_FACILITY": [
                    {
                        "componentType": "FORM",
                        "validateSection": false,
                        "sectionContent": {
                            "options": {
                                "columnSize": 3,
                                "mapSupplyData": true,
                                "mapAndDisable": true
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "fieldLabel": "Renew limits with Enhancement",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "default": true
                                    },
                                    // "rulesFor": [
                                    //     "addressOne"
                                    // ],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "differenceCommunicationAddress",
                                    "showLabel": false,
                                    "groupName": "",
                                    "groupIndex": 1
                                },
                                {
                                    "fieldDataType": "TABLE",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "fieldLabel": "Credit Facility Details",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "addTableFields": true,
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": [],
                                    // "validationJson": {
                                    //     "showField": {
                                    //         "if": [{ "or": [{ "==": [{ "var": "loanApplicationTextVariable14" }, "Term Loan"] }, { "==": [{ "var": 'loanApplicationTextVariable14' }, "Both"] }] }]
                                    //     }
                                    // },
                                    "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "requestedLimit"],
                                    "regex": null,
                                    "addStatus": false,
                                    "isTableFooter": true,
                                    // "tableFooterData": { "fieldLabel": 'Total Project Cost', "value": 0, "mappingKey": "PID4", "fieldName": "facilityDetailsNumberVariable1", "valuePrefix": "₹" },
                                    "emitedValue": [],
                                    "showAction": false,
                                    "addMore": true,
                                    "tableFields": [
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Account Type",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID1",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Account Number",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID2",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Current Limit",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID3",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Outstanding Balance",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "loanApplicationNumberVariable3"],
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID4",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Proposed Limit",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "loanApplicationNumberVariable3"],
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID4",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        }
                                    ],
                                    
                                    "validateRowBeforeAdd": true,
                                    "showSerialNo": true,
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "facilityDetailsTableVariable1",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupIndex": 3,
                                    "showField": true

                                }],
     
                            
                        }
                    },
                    // {
                    //     "componentType":"TABLE",
                    //     "validateSection":false,
                    //     "className":"mb-20 keyfact-table",
                    //     "sectionContent":{
                    //         "isShow":true,
                    //         "config":{
                    //             "showRecordActions": false,
                    //             "showSerialNo": false,
                    //             "showFooterAction": false,
                    //             "showFooterCalculations": false,
                    //             "showHeaders": true,
                    //             "title": "Financial Details",
                    //             "footerActionLabel": "+ Add New Borrower",
                    //             "recordActions": [
                    //                 {
                    //                     "actionCode": "EDIT",
                    //                     "icon": "../../../../assets/icons/edit.png",
                    //                     "name": "Edit"
                    //                 }
                    //             ],
                    //             "headers": [
                    //                 {
                    //                     "fieldLabel": "S.No",
                    //                     "fieldName": "sno"
                    //                 },
                    //                 {
                    //                     "fieldLabel": "Account Type",
                    //                     "fieldName": "title"
                    //                 },
                    //                 {
                    //                     "fieldLabel": "Account Number",
                    //                     "fieldName": "data"
                    //                 },
                    //                 {
                    //                     "fieldLabel": "Current Limit",
                    //                     "fieldName": "data"
                    //                 }
                    //             ],
                    //             "data": [
                    //                 {
                    //                     "sno": "1.",
                    //                     "title": "Total Sales",
                    //                     "data": {"var":"$scope.fetchRepaymentSchedule.object.principal"}
                    //                 },
                    //                 {
                    //                     "sno": "2.",
                    //                     "title": "Net Profit",
                    //                     "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                    //                 },

                    //             ]
                    //         },
                 
                            
                    //     }
                    // },
                ],
                //start of borrower information validation
                "EMPLOYMENT_DETAILS": [
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "columnSize": 3,
                                "mapSupplyData": true,
                                "mapAndDisable": true
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType":"TEXT",
                                    "dependentField":null,
                                    "isMandatory":false,
                                    "fieldLabel": "Name of the Account",
                                    "fieldAccessModifier":"EDITABLE",
                                    "minLength":null,
                                    "maxLength":15,
                                    "error":null,
                                    "value":"",
                                    "validationJson":"",
                                    "rulesFor":null,
                                    "regex":null,
                                    "options":[],
                                    "regexErrorMessage":null,
                                    "errorIconPath":null,
                                    "rowNo":null,
                                    "columnNo":null,
                                    "placeholderText":"",
                                    "fieldName":"accountName",
                                    "showLabel":true,
                                    "labelInfo":null,
                                    "groupName":"Business Details",
                                    "groupIndex":1,
                                    "showField":true
                                },   
                                {
                                    "fieldDataType": "TEXT",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_PROFILE_VARIABLE5",
                                    "fieldLabel": "Udyam Registration Number",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": null,
                                    "maxLength": 15,
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
                                    "fieldName": "textVariable6",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Business Details",
                                    "groupIndex": 1,
                                    "showField": true
                                },
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
                                    "validationJson": { "default": "Individual" },
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
                                    "groupName": "Business Details",
                                    "groupIndex": 1,
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
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "placeholderText": "Education Qualification",
                                    "fieldName": "educationType",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                  {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_DETAIL_VARIABLE77",
                                    "fieldLabel": "Experience in Line Of Activity",
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
                                    "placeholderText": "Select Experience in Line Of Activity",
                                    "fieldName": "borrowerDetailTextVariable77",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                  },{
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE47",
                                    "fieldLabel": "Occupation",
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
                                    "placeholderText": "Select Occupation",
                                    "fieldName": "textVariable47",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": "textVariable47",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE48",
                                    "fieldLabel": "Borrower Category",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "dependentField": { "if": [{ "==": [{ "var": "textVariable48" }, null] }, "textVariable47", null] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Select Borrower Category",
                                    "fieldName": "textVariable48",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": "textVariable48",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE49",
                                    "fieldLabel": "Purpose of Advance",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "dependentField": { "if": [{ "==": [{ "var": "textVariable49" }, null] }, "textVariable48", null] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Select Purpose of Advance",
                                    "fieldName": "textVariable49",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                    "fieldLabel": "Ownership Type",
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
                                    "placeholderText": "Select Ownership Type",
                                    "fieldName": "addressOneOwnershipType",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Business Address Details",
                                    "groupIndex": 3,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DATE",
                                    "isMandatory": true,
                                    "fieldLabel": "Occupied Since",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "minDate":null,
                                    "maxDate":[null,null,null,true],
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "Business Address Details",
                                    "groupIndex": 3,
                                    "placeholderText": "DD/MM/YYYY",
                                    "fieldName": "addressOneLivingSince",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                  {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                    "fieldLabel": "Ownership Type",
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
                                    "placeholderText": "Select Ownership Type",
                                    "fieldName": "communicationAddressOneOwnershipType",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Communication Address Details",
                                    "groupIndex": 4,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DATE",
                                    "isMandatory": true,
                                    "fieldLabel": "Occupied Since",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "minDate":null,
                                    "maxDate":[null,null,null,true],
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "Communication Address Details",
                                    "groupIndex": 4,
                                    "placeholderText": "DD/MM/YYYY",
                                    "fieldName": "communicationAddressOneLivingSince",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                //   {
                                //     "fieldDataType": "TABLE",
                                //     "dependentField": null,
                                //     "isMandatory": true,
                                //     "fieldLabel": "Assets",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "addTableFields": true,
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": [],
                                //     "validationJson": "",
                                //     "rulesFor": ["borrowerDetailTextVariable51"],
                                //     "regex": null,
                                //     "addStatus": false,
                                //     "isTableFooter": true,
                                //     "tableFooterData": { "fieldLabel": "Total Assets", "value": 0, "mappingKey": "ANW2", "fieldName": "borrowerDetailNumberVariable3", "valuePrefix": "₹" },
                                //     "emitedValue": [],
                                //     "showAction": true,
                                //     "addMore": true,
                                //     "tableRowActions": [{
                                //         "actionCode": "ACCEPT",
                                //         "icon": "check",
                                //         "className": "clr-green",
                                //         "isDisplay": true
                                //     },
                                //     {
                                //         "actionCode": "EDIT",
                                //         "icon": "edit",
                                //         "className": "clr-blue",
                                //         "isDisplay": false
                                //     },
                                //     {
                                //         "actionCode": "DELETE",
                                //         "icon": "delete",
                                //         "className": "clr-red",
                                //         "isDisplay": true
                                //     }],
                                //     "validateRowBeforeAdd": true,
                                //     "showSerialNo": true,
                                //     "tableFields": [
                                //         {
                                //             "fieldDataType": "TEXT",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Description",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": null,
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW1",
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         },
                                //         {
                                //             "fieldDataType": "NUMBER",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Amount ( in Rs.)",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": ["eligibleAmount"],
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW2",
                                //             "numberOnly": true,
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         }
                    
                                //     ],
                                //     "regexErrorMessage": null,
                                //     "errorIconPath": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "placeholderText": "",
                                //     "fieldName": "borrowerDetailTableVariable1",
                                //     "showLabel": true,
                                //     "labelInfo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "showField": false,
                                //     "showForYes": true
                                //   },
                                //   {
                                //     "fieldDataType": "TABLE",
                                //     "dependentField": null,
                                //     "isMandatory": true,
                                //     "fieldLabel": "Liabilities",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "addTableFields": true,
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": [],
                                //     "validationJson": "",
                                //     "rulesFor": ["borrowerDetailTextVariable51"],
                                //     "regex": null,
                                //     "addStatus": false,
                                //     "isTableFooter": true,
                                //     "tableFooterData": { "fieldLabel": "Total Liabilities", "value": 0, "mappingKey": "ANW2", "fieldName": "borrowerDetailNumberVariable4", "valuePrefix": "₹" },
                                //     "emitedValue": [],
                                //     "showAction": true,
                                //     "addMore": true,
                                //     "tableRowActions": [{
                                //         "actionCode": "ACCEPT",
                                //         "icon": "check",
                                //         "className": "clr-green",
                                //         "isDisplay": true
                                //     },
                                //     {
                                //         "actionCode": "EDIT",
                                //         "icon": "edit",
                                //         "className": "clr-blue",
                                //         "isDisplay": false
                                //     },
                                //     {
                                //         "actionCode": "DELETE",
                                //         "icon": "delete",
                                //         "className": "clr-red",
                                //         "isDisplay": true
                                //     }],
                                //     "validateRowBeforeAdd": true,
                                //     "showSerialNo": true,
                                //     "tableFields": [
                                //         {
                                //             "fieldDataType": "TEXT",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Description",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": null,
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW1",
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         },
                                //         {
                                //             "fieldDataType": "NUMBER",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Amount ( in Rs.)",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": ["eligibleAmount"],
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW2",
                                //             "numberOnly": true,
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         }
                    
                                //     ],
                                //     "regexErrorMessage": null,
                                //     "errorIconPath": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "placeholderText": "",
                                //     "fieldName": "borrowerDetailTableVariable3",
                                //     "showLabel": true,
                                //     "labelInfo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "showField": false,
                                //     "showForYes": true
                                //   },
                                //  {
                                //     "fieldDataType": "NUMBER",
                                //     "isMandatory": false,
                                //     "fieldLabel": "Networth",
                                //     "fieldAccessModifier": "READ_ONLY",
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson": {"default":{"-":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},
                                //         "calculation":{"-":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},
                                //         "validation": {"if":[{"<":[{"var":"borrowerDetailTableVariable1"},100000000]},{"if":[{">":[{"var":"borrowerDetailTextVariable51"},0]},{">=":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},false]},false]},
                                //         "validationError": {"if":[{"<":[{"var":"borrowerDetailTableVariable1"},100000000]},{"if":[{">":[{"var":"borrowerDetailTextVariable51"},0]},{">=":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},"Net worth can not be Negative"]},"Assets should be less than 10 Crore"]}
                                //     },
                                //     "rulesFor": "",
                                //     "regex": null,
                                //     "options": [],
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "placeholderText": "Networth",
                                //     "fieldName": "borrowerDetailTextVariable51",
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "showField": false,
                                //     "showForYes": true
                                //  },
                                //   {
                                //     "fieldDataType": "DROPDOWN",
                                //     "isMandatory": false,
                                //     "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE46",
                                //     "fieldLabel": "Guarantee Cover Type",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "minLength": 6,
                                //     "maxLength": 15,
                                //     "error": null,
                                //     "value": null,
                                //     "rulesFor": [],
                                //     "regex": null,
                                //     "options": [],
                                //     "validationJson": null,
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "placeholderText": "Guarantee Cover Type",
                                //     "fieldName": "textVariable46",
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "showField":true,
                                //     "showForYes": true
                                //   },
                                //   {
                                //     "fieldDataType": "DROPDOWN",
                                //     "dependentField": null,
                                //     "isMandatory": true,
                                //     "fieldLabel": "Gradation obtained by MSME unit",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "minLength": 6,
                                //     "maxLength": 15,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson": {
                                //       "mandatory": {
                                //         "if": [
                                //           {
                                //             "==": [
                                //               {
                                //                 "var": "textVariable37"
                                //               },
                                //               "No"
                                //             ]
                                //           },
                                //           false,
                                //           true
                                //         ]
                                //       },
                                //       "showField": {
                                //         "if": [
                                //           {
                                //             "==": [
                                //               {
                                //                 "var": "textVariable37"
                                //               },
                                //               "Yes"
                                //             ]
                                //           }
                                //         ]
                                //       }
                                //     },
                                //     "rulesFor": null,
                                //     "regex": null,
                                //     "options": this.commonProperty_static.MSME_UNIT,
                                //     "regexErrorMessage": null,
                                //     "errorIconPath": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "placeholderText": "Select MSME unit",
                                //     "fieldName": "textVariable38",
                                //     "showLabel": true,
                                //     "labelInfo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "showField": false,
                                //     "showForYes": true
                                //   }
                            ]
                        },
                        
                        
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
                            "titleData": "Supporting Documents",
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "mb-10 common-info",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please share document online or upload .pdf files less than 5 Mb each. All documents are mandatory."
                        }
                    }
                ],
                "KEY_FACT_DETAILS": [
                    {
                        "componentType": "GRID",
                        "validateSection": false,
                        "className": "display-flex j-c-sb a-i-c",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
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
                                    "componentType": "BUTTON",
                                    "validateSection": false,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Download Key Fact Statement",
                                        "actionId": "KEYFACT_DOWNLOAD",
                                        "className": "btn-orange",
                                        "isShow": true
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
                                        <span>`, { "var": "$scope.loanDetails.loanDetails.borrower" }, `</span>
                                        </div>
                                        <div class="display-flex flex-col">
                                            <label class="text-info">Home Branch Address</label>
                                            <span class="fw-bold f-15"> Bank of India `, { "var": "$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName" },
                                    ` Branch</span>
                                        <div>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value" },
                                    ` </span>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue" },
                                    ` </span>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue" },
                                    ` </span>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue" },
                                    ` </span>
                                        </div>
                                        </div>
                                        <div class="display-flex flex-col mb-20">
                                            <label class="text-info">Sanction Date</label>
                                            <span>`, { "var": "metaConfig.customData.todayDate" },
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
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mt-10 mb-20 keyfact-table",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.termLoanAmount" }
                                    },
                                    {
                                        "sno": "(ii)",
                                        "title": "Total Interest  charge during the entire tenure of the loan",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.payableInterest" }
                                    },
                                    {
                                        "sno": "(iii)",
                                        "title": "Other up-front charges, if any",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                                    },
                                    {
                                        "sno": "a",
                                        "title": "Processing Fees, if any",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                                    },
                                    {
                                        "sno": "b",
                                        "title": "Insurance Charges if any",
                                        "data": "Insurance premium depends upon the nature of assets. Refer sanction letter"
                                    },
                                    {
                                        "sno": "c",
                                        "title": "Other Charges, if any",
                                        "data": 0
                                    },
                                    {
                                        "sno": "(iv)",
                                        "title": "Net Disbursed Amount",
                                        "data": { "-": [{ "var": "$scope.fetchRepaymentSchedule.object.principal" }, { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }] }
                                    },
                                    {
                                        "sno": "(iv - a)",
                                        "title": "Overdue Amount",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.overdueAmount" }
                                    },
                                    {
                                        "sno": "(v)",
                                        "title": "Total amount to be paid by the borrower [i + ii + iv-a]",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.totalPayable" }
                                    },
                                    {
                                        "sno": "(vi)",
                                        "title": "Annual Percentage Rate - Effective annualized interest rate",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.irrCalculated" }
                                    },
                                    {
                                        "sno": "(vii)",
                                        "title": "Tenure of the Loan (months)",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.totalLoanTenure" }
                                    },
                                    {
                                        "sno": "(viii)",
                                        "title": "Repayment frequency by the borrower",
                                        "data": "Monthly"
                                    },
                                    {
                                        "sno": "(ix)",
                                        "title": "Number of installments of repayment",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.loanTenure" }
                                    },
                                    {
                                        "sno": "(x)",
                                        "title": "Amount of each installments of repayment",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.emiToBePaid" }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mb-20 keyfact-table",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                                        "sno": "(xi)",
                                        "title": "Rate of annualized penal charges in case of delayed payements",
                                        "data": "2% overdue amount"
                                    },
                                    {
                                        "sno": "(xii)",
                                        "title": "Rate of annualized other penal charges",
                                        "data": "2% overdue amount"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mb-20 keyfact-table",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                                        "sno": "(xiii)",
                                        "title": "Cooling off/look-up period during which borrower shall not be charged any penalty on prepayment of loan ",
                                        "data": "3 days"
                                    },
                                    {
                                        "sno": "(xiv)",
                                        "title": "Details of LSP acting as recovery agent and authorized to approach the borrower ",
                                        "data": "Bank officer shall visit for recovery"
                                    },
                                    {
                                        "sno": "(xvi)",
                                        "title": "Name, designation , address and phone number of nodal grievance redressal officer deisgnated specifically to deal with Fintech/digital lending related complaints /issues",
                                        "data": "Mr. Swapnil Shaha Head Office, Digital Lending Department, Mumbai Phone: 022-69179418"
                                    }
                                ]
                            }
                        }
                    }, {
                        "componentType": "GRID",
                        "validateSection": false,
                        "className": "display-flex j-c-sb a-i-c mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
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
                                    "componentType": "BUTTON",
                                    "validateSection": false,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Download Repayment Schedule",
                                        "actionId": "REPAYMENT_SCHEDULE_DOWNLOAD",
                                        "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                        "prefixIcon": {
                                            "className": "material-symbols-outlined clr-orange ",
                                            "iconName": "download"
                                        },
                                        "isShow": true
                                    }
                                }
                            ]
                        }
                    }, {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                        "componentType": "ORDERED_LIST",
                        "validateSection": false,
                        "className": "mb-20",
                        "sectionContent": {
                            "isShow": true,
                            "listItem": [
                                "This repayment schedule is based on present effective ROI linked to Bank’s RBLR. This Repayment schedule may get change with change in ROI",
                                "Insurance charges to be paid on actual basis as per third party insurance providers/Companies"
                            ]
                        }
                    },
                    {
                        "componentType": "GRID",
                        "validateSection": true,
                        "className": "display-flex gap-10 action-wrapper  a-i-c mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
                                {
                                    "componentType": "BUTTON",
                                    "validateSection": true,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Proceed",
                                        "actionId": "KEYFACT_ACCEPT",
                                        "className": "mat-focus-indicator btn-orange mat-stroked-button mat-button-base",
                                        "isShow": true,

                                    }
                                }, {
                                    "componentType": "BUTTON",
                                    "validateSection": true,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Decline",
                                        "actionId": "KEYFACT_DECLINE",
                                        "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                        "isShow": true,

                                    }
                                }]
                        }
                    }
                ],
                "LOAN_SUMMARY": [{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "className": 'mt-5 d-flex align-items-center congradulation-text mb-20',
                    "validationJson": { 'content': { "cat": ["Congratulations, ", { "var": "$scope.borrowerDetails.borrowerDetail.fullName" }] } },
                    "sectionContent": {
                        "titleData": `Congratulations,`,
                        "isShow": true,
                        "endContent": [{
                            "componentType": 'ICON',
                            "className": 'ml-10',
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": '/assets/icons/gift.png'
                            }
                        }]
                    }
                }, {
                    "componentType": "HTML_CONTENT",
                    "className": "common-info display-flex a-i-c",
                    "validationJson": {
                      "content": {
                        "cat": [
                          "<div>Your ",
                          {
                            "var": "$scope.loanDetails.loanDetails.purpose"
                          },
                          " applicable with an amount of <b>Rs. ",
                          {
                            "var": "$scope.loanDetails.loanDetails.totalSanctionAmount"
                          },
                          " </b>has been approved successfully.</div>"
                        ]
                      }
                    },
                    "validateSection": false,
                    "sectionContent": {
                      "isShow": true,
                      "htmlData": "Your MSME Renewal Loan applicable with an amount of Rs. <span> class='redirectAction ml-5'>₹ </span> has been approved successfully."
                    }
                  },  {
                    "componentType": 'PARAGRAPH',
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
                        "paragraphData": "Your Application Reference #"
                    }
                },

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
                ]
            },
            'company': {
                "ACCOUNT_VERIFY": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "mandatory": false,
                        "className": "mb-1",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Welcome !"
                        }
                    },
                    {
                        "validateSection": false,
                        "mandatory": false,
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Lets start the renewal of your loan.",
                        },
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "className": 'medium',
                        "mandatory": true,
                        "sectionContent": {
                            "options": { 'columnSize': 1 },
                            "isShow": true,
                            "fields": [
                                {

                                    "fieldDataType": "NUMBER",
                                    "Masking": true,
                                    "isMandatory": true,
                                    "fieldLabel": "Account Number",
                                    "dataMasking":true,
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 0,
                                    "maxLength": 999999999999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "isMandatory": { "if": [{ "==": [{ "var": "cifId" }, null] }, true, false] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "",
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
                                    "isAccountNumber": true,
                                    "orSectionTop": true
                                },
                                {
                                    "fieldLabel": "OR",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": null,
                                    "groupIndex": null,
                                    "showField": true,
                                    "orSection": true
                                },
                                {

                                    "fieldDataType": "NUMBER",
                                    "Masking": true,
                                    "isMandatory": false,
                                    "fieldLabel": "CIF Id",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 0,
                                    "maxLength": 999999999999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson":{
                                        "property": {
                                            "isMandatory": { "if": [{ "==": [{ "var": "cifId" }, null] }, false, true] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "",
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter 15 digit Account Number",
                                    "fieldName": "CifId",
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
                                        "optionKey": "Yes",
                                        "optionName": "Yes",
                                        "optionValue": "Yes"
                                      },
                                      {
                                        "optionKey": "No",
                                        "optionName": "No",
                                        "optionValue": "No"
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
                            ],
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        }
                    },
                    {
                        "validateSection": false,
                        "mandatory": false,
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
                        "sectionContent": {
                            "isShow": false,
                            "paragraphData": "You can enter Operative Account Number",
                        },
                    },
                    {
                        "componentType": "CONSENT",
                        "className": 'mb-20 x-large',
                        "validateSection": true,
                        "mandatory": true,
                        "sectionContent": {
                            "isShow": true,
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
                            }
                        }
                    },
                    {
                        'componentType': 'OTP',
                        "validateSection": false,
                        "mandatory": false,
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
                                'notificationType': 'COMMON_OTP_TWO',
                                'loanProduct': null,
                                'createBorrower': true,
                                'generateOtp': true,
                            },
                            "isShow": false,
                        }
                    },
                ],
                "CUSTOMER_TYPE": [
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
                                "url": '/basicinfo/mobile-verify?resumeJourney=true'
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
                        "mandatory": false,
                        "className": 'common-title mt-5',
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
                        "className": 'mt-10 medium',
                        "sectionContent": {
                            "options": { 'columnSize': 1 },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": 'BORROWER_PROFILE_VARIABLE5',
                                    "fieldLabel": "Constitution",
                                    "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": { default: 'Individual' },
                                    "rulesFor": null,
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
                                    "fieldDataType": "BUTTON_TOGGLE",
                                    "otpType": 'PHONE', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
                                    "isMandatory": true,
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
                "EKYC_VERIFY": [{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "className": 'display-flex mb-5',
                    "sectionContent": {
                        "titleData": "KYC Aadhaar Verification",
                        "isShow": true,
                        "endContent": [{
                            "componentType": 'ICON',
                            "className": 'ml-10',
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": '/assets/icons/aadhaar-colored.png'
                            }
                        }]
                    }
                },
                {
                    "componentType": "FORM",
                    "validateSection": true,
                    "className": 'mt-5',
                    "sectionContent": {
                        "options": { 'columnSize': 1,'mapSupplyData': true,'mapAndDisable': true },
                        "isShow": true,
                        "fields": [
                            {
                                "fieldDataType": "AADHAR",
                                "isMandatory": true,
                                "fieldLabel": "Enter Your Aadhaar Number",
                                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": null,
                                "rulesFor": null,
                                "regex": "^[0-9]{12}$",
                                "regexErrorMessage": "Only numbers are allowed.",
                                "rowNo": null,
                                "columnNo": null,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "identityNumberOne",
                                "labelInfo": null,
                                "showLabel": true,
                                "Masking": true,
                                "groupName": null,
                                "groupIndex": null,
                                "isPreview": true,
                                "showField": true,
                                "aadhaarNumberFirstMask": true,
                                "aadhaarNumberSecondMask": true,
                                "aadhaarNumberThirdMask": false
                            },
                        ],
                        validityEmitter: new Subject<void>(),
                        formValueEmitter: new Subject<void>()
                    }
                },
                {
                    "componentType": "CONSENT",
                    "validateSection": true,
                    "className": "mt15 consent-text",
                    "sectionContent": {
                        "isShow": true,
                        "config": {
                            "options": [{
                                "consentType": "APIFETCH",  //STATIC,APIFETCH
                                "consentCode": "AADHAR_CONSENT_MSME",
                                "submitConsentCodes":['AADHAR_CONSENT_MSME'],
                                "isMultiLabel": true,
                                label: null,
                                "className": "check-container",
                                "completed": null,
                            },

                            ]
                        }
                    }
                },
                {
                    'componentType': 'OTP',
                    "validateSection": false,
                    "className": "w-45",
                    "sectionContent": {
                        "fields": {
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
                            "infoText": "A 6 digit OTP code has been sent to aadhaar registered mobile number",
                        },
                        "options": {
                            'value': null,
                            'notificationType': 'COMMON_OTP_TWO',
                            'loanProduct': null,
                            'createBorrower': true,
                            'generateOtp': true,
                            'requestFor': 'BORROWER'
                        }, "isShow": false,

                    }
                }
                ],
                "UDYAM_VERIFY": [
                    {
                        "componentType": "TITLE",
                        "classNames": "mb-1",
                        "validateSection": false,
                        "mandatory": false,
                        "sectionContent": {
                            "titleData": "Udyam Registration Verification",
                            "isShow": true
                        }
                    }, {
                        "componentType": "FORM",
                        "className": "medium mt-10",
                        "validateSection": true,
                        "mandatory": true,
                        "sectionContent": {
                            "options": { 'columnSize': 1,'mapSupplyData': true,'mapAndDisable': true  },
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
                                "otpType": 'UDYAM', // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
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
                                // 'notificationType': 'COMMON_OTP_TWO',
                                'loanProduct': null,
                                'createBorrower': true,
                                'generateOtp': true,
                            },"isShow": false,
                        }
                    }
                ],
                "MORE_INFO": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "sectionContent": {
                          "titleData": "Credit Facility Details",
                          "isShow": true
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
                                "sendOptionKeyForDropDowns":true,
                                "autoVerifyMappedFields":true
                            },
                            "isShow": true,
                            "fields": [
                                // {
                                //     "fieldDataType": "BOOLEAN",
                                //     "isMandatory": false,
                                //     "fieldLabel": "Renew limits with Enhancement",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson": {
                                //       "default": true
                                //     },
                                //     "rulesFor": null,
                                //     "regex": null,
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "fieldName": "differenceCommunicationAddress",
                                //     "labelInfo": null,
                                //     "showLabel": false,
                                //     "groupName": "Please verify your credit facility details",
                                //     "groupIndex": 1,
                                //     "showField": true
                                //   },
                                {
                                    "fieldDataType": "TABLE",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "fieldLabel": "Financial Details",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "addTableFields": true,
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": [],
                                    "rulesFor": [],
                                    "regex": null,
                                    "addStatus": false,
                                    "isTableFooter": false,
                                    "tableFooterData": { "fieldLabel": 'Total Assets Secured', "value": 4, "mappingKey": "eligibleAmount", "fieldName": "facilityDetailsNumberVariable20", "valuePrefix": "₹" },
                                    "tableFooterActions": [{
                                        "label": "Add Term Loan",
                                        "code": "TL",
                                        "actionType":"POPUP_ACTION",
                                        "isDisplay": true,
                                        "popupConfig": [{
                                            "componentType": "FORM",
                                            "validateSection": true,
                                            "sectionContent": {
                                                "options": {
                                                    "columnSize": 3,
                                                    "mapSupplyData": true,
                                                    "mapAndDisable": true
                                                },
                                                "isShow": true,
                                                "fields": [
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "commonpropertyType": "FACILITY_DETAIL_VARIABLE_19",
                                                        "fieldLabel": "Purpose of Loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsTextVariable2"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Purpose of Loan",
                                                        "fieldName": "facilityDetailsTextVariable1",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TEXT",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Details of purpose of loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "mandatory": {
                                                                "if": [{ "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"] }, true, false]
                                                            },
                                                            "showField": {
                                                                "if": [
                                                                    {
                                                                        "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "facilityDetailsTextVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TABLE",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "fieldLabel": "Term Loan",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "addTableFields": true,
                                                        "minLength": null,
                                                        "maxLength": null,
                                                        "error": null,
                                                        "value": [],
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsNumberVariable3"],
                                                        "regex": null,
                                                        "addStatus": false,
                                                        "isTableFooter": true,
                                                        "tableFooterData": { "fieldLabel": 'Total Project Cost', "value": 0, "mappingKey": "PID4", "fieldName": "facilityDetailsNumberVariable1", "valuePrefix": "₹" },
                                                        "emitedValue": [],
                                                        "showAction": true,
                                                        "addMore": true,
                                                        "tableFields": [
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Details of item to be purchased",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID1",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Name of Supplier",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID2",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": false,
                                                                "fieldLabel": "Supplier's Address",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID3",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "NUMBER",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Item Cost (in Rs.)",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": 0,
                                                                "maxLength": 10000000,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "requestedLimit"],
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "PID4",
                                                                "numberOnly": true,
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            }
                                                        ],
                                                        "tableRowActions": [{
                                                            "actionCode": "ACCEPT",
                                                            "icon": "check",
                                                            "className": "clr-green",
                                                            "isDisplay": true,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "EDIT",
                                                            "icon": "edit",
                                                            "className": "clr-blue",
                                                            "isDisplay": false,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "DELETE",
                                                            "icon": "delete",
                                                            "className": "clr-red",
                                                            "isDisplay": true
                                                        }],
                                                        "validateRowBeforeAdd": true,
                                                        "showSerialNo": true,
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "facilityDetailsTableVariable1",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true
                    
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested loan amount for TL",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": {
                                                            "validation": {"if":[{"<":[{"var":"requestedLimit"},10000]},false,{"<=":[{"var":"facilityDetailsTableVariable1"},0]},true,{"<":[{"var":"facilityDetailsTableVariable1"},{"var":"requestedLimit"}]},false,true]}, 
                                                            "validationError": {"if":[{"<":[{"var":"requestedLimit"},10000]},"Requested amount should not be less than Rs. 10,000",{"<=":[{"var":"facilityDetailsTableVariable1"},0]},true,{"<":[{"var":"facilityDetailsTableVariable1"},{"var":"requestedLimit"}]},"Requested loan Amount cannot be greater than Project Cost.",true]},
                                                        },
                                                        "rulesFor": ["facilityDetailsNumberVariable3", "REQUESTED_LIMIT", "facilityDetailsNumberVariable4"],
                                                        "regex": "^[1-9]+[0-9]*00$",
                                                        "regexErrorMessage": "Requested loan amount for TL should be in multiples of 100",
                                                        "options": [],
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Requested loan amount for TL",
                                                        "fieldName": "requestedLimit",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested tenure in month(s)",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsNumberVariable6"],
                                                        "regex": "^([1-9]|[1234567]\\d|8[0-4])$",
                                                        "options": [],
                                                        "regexErrorMessage": "Loan Period should be between 1 - 84 months.",
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Requested tenure in month(s)",
                                                        "fieldName": "tenure",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "DATE",
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested first EMI date",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "minDate": [null,null,null,true,null,1,null],
                                                        "maxDate": [null,null,null,true,null,3,null],
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": {
                                                          "default": {
                                                            "addDate":[{"currentDate":[]},1,"MONTHS"]
                                                          }
                                                        },
                                                        "rulesFor": [
                                                          "facilityDetailsNumberVariable5"
                                                        ],
                                                        "regex": null,
                                                        "regexErrorMessage": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "placeholderText": "Enter Requested first EMI date",
                                                        "fieldName": "facilityDetailsDateVariable1",
                                                        "labelInfo": null,
                                                        "showLabel": true,
                                                        "showField": true
                                                      },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Projceted Sales/Turnover",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": null,
                                                        "rulesFor": null,
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Projceted Sales/Turnover",
                                                        "fieldName": "facilityDetailsNumberVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Margin/Borrower contribution",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "calculation": {
                                                                "-": [{ "var": "facilityDetailsTableVariable1" }, { "var": "requestedLimit" }]
                                                            }
                                                        },
                                                        "rulesFor": ["facilityDetailsNumberVariable4"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Margin/Borrower contribution",
                                                        "fieldName": "facilityDetailsNumberVariable3",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "fieldLabel": "Margin/Borrower contribution percentage",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "calculation": {"*":[100,{"/":[{"var":"facilityDetailsNumberVariable3"},{"var":"facilityDetailsTableVariable1"}]}]},"validation":{"<":[14.99,{"var":"facilityDetailsNumberVariable4"}]},"validationError":"Margin should be greater than 15%"
                                                        },
                                                        "rulesFor": null,
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Margin/Borrower contribution percentage",
                                                        "fieldName": "facilityDetailsNumberVariable4",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "isMandatory": true,
                                                        "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE46",
                                                        "fieldLabel": "Guarantee Cover Type",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "validationJson": null,
                                                        "regexErrorMessage": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "groupName": "Purchase item details (TL)",
                                                        "groupIndex": 4,
                                                        "placeholderText": "Guarantee Cover Type",
                                                        "fieldName": "facilityDetailsTextVariable13",
                                                        "labelInfo": null,
                                                        "showLabel": true,
                                                        "showField":true
                                                      },
                                                    {
                                                        "regex": "^[0-3]\\d*$",
                                                        "regexMessage": "Moratorium Period should not be more than 3 months.",
                                                        "maxLength": 1,
                                                        "minLength": null,
                                                        "sortIndex": null,
                                                        "isMasking": false,
                                                        "isMandatory": false,
                                                        "fieldDataType": "NUMBER",
                                                        "rulesFor": [
                                                            "facilityDetailsNumberVariable6"
                                                        ],
                                                        "dependentField": null,
                                                        "fieldAccessModifier": "HIDDEN",
                                                        "fieldName": "facilityDetailsNumberVariable5",
                                                        "regexForJS": "^[0-3]\\d*$",
                                                        "formula": null,
                                                        "isVerified": false,
                                                        "isPhysicallyVerified": false,
                                                        "validationJson": {"calanderMonthCalculation":[{"var":"facilityDetailsDateVariable1"}]},
                                                        "fieldLabel": "Moratorium Period (For Months)",
                                                        "documentCategoryFields": null,
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "",
                                                        "groupIndex": 5,
                                                        "showField": false
                                                    },
                                                    {
                                                        "regex": null,
                                                        "regexMessage": null,
                                                        "maxLength": null,
                                                        "minLength": null,
                                                        "sortIndex": null,
                                                        "isMasking": false,
                                                        "isMandatory": false,
                                                        "fieldDataType": "NUMBER",
                                                        "onboardingVerificationType": null,
                                                        "documentCategory": null,
                                                        "rulesFor": null,
                                                        "dependentField": null,
                                                        "fieldAccessModifier": "HIDDEN",
                                                        "fieldName": "facilityDetailsNumberVariable6",
                                                        "regexForJS": null,
                                                        "formula": null,
                                                        "validationJson": { "default" : { "-" : [ {"var":"tenure"}, {"var":"facilityDetailsNumberVariable5"}  ] }, "calculation" : { "-" : [ {"var":"tenure"}, {"var":"facilityDetailsNumberVariable5"}  ] }},
                                                        "fieldLabel": "Repayment Period (in Months)",
                                                        "documentCategoryFields": null,
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "",
                                                        "groupIndex": 5,
                                                        "showField": false
                                                    }
                                                ]
                                            }
                                        }],
                                        "submitFlow": 
                                            {
                                                "dataFeedCloud": ['product', 'formValue', "capturedData"],
                                                "params": [
                                                    [
                                                        "loanFacilityUuid",
                                                        "RULE_OUTPUT",
                                                        {
                                                            "getObjectKeyValue": [
                                                                {
                                                                    "getArrayIndexValue": [
                                                                        {
                                                                            "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                        },
                                                                        {
                                                                            "if":[
                                                                                {
                                                                                  "==": [
                                                                                    {
                                                                                      "getObjectKeyValue": [
                                                                                        {
                                                                                          "getArrayIndexValue": [
                                                                                            {
                                                                                              "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                                            },
                                                                                            0
                                                                                          ]
                                                                                        },
                                                                                        "code"
                                                                                      ]
                                                                                    },
                                                                                    "TL"
                                                                                  ]
                                                                                },
                                                                                0,
                                                                                1
                                                                            ]
                                                                        }
                                                                        
                                                                    ]
                                                                },
                                                                "uuid"
                                                            ]
                                                        }
                                                    ],
                                                'loanUuid', 'access_token', ["isOnboarding", "STATIC", false], "loanPurposeUuid", ["loanFacilityName", "STATIC", "Term Loan"], ["applicationSource", "STATIC", "WEB_JOURNEY"], "facilityDetailsTableVariable1", "facilityDetailsNumberVariable1", "requestedLimit", "facilityDetailsNumberVariable3", "facilityDetailsNumberVariable4", ["facilityType", "STATIC", "TERM_LOAN"],
                                                "facilityDetailsTextVariable1",
                                                "facilityDetailsTextVariable2",
                                                "facilityDetailsNumberVariable2",
                                                "tenure",
                                                "facilityDetailsNumberVariable5",
                                                "facilityDetailsNumberVariable6",
                                                "facilityDetailsTextVariable13",
                                                "facilityDetailsDateVariable1"]
                                            }
                                    },
                                    {
                                        "label": "Add Cash Credit",
                                        "code": "CC",
                                        "actionType":"POPUP_ACTION",
                                        "isDisplay": true,
                                        "popupConfig": [{
                                            "componentType": "FORM",
                                            "validateSection": true,
                                            "sectionContent": {
                                                "options": {
                                                    "columnSize": 3,
                                                    "mapSupplyData": true,
                                                    "mapAndDisable": true,
                                                    "externalFeedDataforValidationJson":null
                                                },
                                                "isShow": true,
                                                "fields": [
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "commonpropertyType": "LOAN_APPLICATION_VARIABLE13",
                                                        "fieldLabel": "Purpose of Loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "rulesFor": ["facilityDetailsTextVariable2"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Purpose of Loan",
                                                        "fieldName": "facilityDetailsTextVariable1",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 1,
                                                        "showField": false,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TEXT",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Details of purpose of loan",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": {
                                                            "mandatory": {
                                                                "if": [{ "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"] }, false, true]
                                                            },
                                                            "showField": {
                                                                "if": [
                                                                    {
                                                                        "==": [{ "var": "facilityDetailsTextVariable1" }, "Others"]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "facilityDetailsTextVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Net/Projected Sale",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 0,
                                                        "maxLength": 2500000000,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": null,
                                                        "rulesFor": ["requestedLimit"],
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": "Amount should be upto  2500000000.",
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Net/Projected Sale",
                                                        "fieldName": "facilityDetailsNumberVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "TABLE",
                                                        "dependentField": null,
                                                        "isMandatory": false,
                                                        "fieldLabel": "Cash Credit",
                                                        "fieldAccessModifier": "READ_ONLY",
                                                        "addTableFields": true,
                                                        "minLength": null,
                                                        "maxLength": null,
                                                        "error": null,
                                                        "value": [],
                                                        "validationJson": null,
                                                        "rulesFor": ["facilityDetailsNumberVariable3", "requestedLimit"],
                                                        "regex": null,
                                                        "addStatus": false,
                                                        "isTableFooter": true,
                                                        "tableFooterData": { "fieldLabel": 'Total Assets Secured', "value": 0, "mappingKey": "eligibleAmount", "fieldName": "facilityDetailsNumberVariable20", "valuePrefix": "₹" },
                                                        "emitedValue": [],
                                                        "showAction": true,
                                                        "addMore": true,
                                                        "tableRowActions": [{
                                                            "actionCode": "ACCEPT",
                                                            "icon": "check",
                                                            "className": "clr-green",
                                                            "isDisplay": true,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "EDIT",
                                                            "icon": "edit",
                                                            "className": "clr-blue",
                                                            "isDisplay": false,
                                                            // "submitFlow":[]
                                                        },
                                                        {
                                                            "actionCode": "DELETE",
                                                            "icon": "delete",
                                                            "className": "clr-red",
                                                            "isDisplay": true
                                                        }],
                                                        "validateRowBeforeAdd": true,
                                                        "showSerialNo": true,
                                                        "tableFields": [
                                                            {
                                                                "fieldDataType": "DROPDOWN",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Details of Security Provided",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": ["eligibleAmount"],
                                                                "regex": null,
                                                                "options": this.commonProperty_static.ASSETS_PURCHASED,
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "securityType",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "TEXT",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Security Description",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": null,
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "description",
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "NUMBER",
                                                                "dependentField": null,
                                                                "isMandatory": true,
                                                                "fieldLabel": "Value",
                                                                "fieldAccessModifier": "EDITABLE",
                                                                "minLength": 0,
                                                                "maxLength": 10000000,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": null,
                                                                "rulesFor": ["eligibleAmount"],
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "valuationAmount",
                                                                "numberOnly": true,
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                                                            {
                                                                "fieldDataType": "NUMBER",
                                                                "dependentField": null,
                                                                "isMandatory": false,
                                                                "fieldLabel": "Total Eligible Amount",
                                                                "fieldAccessModifier": "DISABLED",
                                                                "minLength": null,
                                                                "maxLength": null,
                                                                "error": null,
                                                                "value": "",
                                                                "validationJson": {
                                                                    "calculation": {
                                                                        "-": [
                                                                            {
                                                                                "var": "valuationAmount"
                                                                            },
                                                                            {
                                                                                "*": [
                                                                                    {
                                                                                        "/": [
                                                                                            {
                                                                                                "var": "valuationAmount"
                                                                                            },
                                                                                            100
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "if": [
                                                                                            {
                                                                                                "==": [
                                                                                                    {
                                                                                                        "var": "securityType"
                                                                                                    },
                                                                                                    "Stock"
                                                                                                ]
                                                                                            },
                                                                                            25,
                                                                                            40
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "rulesFor": [],
                                                                "regex": null,
                                                                "options": [],
                                                                "regexErrorMessage": null,
                                                                "errorIconPath": null,
                                                                "rowNo": null,
                                                                "columnNo": null,
                                                                "placeholderText": "",
                                                                "fieldName": "eligibleAmount",
                                                                "numberOnly": true,
                                                                "showLabel": true,
                                                                "labelInfo": null,
                                                                "groupName": "",
                                                                "groupIndex": 4,
                                                                "showField": true
                                                            },
                    
                                                        ],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "",
                                                        "fieldName": "loanApplicationTableVariable2",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true
                    
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Requested loan amount for CC",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": 9999999999,
                                                        "error": null,
                                                        "value": null,
                                                        "validationJson": {
                                                            "validation": {"if":[{"<":[{"var":"requestedLimit"},10000]},false,{">":[{"var":"requestedLimit"},{"min":[{"var":"facilityDetailsNumberVariable2"},{"var":"loanApplicationTableVariable2"}]}]},false,true]},
                                                            "validationError": {"if":[{"<":[{"var":"requestedLimit"},10000]},"Requested amount should not be less than Rs. 10,000",{">":[{"var":"requestedLimit"},{"min":[{"var":"facilityDetailsNumberVariable2"},{"var":"loanApplicationTableVariable2"}]}]},"Requested loan amount for CC should be less than Net/Projected Sale or Total Assets Secured",null]}
                                                        },
                                                        "rulesFor": null,
                                                        "regex": "^[1-9]+[0-9]*00$",
                                                        "regexErrorMessage": "Requested loan amount for CC should be in multiples of 100",
                                                        "options": [],
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Requested loan amount for CC",
                                                        "fieldName": "requestedLimit",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "showField": true,
                                                        "clearValue": true
                                                    },
                                                    {
                                                        "fieldDataType": "NUMBER",
                                                        "dependentField": null,
                                                        "isMandatory": true,
                                                        "fieldLabel": "Investment in Plant and Machinery",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": null,
                                                        "maxLength": null,
                                                        "error": null,
                                                        "value": "",
                                                        "validationJson": null,
                                                        "rulesFor": null,
                                                        "regex": null,
                                                        "options": [],
                                                        "regexErrorMessage": null,
                                                        "errorIconPath": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "placeholderText": "Investment in Plant and Machinery",
                                                        "fieldName": "facilityDetailsTextVariable20",
                                                        "showLabel": true,
                                                        "labelInfo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "numberOnly": true,
                                                        "showField": true
                                                    },
                                                    {
                                                        "fieldDataType": "DROPDOWN",
                                                        "isMandatory": true,
                                                        "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE46",
                                                        "fieldLabel": "Guarantee Cover Type",
                                                        "fieldAccessModifier": "EDITABLE",
                                                        "minLength": 6,
                                                        "maxLength": 15,
                                                        "error": null,
                                                        "value": null,
                                                        "rulesFor": [],
                                                        "regex": null,
                                                        "options": [],
                                                        "validationJson": null,
                                                        "regexErrorMessage": null,
                                                        "rowNo": null,
                                                        "columnNo": null,
                                                        "groupName": "Purchase item details (CC)",
                                                        "groupIndex": 3,
                                                        "placeholderText": "Guarantee Cover Type",
                                                        "fieldName": "facilityDetailsTextVariable13",
                                                        "labelInfo": null,
                                                        "showLabel": true,
                                                        "showField": true
                                                    },
                                                ]
                                            }
                                        }],
                                        "submitFlow":{
                                            "dataFeedCloud": ['product', 'formValue', "capturedData"],
                                            "params": [
                                                [
                                                    "loanFacilityUuid",
                                                    "RULE_OUTPUT",
                                                    {
                                                        "getObjectKeyValue": [
                                                            {
                                                                "getArrayIndexValue": [
                                                                    {
                                                                        "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                    },
                                                                    {
                                                                        "if":[
                                                                        {
                                                                          "==": [
                                                                            {
                                                                              "getObjectKeyValue": [
                                                                                {
                                                                                  "getArrayIndexValue": [
                                                                                    {
                                                                                      "var": "fetchMultiFacilityList.responseAttr.multiFacilities"
                                                                                    },
                                                                                    0
                                                                                  ]
                                                                                },
                                                                                "code"
                                                                              ]
                                                                            },
                                                                            "CC"
                                                                          ]
                                                                        },
                                                                        0,
                                                                        1
                                                                    ]
                                                                }   
                                                                ]
                                                            },
                                                            "uuid"
                                                        ]
                                                    }
                                                ],
                                                'loanUuid', 'access_token', ["isOnboarding", "STATIC", false], "loanPurposeUuid", ["loanFacilityName", "STATIC", "Cash Credit"], ["applicationSource", "STATIC", "WEB_JOURNEY"], ["facilityDetailsTextVariable1","STATIC","To meet day to day business requirement"], "facilityDetailsNumberVariable2", "requestedLimit", "facilityDetailsTextVariable2", "facilityDetailsTextVariable13", "facilityDetailsTextVariable20", ["facilityType", "STATIC", "CASH_CREDIT"]]
                                        },

                                        
                                    }],
                                    "emitedValue": [],
                                    "showAction": true,
                                    "addMoreForTl": true,
                                    "addMoreForCc": true,
                                    "addMoreMsme": true,
                                    "tableRowActions": [{
                                        "actionCode": "ACCEPT",
                                        "icon": "check",
                                        "className": "clr-green",
                                        "isDisplay": true,
                                        // "submitFlow":[]
                                    },
                                    {
                                        "actionCode": "EDIT",
                                        "icon": "edit",
                                        "className": "clr-blue",
                                        "isDisplay": false,
                                        // "submitFlow":[]
                                    },
                                    {
                                        "actionCode": "DELETE",
                                        "icon": "delete",
                                        "className": "clr-red",
                                        "isDisplay": true
                                    }],
                                    "validateRowBeforeAdd": false,
                                    "showSerialNo": true,
                                    "tableFields": [
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Account Type",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": [],
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "loanFacilityName",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Account Number",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": [],
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "facilityDetailsTextVariable12",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Current Limit",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "existingLimit",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Outstanding Balance",
                                            "fieldAccessModifier": "DISABLED",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": "",
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "facilityDetailsNumberVariable24",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Requested Amount",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": {
                                                "validation":{"if":[{"!=":[{"var":"loanFacilityName"},"Cash Credit"]},true,{">=":[{"var":"requestedLimit"},{"var":"fetchEligibilityDetails.output.assessmentEligibility.ccExistingLimit"}]},true,false]},
                                                "validationError": "Requested amount shall not be lower than existing Cash Credit limit"
                                            },
                                            "rulesFor": "",
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "requestedLimit",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 6,
                                            "showField": true
                                        }
                                       
                                    ],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "facilityDetailsListTable",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "",
                                    "groupIndex": 2,
                                    "showField": true

                                }
                            ],
     
                            
                        }
                    },
                ],
                "CREDIT_FACILITY": [
                    {
                        "componentType": "FORM",
                        "validateSection": false,
                        "sectionContent": {
                            "options": {
                                "columnSize": 3,
                                "mapSupplyData": true,
                                "mapAndDisable": true
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "fieldLabel": "Renew limits with Enhancement",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": "",
                                    "validationJson": {
                                        "default": true
                                    },
                                    // "rulesFor": [
                                    //     "addressOne"
                                    // ],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "differenceCommunicationAddress",
                                    "showLabel": false,
                                    "groupName": "",
                                    "groupIndex": 1
                                },
                                {
                                    "fieldDataType": "TABLE",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "fieldLabel": "Credit Facility Details",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "addTableFields": true,
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": [],
                                    // "validationJson": {
                                    //     "showField": {
                                    //         "if": [{ "or": [{ "==": [{ "var": "loanApplicationTextVariable14" }, "Term Loan"] }, { "==": [{ "var": 'loanApplicationTextVariable14' }, "Both"] }] }]
                                    //     }
                                    // },
                                    "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "loanApplicationNumberVariable3"],
                                    "regex": null,
                                    "addStatus": false,
                                    "isTableFooter": true,
                                    // "tableFooterData": { "fieldLabel": 'Total Project Cost', "value": 0, "mappingKey": "PID4", "fieldName": "facilityDetailsNumberVariable1", "valuePrefix": "₹" },
                                    "emitedValue": [],
                                    "showAction": false,
                                    "addMore": true,
                                    "tableFields": [
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Account Type",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID1",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Account Number",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": "^[a-zA-Z0-9 ]{0,99}$",
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID2",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "TEXT",
                                            "dependentField": null,
                                            "isMandatory": false,
                                            "fieldLabel": "Current Limit",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": null,
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID3",
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Outstanding Balance",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "loanApplicationNumberVariable3"],
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID4",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        },
                                        {
                                            "fieldDataType": "NUMBER",
                                            "dependentField": null,
                                            "isMandatory": true,
                                            "fieldLabel": "Proposed Limit",
                                            "fieldAccessModifier": "EDITABLE",
                                            "minLength": null,
                                            "maxLength": null,
                                            "error": null,
                                            "value": "",
                                            "validationJson": null,
                                            "rulesFor": ["facilityDetailsNumberVariable3", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable4", "loanApplicationNumberVariable3"],
                                            "regex": null,
                                            "options": [],
                                            "regexErrorMessage": null,
                                            "errorIconPath": null,
                                            "rowNo": null,
                                            "columnNo": null,
                                            "placeholderText": "",
                                            "fieldName": "PID4",
                                            "numberOnly": true,
                                            "showLabel": true,
                                            "labelInfo": null,
                                            "groupName": "",
                                            "groupIndex": 5,
                                            "showField": true
                                        }
                                    ],
                                    
                                    "validateRowBeforeAdd": true,
                                    "showSerialNo": true,
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "",
                                    "fieldName": "facilityDetailsTableVariable1",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupIndex": 3,
                                    "showField": true

                                }],
     
                            
                        }
                    },
                    // {
                    //     "componentType":"TABLE",
                    //     "validateSection":false,
                    //     "className":"mb-20 keyfact-table",
                    //     "sectionContent":{
                    //         "isShow":true,
                    //         "config":{
                    //             "showRecordActions": false,
                    //             "showSerialNo": false,
                    //             "showFooterAction": false,
                    //             "showFooterCalculations": false,
                    //             "showHeaders": true,
                    //             "title": "Financial Details",
                    //             "footerActionLabel": "+ Add New Borrower",
                    //             "recordActions": [
                    //                 {
                    //                     "actionCode": "EDIT",
                    //                     "icon": "../../../../assets/icons/edit.png",
                    //                     "name": "Edit"
                    //                 }
                    //             ],
                    //             "headers": [
                    //                 {
                    //                     "fieldLabel": "S.No",
                    //                     "fieldName": "sno"
                    //                 },
                    //                 {
                    //                     "fieldLabel": "Account Type",
                    //                     "fieldName": "title"
                    //                 },
                    //                 {
                    //                     "fieldLabel": "Account Number",
                    //                     "fieldName": "data"
                    //                 },
                    //                 {
                    //                     "fieldLabel": "Current Limit",
                    //                     "fieldName": "data"
                    //                 }
                    //             ],
                    //             "data": [
                    //                 {
                    //                     "sno": "1.",
                    //                     "title": "Total Sales",
                    //                     "data": {"var":"$scope.fetchRepaymentSchedule.object.principal"}
                    //                 },
                    //                 {
                    //                     "sno": "2.",
                    //                     "title": "Net Profit",
                    //                     "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                    //                 },

                    //             ]
                    //         },
                 
                            
                    //     }
                    // },
                ],
                //start of borrower information validation
                "EMPLOYMENT_DETAILS": [
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "columnSize": 3,
                                "mapSupplyData": true,
                                "mapAndDisable": true
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType":"TEXT",
                                    "dependentField":null,
                                    "isMandatory":false,
                                    "fieldLabel": "Name of the Account",
                                    "fieldAccessModifier":"EDITABLE",
                                    "minLength":null,
                                    "maxLength":15,
                                    "error":null,
                                    "value":"",
                                    "validationJson":"",
                                    "rulesFor":null,
                                    "regex":null,
                                    "options":[],
                                    "regexErrorMessage":null,
                                    "errorIconPath":null,
                                    "rowNo":null,
                                    "columnNo":null,
                                    "placeholderText":"",
                                    "fieldName":"accountName",
                                    "showLabel":true,
                                    "labelInfo":null,
                                    "groupName":"Business Details",
                                    "groupIndex":1,
                                    "showField":true
                                },   
                                {
                                    "fieldDataType": "TEXT",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_PROFILE_VARIABLE5",
                                    "fieldLabel": "Udyam Registration Number",
                                    "fieldAccessModifier": "READ_ONLY",
                                    "minLength": null,
                                    "maxLength": 15,
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
                                    "fieldName": "textVariable6",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Business Details",
                                    "groupIndex": 1,
                                    "showField": true
                                },
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
                                    "validationJson": { "default": "Entity" },
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
                                    "groupName": "Business Details",
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                // {
                                //     "fieldDataType": "DROPDOWN",
                                //     "isMandatory": true,
                                //     "commonpropertyType": "EDUCATION_TYPE",
                                //     "fieldLabel": "Education Qualification",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "minLength": 6,
                                //     "maxLength": 15,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson": null,
                                //     "rulesFor": null,
                                //     "regex": null,
                                //     "options": [],
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "groupName": "Borrower Details",
                                //     "groupIndex": 2,
                                //     "placeholderText": "Education Qualification",
                                //     "fieldName": "educationType",
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "showField": false,
                                //     "showForYes": true
                                //   },
                                //   {
                                //     "fieldDataType": "DROPDOWN",
                                //     "dependentField": null,
                                //     "isMandatory": true,
                                //     "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE32",
                                //     "fieldLabel": "Line Of Activity",
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
                                //     "placeholderText": "Select Line Of Activity",
                                //     "fieldName": "textVariable32",
                                //     "showLabel": true,
                                //     "labelInfo": null,
                                //     "groupName": "Borrower Details",
                                //     "groupIndex": 2,
                                //     "showField": false,
                                //     "showForYes": true
                                //   },
                                  {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE47",
                                    "fieldLabel": "Occupation",
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
                                    "placeholderText": "Select Occupation",
                                    "fieldName": "borrowerCompanyTextVariable19",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": "borrowerCompanyTextVariable19",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE48",
                                    "fieldLabel": "Borrower Category",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "dependentField": { "if": [{ "==": [{ "var": "borrowerCompanyTextVariable2" }, null] }, "borrowerCompanyTextVariable19", null] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Select Borrower Category",
                                    "fieldName": "borrowerCompanyTextVariable2",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": "borrowerCompanyTextVariable2",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE49",
                                    "fieldLabel": "Purpose of Advance",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "property": {
                                            "dependentField": { "if": [{ "==": [{ "var": "borrowerCompanyTextVariable5" }, null] }, "borrowerCompanyTextVariable2", null] }
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Select Purpose of Advance",
                                    "fieldName": "borrowerCompanyTextVariable5",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Borrower Details",
                                    "groupIndex": 2,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                    "fieldLabel": "Ownership Type",
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
                                    "placeholderText": "Select Ownership Type",
                                    "fieldName": "livingSince",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Business Address Details",
                                    "groupIndex": 3,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DATE",
                                    "isMandatory": true,
                                    "fieldLabel": "Occupied Since",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "minDate":null,
                                    "maxDate":[null,null,null,true],
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "Business Address Details",
                                    "groupIndex": 3,
                                    "placeholderText": "DD/MM/YYYY",
                                    "fieldName": "ownershipType",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                //   {
                                //     "fieldDataType": "TABLE",
                                //     "dependentField": null,
                                //     "isMandatory": true,
                                //     "fieldLabel": "Assets",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "addTableFields": true,
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": [],
                                //     "validationJson": "",
                                //     "rulesFor": ["borrowerDetailTextVariable51"],
                                //     "regex": null,
                                //     "addStatus": false,
                                //     "isTableFooter": true,
                                //     "tableFooterData": { "fieldLabel": "Total Assets", "value": 0, "mappingKey": "ANW2", "fieldName": "borrowerDetailNumberVariable3", "valuePrefix": "₹" },
                                //     "emitedValue": [],
                                //     "showAction": true,
                                //     "addMore": true,
                                //     "tableRowActions": [{
                                //         "actionCode": "ACCEPT",
                                //         "icon": "check",
                                //         "className": "clr-green",
                                //         "isDisplay": true
                                //     },
                                //     {
                                //         "actionCode": "EDIT",
                                //         "icon": "edit",
                                //         "className": "clr-blue",
                                //         "isDisplay": false
                                //     },
                                //     {
                                //         "actionCode": "DELETE",
                                //         "icon": "delete",
                                //         "className": "clr-red",
                                //         "isDisplay": true
                                //     }],
                                //     "validateRowBeforeAdd": true,
                                //     "showSerialNo": true,
                                //     "tableFields": [
                                //         {
                                //             "fieldDataType": "TEXT",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Description",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": null,
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW1",
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         },
                                //         {
                                //             "fieldDataType": "NUMBER",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Amount ( in Rs.)",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": ["eligibleAmount"],
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW2",
                                //             "numberOnly": true,
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         }
                    
                                //     ],
                                //     "regexErrorMessage": null,
                                //     "errorIconPath": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "placeholderText": "",
                                //     "fieldName": "borrowerDetailTableVariable1",
                                //     "showLabel": true,
                                //     "labelInfo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "showField": false,
                                //     "showForYes": true
                                //   },
                                //   {
                                //     "fieldDataType": "TABLE",
                                //     "dependentField": null,
                                //     "isMandatory": true,
                                //     "fieldLabel": "Liabilities",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "addTableFields": true,
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": [],
                                //     "validationJson": "",
                                //     "rulesFor": ["borrowerDetailTextVariable51"],
                                //     "regex": null,
                                //     "addStatus": false,
                                //     "isTableFooter": true,
                                //     "tableFooterData": { "fieldLabel": "Total Liabilities", "value": 0, "mappingKey": "ANW2", "fieldName": "borrowerDetailNumberVariable4", "valuePrefix": "₹" },
                                //     "emitedValue": [],
                                //     "showAction": true,
                                //     "addMore": true,
                                //     "tableRowActions": [{
                                //         "actionCode": "ACCEPT",
                                //         "icon": "check",
                                //         "className": "clr-green",
                                //         "isDisplay": true
                                //     },
                                //     {
                                //         "actionCode": "EDIT",
                                //         "icon": "edit",
                                //         "className": "clr-blue",
                                //         "isDisplay": false
                                //     },
                                //     {
                                //         "actionCode": "DELETE",
                                //         "icon": "delete",
                                //         "className": "clr-red",
                                //         "isDisplay": true
                                //     }],
                                //     "validateRowBeforeAdd": true,
                                //     "showSerialNo": true,
                                //     "tableFields": [
                                //         {
                                //             "fieldDataType": "TEXT",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Description",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": null,
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW1",
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         },
                                //         {
                                //             "fieldDataType": "NUMBER",
                                //             "dependentField": null,
                                //             "isMandatory": true,
                                //             "fieldLabel": "Amount ( in Rs.)",
                                //             "fieldAccessModifier": "EDITABLE",
                                //             "minLength": null,
                                //             "maxLength": null,
                                //             "error": null,
                                //             "value": "",
                                //             "validationJson": null,
                                //             "rulesFor": ["eligibleAmount"],
                                //             "regex": null,
                                //             "options": [],
                                //             "regexErrorMessage": null,
                                //             "errorIconPath": null,
                                //             "rowNo": null,
                                //             "columnNo": null,
                                //             "placeholderText": "",
                                //             "fieldName": "ANW2",
                                //             "numberOnly": true,
                                //             "showLabel": true,
                                //             "labelInfo": null,
                                //             "groupName": "",
                                //             "groupIndex": 4,
                                //             "showField": true
                                //         }
                    
                                //     ],
                                //     "regexErrorMessage": null,
                                //     "errorIconPath": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "placeholderText": "",
                                //     "fieldName": "borrowerDetailTableVariable3",
                                //     "showLabel": true,
                                //     "labelInfo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "showField": false,
                                //     "showForYes": true
                                //   },
                                //  {
                                //     "fieldDataType": "NUMBER",
                                //     "isMandatory": false,
                                //     "fieldLabel": "Networth",
                                //     "fieldAccessModifier": "READ_ONLY",
                                //     "minLength": null,
                                //     "maxLength": null,
                                //     "error": null,
                                //     "value": null,
                                //     "validationJson": {"default":{"-":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},"calculation":{"-":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},
                                //     "validation": {"if":[{"<":[{"var":"borrowerDetailTableVariable1"},100000000]},{"if":[{">":[{"var":"borrowerDetailTextVariable51"},0]},{">=":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},false]},false]},
                                //     "validationError": {"if":[{"<":[{"var":"borrowerDetailTableVariable1"},100000000]},{"if":[{">":[{"var":"borrowerDetailTextVariable51"},0]},{">=":[{"var":"borrowerDetailTableVariable1"},{"var":"borrowerDetailTableVariable3"}]},"Net worth can not be Negative"]},"Assets should be less than 10 Crore"]}
                                //     },
                                //     "rulesFor": "",
                                //     "regex": null,
                                //     "options": [],
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "placeholderText": "Networth",
                                //     "fieldName": "borrowerDetailTextVariable51",
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "showField": false,
                                //     "showForYes": true
                                //  },
                                //  {
                                //     "fieldDataType": "DROPDOWN",
                                //     "isMandatory": false,
                                //     "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE46",
                                //     "fieldLabel": "Guarantee Cover Type",
                                //     "fieldAccessModifier": "EDITABLE",
                                //     "minLength": 6,
                                //     "maxLength": 15,
                                //     "error": null,
                                //     "value": null,
                                //     "rulesFor": [],
                                //     "regex": null,
                                //     "options": [],
                                //     "validationJson": null,
                                //     "regexErrorMessage": null,
                                //     "rowNo": null,
                                //     "columnNo": null,
                                //     "groupName": "Business Details",
                                //     "groupIndex": 4,
                                //     "placeholderText": "Guarantee Cover Type",
                                //     "fieldName": "textVariable46",
                                //     "labelInfo": null,
                                //     "showLabel": true,
                                //     "showField":true,
                                //     "showForYes": true
                                //   },
                                {
                                    "fieldDataType": "TEXT",
                                    "dependentField": null,
                                    "isMandatory": false,
                                    "fieldLabel": "Name of the Key Person",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 15,
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
                                    "fieldName": "keyName",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Key Person Details",
                                    "groupIndex": 5,
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
                                    "groupName": "Key Person Details",
                                    "groupIndex": 5,
                                    "placeholderText": "Education Qualification",
                                    "fieldName": "directorTextVariable4",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true,
                                    "showForYes": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_DETAIL_VARIABLE77",
                                    "fieldLabel": "Experience in Line of Activity (Years)",
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
                                    "placeholderText": "Experience in Line of Activity (Years)",
                                    "fieldName": "directorTextVariable5",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Key Person Details",
                                    "groupIndex": 5,
                                    "showField": true,
                                    "showForYes": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                                    "fieldLabel": "Residence Ownership Type",
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
                                    "placeholderText": "Select Residence Ownership Type",
                                    "fieldName": "addressTwoOwnershipType",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Key Person Details",
                                    "groupIndex": 5,
                                    "showField": true,
                                    "showForYes": true
                                },
                                {
                                    "fieldDataType": "DATE",
                                    "isMandatory": true,
                                    "fieldLabel": "Occupied Since",
                                    "fieldAccessModifier": "EDITABLE",
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
                                    "groupName": "Key Person Details",
                                    "groupIndex": 5,
                                    "placeholderText": "DD/MM/YYYY",
                                    "fieldName": "addressTwoLivingSince",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true,
                                    "showForYes": true
                                },
                            ]
                        },
                        
                        
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
                            "titleData": "Supporting Documents",
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "mb-10 common-info",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please share document online or upload .pdf files less than 5 Mb each. All documents are mandatory."
                        }
                    }
                ],
                "KEY_FACT_DETAILS": [
                    {
                        "componentType": "GRID",
                        "validateSection": false,
                        "className": "display-flex j-c-sb a-i-c",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
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
                                    "componentType": "BUTTON",
                                    "validateSection": false,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Download Key Fact Statement",
                                        "actionId": "KEYFACT_DOWNLOAD",
                                        "className": "btn-orange",
                                        "isShow": true
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
                                        <span>`, { "var": "$scope.loanDetails.loanDetails.borrower" }, `</span>
                                        </div>
                                        <div class="display-flex flex-col">
                                            <label class="text-info">Home Branch Address</label>
                                            <span class="fw-bold f-15"> Bank of India `, { "var": "$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName" },
                                    ` Branch</span>
                                        <div>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value" },
                                    ` </span>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue" },
                                    ` </span>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue" },
                                    ` </span>
                                        <span class="common-info">`,
                                    { "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue" },
                                    ` </span>
                                        </div>
                                        </div>
                                        <div class="display-flex flex-col mb-20">
                                            <label class="text-info">Sanction Date</label>
                                            <span>`, { "var": "metaConfig.customData.todayDate" },
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
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mt-10 mb-20 keyfact-table",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.termLoanAmount" }
                                    },
                                    {
                                        "sno": "(ii)",
                                        "title": "Total Interest  charge during the entire tenure of the loan",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.payableInterest" }
                                    },
                                    {
                                        "sno": "(iii)",
                                        "title": "Other up-front charges, if any",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                                    },
                                    {
                                        "sno": "a",
                                        "title": "Processing Fees, if any",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                                    },
                                    {
                                        "sno": "b",
                                        "title": "Insurance Charges if any",
                                        "data": "Insurance premium depends upon the nature of assets. Refer sanction letter"
                                    },
                                    {
                                        "sno": "c",
                                        "title": "Other Charges, if any",
                                        "data": 0
                                    },
                                    {
                                        "sno": "(iv)",
                                        "title": "Net Disbursed Amount",
                                        "data": { "-": [{ "var": "$scope.fetchRepaymentSchedule.object.principal" }, { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }] }
                                    },
                                    {
                                        "sno": "(iv - a)",
                                        "title": "Overdue Amount",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.overdueAmount" }
                                    },
                                    {
                                        "sno": "(v)",
                                        "title": "Total amount to be paid by the borrower [i + ii + iv-a]",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.totalPayable" }
                                    },
                                    {
                                        "sno": "(vi)",
                                        "title": "Annual Percentage Rate - Effective annualized interest rate",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.irrCalculated" }
                                    },
                                    {
                                        "sno": "(vii)",
                                        "title": "Tenure of the Loan (months)",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.totalLoanTenure" }
                                    },
                                    {
                                        "sno": "(viii)",
                                        "title": "Repayment frequency by the borrower",
                                        "data": "Monthly"
                                    },
                                    {
                                        "sno": "(ix)",
                                        "title": "Number of installments of repayment",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.loanTenure" }
                                    },
                                    {
                                        "sno": "(x)",
                                        "title": "Amount of each installments of repayment",
                                        "data": { "var": "$scope.fetchRepaymentSchedule.object.emiToBePaid" }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mb-20 keyfact-table",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                                        "sno": "(xi)",
                                        "title": "Rate of annualized penal charges in case of delayed payements",
                                        "data": "2% overdue amount"
                                    },
                                    {
                                        "sno": "(xii)",
                                        "title": "Rate of annualized other penal charges",
                                        "data": "2% overdue amount"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mb-20 keyfact-table",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                                        "sno": "(xiii)",
                                        "title": "Cooling off/look-up period during which borrower shall not be charged any penalty on prepayment of loan ",
                                        "data": "3 days"
                                    },
                                    {
                                        "sno": "(xiv)",
                                        "title": "Details of LSP acting as recovery agent and authorized to approach the borrower ",
                                        "data": "Bank officer shall visit for recovery"
                                    },
                                    {
                                        "sno": "(xvi)",
                                        "title": "Name, designation , address and phone number of nodal grievance redressal officer deisgnated specifically to deal with Fintech/digital lending related complaints /issues",
                                        "data": "Mr. Swapnil Shaha Head Office, Digital Lending Department, Mumbai Phone: 022-69179418"
                                    }
                                ]
                            }
                        }
                    }, {
                        "componentType": "GRID",
                        "validateSection": false,
                        "className": "display-flex j-c-sb a-i-c mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
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
                                    "componentType": "BUTTON",
                                    "validateSection": false,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Download Repayment Schedule",
                                        "actionId": "REPAYMENT_SCHEDULE_DOWNLOAD",
                                        "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                        "prefixIcon": {
                                            "className": "material-symbols-outlined clr-orange ",
                                            "iconName": "download"
                                        },
                                        "isShow": true
                                    }
                                }
                            ]
                        }
                    }, {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "",
                        "sectionContent": {
                            "isShow": true,
                            "config": {
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
                        "componentType": "ORDERED_LIST",
                        "validateSection": false,
                        "className": "mb-20",
                        "sectionContent": {
                            "isShow": true,
                            "listItem": [
                                "This repayment schedule is based on present effective ROI linked to Bank’s RBLR. This Repayment schedule may get change with change in ROI",
                                "Insurance charges to be paid on actual basis as per third party insurance providers/Companies"
                            ]
                        }
                    },
                    {
                        "componentType": "GRID",
                        "validateSection": true,
                        "className": "display-flex gap-10 action-wrapper  a-i-c mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
                                {
                                    "componentType": "BUTTON",
                                    "validateSection": true,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Proceed",
                                        "actionId": "KEYFACT_ACCEPT",
                                        "className": "mat-focus-indicator btn-orange mat-stroked-button mat-button-base",
                                        "isShow": true,

                                    }
                                }, {
                                    "componentType": "BUTTON",
                                    "validateSection": true,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Decline",
                                        "actionId": "KEYFACT_DECLINE",
                                        "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                        "isShow": true,

                                    }
                                }]
                        }
                    }
                ],
                "LOAN_SUMMARY": [{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "className": 'mt-5 d-flex align-items-center congradulation-text mb-20',
                    "validationJson": { 'content': { "cat": ["Congratulations, ", { "var": "$scope.borrowerDetails.borrowerDetail.fullName" }] } },
                    "sectionContent": {
                        "titleData": `Congratulations,`,
                        "isShow": true,
                        "endContent": [{
                            "componentType": 'ICON',
                            "className": 'ml-10',
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": '/assets/icons/gift.png'
                            }
                        }]
                    }
                }, {
                    "componentType": "HTML_CONTENT",
                    "className": "common-info display-flex a-i-c",
                    "validationJson": {
                      "content": {
                        "cat": [
                          "<div>Your ",
                          {
                            "var": "$scope.loanDetails.loanDetails.purpose"
                          },
                          " applicable with an amount of <b>Rs. ",
                          {
                            "var": "$scope.loanDetails.loanDetails.totalSanctionAmount"
                          },
                          " </b>has been approved successfully.</div>"
                        ]
                      }
                    },
                    "validateSection": false,
                    "sectionContent": {
                      "isShow": true,
                      "htmlData": "Your MSME Renewal Loan applicable with an amount of Rs. <span> class='redirectAction ml-5'>₹ </span> has been approved successfully."
                    }
                  }, {
                    "componentType": 'PARAGRAPH',
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
                        "paragraphData": "Your Application Reference #"
                    }
                },

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
                ]
            },
            'corporate': {},
            'group': {}
        },
        
    };
    pageMetaConfig = {
        'MSMERE': {
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
                      }
                    ]
                  },
                "EKYC_VERIFY": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Verify',
                    'formIndex': 1,
                    'otpIndex': 3,
                    'consentIndex': 2,
                    "dataScopeFetchFlow": [{
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData', "metaData"],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},{"if":[{"!=":[{"var":"metaData.capturedData.AccountData.identityNumberOne"},null]},"PROCEED","PRODUCT_ERROR"]},"PRODUCT_ERROR"]}
                    }],
                    "prepopulationRemaps": {
                        "identityNumberOne": {"if":[{"!=":[{"var":"metaData.capturedData.AccountData.identityNumberOne"},null]},"metaData.capturedData.AccountData.identityNumberOne","fetchBorrowerDetails.borrowerDetail.identityNumberOne"]},
                    },
                    'formSubmitFlow': [
                        // {
                        //     "submitflow": "nameMatch",
                        //     "saveResponseToCapturedData": true,
                        //     "dataFeedCloud": [
                        //         "product",
                        //         "formValue",
                        //         "capturedData"
                        //     ],
                        //     "validationJson": { "if": [{"==": [{ 'journeyValue': ['isEtb']}, null]}, 'EXECUTE', 'NEXT'] },
                        //     "params": [
                        //         "access_token",
                        //         "loanUuid",
                        //         [
                        //             "applicationSource",
                        //             "STATIC",
                        //             "WEB_JOURNEY"
                        //         ],
                        //         [
                        //             "microservicetoken",
                        //             "oauthAccessToken"
                        //         ],
                        //         [
                        //             "preset",
                        //             "STATIC",
                        //             "G"
                        //         ],
                        //         [
                        //             "type",
                        //             "individualorcompany"
                        //         ],
                        //         [
                        //             "allowPartialMatch",
                        //             "STATIC",
                        //             true
                        //         ],
                        //         [
                        //             "name1",
                        //             "STATIC",
                        //             ""
                        //         ],
                        //         [
                        //             "name2",
                        //             "STATIC",
                        //             ""
                        //         ],
                        //         ['finacleRequest', 'STATIC', 'KISHORE_MUDRA']
                        //     ],
                        //     "validateResponse": {
                        //         //   "if": [
                        //         //     {
                        //         //       "and": [
                        //         //         {
                        //         //           "==": [
                        //         //             {
                        //         //               "var": "nameMatchResult.result.result"
                        //         //             },
                        //         //             true
                        //         //           ]
                        //         //         },
                        //         //         {
                        //         //           "==": [
                        //         //             {
                        //         //               "var": "blacklistedFlag"
                        //         //             },
                        //         //             false
                        //         //           ]
                        //         //         }
                        //         //       ]
                        //         //     },
                        //         //     {
                        //         //         if:[{'journeyValue':['isEtb']},'ACCOUNT_VERIFY',"PROCEED"]
                        //         //     },
                        //         //     {
                        //         //         if:[{'journeyValue':['isEtb']},'ACCOUNT_VERIFY',"PROCEED"]
                        //         //     }

                        //         // "and": [{ "==": [{ "var": "nameMatchResult.result.result" }, true] },
                        //         // { "==": [{ "var": "blacklistedFlag" }, false] }]
                        //         "if": [{        
                        //             "and" : [
                        //                 {  ">" :[{ "var": "nameMatchResult.result.score" },65]},
                        //                 { "and": [{ "==": [{ "var": "nameMatchResult.result.result" }, true] }, { "==": [{ "var": "blacklistedFlag" }, false] }]}
                        //                ] 
                        //         }, "PROCEED", "PRODUCT_ERROR"
                        //         ]
                        //     },
                        //     "apiError": "PRODUCT_ERROR",
                        //     //"journeyEventCodeAfterResponseFailure": "NAME_MATCH"
                        // },
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
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                                ],
                                [
                                    "identityType",
                                    "STATIC",
                                    "AADHAR"
                                ],
                                [
                                    "applicantType",
                                    "RULE_OUTPUT",
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"BORROWER_COMPANY"]}
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
                            "apiError": "PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseSucess": "AADHAR_VERIFY"
                        },
                        //   {
                        //     "submitflow":"personalProfileUpdate",
                        //     "dataFeedCloud":["product","formValue","capturedData"],
                        //     "params":["loanUuid","access_token","identityNumberOne","firstName","lastName","middleName","gender",
                        // "dateOfBirth","line1","line2","line3","district","city","state","zipCode"],

                        // },
                    ],
                },
                "ADDRESS_DETAILS": {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Submit',
                    'formSubmitFlow': [{
                        "journeyEventCodeAfterResponseSucess": "ADDRESS_DETAILS"
                    }],
                },
                "ACCOUNT_VERIFY": {
                    'showLeftContent': true,
                    'showStepper': false,
                    'showSubStepper': false,
                    'fieldLabel': 'Verify',
                    "editButton": "Edit A/C Number",
                    "closeButton": "Close Application",
                    'otpIndex': 6,
                    'paragraphIndex': 4,
                    'consentIndex': 5,
                    'formIndex': 3,
                    'formSubmitFlow': [
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, true] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "showBorrowerDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                            "saveResponseToCapturedData":true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "checkResumeJourney": [] }, true] }, { "getResume": [] }, 'PROCEED'] },
                        },
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "applyLoan",
                            "dataFeedCloud": ['product', 'formValue'],
                            "saveResponseToProduct": true,
                            "params": ['access_token', 'borrowerUuid', 'loanPurposeUuid', ['loanAmount', 'minLoanAmount'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                            "journeyEventCodeAfterResponseSucess": "ACCOUNT_VERIFY",
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
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
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "fetchAccountData",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "saveResponseToProduct": true,
                            "saveResponseToCapturedData":true,
                            "params": [
                            'access_token', 'accountNumber', 
                            ['finacleRequest', 'STATIC', 'MSME_RENEWAL'], 
                            ['microservicetoken', 'oauthAccessToken'], 
                            ['requestFor', "RULE_OUTPUT", {"if":[{"==":[{"var":"individualorcompany"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"individualorcompany"},"COMPANY"]},"BORROWER_COMPANY"]}],
                            ['applicationSource', 'STATIC', 'WEB_JOURNEY']
                        ],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED",{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
                        },
                        // update the personalProfileUpdate API data from fetchGenralAccountResponse
                        // {
                        //     "submitflow": "personalProfileUpdate",
                        //     "dataFeedCloud": ['product', 'formValue'],
                        //     "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"], 
                        //     ['title',"currentFormSubmitResponses.fetchAccountData.object.title"], 
                        //     ['firstName',"currentFormSubmitResponses.fetchAccountData.object.firstName"],
                        //     ['middleName',"currentFormSubmitResponses.fetchAccountData.object.middleName"],
                        //     ['lastName',"currentFormSubmitResponses.fetchAccountData.object.lastName"],
                        //     ['gender',"currentFormSubmitResponses.fetchAccountData.object.gender"],
                        //     ['dateOfBirth',"currentFormSubmitResponses.fetchAccountData.object.dateOfBirth"],
                        //     ['maritalStatus',"currentFormSubmitResponses.fetchAccountData.object.maritalStatus"],
                        //     ['borrowerDetailTextVariable6',"currentFormSubmitResponses.fetchAccountData.object.borrowerDetailTextVariable6"],
                        //     ['educationType',"currentFormSubmitResponses.fetchAccountData.object.educationType"],
                        //     ['mobileNumber',"currentFormSubmitResponses.fetchAccountData.object.mobileNumber"],
                        //     ['alternativeUsername',"currentFormSubmitResponses.fetchAccountData.object.alternativeUsername"],
                        //     ['citizenship',"currentFormSubmitResponses.fetchAccountData.object.citizenship"],
                        //     ['borrowerDetailTextVariable11',"currentFormSubmitResponses.fetchAccountData.object.borrowerDetailTextVariable11"],
                        //     ['borrowerDetailTextVariable21',"currentFormSubmitResponses.fetchAccountData.object.borrowerDetailTextVariable21"],
                        //         ['line1',"currentFormSubmitResponses.fetchAccountData.object.line1"],
                        //         ['line2',"currentFormSubmitResponses.fetchAccountData.object.line2"],
                        //         ['line3',"currentFormSubmitResponses.fetchAccountData.object.line3"],
                        //         ['subDistrict',"currentFormSubmitResponses.fetchAccountData.object.subDistrict"],
                        //         ['zipCode',"currentFormSubmitResponses.fetchAccountData.object.zipCode"],
                        //         ['district',"currentFormSubmitResponses.fetchAccountData.object.district"],
                        //         ['city',"currentFormSubmitResponses.fetchAccountData.object.city"],
                        //         ['state',"currentFormSubmitResponses.fetchAccountData.object.state"],
                        //         ['addressOneLine1',"currentFormSubmitResponses.fetchAccountData.object.addressOneLine1"],
                        //         ['addressOneLine2',"currentFormSubmitResponses.fetchAccountData.object.addressOneLine2"],
                        //         ['addressOneLine3',"currentFormSubmitResponses.fetchAccountData.object.addressOneLine3"],
                        //         ['addressOneSubDistrict',"currentFormSubmitResponses.fetchAccountData.object.addressOneSubDistrict"],
                        //         ['addressOneZipCode',"currentFormSubmitResponses.fetchAccountData.object.addressOneZipCode"],
                        //         ['addressOneState',"currentFormSubmitResponses.fetchAccountData.object.addressOneState"],
                        //         ['addressOneDistrict',"currentFormSubmitResponses.fetchAccountData.object.addressOneDistrict"],
                        //         ['addressOneOwnershipType',"currentFormSubmitResponses.fetchAccountData.object.addressOneOwnershipType"],
                        //         ['addressOneLivingSince',"currentFormSubmitResponses.fetchAccountData.object.addressOneLivingSince"],
                        //         ["saveMandatoryTab", "STATIC", true]
                        //     ],
                        //     "apiError": "PRODUCT_ERROR",
                        //     "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        // },
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow":"npaCheck",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',"loanUuid",["custId","currentFormSubmitResponses.fetchAccountData.object.CUSTOMER_ID"],['microservicetoken','oauthAccessToken'],['applicationSource', 'STATIC', 'WEB_JOURNEY'],['finacleRequest', 'STATIC', 'MSME_RENEWAL']],
                            "saveResponseToCapturedData":true,
                            "journeyEventCodeAfterResponseFailure": "NPA_FAIL",
                            "validateResponse": {"if":[{"==":[{"var":"code"},"200"]},{"if":[{"==":[{"var":"npaFlag"},"N"]},"PROCEED[JOURNEY_EVENT_CODE]NPA_SUCCESS",{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "fetchAndValidateActiveAccounts",
                            "dataFeedCloud": ['product', 'formValue'],
                            "apiError": "PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseFailure": "SMA_FAIL",
                            "params": [
                                'access_token',
                                'loanUuid',
                                ['microservicetoken', 'oauthAccessToken'],
                                ['custId', 'currentFormSubmitResponses.fetchAccountData.object.CUSTOMER_ID'],//nned to get from getchgeneralaccount response
                                ['finacleRequest', 'STATIC', 'MSME_RENEWAL'],
                                ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]SMA_SUCCESS",
                                {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
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
                                "EDW data fetch Succussfully"
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
                        // {
                        //     "submitflow": "updateMainLoanApplicationStatus",
                        //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        //     // "validateResponse": { if: [{ 'journeyValue': ['isDedupe'] }, 'UDYAM_VERIFY', "UDYAM_VERIFY"] },
                        //     "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]},
                        //     "saveResponseToProduct": true,
                        //     "apiError": "PRODUCT_ERROR",
                        //     "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'INITIALIZED'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_3'], ['statusChangeDescription', 'STATIC', 'For ETB document upload'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                        // },
                        // {
                        //     "submitflow": "updateLoanApplicationTrackingStatus",
                        //     "dataFeedCloud": ['product', 'formValue'],
                        //     "apiError": "PRODUCT_ERROR",
                        //     "params": ['access_token', 'loanUuid', ['nextPage', 'STATIC', 'BORROWER_PERSONAL_DETAIL'], ['completedPage', 'STATIC', 'BORROWER_BASIC_DETAIL']],
                        //     "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                        // }

                    ]
                },
                //  PREVIEW_PAGE

                "TRACK_APPLICATION": {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Resume my Application'
                },
                'PERSONAL_DETAILS': {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Continue',
                    "journeyEventCodeAfterResponseSucess": "PERSONAL_DETAILS"
                },
                "PRODUCT_SELECTION": {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Preview'
                },
                'UDYAM_VERIFY': {
                    'showLeftContent': false,
                    'showSubStepper': true,
                    'showStepper': true,
                    'skipPage': false,
                    'buttonSkip': 'Skip this Step',
                    'fieldLabel': 'Continue',
                    "dataScopeFetchFlow": [{
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
                    }],
                    "prepopulationRemaps":{
                        "textVariable3": "metaData.capturedData.AccountData.UDYAM_NUMBER_MASKED"
                    },
                    'formSubmitFlow': [
                        {
                            "submitflow": "verifyUdyam",
                            "dataFeedCloud": ['product', 'formValue','capturedData', "metaData"],
                            "params": ['access_token', ['infoType', 'STATIC', 'udhyam'], ['requestFor', 'RULE_OUTPUT', {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER_SELF_EMPLOYMENT_DETAIL",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"COMPANY_DETAIL"]}], "loanUuid", ['udhyamNumber', 'metaData.capturedData.AccountData.UDYAM_NUMBER'],
                            ["microservicetoken","oauthAccessToken"]
                        ],
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]UDYAM_VERIFY",{"cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"}]}]},
                            "validationErrorMessage": "Please provide a valid udyam number",
                            "apiError": "PRODUCT_ERROR",
                            "SaveResponseToCapturedData": true
                        },
                        {
                            "validationJson": {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"EXECUTE","NEXT"]},
                            "submitflow": "updateSelfEmploymentDetails",
                            "dataFeedCloud": ['product', 'formValue', "capturedData", "metaData"],
                            "params": ['access_token', ['loanApplicationUuid', 'loanUuid'], ["microservicetoken", "oauthAccessToken"], 'textVariable3', ['textVariable6', "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable6"], ["textVariable10", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable10"],
                                ["textVariable7", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable7"], ["dateVariable1", "currentFormSubmitResponses.verifyUdyam.mappingFields.dateVariable1"],
                                ["textVariable47", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable47"],
                                ["textVariable48", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable48"],
                                ["textVariable49", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable49"],
                                ["nicCodeDescription", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCodeDescription"],
                                ["nicCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCode"],
                                ["addressOneLine1", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLine1"],
                                ["addressOneLine2", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLine2"],
                                ["addressOneLine3", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLine3"],
                                ["addressOneSubDistrict", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneSubDistrict"],
                                ["addressOneZipCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneZipCode"],
                                ["addressOneLivingSince", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLivingSince"],
                                ["addressOneCity", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneCity"],
                                ["addressOneCountry", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneCountry"],
                                ["addressOneState", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneState"],
                                ["addressOneDistrict", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneDistrict"],
                                ["addressOneOwnershipType", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneOwnershipType"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",

                        },
                        {
                            "validationJson": {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"EXECUTE","NEXT"]},
                            "submitflow": "updateCompanyProfileUpdate",
                            "dataFeedCloud": ['product', 'formValue', "capturedData", "metaData"],
                            "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"], ["companyIdentityNumberOne",'textVariable3'], ['companyName', "currentFormSubmitResponses.verifyUdyam.mappingFields.companyName"], 
                                ["borrowerCompanyTextVariable10", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable10"],
                                ["borrowerCompanyTextVariable7", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable7"], 
                                ["companyCategory", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyCategory"],
                                ["borrowerCompanyTextVariable1", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable1"],
                                ["borrowerCompanyTextVariable2", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable2"],
                                ["borrowerCompanyTextVariable5", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable5"],
                                ["borrowerCompanyTextVariable19", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable19"],
                                ["nicCodeDescription", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCodeDescription"],
                                ["nicCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCode"],
                                ["dateOfArticle", "currentFormSubmitResponses.verifyUdyam.mappingFields.dateOfArticle"],
                                ["line1", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line1"],
                                ["line2", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line2"],
                                ["line3", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line3"],
                                ["subDistrict", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.subDistrict"],
                                ["zipCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.zipCode"],
                                ["livingSince", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.livingSince"],
                                ["city", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.city"],
                                ["country", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.country"],
                                ["state", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.state"],
                                ["district", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.district"],
                                ["ownershipType", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.ownershipType"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",

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
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                                ],
                                [
                                    "identityType",
                                    "STATIC",
                                    "UDYAM"
                                ],
                                [
                                    "applicantType",
                                    "RULE_OUTPUT",
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"BORROWER_COMPANY"]}
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
                        },
                        {
                            "submitflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'INITIALIZED'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_11'], ['statusChangeDescription', 'STATIC', 'Credit Bureau'], ["subStatusChangeDescription", "STATIC", "Credit Bureau"], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        }
                    ]
                },
                "MORE_INFO": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Continue',
                    'callUserHierarchy': true,
                    'formSectionIndex': 1,
                    "renewalSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "Your application will be reviewed at same level"
                            }
                        }
                      ],
                    "CCEligibilityRoundSection":[
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "You are maximum eligible for CC eligibility round (Amount) Do you want to proceed"
                            }
                        }
                    ],
                    "newTlSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "You are eligible for amount Rs for New Term Loan. Do you want to proceed."
                            }
                        }
                      ],
                    "newCCSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "You are eligible for amount Rs for New Cash Credit. Do you want to proceed."
                            }
                        }
                      ],
                    "actionItems": [
                        {
                            actionKey: true,
                            actionLabel: 'Ok'
                        }
                    ],
                    'prepopulationRemaps': {
                    },
                    "dataScopeFetchFlow": [
                        {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    {
                        "fetchflow": "fetchEligibilityDetails",
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ["applicationId", "loanUuid"]],
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},{"if":[{"and":[{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]}]},"PROCEED[JOURNEY_EVENT_CODE]ENHANCEMENT_FLOW[JOURNEY_EVENT_CODE]NEW_ENHANCEMENT",{"if":[{"and":[{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]}]},"PROCEED[JOURNEY_EVENT_CODE]ENHANCEMENT_EXISITING_FLOW[JOURNEY_EVENT_CODE]NO_ENHANCEMENT",{"if":[{"and":[{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.reqRenewalType"},"EXISTING_LIMIT"]},{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]}]},"PROCEED[JOURNEY_EVENT_CODE]EXISITING_FLOW[JOURNEY_EVENT_CODE]NO_ENHANCEMENT","PROCEED"]}]}]},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
                    },
                    {
                        "fetchflow": "saveOrUpdateRenewalType",
                        "validate":{"if":[{"and":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]}]},"EXECUTE","NEXT"]},
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', "loanUuid", ["renewalType","STATIC","EXISTING_LIMIT"], ['microservicetoken', 'oauthAccessToken'], ["applicationSource","STATIC","WEB_JOURNEY"]],
                        "validateResponse": {
                            "if": [{
                                "==": [{ "var": "fetchFlowResponse.code" }, "200"]
                            }, 'PROCEED', 'PRODUCT_ERROR']
                        }
                    },
                    {
                        "fetchflow": "saveMsmeSecurityDcoument",
                        "validate":{"if":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]},"EXECUTE","NEXT"]},
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', "loanUuid", ["renewalType","STATIC","ENHANCEMENT"], ['microservicetoken', 'oauthAccessToken'], ["htmlTextVariable46","STATIC", `<table border="0" width="100%" cellspacing="0" cellpadding="0" style="table-layout: fixed;font-family:Arial, Helvetica, sans-serif;" class="wbtable"><td colspan="5" style="padding: 10px 4px 2px 4px !important; font-size: 13px !important; border: 1px solid black !important; background: #eaeaea !important; text-align: left !important; font-weight: bold !important;">\n\t\t\t\t\tSecurity Document List\n\t\t\t\t\t\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;border-left: 1px solid black !important;text-align: center;">\n\t\t\t\t\tDocument Code\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tDocument Description\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tExisting\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tProposed\n\t\t\t\t`]],
                        "validateResponse": {
                            "if": [{
                                "==": [{ "var": "fetchFlowResponse.code" }, "200"]
                            }, 'PROCEED', 'PRODUCT_ERROR']
                        }
                    },
                    {
                        "fetchflow": "saveMsmeSecurityDcoument",
                        "validate":{"if":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]},"EXECUTE","NEXT"]},
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', "loanUuid", ["renewalType","STATIC","EXISTING_LIMIT"], ['microservicetoken', 'oauthAccessToken'], ["htmlTextVariable46","STATIC", `<table border="0" width="100%" cellspacing="0" cellpadding="0" style="table-layout: fixed;font-family:Arial, Helvetica, sans-serif;" class="wbtable"><td colspan="5" style="padding: 10px 4px 2px 4px !important; font-size: 13px !important; border: 1px solid black !important; background: #eaeaea !important; text-align: left !important; font-weight: bold !important;">\n\t\t\t\t\tSecurity Document List\n\t\t\t\t\t\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;border-left: 1px solid black !important;text-align: center;">\n\t\t\t\t\tDocument Code\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tDocument Description\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tExisting\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tProposed\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL515\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tDecl Re. Relation with Sr officers/Dirs. of Bank.\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL444C\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tAcknowledgement of Debt and Security L 444C\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tCBD23\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tCBD 23 filled by owners/guarantors etc.\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL434\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tDemand Promissory Note\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL435\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tLoan Bearer Letter\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL440\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tInstalment Letter\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t"`]],
                        "validateResponse": {
                            "if": [{
                                "==": [{ "var": "fetchFlowResponse.code" }, "200"]
                            }, 'PROCEED', 'PRODUCT_ERROR']
                        }
                    },
                    // {
                    //     "fetchflow":'fetchRatingScore',
                    //     "validate":{"if":[{"and":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]}]},"EXECUTE","NEXT"]},
                    //     "dataFeedCloud":['product','formValue','capturedData'],
                    //     "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
                    //     "saveResponseToCapturedData":true,
                    //     "validateResponse":{"if":[{"==":[{"var":"output.ratingOutput.isQualified"},'YES']},'PROCEED','PRODUCT_ERROR']},
                    //     "apiError":"PRODUCT_ERROR"
                    // },
                    {
                        "fetchflow":"multiFacilityRetreive",
                        "dataFeedCloud":["product","formValue","capturedData"],
                        "saveResponseToProduct":true,
                        "params":["access_token","loanUuid",["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"],["microservicetoken","oauthAccessToken"]],
                        "apiError":"PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.responseAttr.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    {
                        "fetchflow": "fetchMultiFacilityList",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "saveResponseToProduct": true,
                        "params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken'], "loanPurposeUuid", ["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"]],
                        "apiError": "PRODUCT_ERROR"
                    },
                    {
                        "fetchflow": "fetchSecurityDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "saveResponseToProduct": true,
                        "params": ['access_token', 'loanUuid', ["type", "STATIC", "PRIMARY"],[
                            "microservicetoken",
                            "oauthAccessToken"
                          ],],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    // {
                    //     "fetchflow": "updateMainLoanApplicationStatus",
                    //     "validate":{"if":[{"and":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]}]},"EXECUTE","NEXT"]},
                    //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                    //     "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                    //     "saveResponseToProduct": true,
                    //     "apiError": "PRODUCT_ERROR",
                    //     "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L6'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_6'], ['statusChangeDescription', 'STATIC', 'Enhancement case if new facility added by user'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                    // },
                    // {
                    //     "fetchflow": "updateMainLoanApplicationStatus",
                    //     "validate":{"if":[{"and":[{"!=":[{"var":"eligibilityDetails.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"!=":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]}]},"EXECUTE","NEXT"]},
                    //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                    //     "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                    //     "saveResponseToProduct": true,
                    //     "apiError": "PRODUCT_ERROR",
                    //     "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L6'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_7'], ['statusChangeDescription', 'STATIC', 'Enhancement case if new facility added by user'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                    // }
                    
                  ],
                    'formSubmitFlow': [
                        {
                            "submitflow": "updateLoanSanction",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken'], ["loanSanctionCOs", "capturedData.FACILITY_DETAILS"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]KFS_LOADED",{"cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "submitflow": "securityDetailsCreate",
                            "dataFeedCloud": ['product', 'formValue', "capturedData"],
                            "validationJson": {"if":[{"==":[{"var":"newTermloanPresent"},true]},"EXECUTE","NEXT"]},
                            "params": ['access_token','loanUuid', 
                            ["facilityUuid", "newTermloanDetails.loanFacilityUuid"],
                            ["type", "STATIC", "PRIMARY"],
                            ["securityType", "newTermloanDetails.facilityDetailsTextVariable1"],
                            ["description","RULE_OUTPUT", {"if":[{"!=":[{"var":"newTermloanDetails.facilityDetailsTableVariable1"},null]},{"getValueForDescription":[{"var":"newTermloanDetails.facilityDetailsTableVariable1"},"PID1"]},null]}],["basisValuation", "STATIC", "PROFORMA INVOICE/ QUOTATION"],["valuationAmount","newTermloanDetails.facilityDetailsNumberVariable1"],["valuationDate","STATIC",""],["margin","newTermloanDetails.facilityDetailsNumberVariable4"],["eligibleAmount","newTermloanDetails.requestedLimit"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "submitflow":'fetchRatingScore',
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
                            "saveResponseToCapturedData":true,
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError":"PRODUCT_ERROR"
                        }
                    ]
                },
                "CREDIT_FACILITY": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Continue',
                    'callUserHierarchy': true,
                    'formSectionIndex': 1,
                    'prepopulationRemaps': {
                        "title":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.title"]},
                        "firstName": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.firstName","borrowerDetails.borrowerDetail.firstName"]},
                        "lastName": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.lastName","borrowerDetails.borrowerDetail.lastName"]},
                        "dateOfBirth": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.dateOfBirth","borrowerDetails.borrowerDetail.dateOfBirth"]},
                        "middleName": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.middleName","borrowerDetails.borrowerDetail.middleName"]},
                        "borrowerDetailTextVariable6":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable6","borrowerDetails.borrowerDetail.borrowerDetailTextVariable6"]},
                        "maritalStatus":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.maritalStatus","borrowerDetails.borrowerDetail.maritalStatus"]},
                        "gender": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.gender","borrowerDetails.borrowerDetail.gender"]},
                        "citizenship": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.citizenship","borrowerDetails.borrowerDetail.citizenship"]},
                        "alternativeUsername": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.alternativeUsername","borrowerDetails.borrowerDetail.alternativeUsername"]},
                        "borrowerDetailTextVariable24":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable24","borrowerDetails.borrowerDetail.borrowerDetailTextVariable24"]},
                        "mobileNumber": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.mobileNumber","borrowerDetails.borrowerDetail.mobileNumber"]},
                        "subDistrict": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.subDistrict","borrowerDetails.borrowerDetail.personalAddress.subDistrict"]},
                        "line1": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.line1","borrowerDetails.borrowerDetail.personalAddress.line1"]},
                        "line2": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.line2","borrowerDetails.borrowerDetail.personalAddress.line2"]},
                        "line3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.line3","borrowerDetails.borrowerDetail.personalAddress.line3"]},
                        "zipCode": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.zipCode","borrowerDetails.borrowerDetail.personalAddress.zipCode"]},
                        "state": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.state","borrowerDetails.borrowerDetail.personalAddress.state"]},
                        "city": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.district","borrowerDetails.borrowerDetail.personalAddress.city"]},
                        "educationType": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.educationType","borrowerDetails.borrowerDetail.educationType"]},
                        "borrowerDetailTextVariable11": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable11","borrowerDetails.borrowerDetail.borrowerDetailTextVariable11"]},
                        "borrowerDetailTextVariable21": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable21","borrowerDetails.borrowerDetail.borrowerDetailTextVariable21"]},
                        "borrowerDetailTextVariable29": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable29","borrowerDetails.borrowerDetail.borrowerDetailTextVariable29"]},
                        "borrowerDetailTextVariable30": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable30","borrowerDetails.borrowerDetail.borrowerDetailTextVariable30"]},
                        "borrowerDetailTableVariable1": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTableVariable1","borrowerDetails.borrowerDetail.borrowerDetailTableVariable1"]},
                        "borrowerDetailTableVariable3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTableVariable3","borrowerDetails.borrowerDetail.borrowerDetailTableVariable3"]},
                        "borrowerDetailNumberVariable3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailNumberVariable3","borrowerDetails.borrowerDetail.borrowerDetailNumberVariable3"]},
                        "borrowerDetailNumberVariable4": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailNumberVariable4","borrowerDetails.borrowerDetail.borrowerDetailNumberVariable4"]},
                        "borrowerDetailTextVariable51": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable51","borrowerDetails.borrowerDetail.borrowerDetailTextVariable51"]},
                        "borrowerDetailNumberVariable12": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailNumberVariable12","borrowerDetails.borrowerDetail.borrowerDetailNumberVariable12"]},
                        "idProofNo":"borrowerDetails.borrowerDetail.identityNumberSeven",
                        "identityNumberTwoDueDate":"borrowerDetails.borrowerDetail.identityNumberTwoDueDate",
                        "residentIdProofNo":"borrowerDetails.borrowerDetail.identityNumberEight",
                        "identityNumberOneDueDate":"borrowerDetails.borrowerDetail.identityNumberOneDueDate",
                        "borrowerDetailTextVariable26":"borrowerDetails.borrowerDetail.borrowerDetailTextVariable26",
                        "borrowerDetailTextVariable23":"borrowerDetails.borrowerDetail.borrowerDetailTextVariable23",
                        "homeBranchState":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.stateValue",""]},
                        "homeBranchDistrict":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.districtValue",""]},
                        "homeBranchCity":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.cityValue",""]},
                        "branchCode":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.unitCode",""]}, 
                        "branchAddress":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.line1Value",""]},
                        "addressOneLine1": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLine1",""]},
                        "addressOneLine2": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLine2",""]},
                        "addressOneLine3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLine3",""]},
                        "addressOneSubDistrict": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneSubDistrict",""]},
                        "addressOneZipCode": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneZipCode",""]},
                        "addressOneState": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneState",""]},
                        "addressOneDistrict": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneDistrict",""]},
                        "addressOneOwnershipType": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneOwnershipType",""]},
                        "addressOneLivingSince": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLivingSince",""]},
                    },
                    "dataScopeFetchFlow": [
                        {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    }
                  ],
                    'formSubmitFlow': [
                        {
                            "submitflow": "assignUserHierarchyUnit",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "saveResponseToProduct": true,
                            "params": ['access_token', 'loanUuid', ['userHierarchyUnitCode', 'branchCode'],["microservicetoken","oauthAccessToken"]],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        }
                        ,
                        {
                            "submitflow": "personalProfileUpdate",
                            "dataFeedCloud": ['product', 'formValue'],
                            "params": ['access_token', 'loanUuid', 'title', 'firstName',
                                'middleName',
                                'lastName',
                                'gender',
                                'dateOfBirth',
                                'maritalStatus',
                                'borrowerDetailTextVariable6',
                                'educationType',
                                'numberOfDependents',
                                'mobileNumber',
                                'alternativeUsername',
                                'citizenship',
                                'borrowerDetailTextVariable11',
                                'borrowerDetailTextVariable21',
                                'borrowerDetailTextVariable29',
                                'borrowerDetailTextVariable24',
                                ["identityNumberSeven",
                                "RULE_OUTPUT",
                                {"if":[{"==":[{"var":"borrowerDetailTextVariable29"},"Aadhar Card"]},{"var":"borrowerDetails.borrowerDetail.identityNumberOne"},{"==":[{"var":"borrowerDetailTextVariable29"},"PAN Card"]},{"var":"borrowerDetails.borrowerDetail.identityNumberTwo"},{"var":"idProofNo"}]}
                                ],
                                'identityNumberTwoDueDate',
                                'borrowerDetailTextVariable30',
                                ["identityNumberEight",
                                "RULE_OUTPUT",
                                {"if":[{"==":[{"var":"borrowerDetailTextVariable30"},"Aadhar Card"]},{"var":"borrowerDetails.borrowerDetail.identityNumberOne"},{"var":"residentIdProofNo"}]}
                                ],
                                'identityNumberOneDueDate',
                                'borrowerDetailTextVariable26',
                                'borrowerDetailTextVariable23',
                                'line1',
                                'line2',
                                'line3',
                                'subDistrict',
                                'zipCode',
                                'district',
                                'city',
                                'state',
                                'ownershipType',
                                'livingSince',
                                "borrowerDetailTextVariable60",
                                'isComAddress',
                                'addressOneLine1',
                                'addressOneLine2',
                                'addressOneLine3',
                                'addressOneSubDistrict',
                                'addressOneZipCode',
                                'addressOneState',
                                'addressOneDistrict',
                                'addressOneOwnershipType',
                                'addressOneLivingSince',
                                "homeBranchState",
                                "homeBranchDistrict",
                                'homeBranchCity',
                                "branchCode",
                                "branchAddress",
                            ],
                            "apiError": "PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseSucess": "MORE_INFO",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }

                        }]
                },
                "EMPLOYMENT_DETAILS": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'continue',
                    "enhancementSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "Congratulation #customer name#, You are eligible for enhancement. Are you interested for enhance the limit"
                            }
                        },
                        {
                            "componentType": "PARAGRAPH",
                            "validateSection": false,
                            "className": "common-info mb-20",
                            "sectionContent": {
                              "isShow": true,
                              "paragraphData": "Note : subject to Bank internal rating and due diligence"
                            }
                        },
                      ],
                    "actionItems": [
                        {
                            actionKey: true,
                            actionLabel: 'No'
                        },
                        {
                            actionKey: true,
                            actionLabel: 'Yes'
                        }
                    ],
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData', ],
                            "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "fetchflow": "breEligiblityCheck",
                            "dataFeedCloud": ["product", "formValue", "metaData"],
                            "params": ["access_token",  "loanUuid",["applicationSource","STATIC","WEB_JOURNEY"],
                            [
                                "Uuid",
                                {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                            ]],
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.check_eligibility_res.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]BRE_QUALIFIED[JOURNEY_EVENT_CODE]SMA_MCP_QUAILIFIED","PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_NOT_QUALIFIED[JOURNEY_EVENT_CODE]SMA_MCP_NOT_QUAILIFIED"]},
                            "apiError": "PRODUCT_ERROR"
                        }
                        ],
                    'prepopulationRemaps': {
                        "textVariable6": "borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable3",
                        "accountName": "borrowerDetails.borrowerDetail.fullName",
                        "companyCategory":[{"if":[{"==":[{"var":"borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"Individual","borrowerDetails.borrowerDetail.borrowerType"]},{"isStaticMapping": true},"RULE_OUTPUT"],
                        "textVariable47":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable47",
                        "textVariable48":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable48",
                        "textVariable49":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable49"
                    },
                    'formSubmitFlow': [
                    {
                        "submitflow": 'selfemploymentUpdate',
                        "dataFeedCloud": ['product', 'formValue'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        "params": [["microservicetoken", "oauthAccessToken"], "textVariable6",["textVariable37", "STATIC", "No"],"textVariable38",["textVariable40", "STATIC", "Yes"],"textVariable47","textVariable48", "textVariable49", "addressOneLivingSince","addressOneOwnershipType", ['loanApplicationUuid', 'loanUuid'], 'access_token']
                    }, {
                        "submitflow": 'personalProfileUpdate',
                        "dataFeedCloud": ['product', 'formValue'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        "params": [["microservicetoken", "oauthAccessToken"],
                        // 'borrowerDetailTextVariable51',"borrowerDetailTableVariable1","borrowerDetailTableVariable3", "borrowerDetailNumberVariable3","borrowerDetailNumberVariable4",
                        ["addressOneOwnershipType", "communicationAddressOneOwnershipType"], ["addressOneLivingSince", "communicationAddressOneLivingSince"],
                        'textVariable6', "educationType", "borrowerDetailTextVariable77", ["borrowerDetailTextVariable49", "STATIC", "No"],
                        'loanUuid', 'access_token', ["saveMandatoryTab","STATIC",true]],
                        "journeyEventCodeAfterResponseSucess": "EMPLOYMENT_DETAILS"
                    },
                    {
                        "submitflow": "assignUserHierarchyUnit",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "saveResponseToProduct": true,
                        "params": ['access_token', 'loanUuid', ['userHierarchyUnitCode', 'AccountData.accountBranchDetail.userHierarchyUnitDetails.unitCode'],["microservicetoken","oauthAccessToken"]],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                    }
                    
                ],
           //     "journeyEventCodeAfterResponseSucess":"EMPLOYMENT_DETAILS"
            },
            "DOCUMENT_UPLOAD_V2": {
                'showLeftContent': false,
                'showStepper': true,
                'showSubStepper':false,
                'hideDocument':true,
                'fieldLabel':'Done',
                "documentStatusCheckData":{
                    "iteration":4,
                    "iterationDelay":5
                },
                'documentList': [
                    {
                        "documentCategoryCode": "DOC17",
                        "documentFor": "MAIN_APPLICANT",
                        "mandatory": false,
                        "showDocument": true,
                        "multipleUploadOption": true,
                        "multiBankOption": true,
                        "showUpload": false,
                        "documentType": "BANK_STATEMENT", //ITR,GST,FSA,SALARY_SLIP,DOCUMENT,DOCUMENT_ALIAS
                        "selectedBankData": {
                            value: null,
                            options: [{
                                name: "Bank of India",
                                // icon:"../../../assets/icons/favicon.png"
                            }, {
                                name: "Other Banks",
                                // icon:"../../../assets/icons/favicon.png"
                            }]

                        },
                        "selectedBank": {
                            'OB': {
                                uploadOptions: {
                                    'label': "Select Bank",
                                    "options": [{
                                        "icon": "ios_share",
                                        "name": "Share With AA",
                                        "code": "AA",
                                        "perfiosAnalysis": "generateLink",
                                        "processingType": "account",
                                        "applicationSource": "WEB_JOURNEY",
                                        "disabled": false,
                                        "underContent": "<span>Rbi Recommended</span>"//html write
                                    }, {
                                        "icon": "cloud_upload",
                                        "name": "Share With Netbanking",
                                        "code": "NB",
                                        "disabled": false,
                                        "perfiosAnalysis": "onlineFetch",
                                        "documentType": "ONLINE_FETCH",
                                        "underContent": ""//html write
                                    }, {
                                        "icon": "file_upload",
                                        "name": "e-PDF Statement",
                                        "code": "EDF",
                                        "perfiosAnalysis": "statementUpload",
                                        "disabled": false,
                                        "documentType": null,
                                        "underContent": null//html write
                                    },]
                                },
                                "label": "Please Select a option for sharing Your bank statement",
                                bankname: null
                            },
                            'BOI': {
                                uploadOptions: {
                                    'label': "Salary Account",
                                    "value": null,
                                    "options": null
                                }
                            }
                        },
                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"
                    },

                    {
                        "documentCategoryCode": "DOC77",
                        "documentFor": "MAIN_APPLICANT",
                        "showDocument": false,
                        "multipleUploadOption": false,
                        "mandatory": false,
                        "multiBankOption": true,
                        "showUpload": false,
                        "documentType": "ITR", //ITR,GST,FSA,SALARY_SLIP,DOCUMENT,DOCUMENT_ALIAS
                        // "selectedBank":{
                        //     'OB':{
                        uploadOptions: [{
                            "icon": "cloud_upload",
                            "name": "Fetch Online",
                            "code": "NB",
                            "disabled": false,
                            "perfiosAnalysis": "onlineFetch",
                            "documentType": "ONLINE_FETCH",
                            "underContent": ""//html write
                        }, {
                            "icon": "file_upload",
                            "name": "Upload ITR (e-PDF Doc)",
                            "code": "EDF",
                            "perfiosAnalysis": "statementUpload",
                            "disabled": false,
                            "documentType": null,
                            "underContent": null//html write
                        }],
                        //     },
                        //     'BOI':{
                        //         uploadOptions:{
                        //             'label':"Salary Account",
                        //             "value":null,
                        //             "options":null
                        //         }
                        //     }
                        // },

                        "label": "Please Select a option for sharing ITR statement",
                        bankname: null,

                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"

                    }, {
                        "documentCategoryCode": "DOC87",
                        "documentFor": "MAIN_APPLICANT",
                        "showDocument": false,
                        "multipleUploadOption": false,
                        "mandatory": false,
                        "multiBankOption": true,
                        "showUpload": false,
                        "showGstInput": true,
                        "documentType": "GST", //ITR,GST,FSA,SALARY_SLIP,DOCUMENT,DOCUMENT_ALIAS
                        // "selectedBank":{
                        //     'OB':{
                        uploadOptions: [
                            //     {
                            //     "icon":"cloud_upload",
                            //     "name":"Fetch Online",
                            //     "code":"NB",
                            //     "disabled":false,
                            //     "perfiosAnalysis":"onlineFetch",
                            //     "documentType": "ONLINE_FETCH",
                            //     "underContent":""//html write
                            //   },
                            {
                                "icon": "file_upload",
                                "name": "Upload GST (e-PDF Doc)",
                                "code": "EDF",
                                "perfiosAnalysis": "statementUpload",
                                "disabled": false,
                                "documentType": null,
                                "underContent": null//html write
                            }],
                        //     },
                        //     'BOI':{
                        //         uploadOptions:{
                        //             'label':"Salary Account",
                        //             "value":null,
                        //             "options":null
                        //         }
                        //     }
                        // },

                        "label": "Please Select a option for sharing GST statement",
                        bankname: null,

                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"
                    }
                ],

                    'customData': {},
                    'formSubmitFlow': [
                        {
                            "submitflow": "checkDocumentStatus",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "saveResponseToProduct": true,
                            "params": ["access_token", "loanUuid"],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},{"if":[{"==":[{"var":"formSubmitResponse.isBankStatementValid"},true]},"PROCEED",{"cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"}]}]},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
                        },
                        {
                            "validationJson":{"if":[{"and":[{"==":[{"var":"DOCUMENT_UPLOAD_V2.DOCUMENT_DATA.0.documentUploadStatus"},"COMPLETED"]},{"==":[{"var":"appConfig.nameMatchForDocumentPage"},true]}]},"EXECUTE","NEXT"]},
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
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                                ],
                                [
                                    "identityType",
                                    "STATIC",
                                    "BSA"
                                ],
                                [
                                    "applicantType",
                                    "RULE_OUTPUT",
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"BORROWER_COMPANY"]}
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
                            "journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
                            "validateResponse": {
                                "if": [
                                    { "==": [{ "var": "formSubmitResponse.code" }, "200"] },"PROCEED",
                                    {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}
                                ]
                            },
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "submitflow":'fetchRatingScore',
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
                            "saveResponseToCapturedData":true,
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError":"PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
                        }

                    ],
                    "dataScopeFetchFlow": [{
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    }, {
                        "fetchflow": "documentTypeFetch",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params":['access_token','loanPurposeUuid',['microservicetoken','oauthAccessToken'], "loanUuid",["applicationSource","STATIC","WEB_JOURNEY"],["documentFor","STATIC","MAIN_APPLICANT"]],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    {
                        "fetchflow": "documentFetch",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',['microservicetoken','oauthAccessToken']],
                        "apiError": "PRODUCT_ERROR"
                    },
                    // {
                    //     "fetchflow": 'cibilfetch',
                    //     "dataFeedCloud": ['product', 'formValue'],
                    //     "params": ['access_token', ['applicationId', 'loanUuid'], ['microservicetoken', 'oauthAccessToken']],
                    //     "validateResponse": {
                    //         "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] },
                    //         {
                    //             "if": [{ "==": [{ "var": "cibilCheckStatus" }, 'Qualified'] },
                    //                 "PROCEED[JOURNEY_EVENT_CODE]BRE_QUALIFIED_1[JOURNEY_EVENT_CODE]BRE_QUALIFIED",
                    //                 "PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_QUALIFIED_1[JOURNEY_EVENT_CODE]BRE_NOT_QUALIFIED"]
                    //         }, "PRODUCT_ERROR"]
                    //     },
                    //     "apiError": "PRODUCT_ERROR",
                    // },
                    // {
                    //     "fetchflow": "updateMainLoanApplicationStatus",
                    //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                    //     "saveResponseToProduct": true,
                    //     "apiError": "PRODUCT_ERROR",
                    //     "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'INITIALIZED'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_18'], ['statusChangeDescription', 'STATIC', 'BRE - Qualified'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                    //     "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    // }
                    ],
                },
                "KEY_FACT_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "DownloadKeyFact": true,
                    "DownloadMode": "API",
                    "customData": {
                        "showEsignButton": false
                    },
                    "declineKeyFactSection":[
                        {
                            "componentType": "FORM",
                            "validateSection": true,
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
                            }
                        }
                    ],
                    "TL_data": [
                        {
                            "sno": "(i)",
                            "title": "Loan Amount",
                            "data":  { "var":"$scope.fetchRepaymentSchedule.object.termLoanAmount"}
                        },
                        {
                            "sno": "(ii)",
                            "title": "Total Interest  charge during the entire tenure of the loan",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                        },
                        {
                            "sno": "(iii)",
                            "title": "Other up-front charges, if any",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                        },
                        {
                            "sno": "a",
                            "title": "Processing Fees, if any",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.processingCharges"}
                        },
                        {
                            "sno": "b",
                            "title": "Insurance Charges if any",
                            "data": "Insurance premium depends upon the nature of assets. Refer sanction letter"
                        },
                        {
                            "sno": "c",
                            "title": "Other Charges, if any",
                            "data": 0
                        },
                        {
                            "sno": "(iv)",
                            "title": "Net Disbursed Amount",
                            "data": {"-":[{"var":"$scope.fetchRepaymentSchedule.object.principal"},{"var":"$scope.fetchRepaymentSchedule.object.processingCharges"}]}
                        },
                        {
                            "sno": "(iv - a)",
                            "title": "Overdue Amount",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.overdueAmount" }
                        },
                        {
                            "sno": "(v)",
                            "title": "Total amount to be paid by the borrower [i + ii + iv-a]",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.totalPayable"}
                        },
                        {
                            "sno": "(vi)",
                            "title": "Annual Percentage Rate - Effective annualized interest rate",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.irrCalculated"}
                        },
                        {
                            "sno": "(vii)",
                            "title": "Tenure of the Loan (months)",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.totalLoanTenure"}
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
                    ],
                    "CC_data" : [
                        {
                            "sno": "(i)",
                            "title": "Loan Amount",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.cashCreditAmount"}
                        },
                        {
                            "sno": "(ii)",
                            "title": "Total Interest charge during the entire tenure of the loan",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                        },
                        {
                            "sno": "(iii)",
                            "title": "Other up-front charges, if any",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                        },
                        {
                            "sno": "a",
                            "title": "Processing Fees, if any",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.processingCharges"}
                        },
                        {
                            "sno": "b",
                            "title": "Insurance Charges if any",
                            "data": "Insurance premium depends upon the nature of assets. Refer sanction letter"
                        },
                        {
                            "sno": "c",
                            "title": "Other Charges, if any",
                            "data": 0
                        },
                        {
                            "sno": "(iv)",
                            "title": "Net Disbursed Amount",
                            "data": { "-": [{ "var": "$scope.fetchRepaymentSchedule.object.principal" }, { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }] }
                        },
                        {
                            "sno": "(iv - a)",
                            "title": "Overdue Amount",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.overdueAmount" }
                        },
                        {
                            "sno": "(v)",
                            "title": "Total amount to be paid by the borrower [i + ii + iv-a]",
                            "data": "Outstanding Amount + interest as on date of closure"
                        },
                        {
                            "sno": "(vi)",
                            "title": "Annual Percentage Rate - Effective annualized interest rate",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.irrCalculated"}
                        },
                        {
                            "sno": "(vii)",
                            "title": "Tenure of the Loan (months)",
                            "data": 12
                        },
                        {
                            "sno": "(viii)",
                            "title": "Repayment frequency by the borrower",
                            "data": "Principal: On Demand Interest: To be served as and when debited"
                        },
                        {
                            "sno": "(ix)",
                            "title": "Number of installments of repayment",
                            "data": "On demand"
                        },
                        {
                            "sno": "(x)",
                            "title": "Amount of each installments of repayment",
                            "data": "On demand"
                        }
                    ],
                    "TL_Statement":["This repayment schedule is based on present effective ROI linked to Bank’s RBLR. This Repayment schedule may get change with change in ROI","Insurance charges to be paid on actual basis as per third party insurance providers/Companies"],
                    "CC_Statement":["Insurance charges to be paid on actual basis as per third party insurance providers/Companies"],
                    "formSubmitFlow": [
                        {
                            "submitflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData', "metaData"],
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
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]CONGRATS_PAGE", "PRODUCT_ERROR"] },
                            "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L7'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_14'], ['statusChangeDescription', 'STATIC', 'Success'], ['subStatusChangeDescription', 'STATIC', 'Success'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                        },
                        {
                            "submitflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "validationJson": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "capturedData.KEY_FACT_DETAILS.acceptStatus"
                                            },
                                            "DECLINE"
                                        ]
                                    },
                                    "EXECUTE",
                                    "NEXT"
                                ]
                            },
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {
                                "if": [{ "==": [{ "var": "capturedData.KEY_FACT_DETAILS.acceptStatus" }, "DECLINE"] }, {
                                    "cat": [
                                        "PRODUCT_ERROR[PARAMS]errorCode=",
                                        "Your application is not eligible for online processing as per bank benchmark criteria. Please contact your branch for more information."
                                    ],
                                }, "PROCEED"]
                            },
                            "params": ['access_token', 'loanUuid', ["reason", "capturedData.KEY_FACT_DETAILS.selctedReason"], ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L7'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_15'], ['statusChangeDescription', 'STATIC', 'Decline'], ['subStatusChangeDescription', 'STATIC', 'Decline'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                        },
                    ],
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow":"multiFacilityRetreive",
                            "dataFeedCloud":["product","formValue","capturedData"],
                            "saveResponseToProduct":true,
                            "params":["access_token","loanUuid",["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"],["microservicetoken","oauthAccessToken"]],
                            "apiError":"PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.responseAttr.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                        },
                        {
                            "fetchflow": "loanDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                        },
                        {
                            "fetchflow": "fetchCharges",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ["applicationId", "loanUuid"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError": "PRODUCT_ERROR"
                        },
                        // {
                        //     "fetchflow": "fetchRepaymentSchedule",
                        //     "apiError": "PRODUCT_ERROR",
                        //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        //     "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ["applicationId", "loanUuid"], ["isFacilityEnabled", "STATIC", true]
                        //     ],
                        //     "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        // }
                    ]
                },
                "LOAN_SUMMARY": {
                    'showLeftContent': false,
                    'showStepper': false,
                    'showSubStepper': false,
                    'fieldLabel': 'continue',
                    "titleIndex": 0,
                    "loanAmountIndex": 1,
                    "refNoInx": 3,
                    "showRepaymentSchedule": false,
                    "showEmiCalculatorSection": false,
                    "showBranchSection": true,
                    "showRatingSection": false,
                    "showRejectionSection": false,
                    "showMainContent": true,
                    "showAccountOpenBtn": false,
                    rejectionView: [{
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": ' mb-0 mt-5 d-flex align-items-center',
                        "sectionContent": {
                            "titleData": `Dear `,
                            "isShow": true,
                            "endContent": [{
                                "componentType": 'ICON',
                                "className": 'ml-10',
                                "sectionContent": {
                                    "isShow": true,
                                    "iconPath": '/assets/icons/smile.png'
                                }
                            }]
                        }
                    }, {
                        "componentType": 'PARAGRAPH',
                        "className": "text-info mt-3",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Thank you for your application & feedback. We may reach you shortly or kindly visit our nearest Branch for further assistance."
                        }
                    }, {
                        "componentType": 'PARAGRAPH',
                        "className": "form-label-lg mt-4",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Your Application Reference #"
                        }
                    }],
                    tableConfig: {

                        headers: [{ fieldLabel: "Month", fieldName: "repaymentDate" }, { fieldLabel: "Opening Balance", fieldName: "loanAmountRemaining" }, { fieldLabel: "Interest", fieldName: "interest" }, { fieldLabel: "Principle Repayment", fieldName: "principal" }, { fieldLabel: "Closing Balance", fieldName: "closingBalance" }],
                        data: null
                    },
                    branchConfig: {
                        status: 'Account Information is sent to your Email address and Mobile Number',
                        branchDetails: {
                            name: null,
                            address: null
                        }
                    },
                    ratingSection: [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": ' mb-0 mt-5 d-flex align-items-center',
                            "sectionContent": {
                                "titleData": `Rate Us!`,
                                "isShow": true,

                            }
                        }, {
                            "componentType": 'PARAGRAPH',
                            "className": "text-info",
                            "validateSection": false,
                            "sectionContent": {
                                "isShow": true,
                                "paragraphData": "Please help us improving our services by providing your valuable feedback"
                            }
                        },
                        {
                            "componentType": 'FORM',
                            "className": 'mb-3 w-50 mt-25',
                            "validateSection": false,
                            "sectionContent": {
                                "isShow": true,
                                validityEmitter: new Subject<void>(),
                                formValueEmitter: new Subject<void>(),
                                "options": {
                                    "columnSize": 1
                                },
                                "fields": [{
                                    "fieldDataType": "CARD_OPTIONS",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "fieldLabel": "How do you feel about our service",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": ['remarks'],
                                    "regex": null,
                                    "options": this.commonProperty_static.RATING,
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
                                }, {
                                    "fieldDataType": "DROPDOWN",

                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": 'AWAITING_APPROVAL_L7_REASON',
                                    "fieldLabel": "Reason",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{ "or": [{ "==": [{ "var": "rating" }, '1'] }, { "==": [{ "var": "rating" }, '2'] }, { "==": [{ "var": "rating" }, '3'] }] }, true, false]
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
                                }, {
                                    "fieldDataType": "TEXT_AREA",
                                    "isMandatory": false,
                                    "fieldLabel": "Remarks",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly
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
                                }],
                            }
                        }
                    ],
                    chartFooter: [{
                        "label": "Principle Amount",
                        "fieldName": "principal",
                        "prefix": "₹",
                        "value": null
                    }, {
                        "label": "Total Payable",
                        "fieldName": "totalPayable",
                        "prefix": "₹",
                        "value": null

                    }, {
                        "label": "Payable Interest",
                        "fieldName": "payableInterest",
                        "prefix": "₹",
                        "value": null


                    }, {
                        "label": "First EMI Date",
                        "fieldName": "firstEmiDate",
                        "value": null

                    },],
                    chartConfig: {
                        title: 'Review Your Loan',

                        data: [{
                            fieldLabel: "Principle Amount",
                            value: 25000,
                            bgColor: '#0090E5'
                        }, {
                            fieldLabel: "Interest Amount",
                            value: 4000,
                            bgColor: '#00C5AB'
                        }],
                        chartType: "PIE_CHART"
                    },
                    temp: {
                        options: {
                            layout: 'sideLayout',
                            columnSize: 1,
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        },
                        fields: [
                            {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Loan Amount",
                                "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    "runAlways": true,
                                    "default": {
                                        "if": [true, { "var": "loanAmountCopy" }]
                                    },
                                    "calculation": {
                                        "if": [true, { "var": "loanAmountCopy" }]
                                    }
                                },
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "loanAmount",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true,
                                'prefixfieldAccessModifier': 'READ_ONLY',
                                'prefixCommonProperty': null,
                                "includePrefixtoFormValue": false,
                                "prefixfieldName": "ruppe",
                                "prefixType": 'TEXT',
                                "prefix": "INR",
                                "showprefix": true,
                                "prefixplaceholderText": 'Title'
                            },
                            {
                                "fieldDataType": "RANGE",
                                "isMandatory": false,
                                "fieldLabel": "Enter your account number",
                                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                "minLength": 100,
                                "maxLength": 50000,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    // "runAlways":true,
                                    // "default":{
                                    //   "if":[true,{"var":"loanAmount"}]
                                    // },
                                    // "calculation":{
                                    //   "if":[true,{"var":"loanAmount"}]
                                    // }
                                },
                                "rulesFor": ["loanAmount"],
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "loanAmountCopy",
                                "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                                "showLabel": false,
                                "showField": true,
                                "prefix": '₹',
                                "suffix": null,
                                excludeToFormValue: true,
                            },
                            {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Tenure",
                                "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    "runAlways": true,
                                    "default": {
                                        "if": [true, { "var": "tenureCopy" }]
                                    },
                                    "calculation": {
                                        "if": [true, { "var": "tenureCopy" }]
                                    }
                                },
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "tenure",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "RANGE",
                                "isMandatory": false,
                                "fieldLabel": "Enter your account number",
                                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                "minLength": 1,
                                "maxLength": 84,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    // "runAlways":true,
                                    // "default":{
                                    //   "if":[true,{"var":"tenure"}]
                                    // },
                                    // "calculation":{
                                    //   "if":[true,{"var":"tenure"}]
                                    // }
                                },
                                "rulesFor": ['tenure'],
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "tenureCopy",
                                "labelInfo": null,
                                "showLabel": false,
                                "showField": true,
                                "prefix": null,
                                "suffix": 'months',
                                "excludeToFormValue": true
                            }, {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Interest per annum (%)",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "interestRate",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "EMI to be paid",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "emiToBePaid",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Type of ROI",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "typeOfRoi",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }]
                    },
                    "dataScopeFetchFlow": [ {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ['microservicetoken', 'oauthAccessToken'],'loanUuid'],
                        "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        "apiError": "PRODUCT_ERROR"
                    },
                    {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR"
                    }]
                },
                'PRODUCT_ERROR': {
                    'showLeftContent': false,
                    'showStepper': false,
                    'showSubStepper': false,
                    "errorCodes": {
                        "nameMatch": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
                    },
                    "dataScopeFetchFlow": [{
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]]
                    }
                    ]
                },

            }, 'company': {
                'CUSTOMER_TYPE': {
                    'showLeftContent': true,
                    'showStepper': true,
                    'fieldLabel': 'Continue'
                },
                // "MOBILE_VERIFY": {
                //     'showLeftContent': true,
                //     'showStepper': true,
                //     'showSubStepper': true,
                //     'consentIndex': 3,
                //     'formIndex': 2,
                //     'mobileFieldIndex': 0,
                //     'otpIndex': 4,
                //     'fieldLabel': 'Continue',

                //     "formSubmitFlow": [
                //     //     {
                //     //     "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, true] }, 'EXECUTE', 'NEXT'] },
                //     //     "submitflow": "showBorrowerDetails",
                //     //     "dataFeedCloud": ['product', 'formValue', 'capturedData', 'resumeJourney'],
                //     //     "saveResponseToProduct": true,
                //     //     "apiError": "PRODUCT_ERROR",
                //     //     "params": ['access_token', 'loanUuid'],
                //     //     "validateResponse": { "if": [{ "==": [{ "checkResumeJourney": [] }, true] }, { "getResume": [] }, 'PROCEED'] },
                //     // },
                //     // {
                //     //     "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                //     //     "submitflow": "applyLoan",
                //     //     "dataFeedCloud": ['product', 'formValue'],
                //     //     "saveResponseToProduct": true,
                //     //     "apiError": "PRODUCT_ERROR",
                //     //     "params": ['access_token', 'borrowerUuid', 'loanPurposeUuid', ['loanAmount', 'minLoanAmount'], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['loanApplicationTextVariable4', 'STATIC', 'Web Portal']],
                //     //     "journeyEventCodeAfterResponseSucess": "MOBILE_VERIFY"
                //     // },
                //         // {
                //         //     "submitflow":"updateLoanApplicationTrackingStatus",
                //         //     "dataFeedCloud":['product','formValue'],
                //         //     "params":['access_token','loanUuid',['nextPage','STATIC','BORROWER_PERSONAL_DETAIL'],['completedPage','STATIC','BORROWER_BASIC_DETAIL']]
                //         // }
                //     ]
                // },
                "EKYC_VERIFY": {
                    'showLeftContent': false,
                    'showStepper': false,
                    'showSubStepper': false,
                    'fieldLabel': 'Verify',
                    'formIndex': 1,
                    'otpIndex': 3,
                    'consentIndex': 2,
                    "dataScopeFetchFlow": [{
                        "fetchflow": "fetchBorrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid']
                    }],
                    "prepopulationRemaps": {
                        "identityNumberOne": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.identityNumberOne","fetchBorrowerDetails.borrowerDetail.identityNumberOne"]},
                    },
                    'formSubmitFlow': [
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
                                    "borrowerUuid"
                                ],
                                [
                                    "identityType",
                                    "STATIC",
                                    "UDYAM"
                                ],
                                [
                                    "applicantType",
                                    "RULE_OUTPUT",
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"BORROWER_COMPANY"]}
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
                            "apiError": "PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseSucess": "AADHAR_VERIFY"
                        },
                        //   {
                        //     "submitflow":"personalProfileUpdate",
                        //     "dataFeedCloud":["product","formValue","capturedData"],
                        //     "params":["loanUuid","access_token","identityNumberOne","firstName","lastName","middleName","gender",
                        // "dateOfBirth","line1","line2","line3","district","city","state","zipCode"],

                        // },
                    ],
                },
                "ADDRESS_DETAILS": {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Submit',
                    'formSubmitFlow': [{
                        "journeyEventCodeAfterResponseSucess": "ADDRESS_DETAILS"
                    }],
                },
                "ACCOUNT_VERIFY": {
                    'showLeftContent': true,
                    'showStepper': false,
                    'showSubStepper': false,
                    'fieldLabel': 'Verify',
                    "editButton": "Edit A/C Number",
                    "closeButton": "Close Application",
                    'otpIndex': 5,
                    'paragraphIndex': 3,
                    'consentIndex': 4,
                    'formIndex': 2,
                    'formSubmitFlow': [
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, true] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "showBorrowerDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                            "saveResponseToCapturedData":true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "checkResumeJourney": [] }, true] }, { "getResume": [] }, 'PROCEED'] },
                        },
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "applyLoan",
                            "dataFeedCloud": ['product', 'formValue'],
                            "saveResponseToProduct": true,
                            "params": ['access_token', 'borrowerUuid', 'loanPurposeUuid', ['loanAmount', 'minLoanAmount'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                            "journeyEventCodeAfterResponseSucess": "ACCOUNT_VERIFY",
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
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
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "fetchAccountData",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "saveResponseToProduct": true,
                            "saveResponseToCapturedData":true,
                            "params": [
                            'access_token', 'accountNumber', 
                            ['finacleRequest', 'STATIC', 'MSME_RENEWAL'], 
                            ['microservicetoken', 'oauthAccessToken'], 
                            ['requestFor', "RULE_OUTPUT", {"if":[{"==":[{"var":"individualorcompany"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"individualorcompany"},"COMPANY"]},"BORROWER_COMPANY"]}],
                            ['applicationSource', 'STATIC', 'WEB_JOURNEY']
                        ],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED",{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
                        },
                        // update the personalProfileUpdate API data from fetchGenralAccountResponse
                        // {
                        //     "submitflow": "personalProfileUpdate",
                        //     "dataFeedCloud": ['product', 'formValue'],
                        //     "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"], 
                        //     ['title',"currentFormSubmitResponses.fetchAccountData.object.title"], 
                        //     ['firstName',"currentFormSubmitResponses.fetchAccountData.object.firstName"],
                        //     ['middleName',"currentFormSubmitResponses.fetchAccountData.object.middleName"],
                        //     ['lastName',"currentFormSubmitResponses.fetchAccountData.object.lastName"],
                        //     ['gender',"currentFormSubmitResponses.fetchAccountData.object.gender"],
                        //     ['dateOfBirth',"currentFormSubmitResponses.fetchAccountData.object.dateOfBirth"],
                        //     ['maritalStatus',"currentFormSubmitResponses.fetchAccountData.object.maritalStatus"],
                        //     ['borrowerDetailTextVariable6',"currentFormSubmitResponses.fetchAccountData.object.borrowerDetailTextVariable6"],
                        //     ['educationType',"currentFormSubmitResponses.fetchAccountData.object.educationType"],
                        //     ['mobileNumber',"currentFormSubmitResponses.fetchAccountData.object.mobileNumber"],
                        //     ['alternativeUsername',"currentFormSubmitResponses.fetchAccountData.object.alternativeUsername"],
                        //     ['citizenship',"currentFormSubmitResponses.fetchAccountData.object.citizenship"],
                        //     ['borrowerDetailTextVariable11',"currentFormSubmitResponses.fetchAccountData.object.borrowerDetailTextVariable11"],
                        //     ['borrowerDetailTextVariable21',"currentFormSubmitResponses.fetchAccountData.object.borrowerDetailTextVariable21"],
                        //         ['line1',"currentFormSubmitResponses.fetchAccountData.object.line1"],
                        //         ['line2',"currentFormSubmitResponses.fetchAccountData.object.line2"],
                        //         ['line3',"currentFormSubmitResponses.fetchAccountData.object.line3"],
                        //         ['subDistrict',"currentFormSubmitResponses.fetchAccountData.object.subDistrict"],
                        //         ['zipCode',"currentFormSubmitResponses.fetchAccountData.object.zipCode"],
                        //         ['district',"currentFormSubmitResponses.fetchAccountData.object.district"],
                        //         ['city',"currentFormSubmitResponses.fetchAccountData.object.city"],
                        //         ['state',"currentFormSubmitResponses.fetchAccountData.object.state"],
                        //         ['addressOneLine1',"currentFormSubmitResponses.fetchAccountData.object.addressOneLine1"],
                        //         ['addressOneLine2',"currentFormSubmitResponses.fetchAccountData.object.addressOneLine2"],
                        //         ['addressOneLine3',"currentFormSubmitResponses.fetchAccountData.object.addressOneLine3"],
                        //         ['addressOneSubDistrict',"currentFormSubmitResponses.fetchAccountData.object.addressOneSubDistrict"],
                        //         ['addressOneZipCode',"currentFormSubmitResponses.fetchAccountData.object.addressOneZipCode"],
                        //         ['addressOneState',"currentFormSubmitResponses.fetchAccountData.object.addressOneState"],
                        //         ['addressOneDistrict',"currentFormSubmitResponses.fetchAccountData.object.addressOneDistrict"],
                        //         ['addressOneOwnershipType',"currentFormSubmitResponses.fetchAccountData.object.addressOneOwnershipType"],
                        //         ['addressOneLivingSince',"currentFormSubmitResponses.fetchAccountData.object.addressOneLivingSince"],
                        //         ["saveMandatoryTab", "STATIC", true]
                        //     ],
                        //     "apiError": "PRODUCT_ERROR",
                        //     "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        // },
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow":"npaCheck",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',"loanUuid",["custId","currentFormSubmitResponses.fetchAccountData.object.CUSTOMER_ID"],['microservicetoken','oauthAccessToken'],['applicationSource', 'STATIC', 'WEB_JOURNEY'],['finacleRequest', 'STATIC', 'MSME_RENEWAL']],
                            "saveResponseToCapturedData":true,
                            "journeyEventCodeAfterResponseFailure": "NPA_FAIL",
                            "validateResponse": {"if":[{"==":[{"var":"code"},"200"]},{"if":[{"==":[{"var":"npaFlag"},"N"]},"PROCEED[JOURNEY_EVENT_CODE]NPA_SUCCESS",{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow": "fetchAndValidateActiveAccounts",
                            "dataFeedCloud": ['product', 'formValue'],
                            "apiError": "PRODUCT_ERROR",
                            "params": [
                                'access_token',
                                'loanUuid',
                                ['microservicetoken', 'oauthAccessToken'],
                                ['custId', 'currentFormSubmitResponses.fetchAccountData.object.CUSTOMER_ID'],//nned to get from getchgeneralaccount response
                                ['finacleRequest', 'STATIC', 'MSME_RENEWAL'],
                                ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                            "journeyEventCodeAfterResponseFailure": "SMA_FAIL",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]SMA_SUCCESS",
                                {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
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
                                "EDW data fetch Succussfully"
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
                        // {
                        //     "submitflow": "updateMainLoanApplicationStatus",
                        //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        //     // "validateResponse": { if: [{ 'journeyValue': ['isDedupe'] }, 'UDYAM_VERIFY', "UDYAM_VERIFY"] },
                        //     "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]},
                        //     "saveResponseToProduct": true,
                        //     "apiError": "PRODUCT_ERROR",
                        //     "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'INITIALIZED'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_3'], ['statusChangeDescription', 'STATIC', 'For ETB document upload'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                        // },
                        // {
                        //     "submitflow": "updateLoanApplicationTrackingStatus",
                        //     "dataFeedCloud": ['product', 'formValue'],
                        //     "apiError": "PRODUCT_ERROR",
                        //     "params": ['access_token', 'loanUuid', ['nextPage', 'STATIC', 'BORROWER_PERSONAL_DETAIL'], ['completedPage', 'STATIC', 'BORROWER_BASIC_DETAIL']],
                        //     "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                        // }

                    ]
                },
                //  PREVIEW_PAGE

                "TRACK_APPLICATION": {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Resume my Application'
                },
                'PERSONAL_DETAILS': {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Continue',
                    "journeyEventCodeAfterResponseSucess": "PERSONAL_DETAILS"
                },
                "PRODUCT_SELECTION": {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'Preview'
                },
                'UDYAM_VERIFY': {
                    'showLeftContent': false,
                    'showSubStepper': true,
                    'showStepper': true,
                    'skipPage': false,
                    'buttonSkip': 'Skip this Step',
                    'fieldLabel': 'Continue',
                    "dataScopeFetchFlow": [{
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
                    }],
                    "prepopulationRemaps":{
                        "textVariable3": "metaData.capturedData.AccountData.UDYAM_NUMBER_MASKED"
                    },
                    'formSubmitFlow': [
                        {
                            "submitflow": "verifyUdyam",
                            "dataFeedCloud": ['product', 'formValue','capturedData', "metaData"],
                            "params": ['access_token', ['infoType', 'STATIC', 'udhyam'], ['requestFor', 'RULE_OUTPUT', {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER_SELF_EMPLOYMENT_DETAIL",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"COMPANY_DETAIL"]}], "loanUuid", ['udhyamNumber', 'metaData.capturedData.AccountData.UDYAM_NUMBER'],
                            ["microservicetoken","oauthAccessToken"]
                        ],
                        "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]UDYAM_VERIFY",{"cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"}]}]},
                            "validationErrorMessage": "Please provide a valid udyam number",
                            "apiError": "PRODUCT_ERROR",
                            "SaveResponseToCapturedData": true
                        },
                        
                        {
                            "validationJson": {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"EXECUTE","NEXT"]},
                            "submitflow": "updateSelfEmploymentDetails",
                            "dataFeedCloud": ['product', 'formValue', "capturedData", "metaData"],
                            "params": ['access_token', ['loanApplicationUuid', 'loanUuid'], ["microservicetoken", "oauthAccessToken"], 'textVariable3', ['textVariable6', "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable6"], ["textVariable10", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable10"],
                                ["textVariable7", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable7"], ["dateVariable1", "currentFormSubmitResponses.verifyUdyam.mappingFields.dateVariable1"],
                                ["textVariable47", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable47"],
                                ["textVariable48", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable48"],
                                ["textVariable49", "currentFormSubmitResponses.verifyUdyam.mappingFields.textVariable49"],
                                ["nicCodeDescription", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCodeDescription"],
                                ["nicCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCode"],
                                ["addressOneLine1", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLine1"],
                                ["addressOneLine2", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLine2"],
                                ["addressOneLine3", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLine3"],
                                ["addressOneSubDistrict", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneSubDistrict"],
                                ["addressOneZipCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneZipCode"],
                                ["addressOneLivingSince", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneLivingSince"],
                                ["addressOneCity", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneCity"],
                                ["addressOneCountry", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneCountry"],
                                ["addressOneState", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneState"],
                                ["addressOneDistrict", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneDistrict"],
                                ["addressOneOwnershipType", "currentFormSubmitResponses.verifyUdyam.mappingFields.addressOne.addressOneOwnershipType"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",

                        },
                        {
                            "validationJson": {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"EXECUTE","NEXT"]},
                            "submitflow": "updateCompanyProfileUpdate",
                            "dataFeedCloud": ['product', 'formValue', "capturedData", "metaData"],
                            "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"], ["companyIdentityNumberOne",'textVariable3'], ['companyName', "currentFormSubmitResponses.verifyUdyam.mappingFields.companyName"], 
                                ["borrowerCompanyTextVariable10", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable10"],
                                ["borrowerCompanyTextVariable7", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable7"], 
                                ["companyCategory", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyCategory"],
                                ["borrowerCompanyTextVariable1", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable1"],
                                ["borrowerCompanyTextVariable2", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable2"],
                                ["borrowerCompanyTextVariable5", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable5"],
                                ["borrowerCompanyTextVariable19", "currentFormSubmitResponses.verifyUdyam.mappingFields.borrowerCompanyTextVariable19"],
                                ["nicCodeDescription", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCodeDescription"],
                                ["nicCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.nicCode"],
                                ["dateOfArticle", "currentFormSubmitResponses.verifyUdyam.mappingFields.dateOfArticle"],
                                ["line1", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line1"],
                                ["line2", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line2"],
                                ["line3", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.line3"],
                                ["subDistrict", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.subDistrict"],
                                ["zipCode", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.zipCode"],
                                ["livingSince", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.livingSince"],
                                ["city", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.city"],
                                ["country", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.country"],
                                ["state", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.state"],
                                ["district", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.district"],
                                ["ownershipType", "currentFormSubmitResponses.verifyUdyam.mappingFields.companyAddress.ownershipType"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",

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
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                                ],
                                [
                                    "identityType",
                                    "STATIC",
                                    "UDYAM"
                                ],
                                [
                                    "applicantType",
                                    "RULE_OUTPUT",
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"BORROWER_COMPANY"]}
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
                        },
                        {
                            "submitflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'INITIALIZED'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_11'], ['statusChangeDescription', 'STATIC', 'Credit Bureau'], ["subStatusChangeDescription", "STATIC", "Credit Bureau"], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        },
                        // {
                        //     "submitflow": "cibilfetch",
                        //     "dataFeedCloud": ["product", "formValue"],
                        //     "params": ["access_token", ["applicationId", "loanUuid"], ["microservicetoken", "oauthAccessToken"]],
                        //     "validateResponse": {
                        //         "if": [{
                        //             "and": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] },
                        //             { "==": [{ "var": "formSubmitResponse.bureauStatus" }, "Qualified"] },
                        //             { "==": [{ "var": "formSubmitResponse.cibilCheckStatus" }, "Qualified"] }]
                        //         }, "PROCEED[JOURNEY_EVENT_CODE]BRE_QUALIFIED[JOURNEY_EVENT_CODE]SMA_MCP_QUAILIFIED", "PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_NOT_QUALIFIED[JOURNEY_EVENT_CODE]SMA_MCP_NOT_QUAILIFIED"]
                        //     },
                        //     "apiError": "PRODUCT_ERROR"
                        // }
                    ]
                },
                "MORE_INFO": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Continue',
                    'callUserHierarchy': true,
                    'formSectionIndex': 1,
                    "renewalSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "Your application will be reviewed at same level"
                            }
                        }
                      ],
                      "CCEligibilityRoundSection":[
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "You are maximum eligible for CC eligibility round (Amount) Do you want to proceed"
                            }
                        }
                    ],
                    "newTlSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                                "isShow": true,
                                "titleData": "You are eligible for amount Rs for New Term Loan. Do you want to proceed."
                            }
                        }
                    ],
                    "newCCSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "You are eligible for amount Rs for New Cash Credit. Do you want to proceed."
                            }
                        }
                    ],
                    "actionItems": [
                        {
                            actionKey: true,
                            actionLabel: 'Ok'
                        }
                    ],
                    'prepopulationRemaps': {
                    },
                    "dataScopeFetchFlow": [
                        {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    {
                        "fetchflow": "fetchEligibilityDetails",
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ["applicationId", "loanUuid"]],
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},{"if":[{"and":[{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]}]},"PROCEED[JOURNEY_EVENT_CODE]ENHANCEMENT_FLOW[JOURNEY_EVENT_CODE]NEW_ENHANCEMENT",{"if":[{"and":[{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]}]},"PROCEED[JOURNEY_EVENT_CODE]ENHANCEMENT_EXISITING_FLOW[JOURNEY_EVENT_CODE]NO_ENHANCEMENT",{"if":[{"and":[{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.reqRenewalType"},"EXISTING_LIMIT"]},{"==":[{"var":"fetchFlowResponse.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]}]},"PROCEED[JOURNEY_EVENT_CODE]EXISITING_FLOW[JOURNEY_EVENT_CODE]NO_ENHANCEMENT","PROCEED"]}]}]},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
                    },
                    {
                        "fetchflow": "saveOrUpdateRenewalType",
                        "validate":{"if":[{"and":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]}]},"EXECUTE","NEXT"]},
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', "loanUuid", ["renewalType","STATIC","EXISTING_LIMIT"], ['microservicetoken', 'oauthAccessToken'], ["applicationSource","STATIC","WEB_JOURNEY"]],
                        "validateResponse": {
                            "if": [{
                                "==": [{ "var": "fetchFlowResponse.code" }, "200"]
                            }, 'PROCEED', 'PRODUCT_ERROR']
                        }
                    },
                    {
                        "fetchflow": "saveMsmeSecurityDcoument",
                        "validate":{"if":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]},"EXECUTE","NEXT"]},
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', "loanUuid", ["renewalType","STATIC","ENHANCEMENT"], ['microservicetoken', 'oauthAccessToken'], ["htmlTextVariable46","STATIC", `<table border="0" width="100%" cellspacing="0" cellpadding="0" style="table-layout: fixed;font-family:Arial, Helvetica, sans-serif;" class="wbtable"><td colspan="5" style="padding: 10px 4px 2px 4px !important; font-size: 13px !important; border: 1px solid black !important; background: #eaeaea !important; text-align: left !important; font-weight: bold !important;">\n\t\t\t\t\tSecurity Document List\n\t\t\t\t\t\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;border-left: 1px solid black !important;text-align: center;">\n\t\t\t\t\tDocument Code\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tDocument Description\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tExisting\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tProposed\n\t\t\t\t`]],
                        "validateResponse": {
                            "if": [{
                                "==": [{ "var": "fetchFlowResponse.code" }, "200"]
                            }, 'PROCEED', 'PRODUCT_ERROR']
                        }
                    },
                    {
                        "fetchflow": "saveMsmeSecurityDcoument",
                        "validate":{"if":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"EXISTING_LIMIT"]},"EXECUTE","NEXT"]},
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', "loanUuid", ["renewalType","STATIC","EXISTING_LIMIT"], ['microservicetoken', 'oauthAccessToken'], ["htmlTextVariable46","STATIC", `<table border="0" width="100%" cellspacing="0" cellpadding="0" style="table-layout: fixed;font-family:Arial, Helvetica, sans-serif;" class="wbtable"><td colspan="5" style="padding: 10px 4px 2px 4px !important; font-size: 13px !important; border: 1px solid black !important; background: #eaeaea !important; text-align: left !important; font-weight: bold !important;">\n\t\t\t\t\tSecurity Document List\n\t\t\t\t\t\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;border-left: 1px solid black !important;text-align: center;">\n\t\t\t\t\tDocument Code\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tDocument Description\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tExisting\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;font-weight: bold !important;background: #eaeaea !important;text-align: center;">\n\t\t\t\t\tProposed\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL515\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tDecl Re. Relation with Sr officers/Dirs. of Bank.\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL444C\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tAcknowledgement of Debt and Security L 444C\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tCBD23\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tCBD 23 filled by owners/guarantors etc.\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL434\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tDemand Promissory Note\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL435\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tLoan Bearer Letter\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;border-left: 1px solid black !important;">\n\t\t\t\t\tL440\n\t\t\t\t<td colspan="2" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;">\n\t\t\t\t\tInstalment Letter\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox" checked="">\n\t\t\t\t<td colspan="1" style="font-weight:normal;word-break: break-word;padding: 10px 4px 2px 4px !important; font-size: 13px !important; border-right: 1px solid black !important; border-bottom: 1px solid black !important; word-wrap: break-word !important;text-align: center;">\n\t\t\t\t\t<input type="checkbox">\n\t\t\t\t"`]],
                        "validateResponse": {
                            "if": [{
                                "==": [{ "var": "fetchFlowResponse.code" }, "200"]
                            }, 'PROCEED', 'PRODUCT_ERROR']
                        }
                    },
                    // {
                    //     "fetchflow":'fetchRatingScore',
                    //     "validate":{"if":[{"and":[{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.reqRenewalType"},"ENHANCEMENT"]},{"==":[{"var":"eligibilityDetails.output.assessmentEligibility.resRenewalType"},"ENHANCEMENT"]}]},"EXECUTE","NEXT"]},
                    //     "dataFeedCloud":['product','formValue','capturedData'],
                    //     "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
                    //     "saveResponseToCapturedData":true,
                    //     "validateResponse":{"if":[{"==":[{"var":"output.ratingOutput.isQualified"},'YES']},'PROCEED','PRODUCT_ERROR']},
                    //     "apiError":"PRODUCT_ERROR"
                    // },
                    {
                        "fetchflow":"multiFacilityRetreive",
                        "dataFeedCloud":["product","formValue","capturedData"],
                        "saveResponseToProduct":true,
                        "params":["access_token","loanUuid",["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"],["microservicetoken","oauthAccessToken"]],
                        "apiError":"PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.responseAttr.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    {
                        "fetchflow": "fetchMultiFacilityList",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "saveResponseToProduct": true,
                        "params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken'], "loanPurposeUuid", ["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"]],
                        "apiError": "PRODUCT_ERROR"
                    },
                    {
                        "fetchflow": "fetchSecurityDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "saveResponseToProduct": true,
                        "params": ['access_token', 'loanUuid', ["type", "STATIC", "PRIMARY"],[
                            "microservicetoken",
                            "oauthAccessToken"
                          ],],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    }
                    
                  ],
                    'formSubmitFlow': [
                        {
                            "submitflow": "updateLoanSanction",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken'], ["loanSanctionCOs", "capturedData.FACILITY_DETAILS"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]KFS_LOADED",{"cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "submitflow": "securityDetailsCreate",
                            "dataFeedCloud": ['product', 'formValue', "capturedData"],
                            "validationJson": {"if":[{"==":[{"var":"newTermloanPresent"},true]},"EXECUTE","NEXT"]},
                            "params": ['access_token','loanUuid', 
                            ["facilityUuid", "newTermloanDetails.loanFacilityUuid"],
                            ["type", "STATIC", "PRIMARY"],
                            ["securityType", "newTermloanDetails.facilityDetailsTextVariable1"],
                            ["description","RULE_OUTPUT", {"if":[{"!=":[{"var":"newTermloanDetails.facilityDetailsTableVariable1"},null]},{"getValueForDescription":[{"var":"newTermloanDetails.facilityDetailsTableVariable1"},"PID1"]},null]}],["basisValuation", "STATIC", "PROFORMA INVOICE/ QUOTATION"],["valuationAmount","newTermloanDetails.facilityDetailsNumberVariable1"],["valuationDate","STATIC",""],["margin","newTermloanDetails.facilityDetailsNumberVariable4"],["eligibleAmount","newTermloanDetails.requestedLimit"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "submitflow":'fetchRatingScore',
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
                            "saveResponseToCapturedData":true,
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError":"PRODUCT_ERROR"
                        }
                    ]
                },
                "CREDIT_FACILITY": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Continue',
                    'callUserHierarchy': true,
                    'formSectionIndex': 1,
                    'prepopulationRemaps': {
                        "title":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.title"]},
                        "firstName": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.firstName","borrowerDetails.borrowerDetail.firstName"]},
                        "lastName": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.lastName","borrowerDetails.borrowerDetail.lastName"]},
                        "dateOfBirth": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.dateOfBirth","borrowerDetails.borrowerDetail.dateOfBirth"]},
                        "middleName": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.middleName","borrowerDetails.borrowerDetail.middleName"]},
                        "borrowerDetailTextVariable6":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable6","borrowerDetails.borrowerDetail.borrowerDetailTextVariable6"]},
                        "maritalStatus":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.maritalStatus","borrowerDetails.borrowerDetail.maritalStatus"]},
                        "gender": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.gender","borrowerDetails.borrowerDetail.gender"]},
                        "citizenship": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.citizenship","borrowerDetails.borrowerDetail.citizenship"]},
                        "alternativeUsername": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.alternativeUsername","borrowerDetails.borrowerDetail.alternativeUsername"]},
                        "borrowerDetailTextVariable24":{"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable24","borrowerDetails.borrowerDetail.borrowerDetailTextVariable24"]},
                        "mobileNumber": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.mobileNumber","borrowerDetails.borrowerDetail.mobileNumber"]},
                        "subDistrict": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.subDistrict","borrowerDetails.borrowerDetail.personalAddress.subDistrict"]},
                        "line1": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.line1","borrowerDetails.borrowerDetail.personalAddress.line1"]},
                        "line2": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.line2","borrowerDetails.borrowerDetail.personalAddress.line2"]},
                        "line3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.line3","borrowerDetails.borrowerDetail.personalAddress.line3"]},
                        "zipCode": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.zipCode","borrowerDetails.borrowerDetail.personalAddress.zipCode"]},
                        "state": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.state","borrowerDetails.borrowerDetail.personalAddress.state"]},
                        "city": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.district","borrowerDetails.borrowerDetail.personalAddress.city"]},
                        "educationType": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.educationType","borrowerDetails.borrowerDetail.educationType"]},
                        "borrowerDetailTextVariable11": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable11","borrowerDetails.borrowerDetail.borrowerDetailTextVariable11"]},
                        "borrowerDetailTextVariable21": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable21","borrowerDetails.borrowerDetail.borrowerDetailTextVariable21"]},
                        "borrowerDetailTextVariable29": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable29","borrowerDetails.borrowerDetail.borrowerDetailTextVariable29"]},
                        "borrowerDetailTextVariable30": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable30","borrowerDetails.borrowerDetail.borrowerDetailTextVariable30"]},
                        "borrowerDetailTableVariable1": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTableVariable1","borrowerDetails.borrowerDetail.borrowerDetailTableVariable1"]},
                        "borrowerDetailTableVariable3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTableVariable3","borrowerDetails.borrowerDetail.borrowerDetailTableVariable3"]},
                        "borrowerDetailNumberVariable3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailNumberVariable3","borrowerDetails.borrowerDetail.borrowerDetailNumberVariable3"]},
                        "borrowerDetailNumberVariable4": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailNumberVariable4","borrowerDetails.borrowerDetail.borrowerDetailNumberVariable4"]},
                        "borrowerDetailTextVariable51": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailTextVariable51","borrowerDetails.borrowerDetail.borrowerDetailTextVariable51"]},
                        "borrowerDetailNumberVariable12": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.borrowerDetailNumberVariable12","borrowerDetails.borrowerDetail.borrowerDetailNumberVariable12"]},
                        "idProofNo":"borrowerDetails.borrowerDetail.identityNumberSeven",
                        "identityNumberTwoDueDate":"borrowerDetails.borrowerDetail.identityNumberTwoDueDate",
                        "residentIdProofNo":"borrowerDetails.borrowerDetail.identityNumberEight",
                        "identityNumberOneDueDate":"borrowerDetails.borrowerDetail.identityNumberOneDueDate",
                        "borrowerDetailTextVariable26":"borrowerDetails.borrowerDetail.borrowerDetailTextVariable26",
                        "borrowerDetailTextVariable23":"borrowerDetails.borrowerDetail.borrowerDetailTextVariable23",
                        "homeBranchState":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.stateValue",""]},
                        "homeBranchDistrict":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.districtValue",""]},
                        "homeBranchCity":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.cityValue",""]},
                        "branchCode":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.unitCode",""]}, 
                        "branchAddress":{ if:[{"journeyValue":["isEtb"]},"metaData.capturedData.AccountData.accountBranchDetail.userHierarchyUnitDetails.address.line1Value",""]},
                        "addressOneLine1": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLine1",""]},
                        "addressOneLine2": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLine2",""]},
                        "addressOneLine3": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLine3",""]},
                        "addressOneSubDistrict": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneSubDistrict",""]},
                        "addressOneZipCode": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneZipCode",""]},
                        "addressOneState": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneState",""]},
                        "addressOneDistrict": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneDistrict",""]},
                        "addressOneOwnershipType": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneOwnershipType",""]},
                        "addressOneLivingSince": {"if":[{"==":[{"var":"isEtb"},true]},"metaData.capturedData.AccountData.addressOneLivingSince",""]},
                    },
                    "dataScopeFetchFlow": [
                        {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    }
                  ],
                    'formSubmitFlow': [
                        {
                            "submitflow": "assignUserHierarchyUnit",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "saveResponseToProduct": true,
                            "params": ['access_token', 'loanUuid', ['userHierarchyUnitCode', 'branchCode'],["microservicetoken","oauthAccessToken"]],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        }
                        ,
                        {
                            "submitflow": "personalProfileUpdate",
                            "dataFeedCloud": ['product', 'formValue'],
                            "params": ['access_token', 'loanUuid', 'title', 'firstName',
                                'middleName',
                                'lastName',
                                'gender',
                                'dateOfBirth',
                                'maritalStatus',
                                'borrowerDetailTextVariable6',
                                'educationType',
                                'numberOfDependents',
                                'mobileNumber',
                                'alternativeUsername',
                                'citizenship',
                                'borrowerDetailTextVariable11',
                                'borrowerDetailTextVariable21',
                                'borrowerDetailTextVariable29',
                                'borrowerDetailTextVariable24',
                                ["identityNumberSeven",
                                "RULE_OUTPUT",
                                {"if":[{"==":[{"var":"borrowerDetailTextVariable29"},"Aadhar Card"]},{"var":"borrowerDetails.borrowerDetail.identityNumberOne"},{"==":[{"var":"borrowerDetailTextVariable29"},"PAN Card"]},{"var":"borrowerDetails.borrowerDetail.identityNumberTwo"},{"var":"idProofNo"}]}
                                ],
                                'identityNumberTwoDueDate',
                                'borrowerDetailTextVariable30',
                                ["identityNumberEight",
                                "RULE_OUTPUT",
                                {"if":[{"==":[{"var":"borrowerDetailTextVariable30"},"Aadhar Card"]},{"var":"borrowerDetails.borrowerDetail.identityNumberOne"},{"var":"residentIdProofNo"}]}
                                ],
                                'identityNumberOneDueDate',
                                'borrowerDetailTextVariable26',
                                'borrowerDetailTextVariable23',
                                'line1',
                                'line2',
                                'line3',
                                'subDistrict',
                                'zipCode',
                                'district',
                                'city',
                                'state',
                                'ownershipType',
                                'livingSince',
                                "borrowerDetailTextVariable60",
                                'isComAddress',
                                'addressOneLine1',
                                'addressOneLine2',
                                'addressOneLine3',
                                'addressOneSubDistrict',
                                'addressOneZipCode',
                                'addressOneState',
                                'addressOneDistrict',
                                'addressOneOwnershipType',
                                'addressOneLivingSince',
                                "homeBranchState",
                                "homeBranchDistrict",
                                'homeBranchCity',
                                "branchCode",
                                "branchAddress",
                            ],
                            "apiError": "PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseSucess": "MORE_INFO",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }

                        }]
                },
                "EMPLOYMENT_DETAILS": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': true,
                    'fieldLabel': 'continue',
                    "enhancementSection": [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": "f-15 common-title",
                            "sectionContent": {
                              "isShow": true,
                              "titleData": "Congratulation #customer name#, You are eligible for enhancement. Are you interested for enhance the limit"
                            }
                        },
                        {
                            "componentType": "PARAGRAPH",
                            "validateSection": false,
                            "className": "common-info mb-20",
                            "sectionContent": {
                              "isShow": true,
                              "paragraphData": "Note : subject to Bank internal rating and due diligence"
                            }
                        },
                      ],
                    "actionItems": [
                        {
                            actionKey: true,
                            actionLabel: 'No'
                        },
                        {
                            actionKey: true,
                            actionLabel: 'Yes'
                        }
                    ],
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "fetchflow": "breEligiblityCheck",
                            "dataFeedCloud": ["product", "formValue", "metaData"],
                            "params": ["access_token",  "loanUuid",["applicationSource","STATIC","WEB_JOURNEY"],
                            [
                                "Uuid",
                                {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                            ]],
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.check_eligibility_res.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]BRE_QUALIFIED[JOURNEY_EVENT_CODE]SMA_MCP_QUAILIFIED","PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_NOT_QUALIFIED[JOURNEY_EVENT_CODE]SMA_MCP_NOT_QUAILIFIED"]},
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "fetchflow": "retrieve",
                            "dataFeedCloud": ["product", "formValue", "capturedData", "metaData"],
                            "params": ["access_token", ["companyId", "metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"], ["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"],],
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]},
                            "apiError": "PRODUCT_ERROR"   
                        }
                ],
                    'prepopulationRemaps': {
                        "textVariable6": "borrowerDetails.borrowerDetail.companyIdentityNumberOne",
                        "accountName": "borrowerDetails.borrowerDetail.companyName",
                        "companyCategory":"borrowerDetails.borrowerDetail.companyCategory",
                        "borrowerCompanyTextVariable19":"borrowerDetails.borrowerDetail.borrowerCompanyTextVariable19",
                        "borrowerCompanyTextVariable2":"borrowerDetails.borrowerDetail.borrowerCompanyTextVariable2",
                        "borrowerCompanyTextVariable5":"borrowerDetails.borrowerDetail.borrowerCompanyTextVariable5",
                        "keyName":"metaData.capturedData.keyPersonFullName"
                        
                    },
                    'formSubmitFlow': [
                        {
                            "validationJson": { "if": [{ "==": [{ "var": "metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType" }, "COMPANY"] }, "EXECUTE", "NEXT"] },
                            "submitflow": "updateCompanyProfileUpdate",
                            "dataFeedCloud": ['product', 'formValue', "capturedData","metaData"],
                            "params": ['access_token', 'loanUuid', ["microservicetoken", "oauthAccessToken"],
                            "borrowerCompanyTextVariable19", 
                            "borrowerCompanyTextVariable2",
                            "borrowerCompanyTextVariable5",
                            "ownershipType",
                            "livingSince",
                            ["borrowerCompanyTextVariable17","STATIC", "No"],
                            "borrowerCompanyTextVariable18",
                            ["borrowerCompanyTextVariable21","STATIC", "No"]
                            ],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "apiError": "PRODUCT_ERROR",

                        }, {
                            "submitflow": 'personalProfileUpdate',
                            "dataFeedCloud": ['product', 'formValue'],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                            "params": [["microservicetoken", "oauthAccessToken"],
                            // 'borrowerDetailTextVariable51',"borrowerDetailTableVariable1","borrowerDetailTableVariable3", "borrowerDetailNumberVariable3","borrowerDetailNumberVariable4",
                            'textVariable6', "educationType", "borrowerDetailTextVariable77",
                            'loanUuid', 'access_token', ["saveMandatoryTab","STATIC",true]],
                            "journeyEventCodeAfterResponseSucess": "EMPLOYMENT_DETAILS"
                        },
                        {
                            "submitflow": "assignUserHierarchyUnit",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "saveResponseToProduct": true,
                            "params": ['access_token', 'loanUuid', ['userHierarchyUnitCode', 'AccountData.accountBranchDetail.userHierarchyUnitDetails.unitCode'],["microservicetoken","oauthAccessToken"]],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        },
                        {
                            "submitflow": 'updateCompanyRepresentative',
                            "validationJson": {"if":[{"and":[{"==":[{"var":"metaData.globalScopeData.breEligiblityCheck.check_eligibility_res.bureauStatus"},"Qualified"]},{"==":[{"var":"metaData.globalScopeData.breEligiblityCheck.check_eligibility_res.cibilCheckStatus"},"Qualified"]}]},"EXECUTE","NEXT"]},
                            "dataFeedCloud": ['product', 'formValue', "capturedData", "metaData"],
                            "apiError": "PRODUCT_ERROR",
                            "params": ['access_token', ["directorUuid", "keyPersonDetails.directorUuid"], ["designationUuid", "keyPersonDetails.designationUuid"], "directorTextVariable4", "directorTextVariable5", "addressTwoOwnershipType", "addressTwoLivingSince", ["companyUuid", "metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"], ["borrowerUuid", "metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid"] ],
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        }
                    
                ],
           //     "journeyEventCodeAfterResponseSucess":"EMPLOYMENT_DETAILS"
            },
            "DOCUMENT_UPLOAD_V2": {
                'showLeftContent': false,
                'showStepper': true,
                'showSubStepper':false,
                'hideDocument':true,
                'fieldLabel':'Done',
                "documentStatusCheckData":{
                    "iteration":4,
                    "iterationDelay":5
                },
                'documentList': [
                    {
                        "documentCategoryCode": "DOC17",
                        "documentFor": "MAIN_APPLICANT",
                        "mandatory": false,
                        "showDocument": true,
                        "multipleUploadOption": true,
                        "multiBankOption": true,
                        "showUpload": false,
                        "documentType": "BANK_STATEMENT", //ITR,GST,FSA,SALARY_SLIP,DOCUMENT,DOCUMENT_ALIAS
                        "selectedBankData": {
                            value: null,
                            options: [{
                                name: "Bank of India",
                                // icon:"../../../assets/icons/favicon.png"
                            }, {
                                name: "Other Banks",
                                // icon:"../../../assets/icons/favicon.png"
                            }]

                        },
                        "selectedBank": {
                            'OB': {
                                uploadOptions: {
                                    'label': "Select Bank",
                                    "options": [{
                                        "icon": "ios_share",
                                        "name": "Share With AA",
                                        "code": "AA",
                                        "perfiosAnalysis": "generateLink",
                                        "processingType": "account",
                                        "applicationSource": "WEB_JOURNEY",
                                        "disabled": false,
                                        "underContent": "<span>Rbi Recommended</span>"//html write
                                    }, {
                                        "icon": "cloud_upload",
                                        "name": "Share With Netbanking",
                                        "code": "NB",
                                        "disabled": false,
                                        "perfiosAnalysis": "onlineFetch",
                                        "documentType": "ONLINE_FETCH",
                                        "underContent": ""//html write
                                    }, {
                                        "icon": "file_upload",
                                        "name": "e-PDF Statement",
                                        "code": "EDF",
                                        "perfiosAnalysis": "statementUpload",
                                        "disabled": false,
                                        "documentType": null,
                                        "underContent": null//html write
                                    },]
                                },
                                "label": "Please Select a option for sharing Your bank statement",
                                bankname: null
                            },
                            'BOI': {
                                uploadOptions: {
                                    'label': "Salary Account",
                                    "value": null,
                                    "options": null
                                }
                            }
                        },
                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"
                    },

                    {
                        "documentCategoryCode": "DOC77",
                        "documentFor": "MAIN_APPLICANT",
                        "showDocument": false,
                        "multipleUploadOption": false,
                        "mandatory": false,
                        "multiBankOption": true,
                        "showUpload": false,
                        "documentType": "ITR", //ITR,GST,FSA,SALARY_SLIP,DOCUMENT,DOCUMENT_ALIAS
                        // "selectedBank":{
                        //     'OB':{
                        uploadOptions: [{
                            "icon": "cloud_upload",
                            "name": "Fetch Online",
                            "code": "NB",
                            "disabled": false,
                            "perfiosAnalysis": "onlineFetch",
                            "documentType": "ONLINE_FETCH",
                            "underContent": ""//html write
                        }, {
                            "icon": "file_upload",
                            "name": "Upload ITR (e-PDF Doc)",
                            "code": "EDF",
                            "perfiosAnalysis": "statementUpload",
                            "disabled": false,
                            "documentType": null,
                            "underContent": null//html write
                        }],
                        //     },
                        //     'BOI':{
                        //         uploadOptions:{
                        //             'label':"Salary Account",
                        //             "value":null,
                        //             "options":null
                        //         }
                        //     }
                        // },

                        "label": "Please Select a option for sharing ITR statement",
                        bankname: null,

                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"

                    }, {
                        "documentCategoryCode": "DOC87",
                        "documentFor": "MAIN_APPLICANT",
                        "showDocument": false,
                        "multipleUploadOption": false,
                        "mandatory": false,
                        "multiBankOption": true,
                        "showUpload": false,
                        "showGstInput": true,
                        "documentType": "GST", //ITR,GST,FSA,SALARY_SLIP,DOCUMENT,DOCUMENT_ALIAS
                        // "selectedBank":{
                        //     'OB':{
                        uploadOptions: [
                            //     {
                            //     "icon":"cloud_upload",
                            //     "name":"Fetch Online",
                            //     "code":"NB",
                            //     "disabled":false,
                            //     "perfiosAnalysis":"onlineFetch",
                            //     "documentType": "ONLINE_FETCH",
                            //     "underContent":""//html write
                            //   },
                            {
                                "icon": "file_upload",
                                "name": "Upload GST (e-PDF Doc)",
                                "code": "EDF",
                                "perfiosAnalysis": "statementUpload",
                                "disabled": false,
                                "documentType": null,
                                "underContent": null//html write
                            }],
                        //     },
                        //     'BOI':{
                        //         uploadOptions:{
                        //             'label':"Salary Account",
                        //             "value":null,
                        //             "options":null
                        //         }
                        //     }
                        // },

                        "label": "Please Select a option for sharing GST statement",
                        bankname: null,

                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"
                    }
                ],

                    'customData': {},
                    'formSubmitFlow': [
                        {
                            "submitflow": "checkDocumentStatus",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "saveResponseToProduct": true,
                            "params": ["access_token", "loanUuid"],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},{"if":[{"==":[{"var":"formSubmitResponse.isBankStatementValid"},true]},"PROCEED",{"cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"}]}]},{"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}]}
                        },
                        {
                            "validationJson":{"if":[{"and":[{"==":[{"var":"DOCUMENT_UPLOAD_V2.DOCUMENT_DATA.0.documentUploadStatus"},"COMPLETED"]},{"==":[{"var":"appConfig.nameMatchForDocumentPage"},true]}]},"EXECUTE","NEXT"]},
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
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerUuid",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid"]}
                                ],
                                [
                                    "identityType",
                                    "STATIC",
                                    "BSA"
                                ],
                                [
                                    "applicantType",
                                    "RULE_OUTPUT",
                                    {"if":[{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"INDIVIDUAL"]},"BORROWER",{"==":[{"var":"metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerType"},"COMPANY"]},"BORROWER_COMPANY"]}
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
                            "journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
                            "validateResponse": {
                                "if": [
                                    { "==": [{ "var": "formSubmitResponse.code" }, "200"] },"PROCEED",
                                    {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}
                                ]
                            },
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "submitflow":'fetchRatingScore',
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
                            "saveResponseToCapturedData":true,
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError":"PRODUCT_ERROR",
                            "journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
                        }

                    ],
                    "dataScopeFetchFlow": [{
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    }, {
                        "fetchflow": "documentTypeFetch",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params":['access_token','loanPurposeUuid',['microservicetoken','oauthAccessToken'], "loanUuid",["applicationSource","STATIC","WEB_JOURNEY"],["documentFor","STATIC","MAIN_APPLICANT"]],
                        "apiError": "PRODUCT_ERROR",
                        "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    },
                    {
                        "fetchflow": "documentFetch",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',['microservicetoken','oauthAccessToken']],
                        "apiError": "PRODUCT_ERROR"
                    },
                    // {
                    //     "fetchflow": 'cibilfetch',
                    //     "dataFeedCloud": ['product', 'formValue'],
                    //     "params": ['access_token', ['applicationId', 'loanUuid'], ['microservicetoken', 'oauthAccessToken']],
                    //     "validateResponse": {
                    //         "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] },
                    //         {
                    //             "if": [{ "==": [{ "var": "cibilCheckStatus" }, 'Qualified'] },
                    //                 "PROCEED[JOURNEY_EVENT_CODE]BRE_QUALIFIED_1[JOURNEY_EVENT_CODE]BRE_QUALIFIED",
                    //                 "PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_QUALIFIED_1[JOURNEY_EVENT_CODE]BRE_NOT_QUALIFIED"]
                    //         }, "PRODUCT_ERROR"]
                    //     },
                    //     "apiError": "PRODUCT_ERROR",
                    // },
                    // {
                    //     "fetchflow": "updateMainLoanApplicationStatus",
                    //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                    //     "saveResponseToProduct": true,
                    //     "apiError": "PRODUCT_ERROR",
                    //     "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'INITIALIZED'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_18'], ['statusChangeDescription', 'STATIC', 'BRE - Qualified'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
                    //     "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                    // }
                    ],
                },
                "KEY_FACT_DETAILS": {
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "DownloadKeyFact": true,
                    "DownloadMode": "API",
                    "customData": {
                        "showEsignButton": false
                    },
                    "declineKeyFactSection":[
                        {
                            "componentType": "FORM",
                            "validateSection": true,
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
                            }
                        }
                    ],
                    "TL_data": [
                        {
                            "sno": "(i)",
                            "title": "Loan Amount",
                            "data":  { "var":"$scope.fetchRepaymentSchedule.object.termLoanAmount"}
                        },
                        {
                            "sno": "(ii)",
                            "title": "Total Interest  charge during the entire tenure of the loan",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                        },
                        {
                            "sno": "(iii)",
                            "title": "Other up-front charges, if any",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                        },
                        {
                            "sno": "a",
                            "title": "Processing Fees, if any",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.processingCharges"}
                        },
                        {
                            "sno": "b",
                            "title": "Insurance Charges if any",
                            "data": "Insurance premium depends upon the nature of assets. Refer sanction letter"
                        },
                        {
                            "sno": "c",
                            "title": "Other Charges, if any",
                            "data": 0
                        },
                        {
                            "sno": "(iv)",
                            "title": "Net Disbursed Amount",
                            "data": {"-":[{"var":"$scope.fetchRepaymentSchedule.object.principal"},{"var":"$scope.fetchRepaymentSchedule.object.processingCharges"}]}
                        },
                        {
                            "sno": "(iv - a)",
                            "title": "Overdue Amount",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.overdueAmount" }
                        },
                        {
                            "sno": "(v)",
                            "title": "Total amount to be paid by the borrower [i + ii + iv-a]",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.totalPayable"}
                        },
                        {
                            "sno": "(vi)",
                            "title": "Annual Percentage Rate - Effective annualized interest rate",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.irrCalculated"}
                        },
                        {
                            "sno": "(vii)",
                            "title": "Tenure of the Loan (months)",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.totalLoanTenure"}
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
                    ],
                    "CC_data" : [
                        {
                            "sno": "(i)",
                            "title": "Loan Amount",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.cashCreditAmount"}
                        },
                        {
                            "sno": "(ii)",
                            "title": "Total Interest charge during the entire tenure of the loan",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.payableInterest"}
                        },
                        {
                            "sno": "(iii)",
                            "title": "Other up-front charges, if any",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }
                        },
                        {
                            "sno": "a",
                            "title": "Processing Fees, if any",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.processingCharges"}
                        },
                        {
                            "sno": "b",
                            "title": "Insurance Charges if any",
                            "data": "Insurance premium depends upon the nature of assets. Refer sanction letter"
                        },
                        {
                            "sno": "c",
                            "title": "Other Charges, if any",
                            "data": 0
                        },
                        {
                            "sno": "(iv)",
                            "title": "Net Disbursed Amount",
                            "data": { "-": [{ "var": "$scope.fetchRepaymentSchedule.object.principal" }, { "var": "$scope.fetchRepaymentSchedule.object.processingCharges" }] }
                        },
                        {
                            "sno": "(iv - a)",
                            "title": "Overdue Amount",
                            "data": { "var": "$scope.fetchRepaymentSchedule.object.overdueAmount" }
                        },
                        {
                            "sno": "(v)",
                            "title": "Total amount to be paid by the borrower [i + ii + iv-a]",
                            "data": "Outstanding Amount + interest as on date of closure"
                        },
                        {
                            "sno": "(vi)",
                            "title": "Annual Percentage Rate - Effective annualized interest rate",
                            "data": {"var":"$scope.fetchRepaymentSchedule.object.irrCalculated"}
                        },
                        {
                            "sno": "(vii)",
                            "title": "Tenure of the Loan (months)",
                            "data": 12
                        },
                        {
                            "sno": "(viii)",
                            "title": "Repayment frequency by the borrower",
                            "data": "Principal: On Demand Interest: To be served as and when debited"
                        },
                        {
                            "sno": "(ix)",
                            "title": "Number of installments of repayment",
                            "data": "On demand"
                        },
                        {
                            "sno": "(x)",
                            "title": "Amount of each installments of repayment",
                            "data": "On demand"
                        }
                    ],
                    "TL_Statement":["This repayment schedule is based on present effective ROI linked to Bank’s RBLR. This Repayment schedule may get change with change in ROI","Insurance charges to be paid on actual basis as per third party insurance providers/Companies"],
                    "CC_Statement":["Insurance charges to be paid on actual basis as per third party insurance providers/Companies"],
                    "formSubmitFlow": [
                        {
                            "submitflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData', "metaData"],
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
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]CONGRATS_PAGE", "PRODUCT_ERROR"] },
                            "params": ['access_token', 'loanUuid', ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L7'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_14'], ['statusChangeDescription', 'STATIC', 'Success'], ['subStatusChangeDescription', 'STATIC', 'Success'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                        },
                        {
                            "submitflow": "updateMainLoanApplicationStatus",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "validationJson": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "capturedData.KEY_FACT_DETAILS.acceptStatus"
                                            },
                                            "DECLINE"
                                        ]
                                    },
                                    "EXECUTE",
                                    "NEXT"
                                ]
                            },
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {
                                "if": [{ "==": [{ "var": "capturedData.KEY_FACT_DETAILS.acceptStatus" }, "DECLINE"] }, {
                                    "cat": [
                                        "PRODUCT_ERROR[PARAMS]errorCode=",
                                        "Your application is not eligible for online processing as per bank benchmark criteria. Please contact your branch for more information."
                                    ],
                                }, "PROCEED"]
                            },
                            "params": ['access_token', 'loanUuid', ["reason", "capturedData.KEY_FACT_DETAILS.selctedReason"], ['statusToBeChanged', 'STATIC', 'AWAITING_APPROVAL_L7'], ['subStatusToBeChanged', 'STATIC', 'SUB_STATUS_15'], ['statusChangeDescription', 'STATIC', 'Decline'], ['subStatusChangeDescription', 'STATIC', 'Decline'], ['applicationSource', 'STATIC', 'WEB_JOURNEY']]
                        },
                    ],
                    "dataScopeFetchFlow": [
                        {
                            "fetchflow":"multiFacilityRetreive",
                            "dataFeedCloud":["product","formValue","capturedData"],
                            "saveResponseToProduct":true,
                            "params":["access_token","loanUuid",["selectedModule","STATIC","Staff"],["applicationSource","STATIC","WEB_JOURNEY"],["microservicetoken","oauthAccessToken"]],
                            "apiError":"PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.responseAttr.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                        },
                        {
                            "fetchflow": "loanDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},"PROCEED","PRODUCT_ERROR"]}
                        },
                        {
                            "fetchflow": "fetchCharges",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ["applicationId", "loanUuid"]],
                            "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] },
                            "apiError": "PRODUCT_ERROR"
                        },
                        // {
                        //     "fetchflow": "fetchRepaymentSchedule",
                        //     "apiError": "PRODUCT_ERROR",
                        //     "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        //     "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ["applicationId", "loanUuid"], ["isFacilityEnabled", "STATIC", true]
                        //     ],
                        //     "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, 'PROCEED', 'PRODUCT_ERROR'] }
                        // }
                    ]
                },
                "LOAN_SUMMARY": {
                    'showLeftContent': false,
                    'showStepper': false,
                    'showSubStepper': false,
                    'fieldLabel': 'continue',
                    "titleIndex": 0,
                    "loanAmountIndex": 1,
                    "refNoInx": 3,
                    "showRepaymentSchedule": false,
                    "showEmiCalculatorSection": false,
                    "showBranchSection": true,
                    "showRatingSection": false,
                    "showRejectionSection": false,
                    "showMainContent": true,
                    "showAccountOpenBtn": false,
                    rejectionView: [{
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": ' mb-0 mt-5 d-flex align-items-center',
                        "sectionContent": {
                            "titleData": `Dear `,
                            "isShow": true,
                            "endContent": [{
                                "componentType": 'ICON',
                                "className": 'ml-10',
                                "sectionContent": {
                                    "isShow": true,
                                    "iconPath": '/assets/icons/smile.png'
                                }
                            }]
                        }
                    }, {
                        "componentType": 'PARAGRAPH',
                        "className": "text-info mt-3",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Thank you for your application & feedback. We may reach you shortly or kindly visit our nearest Branch for further assistance."
                        }
                    }, {
                        "componentType": 'PARAGRAPH',
                        "className": "form-label-lg mt-4",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Your Application Reference #"
                        }
                    }],
                    tableConfig: {

                        headers: [{ fieldLabel: "Month", fieldName: "repaymentDate" }, { fieldLabel: "Opening Balance", fieldName: "loanAmountRemaining" }, { fieldLabel: "Interest", fieldName: "interest" }, { fieldLabel: "Principle Repayment", fieldName: "principal" }, { fieldLabel: "Closing Balance", fieldName: "closingBalance" }],
                        data: null
                    },
                    branchConfig: {
                        status: 'Account Information is sent to your Email address and Mobile Number',
                        branchDetails: {
                            name: null,
                            address: null
                        }
                    },
                    ratingSection: [
                        {
                            "componentType": "TITLE",
                            "validateSection": false,
                            "className": ' mb-0 mt-5 d-flex align-items-center',
                            "sectionContent": {
                                "titleData": `Rate Us!`,
                                "isShow": true,

                            }
                        }, {
                            "componentType": 'PARAGRAPH',
                            "className": "text-info",
                            "validateSection": false,
                            "sectionContent": {
                                "isShow": true,
                                "paragraphData": "Please help us improving our services by providing your valuable feedback"
                            }
                        },
                        {
                            "componentType": 'FORM',
                            "className": 'mb-3 w-50 mt-25',
                            "validateSection": false,
                            "sectionContent": {
                                "isShow": true,
                                validityEmitter: new Subject<void>(),
                                formValueEmitter: new Subject<void>(),
                                "options": {
                                    "columnSize": 1
                                },
                                "fields": [{
                                    "fieldDataType": "CARD_OPTIONS",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "fieldLabel": "How do you feel about our service",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": ['remarks'],
                                    "regex": null,
                                    "options": this.commonProperty_static.RATING,
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
                                }, {
                                    "fieldDataType": "DROPDOWN",

                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": 'AWAITING_APPROVAL_L7_REASON',
                                    "fieldLabel": "Reason",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{ "or": [{ "==": [{ "var": "rating" }, '1'] }, { "==": [{ "var": "rating" }, '2'] }, { "==": [{ "var": "rating" }, '3'] }] }, true, false]
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
                                }, {
                                    "fieldDataType": "TEXT_AREA",
                                    "isMandatory": false,
                                    "fieldLabel": "Remarks",
                                    "fieldAccessModifier": "EDITABLE", //editable,readonly
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
                                }],
                            }
                        }
                    ],
                    chartFooter: [{
                        "label": "Principle Amount",
                        "fieldName": "principal",
                        "prefix": "₹",
                        "value": null
                    }, {
                        "label": "Total Payable",
                        "fieldName": "totalPayable",
                        "prefix": "₹",
                        "value": null

                    }, {
                        "label": "Payable Interest",
                        "fieldName": "payableInterest",
                        "prefix": "₹",
                        "value": null


                    }, {
                        "label": "First EMI Date",
                        "fieldName": "firstEmiDate",
                        "value": null

                    },],
                    chartConfig: {
                        title: 'Review Your Loan',

                        data: [{
                            fieldLabel: "Principle Amount",
                            value: 25000,
                            bgColor: '#0090E5'
                        }, {
                            fieldLabel: "Interest Amount",
                            value: 4000,
                            bgColor: '#00C5AB'
                        }],
                        chartType: "PIE_CHART"
                    },
                    temp: {
                        options: {
                            layout: 'sideLayout',
                            columnSize: 1,
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        },
                        fields: [
                            {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Loan Amount",
                                "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    "runAlways": true,
                                    "default": {
                                        "if": [true, { "var": "loanAmountCopy" }]
                                    },
                                    "calculation": {
                                        "if": [true, { "var": "loanAmountCopy" }]
                                    }
                                },
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "loanAmount",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true,
                                'prefixfieldAccessModifier': 'READ_ONLY',
                                'prefixCommonProperty': null,
                                "includePrefixtoFormValue": false,
                                "prefixfieldName": "ruppe",
                                "prefixType": 'TEXT',
                                "prefix": "INR",
                                "showprefix": true,
                                "prefixplaceholderText": 'Title'
                            },
                            {
                                "fieldDataType": "RANGE",
                                "isMandatory": false,
                                "fieldLabel": "Enter your account number",
                                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                "minLength": 100,
                                "maxLength": 50000,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    // "runAlways":true,
                                    // "default":{
                                    //   "if":[true,{"var":"loanAmount"}]
                                    // },
                                    // "calculation":{
                                    //   "if":[true,{"var":"loanAmount"}]
                                    // }
                                },
                                "rulesFor": ["loanAmount"],
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "loanAmountCopy",
                                "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                                "showLabel": false,
                                "showField": true,
                                "prefix": '₹',
                                "suffix": null,
                                excludeToFormValue: true,
                            },
                            {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Tenure",
                                "fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    "runAlways": true,
                                    "default": {
                                        "if": [true, { "var": "tenureCopy" }]
                                    },
                                    "calculation": {
                                        "if": [true, { "var": "tenureCopy" }]
                                    }
                                },
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "tenure",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "RANGE",
                                "isMandatory": false,
                                "fieldLabel": "Enter your account number",
                                "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                                "minLength": 1,
                                "maxLength": 84,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    // "runAlways":true,
                                    // "default":{
                                    //   "if":[true,{"var":"tenure"}]
                                    // },
                                    // "calculation":{
                                    //   "if":[true,{"var":"tenure"}]
                                    // }
                                },
                                "rulesFor": ['tenure'],
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "xx x  xxxxx",
                                "fieldName": "tenureCopy",
                                "labelInfo": null,
                                "showLabel": false,
                                "showField": true,
                                "prefix": null,
                                "suffix": 'months',
                                "excludeToFormValue": true
                            }, {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Interest per annum (%)",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "interestRate",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "EMI to be paid",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "emiToBePaid",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "TEXT",
                                "isMandatory": false,
                                "fieldLabel": "Type of ROI",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "",
                                "fieldName": "typeOfRoi",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }]
                    },
                    "dataScopeFetchFlow": [ {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ['microservicetoken', 'oauthAccessToken'],'loanUuid'],
                        "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                        "apiError": "PRODUCT_ERROR"
                    },
                    {
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR"
                    }]
                },
                'PRODUCT_ERROR': {
                    'showLeftContent': false,
                    'showStepper': false,
                    'showSubStepper': false,
                    "errorCodes": {
                        "nameMatch": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
                    },
                    "dataScopeFetchFlow": [{
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]]
                    }
                    ]
                },

            },
        },
    };
    productDocumentList = {
        'MSMERE': {
            documentList: [
                {
                    title: "minimum6MonthsBankStatement",
                    documentName: "6 Months Bank Statement",
                    documentCategoryCode: "DOC17",
                    label: "Bank Statement (6 months)",
                    isReceived: false,
                    required: true,
                    isRadioButton: false,
                    documentList: [
                        {
                            icon: "../../../assets/icons/download.png",
                            label: "Get Online",
                            info: "Through Bank Portal",
                            type: "redirectURL",
                            category: "onlineFetch",
                            documentCategoryCode: "DOC17"
                        },
                        {
                            icon: "../../../assets/icons/file_brand.png",
                            label: "Upload Digital ePDF",
                            info: "only .pdf files and max size sholud be 20 Mb",
                            type: "redirectURL",
                            category: "statementUpload",
                            documentCategoryCode: "DOC17"
                        },
                        {
                            icon: "../../../assets/icons/file_brand.png",
                            label: "Upload Scanned Document",
                            info: "only .pdf files and max size sholud be 20 Mb",
                            type: "redirectURL",
                            category: "scannedStatementUpload",
                            documentCategoryCode: "DOC17"
                        }
                    ]
                },
                {
                    title: "udyamRegistrationNo",
                    documentName: "Udyam Registration",
                    documentCategoryCode: "DOC19",
                    label: "Udyam Registration Certificate",
                    isReceived: false,
                    required: true,
                    isRadioButton: false,
                    documentList: [
                        {
                            icon: "../../../assets/icons/download.png",
                            label: "Get Online",
                            info: "Through Udyam aadhar portal",
                            type: "redirectURL",
                            documentCategoryCode: "DOC19",
                            disable: true
                        },
                        {
                            icon: "../../../assets/icons/file_brand.png",
                            label: "Upload Digital ePDF",
                            info: "only .pdf files and max size sholud be 20 Mb",
                            type: "redirectURL",
                            documentCategoryCode: "DOC19",
                            disable: true
                        },
                        {
                            icon: "../../../assets/icons/file_brand.png",
                            label: "Upload Scanned Document",
                            info: "only .pdf files and max size sholud be 20 Mb",
                            type: "selfUpload",
                            category: "udayamdoc",
                            documentCategoryCode: "DOC19",
                            disable: false
                        }
                    ]
                },
                {
                    title: "otherDocuments",
                    documentName: "Other Documents",
                    documentCategoryCode: "DOC88",
                    label: "Other Documents",
                    isReceived: false,
                    required: false,
                    isRadioButton: false,
                    documentList: [
                        {
                            icon: "../../../assets/icons/download.png",
                            label: "Get Online",
                            info: "Get Online",
                            type: "redirectURL",
                            documentCategoryCode: "DOC88",
                            disable: true
                        },
                        {
                            icon: "../../../assets/icons/file_brand.png",
                            label: "Upload Digital ePDF",
                            info: "only .pdf files and max size sholud be 20 Mb",
                            type: "redirectURL",
                            documentCategoryCode: "DOC88",
                            disable: true
                        },
                        {
                            icon: "../../../assets/icons/file_brand.png",
                            label: "Upload Scanned Document",
                            info: "only .pdf files and max size sholud be 20 Mb",
                            type: "selfUpload",
                            category: "otherDoc",
                            documentCategoryCode: "DOC88",
                            disable: false
                        }
                    ]
                }
            ]
        },
    };
    videokycList = {};
    applicationErrorCodes = {
        PTLEX: {},
    };
    journeyEventCodes = {
    MSMERE: {
        "ACCOUNT_VERIFY": {
            "status": {
                "statusToBeChanged": 'INITIALIZED',
                "statusChangeDescription": "Once account successfully verified with OTP",
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_2",
                "subStatusChangeDescription": "Once account successfully verified with OTP"
            }
        },
        "NPA_SUCCESS": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_22",
                "subStatusChangeDescription": "NPA check / Pull fetch general account enquiry NPA successful"
            }
        },
        "NPA_FAIL": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_23",
                "subStatusChangeDescription": "CBS NPA API send failure or error respose"
            },
            "status": {
                "statusToBeChanged": 'WITHDRAW',
                "statusChangeDescription": "Rejection Review",
            }
        },
        "SMA_SUCCESS": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_24",
                "subStatusChangeDescription": "CBS SMA API successful response provided"
            }
        },
        "SMA_FAIL": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_25",
                "subStatusChangeDescription": "CBS SMA API send failure or error respose"
            },
            "status": {
                "statusToBeChanged": 'WITHDRAW',
                "statusChangeDescription": "Rejection Review",
            }
        },
        "BRE_QUALIFIED": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_28",
                "subStatusChangeDescription": "BRE response - total sacntion amount below 10 lac"
            }
        },
        "BRE_NOT_QUALIFIED": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_29",
                "subStatusChangeDescription": "BRE response - total sacntion amount above 10 lac"
            },
            "status": {
                "statusToBeChanged": 'WITHDRAW',
                "statusChangeDescription": "Rejection Review",
            }
        },
        "AADHAR_VERIFY": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_6",
                "subStatusChangeDescription": "Aadhaar verification successfull"
            }
        },
        "EDW_STATEMENT":{
            "subStatus": {
                "newSubStatus": "SUB_STATUS_3",
                "subStatusChangeDescription": "after fetch general account response it has to call this sub status"
            }
        },
        "UDYAM_VERIFY": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_38",
                "subStatusChangeDescription": "Udyam verification successfull"
            },
            "APPICE_EVENT": {
                "key": "MSMEOnboardUser",
                "properties": {
                    "UserOnboarded": true
                }
            }
        },
        "UDYAM_VERIFY_FAILED": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_39",
                "subStatusChangeDescription": "Udyam verification Failed"
            },
            "status": {
                "statusToBeChanged": 'WITHDRAW',
                "statusChangeDescription": "Rejection Review",
            }
        },
        "MORE_INFO": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_5",
                "subStatusChangeDescription": "Basic Information saved successfully"
            }
        },
        "SMA_MCP_QUAILIFIED": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_30",
                "subStatusChangeDescription": "SMA & MCP is Quailified"
            }
        },
        "SMA_MCP_NOT_QUAILIFIED": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_33",
                "subStatusChangeDescription": "SMA & MCP is not Quailified"
            }
        },
        "EMPLOYMENT_DETAILS": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_34",
                "subStatusChangeDescription": "Enhancement Initial successfully"
            }
        },
        "ENHANCEMENT_FLOW": {
            "status": {
                "statusToBeChanged": 'AWAITING_APPROVAL_L6',
                "statusChangeDescription": "Enhancement successfully",
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_4",
                "subStatusChangeDescription": "Enhancement successfully"
            }
        },
        "ENHANCEMENT_EXISITING_FLOW": {
            "status": {
                "statusToBeChanged": 'AWAITING_APPROVAL_L6',
                "statusChangeDescription": "Exisiting successfully",
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_5",
                "subStatusChangeDescription": "Exisiting successfully"
            }
        },
        "EXISITING_FLOW": {
            "status": {
                "statusToBeChanged": 'AWAITING_APPROVAL_L7',
                "statusChangeDescription": "Exisiting successfully",
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_12",
                "subStatusChangeDescription": "Exisiting successfully"
            }
        },
        "NEW_ENHANCEMENT": {
            "status": {
                "statusToBeChanged": 'AWAITING_APPROVAL_L6',
                "statusChangeDescription": "Enhancement case if new facility added by user",
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_6",
                "subStatusChangeDescription": "Enhancement case if new facility added by user"
            }
        },
        "NO_ENHANCEMENT": {
            "status": {
                "statusToBeChanged": 'AWAITING_APPROVAL_L6',
                "statusChangeDescription": "Enhancement case if no new facility added by user",
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_7",
                "subStatusChangeDescription": "Enhancement case if no new facility added by user"
            }
        },
        "DOCUMENT_UPLOAD_V2": {
            "subStatus": {
                "newSubStatus": "SUB_STATUS_15",
                "subStatusChangeDescription": "Document Upload"
            }
        },
        "DOCUMENT_UPLOAD_COMPLETE": {
            "APPICE_EVENT": {
              "key": "MSMEAddBusinessDetails",
              "properties": {
                "DocsUploaded": true,
                "Constitution": ["constitution"]
              }
            }
          },
        "KFS_LOADED": {
            "status": {
                "statusToBeChanged": "AWAITING_APPROVAL_L7",
                "statusChangeDescription": "KFS loaded"
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_13",
                "subStatusChangeDescription": "KFS loaded"
            }
        },
        "KFS_APPROVED": {
            "status": {
                "statusToBeChanged": "AWAITING_APPROVAL_L7",
                "statusChangeDescription": "KFS Accepted"
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_14",
                "subStatusChangeDescription": "KFS Accepted"
            }
        },
        "KFS_REJECTED": {
            "status": {
                "statusToBeChanged": "AWAITING_APPROVAL_L7",
                "statusChangeDescription": "KFS Rejected"
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_15",
                "subStatusChangeDescription": "KFS Rejected"
            }
        },
        "CONGRATS_PAGE": {
            "status": {
                "statusToBeChanged": "AWAITING_APPROVAL_L7",
                "statusChangeDescription": "On successful movement on last page"
            },
            "subStatus": {
                "newSubStatus": "SUB_STATUS_16",
                "subStatusChangeDescription": "KFS Accepted"
            },
            "APPICE_EVENT": {
                "key": "MSMERenewLoan",
                "properties": {
                    "LoanApproved": true,
                    "LoanAmount": ["metaData.globalScopeData.borrowerDetails.borrowerDetail.loanSanctionVO.loanSanctionAmount"],
                    "AccountNumber": ["metaData.globalScopeData.borrowerDetails.borrowerDetail.virtualAccountNumber"],
                    "LeadID": ["metaData.globalScopeData.loanDetails.loanDetails.crmLeadId"],
                    "ReferenceNumber": ["metaData.globalScopeData.loanDetails.loanDetails.crmLeadId"],
                    "LoanApprovedDate": ["metaData.globalScopeData.loanDetails.currentDate"]
                }
            }
        }
    },
    };
    productLocalisations = {
    };
    flowTags = {};
}
