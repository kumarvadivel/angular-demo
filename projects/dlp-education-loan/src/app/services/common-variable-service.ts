import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {
	AadharConsent, commonProperty_static,
	getHelpInfo, homeBanner,
	homeMenu, landingPageBanner,
	loanProductInfo, rejectionConsent,
} from "../services/utils/data";

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
		FETCH_PRODUCT_CONFIG_FROM_JSON_FILE: false,
		devMode: this.isDevMode,
		"encrypt-configuration": !this.isDevMode,
		"campaign_parameters": ["partner", "websiteUrl", "utm_id", "utm_source", "utm_medium", "utm_campaign", "utm_code", "offerId", "leadId", "accountId", "remarksAndSampleUrl", "utm_content", "object_type", "object_id", "utm_term"]
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
		'EDL': {
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
						"url": "product/basicinfo/email-verify"
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
						"url": "product/custom-information/employment-details",
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
						"pageName": "College Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "College Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/college-details",
					},
					{
						"pageIndex": 8,
						"pageCode": "SANCTION_DETAILS",
						"pageName": "College Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Sanction Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/sanction",
					},
					{
						"pageIndex": 9,
						"pageCode": "COURSE_DETAILS",
						"pageName": "Course Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Course Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/course-details",
					},
					{
						"pageIndex": 10,
						"pageCode": "SCHOLAR_FINANCE",
						"pageName": "Scholar Finance",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Scholar Finance Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/scholar-finance",
					},
					{
						"pageIndex": 11,
						"pageCode": "LOAN_DETAILS",
						"pageName": "Loan Details ",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Loan Details Verification Completed",
						"lastPage": false,
						"url": "product/custom-information/loan-details",
					},
					{
						"pageIndex": 12,
						"pageCode": "LOAN_SUMMARY",
						"pageName": "Loan Summary",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Loan Summary Verification Completed",
						"lastPage": false,
						"url": "product/loan/loan-summary",
						"resumeJourneySequences": [['AWAITING_APPROVAL_L7', 'SUB_STATUS_14'], ['AWAITING_APPROVAL_L7', 'SUB_STATUS_16']],
						"exitjourneyEventCode": "DOCUMENT_LIST"
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
						"pageIndex": 2,
						"pageCode": "STUDENT_DETAILS",
						"pageName": "Student Details",
						"status": "INITIALIZED",
						"subStatus": null,
						"subStatusChangeDescription": "Student Details Verification Completed",
						"lastPage": false,
						"url": "",
						"resumeJourneySequences": [['INITIALIZED', 'SUB_STATUS_2'], ['INITIALIZED', 'SUB_STATUS_3'], ['INITIALIZED', 'SUB_STATUS_22'], ['INITIALIZED', 'SUB_STATUS_23']],
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
					"name": "Student Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "STUDENT_DETAILS",
				},
				{
					"name": "Admission Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "ADMISSION_DETAILS",
				},
				{
					"name": "Co-Applicant Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "CO-APPLICANT_DETAILS",
				},
				{
					"name": "Co-Applicant Employment Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "CO-APPLICANT_EMPLOYMENT_DETAILS",
				},
				{
					"name": "Document Upload",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "DOCUMENT_UPLOAD_V2",
				},
				{
					"name": "College Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "COLLEGE_DETAILS",
				},
				{
					"name": "Course Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "COURSE_DETAILS",
				},
				{
					"name": "Scholar Finance",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "SCHOLAR_FINANCE",
				},
				{
					"name": "Loan Details",
					"info": "10MinVerifyYou",
					"isActive": false,
					"isCompleted": false,
					"pageCode": "LOAN_DETAILS",
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
			'individual': {
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Let us help you find the best loan offer"
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
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Vaibhav",
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
									"prefixfieldName": "title",
									"prefixplaceholderText": "Title"
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
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Dhondiram",
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
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Jadhav",
									"fieldName": "lastName",
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
									"options": this.commonProperty_static.GENDER,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Gender",
									"fieldName": "gender",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": false,
									"fieldLabel": "Date of Birth",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "01/04/1986",
									"fieldName": "dateOfBirth",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true,
								},
								{

									"fieldDataType": "MOBILE_NO",
									"isMandatory": false,
									"fieldLabel": "Enter Mobile number",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
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
									"placeholderText": "9876543210",
									"fieldName": "mobileNumber",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Email ID",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "",
									"fieldName": "alternativeUsername",
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
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
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "identityNumberTwo",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
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
									"Masking": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true
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
									"placeholderText": "",
									"fieldName": "differenceCommunicationAddress",
									"showLabel": false,
									"groupName": "Permanent Address ",
									"groupIndex": 11
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
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "Enter Address Line2",
									"fieldName": "personalAddress",
									"labelInfo": null,
									"showLabel": false,
									"rows": 3,
									"groupIndex": 10,
									"groupName": "Permanent Address (as Per aadhar Card)"
								},
								{
									"fieldDataType": "ADDRESS",
									"fieldLabel": "Address as per Aadhaar",
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
									"fieldName": "addressOne",
									"showLabel": false,
									"showField": true,
									"groupName": null,
									"groupIndex": 12,
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
											"placeholderText": "",
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
					},

				],
				"EMPLOYMENT_DETAILS": [
					{
						"componentType": "TITLE",
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
							"paragraphData": "Please share the students employment details"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": true,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"sendOptionKeyForDropDowns": true,
								"mapSupplyData": true,
								"mapAndDisable": true
							},
							"isShow": true,
							"fields": [{
								"fieldDataType": "DROPDOWN",
								"isMandatory": false,
								"fieldLabel": null,
								"fieldAccessModifier": "EDITABLE",
								"minLength": 0,
								"maxLength": 0,
								"error": null,
								"value": null,
								"validationJson": null,
								"rulesFor": null,
								"regex": null,
								"options": commonProperty_static.EMPLOYMENT_TYPE,
								"regexErrorMessage": null,
								"rowNo": null,
								"columnNo": null,
								"groupName": "",
								"groupIndex": 1,
								"placeholderText": "Employment Type",
								"fieldName": "",
								"labelInfo": null,
								"showLabel": true,
								"showField": true
							},]
						},
					}
				],
				"ADMISSION_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details and supporting documents of the student’s admission"
						}
					},
					{
						"componentType": "FORM",
						"className": "mb-5",
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
									"isMandatory": true,
									"fieldLabel": "Admission Status",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Admission Status",
									"fieldName": "admissionStatus",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "College Acceptance Letter",
									"fieldName": "admissionStatus",
									"groupName": "Communication Detail",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"fileDependentField": "admissionStatus",
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by college',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Eligibility Exam",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "GMAT",
									"fieldName": "eligibility",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Exam Score",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "733",
									"fieldName": "eligibility",
									"labelInfo": null,
									"showLabel": true,
									"showField": true,
								},
								{
									"columnNo": null,
									"dependentField": null,
									'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "GMAT Score Card",
									"fieldName": "eligibility",
									"groupName": "Communication Detail",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"fileDependentField": "eligibility",
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by GMAC',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Language Test",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "IELTS",
									"fieldName": "languageTest",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},

								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Test Score",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "8",
									"fieldName": "languageTest",
									"labelInfo": null,
									"showLabel": true,
									"showField": true,
								},
								{
									"columnNo": null,
									"dependentField": null,
									'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "IELTS Score Card",
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
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"fileDependentField": "languageTest",
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by The British Council, IDP and CUPA',
									"visibleInInvestorSection": false,
									"showLabel": true
								}
							]
						},
					},
					{
						"componentType": "TITLE",
						"mandatory": false,
						"validateSection": false,
						"sectionContent": {
							"isShow": true,
							"titleData": "Eligibility Documents",
						}
					},
					{
						"componentType": "PARAGRAPH",
						"mandatory": false,
						"validateSection": false,
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share original scanned documents"
						}
					},
					{
						"componentType": "FORM",
						"className": "mb-5",
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
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "Bachelor's Graduation Certificate",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by graduation university',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "12th Marksheet",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by CBSE / CISCE / State Board',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "10th Marksheet",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by CBSE / CISCE / State Board',
									"visibleInInvestorSection": false,
									"showLabel": true
								}
							]
						}
					}
				],
				"CO-APPLICANT_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details and supporting documents of the student’s admission"
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
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Name",
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
									"groupName": "",
									"groupIndex": null,
									"placeholderText": "",
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
									"prefixfieldName": "title",
									"prefixplaceholderText": "Title"
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": false,
									"fieldLabel": "Date of Birth",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "01/04/1986",
									"fieldName": "dateOfBirth",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true,
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Email ID",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "",
									"fieldName": "alternativeUsername",
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
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
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "identityNumberTwo",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Aadhar Number",
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
									"Masking": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true
								},
								{
									"fieldDataType": "RADIO",
									"isMandatory": false,
									"fieldLabel": "Gender",
									"fieldAccessModifier": "READ_ONLY",
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
									"groupName": "",
									"groupIndex": null,
									"placeholderText": "",
									"fieldName": "gender",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{

									"fieldDataType": "MOBILE_NO",
									"isMandatory": false,
									"fieldLabel": "Enter Mobile number",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
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
									"placeholderText": "",
									"fieldName": "mobileNumber",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Relationship",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": null,
									"placeholderText": "Relationship",
									"fieldName": "relationship",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
							]
						}

					},
					{
						"componentType": "TITLE",
						"mandatory": false,
						"validateSection": false,
						"sectionContent": {
							"isShow": true,
							"titleData": "Co-Applicant Address",
						}
					},
					{
						"componentType": "PARAGRAPH",
						"mandatory": false,
						"validateSection": false,
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share current address of the co-applicant"
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
									"fieldDataType": "BOOLEAN",
									"className": "mt-15",
									"fieldLabel": "Address same as Primary Applicant (Student)",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": { default: true },
									"rulesFor": ['addressOne'],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "differenceCommunicationAddress",
									"showLabel": false,
									"groupName": '',
									"groupIndex": 4,
								},

							]
						}
					}
				],
				"CO-APPLICANT_EMPLOYMENT_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share the co-applicants employment details"
						}
					},
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
									"fieldDataType": "DROPDOWN",
									"isMandatory": false,
									"fieldLabel": "Employment Type",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": ["Student", "Salaried", "Professional"],
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Salaried",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"dependentField": null,
									"isMandatory": false,
									"commonpropertyType": "",
									"fieldLabel": "Institution Type",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Private",
									"fieldName": "reason",
									"showLabel": true,
									"labelInfo": null,
									"groupName": "",
									"groupIndex": 1,
									"showField": true,
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Employee Name",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Infosys",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									"groupName": "",
								},
								{
									"fieldDataType": "DROPDOWN",
									"dependentField": null,
									"isMandatory": false,
									"commonpropertyType": "",
									"fieldLabel": "Occupation",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Engineer",
									"fieldName": "reason",
									"showLabel": true,
									"labelInfo": null,
									"groupName": "",
									"groupIndex": 1,
									"showField": true,
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": false,
									"fieldLabel": "Employed Since",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Employed Since",
									"fieldName": "employedSince",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true,
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Total Experience",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 1,
									"maxLength": 2,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "28",
									"fieldName": "Total Experience",
									"labelInfo": null,
									"showLabel": true,
									"Masking": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Net Monthly Income",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 5,
									"maxLength": 12,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "3,57,232",
									"fieldName": "Net Monthly Income",
									"labelInfo": null,
									"showLabel": true,
									"Masking": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Net Monthly Obligations",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 5,
									"maxLength": 12,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "10,000",
									"fieldName": "Net Monthly Obligations",
									"labelInfo": null,
									"showLabel": true,
									"Masking": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true
								}
							]
						},
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "College and Course details are  available",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": {
										"default": true
									},
									"rulesFor": [
										"addressOne"
									],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "CommunicationAddress",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "University",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "University of Pennsylvannia",
									"fieldName": "university",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Institution",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "The Wharton School",
									"fieldName": "institution",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Campus",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Campus",
									"fieldName": "campus",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Institution Address",
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
									"groupName": "Institution Address",
									"groupIndex": 1,
									"placeholderText": "Institution Address",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "College Account Number",
									"fieldAccessModifier": "EDITABLE",
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
									"groupIndex": 1,
									"placeholderText": "College Account Number",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "College SWIFT Code",
									"fieldAccessModifier": "EDITABLE",
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
									"groupIndex": 1,
									"placeholderText": "BOFA US 6N 228",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
							]
						}
					}
				],
				"COURSE_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
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
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Course Name",
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
									"groupName": null,
									"groupIndex": null,
									"placeholderText": "Course Name",
									"fieldName": "courseName",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": true,
									"fieldLabel": "Date of Commencement",
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
									"placeholderText": "17 Sep 2024 ",
									"fieldName": "dateOfBirth",
									"labelInfo": null,
									"showLabel": true,
									"groupName": null,
									"groupIndex": null,
									"showField": true,
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Course Category",
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
									"placeholderText": "Post-Graducation Degree",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									groupName: null
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Area of Study",
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
									"placeholderText": "Management",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									groupName: null

								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Course Duration",
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
									"placeholderText": "24 months",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									groupName: null

								},
								// TABLE
								{
									"fieldDataType": "TABLE",
									"dependentField": null,
									"isMandatory": false,
									"fieldLabel": "",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": null,
									"maxLength": 10,
									"error": null,
									"value": [],
									"rulesFor": null,
									"regex": null,
									"addMore": false,
									"addStatus": false,
									"showAction": false,
									"emitedValue": [],
									"tableFields": [
										{
											"fieldDataType": "TEXT",
											"dependentField": null,
											"isMandatory": false,
											"fieldLabel": "Item",
											"fieldAccessModifier": "EDITABLE",
											"minLength": null,
											"maxLength": null,
											"error": null,
											"value": null,
											"validationJson": null,
											"rulesFor": null,
											"options": [],
											errorIconPath: null,
											rowNo: 1,
											columnNo: 1,
											placeholderText: "",
											fieldName: "item",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
										{
											fieldDataType: "NUMBER",
											dependentField: null,
											isMandatory: false,
											fieldLabel: "Annual Budget ($)",
											fieldAccessModifier: "EDITABLE",
											minLength: null,
											maxLength: 999999,
											error: null,
											value: null,
											validationJson: null,
											rulesFor: null,
											options: [],
											errorIconPath: null,
											rowNo: 1,
											columnNo: 2,
											placeholderText: "",
											fieldName: "annualBudget",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
										{
											fieldDataType: "CHECKBOX",
											dependentField: null,
											isMandatory: false,
											fieldLabel: "Consider Towards Loan Amount",
											fieldAccessModifier: "EDITABLE",
											validatebyTableGroup: true,
											minLength: null,
											maxLength: 9999,
											error: null,
											value: null,
											validationJson: null,
											rulesFor: null,
											errorIconPath: null,
											rowNo: 1,
											columnNo: 3,
											placeholderText: "",
											fieldName: "loanAmounr",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
									],
									regexErrorMessage: null,
									errorIconPath: null,
									rowNo: null,
									columnNo: 3,
									placeholderText: "",
									fieldName: "courseExpenseStructure",
									showLabel: true,
									labelInfo: null,
									groupName: null,
									groupIndex: null,
									showField: true,
								},


							],



						},
					},
				],
				"SCHOLAR_FINANCE": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "Student has a scholarship",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": {
										"default": true
									},
									"rulesFor": [
										"addressOne"
									],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Name of Scholarship / Fellowship / Grant / Sponser",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Joseph Wharton Fellowship",
									"fieldName": "scholarship",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Amount",
									"fieldAccessModifier": "READ_ONLY",
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
									"groupIndex": 1,
									"placeholderText": "20,000",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Own Secure Financing",
									"fieldAccessModifier": "READ_ONLY",
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
									"groupIndex": 1,
									"placeholderText": "6,000",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "Third Party Financing Acceptance Letter",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by scholarship commission or sponsor',
									"visibleInInvestorSection": false,
									"showLabel": true
								}
							],
						}
					}
				],
				"LOAN_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": null,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "Secured Loan",
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
									"rowNo": 1,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "Moratium after course completion",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": {
										"default": true
									},
									"rulesFor": [
										"addressOne"
									],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": 2,
									"columnNo": null,
									"placeholderText": "Only simple interest needs to be paid",
									"fieldName": "",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},

							]
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Moratium Period",
									"fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": "",
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": '',
									"groupIndex": 1,
									"placeholderText": "12",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
							]
						}
					}
				],
				"LOAN_SUMMARY": [
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
					"componentType": "TITLE",
					"validateSection": false,
					"className": 'mt-5 d-flex align-items-center congradulation-text mb-20',
					// "validationJson": { 'content': { "cat": ["Congratulations, ", { "var": "$scope.borrowerDetails.borrowerDetail.fullName" }] } },
					"sectionContent": {
						"titleData": "Congratulations,",
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
						"htmlData": "Your MSME Renewal Loan applicable with an amount of Rs. <span> class='redirectAction ml-5'>₹ </span> has been approved successfully."
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
					// {
					// 	"componentType": "TITLE",
					// 	"validateSection": false,
					// 	"className": "' mb-0 mt-5 d-flex align-items-center'",
					// 	"content": "Dear, Applicant",
					// 	"validationJson": {
					// 		"content": {
					// 			"cat": [
					// 				"Dear, ",
					// 				{
					// 					"or": [
					// 						{
					// 							"var": "$scope.loanDetails.loanDetails.borrowerDisplayName"
					// 						},
					// 						"Applicant"
					// 					]
					// 				}
					// 			]
					// 		}
					// 	},
					// 	"sectionContent": {
					// 		"titleData": "Dear,",
					// 		"isShow": true,
					// 		"endContent": [
					// 			{
					// 				"componentType": "ICON",
					// 				"className": "'ml-10",
					// 				"sectionContent": {
					// 					"isShow": true,
					// 					"iconPath": "/assets/icons/sad.png"
					// 				}
					// 			}
					// 		]
					// 	}
					// },
					// {
					// 	"componentType": "PARAGRAPH",
					// 	"className": "text-info mt-3 f-17",
					// 	"validateSection": false,
					// 	"sectionContent": {
					// 		"isShow": true,
					// 		"paragraphData": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance"
					// 	}
					// },
					// {
					// 	"componentType": "PARAGRAPH",
					// 	"className": "form-label-lg mt-4",
					// 	"validateSection": false,
					// 	"validationJson": {
					// 		"content": {
					// 			"cat": [
					// 				"Your Lead Reference ID # ",
					// 				{
					// 					"or": [
					// 						{
					// 							"var": "$scope.loanDetails.loanDetails.crmLeadId"
					// 						},
					// 						{
					// 							"var": "$scope.loanDetails.loanDetails.loanId"
					// 						}
					// 					]
					// 				}
					// 			]
					// 		},
					// 		"showSection": {
					// 			"if": [{
					// 				"==": [{
					// 					"or": [
					// 						{
					// 							"var": "$scope.loanDetails.loanDetails.crmLeadId"
					// 						},
					// 						{
					// 							"var": "$scope.loanDetails.loanDetails.loanId"
					// 						}
					// 					]
					// 				}, null]
					// 			}, false, true]

					// 		}
					// 	},
					// 	"sectionContent": {
					// 		"isShow": true,
					// 		"paragraphData": "Your Lead Reference ID #"
					// 	}
					// }
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
                ],
			},
			'company': {
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Let us help you find the best loan offer"
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
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Vaibhav",
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
									"prefixfieldName": "title",
									"prefixplaceholderText": "Title"
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
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Dhondiram",
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
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Jadhav",
									"fieldName": "lastName",
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
									"options": this.commonProperty_static.GENDER,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"placeholderText": "Gender",
									"fieldName": "gender",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": false,
									"fieldLabel": "Date of Birth",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "01/04/1986",
									"fieldName": "dateOfBirth",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true,
								},
								{

									"fieldDataType": "MOBILE_NO",
									"isMandatory": false,
									"fieldLabel": "Enter Mobile number",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
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
									"placeholderText": "9876543210",
									"fieldName": "mobileNumber",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Email ID",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "",
									"fieldName": "alternativeUsername",
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
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
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "identityNumberTwo",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
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
									"Masking": true,
									"groupName": "Personal Details",
									"groupIndex": 1,
									"showField": true
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
									"placeholderText": "",
									"fieldName": "differenceCommunicationAddress",
									"showLabel": false,
									"groupName": "Permanent Address ",
									"groupIndex": 11
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
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "Enter Address Line2",
									"fieldName": "personalAddress",
									"labelInfo": null,
									"showLabel": false,
									"rows": 3,
									"groupIndex": 10,
									"groupName": "Permanent Address (as Per aadhar Card)"
								},
								{
									"fieldDataType": "ADDRESS",
									"fieldLabel": "Address as per Aadhaar",
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
									"fieldName": "addressOne",
									"showLabel": false,
									"showField": true,
									"groupName": null,
									"groupIndex": 12,
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
											"placeholderText": "",
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
					},

				],
				"EMPLOYMENT_DETAILS": [
					{
						"componentType": "TITLE",
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
								"mapAndDisable": true,
								"autoVerifyMappedFields": true,
								"sendOptionKeyForDropDowns": true,
                                "externalFeedDataforValidationJson": null
							},
							"isShow": true,
							"fields": [{
								"fieldDataType": "DROPDOWN",
								"isMandatory": false,
								"fieldLabel": null,
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
								"groupName": "",
								"groupIndex": 1,
								"placeholderText": "Employment Type",
								"fieldName": "",
								"labelInfo": null,
								"showLabel": true,
								"showField": true
							},]
						},
					}
				],
				"ADMISSION_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details and supporting documents of the student’s admission"
						}
					},
					{
						"componentType": "FORM",
						"className": "mb-5",
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
									"isMandatory": true,
									"fieldLabel": "Admission Status",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Admission Status",
									"fieldName": "admissionStatus",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "College Acceptance Letter",
									"fieldName": "admissionStatus",
									"groupName": "Communication Detail",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"fileDependentField": "admissionStatus",
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by college',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Eligibility Exam",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "GMAT",
									"fieldName": "eligibility",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Exam Score",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "733",
									"fieldName": "eligibility",
									"labelInfo": null,
									"showLabel": true,
									"showField": true,
								},
								{
									"columnNo": null,
									"dependentField": null,
									'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "GMAT Score Card",
									"fieldName": "eligibility",
									"groupName": "Communication Detail",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"fileDependentField": "eligibility",
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by GMAC',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Language Test",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "IELTS",
									"fieldName": "languageTest",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},

								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Test Score",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "8",
									"fieldName": "languageTest",
									"labelInfo": null,
									"showLabel": true,
									"showField": true,
								},
								{
									"columnNo": null,
									"dependentField": null,
									'commonpropertyType': 'ADDRESS_OWNERSHIP_TYPE',
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "IELTS Score Card",
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
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"fileDependentField": "languageTest",
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by The British Council, IDP and CUPA',
									"visibleInInvestorSection": false,
									"showLabel": true
								}
							]
						},
					},
					{
						"componentType": "TITLE",
						"mandatory": false,
						"validateSection": false,
						"sectionContent": {
							"isShow": true,
							"titleData": "Eligibility Documents",
						}
					},
					{
						"componentType": "PARAGRAPH",
						"mandatory": false,
						"validateSection": false,
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share original scanned documents"
						}
					},
					{
						"componentType": "FORM",
						"className": "mb-5",
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
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "Bachelor's Graduation Certificate",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by graduation university',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "12th Marksheet",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by CBSE / CISCE / State Board',
									"visibleInInvestorSection": false,
									"showLabel": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "10th Marksheet",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by CBSE / CISCE / State Board',
									"visibleInInvestorSection": false,
									"showLabel": true
								}
							]
						}
					}
				],
				"CO-APPLICANT_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details and supporting documents of the student’s admission"
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
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Name",
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
									"groupName": "",
									"groupIndex": null,
									"placeholderText": "",
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
									"prefixfieldName": "title",
									"prefixplaceholderText": "Title"
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": false,
									"fieldLabel": "Date of Birth",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "01/04/1986",
									"fieldName": "dateOfBirth",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true,
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Email ID",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "",
									"fieldName": "alternativeUsername",
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
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
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "identityNumberTwo",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Aadhar Number",
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
									"Masking": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true
								},
								{
									"fieldDataType": "RADIO",
									"isMandatory": false,
									"fieldLabel": "Gender",
									"fieldAccessModifier": "READ_ONLY",
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
									"groupName": "",
									"groupIndex": null,
									"placeholderText": "",
									"fieldName": "gender",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{

									"fieldDataType": "MOBILE_NO",
									"isMandatory": false,
									"fieldLabel": "Enter Mobile number",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
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
									"placeholderText": "",
									"fieldName": "mobileNumber",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": null,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Relationship",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": this.commonProperty_static,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": null,
									"placeholderText": "Relationship",
									"fieldName": "relationship",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
							]
						}

					},
					{
						"componentType": "TITLE",
						"mandatory": false,
						"validateSection": false,
						"sectionContent": {
							"isShow": true,
							"titleData": "Co-Applicant Address",
						}
					},
					{
						"componentType": "PARAGRAPH",
						"mandatory": false,
						"validateSection": false,
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share current address of the co-applicant"
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
									"fieldDataType": "BOOLEAN",
									"className": "mt-15",
									"fieldLabel": "Address same as Primary Applicant (Student)",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": { default: true },
									"rulesFor": ['addressOne'],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "differenceCommunicationAddress",
									"showLabel": false,
									"groupName": '',
									"groupIndex": 4,
								},

							]
						}
					}
				],
				"CO-APPLICANT_EMPLOYMENT_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share the co-applicants employment details"
						}
					},
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
									"fieldDataType": "DROPDOWN",
									"isMandatory": false,
									"fieldLabel": "Employment Type",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"options": ["Student", "Salaried", "Professional"],
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Salaried",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"dependentField": null,
									"isMandatory": false,
									"commonpropertyType": "",
									"fieldLabel": "Institution Type",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Private",
									"fieldName": "reason",
									"showLabel": true,
									"labelInfo": null,
									"groupName": "",
									"groupIndex": 1,
									"showField": true,
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Employee Name",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Infosys",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									"groupName": "",
								},
								{
									"fieldDataType": "DROPDOWN",
									"dependentField": null,
									"isMandatory": false,
									"commonpropertyType": "",
									"fieldLabel": "Occupation",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Engineer",
									"fieldName": "reason",
									"showLabel": true,
									"labelInfo": null,
									"groupName": "",
									"groupIndex": 1,
									"showField": true,
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": false,
									"fieldLabel": "Employed Since",
									"fieldAccessModifier": "READ_ONLY",
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
									"placeholderText": "Employed Since",
									"fieldName": "employedSince",
									"labelInfo": null,
									"showLabel": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true,
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Total Experience",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 1,
									"maxLength": 2,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "28",
									"fieldName": "Total Experience",
									"labelInfo": null,
									"showLabel": true,
									"Masking": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Net Monthly Income",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 5,
									"maxLength": 12,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "3,57,232",
									"fieldName": "Net Monthly Income",
									"labelInfo": null,
									"showLabel": true,
									"Masking": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": false,
									"fieldLabel": "Net Monthly Obligations",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": 5,
									"maxLength": 12,
									"error": null,
									"value": null,
									"validationJson": null,
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "10,000",
									"fieldName": "Net Monthly Obligations",
									"labelInfo": null,
									"showLabel": true,
									"Masking": true,
									"groupName": "",
									"groupIndex": 1,
									"showField": true
								}
							]
						},
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "College and Course details are  available",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": {
										"default": true
									},
									"rulesFor": [
										"addressOne"
									],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "CommunicationAddress",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "University",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "University of Pennsylvannia",
									"fieldName": "university",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Institution",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "The Wharton School",
									"fieldName": "institution",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Campus",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Campus",
									"fieldName": "campus",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Institution Address",
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
									"groupName": "Institution Address",
									"groupIndex": 1,
									"placeholderText": "Institution Address",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "College Account Number",
									"fieldAccessModifier": "EDITABLE",
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
									"groupIndex": 1,
									"placeholderText": "College Account Number",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "College SWIFT Code",
									"fieldAccessModifier": "EDITABLE",
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
									"groupIndex": 1,
									"placeholderText": "BOFA US 6N 228",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
							]
						}
					}
				],
				"COURSE_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
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
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Course Name",
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
									"groupName": null,
									"groupIndex": null,
									"placeholderText": "Course Name",
									"fieldName": "courseName",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "DATE",
									"isMandatory": true,
									"fieldLabel": "Date of Commencement",
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
									"placeholderText": "17 Sep 2024 ",
									"fieldName": "dateOfBirth",
									"labelInfo": null,
									"showLabel": true,
									"groupName": null,
									"groupIndex": null,
									"showField": true,
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Course Category",
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
									"placeholderText": "Post-Graducation Degree",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									groupName: null
								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Area of Study",
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
									"placeholderText": "Management",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									groupName: null

								},
								{
									"fieldDataType": "TEXT",
									"isMandatory": true,
									"fieldLabel": "Course Duration",
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
									"placeholderText": "24 months",
									"fieldName": "line1",
									"labelInfo": null,
									"showLabel": true,
									"rows": null,
									groupName: null

								},
								// TABLE
								{
									"fieldDataType": "TABLE",
									"dependentField": null,
									"isMandatory": false,
									"fieldLabel": "",
									"fieldAccessModifier": "READ_ONLY",
									"minLength": null,
									"maxLength": 10,
									"error": null,
									"value": [],
									"rulesFor": null,
									"regex": null,
									"addMore": false,
									"addStatus": false,
									"showAction": false,
									"emitedValue": [],
									"tableFields": [
										{
											"fieldDataType": "TEXT",
											"dependentField": null,
											"isMandatory": false,
											"fieldLabel": "Item",
											"fieldAccessModifier": "EDITABLE",
											"minLength": null,
											"maxLength": null,
											"error": null,
											"value": null,
											"validationJson": null,
											"rulesFor": null,
											"options": [],
											errorIconPath: null,
											rowNo: 1,
											columnNo: null,
											placeholderText: "",
											fieldName: "item",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
										{
											fieldDataType: "NUMBER",
											dependentField: null,
											isMandatory: false,
											fieldLabel: "Annual Budget ($)",
											fieldAccessModifier: "EDITABLE",
											minLength: null,
											maxLength: 999999,
											error: null,
											value: null,
											validationJson: null,
											rulesFor: null,
											options: [],
											errorIconPath: null,
											rowNo: 1,
											columnNo: null,
											placeholderText: "",
											fieldName: "annualBudget",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
										{
											fieldDataType: "CHECKBOX",
											dependentField: null,
											isMandatory: false,
											fieldLabel: "Consider Towards Loan Amount",
											fieldAccessModifier: "EDITABLE",
											validatebyTableGroup: true,
											minLength: null,
											maxLength: 9999,
											error: null,
											value: null,
											validationJson: null,
											rulesFor: null,
											errorIconPath: null,
											rowNo: 1,
											columnNo: null,
											placeholderText: "",
											fieldName: "loanAmounr",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
										{
											fieldDataType: "CHECKBOX",
											dependentField: null,
											isMandatory: false,
											fieldLabel: "Consider Towards Loan Amount",
											fieldAccessModifier: "EDITABLE",
											validatebyTableGroup: true,
											minLength: null,
											maxLength: 9999,
											error: null,
											value: null,
											validationJson: null,
											rulesFor: null,
											errorIconPath: null,
											rowNo: 2,
											columnNo: null,
											placeholderText: "",
											fieldName: "loanAmounr",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
										{
											fieldDataType: "CHECKBOX",
											dependentField: null,
											isMandatory: false,
											fieldLabel: "Consider Towards Loan Amount",
											fieldAccessModifier: "EDITABLE",
											validatebyTableGroup: true,
											minLength: null,
											maxLength: 9999,
											error: null,
											value: null,
											validationJson: null,
											rulesFor: null,
											errorIconPath: null,
											rowNo: 2,
											columnNo: null,
											placeholderText: "",
											fieldName: "loanAmounr",
											showLabel: true,
											labelInfo: null,
											groupName: null,
											groupIndex: 1,
											showField: true,
										},
									],
									regexErrorMessage: null,
									errorIconPath: null,
									rowNo: null,
									columnNo: null,
									placeholderText: "",
									fieldName: "courseExpenseStructure",
									showLabel: true,
									labelInfo: null,
									groupName: null,
									groupIndex: null,
									showField: true,
								},


							],



						},
					},
				],
				"SCHOLAR_FINANCE": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "Student has a scholarship",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": {
										"default": true
									},
									"rulesFor": [
										"addressOne"
									],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},
								{
									"fieldDataType": "DROPDOWN",
									"isMandatory": true,
									"fieldLabel": "Name of Scholarship / Fellowship / Grant / Sponser",
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
									"groupName": "",
									"groupIndex": 1,
									"placeholderText": "Joseph Wharton Fellowship",
									"fieldName": "scholarship",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Amount",
									"fieldAccessModifier": "READ_ONLY",
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
									"groupIndex": 1,
									"placeholderText": "20,000",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"fieldDataType": "NUMBER",
									"isMandatory": true,
									"fieldLabel": "Own Secure Financing",
									"fieldAccessModifier": "READ_ONLY",
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
									"groupIndex": 1,
									"placeholderText": "6,000",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
								{
									"columnNo": null,
									"dependentField": null,
									"fieldDataType": "DOCUMENT",
									"fieldLabel": "Third Party Financing Acceptance Letter",
									"fieldName": "eligibilityDocuments",
									"groupName": "",
									"isMandatory": true,
									"isMasking": false,
									"maxLength": null,
									"minLength": null,
									"options": [],
									"regex": null,
									"regexForJS": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"rulesFor": null,
									"showField": true,
									"groupIndex": 1,
									"documentData": {
										"documentCategoryCode": "IND_PAP"
									},
									"validationJson": null,
									"value": null,
									"visibleInAdminSection": true,
									"visibleInBorrowerSection": true,
									"visibleInDsaSection": true,
									"placeholderText": 'As shared by scholarship commission or sponsor',
									"visibleInInvestorSection": false,
									"showLabel": true
								}
							],
						}
					}
				],
				"LOAN_DETAILS": [
					{
						"componentType": "TITLE",
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
						"className": "mb-20 common-info",
						"sectionContent": {
							"isShow": true,
							"paragraphData": "Please share details about educational institution"
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": null,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "Secured Loan",
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
									"rowNo": 1,
									"columnNo": null,
									"placeholderText": "",
									"fieldName": "",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},
								{
									"fieldDataType": "BOOLEAN",
									"fieldLabel": "Moratium after course completion",
									"fieldAccessModifier": "EDITABLE",
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": "",
									"validationJson": {
										"default": true
									},
									"rulesFor": [
										"addressOne"
									],
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": 2,
									"columnNo": null,
									"placeholderText": "Only simple interest needs to be paid",
									"fieldName": "",
									"showLabel": false,
									"groupName": "",
									"groupIndex": null
								},

							]
						}
					},
					{
						"componentType": "FORM",
						"validateSection": false,
						"sectionContent": {
							"options": {
								"columnSize": 3,
								"mapSupplyData": true,
								"mapAndDisable": true,
							},
							"isShow": true,
							"fields": [
								{
									"fieldDataType": "TEXT",
									"isMandatory": false,
									"fieldLabel": "Moratium Period",
									"fieldAccessModifier": "READ_ONLY", //editable,readonly  //top,right,bottom,left
									"minLength": 6,
									"maxLength": 15,
									"error": null,
									"value": null,
									"validationJson": "",
									"rulesFor": null,
									"regex": null,
									"regexErrorMessage": null,
									"rowNo": null,
									"columnNo": null,
									"groupName": '',
									"groupIndex": 1,
									"placeholderText": "12",
									"fieldName": "",
									"labelInfo": null,
									"showLabel": true,
									"showField": true
								},
							]
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
			}
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
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,
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
						"validationJson": { "if": [{ "var": "differenceCommunicationAddress" }, 'EXECUTE', 'NEXT'] },
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
						"validationJson": { "if": [{ "var": "differenceCommunicationAddress" }, 'NEXT', 'EXECUTE'] },
						'dataFeedCloud': ['product', 'formValue', 'capturedData'],
						"apiError": "PRODUCT_ERROR",
						'validateResponse': "BRANCH_DETAILS"
					}
					],
					"dataScopeFetchFlow": [{
						"validate": { "if": [{ "==": [{ "checkNull": [{ "var": "resumeJourney" }] }, false] }, 'NEXT', 'EXECUTE'] },
						"fetchflow": "borrowerDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid']
					}]
				},
				"EMPLOYMENT_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"ADMISSION_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"CO-APPLICANT_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"CO-APPLICANT_EMPLOYMENT_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"COLLEGE_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"COURSE_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"SCHOLAR_FINANCE": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"LOAN_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"DOCUMENT_UPLOAD_V2": {
					'showLeftContent': false,
					'showStepper': true,
					'showSubStepper': false,
					'hideDocument': true,
					'fieldLabel': 'Done',
					"documentStatusCheckData": {
						"iteration": 4,
						"iterationDelay": 5
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
							"validationJson": { "if": [{ "and": [{ "==": [{ "var": "DOCUMENT_UPLOAD_V2.DOCUMENT_DATA.0.documentUploadStatus" }, "COMPLETED"] }, { "==": [{ "var": "appConfig.nameMatchForDocumentPage" }, true] }] }, "EXECUTE", "NEXT"] },
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
							"journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
							"validateResponse": {
								"if": [
									{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED",
									{ "cat": ["PRODUCT_ERROR[PARAMS]errorCode=", { "var": "formSubmitResponse.message" }] }
								]
							},
							"apiError": "PRODUCT_ERROR"
						},
						// {
						//     "submitflow":'fetchRatingScore',
						//     "dataFeedCloud":['product','formValue','capturedData'],
						//     "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
						//     "saveResponseToCapturedData":true,
						//     "validateResponse":{"if":[{"==":[{"var":"output.ratingOutput.isQualified"},'YES']},'PROCEED','PRODUCT_ERROR']},
						//     "apiError":"PRODUCT_ERROR",
						//     "journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
						// }

					],
					"dataScopeFetchFlow": [{
						"fetchflow": "borrowerDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid'],
						"apiError": "PRODUCT_ERROR",
						"validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
					}, {
						"fetchflow": "documentTypeFetch",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanPurposeUuid', ['microservicetoken', 'oauthAccessToken'], "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"], ["documentFor", "STATIC", "MAIN_APPLICANT"]],
						"apiError": "PRODUCT_ERROR",
						"validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
					},
					{
						"fetchflow": "documentFetch",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken']],
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
									//top,right,bottom,left
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
					"dataScopeFetchFlow": [{
						"fetchflow": "loanDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', ['microservicetoken', 'oauthAccessToken'], 'loanUuid'],
						"validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
						"apiError": "PRODUCT_ERROR"
					},
					{
						"fetchflow": "borrowerDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid'],
						"validateResponse": "PROCEED",
						"apiError": "PRODUCT_ERROR"
					}]
				},
				"SANCTION_DETAILS": {
                    'showLeftContent': false,
                    'showStepper': true,
                    'showSubStepper': false,
                    'fieldLabel': 'Proceed',
                    "customData": {
                        "sanctionedAmount": null,
                        "sanctionTitle": 'Maximum Loan Amount Sanctioned',
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
                                    "placeholderText": "",
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
                            fieldLabel: "Interest Amount",
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
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]}, "LOAN_SUMMARY", {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}
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
                                "ETB Sanction page submit"
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
                            "validationJson":{ "if": [{ "==": [{ "var": "fetchEligibilityData.output.plEligOutput.stpFlag" }, 'STP'] }, {"if":[{"==":[{"var":"loanDetails.loanDetails.loanApplicationStatus"},"AWAITING_APPROVAL_L6"]},"EXECUTE","NEXT"]}, 'NEXT'] },
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
                                "AWAITING_APPROVAL_L32"
                              ],
                              [
                                "subStatusToBeChanged",
                                "STATIC",
                                "SUB_STATUS_1"
                              ],
                              [
                                "statusChangeDescription",
                                "STATIC",
                                "Deviation Check"
                              ],
                              [
                                "applicationSource",
                                "STATIC",
                                "WEB_JOURNEY"
                              ]
                            ]
                          },
                        {
                            "submitflow": "sanctionUpdate",
                            "validationJson": {"if": [{"==": [{"var": "fetchEligibilityData.output.plEligOutput.stpFlag"}, 'STP']}, 'EXECUTE', 'NEXT']},
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ["skipBreValidation", "STATIC", "false"], ["loanSanctionAmount", "capturedData.SANCTION_DETAILS.loanAmount"], ["loanSanctionTextVariable7", "capturedData.SANCTION_DETAILS.tenure"], ["loanSanctionNumberVariable3", "capturedData.SANCTION_DETAILS.interest"], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ["loanSanctionTextVariable3", "capturedData.SANCTION_DETAILS.emiToBePaid"],['microservicetoken', 'oauthAccessToken']],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]}, {"if": [{"==": [{"var": "fetchEligibilityData.output.plEligOutput.stpFlag"}, 'STP']}, 'KEY_FACT_DETAILS', 'PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE']}, {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE",
                        },
                        {
                            "validationJson": {"if": [{"==": [{"var": "fetchEligibilityData.output.plEligOutput.stpFlag"}, 'NSTP']}, 'EXECUTE', 'NEXT']},
                            "submitflow": "nstpValidate",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', 'loanUuid', ["skipBreValidation", "STATIC", "false"], ['applicationSource', 'STATIC', 'WEB_JOURNEY'], ['microservicetoken', 'oauthAccessToken']],
                            "validateResponse": {"if": [{"==": [{"var": "formSubmitResponse.code"}, "200"]}, {"if": [{"==": [{"var": "fetchEligibilityData.output.plEligOutput.stpFlag"}, 'NSTP']}, 'LOAN_SUMMARY', 'PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE']}, {"cat": ["ERROR[ERROR_MESSAGE]", {"var": "formSubmitResponse.message"}]}]},
                            "apiError": "PRODUCT_ERROR[JOURNEY_EVENT_CODE]FAILURE_APPICE",
                        },
                    ],
                    "dataScopeFetchFlow": [{
                        "fetchflow": "loanDetails",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": ['access_token', 'loanUuid',[
                            "microservicetoken",
                            "oauthAccessToken"
                            ]],
                        "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.code"}, "200"]}, 'PROCEED', 'PRODUCT_ERROR']},
                        "apiError": "PRODUCT_ERROR"
                    }, {
                        "fetchflow": "fetchEligibilityData",
                        "apiError": "PRODUCT_ERROR",
                        "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                        "params": [['microservicetoken', 'oauthAccessToken'], ['applicationId', 'loanUuid'], ['txnType', 'STATIC', 'ELIGIBILITY_CHECK']],
                        "validateResponse": 'PROCEED',
                    },
                        {
                            "fetchflow": "fetchRepaymentSchedule",
                            "apiError": "PRODUCT_ERROR",
                            "dataFeedCloud": ['product', 'formValue', 'capturedData'],
                            "params": ['access_token', ['microservicetoken', 'oauthAccessToken'], ['interestRate', 'scope.fetchEligibilityData.output.plEligOutput.roi'], ['loanTenure', 'scope.fetchEligibilityData.output.plEligOutput.tenure'], ['loanAmount', 'scope.fetchEligibilityData.output.plEligOutput.sanctionedFinalAmount']],
                            "validateResponse": {"if": [{"==": [{"var": "fetchFlowResponse.code"}, "200"]}, 'PROCEED', 'PRODUCT_ERROR']}
                        }
                    ]
                },
			},
			"company": {
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
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,
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
						"validationJson": { "if": [{ "var": "differenceCommunicationAddress" }, 'EXECUTE', 'NEXT'] },
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
						"validationJson": { "if": [{ "var": "differenceCommunicationAddress" }, 'NEXT', 'EXECUTE'] },
						'dataFeedCloud': ['product', 'formValue', 'capturedData'],
						"apiError": "PRODUCT_ERROR",
						'validateResponse': "BRANCH_DETAILS"
					}
					],
					"dataScopeFetchFlow": [{
						"validate": { "if": [{ "==": [{ "checkNull": [{ "var": "resumeJourney" }] }, false] }, 'NEXT', 'EXECUTE'] },
						"fetchflow": "borrowerDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid']
					}]
				},
				"EMPLOYMENT_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"ADMISSION_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"CO-APPLICANT_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"CO-APPLICANT_EMPLOYMENT_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"COLLEGE_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"COURSE_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"SCHOLAR_FINANCE": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"LOAN_DETAILS": {
					"showLeftContent": false,
					"showStepper": true,
					"showSubStepper": true,
					"fieldLabel": "Continue",
					"buttonSkip": "Skip this Step",
					"skipPage": false,

				},
				"DOCUMENT_UPLOAD_V2": {
					'showLeftContent': false,
					'showStepper': true,
					'showSubStepper': false,
					'hideDocument': true,
					'fieldLabel': 'Done',
					"documentStatusCheckData": {
						"iteration": 4,
						"iterationDelay": 5
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
							"validationJson": { "if": [{ "and": [{ "==": [{ "var": "DOCUMENT_UPLOAD_V2.DOCUMENT_DATA.0.documentUploadStatus" }, "COMPLETED"] }, { "==": [{ "var": "appConfig.nameMatchForDocumentPage" }, true] }] }, "EXECUTE", "NEXT"] },
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
							"journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
							"validateResponse": {
								"if": [
									{ "==": [{ "var": "formSubmitResponse.code" }, "200"] }, "PROCEED",
									{ "cat": ["PRODUCT_ERROR[PARAMS]errorCode=", { "var": "formSubmitResponse.message" }] }
								]
							},
							"apiError": "PRODUCT_ERROR"
						},
						// {
						//     "submitflow":'fetchRatingScore',
						//     "dataFeedCloud":['product','formValue','capturedData'],
						//     "params":['access_token',['applicationId','loanUuid'],['microservicetoken','oauthAccessToken']],
						//     "saveResponseToCapturedData":true,
						//     "validateResponse":{"if":[{"==":[{"var":"output.ratingOutput.isQualified"},'YES']},'PROCEED','PRODUCT_ERROR']},
						//     "apiError":"PRODUCT_ERROR",
						//     "journeyEventCodeAfterResponseSucess": "DOCUMENT_UPLOAD_V2",
						// }

					],
					"dataScopeFetchFlow": [{
						"fetchflow": "borrowerDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid'],
						"apiError": "PRODUCT_ERROR",
						"validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
					}, {
						"fetchflow": "documentTypeFetch",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanPurposeUuid', ['microservicetoken', 'oauthAccessToken'], "loanUuid", ["applicationSource", "STATIC", "WEB_JOURNEY"], ["documentFor", "STATIC", "MAIN_APPLICANT"]],
						"apiError": "PRODUCT_ERROR",
						"validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] }
					},
					{
						"fetchflow": "documentFetch",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid', ['microservicetoken', 'oauthAccessToken']],
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
									//top,right,bottom,left
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
					"dataScopeFetchFlow": [{
						"fetchflow": "loanDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', ['microservicetoken', 'oauthAccessToken'], 'loanUuid'],
						"validateResponse": { "if": [{ "==": [{ "var": "fetchFlowResponse.code" }, "200"] }, "PROCEED", "PRODUCT_ERROR"] },
						"apiError": "PRODUCT_ERROR"
					},
					{
						"fetchflow": "borrowerDetails",
						"dataFeedCloud": ['product', 'formValue', 'capturedData'],
						"params": ['access_token', 'loanUuid'],
						"validateResponse": "PROCEED",
						"apiError": "PRODUCT_ERROR"
					}]
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
		EDL: {
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
					"key": "EDLOnboardUser",
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
					"key": "EDLAddBusinessDetails",
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
			},
			"SANCTION_DETAILS_COMPLETE": {
                "subStatus": {
                    "newSubStatus": "SUB_STATUS_5",
                    "subStatusChangeDescription": "ETB Sanction page"
                },
            },
		},
	};

	productLocalisations = {
	};

	flowTags = {};
}