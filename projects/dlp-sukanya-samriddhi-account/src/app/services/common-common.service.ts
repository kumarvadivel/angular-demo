import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CommonVariableService } from './common-variable-service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '@ssa-app/shared/services/utils/shared.service';
import { LogicFunctions } from '@ssa-app/shared/helpers/JsonLogic';
import { ArrayMethod } from '@ssa-app/shared/helpers/ArrayMethods';
import { ExportService } from '@ssa-app/shared/services/utils/export.service';
import { LocalStorage } from '@ssa-app/shared/helpers/LocalStorage';
import { ApiService } from './api.service';
import { InitializeJourneyService } from '@ssa-app/services/initialize-journey.service';
import { assign, uniqBy } from '@ssa-app/shared/utils/utils';
declare let Appice: any;
@Injectable({
  providedIn: 'root'
})
export class CommonCommonService {

  mySub = new Subject();
  journey: any;
  isPreview = false;
  commonVariableService: CommonVariableService;
  initializeJourneyService: InitializeJourneyService;
  sharedService: SharedService;
  apiService: ApiService;
  exportService: ExportService;
  constructor(
    public router: Router,
    public domSanitizer: DomSanitizer,
    public JsonLogic: LogicFunctions,
    public httpClient: HttpClient,
    public ArrayMethods: ArrayMethod, public localStorage: LocalStorage, private injector: Injector) {
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(InitializeJourneyService);
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
    this.sharedService = this.injector.get<SharedService>(SharedService);
    this.apiService = this.injector.get<ApiService>(ApiService);
    this.exportService = this.injector.get<ExportService>(ExportService);
  }


