import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from "@pmmy-app/services/common-common.service";
import { CommonVariableService } from "@pmmy-app/services/common-variable-service";
import { ApiService } from "@pmmy-app/services/api.service";
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods';
import { SharedService } from "../../../../shared/services/utils/shared.service";

@Component({
  selector: 'app-journey-preview',
  templateUrl: './journey-preview.component.html',
  styleUrls: ['./journey-preview.component.scss']
})
export class JourneyPreviewComponent implements OnInit {

  showloader=false
  previewData
  config;
  metaConfig;
  $scope:any = {}
  apifetchedData={}
  journey
  tabsData: any;
  pageCode='JOURNEY_PREVIEW'
  scopeSubscriber: any
  isEdit:boolean;

  constructor(public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public commonVariableService:CommonVariableService,
    public sharedService:SharedService, public ArrayMethods:ArrayMethod
    ) {

        this.journey = this.commonService.getJourney();
        this.commonService.bindHeaderFooterTypes(this.pageCode)
        this.previewData = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
        this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
        this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
     }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()
  }

  ngOnDestroy(){
    this.config =undefined
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
    if(this.journey.product.productCode == "KML"){
      this.contentModerationForProduct()
      this.formDataPrepopulationForProduct()
    }
    if(this.journey.product.productCode == "TML"){
      this.contentModerationForProduct()
      this.formDataPrepopulationForProduct()
    }
    if(this.journey.product.productCode == "SML"){
      this.contentModerationForProduct()
      this.formDataPrepopulationForProduct()
    }
  }

  assignExternalValue(con){
    if(con.componentType == 'FORM'){
      con.sectionContent.options.externalFeedDataforValidationJson = this.$scope
    }
    return con;
  }

  contentModerationForProductChecklist(){
    for(let list of this.config[this.config.length - 1].sectionContent.fields){
      for(let check of this.$scope.listChecklist.checkListGroupedByStatus[0].checkLists){
        if(list.fieldCode == check.code && list?.checkListData){
          list.fieldLabel = check.name;
          list.value = check.observations;
          list.uuid = check.checkListUuid;
          list.showField = true
        }
      }
    }
  }

  contentModerationForProduct(){
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
      this.config.forEach(s=>{
        this.assignExternalValue(s)
      })
      this.contentModerationForProductChecklist();
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
      this.config.forEach(s=>{
        this.assignExternalValue(s)
      })
      this.contentModerationForProductChecklist();
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
      this.config.forEach(s=>{
        this.assignExternalValue(s)
      })
    }
  }

  formDataPrepopulationForProduct(){
    if(this.journey.product.productCode == "KML"){
      this.journey = this.commonService.getJourney();
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "TML"){
      this.journey = this.commonService.getJourney();
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }


  ContinueButtonStatus(){
    return false;
  }

  tableTigger(event){
    if(event.data?.eventType=='TABLE_ACCEPT'){
      if(event.data?.field?.field?.fieldName=='loanApplicationTableVariable2'){
        if(event.data?.field.field.rowActionData[event.data?.field.index].rowBinded){
          this.submitSecurityDetails(event.data?.field.field.value[event.data?.field.index])
        }else{
          this.editSecurityDetails(event.data?.field.field.value[event.data?.field.index],event.data?.field.index)
        }
      }
    }

    if(event.data?.eventType=='TABLE_DELETE'){
      this.deleteSecurityDetails(event.data?.field.index)
    }
  }

  sectionBuilderEmitter($event){
    if (this.journey.product.productCode == "KML") {
      if ($event.TriggerSection == "FORM") {
        this.tableTigger($event);
      }
    }
    if(this.journey.product.productCode == "TML"){
      if ($event.TriggerSection == "FORM") {
        this.tableTigger($event);
      }
    }
    if(this.journey.product.productCode == "SML"){
      if ($event.TriggerSection == "FORM") {
        this.tableTigger($event);
      }
    }
  }
  
  continue(){
    this.formSubmitFlow();
  }

  formSubmitFlow(){
    this.showloader = true
    this.journey = this.commonService.getJourney()
    let temp = this.config
    this.config = undefined

    this.config = {}
    if(this.metaConfig.formSubmitFlow){
       this.showloader = true ;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'PREVIEW_PAGE',this.metaConfig,temp,this.$scope)
      }else{
         this.showloader = true
        this.commonService.proceedJourney('PREVIEW_PAGE',undefined,temp)
      }
    }else{
       this.showloader = true ;
      this.commonService.proceedJourney('PREVIEW_PAGE',undefined,temp)
      
    }
  }

  updateSecurityDetailsMethod(resp){
    if(resp.code=='200'){
      this.$scope.fetchSecurityDetails.securityDetailList = resp.securityDetailList;
    }else{
      this.sharedService.openSnackBar(resp.message)
    }
  }


  submitSecurityDetails(tableData){
    let facilityUuid;
    this.$scope.multiFacilityRetreive.responseAttr.facilityDetailsList.forEach(mulf=>{
      if(mulf.loanFacilityName == 'Cash Credit'){
        facilityUuid = mulf.loanFacilityUuid
      }
    });
    let params = {
      loanFacilityUuid : facilityUuid,
      loanUuid:this.journey.product.loanUuid,
      access_token:this.journey.product.access_token,
      type:"PRIMARY",
      securityType:tableData[0].value,
      description:tableData[1].value,
      basisValuation:"STOCK / BOOK DEBT STATEMENT",
      valuationAmount:tableData[3].value,
    }
    this.theme1ApiService.submitSecurityDetails(params).then((res:any)=>{
      this.updateSecurityDetailsMethod(res);
    },(err)=>{
      this.sharedService.openSnackBar(err.message)
    })
  }
  
  editSecurityDetails(tableData,indexVal){
    let params = this.$scope.fetchSecurityDetails.securityDetailList[indexVal];
    params["access_token"] = this.journey.product.access_token;
    params["securityType"] = tableData[0].value;
    params["description"] = tableData[1].value;
    params["basisValuation"] = "STOCK / BOOK DEBT STATEMENT";
    params["valuationAmount"] = tableData[2].value;
  
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
        uuid: this.$scope.fetchSecurityDetails.securityDetailList[indexVal].uuid
      }
      this.theme1ApiService.deleteSecurityDetails(params).then((res:any)=>{
        this.updateSecurityDetailsMethod(res);
      },(err)=>{
        this.sharedService.openSnackBar(err.message)
      })
    }
  }

}
