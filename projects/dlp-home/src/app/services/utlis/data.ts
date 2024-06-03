export let homeMenu = [
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
                                    "Get your Home Loan with the Integreat with minimal documentation.",
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
                                    "Improve your farming business with Integreat Crop Loan. Apply Now!",
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
]

export let homeBanner =[
    {
        image: "assets/images/Digital-Product.webp",
        title: "",
        description: "",
    },
    {
        image: "assets/images/Home-Loan.webp",
        title: "",
        description: "",
    },
    {
        image: "assets/images/kisan-card.webp",
        title: "",
        description: "",
    },
    {
        image: "assets/images/MSME-Loan.webp",
        title: "",
        description: "",
    },
];

export let landingPageBanner = [
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

export let footerContent = {
    contactus:["Call : 1800 103 1906 ( Tollfree ) for general Enquires",
"Call : 1800 220 229 ( Tollfree ) for covid support",
"Call : (022) – 40919191 ( Chargable Number ) for 24x7"],
footervalue:`Site best viewed at 1366x768 resolution in Chrome 55 +, IE 10 +, Firefox 47 +,
Android 10+ & latest version`,
footerbottom:`2021 Integreat. All rights reserved | Disclaimer | Privacy Policy`,
popularProducts : [
    {name: "Agriculture"}, {name: "Corporate Credit"}, {name: "Insurance"}, {name: "Government Business Products"},
    {name: "MSME"}, {name: "Account Creation"}, {name: "Retail"}, {name: "Third Party Products - Fund"}],
    CalculatorsList :[
        {name: "Personal Loan EMI Calculator"}, {name: "Eligibility Calculator"}, {name: "Agri Gold Loan Calculator"}, {name: "More Calculators"}],
    locateList : [
        {name: "Find Branch", url: "https://www.Integreat.co.in/Home/Locateus?parmtype=Branch"}, {
            name: "Find ATM",
            url: ""
        }, {name: "Find Aadhaar Seva Kendra", url: "https://www.Integreat.co.in/Home/Locateus?parmtype=Branch"}]

}

export let loanProductInfo = [
    {
        id: 'sa',
        code: 'SBA',
        image: 'assets/icons/loan1.png',
        name: 'Savings Account',
        info: 'Open a Savings Bank Account online in a jiffy!',
        color: '#197DFC',
        navigateToMicroserviceUrl:"savings-account",
        configKey: 'is_sa_enabled',
        isMicroService: true,
        navigateUrl:"/savings-account/",
        url: 'product/core/choose-loan',
        productToNavigate: 'savings-account',
        showDescription : true,
        productCode:'SBA',
        isActive:true,
        productType:'SAVING_ACCOUNT'
    },
    {
        id: 'sm',
        code: 'SML',
        image: 'assets/icons/loan5.png',
        name: 'Shishu-Mudra Loan',
        limit:"(upto Rs 50,000)",
        info: 'Applying Mudra loan was never so easy! Apply Now!',
        color: '#FD6738',
        navigateToMicroserviceUrl:"shishu-mudra",
        configKey: 'is_sml_enabled',
        isMicroService: true,
        navigateUrl:"/pmmy/",
        url:"product/basicinfo/customer-type",
        showDescription : true,
        productCode:'SML',
        isActive:true,
        productType:'SHISHU_MUDRA'
    },
    {
        id: 'pl',
        code: 'PTL',
        image: 'assets/icons/loan3.png',
        name: 'Personal Loan',
        info: 'Don’t dream! Live your dream! Apply for a Personal Loan with minimal documentation.',
        color: '#297F87',
        navigateToMicroserviceUrl:"personal-loan-express",
        configKey: 'is_pl_enabled',
        isMicroService: true,
        navigateUrl:"/personal-loan/",
        url: 'product/basicinfo/customer-type',
        showDescription : true,
        productCode:'PTLEX',
        isActive:true,
        productType:'PERSONAL_LOAN_EXPRESS'
    },
    {
        id: 'gl',
        code: 'LA776',
        image: 'assets/icons/loan4.png',
        name: 'Agri Gold Loan',
        info: 'Use Gold to unlock your Golden Future! Apply Now!',
        color: '#7C83FD',
        navigateToMicroserviceUrl:"gold-loan",
        configKey: 'is_gl_enabled',
        isMicroService: true,
        navigateUrl:"/gold-loan/",
        url: 'product/basicinfo/mobile-verify',
        showDescription : true,
        productCode:'LA776',
        isActive:true,
        productType:'GOLD_LOAN'
    },
    {
        id: 'cc',
        code: 'CCA',
        image: 'assets/icons/loan5.png',
        name: 'Credit Card',
        info: 'Getting a Credit Card is just a few clicks away!',
        color: '#297F87',
        navigateToMicroserviceUrl:"kisan-credit-card",
        configKey: 'is_cc_enabled',
        isMicroService: true,
        navigateUrl:"/credit-card/",
        url: 'product/credit-card/choose-loan',
        showDescription : true,
        productCode:'CCA',
        isActive:true,
        productType:'CREDIT_CARD'
    },
    {
        id: 'kcc-crop',
        code: 'LA763',
        image: 'assets/icons/loan4.png',
        name: 'Kisan Credit Card',
        info: 'Improve your farming business with BOI Kisan Credit Card.',
        color: '#297F87',
        navigateToMicroserviceUrl:"kisan-credit-card",
        configKey: 'is_kcc_crop_enabled',
        isMicroService: true,
        navigateUrl:"/kisan-credit-card/",
        url: 'product/basicinfo/account-number-verification',
        showDescription : true,
        productCode:'LA763',
        isActive:true,
        productType:'KCC_CROP'
    },
    {
        id: 'vehicle-loan',
        code: 'VLN',
        image: 'assets/icons/loan2.png',
        name: 'Vehicle Loan',
        info: 'Grab your dream wheels digitally without any hassle!.',
        color: '#297F87',
        navigateToMicroserviceUrl:"vehicle-loan",
        configKey: 'is_vl_enabled',
        isMicroService: true,
        navigateUrl:"/vehicle-loan/",
        url: 'product/basicinfo/customer-type',
        showDescription : true,
        productCode:'VLN',
        isActive:true,
        productType:'VEHICLE_LOAN'
    },
    {
        id: 'kishore-mudra',
        code: 'KML',
        image: 'assets/icons/loan5.png',
        name: 'Kishore-Mudra Loan',
        limit:"(Rs 50,001 to 5,00,000)",
        info: 'Applying Mudra Loan Was Never So Easy! Apply Now.',
        color: '#FF6B6B',
        navigateToMicroserviceUrl:"kishore-mudra",
        configKey: 'is_kml_enabled',
        isMicroService: true,
        navigateUrl:"/pmmy/",
        url: 'product/basicinfo/customer-type',
        showDescription : true,
        productCode:'KML',
        isActive:true,
        productType:'KISHORE_MUDRA'
      },
      {
        id: 'tarun-mudra',
        code: 'TML',
        image: 'assets/icons/loan5.png',
        name: 'Tarun-Mudra Loan',
        limit:"(Rs 5,00,001 to 10,00,000)",
        info: 'Applying Mudra Loan Was Never So Easy! Apply Now.',
        color: '#297F87',
        navigateToMicroserviceUrl:"tarun-mudra",
        configKey: 'is_tml_enabled',
        isMicroService: true,
        navigateUrl:"/pmmy/",
        url: 'product/basicinfo/customer-type',
        showDescription : true,
        productCode:'TML',
        isActive:true,
        productType:'TARUN_MUDRA'
    },
    
    // {
    //     id: "personal-loan-express",
    //     image: "assets/icons/loan4.png",
    //     name: "Personal Loan Express",
    //     info: "Don’t dream! Live your dream! Apply for a Personal Loan with minimal documentation.",
    //     color: "#7C83FD",
    //     isActive: true,
    //     url: "/personal-loan/",
    //     showDescription: true,
    //     productCode: "PTLEX",
    //     productType: "PERSONAL_LOAN_EXPRESS",
    // },
    
];

export let getHelpInfo = [
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
            subContent: "Integreat.callcentre@Integreat.co.in",
        },
    },
    {
        componentType: "PARAGRAPH",
        mandatory: false,
        className: "pargh-content",
        validateSection: false,
        sectionContent: {
            isShow: true,
            paragraphData: "Integreat.callcentre@Integreat.co.in",
        },
    },
];

