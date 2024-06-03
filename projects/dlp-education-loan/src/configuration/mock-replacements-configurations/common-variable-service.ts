import { Injectable } from '@angular/core';
import {
    AadharConsent,
    commonProperty_static,
    getHelpInfo, homeBanner,
    homeMenu, landingPageBanner,
    loanProductInfo, rejectionConsent
} from '@el-app/services/utils/data';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonVariableService {
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
    }
    isDevMode = false;
    tenentConfiguration = {
        applicationTheme: "default",
        clientApiKey_orignal: "r3hi1dBLmAfKgugG",
        clientApiKey: "defaultKey",
        landingContentView: "PRODUCT",
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
		'fetchLoanDetails': 'fetchLoanDetails',
		'updateMainLoanApplicationStatus': 'updateMainLoanApplicationStatus',
		'cibilfetch': 'fetchCibilData',
		'securityDetailsCreate': 'submitSecurityDetails',
		'fetchSecurityDetails': 'retreiveSecurityDetails',
		'ProductDetails_v3': 'fetchProductDetailInfo',
		'fetchCharges': 'fetchCharges',
		'listChecklist': 'listChecklist',
		"saveOrUpdateRenewalType": "saveOrUpdateRenewalType",
		'fetchRatingScore': 'fetchRatingScore',
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
		'fetchAndValidateActiveAccounts': 'fetchAndValidateActiveAccounts',
		'createVehicle': 'createVehicleDetails',
		'updateLoanApplication': 'updateLoanApplication',
		'updateVehicle': 'updateVehicleDetails',
		'designations': 'designations',
		'retrieve': 'retrieve',
		'borrowerExtraPropertyUpdate': 'borrowerExtraPropertyUpdate',
		'duplicateApplicationCheck': 'duplicateApplicationCheck',
		'repaymentSchedule': 'fetchRepaymentSchedule',
		'updateFacilityDetailsLoanSanction': 'updateFacilityDetailsLoanSanction',
		'saveCampaign': 'saveCampaign',
		'updateCbsDetails': 'updateCbsDetails',
		'saveAutoCreateChecklist': 'saveAutoCreateChecklist',
		'updateChecklistActivity': 'updateChecklistActivity',
		"updateCompanyProfileUpdate": "updateCompanyProfileUpdate",
		"updateLoanSanction": "updateLoanSanction",
		"updateCompanyRepresentative": "updateCompanyRepresentative"
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
		'EL': {
			individual: {
				carouselImages: [
					{
						image: 'assets/images/feedback/Landing-Loan.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/Home-Loan.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/kisan-card.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/MSME-Loan.png',
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
						image: 'assets/images/Home-Loan.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/kisan-card.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/MSME-Loan.png',
						title: '',
						description: ''
					}
				]
			},
			group: {
				carouselImages: [
					{
						image: 'assets/images/Digital-Product.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/Home-Loan.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/kisan-card.png',
						title: '',
						description: ''
					},
					{
						image: 'assets/images/MSME-Loan.png',
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
		'EDL': {
			"journeyPages": {
				"individual": [
					{
						"pageIndex": 0,
						"pageCode": "EMAIL_VERIFY",
						"pageName": "Email Verify",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": null,
						"lastPage": false,
						"url": "product/basicinfo/email-id-verification"
					},
					{
						"pageIndex": 1,
						"pageCode": "STUDENT_DETAILS",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Student Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/student-details",
					},
					{
						"pageIndex": 2,
						"pageCode": "EMPLOYMENT_DETAILS",
						"pageName": "Employment Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Employment Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/employement-details",
					},
					{
						"pageIndex": 3,
						"pageCode": "ADMISSION_DETAILS",
						"pageName": "Admission Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Admission Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/admission-details",
					},
					{
						"pageIndex": 4,
						"pageCode": "CO-APPLICANT_DETAILS",
						"pageName": "Co-Applicant Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Co-Applicant Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/coApplicant-details",
					},
					{
						"pageIndex": 5,
						"pageCode": "CO-APPLICANT_EMPLOYMENT_DETAILS",
						"pageName": "Co-Applicant Employment Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Co-Applicant Employment Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/coApplicantEmp-details",
					},
					{
						"pageIndex": 6,
						"pageCode": "DOCUMENT_UPLOAD_V2",
						"pageName": "Document Upload",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Document Upload Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/document-upload-v2",
					},
					{
						"pageIndex": 7,
						"pageCode": "COLLEGE_DETAILS",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "College Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/college-details",
					},
					{
						"pageIndex": 8,
						"pageCode": "COURSE_DETAILS",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Course Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/course-details",
					},
					{
						"pageIndex": 9,
						"pageCode": "SCHOLAR_FINANCE",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Scholar Finance Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/scholar-finance",
					},
					{
						"pageIndex": 10,
						"pageCode": "LOAN_DETAILS",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Loan Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/loan-details",
					},
					{
						"pageIndex": 11,
						"pageCode": "LOAN_SUMMARY",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Loan Summary Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/loan-summary",
					},
				],
			},
			"otherPages": {
				"individual": [
					{
						"pageIndex": 0,
						"pageCode": "EMAIL_VERIFY",
						"pageName": "Email Verify",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": null,
						"lastPage": false,
						"url": "product/basicinfo/email-id-verification"
					},
					{
						"pageIndex": 1,
						"pageCode": "STUDENT_DETAILS",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Student Details Verification Completed",
						"lastPage": false,
						"url": "",
					},

				]

			}
		},
	};
	stepperData = {
		"EDL": {
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
							"pageCode": "EMAIL_VERIFY",
							"isCompleted": false
						}
					],
					"subStepWidth": "10%"
				},
				{
					"name": "Student Details",
					"info": "10MinVerifyYou",
					"isActive": true,
					"isCompleted": false,
					"subStep": [
						{
							"id": "002",
							"isActive": false,
							"pageCode": "STUDENT_DETAILS",
							"isCompleted": false
						},
						{
							"id": "003",
							"isActive": false,
							"pageCode": "EMPLOYMENT_DETAILS",
							"isCompleted": false
						},
						{
							"id": "004",
							"isActive": false,
							"pageCode": "ADMISSION_DETAILS",
							"isCompleted": false
						}
					],
					"subStepWidth": "20%"
				},
				{
					"name": "Co-Applicant Details",
					"info": "10MinVerifyYou",
					"isActive": true,
					"isCompleted": false,
					"subStep": [
						{
							"id": "005",
							"isActive": false,
							"pageCode": "CO-APPLICANT_DETAILS",
							"isCompleted": false
						},
						{
							"id": "006",
							"isActive": false,
							"pageCode": "CO-APPLICANT_EMPLOYMENT_DETAILS",
							"isCompleted": false
						},
					],
					"subStepWidth": "20%"
				},
				{
					"name": "More Information",
					"info": "10MinVerifyYou",
					"isActive": true,
					"isCompleted": false,
					"subStep": [
						{
							"id": "007",
							"isActive": false,
							"pageCode": "COLLEGE_DETAILS",
							"isCompleted": false
						},
						{
							"id": "008",
							"isActive": false,
							"pageCode": "COURSE_DETAILS",
							"isCompleted": false
						},
						{
							"id": "007",
							"isActive": false,
							"pageCode": "SCHOLAR_FINANCE",
							"isCompleted": false
						},
						{
							"id": "009",
							"isActive": false,
							"pageCode": "LOAN_DETAILS",
							"isCompleted": false
						}
					],
					"subStepWidth": "50%"
				}
			]
		},
	};


    dynamicComponentLayout = {
		columnSize: 1,
	};

	stepper_test_data = [
		{

			"name": "Onboarding",
			"info": "10MinVerifyYou",
			"isActive": true,
			"isCompleted": true,
			"subStep": [
				{
					"id": "001",
					"name": "subStep1",
					"isActive": true,
					"isCompleted": true
				}
			],
			"subStepWidth": "10%",
		},
		{

			"name": "Student Details",
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
				},
				{
					"id": "003",
					"name": "subStep1",
					"isActive": true,
					"isCompleted": true
				},
			],
			"subStepWidth": "20%",
		},
		{

			"name": "Co-Applicant Details",
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
				},
			],
			"subStepWidth": "20%",
		},
		{

			"name": "More Information",
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
				},
				{
					"id": "003",
					"name": "subStep1",
					"isActive": true,
					"isCompleted": true
				},
				{
					"id": "004",
					"name": "subStep1",
					"isActive": true,
					"isCompleted": true
				},
			],
			"subStepWidth": "50%",
		},
	];

	verifiedFieldsData = {
		'EDL': {
			"inidividual": [
				{
					"name": "Email",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "EMAIL_VERIFY",
				},
				{
					"name": "Email",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "STUDENT_DETAILS",
				},
			]
		}
	};
	tabsData = {
		"EDL": [
			{
				displayType: "accordion",
				name: "docRequired",
				label: "Document Required",
				docReqData: {
					"Individual": [
						{
							label: "PAN Card",
							icon: "assets/icons/pan.png"
						},
						{
							label: "Aadhar Card",
							icon: "assets/icons/aadhaar.png"
						}
					]
				},
			},
			{
				displayType: "bulletPoints",
				name: "eligibility",
				label: "Eligibility",
				displayData: ["Any Resident Indian/legal Entity as permitted by RBI."],
			},
			{
				displayType: "bulletPoints",
				name: "features",
				label: "Features",
				displayData: [
					"Free Issuance of Debit Card.",
					"No Min Balance required*.",
					"Free Group Personal Accidental Death Insurance Cover*.",
					"Free Issuance of Cheque Book.",
					"Discount on Processing Charges & Rate of Interest in Retail loans*.",
					"Cash Withdrawal Limit upto Rs. 2 lakhs/day & POS transaction limit upto Rs.5 lakhs/day.",
					"Assisted ITR filing & many more!.",
				],
			},
		]
	}
	pageSectionConfig = {
		'EDL': {

			"EMAIL_VERIFY": [{
				"componentType": "TITLE",
				"className": "mb-5",
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
				"className": "medium",
				"validateSection": true,
				"mandatory": false,
				"sectionContent": {
					"options": { "columnSize": 1 },
					"isShow": true,
					"fields": [
						{

							"fieldDataType": "TEXT",
							"isMandatory": true,
							"fieldLabel": "Email Id",
							"fieldAccessModifier": "EDITABLE",
							"minLength": null,
							"maxLength": null,
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
							"labelInfo": null,
							"showLabel": true,
							"groupName": null,
							"groupIndex": null,
							"showField": true
						},
					],
					"validityEmitter": "new Subject<void>()",
					"formValueEmitter": "new Subject<void>()"
				}
			},
			{
				"componentType": "OTP",
				"validateSection": false,
				"sectionContent": {
					"fields": {
						"fieldDataType": "OTP",
						"otpType": "EMAIL", // PHONE,EMAIL,AADHAR,UDYAM,PAN,GST
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
						"infoText": "A 6 digit OTP has been sent to the above email",
					},
					"options": {
						"value": null,
						"notificationType": "COMMON_OTP_TWO",
						"loanProduct": null,
						"createBorrower": true,
						"generateOtp": true,
						"journeyEventCode": "EMAIL_VERIFY"
					}, "isShow": false,

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
					"options": { 'columnSize': 1, 'mapSupplyData': true, 'mapAndDisable': true },
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
						'requestFor': 'BORROWER',
						'journeyEventCode': 'AADHAR_VERIFY'
					}, "isShow": false,

				}
			}
			],

			//start of borrower information validation
			"STUDENT_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Student Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Let us help you find the best loan offer"
					}
				},
			],
			"EMPLOYMENT_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Student Employment Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share the students employement details"
					}
				},
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
							},
						]
					},
				}
			],
			"ADMISSION_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Admission Documents",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share details and supporting documents of the student’s admission"
					}
				},
			],
			"CO-APPLICANT_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Co-Applicant Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share details and supporting documents of the student’s admission"
					}
				},
			],
			"CO-APPLICANT_EMPLOYMENT_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Co-Applicant Employment Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share the co-applicants employment details"
					}
				},
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
			"COLLEGE_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "College Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share details about educational institution"
					}
				},
			],
			"COURSE_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Course Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share details about educational institution"
					}
				},
			],
			"SCHOLAR_FINANCE": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Scholarships & Financing",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share details about educational institution"
					}
				},
			],
			"LOAN_DETAILS": [
				{
					"componentType": "TITLE",
					"className": "mb-10",
					"mandatory": false,
					"validateSection": false,
					"sectionContent": {
						"isShow": true,
						"titleData": "Loan Details",
					}
				},
				{
					"componentType": "PARAGRAPH",
					"mandatory": false,
					"validateSection": false,
					"className": "mb-10 common-info",
					"sectionContent": {
						"isShow": true,
						"paragraphData": "Please share details about educational institution"
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
			},
			{
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
					"htmlData": "Your Educational Loan applicable with an amount of Rs. <span> class='redirectAction ml-5'>₹ </span> has been approved successfully."
				}
			},
			{
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

	};
	pageMetaConfig = {
		'EDL': {
			"individual": {
				"EMAIL_VERIFY": {
					"showLeftContent": true,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,
					"formSubmitFlow": [{
						"journeyEventCodeAfterResponseSucess": "EMAIL_VERIFY"
					}],
				},
				"STUDENT_DETAILS": {
					"showLeftContent": true,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,
					"formSubmitFlow": [{
						"journeyEventCodeAfterResponseSucess": "STUDENT_DETAILS"
					}],
				},
			}
		},
	};
	productDocumentList = {
		'EDL': {
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
		"EDL": {},
	};
	journeyEventCodes = {
		"EDL": {
			"EMAIL_VERIFY": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_1",
                    "subStatusChangeDescription": "Email ID Verification Complete"
                }
            },
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
			"EDW_STATEMENT": {
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
					"key": "OnboardUser",
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
					"key": "EAddBusinessDetails",
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
					"key": "EducationaLoan",
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
