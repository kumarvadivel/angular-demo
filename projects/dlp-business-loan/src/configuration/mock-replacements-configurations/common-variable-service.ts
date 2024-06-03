import { Injectable } from '@angular/core';
import { AadharConsent, commonProperty_static, getHelpInfo, homeBanner, homeMenu, landingPageBanner, loanProductInfo, rejectionConsent } from '@bl-app/services/utils/data';
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
    appLayoutConfig = {
        isShowJourneyHeader: true,
        isShowJourneyFooter: true,
        isShowSubStepper: true,
        isShowStepperPercentage: true,
        mobileView: false,
    }
    ErrorCodeSubStatus = {
        "BL10AB":"SUB_STATUS_20"
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
        'fetchEligibilityDtls': 'fetchEligilibilityDetails',
        "checkDocumentStatus":"checkDocumentStatus",
        "saveCompanyRepresentative": "saveCompanyRepresentative",
        "breEligiblityCheck": "breEligiblityCheck",
        "fetchDemographicDetails": "fetchDemographicDetails"
    }

    static_commonProperty_KeyCodes = ['HOME_BRANCH_STATE', 'HOME_BRANCH_DISTRICT', 'HOME_BRANCH_CITY', 'HOME_BRANCH_NAME', 'STAR_GOLD', 'PINCODE', 'PINCODE_STATE', 'PINCODE_CITY', 'DOCUMENT_TYPE',"GST_SEARCH","GST_SEARCH_V3"]
    commonProperty_static = commonProperty_static
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
            name: 'home',
            label: 'Home',
            url: '/1/landing',
            isActive: true
        },
        // {
        //     name: 'trackStatus',
        //     label:'Track Status',
        //     url: '/1/landing',
        //     isActive: false
        //   },
        {
            name: 'products',
            label: 'Products',
            url: '/1/landing',
            isActive: true
        },
        {
            name: 'savingsAccount',
            label: 'Savings Account',
            url: '1/savings-account/product-description',
            isActive: false
        }
    ];
    /*product desc page jsons*/
    productDesc = [
        {
            id: 'savings-account',
            name: 'Savings Account',
            info: '',
            color: '#197DFC',
            description: ' We work hard to provide the best to our families so that they lead happy and comfortable life. Certain events like unfortunate death of earning member, critical illness, medical emergencies, accidents, natural and man-made calamities etc. can adversely affect our family’s well-being and finances. '
        }
    ]
    productDescInfoTabs = {
        "SBA": [
            {
                name: 'eligibiity',
                label: 'Eligiblity',
                mode: 'points',
                head: 'Eligiblity',
                desc: [
                    {
                        pt1: "Savings account can be opened by any individual or institution permitted by RBI."
                    },
                    {
                        pt1: "VKYC Savings account can only be opened under one bank across the banking system."
                    },
                    {
                        pt1: "Hindu Undivided Families"
                    },
                    {
                        pt1: "Foreign Nationals Residing in India*"
                    },
                    {
                        pt1: "Presently online account with our bank can be opened by any individual above 18 years of age with Aadhaar and PAN card being the officially valid documents."
                    },
                    {
                        pt1: "*Foreign Nationals should be residing in India for a period greater than 180 days and must possess: A valid passport, a valid visa, FRRO (Foreign Region Registration Office) Certificate, and a Residential Permit."
                    }
                ]
            },
            {
                name: 'feature',
                label: 'Feature',
                head: 'Feature',
                mode: 'points',
                desc: [
                    {
                        pt1: "AQB starts at as low as Rs. 500*."
                    },
                    {
                        pt1: "Personal accidental death cover of Upto Rs. 30 lakhs*."
                    },
                    {
                        pt1: "Air accident cover of Upto Rs. 1cr*."
                    },
                    {
                        pt1: "Debit Card free of cost*."
                    },
                    {
                        pt1: "Free DD pay orders*."
                    },
                    {
                        pt1: "Concession on locker facility*."
                    },
                    {
                        pt1: "Waiver of processing charges on retail loans*."
                    },
                    {
                        pt1: "No minimum balance requirement for salary account*."
                    },
                    {
                        pt1: "*Subject to terms and conditions"
                    },
                ]
            },
            {
                name: 'benefits',
                label: 'Benefits',
                head: 'Benefits',
                mode: 'points',
                desc: [
                    {
                        pt1: "Enjoy a zero-deposit, zero balance account with Basic Savings Bank Deposit Account (BSBDA)."
                    },
                    {
                        pt1: "Enjoy higher ATM withdrawals of up to Rs.5 Lakh/ month."
                    },
                    {
                        pt1: "Free cheque leaves."
                    }
                ]
            },
            {
                name: 'documentation',
                label: 'Documentation',
                head: 'Documentation',
                mode: 'points',
                desc: [
                    {
                        pt1: "PAN card"
                    },
                    {
                        pt1: "Passport"
                    },
                    {
                        pt1: "Driving License"
                    },
                    {
                        pt1: "Voter's ID"
                    },
                    {
                        pt1: "Ration Card"
                    },
                    {
                        pt1: "Aadhaar card"
                    }
                ]
            },
            {
                name: 'faqs',
                label: "FAQ'S",
                head: 'Frequently Asked Questions',
                mode: 'accordion',
                desc: [
                    {
                        accordionheader: "What is a Savings Account?",
                        accordioncontent: "A Savings Account is a deposit account opted for by many who wish to save a certain part of their earnings. It is a type of bank account wherein you can park your funds, earn interest on the same and also withdraw money at any time. It provides the convenience of liquid funds."
                    },
                    {
                        accordionheader: "How can one open a Savings Account online?",
                        accordioncontent: "The online Savings Account opening process is a simple and fairly easy one. Click here to begin your online bank account opening process, right from the comfort of your home. At Bank of India, you can also opt for the Video KYC (Know Your Customer) facility to avoid an in-person visit to the bank branch."
                    }
                ]
            }
        ],
        "CA": [
            {
                name: 'eligibiity',
                label: 'Eligiblity',
                mode: 'points',
                head: 'Eligiblity',
                desc: [
                    {
                        pt1: "Current account can be opened by any individual or institution permitted by RBI."
                    },
                    {
                        pt1: "VKYC Current account can only be opened under one bank across the banking system."
                    },
                    {
                        pt1: "Hindu Undivided Families"
                    },
                    {
                        pt1: "Foreign Nationals Residing in India*"
                    },
                    {
                        pt1: "Presently online account with our bank can be opened by any individual above 18 years of age with Aadhaar and PAN card being the officially valid documents."
                    },
                    {
                        pt1: "*Foreign Nationals should be residing in India for a period greater than 180 days and must possess: A valid passport, a valid visa, FRRO (Foreign Region Registration Office) Certificate, and a Residential Permit."
                    }
                ]
            },
            {
                name: 'feature',
                label: 'Feature',
                head: 'Feature',
                mode: 'points',
                desc: [
                    {
                        pt1: "AQB starts at as low as Rs. 500*."
                    },
                    {
                        pt1: "Personal accidental death cover of Upto Rs. 30 lakhs*."
                    },
                    {
                        pt1: "Air accident cover of Upto Rs. 1cr*."
                    },
                    {
                        pt1: "Debit Card free of cost*."
                    },
                    {
                        pt1: "Free DD pay orders*."
                    },
                    {
                        pt1: "Concession on locker facility*."
                    },
                    {
                        pt1: "Waiver of processing charges on retail loans*."
                    },
                    {
                        pt1: "No minimum balance requirement for salary account*."
                    },
                    {
                        pt1: "*Subject to terms and conditions"
                    },
                ]
            },
            {
                name: 'benefits',
                label: 'Benefits',
                head: 'Benefits',
                mode: 'points',
                desc: [
                    {
                        pt1: "Enjoy a zero-deposit, zero balance account with Basic Current Account (BSBDA)."
                    },
                    {
                        pt1: "Enjoy higher ATM withdrawals of up to Rs.5 Lakh/ month."
                    },
                    {
                        pt1: "Free cheque leaves."
                    }
                ]
            },
            {
                name: 'documentation',
                label: 'Documentation',
                head: 'Documentation',
                mode: 'points',
                desc: [
                    {
                        pt1: "PAN card"
                    },
                    {
                        pt1: "Passport"
                    },
                    {
                        pt1: "Driving License"
                    },
                    {
                        pt1: "Voter's ID"
                    },
                    {
                        pt1: "Ration Card"
                    },
                    {
                        pt1: "Aadhaar card"
                    }
                ]
            },
            {
                name: 'faqs',
                label: "FAQ'S",
                head: 'Frequently Asked Questions',
                mode: 'accordion',
                desc: [
                    {
                        accordionheader: "What is a Current Account?",
                        accordioncontent: "A Current Account is a deposit account opted for by many who wish to save a certain part of their earnings. It is a type of bank account wherein you can park your funds, earn interest on the same and also withdraw money at any time. It provides the convenience of liquid funds."
                    },
                    {
                        accordionheader: "How can one open a Current Account online?",
                        accordioncontent: "The online Current Account opening process is a simple and fairly easy one. Click here to begin your online bank account opening process, right from the comfort of your home. At Bank of India, you can also opt for the Video KYC (Know Your Customer) facility to avoid an in-person visit to the bank branch."
                    }
                ]
            }
        ]
    };

    pageSequenceData = {

    }

    stepperData = {
        'BL10AB': {
            "individual": [
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
                        {
                            "id": "002",
                            "isActive": false,
                            "pageCode": 'EMAIL_VERIFY',
                            "name": 'Email',
                            "isCompleted": false
                        },
                        {
                            "id": "003",
                            "isActive": false,
                            "pageCode": 'PAN_VERIFY',
                            "name": 'PAN Number',
                            "isCompleted": false
                        },
                        {
                            "id": "004",
                            "isActive": false,
                            "pageCode": 'EKYC_VERIFY',
                            "name": 'Aadhaar Number',
                            "isCompleted": false
                        },
                        {
                            "id": "005",
                            "isActive": false,
                            "pageCode": 'UDYAM_VERIFY',
                            "name": 'Udyam Number',
                            "isCompleted": false
                        },

                    ],

                },
                {
                    "name": "Borrower",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "subStep": [
                        {
                            "id": "001",
                            "isActive": false,
                            "pageCode": 'MORE_INFO',
                            "name": "more info",
                            "isCompleted": false
                        },
                        {
                            "id": "002",
                            "isActive": false,
                            "pageCode": "EMPLOYMENT_DETAILS",
                            "name": "employment details",
                            "isCompleted": false
                        },
                        {
                            "id": "003",
                            "isActive": false,
                            "pageCode": "FACILITY_DETAILS",
                            "name": "facility details",
                            "isCompleted": false
                        }

                    ],
                    "subStepWidth": "40%"
                },
                {
                    "name": "Consent & Document",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "subStep": [
                        {
                            "id": "001",
                            "isActive": false,
                            "pageCode": 'DECLARATION',
                            "isCompleted": false
                        },
                        {
                            "id": "002",
                            "pageCode": "DOCUMENT_UPLOAD_V2",
                            "isActive": false,
                            "isCompleted": false
                        }
                    ],
                    "subStepWidth": "40%"
                },
                {
                    "name": "Sanction details",
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
            ],
            "company": [
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
                        {
                            "id": "002",
                            "isActive": false,
                            "pageCode": 'EMAIL_VERIFY',
                            "name": 'Email',
                            "isCompleted": false
                        },
                        {
                            "id": "003",
                            "isActive": false,
                            "pageCode": 'UDYAM_VERIFY',
                            "name": 'Udyam Number',
                            "isCompleted": false
                        },
                        {
                            "id": "004",
                            "isActive": false,
                            "pageCode": 'PAN_VERIFY',
                            "name": 'PAN Number',
                            "isCompleted": false
                        },

                    ],

                },
                {
                    "name": "Borrower",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "subStep": [
                        {
                            "id": "001",
                            "isActive": false,
                            "pageCode": 'MORE_INFO',
                            "name": "more info",
                            "isCompleted": false
                        },
                        {
                            "id": "002",
                            "isActive": false,
                            "pageCode": "EMPLOYMENT_DETAILS",
                            "name": "employment details",
                            "isCompleted": false
                        }

                    ],
                    "subStepWidth": "40%"
                },
                {
                    "name": "Consent & Document",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "subStep": [
                        {
                            "id": "001",
                            "isActive": false,
                            "pageCode": 'DECLARATION',
                            "isCompleted": false
                        },
                        {
                            "id": "002",
                            "isActive": false,
                            "pageCode": 'DOCUMENT_LIST',
                            "isCompleted": false
                        }
                    ],
                    "subStepWidth": "40%"
                },
                {
                    "name": "Acknowledgement",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false
                }
            ],

            'group': []
        }
    };



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
