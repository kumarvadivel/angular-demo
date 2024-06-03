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
        'fetchBankDetails':'fetchBankDetails'
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
        "saveOrUpdateRenewalType":"saveOrUpdateRenewalType",
    }
    commonProperty_static = commonProperty_static;
    encryptionHeaders = {
        clientApiKey: this.tenentConfiguration.clientApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    homeMenu = homeMenu
    homeBanner = homeBanner
    landingPageBanner = landingPageBanner
    ErrorCodeSubStatus = {
      "1000290":"SUB_STATUS_20"
    }
    banner = {
    '1000290': {
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
    '1000290': {
        "journeyPages": {
          "individual": [
            {
              "pageIndex": 0,
              "pageCode": "ACCOUNT_VERIFY",
              "pageName": "Account Verify",
              "lastPage": false,
              "url": "product/basicinfo/account-number-verification"
            },
            {
              "pageIndex": 1,
              "pageCode": "MORE_INFO",
              "pageName": "Personal Information",
              "lastPage": false,
              "url": "product/product-declaration/more-info",
              "resumeJourneySequences": [['INITIALIZED','SUB_STATUS_6'],['INITIALIZED','SUB_STATUS_7'],['INITIALIZED','SUB_STATUS_8'],['INITIALIZED','SUB_STATUS_14'],['INITIALIZED','SUB_STATUS_9'],['INITIALIZED','SUB_STATUS_10']]
            },
            {
              "pageIndex": 2,
              "pageCode": "DECLARATION",
              "pageName": "Declaration Page",
              "lastPage": false,
              "url": "product/consent-document/declaration",
              "resumeJourneySequences": [['INITIALIZED','SUB_STATUS_11']]
            },
            {
              "pageIndex": 3,
              "pageCode": "LOAN_SANCTION_DETAILS",
              "pageName": "Loan Sanction Details",
              "lastPage": false,
              "url": "product/custom-pages/loan-sanction",
              "resumeJourneySequences": [['INITIALIZED','SUB_STATUS_12']]
            },
            {
              "pageIndex": 4,
              "pageCode": "KEY_FACT_DETAILS",
              "pageName": "Key fact Statement",
              "lastPage": false,
              "url": "product/custom-pages/key-fact-statement",
              "resumeJourneySequences": [['AWAITING_APPROVAL_L22','SUB_STATUS_1'],['AWAITING_APPROVAL_L22','SUB_STATUS_2'],['AWAITING_APPROVAL_L22','SUB_STATUS_5'],['AWAITING_APPROVAL_L22','SUB_STATUS_6'],['AWAITING_APPROVAL_L22','SUB_STATUS_7']]
            },
            {
              "pageIndex": 5,
              "pageCode": "LOAN_SUMMARY",
              "pageName": "Loan Simmary",
              "lastPage": true,
              "url": "product/loan/summary",
              "resumeJourneySequences": [['APPROVED','SUB_STATUS_1'],['AWAITING_APPROVAL_L2','SUB_STATUS_1']]
            }
          ]
        },
        "otherPages": {
            "individual": [
                {
                    pageIndex: 0,
                    pageCode: 'PRODUCT_ERROR',
                    pageName: 'Product error',
                    status: 'INITIALIZED',
                    subStatus: ['SUB_STATUS_9'],
                    lastPage: false,
                    subStatusChangeDescription: 'Account Number Verified',
                    url: 'product/custom-information/product-error',
                    resumeJourneySequences: []
                },
            ],
            "company":[]

        }
    },
    };
    stepperData = {
      '1000290': {
          "individual": [
              {
                  "name": "Verification",
                  "info": "10MinVerifyYou",
                  "isActive": true,
                  "isCompleted": false,
                  "pageCode": "ACCOUNT_VERIFY",
              },
              {
                  "name": "Applicant Details",
                  "info": "10MinVerifyYou",
                  "isActive": false,
                  "isCompleted": false,
                  "subStep": [
                      {
                          "id": "001",
                          "isActive": false,
                          "pageCode": "MORE_INFO",
                          "name": "employment details",
                          "isCompleted": false
                      },
                      {
                        "id": "002",
                        "isActive": false,
                        "pageCode": "DECLARATION",
                        "name": "Declaration Page",
                        "isCompleted": false
                      },
                      {
                        "id": "003",
                        "isActive": false,
                        "pageCode": "LOAN_SANCTION_DETAILS",
                        "name": "Loan Sanction Page",
                        "isCompleted": false
                      },
                  ],
                  "subStepWidth": "40%"
              },
              {
                  "name": "Key fact details",
                  "info": "10MinVerifyYou",
                  "isActive": false,
                  "isCompleted": false,
              }
          ],
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
    '1000290': {
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
        1000290: [
        {
            displayType: 'bulletPointsWithPara',
            name: 'features',
            label: 'Features',
            displayData: [
                {paragraph:'Kisan Credit Card Scheme aims at providing need based and timely credit support from the banking system to farmer for their agriculture and allied activity needs as well as non-farm activities.'},
                {bullets:['Low interest charges',
                'No Hidden charges',
                'Instant disbursement']}
            ]
        },
        {
            displayType: 'bulletPoints',
            name: 'charges',
            label: 'Charges',
            displayData: [
                'Processing Charges will be 1 % of Loan Amount or minimum Rs. 2500/-'
            ]
        },
    ],
    };
    pageSectionConfig = {
        '1000290': {
            'individual': {
                "ACCOUNT_VERIFY": [
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
                              "url": 'product/basicinfo/mobile-verify?resumeJourney=true'
                          }
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
                                    "dataMasking":true,
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
                      "className": "mt-15",
                      "validateSection": true,
                      "mandatory": true,
                      "sectionContent": {
                        "config": {
                          "options": [
                            {
                              "consentType": "APIFETCH",
                              "consentCode": "DND_CONSENT_AGRI_KCC",
                              "submitConsentCodes": [
                                "DND_CONSENT_AGRI_KCC",
                                "PRIVACY_POLICY_AGRI_KCC_RENEWAL"
                              ],
                              "label": null,
                              "className": "check-container",
                              "completed": null
                            },
                            {
                              "consentType": "APIFETCH",
                              "consentCode": "BUREAU_CONSENT_KCC_RENEWAL",
                              "submitConsentCodes": [
                                "BUREAU_CONSENT_KCC_RENEWAL"
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
                "MORE_INFO": [
                    {
                      "componentType": "TITLE",
                      "className": "mb-10",
                      "sectionContent": {
                        "isShow": true,
                        "titleData": "Applicant Details"
                      }
                    },
                    {
                      "componentType": "PARAGRAPH",
                      "className": "common-info mb-10",
                      "validateSection": false,
                      "sectionContent": {
                        "isShow": true,
                        "paragraphData": "Please fill the mandatory details marked with."
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
                          "autoVerifyMappedFields": false
                        },
                        "isShow": true,
                        "mandatory": true,
                        "fields":[
                          {
                            "fieldDataType": "AADHAR",
                            "isMandatory": true,
                            "className": "mx-w100",
                            "fieldLabel": "Aadhaar Number",
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
                            "verifyDisable": false,
                            "dataMasking": true
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
                        ]
                      }  
                    },
                    {
                      "componentType": "TITLE",
                      "className": "mb-10",
                      "sectionContent": {
                        "isShow": true,
                        "titleData": "Personal Details"
                      }
                    },
                    {
                      "componentType": "PARAGRAPH",
                      "className": "common-info mb-10",
                      "validateSection": false,
                      "sectionContent": {
                        "isShow": true,
                        "paragraphData": "Please review your personal details."
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
                          "autoVerifyMappedFields": true
                        },
                        "isShow": true,
                        "mandatory": true,
                        "fields": [
                          {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
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
                            "groupName": null,
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
                            "groupName": null,
                            "groupIndex": 1,
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Enter your Last Name",
                            "fieldName": "lastName",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                          },
                          {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "Date Of Birth",
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Enter your Date of Birth",
                            "fieldName": "dateOfBirth",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                          },
                          {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "Gender",
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Enter your Gender",
                            "fieldName": "gender",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                          },
                          {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "Father/Husband Name",
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Enter your Father/Husband Name",
                            "fieldName": "borrowerDetailTextVariable6",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                          },
                          {
                            "fieldDataType": "NUMBER",
                            "isMandatory": true,
                            "fieldLabel": "Mobile number",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": null,
                            "maxLength": null,
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
                            "placeholderText": "Enter a Mobile Number",
                            "fieldName": "mobileNumber",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                          },
                        ]
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
                          "autoVerifyMappedFields": true
                        },
                        "isShow": true,
                        "mandatory": true,
                        "fields": [
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": true,
                            "fieldLabel": "Permanent Address",
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 3,
                            "placeholderText": "Enter your First Name",
                            "fieldName": "permanentAddress",
                            "labelInfo": null,
                            "showprefix": true,
                            "showLabel": true,
                            "showField": true,
                          }
                        ]  
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
                          "autoVerifyMappedFields": true
                        },
                        "isShow": true,
                        "mandatory": true,
                        "fields": [
                          {
                            "fieldDataType": "NUMBER",
                            "isMandatory": true,
                            "fieldLabel": "Agricultural Income (₹)",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 1,
                            "maxLength": 10000000,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": ['borrowerDetailNumberVariable7'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Agricultural Income (₹)",
                            "fieldName": "borrowerDetailNumberVariable5",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            "onlyNumber": true
                          },
                          {
                            "fieldDataType": "NUMBER",
                            "isMandatory": true,
                            "fieldLabel": "Other Income",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 1,
                            "maxLength": 10000000,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": ['borrowerDetailNumberVariable7'],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Other Income",
                            "fieldName": "borrowerDetailNumberVariable6",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true,
                            "onlyNumber": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Total Income",
                            "value": null,
                            "validationJson": {
                              "default":0,
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": null,
                            "fieldName": "borrowerDetailNumberVariable7",
                            "labelInfo": null,
                            "showprefix": true,
                            "showLabel": true,
                            "showField": true,
                          }
                        ]  
                      }
                    }, 
                    {
                      "componentType": "TITLE",
                      "className": "mb-10",
                      "sectionContent": {
                        "isShow": true,
                        "titleData": "Details of Existing Loan with Bank of India"
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
                          "autoVerifyMappedFields": true
                        },
                        "isShow": true,
                        "mandatory": true,
                        "fields": [
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Total Exposure in KCC",
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": null,
                            "fieldName": "loanApplicationNumberVariable36",
                            "iconName":"home-",
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
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Total Exposure in Agri Loans",
                            "fieldAccessModifier": "READ_ONLY",
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": null,
                            "fieldName": "loanApplicationNumberVariable33",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Original Sanction Date",
                            "fieldAccessModifier": "READ_ONLY",
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
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": null,
                            "fieldName": "loanApplicationDateVariable13",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Last Debt Acknowledgement Date",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": "^[1-9][0-9]{9}$",
                            "countryCode": "+91",
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": null,
                            "fieldName": "loanApplicationDateVariable7",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Last Review Date",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": "^[1-9][0-9]{9}$",
                            "countryCode": "+91",
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": null,
                            "fieldName": "loanApplicationDateVariable12",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Last Debit Balance in Account",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": "^[1-9][0-9]{9}$",
                            "countryCode": "+91",
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": null,
                            "fieldName": "loanApplicationNumberVariable34",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Principle Security Documents Executed On",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": "^[1-9][0-9]{9}$",
                            "countryCode": "+91",
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": null,
                            "fieldName": "loanApplicationDateVariable9",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                          },
                          {
                            "fieldDataType": "SECTION",
                            "isMandatory": false,
                            "fieldLabel": "Principle Security Details",
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": null,
                            "fieldName": "loanApplicationTextVariable79",
                            "labelInfo": null,
                            "showprefix": true,
                            "showLabel": true,
                            "showField": true,

                          },
                        ]
                      }
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
                                  "consentCode": "DECLARATION_KCC_RENEWAL",
                                  "submitConsentCodes": [ "DECLARATION_KCC_RENEWAL"],
                                  label: null,
                                  "className": "check-container",
                                  "completed": null,
                              },
                              ]
                          }
                      }
                  },  
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
                            "consentCode": "DISCLAIMER_AGRI_KCC_RENEWAL_1",
                            "submitConsentCodes": [
                            "DISCLAIMER_AGRI_KCC_RENEWAL_1"
                            ],
                            "label": null,
                            "className": "check-container",
                            "completed": null
                        },
                        {
                            "consentType": "APIFETCH",
                            "consentCode": "DISCLAIMER_AGRI_KCC_RENEWAL_2",
                            "submitConsentCodes": [
                            "DISCLAIMER_AGRI_KCC_RENEWAL_2"
                            ],
                            "label": null,
                            "className": "check-container",
                            "completed": null
                        },
                        {
                            "consentType": "APIFETCH",
                            "consentCode": "DISCLAIMER_AGRI_KCC_RENEWAL_3",
                            "submitConsentCodes": [
                            "DISCLAIMER_AGRI_KCC_RENEWAL_3"
                            ],
                            "label": null,
                            "className": "check-container",
                            "completed": null
                        },
                        {
                          "consentType": "APIFETCH",
                          "consentCode": "DISCLAIMER_AGRI_KCC_RENEWAL_4",
                          "submitConsentCodes": [
                          "DISCLAIMER_AGRI_KCC_RENEWAL_4"
                          ],
                          "label": null,
                          "className": "check-container",
                          "completed": null
                        },
                        {
                          "consentType": "APIFETCH",
                          "consentCode": "DISCLAIMER_AGRI_KCC_RENEWAL_5",
                          "submitConsentCodes": [
                          "DISCLAIMER_AGRI_KCC_RENEWAL_5"
                          ],
                          "label": null,
                          "className": "check-container",
                          "completed": null
                        },
                        {
                            "consentType": "APIFETCH",
                            "consentCode": "DISCLAIMER_AGRI_KCC_RENEWAL_6",
                            "submitConsentCodes": [
                            "DISCLAIMER_AGRI_KCC_RENEWAL_6",
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
                "LOAN_SANCTION_DETAILS": [
                  {
                    "componentType": "HTML_CONTENT",
                    "className": "common-info kfs-details display-flex gap-20",
                    "validateSection": false,
                    "validationJson": {
                      "content": {
                        "cat":[`<div class="card card-content left-content">
                        <div class="text-content">
                        <div><img src="/assets/icons/white-tick-stepper.png"/></div>
                            Congratulations! You are eligible for a new limit in your existing KCC account
                        </div>
                        <div class="limit-details">
                            <ul class="list-items">
                                <li class="item">
                                    <div class="eligibleLimit">
                                        <h5 class="color-grey">Eligible for New Limit</h5>
                                        <p class="f-24"><span class="color-grey">₹ </span>`,{"var":"$scope.loanDetails.loanDetails.loanApplicationNumberVariable38"},`</p>
                                        </div>
                                    </li>
                                    <li class="item">
                                        <div class="existingLimit">
                                            <h5 class="color-grey">Existing KCC Limit</h5>
                                            <p class="f-24"><span class="color-grey">₹ </span>`,{"var":"$scope.loanDetails.loanDetails.loanApplicationNumberVariable37"},`</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                          </div>
                          <div class="card card-content right-content">
                            <h5 class="color-grey">Applicant</h5>
                            <h4 class="color-black font-bold applicantName">`,{"var":"$scope.borrowerDetails.borrowerDetail.fullName"},`</h4>
                            <h5 class="color-grey">Home Branch</h5>
                            <h4 class="color-black font-bold">BOI `,{"var":"$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName"},`</h4>
                            <h5 class="color-black">`,{"var":"$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value"},",",{"var":"$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue"},",",{"var":"$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue"},",",{"var":"$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue"},`</h5>
                          </div>`]

                      }
                    },
                    "sectionContent": {
                      "isShow": true,
                      "htmlData": null
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
                                   "label": "Download Key Facts",
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
                          "paragraphData": "Please review the principle terms and disclosure of charges for availing the higher limit"
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
                            "data":  [{"cat":["₹ ",{"var":"$scope.loanDetails.loanDetails.loanApplicationNumberVariable48"}]}]
                          },
                          {
                            "title": "Other Upfront Charges (Non Refundable)",
                            "data":[{"cat":["<ul class='upFrontCharge'><li><p>Processing Fees - NIL<li><p>Personal Accident Insurance Fees - To be borne by applicant as & when debited in the account by insurance company.<li><p>Crop Insurance Fees -To be paid by applicant as & when debited in the account by insurance company.<li>Other Charges -<ol><li>Stamping charges as per state law</li><li>ATM(Debit) Card Charges-Rs.",{"var":"$scope.loanDetails.loanDetails.loanApplicationTextVariable116"},"/-plus taxes p.a</li></ol></ul>"]}]
                          },
                          {
                            "title": "Total Interest Charge During Entire Tenor Of Loan",
                            "data": [{"cat":["Total Interest charged will be based on the daily product yearly compounding at the rate of ",{"var":"$scope.loanDetails.loanDetails.interestRate"},"% p.a. For regular accounts ",{"var":"$scope.loanDetails.loanDetails.loanApplicationTextVariable117"},"% p.a will be charged asper DFS notification. Upon timely Repayment ",{"var":"$scope.loanDetails.loanDetails.loanApplicationTextVariable118"},"% prompt Repayment Incentive is available.The ROI is MCLR linked and the MCLR may be reset by bank at such intervals as it may deem fit"]}]
                          },
                          {
                            "title": "Net disbursement amount - (H)",
                            "data": [{"cat":["₹ ",{"var":"$scope.loanDetails.loanDetails.loanApplicationTextVariable119"}]}]
                          },
                          {
                            "title": "Total amount to be paid by borrower in Year1",
                            "data": "Limit amount + Interest + Other upfront charges."
                          },
                          {
                            "title": "Annual Percentage Rate",
                            "data": [{"cat":["Total Interest charged will be based on the daily product yearly compounding at the rate of ",{"var":"$scope.loanDetails.loanDetails.interestRate"},"% p.a. For regular accounts ",{"var":"$scope.loanDetails.loanDetails.loanApplicationTextVariable117"},"% p.a will be charged asper DFS notification. Upon timely Repayment ",{"var":"$scope.loanDetails.loanDetails.loanApplicationTextVariable118"},"% prompt Repayment Incentive is available.The ROI is MCLR linked and the MCLR may be reset by bank at such intervals as it may deem fit"]}]
                          },
                          {
                            "title": "Tenor of The Loan",
                            "data": "Initially for the period of 5 year, account to be renewed annually"
                          }, 
                          {
                            "title": "Repayment frequency by the Borrower",
                            "data": "Payable on demand or as per harvesting and marketing period of the crops. Each drawal to be repaid with applicable interest and other charges within two crop seasons(for short duration crops) and within one crop season(for long duration crops).Crop season will be defined as per the notification of SLBC of respective state."
                          },
                          {
                            "title":"Number of Installment of Repayment",
                            "data":"Repayable on demand"

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
                            "data": "3 days. No additional charges only interim period interest to be serviced on prepayment of loan."
                          },
                          {
                            "title":"Details of LSP Acting as Recovery Agent and Authorized to approach Applicant",
                            "data":"--"
                          },
                          {
                            "title": "Name Designation and Contact details of Nodal grievance redressal officer for any issues/complaints",
                            "data": "Name - Shri Swapnil Shaha,<br><br>Address : Digital Lending Department, BOI, Head Office,<br><br>Bank Of India Bandra Kurla Complex, Mumbai - 400051<br><br>Phone number - 022 6917 9418"
                          }
                        ]
                      }
                    }
                  },
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
                    "className": "common-info a-i-c",
                    "validationJson": {
                      "content": {
                        "cat": [
                          "<div class='kccLimitAmount'><p>KCC limit of Rs. ",
                          {
                            "var": "$scope.loanDetails.loanDetails.loanApplicationNumberVariable48"
                          },
                          " </b>in your account number <span class='f-16'>",
                          {
                            "getObjectKeyValue": [
                              {
                                "getArrayIndexValue": [
                                  {
                                    "var": "$scope.fetchBankDetails.bankDetails"
                                  },
                                  0
                                ]
                              },
                              "accountNumber"
                            ]
                          },
                          "</span> has been successfully renewed.</p></div>",
                          "<div>You can avail the disbursement through any ATM Network using our smart ATM cum debit card (Kisan Credit Card)</div>"
                        ]
                      }
                    },
                    "validateSection": false,
                    "sectionContent": {
                      "isShow": true,
                      "htmlData": "Your KCC Renewal Loan applicable with an amount of Rs. <span> class='redirectAction ml-5'>₹ </span> has been approved successfully."
                    }
                  },  
                  {
                    "componentType": 'PARAGRAPH',
                    "className": "form-label-lg mt-4",
                    "validateSection": false,
                    "validationJson": {
                        "content": {
                            "cat": [
                                "Your Application Id # ",
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
                    },
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
                 },
                 {
                  "componentType":"GRID",
                  "className":"display-flex gap-50 flex-wrap mob-gap-10 mt-20 mb-20,",
                  "validateSection":false,
                  "sectionContent":{
                      "isShow":false,
                      "items":[
                          {
                              "componentType":"BUTTON",
                              "className":"",
                              "validateSection":false,
                              "sectionContent":{
                                  "isShow":true,
                                  "label": "eSigned Application Form",
                                  "actionId": "APPLICATION_DOWNLOAD",
                                  "className": "link-btn-with-icon clr-blue",
                                  "prefixIcon": {
                                      "className": "material-symbols-outlined ",
                                      "iconName": "download"
                                  }
                              }
                          },
                          {
                              "componentType":"BUTTON",
                              "className":"",
                              "validateSection":false,
                              "sectionContent":{
                                  "isShow":true,
                                  "label": "In-principal Sanction letter",
                                  "actionId": "INPRINCIPAL_DOWNLOAD",
                                  "className": "link-btn-with-icon clr-blue",
                                  "prefixIcon": {
                                      "className": "material-symbols-outlined",
                                      "iconName": "download"
                                  }
                              }
                          }
                      ]
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
        },
        
    };
    pageMetaConfig = {
        '1000290': {
            'individual': {
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
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED[JOURNEY_EVENT_CODE]ACCOUNT_VERIFY","PRODUCT_ERROR[JOURNEY_EVENT_CODE]ACCOUNT_VERIFY_ERROR"]}
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
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.applyLoan.code"},"200"]},"SUB_STATUS_1"]}
                            ],
                            [
                              "subStatusChangeDescription",
                              "RULE_OUTPUT",
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.applyLoan.code"},"200"]},"OTP verified successfully"]}
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
                            "submitflow": "fetchAccountData",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "saveResponseToProduct": true,
                            "saveResponseToCapturedData":true,
                            "params": [
                            'access_token', 'accountNumber', 
                            ['finacleRequest', 'STATIC', 'MSME_RENEWAL'], 
                            ['microservicetoken', 'oauthAccessToken'], 
                            ['requestFor', 'STATIC', 'BORROWER'],
                            ['applicationSource', 'STATIC', 'WEB_JOURNEY']
                        ],
                            "apiError": "PRODUCT_ERROR",
                            "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PROCEED"]}
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
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.fetchAccountData.code"},"200"]},"SUB_STATUS_2","SUB_STATUS_3"]}
                            ],
                            [
                              "subStatusChangeDescription",
                              "RULE_OUTPUT",
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.fetchAccountData.code"},"200"]},"Renewal qualified","Renewal not qualified"]}
                            ]
                          ],
                          "validateResponse": {
                            "if":[
                                {
                                  "and":[
                                    {
                                      "==": [
                                        {
                                        "var": "formSubmitResponse.code"
                                        },
                                        200
                                      ]
                                      },	
                                      {
                                        "==":[
                                           {
                                              "var":"currentFormSubmitResponses.fetchAccountData.code"
                                           },
                                           "200"
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
                        {
                            "validationJson": { "if": [{ "==": [{ "checkResumeJourney": [] }, false] }, 'EXECUTE', 'NEXT'] },
                            "submitflow":"npaCheck",
                            "dataFeedCloud":['product','formValue','capturedData'],
                            "params":['access_token',"loanUuid",["custId","currentFormSubmitResponses.fetchAccountData.object.CUSTOMER_ID"],['microservicetoken','oauthAccessToken']],
                            "saveResponseToCapturedData":true,
                            "validateResponse": {"if":[{"==":[{"var":"code"},"200"]},{"if":[{"and":[{"==":[{"var":"npaFlag"},"N"]}]},"PROCEED","PROCEED"]},"PRODUCT_ERROR"]},
                            "apiError": "PRODUCT_ERROR",
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
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.npaCheck.code"},"200"]},{"if":[{"and":[{"==":[{"var":"currentFormSubmitResponses.npaCheck.npaFlag"},"N"]}]},"SUB_STATUS_4","SUB_STATUS_5"]},"SUB_STATUS_5"]}
                            ],
                            [
                              "subStatusChangeDescription",
                              "RULE_OUTPUT",
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.npaCheck.code"},"200"]},{"if":[{"and":[{"==":[{"var":"currentFormSubmitResponses.npaCheck.npaFlag"},"N"]}]},"NPA success","NPA Fail"]},"NPA Fail"]}
                            ]
                          ],
                          "validateResponse": {
                            "if":[
                                {
                                  "and":[
                                    {
                                      "==": [
                                        {
                                        "var": "formSubmitResponse.code"
                                        },
                                        200
                                      ]
                                      },	
                                      {
                                        "==":[
                                           {
                                              "var":"currentFormSubmitResponses.npaCheck.npaFlag"
                                           },
                                           "N"
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
                          "submitflow": "fetchAndValidateActiveAccounts",
                          "dataFeedCloud": [
                            "product",
                            "formValue"
                          ],
                          "apiError": "PRODUCT_ERROR",
                          "params": [
                            "access_token",
                            "loanUuid",
                            [
                              "microservicetoken",
                              "oauthAccessToken"
                            ],
                            [
                              "custId",
                              "currentFormSubmitResponses.fetchAccountData.object.CUSTOMER_ID"
                            ],
                            [
                              "finacleRequest",
                              "STATIC",
                              "KCC_RENEWAL"
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
                              {
                                "cat": [
                                  "PRODUCT_ERROR[PARAMS]errorCode=",
                                  {
                                    "var": "formSubmitResponse.message"
                                  }
                                ]
                              }
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
                              "On Submit of basic details page"
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
                        "title": "borrowerDetails.borrowerDetail.title",
                        "firstName": "borrowerDetails.borrowerDetail.firstName",
                        "lastName": "borrowerDetails.borrowerDetail.lastName",
                        "middleName": "borrowerDetails.borrowerDetail.middleName",
                        "gender": "borrowerDetails.borrowerDetail.gender",
                        "borrowerDetailTextVariable6":"borrowerDetails.borrowerDetail.borrowerDetailTextVariable6",
                        "dateOfBirth": "borrowerDetails.borrowerDetail.dateOfBirth",
                        "identityNumberTwo":"product.object.identityNumberTwo",
                        "identityNumberOne": "borrowerDetails.borrowerDetail.identityNumberOne",
                        "mobileNumber": "borrowerDetails.borrowerDetail.mobileNumber",
                        "permanentAddress":[{"cat":[{"var":"borrowerDetails.borrowerDetail.personalAddress.line1"},", ",{"var":"borrowerDetails.borrowerDetail.personalAddress.line2"},", ",{"var":"borrowerDetails.borrowerDetail.personalAddress.line3"}," ",{"var":"borrowerDetails.borrowerDetail.personalAddress.district"},", ",{"var":"borrowerDetails.borrowerDetail.personalAddress.state"},", ",{"var":"borrowerDetails.borrowerDetail.personalAddress.country"},", ",{"var":"borrowerDetails.borrowerDetail.personalAddress.zipCode"},]},{},"RULE_OUTPUT"],
                        "borrowerDetailNumberVariable5":"borrowerDetails.borrowerDetail.borrowerDetailNumberVariable5",
                        "borrowerDetailNumberVariable6":"borrowerDetails.borrowerDetail.borrowerDetailNumberVariable6",
                        "borrowerDetailNumberVariable7":"borrowerDetails.borrowerDetail.borrowerDetailNumberVariable7",
                        "loanApplicationNumberVariable36":"loanDetails.loanDetails.loanApplicationNumberVariable36",
                        "loanApplicationNumberVariable33":"loanDetails.loanDetails.loanApplicationNumberVariable33",
                        "loanApplicationDateVariable7":"loanDetails.loanDetails.loanApplicationDateVariable7",
                        "loanApplicationDateVariable12":"loanDetails.loanDetails.loanApplicationDateVariable12",
                        "loanApplicationNumberVariable34":[{"cat":[{"var":"loanDetails.loanDetails.loanApplicationNumberVariable34"}," on " ,{"var":"loanDetails.loanDetails.loanApplicationDateVariable14"},]},{},"RULE_OUTPUT"],
                        "loanApplicationDateVariable9":"loanDetails.loanDetails.loanApplicationDateVariable9",
                        "loanApplicationDateVariable13":"loanDetails.loanDetails.loanApplicationDateVariable13",
                        "loanApplicationTextVariable79":"loanDetails.loanDetails.loanApplicationTextVariable79",
                      },
                      "formSubmitFlow": [
                        {
                          "validationJson": {
                            "if": [
                              {
                                "==": [
                                  {
                                    "var": "appConfig.ispandedupe"
                                  },
                                  true
                                ]
                              },
                              "EXECUTE",
                              "NEXT"
                            ]
                          },
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
                              "SUB_STATUS_7"
                            ],
                            [
                              "subStatusChangeDescription",
                              "STATIC",
                              "aadhar verification pass"
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
                          "submitflow": "personalProfileUpdate",
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
                            ["borrowerDetailNumberVariable5","RULE_OUTPUT",{"parseInt":[{"var":"borrowerDetailNumberVariable5"}]}],
                            ["borrowerDetailNumberVariable6","RULE_OUTPUT",{"parseInt":[{"var":"borrowerDetailNumberVariable6"}]}],
                            "borrowerDetailNumberVariable7"
                          ]
                        },
                        {
                          "submitflow": "assignUserHierarchyUnit",
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
                              "userHierarchyUnitCode",
                              "product.object.accountBranchDetail.userHierarchyUnitDetails.unitCode"
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
                                    "var": "formSubmitResponse.code"
                                  },
                                  "200"
                                ]
                              },
                              "PROCEED",
                              "PRODUCT_ERROR"
                            ]
                          },
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
                              "INITIALIZED"
                            ],
                            [
                              "subStatusToBeChanged",
                              "STATIC",
                              "SUB_STATUS_14"
                            ],
                            [
                              "statusChangeDescription",
                              "STATIC",
                              "Credit bureu call"
                            ],
                            [
                              "applicationSource",
                              "STATIC",
                              "WEB_JOURNEY"
                            ]
                          ]
                        },
                        {
                          "submitflow": "cibilfetch",
                          "dataFeedCloud": [
                            "product",
                            "formValue",
                            "capturedData"
                          ],
                          "saveResponseToProduct": true,
                          "saveResponseToCapturedData": true,
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
                          "apiError": "PRODUCT_ERROR"
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
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.cibilfetch.code"},"200"]},{"if":[{"and":[{"==":[{"var":"currentFormSubmitResponses.cibilfetch.cibilCheckStatus"},"Qualified"]}]},"SUB_STATUS_9","SUB_STATUS_10"]}]}
                            ],
                            [
                              "subStatusChangeDescription",
                              "RULE_OUTPUT",
                              {"if":[{"==":[{"var":"currentFormSubmitResponses.cibilfetch.code"},"200"]},{"if":[{"and":[{"==":[{"var":"currentFormSubmitResponses.cibilfetch.cibilCheckStatus"},"Qualified"]}]},"mcp bureau check pass","mcp bureau check fail"]}]}
                            ]
                          ],
                          "validateResponse": {
                            "if":[
                                {
                                  "and":[
                                    {
                                      "==": [
                                        {
                                        "var": "formSubmitResponse.code"
                                        },
                                        200
                                      ]
                                      },	
                                      {
                                        "==":[
                                           {
                                              "var":"currentFormSubmitResponses.cibilfetch.code"
                                           },
                                           "200"
                                        ]
                                      },
                                      {"==":[{"var":"currentFormSubmitResponses.cibilfetch.cibilCheckStatus"},"Qualified"]}
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
                                      "checkResumeJourney": []
                                    },
                                    false
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
                              "SUB_STATUS_11"
                            ],
                            [
                              "subStatusChangeDescription",
                              "STATIC",
                              "Continue will land on declaration page"
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
                      ]
                },
                "DECLARATION": {
                "showLeftContent": false,
                "showSubStepper": false,
                "showStepper": true,
                "fieldLabel": "Submit",
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
                        "SUB_STATUS_12"
                      ],
                      [
                        "subStatusChangeDescription",
                        "STATIC",
                        "continue will land on checkout page"
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
                        "PROCEED[JOURNEY_EVENT_CODE]DECLARATION_SUBMIT",
                        "PRODUCT_ERROR[JOURNEY_EVENT_CODE]DECLARATION_SUBMIT_ERROR"
                      ]
                    },
                    "apiError": "PRODUCT_ERROR",
                    "validationErrorMessage": "something went wrong Please Try again!!"
                  },
                ],
                },
                "LOAN_SANCTION_DETAILS":{
                  "showLeftContent": false,
                    "showStepper": true,
                    "showSubStepper": false,
                    "fieldLabel": "Continue",
                    "DownloadKeyFact": true,
                    "DownloadMode": "API",
                    "kfsTableClassName":"kfs-table",
                    "showKccdBtnSection":true,
                    "fieldLabel1": "Proceed With New Limit",
                    "fieldLabel2": "Proceed with Existing Limit",
                    "customData": {
                        "showEsignButton": false
                    },
                    "formSubmitFlow": [
                      {
                        "submitflow":"saveOrUpdateRenewalType",
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
                          ],
                          [
                            "renewalType",
                            "kccRenewalStatus"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ],
                          [
                            "selectedModule",
                            "STATIC",
                            "Staff"
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
                            "AWAITING_APPROVAL_L22"
                          ],
                          [
                            "statusChangeDescription",
                            "STATIC",
                            "Submit Assessment"
                          ],
                          [
                            "applicationSource",
                            "STATIC",
                            "WEB_JOURNEY"
                          ]
                        ]
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
                            {"if":[{"==":[{"var":"kccRenewalStatus"},"ENHANCEMENT"]},"SUB_STATUS_1","SUB_STATUS_2"]}
                          ],
                          [
                            "subStatusChangeDescription",
                            "RULE_OUTPUT",
                            {"if":[{"==":[{"var":"kccRenewalStatus"},"ENHANCEMENT"]},"Proceed with new limit","Proceed with existing limit"]}
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
                        "submitflow":"fetchEligibiltyDetails",
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
                            "sanctionAmount",
                            "kccRenewalAmount"
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
                                  "checkResumeJourney": []
                                },
                                false
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
                            "SUB_STATUS_5"
                          ],
                          [
                            "subStatusChangeDescription",
                            "STATIC",
                            "Continue of kfs page"
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
                            "PROCEED[JOURNEY_EVENT_CODE]KFS_PAGE",
                            "PRODUCT_ERROR[JOURNEY_EVENT_CODE]KFS_PAGE_ERROR"
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
                  ]
                },
                "KEY_FACT_DETAILS": {
                  "showLeftContent": false,
                  "showStepper": true,
                  "showSubStepper": false,
                  "fieldLabel": "Continue",
                  "DownloadKeyFact": true,
                  "DownloadMode": "API",
                  "kfsTableClassName": "kfs-table",
                  "showKccdBtnSection": true,
                  "fieldLabel1": "Proceed With New Limit",
                  "fieldLabel2": "Proceed with Existing Limit",
                  "customData": {
                    "showEsignButton": false
                  },
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
                          "PROCEED[JOURNEY_EVENT_CODE]ESIGN_SUCCESS",
                          "PRODUCT_ERROR[JOURNEY_EVENT_CODE]ESIGN_FAILED"
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
                          "Esign success"
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
                          "LOAN_SUMMARY[PARAMS]esignDone=true",
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
                          "Account Creation Success"
                        ],
                        [
                          "applicationSource",
                          "STATIC",
                          "WEB_JOURNEY"
                        ]
                      ]
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
                    "rejectionView": [{
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
                    "dataScopeFetchFlow": [ 
                      {
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', ['microservicetoken', 'oauthAccessToken'],'loanUuid'],
                        "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED[JOURNEY_EVENT_CODE]CONGRATULATIONS_PAGE", "PRODUCT_ERROR[JOURNEY_EVENT_CODE]CONGRATULATIONS_PAGE_ERROR"] },
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                        "validate": { "if": [{ "==": [{ "getUrlParameter": ["esignDone"] }, "true"] }, 'EXECUTE', 'NEXT'] },
                        "fetchflow":"fetchBankDetails",
                        "delayMS":10000,
                        "retry": 7,
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token','loanUuid'],
                        "validateResponse":{"if":[{"==":[{"var":"fetchFlowResponse.code"},"200"]},{"if":[{"==":[{"var":"fetchFlowResponse.bankDetails.length"},0]},"EXECUTE_WITH_DELAY_MS","PROCEED"]},"PRODUCT_ERROR"]},
                        "apiError": "PRODUCT_ERROR"
                      },
                      {
                          "fetchflow": "borrowerDetails",
                          "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                          "params": ['access_token', 'loanUuid',["microservicetoken", "oauthAccessToken"]],
                          "validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
                          "apiError": "PRODUCT_ERROR"
                      }
                    ]
                },
                "MOBILE_VERIFY": {
                  "showLeftContent": true,
                  "showStepper": true,
                  "showSubStepper": true,
                  "formIndex": 2,
                  "mobileFieldIndex": 0,
                  "otpIndex": 3,
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
                        "params": ['access_token', 'loanUuid', ["microservicetoken","oauthAccessToken"]]
                    }
                    ]
                },

            },
        },
    };
    productDocumentList = {
        '1000290': {
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
        1000290: {
        "ACCOUNT_VERIFY":{
          "APPICE_EVENT":{
            "key":"EKCCAddBasicInfo",
            "properties": {
              "AccountnoVerify": true
            }
          }
        },  
        "ACCOUNT_VERIFY_ERROR":{
          "APPICE_EVENT":{
            "key":"EKCCAddBasicInfo",
            "properties": {
              "AccountnoVerify": false
            }
          }
        },
        "DECLARATION_SUBMIT":{
          "APPICE_EVENT":{
            "key":"EKCCDeclaration",
            "properties": {
              "Submit": true
            }
          }
        },
        "DECLARATION_SUBMIT_ERROR":{
          "APPICE_EVENT":{
            "key":"EKCCDeclaration",
            "properties": {
              "Submit": false
            }
          }
        },
        "KFS_PAGE":{
          "APPICE_EVENT": {
            "key":"EKCCLimit",
            "properties": {
              "KFS": true
            }
          }
        },
        "KFS_PAGE_ERROR":{
          "APPICE_EVENT": {
            "key":"EKCCLimit",
            "properties": {
              "KFS": false
            }
          }
        },
        "CONGRATULATIONS_PAGE":{
          "APPICE_EVENT": {
            "key": "EKCCLoanApproved",
            "properties": {
              "LoanApproved": true,
              "LoanAmount": ['fetchFlowResponse.loanDetails.loanAmount'],
              "LoanNumber":['fetchFlowResponse.loanDetails.loanId'],
              "CustomerID":['fetchFlowResponse.loanDetails.crmLeadId'],
              "LoanApprovedDate":['fetchFlowResponse.loanDetails.loanApplyDate']
            }
          }
        },
        "CONGRATULATIONS_PAGE_ERROR":{
          "APPICE_EVENT": {
            "key": "EKCCLoanApproved",
            "properties": {
              "LoanApproved": false,
              "FailureMessage":["fetchFlowResponse.code"],
            }
          }
        },
        "ESIGN_SUCCESS":{
          "key": "EKCCEsign",
          "properties":{
            "Proceed": true,
          }
        },
        "ESIGN_FAILED":{
          "subStatus": {
            "newSubStatus": "SUB_STATUS_7",
            "subStatusChangeDescription": "E-Sign Fail"
          },
          "APPICE_EVENT": {
            "key": "EKCCEsign",
            "properties": {
              "Proceed": false,
            }
          }
        }
      },
    };
    productLocalisations = {
    };
    flowTags = {};
}
