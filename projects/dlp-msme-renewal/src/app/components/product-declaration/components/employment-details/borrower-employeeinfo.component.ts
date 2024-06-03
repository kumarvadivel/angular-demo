import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from "@msme-app/services/common-common.service";
import { CommonVariableService } from "@msme-app/services/common-variable-service";
import { ApiService } from "@msme-app/services/api.service";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods';
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';

@Component({
  selector: 'app-borrower-employeeinfo',
  templateUrl: './borrower-employeeinfo.component.html',
  styleUrls: ['./borrower-employeeinfo.component.scss']
})
export class BorrowerEmployeeinfoComponent implements OnInit {

  showSubmit=true;
  showloader=false;
  journey
  config:any;
  tabsData: any; 
  metaConfig
  $scope: any={};
  pageCode = 'EMPLOYMENT_DETAILS'
  scopeSubscriber: any;
constructor(public commonService:CommonCommonService,
  public theme1ApiService:ApiService,
  public ArrayMethods:ArrayMethod,
  public dialog: MatDialog,
  public commonVariableService:CommonVariableService,public sharedService:SharedService) { 
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
  }

ngOnInit(): void {
  this.tabsData= this.journey['tabsData']                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  this.dataScopeFetchFlow()
  
}

ngOnDestroy():void{
  if(this.scopeSubscriber) {
    this.scopeSubscriber.unsubscribe()
  }
   
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
  if(this.$scope.breEligiblityCheck.check_eligibility_res.bureauStatus == "Qualified" && this.$scope.breEligiblityCheck.check_eligibility_res.cibilCheckStatus == "Qualified"){
    this.checkSmaFlagStatus();
    
  } else {
    this.customInitializerWithRespectToProduct()
        this.callRenewalType("No")
    this.callSubStatus("No");
  }

}
checkSmaFlagStatus(){
    let params = {
      cif_Id : this.$scope.borrowerDetails.borrowerDetail.borrowerProfileTextVariable1,
      loanUuid:this.journey.product.loanUuid,
      access_token:this.journey.product.access_token,
      applicationSource:"WEB_JOURNEY",
      finacleRequest:"MSME_RENEWAL",
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.theme1ApiService.checkSmaFlagStatus(params).then((res:any)=>{
      if(res.smaFlag == "N"){
        this.metaConfig.enhancementSection[0].sectionContent.titleData = "Congratulation " + this.$scope.borrowerDetails.borrowerDetail.fullName + " You are eligible for enhancement. Are you interested for enhance the limit"
        this.openPopup()
        this.customInitializerWithRespectToProduct()
      }else{
        this.customInitializerWithRespectToProduct()
        this.callRenewalType("No")
        this.callSubStatus("No");
      }
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
}

customInitializerWithRespectToProduct(){
  if(this.journey.product.productCode == "MSMERE"){
    this.journey = this.commonService.getJourney()
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
    this.config[0].sectionContent.options.externalFeedDataforValidationJson = this.$scope 
  }
}

continue(){
  this.submitValidationForProduct()
}

//disabled status of the submit button
ContinueButtonStatus(){
  if(this.journey.product.productCode == "MSMERE"){
    return this.commonService.SectionMandatoryValidationSystem(this.config)
  }
}

submitValidationForProduct(){
  if(this.journey.product.productCode == "MSMERE"){
    this.journey = this.commonService.getJourney()
    if(this.commonService.SectionValidationSystem(this.config)){
      this.commonVariableService.globalLoaderState=true
      this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
      this.journey = this.commonService.getJourney()   
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

tableTigger(event){
  if(event.data?.eventType=='TABLE_ACCEPT'){
    if(event.data?.field?.field?.fieldName=='loanApplicationTableVariable2'){
      if(event.data?.field.field.rowActionData[event.data?.field.index].rowBinded){
        //submit
        this.submitSecurityDetails(event.data?.field.field.value[event.data?.field.index])
      }else{
        //edit
        this.editSecurityDetails(event.data?.field.field.value[event.data?.field.index],event.data?.field.index)
      }
    }
  }

  if(event.data?.eventType=='TABLE_DELETE'){
    this.deleteSecurityDetails(event.data?.field.index)
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

 //------------------------------custom/other methods and varaible should be writtern down below this line------------------

 updateSecurityDetailsMethod(resp){
  if(resp.code=='200'){
    this.$scope.securityDetailList = resp.securityDetailList;
  }else{
    this.sharedService.openSnackBar(resp.message)
  }
}

 submitSecurityDetails(tableData){
  let facilityUuid;
  this.$scope.fetchMultiFacilityList.responseAttr.multiFacilities.forEach(mulf=>{
    if(mulf.description === 'Cash Credit'){
      facilityUuid = mulf.uuid
    }
  });
  let params = {
    loanFacilityUuid : facilityUuid,
    loanUuid:this.journey.product.loanUuid,
    access_token:this.journey.product.access_token,
    type:"PRIMARY",
    securityType:tableData[0].value,
    description:tableData[1].value,
    basisValuation:tableData[2].value,
    valuationAmount:tableData[3].value,
  }
  this.theme1ApiService.submitSecurityDetails(params).then((res:any)=>{
    this.updateSecurityDetailsMethod(res);
  },(err)=>{
    this.sharedService.openSnackBar(err.message)
  })
}

editSecurityDetails(tableData,indexVal){
  let params = this.$scope.securityDetailList[indexVal];
  params["access_token"] = this.journey.product.access_token;
  params["securityType"] = tableData[0].value;
  params["description"] = tableData[1].value;
  params["basisValuation"] = tableData[2].value;
  params["valuationAmount"] = tableData[3].value;

  this.theme1ApiService.updateSecurityDetails(params).then((res:any)=>{
    this.updateSecurityDetailsMethod(res);
  },(err)=>{
    this.sharedService.openSnackBar(err.message)
  })

}

deleteSecurityDetails(indexVal){
  if(this.$scope.fetchSecurityDetails.securityDetailList[indexVal]){
    let params = {
      loanUuid:this.journey.product.loanUuid,
      access_token:this.journey.product.access_token,
      type:"PRIMARY",
      uuid: this.$scope.securityDetailList[indexVal].uuid
    }
    this.theme1ApiService.deleteSecurityDetails(params).then((res:any)=>{
      this.updateSecurityDetailsMethod(res);
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
  }
}

  openPopup() {
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-35', 'mob-w-100'],
      height: '30%',
      role:"dialog",
      ariaLabel:"Enhancement Section",
      disableClose: true,
      data: {
        // title: 'Please select valid reason for rejection',
        popupContent: this.metaConfig.enhancementSection,
        hideTitle: true,
        pageCode: this.pageCode,
        showBtns: false,
        actionItems: this.metaConfig.actionItems,
        journey: this.journey
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.customInitializerWithRespectToProduct()
      if (result.action.actionLabel == "Yes") {
        this.enableFieldsforYes();
        this.callRenewalType("Yes")
        this.callSubStatus("Yes");
      } else if (result.action.actionLabel == "No") {
        this.callRenewalType("No")
        this.callSubStatus("No");
      }
    })
  }

  enableFieldsforYes() {
    for (let field of this.config[0].sectionContent.fields) {
      if (field.showForYes) {
        field.showField = true
      }
    }
  }

  callRenewalType(type) {
    let params = {
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
      applicationSource: "WEB_JOURNEY",
      microservicetoken: this.journey.product.oauthAccessToken
    }

    params['renewalType'] = type == "Yes" ? "ENHANCEMENT" : "EXISTING_LIMIT"

    this.theme1ApiService.saveOrUpdateRenewalType(params).then((res: any) => {
      if (res.code != '200') {
        this.sharedService.openSnackBar(res.message)
      }
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })
  }

  callSubStatus(type) {
    let params = {
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
      applicationSource: "WEB_JOURNEY",
      statusToBeChanged: "INITIALIZED"
    }

    params['subStatusToBeChanged'] = type == "Yes" ? "SUB_STATUS_31" : "SUB_STATUS_32";
    params['statusChangeDescription'] = type == "Yes" ? "selected as Enhancement" : "selected as Exisiting Limit";
    params['subStatusChangeDescription'] = type == "Yes" ? "selected as Enhancement" : "selected as Exisiting Limit";

    this.theme1ApiService.updateMainLoanApplicationStatus(params).then((res: any) => {
      if (res.code !=='200') {
        this.sharedService.openSnackBar(res.message)
      } 
    }, (err) => {
      this.sharedService.openSnackBar(err.message)
    })
  }
}
