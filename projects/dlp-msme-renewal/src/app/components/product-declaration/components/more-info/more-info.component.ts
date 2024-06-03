import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonCommonService } from "@msme-app/services/common-common.service";
import { CommonVariableService } from "@msme-app/services/common-variable-service";
import { ApiService } from "@msme-app/services/api.service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';
declare let Appice: any;
@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
  styleUrls: [],
})
export class MoreInfoComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader=false;
  metaConfig;
  $scope: any;
  config:any
  pageCode = 'MORE_INFO'
  scopeSubscriber: any;
  selectedAsYes: boolean = false;
  constructor(public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public ArrayMethods:ArrayMethod,
    public sharedService:SharedService,
    public commonVariableService:CommonVariableService,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
    }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()
  }

  ngOnDestroy():void{
    this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow(){
    if(this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length){
      this.showloader=true
      this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)
    }else{
      this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData)=>{
      this.$scope = scopeData
      this.triggerAfterScopeEffect()
    })
  }
  triggerAfterScopeEffect(){
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct(){
    if(this.journey.product.productCode == "MSMERE"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }

  }
  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "MSMERE"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }
  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "MSMERE"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
      this.config[1].sectionContent.options.externalFeedDataforValidationJson = {...this.$scope, ...this.journey}
      if (this.$scope.fetchEligibilityDetails.output.assessmentEligibility.reqRenewalType == "ENHANCEMENT" && this.$scope.fetchEligibilityDetails.output.assessmentEligibility.resRenewalType == "ENHANCEMENT") {
        this.enhancementFunction()
      } 
      else {
        if (this.$scope.fetchEligibilityDetails.output.assessmentEligibility.reqRenewalType == "ENHANCEMENT" && this.$scope.fetchEligibilityDetails.output.assessmentEligibility.resRenewalType == "EXISTING_LIMIT"){
          this.openPopup()
        }
        this.config[1].sectionContent.fields[0].addMoreForTl = false
        this.config[1].sectionContent.fields[0].addMoreForCc = false
        this.config[1].sectionContent.fields[0].tableFooterActions[0].isDisplay = false
        this.config[1].sectionContent.fields[0].tableFooterActions[1].isDisplay = false
        this.config[1].sectionContent.fields[0].showAction = false
        this.config[1].sectionContent.fields[0].addMoreMsme = false
      }
      
      for (let list of this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList) {
        this.existingCcFunction(list)
      }
      this.config[1].sectionContent.options.mappingFields["facilityDetailsListTable"] = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList
    }
  }

  existingCcFunction(list){
    if (list.facilityType == "CASH_CREDIT" && list.accountType != "New") {
      if (this.journey.metaData.capturedData.editedCCProposedLimit) {
        list.requestedLimit = this.journey.metaData.capturedData.editedCCProposedLimitValue
        list["loanApplicationTableVariable2"] = this.$scope.fetchSecurityDetails.securityDetailList;
      } else {
        if (this.$scope.fetchEligibilityDetails.output.assessmentEligibility.reqRenewalType == "ENHANCEMENT" && this.$scope.fetchEligibilityDetails.output.assessmentEligibility.resRenewalType == "ENHANCEMENT") {
          list.requestedLimit = null
        } else {
          list.requestedLimit = this.$scope.fetchEligibilityDetails.output.assessmentEligibility.ccExistingLimit
        }
        list["loanApplicationTableVariable2"] = this.$scope.fetchSecurityDetails.securityDetailList;
      }
    }
    if (list.facilityType == "CASH_CREDIT" && list.accountType == "New") {
      list["loanApplicationTableVariable2"] = this.$scope.fetchSecurityDetails.securityDetailList;
    }
  }

  enhancementFunction() {
    this.config[1].sectionContent.options.reqEnhancment = true;
    let faciltyCCList = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.filter(lt => lt.facilityType == "CASH_CREDIT")
    if (faciltyCCList.length >= 1) {
      this.config[1].sectionContent.fields[0].tableFooterActions[1].isDisplay = false
      this.config[1].sectionContent.fields[0].addMoreForCc = false

      if (faciltyCCList[0].accountType == "Existing") {
        this.config[1].sectionContent.fields[0].tableFooterActions[0].isDisplay = false
        this.config[1].sectionContent.fields[0].addMoreForTl = false
      }

    }
    this.enhancementNewTl()

    this.config[1].sectionContent.options.newIndexNoCC = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.findIndex(el => el.accountType == "New" && el.facilityType == "CASH_CREDIT")
    this.config[1].sectionContent.options.newIndexNoTL = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.findIndex(el => el.accountType == "New" && el.facilityType == "TERM_LOAN")

    this.metaConfig.CCEligibilityRoundSection[0].sectionContent.titleData = "You are maximum eligible for CC eligibility round amount Rs " + new Intl.NumberFormat('en-IN').format(this.$scope.fetchEligibilityDetails.output.assessmentEligibility.ccEligibilityRound) + ". Do you want to proceed"
    this.config[1].sectionContent.options.CCEligibilityRoundSection = this.metaConfig.CCEligibilityRoundSection

    this.metaConfig.newCCSection[0].sectionContent.titleData = "You are eligible for amount Rs " + new Intl.NumberFormat('en-IN').format(this.$scope.fetchEligibilityDetails.output.assessmentEligibility.ccEligibilityRound) + ". for New Cash Credit. Do you want to proceed."
    this.config[1].sectionContent.options.newCCSection = this.metaConfig.newCCSection
  }

  enhancementNewTl(){
    for (let list of this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList) {
      if (list.facilityType == "TERM_LOAN" && list.accountType == "New") {
        this.config[1].sectionContent.fields[0].tableFooterActions[0].isDisplay = false
        this.config[1].sectionContent.fields[0].addMoreForTl = false
        if(this.$scope.fetchEligibilityDetails.output.assessmentEligibility.tlEligibilityRound < 10000){
          this.callStatus()
          this.commonService.NavigateJourney('PRODUCT_ERROR', undefined, undefined, "errorCode=Kindly visit branch to avail the enhancement facility")
        } else {
          if(list.requestedLimit > this.$scope.fetchEligibilityDetails.output.assessmentEligibility.tlEligibilityRound){
            this.metaConfig.newTlSection[0].sectionContent.titleData = "You are eligible for amount Rs " + new Intl.NumberFormat('en-IN').format(this.$scope.fetchEligibilityDetails.output.assessmentEligibility.tlEligibilityRound) + ". for New Term Loan. Do you want to proceed."
            this.openPopupNewTl();
          }
        }
      }
    }
  }
  continue(){
    if(this.checkTableCCValue()){
      this.submitValidationForProduct()
    }
  }

  //disabled status of the submit button
  ContinueButtonStatus(){
    if(this.journey.product.productCode == "MSMERE"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  checkTableCCValue(){
    for (const fieldValue of this.config[1].sectionContent.fields[0].value) {
      if ((fieldValue[4].value == null && fieldValue[0].value == "Cash Credit") || fieldValue[4].error != null) {
        this.sharedService.openSnackBar("Please enter the Requested Amount for Cash Credit");
        return false
      }
    }
    return true
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "MSMERE"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonVariableService.globalLoaderState=true
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.journey.metaData.capturedData['FACILITY_DETAILS'] = this.updateFacility();
        let tlData = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find(ob => ob.accountType == "New" && ob.facilityType == "TERM_LOAN");
        if(tlData != null){
          this.journey.metaData.capturedData["newTermloanPresent"] = true
          this.journey.metaData.capturedData["newTermloanDetails"] = tlData;
        } else {
          this.journey.metaData.capturedData["newTermloanPresent"] = false
        }
        this.commonService.setJourney(this.journey)
        this.formSubmitFlow()
      }
    }
  }

  updateFacility() {
    let facilityDetails = []
    for (const fieldValue of this.config[1].sectionContent.fields[0].value) {
      let acctDetails;
      let requestValue;

      acctDetails = this.updateFacilityTypeList(fieldValue, acctDetails);
      requestValue = this.updateFacilityRequestAmount(fieldValue);

      const tabObj = {
        "facilityType": acctDetails.facilityType,
        "facilityDetailsUuid": acctDetails.uuid,
        "loanSanctionAmount": typeof requestValue == "string" ? parseInt(requestValue) : requestValue
      };
      facilityDetails.push(tabObj);
    }
    return facilityDetails;
  }

  updateFacilityTypeList(fieldValue, acctDetails) {
    if (fieldValue[1].value?.length == 0 && fieldValue[0].value == "Term Loan") {
      acctDetails = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find(ob => ob.accountType == "New" && ob.facilityType == "TERM_LOAN");
    } else if (fieldValue[1].value?.length == 0 && fieldValue[0].value == "Cash Credit") {
      acctDetails = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find(ob => ob.accountType == "New" && ob.facilityType == "CASH_CREDIT");
    } else {
      acctDetails = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find(ob => ob.facilityDetailsTextVariable12 == fieldValue[1].value);
    }

    return acctDetails
  }

  updateFacilityRequestAmount(fieldValue){
    let requestValue = fieldValue[4].value;
    if (this.$scope.fetchEligibilityDetails.output.assessmentEligibility.reqRenewalType == "ENHANCEMENT" && this.$scope.fetchEligibilityDetails.output.assessmentEligibility.resRenewalType == "ENHANCEMENT") {
      if (fieldValue[4]?.selectYes && fieldValue[0].value == "Cash Credit") {
        requestValue = this.$scope.fetchEligibilityDetails.output.assessmentEligibility.ccEligibilityRound;
      }
      if(fieldValue[1].value?.length == 0 && fieldValue[0].value == "Cash Credit" && fieldValue[4].value > this.$scope.fetchEligibilityDetails.output.assessmentEligibility.ccEligibilityRound){
        requestValue = this.$scope.fetchEligibilityDetails.output.assessmentEligibility.ccEligibilityRound;
      }
      if (fieldValue[1].value?.length == 0 && fieldValue[0].value == "Term Loan" && this.selectedAsYes) {
        requestValue = this.$scope.fetchEligibilityDetails.output.assessmentEligibility.tlEligibilityRound;
      }
    }
    return requestValue;
  }
  

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.commonVariableService.globalLoaderState = true;
        this.commonService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.commonVariableService.globalLoaderState = true;
      this.commonService.proceedJourney(this.pageCode,undefined,this.config)
    }
  }

  //section builder event observer
  sectionBuilderEmitter($event){
    if(this.journey.product.productCode == "MSMERE"){
      if ($event.TriggerSection == "FORM") {
        this.tableTigger($event);
      }
    }
  }

  tableTigger(event){
    if(event.data?.eventType=='TABLE_DELETE'){
      this.deleteSecurityDetails(event.data?.field.index)
    }
  }
  
  deleteSecurityDetails(indexVal){
    if(this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[indexVal]){
      let params = {
        loanUuid:this.journey.product.loanUuid,
        access_token:this.journey.product.access_token,
        applicationSource:"PRIMARY",
        facilityUUid: this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[indexVal].uuid
      }
      this.theme1ApiService.deleteFacilityDetails(params).then((res:any)=>{
        if(res.responseAttr.code=='200'){
          window.location.reload();
        }else{
          this.sharedService.openSnackBar(res.message)
        }
      },(err)=>{
        this.sharedService.openSnackBar(err.message)
      })
    }
  }


  executeAppiceEvent(){
    let prop = { ProductName: this.journey?.metaData?.capturedData?.MORE_INFO?.borrowerEmploymentHistoryTextVariable1, Continue: 'True', LoanAmount: this.journey?.metaData?.capturedData?.loanAmount}
    this.commonService.triggerAppiceEvent('AGLAddInfo',prop);
    this.commonService.triggerAppiceEvent('setUser');      
  }

  openPopup() {
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-30', 'mob-w-100'],
      height: '20%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"Renewal Section",
      data: {
        popupContent: this.metaConfig.renewalSection,
        hideTitle: true,
        pageCode: this.pageCode,
        showBtns: false,
        actionItems: this.metaConfig.actionItems,
        journey: this.journey
      }
    })
    dialogRef.afterClosed().subscribe()
  }

  openPopupNewTl() {
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-30', 'mob-w-100'],
      height: '20%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"Renewal Section",
      data: {
        popupContent: this.metaConfig.newTlSection,
        hideTitle: true,
        pageCode: this.pageCode,
        showBtns: false,
        actionItems: [{actionKey: true,actionLabel: 'No'},{actionKey: true,actionLabel: 'Yes'}],
        journey: this.journey
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result.action.actionLabel == 'Yes') {
        this.selectedAsYes = true;
      }
      if (result.action.actionLabel == 'No') {
        this.deleteSecurityDetails(this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.findIndex(ob => ob.accountType == "New" && ob.facilityType == "TERM_LOAN"))
      }
    })
  }

  callStatus() {
    let params = {
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
      applicationSource: "WEB_JOURNEY",
      statusToBeChanged: "WITHDRAW",
      statusChangeDescription: "Rejection Review"
    }

    this.theme1ApiService.updateMainLoanApplicationStatus(params).then((res: any) => {
      if (res.code !=='200') {
        this.sharedService.openSnackBar(res.message)
      } 
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })
  }
}
