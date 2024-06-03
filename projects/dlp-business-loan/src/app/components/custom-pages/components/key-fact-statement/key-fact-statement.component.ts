import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from "@bl-app/services/common-common.service";
import { CommonVariableService } from "@bl-app/services/common-variable-service";
import { ApiService } from "@bl-app/services/api.service";
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

  contentModeratorWithRespectToProductForKmlTml(){
    let current_Date = new Date()
    this.showTabSection = true
    this.metaConfig.customData.todayDate = current_Date.getDate().toString()+"/"+(current_Date.getMonth() + 1).toString()+"/"+current_Date.getFullYear().toString()
    this.config[8].sectionContent.config.data = this.$scope.fetchRepaymentSchedule.object.repaymentSchedule
    this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    this.showTL = this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != null && this.$scope.fetchRepaymentSchedule.object.termLoanLoanSanctionNumberVariable7 != 0 ? true : false
    this.showCC = this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 != null &&  this.$scope.fetchRepaymentSchedule.object.cashCreditLoanSanctionNumberVariable8 != 0? true : false
    this.showSection();
  }

  
  contentModeratorWithRespectToProduct() {
    let current_Date;
    if(this.journey.product.productCode == "BL10AB"){
      this.contentModeratorWithRespectToProductForKmlTml();
    }
  }

  showSection(){
    if((this.showTL && this.showCC) || (this.showTL && !this.showCC)){
      this.config[4].sectionContent.isShow = true
      this.config[5].sectionContent.isShow = true
      this.config[6].sectionContent.isShow = true
      this.config[7].sectionContent.isShow = true
      this.config[8].sectionContent.isShow = true
      this.config[9].sectionContent.isShow = false
      this.config[10].sectionContent.isShow = false
      this.config[11].sectionContent.isShow = false
    } else if ( !this.showTL && this.showCC ){
      this.config[4].sectionContent.isShow = false
      this.config[5].sectionContent.isShow = false
      this.config[6].sectionContent.isShow = false
      this.config[7].sectionContent.isShow = false
      this.config[8].sectionContent.isShow = false
      this.config[9].sectionContent.isShow = true
      this.config[10].sectionContent.isShow = true
      this.config[11].sectionContent.isShow = true
    }
  }

  continue(status?){
      this.submitValidationForProduct(status)
  }

  ContinueButtonStatus(){
    if(this.journey.product.productCode == "BL10AB"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  submitValidationForProduct(status?, reason?){
    if(this.journey.product.productCode == "BL10AB"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonVariableService.globalLoaderState=true
        this.commonService.saveSectionFormDataToJourney(this.config,'KEY_FACT_DETAILS')
        this.journey = this.commonService.getJourney()
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']={}
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['acceptStatus'] = status
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['selctedReason'] = reason
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['FlagTL'] = this.showTL;
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['FlagCC'] = this.showCC;
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['loanDetails'] = this.$scope.loanDetails;
        this.journey.metaData.capturedData['KEY_FACT_DETAILS']['selfEmploymentDetailVO'] = this.$scope.borrowerDetails.borrowerDetail.selfEmploymentDetailVO;

        this.commonService.setJourney(this.journey)
        this.formSubmitFlow()
      }
    }
  }

  selectedTab(evt){
    if(this.journey.product.productCode == "BL10AB"){
      if(evt.tab.textLabel == "Term Loan"){
        this.config[4].sectionContent.isShow = true
        this.config[5].sectionContent.isShow = true
        this.config[6].sectionContent.isShow = true
        this.config[7].sectionContent.isShow = true
        this.config[8].sectionContent.isShow = true
        this.config[9].sectionContent.isShow = false
        this.config[10].sectionContent.isShow = false
        this.config[11].sectionContent.isShow = false
      } else if (evt.tab.textLabel == "Cash Credit"){
        this.config[4].sectionContent.isShow = false
        this.config[5].sectionContent.isShow = false
        this.config[6].sectionContent.isShow = false
        this.config[7].sectionContent.isShow = false
        this.config[8].sectionContent.isShow = false
        this.config[9].sectionContent.isShow = true
        this.config[10].sectionContent.isShow = true
        this.config[11].sectionContent.isShow = true
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

  sectionBuilderEmitterForAction(event) {
    if (event.TriggerSection == 'GRID') {
      if (event.GridEvent.TriggerSection == 'BUTTON') {
        switch (event.GridEvent.data) {
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

  //section builder event observer
  sectionBuilderEmitter($event){
    if(this.journey.product.productCode == "BL10AB"){
      this.sectionBuilderEmitterForAction($event)
    }
  }


  downloadRepaymentSchedule(){
    if(this.journey.product.productCode == "BL10AB"){
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

  if(this.journey.product.productCode == "BL10AB"){
    let kfsCode = this.checkKfsCodeKml();
    this.dowmloadKFSDocument(kfsCode);
  }
}

checkKfsCodeKml(){
  if(this.showTL && this.showCC){
    return 'KMLKFSBOTH'
  } 
  if(this.showTL && !this.showCC){
    return 'KMLKFSTL'
  }
  if(!this.showTL && this.showCC){
    return 'KMLKFSCC'
  }
}

checkKfsCodeTml(){
  if(this.showTL && this.showCC){
    return 'TMLKFSBOTH'
  } 
  if(this.showTL && !this.showCC){
    return 'TMLKFSTL'
  }
  if(!this.showTL && this.showCC){
    return 'TMLKFSCC'
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
    ariaLabel:"Rejection Section",
    data: {
      title: 'Please select valid reason for rejection',
      popupContent: this.metaConfig.declineKeyFactSection,
      pageCode: this.pageCode,
      showBtns:true,
      validate: true,
      journey: this.journey
    }
  })
  dialogRef.afterClosed().subscribe(result => {
    if (result.action == "submit") {
      this.submitValidationForProduct("DECLINE", result.value.reason);
    }
  })
}
}
