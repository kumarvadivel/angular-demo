import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from "@bl-app/services/common-common.service";
import { CommonVariableService } from "@bl-app/services/common-variable-service";
import { ApiService } from "@bl-app/services/api.service";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods';

@Component({
  selector: 'app-facility-details',
  templateUrl: './facility-details.component.html',
  styleUrls: []
})
export class FacilityDetailsComponent implements OnInit {
  showSubmit=true;
  showloader=false;
  journey
  config:any;
  tabsData: any; 
  metaConfig
  $scope: any={};
  pageCode = 'FACILITY_DETAILS'
  scopeSubscriber: any;

  constructor(
    public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public ArrayMethods:ArrayMethod,
    public commonVariableService:CommonVariableService,public sharedService:SharedService
  ) {
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
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
      this.config[0].sectionContent.options.externalFeedDataforValidationJson = this.$scope
    }
  }

  continue(){
    this.submitValidationForProduct()
  }

  ContinueButtonStatus(){
    if(this.journey.product.productCode == "BL10AB"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "BL10AB"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
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
  
  //section builder event observer
  sectionBuilderEmitter($event){
    if(this.journey.product.productCode == "BL10AB"){
      if ($event.TriggerSection == "FORM") {
        this.tableTigger($event);
      }
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
    let params = this.$scope.securityDetailList[indexVal];
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
        uuid: this.$scope.securityDetailList[indexVal].uuid
      }
      this.theme1ApiService.deleteSecurityDetails(params).then((res:any)=>{
        this.updateSecurityDetailsMethod(res);
      },(err)=>{
        this.sharedService.openSnackBar(err.message)
      })
    }
  }

}

