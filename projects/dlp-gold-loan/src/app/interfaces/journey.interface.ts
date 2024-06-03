export interface IJourney {
    afterCompleteFlow: IAfterCompleteFlow
    constitution: string
    productUserType: string
    product: IProduct
    metaData: IMetaData
    tabsData: ITabsDaum[]
    journeyPages: IJourneyPages
    otherPages: IOtherPages
    carouselBanner: ICarouselBanner
    localisation: ILocalisation
  }
  
  export interface IAfterCompleteFlow {
    urlToRedirect: string
  }
  
  export interface IProduct {
    id: string
    image: string
    name: string
    info: string
    color: string
    isActive: boolean
    url: string
    showDescription: boolean
    productCode: string
    productType: string
    isCbsFields_ShowAndHide: boolean
    loanPurposeUuid: string
    loanPurposeCode: string
    financialProductType: string
    iconURL: any
    forIndividual: boolean
    forCorporate: boolean
    forGroup: boolean
    productGroupType: IProductGroupType
    productGroupName: string
    crmLeadCode: string
    finacleRequest: string
    minLoanAmount: number
    sortIndex: number
    svgIcon: any
    productGroupSortIndex: number
    productGroupsvgIcon: string
    lineOfBusinessType: string
    lineOfBusinessName: string
    journeyType: string[]
    allowedSource: any
    multipleEndStatusForWebJourney: any
    multipleEndSubStatusForWebJourney: any
    noOfMaxVehicleDetails: number
    enableEsignOnBranchPortal: boolean
    enableParkingBranchFeature: boolean
    interestRateWebJourney: number
    access_token: string
    loanUuid: string
    oauthAccessToken: string
    loanDetailsWithAccessToken:string
  }
  
  export interface IProductGroupType {
    enumType: string
    name: string
  }
  
  export interface IMetaData {
    capturedData: ICapturedData
    externalData: IExternalData
    masterData: IMasterData
    globalScopeData: IGlobalScopeData
    commonProperty: ICommonProperty
    stepperData: IStepperDaum[]
    substepperData: ISubstepperDaum[]
  }
  
  export interface ICapturedData {
    status: string
    code: string
    message: string
  }
  
  export interface IExternalData {}
  
  export interface IMasterData {}
  
  export interface IGlobalScopeData {
    productListForProductGroup: IProductListForProductGroup
  }
  
  export interface IProductListForProductGroup {
    loanProductList: ILoanProductList[]
    loanProductCount: number
    code: number
    status: string
  }
  
  export interface ILoanProductList {
    loanPurposeUuid: string
    loanPurposeCode: string
    name: string
    financialProductType: string
    iconURL: any
    isActive: boolean
    forIndividual: boolean
    forCorporate: boolean
    forGroup: boolean
    productGroupType: IProductGroupType2
    productGroupName: string
    crmLeadCode: string
    finacleRequest: string
  }
  
  export interface IProductGroupType2 {
    enumType: string
    name: string
  }
  
  export interface ICommonProperty {}
  
  export interface IStepperDaum {
    name: string
    info: string
    isActive: boolean
    isCompleted: boolean
    subStep: ISubStep[]
  }
  
  export interface ISubStep {
    id: string
    pageCode: string
    isActive: boolean
    name: string
    isCompleted: boolean
  }
  
  export interface ISubstepperDaum {
    name: string
    info: string
    isActive: boolean
    isCompleted: boolean
    pageCode: string
  }
  
  export interface ITabsDaum {
    displayType: string
    name: string
    label: string
    docReqData?: IDocReqData
    displayData?: any[]
  }
  
  export interface IDocReqData {
    Individual: IIndividual[]
    "Sole Proprietorship": ISoleProprietorship[]
  }
  
  export interface IIndividual {
    name: string
    label: string
    data: IDaum[]
  }
  
  export interface IDaum {
    label: string
    icon: string
  }
  
  export interface ISoleProprietorship {
    name: string
    label: string
    data: IDaum2[]
  }
  
  export interface IDaum2 {
    label: string
    icon: string
  }
  
  export interface IJourneyPages {
    individual: IIndividual2[]
    company: ICompany[]
  }
  
  export interface IIndividual2 {
    pageIndex: number
    pageCode: string
    pageName: string
    status: string
    subStatus: any
    subStatusChangeDescription: string
    lastPage: boolean
    url: string
    resumeJourneySequences: string[][]
  }
  
  export interface ICompany {
    pageIndex: number
    pageCode: string
    pageName: string
    subStatus: any
    subStatusChangeDescription: string
    url: string
    resumeJourneySequences: string[][]
    status?: string
    lastPage?: boolean
  }
  
  export interface IOtherPages {
    individual: IIndividual3[]
    company: any[]
  }
  
  export interface IIndividual3 {
    pageIndex: number
    pageCode: string
    pageName: string
    url: string
    resumeJourneySequences: any[]
    status?: string
    subStatus?: string
    subStatusChangeDescription?: string
    lastPage?: boolean
  }
  
  export interface ICarouselBanner {
    individual: IIndividual4
    company: ICompany2
  }
  
  export interface IIndividual4 {
    carouselImages: ICarouselImage[]
  }
  
  export interface ICarouselImage {
    image: string
    title: string
    description: string
  }
  
  export interface ICompany2 {
    carouselImages: ICarouselImage2[]
  }
  
  export interface ICarouselImage2 {
    image: string
    title: string
    description: string
  }
  
  export interface ILocalisation {}
  