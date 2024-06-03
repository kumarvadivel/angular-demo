import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from "@bl-app/services/common-common.service";
import { CommonVariableService } from "@bl-app/services/common-variable-service";
import { ApiService } from "@bl-app/services/api.service";
import { Router } from '@angular/router';
import { AddNewItemPopupComponent } from '../../../../shared/components/add-new-item-popup/add-new-item-popup.component';
import {MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { LocalStorage } from '@bl-app/shared/helpers/localStorage';
@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.scss']
})
export class SanctionComponent implements OnInit {

  journey: any;
  config: any;
  metaConfig: any;
  showSubmit=true
  showloader=false;
  loanAmount: number = 1000;
  tenure: number = 1;
  interest: number =7.35;
  isChecked:boolean=false
  chartConfig
  chartFooter
  emiCalculatorConfig: any;
  tableConfig
  isshowEnhancedDetails = false
  showEnhanceSanction = false;
  customData:any={}
  loanAmtDisp = {
    dispName: 'Loan Amount',
    min: null,
    max: null,
    steps: 1000,
    binder: null,
    footerStartVal: null,
    footerEndVal: null,
    func: this.formatAmount
  }

  tenureDisp = {
    dispName: 'Tenure',
    min: null,
    max: null,
    steps: 1,
    binder: null,
    footerStartVal: null,
    footerEndVal: null,
    func: this.formatTenure
  }

