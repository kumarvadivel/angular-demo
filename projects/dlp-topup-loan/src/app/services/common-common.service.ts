import {Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {ApiService} from "./api.service";
import {SharedService} from "../shared/services/utils/shared.service";
import {CommonVariableService} from "./common-variable-service";
import {LogicFunctions} from "../shared/helpers/JsonLogic";
import {ArrayMethod} from "../shared/helpers/ArrayMethods";
import {InitializeJourneyService} from "./initialize-journey.service";
import {JourneyEventsService} from "./journey-events.service";
import {FetchFlowApiService} from "./fetch-flow-api.service";
import {SubmitFlowApiService} from "./submit-flow-api.service";
import {MetaConfigService} from "./meta-config.service";
import {LocalStorage} from "@tl-app/shared/helpers/localStorage";
import { assign, uniqBy } from "@tl-app/shared/utils/utils";
import { Formatters } from "@tl-app/shared/helpers/Formatters";
import { FormValidationService } from "./form-validation.service";

declare let Appice: any;

@Injectable({
    providedIn: "root",
})
export class CommonCommonService {
    mySub = new Subject();
    journey: any;
    metaConfigService: MetaConfigService;
    submitFlowApiService: SubmitFlowApiService;
    fetchFlowApiService: FetchFlowApiService;
    journeyEventsService: JourneyEventsService;
    initializeJourneyService: InitializeJourneyService;
    localStorage: LocalStorage;
    formatters:Formatters;
    formValidationService:FormValidationService;
    constructor(
        public commonVariableService: CommonVariableService,
        public theme1ApiService: ApiService,
        public sharedService: SharedService,
        public router: Router,
        public JsonLogic: LogicFunctions,
        public ArrayMethods: ArrayMethod,
        private injector: Injector
    ) {
        this.formValidationService = this.injector.get<FormValidationService>(FormValidationService)
        this.formatters = this.injector.get<Formatters>(Formatters)
        this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService)
        this.initializeJourneyService = this.injector.get<InitializeJourneyService>(InitializeJourneyService)
        this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService)
        this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService)
        this.journeyEventsService = this.injector.get<JourneyEventsService>(JourneyEventsService)
        this.localStorage = this.injector.get<LocalStorage>(LocalStorage)
    }

    isShowError(config) {
        config.forEach((section) => {
            if (section.componentType == "CONSENT") {
                this.mySub.next(
                    section.sectionContent.isValid == undefined ||
                    !section.sectionContent.isValid
                );
            }
        });
    }

    public bindHeaderFooterTypes(pageType) {
        switch (pageType) {
            case "LANDING":
                this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true;
                this.commonVariableService.appLayoutConfig.isShowJourneyFooter = true;
                break;
            case "PRODUCT_ERROR":
                this.toggleJourneyHeaderfalse()
                break;
            case "MOBILE_VERIFY":
            case "ACCOUNT_VERIFY":
            case "PERSONAL_DETAILS":
            case "EMPLOYMENT_DETAILS":
            case "DOCUMENT_UPLOAD":
            case "SANCTION_DETAILS":
            case "KEY_FACT_DETAILS":
            case "CONTACT_BRANCH":
            case "BRANCH_DETAILS":
            case "BSA_INFO":
            case "ADDITIONAL_INFORMATION":
            case "STATUS_CHECK":
            case "DOCUMENT_UPLOAD_V2":
            case "COAPPLICANT_DETAILS":
            case "COAPPLICANT_MORE_INFO":
            case "COAPPLICANT_PERSONAL_DETAILS":
            case "COAPPLICANT_EMPLOYMENT_DETAILS":
            case "COAPPLICANT_DOCUMENT_UPLOAD":
                this.toggleJourneyPage()
                break;
            case "EKYC_VERIFY":
                this.toggleJourneyPage()
                break;
            case "MORE_INFO":
                this.toggleJourneyPage()
                break;
            case "LOAN_SUMMARY":
                this.toggleJourneyHeaderfalse()
                break;
            case "EMAIL_VERIFY":
                this.toggleJourneyPage()
                break;
            case "PAN_VERIFY":
                this.toggleJourneyPage()
                break;
        }
    }

    toggleJourneyHeaderfalse() {
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false;
    }

    toggleJourneyPage() {
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false;
        this.commonVariableService.appLayoutConfig.isShowSubStepper = true;
        this.commonVariableService.appLayoutConfig.isShowStepperPercentage =
            true;
    }

    sectionMandatoryValidationSystem(config) {
        return !config.every((section) => {
            if (section.sectionContent.isShow && section.mandatory) {
                switch (section.componentType) {
                    case "FORM":
                        section.sectionContent.validityEmitter.next("PINGED");
                        return section.sectionContent.formValidity?.ok;
                    case "CONSENT":
                        return section.sectionContent?.isValid;
                    case "CAPCHA":
                        section.sectionContent.validityEmitter.next();
                        return section.sectionContent?.isValid;
                    default:
                        return false;
                }
            }
            return true;
        });
    }

    SectionMandatoryValidationSystem(config) {
        return this.sectionMandatoryValidationSystem(config);
    }

    sectionValidationSystem(config) {
        const validationMessages = {
            FORM: "Please fill all the mandatory fields",
            CAPCHA: "Please fill the captcha",
            CONSENT: "Please check all the consent",
            FILE_UPLOAD: "Please upload all the documents",
        };
        const valid = config
            .filter(
                (section) => section.validateSection && section.sectionContent.isShow
            )
            .map((section) => {
                let isValid;
                switch (section.componentType) {
                    case "FORM":
                        section.sectionContent.validityEmitter.next(true);
                        section.sectionContent.formValidity.ok= this.formValidationService.MainMandatorySystem(section.sectionContent.fields)
                        isValid = section.sectionContent.formValidity?.ok;
                        break;
                    case "CONSENT":
                        this.isShowError(config);
                        section.sectionContent.validityEmitter.next();
                        isValid = section.sectionContent?.isValid;
                        break;
                    case "CAPCHA":
                    case "FILE_UPLOAD":
                        section.sectionContent.validityEmitter.next();
                        isValid = section.sectionContent?.isValid;
                    break;
                    case 'GRID':
                        isValid = this.sectionValidationSystem(section.sectionContent.items)
                    break;
                    default:
                        console.warn(`Unknown componentType: ${section.componentType}`);
                        return null;
                }
                return {ok: isValid, componentType: section.componentType};
            })
            .filter(Boolean);
        if (valid.every(({ok}) => ok)) return true;
        const componentTypefounded = valid.find(({ok}) => !ok).componentType;
        this.sharedService.openSnackBar(validationMessages[componentTypefounded]);
        return false;
    }

    SectionValidationSystem(config) {
        return this.sectionValidationSystem(config);
    }

    initializeJourney(product, resumeJourney?, dontRouteTofirstPage?) {
        this.initializeJourneyService.initializeJourney(
            product,
            resumeJourney,
            dontRouteTofirstPage
        );
    }

    mapCommonPropertyBranchMaster(data, returnKey?) {
        let homeBranch_state = [];
        let homeBranch_District = [];
        let homeBranch_city = [];
        let homeBranch = [];
        data.map((d) => {
            let state_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let district_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let city_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let branch_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            state_sampleObj.optionCode = d.state;
            state_sampleObj.optionKey = d.state;
            state_sampleObj.optionName = d.state;
            state_sampleObj.optionParentCode = null;
            state_sampleObj.optionValue = d.state;
            district_sampleObj.optionCode = d.district;
            district_sampleObj.optionKey = d.district;
            district_sampleObj.optionName = d.district;
            district_sampleObj.optionParentCode = d.state;
            district_sampleObj.optionValue = d.district;
            city_sampleObj.optionCode = d.city;
            city_sampleObj.optionKey = d.city;
            city_sampleObj.optionName = d.city;
            city_sampleObj.optionParentCode = d.district;
            city_sampleObj.optionValue = d.city;
            branch_sampleObj.optionCode = d.branchCode;
            branch_sampleObj.optionKey = d.branchCode;
            branch_sampleObj.optionName = d.branchName;
            branch_sampleObj.optionParentCode = d.city;
            branch_sampleObj.optionValue = d.branchName;
            homeBranch_state.push(state_sampleObj);
            homeBranch_District.push(district_sampleObj);
            homeBranch_city.push(city_sampleObj);
            homeBranch.push(branch_sampleObj);
        });
        homeBranch_state = uniqBy(homeBranch_state, "optionName");
        homeBranch_District = uniqBy(homeBranch_District, "optionName");
        homeBranch_city = uniqBy(homeBranch_city, "optionName");
        homeBranch = uniqBy(homeBranch, "optionName");
        if (returnKey) {
            if (returnKey == "HOME_BRANCH_STATE") {
                homeBranch_state = uniqBy(homeBranch_state, "optionName");
                return homeBranch_state;
            }
            if (returnKey == "HOME_BRANCH_CITY") {
                homeBranch_city = uniqBy(homeBranch_city, "optionName");
                return homeBranch_city;
            }
            if (returnKey == "HOME_BRANCH_DISTRICT") {
                homeBranch_District = uniqBy(homeBranch_District, "optionName");
                return homeBranch_District;
            }
            if (returnKey == "HOME_BRANCH_NAME") {
                homeBranch = uniqBy(homeBranch, "optionName");
                return homeBranch;
            }
        } else {
            homeBranch_state = uniqBy(homeBranch_state, "optionName");
            homeBranch_District = uniqBy(homeBranch_District, "optionName");
            homeBranch_city = uniqBy(homeBranch_city, "optionName");
            homeBranch = uniqBy(homeBranch, "optionName");
            return [
                homeBranch_state,
                homeBranch_District,
                homeBranch_city,
                homeBranch,
            ];
        }
    }

    mapCommonPinCode(data, returnKey?) {
        let pincode_state = [];
        let pincode_District = [];
        let pincode_city = [];
        let pincode = [];
        data.map((d) => {
            let state_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let district_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let city_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let country_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            let pincode_sampleObj = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            state_sampleObj.optionCode = d.state;
            state_sampleObj.optionKey = d.state;
            state_sampleObj.optionName = d.state;
            state_sampleObj.optionParentCode = d.pincode;
            state_sampleObj.optionValue = d.state;
            district_sampleObj.optionCode = d.district;
            district_sampleObj.optionKey = d.district;
            district_sampleObj.optionName = d.district;
            district_sampleObj.optionParentCode = d.state;
            district_sampleObj.optionValue = d.district;
            city_sampleObj.optionCode = d.city;
            city_sampleObj.optionKey = d.city;
            city_sampleObj.optionName = d.city;
            city_sampleObj.optionParentCode = d.pincode;
            city_sampleObj.optionValue = d.city;
            country_sampleObj.optionCode = d.country;
            country_sampleObj.optionKey = d.country;
            country_sampleObj.optionName = d.country;
            country_sampleObj.optionParentCode = d.country;
            country_sampleObj.optionValue = d.country;
            pincode_sampleObj.optionCode = d.pincode;
            pincode_sampleObj.optionKey = d.pincode;
            pincode_sampleObj.optionName = d.pincode;
            pincode_sampleObj.optionParentCode = null;
            pincode_sampleObj.optionValue = d.pincode;
            pincode_state.push(state_sampleObj);
            pincode_District.push(district_sampleObj);
            pincode_city.push(city_sampleObj);
            pincode.push(pincode_sampleObj);
        });
        if (returnKey) {
            if (returnKey == "PINCODE_STATE") {
                pincode_state = uniqBy(pincode_state, "optionName");
                return pincode_state;
            }
            if (returnKey == "PINCODE_CITY") {
                pincode_city = uniqBy(pincode_city, "optionName");
                return pincode_city;
            }
            if (returnKey == "PINCODE_DISTRICT") {
                pincode_District = uniqBy(pincode_District, "optionName");
                return pincode_District;
            }
            if (returnKey == "PINCODE") {
                pincode = uniqBy(pincode, "optionName");
                return pincode;
            }
        } else {
            pincode_state = uniqBy(pincode_state, "optionName");
            pincode_District = uniqBy(pincode_District, "optionName");
            pincode_city = uniqBy(pincode_city, "optionName");
            pincode = uniqBy(pincode, "optionName");
            return [pincode_state, pincode_District, pincode_city, pincode];
        }
    }

    proceedJourney(pageCode?, skipped?, pageconfig?) {
        this.submitFlowApiService.proceedJourney(pageCode, skipped, pageconfig);
    }


    appiceTypeUser() {
        let journey = this.getJourney();
        let userObj = {};
        let data =
            journey.productUserType == "individual"
                ? journey?.metaData?.capturedData?.aadharData
                : journey?.metaData?.capturedData?.udyamData;
        if (journey.productUserType == "individual") {
            userObj["name"] = data?.firstName
                ? data?.firstName + " " + data?.lastName
                : undefined;
        } else {
            userObj["name"] = data?.companyName ? data?.companyName : undefined;
        }
        userObj["gender"] = data?.gender ? data.gender : undefined;
        userObj["dob"] = data?.dateOfBirth ? data.dateOfBirth : undefined;
        userObj["phone"] = journey?.metaData?.capturedData?.mobileNumber
            ? journey?.metaData?.capturedData?.mobileNumber
            : undefined;
        userObj["email"] = data?.alternativeUsername
            ? data?.alternativeUsername
            : undefined;
        userObj["language"] = journey?.metaData?.capturedData
            ?.borrowerDetailTextVariable44
            ? journey?.metaData?.capturedData?.borrowerDetailTextVariable44
            : undefined;
            try{
                if(typeof Appice != 'undefined'){
                    Appice.setUser(userObj);
                }
            }catch(e){
                
            }
    }

    triggerAppiceEvent(eventName?, params?) {
        if (eventName == "setUser") {
            this.appiceTypeUser();
        } else {
            let obj = {key: eventName, properties: params};
            try{
                if(typeof Appice != 'undefined'){
                    Appice.recordEvent({key: obj.key, segment: obj.properties});
                } 
            }catch(e){
                
            }
        }
    }

    applyJsonLogic(validationJson, supplyData) {
        return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
    }

    saveSectionFormDataToJourney(config, pageCode?,scope?) {
        let journey: any = this.getJourney();
        config.forEach((section) => {
            if (section.componentType == "FORM") {
                section.sectionContent.formValueEmitter.next();
                section.sectionContent.formValue = this.extractFormValuesFromSectionConfig(section)
                    assign(
                        journey.metaData.capturedData,
                        section.sectionContent.formValue
                    );
                    if (pageCode) {
                        journey.metaData.capturedData[pageCode] = { ...journey.metaData.capturedData[pageCode],...section.sectionContent.formValue}
                    }
            }
        });
        if(scope)
            journey.metaData.capturedData[pageCode] = {...journey.metaData.capturedData[pageCode],scope}
        this.setJourney(journey);
    }

    modifyParametertypes(params) {
        return this.initializeJourneyService.modifyParametertypes(params);
    }

    fetchProductPageConfig(journey, pageCode) {
        return this.metaConfigService.fetchProductPageConfig(journey, pageCode);
    }

    fetchProductMetaConfig(journey, pageCode) {
        return this.metaConfigService.fetchProductMetaConfig(journey, pageCode);
    }

    ParseConfigFormJourneyPreview(config) {
        return this.metaConfigService.ParseConfigFormJourneyPreview(config);
    }

    ParseConfig(config) {
        return this.metaConfigService.ParseConfig(config);
    }

    apiCall(
{ submitflow, currentIndex, totalLength, pageCode, configList, pageconfig, extraCloudParams, _noLoader }: { submitflow; currentIndex; totalLength; pageCode; configList; pageconfig?; extraCloudParams?; _noLoader?; }    ) {
        this.submitFlowApiService.apiCall(
            { submitflow, currentIndex, totalLength, pageCode, configList, pageconfig, extraCloudParams, _noLoader }        );
    }

    apiCallJourneyPage(
        submitflow,
        currentIndex,
        totalLength,
        pageCode,
        configList,
        pageconfig?,
        extraCloudParams?
    ) {
        this.submitFlowApiService.apiCallJourneyPage(
            { submitflow, currentIndex, totalLength, pageCode, configList, pageconfig, extraCloudParams }        );
    }


    bindDataValues(name, data) {
        name["uploadedValue"] = data.Name;
        name["uuid"] = data.documentUuid;
        name["uploadFailed"] = data.documentUploadStatus;
    }


    bindValues(data, name, element) {
        name["uploadedValue"] = data.Name;
        name["uuid"] = data.documentUuid;
        if (name["uploadedValue"]) {
            element["itemUploaded"] = true;
        }
    }

    getDocumentmodified(documents, data, element) {
        documents.forEach((name) => {
            if (
                name.documentCategoryCode == "DOC17" ||
                name.documentCategoryCode == "DOC70"
            ) {
                if (data.documentType == "ONLINE_FETCH") {
                    if (name.category == "onlineFetch") {

                        this.bindValues(data, name, element)

                    }
                } else if (data.documentType == "STATEMENT_UPLOAD") {
                    if (name.category == "statementUpload") {
                        this.bindValues(data, name, element)
                    }
                } else if (data.documentType == "SCANNED_BANK_STATEMENTS") {
                    if (name.category == "scannedStatementUpload") {
                        this.bindValues(data, name, element)
                    }
                }
            }
        });

        return documents;
    }

    onResolveDocument(res) {
        this.commonVariableService.uploadedDocList =
            res.supportingDocuments.filter((obj) => obj.size > 0);
        this.localStorage.SessionSetItem(
            "UPLOADED_DOC_LIST",
            this.commonVariableService.uploadedDocList
        );
        this.commonVariableService.reqSupportingDocList = JSON.parse(
            this.localStorage.SessionGetItem("REQUIRED_SUPPORTING_DOCUMENTS")
        );
        this.commonVariableService.documentList = JSON.parse(
            this.localStorage.SessionGetItem("STATIC_DOCUMENT_LIST")
        );
        this.commonVariableService.uploadedDocList?.forEach((data) => {
            let documents: any;
            this.commonVariableService.reqSupportingDocList.forEach((item) => {
                if (data.DocumentCategoryUuid == item.documentTypeUuid) {
                    this.commonVariableService.documentList.forEach((element) => {
                        documents = element.documentList;
                        documents = this.getDocumentmodified(documents, data, element)
                        item = this.mapDocuments(item, documents, data, element)
                    });
                }
            });
        });
    }

    mapDocuments(item, documents, data, element) {
        documents.forEach((name) => {
            if (item.documentCategoryCode == 'DOC19' && data.aliasName == "Udyam Registration") {
                if (name.category == "udayamdoc") {
                    name = this.bindDataValues(name, data);
                }
            }
            if (item.documentCategoryCode == 'DOC88' && data.categoryName == "Other Documents" && name.category == "otherDoc") {
                name = this.bindDataValues(name, data);
            }
            if (item.documentCategoryCode == 'DOC55' && data.aliasName == "Personal Loan" && name.category == "salary") {
                name = this.bindDataValues(name, data);
            }
            if (item.documentCategoryCode == 'DOC66' && name.category == "scannedStatementUpload") {
                name = this.bindDataValues(name, data);
            }
            if (name["uploadedValue"]) {
                element["itemUploaded"] = true;
            }
        })
        return item
    }

    getDocumentList() {
        let params = {};
        params["access_token"] = this.journey?.product?.access_token;
        params["loanUuid"] = this.journey.product.loanUuid;
        params['microservicetoken'] = this.journey.product.oauthAccessToken
        this.theme1ApiService.getUploadedDoc(params).then((res: any) => {
            this.onResolveDocument(res)
        }, (err) => {
            this.sharedService.openSnackBar(err?.message, "error", err?.status);
        });

    }

    quickInitiateProduct(productCode) {
        let product = this.commonVariableService.loanProductInfo.find(
            (p) => p.productCode == productCode
        );
        this.initializeJourney(product);
    }

    dataparsertoOptions(obj) {
        let options = [];
        obj.forEach((d) => {
            let option = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
                loanPurposeUuid: null,
            };
            option.optionCode = d["name"];
            option.optionKey = d["name"];
            option.optionName = d["name"];
            option.optionParentProperty = d["name"];
            option.optionValue = d["name"];
            if (d.forIndividual) {
                option.optionParentCode = "Individual";
                option.loanPurposeUuid = d["loanPurposeUuid"];
            }
            if (d.forCorporate) {
                option.optionParentCode = "Sole Proprietorship";
                option.loanPurposeUuid = d["loanPurposeUuid"];
            }
            if (d.forIndividual === true && d.forCorporate) {
                let copy_option = JSON.parse(JSON.stringify(option));
                if (d.forIndividual) {
                    copy_option.optionParentCode = "Sole Proprietorship";
                    copy_option.loanPurposeUuid = d["loanPurposeUuid"];
                }
                if (d.forCorporate) {
                    copy_option.optionParentCode = "Individual";
                    copy_option.loanPurposeUuid = d["loanPurposeUuid"];
                }
                options.push(copy_option);
            }
            options.push(option);
        });
        return options;
    }

    parsePurposeofAdvancetoOptions(obj) {
        let options = [];
        obj.map((d) => {
            let option = {
                optionCode: null,
                optionKey: null,
                optionName: null,
                optionParentCode: null,
                optionParentProperty: null,
                optionValue: null,
                sortIndex: 0,
            };
            option.optionCode = d["uuid"];
            option.optionKey = d["uuid"];
            option.optionName = d["value"];
            option.optionParentCode = d["uuid"];
            option.optionParentProperty = d["uuid"];
            option.optionValue = d["uuid"];
            options.push(option);
        });
        return options;
    }

    flushJourney() {
        this.localStorage.sessionClear();
        window.open(`${window.origin}`, "_self");
    }

    journeyEventsExecutor(data?, params?) {
        this.journeyEventsService.journeyEventsExecutor(data, params);
    }

    fetchDataScopeData(
        fetchflow,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
    ) {
        this.fetchFlowApiService.fetchDataScopeData(
            fetchflow,
            totalLength,
            currentIndex,
            scope,
            fetchflowList,
            pageconfig,
            pageCode
        );
    }

    resumeApplication() {
        let resumeData = JSON.parse(localStorage.getItem("RESUME_APPLICATION_DATA"))
        let product;
        if (resumeData) {
            if (resumeData.productType == "PERSONAL_LOAN") {
                product = this.commonVariableService.loanProductInfo.find(
                    (e) => e.productType == "PERSONAL_LOAN_EXPRESS"
                );
            } else {
                product = this.commonVariableService.loanProductInfo.find(
                    (e) => e.productType == resumeData.productType
                );
            }
            if (product) {
                this.initializeJourney(product, true, true);
            }
        } else {
            this.sharedService.openSnackBar("No application to Resume");
            this.flushJourney();
        }
    }


    pageSectionContentModeration(config, dataCloud) {

        const componentTypeMapping = {
            'TITLE': 'titleData',
            'PARAGRAPH': 'paragraphData',
            'HTML_CONTENT': 'htmlData'
        }

        const modifyTitleData = (section, type, rule, dataCloud1) => {
            section.sectionContent[type] = this.applyJsonLogic(
                section.validationJson[rule],
                dataCloud1
            );
        }

        const modifyIsShow = (section, rule, dataCloud2) => {
            section.sectionContent.isShow = this.applyJsonLogic(
                section.validationJson[rule],
                dataCloud2
            );
        }

        const moderateFormData = (section, dataCloud3) => {
            section.sectionContent.fields.forEach((field) => {
                if (field.pageSectionValidationJson) {
                    for (let fieldProp in field.pageSectionValidationJson) {
                        field[fieldProp] = this.applyJsonLogic(
                            field.pageSectionValidationJson[fieldProp],
                            dataCloud3
                        );
                    }
                }
            });
        }

        const moderateTitleAndIsShow = (section, type) => {
            for (const rule in section.validationJson) {
                switch (rule) {
                    case "content":
                        modifyTitleData(section, type, rule, dataCloud);
                        break;
                    case "showSection":
                        modifyIsShow(section, rule, dataCloud);
                        break;
                }
            }
        }
        config.map((section) => {
            if (section.validationJson) {
                switch (section.componentType) {
                    case "TITLE":
                    case "PARAGRAPH":
                    case "HTML_CONTENT":
                        moderateTitleAndIsShow(section, componentTypeMapping[section.componentType])
                        break;
                    case "CONSENT":
                    case "TABLE":
                    case "CHART":
                    case "FORM":
                    case "ORDERED_LIST":
                    case "FILE_UPLOAD":
                    case "CAPCHA":
                    case "BUTTON":
                        for (const rule in section.validationJson) {
                            if (rule === 'showSection') {
                                modifyIsShow(section, rule, dataCloud);
                            }
                        }
                        break;
                }
            }
            if (section.componentType == "FORM") {
                moderateFormData(section, dataCloud)
            }
            if(section.componentType=='TABLE'){
                this.moderateTableData(section,dataCloud)
               
            }
              if(section.componentType=="GRID"){
                this.pageSectionContentModeration(section.sectionContent.items,dataCloud)
              }
        });
        return config;
    }

    moderateTableData(section,dataCloud){
        section.sectionContent.config.data.forEach(t=>{
            for(let prop in t){
                t[prop]= this.applyJsonLogic(t[prop],dataCloud)
            }
        })
    }

    findPreviouspageCode(pageCode, limitStepIdx?) {
        let journey = this.getJourney()
        let pageSequence = this.commonVariableService.pageSequenceData[journey.product.productCode]['journeyPages'][journey.productUserType]
        let prevpageCode = pageSequence[pageSequence.findIndex(r => r.pageCode == pageCode) - 1]
        this.limitSteppperUpdater(prevpageCode.pageCode, journey)
        this.router.navigateByUrl(prevpageCode.url).catch(this.catchErrors)
        this.limitStepperPrevUpdater(pageCode, journey, limitStepIdx)
    }

    limitStepperPrevUpdater(pagecode?, journey?, i = 1) {
        journey.metaData['limitStepCurrPages'] = journey.metaData.limitSteppperList[i].pages;
        let idx = journey.metaData.limitStepCurrPages.findIndex(a => a.pageCode === pagecode);
        if (i === 2 && pagecode === 'CARD_LIMIT') {
            journey.metaData.limitSteppperList[i - 1].isCompleted = false;
            journey.metaData.limitSteppperList[i].isActive = false;
            journey.metaData.limitSteppperList[i].isCompleted = false;
            journey.metaData['limitStepCurrPages'] = journey.metaData.limitSteppperList[i - 1].pages;
            journey.metaData.limitStepCurrPages[journey.metaData.limitStepCurrPages.length - 1].isCompleted = false;
        }
        if (idx) {
            journey.metaData.limitStepCurrPages[idx].isActive = false;
            journey.metaData.limitStepCurrPages[idx].isCompleted = false;
            journey.metaData.limitStepCurrPages[idx - 1].isCompleted = false;
        }
        if (idx === -1 && pagecode === 'E_SIGN') {
            journey.metaData.limitStepCurrPages[i - 1].isActive = false;
            journey.metaData.limitStepCurrPages[i - 1].isCompleted = false;
        }
        this.setJourney(journey)
    }

    limitSteppperUpdater(pagecode, journey?, _i = 1) {
        let groupindx;
        let pageindxingrp;
        journey.metaData.stepperData.map((group, i) => {
            let ok = group.subStep.find(f => f.pageCode == pagecode)
            if (ok != undefined) {
                groupindx = i
                pageindxingrp = group.subStep.findIndex(f => f.pageCode == pagecode)
            }
        })
        journey.metaData.stepperData.map((group, i) => {
            if (groupindx > i) {
                group.isActive = true
                group.isCompleted = true
                group.subStep.map(s => {
                    s.isActive = true
                    s.isCompleted = true
                })
            }
            if (groupindx == i) {
                group.isActive = true
                group.subStep.map((s, pi) => {
                    if (pageindxingrp > pi) {
                        s.isActive = true
                        s.isCompleted = true
                    }
                    if (pageindxingrp == pi) {
                        s.isActive = true
                    }
                    if (pageindxingrp < pi) {
                        s.isActive = false
                        s.isCompleted = false
                    }
                })
            }
            if (groupindx < i) {
                group.isActive = false
                group.isCompleted = false
                group.subStep.map(s => {
                    s.isActive = false
                    s.isCompleted = false
                })
            }
        })
        journey.metaData.currentSteppergrpIndx = groupindx
        this.setJourney(journey)
    }

    formDataEditDataPopulator(config, data, metaConfig) {
        const fieldMappers=(prop,mapping_Data,fieldStateConfig)=>{
            if (Array.isArray(metaConfig.prepopulationRemaps[prop])) {
                if(metaConfig.prepopulationRemaps[prop].length==3){
                    if(metaConfig.prepopulationRemaps[prop][2]=='RULE_OUTPUT'){
                      mapping_Data[prop]= this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][0],data)
                    }
                  }else{
                    mapping_Data[prop] = this.ArrayMethods.getPathVal(data,this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][0],data))
                  }
                  for(const conf in metaConfig.prepopulationRemaps[prop][1]){
                    metaConfig.prepopulationRemaps[prop][1][conf] = this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][1][conf],data)
                  }
                fieldStateConfig[prop] = metaConfig.prepopulationRemaps[prop][1];
            } else {
                mapping_Data[prop] = this.ArrayMethods.getPathVal(
                    data,
                    this.applyJsonLogic(metaConfig.prepopulationRemaps[prop], data)
                );
            }
        }
        config.forEach((section) => {
            if (section.componentType == "FORM") {
                let mapping_Data = {};
                let fieldStateConfig = {};
                if (metaConfig.prepopulationRemaps) {
                    for (const prop in metaConfig.prepopulationRemaps) {
                        fieldMappers(prop,mapping_Data,fieldStateConfig)
                    }
                    section.sectionContent.options.mappingFieldStateConfig =
                        fieldStateConfig;
                    section.sectionContent.options.mappingFields = mapping_Data;
                    section.sectionContent.options = {
                        ...section.sectionContent.options,
                    };
                }
            }
        });
        return config;
    }

    setJourney(journey) {
        this.fetchFlowApiService.setJourney(journey);
    }

    getJourney() {
        return this.fetchFlowApiService.getJourney();
    }

    navigateError(errorCode?){
        this.NavigateJourney("PRODUCT_ERROR",undefined,undefined,errorCode)
    }

    NavigateJourney(pageCode, isPreviwUpdate?, pageconfig?, urlParams?, fromPageCode?) {
        this.initializeJourneyService.navigateJourney(pageCode, isPreviwUpdate, pageconfig, urlParams, fromPageCode)
    }


    checkMobileNUmber(field) {
        let pattern;
        if (field.maxLength === 10 || field.maxLength == null) {
            pattern = /^[6789]\d{0,9}$/;
        } else {
            pattern = new RegExp('/^[6789]{1}[0-9]{0,' + (field.maxLength - 1) + '}$');
        }
        if (!pattern.test(field.value)) {
            if (field.regexMessage != null && field.regexMessage != undefined && field.regexMessage != '') {
                field.error = field.regexMessage;
            } else {
                field.error = "Mobile Number is not valid";
            }
        }

        return field;
    }

    checkMandatoryFeilds(field, verificationTrigger?) {
        field = this.checkFilling(field)
        if (field.error == null) {
            field = this.checkMinMax(field)
            field = this.checkRegex(field)
            if (field.fieldDataType == "MOBILE_NO") {
                field = this.checkMobileNUmber(field)
            }
            if (field.fieldDataType == "NUMBER" && field.isAccountNumber) {
                if (field.value.length != 15 || field.value.length == null) {
                    field.error = "Account Number is not valid";
                } else if (field.value.length == 15) {
                    field.error = ""
                }
            }
        }
        if (verificationTrigger) {
            if (field.error == null || field.prefixError == null) {
                field = this.checkfieldVerification(field)
            }
        }
        return field;
    }

    validationRegexCheckMobileNO(field) {
        if (field.fieldDataType == "MOBILE_NO") {
            let pattern
            if (field.maxLength === 10 || field.maxLength == null) {
                pattern = /^[6789]\d{0,9}$/;
            } else {
                pattern = new RegExp('^[6789]{1}[0-9]{0,' + (field.maxLength - 1) + '}$');
            }
            if (pattern.test(field.value) === false) {
                if (field.regexMessage != null && field.regexMessage != undefined && field.regexMessage != '') {
                    field.error = field.regexMessage;
                } else {
                    field.error = "Mobile Number is not valid";
                }
            }
        }
        return field
    }

    validationRegexCheckNumber(field) {
        if (field.fieldDataType == "NUMBER" && field.isAccountNumber) {
            if (field.value.length != 15 || field.value.length == null) {
                field.error = "Account Number is not valid";
            } else if (field.value.length == 15) {
                field.error = ""
            }
        }
        return field
    }

    validationCheck(field, verificationTrigger?) {
        if (field.isMandatory === true) {
            field = this.checkFilling(field)
            //check min max errors
            if (field.error == null) {
                field = this.checkMinMax(field)
            }
            if (field.error == null) {
                field = this.checkRegex(field)
                field = this.validationRegexCheckMobileNO(field)
                field = this.validationRegexCheckNumber(field)
            }
            if (verificationTrigger && (field.error == null || field.prefixError == null)) {
                field = this.checkfieldVerification(field)
            }
        } else {
            field = this.checkMinMax(field)
            if (field.error == null) {
                field = this.checkRegex(field)
            }

        }
        //this.checkErrors()
        return !field.error
    }

    checkTextField(field) {
        if (field.showprefix) {
            if (!field.value || !field.prefix) {
                field.error = `${field.fieldLabel} is required`
                field.prefixError = `${field.prefixfieldName} is required`
            }
            if (field.prefix) {
                field.prefixError = null
            } else {
                field.error = null
            }
        } else if (!field.value) {
                field.error = `${field.fieldLabel} is required`
            } else {
                field.error = null
            }

        return field
    }

    mapCheckFillingErrors(field) {
        if (field.showprefix === true) {
            if (!field.value || !field.prefix) {
                field.error = `${field.fieldLabel} is required`
                field.prefixError = `${field.prefixfieldName} is required`
            }
            if (field.prefix) {
                field.prefixError = null
            } else {
                field.error = null
            }
        } else if (!field.value) {

                field.error = `${field.fieldLabel} is required`
            } else {
                field.error = null
            }
        return field
    }

    checkFilling(field) {
        if (field.fieldDataType == 'TEXT') {
            field = this.mapCheckFillingErrors(field)

        } else if (!field.value) {

                field.error = `${field.fieldLabel} is required`
            } else if (field.fieldDataType == 'AUTO_COMPLETE') {
                    if (field.value.length == 0) {
                        field.error = `${field.fieldLabel} is required`
                    } else {
                        field.error = null
                    }
                } else {
                    field.error = null
                }
        return field
    }


    checkTextLength(field, length) {
        if (length < field.minLength && field.minLength != null) {
            field.error = `${field.fieldLabel} should be atleast ${field.minLength} characters`
        } else {
            field.error = null
        }
        if (field.error == null) {
            if (length > field.maxLength && field.maxLength != null) {
                field.error = `${field.fieldLabel} should not exceed ${field.maxLength} characters`
            } else {
                field.error = null
            }
        }
        return field;
    }

    checkNumberLength(field) {
        if (field.value < field.minLength && field.minLength != null) {
            field.error = `${field.fieldLabel} should be atleast ${field.minLength}`
        } else {
            field.error = null
        }
        if (field.error == null) {
            if (field.value > field.maxLength && field.maxLength != null) {
                field.error = `${field.fieldLabel} should not exceed ${field.maxLength}`
            } else {
                field.error = null
            }
        }

        return field;
    }

    checkMinMax(field) {
        if (['TEXT', 'TEXT_AREA', 'MOBILE_NO', 'AADHAR'].includes(field.fieldDataType)) {
            let length
            if (field.value != null) {
                length = field.value.length
            } else {
                length = null
            }
            if (length || length == 0) {
                field = this.checkTextLength(field, length);
            }
        } else if (field.fieldDataType == 'NUMBER') {
                field = this.checkNumberLength(field);
            }
        return field
    }


    checkForInvalid(field) {
        if (field.regexMessage != null && field.regexMessage != undefined && field.regexMessage != '') {
            field.error = field.regexErrorMessage;
        } else {
            field.error = `Invalid ${field.fieldLabel}`;
        }
        return field;
    }

    checkRegex(field) {
        if (field.regex != null) {
            let regex = new RegExp(field.regex);
            if (field.value != null && field.value != '') {
                if (!regex.test(field.value)) {
                    field = this.checkForInvalid(field)
                } else {
                    field.error = null
                }
            } else if (field.error) {
                    field.error = null
                }
        }
        return field
    }

    checkfieldVerification(field) {
        if (field.verificationType && !field.isVerified) {
            if (field.prefix == null || field.prefix == "") {
                field.prefixError = `${field.prefixfieldName} Verification is Required`
            }
            field.error = `${field.fieldLabel} Verification is Required`
        }
        return field
    }

    fetchDataCloud(submitFlow, config) {
        this.fetchFlowApiService.fetchDataCloud(submitFlow, config)
    }

    mapDataFromCloudParameter(submitFlow, dataCloud) {
        this.initializeJourneyService.mapDataFromCloudParameter(submitFlow, dataCloud)
    }

    mapDataFromParameter(params,data_cloud){
       return this.initializeJourneyService.mapDataFromParameter(params, data_cloud)
    }
    catchErrors(e) {
        console.error("ERROR:", e)
    }

    extractFormValuesFromSectionConfig(section) {
        let data = {};
        section.sectionContent.fields.forEach(field=>{
            data = this.processField(field, data)
        })
        return data
    }

    processField(field, data) {
        if (field.excludeToFormValue) return data;
        if (field.fieldDataType === 'ADDRESS') {
            data = this.processAddressField(field, data);
        } else {
            data = this.processRegularField(field, data);
        }
        if (field.verificationType) {
            data[`${field.fieldName}Verified`] = field.isVerified || false;
        }
        return data
    }

    processAddressField(field, data) {
        field.addressFields.forEach(addressField => {
            data = this.processAddressSubField(addressField, data)
        });
        return data
    }

    processRegularField(field, data) {
        if (this.fieldHasPrefix(field)) {
            data[field.prefixfieldName] = field.prefix;
        }
        let option
        switch (field.fieldDataType) {
            case 'DATE':
                data[field.fieldName] = field.value ? this.formatDate(field.value) : null;
                break;
            case 'DROPDOWN':
            case 'AUTO_COMPLETE':
                option = field.searchoption?.find(o => o.optionKey == field.value);
                data[field.fieldName] = option?.optionKey ||  field.value;
                if (option && field.extraFieldName) {
                    data[field.extraFieldName] = option.optionName;
                }
                break;
            case 'TABLE':
                data[field.fieldName] = field.value?.map(this.processTableRow);
                if (field.tableFooterData) {
                    data[field.tableFooterData.fieldName] = field.tableFooterData.value;
                }
                break;
            case 'PAN_CARD':
                data[field.fieldName] = field.value ? field.value.toLocaleUpperCase() : null;
                break;
            default:
                data[field.fieldName] = field.value;
                break;
        }
        return data;
    }

    processAddressSubField(addressField, data) {
        if (addressField.excludeToFormValue) return data;

        if (addressField.fieldDataType === 'DROPDOWN' || addressField.fieldDataType === 'AUTO_COMPLETE') {
            const option = addressField.searchoption?.find(this.findOptionByKey(addressField.value));
            data[addressField.fieldName] = option?.optionKey || null;
        } else if (addressField.fieldDataType === 'DATE') {
            data[addressField.fieldName] = addressField.value ? this.formatDate(addressField.value) : null;
        } else {
            data[addressField.fieldName] = addressField.value;
        }

        if (this.addressFieldHasPrefix(addressField)) {
            data[addressField.prefixfieldName] = addressField.prefix;
        }
        return  data
    }

    processTableRow(el) {
        const temp = {};
        el.forEach(function (fi) {
            temp[fi.fieldName] = fi.value;
            if (fi.endPointData) {
                Object.assign(temp, fi.endPointData);
            }
        });
        return temp;
    }

    fieldHasPrefix(field) {
        return ['TEXT', 'NUMBER'].includes(field.fieldDataType) && field.showprefix === true && field.includePrefixtoFormValue === true;
    }

    addressFieldHasPrefix(field) {
        return ['TEXT', 'NUMBER'].includes(field.fieldDataType) && field.showprefix === true && field.includePrefixtoFormValue === true;
    }

    formatDate(date) {
        return typeof date === 'string' ? date : this.formatters.formatDate(date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }), 'DD/MM/YYYY', 'MM/DD/YYYY');
    }

    findOptionByKey(value) {
        return function (option) {
            return option.optionKey === value;
        };
    }
}