  isShowError(config) {
    config.forEach(section => {
      if (section.componentType == 'CONSENT') {
        this.mySub.next(section.sectionContent.isValid == undefined || !(section.sectionContent.isValid));
      }
    })
  }
  public bindHeaderFooterTypes(pageType) {
    switch (pageType) {
      case 'LANDING':
      case 'PRODUCT_DESCRIPTION':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = true
        break;
      case 'PRODUCT_ERROR':
      case 'JOURNEY_PREVIEW':
      case 'TRACK_APPLICATION':
      case 'LOAN_SUMMARY':
      case 'CONTACT_BRANCH':
      case 'SESSION_EXPIRED':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
      case 'MOBILE_VERIFY':
      case 'EMAIL_VERIFY':
      case 'PAN_VERIFY':
      case 'EKYC_VERIFY':
      case 'ADDRESS_DETAILS':
      case 'ACCOUNT_VERIFY':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        //this.commonVariableService.appLayoutConfig.isShowSubStepper = true
        this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
      case 'MORE_INFO':
      case 'PERSONAL_DETAILS':
      case 'PRODUCT_SELECTION':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = false
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
       // this.commonVariableService.appLayoutConfig.isShowSubStepper = false
        this.commonVariableService.appLayoutConfig.isShowStepperPercentage = true
        break;
      case 'RESUME_APPLICATION':
      case 'TRACK_STATUS':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        break;
      case 'APPLICATION_STATUS':
        this.commonVariableService.appLayoutConfig.isShowJourneyHeader = true
        this.commonVariableService.appLayoutConfig.isShowJourneyFooter = false
        this.commonVariableService.appLayoutConfig.isShowSubStepper = false
        this.commonVariableService.appLayoutConfig.isShowStepperPercentage = false
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

  mapMasterData() {
    //pincode master
    //need to add pincode masters
    //branch master
    this.apiService.fetchBranchList().then((res: any) => {
      if (res.statuscode == 200) {
        let ob = {
          "BRANCH": res.object
        }
        this.localStorage.SessionSetItem("MASTER", ob)
      }
    })
  }


  mapCommonPropertyBranchMaster(data, returnKey?) {
    let homeBranch_state = []
    let homeBranch_District = []
    let homeBranch_city = []
    let homeBranch = []
    data.map(d => {
      //this validation is to remove unqualified values from the master data on the basi
      let state_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let district_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let city_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let branch_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }


      state_sampleObj.optionCode = d.state
      state_sampleObj.optionKey = d.state
      state_sampleObj.optionName = d.state
      state_sampleObj.optionParentCode = null
      state_sampleObj.optionValue = d.state


      district_sampleObj.optionCode = d.district
      district_sampleObj.optionKey = d.district
      district_sampleObj.optionName = d.district
      district_sampleObj.optionParentCode = d.state
      district_sampleObj.optionValue = d.district

      city_sampleObj.optionCode = d.city
      city_sampleObj.optionKey = d.city
      city_sampleObj.optionName = d.city
      city_sampleObj.optionParentCode = d.district
      city_sampleObj.optionValue = d.city

      branch_sampleObj.optionCode = d.branchCode
      branch_sampleObj.optionKey = d.branchCode
      branch_sampleObj.optionName = d.branchName
      branch_sampleObj.optionParentCode = d.city
      branch_sampleObj.optionValue = d.branchName
      homeBranch_state.push(state_sampleObj)
      homeBranch_District.push(district_sampleObj)
      homeBranch_city.push(city_sampleObj)
      homeBranch.push(branch_sampleObj)
    })
    homeBranch_state = uniqBy(homeBranch_state, 'optionName')
    homeBranch_District = uniqBy(homeBranch_District, 'optionName')
    homeBranch_city = uniqBy(homeBranch_city, 'optionName')
    homeBranch = uniqBy(homeBranch, 'optionName')
    if (returnKey) {
      if (returnKey == 'HOME_BRANCH_STATE') {
        homeBranch_state = uniqBy(homeBranch_state, 'optionName')
        return homeBranch_state
      }
      if (returnKey == 'HOME_BRANCH_CITY') {
        homeBranch_city = uniqBy(homeBranch_city, 'optionName')
        return homeBranch_city

      }
      if (returnKey == 'HOME_BRANCH_DISTRICT') {
        homeBranch_District = uniqBy(homeBranch_District, 'optionName')
        return homeBranch_District

      }
      if (returnKey == 'HOME_BRANCH_NAME') {
        homeBranch = uniqBy(homeBranch, 'optionName')
        return homeBranch

      }
    } else {
      homeBranch_state = uniqBy(homeBranch_state, 'optionName')
      homeBranch_District = uniqBy(homeBranch_District, 'optionName')
      homeBranch_city = uniqBy(homeBranch_city, 'optionName')
      homeBranch = uniqBy(homeBranch, 'optionName')
      return [homeBranch_state, homeBranch_District, homeBranch_city, homeBranch]
    }
  }

  mapCommonPinCode(data, returnKey?) {
    let pincode_state = []
    let pincode_District = []
    let pincode_city = []
    let pincode = []
    data.map(d => {
      let state_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let district_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let city_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let country_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      let pincode_sampleObj = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      state_sampleObj.optionCode = d.state
      state_sampleObj.optionKey = d.state
      state_sampleObj.optionName = d.state
      state_sampleObj.optionParentCode = d.pincode
      state_sampleObj.optionValue = d.state
      district_sampleObj.optionCode = d.district
      district_sampleObj.optionKey = d.district
      district_sampleObj.optionName = d.district
      district_sampleObj.optionParentCode = d.state
      district_sampleObj.optionValue = d.district
      city_sampleObj.optionCode = d.city
      city_sampleObj.optionKey = d.city
      city_sampleObj.optionName = d.city
      city_sampleObj.optionParentCode = d.pincode
      city_sampleObj.optionValue = d.city
      country_sampleObj.optionCode = d.country
      country_sampleObj.optionKey = d.country
      country_sampleObj.optionName = d.country
      country_sampleObj.optionParentCode = d.country
      country_sampleObj.optionValue = d.country
      pincode_sampleObj.optionCode = d.pincode
      pincode_sampleObj.optionKey = d.pincode
      pincode_sampleObj.optionName = d.pincode
      pincode_sampleObj.optionParentCode = null
      pincode_sampleObj.optionValue = d.pincode
      pincode_state.push(state_sampleObj)
      pincode_District.push(district_sampleObj)
      pincode_city.push(city_sampleObj)
      pincode.push(pincode_sampleObj)
    })
    if (returnKey) {
      if (returnKey == 'PINCODE_STATE') {
        pincode_state = uniqBy(pincode_state, 'optionName')
        return pincode_state
      }
      if (returnKey == 'PINCODE_CITY') {
        pincode_city = uniqBy(pincode_city, 'optionName')
        return pincode_city
      }
      if (returnKey == 'PINCODE_DISTRICT') {
        pincode_District = uniqBy(pincode_District, 'optionName')
        return pincode_District
      }
      if (returnKey == 'PINCODE') {
        pincode = uniqBy(pincode, 'optionName')
        return pincode
      }
    } else {
      pincode_state = uniqBy(pincode_state, 'optionName')
      pincode_District = uniqBy(pincode_District, 'optionName')
      pincode_city = uniqBy(pincode_city, 'optionName')
      pincode = uniqBy(pincode, 'optionName')
      return [pincode_state, pincode_District, pincode_city, pincode]
    }
  }




  findPreviouspageCode(pageCode) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    let pageSequence = this.commonVariableService.pageSequenceData[journey.product.productCode]['journeyPages'][journey.productUserType]
    let prevUrl = pageSequence[pageSequence.findIndex(r => r.pageCode == pageCode)].url
    this.router.navigateByUrl(prevUrl)
  }

