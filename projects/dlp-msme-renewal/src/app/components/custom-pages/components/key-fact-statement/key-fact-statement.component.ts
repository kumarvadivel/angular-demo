import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from "@msme-app/services/common-common.service";
import { CommonVariableService } from "@msme-app/services/common-variable-service";
import { ApiService } from "@msme-app/services/api.service";
import { SharedService } from '../../../../shared/services/utils/shared.service';
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';

@Component({
  selector: 'app-key-fact-statement',
  templateUrl: './key-fact-statement.component.html',
  styleUrls: ['./key-fact-statement.component.scss']
})
export class KeyFactStatementComponent implements OnInit {
  journey;
  showloader=false
  showloadertab : boolean = false;
  tabsData:any;
  metaConfig;
  showSubmit=true
  config: any;
  $scope: any;
  pageCode = 'KEY_FACT_DETAILS'
  scopeSubscriber: any;
  showTL: boolean = false;
  showCC: boolean = false;
  showTabSection: boolean;
  mateConfigTlData: any;
  mateConfigCcData: any;
  constructor(public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public commonVariableService:CommonVariableService,
    public sharedService:SharedService, 
    public dialog: MatDialog,
    public router:Router) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
     }
  ngOnInit(): void {
    this.dataScopeFetchFlow()
    this.mateConfigTlData = JSON.parse(JSON.stringify(this.metaConfig.TL_data));
    this.mateConfigCcData = JSON.parse(JSON.stringify(this.metaConfig.CC_data));
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
    let current_Date
    if(this.journey.product.productCode == "MSMERE"){
      current_Date = new Date()
      this.showTabSection = true
      this.metaConfig.customData.todayDate = current_Date.getDate().toString()+"/"+(current_Date.getMonth() + 1).toString()+"/"+current_Date.getFullYear().toString()
      this.callRepaymentScheduleApi(this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].uuid, this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].facilityType, this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].facilityDetailsTextVariable12)
      if(this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].facilityType == "TERM_LOAN"){
        this.config[4].sectionContent.config.data = this.metaConfig.TL_data
        this.config[7].sectionContent.isShow = true;
        this.config[8].sectionContent.isShow = true;
      }
      if(this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList[0].facilityType == "CASH_CREDIT"){
        this.config[4].sectionContent.config.data = this.metaConfig.CC_data
        this.config[5].sectionContent.config.data[1].data = "Nil"
        this.config[7].sectionContent.isShow = false;
        this.config[8].sectionContent.isShow = false;
        this.config[9].sectionContent.listItem = this.metaConfig.CC_Statement
      }
      
    }
  }

  callRepaymentScheduleApi(faciltiyUuid, facilityType, accountNo){
    let params = {
      loanUuid:this.journey.product.loanUuid,
      applicationId:this.journey.product.loanUuid,
      access_token:this.journey.product.access_token,
      facilityDetailUuid: faciltiyUuid,
      facilityType: facilityType,
      accountNumber: accountNo,
      microservicetoken: this.journey.product.oauthAccessToken,
      isFacilityEnabled: true,
      applicationSource: "WEB_JOURNEY"
    }

    this.theme1ApiService.fetchRepaymentSchedule(params).then((res:any)=>{
      this.updateRepaymentMethod(res);
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
  }

  updateRepaymentMethod(response){
    this.$scope.fetchRepaymentSchedule = response
    this.config[8].sectionContent.config.data = this.$scope.fetchRepaymentSchedule.object.repaymentSchedule
    this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    this.showloadertab = false;
  }

  continue(status?){
      this.submitValidationForProduct(status)
  }

  ContinueButtonStatus(){
    if(this.journey.product.productCode == "MSMERE"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  submitValidationForProduct(status?, reason?){
    if(this.journey.product.productCode == "MSMERE"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonVariableService.globalLoaderState=true
        this.commonService.saveSectionFormDataToJourney(this.config,'KEY_FACT_DETAILS')
        this.journey = this.commonService.getJourney()
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']={}
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['acceptStatus'] = status
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['selctedReason'] = reason
        this.commonService.setJourney(this.journey)
        this.formSubmitFlow()
      }     
    }
  }

  selectedTab(evt){
    this.showloadertab = true;
    this.$scope.fetchRepaymentSchedule = {}
    let accountDetails = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find( el => el.facilityDetailsTextVariable12 == evt.tab.textLabel)
    if(evt.tab.textLabel == "Term Loan"){
      accountDetails = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find( ob => ob.accountType == "New" &&  ob.facilityType == "TERM_LOAN")
    }

    if(evt.tab.textLabel == "Cash Credit"){
      accountDetails = this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.find( ob => ob.accountType == "New" &&  ob.facilityType == "CASH_CREDIT")
    }

    if (accountDetails.facilityType == "TERM_LOAN") {
      this.metaConfig.TL_data = JSON.parse(JSON.stringify(this.mateConfigTlData));
      this.config[4].sectionContent.config.data = this.metaConfig.TL_data
      this.config[5].sectionContent.config.data[1].data = "2% overdue amount"
      this.config[7].sectionContent.isShow = true;
      this.config[8].sectionContent.isShow = true;
      this.config[9].sectionContent.listItem = this.metaConfig.TL_Statement
    }
    if (accountDetails.facilityType == "CASH_CREDIT") {
      this.metaConfig.CC_data = JSON.parse(JSON.stringify(this.mateConfigCcData));
      this.config[4].sectionContent.config.data = this.metaConfig.CC_data
      this.config[5].sectionContent.config.data[1].data = "Nil"
      this.config[7].sectionContent.isShow = false;
      this.config[8].sectionContent.isShow = false;
      this.config[9].sectionContent.listItem = this.metaConfig.CC_Statement
    }
    this.callRepaymentScheduleApi(accountDetails.uuid, accountDetails.facilityType, accountDetails.facilityDetailsTextVariable12)

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
      if($event.TriggerSection=='BUTTON'){
        switch($event.data){
          case 'KEYFACT_DOWNLOAD':
            this.downloadKeyFactStatement()
          break;
          case 'REPAYMENT_SCHEDULE_DOWNLOAD':
            this.downloadRepaymentSchedule()
          break;
          case 'KEYFACT_ACCEPT':
            this.continue('ACCEPT')
          break;
          case 'KEYFACT_DECLINE':
            this.openPopup()
          break;
        }
      }
    }
  }


  downloadRepaymentSchedule(){
    if(this.journey.product.productCode == "MSMERE"){
      this.commonService.exportTableDataToExcel(this.config[8].sectionContent.config,'Repayment Schedule') 
    }
  }
  
  exportAsPDF(divId,divId_parent){
    if (this.metaConfig.DownloadMode == 'UI') {
      let data_child = document.getElementById(divId);
      let data_parent = document.getElementById(divId_parent)
      data_parent.style.height = `${data_child.scrollHeight + data_child.offsetHeight}px`
    }
    if (this.metaConfig.DownloadMode == 'API') {
      this.downloadKeyFactStatement()
    }
  }

dowmloadKFSDocument(downloadCode){
  let params
  params={
    access_token:this.journey.product.access_token,
    loanUuid:this.journey.product.loanUuid
  }

  this.theme1ApiService.fetchContractToAccept(params).then((res:any)=>{
    if(res.code=='200'){
       let contractToDownload = res.activeContracts.find(c=>c.code==downloadCode)
       if(contractToDownload){
          this.downloadContract(contractToDownload)
       }else{
        this.sharedService.openSnackBar(this.journey.localisation['SWR'])
       }

    }else{
      this.sharedService.openSnackBar(this.journey.localisation['SWR'])
    }
  },()=>{
    this.sharedService.openSnackBar(this.journey.localisation['SWR'])
  })
}

downloadKeyFactStatement(){

  if(this.journey.product.productCode == "MSMERE"){
    this.dowmloadKFSDocument("MSMEREKFS");
  }

}


downloadContract(contract){
  let params = {
    access_token:this.journey.product.access_token,
    loanUuid:this.journey.product.loanUuid,
    contractUuid:contract.contractUuid
  }
  this.theme1ApiService.downloadContract(params)
}

openPopup(){
  let dialogRef = this.dialog.open(PopupComponent, {
    panelClass:['w-50' , 'mob-w-100'],
    height: '50%',
    disableClose: true,
    role:"dialog",
    ariaLabel:"Decline Section",
    data: {
      title: 'Please select valid reason for rejection',
      popupContent: this.metaConfig.declineKeyFactSection,
      pageCode: this.pageCode,
      showBtns:true,
      journey: this.journey,
      validate: true
    }
  })
  dialogRef.afterClosed().subscribe(result => {
    if (result.action == "submit") {
      this.submitValidationForProduct("DECLINE", result.value.reason);
    }
  })
}
}
