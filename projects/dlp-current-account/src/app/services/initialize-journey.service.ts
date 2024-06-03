import { Injectable, Injector } from "@angular/core";
import { SharedService } from "../shared/services/utils/shared.service";
import { ApiService } from "./api.service";
import { LogicFunctions } from "../shared/helpers/JsonLogic";
import { CommonVariableService } from "./common-variable-service";
import { ArrayMethod } from "../shared/helpers/ArrayMethods";
import { Router } from "@angular/router"; 
import { JourneyEventsService } from "./journey-events.service";
import { LocalStorage } from "@ca-app/shared/helpers/LocalStorage";
import { isEqual } from "@ca-app/shared/utils/utils";

declare let Appice: any;

@Injectable({
  providedIn: "root",
})
export class InitializeJourneyService {
  journey: any;
  localStorage: LocalStorage;
  JsonLogic: LogicFunctions;
  constructor(
    private apiService: ApiService,
    private sharedService: SharedService, 
    private commonVariableService: CommonVariableService,
    public ArrayMethods: ArrayMethod,
    public journeyEventsService: JourneyEventsService,
    public router: Router,
    private injector: Injector
  ) {
    this.localStorage = this.injector.get<LocalStorage>(LocalStorage);
    this.JsonLogic = this.injector.get<LogicFunctions>(LogicFunctions);
    this.journey = this.createJourneyObject();
  }

  initializeJourney(product, resumeJourney?, dontRouteTofirstPage?,initializercallback?) {
    this.saveProductDataToLocalStorage(product);
    let journey = this.createJourneyObject();
    journey.product = product;

    if (
      this.commonVariableService.tenentConfiguration
        .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
    ) {
      this.fetchAndSetProductConfigFromJson(
        journey,
        product,
        resumeJourney,
        dontRouteTofirstPage,
        initializercallback
      );
    } else {
      this.setProductConfigFromService(
        journey,
        product,
        resumeJourney,
        dontRouteTofirstPage,
        initializercallback
      );
    }
  }

  private mapMasterData() {
    //pincode master
    //need to add pincode masters
    //branch master
    this.apiService.fetchBranchList().then((res: any) => {
      if (res.statuscode == 200) {
        let ob = {
          BRANCH: res.object,
        };
        this.localStorage.SessionSetItem("MASTER", ob);
      }
    });
  }

  private mapPincodeData() { 
    this.apiService.getPincodeList().then((res: any) => {
      let ob = {
        PINBRANCH: res.status.pincodeList,
      };
      sessionStorage.setItem("PINMASTER", JSON.stringify(ob));
    });
  }

  private mapProductData(journey, dontRoute, reesumeJourney,initializercallback) {
    this.apiService.fetchLoanProducts().then((res: any) => {
      let product;
      if (journey.product.productCode == "PTLEX") {
        product = res.loanProductList.find((f) => f.loanPurposeCode == "PTL");
        this.appiceInitializer(product);
      } else {
        product = res.loanProductList.find(
          (f) => f.loanPurposeCode == journey.product.productCode
        );
        this.appiceInitializer(product);
      }
      if (product != undefined) {
        journey.product = { ...journey.product, ...product };
        this.setJourney(journey);
      }
      if (!dontRoute) {
        this.proceedJourney();
      }
      if (reesumeJourney) {
        this.mapResumeData();
      }
      if(dontRoute && !reesumeJourney && initializercallback){
        initializercallback.functionskel.call({...initializercallback.arguments,...this})
      }
    });
  }

  private mapResumeData() {
    let resumeData = JSON.parse(localStorage.getItem("RESUME_APPLICATION_DATA"))
    let joureny = this.getJourney();
    joureny.product.access_token = resumeData.access_token;
    joureny.product.loanUuid = resumeData.loanUuid;
    joureny.resumeJourney = resumeData;
    joureny.resumeJourney.productCode = joureny.product.productCode;
    joureny.product = { ...joureny.product, ...resumeData };
    this.setJourney(joureny);
    this.getResume();
  }

