import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AadharConsent, 
    commonProperty_static, 
    getHelpInfo, homeBanner, 
    homeMenu, landingPageBanner, 
    loanProductInfo, rejectionConsent} from '../services/utils/data'
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
        'HL': {
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
    getHelpInfo = getHelpInfo
    rejectionConsent = rejectionConsent
    AadharConsent = AadharConsent
    pageSequenceData = {
        'HL': {
            'journeyPages': {
                individual: [
                    {
                        pageIndex: 0,
                        pageCode: 'MOBILE_VERIFY',
                        pageName: 'Mobile Number Verification',
                        "lastPage": false,
                        url: 'basicinfo/mobile-verify',
                        resumeJourneySequences: [["INITIALIZED",'SUB_STATUS_1']],
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'MORE_INFO',
                        pageName: 'Personal Information',
                        "lastPage": false,
                        url: 'product-declaration/more-info',
                        resumeJourneySequences: [ ['INITIALIZED', 'SUB_STATUS_2'], ['INITIALIZED', 'SUB_STATUS_3'],['INITIALIZED', 'SUB_STATUS_4'],['INITIALIZED', 'SUB_STATUS_5'], ['INITIALIZED', 'SUB_STATUS_6'], ['INITIALIZED', 'SUB_STATUS_7'], ['INITIALIZED', 'SUB_STATUS_8'], ['INITIALIZED', 'SUB_STATUS_9'], ['INITIALIZED', 'SUB_STATUS_10']],
                        exitjourneyEventCode: 'MORE_INFO_COMPLETE'
                    },
                    {
                        pageIndex: 1,
                        pageCode: "STATUS_CHECK",
                        pageName: "Status Check list",
                        resumeJourneySequences: [],
                        "lastPage": false,
                        url: 'custom-information/status-checklist',
                    },
                    {
                        "pageIndex": 2,
                        "pageCode": "PERSONAL_DETAILS",
                        "pageName": "Personal Information",
                        "lastPage": false,
                        "url": "product-declaration/personal-details",
                        resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_12'], ['INITIALIZED', 'SUB_STATUS_13'],['INITIALIZED', 'SUB_STATUS_14'], ['INITIALIZED', 'SUB_STATUS_15'],["AWAITING_APPROVAL_L4","SUB_STATUS_1"]]
                    },
                    {
                        pageIndex: 0,
                        pageCode: 'EMPLOYMENT_DETAILS',
                        pageName: 'Employment Details',
                        subStatus: null,
                        subStatusChangeDescription: null,
                        url: 'product-declaration/employment-details',
                        resumeJourneySequences: [["AWAITING_APPROVAL_L21","SUB_STATUS_1"],["AWAITING_APPROVAL_L21","SUB_STATUS_2"],["AWAITING_APPROVAL_L21","SUB_STATUS_4"],["AWAITING_APPROVAL_L21","SUB_STATUS_5"]],
                    },
                    {
                        pageIndex: 0,
                        pageCode: 'DOCUMENT_UPLOAD_V2',
                        pageName: 'Document Upload',
                        subStatus: null,
                        subStatusChangeDescription: null,
                        url: 'custom-information/document-upload-v2',
                        resumeJourneySequences: [["AWAITING_APPROVAL_L21","SUB_STATUS_6"],["AWAITING_APPROVAL_L21","SUB_STATUS_7"],["AWAITING_APPROVAL_L21","SUB_STATUS_8"],["AWAITING_APPROVAL_L21","SUB_STATUS_9"],["AWAITING_APPROVAL_L21","SUB_STATUS_10"],["AWAITING_APPROVAL_L36","SUB_STATUS_1"],["AWAITING_APPROVAL_L36","SUB_STATUS_2"],["AWAITING_APPROVAL_L36","SUB_STATUS_3"]],
                    },
                    {
                        pageIndex: 0,
                        pageCode: 'COAPPLICANT_DETAILS',
                        pageName: 'Co-applicant Details',
                        subStatus: null,
                        subStatusChangeDescription: null,
                        url: 'co-applicant/coapplicant-details',
                        resumeJourneySequences: [["AWAITING_APPROVAL_L21","SUB_STATUS_13"],["AWAITING_APPROVAL_L21","SUB_STATUS_14"],["AWAITING_APPROVAL_L21","SUB_STATUS_15"],["AWAITING_APPROVAL_L21","SUB_STATUS_16"],["AWAITING_APPROVAL_L21","SUB_STATUS_21"],["AWAITING_APPROVAL_L21","SUB_STATUS_22"],["AWAITING_APPROVAL_L21","SUB_STATUS_23"],["AWAITING_APPROVAL_L21","SUB_STATUS_24"],["AWAITING_APPROVAL_L21","SUB_STATUS_25"],["AWAITING_APPROVAL_L21","SUB_STATUS_26"],["AWAITING_APPROVAL_L21","SUB_STATUS_27"],["AWAITING_APPROVAL_L21","SUB_STATUS_28"],["AWAITING_APPROVAL_L21","SUB_STATUS_29"],["AWAITING_APPROVAL_L21","SUB_STATUS_30"],["AWAITING_APPROVAL_L21","SUB_STATUS_31"],["AWAITING_APPROVAL_L21","SUB_STATUS_32"],["AWAITING_APPROVAL_L21","SUB_STATUS_33"]],
                    },
                    {
                        pageIndex: 0,
                        pageCode: 'SANCTION_DETAILS',
                        pageName: 'sanction Details',
                        subStatus: null,
                        subStatusChangeDescription: null,
                        url: 'sanction-details/sanction',
                        resumeJourneySequences: [],
                    },
                    {
                        pageIndex: 4,
                        pageCode: 'LOAN_SUMMARY',
                        pageName: 'Personal Information',
                        lastPage: false,
                        url: 'loan/summary',
                        exitjourneyEventCode: "LOAN_SUMMARY_SUBMIT",
                        resumeJourneySequences: [["AWAITING_APPROVAL_L36","SUB_STATUS_5"],["AWAITING_APPROVAL_L36","SUB_STATUS_6"],]
                    },
                ],
                company: [],
                group: []
            },
            'otherPages': {
                "individual": [
                    {
                        pageIndex: 1,
                        pageCode: 'CONTACT_BRANCH',
                        pageName: 'Thank you page',
                        lastPage: false,
                        url: 'basicinfo/contact-branch',
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 0,
                        pageCode: 'BRANCH_DETAILS',
                        pageName: 'Branch information',
                        lastPage: false,
                        url: 'custom-information/branch-details',
                        resumeJourneySequences: []
                    }, {
                        pageIndex: 0,
                        pageCode: 'ADDITIONAL_INFORMATION',
                        pageName: 'Additional information',
                        lastPage: false,
                        url: 'custom-information/additional-information',
                        resumeJourneySequences: [['INITIALIZED', 'SUB_STATUS_11']],
                        exitjourneyEventCode: "PERSONAL_DETAILS_COMPLETE_NTB"
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'PRODUCT_ERROR',
                        pageName: 'Product error',
                        lastPage: false,
                        subStatusChangeDescription: 'Account Number Verified',
                        url: 'custom-information/product-error',
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'COAPPLICANT_MORE_INFO',
                        pageName: 'coapplicant-more-information',
                        lastPage: false,
                        url: 'co-applicant/more-info',
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'COAPPLICANT_PERSONAL_DETAILS',
                        pageName: 'coapplicant-Personal-details',
                        lastPage: false,
                        url: 'co-applicant/personal-details',
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'COAPPLICANT_EMPLOYMENT_DETAILS',
                        pageName: 'coapplicant-employment-details',
                        lastPage: false,
                        url: 'co-applicant/employment-details',
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'COAPPLICANT_DOCUMENT_UPLOAD',
                        pageName: 'coapplicant-Document-upload',
                        lastPage: false,
                        url: 'co-applicant/document-upload',
                        resumeJourneySequences: []
                    },
                ]
            }
        },
    };
    stepperData = {
        'HL': {
            "individual": [{
                "name": "Basic Information",
                "info": "10MinVerifyYou",
                "isActive": true,
                "isCompleted": false,
                "pageCode":"MOBILE_VERIFY",
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
    tabsData = {
        HL: [
            {
                displayType: 'bulletPoints',
                name: 'features',
                label: 'Features',
                displayData: [
                    "We have carefully curated a series of Home Loan products with an array of attractive benefits and interest rates that fulfil your wish of owning your dream home."
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
                            label: 'Aadhar Card',
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
        'HL': {
            'individual': {
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
                        "titleData": "Welcome!"
                    }
                },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6Are you sourcing agent? col-md-6 col-sm-12 col-xs-12 mb-3",
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
                            "options": {'columnSize': 1},
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "isMandatory": false,
                                    "fieldLabel": "I am a Sourcing Agent",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": ["bsaCode"],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,

                                    "placeholderText": "Enter sourcing agent code",
                                    "fieldName": "issourcingAgent",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "BSA Code",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 6,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField":{
                                            "if":[{"==":[{"var":"issourcingAgent"},true]}]
                                          
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Bsa Code",
                                    "fieldName": "bsaCode",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true,
                                },
                                {
                                    "fieldDataType": "MOBILE_NO",
                                    "isMandatory": true,
                                    "fieldLabel": "Mobile number",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 10,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "dataMasking":true,
                                    "regex": "^[1-9][0-9]{9}$",
                                    "countryCode": "+91",
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter 10 digit Mobile Number",
                                    "fieldName": "mobileNumber",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true
                                },
                            ],
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 f-16",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Enter a mobile number linked with Aadhaar for quicker processing of your application",
                        },
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
                                "consentCode": "DND_CONSENT_HL",
                                "submitConsentCodes": [
                                  "DND_CONSENT_HL",
                                  "PRIVACY_POLICY_HL"
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
                        'componentType': 'OTP',
                        "sectionContent": {
                            "fields": {
                                "fieldDataType": "OTP",
                                "otpType": 'MOBILE',
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
                                "placeholderText": "Enter Mobile OTP",
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
                      }, {
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
                                        "submitConsentCodes": ['AADHAR_CONSENT_HOMELOAN'],
                                        label: " Click here to agree",
                                        isMultiLabel: false,
                                        "completed": null,
                                        "endLinks": [
                                            {
                                                "label": 'Aadhaar consent.',
                                                "height": '70%',
                                                "width": '70%',
                                                "linkType": 'POPUP',
                                                "consentCode": "AADHAR_CONSENT_HOMELOAN",
                                                "popupContent": [],
                                            }
                                        ]
                                    },
                                ]
                            },
                            "isShow": true,
                            "showField": true,
                        },
                    },
                ],
                "ADDITIONAL_INFORMATION": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": {"content": {"cat": ["Hello, ", {"var": "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle"}, "!"]}},
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
                    }, {
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
                            "paragraphData": "Pre-filled from UIDAI Aadhar Database",
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
                                'columnSize': 3,
                                'mapSupplyData': true,
                                'autoVerifyMappedFields': true,
                                'mapAndDisable': true
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
                                    "showField": true,
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
                                    "showField": true,
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
                                    "showField": true,
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
                                    "showField": true,
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
                                    "options": this.commonProperty_static.GENDER,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Gender",
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
                                    "regex": {},
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Email OTP",
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
                                    "placeholderText": null,
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
                                    "placeholderText": null,
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
                                    "value": null,
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
                                    "placeholderText": null,
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
                                            "placeholderText": "Enter Resident Since",
                                            "fieldName": "livingSince",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            'commonpropertyType': 'DOCUMENT_TYPE',
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
                                            "placeholderText": 'Address Type',
                                            "visibleInInvestorSection": false,
                                            "showLabel": true,
                                            "uploadTypeInputfieldName": "addressTwoDocument",
                                            "documentCategorycode": "IND_PAP"
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
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
                                            "placeholderText": 'Address Type',
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        }
                                    ],
                                },
                            ],
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        }
                    }
                ],
                "PERSONAL_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": {"content": {"cat": ["Hello, ", {"var": "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle"}]}},
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
                                "mapSupplyData": true,
                                "autoVerifyMappedFields": true,
                                "mapAndDisable": true,
                                "columnSize": 3,
                                sendOptionKeyForDropDowns: true,
                                externalFeedDataforValidationJson: null
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
                                    "dataMasking":true,
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
                                    "regex": {},
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Email OTP",
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
                                            "fieldLabel": {"if": [{"==": [{"var": "borrowerDetails.borrowerDetail.isReKyc"}, false]}, "Communication Address (As Per Bank Records)", "Communication Address (Details As per Aadhar Card)"]}
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
                                    "validationJson": {default: false},
                                    "rulesFor": ['addressOne'],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": null,
                                    "fieldName": "differenceCommunicationAddress",
                                    "showLabel": false,
                                    "groupName": '',
                                    "groupIndex": 4,
                                },
                                {
                                    "fieldDataType": "ADDRESS",
                                    "fieldLabel": "Address as per Aadhaar",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {"showField": {"==": [{"var": "differenceCommunicationAddress"}, true]}},
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": null,
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
                                            "fieldDataType": "DROPDOWN",
                                            "isMandatory": true,
                                            "fieldLabel": "Pincode",
                                            "fieldAccessModifier": "EDITABLE",
                                            "commonpropertyType": "PINCODE",
                                            "minLength": null,
                                            "maxLength": 999999,
                                            "error": null,
                                            "value": null,
                                            "validationJson": null,
                                            "rulesFor": ['addressOneState', 'addressOneDistrict'],
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
                                        }, {
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
                                            'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
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
                                            "placeholderText": 'Address Type',
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "fieldDataType": "DATE",
                                            "isMandatory": false,
                                            "fieldLabel": "Resident Since",
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
                                            "groupName": 'ProductDeclaration',
                                            "groupIndex": null,
                                            "placeholderText": "Enter Resident Since",
                                            "fieldName": "addressOneLivingSince",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            'commonpropertyType': 'DOCUMENT_TYPE',
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
                                            "placeholderText": 'Address Type',
                                            "visibleInInvestorSection": false,
                                            "showLabel": true,
                                            "uploadTypeInputfieldName": "addressTwoDocument",
                                            "documentCategorycode": "IND_PAP"
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
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
                                            "placeholderText": 'Address Type',
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                    ],
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
                                    "validationJson": {default: false},
                                    "rulesFor": ["homeBranchState"],
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": null,
                                    "fieldName": "differencebranch",
                                    "showLabel": false,
                                    "groupName": '',
                                    "groupIndex": 7,
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
                                                {"and":[{"!=":[{"var":"homeBranchState"},null]},{"!=":[{"var":"homeBranchState"},""]}]
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
                                            "value": {
                                              "if": [
                                                {
                                                  "==": [
                                                    {
                                                      "var": "branchCode"
                                                    },
                                                    null
                                                  ]
                                                },
                                                null
                                              ]
                                            }
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
                                    "placeholderText": "Enter Branch Address",
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
                                        "consentCode": "BUREAU_CONSENT_HL",
                                        "submitConsentCodes": ['BUREAU_CONSENT_HL'],
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
                ],
                "BRANCH_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": 'common-title mb-10',
                        "sectionContent": {
                            "titleData": `Please Select the branch`,
                            "isShow": true
                        }
                    }, {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "className": 'common-info mb-10',
                        "sectionContent": {
                            "paragraphData": `Select a branch where you want your loan Application to be Processed`,
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
                                'columnSize': 3,
                                sendOptionKeyForDropDowns: true
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
                                            "value": {
                                              "if": [
                                                {
                                                  "==": [
                                                    {
                                                      "var": "branchCode"
                                                    },
                                                    null
                                                  ]
                                                },
                                                null
                                              ]
                                            }
                                          },
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"branchCode"},null]},{"!=":[{"var":"branchCode"},""]}]
                                            },{
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
                                    "placeholderText": "Enter Branch Address",
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
                                "mapSupplyData": true,
                                "sendOptionKeyForDropDowns": true,
                                "columnSize": 3
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
                                        "pensionerDetailsNumberVariable5",
                                        "pensionerDetailsNumberVariable9",
                                        "borrowerEmploymentHistoryNumberVariable4","numberVariable12",
                                        "propertystatus","purposeofloan","modeofrepayment",
                                        "textVariable6", "borrowerEmploymentHistoryTextVariable11", "borrowerEmploymentHistoryTextVariable15", "emailId", "borrowerEmploymentHistoryTextVariable4", "officialEmailId"
                                        , "employedSince", "textVariable35", "textVariable36", "textVariable3", "dateVariable2", "dateVariable1", "textVariable11", "emiPaid", "borrowerEmploymentHistoryTextVariable24", "numberVariable3", "organizationName", "buisnessEmail"
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
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "LOAN_APPLICATION_VARIABLE13",
                                    "fieldLabel": "Purpose of Loan",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{"or":[{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                            },{
                                                "==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]
                                            },{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
                                            }]}]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Purpose of Loan",
                                    "fieldName": "purposeofloan",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Property And Repayment",
                                    "groupIndex": 2,
                                    "showField": true,
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "LOAN_APPLICATION_VARIABLE16",
                                    "fieldLabel": "Mode of Repayment",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson":  {
                                        "showField": {
                                            "if": [{"or":[{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                            },{
                                                "==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]
                                            },{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
                                            }]}]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Mode of Repayment",
                                    "fieldName": "modeofrepayment",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Property And Repayment",
                                    "groupIndex": 2,
                                    "showField": true,
                                    
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "dependentField": null,
                                    "isMandatory": true,
                                    "commonpropertyType": "PROPERTY_DETAILS_TEXT_VARIABLE_7",
                                    "fieldLabel": "Property status",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson":  {
                                        "showField": {
                                            "if": [{"or":[{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                            },{
                                                "==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]
                                            },{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
                                            }]}]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "errorIconPath": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Property Status",
                                    "fieldName": "propertystatus",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": "Property And Repayment",
                                    "groupIndex": 2,
                                    "showField": true,
                                    
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                            }]
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
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
                                    "dataMasking":true,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "countryCode": "+91",
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 1,
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
                                    "placeholderText": "Enter Email OTP",
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
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
                                    "placeholderText": "Enter Employer Name",
                                    "fieldName": "organizationName",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "autoSuggest": true,
                                    "autosuggestCode": "employerSearch",
                                    "autoSuggestSelectDisable": false,
                                    "journeyEventCode":"EMPLOYMENT_DETAILS_CHECK"
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Gross Monthly Income",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "borrowerEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Gross Monthly Income",
                                    "fieldName": "pensionerDetailsNumberVariable5",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
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
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "borrowerEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Total Monthly Deductions",
                                    "fieldName": "pensionerDetailsNumberVariable9",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Gross Monthly Income",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "borrowerEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Gross Monthly Income",
                                    "fieldName": "borrowerEmploymentHistoryNumberVariable4",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
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
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "borrowerEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "borrowerEmploymentType"}, "SALARIED"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Total Monthly Deductions",
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "udyamHyphen":true,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "placeholderText": "UDYAM-XX-XX-XXXXXXX",
                                    "fieldName": "textVariable3",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "upperCase": true,
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "placeholderText": "Enter Buisness Name",
                                    "fieldName": "textVariable6",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "placeholderText": "Enter Business Started On",
                                    "fieldName": "dateVariable2",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
                                            }]
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
                                    "groupIndex": 1,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Total Business Income",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Total Business Income",
                                    "fieldName": "numberVariable12",
                                    "labelInfo": null,
                                    "showLabel": true,
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
                                            "if": [{
                                                "==": [{"var": "borrowerEmploymentType"}, "SELF_EMPLOYED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Total Annual Deductions",
                                    "fieldName": "numberVariable3",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                
                            ],
                            validityEmitter: new Subject<void>(),
                            formValueEmitter: new Subject<void>()
                        }
                    }
                ],
                "CONTACT_BRANCH": [{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "validationJson": {"content": {"cat": ["Dear, ", {"or": [{"var": "$scope.loanDetails.loanDetails.borrowerDisplayName"}, "Applicant"]}]}},
                    "className": ' mb-0 mt-5 d-flex align-items-center',
                    "sectionContent": {
                        "titleData": `Dear,`,
                        "isShow": true,
                        "endContent": [{
                            "componentType": 'ICON',
                            "className": 'ml-10',
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": '/assets/icons/sad.png'
                            }
                        }]
                    }
                }, {
                    "componentType": 'PARAGRAPH',
                    "className": "text-info mt-3 f-17",
                    "validateSection": false,
                    "sectionContent": {
                        "isShow": true,
                        "paragraphData": `We have received your Home Loan application and
              look forward to seeing you at the bank soon to complete the process. Please visit nearest BOI bank branch for further assistance`
                    }
                }, {
                    "componentType": 'PARAGRAPH',
                    "className": "form-label-lg mt-4",
                    "validationJson": {
                        "content": {"cat": ["Your Lead Reference ID # ", {"or": [{"var": "$scope.loanDetails.loanDetails.crmLeadId"}, {"var": "$scope.loanDetails.loanDetails.loanId"}]}]},
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
                }],
                "PRODUCT_ERROR": [{
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
                }, {
                    "componentType": 'PARAGRAPH',
                    "className": "text-info mt-3 f-17",
                    "validateSection": false,
                    "sectionContent": {
                        "isShow": true,
                        "paragraphData": "Sorry! We are unable to process your application. We apologize for the Inconvenience.Kindly resume your journey again OR visit your BOI branch for further assistance."
                    }
                }, {
                    "componentType": 'PARAGRAPH',
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
                }],
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
                "SANCTION_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "In-Principle Offer"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "f-16 clr-lt-grey col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-20 common-info",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please Customise Your Loan Details to Suit your Best Needs"
                        },
                    },
                ],
                "STATUS_CHECK": [{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "className": "common-title",
                    "sectionContent": {
                        "titleData": "Please Wait For Few Minutes we are setting up something",
                        "isShow": true,
                    }
                }, {
                    "componentType": "PARAGRAPH",
                    "validateSection": false,
                    "className": "common-info",
                    "sectionContent": {
                        "isShow": true,
                        "paragraphData": "Note: Please Dont Refresh The page, Page Will automatically Redirect"
                    }
                }],
                "LOAN_SUMMARY": [
                    {
                        "componentType":"GRID",
                        "className":"mt-20 w-100 loan-summary-wrapper",
                        "validateSection":false,
                        "sectionContent":{
                            "isShow":true,
                            "items":[
                                {
                                    "componentType":"GRID",
                                    "className":"",
                                    "wrapperClassName":"row",
                                    "rootClassName":"col-lg-6 col-sm-6 col-xs-12",
                                    "validateSection":false,
                                    "sectionContent":{
                                        "isShow":true,
                                        "items":[
                                            {
                                                "componentType": "TITLE",
                                                "validateSection": false,
                                                "className": 'mt-5 d-flex align-items-center congradulation-text mb-20 ',
                                                "validationJson": {
                                                    'content': {
                                                        "if": [
                                                            {
                                                                "==": [{"getUrlParameter": ["esignDone"]}, "true"]
                                                            },
                                                            'Congratulations, your Home Loan is Sanctioned. Please visit branch for the disbursement', {"cat": ["Congratulations, ", {"var": "$scope.borrowerDetails.borrowerDetail.fullName"}]}
                                                        ]
                                                    }
                                                },
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
                                            },
                                            {
                                                "componentType": 'HTML_CONTENT',
                                                'className': 'common-info display-flex a-i-c flex-wrap l-h-30 fs-6',
                                                "validationJson": {
                                                    "content": {
                                                        "if": [
                                                            {
                                                                "==": [{"getUrlParameter": ["esignDone"]}, "true"]
                                                            },
                                                            {
                                                                "cat": [
                                                                    "Your Loan has been sanctioned for  <div class='redirectAction ml-5'>",
                                                                    {
                                                                        "currencyFormatter": [{
                                                                            "var": "$scope.loanDetails.loanDetails.loanAmount"
                                                                        }]
                                                                    },
                                                                    " /- </div> &nbsp; Kindly visit branch for disbursement.  "
                                                                ]
                                                            },
                                                            {
                                                                "cat": [
                                                                    "Your Home Loan request has been successfully processed with an in-principle approval of  <div class='redirectAction ml-5'>",
                                                                    {
                                                                        "currencyFormatter": [{
                                                                            "var": "$scope.loanDetails.loanDetails.loanAmount"
                                                                        }]
                                                                    },
                                                                    " /- &nbsp; </div>  for a tenure of <div class='redirectAction ml-5'>",
                                                                    {
                                                                        "var":"$scope.loanDetails.loanDetails.loanTenure"
                                                                    },
                                                                    " months </div> &nbsp; Details will be shared on you registered email id."
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                "validateSection": false,
                                                "sectionContent": {
                                                    "isShow": true,
                                                    "htmlData": "Your loan has been successfully processed for an amount of <div class='redirectAction ml-5'>₹ ",
                                                }
                                            },
                                            
                                            
                                        ]
                                    }
                                },
                                
                                {
                                    "componentType": "HTML_CONTENT",
                                    "validateSection":false,
                                    "rootClassName":"col-lg-6 col-sm-6 col-xs-12 mobile-none",
                                    "sectionContent":{
                                        "isShow":true,
                                        "htmlData":`<div class="mobile-none summary-img">
                                        <div class="text-right"><img class="img-fluid"
                                                alt="img" src="assets/images/congrats-group.webp"></div>
                                    </div>`
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "componentType":"GRID",
                        "validateSection":false,
                        "sectionContent":{
                            "isShow":true,
                            "items":[
                                {
                                    "componentType":"GRID",
                                    "wrapperClassName":"row",
                                    "validateSection":false,
                                    "rootClassName":"col-lg-6 col-sm-6 col-xs-12",
                                    "sectionContent":{
                                        "isShow":true,
                                        "items":[
                                            {
                                                "componentType": 'PARAGRAPH',
                                                "className": "form-label-lg",
                                                "rootClassName":"mb-20",
                                                "validateSection": false,
                                                "sectionContent":{
                                                    "isShow":true,
                                                    "paragraphData":"Please visit your home branch to complete the further process."
                                                }
                                                
                                            },
                                            {
                                                "componentType": 'PARAGRAPH',
                                                "className": "form-label-lg ",
                                                "rootClassName":"mb-20",
                                                "validateSection": false,
                                                "validationJson": {
                                                    "content": {
                                                        "cat": [
                                                            "Your Application Reference Id # ",
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
                                                    "paragraphData": "Your Application Id #"
                                                }
                                            },
                                            // {
                                            //     "componentType": "PARAGRAPH",
                                            //     "className": "form-label-lg ",
                                            //     "validationJson": {
                                            //         "showSection": {
                                            //             "if": [
                                            //                 {
                                            //                     "and": [{
                                            //                         "==": [{"getUrlParameter": ["esignDone"]}, "true"]
                                            //                     }, {
                                            //                         "!=": [{"getObjectKeyValue": [{"getArrayIndexValue": [{"var": "$scope.bankDetails.bankDetails"}, 0]}, 'accountNumber']}, null]
                                            //                     }]
                                            //                 }
                                            //                 ,
                                            //                 true, false
                                            //             ]
                                            //         },
                                            //         "content": {
                                            //             "cat": ["Your Loan Account Number is ", {"getObjectKeyValue": [{"getArrayIndexValue": [{"var": "$scope.bankDetails.bankDetails"}, 0]}, 'accountNumber']}]
                                            //         }
                                            //     },
                                            //     "sectionContent": {
                                            //         "isShow": false,
                                            //         "paragraphData": null
                                            //     }
                                            // },
                                            {
                                                "componentType": "HTML_CONTENT",
                                                "rootClassName":"mb-20",
                                                "sectionContent": {
                                                    "isShow": true,
                                                    "htmlData": `<div class="summary-status mt-3" >
                                          <img src="../../../assets/icons/tick.png" alt="" class="me-2"> Account Information is sent to your Email address and Mobile Number
                                      </div>`
                                                }
                                            },
                                            {
                                                "componentType":"GRID",
                                                "rootClassName":"mb-20",
                                                "className":"display-flex gap-50 flex-wrap mob-gap-10",
                                                "validateSection":false,
                                                "sectionContent":{
                                                    "isShow":true,
                                                    "items":[
                                                        // {
                                                        //     "componentType":"BUTTON",
                                                        //     "className":"",
                                                        //     "wrapperClassName":"row",
                                                        //     "rootClassName":"col-lg-6 col-sm-6 col-xs-12",
                                                        //     "validateSection":false,
                                                        //     "sectionContent":{
                                                        //         "isShow":true,
                                                        //         "label": "eSigned Application Form",
                                                        //         "actionId": "APPLICATION_DOWNLOAD",
                                                        //         "className": "link-btn-with-icon",
                                                        //         "prefixIcon": {
                                                        //             "className": "material-symbols-outlined ",
                                                        //             "iconName": "download"
                                                        //         }
                                                        //     }
                                                        // },
                                                        {
                                                            "componentType":"BUTTON",
                                                            "className":"",
                                                            "validateSection":false,
                                                            "rootClassName":"col-lg-6 col-sm-6 col-xs-12",
                                                            "sectionContent":{
                                                                "isShow":true,
                                                                "label": "In-principal Sanction letter",
                                                                "actionId": "INPRINCIPAL_DOWNLOAD",
                                                                "className": "link-btn-with-icon",
                                                                "prefixIcon": {
                                                                    "className": "material-symbols-outlined",
                                                                    "iconName": "download"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "componentType": "TITLE",
                                                "className": "f-16 mt-15",
                                                "sectionContent": {
                                                    "isShow": true,
                                                    "titleData": "Your Branch Details"
                                                },
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
                                        ]
                                    }
                                },
                                {
                                    "componentType":"GRID",
                                    "validateSection":false,
                                    "rootClassName":"col-lg-6 col-sm-6 col-xs-12",
                                    "sectionContent":{
                                        "isShow":true,
                                        "items":[
                                            {
                                                "componentType": "TITLE",
                                                "validateSection": false,
                                                "className": " mb-20 mt-5 d-flex align-items-center",
                                                "groupName": "rating",
                                                "sectionContent": {
                                                  "titleData": "Rate Us!",
                                                  "isShow": true
                                                }
                                              },
                                              {
                                                "componentType": "PARAGRAPH",
                                                "className": "text-info",
                                                "groupName": "rating",
                                                "validateSection": false,
                                                "sectionContent": {
                                                  "isShow": true,
                                                  "paragraphData": "Please help us improving our services by providing your valuable feedback"
                                                }
                                              },
                                              {
                                                "componentType": "FORM",
                                                "className": "mb-3 w-100 mt-25",
                                                "validateSection": false,
                                                "groupName": "rating",
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
                                              },
                                              {
                                                "componentType": "GRID",
                                                "validateSection": false,
                                                "className": "grid-parent-keyfact-action-shishu",
                                                "groupName": "rating",
                                                "sectionContent": {
                                                  "isShow": true,
                                                  "items": [
                                                    {
                                                      "componentType": "BUTTON",
                                                      "validateSection": false,
                                                      "rootClassName":"w-auto",
                                                      "groupName": "rating",
                                                      "wrapperClassName":"row display-flex",
                                                      "className": "mb-20",
                                                      "sectionContent": {
                                                        "actionId": "RATING_SUBMIT",
                                                        "label": "Submit",
                                                        "className": "btn-orange",
                                                        "isShow": true,
                                                        "disabled": false
                                                      }
                                                    },
                                                    {
                                                      "componentType": "BUTTON",
                                                      "validateSection": false,
                                                      "parentclassName": "key-download-fact-button",
                                                      "rootClassName": "w-auto key-download-fact-button",
                                                      "groupName": "rating",
                                                      "className": "mb-20",
                                                      "sectionContent": {
                                                        "actionId": "RATING_CANCEL",
                                                        "label": "Cancel",
                                                        "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                                        "isShow": true,
                                                        "disabled": false
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": " mb-20 mt-5 d-flex align-items-center h1",
                        "sectionContent":{
                            "isShow":true,
                            "titleData":"Know More about credit cards"
                        }
                    },
                    {
                        "componentType":"GRID",
                        "validateSection":false,
                        "rootClassName":"display-flex",
                        "sectionContent":{
                            "isShow":true,
                            "items":[
                                {
                                "componentType":"HTML_CONTENT",
                                "validateSection":false,
                                "wrapperClassName":"display-flex flex-wrap gap-45",
                                "rootClassName":"flex-grow",
                                "className":"",
                                "sectionContent":{
                                    "isShow":true,
                                    "htmlData":`<img src='assets/images/final_cred.webp' alt='credit-card'/>`
                                }
                            },
                            {
                                "componentType":"GRID",
                                "validateSection":false,
                                "wrapperClassName":"display-flex",
                                "className":"display-contents credit-card-content-wrapper",
                                "rootClassName":"flex-grow display-flex flex-basis-65",
                                "sectionContent":{
                                    "isShow":true,
                                    "items":[
                                        {
                                            "componentType":"PARAGRAPH",
                                            "validateSection":false,
                                            "className":"common-info",
                                            "wrapperClassName":"d-flex flex-col j-c-sb",
                                            "rootClassName":"mb-20",
                                            "sectionContent":{
                                             "isShow":true,
                                             "paragraphData":"Experience Financial Freedom like never before, with rewards, perks and benefits tailored just for you. Apply now to seize this opportunity and embark on a journey of financial empowerment. Don't miss out this chance to make every purchase count. Your dreams await, apply today"
                                            } 
                                         },
                                         {
                                            "componentType": "GRID",
                                            "validateSection": false,
                                            "className": "grid-parent-keyfact-action-shishu",
                                            "wrapperClassName":"display-flex gap-20",
                                            "rootClassName":"",
                                            "groupName": "rating",
                                            "sectionContent": {
                                              "isShow": true,
                                              "items": [
                                                {
                                                  "componentType": "BUTTON",
                                                  "validateSection": false,
                                                  "className": "mb-20",
                                                  "wrapperClassName":"display-flex gap-20",
                                                  "sectionContent": {
                                                    "actionId": "APPLY_CREDIT_CARD",
                                                    "label": "Apply Now",
                                                    "className": "btn-orange",
                                                    "isShow": true,
                                                    "disabled": false
                                                  }
                                                },
                                                {
                                                  "componentType": "BUTTON",
                                                  "validateSection": false,
                                                  "parentclassName": "key-download-fact-button",
                                                  "rootClassName": "key-download-fact-button",
                                                  "className": "mb-20",
                                                  "sectionContent": {
                                                    "actionId": "TRACK_CREDIT_CARD",
                                                    "label": "Track Status",
                                                    "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                                    "isShow": true,
                                                    "disabled": false
                                                  }
                                                }
                                              ]
                                            }
                                          }
                                    ]
                                }
                            }
                        ]
                        }
                    },
                    
                    
                    
                    // {
                    //     "componentType": "BUTTON",
                    //     "validationJson": {
                    //         "showSection": {
                    //             "if": [
                    //                 {
                    //                     "and": [
                    //                         {
                    //                             "==": [{"var": "$scope.fetchEligibilityData.output.plEligOutput.stpFlag"}, 'STP']
                    //                         },
                    //                         {
                    //                             "==": [{"var": "journey.metaData.capturedData.esignStatus.data.signAffixed"}, null]
                    //                         }, {
                    //                             "==": [{"var": "$scope.loanDetails.loanDetails.loanApplicationTextVariable54"}, "false"]
                    //                         }]
                    //                 }
                    //                 ,
                    //                 true, false
                    //             ]
                    //         }
                    //     },
                    //     "sectionContent": {
                    //         "isShow": true,
                    //         "label": "Continue to E-sign",
                    //         "actionId": "ESIGN_PROCEED",
                    //         "className": "btn-orange",
                    //     }
                    // },
                    
                ],
                "COAPPLICANT_DETAILS":[{
                    "componentType": "TITLE",
                    "validateSection": false,
                    "validationJson": null,
                    "sectionContent": {
                        "titleData": "Manage Applicants",
                        "isShow": true
                    }
                },
                {
                    "componentType": "PARAGRAPH",
                    "mandatory": false,
                    "validateSection": false,
                    "className": "text-info mb-20",
                    "sectionContent": {
                        "isShow": true,
                        "paragraphData": "Adding co-applicants may enhance your loan eligibility and have additional tax benefits"
                    }
                },
                {
                    "componentType": "TABLE",
                    "validateSection": false,
                    "className": "mb-20 coapplicant-details-table",
                    "sectionContent": {
                      "isShow": true,
                      "config": {
                        "headers": [
                          {
                            "fieldLabel": "Name",
                            "fieldName": "fullName"
                          },
                          {
                            "fieldLabel": "PAN",
                            "fieldName": "identityNumberTwo"
                          },
                          {
                            "fieldLabel": "Aadhaar",
                            "fieldName": "identityNumberOne"
                          },
                          {
                            "fieldLabel": "Consider for Eligibilty",
                            "fieldName": "isEligible"
                          },
                          {
                            "fieldLabel": "Type",
                            "fieldName": "type"
                          }
                        ],
                        "data": [
                        ],
                        "showRecordEachRecordLevelActions":true,
                        "showRecordActions": false,
                        "recordActions":[
                          {
                            "actionCode": "DELETE",
                            //"icon": "../../icons/edit.png",
                            "buttonLabel":"DELETE",
                            "className": "clr-red",
                            "isDisplay": true
                          }
                        ]
                      }
                    }
                },
                {
                    "componentType": "FORM",
                    "validateSection": true,
                    "className":"mb-20",
                    "validationJson": {
                        "showSection":{
                          "if":[{"<":[{"Arraylength":[{"var":"$scope.fetchCoApplicant.coApplicantList"}]},3]}]
                        }
                      },
                    "sectionContent": {
                        "options": {
                            "mapSupplyData": true,
                            "autoVerifyMappedFields": true,
                            "mapAndDisable": true,
                            "columnSize": 3,
                        },
                        "isShow": true,
                        "fields": [
                            {
                                "fieldDataType": "BOOLEAN",
                                "isMandatory": false,
                                "fieldLabel": "Add Co-Applicants",
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
                                "groupName": "",
                                "groupIndex": 1,
                                "fieldName": "addcoapplicant",
                                "labelInfo": null,
                                "showLabel": false,
                                "showField": true
                            },
                        ]
                    }
                },
                {
                  "componentType": "HTML_CONTENT",
                  "validateSection": false,
                  "rootClassName": "col-lg-6 col-sm-6 col-xs-12",
                  "sectionContent": {
                    "isShow": true,
                    "htmlData": `<div class='display-flex gap-20'>
                    <span class="material-symbols-outlined">
                    info
                    </span>
                    <span class='common-info'>Some Information of Coapplicant is Further Required for Processing of the application . Please click "Complete" to Proceed</span>
                    </div>`
                  }
                },
                {
                    "componentType": "BUTTON",
                    "validateSection": false,
                    "parentclassName": "key-download-fact-button",
                    "rootClassName": "key-download-fact-button",
                    "className": "mt-30",
                    "sectionContent": {
                      "label": "Continue",
                      "actionId": "COAPPLICANT_SUBMIT",
                      "className": "btn-orange",
                      "isShow": true
                    }
                  }
            ],
                "COAPPLICANT_MORE_INFO":[
                    {
                        "componentType": "TITLE",
                        "classname": "mb-10",
                        "validateSection": false,
                        "sectionContent": {
                            "titleData": "Co-Applicant Details",
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
                                'columnSize': 2,
                                'mapSupplyData': true,
                                'mapAndDisable': true,
                                'autoVerifyMappedFields': true
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
                                    "placeholderText": "Enter Aadhar Number",
                                    "fieldName": "identityNumberOne",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "Masking": true,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verificationSuccessMessage": "KYC Aadhaar Verification Successfull!!",
                                    "verificationFieldName": "aadharOtp",
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
                                    "placeholderText": "Enter Aadhar OTP",
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
                                        "requestFor": "CO_APPLICANT",
                                        "extraParams": {
                                            "isPhysicallyVerified": false
                                        }
                                    }
                                }
                            ],
                            
                        }
                    }, {
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
                                        "submitConsentCodes": ['AADHAR_CONSENT_HOMELOAN'],
                                        label: " Click here to agree",
                                        isMultiLabel: false,
                                        "completed": null,
                                        "endLinks": [
                                            {
                                                "label": 'Aadhaar consent.',
                                                "height": '70%',
                                                "width": '70%',
                                                "linkType": 'POPUP',
                                                "consentCode": "AADHAR_CONSENT_HOMELOAN",
                                                "popupContent": [],
                                            }
                                        ]
                                    },
                                ]
                            },
                            "isShow": true,
                            "showField": true,
                        },
                    },
                ],
                "COAPPLICANT_PERSONAL_DETAILS":[
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": null,
                        "sectionContent": {
                            "titleData": "Co-Applicant Details",
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
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "mapSupplyData": true,
                                "autoVerifyMappedFields": true,
                                "mapAndDisable": true,
                                "columnSize": 3,
                                sendOptionKeyForDropDowns: true,
                                externalFeedDataforValidationJson: null
                            },
                            "isShow": true,
                            "fields": [{
                                "fieldDataType": "TEXT",
                                "isMandatory": true,
                                "fieldLabel": "PAN",
                                "fieldAccessModifier": "EDITABLE",
                                "minLength": null,
                                "maxLength": 100,
                                "error": null,
                                "value": null,
                                "validationJson": null,
                                "rulesFor": null,
                                "dataMasking":true,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "placeholderText": "Enter PAN Number",
                                "fieldName": "identityNumberTwo",
                                "labelInfo": null,
                                "showLabel": true,
                                "groupName": "",
                                "groupIndex": 1,
                                "showField": true,
                                "verificationType":"PAN_V2"
                            },{
                                "fieldDataType": "TEXT",
                                "isMandatory": true,
                                "fieldLabel": "Aadhar Number",
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
                                "dataMasking":true,
                                "columnNo": null,
                                "placeholderText": "Enter Aadhar Number",
                                "fieldName": "identityNumberOne",
                                "labelInfo": null,
                                "showLabel": true,
                                "groupName": "",
                                "groupIndex": 1,
                                "showField": true,
                                "verificationType":"AADHAR"
                            },
                            {
                                "fieldDataType": "NUMBER",
                                "verificationType":"MOBILE",
                                "isVerified":false,
                                "isMandatory": true,
                                "fieldLabel": "Mobile Number",
                                "fieldAccessModifier": "EDITABLE",
                                "minLength": 0,
                                "maxLength": 9999999999,
                                "regex": "^[1-9][0-9]{9}$",
                                "countryCode": "+91",
                                "error": null,
                                "value": null,
                                "validationJson": null,
                                "rulesFor": null,
                                "dataMasking":true,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": "",
                                "groupIndex": 1,
                                "placeholderText": "Enter Mobile Number",
                                "fieldName": "mobileNumber",
                                "verificationFieldName": "mobileOtp",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                              },
                              {
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
                                "regex": {},
                                "regexErrorMessage": "Invalid Mobile id",
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": "",
                                "groupIndex": 1,
                                "placeholderText": "Enter Mobile OTP",
                                "fieldName": "mobileOtp",
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
                                    "requestFor":"CO_APPLICANT",
                                    "generateOtp": true,
                                    "className": "w-100"
                                }
                            }
                        ]
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": null,
                        "sectionContent": {
                            "titleData": "Personal Details",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
                        "validateSection": false,
                        "sectionContent": {
                            "paragraphData": "Please Review your personal Details",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "mapSupplyData": true,
                                "autoVerifyMappedFields": true,
                                "mapAndDisable": true,
                                "columnSize": 3,
                                sendOptionKeyForDropDowns: true,
                                externalFeedDataforValidationJson: null
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
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
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter First Name",
                                    "fieldName": "firstName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true,
                                    "prefixfieldAccessModifier": "EDITABLE",
                                    "prefixCommonProperty": "TITLE",
                                    "includePrefixtoFormValue": true,
                                    "prefixfieldName": "title",
                                    "prefixType": "DROPDOWN",
                                    "prefix": null,
                                    "showprefix": true,
                                    "prefixplaceholderText": "Title"
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
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Middle Name",
                                    "fieldName": "middleName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                  {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "Last Name",
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
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Last Name",
                                    "fieldName": "lastName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                  {
                                    "fieldDataType": "DATE",
                                    "isMandatory": false,
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
                                    "groupName": "",
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
                                    "fieldLabel": "Father or husband Name",
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
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Father or Husband Name",
                                    "fieldName": "fatherName",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                                {
                                    "fieldDataType": "TEXT",
                                    "isMandatory": true,
                                    "fieldLabel": "Email Id",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 100,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "dataMasking":true,
                                    "columnNo": null,
                                    "placeholderText": "Enter Valid Email ID",
                                    "fieldName": "emailId",
                                    "labelInfo": "Enter Borrower Email Id for further Communication",
                                    "showLabel": true,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verificationType": "EMAIL",
                                    "verificationFieldName": "emailOtp",
                                   // "journeyEventCode": "EMAIL_PASS",
                                    "verifyDisable": false
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
                                    "regex": {},
                                    "regexErrorMessage": "Invalid Email id",
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Email OTP",
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
                                        "requestFor":"CO_APPLICANT"
                                    }
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "RELATIONSHIP_STATUS",
                                    "fieldLabel": "Relationship",
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
                                    "groupName": "",
                                    "groupIndex": 1,
                                    "placeholderText": "Relationship",
                                    "fieldName": "mobileNumber",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                  },
                               
                                
                                
                                {
                                    "fieldDataType": "BOOLEAN",
                                    "isMandatory": false,
                                    "fieldLabel": "Consider Co-Applicant towards eligiblity calculation",
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
                                    "groupName": "",
                                    "groupIndex": 2,
                                    "placeholderText": null,
                                    "fieldName": "isCoapplicantassesment",
                                    "labelInfo": null,
                                    "showLabel": false,
                                    "showField": true
                                  },
                                
                            ]
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "validationJson": null,
                        "sectionContent": {
                            "titleData": "Permanent Address",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
                        "validateSection": false,
                        "sectionContent": {
                            "paragraphData": "Address as mentioned in your aadhar card",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "FORM",
                        "validateSection": true,
                        "sectionContent": {
                            "options": {
                                "mapSupplyData": true,
                                "autoVerifyMappedFields": true,
                                "mapAndDisable": true,
                                "columnSize": 3,
                                sendOptionKeyForDropDowns: true,
                                externalFeedDataforValidationJson: null
                            },
                            "isShow": true,
                            "fields": [
                                {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            "fieldDataType": "SECTION",
                                            "fieldLabel": "Address",
                                            "fieldName": "permanentAddress",
                                            "groupName": "",
                                            "groupIndex":0,
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
                                            "sortIndex": 0,
                                            "validationJson": null,
                                            "value": null,
                                            "visibleInAdminSection": true,
                                            "visibleInBorrowerSection": true,
                                            "visibleInDsaSection": true,
                                            "placeholderText": null,
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "columnNo": 2,
                                            "dependentField": null,
                                            'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
                                            "fieldDataType": "DROPDOWN",
                                            "fieldLabel": "Address Type",
                                            "fieldName": "ownershipType",
                                            "groupName": "",
                                            "groupIndex":1,
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
                                            "placeholderText": 'Address Type',
                                            "visibleInInvestorSection": false,
                                            "showLabel": true
                                        },
                                        {
                                            "fieldDataType": "DATE",
                                            "isMandatory": true,
                                            "fieldLabel": "Resident Since",
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
                                            "groupName": 'ProductDeclaration',
                                            "groupIndex": 1,
                                            "placeholderText": "Enter Resident Since",
                                            "fieldName": "livingSince",
                                            "labelInfo": null,
                                            "showLabel": true,
                                            "showField": true
                                        },
                                    ],
                              
                        }
                    }
                ],
                "COAPPLICANT_EMPLOYMENT_DETAILS":[
                    {
                        "componentType": "TITLE",
                        "mandatory": false,
                        "validateSection": false,
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Co applicant Employment Details"
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
                                "mapSupplyData": true,
                                "sendOptionKeyForDropDowns": true,
                                "columnSize": 3
                            },
                            "isShow": true,
                            "fields": [
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "CO_APPLICANT_EMPLOYMENT_TYPE",
                                    "fieldLabel": "Employment Type",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": [
                                        "borrowerCoApplicantEmploymentDetailNumberVariable5","borrowerCoApplicantSelfEmploymentDetailNumberVariable1",
                                        "coApplicantPensionerDetailNumberVariable5","coApplicantPensionerDetailNumberVariable9",
                                        "textVariable6", "coApplicantEmploymentTextVariable6", "coApplicantEmploymentTextVariable2", "emailId", "borrowerEmploymentHistoryTextVariable4", "companyEmail"
                                        , "employedSince", "textVariable35", "textVariable36", "textVariable5", "textVariable3", "dateVariable2", "dateVariable1", "textVariable11", "emiPaid", "borrowerCoApplicantEmploymentDetailNumberVariable10", "borrowerCoApplicantSelfEmploymentTextVariable12", "companyName", "buisnessEmail"
                                    ],
                                    "regex": null,
                                    "options": [],
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Employment Type",
                                    "fieldName": "coApplicantEmploymentType",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "fieldLabel": "Organisation Type",
                                    "commonpropertyType": "COAPPLICANT_EMPLOYMENT_VARIABLE6",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SALARIED"]
                                            }]
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
                                    "fieldName": "coApplicantEmploymentTextVariable6",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "COAPPLICANT_EMPLOYMENT_VARIABLE2",
                                    "fieldLabel": "Profession",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SALARIED"]
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
                                    "placeholderText": "Profession",
                                    "fieldName": "coApplicantEmploymentTextVariable2",
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
                                    "dataMasking":true,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SALARIED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                                    "countryCode": "+91",
                                    "regexErrorMessage": null,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "placeholderText": "Enter your Email ID",
                                    "fieldName": "companyEmail",
                                    "showLabel": true,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "verificationType": "EMAIL",
                                    "verificationFieldName": "emailOtp",
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
                                    "placeholderText": "Enter Email OTP",
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
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SALARIED"]
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
                                    "placeholderText": "Enter Employer Name",
                                    "fieldName": "companyName",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "autoSuggest": true,
                                    "autosuggestCode": "employerSearch",
                                    "autoSuggestSelectDisable": false,
                                    "journeyEventCode":"CO_APPLICANT_EMPLOYMENT_DETAILS_CHECK"
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Gross Monthly Income",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "coApplicantEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "coApplicantEmploymentType"}, "SALARIED"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Gross Monthly Income",
                                    "fieldName": "borrowerCoApplicantEmploymentDetailNumberVariable5",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
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
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "coApplicantEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "coApplicantEmploymentType"}, "SALARIED"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Total Monthly Deductions",
                                    "fieldName": "borrowerCoApplicantEmploymentDetailNumberVariable10",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Gross Monthly Income",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "coApplicantEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "coApplicantEmploymentType"}, "PENSIONER"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Gross Monthly Income",
                                    "fieldName": "coApplicantPensionerDetailNumberVariable5",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
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
                                            "if": [{
                                                "and": [{
                                                    "!=": [{"var": "coApplicantEmploymentType"}, null]
                                                }, {
                                                    "==": [{"var": "coApplicantEmploymentType"}, "PENSIONER"]
                                                }]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "placeholderText": "Enter Total Monthly Deductions",
                                    "fieldName": "coApplicantPensionerDetailNumberVariable9",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": "BORROWER_COAPPLICANT_SELF_EMPLOYMENT_TEXT_VARIABLE11",
                                    "fieldLabel": "Professionals and Self employed persons",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": null,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "udyamHyphen":true,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "placeholderText": "UDYAM-XX-XX-XXXXXXX",
                                    "fieldName": "textVariable3",
                                    "showLabel": true,
                                    "labelInfo": null,
                                    "groupName": null,
                                    "groupIndex": 1,
                                    "showField": true,
                                    "upperCase": true,
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
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "placeholderText": "Enter Business Name",
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
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
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
                                    "placeholderText": "Enter Business Started On",
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
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
                                            }]
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
                                    "fieldLabel": "Total Business Income",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 2,
                                    "placeholderText": "Enter Total Business Income",
                                    "fieldName": "borrowerCoApplicantSelfEmploymentDetailNumberVariable1",
                                    "labelInfo": null,
                                    "showLabel": true,
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
                                            "if": [{
                                                "==": [{"var": "coApplicantEmploymentType"}, "SELF_EMPLOYED"]
                                            }]
                                        }
                                    },
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "groupName": null,
                                    "groupIndex": 2,
                                    "placeholderText": "Enter Total Annual Deductions",
                                    "fieldName": "borrowerCoApplicantSelfEmploymentTextVariable12",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                
                            ],
                            
                        }
                    }
                ],
                "COAPPLICANT_DOCUMENT_UPLOAD":[
                    {
                      "componentType": "TITLE",
                      "className": "mb-10",
                      "mandatory": false,
                      "validateSection": false,
                      "sectionContent": {
                        "isShow": true,
                        "titleData": "Co-applicant Supporting Documents"
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
            }
        },
    };
    pageMetaConfig = {
        'HL': {
            'individual': {
                'MOBILE_VERIFY': {
                    'showLeftContent': true,
                    'showStepper': true,
                    'showSubStepper': true,
                    'consentIndex': 5,
                    'formIndex': 3,
                    'mobileFieldIndex': 2,
                    'otpIndex': 6,
                    'fieldLabel': 'Continue',
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
                            "validationJson": {"if": [{"==": [{"checkResumeJourney": []}, false]}, 'EXECUTE', 'NEXT']},
                            "submitflow": "applyLoan",
                            "dataFeedCloud": ['product', 'formValue'],
                            "saveResponseToProduct": true,
                            "apiError": "PRODUCT_ERROR",
                            "params": ['access_token', 'borrowerUuid', 'loanPurposeUuid', ['loanAmount', 'STATIC', 10000], ['applicationSource', 'STATIC', 'WEB_JOURNEY']],
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
                               ["borrowerProfileTextVariable17","issourcingAgent"],
                                 ["borrowerProfileTextVariable18","bsaCode"],
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
                             "apiError": "PRODUCT_ERROR"
                         },

                        {
                            "validationJson": {"if": [{"==": [{"checkResumeJourney": []}, false]}, 'EXECUTE', 'NEXT']},
                            "submitflow": "updateLoanApplicationTrackingStatus",
                            "dataFeedCloud": [
                                "product",
                                "formValue"
                            ],
                            "validateResponse":"PROCEED",
                            "apiError":"PRODUCT_ERROR",
                            "params":["access_token","loanUuid",["completedPage","STATIC","BORROWER_BASIC_DETAIL"],["nextPage","STATIC","BORROWER_PERSONAL_DETAIL"]]
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
                            "validationJson": {"if": [{"==": [{"checkResumeJourney": []}, false]}, 'EXECUTE', 'NEXT']},
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
                                    "Mobile OTP Verification Pass"
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
                            "validationJson": {"if": [{"==": [{"checkResumeJourney": []}, false]}, 'EXECUTE', 'NEXT']},
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
                'ADDITIONAL_INFORMATION': {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Proceed',
                    'formSectionIndex': 4,
                    'prepopulationRemaps': {
                        "firstName": "borrowerDetails.borrowerDetail.firstName",
                        "lastName": "borrowerDetails.borrowerDetail.lastName",
                        "dateOfBirth": "borrowerDetails.borrowerDetail.dateOfBirth",
                        "middleName": "borrowerDetails.borrowerDetail.middleName",
                        "gender": "borrowerDetails.borrowerDetail.gender",
                        "personalAddress": "[APPEND]borrowerDetails.borrowerDetail.personalAddress.line1+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.line2+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.line3+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.state+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.district+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.country+[STATIC],+borrowerDetails.borrowerDetail.personalAddress.zipCode"
                    },
                    "formSubmitFlow": [{
                        'submitflow': 'profileUpdate',
                        'params': ['access_token', 'loanUuid', 'firstName', 'middleName', 'lastName', 'dateOfBirth', 'alternativeUsername', 'maritalStatus', 'educationType', 'gender',
                            ['addressOneLine1', 'line1'],
                            ['addressOneLine2', 'line2'],
                            ['addressOneLine3', 'line3'],
                            ['addressOneSubDistrict', 'subDistrict'],
                            ['addressOneZipCode', 'zipCode'],
                            ['addressOneCity', 'city'],
                            ['addressOneState', 'state'],
                            ['addressOnetypeOfAddress', 'typeOfAddress'],
                            ['addressOneLivingSince', 'livingSince'],
                            ['personalAddressCountry', 'capturedData.existingaadharData.mappingFields.personalAddress.country'],
                            ['personalAddressDistrict', 'capturedData.existingaadharData.mappingFields.personalAddress.district'],
                            ['personalAddressLine1', 'capturedData.existingaadharData.mappingFields.personalAddress.line1'],
                            ['personalAddressLine2', 'capturedData.existingaadharData.mappingFields.personalAddress.line2'],
                            ['personalAddressLine3', 'capturedData.existingaadharData.mappingFields.personalAddress.line3'],
                            ['personalAddressState', 'capturedData.existingaadharData.mappingFields.personalAddress.state'],
                            ['personalAddressZipCode', 'capturedData.existingaadharData.mappingFields.personalAddress.zipCode']
                        ],
                        "validationJson": {"if": [{"var": "differenceCommunicationAddress"}, 'EXECUTE', 'NEXT']},
                        'dataFeedCloud': ['product', 'formValue', 'capturedData'],
                        "apiError": "PRODUCT_ERROR",
                        'validateResponse': "BRANCH_DETAILS"
                    },
                        {
                            'submitflow': 'profileUpdate',
                            'params': ['access_token', 'loanUuid', 'firstName', 'middleName', 'lastName', 'dateOfBirth', 'alternativeUsername', 'maritalStatus', 'educationType', 'gender',
                                ['addressOneLine1', 'capturedData.existingaadharData.mappingFields.personalAddress.line1'],
                                ['addressOneLine2', 'capturedData.existingaadharData.mappingFields.personalAddress.line2'],
                                ['addressOneLine3', 'capturedData.existingaadharData.mappingFields.personalAddress.line3'],
                                ['addressOneSubDistrict', 'capturedData.existingaadharData.mappingFields.personalAddress.subDistrict'],
                                ['addressOneZipCode', 'capturedData.existingaadharData.mappingFields.personalAddress.zipCode'],
                                ['addressOneCity', 'capturedData.existingaadharData.mappingFields.personalAddress.district'],
                                ['addressOneState', 'capturedData.existingaadharData.mappingFields.personalAddress.state'],
                                ['addressOnetypeOfAddress', 'capturedData.existingaadharData.mappingFields.personalAddress.typeOfAddress'],
                                ['addressOneLivingSince', 'capturedData.existingaadharData.mappingFields.personalAddress.livingSince'],
                                ['personalAddressCountry', 'capturedData.existingaadharData.mappingFields.personalAddress.country'],
                                ['personalAddressDistrict', 'capturedData.existingaadharData.mappingFields.personalAddress.district'],
                                ['personalAddressLine1', 'capturedData.existingaadharData.mappingFields.personalAddress.line1'],
                                ['personalAddressLine2', 'capturedData.existingaadharData.mappingFields.personalAddress.line2'],
                                ['personalAddressLine3', 'capturedData.existingaadharData.mappingFields.personalAddress.line3'],
                                ['personalAddressState', 'capturedData.existingaadharData.mappingFields.personalAddress.state'],
                                ['personalAddressZipCode', 'capturedData.existingaadharData.mappingFields.personalAddress.zipCode']],
                            "validationJson": {"if": [{"var": "differenceCommunicationAddress"}, 'NEXT', 'EXECUTE']},
                            'dataFeedCloud': ['product', 'formValue', 'capturedData'],
                            "apiError": "PRODUCT_ERROR",
                            'validateResponse': "BRANCH_DETAILS"
                        }
                    ],
                    "dataScopeFetchFlow": [{
                        "validate": {"if": [{"==": [{"checkNull": [{"var": "resumeJourney"}]}, false]}, 'NEXT', 'EXECUTE']},
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid']
                    }]
                },
                'CONTACT_BRANCH': {
                    'showLeftContent': false,
                    'showStepper': false,
                    'showSubStepper': false,
                    "errorCodes": {
                        "nameMatch": "We have received your Home Loan application and look forward to seeing you at the bank soon to complete the process!"
                    },
                    "dataScopeFetchFlow": [{
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',['microservicetoken','']]
                    }
                    ]
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
                        "params": ['access_token', 'loanUuid',[
                            "microservicetoken",
                            "oauthAccessToken"
                            ]]
                    }
                    ]
                },
                "MORE_INFO": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Proceed',
                    "prepopulationRemaps": {
                      "panholdername":"borrowerDetails.borrowerDetail.borrowerProfileTextVariable15",
                      "panholderdob": "borrowerDetails.borrowerDetail.dateOfBirth",
                        "identityNumberTwo": "borrowerDetails.borrowerDetail.identityNumberTwo",
                        "identityNumberOne": "borrowerDetails.borrowerDetail.identityNumberOne",
                    },
                    "dataScopeFetchFlow": [{
                        "fetchflow": "borrowerDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid']
                    }],
                    'formSubmitFlow': [
                        //  { not in api sheet
                        //     "validationJson":{"if":[{"==":[{"var":"appConfig.ispandedupe"},true]},"EXECUTE","NEXT"]},
                        //   "submitflow": "duplicateApplicationCheck",
                        //   "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        //   "params": ['loanUuid', [
                        //     "microservicetoken",
                        //     "oauthAccessToken"
                        //   ]],
                        //   "validateResponse": {
                        //     "if": [{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED", {
                        //       "cat": [
                        //         "PRODUCT_ERROR[PARAMS]errorCode=",
                        //         {
                        //           "var": "formSubmitResponse.message"
                        //         }
                        //       ]
                        //     }]
                        //   },
                        //   "apiError": "PRODUCT_ERROR"
                        // },
                        {
                            "submitflow": "personalProfileUpdate",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', "identityNumberOne", 
                            "identityNumberOneVerified", 
                            "identityNumberTwo", "identityNumberTwoVerified",
                            ["microservicetoken","oauthAccessToken"],
                            ["firstName","aadharData.firstName"],
                            ["lastName","aadharData.lastName"],
                            ["middleName","aadharData.middleName"],
                            ["gender","aadharData.gender"],
                            ["dateOfBirth","aadharData.dateOfBirth"],

                            ["line1","aadharData.personalAddress.line1"],

                            ["line2","aadharData.personalAddress.line2"],
                            ["line3","aadharData.personalAddress.line3"],
                            ["district","aadharData.personalAddress.district"],
                            ["city","aadharData.personalAddress.city"],
                            ["state","aadharData.personalAddress.state"],
                            ["zipCode","aadharData.personalAddress.zipCode"],
                           
                        ],
                            "validateResponse": "PROCEED",
                            "apiError": "PRODUCT_ERROR",
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
                                    "SUB_STATUS_8"
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
                            "submitflow": 'cbsDedupe',
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', "loanUuid", [{
                              "if":[{"==":[{"var":"borrowerDetails.borrowerDetail.referenceKey"},null]},"aadhaarNumber","referenceKey"]
                          },
                          "RULE_OUTPUT",
                          {
                              "if":[{"==":[{"var":"borrowerDetails.borrowerDetail.referenceKey"},null]},{"var":"borrowerDetails.borrowerDetail.identityNumberOne"},{"var":"borrowerDetails.borrowerDetail.referenceKey"}]
                          }], ['panNumber', 'MORE_INFO.identityNumberTwo'], ['microservicetoken', 'oauthAccessToken'], ["requestFor", 'STATIC', 'BORROWER'], ["applicationSource", 'STATIC', 'WEB_JOURNEY'],"finacleRequest"],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]}, "PROCEED", {"cat": ["PRODUCT_ERROR[PARAMS]errorCode=", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": {"cat": ["PRODUCT_ERROR[PARAMS]errorCode=", {"var": "formSubmitResponse.message"}]},
                            "journeyEventCodeAfterResponseSucess": "DEDUPE_CHECK"
                        },
                        {
                            "validationJson": {"if": [{"==": [{"var": "currentFormSubmitResponses.cbsDedupe.isETB"}, true]}, 'EXECUTE', 'NEXT']},
                            "submitflow": "borrowerExtraPropertyUpdate",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token',"loanUuid", ['microservicetoken', 'oauthAccessToken'],["borrowerProfileTextVariable1", "currentFormSubmitResponses.cbsDedupe.custId"], ["isExistingUser", "STATIC", true]],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, '200']}, "PROCEED", "PRODUCT_ERROR"]},
                        },
                        {
                            "validationJson": {"if": [{"==": [{"var": "currentFormSubmitResponses.cbsDedupe.isETB"}, true]}, 'EXECUTE', 'NEXT']},
                            "submitflow": "npaCheck",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', "loanUuid", ["custId", "currentFormSubmitResponses.cbsDedupe.custId"], ['microservicetoken', 'oauthAccessToken'], "finacleRequest", ["applicationSource", "STATIC", "WEB_JOURNEY"]],
                            "saveResponseToCapturedData": true,
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if": [{"==": [{"var": "code"}, '200']}, {"if": [{"and": [{"==": [{"var": "npaFlag"}, 'N']}, {"==": [{"var": "smaFlag"}, 'N']}]}, 'PROCEED', 'PRODUCT_ERROR']}, 'PRODUCT_ERROR']}
                        },
                        {
                            "validationJson": {"if": [{"==": [{"var": "currentFormSubmitResponses.cbsDedupe.isETB"}, true]}, 'EXECUTE', 'NEXT']},
                            "submitflow": "demographicDetailsFetch",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ["access_token", "loanUuid", ['requestFor', 'STATIC', 'BORROWER'], 'finacleRequest', ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['custId', 'currentFormSubmitResponses.cbsDedupe.custId'], ['microservicetoken', 'oauthAccessToken']],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, '200']}, {"if": [{"==": [{"var": "formSubmitResponse.isReKyc"}, false]}, 'PROCEED', 'PROCEED']}, {"cat": ["PRODUCT_ERROR[PARAMS]errorCode=", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": {"cat": ["PRODUCT_ERROR[PARAMS]errorCode=", {"var": "formSubmitResponse.message"}]},
                        },
                        {
                            "submitflow": "nameMatch",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', 'finacleRequest', ["applicationSource", 'STATIC', "WEB_JOURNEY"], ['microservicetoken', 'oauthAccessToken'], ['preset', 'STATIC', 'G'], ['type', 'STATIC', 'Individual'], ['allowPartialMatch', 'STATIC', true], ["name1", 'STATIC', ""], ["name2", "STATIC", ""]],
                            "validateResponse": {"if": [{"and": [{"==": [{"var": "nameMatchResult.result.result"}, true]}, {"==": [{"var": "blacklistedFlag"}, false]}]}, {"if": [{"==": [{"var": "currentFormSubmitResponses.cbsDedupe.isETB"}, true]}, 'PROCEED[JOURNEY_EVENT_CODE]NAME_MATCH', 'ADDITIONAL_INFORMATION[JOURNEY_EVENT_CODE]NAME_MATCH']}, 'CONTACT_BRANCH[PARAMS]errorCode=nameMatch']},
                            "apiError": "PRODUCT_ERROR",
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
                            "description": "Cross Validating the Aadhar and Pan Card Details",
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
                    "formSubmitFlow": [{
                        "submitflow": "personalProfileUpdate",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',
                            'borrowerEmploymentType',["microservicetoken","oauthAccessToken"]
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
                    },
                    {
                        
                        "submitflow": "updateEmploymentDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "validateResponse":{
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
                        "params": ['access_token', 'loanUuid', 'textVariable6', 'borrowerEmploymentHistoryTextVariable11', 'borrowerEmploymentHistoryTextVariable15', 'officialEmailId', 'officialEmailIdVerified', 'organizationName', 'borrowerEmploymentHistoryTextVariable24', ['borrowerEmploymentHistoryTextVariable3', 'STATIC', 'No'],["microservicetoken","oauthAccessToken"],'borrowerEmploymentHistoryNumberVariable4'],
                        "validationJson": {"if": [{"==": [{"var": "borrowerEmploymentType"}, 'SALARIED']}, 'EXECUTE', 'NEXT']},
                        "apiError": "PRODUCT_ERROR",
                    },
                        {
                
                            
                            "submitflow": "updatePensionerEmploymentDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ['loanApplicationUuid','loanUuid'], ["isValidationRequired","STATIC",false] , ['borrowerEmploymentHistoryTextVariable3', 'STATIC', 'No'],"pensionerDetailsNumberVariable5","pensionerDetailsNumberVariable9"],
                            "validateResponse":{
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
                            "validationJson": {"if": [{"==": [{"var": "borrowerEmploymentType"}, 'PENSIONER']}, 'EXECUTE', 'NEXT']},
                            "apiError": "PRODUCT_ERROR",
                        },
                        {
                            "submitflow": "updateSelfEmploymentDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ['loanApplicationUuid', 'loanUuid'], 'textVariable11', 'textVariable3', 'textVariable3Verified', 'textVariable5Verified', 'textVariable5', 'textVariable6', 'dateVariable2', 'textVariable36', 'buisnessEmail', 'numberVariable3','numberVariable12',["microservicetoken","oauthAccessToken"],],
                            "validationJson": {"if": [{"==": [{"var": "borrowerEmploymentType"}, 'SELF_EMPLOYED']}, 'EXECUTE', 'NEXT']},
                            "validateResponse":{
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
                        },
                        {
                            "submitflow":"loanUpdate",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params":['access_token','loanUuid',["loanApplicationTextVariable13","purposeofloan"],["loanApplicationTextVariable16","modeofrepayment"]],
                            "validationJson": "PROCEED",
                            "validateResponse":{
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
                        },
                        {
                            "submitflow":"propertyDetailsCreate",
                            "dataFeedCloud":['product', 'formValue', 'capturedData'],
                            "params":['access_token','loanUuid',["propertyDetailsTextVariable7","propertystatus"],["isValidationRequired","STATIC",false] ],
                            "validateResponse":{
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
                            "validationJson": "PROCEED",
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
                                    {"if": [{"==": [{"var": "borrowerEmploymentType"}, "SALARIED"]}, "SUB_STATUS_2",{"if": [{"==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]}, "SUB_STATUS_3","SUB_STATUS_2"]}]}
                                ],
                                [
                                    "subStatusChangeDescription",
                                    "RULE_OUTPUT",
                                    {"if": [{"==": [{"var": "borrowerEmploymentType"}, "SALARIED"]}, "Employment Details Salaried", {"if": [{"==": [{"var": "borrowerEmploymentType"}, "PENSIONER"]}, "Employment Details Pensioner","Employment Details Self Employed"]}]}
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
                                    "SUB_STATUS_6"
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
                                    "PROCEED",
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
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid']
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
                        ]
                      }, 
                    ],
                    "prepopulationRemaps": {
                        "borrowerEmploymentType": { "if":[{"checkResumeJourney":[]},"borrowerDetails.borrowerDetail.borrowerEmploymentType"]},
                        "organizationName": "borrowerDetails.borrowerDetail.organizationName",
                        "borrowerEmploymentHistoryTextVariable11": "borrowerDetails.borrowerDetail.borrowerEmploymentHistoryTextVariable11",
                        "borrowerEmploymentHistoryTextVariable15": "borrowerDetails.borrowerDetail.borrowerEmploymentHistoryTextVariable15",
                        "officialEmailId": "borrowerDetails.borrowerDetail.officialEmailId",
                        "borrowerEmploymentHistoryTextVariable24": "borrowerDetails.borrowerDetail.borrowerEmploymentHistoryTextVariable24",
                        "borrowerEmploymentHistoryNumberVariable4":"borrowerDetails.borrowerDetail.borrowerEmploymentHistoryNumberVariable4",
                        "purposeofloan":"loanDetails.loanDetails.loanApplicationTextVariable13",
                        "modeofrepayment":"loanDetails.loanDetails.loanApplicationTextVariable16",
                        "propertystatus":"borrowerDetails.borrowerDetail.propertyDetailVO.propertyDetailsTextVariable7",
                        "textVariable11":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable11",
                        "textVariable3":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable3",
                        "textVariable3Verified":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable3Verified",
                        "textVariable6":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.textVariable6",
                        "dateVariable2":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.dateVariable2",
                        "numberVariable12":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.numberVariable12",
                        "numberVariable3":"borrowerDetails.borrowerDetail.selfEmploymentDetailVO.numberVariable3",

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
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params": ["access_token", "loanUuid", ["newSubStatus", "STATIC", "SUB_STATUS_14"], ["subStatusChangeDescription", "STATIC", "Address Details updated"]],
                        "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, 200] }, "PROCEED", "ERROR"] },
                        "apiError": "ERROR",
                        "validationErrorMessage": "something went wrong Please Try again!!"
                    },
                    {
                        "submitflow": "updatesubStatus",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params": ["access_token", "loanUuid", ["newSubStatus", "STATIC", "SUB_STATUS_15"], ["subStatusChangeDescription", "STATIC", "ETB Personal details page submit"]],
                        "validateResponse": { "if": [{ "==": [{ "var": "formSubmitResponse.code" }, 200] }, "PROCEED", "ERROR"] },
                        "apiError": "ERROR",
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
                            "PROCEED",
                            "CONTACT_BRANCH"
                          ]
                        },
                        "apiError": "PRODUCT_ERROR"
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
                    "formSubmitFlow": [{
                        "submitflow": "assignUserHierarchyUnit",
                        "saveResponseToCapturedData": true,
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['loanUuid', 'access_token', ["userHierarchyUnitCode", "branchCode"],['microservicetoken', 'oauthAccessToken']],
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR",
                    },
                        {
                            "submitflow": "assignParkingBranch",
                            "saveResponseToCapturedData": false,
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['loanUuid', 'access_token', ["userHierarchyUnitCode", "branchCode"],["microservicetoken","oauthAccessToken"]],
                            "validateResponse": "PROCEED",
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
                                    "STATIC",
                                    "SUB_STATUS_11"
                                ],
                                [
                                    "subStatusChangeDescription",
                                    "STATIC",
                                    "Branch Selection Successfull"
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
                                "EMPLOYMENT_DETAILS",
                                "CONTACT_BRANCH"
                              ]
                            },
                            "apiError": "PRODUCT_ERROR"
                          },{
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
                        },]
                },
                "DOCUMENT_UPLOAD_V2": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Done',
                    'hideDocument':false,
                    "documentStatusCheckData": {
                        "iteration": 4,
                        "iterationDelay": 5
                    },
                    'documentList': [
                        {
                        "documentCategoryCode": "DOC17",
                        "documentFor": "MAIN_APPLICANT",
                        "mandatory": false,
                        "showDocument": {"if": [{"and":[{"or":[{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'SALARIED']},{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'SELF_EMPLOYED']},{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'PENSIONER']}]},
                        {"==":[{"var":"borrowerDetails.borrowerDetail.isExistingUser"},true]},{"!=":[{"Arraylength":[{"var":"fetchSalaryAccount.accounts"}]},0]} ]}]},
                        "multipleUploadOption": true,
                        "multiBankOption": true,
                        "showUpload": false,
                        "documentType": "BANK_STATEMENT",
                        "selectedBankData": {
                            value: null,
                            options: [{
                                name: "Auto Fetch",
                            }, {
                                name: "Statement Upload",
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
                                      "perfiosAnalysis":"generateLink",
                                      "processingType":"account",
                                      "applicationSource":"WEB_JOURNEY",
                                      "disabled": false,
                                      "underContent": "<span>Rbi Recommended</span>"
                                    }, {
                                        "icon": "cloud_upload",
                                        "name": "Share With Netbanking",
                                        "code": "NB",
                                        "disabled": false,
                                        "perfiosAnalysis": "onlineFetch",
                                        "documentType": "ONLINE_FETCH",
                                        "underContent": ""
                                    }, {
                                        "icon": "file_upload",
                                        "name": "e-PDF Statement",
                                        "code": "EDF",
                                        "perfiosAnalysis": "statementUpload",
                                        "disabled": false,
                                        "documentType": null,
                                        "underContent": null
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
                        "documentCategoryCode": "DOC17",
                        "documentFor": "MAIN_APPLICANT",
                        "mandatory": false,
                        "showDocument": {"if": [{"and":[{"or":[{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'SALARIED']},{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'SELF_EMPLOYED']},{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'PENSIONER']}]},
                           {"or":[{"==":[{"var":"borrowerDetails.borrowerDetail.isExistingUser"},false]},{"==":[{"Arraylength":[{"var":"fetchSalaryAccount.accounts"}]},0]}]} ]}]},
                        "multipleUploadOption": true,
                        "multiBankOption": false,
                        "showUpload": false,
                        "documentType": "BANK_STATEMENT",
                        "selectedBankData": {
                            value: "Statement Upload",
                            options: [ {
                                name: "Statement Upload",
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
                                      "perfiosAnalysis":"generateLink",
                                      "processingType":"account",
                                      "applicationSource":"WEB_JOURNEY",
                                      "disabled": false,
                                      "underContent": "<span>Rbi Recommended</span>"
                                    }, {
                                        "icon": "cloud_upload",
                                        "name": "Share With Netbanking",
                                        "code": "NB",
                                        "disabled": false,
                                        "perfiosAnalysis": "onlineFetch",
                                        "documentType": "ONLINE_FETCH",
                                        "underContent": ""
                                    }, {
                                        "icon": "file_upload",
                                        "name": "e-PDF Statement",
                                        "code": "EDF",
                                        "perfiosAnalysis": "statementUpload",
                                        "disabled": false,
                                        "documentType": null,
                                        "underContent": null
                                    },]
                                },
                                "label": "Please Select a option for sharing Your bank statement",
                                bankname: null
                            },
                            
                        },
                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress"
                    },
                    {
                        "documentCategoryCode": "DOC55",
                        "documentFor": "MAIN_APPLICANT",
                        "mandatory": true,
                        "showDocument": {"if": [{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'SALARIED']}]},
                        "multipleUploadOption": true,
                        "multiBankOption": true,
                        "showUpload": false,
                        "documentType": "DOCUMENT",
                        "documentUploadStatus": "IN_PROGRESS",
                        "documentUploadStatuslocalisation": "In Progress",
                        "journeyEventCode":"SALARY_DOCUMENT_UPLOAD"
                    },
                       
                        {
                            "documentCategoryCode": "ITR_SELF",
                            "documentFor": "MAIN_APPLICANT",
                            "showDocument": {"if": [{"==": [{"var": "borrowerDetails.borrowerDetail.borrowerEmploymentType"}, 'SELF_EMPLOYED']}]},
                            "multipleUploadOption": false,
                            "mandatory": true,
                            "multiBankOption": false,
                            "showUpload": false,
                            "documentType": "ITR",
                            uploadOptions: [{
                                "icon": "cloud_upload",
                                "name": "Share With Income Tax Portal",
                                "code": "NB",
                                "disabled": false,
                                "perfiosAnalysis": "onlineFetch",
                                "documentType": "ONLINE_FETCH",
                                "underContent": ""
                            }, {
                                "icon": "file_upload",
                                "name": "Upload ITR (e-PDF Doc)",
                                "code": "EDF",
                                "perfiosAnalysis": "statementUpload",
                                "disabled": false,
                                "documentType": null,
                                "underContent": null
                            }],
                            "label": "Please Select a option for sharing ITR statement",
                            bankname: null,
                            "documentUploadStatus": "IN_PROGRESS",
                            "documentUploadStatuslocalisation": "In Progress"
                        },
                    ],
                    'customData': {},
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
                          "validationJson": {
                            "if": [
                              {
                                "==": [
                                  {
                                    "var": "loanDetails.loanDetails.loanApplicationStatus"
                                  },
                                  "AWAITING_APPROVAL_L21"
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
                              "SUB_STATUS_10"
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
                              "PROCEED",
                              "ERROR"
                            ]
                          },
                          "apiError": "ERROR",
                          "validationErrorMessage": "something went wrong Please Try again!!"
                        },
                        
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
                              "PROCEED"
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
                          "validateResponse": "PROCEED",
                          "apiError": "PRODUCT_ERROR"
                        }
                      ]
                },
                "SANCTION_DETAILS": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Proceed',
                    "customData": {
                        "sanctionedAmount": null,
                        "sanctionTitle": 'Maximum Loan Pricipal Offered',
                        "EnhanceSanctionButtonlabel": "Enhance Loan Amount",
                        "continueCurrentSanction": "Return to Sanctioned Amount ",
                        "visitBank": "Submit Enhanced Loan Request",
                        "loanAmountDisp": null,
                        loanAmount: null,
                        minLoanAmount: null,
                        maxLoanAmount: null,
                        minTenure: null,
                        tenure: null,
                        MaxTenure: null,
                        emiToBePaid: null,
                        totalInterestPaid: null,
                        totalLoanPaid: null,
                        interest: null,
                        dontCalculate: true,
                        "BranchDetails": {
                            title: "Nearest Bank Branch",
                            name: 'Bank Branch',
                            address: 'Plot No 6,DoorNo 10 Mahalingapiram Main Road,chennai,tamilNadu - 60035'
                        },
                        "isshowEnhancedDetails": false,
                    },
                    'addConfig': [
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
                            "className": 'mb-3',
                            "sectionContent": {
                                "options": {
                                    'columnSize': 2,
                                    sendOptionKeyForDropDowns: true
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
                                    "groupName": '',
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
                                            "value": {
                                              "if": [
                                                {
                                                  "==": [
                                                    {
                                                      "var": "branchCode"
                                                    },
                                                    null
                                                  ]
                                                },
                                                null
                                              ]
                                            }
                                          },
                                        "dontTriggerSelf":true,
                                        "showLoaderOnEndpoints":true,
                                        "apiEndpoint":{"if":[{
                                            "and":[{"!=":[{"var":"branchCode"},null]},{"!=":[{"var":"branchCode"},""]}]
                                            },{
                                                "apiType":"MICRO_SERVICE",
                                                "parameterConfig":[['microservicetoken','oauthAccessToken'], [
                                                    "branchCode",
                                                    "branchCode"
                                                  ]],
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
                                    "placeholderText": "Enter Branch Address",
                                    "fieldName": "branchAddress",
                                    "labelInfo": null,
                                    "groupName": "",
                                    "groupIndex": 2,
                                    "showLabel": true,
                                    "rows": 3
                                },
                            ],
                                validityEmitter: new Subject<void>(),
                                formValueEmitter: new Subject<void>()
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
                        data: [{
                            fieldLabel: "Principle Amount",
                            value: null,
                            bgColor: '#0090E5'
                        }, {
                            fieldLabel: "Interest Payable",
                            value: null,
                            bgColor: '#00C5AB'
                        }],
                        chartType: "GAUGE",
                        updateChart: new Subject<void>(),
                        centerData: {
                            label: "EMI",
                            value: 4500
                        }
                    },
                    formSubmitFlow: [
                        
                        {
                            "validationJson": {"if": [{"var": "SANCTION_DETAILS.isSanctionEnhanced"}, 'NEXT', 'EXECUTE']},
                            "submitflow": "loanUpdate",
                            "params": ["access_token", "loanUuid",
                                ['loanAmount', 'SANCTION_DETAILS.loanAmount'],
                                ['loanTenure', 'SANCTION_DETAILS.tenure'],
                                ['loanApplicationNumberVariable8', 'SANCTION_DETAILS.tenure'],
                                ['interestRate', 'SANCTION_DETAILS.interest'],
                                ['loanApplicationNumberVariable20', 'SANCTION_DETAILS.interest'],
                                ['loanApplicationNumberVariable3', 'SANCTION_DETAILS.loanAmount'],
                                ['loanApplicationTextVariable54', 'SANCTION_DETAILS.isSanctionEnhanced'],
                                ['skipBreValidation', 'SANCTION_DETAILS.isSanctionEnhanced'],
                            ],
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]}, "PROCEED", {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}
                        },
                        {
                            "validationJson": {"if": [{"var": "SANCTION_DETAILS.isSanctionEnhanced"}, 'EXECUTE', 'NEXT']},
                            "submitflow": "loanUpdate",
                            "params": ["access_token", "loanUuid",
                                ['loanAmount', 'SANCTION_DETAILS.enhancedsanctionedAmount'],
                                ['loanTenure', 'SANCTION_DETAILS.enhancedtenure'],
                                ['loanApplicationTextVariable54', 'SANCTION_DETAILS.isSanctionEnhanced'],
                                ['skipBreValidation', 'SANCTION_DETAILS.isSanctionEnhanced'],
                            ],
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]}, "PROCEED", {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}
                        },
                        {
                            "submitflow": "sanctionUpdate",
                            "validationJson": {"if": [{"==": [{"var": "fetchEligibilityData.output.plEligOutput.stpFlag"}, 'STP']}, 'EXECUTE', 'NEXT']},
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ["skipBreValidation", "STATIC", "false"], ["loanSanctionAmount", "capturedData.SANCTION_DETAILS.loanAmount"], ["loanSanctionTextVariable7", "capturedData.SANCTION_DETAILS.tenure"], ["loanSanctionNumberVariable3", "capturedData.SANCTION_DETAILS.interest"], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ["loanSanctionTextVariable3", "capturedData.SANCTION_DETAILS.emiToBePaid"],['microservicetoken', 'oauthAccessToken']],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]},"PROCEED", {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE",
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
                                    "In Principal Approval page"
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
                                    "SUB_STATUS_5"
                                ],
                                [
                                    "subStatusChangeDescription",
                                    "STATIC",
                                    "Thank you Page"
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
                    ],
                    "dataScopeFetchFlow": [
                        {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',[
                            "microservicetoken",
                            "oauthAccessToken"
                            ]],
                        "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.code"}, "200"]}, 'PROCEED', 'PRODUCT_ERROR']},
                        "apiError": "PRODUCT_ERROR"
                    }, 
                    {
                      "fetchflow": "rating_score_personal_loan",
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
                                "200"
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
                            "AWAITING_APPROVAL_L36"
                          ],
                          [
                            "subStatusToBeChanged",
                            "STATIC",
                            "SUB_STATUS_1"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "BRE call initiated"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
                      },
                      {
                        "fetchflow": "fetchEligibiltyDetails",
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
                        "validateResponse": "PROCEED",
                        "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]BRE_FAILURE[JOURNEY_EVENT_CODE]FAILURE_APPICE"
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
                        "fetchflow": "updatesubStatus",
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
                            {"if":[{"==":[{"var":"scope.fetchEligibilityData.output.plEligOutput.stpFlag"},"NA"]},"SUB_STATUS_3","SUB_STATUS_2"]}
                            
                          ],
                          [
                            "subStatusChangeDescription",
                            "RULE_OUTPUT",
                            {"if":[{"==":[{"var":"scope.fetchEligibilityData.output.plEligOutput.stpFlag"},"NA"]},"BRE call Failure","BRE call Success"]}
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
                            "fetchflow": "fetchRepaymentSchedule",
                            "apiError": "PRODUCT_ERROR",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token','loanUuid', ['microservicetoken', 'oauthAccessToken'], [
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
                            ]],
                            "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.code"}, "200"]}, 'PROCEED', 'PRODUCT_ERROR']}
                        }
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
                    "bankDetails": {
                        "iterationCount": 7,
                        "delay": 10000
                    },
                    "customPageConfig":{
                        "contractCodes":{
                            "INPRINCIPAL_DOWNLOAD":"302"
                        }
                    },
                    "showRepaymentSchedule": false,
                    "showEmiCalculatorSection": false,
                    "showBranchSection": false,
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
                        headers: [{fieldLabel: "Month", fieldName: "repaymentDate"}, {
                            fieldLabel: "Opening Balance",
                            fieldName: "loanAmountRemaining"
                        }, {fieldLabel: "Interest", fieldName: "interest"}, {
                            fieldLabel: "Principle Repayment",
                            fieldName: "principal"
                        }, {fieldLabel: "Closing Balance", fieldName: "closingBalance"}],
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
                            "validateSection": true,
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
                                    "fieldAccessModifier": "EDITABLE",
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
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": 6,
                                    "maxLength": 15,
                                    "error": null,
                                    "value": null,
                                    "validationJson": {
                                        "showField": {
                                            "if": [{"or": [{"==": [{"var": "rating"}, '1']}, {"==": [{"var": "rating"}, '2']}, {"==": [{"var": "rating"}, '3']}]}, true, false]
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
                                "fieldAccessModifier": "READ_ONLY",
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    "runAlways": true,
                                    "default": {
                                        "if": [true, {"var": "loanAmountCopy"}]
                                    },
                                    "calculation": {
                                        "if": [true, {"var": "loanAmountCopy"}]
                                    }
                                },
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "Enter Loan Amount",
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
                                "fieldAccessModifier": "EDITABLE",
                                "minLength": 100,
                                "maxLength": 50000,
                                "error": null,
                                "value": null,
                                "validationJson": {},
                                "rulesFor": ["loanAmount"],
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": null,
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
                                "fieldAccessModifier": "READ_ONLY",
                                "minLength": 6,
                                "maxLength": 15,
                                "error": null,
                                "value": null,
                                "validationJson": {
                                    "runAlways": true,
                                    "default": {
                                        "if": [true, {"var": "tenureCopy"}]
                                    },
                                    "calculation": {
                                        "if": [true, {"var": "tenureCopy"}]
                                    }
                                },
                                "rulesFor": null,
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "Enter Tenure",
                                "fieldName": "tenure",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
                                "fieldDataType": "RANGE",
                                "isMandatory": false,
                                "fieldLabel": "Enter your account number",
                                "fieldAccessModifier": "EDITABLE",
                                "minLength": 1,
                                "maxLength": 84,
                                "error": null,
                                "value": null,
                                "validationJson": {},
                                "rulesFor": ['tenure'],
                                "regex": null,
                                "regexErrorMessage": null,
                                "rowNo": null,
                                "columnNo": null,
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "Enter Your Account Number",
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "Enter Intrest Per Annum",
                                "fieldName": "interestRate",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "EMI",
                                "fieldName": "emiToBePaid",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }, {
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
                                "groupName": 'Your Loan Details',
                                "groupIndex": 1,
                                "placeholderText": "Rate of Intrest",
                                "fieldName": "typeOfRoi",
                                "labelInfo": null,
                                "showLabel": true,
                                "showField": true
                            }]
                    },
                    "dataScopeFetchFlow": [
                        {
                        "fetchflow": "fetchEligibilityData",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": [['microservicetoken', 'oauthAccessToken'], ['applicationId', 'loanUuid'], ['txnType', 'STATIC', 'ELIGIBILITY_CHECK']],
                        "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.output.plEligOutput.stpFlag"}, 'STP']}, 'PROCEED', {"if": [{"==": [{"var": "fetchFlowResponse.output.plEligOutput.stpFlag"}, 'NSTP']}, "PROCEED", 'PROCEED']}]},
                        "apiError": "PRODUCT_ERROR"
                    }, {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',[
                            "microservicetoken",
                            "oauthAccessToken"
                            ]],
                        "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.code"}, "200"]}, "PROCEED", "PRODUCT_ERROR"]},
                        "apiError": "PRODUCT_ERROR"
                    },
                        {
                            "fetchflow": "borrowerDetails",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ["microservicetoken", "oauthAccessToken"], 'loanUuid'],
                            "validateResponse": "PROCEED",
                            "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "fetchflow":"fetchContracts",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid'],
                            "validateResponse": "PROCEED",
                            "apiError": "PRODUCT_ERROR"
                        }
                    ]
                },
                "COAPPLICANT_DETAILS":{
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "formSubmitFlow": [
                        {
                            "validationJson":{
                                "if":[{"==":[{
                                    "var": "COAPPLICANT_DETAILS.addcoapplicant"
                                  },true]},"EXECUTE","NEXT"]
                              } ,
                            "submitflow":"addCoApplicant",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken', 'oauthAccessToken'],
                            ["coApplicantPensionerDetails","RULE_OUTPUT",{}],
                            ["coApplicantDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                    ["firstName","DUMMY"]
                                ]]
                            }],["coApplicantEmploymentDetails","STATIC",{}],["coApplicantSelfEmploymentDetails","STATIC",{}]],
                           "validateResponse":"PROCEED",
                              "apiError":"PRODUCT_ERROR"
                        },
                        {
                            "validationJson":"EXECUTE",
                            "submitflow":"coapplicantValidate",
                            "dataFeedCloud": [
                                "product",
                                "formValue",
                                "capturedData"
                              ],
                              "params": [],
                              "validateResponse":{
                                "if":[{"==":[{
                                    "var": "COAPPLICANT_DETAILS.addcoapplicant"
                                  },true]},"COAPPLICANT_MORE_INFO","PROCEED"]
                              } 
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
                            ],
                            "validateResponse": "PROCEED",
                            "apiError": "PRODUCT_ERROR"
                          },
                        {
                            "fetchflow":"fetchCoApplicant",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY'],["microservicetoken","oauthAccessToken"],["isGuarantorUserType","STATIC","CO_APPLICANT"],["formattedAmount","STATIC","true"],["selectedModule","STATIC","Staff"]],
                            "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.code"}, "200"]}, 'PROCEED', 'PRODUCT_ERROR']}
                        }
                    ],
                },
                "COAPPLICANT_MORE_INFO":{
                    "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "formSubmitFlow": [
                      {
                        "submitflow":"validateIdentityNumbersForEntities",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params": ["access_token", ["loanApplicationUuid","loanUuid"],["microservicetoken","oauthAccessToken"],["identityNumberOne",'RULE_OUTPUT',{"var":"formValue.identityNumberOne"}],
                        ["identityNumberTwo",'RULE_OUTPUT',{"var":"formValue.identityNumberTwo"}]],
                        "validateResponse":{
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
                            {
                              "cat":["ERROR[ERROR_MESSAGE]",{"var":"formSubmitResponse.message"},'[ERROR_EVENTS]RESET_PAGE']
                            }
                          ]
                        },
                        "apiError":"PRODUCT_ERROR"
                      },
                      {
                        "submitflow":"updateCoApplicant",
                        "saveResponseToCapturedData": true,
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params": ["access_token", "loanUuid",
                     ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken', 'oauthAccessToken'],
                        ["coApplicantUuid","capturedData.entityUuid"],
                        ["coApplicantDetails","RULE_OUTPUT",{
                            "buildObject":[[
                                    ["isGuarantor",false],
                                    ["isGuarantorUserType","CO_APPLICANT"],
                                    ["identityNumberOne",{"var":"COAPPLICANT_MORE_INFO.identityNumberOne"}],
                                    ["identityNumberTwo",{"var":"COAPPLICANT_MORE_INFO.identityNumberTwo"}],
                                    ["identityNumberOneVerified",{"var":"COAPPLICANT_MORE_INFO.identityNumberOneVerified"}],
                                    ["identityNumberTwoVerified",{"var":"COAPPLICANT_MORE_INFO.identityNumberTwoVerified"}],
                                ["coApplicantTextVariable37","COAPPLICANT_PERSONAL_DETAILS"]
                                
                            ]]
                        }],["coApplicantEmploymentDetails","STATIC",{}],["coApplicantSelfEmploymentDetails","STATIC",{}]],
                       "validateResponse":{
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
                          "apiError":"PRODUCT_ERROR"
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
                                "RULE_OUTPUT",
                                {
                                  "cat":["Coapplicant ",{"var":"capturedData.entityUuid"}," PAN & AADHAAR Verification page completed"]
                                }
                                 
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
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ['applicationId', 'loanUuid'], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['microservicetoken', 'oauthAccessToken']],
                            "submitflow":"moreinfosubmit",
                            "validateResponse":"COAPPLICANT_PERSONAL_DETAILS"
                        }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow":"fetchSingleCoapplicant",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params":['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY'],["microservicetoken","oauthAccessToken"],["isGuarantorUserType","STATIC","CO_APPLICANT"],["formattedAmount","STATIC","true"],["selectedModule","STATIC","Staff"]],
                        "validateResponse":{
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
                        "apiError":"PRODUCT_ERROR"
                      }
                    ],
                    'fieldLabel': 'Proceed',
                },
                "COAPPLICANT_PERSONAL_DETAILS":{
                "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "formSubmitFlow": [
                        {
                            "submitflow":"updateCoApplicant",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", "loanUuid",
                         ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken', 'oauthAccessToken'],
                            ["coApplicantUuid","capturedData.entityUuid"],
                            ["coApplicantDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                    ["coApplicantTextVariable37",{"if":[{"==":[{
                                      "var": "COAPPLICANT_PERSONAL_DETAILS.isCoapplicantassesment"
                                    },true]},"COAPPLICANT_EMPLOYMENT_DETAILS","COAPPLICANT_COMPLETED"]}],
                                    ["isGuarantor",false],
                                    ["isGuarantorUserType","CO_APPLICANT"],
                                    ["coApplicantEmploymentType","SALARIED"],
                                    ["identityNumberOne",{"var":"fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberOne"}],
                                    ["identityNumberTwo",{"var":"fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberTwo"}],
                                   ["title",{"var":"COAPPLICANT_PERSONAL_DETAILS.title"}],
                                   ["mobileNumber",{"var":"COAPPLICANT_PERSONAL_DETAILS.mobileNumber"}],
                                   ["mobileNumberVerified",{"var":"COAPPLICANT_PERSONAL_DETAILS.mobileNumberVerified"}],
                                   ["firstName",{"var":"COAPPLICANT_PERSONAL_DETAILS.firstName"}],
                                   ["lastName",{"var":"COAPPLICANT_PERSONAL_DETAILS.lastName"}],
                                   ["middleName",{"var":"COAPPLICANT_PERSONAL_DETAILS.middleName"}],
                                   ["dateOfBirth",{"var":"COAPPLICANT_PERSONAL_DETAILS.dateOfBirth"}],
                                   ["line1",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneLine1"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoLine1"}]}],
                                   ["line2",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneLine2"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoLine2"}]}],
                                   ["line3",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneLine3"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoLine3"}]}],
                                   ["state",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneState"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoState"}]}],
                                   ["district",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneDistrict"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoDistrict"}]}],
                                   ["zipCode",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneZipCode"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoZipcode"}]}],
                                   ["ownershipType",{"var":"COAPPLICANT_PERSONAL_DETAILS.ownershipType"}],
                                   ["livingSince",{"var":"COAPPLICANT_PERSONAL_DETAILS.livingSince"}],
                                   ["emailId",{"var":"COAPPLICANT_PERSONAL_DETAILS.emailId"}],
                                   ["emailIdVerified",{"var":"COAPPLICANT_PERSONAL_DETAILS.emailIdVerified"}],
                                ]]
                            }],["coApplicantEmploymentDetails","RULE_OUTPUT",{
                              "buildObject":[[
                                [
                                  "coApplicantEmploymentBooleanVariable1",
                                  {"if":[{"==":[{
                                    "var": "COAPPLICANT_PERSONAL_DETAILS.isCoapplicantassesment"
                                  },true]},true,false]}
                                ],
                              ]]}],["coApplicantSelfEmploymentDetails","STATIC",{}]],
                           "validateResponse":{
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
                              "apiError":"PRODUCT_ERROR"
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
                                "SUB_STATUS_21"
                              ],
                              [
                                "subStatusChangeDescription",
                                "RULE_OUTPUT",
                                {
                                  "cat":["Coapplicant",{"var":"capturedData.entityUuid"}," Address Details"]
                                }
                                 
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
                                "SUB_STATUS_22"
                              ],
                              [
                                "subStatusChangeDescription",
                                "RULE_OUTPUT",
                                {
                                  "cat":["Coapplicant",{"var":"capturedData.entityUuid"}," Personal details page submit"]
                                }
                                 
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
                                {"if":[{"==":[{
                                    "var": "COAPPLICANT_PERSONAL_DETAILS.isCoapplicantassesment"
                                  },true]},"COAPPLICANT_EMPLOYMENT_DETAILS","COAPPLICANT_DETAILS"]},
                                "PRODUCT_ERROR"
                              ]
                            },
                            "apiError": "PRODUCT_ERROR",
                            "validationErrorMessage": "something went wrong Please Try again!!"
                          }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow":"fetchSingleCoapplicant",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params":['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY'],["microservicetoken","oauthAccessToken"],["isGuarantorUserType","STATIC","CO_APPLICANT"],["formattedAmount","STATIC","true"],["selectedModule","STATIC","Staff"]],
                        "validateResponse":{
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
                        "apiError":"PRODUCT_ERROR"
                      },
                        {
                            "fetchflow": "cbsDedupe",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                            ],
                            "params": [
                              "access_token",
                              "loanUuid",
                              [
                                "aadhaarNumber",
                                "COAPPLICANT_MORE_INFO.identityNumberOne"
                              ],
                              [
                                "panNumber",
                                "scope.fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberTwo"
                              ],
                              [
                                "microservicetoken",
                                "oauthAccessToken"
                              ],
                              [
                                "applicantType",
                                "STATIC",
                                "COAPPLICANT"
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
                                      "var": "fetchFlowResponse.code"
                                    },
                                    "200"
                                  ]
                                },
                                "PROCEED",
                                {
                                  "cat": [
                                    "PRODUCT_ERROR[PARAMS]errorCode=",
                                    {
                                      "var": "fetchFlowResponse.message"
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
                          },
                          {
                            "fetchflow": "updatesubStatus",
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
                                "SUB_STATUS_16"
                              ],
                              [
                                "subStatusChangeDescription",
                                "RULE_OUTPUT",
                                {
                                  "cat":["Coapplicant",{"var":"capturedData.entityUuid"},"Dedupe check"]
                                }
                                 
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
                            "validate": {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "scope.cbsDedupe.isETB"
                                    },
                                    true
                                  ]
                                },
                                "EXECUTE",
                                "NEXT"
                              ]
                            },
                            "fetchflow": "demographicDetailsFetch",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                            ],
                            "params": [
                              "access_token",
                              "loanUuid",
                              [
                                "requestFor",
                                "STATIC",
                                "CO_APPLICANT"
                              ],
                              "finacleRequest",
                              [
                                "applicationSource",
                                "STATIC",
                                "WEB_JOURNEY"
                              ],
                              [
                                "custId",
                                "scope.cbsDedupe.custId"
                              ],
                              ["coApplicantUuid",
                              "capturedData.entityUuid"
                            ], 
                            [
                              "isNpaCheck",
                              "STATIC",
                              true
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
                                      "var": "fetchFlowResponse.code"
                                    },
                                    "200"
                                  ]
                                },
                                {
                                  "if": [
                                    {
                                      "==": [
                                        {
                                          "var": "fetchFlowResponse.isReKyc"
                                        },
                                        false
                                      ]
                                    },
                                    "PROCEED",
                                    "PROCEED"
                                  ]
                                },
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
                            }
                          },
                    ],
                    'fieldLabel': 'Proceed',
                    "prepopulationRemaps":{
                        "permanentAddress":[{"if":[{"var":"cbsDedupe.isETB"},{"cat":[{"var":"demographicDetailsFetch.object.addressOneLine1"},{"var":"demographicDetailsFetch.object.addressOneLine2"},{"var":"demographicDetailsFetch.object.addressOneLine3"}," ",{"var":"demographicDetailsFetch.object.addressOneDistrict"}," ",{"var":"demographicDetailsFetch.object.addressOneState"}," ",{"var":"demographicDetailsFetch.object.addressOneCountry"}," ",{"var":"demographicDetailsFetch.object.addressOneZipCode"},]},{"var":"metaData.capturedData.coapplicantaadharData.address"}]},{},"RULE_OUTPUT"],
                        "identityNumberOne":[{"maskData":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.identityNumberOne"},{"var":"fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberOne"}]}]},{},"RULE_OUTPUT"],
                        "identityNumberTwo":[{"maskData":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.identityNumberTwo"},{"var":"fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberTwo"}]}]},{},"RULE_OUTPUT"],
                        "firstName":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.firstName"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.firstName"}]},{},"RULE_OUTPUT"],
                        "title":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.title"},null]},{},"RULE_OUTPUT"],
                        "middleName":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.middleName"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.middleName"}]},{},"RULE_OUTPUT"],
                        "lastName":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.lastName"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.lastName"}]},{},"RULE_OUTPUT"],
                        "dateOfBirth":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.dateOfBirth"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.dateOfBirth"}]},{},"RULE_OUTPUT"],
                        "gender":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.gender"},{"var":"metaData.capturedData.coapplicantaadharData.mappingFields.gender"}]},{},"RULE_OUTPUT"],
                        "mobileNumber":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.mobileNumber"},null]},{},"RULE_OUTPUT"],
                        "emailId":[{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.alternativeUsername"},null]},{
                            "verifyDisable":{"if":[{"var":"cbsDedupe.isETB"},true,false]}
                        },"RULE_OUTPUT"]
                    }
                },
                "COAPPLICANT_EMPLOYMENT_DETAILS":{
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    'fieldLabel': 'Proceed',
                    "formSubmitFlow": [
                        {
                            "validationJson":{"if":[{"==":[{
                                "var": "fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"
                              },true]},"NEXT","EXECUTE"]},
                            "submitflow":"updateCoApplicant",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken','oauthAccessToken'],
                            ["coApplicantUuid","capturedData.entityUuid"],
                            ["coApplicantDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                  ["coApplicantTextVariable37","COAPPLICANT_DOCUMENT_UPLOAD"],
                                    ["isGuarantor",false],
                                    ["isGuarantorUserType","CO_APPLICANT"],
                                    ["coApplicantEmploymentType",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"}],
                                    ["identityNumberOne",{"var":"COAPPLICANT_MORE_INFO.identityNumberOne"}],
                                    ["identityNumberTwo",{"var":"COAPPLICANT_MORE_INFO.identityNumberTwo"}],
                                    ["identityNumberOneVerified",{"var":"COAPPLICANT_MORE_INFO.identityNumberOneVerified"}],
                                    ["identityNumberTwoVerified",{"var":"COAPPLICANT_MORE_INFO.identityNumberTwoVerified"}],
                                   ["title",{"var":"COAPPLICANT_PERSONAL_DETAILS.title"}],
                                   ["firstName",{"var":"COAPPLICANT_PERSONAL_DETAILS.firstName"}],
                                   ["lastName",{"var":"COAPPLICANT_PERSONAL_DETAILS.lastName"}],
                                   ["middleName",{"var":"COAPPLICANT_PERSONAL_DETAILS.middleName"}],
                                   ["dateOfBirth",{"var":"COAPPLICANT_PERSONAL_DETAILS.dateOfBirth"}],
                                   ["line1",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneLine1"},{"var":"capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoLine1"}]}],
                                   ["line2",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneLine2"},{"var":"capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoLine2"}]}],
                                   ["line3",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneLine3"},{"var":"capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoLine3"}]}],
                                   ["state",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneState"},{"var":"capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoState"}]}],
                                   ["district",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneDistrict"},{"var":"capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoDistrict"}]}],
                                   ["zipCode",{"if":[{"var":"cbsDedupe.isETB"},{"var":"demographicDetailsFetch.object.addressOneZipCode"},{"var":"capturedData.coapplicantaadharData.mappingFields.addressTwo.addressTwoZipcode"}]}],
                                   ["ownershipType",{"var":"COAPPLICANT_PERSONAL_DETAILS.ownershipType"}],
                                   ["livingSince",{"var":"COAPPLICANT_PERSONAL_DETAILS.livingSince"}],
                                   ["emailId",{"var":"COAPPLICANT_PERSONAL_DETAILS.emailId"}],
                                   ["emailIdVerified",{"var":"COAPPLICANT_PERSONAL_DETAILS.emailIdVerified"}],
                                ]]
                            }],["coApplicantEmploymentDetails","RULE_OUTPUT",
                            {
                                "if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},{
                                    "buildObject":[[
                                        ["coApplicantEmploymentTextVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable6"}],
                                        ["coApplicantEmploymentTextVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable2"}],
                                        ["companyEmail",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmail"}],
                                        ["companyEmailVerified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmailVerified"}],
                                        ["companyName",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyName"}],
                                        ["borrowerEmploymentHistoryNumberVariable4",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerEmploymentHistoryNumberVariable4"}],
                                        ["borrowerCoApplicantEmploymentDetailNumberVariable10",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantEmploymentDetailNumberVariable10"}],
                                    ]]
                                },{}]
                            }
                            ],["coApplicantSelfEmploymentDetails","RULE_OUTPUT",
                            {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},{
                                "buildObject":[[
                                    ["textVariable11",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable11"}],
                                    ["textVariable3",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable3Verified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable6"}],
                                    ["dateVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.dateVariable2"}],
                                    ["numberVariable8",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.numberVariable8"}]
                                    
                                ]]
                            },{}]}
                            
                            ]],
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
                            "apiError":"PRODUCT_ERROR"
                        },
                        {
                            "validationJson":{"if":[{"==":[{
                                "var": "fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"
                              },true]},{"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},"EXECUTE","NEXT"]},"NEXT"]},
                            "submitflow":"updateCoApplicant",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken','oauthAccessToken'],
                            ["coApplicantUuid","capturedData.entityUuid"],
                            ["coApplicantDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                    ["isGuarantor",false],
                                    ["isGuarantorUserType","CO_APPLICANT"],
                                  ["coApplicantTextVariable37","COAPPLICANT_DOCUMENT_UPLOAD"],
                                    ["coApplicantEmploymentType",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"}],
                                ]]
                            }],["coApplicantEmploymentDetails","RULE_OUTPUT",
                            {
                                "if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},{
                                    "buildObject":[[
                                        ["borrowerCoApplicantEmploymentDetailNumberVariable5",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantEmploymentDetailNumberVariable5"}],
                                        ["coApplicantEmploymentBooleanVariable1",{"var":"fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"}],
                                        ["coApplicantEmploymentTextVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable6"}],
                                        ["coApplicantEmploymentTextVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable2"}],
                                        ["companyEmail",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmail"}],
                                        ["companyEmailVerified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmailVerified"}],
                                        ["companyName",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyName"}],
                                        ["borrowerEmploymentHistoryNumberVariable4",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerEmploymentHistoryNumberVariable4"}],
                                        ["borrowerCoApplicantEmploymentDetailNumberVariable10",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantEmploymentDetailNumberVariable10"}],
                                    ]]
                                },{}]
                            }
                            ],["coApplicantSelfEmploymentDetails","RULE_OUTPUT",
                            {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},{
                                "buildObject":[[
                                    ["textVariable11",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable11"}],
                                    ["textVariable3",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable3Verified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable6"}],
                                    ["dateVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.dateVariable2"}],
                                    ["numberVariable8",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.numberVariable8"}]
                                    
                                ]]
                            },{}]}
                            
                            ]],
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
                            "apiError":"PRODUCT_ERROR"
                        },
                        {
                            "validationJson":{"if":[{"==":[{
                                "var": "fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"
                              },true]},{"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},"EXECUTE","NEXT"]},"NEXT"]},
                            "submitflow":"updateCoApplicant",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken','oauthAccessToken'],
                            ["coApplicantUuid","capturedData.entityUuid"],
                            ["coApplicantDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                    ["isGuarantor",false],
                                    ["isGuarantorUserType","CO_APPLICANT"],
                                  ["coApplicantTextVariable37","COAPPLICANT_DOCUMENT_UPLOAD"],
                                    ["coApplicantEmploymentType",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"}],
                                ]]
                            }],["coApplicantEmploymentDetails","RULE_OUTPUT",
                            {
                                "if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},{
                                    "buildObject":[[
                                        ["coApplicantEmploymentTextVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable6"}],
                                        ["coApplicantEmploymentTextVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable2"}],
                                        ["companyEmail",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmail"}],
                                        ["companyEmailVerified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmailVerified"}],
                                        ["companyName",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyName"}],
                                        ["borrowerEmploymentHistoryNumberVariable4",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerEmploymentHistoryNumberVariable4"}],
                                        ["borrowerCoApplicantEmploymentDetailNumberVariable10",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantEmploymentDetailNumberVariable10"}],
                                    ]]
                                },{
                                    "buildObject":[[
                                  ["coApplicantEmploymentBooleanVariable1",false],
                                    ]]
                                }]
                            }
                            ],["coApplicantSelfEmploymentDetails","RULE_OUTPUT",
                            {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},{
                                "buildObject":[[
                                    ["textVariable13",{"var":"fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"}],
                                    ["textVariable11",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable11"}],
                                    ["textVariable3",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable3Verified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable6"}],
                                    ["dateVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.dateVariable2"}],
                                    ["numberVariable8",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.numberVariable8"}],
                                    ["borrowerCoApplicantSelfEmploymentDetailNumberVariable1",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantSelfEmploymentDetailNumberVariable1"}],
                                    ["borrowerCoApplicantSelfEmploymentTextVariable12",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantSelfEmploymentTextVariable12"}],
                                ]]
                            },{}]}
                            
                            ]],
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
                            "apiError":"PRODUCT_ERROR"
                        },
                        {
                            "validationJson":{"if":[{"==":[{
                                "var": "fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"
                              },true]},{"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"PENSIONER"]},"EXECUTE","NEXT"]},"NEXT"]},
                            "submitflow":"updateCoApplicant",
                            "saveResponseToCapturedData": true,
                            "dataFeedCloud": ["product", "formValue", "capturedData"],
                            "params": ["access_token", "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken','oauthAccessToken'],
                            ["coApplicantUuid","capturedData.entityUuid"],
                            ["coApplicantPensionerDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                    ["coApplicantPensionerDetailBooleanVariable1",{"var":"fetchSingleCoapplicant.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1"}],
                                    ["coApplicantPensionerDetailNumberVariable5",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantPensionerDetailNumberVariable5"}],
                                    ["coApplicantPensionerDetailNumberVariable9",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantPensionerDetailNumberVariable9"}],
                                ]]
                            }],
                            ["coApplicantDetails","RULE_OUTPUT",{
                                "buildObject":[[
                                    ["isGuarantor",false],
                                    ["isGuarantorUserType","CO_APPLICANT"],
                                  ["coApplicantTextVariable37","COAPPLICANT_DOCUMENT_UPLOAD"],
                                    ["coApplicantEmploymentType",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"}],
                                ]]
                            }],["coApplicantEmploymentDetails","RULE_OUTPUT",
                            {
                                "if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},{
                                    "buildObject":[[
                                        ["coApplicantEmploymentTextVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable6"}],
                                        ["coApplicantEmploymentTextVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentTextVariable2"}],
                                        ["companyEmail",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmail"}],
                                        ["companyEmailVerified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyEmailVerified"}],
                                        ["companyName",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.companyName"}],
                                        ["borrowerEmploymentHistoryNumberVariable4",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerEmploymentHistoryNumberVariable4"}],
                                        ["borrowerCoApplicantEmploymentDetailNumberVariable10",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.borrowerCoApplicantEmploymentDetailNumberVariable10"}],
                                    ]]
                                },{
                                  "buildObject":[[
                                ["coApplicantEmploymentBooleanVariable1",false],
                                  ]]
                              }]
                            }
                            ],["coApplicantSelfEmploymentDetails","RULE_OUTPUT",
                            {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},{
                                "buildObject":[[
                                    ["textVariable11",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable11"}],
                                    ["textVariable3",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable3Verified",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable3"}],
                                    ["textVariable6",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.textVariable6"}],
                                    ["dateVariable2",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.dateVariable2"}],
                                    ["numberVariable8",{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.numberVariable8"}]
                                    
                                ]]
                            },{}]}
                            
                            ]],
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
                            "apiError":"PRODUCT_ERROR"
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
                                {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},"SUB_STATUS_24",{"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},"SUB_STATUS_23","SUB_STATUS_25"]}]}
                              ],
                              [
                                "subStatusChangeDescription",
                                "RULE_OUTPUT",
                                {
                                  "cat":
                                  ["Coapplicant",
                                  {"var":"capturedData.entityUuid"},
                                  {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SALARIED"]},
                                  "Employment Type Salaried",
                                  {"if":[{"==":[{"var":"COAPPLICANT_EMPLOYMENT_DETAILS.coApplicantEmploymentType"},"SELF_EMPLOYED"]},"EmploymentType Self employed","EmploymentType Pensioner"]}]
                                }]}
                            
                              
                            ]],
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
                                "SUB_STATUS_28"
                              ],
                              [
                                "subStatusChangeDescription",
                                "RULE_OUTPUT",
                                {
                                  "cat":["Coapplicant",{"var":"capturedData.entityUuid"}," Employment page submited"]
                                }
                                 
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
                            "submitflow":"coapplicantemploymentsubmit",
                            "params": ['access_token', ['applicationId', 'loanUuid'], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['microservicetoken', 'oauthAccessToken']],
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "validateResponse":"COAPPLICANT_DOCUMENT_UPLOAD"
                        }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow":"fetchSingleCoapplicant",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params":['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY'],["microservicetoken","oauthAccessToken"],["isGuarantorUserType","STATIC","CO_APPLICANT"],["formattedAmount","STATIC","true"],["selectedModule","STATIC","Staff"]],
                        "validateResponse":{
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
                        "apiError":"PRODUCT_ERROR"
                      },
                        {
                            "fetchflow": "cbsDedupe",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                            ],
                            "params": [
                              "access_token",
                              "loanUuid",
                              [
                                "aadhaarNumber",
                                "scope.fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberOne"
                              ],
                              [
                                "panNumber",
                                "scope.fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberTwo"
                              ],
                              [
                                "microservicetoken",
                                "oauthAccessToken"
                              ],
                              [
                                "applicantType",
                                "STATIC",
                                "CO_APPLICANT"
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
                                      "var": "fetchFlowResponse.code"
                                    },
                                    "200"
                                  ]
                                },
                                "PROCEED",
                                {
                                  "cat": [
                                    "PRODUCT_ERROR[PARAMS]errorCode=",
                                    {
                                      "var": "fetchFlowResponse.message"
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
                          },
                          {
                            "validate": {
                              "if": [
                                {
                                  "==": [
                                    {
                                      "var": "scope.cbsDedupe.isETB"
                                    },
                                    true
                                  ]
                                },
                                "EXECUTE",
                                "NEXT"
                              ]
                            },
                            "fetchflow": "demographicDetailsFetch",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                            ],
                            "params": [
                              "access_token",
                              "loanUuid",
                              [
                                "requestFor",
                                "STATIC",
                                "CO_APPLICANT"
                              ],
                              "finacleRequest",
                              [
                                "applicationSource",
                                "STATIC",
                                "WEB_JOURNEY"
                              ],
                              [
                                "custId",
                                "scope.cbsDedupe.custId"
                              ],
                              [
                                "microservicetoken",
                                "oauthAccessToken"
                              ],
                              ["coApplicantUuid",
                              "capturedData.entityUuid"
                            ], 
                            [
                              "isNpaCheck",
                              "STATIC",
                              true
                            ],
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
                                {
                                  "if": [
                                    {
                                      "==": [
                                        {
                                          "var": "fetchFlowResponse.isReKyc"
                                        },
                                        false
                                      ]
                                    },
                                    "PROCEED",
                                    "PROCEED"
                                  ]
                                },
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
                            }
                          },
                    ]
                },
                "COAPPLICANT_DOCUMENT_UPLOAD":{
                    "showLeftContent": false,
                    "showStepper": false,
                    "showSubStepper": false,
                    "formSubmitFlow": [
                      {
                        "submitflow":"updateCoApplicant",
                        "saveResponseToCapturedData": true,
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params": ["access_token", "loanUuid",
                     ["applicationSource", "STATIC", "WEB_JOURNEY"],['microservicetoken', 'oauthAccessToken'],
                        ["coApplicantUuid","capturedData.entityUuid"],
                        ["coApplicantDetails","RULE_OUTPUT",{
                            "buildObject":[[
                                ["coApplicantTextVariable37","COAPPLICANT_COMPLETED"]
                                
                            ]]
                        }],["coApplicantEmploymentDetails","STATIC",{}],["coApplicantSelfEmploymentDetails","STATIC",{}]],
                       "validateResponse":{
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
                          "apiError":"PRODUCT_ERROR"
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
                                "SUB_STATUS_32"
                              ],
                              [
                                "subStatusChangeDescription",
                                "RULE_OUTPUT",
                                {
                                  "cat":["Coapplicant",{"var":"capturedData.entityUuid"}," Document page submited"]
                                }
                                 
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
                            "submitflow":"coapplicantemploymentsubmit",
                            "params": ['access_token', ['applicationId', 'loanUuid'], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['microservicetoken', 'oauthAccessToken']],
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "validateResponse":"COAPPLICANT_DETAILS"
                        }
                    ],
                    "dataScopeFetchFlow": [
                      {
                        "fetchflow":"fetchSingleCoapplicant",
                        "dataFeedCloud": ["product", "formValue", "capturedData"],
                        "params":['access_token', 'loanUuid', ['applicationSource', 'STATIC', 'WEB_JOURNEY'],["microservicetoken","oauthAccessToken"],["isGuarantorUserType","STATIC","CO_APPLICANT"],["formattedAmount","STATIC","true"],["selectedModule","STATIC","Staff"]],
                        "validateResponse":{
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
                        "apiError":"PRODUCT_ERROR"
                      },
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
                              "CO_APPLICANT"
                            ]
                          ],
                          "validateResponse": "PROCEED",
                          "apiError": "PRODUCT_ERROR"
                        },
                        {
                            "fetchflow": "cbsDedupe",
                            "dataFeedCloud": [
                              "product",
                              "formValue",
                              "capturedData"
                            ],
                            "params": [
                              "access_token",
                              "loanUuid",
                              [
                                "aadhaarNumber",
                                "scope.fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberOne"
                              ],
                              [
                                "panNumber",
                                "scope.fetchSingleCoapplicant.GUARANTOR_DETAIL.identityNumberTwo"
                              ],
                              [
                                "microservicetoken",
                                "oauthAccessToken"
                              ],
                              [
                                "applicantType",
                                "STATIC",
                                "COAPPLICANT"
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
                                      "var": "fetchFlowResponse.code"
                                    },
                                    "200"
                                  ]
                                },
                                "PROCEED",
                                {
                                  "cat": [
                                    "PRODUCT_ERROR[PARAMS]errorCode=",
                                    {
                                      "var": "fetchFlowResponse.message"
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
                              "scope.cbsDedupe.custId"
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
                              "PROCEED"
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
                            ["coapplicantUuid","capturedData.entityUuid"],
                            ["microservicetoken","oauthAccessToken"]
                          ],
                          "validateResponse": "PROCEED",
                          "apiError": "PRODUCT_ERROR"
                        }
                      ],
                    'fieldLabel': 'Done',
                    "documentStatusCheckData": {
                        "iteration": 4,
                        "iterationDelay": 5
                    },
                    'documentList': [
                        {
                            "documentCategoryCode": "DOC17",
                            "documentFor": "CO_APPLICANT",
                            "mandatory": false,
                            "showDocument": {"if": [{"and":[{"or":[{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'SALARIED']},{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'SELF_EMPLOYED']},{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'PENSIONER']}]},
                            {"==":[{"var":"cbsDedupe.isETB"},true]},{"!=":[{"Arraylength":[{"var":"fetchSalaryAccount.accounts"}]},0]} ]}]},
                            "multipleUploadOption": true,
                            "multiBankOption": true,
                            "showUpload": false,
                            "documentType": "BANK_STATEMENT",
                            "selectedBankData": {
                                value: null,
                                options: [{
                                    name: "Auto Fetch",
                                }, {
                                    name: "Statement Upload",
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
                                          "perfiosAnalysis":"generateLink",
                                          "processingType":"account",
                                          "applicationSource":"WEB_JOURNEY",
                                          "disabled": false,
                                          "underContent": "<span>Rbi Recommended</span>"
                                        }, {
                                            "icon": "cloud_upload",
                                            "name": "Share With Netbanking",
                                            "code": "NB",
                                            "disabled": false,
                                            "perfiosAnalysis": "onlineFetch",
                                            "documentType": "ONLINE_FETCH",
                                            "underContent": ""
                                        }, {
                                            "icon": "file_upload",
                                            "name": "e-PDF Statement",
                                            "code": "EDF",
                                            "perfiosAnalysis": "statementUpload",
                                            "disabled": false,
                                            "documentType": null,
                                            "underContent": null
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
                            "documentCategoryCode": "DOC17",
                            "documentFor": "CO_APPLICANT",
                            "mandatory": false,
                            "showDocument": {"if": [{"and":[{"or":[{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'SALARIED']},{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'SELF_EMPLOYED']},{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'PENSIONER']}]},
                               {"or":[{"==":[{"var":"cbsDedupe.isETB"},false]},{"==":[{"Arraylength":[{"var":"fetchSalaryAccount.accounts"}]},0]}]} ]}]},
                            "multipleUploadOption": true,
                            "multiBankOption": false,
                            "showUpload": false,
                            "documentType": "BANK_STATEMENT",
                            "selectedBankData": {
                                value: "Statement Upload",
                                options: [ {
                                    name: "Statement Upload",
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
                                          "perfiosAnalysis":"generateLink",
                                          "processingType":"account",
                                          "applicationSource":"WEB_JOURNEY",
                                          "disabled": false,
                                          "underContent": "<span>Rbi Recommended</span>"
                                        }, {
                                            "icon": "cloud_upload",
                                            "name": "Share With Netbanking",
                                            "code": "NB",
                                            "disabled": false,
                                            "perfiosAnalysis": "onlineFetch",
                                            "documentType": "ONLINE_FETCH",
                                            "underContent": ""
                                        }, {
                                            "icon": "file_upload",
                                            "name": "e-PDF Statement",
                                            "code": "EDF",
                                            "perfiosAnalysis": "statementUpload",
                                            "disabled": false,
                                            "documentType": null,
                                            "underContent": null
                                        },]
                                    },
                                    "label": "Please Select a option for sharing Your bank statement",
                                    bankname: null
                                },
                                
                            },
                            "documentUploadStatus": "IN_PROGRESS",
                            "documentUploadStatuslocalisation": "In Progress"
                        },
                        {
                            "documentCategoryCode": "DOC55",
                            "documentFor": "CO_APPLICANT",
                            "mandatory": true,
                            "showDocument": {"if": [{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'SALARIED']}]},
                            "multipleUploadOption": true,
                            "multiBankOption": true,
                            "showUpload": false,
                            "documentType": "DOCUMENT",
                            "documentUploadStatus": "IN_PROGRESS",
                            "documentUploadStatuslocalisation": "In Progress"
                        },
                           
                            {
                                "documentCategoryCode": "ITR_SELF",
                                "documentFor": "CO_APPLICANT",
                                "showDocument": {"if": [{"==": [{"var": "fetchSingleCoapplicant.GUARANTOR_DETAIL.coApplicantEmploymentType"}, 'SELF_EMPLOYED']}]},
                                "multipleUploadOption": false,
                                "mandatory": true,
                                "multiBankOption": false,
                                "showUpload": false,
                                "documentType": "ITR",
                                uploadOptions: [{
                                    "icon": "cloud_upload",
                                    "name": "Share With Income Tax Portal",
                                    "code": "NB",
                                    "disabled": false,
                                    "perfiosAnalysis": "onlineFetch",
                                    "documentType": "ONLINE_FETCH",
                                    "underContent": ""
                                }, {
                                    "icon": "file_upload",
                                    "name": "Upload ITR (e-PDF Doc)",
                                    "code": "EDF",
                                    "perfiosAnalysis": "statementUpload",
                                    "disabled": false,
                                    "documentType": null,
                                    "underContent": null
                                }],
                                "label": "Please Select a option for sharing ITR statement",
                                bankname: null,
                                "documentUploadStatus": "IN_PROGRESS",
                                "documentUploadStatuslocalisation": "In Progress"
                            },
                    ],
                },
            }
        },
    };
    applicationErrorCodes = {
        HL: {},
    };
    journeyEventCodes = {
        HL: {
            "MOBILE_VERIFY": {},
            'MOBILE_SUCCESS': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Mobile Verification Successfull"
                }
            },
            'MOBILE_FAIL': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "Pan Verification Successfull"
                }
            },
            'MOBILE_VERIFICATION_COMPLETE': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_14",
                    "subStatusChangeDescription": "Mobile Verification page completed"
                },
            },
            'PAN_VERIFY': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "Pan Verification Successfull"
                },
            },
            'AADHAR_VERIFY': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_6",
                    "subStatusChangeDescription": "Aadhaar Verification Successfull"
                },
            },
            "MORE_INFO_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_7",
                    "subStatusChangeDescription": "PAN & AADHAAR Verification page completed"
                },
                "APPICE_EVENT": {
                    "key": "PLVerifyBasicInfo",
                    "properties": {
                        "done": true
                    }
                }
            },
            "NTB_CONTACT_BRANCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_16",
                    "subStatusChangeDescription": "NTB Journey Thankyou page"
                }
            },
            'NAME_MATCH': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_10",
                    "subStatusChangeDescription": "Name Match Successfull"
                }
            },
            "DEDUPE_CHECK": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_9",
                    "subStatusChangeDescription": "Dedupe Check Successfull"
                }
            },
            "CRM_LEAD_ID": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_7",
                    "subStatusChangeDescription": "CRM Lead Id generation Successfull"
                }
            },
            "BRANCH_SELECT": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_11",
                    "subStatusChangeDescription": "Branch Selection Successfull"
                }
            },
            "CONTACT_BRANCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_9",
                    "subStatusChangeDescription": "Contact Branch"
                }
            },
            "ACCOUNT_TYPE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_10",
                    "subStatusChangeDescription": "Account Type Identification"
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
                    "newSubStatus": "SUB_STATUS_13",
                    "subStatusChangeDescription": "Address Details"
                }
            },
            "PERSONAL_DETAILS_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_15",
                    "subStatusChangeDescription": "ETB Personal details page submit"
                },
                "APPICE_SET_CUSTOMVARIABLE": {
                    "properties": {
                        "highestEducation": ["metaData.capturedData.PERSONAL_DETAILS.educationType"],
                        "martialStatus": ["metaData.capturedData.PERSONAL_DETAILS.maritalStatus"],
                        "pincode": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.addressOneZipCode",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.personalAddress.zipCode"
                            ]
                        }],
                        "language": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.borrowerDetailTextVariable24",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.borrowerDetailTextVariable24"
                            ]
                        }]
                    }
                },
                "APPICE_SETUSER": {
                    "properties": {
                        "name": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.firstName",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.firstName"
                            ]
                        }],
                        "phone": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.mobileNumber",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.mobileNumber"
                            ]
                        }],
                        "email": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.alternativeUsername",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.alternativeUsername"
                            ]
                        }],
                        "gender": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.gender",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.gender"
                            ]
                        }],
                        "dob": [{
                            "if": [
                                {
                                    "checkNull": [
                                        {
                                            "var": "resumeJourney"
                                        }
                                    ]
                                },
                                "metaData.capturedData.demographicDetails.obejct.dateOfBirth",
                                "metaData.globalScopeData.borrowerDetails.borrowerDetail.dateOfBirth"
                            ]
                        }]
                    }
                },
                "APPICE_SETUSERID": {
                    "properties": {
                        "userId": ["metaData.globalScopeData.loanDetails.loanDetails.crmLeadId"]
                    }
                }
            },
            "PERSONAL_DETAILS_COMPLETE_NTB": {
                "APPICE_SET_CUSTOMVARIABLE": {
                    "key": "PLAddPersonalInfo",
                    "properties": {
                        "highestEducation": ["metaData.capturedData.ADDITIONAL_INFORMATION.educationType"],
                        "martialStatus": ["metaData.capturedData.ADDITIONAL_INFORMATION.maritalStatus"],
                        "dob": [
                            "metaData.capturedData.existingaadharData.mappingFields.personalAddress.zipCode"
                        ],
                    }
                },
                "APPICE_SETUSER": {
                    "properties": {
                        "name": [
                            "metaData.globalScopeData.borrowerDetails.borrowerDetail.firstName"
                        ],
                        "phone": [
                            "metaData.globalScopeData.borrowerDetails.borrowerDetail.mobileNumber"
                        ],
                        "email": [
                            "metaData.globalScopeData.borrowerDetails.borrowerDetail.alternativeUsername"
                        ],
                        "gender": [
                            "metaData.globalScopeData.borrowerDetails.borrowerDetail.gender"
                        ],
                        "dob": [
                            "metaData.globalScopeData.borrowerDetails.borrowerDetail.dateOfBirth"
                        ]
                    }
                },
            },
            "BUREAU_CALL": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L4',
                    "statusChangeDescription": 'Bureau call',
                    "subStatusToBeChanged": "SUB_STATUS_1",
                }
            },
            "SELF_EMPLOYED_UPDATE": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L21',
                    "statusChangeDescription": 'In process',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Employment Details Self Employed"
                }
            },
            "SALARIED_UPDATE": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L21',
                    "statusChangeDescription": 'In process',
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
            "CO_APPLICANT_EMPLOYMENT_DETAILS_CHECK":{
              "subStatus": {
                  "newSubStatus": "SUB_STATUS_26",
                  "subStatusChangeDescription": "coApplicant Employment Details Check"
              }
          },
            "EMPLOYMENT_DETAILS_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_8",
                    "subStatusChangeDescription": "ETB Employment page submited"
                },
                "APPICE_SET_CUSTOMVARIABLE": {
                    "key": "PLAddPersonalInfo",
                    "properties": {
                        "nationality": "Indian",
                        "employmentType": ["metaData.capturedData.EMPLOYMENT_DETAILS.borrowerEmploymentType"],
                        "organizationType": ["metaData.capturedData.EMPLOYMENT_DETAILS.borrowerEmploymentHistoryTextVariable11"],
                        "profession": ["metaData.capturedData.EMPLOYMENT_DETAILS.borrowerEmploymentHistoryTextVariable15"]
                    }
                }
            },
            "EDW_FETCH_INITIATE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "EDW Bank Statement"
                },
                "APPICE_EVENT": {
                    "key": "PLAddPersonalInfo",
                    "properties": {
                        "bankStatementComplete": true
                    }
                }
            },
            "DOCUMENT_UPLOAD": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_6",
                    "subStatusChangeDescription": "Document Upload"
                }
            },
            "SALARY_DOCUMENT_UPLOAD": {
              "subStatus": {
                  "newSubStatus": "SUB_STATUS_8",
                  "subStatusChangeDescription": "Document Upload salary statement"
              }
            },
            "BSA_FETCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_9",
                    "subStatusChangeDescription": "Banking statement fetch"
                },
                "APPICE_EVENT": {
                    "key": "PLAddPersonalInfo",
                    "properties": {
                        "bankStatementComplete": true
                    }
                }
            },
            "DOCUMENT_UPLOAD_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_9",
                    "subStatusChangeDescription": "ETB Document page submited"
                },
                "APPICE_EVENT": {
                    "key": "PLAddPersonalInfo",
                    "properties": {
                        "done": true
                    }
                }
            },
            "SCHEME_SELECT": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L31',
                    "statusChangeDescription": 'Scheme Selection',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Scheme selection"
                },
            },
            "BRE_INITIATE": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L36',
                    "statusChangeDescription": 'Eligiblity Assesment',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "BRE call initiated"
                },
            },
            "BRE_SUCCESS_STP": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "BRE call Success STP"
                },
            },
            "BRE_FAILURE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_3",
                    "subStatusChangeDescription": "BRE call Failure"
                },
            },
            "BRE_SUCCESS": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "BRE Call Success stp or Non STP"
                },
            },
            "DEVIATION_CHECK": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L32',
                    "statusChangeDescription": 'Deviation Check',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Deviation Check"
                },
            },
            "SANCTION_DETAILS_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "ETB Sanction page"
                },
            },
            "KEY_FACT_STP": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L18',
                    "statusChangeDescription": 'Sent for Approval',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "KeyFact statement STP"
                },
            },
            "KEY_FACT_NSTP": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_6",
                    "subStatusChangeDescription": "KeyFact statement Non-STP"
                },
            },
            "KEY_FACT_STP_SUBMIT": {
                "status": {
                    "statusToBeChanged": 'APPROVED',
                    "statusChangeDescription": 'Loan Sanctioned',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_3",
                    "subStatusChangeDescription": "KeyFact statement STP - agreed by the customer"
                },
            },
            "KEY_FACT_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "ETB KFS page"
                }
            },
            "KEY_FACT_ACCEPT": {
                "APPICE_EVENT": {
                    "key": "PLApproveLoan",
                    "properties": {
                        "proceed": true
                    }
                }
            },
            "KEY_FACT_DECLINE": {
                "APPICE_EVENT": {
                    "key": "PLApproveLoan",
                    "properties": {
                        "decline": true
                    }
                }
            },
            "ESIGN_INITIATE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "E-Sign And E-Stamp Initiation"
                },
                "APPICE_EVENT": {
                    "key": "PLApproveLoan",
                    "properties": {
                        "proceedToEsign": true
                    }
                }
            },
            "ESIGN_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "E-Sign And E-Stamp completion"
                },
                "APPICE_EVENT": {
                    "key": "PLApproveLoan",
                    "properties": {
                        "kycFinished": true
                    }
                }
            },
            "ACCOUNT_CREATION_INITIATE": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L2',
                    "statusChangeDescription": 'Push To CBS',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Account creation API Initiated"
                },
            },
            "ACCOUNT_CREATION_COMPLETE": {
                "status": {
                    "statusToBeChanged": 'AWAITING_APPROVAL_L30',
                    "statusChangeDescription": 'CBS process',
                },
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Account creation API Completed"
                },
            },
            "CONGRATGULATIONS": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_2",
                    "subStatusChangeDescription": "Congratulations Page"
                }
            }, 
            "BANK_DETAILS_FETCH":{
                "APPICE_EVENT": {
                  "key": "PLApproveLoan",
                  "mapExternalParams":true,
                  "properties": {
                    
                  }
                }
              },
            "LOAN_SUMMARY_SUBMIT": {
                "APPICE_EVENT": {
                    "key": "PLApproveLoan",
                    "properties": {
                        "LoanAmount": ["metaData.globalScopeData.loanDetails.loanDetails.loanAmount"],
                        "leadId": ["metaData.globalScopeData.loanDetails.loanDetails.crmLeadId"]
                    }
                }
            },
            "FAILURE_APPICE": {
                "APPICE_EVENT": {
                    "key": "PLApproveLoan",
                    "properties": {
                        "FailureMessage": ["formSubmitResponse.message"],
                    }
                }
            }
        },
    };
    productLocalisations = {
        HL: {
            SYSTEM_DOWN: "currently our servers are down please try after some time",
            SWR: "Something Went Wrong!!",
        }
    };
    flowTags = {};
}