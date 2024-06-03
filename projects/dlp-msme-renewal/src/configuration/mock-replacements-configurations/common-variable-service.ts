import { Injectable } from '@angular/core';
import {
    AadharConsent,
    commonProperty_static,
    getHelpInfo, homeBanner,
    homeMenu, landingPageBanner,
    loanProductInfo, rejectionConsent
} from '@msme-app/services/utils/data';
import { Subject } from 'rxjs';

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
    ErrorCodeSubStatus = {
        "MSMERE":"SUB_STATUS_20",
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
        "campaign_parameters": ["partner","websiteUrl","utm_id","utm_source","utm_medium","utm_campaign","utm_code","offerId","leadId","accountId","remarksAndSampleUrl","utm_content","object_type","object_id","utm_term"]
    }

    readonly FETCH_FLOW_METHOD_MAPPER = {
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

    static_commonProperty_KeyCodes = ['HOME_BRANCH_STATE', 'HOME_BRANCH_DISTRICT', 'HOME_BRANCH_CITY', 'HOME_BRANCH_NAME', 'STAR_GOLD', 'PINCODE', 'PINCODE_STATE', 'PINCODE_CITY', 'DOCUMENT_TYPE']
    commonProperty_static = commonProperty_static;
    encryptionHeaders = { 'clientApiKey': this.tenentConfiguration.clientApiKey, 'Content-Type': 'application/x-www-form-urlencoded' }
    homeMenu = homeMenu;
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {}
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
                        "url": "msme-renewal/basicinfo/account-number-verification"
                    },
                    {
                        "pageIndex": 1,
                        "pageCode": "EKYC_VERIFY",
                        "pageName": "Aadhaar Verify",
                        "status": "INITIALIZED",
                        "subStatus": null,
                        "subStatusChangeDescription": "Aadhaar Verification Completed",
                        "lastPage": false,
                        "url": "msme-renewal/basicinfo/kyc-verify",

                    },
                    {
                        "pageIndex": 2,
                        "pageCode": "UDYAM_VERIFY",
                        "pageName": "Udyam Verify",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_7",
                        "subStatusChangeDescription": "Udyam Verification Completed",
                        "lastPage": false,
                        "url": "msme-renewal/basicinfo/udyam-verify",
                        // resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_6']],
                    },
                    {
                        "pageIndex": 3,
                        "pageCode": "EMPLOYMENT_DETAILS",
                        "pageName": "Personal Information",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_16",
                        "subStatusChangeDescription": "Loan Information",
                        "lastPage": false,
                        "url": "msme-renewal/product-declaration/employment-details",
                        "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_5']]
                    },
                    {
                        pageIndex: 4,
                        pageCode: 'DOCUMENT_UPLOAD_V2',
                        pageName: 'Document Upload',
                        subStatus: "SUB_STATUS_15",
                        subStatusChangeDescription: null,
                        url: 'msme-renewal/custom-information/document-upload-v2',
                        resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_18']],
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
                        "url": "msme-renewal/product-declaration/more-info",
                        resumeJourneySequences: [
                            ['INITIALIZED', 'SUB_STATUS_7']],
                    },
                    {
                        pageIndex: 6,
                        pageCode: "KEY_FACT_DETAILS",
                        pageName: 'Key fact Statement',
                        lastPage: false,
                        url: 'msme-renewal/custom-information/key-fact-statement',
                        resumeJourneySequences: [['AWAITING_APPROVAL_L7', 'SUB_STATUS_9'], ['AWAITING_APPROVAL_L7', 'SUB_STATUS_10']],
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
                        "url": "msme-renewal/loan/summary",
                        "resumeJourneySequences": [],
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
                        "url": "msme-renewal/basicinfo/account-number-verification"
                    },

                    {
                        "pageIndex": 1,
                        "pageCode": "UDYAM_VERIFY",
                        "pageName": "Udyam Verify",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_7",
                        "subStatusChangeDescription": "Udyam Verification Completed",
                        "lastPage": false,
                        "url": "msme-renewal/basicinfo/udyam-verify",
                        // resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_6']],
                    },
                    {
                        "pageIndex": 2,
                        "pageCode": "EMPLOYMENT_DETAILS",
                        "pageName": "Personal Information",
                        "status": "INITIALIZED",
                        "subStatus": "SUB_STATUS_16",
                        "subStatusChangeDescription": "Loan Information",
                        "lastPage": false,
                        "url": "msme-renewal/product-declaration/employment-details",
                        "resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_5']]
                    },
                    {
                        pageIndex: 3,
                        pageCode: 'DOCUMENT_UPLOAD_V2',
                        pageName: 'Document Upload',
                        subStatus: "SUB_STATUS_15",
                        subStatusChangeDescription: null,
                        url: 'msme-renewal/custom-information/document-upload-v2',
                        resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_18']],
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
                        "url": "msme-renewal/product-declaration/more-info",
                        resumeJourneySequences: [
                            ['INITIALIZED', 'SUB_STATUS_7']],
                    },
                    // {
                    //     "pageIndex": 4,
                    //     "pageCode": "CREDIT_FACILITY",
                    //     "pageName": "",
                    //     "status": "INITIALIZED",
                    //     "subStatus": "SUB_STATUS_5",
                    //     "subStatusChangeDescription": "Applicant Verification Completed",
                    //     "lastPage": false,
                    //     "url": "msme-renewal/product-declaration/credit-facility",
                    //    // "resumeJourneySequences": [["INITIALIZED", "SUB_STATUS_7"]]
                    // },
                    {
                        pageIndex: 5,
                        pageCode: "KEY_FACT_DETAILS",
                        pageName: 'Key fact Statement',
                        lastPage: false,
                        url: 'msme-renewal/custom-information/key-fact-statement',
                        resumeJourneySequences: [['AWAITING_APPROVAL_L7', 'SUB_STATUS_9'], ['AWAITING_APPROVAL_L7', 'SUB_STATUS_10']],
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
                        "url": "msme-renewal/loan/summary",
                        "resumeJourneySequences": [],
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
                        "url": "msme-renewal/basicinfo/account-number-verification"
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
                        "url": "msme-renewal/basicinfo/kyc-verify",

                    },
                    {
                        pageIndex: 2,
                        pageCode: 'PRODUCT_ERROR',
                        pageName: 'Product error',
                        status: 'INITIALIZED',
                        subStatus: ['SUB_STATUS_9'],
                        lastPage: false,
                        subStatusChangeDescription: 'Account Number Verified',
                        url: 'msme-renewal/custom-information/product-error',
                        resumeJourneySequences: []
                        //entryjourneyEventCode:'CONTACT_BRANCH'
                    },
                ],
                "company": [
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
                        "url": "msme-renewal/basicinfo/account-number-verification"
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
                        "url": "msme-renewal/basicinfo/kyc-verify",

                    },
                    {
                        pageIndex: 2,
                        pageCode: 'PRODUCT_ERROR',
                        pageName: 'Product error',
                        status: 'INITIALIZED',
                        subStatus: ['SUB_STATUS_9'],
                        lastPage: false,
                        subStatusChangeDescription: 'Account Number Verified',
                        url: 'msme-renewal/custom-information/product-error',
                        resumeJourneySequences: []
                        //entryjourneyEventCode:'CONTACT_BRANCH'
                    },
                ]

            }
        }
    }

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
                        },
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
            "company": [
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
                        },
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
        "columnSize": 1
    }

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

    }


    pageSectionConfig = {

    }


    pageMetaConfig = {

    }


    productDocumentList = {

    }

    videokycList = {
        'PTLEX': {
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
    };


    placeholderResponses = {

    }

    applicationErrorCodes = {
        PTLEX: {

        }
    }

    //journey Events are the events which we need to perform at instant of a journey 
    journeyEventCodes = {
        PTLEX: {

        },
    }

    flowTags = {

    }
}