  private getResume() {
    let journey = this.getJourney();
    let MainpageSequence = journey.journeyPages.individual;
    let otherpageSequence = journey.otherPages.individual;
    let pageUrl = null;
    let param;
    let sampleSeq = [
      journey.resumeJourney.status,
      journey.resumeJourney.subStatus,
    ];
    [param, pageUrl] = this.pageSequenceSearcher(
      MainpageSequence,
      sampleSeq,
      param,
      pageUrl
    );
    if (pageUrl) {
      [param, pageUrl] = this.pageSequenceSearcher(
        otherpageSequence,
        sampleSeq,
        param,
        pageUrl
      );
    }
    this.router
      .navigateByUrl(param ? `${pageUrl}${param}` : pageUrl)
      .catch((e) => console.log(e));
  }
  private pageSequenceSearcher(pageSequence, sampleSeq, param, pageUrl) {
    pageSequence.map((pageseq) => {
      pageseq.resumeJourneySequences?.map((seq) => {
        if (isEqual(seq[0], sampleSeq[0]) && isEqual(seq[1], sampleSeq[1])) {
          if (seq[2] != undefined) {
            param = seq[2];
          }
          pageUrl = pageseq.url;
        }
      });
    });
    return [param, pageUrl];
  }
  private proceedJourney(pageCode?, skipped?, pageconfig?) {
    if (pageconfig) {
      this.configSubmitFlowValidator(pageconfig);
    }
    let currentPage = pageCode;
    let journey = this.getJourney();
    //fetch the redirect url
    //poc functionality
    let nextpageCode = this.findNextpageCode(pageCode);
    this.steppUpdaterforPageSequnece(
      nextpageCode,
      pageCode,
      journey,
      skipped,
      currentPage
    );
  }
 
  steppUpdaterforPageSequnece(
    nextPageCode,
    pageCode,
    journey,
    skipped,
    _currentPage
  ) {
    let redirectUrl: any, redirectPageObj: any, pageObj: any;
    if(this.router.url.includes('isPreviwUpdate')){
      nextPageCode = 'JOURNEY_PREVIEW';
    } 
    if (
      this.commonVariableService.tenentConfiguration
        .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
    ) {
      [redirectPageObj, redirectUrl, pageObj] =
        this.updateStepperDataFromJsonFile(
          pageObj,
          nextPageCode,
          journey,
          redirectPageObj,
          pageCode,
          redirectUrl
        );
    } else {
      [redirectPageObj, redirectUrl, pageObj] =
        this.updateStepperDataFromLocalFile(
          pageCode,
          journey,
          pageObj,
          redirectPageObj,
          redirectUrl,
          nextPageCode
        );
    }
    let updatedJourney = this.updateStepper(journey, pageCode, skipped);
    let updatedsubJourney = this.updatesubstepper(updatedJourney, pageCode);
    if (pageObj.exitjourneyEventCode && pageCode != undefined) {
      this.journeyEventsService.journeyEventsExecutor(
        pageObj.exitjourneyEventCode,
        journey
      );
    }
    if (redirectPageObj.entryjourneyEventCode) {
      this.journeyEventsService.journeyEventsExecutor(
        redirectPageObj.entryjourneyEventCode,
        journey
      );
    }
    this.setJourney(updatedsubJourney);
    if(redirectUrl){
      this.router.navigateByUrl(redirectUrl).catch(console.error);
    }

    
  }
  private updateStepperDataFromJsonFile(
    pageObj,
    nextPageCode,
    journey,
    redirectPageObj,
    pageCode,
    redirectUrl
  ) {
    let productConfig = this.getLocalStoreProductConfiguration();
    let journeyPages =
      productConfig.pageSequenceData["journeyPages"][journey.productUserType];
    let otherPages =
      productConfig.pageSequenceData["otherPages"][journey.productUserType];
    if (journeyPages.findIndex((f) => f.pageCode == nextPageCode) == -1) {
      pageObj =
        otherPages[otherPages.findIndex((f) => f.pageCode == nextPageCode)];
    } else {
      pageObj =
        journeyPages[journeyPages.findIndex((f) => f.pageCode == nextPageCode)];
    }
 
    if (pageCode == undefined) {
      redirectPageObj = journeyPages[0];
      redirectUrl = journeyPages[0].url;
    } else {
      redirectPageObj = pageObj;
      redirectUrl = pageObj?.url;
    }
    return [redirectPageObj, redirectUrl, pageObj];
  }

