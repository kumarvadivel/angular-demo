import { Injectable, Injector } from "@angular/core";
import { SharedService } from "../shared/services/utils/shared.service";
import { ApiService } from "./api.service";
import { LogicFunctions } from "../shared/helpers/JsonLogic";
import { CommonVariableService } from "./common-variable-service";
import { ArrayMethod } from "../shared/helpers/ArrayMethods";
import { Router } from "@angular/router";
import { JourneyEventsService } from "./journey-events.service";
import { LocalStorage } from "@bl-app/shared/helpers/localStorage";
import { isEqual } from "@bl-app/shared/utils/utils";

declare let Appice: any;

@Injectable({
    providedIn: "root",
})
export class InitializeJourneyService {
    journey: any;
    private router:Router
    private ArrayMethods:ArrayMethod
    constructor(
        private theme1ApiService: ApiService,
        private sharedService: SharedService,
        private JsonLogic: LogicFunctions,
        private commonVariableService: CommonVariableService,
        public journeyEventsService: JourneyEventsService,
        private localStorage:LocalStorage,
        private inject:Injector
    ) {
        this.router = this.inject.get<Router>(Router);
        this.ArrayMethods = this.inject.get<ArrayMethod>(ArrayMethod);
        this.journey = this.createJourneyObject();
    }

    initializeJourney(product, resumeJourney, dontRouteTofirstPage) {
        this.saveProductDataToLocalStorage(product);
        let journey = this.createJourneyObject();
        journey.product = product;
        if (this.commonVariableService.tenentConfiguration.FETCH_PRODUCT_CONFIG_FROM_JSON_FILE) {
            this.fetchAndSetProductConfigFromJson(journey, product, resumeJourney, dontRouteTofirstPage);
        } else {
            this.setProductConfigFromService(journey, product, resumeJourney, dontRouteTofirstPage);
        }
    }

    mapMasterData() {
        this.theme1ApiService.fetchBranchList().then((res: any) => {
            if (res.statuscode == 200) {
                let ob = {
                    BRANCH: res.object,
                };
                sessionStorage.setItem("MASTER", JSON.stringify(ob));
            }
        });
    }

    mapPincodeData() {
        let params = {};
        this.theme1ApiService.getPincodeList(params).then((res: any) => {
            let ob = {
                PINBRANCH: res.status.pincodeList,
            };
            sessionStorage.setItem("PINMASTER", JSON.stringify(ob));
        });
    }