  findFirstPage(journey) {
    let pageCode;
    if (journey.journeyStatus == 'PRE_JOURNEY') {
      if (journey.prejourneyPages != null && journey.prejourneyPages?.length != 0) {
        pageCode = journey.prejourneyPages[0].pageCode
      } else {
        pageCode = null
      }
    }

    if (journey.journeyStatus == 'JOURNEY') {
      if (journey.journeyPages != null && journey.journeyPages?.length != 0) {
        pageCode = journey.journeyPages[0].pageCode
      } else {
        pageCode = null
      }
    }
    return pageCode
  }
 
  saveSectionFormDataToJourney(config, pageCode?) {
    let journey: any = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    config.map(section => {
      if (section.componentType == 'FORM') {
        if (section.sectionContent.isShow) {
          section.sectionContent.formValueEmitter.next()
          assign(journey.metaData.capturedData, section.sectionContent.formValue)
          if (pageCode) {
            journey.metaData.capturedData[pageCode] = section.sectionContent.formValue
          }
        }
      }
    }) 
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)
  }

  saveCustomPageDatatoJourney(pageCode, saveObj) {
    let journey: any = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    journey.metaData.capturedData[pageCode] = saveObj
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)
  }
  saveSubFlowFormTojourney(config) {
    let journey: any = this.localStorage.SessionGetItem('SUBFLOW');
    config.map(section => {
      if (section.componentType == 'FORM') {
        if (section.sectionContent.isShow) {
          section.sectionContent.formValueEmitter.next()
          journey.capturedData = { ...journey?.capturedData, ...section.sectionContent.formValue }

        }
      }
    })
    this.localStorage.SessionSetItem('SUBFLOW', journey)
  }

  mapCommonPropertiestoConfig(config) {
    config.map(section => {
      if (section.componentType == 'FORM') {
        section.sectionContent.isShow = false
        section.sectionContent.fields.map(f => {
          if (f.commonpropertyType) {
            let master = this.localStorage.SessionGetItem('MASTER');
            if (master.commonProperty[f.commonpropertyType]) {
              f.options = master.commonProperty[f.commonpropertyType]
            } else {
            }
          }
        })
        section.sectionContent.isShow = true

      }
    })
    return config
  }
  ParseConfigFormJourneyPreview(config) {
    config.map(section => {
      section.options = { ...section.options, validityEmitter: new Subject<void>(), formValueEmitter: new Subject<void>() }
    })
    return config
  }



  fetchSubmitConsentCodesData(consent) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    let submitConsentData = []
    if (consent.submitConsentCodes) {

      consent.submitConsentCodes.map((code, i) => {
        let params = {
          consentCode: code,
          loanPurposeUuid:journey.product.loanPurposeUuid
        }
        this.apiService.fetchConsentList(params).then((res: any) => {
          if (res.code == '200') {
            let obj = res.loanPurposeTemplateList[0]
            submitConsentData.push(obj)
            if (i == consent.submitConsentCodes.length - 1) {
              consent['submitConsentData'] = submitConsentData
            }
          }
        })
      })
    }
  }
  updateJourneyType(data) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    journey.productUserType = data

    journey['metaData'].stepperData = this.commonVariableService.stepperData[journey.product.productCode][journey.productUserType]
      journey['metaData'].substepperData = this.commonVariableService.verifiedFieldsData[journey.product.productCode][journey.productUserType]

    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)
  }
  updateConstitution(data) {
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');

    journey.constitution = data


    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)
  }

  exportTableDataToExcel(tableData, fileName?) {
    let dataForExcel = []
    tableData.data.forEach((row: any) => {
      let tbl = []
      tableData.headers.map(head => {
        tbl.push(row[head.fieldName])
      })
      dataForExcel.push(tbl);
    })
    let headers = []

    tableData.headers.map(header => {
      headers.push(header.fieldLabel)
    })
    let reportData = {
      title: fileName || 'Data for Excel',
      data: dataForExcel,
      headers: headers
    }

    this.exportService.exportExcel(reportData);
  }

  mergeAllFormsInConfig(config) {
    let val = {}
    config.map(c => {
      if (c.componentType == 'FORM') {
        val = { ...val, ...c.sectionContent.formValue }
      }
    })
    return val
  }

  fetchProductDocumentList(journey) {
    return this.commonVariableService.productDocumentList[journey.product.productCode].documentList;
  }
  fetchVideoKycList(journey) {
    return this.commonVariableService.videokycList[journey.product.productCode];
  }

  uploadDocAPICall(params, url, file) {
    this.apiService.uploadDocument(params, url).then((res: any) => {
      if (res.code == 200) {
        this.commonVariableService.selectedFile = file.name;
        this.commonVariableService.disableProceedBtn = false;
        this.sharedService.openSnackBar(res?.message, 'success', res?.status);
      } else if (res.code != 200 || res.status == 'ERROR') {
        this.sharedService.openSnackBar(res?.message, 'error', res?.status);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  parseJourneyType(form) {
    if (form.constitution != undefined) { 
          this.updateJourneyType('individual')
          this.updateConstitution(form.constitution) 
      this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
      this.commonVariableService.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    }
  }

  quickInitiateProduct(productCode) {
    let product = this.commonVariableService.loanProductInfo.find(p => p.productCode == productCode);
    this.initializeJourneyService.initializeJourney(product);
  }

  dataparsertoOptions(obj) {
    let options = []
    obj.map(d => {
      let option = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      option.optionCode = d['name']
      option.optionKey = d['name']
      option.optionName = d['name']
      option.optionParentCode = d['name']
      option.optionParentProperty = d['name']
      option.optionValue = d['name']
      options.push(option)
    })
    return options
  }

  parsePurposeofAdvancetoOptions(obj) {
    let options = []
    obj.map(d => {
      let option = {
        "optionCode": null,
        "optionKey": null,
        "optionName": null,
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": null,
        "sortIndex": 0
      }
      option.optionCode = d['uuid']
      option.optionKey = d['uuid']
      option.optionName = d['value']
      option.optionParentCode = d['uuid']
      option.optionParentProperty = d['uuid']
      option.optionValue = d['uuid']
      options.push(option)
    })
    return options
  }

  //this method is to flush the current flowing journey by flushing all the captured data
  // and navigates to the home page
  flushJourney() {
    sessionStorage.clear();
    window.open(`${window.origin}`, '_self');
  }

  resumeApplication() {
    let resumeData = JSON.parse(localStorage.getItem("RESUME_APPLICATION_DATA"))
    let product;
    if (resumeData) {
      if (resumeData.productType == 'PERSONAL_LOAN') {
        product = this.commonVariableService.loanProductInfo.find(e => e.productType == 'PERSONAL_LOAN_EXPRESS')
      } else {
        product = this.commonVariableService.loanProductInfo.find(e => e.productType == resumeData.productType)
      }

      if (product) {
        this.initializeJourneyService.initializeJourney(product, true, true)
      }
    } else {
      this.sharedService.openSnackBar("No application to Resume")
      this.flushJourney()
    }


  }



  //single field sanitycheck
  validationCheck(field, verificationTrigger?) {
    if (field.isMandatory) {
      field = this.checkFilling(field)
      if (field.error == null) {
        field = this.checkMinMax(field)
      }
      if (field.error == null) {
        field = this.checkRegex(field)
        this.validateMobileAndAccountNumber(field);
      }
      if (verificationTrigger && (field.error == null || field.prefixError == null)) {
        field = this.checkfieldVerification(field)
      }
    } else {
      field = this.checkValidationForNonMandatoryFields(field);
    }
    return !field.error;
  }
  validateMobileAndAccountNumber(field) {
    if (field.fieldDataType == "MOBILE_NO") {
      field = this.validateMobileNumber(field);
    }
    if (field.fieldDataType == "NUMBER" && field.isAccountNumber) {
      field = this.validateAccountNumber(field);
    }
    return field;
  }
  checkValidationForNonMandatoryFields(field) {
    field = this.checkMinMax(field)
    if (field.error == null) {
      field = this.checkRegex(field)
    }
    return field
  }
  private validateMobileNumber(field) {
    let pattern;
    if (field.maxLength === 10 || field.maxLength == null) {
      pattern = /^[6789]\d{0,9}$/;
    } else {
      pattern = new RegExp("^[6789]{1}[0-9]{0," + (field.maxLength - 1) + "}$");
    }
    if (pattern.test(field.value) === false) {
      if (
        field.regexMessage != null &&
        field.regexMessage != undefined &&
        field.regexMessage != ""
      ) {
        field.error = field.regexMessage;
      } else {
        field.error = "Mobile Number is not valid";
      }
    }

    return field;
  }
  private validateAccountNumber(field) {
    if (field.value.length != 15 || field.value.length == null) {
      field.error = "Account Number is not valid";
    } else if (field.value.length == 15) {
      field.error = "";
    }
    return field;
  }
  checkFilling(field) {
    if (field.fieldDataType == "TEXT") {
      this.checkFillingText(field);
    } else if (!field.value) {
        field.error = `${field.fieldLabel} is required`;
      } else if (field.fieldDataType == "AUTO_COMPLETE") {
          if (field.value.length == 0) {
            field.error = `${field.fieldLabel} is required`;
          } else {
            field.error = null;
          }
        } else {
          field.error = null;
        }
      
    return field;
  }

  private checkFillingText(field) {
    if (field.showprefix === true) {
      if (!field.value || !field.prefix) {
        field.error = `${field.fieldLabel} is required`;
        field.prefixError = `${field.prefixfieldName} is required`;
      }
      if (field.prefix) {
        field.prefixError = null;
      } else {
        field.error = null;
      }
    } else if (!field.value) {
        field.error = `${field.fieldLabel} is required`;
      } else {
        field.error = null;
      }
  }
  //min max check
  checkMinMax(field) {
    if (field.isMandatory === true) {
      if (["TEXT", "TEXT_AREA", "MOBILE_NO"].includes(field.fieldDataType)) {
        field = this.checkMinMaxOtherTypes(field);
      } else {
        field = this.checkMinMaxNumberTypes(field);
      }
    } else {
      field = this.checkMinMaxForNonMandatoryFields(field);
    }
    return field;
  }

  private checkMinMaxOtherTypes(field) {
    let length = field.value?.length;
    if (length || length == 0) {
      if (length < field.minLength && field.minLength != null) {
        field.error = `${field.fieldLabel} should be atleast ${field.minLength} characters`;
      } else {
        field.error = null;
      }
      if (field.error == null) {
        if (length > field.maxLength && field.maxLength != null) {
          field.error = `${field.fieldLabel} should not exceed ${field.maxLength} characters`;
        } else {
          field.error = null;
        }
      }
    }

    return field;
  }

  private checkMinMaxForNonMandatoryFields(field) {
    if (field.value != null && field.value != "") {
      field = this.checkMinMaxForNonMandatoryFieldsOtherTypes(field);
    } else {
      field = this.checkMinMaxForReturnedErrors(field);
    }
    return field;
  }

  private checkMinMaxForNonMandatoryFieldsOtherTypes(field) {
    if (["TEXT", "TEXT_AREA", "MOBILE_NO"].includes(field.fieldDataType)) {
      field = this.checkMinMaxOtherTypes(field);
    } else {
      field = this.checkMinMaxNumberTypes(field);
    }
    return field;
  }

  private checkMinMaxForReturnedErrors(field) {
    if (["TEXT", "TEXT_AREA", "MOBILE_NO"].includes(field.fieldDataType)) {
      if (
        field.error ===
        `${field.fieldLabel} should be atleast ${field.minLength} characters` ||
        field.error ===
        `${field.fieldLabel} should not exceed ${field.maxLength} characters`
      ) {
        field.error = null;
      }
    } else if (field.fieldDataType == "NUMBER") {
        if (
          field.error ===
          `${field.fieldLabel} should be atleast ${field.minLength}` ||
          field.error ===
          `${field.fieldLabel} should not exceed ${field.maxLength}`
        ) {
          field.error = null;
        }
      }
    return field;
  }

  private checkMinMaxNumberTypes(field) {
    if (field.fieldDataType == "NUMBER") {
      if (field.value < field.minLength && field.minLength != null) {
        field.error = `${field.fieldLabel} should be atleast ${field.minLength}`;
      } else {
        field.error = null;
      }
      if (field.error == null) {
        if (field.value > field.maxLength && field.maxLength != null) {
          field.error = `${field.fieldLabel} should not exceed ${field.maxLength}`;
        } else {
          field.error = null;
        }
      }
    }
    return field;
  }
  //check regex 
  checkRegex(field) {
    if (field.regex != null) {
      let regex = new RegExp(field.regex);
      if (field.value != null && field.value != "") {
        if (!regex.test(field.value)) {
          field.error =
            field.regexErrorMessage || `Invalid ${field.fieldLabel}`;
        } else {
          field.error = null;
        }
      } else if (field.error) {
          field.error = null;
        }
    }
    return field;
  }

  checkfieldVerification(field) {
    if (field.verificationType && !field.isVerified) {
      if (field.prefix == null || field.prefix == "") {
        field.prefixError = `${field.prefixplaceholderText} Verification is Required`
      }
      field.error = `${field.fieldLabel} Verification is Required`

    } else {
      //field.error = null
    }
    return field
  }
  convertArrayValuesToObject(data) {
    for (const prop in data) {
      if (Array.isArray(data[prop])) {
        data[prop] = {...data[prop]}
        data[prop] = this.convertArrayValuesToObject(data[prop])
      }
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

  modifyParametertypes(params) {
    return this.initializeJourneyService.modifyParametertypes(params);
  }
  formDataEditDataPopulator(config, data, metaConfig) {
    config.map(section => {
      if (section.componentType == 'FORM') {
        let mapping_Data = {}
        let fieldStateConfig = {}
        if (metaConfig.prepopulationRemaps) {
          for (const prop in metaConfig.prepopulationRemaps) {
            if (Array.isArray(metaConfig.prepopulationRemaps[prop])) {
              mapping_Data[prop] = this.ArrayMethods.getPathVal(data, this.applyJsonLogic(metaConfig.prepopulationRemaps[prop][0], data))
              fieldStateConfig[prop] = metaConfig.prepopulationRemaps[prop][1]
            } else {
              mapping_Data[prop] = this.ArrayMethods.getPathVal(data, this.applyJsonLogic(metaConfig.prepopulationRemaps[prop], data))
            }
          }
          section.sectionContent.options.mappingFieldStateConfig = fieldStateConfig
          section.sectionContent.options.mappingFields = mapping_Data
          section.sectionContent.options = { ...section.sectionContent.options }
        }
      }
    })

    return config
  }
  applyJsonLogic(validationJson, supplyData) {
    return this.JsonLogic.Jsonlogic.apply(validationJson, supplyData);
  }
  setJourney(journey) {
    this.localStorage.SessionSetItem('CURRENT_JOURNEY', journey)

  }

  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY")
  }

  mapDataFromParameter(params,data_cloud){
    return this.initializeJourneyService.mapDataFromParameter(params, data_cloud)
 }
}