  private updateStepperDataFromLocalFile(
    pageCode,
    journey,
    pageObj,
    redirectPageObj,
    redirectUrl,
    nextPageCode
  ) {
    let journeyPages =
      this.commonVariableService.pageSequenceData[journey.product.productCode][
        "journeyPages"
      ][journey.productUserType];
    let otherPages =
      this.commonVariableService.pageSequenceData[journey.product.productCode][
        "otherPages"
      ][journey.productUserType];

    let currentPageIndex = journeyPages.findIndex(
      (f) => f.pageCode == pageCode
    );
    let redirectPageIndex = journeyPages.findIndex(
      (f) => f.pageCode == nextPageCode
    );
    if (pageCode == undefined) {
      pageObj = journeyPages[0];
      redirectPageObj = journeyPages[0];
      redirectUrl =journeyPages[0].url;
    } else {
      pageObj= (currentPageIndex == -1) ? otherPages[otherPages.findIndex((f) => f.pageCode == pageCode)]:journeyPages[currentPageIndex];
      redirectPageObj= (redirectPageIndex == -1) ? otherPages[otherPages.findIndex((f) => f.pageCode == nextPageCode)]:journeyPages[redirectPageIndex];
      redirectUrl = redirectPageObj?.url;
    }
    return [redirectPageObj, redirectUrl, pageObj];
  }
  updateStepper(journey: any, pageCode: string, skipped: boolean): any {
    const { journeyPages, productUserType } = journey;
    const currentPageIndex = journeyPages[productUserType].findIndex(
      (el: any) => el.pageCode === pageCode
    );

    if (currentPageIndex === -1) {
      return journey;
    }

    const nextPageData = journeyPages[productUserType][currentPageIndex + 1];
    const { stepperData } = journey.metaData;

    stepperData.forEach((stepData: any, index: number) => {
      if (!stepData.isActive) {
        return;
      }

      if (stepData.subStep) {
        const { updatedSubSteps } = this.updateSubSteps(
          stepData.subStep,
          nextPageData,
          pageCode,
          skipped
        );
        stepData.subStep = updatedSubSteps;
      } else if (stepData.pageCode) {
        const { updatedNextStepData } = this.updateSingleStep(
          stepData,
          stepperData[index + 1],
          nextPageData,
          pageCode,
          skipped
        );
        stepperData[index + 1] = updatedNextStepData;
      }

      const { updatedStepData } = this.updateStepCompletion(
        stepData,
        stepperData[index + 1]
      );
      stepperData[index] = updatedStepData;
    });

    if(journey.resumeJourney){
      journey = this.updateStepperTillPageCode(journey, pageCode);
    }

    journey.metaData.stepperData = stepperData;
    return journey;
  }
  private updateStepCompletion(
    stepData: any,
    nextStepData: any
  ): { updatedStepData: any } {
    if (stepData.subStep) {
      const updatedSubSteps = stepData.subStep.map((e: any) => {
        return !e.isCompleted;
      });

      if (!updatedSubSteps.includes(true) && nextStepData) {
        nextStepData.isActive = true;
        stepData.isCompleted = true;
      }
    }

    return { updatedStepData: stepData };
  }
  private updateSingleStep(
    stepData: any,
    nextStepData: any,
    nextPageData: any,
    pageCode: string,
    skipped: boolean
  ): {
    updatedNextStepData: any;
  } {
    stepData.isActive = true;

    if (nextStepData.subStep) {
      const { updatedSubSteps } = this.updateSubSteps(
        nextStepData.subStep,
        nextPageData,
        pageCode,
        skipped
      );
      nextStepData.subStep = updatedSubSteps;
      nextStepData.isActive = true;
    } else if (nextStepData.pageCode === nextPageData.pageCode) {
      nextStepData.isActive = true;
    }

    if (stepData.pageCode === pageCode) {
      stepData.isCompleted = true;
    }

    if (nextStepData) {
      nextStepData.isActive = true;
    }

    return { updatedNextStepData: nextStepData };
  }
  private updateSubSteps(
    subSteps: any[],
    nextPageData: any,
    pageCode: string,
    skipped: boolean
  ): { updatedSubSteps: any[] } {
    const updatedSubSteps = subSteps.map((subData: any) => {
      if (subData.pageCode === nextPageData?.pageCode) {
        subData.isActive = true;
      }

      if (subData.pageCode === pageCode) {
        subData.isCompleted = !skipped;
      }

      return subData;
    });

    return { updatedSubSteps };
  }
  findNextpageCode(pageCode) {
    let journey = this.getJourney();
    let pageSequence;
    let otherPages;
    if (
      this.commonVariableService.tenentConfiguration
        .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
    ) {
      let productConfig = this.getLocalStoreProductConfiguration();
      try{
      pageSequence =
        productConfig.pageSequenceData["journeyPages"][journey.productUserType];
      otherPages =
        productConfig.pageSequenceData["otherPages"][journey.productUserType];
      }catch(e){
        console.trace()
      }
    } else {
      pageSequence =
        this.commonVariableService.pageSequenceData[
          journey.product.productCode
        ]["journeyPages"][journey.productUserType];
      otherPages =
        this.commonVariableService.pageSequenceData[
          journey.product.productCode
        ]["otherPages"][journey.productUserType];
    }
    let product = journey.product;
    let capturedData = journey.metaData.capturedData;
    let data_cloud = { product, capturedData };
    if (pageCode == undefined) {
      return pageSequence[0].pageCode;
    } else {
      return (
        this.findAndMoveNextPageCode(pageSequence, pageCode, data_cloud) ||
        this.findAndMoveNextPageCode(otherPages, pageCode, data_cloud)
      );
    }
  }
  private findAndMoveNextPageCode(pageSequence, pageCode, data_cloud) {
    let pageCodeObj = pageSequence.find((e) => e.pageCode == pageCode);
    if (pageCodeObj) {
      if (pageCodeObj.validateBeforeNextPage) {
        return this.modifynextPageCode(
          this.runpageValidationJson(
            pageCodeObj.validateBeforeNextPage,
            data_cloud,
            pageSequence,
            pageCode
          ),
          pageSequence,
          pageCode
        );
      } else {
        return pageSequence[
          pageSequence.findIndex((r) => r.pageCode == pageCode) + 1
        ]?.pageCode;
      }
    }
  }
  private runpageValidationJson(validationJson, data, pageSequence?, pageCode?) {
    for (const specifiers in validationJson) {
      if (specifiers === "pageValidate") {
        let messageCode = this.applyJsonLogic(validationJson[specifiers], data);
        this.sharedService.openSnackBar(messageCode);
      }
    }

    //only for the navigate logic other logic rules are executed above
    for (const specifiers in validationJson) {
      if (specifiers === "navigate") {
        return this.applyJsonLogic(validationJson[specifiers], data);
      } else if(specifiers === "apiNavigate"){
        this.apiNavigate(
          validationJson[specifiers],
          data,
          pageSequence,
          pageCode
        );
      }
    }
  }