  LoanData:any = {}
  temp: any;
  branchConfig
  $scope: any;
  pageCode = 'SANCTION_DETAILS'
  scopeSubscriber: any;
  slideContent: boolean = false;
  showSanctionInformation: any = false;
  titleForKmlTml: boolean = false;
  showLoanAmountSection: boolean = false
  
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    public dialog: MatDialog,
    public theme1ApiService: ApiService,
    public localStorage: LocalStorage,
    public route: Router,
    public sharedService: SharedService) { 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
    this.chartConfig = this.metaConfig.chartConfig
    this.chartFooter = this.metaConfig.chartFooter
    this.branchConfig = this.metaConfig.customData.BranchDetails
     this.temp = this.metaConfig.temp
    }

 
  ngOnInit(): void {
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
    if(this.journey.product.productCode == "BL10AB"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
  }

  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }

  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.showSanctionInformation = this.metaConfig.showSanctionInformation.isShow
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
      this.mappingCustomData();
      this.showloader=false
    }
  }

  mappingCustomData() {
    this.metaConfig.customData.maxLoanAmount = this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7
    this.metaConfig.customData.minLoanAmount = 0
    this.metaConfig.customData.minTenure = this.$scope.ProductDetails_v3.minTenure
    this.metaConfig.customData.maxTenure = this.$scope.fetchRepaymentSchedule.object.totalLoanTenure
    this.metaConfig.customData.loanAmount = this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != null && this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != 0 ? this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 : 0
    this.metaConfig.customData.sanctionedAmount = this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != null && this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != 0 ? this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 : 0
    this.metaConfig.customData.tenure = this.$scope.fetchRepaymentSchedule.object.totalLoanTenure
    this.metaConfig.customData.maxEmi = this.$scope.fetchRepaymentSchedule.object.emiToBePaid
    this.metaConfig.customData.enhancedtenure = this.$scope.fetchRepaymentSchedule.object.totalLoanTenure
    this.metaConfig.customData.interest = this.$scope.fetchRepaymentSchedule.object.rateOfInterest
    this.metaConfig.showEmical = true
    this.slideContent = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 != null && this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 != 0 ? true : false
    this.showLoanAmountSection = this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != null && this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != 0 ? true : false;
    this.titleForKmlTml = true
    this.metaConfig.showSanctionInformation.content[0].amount = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 + this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7
    this.metaConfig.showSanctionInformation.content[1].amount = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8
    this.metaConfig.showSanctionInformation.content[2].amount = this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7
    this.metaConfig.showSanctionInformation.content[3].amount = this.$scope.fetchRepaymentSchedule.object.rateOfInterest
    this.metaConfig.customData.sanctionProceedBtnEnable = false
    this.commonVariableService.globalLoaderState = false
    this.metaConfig.customData.emiToBePaid = this.$scope.fetchRepaymentSchedule.object.emiToBePaid ? this.$scope.fetchRepaymentSchedule.object.emiToBePaid : 0
    this.metaConfig.chartConfig.centerData.value = this.$scope.fetchRepaymentSchedule.object.emiToBePaid ? this.$scope.fetchRepaymentSchedule.object.emiToBePaid : 0
    this.metaConfig.chartConfig.data[0].value = this.metaConfig.customData.loanAmount
    this.metaConfig.chartConfig.data[1].value = (this.metaConfig.customData.emiToBePaid * this.metaConfig.customData.tenure) - this.metaConfig.customData.loanAmount
    this.metaConfig.customData.totalPayable = this.$scope.fetchRepaymentSchedule.object.totalPayable
    this.metaConfig.customData.firstEmiDate = this.$scope.fetchRepaymentSchedule.object.firstEmiDate
    this.metaConfig.customData.totalInterestPaid = this.$scope.fetchRepaymentSchedule.object.payableInterest
    this.metaConfig.customData.principal = this.$scope.fetchRepaymentSchedule.object.principal
    this.metaConfig.customData.sanctionProceedBtnEnable = true
    this.chartConfig.updateChart.next()
    this.metaConfig.slideContent[1].sectionContent.fields[1].value = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8;
    this.metaConfig.slideContent[1].sectionContent.fields[1].minLength = 0
    this.metaConfig.slideContent[1].sectionContent.fields[1].maxLength = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8;
    this.metaConfig.customData.sanctionedAmountForCC = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 != null && this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 != 0 ? this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 : 0
    this.metaConfig.customData.disableTenure = true;
    this.metaConfig.customData.regex = "^[1-9]+[0-9]*00$";
    this.metaConfig.customData.tenureReadOnly = true; 
    this.metaConfig.customData.stepValue = 100;
    this.metaConfig.customData.error = true;
  }

  continue(){
    this.submitValidationForProduct()
  }

  //disabled status of the submit button
  ContinueButtonStatus(){
    if(this.journey.product.productCode == "BL10AB"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "BL10AB"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.metaConfig.customData.isSanctionEnhanced=false
        this.journey.metaData.capturedData['SANCTION_DETAILS'] = this.metaConfig.customData
        this.commonService.setJourney(this.journey)
        this.formSubmitFlow()
      }
    }
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

   //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  sectionBuilderEmitter(_$event) {
    if (this.journey.product.productCode == "BL10AB") {
      this.metaConfig.customData.sanctionedAmountForCC = this.metaConfig.slideContent[1].sectionContent.fields[1].value ? this.metaConfig.slideContent[1].sectionContent.fields[1].value : 0;
      this.metaConfig.customData.sanctionProceedBtnEnable = this.metaConfig.slideContent[1].sectionContent.fields[0].error == null ? true : false
    }
  }

  shishuSectionBuilderEmitter(event){
    if(event.TriggerSection=='BUTTON'){
      if(event.data=="SANCTION_SUBMIT"){
        this.formSubmitFlow()
      }
    }
    if(event.TriggerSection=='GRID'){
      if(event.GridEvent.TriggerSection=='GRID'){
        if(event.GridEvent.GridEvent.TriggerSection=='FORM'){
          //calculate button path
          this.config[4].sectionContent.items[0].sectionContent.items[1].sectionContent.disabled = false
          this.config[5].sectionContent.disabled = true
        }
        if(event.GridEvent.GridEvent.TriggerSection=='BUTTON'){
          this.calculateSanctionDetails()
        }
      }
    }
  } 

  calculateSanctionDetails(){
    this.config[4].sectionContent.items[0].sectionContent.items[0].sectionContent.formValueEmitter.next()
   let formValue =  this.config[4].sectionContent.items[0].sectionContent.items[0].sectionContent.formValue
   let params = {
    access_token:this.journey.product.access_token,
    applicationId: this.journey.product.loanUuid,
    interestRate: formValue.interestRate,
    loanAmount: formValue.loanAmount,
    loanTenure: formValue.tenure,
    microservicetoken:this.journey.product.oauthAccessToken
   }

   this.theme1ApiService.fetchRepaymentSchedule(params).then((res:any)=>{
    if(res.code=="200"){
      this.mapCalculatedRepaymentData(res)
    }else{
      this.sharedService.openSnackBar("something went wrong!! please try again")
    }
   },()=>{
    this.sharedService.openSnackBar("something went wrong!! please try again")
   })
   
  }

  mapCalculatedRepaymentData(data){
    //update emi field
    this.config[4].sectionContent.items[0].sectionContent.items[0].sectionContent.fields[5].value = data.object.emiToBePaid
    //update chart below section
    this.config[4].sectionContent.items[1].sectionContent.items[2].sectionContent.fields[0].value ="₹ "+data.object.principal
    this.config[4].sectionContent.items[1].sectionContent.items[2].sectionContent.fields[1].value ="₹ "+data.object.totalPayable
    this.config[4].sectionContent.items[1].sectionContent.items[2].sectionContent.fields[2].value ="₹ "+data.object.payableInterest
    //update the chart
    this.config[4].sectionContent.items[1].sectionContent.items[1].sectionContent.config.data[0].value = data.object.principal
    this.config[4].sectionContent.items[1].sectionContent.items[1].sectionContent.config.data[1].value = data.object.payableInterest
    this.config[4].sectionContent.items[1].sectionContent.items[1].sectionContent.updateChart.next()
    //toggle the button
    this.config[4].sectionContent.items[0].sectionContent.items[1].sectionContent.disabled = true
    this.config[5].sectionContent.disabled = false
  }

  formatAmount(value: number) {
    return '₹ '+ new Intl.NumberFormat('en-IN').format(value) ;
  }

  formatTenure(value: number){
    return value + ' months'
  }
  

  valueBind($event){
    this.metaConfig.customData.sanctionProceedBtnEnable = false
    this.metaConfig.customData = $event
  }

  enhanceSanction() {
    this.metaConfig.customData.isshowEnhancedDetails = true
    this.config[0].sectionContent.titleData = `Sanction Details`
    this.config[1].sectionContent.paragraphData = `Please Customise Your Loan Details To Best Suit Your Needs`
  }

  
  enhanceSanctionAmount(status){
    if(this.commonService.SectionValidationSystem(this.config)){
      this.commonService.saveSectionFormDataToJourney(this.config,'SANCTION_DETAILS')
      this.journey = this.commonService.getJourney()
      this.journey.metaData.capturedData['SANCTION_DETAILS']={}
      this.journey.metaData.capturedData['SANCTION_DETAILS']['acceptStatus'] = status
      this.localStorage.SessionSetItem('SANCTION_DETAILS',this.journey)
      this.formSubmitFlow()
    }
  }
  
  fetchRepaymentSchedule(){
    let params={
      access_token:this.journey.product.access_token,
      microservicetoken:this.journey.product.oauthAccessToken,
      interestRate:this.metaConfig.customData.interest,
      loanTenure:this.metaConfig.customData.tenure,
      loanAmount:this.metaConfig.customData.loanAmount,
    }
    if(this.journey.product.productCode == "BL10AB"){
      params["applicationId"] = this.journey.product.loanUuid
      params["isFacilityEnabled"] = true
    }
    this.theme1ApiService.fetchRepaymentSchedule(params).then((res:any)=>{
      if(res.code=='200'){
        this.commonVariableService.globalLoaderState = false
        this.metaConfig.customData.emiToBePaid = res.object.emiToBePaid
        this.metaConfig.chartConfig.centerData.value = res.object.emiToBePaid
        this.metaConfig.chartConfig.data[0].value = this.metaConfig.customData.loanAmount
        this.metaConfig.chartConfig.data[1].value = (this.metaConfig.customData.emiToBePaid*this.metaConfig.customData.tenure)-this.metaConfig.customData.loanAmount
        this.metaConfig.customData.totalPayable = res.object.totalPayable
        this.metaConfig.customData.totalInterestPaid = res.object.payableInterest
        this.metaConfig.customData.firstEmiDate = res.object.firstEmiDate
        this.metaConfig.customData.principal = res.object.principal
        if(this.journey.product.productCode == "BL10AB"){
          this.metaConfig.customData.sanctionProceedBtnEnable = this.metaConfig.customData?.error ? true : false
        } else{
          this.metaConfig.customData.sanctionProceedBtnEnable=true
        }
        this.chartConfig.updateChart.next()
        this.showloader=false

      }else{
        this.commonVariableService.globalLoaderState = false
        this.showloader=false
        this.sharedService.openSnackBar(res?.message, 'success');
      }
    })
  }
  fetchEmiData(){
    let params={
      access_token:this.journey.product.access_token,
      loanUuid:this.journey.product.loanUuid,
      microservicetoken:this.journey.product.oauthAccessToken
    }
    this.theme1ApiService.fetchPrincipalApprovedDetails(params).then((res:any)=>{
      this.metaConfig.customData.emiToBePaid = res.object.emiToBePaid
      this.metaConfig.chartConfig.centerData.value = res.object.emiToBePaid
      this.metaConfig.chartConfig.data[0].value = this.metaConfig.customData.loanAmount
      this.metaConfig.chartConfig.data[1].value = (this.metaConfig.customData.emiToBePaid*this.metaConfig.customData.tenure)-this.metaConfig.customData.loanAmount
      this.metaConfig.customData.totalPayable = this.metaConfig.customData.emiToBePaid*this.metaConfig.customData.tenure
      this.metaConfig.customData.totalInterestPaid = (this.metaConfig.customData.emiToBePaid*this.metaConfig.customData.tenure)-this.metaConfig.customData.loanAmount
      this.metaConfig.customData.sanctionProceedBtnEnable=true
      this.chartConfig.updateChart.next()
    })
  }
  Editbranch(){
    let sanctionInfo
    //@ts-ignore
    sanctionInfo = cloneDeep(this.metaConfig.addConfig)
    let dialogRef = this.dialog.open(AddNewItemPopupComponent, {
      panelClass:['w-70' , 'mob-w-100'],
      height: '70%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"Add Item Section",
      data: {
        title: '',
        popupContent: sanctionInfo,
        action: 'EDIT',
        journey: this.journey,
        pageCode:"BRANCH_UPDATE"
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result && result =='DONE') {
        this.fetchLoanDetails()
      }
    })

  }
  returntoSanctionPage(){
    this.metaConfig.customData.sanctionProceedBtnEnable=true
    this.metaConfig.customData.isshowEnhancedDetails=false;
  }
  
  fetchLoanDetails(){
    let params={
      access_token:this.journey.product.access_token,
      microservicetoken:this.journey.product.oauthAccessToken,
      loanUuid:this.journey.product.loanUuid
    }
    this.theme1ApiService.borrowerDetails(params).then((res:any)=>{
      if(res.code=='200'){
        
       this.metaConfig.customData.BranchDetails.name = `Bank Of India ${res.userHierarchyUnit.userHierarchyUnitName} Branch`
       this.metaConfig.customData.BranchDetails.address = `${res.userHierarchyUnit.addressAssigned.line1Value} ${res.userHierarchyUnit.addressAssigned.cityValue},${res.userHierarchyUnit.addressAssigned.stateValue},${res.userHierarchyUnit.addressAssigned.zipCodeValue}`
         
        }
      },
      ()=>{
        this.commonService.NavigateJourney('PRODUCT_ERROR')
        this.commonVariableService.globalLoaderState = false
          this.showloader=false
      })
  }

  enhanceSanctionSubmit(){
      this.metaConfig.customData.isSanctionEnhanced=true
      this.journey.metaData.capturedData['SANCTION_DETAILS'] = this.metaConfig.customData
      this.commonService.setJourney(this.journey)
      this.formSubmitFlow()
  }

}
