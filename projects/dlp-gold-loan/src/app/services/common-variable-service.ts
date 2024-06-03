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

  loanAndTenureMap = {
    OTHER_THAN_AGRICULTURE: "Other Than Agriculture",
    AGRICULTURE: "Agriculture",
    UPTO_1_YEAR: "Upto 1 Year",
    MORE_THAN_1_YEAR: "More Than 1 Year",
  };

  static_commonProperty_KeyCodes = [
    "HOME_BRANCH_STATE",
    "HOME_BRANCH_DISTRICT",
    "HOME_BRANCH_CITY",
    "HOME_BRANCH_NAME",
    "STAR_GOLD",
    "LOAN_PROGRAM",
    "GOLD_PURPOSE_OF_ADVANCE",
    "PINCODE",
    "PINCODE_STATE",
    "PINCODE_CITY",
    "DOCUMENT_TYPE",
    "GST_SEARCH",
  ];
  commonProperty_static = {
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
    LA77: {
      individual: {
        carouselImages: [
          {
            image: "assets/images/Agri-goldLoan.webp",
            title: "",
            description: "",
          },
        ],
      },
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
      url: "/core/saving-account/product-description",
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
      id: "kcc-loan",
      image: "assets/icons/loan3.png",
      name: "KCC Loan",
      info: " Getting a Credit Card is just a few clicks away! ",
      color: "#297F87",
      isActive: true,
      url: "product/basicinfo/customer-type",
      productCode: "LA763",
      productType: "KCC_LOAN",
      isCbsFields_ShowAndHide: false,
    },
    // {
    //     id: 'home-loan',
    //     image: 'assets/icons/loan6.png',
    // info: 'Home Loan ! Apply Now',
    // color: '#FF6B6B',
    // isActive: false,
    // url: 'product/basicinfo/customer-type',
    // showDescription : false,
    // productCode:'HML',
    // productType:'HOME_LOAN'
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
      code: "LA77",
      image: "assets/icons/loan4.png",
      name: "Agri Gold Loan",
      info: "Use Gold to unlock your Golden Future! Apply Now!",
      color: "#7C83FD",
      isActive: true,
      navigateToMicroserviceUrl: "gold-loan",
      configKey: "is_gl_enabled",
      isMicroService: true,
      navigateUrl: "/gold-loan/",
      url: "product/basicinfo/mobile-verify",
      showDescription: true,
      productCode: "LA77",
      productType: "GOLD_LOAN",
    },
    {
      id: "current-account",
      image: "assets/icons/loan1.png",
      name: "Current Account",
      info: "Open a Current Bank Account online in a jiffy",
      color: "#197DFC",
      isActive: true,
      url: "/core/current-account/product-description",
      basePath: "current-account",
      showDescription: true,
      productCode: "CA",
      productType: "CURRENT_ACCOUNT",
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

  AadharConsent = [
    {
      componentType: "PARAGRAPH",
      mandatory: false,
      className: "title-wrapper",
      validateSection: false,
      sectionContent: {
        isShow: true,
        paragraphData: "Kindly Read and Submit The Consent",
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
              consentType: "STATIC", //STATIC,APIFETCH
              consentCode: null,
              submitConsentCodes: [],
              label:
                "I hereby provide my voluntary consent to bank of india to use the Aadhar details provided by me for authentication and agree to terms and conditions related to Aadhar consent and updation",
              isMultiLabel: true,
              completed: null,
            },
            {
              consentType: "STATIC", //STATIC,APIFETCH
              consentCode: null,
              submitConsentCodes: ["DND_Consent", "Privacy_Policy_SBA"],
              label:
                "a.I am aware that there are various alternate actions provideed by Bank of establishing my identity address proof for opening a Credit Card and agree to confirm that for opening the online Credit Card variant i.e the Credit Card. i hereby also agree with the below terms pertaining to Aadhar based authentication/verification.I have been informed that (a)upon authentication. UDAI share",
              isMultiLabel: true,
              completed: null,
            },
          ],
        },
      },
    },
  ];

  breadCrumbList = [
    {
      name: "home",
      label: "Home",
      url: "/core/home",
      isActive: true,
    },
    // {
    //     name: 'trackStatus',
    //     label:'Track Status',
    //     url: '/core/home',
    //     isActive: false
    //   },
    {
      name: "products",
      label: "Products",
      url: "/core/home",
      isActive: true,
    },
    {
      name: "savingsAccount",
      label: "Savings Account",
      url: "core/savings-account/product-description",
      isActive: false,
    },
  ];
  /*product desc page jsons*/
  productDesc = {};

  productDescInfoTabs = {};

  stepperData = {
    LA77: {
      individual: [
        {
          name: "basicInfo",
          info: "10MinVerifyYou",
          isActive: true,
          isCompleted: false,
          subStep: [
            {
              id: "001",
              pageCode: "ACCOUNT_VERIFY",
              isActive: false,
              name: "Account Verify",
              isCompleted: false,
            },
            {
              id: "002",
              pageCode: "PAN_VERIFY",
              name: "Pan Number",
              isActive: false,
              isCompleted: false,
            },
            {
              id: "003",
              pageCode: "EKYC_VERIFY",
              name: "Aadhar Number",
              isActive: false,
              isCompleted: false,
            },
            {
              id: "004",
              pageCode: "UDYAM_VERIFY",
              name: "Udyam Verify",
              isActive: false,
              isCompleted: false,
            },
            {
              id: "005",
              pageCode: "MORE_INFO",
              name: "More Information",
              isActive: false,
              isCompleted: false,
            },
          ],
        },
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
    LA77: {
      individual: [
        {
          name: "Mobile Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "ACCOUNT_VERIFY",
        },
        {
          name: "Pan Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "PAN_VERIFY",
        },
        {
          name: "Aadhar Number",
          info: "10MinVerifyYou",
          isActive: false,
          isCompleted: false,
          pageCode: "EKYC_VERIFY",
        },
      ],
    },
  };

  tabsData = {
    LA77: [
      {
        displayType: "accordion",
        name: "docRequired",
        label: "Document Required",
        docReqData: {
          Individual: [
            {
              name: "idproof",
              label: "Individual",
              data: [
                {
                  label: "Pan Card",
                  icon: "assets/icons/pan.png",
                },
                {
                  label: "Aadhar Card",
                  icon: "assets/icons/aadhaar.png",
                },
              ],
            },
            {
              name: "addressproof ",
              label: "Sole Proprietorship",
              data: [
                {
                  label: "Pan Card",
                  icon: "assets/icons/pan.png",
                },
                {
                  label: "Udyam Registration",
                  icon: "assets/icons/file_black.png",
                },
              ],
            },
          ],
          "Sole Proprietorship": [
            {
              name: "idproof",
              label: "Individual",
              data: [
                {
                  label: "Pan Card",
                  icon: "assets/icons/pan.png",
                },
                {
                  label: "Aadhar Card",
                  icon: "assets/icons/aadhaar.png",
                },
              ],
            },
            {
              name: "addressproof ",
              label: "Sole Proprietorship",
              data: [
                {
                  label: "Pan Card",
                  icon: "assets/icons/pan.png",
                },
                {
                  label: "Udyam Registration",
                  icon: "assets/icons/file_black.png",
                },
              ],
            },
          ],
        },
      },
      {
        displayType: "bulletPoints",
        name: "charges",
        label: "Features",
        displayData: [
          "Quick loan and prompt delivery.",
          "Low processing charges.",
          "No prepayment and other charges.",
          "Lowest Rate of interest.",
          "Maximum loan per gram/carat.",
          "Demand loan & Overdraft facility available.",
        ],
      },
      {
        displayType: "bulletPoints",
        name: "charges",
        label: "Type of Products",
        displayData: [
          {
            listItem: "For Agriculture and Allied activities",
            subList: [
              "Star Gold Agriculture Multipurpose loan",
              "Star Gold agriculture overdraft",
            ],
          },
          {
            listItem: "For Business Related",
            subList: [
              "Star Gold MSME and OPS Loan",
              "Star Gold MSME Overdraft",
            ],
          },
          {
            listItem: "For Personal Needs",
            subList: [
              "Star Gold Personal Loan",
              "Star Gold Personal Overdraft",
            ],
          },
        ],
      },
    ],
  };


  pageSequenceData = {
    LA77: {
      journeyPages: {
        individual: [
          {
            pageIndex: 1,
            pageCode: "ACCOUNT_VERIFY",
            pageName: "account Verify",
            status: "INITIALIZED",
            subStatus: "SUB_STATUS_1",
            subStatusChangeDescription: "Account Number Verified",
            lastPage: false,
            url: "basicinfo/account-verify",
            resumeJourneySequences: [],
          },
          {
            pageIndex: 2,
            pageCode: "EKYC_VERIFY",
            pageName: "Aadhar Verify",
            status: "INITIALIZED",
            subStatus: "SUB_STATUS_3",
            lastPage: false,
            subStatusChangeDescription: "Aadhar Verification",
            url: "basicinfo/kyc-verify",
            resumeJourneySequences: [
              ["INITIALIZED", "SUB_STATUS_1"],
              ["INITIALIZED", "SUB_STATUS_5"],
            ],
          },
          {
            pageIndex: 3,
            pageCode: "MORE_INFO",
            pageName: "More Information",
            status: "INITIALIZED",
            subStatus: [
              {
                subStatus: "SUB_STATUS_4",
                subStatusChangeDescription: "Personal Details Completed",
              },
              {
                subStatus: "SUB_STATUS_5",
                subStatusChangeDescription: "Account Creation Complete",
              },
            ],
            subStatusChangeDescription: "Applicant Details Complete",
            lastPage: false,
            url: "product-declaration/more-info",
            resumeJourneySequences: [["INITIALIZED", "SUB_STATUS_3"]],
          },
          {
            pageIndex: 4,
            pageCode: "LOAN_SUMMARY",
            pageName: "Personal Information",
            status: "INITIALIZED",
            subStatus: "SUB_STATUS_4",
            subStatusChangeDescription: "Aadhaar Verification Completed",
            lastPage: false,
            url: "loan/summary",
            resumeJourneySequences: [["INITIALIZED", "SUB_STATUS_4"]],
          },
        ],
      },
      otherPages: {
        individual: [
          {
            pageIndex: 1,
            pageCode: "PAN_VERIFY",
            pageName: "Pan Verify",
            url: "basicinfo/pan-verify",
            "validateBeforeNextPage": {
              "navigate": {
                "if": [
                  {
                    "==": [
                      {
                        "var": "capturedData.panData.isETB"
                      },
                      true
                    ]
                  },
                  "UDYAM_VERIFY",
                  "UDYAM_VERIFY"
                ]
              }
            },
            resumeJourneySequences: [],
          },
          {
            pageIndex: 1,
            pageCode: "PRODUCT_ERROR",
            pageName: "Pan Verify",
            url: "custom-information/product-error",
            resumeJourneySequences: [],
          },
          {
            pageIndex: 5,
            pageCode: "UDYAM_VERIFY",
            pageName: "Udyam Verify",
            status: "INITIALIZED",
            subStatus: "SUB_STATUS_7",
            subStatusChangeDescription: "Udyam Verification Completed",
            lastPage: false,
            "validateBeforeNextPage": {
              "navigate": "MORE_INFO"
            },
            url: "basicinfo/udyam-verify",
            resumeJourneySequences: [],
          },
        ],
      },
    },
  };

  pageSectionConfig = {
    LA77: {
      individual: {
        "ACCOUNT_VERIFY": [
          {
            "componentType": "PARAGRAPH",
            "validateSection": false,
            "mandatory": false,
            "className": "common-info mb-10",
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
            "validateSection": false,
            "mandatory": false,
            "className": "mb-1",
            "sectionContent": {
              "isShow": true,
              "titleData": "Account Number Verification"
            }
          },
          {
            "validateSection": false,
            "mandatory": false,
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
            "sectionContent": {
              "isShow": true,
              "paragraphData": "Please, provide your Account Number to get started.",
            },
          },

          {
            "componentType": "FORM",
            "validateSection": true,
            "mandatory": true,
            "className": "large",
            "sectionContent": {
              "options": { 'columnSize': 2 },
              "isShow": true,
              "fields": [
                {
                  fieldDataType: "DROPDOWN",
                  dependentField: null,
                  isMandatory: true,
                  commonpropertyType: "BORROWER_PROFILE_VARIABLE5",
                  fieldLabel: "Constitution",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: 1,
                  columnNo: 1,
                  placeholderText: "Select Constitution",
                  fieldName: "constitution",
                  showLabel: true,
                  labelInfo: null,
                  groupName: null,
                  groupIndex: 1,
                  showField: true,
                },
                {
                  fieldDataType: "DROPDOWN",
                  isMandatory: true,
                  fieldLabel: "Variant",
                  dependentField: null,
                  commonpropertyType: "LOAN_PROGRAM",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  rowNo: 1,
                  columnNo: 2,
                  groupName: "",
                  groupIndex: 1,
                  placeholderText: "Products",
                  fieldName: "borrowerEmploymentHistoryTextVariable1",
                  labelInfo: "Kindly select relevant product",
                  showLabel: true,
                  showField: true,
                },
                {

                  "fieldDataType": "NUMBER",
                  "Masking": true,
                  "isMandatory": true,
                  "fieldLabel": "Enter your Account Number",
                  "fieldAccessModifier": "EDITABLE", //editable,readonly  //top,right,bottom,left
                  "minLength": 0,
                  "maxLength": 999999999999999,
                  "error": null,
                  "value": null,
                  "dataMasking":true,
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "",
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "isAccountNumber": true,
                  "placeholderText": "Enter 15 digit Account Number",
                  "fieldName": "accountNumber",
                  "labelInfo": null,
                  "showLabel": true,
                    groupName: "",
                    groupIndex: 1,
                  "showField": true,
                  "onlyNumber": true
                },
                {
                  "fieldDataType": "RADIO",
                  "isMandatory": false,
                  "fieldLabel": "Is 9999999 your Mobile Number?",
                  "fieldAccessModifier": "EDITABLE",  //top,right,bottom,left
                  "minLength": null,
                  "maxLength": null,
                  "error": null,
                  "value": null,
                  "radioGroupOrientation": "HORIZONTAL", //"VERTICAL", "HORIZONTAL"
                  "options": this.commonProperty_static.YESNO,
                  "validationJson": null,
                  "regex": null,
                  "regexErrorMessage": null,
                  "rowNo": null,
                  "columnNo": null,
                  "fieldName": "mobileConsent",
                  "placeholderText": "xx x  xxxxx",
                  "labelInfo": null,
                  "showLabel": true,
                  groupName: "",
                  groupIndex: 2,
                  "showField": false
                },
              ],
            }
          },
          {
            componentType: "CONSENT",
            validateSection: true,
            className: "mt-5 consent-text",
            sectionContent: {
              config: {
                options: [
                  {
                    consentType: "APIFETCH",
                    consentCode: "DND_Consent_AGRI",
                    submitConsentCodes: ["DND_Consent_AGRI"],
                    label: null,
                    className: "check-container",
                    completed: null,
                  },
                ],
              },
              isShow: true,
              showField: true,
            },
          },
          {
            "componentType": "PARAGRAPH",
            "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
            "validateSection": false,
            "sectionContent": {
              "paragraphData": "A 6 digit OTP has been sent to the above Mobile Number.",
              "isShow": false
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
        MOBILE_VERIFY: [
          {
            componentType: "PARAGRAPH",
            validateSection: false,
            mandatory: false,
            isShow: false,
            className: "common-info mt-5 p-50",
            sectionContent: {
              isShow: true,
              endLinks: [
                {
                  label: "Resume your Application",
                  linkType: "REDIRECT",
                  url: "basicinfo/mobile-verify?resumeJourney=true",
                },
              ],
              paragraphData: "Already Applied?",
              subContent: "Resume your Application",
            },
          },
          {
            componentType: "TITLE",
            mandatory: false,
            className: "common-title mt-10",
            validateSection: false,
            sectionContent: {
              isShow: true,
              titleData: "Welcome!",
            },
          },
          {
            componentType: "FORM",
            validateSection: true,
            mandatory: true,
            className: "large",
            sectionContent: {
              options: {
                columnSize: 2,
              },
              isShow: true,
              fields: [
                {
                  fieldDataType: "DROPDOWN",
                  dependentField: null,
                  isMandatory: true,
                  commonpropertyType: "BORROWER_PROFILE_VARIABLE5",
                  fieldLabel: "Constitution",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: 1,
                  columnNo: 1,
                  placeholderText: "Select Constitution",
                  fieldName: "constitution",
                  showLabel: true,
                  labelInfo: null,
                  groupName: null,
                  groupIndex: 1,
                  showField: true,
                },
                {
                  fieldDataType: "DROPDOWN",
                  isMandatory: true,
                  fieldLabel: "Product",
                  dependentField: "constitution",
                  commonpropertyType: "STAR_GOLD",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  rowNo: 1,
                  columnNo: 2,
                  groupName: "",
                  groupIndex: 1,
                  placeholderText: "Products",
                  fieldName: "borrowerEmploymentHistoryTextVariable1",
                  labelInfo: "Kindly select relevant product",
                  showLabel: true,
                  showField: true,
                },
                {
                  fieldDataType: "MOBILE_NO",
                  isMandatory: true,
                  fieldLabel: "Enter Mobile number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 10,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: "^[1-9][0-9]{9}$",
                  countryCode: "+91",
                  regexErrorMessage: null,
                  rowNo: 1,
                  columnNo: 2,
                  "dataMasking":true,
                  placeholderText: "Enter 10 digit Mobile Number",
                  fieldName: "mobileNumber",
                  labelInfo: null,
                  showLabel: true,
                  groupName: null,
                  groupIndex: 1,
                  showField: true,
                },
              ],
            },
          },
          {
            componentType: "PARAGRAPH",
            validateSection: false,
            sectionName: "hideOtpView",
            mandatory: false,
            className: "text-info p-50  medium mb-20",
            sectionContent: {
              isShow: true,
              paragraphData:
                "Please provide your mobile number to get started. We recommend providing mobile no registered with Aadhaar for quicker processing of your application",
            },
          },
          {
            componentType: "CONSENT",
            validateSection: true,
            className: "mt-5 consent-text",
            sectionContent: {
              config: {
                options: [
                  {
                    consentType: "APIFETCH",
                    consentCode: "DND_Consent_AGRI",
                    submitConsentCodes: ["DND_Consent_AGRI"],
                    label: null,
                    className: "check-container",
                    completed: null,
                  },
                ],
              },
              isShow: true,
              showField: true,
            },
          },
          {
            componentType: "OTP",
            sectionContent: {
              fields: {
                fieldDataType: "OTP",
                otpType: "MOBILE",
                isMandatory: true,
                fieldLabel: "Enter Mobile OTP",
                fieldAccessModifier: "EDITABLE",
                minLength: 6,
                maxLength: 15,
                length: 6,
                error: null,
                value: null,
                validationJson: null,
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: null,
                groupIndex: null,
                placeholderText: "xx x  xxxxx",
                fieldName: "accountNo",
                labelInfo: "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                showLabel: true,
                showField: true,
                OtpMasking: true,
                otpDataType: "NUMBER",
                otpAttempts: 3,
                waitTimeInSeconds: 60,
                infoText: "A 6 digit OTP has been sent to the above number",
              },
              options: {
                value: null,
                notificationType: "COMMON_OTP_TWO",
                loanProduct: null,
                createBorrower: true,
                generateOtp: true,
              },
              isShow: false,
            },
          },
        ],
        PRODUCT_ERROR: [
          {
            componentType: "TITLE",
            validateSection: false,
            validationJson: {
              content: {
                cat: [
                  "Dear, ",
                  {
                    or: [
                      {
                        var: "$scope.loanDetails.loanDetails.borrowerDisplayName",
                      },
                      "Applicant",
                    ],
                  },
                ],
              },
            },
            className: " mb-0 mt-5 d-flex align-items-center",
            sectionContent: {
              titleData: "Dear,",
              isShow: true,
              endContent: [
                {
                  componentType: "ICON",
                  className: "ml-10",
                  sectionContent: {
                    isShow: true,
                    iconPath: "/assets/icons/sad.png",
                  },
                },
              ],
            },
          },
          {
            componentType: "PARAGRAPH",
            className: "text-info mt-3 f-17",
            validateSection: false,
            sectionContent: {
              isShow: true,
              paragraphData:
                "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance",
            },
          },
          {
            componentType: "PARAGRAPH",
            className: "form-label-lg mt-4",
            validateSection: false,
            validationJson: {
              content: {
                cat: [
                  "Your Lead Reference ID # ",
                  {
                    or: [
                      {
                        var: "$scope.loanDetails.loanDetails.crmLeadId",
                      },
                      {
                        var: "$scope.loanDetails.loanDetails.loanId",
                      },
                    ],
                  },
                ],
              },
              showSection: {
                if: [
                  {
                    "==": [
                      {
                        or: [
                          {
                            var: "$scope.loanDetails.loanDetails.crmLeadId",
                          },
                          {
                            var: "$scope.loanDetails.loanDetails.loanId",
                          },
                        ],
                      },
                      null,
                    ],
                  },
                  false,
                  true,
                ],
              },
            },
            sectionContent: {
              isShow: true,
              paragraphData: "Your Lead Reference ID #",
            },
          },
        ],
        PAN_VERIFY:[
          {
            "componentType": "TITLE",
            "className": "mb-5",
            "sectionContent": {
              "titleData": "Enter Your PAN Detail",
              "isShow": true
            }
          },
          {
            "componentType": "FORM",
            "className": "mt-10 medium pan w-75 mob-w-100",
            "validateSection": true,
            "sectionContent": {
              "options": {
                "columnSize": 2,
                "journeyEventCode": "PAN_VERIFY",
                "mapSupplyData": true,
                "mapAndDisable": true
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
                  "validationJson": null,
                  "rulesFor": null,
                  "regex": "[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$",
                  "dataMasking": true,
                  "regexErrorMessage": null,
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
        UDYAM_VERIFY: [
          {
            componentType: "TITLE",
            classNames: "mb-1",
            validateSection: false,
            mandatory: false,
            sectionContent: {
              titleData: "Udyam Registration Verification",
              isShow: true,
            },
          },
          {
            componentType: "FORM",
            className: "medium mt-10",
            validateSection: true,
            mandatory: true,
            sectionContent: {
              options: {
                columnSize: 1,
                journeyEventCode: "UDYAM_VERIFY",
                mapSupplyData:true,
                mapAndDisable:true
              },
              isShow: true,
              fields: [
                {
                  fieldDataType: "TEXT",
                  isMandatory: true,
                  fieldLabel: "Udyam Registration Number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 19,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: "(UDYAM-)([A-Z]{2}-)([0-9]{2}-)([0-9]{7})",
                  regexErrorMessage:
                    'Udyam Registration Number should be as per format "UDYAM-AA-00-0000000".',
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "UDYAM-XX-XX-XXXXXXX",
                  fieldName: "textVariable3",
                  udyamHyphen: true,
                  upperCase: true,
                  labelInfo: null,
                  showLabel: true,
                  groupName: null,
                  groupIndex: null,
                  showField: true,
                },
              ],
            },
          },
        ],
        EKYC_VERIFY: [
          {
            componentType: "TITLE",
            mandatory: false,
            className: "common-title mb-10",
            validateSection: false,
            sectionContent: {
              isShow: true,
              titleData: "KYC Aadhaar Verification",
            },
          },
          {
            componentType: "FORM",
            className: "mt-10 medium",
            validateSection: true,
            sectionContent: {
              options: {
                columnSize: 1,
                mapSupplyData:true,
                mapAndDisable:true
              },
              isShow: true,
              fields: [
                {
                  fieldDataType: "AADHAR",
                  isMandatory: true,
                  fieldLabel: "Enter Your Aadhaar Number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "xx x  xxxxx",
                  fieldName: "identityNumberOne",
                  labelInfo: null,
                  showLabel: true,
                  Masking: true,
                  groupName: null,
                  groupIndex: null,
                  showField: true,
                },
              ],
            },
          },
          {
            componentType: "CONSENT",
            validateSection: true,
            className: "check-container list-none side-pad",
            sectionContent: {
              isShow: true,
              config: {
                options: [
                  {
                    isMultiLabel: true,
                    consentType: "APIFETCH",
                    consentCode: "AADHAAR_CONSENT_AGRI",
                    submitConsentCodes: ["AADHAAR_CONSENT_AGRI"],
                    label: null,
                    className: "check-container list-none side-pad",
                    completed: null,
                  },
                ],
              },
            },
          },
          {
            componentType: "OTP",
            validateSection: false,
            sectionContent: {
              fields: {
                fieldDataType: "OTP",
                otpType: "AADHAR",
                isMandatory: true,
                fieldLabel: "Enter Aadhaar OTP",
                fieldAccessModifier: "EDITABLE",
                minLength: 6,
                maxLength: 15,
                length: 6,
                error: null,
                value: null,
                validationJson: null,
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: null,
                groupIndex: null,
                placeholderText: "xx x  xxxxx",
                fieldName: "accountNo",
                labelInfo: "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                showLabel: true,
                showField: true,
                OtpMasking: true,
                otpDataType: "NUMBER",
                otpAttempts: 3,
                waitTimeInSeconds: 120,
              },
              options: {
                value: null,
                notificationType: "COMMON_OTP_TWO",
                loanProduct: null,
                createBorrower: true,
                generateOtp: true,
                requestFor: "BORROWER",
                journeyEventCode: "KYC_VERIFY",
              },
              isShow: false,
            },
          },
        ],
        MORE_INFO: [
          {
            componentType: "TITLE",
            mandatory: false,
            className: "common-title mt-10",
            validateSection: false,

            sectionContent: {
              isShow: true,
              titleData: "Tell Us More About You",
            },
          },
          {
            componentType: "FORM",
            validateSection: true,
            sectionContent: {
              options: {
                columnSize: 3,
                sendOptionKeyForDropDowns: true,
                mapSupplyData: true,
                mapAndDisable: true,
                autoVerifyMappedFields:true
              },
              isShow: true,
              fields: [
                {
                  fieldDataType: "TEXT",
                  dependentField: null,
                  isMandatory: true,
                  commonpropertyType: "",
                  fieldLabel: "Business Name",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: null,
                  error: null,
                  value: "",
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "COMPANY",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "",
                  fieldName: "companyBusinessName",
                  showLabel: true,
                  labelInfo: null,
                  groupName: "Personal Information",
                  groupIndex: 1,
                   
                },
                {
                  fieldDataType: "TEXT",
                  isMandatory: false,
                  fieldLabel: "Mobile number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 10,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: "^[1-9][0-9]{9}$",
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Enter a Mobile Number",
                  fieldName: "companyMobileNumber",
                  showLabel: true,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "COMPANY",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "TEXT",
                  isMandatory: true,
                  fieldLabel: "First Name",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 15,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  placeholderText: "Enter your First Name",
                  fieldName: "firstName",
                  labelInfo: "Enter your First Name",
                  showprefix: true,
                  showLabel: true,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "INDIVIDUAL",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                  prefixType: "DROPDOWN",
                  prefix: null,
                  options: [],
                  prefixfieldAccessModifier: "EDITABLE",
                  prefixCommonProperty: "TITLE",
                  includePrefixtoFormValue: true,
                  prefixfieldName: "title",
                  prefixplaceholderText: "Title",
                  isPrefixMandatory: true,
                },
                {
                  fieldDataType: "TEXT",
                  isMandatory: false,
                  fieldLabel: "Middle Name",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 3,
                  maxLength: 15,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  placeholderText: "Enter your Middle Name",
                  fieldName: "middleName",
                  labelInfo: "Enter your Middle Name",
                  showLabel: true,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "INDIVIDUAL",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "TEXT",
                  isMandatory: true,
                  fieldLabel: "Last Name",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 3,
                  maxLength: 15,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  placeholderText: "Enter your Last Name",
                  fieldName: "lastName",
                  labelInfo: "Enter your Last Name",
                  showLabel: true,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "INDIVIDUAL",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "MOBILE_NO",
                  isMandatory: true,
                  fieldLabel: "Mobile number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 10,
                  error: null,
                  value: null,
                  rulesFor: null,
                  "dataMasking":true,
                  regex: "^[1-9][0-9]{9}$",
                  countryCode: "+91",
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Enter a Mobile Number",
                  fieldName: "mobileNumber",
                  showLabel: true,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "INDIVIDUAL",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "TEXT",
                  isMandatory: false,
                  fieldLabel: "Email Id",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: null,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  "dataMasking":true,
                  regex:
                    "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                  regexErrorMessage: "Invalid Email id",
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Enter Valid Email ID",
                  fieldName: "alternativeUsername",
                  labelInfo:
                    "Enter Borrower Email Id for further Communication",
                  showLabel: true,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  showField: true,
                  verificationType: "EMAIL",
                  verificationFieldName: "emailOtp",
                },
                {
                  fieldDataType: "OTP",
                  otpType: "EMAIL",
                  isMandatory: true,
                  fieldLabel: "Enter Email OTP",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  length: 6,
                  error: null,
                  value: null,
                  validationJson: null,
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  placeholderText: "xx x  xxxxx",
                  fieldName: "emailOtp",
                  labelInfo: null,
                  showLabel: false,
                  showField: false,
                  OtpMasking: true,
                  otpDataType: "NUMBER",
                  otpAttempts: 3,
                  excludeToFormValue: true,
                  waitTimeInSeconds: 120,
                  options: {
                    value: null,
                    notificationType: "COMMON_OTP_TWO",
                    loanProduct: null,
                    createBorrower: true,
                    generateOtp: true,
                    className: "w-100",
                    journeyEventCode: "EMAIL_VERIFY",
                  },
                },
                {
                  fieldDataType: "TEXT",
                  isMandatory: true,
                  fieldLabel: "PAN Number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 12,
                  "dataMasking":true,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Enter Valid PAN Number",
                  fieldName: "companyPanNumber",
                  labelInfo: "Kindly Enter Valid PAN Number",
                  showLabel: true,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "COMPANY",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "NUMBER",
                  isMandatory: true,
                  fieldLabel: "Aadhar Number",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 999999999999,
                  error: null,
                  value: null,
                  "dataMasking":true,
                  rulesFor: null,
                  regex: null, //'/^\d{15}$',
                  regexErrorMessage: "Please enter valid aadhar number",
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "xx x  xxxxx",
                  fieldName: "identityNumberOne",
                  labelInfo:
                    "confirm your Aadhaar number for quick verification",
                  showLabel: true,
                  Masking: true,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "INDIVIDUAL",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "NUMBER",
                  dependentField: null,
                  isMandatory: true,
                  fieldLabel: "Requested Loan Amount ₹",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: 9999999,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: "^([1-9][0-9]{0,5}|[1-4][0-9]{6}|5000000)$",
                  options: [],
                  regexErrorMessage: "Loan Amount should be up to 50,00,000",
                  errorIconPath: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "",
                  fieldName: "loanAmount",
                  showLabel: true,
                  labelInfo: "Kindly Enter the Requested Loan Amount",
                  groupName: "Loan Information",
                  groupIndex: 2,
                  showField: true,
                },
                {
                  fieldDataType: "DROPDOWN",
                  isMandatory: true,
                  commonpropertyType: "BORROWER_DETAIL_VARIABLE44",
                  fieldLabel: "Vernacular Language",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: null,
                  error: null,
                  value: null,
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  groupName: "Personal Information",
                  groupIndex: 1,
                  placeholderText: "Vernacular Language",
                  fieldName: "borrowerDetailTextVariable44",
                  labelInfo: null,
                  showLabel: true,
                  validationJson: {
                    showField: {
                      if: [
                        {
                          "==": [
                            {
                              var: "borrowerDetails.borrowerDetail.borrowerType",
                            },
                            "INDIVIDUAL",
                          ],
                        },
                        true,
                        false,
                      ],
                    },
                  },
                },
                {
                  fieldDataType: "NUMBER",
                  dependentField: null,
                  isMandatory: true,
                  fieldLabel: "Loan Period (in month)",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 1,
                  maxLength: 36,
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
                  placeholderText: "",
                  fieldName: "loanTenure",
                  showLabel: true,
                  labelInfo: "Kindly Enter the Loan Period",
                  groupName: "Loan Information",
                  groupIndex: 2,
                  showField: true,
                },
                {
                  fieldDataType: "DROPDOWN",
                  isMandatory: true,
                  commonpropertyType: "GOLD_PURPOSE_OF_ADVANCE",
                  fieldLabel: "Loan Purpose",
                  fieldAccessModifier: "EDITABLE",
                  minLength: null,
                  maxLength: null,
                  error: null,
                  value: null,
                  validationJson: "",
                  rulesFor: null,
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  groupName: "Loan Information",
                  groupIndex: 2,
                  placeholderText: "Loan Information",
                  extraFieldName: "loanPurpose",
                  fieldName: "purposeOfAdvance",
                  labelInfo: "Kindly Enter Loan Purpose",
                  showLabel: true,
                  showField: true,
                },
                {
                  fieldDataType: "AUTO_COMPLETE",
                  dependentField: null,
                  isMandatory: true,
                  commonpropertyType: "HOME_BRANCH_STATE",
                  fieldLabel: "Home Branch State",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  "validationJson": {
                    "disable": {
                      "if": [
                        {
                          "and": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.existingaadharData.isEtb"
                                },
                                true
                              ]
                            },
                            {
                              "==":[
                                {
                                  "var":"capturedData.accountVerifed"
                                },
                                true
                              ]
                            },
                          ]
                        },
                        false
                      ]
                    }
                  },
                  rulesFor: ["homeBranchDistrict"],
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Home Branch State",
                  fieldName: "homeBranchState",
                  showLabel: true,
                  labelInfo:
                    "This will be your Bank Branch State where your case will be initiated",
                  groupName: "Choose Your branch",
                  groupIndex: 3,
                  showField: true,
                  forceEditable: true,
                },
                {
                  fieldDataType: "AUTO_COMPLETE",
                  dependentField: "homeBranchState",
                  commonpropertyType: "HOME_BRANCH_DISTRICT",
                  isMandatory: true,
                  fieldLabel: "Home Branch District",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: {
                    dontTriggerSelf: true,
                    showLoaderOnEndpoints: true,
                    apiEndpoint: {
                      if: [
                        
                        {
                          "and":[{"!=": [{ var: "homeBranchState" }, null]},{"!=": [{ var: "homeBranchState" }, ""]}]  },
                        {
                          apiType: "MICRO_SERVICE",
                          parameterConfig: [
                            ["microservicetoken", "oauthAccessToken"],
                            ["state", "homeBranchState"],
                          ],
                          url: "/api-v3/restPublic/master-branch-list-new",
                          RequestType: "POST",
                          parserMethodName: "branchParser",
                        },
                        "REJECT_CALL",
                      ],
                    },
                    "disable": {
                      "if": [
                        {
                          "and": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.existingaadharData.isEtb"
                                },
                                false
                              ]
                            },
                            {
                              "==":[
                                {
                                  "var":"capturedData.accountVerifed"
                                },
                                true
                              ]
                            },
                          ]
                        },
                       false
                      ]
                    }
                  },
                  rulesFor: ["homeBranchCity"],
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Home Branch District",
                  fieldName: "homeBranchDistrict",
                  showLabel: true,
                  labelInfo:
                    "This will be your Bank Branch District where your case will be initiated",
                  groupName: "Choose Your branch",
                  groupIndex: 3,
                  showField: true,
                  forceEditable: true,
                },
                {
                  fieldDataType: "AUTO_COMPLETE",
                  dependentField: "homeBranchDistrict",
                  commonpropertyType: null,
                  isMandatory: true,
                  fieldLabel: "Home Branch City",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: {
                    dontTriggerSelf: true,
                    showLoaderOnEndpoints: true,
                    apiEndpoint: {
                      if: [
                        
                        {"and":[{"!=": [{ var: "homeBranchDistrict" }, null]},{"!=": [{ var: "homeBranchDistrict" }, ""]}]  },
                        {
                          apiType: "MICRO_SERVICE",
                          parameterConfig: [
                            ["microservicetoken", "oauthAccessToken"],
                            ["district", "homeBranchDistrict"],
                            ["fetchCities", "STATIC", true],
                          ],
                          url: "/api-v3/restPublic/master-branch-list-new",
                          RequestType: "POST",
                          parserMethodName: "branchParser",
                        },
                        "REJECT_CALL",
                      ],
                    },
                    "disable": {
                      "if": [
                        {
                          "and": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.existingaadharData.isEtb"
                                },
                                true
                              ]
                            },
                            {
                              "==":[
                                {
                                  "var":"capturedData.accountVerifed"
                                },
                                true
                              ]
                            },
                          ]
                        },
                        false
                      ]
                    }
                  },
                  rulesFor: ["branchCode"],
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Home Branch City",
                  fieldName: "homeBranchCity",
                  showLabel: true,
                  labelInfo:
                    "This will be your Bank Branch City where your case will be initiated",
                  groupName: "Choose Your branch",
                  groupIndex: 3,
                  showField: true,
                  forceEditable: true,
                },
                {
                  fieldDataType: "AUTO_COMPLETE",
                  commonpropertyType: null,
                  dependentField: "homeBranchCity",
                  isMandatory: true,
                  fieldLabel: "Home Branch",
                  fieldAccessModifier: "EDITABLE",
                  minLength: 6,
                  maxLength: 15,
                  error: null,
                  value: null,
                  validationJson: {
                    dontTriggerSelf: true,
                    showLoaderOnEndpoints: true,
                    apiEndpoint: {
                      if: [
                        {"and":[{"!=": [{ var: "homeBranchCity" }, null]},{"!=": [{ var: "homeBranchCity" }, ""]}]  },
                        {
                          apiType: "MICRO_SERVICE",
                          parameterConfig: [
                            ["microservicetoken", "oauthAccessToken"],
                            ["city", "homeBranchCity"],
                          ],
                          url: "/api-v3/restPublic/master-branch-list-new",
                          RequestType: "POST",
                          parserMethodName: "branchParser",
                        },
                        "REJECT_CALL",
                      ],
                    },
                    "disable": {
                      "if": [
                        {
                          "and": [
                            {
                              "==": [
                                {
                                  "var": "capturedData.existingaadharData.isEtb"
                                },
                                true
                              ]
                            },
                            {
                              "==":[
                                {
                                  "var":"capturedData.accountVerifed"
                                },
                                true
                              ]
                            },
                          ]
                        },
                        false
                      ]
                    }
                  },
                  rulesFor: ["branchAddress"],
                  regex: null,
                  options: [],
                  regexErrorMessage: null,
                  errorIconPath: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "Home Branch",
                  fieldName: "branchCode",
                  showLabel: true,
                  labelInfo:
                    "This will be your Bank Branch where your case will be initiated",
                  groupName: "Choose Your branch",
                  groupIndex: 3,
                  showField: true,
                  forceEditable: true,
                },
                {
                  fieldDataType: "TEXT_AREA",
                  isMandatory: false,
                  fieldLabel: "Branch Address",
                  fieldAccessModifier: "READ_ONLY",
                  minLength: null,
                  maxLength: null,
                  error: null,
                  value: null,
                  validationJson: {
                    dontTriggerSelf: true,
                    showLoaderOnEndpoints: true,
                    apiEndpoint: {
                      if: [
                        { "and":[{"!=": [{ var: "branchCode" }, null]},{"!=": [{ var: "branchCode" }, ""]}] },
                        {
                          apiType: "MICRO_SERVICE",
                          parameterConfig: [
                            ["microservicetoken", "oauthAccessToken"],
                            "branchCode",
                          ],
                          url: "/api-v3/restPublic/master-branch-list-new",
                          RequestType: "POST",
                          parserMethodName: "branchParser",
                        },
                        "REJECT_CALL",
                      ],
                    },
                  },
                  rulesFor: null,
                  regex: null,
                  regexErrorMessage: null,
                  rowNo: null,
                  columnNo: null,
                  placeholderText: "",
                  fieldName: "branchAddress",
                  labelInfo: null,
                  groupName: "Choose Your branch",
                  groupIndex: 3,
                  showLabel: true,
                  rows: 3,
                },
              ],
            },
          },
          {
            componentType: "CONSENT",
            validateSection: true,
            mandatory: true,
            className: "mb-10 w-100 consent-para-padding txt-style",
            sectionContent: {
              config: {
                options: [
                  {
                    consentType: "STATIC",
                    consentCode: null,
                    submitConsentCodes: [],
                    label: "I agree to",
                    isMultiLabel: false,
                    className: "check-container",
                    completed: null,
                    endLinks: [
                      {
                        label: "Terms & Conditions",
                        linkType: "POPUP",
                        popupContent: [
                          {
                            componentType: "ORDERED_LIST",
                            sectionContent: {
                              isShow: true,
                              listItem: [
                                "The loan is repayable on demand and should be secured by pledge of Gold Jewellery/Ornaments/Coins. Bank may, at its sole discretion, allow the Borrower to repay the loan in installments, if a request is made by Borrower in this regard, without prejudice to the right of the Bank to recall/demand payment of the entire dues under the loan at any time",
                                "Mere submission of the Application for the loan does not mean that Borrower is entitled for the loan and the sanction of the loan shall be the sole discretion of the Bank.",
                                "The Bank shall be within its rights to get the said Gold Jewellery/ornaments/coins valued by an appraiser of Bank’s choice, and its expenses are to be borne by the Pledger/Borrower.",
                                "Bank shall also have the rights to retain the pledged Gold Jewellery/ornaments/coins as security, appropriate or sell the same and adjust the proceeds not only for the loan applied for but also for any other liability of the Borrower to the Bank whether as a Borrower or Guarantor in any other account.",
                                "Terms and Conditions stated in Loan cum Agreement of Pledge and such other terms and conditions stipulated by the Bank and/or any regulating authorities from time to time, shall also be binding on the Pledger/Borrower.",
                                "Borrower shall execute the necessary loan and security documents as may be stipulated by the Bank from time to time at his/their costs and expenses, including the payment of stamp duty thereon.",
                                "By submitting this application Borrower agrees that any notice given to the Borrower on the address provided to the Bank shall be sufficient notice irrespective of whether it is served on the Borrower or not.",
                                "Borrower(s) declare(s) that the pledged gold is owned by him/her/them.",
                                "Borrower(s) further declare(s) that he/she is not associated with Gold business like Gold jewelers, Goldsmith, Gold valuers etc.",
                              ],
                            },
                          },
                        ],
                      },
                      {
                        label: "Privacy Policy",
                        linkType: "POPUP",
                        popupContent: [
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "We, as a Bank, are committed in protecting your privacy when you use our Digital Platforms. In this Privacy Policy “Bank” / “we” / “our” means “Bank of India”, its subsidiaries and internal/external service providers”",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData: "AND",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "“You” or “Your” means “Customer” who visits or access to the ePlatform.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData: "AND",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "“ePlatform(s)” means Bank’s mobile friendly applications, online services and other ePlatform such as Payment Gateways and POS devices.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "Types of Data we collect on our ePlatform –g",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                '"Anonymous information" such information that cannot be used to identify an individual. Information like your Internet browser, IP address, information collected through tracking technologies, demographic information that you provide to us and aggregated or de-identified data.',
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "“Device Information” means unique device identifier such as IMEI number, contact lists (in some cases), technical Data about your computer and mobile device.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                '"Personal Identification data" refers to data that defines identity of an individual/entity such as name as per any ID proof, Current/Permanent Address, personal/office address, email address, telephone/mobile number, domicile, category, nationality, PAN/Voter/Driving license/Passport number, date of birth, Gender, marital status, your father’s name, spouse’s name and mother’s name, Employment or Business detail etc or any account information. Reason for collecting these data is as follows:',
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To manage our relationship with you;",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To inform you about important information, changes in terms and conditions and policies and/or other administrative information",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData: "To personalize ePlatform journey",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To deliver personalized marketing communications",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To offer you our products or services which you like to avail",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To perform activities such as data analysis, audits, usage trends to determine the effectiveness of our campaigns and to enhance the efficiency of our ePlatform.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To perform our obligations under KYC norms e.g. sharing your information with third parties to verify details you have provided to us like your identity, to authenticate you and verify your information;",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To improve risk control for fraud detection and prevention, to comply with laws and regulations, and to comply with other legal processes and law enforcement requirements;",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To prevent and/or to detect crime including fraud and financial crime, e.g. financing for terrorism and human trafficking (not restricted to);",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "For system or product development and planning, audit and administrative purposes;",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To enter into a contract with you or to take steps pursuant to your request prior to entering into a contract.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "To meet the legitimate interests to be pursued by us and/or by a third party.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                '"Location information" means information that may be collected by certain mobile applications or web browser that identifies your digital footprint location.',
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "“Biometric information” means information such as your fingerprint/Iris that you choose to provide to us for any authentication and for fraud prevention purposes with your explicit consent. We don’t store any biometric information, footprint anywhere in our database.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "Records of correspondence and other communications between us, including email, telephone conversations, live chat, instant messages and social media communications containing information concerning your grievances, complaints and disputes",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "We share the information/data with subsidiaries and/or affiliates as an effort to provide you improved services across the products and services, which are permissible under relevant laws and regulations; With third-party service providers, vendors, data processors and/or agents who perform services for us and help us to operate our business; Other companies to enable you to avail co-branded services, products or programs; Other third parties to comply with legal requirements such as the demands of applicable warrants, court orders; to verify or enforce our terms of use, our other rights, or other applicable policies; to address fraud, security or technical issues; to respond to an emergency; or otherwise to protect the rights, property or security of our customers and /or third parties. Statutory and regulatory bodies and authorities including but not limited to the Reserve Bank of India or the Securities and Exchange Board of India (including central and local government) and law enforcement authorities and entities or persons, to whom or before whom it is mandatory to disclose the Personal Data as per the applicable law, rules and regulations, orders of courts, judicial and quasi-judicial authorities and tribunals, arbitrators and arbitration tribunal.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "By using and / or accessing our ePlatform and /or by agreeing to transact with us, you agree to the above sharing of information during your relationship with us",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "We may retain your Personal Data for as long as required for dealing with any concerns due which may arise due to any legal and /or regulatory requirements and /or for establishment, exercise or defence of legal claims, legitimate purposes for e.g. to help us to respond to queries or complaints, fighting fraud and financial crime, responding to requests from regulators, etc. If we don’t need to retain information relating to any period of time, we may destroy, delete or anonymise such information.",
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                'Clicking on certain links within our ePlatforms may take you to other websites which may contain terms and conditions, privacy provisions, confidentiality provisions, or other provisions that differ from the terms and conditions applicable to our ePlatform. Links to other Internet services and websites are provided solely for the convenience of users and not an endorsement of any kind of the service or site, its content, or its sponsoring organization. The Bank takes no responsibility or liability whatsoever for the content, accuracy, reliability or opinions expressed in a website, to which our ePlatform are linked (a "linked site") and such linked sites are not monitored, investigated, or checked for accuracy or completeness by the Bank. It is your responsibility as the user to evaluate the accuracy, reliability, timeliness and completeness of any information available on a linked site and we shall not be responsible for the same at any circumstance . All products, services and content obtained from a linked site are provided "as is" without warranty of any kind, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, security, or accuracy.',
                            },
                          },
                          {
                            componentType: "PARAGRAPH",
                            className: "mb-15",
                            sectionContent: {
                              isShow: true,
                              paragraphData:
                                "We use physical, technical, and procedural safeguards that comply with applicable legal standards to reasonably protect and secure your information from unauthorized access and use, alteration, and destruction. We seek to use reasonable organizational, technical, and administrative measures to protect Personal data within our organization. We require our staff and any third parties who carry out any work on our behalf to comply with appropriate compliance standards including obligations to protect any information and apply appropriate measures for the use and transfer of information.",
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              isShow: true,
              showField: true,
            },
          },
        ],
        LOAN_SUMMARY: [
          {
            componentType: "TITLE",
            validateSection: false,
            className: "mt-5 d-flex align-items-center",
            validationJson: {
              content: {
                cat: [
                  "Congratulations ! ",
                  {
                    var: "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle",
                  },
                ],
              },
            },
            sectionContent: {
              titleData: ",",
              isShow: true,
              endContent: [
                {
                  componentType: "ICON",
                  className: "ml-10 display-flex",
                  sectionContent: {
                    isShow: true,
                    iconPath: "/assets/icons/gift.png",
                  },
                },
              ],
            },
          },
          {
            componentType: "PARAGRAPH",
            className: "common-info mt-3",
            validateSection: false,
            sectionContent: {
              isShow: true,
              paragraphData:
                "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details.",
            },
          },
          {
            componentType: "PARAGRAPH",
            className: "form-label-lg mt-4",
            validateSection: false,
            validationJson: {
              content: {
                cat: [
                  "Your Application Reference # ",
                  { var: "$scope.loanDetails.loanDetails.crmLeadId" },
                ],
              },
            },
            sectionContent: {
              isShow: true,
              paragraphData: "",
            },
          },
        ],
      },
    },
  };

  pageMetaConfig = {
    LA77: {
      individual: {
        "ACCOUNT_VERIFY": {
          'showLeftContent': true,
          'showStepper': true,
          'showSubStepper': true,
          'fieldLabel': 'Verify',
          'otpConsent': 5,
          'otpIndex': 6,
          'consentIndex': 4,
          'formIndex': 3,
          'paragraphIndex': 2,
          'formSubmitFlow': [
            {
              validationJson: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, false] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "showBorrowerDetails",
              dataFeedCloud: [
                "product",
                "formValue",
                "capturedData",
                "resumeJourney",
              ],
              saveResponseToProduct: true,
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
              validateResponse: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, false] },
                  { getResume: [] },
                  "PROCEED",
                ],
              },
            },
            {
              validationJson: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, true] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "applyLoan",
              dataFeedCloud: ["product", "formValue"],
              saveResponseToProduct: true,
              params: [
                "access_token",
                "borrowerUuid",
                "loanPurposeUuid",
                ["loanProgramName",'borrowerEmploymentHistoryTextVariable1'],
                ["loanAmount", "STATIC", 10000],
                ["applicationSource", "STATIC", "WEB_JOURNEY"],
              ],
              journeyEventCodeAfterResponseSucess: "MOBILE_VERIFY",
            },
            {
              validationJson: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, true] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "borrowerStepOne",
              dataFeedCloud: ["product", "formValue"],
              saveResponseToProduct: true,
              params: [
                "access_token",
                ['microservicetoken',"oauthAccessToken"],
                ["virtualAccountNumber",'accountNumber'],
              ],
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
              "submitflow": "fetchAccountData",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "saveResponseToCapturedData":true,
              "params": [
              'access_token', 'accountNumber', 
              'finacleRequest', 
              ['microservicetoken', 'oauthAccessToken'], 
              ['requestFor', 'RULE_OUTPUT', {"if":[{"==":[{"var":"constitution"},"Individual"]},'BORROWER',"BORROWER_COMPANY"]}],
              ['applicationSource', 'STATIC', 'WEB_JOURNEY']
            ],
              "apiError": "PRODUCT_ERROR",
              "validateResponse": {"if":[{"==":[{"var":"formSubmitResponse.code"},"200"]},"PROCEED","PROCEED"]}
          },
          {
            "submitflow": "exposureCheck",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "saveResponseToCapturedData":true,
              "params": [
               'loanUuid', 
              'finacleRequest', 
              ['microservicetoken', 'oauthAccessToken'], 
              ['custId','currentFormSubmitResponses.fetchAccountData.object.borrowerProfileTextVariable1' ],
              ['applicantType','currentFormSubmitResponses.fetchAccountData.object.isoRequest.requestFor' ],
              ['applicationSource', 'STATIC', 'WEB_JOURNEY']
            ],
              "apiError": "PRODUCT_ERROR",
              "validateResponse": {
                "if":[
                  {"==":[{"var":"formSubmitResponse.code"},"200"]},
                  "PROCEED",
                  {
                    "if":[
                      {"==":[{"var":"formSubmitResponse.code"},"500"]},
                      {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]},
                      "PROCEED"]}]}
          },
          {
            "validationJson":{"if":[
              {
              "==":[{"var":"currentFormSubmitResponses.exposureCheck.code"},"200"]
            },"NEXT",{"if":[{"==":[{"var":"currentFormSubmitResponses.exposureCheck.code"},"500"]},"PRODUCT_ERROR","EXECUTE"]}]},
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
                "WITHDRAW"
              ],
              [
                "subStatusToBeChanged",
                "STATIC",
                ""
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Rejection review"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ]
          },
          {
            "validationJson":{"if":[
              {
              "==":[{"var":"currentFormSubmitResponses.exposureCheck.code"},"200"]
            },"NEXT",{"if":[{"==":[{"var":"currentFormSubmitResponses.exposureCheck.code"},"500"]},"PRODUCT_ERROR","EXECUTE"]}]},
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
                {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"currentFormSubmitResponses.exposureCheck.message"}]},
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
                "REJECTED"
              ],
              [
                "subStatusToBeChanged",
                "STATIC",
                ""
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Rejected Application"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ]
          },
          {
            
            "submitflow": "checkNPAValidation",
              "dataFeedCloud": ['product', 'formValue', 'capturedData'],
              "saveResponseToProduct": true,
              "saveResponseToCapturedData":true,
              "params": [
              'access_token', 'loanUuid', 
              ['custId','currentFormSubmitResponses.fetchAccountData.object.borrowerProfileTextVariable1' ],
              ['microservicetoken', 'oauthAccessToken'], 
            ],
              "apiError": "PRODUCT_ERROR",
              "validateResponse": {
                "if":[
                  {"==":[{"var":"formSubmitResponse.code"},"200"]},
                  "PROCEED",
                  {
                    "if":[
                      {"==":[{"var":"formSubmitResponse.code"},"500"]},
                      {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]},
                      "PROCEED"]}]}
          
          },
          {
            "validationJson":{
              "if":[
              
                  {"and":[{"==":[{"var":"currentFormSubmitResponses.checkNPAValidation.code"},"200"]},{"==":[{"var":"currentFormSubmitResponses.checkNPAValidation.npaFlag"},"N"]}]
                },
                  "NEXT","EXECUTE"]
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
                "WITHDRAW"
              ],
              [
                "subStatusToBeChanged",
                "STATIC",
                ""
              ],
              [
                "statusChangeDescription",
                "STATIC",
                ""
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ]
          },
          {
            "validationJson":{
              "if":[{"and":[{"==":[{"var":"currentFormSubmitResponses.checkNPAValidation.code"},"200"]},{"==":[{"var":"currentFormSubmitResponses.checkNPAValidation.npaFlag"},"N"]}]},"NEXT","EXECUTE"]
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
                {
                  "cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"currentFormSubmitResponses.checkNPAValidation.message"}]
                }
                ,
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
                "REJECTED"
              ],
              [
                "subStatusToBeChanged",
                "STATIC",
                ""
              ],
              [
                "statusChangeDescription",
                "STATIC",
                "Rejected Application"
              ],
              [
                "applicationSource",
                "STATIC",
                "WEB_JOURNEY"
              ]
            ]
          },
            {
              validationJson: {
                if: [
                  { "==": [{ var: "constitution" }, "Individual"] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "updateLoanApplicationTrackingStatus",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                ["nextPage", "STATIC", "BORROWER_PERSONAL_DETAIL"],
                ["completedPage", "STATIC", "BORROWER_BASIC_DETAIL"],
              ],
            },
            {
              validationJson: {
                if: [
                  { "==": [{ var: "constitution" }, "Sole Proprietorship"] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "updateLoanApplicationTrackingStatus",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                ["nextPage", "STATIC", "COMPANY_DETAIL"],
                ["completedPage", "STATIC", "BORROWER_BASIC_DETAIL"],
              ],
            },
            {
              validationJson: {
                if: [
                  { "==": [{ var: "constitution" }, "Sole Proprietorship"] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "updateCompany",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                ["microservicetoken", "oauthAccessToken"],
                "loanUuid",
                ["companyCategory", "constitution"],
                ["isOnboarding", "STATIC", false],
                ["isValidationRequired", "STATIC", false],
              ],
              validateResponse: "PAN_VERIFY",
            },
            
          ]
        },
        MOBILE_VERIFY: {
          showLeftContent: true,
          showStepper: false,
          showSubStepper: false,
          fieldLabel: "Continue",
          consentIndex: 4,
          formIndex: 2,
          mobileFieldIndex: 1,
          otpIndex: 5,
          dataScopeFetchFlow: [
            {
              fetchflow: "productListForProductGroup",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: [
                ["productGroup", "STATIC", "STAR_GOLD"],
                ["applicationSource", "STATIC", "WEB_JOURNEY"],
              ],
            },
          ],
          formSubmitFlow: [
            {
              validationJson: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, false] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "showBorrowerDetails",
              dataFeedCloud: [
                "product",
                "formValue",
                "capturedData",
                "resumeJourney",
              ],
              saveResponseToProduct: true,
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
              validateResponse: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, false] },
                  { getResume: [] },
                  "PROCEED",
                ],
              },
            },
            {
              validationJson: {
                if: [
                  { "==": [{ checkNull: [{ var: "resumeJourney" }] }, true] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "applyLoan",
              dataFeedCloud: ["product", "formValue"],
              saveResponseToProduct: true,
              params: [
                "access_token",
                "borrowerUuid",
                "loanPurposeUuid",
                ["loanAmount", "STATIC", 10000],
                ["applicationSource", "STATIC", "WEB_JOURNEY"],
              ],
              journeyEventCodeAfterResponseSucess: "MOBILE_VERIFY",
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
              validationJson: {
                if: [
                  {
                    "==": [
                      {
                        checkNull: [
                          { var: "capturedData.loanDetailsWithAccessToken" },
                        ],
                      },
                      true,
                    ],
                  },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "profileUpdate",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: [
                "access_token",
                "loanUuid",
                ["borrowerProfileTextVariable5", "constitution"],
                ["microservicetoken", "oauthAccessToken"],
              ],
            },
            {
              validationJson: {
                if: [
                  { "==": [{ var: "constitution" }, "Individual"] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "updateLoanApplicationTrackingStatus",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                ["nextPage", "STATIC", "BORROWER_PERSONAL_DETAIL"],
                ["completedPage", "STATIC", "BORROWER_BASIC_DETAIL"],
              ],
            },
            {
              validationJson: {
                if: [
                  { "==": [{ var: "constitution" }, "Sole Proprietorship"] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "updateLoanApplicationTrackingStatus",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                ["nextPage", "STATIC", "COMPANY_DETAIL"],
                ["completedPage", "STATIC", "BORROWER_BASIC_DETAIL"],
              ],
            },
            {
              validationJson: {
                if: [
                  { "==": [{ var: "constitution" }, "Sole Proprietorship"] },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "updateCompany",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                ["microservicetoken", "oauthAccessToken"],
                "loanUuid",
                ["companyCategory", "constitution"],
                ["isOnboarding", "STATIC", false],
                ["isValidationRequired", "STATIC", false],
              ],
              validateResponse: "PAN_VERIFY",
            },
          ],
        },
        PRODUCT_ERROR: {
          showLeftContent: false,
          showStepper: false,
          showSubStepper: false,
          errorCodes: {
            nameMatch:
              "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance",
          },
          dataScopeFetchFlow: [
            {
              fetchflow: "loanDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", "loanUuid", ["microservicetoken", "oauthAccessToken"]],
            },
          ],
        },

        PAN_VERIFY: {
          showLeftContent: true,
          showStepper: false,
          showSubStepper: false,
          fieldLabel: "Continue",
          formIndex: 1,
          otpIndex: 3,
          consentIndex: 2,
          dataScopeFetchFlow: [
            {
              fetchflow: "borrowerDetails",
              saveResponseToCapturedData: true,
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
            }
          ],
          formSubmitFlow: [
            {
              submitflow: "personalProfileUpdate",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                "loanUuid",
                ["identityNumberTwo","identityNumberTwo"],
                ["microservicetoken", "oauthAccessToken"],
                ["ProductName", "product.name"],
              ],
              validationJson: {
                if: [
                  {
                    "==": [
                      {
                        var: "borrowerDetails.borrowerDetail.borrowerType",
                      },
                      "COMPANY",
                    ],
                  },
                  "EXECUTE",
                  "NEXT",
                ],
              },
            },
            {
              validationJson: {
                if: [
                  {
                    "==": [
                      {
                        var: "borrowerDetails.borrowerDetail.borrowerType",
                      },
                      "COMPANY",
                    ],
                  },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "companyProfileUpdate",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                "loanUuid",
                ["microservicetoken", "oauthAccessToken"],
                ["companyIdentityNumberTwo", "identityNumberTwo"],
                ["isOnboarding", "STATIC", false],
                ["isValidationRequired", "STATIC", false],
                ["ProductName", "product.name"],
              ],
            },
            {
              submitflow: "updatesubStatus",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              saveResponseToProduct: true,
              params: [
                "access_token",
                "loanUuid",
                ["newSubStatus", "STATIC", "SUB_STATUS_3"],
                ["subStatusChangeDescription", "STATIC", "Pan Verification"],
              ],
              validateResponse: {
                if: [
                  {
                    "==": [
                      {
                        var: "formSubmitResponse.code",
                      },
                      "200",
                    ],
                  },
                  "PROCEED",
                  {
                    cat: [
                      "PRODUCT_ERROR[PARAMS]errorCode=",
                      {
                        var: "formSubmitResponse.message",
                      },
                    ],
                  },
                ],
              },
              apiError: "PRODUCT_ERROR",
            },
          ],
          prepopulationRemaps:{
            identityNumberTwo:"borrowerDetails.borrowerDetail.identityNumberTwo",
          },
        },
        EKYC_VERIFY: {
          showLeftContent: true,
          showStepper: false,
          showSubStepper: true,
          fieldLabel: "Verify",
          formIndex: 1,
          otpIndex: 3,
          consentIndex: 2,
          dataScopeFetchFlow: [
            {
              fetchflow: "borrowerDetails",
              saveResponseToCapturedData: true,
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
            }
          ],
          prepopulationRemaps:{
            identityNumberOne:"borrowerDetails.borrowerDetail.identityNumberOne",
          },
          formSubmitFlow:[
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
            }
          ]
        },
        MORE_INFO: {
          showLeftContent: false,
          showStepper: false,
          showSubStepper: false,
          fieldLabel: "Continue",
          formSectionIndex: 1,
          prepopulationRemaps: {
            companyBusinessName: "borrowerDetails.borrowerDetail.companyName",
            companyPanNumber:
              "borrowerDetails.borrowerDetail.companyIdentityNumberTwo",
            companyMobileNumber: "borrowerDetails.borrowerDetail.mobileNumber",
            firstName: "borrowerDetails.borrowerDetail.firstName",
            middleName: "borrowerDetails.borrowerDetail.middleName",
            lastName: "borrowerDetails.borrowerDetail.lastName",
            mobileNumber: "borrowerDetails.borrowerDetail.mobileNumber",
            identityNumberOne:
              "borrowerDetails.borrowerDetail.identityNumberOne",
            alternativeUsername:"borrowerDetails.borrowerDetail.alternativeUsername",
            accountNo:"borrowerDetails.borrowerDetail.accountNumber"
          },
          dataScopeFetchFlow: [
            {
              fetchflow: "borrowerDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
            },
          ],
          formSubmitFlow: [
            {
              submitflow: "loanUpdate",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "loanUuid",
                "loanPurposeUuid",
                "loanAmount",
                "loanTenure",
                "purposeOfAdvance",
                ["borrowerDetailTextVariable44","capturedData.AccountData.borrowerDetailTextVariable44"],
                ["ProductName", "product.name"],
              ],
            },
            {
              submitflow: "profileUpdate",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "borrowerUuid",
                "alternativeUsername",
                "alternativeUsernameVerified",
                ["borrowerProfileTextVariable1","capturedData.AccountData.borrowerProfileTextVariable1"],
                ["microservicetoken", "oauthAccessToken"],
              ],
            },
            {
              submitflow: "assignUserHierarchyUnit",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "loanUuid",
                "access_token",
                ["userHierarchyUnitCode", "branchCode"],
                ["microservicetoken", "oauthAccessToken"],
              ],
            },
            {
              validationJson: {
                if: [
                  {
                    "==": [
                      {
                        var: "borrowerDetails.borrowerDetail.borrowerType",
                      },
                      "COMPANY",
                    ],
                  },
                  "EXECUTE",
                  "NEXT",
                ],
              },
              submitflow: "companyProfileUpdate",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                "loanUuid",
                ["companyName","companyBusinessName"],
                ["microservicetoken", "oauthAccessToken"],
                ["companyIdentityNumberTwo", "companyPanNumber"],
                "loanAmount",
                ["isOnboarding", "STATIC", false],
                ["isValidationRequired", "STATIC", false],
                ["ProductName", "product.name"],
              ],
              journeyEventCodeAfterResponseSucess: [
                "PERSONAL_DETAILS_VERIFY",
                "ACCOUNT_CREATION",
              ],
            },
            {
              submitflow: "personalProfileUpdate",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                "loanUuid",
                "title",
                "firstName",
                "middleName",
                "lastName",
                "identityNumberOne",
                "loanAmount",
                ["microservicetoken", "oauthAccessToken"],
                ["ProductName", "product.name"],
              ],
              validationJson: {
                if: [
                  {
                    "==": [
                      {
                        var: "borrowerDetails.borrowerDetail.borrowerType",
                      },
                      "INDIVIDUAL",
                    ],
                  },
                  "EXECUTE",
                  "NEXT",
                ],
              },

              journeyEventCodeAfterResponseSucess: [
                "PERSONAL_DETAILS_VERIFY",
                "ACCOUNT_CREATION",
              ],
            },
            /*  {
                        "validationJson":{
                            "if":[{"==":[{"var":"alternativeUsernameVerified"},true]},'EXECUTE','NEXT']
                        },
                        "submitflow":"updatesubStatus",
                        "dataFeedCloud":['product','formValue'],
                        "params":['access_token','loanUuid',['newSubStatus','STATIC','SUB_STATUS_2'],['subStatusChangeDescription','STATIC','Email verification']]
                    }, */
            {
              submitflow: "updateLoanApplicationTrackingStatus",
              dataFeedCloud: ["product", "formValue","capturedData"],
              params: [
                "access_token",
                "loanUuid",
                [
                  "microservicetoken",
                  "oauthAccessToken"
                ],
                ["nextPage", "STATIC", "BORROWER_PERSONAL_DETAIL"],
                ["completedPage", "STATIC", "BORROWER_BASIC_DETAIL"],
              ],
            },
          ],
        },
        LOAN_SUMMARY: {
          showLeftContent: false,
          showStepper: false,
          showSubStepper: false,
          showAccountOpenBtn: true,
          fieldLabel: "continue",
          titleIndex: 0,
          loanAmountIndex: 1,
          refNoInx: 2,
          showRepaymentSchedule: false ,
          showEmiCalculatorSection: false,
          showBranchSection: true,
          showRatingSection: false,
          showRejectionSection: false,
          showMainContent: true,
          showGoldLoanEligiblityCalculator: true,
          acceptAndProceed: "Please accept to proceed further",
          downLoadRepaymentSchedule: "Download Repayment Schedule",
          branchDetails: "Your branch detail",
          repaymentSchedule: "Repayment Schedule",
          summaryError:
            "We appreciate your effort for showing interest with our banking.",
          backToHomeLabel: "Go Back to Home",
          openSavingAccount: "To Open a savings account with Bank Of India",
          continueToSavingAccount: "Continue to savings account",
          dataScopeFetchFlow: [
            {
              fetchflow: "borrowerDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
            },
            {
              fetchflow: "loanDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              delayMS: 10000,
              retry: 3,
              redirectOnReTryFailure: "PRODUCT_ERROR",
              validateResponse: {
                if: [
                  {
                    "==": [
                      { var: "fetchFlowResponse.loanDetails.crmLeadId" },
                      null,
                    ],
                  },
                  "EXECUTE_WITH_DELAY_MS",
                  "PROCEED[JOURNEY_EVENT_CODE]LEAD_GENERATE",
                ],
              },
              params: [
                "access_token",
                "loanUuid",
                ["microservicetoken", "oauthAccessToken"],
              ],
            },
            {
              fetchflow: "fetchAgriGoldLoanTenure",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: [],
            },
            {
              fetchflow: "fetchGoldRateList",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token"],
            },
            {
              fetchflow: "fetchGoldRateTvList",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token"],
            },
          ],
          rejectionView: [
            {
              componentType: "TITLE",
              validateSection: false,
              className: " mb-0 mt-5 d-flex align-items-center",
              sectionContent: {
                titleData: `Dear `,
                isShow: true,
                endContent: [
                  {
                    componentType: "ICON",
                    className: "ml-10",
                    sectionContent: {
                      isShow: true,
                      iconPath: "/assets/icons/sad.png",
                    },
                  },
                ],
              },
            },
            {
              componentType: "PARAGRAPH",
              className: "text-info mt-3",
              validateSection: false,
              sectionContent: {
                isShow: true,
                paragraphData:
                  " Sorry! We are unable to process your request at the moment due to system unavailability Kindly visit the nearest branch for further details.",
              },
            },
          ],
          tableConfig: {
            headers: [
              { fieldLabel: "Month", fieldName: "repaymentDate" },
              {
                fieldLabel: "Opening Balance",
                fieldName: "loanAmountRemaining",
              },
              { fieldLabel: "Interest", fieldName: "interest" },
              { fieldLabel: "Principle Repayment", fieldName: "principal" },
              { fieldLabel: "Closing Balance", fieldName: "closingBalance" },
            ],
            data: null,
          },
          branchConfig: {
            status:
              "Account Information is sent to your Email address and Mobile Number",
            branchDetails: {
              name: null,
              address: null,
            },
          },
          ratingSection: [
            {
              componentType: "TITLE",
              validateSection: false,
              className: " mb-0 mt-5 d-flex align-items-center",
              sectionContent: {
                titleData: `Rate Us!`,
                isShow: true,
              },
            },
            {
              componentType: "PARAGRAPH",
              className: "text-info",
              validateSection: false,
              sectionContent: {
                isShow: true,
                paragraphData:
                  "Please help us improving our services by providing your valuable feedback",
              },
            },
            {
              componentType: "FORM",
              className: "mb-3 w-50 mt-25",
              validateSection: false,
              sectionContent: {
                isShow: true,
                validityEmitter: new Subject<void>(),
                formValueEmitter: new Subject<void>(),
                options: {
                  columnSize: 1,
                },
                fields: [
                  {
                    fieldDataType: "CARD_OPTIONS",
                    dependentField: null,
                    isMandatory: true,
                    fieldLabel: "How do you feel about our service",
                    fieldAccessModifier: "EDITABLE",
                    minLength: 6,
                    maxLength: 15,
                    error: null,
                    value: null,
                    validationJson: null,
                    rulesFor: ["remarks"],
                    regex: null,
                    options: this.commonProperty_static.RATING,
                    regexErrorMessage: null,
                    errorIconPath: null,
                    rowNo: null,
                    columnNo: null,
                    placeholderText: "please Select",
                    fieldName: "rating",
                    showLabel: true,
                    labelInfo: null,
                    groupName: null,
                    groupIndex: null,
                    showField: true,
                  },
                  {
                    fieldDataType: "DROPDOWN",

                    dependentField: null,
                    isMandatory: true,
                    commonpropertyType: "AWAITING_APPROVAL_L7_REASON",
                    fieldLabel: "Reason",
                    fieldAccessModifier: "EDITABLE",
                    minLength: 6,
                    maxLength: 15,
                    error: null,
                    value: null,
                    validationJson: {
                      showField: {
                        if: [
                          {
                            or: [
                              { "==": [{ var: "rating" }, "1"] },
                              { "==": [{ var: "rating" }, "2"] },
                              { "==": [{ var: "rating" }, "3"] },
                            ],
                          },
                          true,
                          false,
                        ],
                      },
                    },
                    rulesFor: null,
                    regex: null,
                    options: [],
                    regexErrorMessage: null,
                    errorIconPath: null,
                    rowNo: null,
                    columnNo: null,
                    placeholderText: "please Select",
                    fieldName: "remarks",
                    showLabel: true,
                    labelInfo: null,
                    groupName: null,
                    groupIndex: null,
                    showField: true,
                  },
                  {
                    fieldDataType: "TEXT_AREA",
                    isMandatory: false,
                    fieldLabel: "Remarks",
                    fieldAccessModifier: "EDITABLE",
                    minLength: null,
                    maxLength: null,
                    error: null,
                    value: null,
                    validationJson: null,
                    rulesFor: null,
                    regex: null,
                    regexErrorMessage: null,
                    rowNo: null,
                    columnNo: null,
                    placeholderText: "Tell us in words",
                    groupName: null,
                    groupIndex: null,
                    fieldName: "feedbackComments",
                    labelInfo: null,
                    showLabel: true,
                    showField: true,
                    rows: 3,
                  },
                ],
              },
            },
          ],
          chartFooter: [
            {
              label: "Principle Amount",
              fieldName: "principal",
              prefix: "₹",
              value: null,
            },
            {
              label: "Total Payable",
              fieldName: "totalPayable",
              prefix: "₹",
              value: null,
            },
            {
              label: "Payable Interest",
              fieldName: "payableInterest",
              prefix: "₹",
              value: null,
            },
            {
              label: "First EMI Date",
              fieldName: "firstEmiDate",
              value: null,
            },
          ],
          chartConfig: {
            title: "Review Your Loan",

            data: [
              {
                fieldLabel: "Principle Amount",
                value: 25000,
                bgColor: "#0090E5",
              },
              {
                fieldLabel: "Interest Amount",
                value: 4000,
                bgColor: "#00C5AB",
              },
            ],
            chartType: "PIE_CHART",
          },
          temp: {
            options: {
              layout: "sideLayout",
              columnSize: 1,
              validityEmitter: new Subject<void>(),
              formValueEmitter: new Subject<void>(),
            },
            fields: [
              {
                fieldDataType: "TEXT",
                isMandatory: false,
                fieldLabel: "Loan Amount",
                fieldAccessModifier: "READ_ONLY",
                minLength: 6,
                maxLength: 15,
                error: null,
                value: null,
                validationJson: {
                  runAlways: true,
                  default: {
                    if: [true, { var: "loanAmountCopy" }],
                  },
                  calculation: {
                    if: [true, { var: "loanAmountCopy" }],
                  },
                },
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "",
                fieldName: "loanAmount",
                labelInfo: null,
                showLabel: true,
                showField: true,
                prefixfieldAccessModifier: "READ_ONLY",
                prefixCommonProperty: null,
                includePrefixtoFormValue: false,
                prefixfieldName: "ruppe",
                prefixType: "TEXT",
                prefix: "INR",
                showprefix: true,
                prefixplaceholderText: "Title",
              },
              {
                fieldDataType: "RANGE",
                isMandatory: false,
                fieldLabel: "Enter your account number",
                fieldAccessModifier: "EDITABLE",
                minLength: 100,
                maxLength: 50000,
                error: null,
                value: null,
                validationJson: {
                  // "runAlways":true,
                  // "default":{
                  //   "if":[true,{"var":"loanAmount"}]
                  // },
                  // "calculation":{
                  //   "if":[true,{"var":"loanAmount"}]
                  // }
                },
                rulesFor: ["loanAmount"],
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "xx x  xxxxx",
                fieldName: "loanAmountCopy",
                labelInfo: "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                showLabel: false,
                showField: true,
                prefix: "₹",
                suffix: null,
                excludeToFormValue: true,
              },
              {
                fieldDataType: "TEXT",
                isMandatory: false,
                fieldLabel: "Tenure",
                fieldAccessModifier: "READ_ONLY",
                minLength: 6,
                maxLength: 15,
                error: null,
                value: null,
                validationJson: {
                  runAlways: true,
                  default: {
                    if: [true, { var: "tenureCopy" }],
                  },
                  calculation: {
                    if: [true, { var: "tenureCopy" }],
                  },
                },
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "",
                fieldName: "tenure",
                labelInfo: null,
                showLabel: true,
                showField: true,
              },
              {
                fieldDataType: "RANGE",
                isMandatory: false,
                fieldLabel: "Enter your account number",
                fieldAccessModifier: "EDITABLE",
                minLength: 1,
                maxLength: 84,
                error: null,
                value: null,
                validationJson: {
                  // "runAlways":true,
                  // "default":{
                  //   "if":[true,{"var":"tenure"}]
                  // },
                  // "calculation":{
                  //   "if":[true,{"var":"tenure"}]
                  // }
                },
                rulesFor: ["tenure"],
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "xx x  xxxxx",
                fieldName: "tenureCopy",
                labelInfo: null,
                showLabel: false,
                showField: true,
                prefix: null,
                suffix: "months",
                excludeToFormValue: true,
              },
              {
                fieldDataType: "TEXT",
                isMandatory: false,
                fieldLabel: "Interest per annum (%)",
                fieldAccessModifier: "READ_ONLY",
                minLength: 6,
                maxLength: 15,
                error: null,
                value: null,
                validationJson: null,
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "",
                fieldName: "interestRate",
                labelInfo: null,
                showLabel: true,
                showField: true,
              },
              {
                fieldDataType: "TEXT",
                isMandatory: false,
                fieldLabel: "EMI to be paid",
                fieldAccessModifier: "READ_ONLY",
                minLength: 6,
                maxLength: 15,
                error: null,
                value: null,
                validationJson: null,
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "",
                fieldName: "emiToBePaid",
                labelInfo: null,
                showLabel: true,
                showField: true,
              },
              {
                fieldDataType: "TEXT",
                isMandatory: false,
                fieldLabel: "Type of ROI",
                fieldAccessModifier: "READ_ONLY",
                minLength: 6,
                maxLength: 15,
                error: null,
                value: null,
                validationJson: null,
                rulesFor: null,
                regex: null,
                regexErrorMessage: null,
                rowNo: null,
                columnNo: null,
                groupName: "Your Loan Details",
                groupIndex: 1,
                placeholderText: "",
                fieldName: "typeOfRoi",
                labelInfo: null,
                showLabel: true,
                showField: true,
              },
            ],
          },
          goldLoanEligiblityCalculator: {
            topFormSection: [
              {
                componentType: "TITLE",
                validateSection: false,
                className: "common-title mb-10 f-30",
                sectionContent: {
                  isShow: true,
                  titleData: "Check Your Gold Loan Eligibility",
                },
              },
              {
                componentType: "PARAGRAPH",
                className: "common-info mb-10",
                validateSection: false,
                sectionContent: {
                  isShow: true,
                  paragraphData:
                    "Use our calculator to know your gold loan eligibility.",
                },
              },
              {
                componentType: "FORM",
                className: "",
                validateSection: true,
                sectionContent: {
                  isShow: true,
                  options: { columnSize: 3, sendOptionKeyForDropDowns: true },
                  fields: [
                    {
                      fieldDataType: "DROPDOWN",
                      dependentField: null,
                      isMandatory: true,
                      fieldLabel: "Purpose of Loan",
                      fieldAccessModifier: "EDITABLE",
                      minLength: 6,
                      maxLength: 15,
                      error: null,
                      value: null,
                      validationJson: null,
                      rulesFor: null,
                      regex: null,
                      options: this.commonProperty_static.PURPOSE_OF_LOAN,
                      regexErrorMessage: null,
                      errorIconPath: null,
                      rowNo: null,
                      columnNo: null,
                      placeholderText: "Purpose of Loan",
                      fieldName: "purposeOfLoan",
                      showLabel: true,
                      labelInfo: "please Declare the purpose of Loan",
                      groupName: null,
                      groupIndex: null,
                      showField: true,
                    },
                    {
                      fieldDataType: "DROPDOWN",
                      dependentField: null,
                      isMandatory: true,
                      fieldLabel: "Requested Tenure",
                      fieldAccessModifier: "EDITABLE",
                      minLength: 6,
                      maxLength: 15,
                      error: null,
                      value: null,
                      validationJson: null,
                      rulesFor: null,
                      regex: null,
                      options: this.commonProperty_static.TENURE,
                      regexErrorMessage: null,
                      errorIconPath: null,
                      rowNo: null,
                      columnNo: null,
                      placeholderText: "Tenure",
                      fieldName: "tenure",
                      showLabel: true,
                      labelInfo: "please Select Loan Tenure",
                      groupName: null,
                      groupIndex: null,
                      showField: true,
                    },
                    {
                      fieldDataType: "NUMBER",
                      isMandatory: false,
                      fieldLabel: "No of Articles",
                      fieldAccessModifier: "READ_ONLY",
                      minLength: null,
                      maxLength: null,
                      error: null,
                      value: null,
                      validationJson: null,
                      rulesFor: null,
                      regex: null,
                      regexErrorMessage: null,
                      rowNo: null,
                      columnNo: null,
                      groupName: null,
                      groupIndex: null,
                      placeholderText: "",
                      fieldName: "articles",
                      labelInfo: "Total Number of Articles",
                      showLabel: true,
                      showField: true,
                    },
                  ],
                  validityEmitter: new Subject<void>(),
                  formValueEmitter: new Subject<void>(),
                },
              },
            ],
            bottomSection: {
              tableSection: {
                fields: [
                  {
                    fieldDataType: "TABLE",
                    dependentField: null,
                    isMandatory: false,
                    fieldLabel: "",
                    maxAmountLimit: 5000000,
                    fieldAccessModifier: "READ_ONLY",
                    minLength: null,
                    maxLength: 10,
                    error: null,
                    value: [],
                    rulesFor: null,
                    regex: null,
                    addMore: true,
                    addStatus: false,
                    isTableFooter: true,
                    showAction: true,
                    tableRowActions: [
                      {
                        actionCode: "DELETE",
                        icon: "../../../../assets/icons/close_circle.png",
                        className: "clr-red",
                        isDisplay: true,
                      },
                    ],
                    tableFooterData: {
                      fieldLabel: "Sum Total",
                      value: 0,
                      mappingKey: "totalAmount",
                      fieldName: "grandTotal",
                      valuePrefix: "₹",
                    },
                    emitedValue: [],
                    tableFields: [
                      {
                        fieldDataType: "DROPDOWN",
                        dependentField: null,
                        isMandatory: false,
                        fieldLabel: "Type of Articles",
                        fieldAccessModifier: "EDITABLE",
                        minLength: null,
                        maxLength: null,
                        error: null,
                        value: null,
                        validationJson: null,
                        rulesFor: ["weight"],
                        regex: null,
                        options: this.commonProperty_static.ARTICLETYPE,
                        regexErrorMessage: null,
                        errorIconPath: null,
                        rowNo: null,
                        columnNo: null,
                        placeholderText: "Select",
                        fieldName: "articleType",
                        showLabel: true,
                        labelInfo: null,
                        groupName: "Loan Information",
                        groupIndex: 1,
                        showField: true,
                      },
                      {
                        fieldDataType: "DROPDOWN",
                        dependentField: null,
                        isMandatory: false,
                        fieldLabel: "Purity (Carat)",
                        fieldAccessModifier: "EDITABLE",
                        minLength: null,
                        maxLength: null,
                        error: null,
                        value: null,
                        validationJson: null,
                        rulesFor: ["goldRatePerGram"],
                        regex: null,
                        options: this.commonProperty_static.PURITY,
                        regexErrorMessage: null,
                        errorIconPath: null,
                        rowNo: null,
                        columnNo: null,
                        placeholderText: "Select",
                        fieldName: "goldCarat",
                        showLabel: true,
                        labelInfo: null,
                        groupName: "",
                        groupIndex: 1,
                        showField: true,
                      },
                      {
                        fieldDataType: "NUMBER",
                        dependentField: null,
                        isMandatory: false,
                        fieldLabel: "Net Weight (gms)",
                        fieldAccessModifier: "EDITABLE",
                        validatebyTableGroup: true,
                        minLength: null,
                        maxLength: 9999,
                        error: null,
                        value: null,
                        validationJson: {
                          property: {
                            placeholderText: {
                              if: [
                                {
                                  "==": [{ var: "articleType" }, "COIN"],
                                },
                                "Min 1 to 50gms",
                                "Min 1 to 9999gms",
                              ],
                            },
                          },
                          validation: {
                            if: [
                              { "!=": [{ var: "weight" }, 0] },
                              {
                                if: [
                                  {
                                    and: [
                                      {
                                        "==": [{ var: "articleType" }, "COIN"],
                                      },
                                      { "<": [50, { var: "weight" }] },
                                    ],
                                  },
                                  false,
                                  {
                                    if: [
                                      {
                                        and: [
                                          {
                                            "==": [
                                              { var: "articleType" },
                                              "JEWELLERY",
                                            ],
                                          },
                                          { "<": [9999, { var: "weight" }] },
                                        ],
                                      },
                                      false,
                                      true,
                                    ],
                                  },
                                ],
                              },
                              true,
                            ],
                          },
                          validationWithSnackbar: {
                            if: [
                              { "!=": [{ var: "weight" }, 0] },
                              {
                                if: [
                                  {
                                    and: [
                                      {
                                        "==": [{ var: "articleType" }, "COIN"],
                                      },
                                      { "<": [50, { var: "weight" }] },
                                    ],
                                  },
                                  "Net weight should be less than 50",
                                  {
                                    if: [
                                      {
                                        and: [
                                          {
                                            "==": [
                                              { var: "articleType" },
                                              "JEWELLERY",
                                            ],
                                          },
                                          { "<": [9999, { var: "weight" }] },
                                        ],
                                      },
                                      "Net weight should be less than 9999",
                                      true,
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        rulesFor: ["goldRatePerGram"],
                        regex: null,
                        regexErrorMessage: null,
                        errorIconPath: null,
                        rowNo: null,
                        columnNo: null,
                        placeholderText: "Enter Net Weight",
                        fieldName: "weight",
                        showLabel: true,
                        labelInfo: null,
                        groupName: "",
                        groupIndex: 1,
                        showField: true,
                      },
                      {
                        fieldDataType: "NUMBER",
                        dependentField: null,
                        isMandatory: false,
                        fieldLabel: "Rate (Per gms)",
                        fieldAccessModifier: "READ_ONLY",
                        minLength: null,
                        maxLength: null,
                        error: null,
                        value: "",
                        validationJson: {
                          calculation: {
                            getObjectKeyValue: [
                              {
                                "Array.find": [
                                  { var: "goldCarat" },
                                  "goldCarat",
                                  { var: "fetchGoldRateList.result" },
                                ],
                              },
                              "rate",
                            ],
                          },
                        },
                        rulesFor: ["totalAmount"],
                        regex: null,
                        options: [],
                        regexErrorMessage: null,
                        errorIconPath: null,
                        rowNo: null,
                        columnNo: null,
                        placeholderText: "",
                        fieldName: "goldRatePerGram",
                        numberOnly: true,
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
                        fieldLabel: "Total Amount",
                        fieldAccessModifier: "READ_ONLY",
                        minLength: null,
                        maxLength: null,
                        error: null,
                        value: "",
                        validationJson: {
                          calculation: {
                            if: [
                              {
                                and: [
                                  {
                                    "==": [{ var: "articleType" }, "COIN"],
                                  },
                                  { "<": [50, { var: "weight" }] },
                                ],
                              },
                              { var: "totalAmount" },
                              {
                                if: [
                                  {
                                    and: [
                                      {
                                        "==": [
                                          { var: "articleType" },
                                          "JEWELLERY",
                                        ],
                                      },
                                      { "<": [9999, { var: "weight" }] },
                                    ],
                                  },
                                  { var: "totalAmount" },
                                  {
                                    "math.round": [
                                      {
                                        "*": [
                                          { var: "goldRatePerGram" },
                                          { var: "weight" },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        rulesFor: null,
                        regex: null,
                        options: [],
                        regexErrorMessage: null,
                        errorIconPath: null,
                        rowNo: null,
                        columnNo: null,
                        placeholderText: "",
                        maxAmountLimit: 5000000,
                        fieldName: "totalAmount",
                        numberOnly: true,
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
                    fieldName: "loanApplicationTableVariable1",
                    showLabel: true,
                    labelInfo: null,
                    groupName: null,
                    groupIndex: null,
                    showField: true,
                  },
                ],
                options: {
                  columnSize: 1,
                  validityEmitter: new Subject<void>(),
                  formValueEmitter: new Subject<void>(),
                },
              },
              chartSection: {
                title: "Break of Articles Value",
                eligibilityText: "Your Loan Eligibility is",
                noteText:
                  "These are approximate values. The actual values will depend upon the valuation report by the bank authorized appraiser",
                data: [],
                chartType: "PIE_CHART",
                updateChart: new Subject<void>(),
              },
              totalEligbleAmount: 0,
            },
          },
        },
        UDYAM_VERIFY: {
          showLeftContent: false,
          showSubStepper: true,
          showStepper: false,
          skipPage: false,
          fieldLabel: "Continue",
          formSubmitFlow: [
            {
              submitflow: "verifyUdyam",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                ["microservicetoken", "oauthAccessToken"],
                ["infoType", "STATIC", "udhyam"],
                ["requestFor", "STATIC", "COMPANY_DETAIL"],
                "loanUuid",
                ["udhyamNumber", "textVariable3"],
              ],
              validateResponse: {
                if: [
                  {
                    "==": [
                      {
                        var: "formSubmitResponse.code",
                      },
                      "200",
                    ],
                  },
                  "PROCEED",
                  {
                    cat: [
                      "ERROR[ERROR_MESSAGE]",
                      {
                        var: "formSubmitResponse.message",
                      },
                    ],
                  },
                ],
              },
              validationErrorMessage: "Please provide a valid udyam number",
              apiError: "PRODUCT_ERROR",
              saveResponseToCapturedData: true,
            },
            {
              submitflow: "companyProfileUpdate",
              saveResponseToCapturedData: true,
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: [
                "access_token",
                ["microservicetoken", "oauthAccessToken"],
                "loanUuid",
                ["companyCategory", "STATIC", "Sole Proprietorship"],
                ["isOnboarding", "STATIC", "false"],
                ["isValidationRequired", "STATIC", false],
                [
                  "companyName",
                  "currentFormSubmitResponses.verifyUdyam.mappingFields.companyName",
                ],
                ["companyIdentityNumberOne", "UDYAM_VERIFY.textVariable3"],
              ],
            },
            {
              submitflow: "nameMatch_v2",
              saveResponseToCapturedData: true,
              dataFeedCloud: ["product", "formValue", "capturedData"],
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
                    { "==": [{ "var": "formSubmitResponse.code" }, "200"] },"PROCEED",
                    {"cat":["PRODUCT_ERROR[PARAMS]errorCode=",{"var":"formSubmitResponse.message"}]}
                ]
              },
              "apiError": "PRODUCT_ERROR"
            },
            {
              submitflow: "updatesubStatus",
              dataFeedCloud: ["product", "formValue"],
              params: [
                "access_token",
                "loanUuid",
                ["newSubStatus", "STATIC", "SUB_STATUS_6"],
                ["subStatusChangeDescription", "STATIC", "Udyam Verification"],
              ],
              validateResponse: {
                if: [
                  {
                    "==": [
                      {
                        var: "formSubmitResponse.code",
                      },
                      "200",
                    ],
                  },
                  "PROCEED",
                  {
                    cat: [
                      "ERROR[ERROR_MESSAGE]",
                      {
                        var: "formSubmitResponse.message",
                      },
                    ],
                  },
                ],
              },
              apiError: "PRODUCT_ERROR",
              journeyEventCodeAfterResponseFailure: "UDYAM_VERIFY",
            }
          ],
          dataScopeFetchFlow: [
            {
              fetchflow: "borrowerDetails",
              dataFeedCloud: ["product", "formValue", "capturedData"],
              params: ["access_token", ["microservicetoken", "oauthAccessToken"], "loanUuid"],
            }
          ],

          prepopulationRemaps:{
            "textVariable3": 
                "metaData.capturedData.object.UDYAM_NUMBER",
                
            
          }
        },
      },
    },
  };


  //journey Events are the events which we need to perform at instant of a journey
  journeyEventCodes = {
    LA77: {
      MOBILE_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_1",
          subStatusChangeDescription: "Mobile Number Verified",
        },
      },
      EMAIL_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_2",
          subStatusChangeDescription: "Email verification",
        },
      },
      KYC_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_3",
          subStatusChangeDescription: "Aadhar Verification",
        },
      },
      PERSONAL_DETAILS_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_4",
          subStatusChangeDescription: "Personal Details Completed",
        },
      },

      ACCOUNT_CREATION: {
        subStatus: {
          newSubStatus: "SUB_STATUS_5",
          subStatusChangeDescription: "Account Creation Complete",
        },
      },
      PAN_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_3",
          subStatusChangeDescription: "Pan Verification",
        },
      },
      UDYAM_VERIFY: {
        subStatus: {
          newSubStatus: "SUB_STATUS_6",
          subStatusChangeDescription: "Udyam Verification",
        },
      },
      "LEAD_GENERATE":{
        "APPICE_EVENT":{
          "key":"AGLLeadGen",
          "properties":{
            "LeadID": ["loanDetails.crmLeadId"],
            "LeadGeneratedDate": ["loanDetails.dateCreated"],
            "ContinuetoSBA":false
          }
        }
      }
    },
  };

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
}
