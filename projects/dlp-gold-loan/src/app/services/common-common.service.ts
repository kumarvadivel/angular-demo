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
import { IJourney } from "../interfaces/journey.interface";
import { LocalStorage } from "../shared/helpers/localStorage";
import { EnvironmentService } from "../../environments/environment.service";
import { assign, uniqBy } from "@gl-app/shared/utils/utils";
@Injectable({
  providedIn: "root",
})
export class CommonCommonService {
  mySub = new Subject();
  journey: IJourney;
  JsonLogic: LogicFunctions;
  ArrayMethods: ArrayMethod;
  initializeJourneyService: InitializeJourneyService;
  localStorage: LocalStorage;
  environmentService: EnvironmentService;
  constructor(
    public commonVariableService: CommonVariableService,
    public apiService: ApiService,
    public sharedService: SharedService,
    public router: Router,
    public httpClient: HttpClient,
    private injector: Injector
  ) {
    this.JsonLogic = this.injector.get<LogicFunctions>(LogicFunctions);
    this.ArrayMethods = this.injector.get<ArrayMethod>(ArrayMethod);
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(
      InitializeJourneyService
    );
    this.localStorage = this.injector.get<LocalStorage>(LocalStorage);
    this.environmentService =
      this.injector.get<EnvironmentService>(EnvironmentService);
  }

