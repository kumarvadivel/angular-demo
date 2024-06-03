import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { ApiService } from "./api.service";
import { SharedService } from "../shared/services/utils/shared.service";
import { CommonVariableService } from "./common-variable-service";
import { LogicFunctions } from "../shared/helpers/JsonLogic";
import { HttpClient } from "@angular/common/http";
import { ArrayMethod } from "../shared/helpers/ArrayMethods";
import { InitializeJourneyService } from "./initialize-journey.service";
import { JourneyEventsService } from "./journey-events.service";
import { FetchFlowApiService } from "./fetch-flow-api.service";
import { SubmitFlowApiService } from "./submit-flow-api.service";
import { MetaConfigService } from "./meta-config.service";
import { LocalStorage } from "@cc-app/shared/helpers/localStorage";
import { EnvironmentService } from "@cc-environments/environment.service";
import { assign, uniqBy } from "@cc-app/shared/utils/utils";
declare let Appice: any;
@Injectable({
  providedIn: "root",
})
export class CommonCommonService {
  mySub = new Subject();
  journey: any;
  JsonLogic: LogicFunctions;
  ArrayMethods: ArrayMethod;
  initializeJourneyService: InitializeJourneyService;
  localStorage: LocalStorage;
  environmentService: EnvironmentService;
  journeyEventsService:JourneyEventsService;
  metaConfigService: MetaConfigService;
  submitFlowApiService: SubmitFlowApiService;
  constructor(
    public commonVariableService: CommonVariableService,
    public apiService: ApiService,
    public sharedService: SharedService,
    public router: Router,
    public httpClient: HttpClient,
    public fetchFlowApiService: FetchFlowApiService,
    private injector: Injector
  ) {
    this.JsonLogic = this.injector.get<LogicFunctions>(LogicFunctions);
    this.ArrayMethods = this.injector.get<ArrayMethod>(ArrayMethod);
    this.journeyEventsService = this.injector.get<JourneyEventsService>(JourneyEventsService);
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(
      InitializeJourneyService
    );
    this.localStorage = this.injector.get<LocalStorage>(LocalStorage);
    this.environmentService =
      this.injector.get<EnvironmentService>(EnvironmentService);
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
      case "PRODUCT_DESCRIPTION":
      case "MOBILE_VERIFY":
      case "MORE_INFO":
      case "CHOOSE_CC":
      case "EMAIL_VERIFY":
      case "PAN_VERIFY":
      case "CC_DECLARATION":
      case "EMPLOYMENT_DETAILS":
      case 'ADD_ON_CARD':
      case 'DOCUMENT_LIST':
      case 'CC_SUMMARY':
      case 'CONGRATULATIONS':
      case 'JOURNEY_PREVIEW':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false;
        this.commonVariableService.appLayoutConfig.isShowSubStepper = true;
        this.commonVariableService.appLayoutConfig.isShowStepperPercentage =
          true;
        break;
      case "SESSION_EXPIRED":
      case "PRODUCT_ERROR":
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false;
        break;
    }
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
        let { componentType } = section;
        let isValid;

        switch (componentType) {
          case "FORM":
            section.sectionContent.validityEmitter.next(true);
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
          default:
            console.warn(`Unknown componentType: ${componentType}`);
            return null;
        }

