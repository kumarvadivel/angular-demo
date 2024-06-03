import { Component, OnInit } from '@angular/core';
import { ApiService } from '@cc-app/services/api.service';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { InitializeJourneyService } from '@cc-app/services/initialize-journey.service';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';
import { ArrayMethod } from '@cc-app/shared/helpers/ArrayMethods';
import { SharedService } from '@cc-app/shared/services/utils/shared.service';

@Component({
  selector: 'app-details-preview',
  templateUrl: './details-preview.component.html',
})
export class DetailsPreviewComponent implements OnInit {

  showloader = false
  previewData
  config;
  metaConfig;
  $scope: any = {}
  apifetchedData = {}
  journey
  tabsData: any;
  pageCode = 'JOURNEY_PREVIEW'
  isEdit: boolean;
  scopeSubscriber: any;

  constructor(public commonService: CommonCommonService,
    public initializeJourneyService: InitializeJourneyService,
    public apiService: ApiService,
    public commonVariableService: CommonVariableService,
    public sharedService: SharedService, public ArrayMethods: ArrayMethod, public submitFlowApiService: SubmitFlowApiService
  ) {

    this.journey = this.commonService.getJourney();
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.previewData = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()

  }
  ngOnDestroy() {
    this.config = undefined
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, 'JOURNEY_PREVIEW')
    } else {
      this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
      this.$scope = scopeData
      this.triggerAfterScopeEffect()
    })
  }

  triggerAfterScopeEffect() {
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct() {
    this.contentModerationForProduct()
    this.formDataPrepopulationForProduct()
  }
  assignExternalValue(con) {
    if (con.componentType == 'FORM') {
      con.sectionContent.options.externalFeedDataforValidationJson = this.$scope
    }
    return con;
  }
  contentModerationForProduct() {
    this.config[2].sectionContent.config.data = this.$scope.fetchFDAccountsDetails?.accountList;
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    this.config.forEach(s => {
      this.assignExternalValue(s)
    })

  }

  formDataPrepopulationForProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }

  fetchSelfEmploymentDetails(triggerMapping) {
    let params = {
      access_token: this.journey.product.access_token,
      loanApplicationUuid: this.journey.product.loanUuid
    }
    this.apiService.fetchSelfEmploymentDetails(params).then((res: any) => {
      if (res.code == "200") {
        this.apifetchedData['borrowerDetails'] = { ...this.apifetchedData['borrowerDetails'], ...res.selfEmploymentDetail }
        if (triggerMapping) {
          this.mapDataForEdit()
          this.showloader = false
        }
      } else {
        this.showloader = false
      }

    }, () => {
      this.showloader = false
    })
  }

  borrowerDetails(triggerMapping) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid
    }
    this.apiService.showBorrowerDetails(params).then((res: any) => {
      if (res.code == '200') {
        this.apifetchedData['borrowerDetails'] = { ...this.apifetchedData['borrowerDetails'], ...res.borrowerDetail }
        if (triggerMapping) {
          this.mapDataForEdit()
          this.showloader = false
        }
      } else {
        this.showloader = false
      }

    }, () => {
      this.showloader = false
    })
  }
  fetchLoanDetails(triggerMapping) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid
    }
    this.apiService.fetchLoanDetails(params).then((res: any) => {
      if (res.code == '200') {
        this.apifetchedData['borrowerDetails'] = { ...this.apifetchedData['borrowerDetails'], ...res.loanDetails }
        if (triggerMapping) {
          this.mapDataForEdit()
          this.showloader = false
        }
      } else {
        this.showloader = false
      }
    }, () => {
      this.showloader = false
    })
  }
  fetchNominee(triggerMapping) {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.apiService.nomineeShow(params).then((res: any) => {
      if (res.code == '200') {
        this.apifetchedData['nomineeDetails'] = res.nomineeList[0]
        if (triggerMapping) {
          this.mapDataForEdit()
          this.showloader = false
        }
      } else {
        this.showloader = false
      }
    }, () => {
      this.showloader = false
    })
  }

  fetchVas(triggerMapping) {
    let params = {
      access_token: this.journey.product.access_token,
      loanApplicationUuid: this.journey.product.loanUuid
    }
    this.apiService.showVas(params).then((res: any) => {
      if (res.code == '200') {
        this.apifetchedData['vasDetails'] = res.vasData[0]
        if (triggerMapping) {
          this.mapDataForEdit()
          this.showloader = false
        }
      }
    }, () => {
      this.showloader = false
    })
  }
  //used to map data to preview page
  mapDataForEdit() {
    this.journey = this.commonService.getJourney();
    this.previewData.forEach(form => {
      switch (form.sectionTitle) {
        case 'Vas Details':
          this.mapVasDetails(form);
          break;
        case 'Nominee Details':
          this.mapNomineeDetails(form);
          break;
        case 'Branch Details':
          this.mapBranchDetails(form);
          break;
        case 'Employment Details':
          this.mapEmploymentDetails(form);
          break;
        case 'Credit Card Detail':
          this.mapCreditCardDetail(form);
          break;
        case 'Add on Card Details':
          this.mapAddOnCardDetails(form);
          break;
        case 'Existing FD Details':
          this.mapExistingCard(form)
          break;
        default:
          this.mapDefault(form);
          break;
      }
    });
    this.config = this.previewData;
  }

  mapVasDetails(form) {
    form.options.mappingFields = this.journey.metaData.globalScopeData.fetchVas ? this.journey.metaData.globalScopeData.fetchVas.vasData[0] : {};
  }

  mapNomineeDetails(form) {
    const fetchNominee = this.journey.metaData.globalScopeData.fetchNominee;
    if (fetchNominee?.nomineeList && fetchNominee.nomineeList.length > 0) {
      const nominee = fetchNominee.nomineeList[0];
      const nomineeDetails = { ...nominee, ...nominee.addressOne, ...nominee.addressTwo };
      form.options.mappingFields = nomineeDetails;
    }
  }

  mapBranchDetails(form) {
    form.options.mappingFields = this.journey.metaData.globalScopeData['fetchGeneralAccountResponse'] ? this.journey.metaData.globalScopeData['fetchGeneralAccountResponse'].object.branchDetailJson : {};
    form.options.mappingFields['homeBranchState'] = form.options.mappingFields['borrowerDetailTextVariable17'];
    form.options.mappingFields['homeBranchCity'] = form.options.mappingFields['borrowerDetailTextVariable19'];
    form.options.mappingFields['homeBranchDistrict'] = form.options.mappingFields['borrowerDetailTextVariable18'];
    form.options.mappingFields['branchCode'] = form.options.mappingFields['borrowerDetailTextVariable19']
    form.options.mappingFields['branchAddress'] = form.options.mappingFields['borrowerDetailTextVariable20'];
  }

  mapEmploymentDetails(form) {
    form.options.mappingFields = this.journey.metaData.globalScopeData['borrowerDetail'] ? this.journey.metaData.globalScopeData['borrowerDetail']['borrowerDetail'] : {};
  }

  mapCreditCardDetail(form) {
    form.options.mappingFields = this.journey.metaData.globalScopeData['fetchExistingCreditCardDetails'] ? this.journey.metaData.globalScopeData['fetchExistingCreditCardDetails'] : {};
    form.options.mappingFields['CCType'] = form.options.mappingFields['cardType'];
  }

  mapAddOnCardDetails(form) {
    form.options.mappingFields = this.journey.metaData.globalScopeData['fetchAddOnCardDetails'] ? this.journey.metaData.globalScopeData['fetchAddOnCardDetails']['addOnCardDetailsList'][0] : {}
    this.journey.metaData.globalScopeData['fetchAddOnCardDetails'] = form.options.mappingFields
    this.commonService.setJourney(this.journey);
  }

  mapDefault(form) {
    form.options.mappingFields = this.journey.metaData.globalScopeData['borrowerDetail'] ? this.journey.metaData.globalScopeData['borrowerDetail']['borrowerDetail'] : {};
  }


  navigateToResume(form) {
    this.showloader = true
    this.initializeJourneyService.navigateJourney(form.TriggerSection, true);
  }

  updateFacilityDetailsForTl(form){
    let paramsTL = {
      "loanFacilityUuid": this.$scope.multiFacilityRetreive.responseAttr?.facilityDetailsList[1]?.loanFacilityName == "Term Loan" ? this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[1].loanFacilityUuid : this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].loanFacilityUuid,
      "uuid": this.$scope.multiFacilityRetreive.responseAttr?.facilityDetailsList[1]?.loanFacilityName == "Term Loan" ? this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[1].uuid : this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].uuid,
      "loanUuid": this.journey.product.loanUuid,
      "access_token": this.journey.product.access_token,
      "isOnboarding": false,
      "loanPurposeUuid": this.journey.product.loanPurposeUuid,
      "loanFacilityName": "Term Loan",
      "applicationSource": "WEB_JOURNEY",
      "facilityType": "TERM_LOAN",
    }
    let paramsListTl = ["facilityDetailsTableVariable1", "facilityDetailsNumberVariable1", "facilityDetailsNumberVariable3", "facilityDetailsNumberVariable4", "tenure", "facilityDetailsDateVariable1", "crp"]
    for (const element of paramsListTl) {
      let typeValue = form.fields.find(el => el.fieldName == element)
      if (typeValue?.fieldDataType == "TABLE") {
        paramsTL[typeValue.fieldName] = [];
        let tabData = {}
        for (const elements of typeValue.value) {
          elements.forEach(data => {
            if (data.value)
              tabData[data.fieldName] = JSON.parse(JSON.stringify(data.value))
          })
          paramsTL[typeValue.fieldName].push(JSON.parse(JSON.stringify(tabData)))
        }
      } else if (typeValue) {
        paramsTL[typeValue.fieldName] = typeValue.value;
      }
    }
    let amountRequestObj = form.fields.find(el => el.fieldName == "loanApplicationNumberVariable3")
    if (amountRequestObj)
      paramsTL["requestedLimit"] = amountRequestObj.value;
    paramsTL["facilityDetailsDateVariable1"] = new Date(paramsTL["facilityDetailsDateVariable1"]).toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' })
    paramsTL = this.commonService.modifyParametertypes(paramsTL)
    this.apiService.updateFacilityDetails(paramsTL)
  }

  updateFacilityDetailsForCc(form){
    let paramsCc = {
      "loanFacilityUuid": this.$scope.multiFacilityRetreive.responseAttr?.facilityDetailsList[0]?.loanFacilityName == "Cash Credit" ? this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].loanFacilityUuid : this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[1].loanFacilityUuid,
      "uuid": this.$scope.multiFacilityRetreive.responseAttr?.facilityDetailsList[0]?.loanFacilityName == "Cash Credit" ? this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].uuid : this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[1].uuid,
      "loanUuid": this.journey.product.loanUuid,
      "access_token": this.journey.product.access_token,
      "isOnboarding": false,
      "loanPurposeUuid": this.journey.product.loanPurposeUuid,
      "loanFacilityName": "Cash Credit",
      "applicationSource": "WEB_JOURNEY",
      "facilityType": "CASH_CREDIT",
    }
    let paramsListCc = ["facilityDetailsTextVariable1", "facilityDetailsNumberVariable2", "requestedLimit", "facilityDetailsTextVariable2", "crp"]
    for (const element of paramsListCc) {
      let typeValue = form.fields.find(el => el.fieldName == element)
      if (typeValue)
        paramsCc[typeValue.fieldName] = typeValue.value;
    }
    paramsCc = this.commonService.modifyParametertypes(paramsCc)
    this.apiService.updateFacilityDetails(paramsCc)
  }

  callpersonalProfileAndEmploymentDetailsApi(form){
    let selfParams = {
      "loanApplicationUuid": this.journey.product.loanUuid,
      "access_token": this.journey.product.access_token,
    }
    let selfParamsList = ['textVariable5', "textVariable6", 'textVariable19', 'textVariable7', 'textVariable10',
      'borrowerCompanyTextVariable13', "dateVariable1",]
    for (const element of selfParamsList) {
      let typeValue = form.fields.find(el => el.fieldName == element)
      if (typeValue)
        selfParams[typeValue.fieldName] = typeValue.value;
    }
    this.apiService.updateborrowerEmploymentDetails(selfParams)
    let personalParams = {
      "loanUuid": this.journey.product.loanUuid,
      "access_token": this.journey.product.access_token,
    }
    let personalParamsList = ['borrowerProfileTextVariable5', 'textVariable6', 'borrowerDetailTextVariable16', "borrowerDetailTextVariable28", "borrowerDetailTextVariable17"]
    for (const element of personalParamsList) {
      let typeValue = form.fields.find(el => el.fieldName == element)
      if (typeValue)
        personalParams[typeValue.fieldName] = typeValue.value;
    }
    this.apiService.personalProfileUpdate(personalParams)
  }

  callMoreInfoApi(form){
    let params = {
      "loanUuid": this.journey.product.loanUuid,
      "access_token": this.journey.product.access_token,
    }
    let paramsList = [
      'title', 'firstName',
      'middleName',
      'lastName',
      'gender',
      'dateOfBirth',
      'maritalStatus',
      'borrowerDetailTextVariable6',
      'educationType',
      'numberOfDependents',
      'mobileNumber',
      'alternativeUsername',
      'citizenship',
      'borrowerDetailTextVariable11',
      'borrowerDetailTextVariable21',
      'borrowerDetailTextVariable29',
      'idProofNo',
      'identityNumberTwoDueDate',
      'borrowerDetailTextVariable30',
      'residentIdProofNo',
      'identityNumberOneDueDate',
      'borrowerDetailTextVariable26',
      'borrowerDetailTextVariable23',
      'line1',
      'line2',
      'line3',
      'subDistrict',
      'zipCode',
      'district',
      'city',
      'state',
      'ownershipType',
      'livingSince',
      "borrowerDetailTextVariable60",
      'isComAddress',
      'addressOneLine1',
      'addressOneLine2',
      'addressOneLine3',
      'addressOneSubDistrict',
      'addressOneZipCode',
      'addressOneState',
      'addressOneDistrict',
      'addressOneOwnershipType',
      'addressOneLivingSince',
      "homeBranchState",
      "homeBranchDistrict",
      'homeBranchCity',
      "branchCode",
      "branchAddress",]
    for (const element of paramsList) {
      let typeValue = form.fields.find(el => el.fieldName == element)
      if (typeValue)
        params[typeValue.fieldName] = typeValue.value;
    }
    this.apiService.personalProfileUpdate(params)
  }

  update(form) {
    switch (form.pageCode) {
      case "EMPLOYMENT_DETAILS":
        let typeVal = form.fields.find(el => el.fieldName == "loanApplicationTextVariable14")
        if (typeVal.value == "Term Loan" || typeVal.value == "Both") {
          this.updateFacilityDetailsForTl(form)
        }
        if (typeVal.value == "Cash Credit" || typeVal.value == "Both") {
          this.updateFacilityDetailsForCc(form)
        }
        this.callpersonalProfileAndEmploymentDetailsApi(form);
        break;
      case "MORE_INFO":
        this.callMoreInfoApi(form)
        break;
    }


    form.isEdit = true;
    form.showUpdate = false;
    form.fields.forEach((field) => {

      field.fieldAccessModifier = "READ_ONLY"
      if (field.name == "firstName") {
        field.prefixfieldAccessModifier = "READ_ONLY"
      }
      if (field.addressFields) {
        field.addressFields.forEach((addressField) => {
          addressField.fieldAccessModifier = "READ_ONLY";
        })
      }

      if (field.fieldDataType == "TABLE") {
        field.showAction = false;
        field.addMore = false;
      }
    })
  }

  Continue() {
    this.formSubmitFlow();
  }

  formSubmitFlow() {
    this.journey = this.commonService.getJourney();
    if (this.metaConfig.formSubmitFlow) {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey);
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(
          this.metaConfig.formSubmitFlow[0],
          0,
          this.metaConfig.formSubmitFlow.length,
          this.pageCode,
          this.metaConfig,
          this.config,
          this.$scope
        );
      } else {
        this.commonVariableService.globalLoaderState = true;
        this.commonService.proceedJourney(
          this.pageCode,
          undefined,
          this.config
        );
      }
    } else {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.proceedJourney(this.pageCode, undefined, this.config);
    }
  }

  ContinueButtonStatus() {
    return this.commonService.SectionMandatoryValidationSystem(this.config);
  }
  mapExistingCard(form) {
    form.fields[0].value = "There are no FD Account Detail(s) to be displayed.."
  }
}