  private apiNavigate(validationJson, data, pageSequence, pageCode) {
    let params: any = this.mapDataFromCloudParameter(
      { params: validationJson[1] },
      { ...data.product, ...data.capturedData }
    );
    params.url = validationJson[0];
    this.apiService.genericPostApiFetch(params).then((res: any) => {
      res["pageOk"] = true;
      let nextPageCode = this.modifynextPageCode(
        this.applyJsonLogic(validationJson[2], res),
        pageSequence,
        pageCode
      );
      this.steppUpdaterforPageSequnece(
        nextPageCode,
        pageCode,
        this.getJourney(),
        undefined,
        pageCode
      );
    });
  }
  mapDataFromCloudParameter(submitFlow, dataCloud) {
    let mappedParams = {};
    submitFlow.params.forEach((f) => {
      if (typeof f == "object") {
        if (f[1] == "STATIC") {
          mappedParams[f[0]] = f[2];
        } else if (f[1] == "APPEND_VALUES") {
            let final = "";
            final = this.mapAppendValuesParameter(final, f[2], dataCloud);
            mappedParams[f[0]] = final;
          } else if (f[1] == "RULE_OUTPUT") {
              mappedParams[f[0]] = this.applyJsonLogic(f[2], dataCloud);
            } else {
              mappedParams[f[0]] = this.ArrayMethods.getPathVal(
                dataCloud,
                this.applyJsonLogic(f[1], dataCloud)
              );
            }
          
      } else {
        mappedParams[f] = this.ArrayMethods.getPathVal(
          dataCloud,
          this.applyJsonLogic(f, dataCloud)
        );
      }
    });
    mappedParams = this.modifyParametertypes(mappedParams);
    return mappedParams;
  }