export let AadharConsent = [
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
                        consentType: "STATIC",
                        consentCode: null,
                        submitConsentCodes: [],
                        label:
                            "I hereby provide my voluntary consent to Integreat to use the Aadhar details provided by me for authentication and agree to terms and conditions related to Aadhar consent and updation",
                        isMultiLabel: true,
                        completed: null,
                    },
                    {
                        consentType: "STATIC",
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
export let applicationConfig ={
    clientName:"Integreat",
    clientShortName:"Integreat"
}
export let termsAndConditionsInfo = [
    {
        "label": 'Terms & Conditions',
        "linkType": 'POPUP',
        "isShow": true,
        "componentType": 'ORDERED_LIST',
        "sectionContent": {
            "isShow": true,
            "listItem": ["Any Resident Indian who is citizen of India as per FEMA guidelines & having age 18 years and above and provides his/her details in the application form for opening Account offered by Integreat (“Bank”) is referred as Customer.",
                "By providing his/her details, customer agrees to the terms and conditions of the Bank as listed in Integreat Terms & Conditions link.",
                "By sharing all the information, customer agrees and consents to provide his/her name, contact details and other information on and at will basis to the Bank.",
                "Bank shall not be liable for any connectivity/ signal/ data issues leading to non-completion or wrong/false/incomplete information being provided by the customer leading to the incompletion of his/her application.",
                "The customer herewith agrees to provide his/ her Valid Aadhaar number voluntary (if customer wishes to open Savings or Fixed deposit account through Video KYC) and Valid Pan Card Number. He/she understands that opening an account is subject to correct, complete, and accurate information as provided to Bank.",
                "Customer agrees that the name in the account will be as per the name updated in Aadhaar Number database and bank shall not be responsible for any erroneous credentials being updated through Aadhaar data base.",
                "Application once submitted cannot be withdrawn by the customer. Bank shall not be liable to pay for any costs (technical/ data plan related or otherwise) incurred by the customer while sharing his/her details on the application.",
                "The customer herewith agrees to provide the accurate documentation and information as listed in the application for the purpose of account opening. Customer understands and agrees that failure to provide requisite documentation and information shall result in rejection of application by the Bank. The customer agrees that Bank has every right to reject the account opening application, if there is/are any erroneous, incomplete or misleading information/credentials provided by the customer or for any other reason whatsoever with/without assigning any reason or if KYC documents submitted do not comply with the KYC norms of the Bank.",
                "This A/C opening process is also available for existing Integreat customers who already have a customer relationship number (Customer ID) with the bank.",
                "This A/C opening process is not available for customers who are FATCA reportable. Such customers are requested to approach the branch and to comply with requirement for opening an account.",
                "Bank reserves the right to take necessary action, legal or otherwise, if it finds any Wilful modification/ withholding of information or misrepresentation by the customer.",
                "Customers, who would like to deposit funds using the funding facility available while account opening, can do so only from their own bank account and not from a Third-Party Bank account. Bank shall be at liberty to refuse to open the accounts funded from a Third-Party Bank account at its sole discretion.",
                "Customer understands and agrees that interest on the amount funded online will be paid subject to activation of the account and only from the date when the funds has been credited into the account.",
                "The customer shall not be able to enjoy the full services provided by the bank unless the customer onboarding process is complete.",
                "Customer declares and confirms that the Bank shall be entitled to rely on all/any communication, information and details provided on the electronic form and all such communications, information and details shall be final and legally binding on the Customer.",
                "Customer understands and confirms that the Bank has every right to close or debit freeze the account, if the details provided by him/her are found to be inaccurate, incorrect or false by the Bank or for any other reason whatsoever without assigning any reason thereof. In such an event the bank shall not be liable to pay any interest on the amount of deposit & the refund of amount deposited in the account to the source account. In such an event, bank will retain the documents/video / Photographs (if any) and any other signed document submitted.",
                "The Customer understands that the Bank is offering video KYC services at the customer’s request to ease the process of account opening for him/her and the Bank shall not be liable for any unauthorized disclosure/misuse of the Customer’s information recorded during Video KYC for any reason whatsoever. The Customer shall indemnify the Bank for any claim/loss/damage/penalty suffered by the Bank due to any negligence or default on part of the customer.",
                "This application is available for opening a savings account or Fixed Deposit by Resident Indian Individuals only.",
                "The Bank reserves the right to hold the accounts in Debit Freeze or close the Account even after account activation in case of any discrepancy found as part of regular monitoring and document verification activities.",
                "The customer agrees to provide the necessary details (Mobile, Email etc.,) as per requirements at the time of submission of details through the application. Bank shall not bear any liability for any loss arising out of customer’s failure to do so.",
                "The customer herewith agrees to be contacted by the bank to receive information in respect of account maintenance, alerts, payments due, updates on existing and new products, servicing of account for sales, marketing or servicing their relationship with Integreat, or agents through Telephone/Mobile/SMS/Email/WhatsApp etc. Further he/she understands that the consent to receive calls/communications shall be valid and shall prevail over their current or any subsequent registration of their mobile number for National Do Not Call registry and shall continue to be treated as customer consent/acceptance.",
                "The customer authorizes Bank to share his/her mobile number and address with the respective mobile operator to verify customer's address at any point of time.",
                "The customer herewith agrees that if the application is rejected, Bank will retain the documents / Photographs and any other signed document submitted by the customer on the application or otherwise.",
                "The customer confirms that the account is being opened by him/her for his/her own use and that the mobile number, SIM & device used for opening the account belongs to him and same have not been shared by him with any other individual. The customer further confirms that he/she has not shared the credentials pertaining to the account opening with any other person. In case of any discrepancy, the bank reserves the right to block or close the account without any notice. Customer confirms to have read, understood, and will be bound to/ abide by the Terms and Conditions of account opening and the general terms applicable to account as available on Bank’s website at www.Integreat.in. Once an account is opened, the terms and conditions listed as hereabove shall also apply, as per the product selected by the customer.",
                "The customer agrees to complete his verification through Video KYC (VKYC).",
                "The customer agrees to the use of Penny Drop API to verify bank details provided by the customer."]
        }
    }
]

export let stepperData = {
    "SBA":{
        "indivdual":[],
        "company":[]
    },
    "SML":{
        "indivdual":[],
        "company":[]
    },
    "KML":{
        "indivdual":[],
        "company":[]
    },
    "TML":{
        "indivdual":[],
        "company":[]
    },
    "PTL":{
        "indivdual":[
            {
              "name": "Basic Information",
              "info": "10MinVerifyYou",
              "isActive": true,
              "isCompleted": false,
              "pageCode": "MOBILE_VERIFY",
              "resumeJourneySequences": [
                [
                  "INITIALIZED",
                  "SUB_STATUS_1"
                ],
                [
                  "INITIALIZED",
                  "SUB_STATUS_2"
                ]
              ]
            },
            {
              "name": "Application details,Documents",
              "info": "10MinVerifyYou",
              "isActive": false,
              "isCompleted": false,
              "subStep": [
                {
                  "id": "001",
                  "pageCode": "MORE_INFO",
                  "isActive": false,
                  "name": "More Information",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "INITIALIZED",
                      "SUB_STATUS_14"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_3"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_4"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_15"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_5"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_6"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_7"
                    ]
                  ],
                },
                {
                  "id": "002",
                  "pageCode": "PERSONAL_DETAILS",
                  "isActive": false,
                  "name": "Personal Information",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "INITIALIZED",
                      "SUB_STATUS_10"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_11"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_12"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_13"
                    ],
                    [
                      "INITIALIZED",
                      "SUB_STATUS_17"
                    ],
                    [
                      "AWAITING_APPROVAL_L4",
                      "SUB_STATUS_1"
                    ]
                  ],
                },
                {
                  "id": "003",
                  "pageCode": "EMPLOYMENT_DETAILS",
                  "isActive": false,
                  "name": "Account Number",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_1"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_2"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_3"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_4"
                    ]
                  ]
                },
                {
                  "id": "004",
                  "pageCode": "DOCUMENT_UPLOAD_V2",
                  "isActive": false,
                  "name": "Account Number",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_9"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_8"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_7"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_5"
                    ],
                    [
                      "AWAITING_APPROVAL_L21",
                      "SUB_STATUS_6"
                    ],
                    [
                      "AWAITING_APPROVAL_L6",
                      "SUB_STATUS_1"
                    ],
                    [
                      "AWAITING_APPROVAL_L6",
                      "SUB_STATUS_2"
                    ],
                    [
                      "AWAITING_APPROVAL_L6",
                      "SUB_STATUS_3"
                    ],
                    [
                      "AWAITING_APPROVAL_L6",
                      "SUB_STATUS_4"
                    ],
                    [
                      "AWAITING_APPROVAL_L31",
                      "SUB_STATUS_1"
                    ]
                  ]
                }
              ]
            },
            {
              "name": "Sanction details, E-sign",
              "info": "10MinVerifyYou",
              "isActive": false,
              "isCompleted": false,
              "pageCode": "SANCTION",
              "subStep": [
                {
                  "id": "001",
                  "pageCode": "SANCTION_DETAILS",
                  "isActive": false,
                  "name": "Sanction Details",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "AWAITING_APPROVAL_L6",
                      "SUB_STATUS_5"
                    ],
                    [
                      "AWAITING_APPROVAL_L6",
                      "SUB_STATUS_6"
                    ],
                    [
                      "AWAITING_APPROVAL_L18",
                      "SUB_STATUS_2"
                    ],
                    [
                      "AWAITING_APPROVAL_L32",
                      "SUB_STATUS_1"
                    ]
                  ],
                },
                {
                  "id": "002",
                  "pageCode": "KEY_FACT_DETAILS",
                  "isActive": false,
                  "name": "Key Fact  Information",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "AWAITING_APPROVAL_L18",
                      "SUB_STATUS_3"
                    ],
                    [
                      "AWAITING_APPROVAL_L18",
                      "SUB_STATUS_4"
                    ]
                  ],
                },
                {
                  "id": "003",
                  "pageCode": "LOAN_SUMMARY",
                  "isActive": false,
                  "name": "Account Number",
                  "isCompleted": false,
                  "resumeJourneySequences": [
                    [
                      "APPROVED",
                      "SUB_STATUS_1"
                    ],
                    [
                      "APPROVED",
                      "SUB_STATUS_2",
                      "?esignDone=true"
                    ],
                    [
                      "AWAITING_APPROVAL_L30",
                      "SUB_STATUS_1"
                    ],
                    [
                      "AWAITING_APPROVAL_L30",
                      "SUB_STATUS_2"
                    ]
                  ]
                }
              ]
            }
          ],
        "company":[]
    },
    "VLN":{
        "indivdual":[],
        "company":[]
    },
    "LA776":{
        "indivdual":[],
        "company":[]
    },
    "LA763":{
        "indivdual":[],
        "company":[]
    }
}



