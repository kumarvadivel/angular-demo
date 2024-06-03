import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { AadharConsent, commonProperty_static, getHelpInfo, homeBanner, homeMenu, landingPageBanner, loanProductInfo, rejectionConsent } from './utils/data';

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
        'fetchLoanDetails': 'fetchLoanDetails',
        'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
        'cibilfetch': 'fetchCibilData',
        'fetchMultiFacilityList': 'facilityDetailsList',
        'multiFacilityRetreive': 'retreiveFacilityDetails',
        'securityDetailsCreate': 'submitSecurityDetails',
        'fetchSecurityDetails': 'retreiveSecurityDetails',
        'ProductDetails_v3': 'fetchProductDetailInfo'
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
        'createVehicle': 'createVehicleDetails',
        'updateLoanApplication': 'updateLoanApplication',
        'updateVehicle': 'updateVehicleDetails',
        'designations': 'designations',
        'retrieve': 'retrieve',
        'borrowerExtraPropertyUpdate': 'borrowerExtraPropertyUpdate',
        'duplicateApplicationCheck': 'duplicateApplicationCheck'
    }
    commonProperty_static = commonProperty_static
    encryptionHeaders = {
        clientApiKey: this.tenentConfiguration.clientApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    homeMenu = homeMenu
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    banner = {
        'LAAODTDR': {
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
        'LAAODTDR': {
            'journeyPages': {
                individual: [
                    {
                        pageIndex: 0,
                        pageCode: 'ACCOUNT_VERIFY',
                        pageName: 'Account Number Verification',
                        "lastPage": false,
                        url: 'term-loan-against-OD/account-verification',
                        resumeJourneySequences: [],
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'EKYC_VERIFY',
                        pageName: 'Aadhar Verification',
                        "lastPage": false,
                        url: 'term-loan-against-OD/aadhar-verification',
                        resumeJourneySequences: [],
                    },
                     {
                        pageIndex: 1,
                        pageCode: 'PERSONAL_DETAILS',
                        pageName: 'Personal Details',
                        "lastPage": false,
                        url: 'term-loan-against-OD/personal-details',
                        resumeJourneySequences: [],
                    },
                    {
                        pageIndex: 1,
                        pageCode: 'SCHEME_SELECTION',
                        pageName: 'Deposit Selection',
                        "lastPage": false,
                        url: 'term-loan-against-OD/select-scheme',
                        resumeJourneySequences: [],
                    },
                    {
                        pageIndex: 3,
                        pageCode: 'SANCTION_DETAILS',
                        pageName: 'Sanction Details Update',
                        lastPage: false,
                        url: 'term-loan-against-OD/sanction-details',
                        resumeJourneySequences: [],
                        
                    },
                    {
                        pageIndex: 2,
                        pageCode: "KEY_FACT_DETAILS",
                        pageName: 'Key fact Statement',
                        lastPage: false,
                        url: 'term-loan-against-OD/key-fact-details',
                        resumeJourneySequences: [],
                        
                    },
                     {
                        pageIndex: 5,
                        pageCode: "ESIGN",
                        pageName: 'Esign Information',
                        lastPage: false,
                        url: 'term-loan-against-OD/e-sign',
                        resumeJourneySequences: []
                    },
                    {
                        pageIndex: 4,
                        pageCode: 'LOAN_SUMMARY',
                        pageName: 'Loan summary',
                        lastPage: true,
                        url: 'term-loan-against-OD/loan-summary',
                        resumeJourneySequences: []
                    },
                   
                ],
                company: [],
                group: []
            },
            'otherPages': {
                "individual": [
                    {
                        pageIndex: 0,
                        pageCode: 'PRODUCT_ERROR',
                        pageName: 'Product Error',
                        "lastPage": false,
                        url: 'term-loan-against-OD/product-error',
                        resumeJourneySequences: [],
                    },{
                        pageIndex: 0,
                        pageCode: 'CONTACT_BRANCH',
                        pageName: 'Contact branch',
                        "lastPage": false,
                        url: 'term-loan-against-OD/contact-branch',
                        resumeJourneySequences: [],
                    },
                ]
            }
        },
    };
    stepperData = {
        'LAAODTDR': {
            "individual": [{
                "name": "Verification",
                "info": "10MinVerifyYou",
                "isActive": true,
                "isCompleted": false,
                "subStep":[
                    {
                        "id": "001",
                        "pageCode": 'EKYC_VERIFY',
                        "isActive": false,
                        "name": 'More Information',
                        "isCompleted": false
                    }
                ]
            },
                {
                    "name": "About You",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode":"PERSONAL_DETAILS"
                },
                {
                    "name": "Deposit Selection",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": "SCHEME_SELECTION",
                },
                {
                    "name": "Checkout",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "subStep":[
                        {
                            "id": "001",
                            "pageCode": 'KEY_FACT_DETAILS',
                            "isActive": false,
                            "name": 'More Information',
                            "isCompleted": false
                        }
                    ]
                },
                {
                    "name": "",
                    "info": "10MinVerifyYou",
                    "isActive": false,
                    "isCompleted": false,
                    "pageCode": "LOAN_SUMMARY",
                },
            ]
        },
    };
    dynamicComponentLayout = {
        columnSize: 1,
    };
    verifiedFieldsData = {
        'LAAODTDR': {
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
        LAAODTDR: [
            {
                displayType: 'paragraph',
                name: 'features',
                label: 'Features',
                displayData: [
                    `Do you want funds readily available to you whenever you desire or need, be it a sudden vacation that you plan with your family or urgent funds required for medical treatment?`, `Then avail Loan Against Term Deposit without breaking your Term Deposit at attractive interest rates up to 85% of deposit value.`,
                ]
            },
            {
                displayType: 'bulletPoints',
                name: 'charges',
                label: 'Charges',
                displayData: [
                    'One Time Processing Charges = Rs. 1000 + GST'
                ]
            },{
                displayType: 'card',
                name: 'docRequired',
                label: 'Documents',
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
        'LAAODTDR': {
            'individual': {
                "ACCOUNT_VERIFY": [{
                    "componentType": "TITLE",
                    "className": "mb-1 f-32",
                    "sectionContent": {
                        "isShow": true,
                        "titleData": "Welcome"
                    }
                },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Let’s start financing against your fixed / recurring deposit",
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
                                    "fieldDataType": "NUMBER",
                                    "isMandatory": true,
                                    "fieldLabel": "Deposit Account Number",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999999999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
                                    "rulesFor": null,
                                    "regex": null,
                                    "regexErrorMessage": null,
                                    "rowNo": null,
                                    "columnNo": null,
                                    "placeholderText": "Enter Deposit Account Number",
                                    "fieldName": "accountNumber",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "groupName": null,
                                    "groupIndex": null,
                                    "showField": true,
                                    "isEditableOnDisable":true
                                },
                            ],
                            
                        }
                    },
                    {
                        "componentType": "CONSENT",
                        "validateSection": true,
                        "className": "consent-text mb-20",
                        "groupName":"stage1",
                        "sectionContent": {
                            "config": {
                                "options": [
                                    {
                                        "consentType": "APIFETCH",
                                        "consentCode": "DND_CONSENT_PL",
                                        "submitConsentCodes": ['DND_CONSENT_PL', 'PRIVACY_POLICY_PL'],
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
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"stage1",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "SUBMIT_STAGE_1",
                            "className": "btn-orange",
                            "isShow": true
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "groupName":"stage2",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 ws-10 f-16 ",
                        "sectionContent": {
                            "isShow": false,
                            "paragraphData": "Please enter the OTP sent to your registered mobile number",
                        },
                    },
                    {
                        "componentType":"GRID",
                        "className":"d-flex j-c-sb mb-40",
                        "rootClassName":"w-45",
                        "groupName":"stage2",
                        "sectionContent":{
                            "isShow":false,
                            "items": [
                                {
                                    "componentType": "PARAGRAPH",
                                    "validateSection": false,
                                    "parentclassName": "display-flex j-c-sb a-i-c ws-10 ",
                                    "className": "common-title f-16 ls-10 download-ref-key-fact",
                                    "sectionContent": {
                                        "paragraphData": "9xxxxxxxxxx923",
                                        "isShow": true
                                    }
                                },
                                {
                                    "componentType": "LINK",
                                    "validateSection": false,
                                    "parentclassName": "f-12 redLink",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "f-12 redLink cursor-pointer",
                                    "sectionContent": {
                                        "label": "I don't have this number",
                                        "actionId": "CHANGE_ACCOUNT_NUMBER",
                                        "className": "btn-orange",
                                        "isShow": true
                                    }
                                }
                            ]
                        }
                    },
                    {
                        'componentType': 'OTP',
                        "className":"mb-20",
                        "groupName":"stage2",
                        "sectionContent": {
                            "fields": {
                                "fieldDataType": "OTP",
                                "otpType": 'MOBILE',
                                "isMandatory": true,
                                "fieldLabel": "Mobile OTP",
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
                                "externalTriggerValidate":true
                            }, 
                            "isShow": false,
                        }
                    },
                    {
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"stage2",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "SUBMIT_STAGE_2",
                            "className": "btn-orange",
                            "isShow": false
                        }
                    },
                   
                ],
                "EKYC_VERIFY":[
                    {
                        "componentType": "TITLE",
                        "className": "mb-1 f-32",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Welcome"
                        }
                    },{
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-70",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Let’s start financing against your fixed / recurring deposit",
                        },
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "common-title col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-20 f-16 bold",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "As per our records, your Aadhaar Number is",
                        },
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "common-title col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-20  f-16  ls-10",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "**** **** 1234",
                        },
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12  f-16 mb-20",
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "To verify, we have shared an OTP on your Aadhaar registered mobile number",
                        },
                    },
                    {
                        'componentType': 'OTP',
                        "className":"mb-100",
                        "groupName":"stage2",
                        "sectionContent": {
                            "fields": {
                                "fieldDataType": "OTP",
                                "otpType": 'MOBILE',
                                "isMandatory": true,
                                "fieldLabel": "Aadhaar OTP",
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
                                "fieldName": "aadharOtp",
                                "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                                "showLabel": true,
                                "showField": true,
                                "OtpMasking": true,
                                "otpDataType": 'NUMBER',
                                "otpAttempts": 3,
                                "waitTimeInSeconds": 120,
                                "infoText": null,
                            },
                            "options": {
                                'value': null,
                                'notificationType': 'COMMON_OTP_TWO',
                                'loanProduct': null,
                                'createBorrower': true,
                                'generateOtp': true,
                                "externalTriggerValidate":true
                            }, 
                            "isShow": true,
                        }
                    },
                    {
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"stage2",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "SUBMIT_AADHAR_OTP",
                            "className": "btn-orange",
                            "isShow": true
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
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "sectionContent": {
                            "paragraphData": "Please fill the mandatory details marked with *",
                            "isShow": true
                        },
                        "className": "text-info mt-10 mb-20"
                    },
                    {
                        "componentType": "FORM",
                        "className":"mb-20",
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
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": null,
                                    "fieldLabel": "Loan Purpose",
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
                                    "placeholderText": "Loan Purpose",
                                    "fieldName": "loanpurpose",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "commonpropertyType": null,
                                    "fieldLabel": "Buisness / Occupation",
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
                                    "placeholderText": "Buisness / Occupation",
                                    "fieldName": "businessoroccupation",
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
                                    "commonpropertyType": null,
                                    "fieldLabel": "Select Loan Credit Account",
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
                                    "placeholderText": "Loan credit Account",
                                    "fieldName": "loanAccount",
                                    "labelInfo": null,
                                    "showLabel": true,
                                    "showField": true
                                },
                                {
                                    "fieldDataType": "SECTION",
                                    "isMandatory": false,
                                    "fieldLabel": "Home Branch",
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
                                    "groupName": "Home Branch",
                                    "groupIndex": 6
                                }
                                
                            ]
                        }
                    },
                    {
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"stage2",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "PERSONAL_DETAILS_SUBMIT",
                            "className": "btn-orange",
                            "isShow": true
                        }
                    }
                ],
                "SCHEME_SELECTION":[
                    {
                        "componentType": "TITLE",
                        "className": "f-32 mt-20",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Deposit Selection"
                        }
                    } ,
                    {
                        "componentType": "PARAGRAPH",
                        "validateSection": false,
                        "sectionContent": {
                            "paragraphData": "Please select deposit(s) to check eligibility",
                            "isShow": true
                        },
                        "className": "text-info f-16  mb-20"
                    },
                    {
                        "componentType": "TABLE",
                        "validateSection": false,
                        "className": "mb-20 keyfact-table",
                        "sectionContent": {
                          "isShow": true,
                          "config": {
                            "allowSelection":true,
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
                                "fieldLabel": "Deposit",
                                "fieldName": "deposit"
                              },
                              {
                                "fieldLabel": "Current Balance",
                                "fieldName": "currentBalance"
                              },
                              {
                                "fieldLabel": "Interest Rate",
                                "fieldName": "interestRate"
                              }
                            ],
                            "data": [
                              {
                                
                                "deposit": "FD **** **** **1123",
                                "currentBalance": "3,00,000",
                                "interestRate":"6.5%"
                              },
                              {
                                
                                "deposit": "FD **** **** **1123",
                                "currentBalance": "3,00,000",
                                "interestRate":"6.5%"
                              },{
                                
                                "deposit": "FD **** **** **1123",
                                "currentBalance": "3,00,000",
                                "interestRate":"6.5%"
                              },{
                                
                                "deposit": "FD **** **** **1123",
                                "currentBalance": "3,00,000",
                                "interestRate":"6.5%"
                              },{
                                
                                "deposit": "FD **** **** **1123",
                                "currentBalance": "3,00,000",
                                "interestRate":"6.5%"
                              },{
                                
                                "deposit": "FD **** **** **1123",
                                "currentBalance": "3,00,000",
                                "interestRate":"6.5%"
                              },
                            ]
                          }
                        }
                      },
                    {
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"stage2",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "SCHEME_SELECTION_SUBMIT",
                            "className": "btn-orange",
                            "isShow": true
                        }
                    }
                ],
                "SANCTION_DETAILS": [
                    {
                        "componentType": "TITLE",
                        "className": "mb-10",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Sanction Details"
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
                    {
                        "componentType":"CUSTOM",
                        "sectionContent":{
                            "isShow":true,
                            "list":[
                                {
                                    "title":"Maximum Loan Eligiblity Amount",
                                    "value":"₹ 8,50,000",
                                    "showEnhanceButton":true
                                },
                                {
                                    "title":"Applicable Rate of Interest",
                                    "value":"8.25 %"
                                }, {
                                    "title":"Margin Percentage",
                                    "value":"15 %"
                                },
                            ]
                        }
                    },
                    {
                        "componentType": "TITLE",
                        "className": "mb-10  f-16",
                        "sectionContent": {
                            "isShow": true,
                            "titleData": "Customise Loan Amount"
                        }
                    },
                    {
                            "componentType": "FORM",
                            "className": 'w-100 senctionCreditSection p-40 mb-20 mr-10 ml-10',
                            "sectionContent": {
                                "isShow": true,
                                "options": {
                                    "columnSize": 1,
                                    "layout": "sideLayout",
                                },
                                "fields": [
                                    {
                                        "fieldDataType": "TEXT",
                                        "isMandatory": false,
                                        "fieldLabel": "Requested Loan Amount",
                                        "fieldAccessModifier": "READ_ONLY",
                                        "minLength": 6,
                                        "maxLength": 15,
                                        "error": null,
                                        "value": null,
                                        "validationJson": {
                                            "runAlways": true,
                                            "default": {
                                                "if": [true, { "var": "cashCreditLimitCopy" }]
                                            },
                                            "calculation": {
                                                "if": [true, { "var": "cashCreditLimitCopy" }]
                                            }
                                        },
                                        "rulesFor": null,
                                        "regex": null,
                                        "regexErrorMessage": null,
                                        "rowNo": null,
                                        "columnNo": null,
                                        "groupName": '',
                                        "groupIndex": 1,
                                        "placeholderText": "",
                                        "fieldName": "requestedLoanAmount",
                                        "labelInfo": null,
                                        "showLabel": true,
                                        WrapperclassName:"loan-amount-field",
                                        "showField": true,
                                    },
                                    {
                                        "fieldDataType": "RANGE",
                                        "isMandatory": false,
                                        "fieldLabel": "",
                                        "fieldAccessModifier": "EDITABLE",
                                        "minLength": 10000,
                                        "maxLength": 76000,
                                        "error": null,
                                        "value": 76000,
                                        "validationJson": {},
                                        "rulesFor": ["cashCreditLimit"],
                                        "regex": null,
                                        "regexErrorMessage": null,
                                        "rowNo": null,
                                        "columnNo": null,
                                        "groupName": "",
                                        "groupIndex": 1,
                                        "placeholderText": "xx x  xxxxx",
                                        "fieldName": "cashCreditLimitCopy",
                                        "labelInfo": null,
                                        "showLabel": false,
                                        "showField": true,
                                        "prefix": null,
                                        "suffix": null,
                                        "excludeToFormValue": true
                                    }
                                ]
                            }
                        },
                    {
                        "componentType": "CONSENT",
                        "validateSection": true,
                        "className": "consent-text mb-20",
                        "groupName":"stage1",
                        "sectionContent": {
                            "config": {
                                "options": [
                                    {
                                        "consentType": "APIFETCH",
                                        "consentCode": "DND_CONSENT_PL",
                                        "submitConsentCodes": ['DND_CONSENT_PL', 'PRIVACY_POLICY_PL'],
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
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"stage2",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "SANCTION_DETAILS_SUBMIT",
                            "className": "btn-orange",
                            "isShow": true
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
                    },
                    
                },
                {
                    "componentType": "BUTTON",
                    "validateSection": false,
                    "groupName":"stage2",
                    "parentclassName": "key-download-fact-button",
                    "rootClassName": "key-download-fact-button",
                    "className": "",
                    "sectionContent": {
                        "label": "Continue",
                        "actionId": "ESIGN_SUBMIT",
                        "className": "btn-orange",
                        "isShow": true
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
                                  <span>`, 'Vignesh', `</span>
                                  </div>
                                  <div class="display-flex flex-col">
                                      <label class="text-info">Home Branch Address</label>
                                      <span class="fw-bold f-15"> Bank of India `, `Mumbai`,
                                    `</span>
                                  <span class="common-info">`,
                                    `
                                    Plot No. 6, Door No, 10, Mahalingapuram Main Road, Chennai, Tamil Nadu – 600034`,
                                    ` Branch</span>
                                  </div>
                                  <div class="display-flex flex-col mb-20">
                                      <label class="text-info">Sanction Date</label>
                                      <span>`, `16/06/2023`,
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
                        "className": "mb-20 keyfact-table",
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
                                        "data": {"var": "$scope.fetchRepaymentSchedule.object.principal"}
                                    },
                                    {
                                        "sno": "(ii)",
                                        "title": "Total Interest  charge during the entire tenor of the loan",
                                        "data": {"var": "$scope.fetchRepaymentSchedule.object.payableInterest"}
                                    },
                                    {
                                        "sno": "(iii)",
                                        "title": "Other up-front charges, if any",
                                        "data": {"+": [1180, 0, 0]}
                                    },
                                    {
                                        "sno": "a",
                                        "title": "Processing Fees, if any",
                                        "data": 1180
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
                                        "data": {"-": [{"var": "$scope.fetchRepaymentSchedule.object.principal"}, {"+": [1180, 0, 0]}]}
                                    },
                                    {
                                        "sno": "(v)",
                                        "title": "Total amount to be paid by the borrower",
                                        "data": {"+": [{"var": "$scope.fetchRepaymentSchedule.object.principal"}, {"var": "$scope.fetchRepaymentSchedule.object.payableInterest"}, {"+": [1180, 0, 0]}]}
                                    },
                                    {
                                        "sno": "(vi)",
                                        "title": "Annual Percentage Rate - Effective annualized interest rate",
                                        "data": {"var": "$scope.fetchRepaymentSchedule.object.rateOfInterest"}
                                    },
                                    {
                                        "sno": "(vii)",
                                        "title": "Tenor of the Loan",
                                        "data": {"var": "$scope.fetchRepaymentSchedule.object.loanTenure"}
                                    },
                                    {
                                        "sno": "(viii)",
                                        "title": "Repayment frequency by the borrower",
                                        "data": "Monthly"
                                    },
                                    {
                                        "sno": "(ix)",
                                        "title": "Number of installments of repayment",
                                        "data": {"var": "$scope.fetchRepaymentSchedule.object.loanTenure"}
                                    },
                                    {
                                        "sno": "(x)",
                                        "title": "Amount of each installments of repayment",
                                        "data": {"var": "$scope.fetchRepaymentSchedule.object.emiToBePaid"}
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
                    }, 
                    {
                        "componentType": "GRID",
                        "validateSection": false,
                        "className": "display-flex gap-10 action-wrapper  a-i-c mb-3",
                        "sectionContent": {
                            "isShow": true,
                            "items": [
                                {
                                    "componentType": "BUTTON",
                                    "validateSection": false,
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
                                    "validateSection": false,
                                    "parentclassName": "key-download-fact-button",
                                    "rootClassName": "key-download-fact-button",
                                    "className": "",
                                    "sectionContent": {
                                        "label": "Decline",
                                        "actionId": "KEYFACT_DECLINE",
                                        "className": "mat-focus-indicator btn-stroked-orange mat-stroked-button mat-button-base",
                                        "isShow": true,
                                    }
                                }
                            ]
                        }
                    }
                ],
                "LOAN_SUMMARY": [
                    {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "className": 'mt-5 d-flex align-items-center congradulation-text mb-20',
                        "validationJson": null,
                        "sectionContent": {
                            "titleData": `Congratulations, Vignesh!`,
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
                        "componentType": 'HTML_CONTENT',
                        'className': 'common-info display-flex a-i-c',
                        "validationJson": null,
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "htmlData": `Your Loan Against TDR application has been successfully processed.
                            The sanctioned loan amount is ₹ 4,50,000 and is available in the selected loan account.`,
                        }
                    }
                    , {
                        "componentType": 'PARAGRAPH',
                        "className": "form-label-lg mt-4",
                        "validateSection": false,
                        "validationJson": null,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Your Application Reference #0129293"
                        }
                    },
                    {
                        "componentType": "PARAGRAPH",
                        "className": "form-label-lg mt-4",
                        "validationJson": null,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Your Loan Account Number is 1254 XXXX XXXX 0156"
                        }
                    },
                    {
                        "componentType": "HTML_CONTENT",
                        "sectionContent": {
                            "isShow": true,
                            "htmlData": `<div class="summary-status mt-3" >
                  <img src="../../../assets/icons/tick.png" alt="" class="me-2"> Account Information is sent to your Email address and Mobile Number
              </div>`
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
                              "Mumbai",
                              " Branch",
                              "<div class=\"address-content\">\n                                <span class=\"common-info\">",
                              "BKC complex",
                              "</br>",
                              "Mumbai",
                              "  ",
                              "Maharastra",
                              " - ",
                              "642323"
                            ]
                          }
                        },
                        "sectionContent": {
                          "isShow": true,
                          "htmlData": null
                        }
                      },
                      {
                        "componentType": "TITLE",
                        "validateSection": false,
                        "groupName":"ratingsSection",
                        "className": ' mb-0 mt-5 d-flex align-items-center',
                        "sectionContent": {
                            "titleData": `Rate Us!`,
                            "isShow": true,
                        }
                    }, {
                        "componentType": 'PARAGRAPH',
                        "className": "text-info",
                        "groupName":"ratingsSection",
                        "validateSection": false,
                        "sectionContent": {
                            "isShow": true,
                            "paragraphData": "Please help us improving our services by providing your valuable feedback"
                        }
                    },
                    {
                        "componentType": 'FORM',
                        "className": 'mb-3 w-50 mt-25',
                        "groupName":"ratingsSection",
                        "validateSection": true,
                        "sectionContent": {
                            "isShow": true,
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
                    },
                    {
                        "componentType": "BUTTON",
                        "validateSection": false,
                        "groupName":"ratingsSection",
                        "parentclassName": "key-download-fact-button",
                        "rootClassName": "key-download-fact-button",
                        "className": "",
                        "sectionContent": {
                            "label": "Continue",
                            "actionId": "RATINGS_SUBMIT",
                            "className": "btn-orange",
                            "isShow": true
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
                        "paragraphData": `We have received your Personal Loan application and
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
                },
                ],
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
            }
        },
    };
    pageMetaConfig = {
        'LAAODTDR': {
            "individual": {
              "ACCOUNT_VERIFY": {
                "showLeftContent": true,
                "showStepper": false,
                "showSubStepper": true,
                "consentIndex": 3,
                "formIndex": 2,
                "mobileFieldIndex": 0,
                "otpIndex": 4,
                "fieldLabel": "Continue",
                "defaultSubmitAction": false,
                "formSubmitFlow": []
              },
              "EKYC_VERIFY": {
                "showLeftContent": true,
                "showStepper": false,
                "showSubStepper": false,
                "fieldLabel": "Proceed",
                "formSectionIndex": 4,
                "formSubmitFlow": [],
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
              "PERSONAL_DETAILS": {
                "showLeftContent": false,
                "showStepper": false,
                "showSubStepper": false,
                "fieldLabel": "Continue",
                "formSectionIndex": 2,
                "prepopulationRemaps": {},
                "formSubmitFlow": [],
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
              "SCHEME_SELECTION": {
                "showLeftContent": false,
                "showStepper": false,
                "showSubStepper": false,
                "fieldLabel": "Continue",
                "formSectionIndex": 2
              },
              "SANCTION_DETAILS": {
                "showLeftContent": false,
                "showStepper": false,
                "showSubStepper": false,
                "fieldLabel": "Proceed",
                "formSubmitFlow": [],
                "dataScopeFetchFlow": []
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
                "formSubmitFlow": [],
                "dataScopeFetchFlow": []
              },
              "ESIGN": {
                "showLeftContent": false,
                "showStepper": false,
                "showSubStepper": false,
                "fieldLabel": "Continue",
                "dataScopeFetchFlow": [],
                "formSubmitFlow": []
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
                "dataScopeFetchFlow": []
              },
              "CONTACT_BRANCH": {
                "showLeftContent": false,
                "showStepper": false,
                "showSubStepper": false,
                "errorCodes": {
                  "nameMatch": "We have received your Personal Loan application and look forward to seeing you at the bank soon to complete the process!"
                },
                "dataScopeFetchFlow": []
              },
              "PRODUCT_ERROR": {
                "showLeftContent": false,
                "showStepper": false,
                "showSubStepper": false,
                "errorCodes": {
                  "nameMatch": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
                },
                "dataScopeFetchFlow": []
              }
            }
          },
    };
    applicationErrorCodes = {
        LAAODTDR: {},
    };
    journeyEventCodes = {
        LAAODTDR: {
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
                    "newSubStatus": "SUB_STATUS_3",
                    "subStatusChangeDescription": "Pan Verification Successfull"
                },
            },
            'AADHAR_VERIFY': {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "Aadhaar Verification Successfull"
                },
            },
            "MORE_INFO_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_15",
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
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "Name Match Successfull"
                }
            },
            "DEDUPE_CHECK": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_6",
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
                    "newSubStatus": "SUB_STATUS_8",
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
                    "newSubStatus": "SUB_STATUS_11",
                    "subStatusChangeDescription": "Email Verification Pass"
                }
            },
            "EMAIL_FAIL": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_11",
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
                    "newSubStatus": "SUB_STATUS_17",
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
            "BSA_FETCH": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_7",
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
                    "statusToBeChanged": 'AWAITING_APPROVAL_L6',
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
            "BRE_SUCCESS_NSTP": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_4",
                    "subStatusChangeDescription": "BRE Call Success Non STP"
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
        LAAODTDR: {
            SYSTEM_DOWN: "currently our servers are down please try after some time",
            SWR: "Something Went Wrong!!",
        }
    };
    flowTags = {};
}