    mapProductData(journey, dontRoute, reesumeJourney?) {
        this.theme1ApiService.fetchLoanProducts().then((res: any) => {
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
                journey.product = {...journey.product, ...product};
                this.setJourney(journey);
            }
            if (!dontRoute) {
                this.proceedJourney();
            }
            if (reesumeJourney) {
                this.mapResumeData();
            }
        });
    }

    mapResumeData() {
        let resumeData = JSON.parse(localStorage.getItem("RESUME_APPLICATION_DATA"))
        let joureny = this.getJourney();
        joureny.product.access_token = resumeData.access_token;
        joureny.product.loanUuid = resumeData.loanUuid;
        joureny.resumeJourney = resumeData;
        joureny.resumeJourney.productCode = joureny.product.productCode;
        joureny.product = {...joureny.product, ...resumeData};
        this.setJourney(joureny);
        this.getResume();
    }

    getResume() {
        let journey = this.getJourney();
        let MainpageSequence = journey.journeyPages.individual;
        let otherpageSequence = journey.otherPages.individual;

        if(journey.product.productCode=="SML") { 
            switch(journey.constitution) {
                case 'Individual': 
                    break;
                case 'Sole Proprietorship':
                    MainpageSequence = journey.journeyPages.soleproprietorship;
                    otherpageSequence = journey.otherPages.soleproprietorship;
                    break;
                default:
                    MainpageSequence = journey.journeyPages.company;
                    otherpageSequence = journey.otherPages.company;
                    break;
            }
        } else {
            if(journey.constitution != "Individual"){
                MainpageSequence = journey.journeyPages.company;
                otherpageSequence = journey.otherPages.company;
            }
        }
        
        let pageUrl = null;
        let param;
        let sampleSeq = [journey.resumeJourney.status, journey.resumeJourney.subStatus];
        [param, pageUrl] = this.pageSequenceSearcher(MainpageSequence, sampleSeq, param, pageUrl)
        if (pageUrl) {
            [param, pageUrl] = this.pageSequenceSearcher(otherpageSequence, sampleSeq, param, pageUrl)
        }
        this.router.navigateByUrl(param ? `${pageUrl}${param}` : pageUrl).catch(e => console.log(e));
    }

    pageSequenceSearcher(pageSequence, sampleSeq, param, pageUrl) {
        pageSequence.map((pageseq) => {
            pageseq.resumeJourneySequences?.map((seq) => {
                if (
                    isEqual(seq[0], sampleSeq[0]) &&
                    isEqual(seq[1], sampleSeq[1])
                ) {
                    if (seq[2] != undefined) {
                        param = seq[2];
                    }
                    pageUrl = pageseq.url;
                }
            });
        });
        return [param, pageUrl]
    }

    proceedJourney(pageCode?, skipped?, pageconfig?) {
        if (pageconfig) {
            this.configSubmitFlowValidator(pageconfig);
        }
        let currentPage = pageCode;
        let journey = this.getJourney();
        let nextpageCode = this.findNextpageCode(pageCode);
        this.steppUpdaterforPageSequnece(
            nextpageCode,
            pageCode,
            journey,
            skipped,
            currentPage
        );
    }

    updateStepperDataFromJsonFile(pageObj, nextPageCode, journey, redirectPageObj, pageCode, redirectUrl) {
        let productConfig = this.getLocalStoreProductConfiguration();
        let journeyPages = productConfig.pageSequenceData['journeyPages'][journey.productUserType]
        let otherPages = productConfig.pageSequenceData['otherPages'][journey.productUserType]
        let journeyPageIndex = journeyPages.findIndex(f => f.pageCode == pageCode)
        if (pageCode == undefined) {
            pageObj = journeyPages[0]
            redirectPageObj = pageObj
            redirectUrl = pageObj.url
        } else {
            if (journeyPages[journeyPages.findIndex(f => f.pageCode == nextPageCode)] == undefined) {
                redirectPageObj = otherPages[otherPages.findIndex(f => f.pageCode == nextPageCode)]
            } else {
                redirectPageObj = journeyPages[journeyPages.findIndex(f => f.pageCode == nextPageCode)]
            }
            if (journeyPages[journeyPages.findIndex(f => f.pageCode == pageCode)] == undefined) {
                pageObj = otherPages[otherPages.findIndex(f => f.pageCode == pageCode)]
            } else {
                pageObj = journeyPages[journeyPageIndex]
            }
            redirectUrl = redirectPageObj?.url
        }
        return [redirectPageObj, redirectUrl, pageObj]
    }

    updateStepperDataFromLocalFile(pageCode, journey, pageObj, redirectPageObj, redirectUrl, nextPageCode) {
        let journeyPages = this.commonVariableService.pageSequenceData[journey.product.productCode]['journeyPages'][journey.productUserType]
        let otherPages = this.commonVariableService.pageSequenceData[journey.product.productCode]['otherPages'][journey.productUserType]
        let journeyPageIndex = journeyPages.findIndex(f => f.pageCode == pageCode)
        if (pageCode == undefined) {
            pageObj = journeyPages[0]
            redirectPageObj = pageObj
            redirectUrl = pageObj.url
        } else {
            if (journeyPages[journeyPages.findIndex(f => f.pageCode == nextPageCode)] == undefined) {
                redirectPageObj = otherPages[otherPages.findIndex(f => f.pageCode == nextPageCode)]
            } else {
                redirectPageObj = journeyPages[journeyPages.findIndex(f => f.pageCode == nextPageCode)]
            }
            if (journeyPages[journeyPages.findIndex(f => f.pageCode == pageCode)] == undefined) {
                pageObj = otherPages[otherPages.findIndex(f => f.pageCode == pageCode)]
            } else {
                pageObj = journeyPages[journeyPageIndex]
            }
            redirectUrl = redirectPageObj?.url
        }
        return [redirectPageObj, redirectUrl, pageObj]
    }

    steppUpdaterforPageSequnece(nextPageCode, pageCode, journey, skipped, _currentPage) {
        let redirectUrl: any, redirectPageObj: any, pageObj: any
        if (this.commonVariableService.tenentConfiguration.FETCH_PRODUCT_CONFIG_FROM_JSON_FILE === true) {
            [redirectPageObj, redirectUrl, pageObj] = this.updateStepperDataFromJsonFile(pageObj, nextPageCode, journey, redirectPageObj, pageCode, redirectUrl)
        } else {
            [redirectPageObj, redirectUrl, pageObj] = this.updateStepperDataFromLocalFile(pageCode, journey, pageObj, redirectPageObj, redirectUrl, nextPageCode)
        }
        let updatedJourney = this.updateStepper(journey, pageCode, skipped)
        let updatedsubJourney = this.updatesubstepper(updatedJourney, pageCode)
        if (pageObj.exitjourneyEventCode && pageCode != undefined) {
            this.journeyEventsService.journeyEventsExecutor(pageObj.exitjourneyEventCode, journey)
        }
        if (redirectPageObj?.entryjourneyEventCode) {
            this.journeyEventsService.journeyEventsExecutor(redirectPageObj.entryjourneyEventCode, journey)
        }
        this.setJourney(updatedsubJourney)
        this.router.navigateByUrl(redirectUrl).catch(e => console.log(e))
    }

    updateStepper(journey: any, pageCode: string, skipped: boolean): any {
        const {journeyPages, productUserType} = journey;
        const currentPageIndex = journeyPages[productUserType].findIndex((el: any) => el.pageCode === pageCode);

        if (currentPageIndex === -1) {
            return journey;
        }

        const nextPageData = journeyPages[productUserType][currentPageIndex + 1];
        const {stepperData} = journey.metaData;

        stepperData.forEach((stepData: any, index: number) => {
            

            if (stepData.subStep) {
                const {updatedSubSteps} = this.updateSubSteps(stepData.subStep, nextPageData, pageCode, skipped);
                stepData.subStep = updatedSubSteps;
            } else if (stepData.pageCode) {
                const {updatedNextStepData} = this.updateSingleStep(stepData, stepperData[index + 1], nextPageData, pageCode, skipped);
                stepperData[index + 1] = updatedNextStepData;
            }

            const {updatedStepData} = this.updateStepCompletion(stepData, stepperData[index + 1]);
            stepperData[index] = updatedStepData;
        });

        journey.metaData.stepperData = stepperData
        return journey;
    }

    updateSubSteps(subSteps: any[], nextPageData: any, pageCode: string, skipped: boolean): { updatedSubSteps: any[] } {
        const updatedSubSteps = subSteps.map((subData: any) => {
            if (subData.pageCode === nextPageData?.pageCode) {
                subData.isActive = true;
            }

            if (subData.pageCode === pageCode) {
                subData.isCompleted = !skipped;
            }

            return subData;
        });

        return {updatedSubSteps};
    }

    updateSingleStep(stepData: any, nextStepData: any, nextPageData: any, pageCode: string, skipped: boolean): {
        updatedNextStepData: any
    } {
        stepData.isActive = true;

        if (nextStepData.subStep) {
            const {updatedSubSteps} = this.updateSubSteps(nextStepData.subStep, nextPageData, pageCode, skipped);
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

        return {updatedNextStepData: nextStepData};
    }

    updateStepCompletion(stepData: any, nextStepData: any): { updatedStepData: any } {
        if (stepData.subStep) {
            stepData.subStep.map((e: any) => {
                return !e.isCompleted;
            });

            let stepperCompletion = stepData.subStep.filter(e => e.isCompleted === false)

            if (stepperCompletion.length === 0 && nextStepData) {
                nextStepData.isActive = true;
                stepData.isCompleted = true
            }
        }

        return {updatedStepData: stepData};
    }

    findNextpageCode(pageCode) {
        let journey = this.getJourney();
        let pageSequence;
        let otherPages;
        if (
            this.commonVariableService.tenentConfiguration
                .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
        ) {
            let productConfig = this.getLocalStoreProductConfiguration()
            pageSequence =
                productConfig.pageSequenceData["journeyPages"][journey.productUserType];
            otherPages =
                productConfig.pageSequenceData["otherPages"][journey.productUserType];
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
        let data_cloud = {product, capturedData};
        if (pageCode == undefined) {
            return pageSequence[0].pageCode;
        } else {
            return this.findAndMoveNextPageCode(pageSequence, pageCode, data_cloud) || this.findAndMoveNextPageCode(otherPages, pageCode, data_cloud)
        }
    }

    findAndMoveNextPageCode(pageSequence, pageCode, data_cloud) {
        let pageCodeObj = pageSequence.find((e) => e.pageCode == pageCode);
        if (pageCodeObj) {
            if (pageCodeObj.validateBeforeNextPage) {
                return this.modifynextPageCode(this.runpageValidationJson(
                    pageCodeObj.validateBeforeNextPage,
                    data_cloud,
                    pageSequence,
                    pageCode
                ), pageSequence, pageCode);
            } else {
                return pageSequence[
                pageSequence.findIndex((r) => r.pageCode == pageCode) + 1
                    ]?.pageCode;
            }
        }
    }

    runpageValidationJson(validationJson, data, pageSequence?, pageCode?) {
        for (const specifiers in validationJson) {
            if (specifiers == "pageValidate") {
                let messageCode = this.applyJsonLogic(
                    validationJson[specifiers],
                    data
                );
                this.sharedService.openSnackBar(messageCode);
            }
        }
        for (const specifiers in validationJson) {
            switch (specifiers) {
                case "navigate":
                    return this.applyJsonLogic(validationJson[specifiers], data);
                case "apiNavigate":
                    this.apiNavigate(
                        validationJson[specifiers],
                        data,
                        pageSequence,
                        pageCode
                    );
            }
        }
    }

    apiNavigate(validationJson, data, pageSequence, pageCode) {
        let params: any = this.mapDataFromCloudParameter(
            {params: validationJson[1]},
            {...data.product, ...data.capturedData}
        );
        params.url = validationJson[0];
        this.theme1ApiService.genericPostApiFetch(params).then((res: any) => {
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

    mapAppendValuesParameter(final, list, dataCloud) {
        list.forEach((j) => {
            if (typeof j == "object") {
                final = final + j[0];
            } else {
                final =
                    final +
                    this.ArrayMethods.getPathVal(
                        dataCloud,
                        this.applyJsonLogic(j, dataCloud)
                    );
            }
        });
        return final
    }

    mapDataFromCloudParameter(submitFlow, dataCloud) {
        let mappedParams = {};
        mappedParams = this.mapDataFromParameter(submitFlow.params,dataCloud)
        return mappedParams;
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
            if (section.componentType == 'CONSENT') {
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
            this.theme1ApiService.createConsent(params);
        });
    }

    saveProductDataToLocalStorage(product) {
        sessionStorage.setItem("SELECTED_PRODUCT", JSON.stringify(product.id));
        sessionStorage.setItem("SELECTED_LOAN_PRODUCT", JSON.stringify(product));
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

    navigateJourney(pageCode, isPreviwUpdate?, pageconfig?, urlParams?, fromPageCode?) {
        if (pageconfig) {
            this.configSubmitFlowValidator(pageconfig);
        }
        let pageObj, redirectUrl, frompageobj;
        const journey = this.getJourney();
        const fetchConfigFromFile = this.commonVariableService.tenentConfiguration.FETCH_PRODUCT_CONFIG_FROM_JSON_FILE;
        const sourceConfig = fetchConfigFromFile ? this.getLocalStoreProductConfiguration().pageSequenceData : this.commonVariableService.pageSequenceData[journey.product.productCode];
        pageObj = this.getPageObject(sourceConfig, journey.productUserType, pageCode);
        frompageobj = fromPageCode ? this.getPageObject(sourceConfig, journey.productUserType, fromPageCode) : undefined;
        redirectUrl = pageCode === undefined ? sourceConfig["journeyPages"][journey.productUserType][0]?.url : pageObj?.url;
        if (isPreviwUpdate) {
            redirectUrl = redirectUrl + "?isPreviwUpdate=true";
        }
        if (urlParams) {
            redirectUrl = redirectUrl + "?" + urlParams;
        }
        if (fromPageCode && frompageobj?.exitjourneyEventCode) {
            this.journeyEventsService.journeyEventsExecutor(frompageobj.exitjourneyEventCode, journey);
        }
        if (pageObj?.entryjourneyEventCode) {
            this.journeyEventsService.journeyEventsExecutor(pageObj.entryjourneyEventCode, journey);
        }
        const updatedJourney = this.updateStepperTillPageCode(journey, pageCode);
        const updatedsubJourney = this.updatesubstepper(updatedJourney, pageCode);
        this.setJourney(updatedsubJourney);

        this.router.navigateByUrl(redirectUrl).catch((e) => {
            console.error("ERROR  :", e)
        });
    }

    getPageObject(sourceConfig, userType, pageCode) {
        const pageIndexInJourney = sourceConfig["journeyPages"][userType].findIndex(f => f.pageCode == pageCode);
        const pageIndexInOther = sourceConfig["otherPages"][userType].findIndex(f => f.pageCode == pageCode);
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

    setLocalStoreProductConfiguration(configData) {
        this.localStorage.SessionSetItem(
            "PRODUCT_CONFIGURATION",
            configData
        );
    }

    getLocalStoreProductConfiguration() {
        return this.localStorage.SessionGetItem("PRODUCT_CONFIGURATION");
    }

    updateStepperGroupData(journey, groupIndx, pageCode) {
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
        return journey
    }

    findStepperGroupIndex(journey, groupIndx, pageCode) {
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
        return [journey, groupIndx]
    }

    appiceEvent(eventName, product) {
        let prop = {
            ProductID: product.loanPurposeUuid,
            ProductName: product.name,
        };
        if (JSON.parse(sessionStorage.getItem("utm_source"))) {
            prop["OpenTrigger"] = "SocialMedia";
        } else {
            let referrer = JSON.parse(sessionStorage.getItem("document_referer"));
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
        let obj = {key: eventName, properties: prop};
        try{
            if(typeof Appice != 'undefined'){
                Appice.recordEvent({key: obj.key, segment: obj.properties});
            }
        }catch(e){
          
        }
    }

    private createJourneyObject() {
        return {
            afterCompleteFlow: {urlToRedirect: ""},
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
        dontRouteTofirstPage
    ) {
        this.commonVariableService.globalLoaderState = true;
        this.theme1ApiService
            .getProductStaticConfig({url: `${product.productCode}.json`})
            .then(
                (response) => {
                    this.commonVariableService.globalLoaderState = false;
                    let configData = this.checkAndDecryptConfigData(response);
                    this.setLocalStoreProductConfiguration(configData)
                    this.bindProductConfigDataToJourney(journey, configData);
                    this.bindStepperData(journey, product, configData);
                    this.mapPincodeData();
                    this.setJourney(journey);
                    this.mapProductData(journey, dontRouteTofirstPage, resumeJourney);
                }
            );
    }

    private checkAndDecryptConfigData(response) {
        if (
            this.commonVariableService.tenentConfiguration["encrypt-configuration"]
        ) {
            let decryptedStr = this.theme1ApiService.decryptFormString(
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

    /**The `getPageObject` function handles the logic for finding the page object for the next or current page in the journey.
     * It first checks whether the page sequence data is being fetched from a JSON file or from a service. It then looks for the page
     * object in the journey pages and other pages for the given product user type. If the page object is not found, it returns undefined.
     */
    // private getPageObject(nextPageCode, pageCode, journey) {
    //     const productConfig = this.getProductConfiguration(journey);
    //     if (productConfig.pageSequenceData) {
    //         return (
    //             this.findPageInPageSequence(
    //                 productConfig.pageSequenceData.journeyPages[journey.productUserType],
    //                 nextPageCode
    //             ) ||
    //             this.findPageInPageSequence(
    //                 productConfig.pageSequenceData.otherPages[journey.productUserType],
    //                 nextPageCode
    //             ) ||
    //             this.findPageInPageSequence(
    //                 productConfig.pageSequenceData.journeyPages[journey.productUserType],
    //                 pageCode
    //             ) ||
    //             this.findPageInPageSequence(
    //                 productConfig.pageSequenceData.otherPages[journey.productUserType],
    //                 pageCode
    //             )
    //         );
    //     } else {
    //         const pageSequenceData =
    //             this.commonVariableService.pageSequenceData[
    //             journey.product.productCode
    //             ];
    //         return (
    //             this.findPageInPageSequence(
    //                 pageSequenceData.journeyPages[journey.productUserType],
    //                 nextPageCode
    //             ) ||
    //             this.findPageInPageSequence(
    //                 pageSequenceData.otherPages[journey.productUserType],
    //                 nextPageCode
    //             ) ||
    //             this.findPageInPageSequence(
    //                 pageSequenceData.journeyPages[journey.productUserType],
    //                 pageCode
    //             ) ||
    //             this.findPageInPageSequence(
    //                 pageSequenceData.otherPages[journey.productUserType],
    //                 pageCode
    //             )
    //         );
    //     }
    // }
    /**The `getProductConfiguration` function handles the logic for fetching the product configuration data.
     * It checks whether the `FETCH_PRODUCT_CONFIG_FROM_JSON_FILE` flag is set, and if it is, it reads the data from local storage.
     * Otherwise, it reads the data from the `commonVariableService`.
     */
    // private getProductConfiguration(journey) {
    //     return this.commonVariableService.tenentConfiguration
    //         .FETCH_PRODUCT_CONFIG_FROM_JSON_FILE
    //         ? this.getLocalStoreProductConfiguration()
    //         : {
    //             pageSequenceData:
    //                 this.commonVariableService.pageSequenceData[
    //                 journey.product.productCode
    //                 ],
    //         };
    // }
    /**The `findPageInPageSequence` function is a helper function that finds a page object in a page sequence by page code.
     */
    // private findPageInPageSequence(pageSequence, pageCode) {
    //     return pageSequence?.find((page) => page.pageCode === pageCode);
    // }
    /**The `getRedirectPageObject` function handles the logic for determining the redirect page object.
     * If the `pageCode` parameter is undefined, it returns the `pageObj` parameter. Otherwise, it returns the `redirectPageObj` parameter, or the first individual page in the journey pages if `redirectPageObj` is undefined.
     */
    // private getRedirectPageObject(pageObj, pageCode, journey) {
    //     return pageCode === undefined
    //         ? pageObj
    //         : pageObj === undefined
    //             ? journey.product.journeyPages.individualPages[0]
    //             : pageObj;
    // }
    /**The `getRedirectUrl` function handles the logic for determining the redirect URL. If the `pageCode` parameter is undefined,
     * it returns the URL of the `redirectPageObj` parameter. Otherwise, it returns the URL of the `pageObj` parameter,
     * or the URL of the first individual page in the journey pages if `pageObj` is undefined.
     */
    // private getRedirectUrl(redirectPageObj, pageCode, journey) {
    //     return pageCode === undefined
    //         ? redirectPageObj.url
    //         : redirectPageObj === undefined
    //             ? journey.product.journeyPages.individualPages[0].url
    //             : redirectPageObj.url;
    // }
    /**The `updateJourneyObject` function updates the journey object with the new page information.
     * It sets the `currentPage` property to the given `pageCode`, and updates the `completed` and `skipped` properties
     * of the individual pages in the journey accordingly.
     */
    // private updateJourneyObject(journey, pageCode, skipped) {
    //     const updatedJourney = Object.assign({}, journey);
    //     updatedJourney.currentPage = pageCode;
    //     updatedJourney.journeyPages.individualPages.forEach((page) => {
    //         if (page.pageCode === pageCode) {
    //             page.skipped = skipped;
    //             page.completed = true;
    //         } else {
    //             page.skipped = false;
    //         }
    //     });
    //     return updatedJourney;

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
        dontRouteTofirstPage
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
        this.mapProductData(journey, dontRouteTofirstPage, resumeJourney)
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

    // }
    /** The `executeEvents` function executes the exit journey event for the current page (if any) and the entry journey event for the redirect page (if any).
     */
    // private executeEvents(pageObj, redirectPageObj, journey, pageCode) {
    //     if (pageObj && pageObj.exitjourneyEventCode && pageCode !== undefined) {
    //         this.journeyEventsService.journeyEventsExecutor(
    //             pageObj.exitjourneyEventCode,
    //             journey
    //         );
    //     }
    //     if (redirectPageObj && redirectPageObj.entryjourneyEventCode) {
    //         this.journeyEventsService.journeyEventsExecutor(
    //             redirectPageObj.entryjourneyEventCode,
    //             journey
    //         );
    //     }
    // }
    private updatesubstepper(journey, pageCode) {
        if (pageCode) {
            journey.metaData.substepperData?.forEach((stepData) => {
                if (stepData.pageCode == pageCode) {
                    stepData.isActive = true;
                }
                if (stepData.isActive === true) {
                    if (stepData.pageCode == pageCode) {
                        stepData.isCompleted = true;
                    }
                }
            });
        }
        return journey;
    }

    pageGroupIndexPageSequence(journey,groupIndx,pageCode){
        journey.metaData.stepperData.forEach((group,indx)=>{
            if(group.pageCode && group.pageCode==pageCode){
                groupIndx = indx
            }
            if(group.subStep){
                group.subStep.forEach(substep=>{
                if(substep.pageCode && substep.pageCode == pageCode){
                    groupIndx = indx
                }
                })
            }
        })
        return groupIndx
    }

    updateJourneypageSequenceforStepper(journey,groupIndx,pageCode){
        journey.metaData.stepperData.forEach((stepData,i) => {
            if(i<groupIndx){
                stepData.isActive=true
                stepData.isCompleted=true
                if(stepData.subStep){
                stepData.subStep.forEach(subData=>{
                    subData.isActive=true
                    subData.isCompleted=true
                })
                }
            }
            if(i==groupIndx){
                stepData.isActive=true
                if(stepData.subStep){
                let sustepidx = stepData.subStep.findIndex(el=>el.pageCode == pageCode)
                stepData.subStep.forEach((subData,si)=>{
                    if(si<sustepidx){
                    subData.isActive=true
                    subData.isCompleted=true
                    }
                    if(si==sustepidx){
                    subData.isActive = true
                    }
                })
                }
            }
            
            })
        return journey
    }
    private updateStepperTillPageCode(journey, pageCode?, _skipped?) {
        let i = 0
        let currentpageIndex = journey.journeyPages[journey.productUserType].findIndex(el => el.pageCode == pageCode)
        if(pageCode && currentpageIndex!=-1){
        if(!journey.journeyPages[journey.productUserType][currentpageIndex].lastPage || journey.journeyPages[journey.productUserType][currentpageIndex].lastPage!==true){
            //find group index of the page code
            let groupIndx;
            groupIndx = this.pageGroupIndexPageSequence(journey,groupIndx,pageCode)
            journey = this.updateJourneypageSequenceforStepper(journey,groupIndx,pageCode)
        }
        }
        return journey
    }

    private appiceInitializer(product) {
        this.journey = this.getJourney();
        if (this.journey.product.productCode == 'BL10AB') {
            this.appiceEvent("NKMVisit", product);
        }
    }
}