        return { ok: isValid, componentType };
      })
      .filter(Boolean); // Remove null entries
    // If all sections are valid, return true
    if (valid.every(({ ok }) => ok)) return true;

    // Find first invalid section
    const { componentType: componentTypeName } = valid.find(({ ok }) => !ok);

    // Show error message based on componentType of invalid section
    this.sharedService.openSnackBar(validationMessages[componentTypeName]);

    return false;
  }
  SectionValidationSystem(config) {
    return this.sectionValidationSystem(config);
  }

  //all the journeys has to be initiated from here all
  // all the data collection and state creation happpens from here
  initializeJourney(product, resumeJourney?, dontRouteTofirstPage?) {
    this.initializeJourneyService.initializeJourney(
      product,
      resumeJourney,
      dontRouteTofirstPage
    );
  }
  NavigateJourney(pageCode, isPreviwUpdate?, pageconfig?, urlParams?, fromPageCode?) {
    this.initializeJourneyService.navigateJourney(pageCode, isPreviwUpdate, pageconfig, urlParams, fromPageCode)
}
  mapCommonPropertyBranchMaster(data, returnKey?) {
    let homeBranch_state = [];
    let homeBranch_District = [];
    let homeBranch_city = [];
    let homeBranch = [];
    data.map((d) => {
      //this validation is to remove unqualified values from the master data on the basi
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

  //this method is used to proceed and mark all the steps in a journey always move the journey from one page to another page using this
  // method only
  proceedJourney(pageCode?, skipped?, pageconfig?) {
    this.submitFlowApiService.proceedJourney(pageCode, skipped, pageconfig);
  }

  triggerAppiceEvent(eventName?, params?) {
    let journey = this.getJourney();
    let userObj = {};
    if (eventName == "setUser") {
      this.triggerSetUser(journey, userObj);
    } else {
      let obj = { key: eventName, properties: params };
      try{
        if(typeof Appice != 'undefined'){
          Appice.recordEvent({ key: obj.key, segment: obj.properties });
        }
      }catch(e){
          
      }
    }
  }

  private triggerSetUser(journey, userObj) {
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
          Appice.setCustomVariables(userObj);
          Appice.setUser(userObj);
        }
      }catch(e){
          
      }
  }

  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
  }

  saveSectionFormDataToJourney(config, pageCode?) {
    let journey: any = this.getJourney();
    config.forEach((section) => {
      if (section.componentType == "FORM") {
        if (section.sectionContent.isShow) {
          section.sectionContent.formValueEmitter.next();
          assign(
            journey.metaData.capturedData,
            section.sectionContent.formValue
          );
          if (pageCode) {
            journey.metaData.capturedData[pageCode] =
              section.sectionContent.formValue;
          }
        }
      }
    });
    
    this.setJourney(journey);
  }

  modifyParametertypes(params) {
    return this.initializeJourneyService.modifyParametertypes(params);
  }

  //fetch journey page configs
  fetchProductPageConfig(journey, pageCode) {
    return this.metaConfigService.fetchProductPageConfig(journey, pageCode);
  }

  //fetch page meta configurations
  fetchProductMetaConfig(journey, pageCode) {
    return this.metaConfigService.fetchProductMetaConfig(journey, pageCode);

  }

  ParseConfigFormJourneyPreview(config) {
    return this.metaConfigService.ParseConfigFormJourneyPreview(config);
  }


  ParseConfig(config) {
    return this.metaConfigService.ParseConfig(config);
  }

  //silent Submit flow means no loaders
  apiCall(
    submitflow,
    currentIndex,
    totalLength,
    pageCode,
    configList,
    pageconfig?,
    extraCloudParams?
  ) {
    this.submitFlowApiService.apiCall(
      submitflow,
      currentIndex,
      totalLength,
      pageCode,
      configList,
      pageconfig,
      extraCloudParams
    );
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
      //option.optionParentCode = d['name']
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
      if (d.forIndividual && d.forCorporate) {
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

  //this method is to flush the current flowing journey by flushing all the captured data
  // and navigates to the home page
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
      TITLE: "titleData",
      PARAGRAPH: "paragraphData",
      HTML_CONTENT: "htmlData",
    };

    const modifyTitleData = (section, type, rule, dataCloud1) => {
      section.sectionContent[type] = this.applyJsonLogic(
        section.validationJson[rule],
        dataCloud1
      );
    };

    const modifyIsShow = (section, rule, dataCloud2) => {
      section.sectionContent.isShow = this.applyJsonLogic(
        section.validationJson[rule],
        dataCloud2
      );
    };

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
    };

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
    };
    config.map((section) => {
      if (section.validationJson) {
        switch (section.componentType) {
          case "TITLE":
          case "PARAGRAPH":
          case "HTML_CONTENT":{
            let type = componentTypeMapping[section.componentType];
            moderateTitleAndIsShow(section, type);
            break;
          }  
          case "CONSENT":
          case "TABLE":
          case "CHART":
          case "FORM":
          case "ORDERED_LIST":
          case "FILE_UPLOAD":
          case "CAPCHA":
          case "BUTTON":
            for (const rule in section.validationJson) {
              if (rule === "showSection") {
                modifyIsShow(section, rule, dataCloud);
              }
            }
            break;
        }
      }
      if (section.componentType == "FORM") {
        moderateFormData(section, dataCloud);
      }
      if (section.componentType == "TABLE") {
        section.sectionContent.config?.data?.forEach((t) => {
          for (let prop in t) {
            t[prop] = this.applyJsonLogic(t[prop], dataCloud);
          }
        });
      }
    });
    return config;
  }

  findPreviouspageCode(pageCode, limitStepIdx?) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let pageSequence = this.commonVariableService.pageSequenceData[journey.product.productCode]['journeyPages'][journey.productUserType]
    let prevpageCode = pageSequence[pageSequence.findIndex(r => r.pageCode == pageCode) - 1]
    this.limitSteppperUpdater(prevpageCode.pageCode, journey)
    this.router.navigateByUrl(prevpageCode.url)
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
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey);
  }

  limitSteppperUpdater(pagecode, journey?) {
    //journey.metaData['limitStepCurrPages'] = journey.metaData.limitSteppperList[i].pages;
    //journey.metaData
    //find the group where the page code is
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
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey);
  }

  formDataEditDataPopulator(config, data, metaConfig) {
    config.forEach(section => {
      if (section.componentType == 'FORM') {

          if (metaConfig.prepopulationRemaps) {
              this.formDataEditDataPopulatorSimplify(section, metaConfig, data)
          }
      }
  })

  return config
  }
  formDataEditDataPopulatorSimplify(section,metaConfig,data){
    let mapping_Data={}
    let fieldStateConfig = {}
    for(const prop in metaConfig.prepopulationRemaps){
        if(Array.isArray(metaConfig.prepopulationRemaps[prop])){
          if(metaConfig.prepopulationRemaps[prop].length==3){
            if(metaConfig.prepopulationRemaps[prop][2]=='RULE_OUTPUT'){
              mapping_Data[prop]= this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][0],data)
            }
          }else{
            mapping_Data[prop] = this.ArrayMethods.getPathVal(data,this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][0],data))
          }
          this.prepopulationCheck(fieldStateConfig,metaConfig,data,prop)
        }else{
          mapping_Data[prop] = this.ArrayMethods.getPathVal(data,this.applyJsonLogic(metaConfig.prepopulationRemaps[prop],data))
        }
      }
      
      section.sectionContent.options.mappingFieldStateConfig = fieldStateConfig
      section.sectionContent.options.mappingFields = mapping_Data
      section.sectionContent.options = {...section.sectionContent.options}

      return section;
  }
  prepopulationCheck(fieldStateConfig,metaConfig,data,prop){
    if(Object.keys(metaConfig.prepopulationRemaps[prop][1]).length){
      fieldStateConfig[prop] = {}
        for(const p in metaConfig.prepopulationRemaps[prop][1]){
          fieldStateConfig[prop][p] = this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][1][p],data)
        }
    }
  }
  fetchProductDocumentList(journey) {
    return this.commonVariableService.productDocumentList[journey.product.productCode].documentList;
  }

  formatDate(date, sourceFormat, desiredFormat) {
    let exitFormat;
    if (sourceFormat == 'DD/MM/YYYY') {
      if (date != null) {
        let source_date = date.substr(0, 2)
        let source_month = date.substr(3, 2)
        let source_year = date.substr(6, 4)
        if (desiredFormat == 'MM/DD/YYYY') {
          exitFormat = `${source_month}/${source_date}/${source_year}`
        }
      } else {
        exitFormat = ''
      }
    }
    return exitFormat;
  }

  setJourney(journey) {
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }
  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY");
  }
  mapDataFromParameter(params,data_cloud){
    return this.initializeJourneyService.mapDataFromParameter(params, data_cloud)
 }
}