  private mapAppendValuesParameter(final, list, dataCloud) {
    list.forEach((j) => {
      if (typeof j == "object") {
        final = final + " "+ j[0];
      } else {
        final =
          final + " "+
          this.ArrayMethods.getPathVal(
            dataCloud,
            this.applyJsonLogic(j, dataCloud)
          );
      }
    });
    return final;
  } 

  modifyParametertypes(params) {
    for (const prop in params) {
      if (params[prop] == null || params[prop] == undefined) {
        params[prop] = "";
      }
      if (Array.isArray(params[prop])) {
        params[prop] = JSON.stringify(params[prop]);
      }
    }
    return params;
  }

  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
  }

  configSubmitFlowValidator(config) {
    config.forEach((section) => {
      if (section.componentType == "CONSENT") { 
          this.submitConsents(section); 
      }
    });
  }

  submitConsents(section) {
    section.sectionContent.config.options.forEach((consent) => {
      if (consent.submitConsentCodes) {
        if (consent.submitConsentData) {
          this.createConsents(consent.submitConsentData);
        }
      }
    });
  }

  createConsents(submitConsentData) {
    let journey = this.getJourney();
    submitConsentData.forEach((data) => {
      let params = {
        access_token: journey.product.access_token,
        loanApplicationUuid: journey.product.loanUuid,
        consentCode: data.code,
        isConsentAccepted: true,
        consentVersion: data.consentVersion,
      };
      this.apiService.createConsent(params);
    });
  }

  saveProductDataToLocalStorage(product) {
    this.localStorage.SessionSetItem("SELECTED_PRODUCT", product.id);
    this.localStorage.SessionSetItem("SELECTED_LOAN_PRODUCT", product);
  }
  modifynextPageCode(result, pageSequence, pageCode) {
    switch (result) {
      case "NEXT":
        return pageSequence[
          pageSequence.findIndex((r) => r.pageCode == pageCode) + 1
        ].pageCode;
      case "PREVIOUS":
        return pageSequence[
          pageSequence.findIndex((r) => r.pageCode == pageCode) - 1
        ].pageCode;
      case "STAY":
        return pageSequence[
          pageSequence.findIndex((r) => r.pageCode == pageCode)
        ].pageCode;
      default:
        return result;
    }
  }
  navigateJourney(
    pageCode,
    isPreviwUpdate?,
    pageconfig?,
    urlParams?,
    fromPageCode?
  ) {
    if (pageconfig) {
      this.configSubmitFlowValidator(pageconfig);
    }
    let pageObj, redirectUrl, frompageobj;
    const journey = this.getJourney();
    if(this.router.url.includes('isPreviwUpdate')){
      pageCode = 'JOURNEY_PREVIEW';
    } 
    const fetchConfigFromFile =
      this.commonVariableService.tenentConfiguration
        .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE;
    const sourceConfig = fetchConfigFromFile
      ? this.getLocalStoreProductConfiguration().pageSequenceData
      : this.commonVariableService.pageSequenceData[
          journey.product.productCode
        ];
    pageObj = this.getPageObject(
      sourceConfig,
      journey.productUserType,
      pageCode
    );
    frompageobj = fromPageCode
      ? this.getPageObject(sourceConfig, journey.productUserType, fromPageCode)
      : undefined;
    redirectUrl =
      pageCode === undefined
        ? sourceConfig["journeyPages"][journey.productUserType][0]?.url
        : pageObj?.url;
    if (isPreviwUpdate) {
      redirectUrl = redirectUrl + "?isPreviwUpdate=true";
    }
    if (urlParams) {
      redirectUrl = redirectUrl + "?" + urlParams;
    }
    if (fromPageCode && frompageobj?.exitjourneyEventCode) {
      this.journeyEventsService.journeyEventsExecutor(
        frompageobj.exitjourneyEventCode,
        journey
      );
    }
    if (pageObj?.entryjourneyEventCode) {
      this.journeyEventsService.journeyEventsExecutor(
        pageObj.entryjourneyEventCode,
        journey
      );
    }
    const updatedJourney = this.updateStepperTillPageCode(journey, pageCode);
    const updatedsubJourney = this.updatesubstepper(updatedJourney, pageCode);
    this.setJourney(updatedsubJourney);

    this.router.navigateByUrl(redirectUrl).catch(console.error);
  } 
  private getPageObject(sourceConfig, userType, pageCode) {
    const pageIndexInJourney = sourceConfig["journeyPages"][userType].findIndex(
      (f) => f.pageCode == pageCode
    );
    const pageIndexInOther = sourceConfig["otherPages"][userType].findIndex(
      (f) => f.pageCode == pageCode
    );
    if (pageIndexInJourney !== -1) {
      return sourceConfig["journeyPages"][userType][pageIndexInJourney];
    } else if (pageIndexInOther !== -1) {
      return sourceConfig["otherPages"][userType][pageIndexInOther];
    }
    return null;
  }
  setJourney(journey) {
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }

  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY");
  }

  private setLocalStoreProductConfiguration(configData) {
    this.localStorage.SessionSetItem("PRODUCT_CONFIGURATION", configData);
  }

  private getLocalStoreProductConfiguration() {
    return this.localStorage.SessionGetItem("PRODUCT_CONFIGURATION");
  }

  private createJourneyObject() {
    return {
      afterCompleteFlow: { urlToRedirect: "" },
      constitution: "Individual",
      productUserType: "individual",
      product: {},
      metaData: {
        capturedData: {},
        externalData: {},
        masterData: {},
        globalScopeData: {},
        commonProperty: {},
      },
    };
  }

  private fetchAndSetProductConfigFromJson(
    journey,
    product,
    resumeJourney,
    dontRouteTofirstPage,
    initializercallback
  ) {
    this.commonVariableService.globalLoaderState = true;
    this.apiService
      .getProductStaticConfig({ url: `${'CA'}.json` })
      .then(
        (response) => {
          this.commonVariableService.globalLoaderState = false;
          let configData = this.checkAndDecryptConfigData(response);
          this.setLocalStoreProductConfiguration(configData);
          this.bindProductConfigDataToJourney(journey, configData);
          this.bindStepperData(journey, product, configData);
          this.mapPincodeData();
          this.setJourney(journey);
          this.mapProductData(journey, dontRouteTofirstPage, resumeJourney,initializercallback);
        });
  }

  private checkAndDecryptConfigData(response) {
    if (
      this.commonVariableService.tenentConfiguration["encrypt-configuration"]
    ) {
      let decryptedStr = this.apiService.decryptFormString(
        response.encryptedData
      );
      return JSON.parse(decryptedStr);
    } else {
      return response;
    }
  }

  private bindProductConfigDataToJourney(journey, configData) {
    journey.tabsData = configData.tabsData;
    journey.journeyPages = configData.pageSequenceData.journeyPages;
    journey.otherPages = configData.pageSequenceData.otherPages;
    journey.carouselBanner = configData.banner;
    journey.localisation = configData.localisation || {};
  }

  private bindStepperData(journey, product, configData) {
    journey.metaData.stepperData =
      configData.stepperData[journey.productUserType];
    journey.metaData.substepperData =
      this.commonVariableService.verifiedFieldsData[product.productCode][
        journey.productUserType
      ];
  }

  private setProductConfigFromService(
    journey,
    product,
    resumeJourney,
    dontRouteTofirstPage,
    initializercallback
  ) {
    journey.tabsData = this.commonVariableService.tabsData[product.productCode];
    journey.journeyPages =
      this.commonVariableService.pageSequenceData[
        product.productCode
      ].journeyPages;
    journey.otherPages =
      this.commonVariableService.pageSequenceData[
        product.productCode
      ].otherPages;
    journey.carouselBanner =
      this.commonVariableService.banner[journey.product.productCode];

    if (this.commonVariableService.productLocalisations[product.productCode]) {
      journey.localisation =
        this.commonVariableService.productLocalisations[product.productCode];
    } else {
      journey.localisation = {};
    }

    this.bindStepperDataFromService(journey, product);
    this.setJourney(journey);
    this.mapProductData(journey, dontRouteTofirstPage, resumeJourney,initializercallback);
    this.mapPincodeData();
  }

  private bindStepperDataFromService(journey, product) {
    journey.metaData.stepperData =
      this.commonVariableService.stepperData[product.productCode][
        journey.productUserType
      ];
    journey.metaData.substepperData =
      this.commonVariableService.verifiedFieldsData[product.productCode][
        journey.productUserType
      ];
  }
 
  private updatesubstepper(journey, pageCode) {
    if (pageCode) {
       journey.metaData.substepperData.forEach((stepData) => { 
        if (stepData.pageCode == pageCode) {
          stepData.isActive = true;
        }
        if (stepData.isActive) {
          if (stepData.pageCode == pageCode) {
            stepData.isCompleted = true;
          }
        }
      });
    }
    return journey;
  }

  private updateStepperTillPageCode(journey, pageCode?, _skipped?) {
    let i = 0;
    let currentpageIndex = journey.journeyPages[
      journey.productUserType
    ].findIndex((el) => el.pageCode == pageCode);
    if (pageCode && currentpageIndex != -1) {
      if (
        !journey.journeyPages[journey.productUserType][currentpageIndex]
          .lastPage ||
        journey.journeyPages[journey.productUserType][currentpageIndex]
          .lastPage !== true
      ) {
        //find group index of the page code
        let groupIndx;
        groupIndx = this.pageGroupIndexPageSequence(
          journey,
          groupIndx,
          pageCode
        );
        journey = this.updateJourneypageSequenceforStepper(
          journey,
          groupIndx,
          pageCode
        );
      }
    }
    return journey;
  }
  private pageGroupIndexPageSequence(journey, groupIndx, pageCode) {
    journey.metaData.stepperData.forEach((group, indx) => {
      if (group.pageCode && group.pageCode == pageCode) {
        groupIndx = indx;
      }
      if (group.subStep) {
        group.subStep.forEach((substep) => {
          if (substep.pageCode && substep.pageCode == pageCode) {
            groupIndx = indx;
          }
        });
      }
    });
    return groupIndx;
  }

  private updateJourneypageSequenceforStepper(journey, groupIndx, pageCode) {
    journey.metaData.stepperData.forEach((stepData, i) => {
      if (i < groupIndx) {
        stepData.isActive = true;
        stepData.isCompleted = true;
        if (stepData.subStep) {
          stepData.subStep.forEach((subData) => {
            subData.isActive = true;
            subData.isCompleted = true;
          });
        }
      }
      if (i == groupIndx) {
        stepData.isActive = true;
        if (stepData.subStep) {
          let sustepidx = stepData.subStep.findIndex(
            (el) => el.pageCode == pageCode
          );
          stepData.subStep.forEach((subData, si) => {
            if (si < sustepidx) {
              subData.isActive = true;
              subData.isCompleted = true;
            }
            if (si == sustepidx) {
              subData.isActive = true;
            }
          });
        }
      }
    });
    return journey;
  }

  private appiceInitializer(product) {
    this.journey = this.getJourney(); 
    this.appiceEvent("VisitSavingsPage", product); 
  }

  private appiceEvent(eventName, product) {
    let prop = {
      ProductID: product.loanPurposeUuid,
      ProductName: product.name,
      ApplyNow: 'True', 
      Journey: 'CA'
    };
    if (this.localStorage.SessionGetItem("utm_source")) {
      prop["OpenTrigger"] = "SocialMedia";
    } else {
      let referrer = this.localStorage.SessionGetItem("document_referer");
      if (
        !referrer?.includes("savings-account") &&
        !referrer?.includes("core") &&
        referrer != ""
      ) {
        prop["OpenTrigger"] = "Organic";
      } else {
        prop["OpenTrigger"] = "Direct";
      }
    }
    let obj = { key: eventName, properties: prop };
    try{
      if(typeof Appice != 'undefined'){
        Appice.recordEvent({ key: obj.key, segment: obj.properties });
      }
    }catch(e){
      
    }
  }

  mapDataFromParameter(params, dataCloud) {
    let mappedParams = {};
    params.forEach((f) => {
        if (typeof f == "object") {
            if (f[1] == "STATIC") {
                mappedParams[f[0]] = f[2];
            } else if (f[1] == "APPEND_VALUES") {
                    let final = "";
                    final = this.mapAppendValuesParameter(final, f[2], dataCloud)
                    mappedParams[f[0]] = final;
                } else if (f[1] == "RULE_OUTPUT") {
                    mappedParams[f[0]] = this.applyJsonLogic(f[2], dataCloud);
                } else {
                    mappedParams[f[0]] = this.ArrayMethods.getPathVal(
                        dataCloud,
                        this.applyJsonLogic(f[1], dataCloud)
                    );
                }
        } else {
            mappedParams[f] = this.ArrayMethods.getPathVal(
                dataCloud,
                this.applyJsonLogic(f, dataCloud)
            );
        }
    });
    mappedParams = this.modifyParametertypes(mappedParams);
    return mappedParams;
}
}