  public bindHeaderFooterTypes(pageType) {
    switch (pageType) {
      case "LANDING":
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = true;
        break;
      case "PRODUCT_ERROR":
      case "LOAN_SUMMARY":
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false;
        break;
      case "MOBILE_VERIFY":
      case "ACCOUNT_VERIFY":
      case "EKYC_VERIFY":
      case "MORE_INFO":
      case "EMAIL_VERIFY":
      case "PAN_VERIFY":
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false;
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false;
        this.commonVariableService.appLayoutConfig.isShowSubStepper = true;
        this.commonVariableService.appLayoutConfig.isShowStepperPercentage =
          true;
        break;
    }
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

  modifyParametertypes(params) {
    return this.initializeJourneyService.modifyParametertypes(params);
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

  buildSampleObject(code, key, name, parentCode, value) {
    return {
      optionCode: code,
      optionKey: key,
      optionName: name,
      optionParentCode: parentCode,
      optionParentProperty: null,
      optionValue: value,
      sortIndex: 0,
    };
  }

  mapCommonPropertyBranchMaster(data, returnKey?) {
    let homeBranch_state = [];
    let homeBranch_District = [];
    let homeBranch_city = [];
    let homeBranch = [];

    // Iterate over the data and build objects
    data.map((d) => {
      homeBranch_state.push(
        this.buildSampleObject(d.state, d.state, d.state, null, d.state)
      );
      homeBranch_District.push(
        this.buildSampleObject(
          d.district,
          d.district,
          d.district,
          d.state,
          d.district
        )
      );
      homeBranch_city.push(
        this.buildSampleObject(d.city, d.city, d.city, d.district, d.city)
      );
      homeBranch.push(
        this.buildSampleObject(
          d.branchCode,
          d.branchCode,
          d.branchName,
          d.city,
          d.branchName
        )
      );
    });

    // Make arrays unique
    homeBranch_state = uniqBy(homeBranch_state, "optionName");
    homeBranch_District = uniqBy(homeBranch_District, "optionName");
    homeBranch_city = uniqBy(homeBranch_city, "optionName");
    homeBranch = uniqBy(homeBranch, "optionName");

    // Check returnKey and return the requested array or all arrays if no returnKey is provided
    switch (returnKey) {
      case "HOME_BRANCH_STATE":
        return homeBranch_state;
      case "HOME_BRANCH_CITY":
        return homeBranch_city;
      case "HOME_BRANCH_DISTRICT":
        return homeBranch_District;
      case "HOME_BRANCH_NAME":
        return homeBranch;
      default:
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

    // Iterate over the data and build objects
    data.map((d) => {
      pincode_state.push(
        this.buildSampleObject(d.state, d.state, d.state, d.pincode, d.state)
      );
      pincode_District.push(
        this.buildSampleObject(
          d.district,
          d.district,
          d.district,
          d.state,
          d.district
        )
      );
      pincode_city.push(
        this.buildSampleObject(d.city, d.city, d.city, d.pincode, d.city)
      );
      pincode.push(
        this.buildSampleObject(d.pincode, d.pincode, d.pincode, null, d.pincode)
      );
    });

    // Make arrays unique
    pincode_state = uniqBy(pincode_state, "optionName");
    pincode_District = uniqBy(pincode_District, "optionName");
    pincode_city = uniqBy(pincode_city, "optionName");
    pincode = uniqBy(pincode, "optionName");

    // Check returnKey and return the requested array or all arrays if no returnKey is provided
    switch (returnKey) {
      case "PINCODE_STATE":
        return pincode_state;
      case "PINCODE_CITY":
        return pincode_city;
      case "PINCODE_DISTRICT":
        return pincode_District;
      case "PINCODE":
        return pincode;
      default:
        return [pincode_state, pincode_District, pincode_city, pincode];
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


  quickInitiateProduct(productCode) {
    let product = this.commonVariableService.loanProductInfo.find(
      (p) => p.productCode == productCode
    );
    this.initializeJourneyService.initializeJourney(product);
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
    sessionStorage.clear();
    window.open(`${window.origin}`, "_self");
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
        this.initializeJourneyService.initializeJourney(product, true, true);
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
        section.sectionContent.config.data.forEach((t) => {
          for (let prop in t) {
            t[prop] = this.applyJsonLogic(t[prop], dataCloud);
          }
        });
      }
    });
    return config;
  }

  findPreviouspageCode(pageCode, limitStepIdx?) {
    let journey = this.localStorage.SessionGetItem("CURRENT_JOURNEY");
    let pageSequence =
      this.commonVariableService.pageSequenceData[journey.product.productCode][
        "journeyPages"
      ][journey.productUserType];
    let prevpageCode =
      pageSequence[pageSequence.findIndex((r) => r.pageCode == pageCode) - 1];
    this.limitSteppperUpdater(prevpageCode.pageCode, journey);
    this.router.navigateByUrl(prevpageCode.url).catch(console.error);
    this.limitStepperPrevUpdater(pageCode, journey, limitStepIdx);
  }

  limitStepperPrevUpdater(pagecode?, journey?, i = 1) {
    journey.metaData["limitStepCurrPages"] =
      journey.metaData.limitSteppperList[i].pages;
    let idx = journey.metaData.limitStepCurrPages.findIndex(
      (a) => a.pageCode === pagecode
    );
    if (i === 2 && pagecode === "CARD_LIMIT") {
      journey.metaData.limitSteppperList[i - 1].isCompleted = false;
      journey.metaData.limitSteppperList[i].isActive = false;
      journey.metaData.limitSteppperList[i].isCompleted = false;
      journey.metaData["limitStepCurrPages"] =
        journey.metaData.limitSteppperList[i - 1].pages;
      journey.metaData.limitStepCurrPages[
        journey.metaData.limitStepCurrPages.length - 1
      ].isCompleted = false;
    }
    if (idx) {
      journey.metaData.limitStepCurrPages[idx].isActive = false;
      journey.metaData.limitStepCurrPages[idx].isCompleted = false;
      journey.metaData.limitStepCurrPages[idx - 1].isCompleted = false;
    }
    if (idx === -1 && pagecode === "E_SIGN") {
      journey.metaData.limitStepCurrPages[i - 1].isActive = false;
      journey.metaData.limitStepCurrPages[i - 1].isCompleted = false;
    }
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }

  limitSteppperUpdater(pagecode, journey?) {
    let groupindx;
    let pageindxingrp;
    journey.metaData.stepperData.map((group, i) => {
      let ok = group.subStep.find((f) => f.pageCode == pagecode);
      if (ok != undefined) {
        groupindx = i;
        pageindxingrp = group.subStep.findIndex((f) => f.pageCode == pagecode);
      }
    });
    journey.metaData.stepperData.map((group, i) => {
      if (groupindx > i) {
        group.isActive = true;
        group.isCompleted = true;
        group.subStep.map((s) => {
          s.isActive = true;
          s.isCompleted = true;
        });
      }
      if (groupindx == i) {
        group.isActive = true;
        group.subStep.map((s, pi) => {
          if (pageindxingrp > pi) {
            s.isActive = true;
            s.isCompleted = true;
          }
          if (pageindxingrp == pi) {
            s.isActive = true;
          }
          if (pageindxingrp < pi) {
            s.isActive = false;
            s.isCompleted = false;
          }
        });
      }
      if (groupindx < i) {
        group.isActive = false;
        group.isCompleted = false;
        group.subStep.map((s) => {
          s.isActive = false;
          s.isCompleted = false;
        });
      }
    });
    journey.metaData.currentSteppergrpIndx = groupindx;
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }

  mapMetaConfigRemaps(
    metaConfigRemaps,
    prop,
    mapping_Data,
    data,
    fieldStateConfig
  ) {
    if (Array.isArray(metaConfigRemaps[prop])) {
      mapping_Data[prop] = this.ArrayMethods.getPathVal(
        data,
        this.applyJsonLogic(metaConfigRemaps[prop][0], data)
      );
      fieldStateConfig[prop] = metaConfigRemaps[prop][1];
    } else {
      mapping_Data[prop] = this.ArrayMethods.getPathVal(
        data,
        this.applyJsonLogic(metaConfigRemaps[prop], data)
      );
    }
  }

  setPrepopulationCapturedValuesRemaps(
    metaConfig,
    mapping_Data,
    data,
    fieldStateConfig
  ) {
    for (const prop in metaConfig.prepopulationCapturedValuesRemaps) {
      if (!mapping_Data[prop]) {
        //If this is not mapped from the prepopulationRemaps in the above, then use it from capturedData
        for (const meta in metaConfig.prepopulationCapturedValuesRemaps) {
          this.mapMetaConfigRemaps(
            metaConfig.prepopulationCapturedValuesRemaps,
            meta,
            mapping_Data,
            data,
            fieldStateConfig
          );
        }
      }
    }
  }

  formDataEditDataPopulator(config, data, metaConfig) {
    config.forEach((section) => {
      if (section.componentType == "FORM") {
        let mapping_Data = {};
        let fieldStateConfig = {};
        if (metaConfig.prepopulationRemaps) {
          for (const prop in metaConfig.prepopulationRemaps) {
            this.mapMetaConfigRemaps(
              metaConfig.prepopulationRemaps,
              prop,
              mapping_Data,
              data,
              fieldStateConfig
            );
          }
        }
        if (metaConfig.prepopulationCapturedValuesRemaps) {
          this.setPrepopulationCapturedValuesRemaps(
            metaConfig,
            mapping_Data,
            data,
            fieldStateConfig
          );
        }
        section.sectionContent.options.mappingFieldStateConfig =
          fieldStateConfig;
        section.sectionContent.options.mappingFields = mapping_Data;
        section.sectionContent.options = {
          ...section.sectionContent.options,
        };
      }
    });
    return config;
  }

  fetchDataCloud(submitFlow, config) {
    let data = {};
    let journey = this.getJourney();
    submitFlow.dataFeedCloud.map((feed) => {
      switch (feed) {
        case "product":
          data = { ...data, ...journey.product, product: journey.product };
          break;
        case "formValue":
          data = {
            ...data,
            ...this.mergeAllFormsInConfig(config),
            formValue: this.mergeAllFormsInConfig(config),
          };
          break;
        case "capturedData":
          data = {
            ...data,
            ...journey.metaData.capturedData,
            capturedData: journey.metaData.capturedData,
          };
          break;
        case "resumeJourney":
          data = { ...data, resumeJourney: journey.resumeJourney };
          break;
        case "metaData":
          data = { ...data, metaData: journey.metaData };
          break;
      }
    });
    data = { ...data, appConfig: this.environmentService.configData.appConfig };
    return data;
  }

  private mergeAllFormsInConfig(config) {
    let val = {};
    config.forEach((c) => {
      if (c.componentType == "FORM") {
        val = { ...val, ...c.sectionContent.formValue };
      }
    });
    return val;
  }

  setJourney(journey) {
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }
  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY");
  }
}
