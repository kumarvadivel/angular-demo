import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CommonCommonService } from "@pmmy-app/services/common-common.service";
import { CommonVariableService } from "@pmmy-app/services/common-variable-service";
import { ApiService } from "@pmmy-app/services/api.service";
import { ExistingRelationshipComponent } from "../../../../shared/components/existing-relationship/existing-relationship.component";
declare let Appice: any;
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
@Component({
  selector: "app-kyc-verification",
  templateUrl: "./kyc-verification.component.html",
  styleUrls: ["./kyc-verification.component.scss"],
})
export class KycVerificationComponent implements OnInit {
  showSubmit=true
  showloader=false
  journey;
  tabsData: any;
  metaConfig;
  pageCode =  "EKYC_VERIFY"
  scopeSubscriber: any;
  $scope:any = {} ;
  config:any

  constructor(public commonService:CommonCommonService,public dialog: MatDialog,
    public theme1ApiService:ApiService,public ArrayMethods:ArrayMethod,public commonVariableService:CommonVariableService) { 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
    }
  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()
    if(this.journey.product.productCode == "SML"){
      this.customInitializerBasedOnProduct()
    }
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
    if(this.journey.product.productCode == "KML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
    if(this.journey.product.productCode == "TML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
    if(this.journey.product.productCode == "SML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
  }
  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }

  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
  }

  continue(){
    this.submitValidationForProduct()
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "KML"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.showOtpView()
      }
    }
    if(this.journey.product.productCode == "TML"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.showOtpView()
      }
    }
    if(this.journey.product.productCode == "SML"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.showOtpView()
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

  sectionBuilderEmitter($event){
    this.journey = this.commonService.getJourney()
    if(this.journey.product.productCode == "KML"){
      this.otpSuccess($event);
    }
    if(this.journey.product.productCode == "TML"){
      this.otpSuccess($event);
    }
    if(this.journey.product.productCode == "SML"){
      if($event.TriggerSection=='OTP'){
        if (($event.status!= undefined && $event.status =="OTP_SUCCESS") ||
        ($event.status == 'OTP_ERROR')){
          this.resetFlow()
        }
        if($event.status=='OTP_SUCCESS'){
         this.handleOTPSuccessSwitchCase();
        }
      }
    }
  }

  handleOTPSuccessSwitchCase() {
    this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
    this.showloader=true;
    this.formSubmitFlow()
    // if name match is there do name match otherwise check etb or not if etb show popup else proceed journey
    if(this.journey.isDedupe ) {                           
      this.openExistingRelationshipPopup()
    }else{            
      this.customInitializerBasedOnProduct();
      this.commonService.proceedJourney('EKYC_VERIFY',undefined,this.config)
    }
  }

  customInitializerBasedOnProduct(){
    if(this.journey.product.productCode == "SML"){
      this.formDataPrepopulationForSml()
    }
  } 

  otpSuccess(event){
    this.journey = this.commonService.getJourney()
    if(event.TriggerSection=='OTP'){
      if(event.status!= undefined && event.status =="OTP_SUCCESS"){
        this.resetFlow()
      }
      if(event.status=='OTP_SUCCESS'){
        this.journey = this.commonService.getJourney()
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.formSubmitFlow()
      }
      if(event.status == 'OTP_ERROR'){
        this.resetFlow()
      }
        else{
          this.journey = this.commonService.getJourney()
          this.showloader=true;
          // this.formSubmitFlow()
              if(this.journey.isDedupe) {                           
                this.openExistingRelationshipPopup()
            }else{            
              this.commonService.proceedJourney('EKYC_VERIFY',undefined,this.config)
            }
        }
      
    }
  }


  showOtpView(){
    this.showSubmit=false
    if(this.journey.product.productCode == "SML"){
      if(this.journey.isEtb){
        this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = 'READ_ONLY'
      }else{
        this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = 'EDITABLE'
      }
    }else{  
      this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = 'READ_ONLY'
    }
    this.config[this.metaConfig.formIndex].sectionContent.formValueEmitter.next()
    this.config[this.metaConfig.otpIndex].sectionContent.options.value = this.config[this.metaConfig.formIndex].sectionContent?.formValue['identityNumberOne']
    this.config[this.metaConfig.otpIndex].sectionContent.options.loanProduct = this.journey['product']
    this.config[this.metaConfig.otpIndex].sectionContent.isShow=true
    this.config[this.metaConfig.consentIndex].sectionContent.isShow=false
  }



  public openExistingRelationshipPopup() {
    this.showloader=false
    this.journey = this.commonService.getJourney()
    const dialogRef = this.dialog.open(ExistingRelationshipComponent, {
      panelClass:['common-popup' , 'w-500', 'mob-w-90'],
      role:"dialog",
      ariaLabel:"Existing Relationship Section",
      data: { "title": "Existing Relationship found","content": this.journey.metaData.capturedData?.existingaadharData?.etbMessage},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataScopeFetchFlow();
      if(this.journey.product.productCode=='SML'){
        this.commonService.proceedJourney('EKYC_VERIFY',undefined,this.config)
      }
    });
  }

  mapAadharData(params){
    params.identityNumberOne = this.journey.metaData.capturedData.identityNumberOne
    for(const prop in this.journey.metaData.capturedData.aadharData){
      if(typeof this.journey.metaData.capturedData.aadharData[prop]=='object' && this.journey.metaData.capturedData.aadharData[prop]!= null){
        for(const subprop in this.journey.metaData.capturedData.aadharData[prop]){
          params[subprop] = this.journey.metaData.capturedData.aadharData[prop][subprop]
        }
      }else{
        params[prop] = this.journey.metaData.capturedData.aadharData[prop]
      }
      params['borrowerUuid'] = this.journey.metaData.capturedData.borrowerUuid
    }
    return params
  }

  resetFlow(){
    this.metaConfig.showSubmit=false
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = true
    this.config[this.metaConfig.otpIndex].sectionContent.isShow=false
    this.showSubmit=true
    this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = 'EDITABLE'

  }

  formDataPrepopulationForSml() {
    let mapping_Data = {}
    for (const prop in this.metaConfig.prepopulationRemaps) {
      mapping_Data[prop] = this.ArrayMethods.getPathVal({ ...this.journey, ...this.$scope }, this.commonService.applyJsonLogic(this.metaConfig.prepopulationRemaps[prop], this.journey))
    }
    this.config.forEach((data, i) => {
      if (data.componentType == 'TABLE') {
        this.formDataPrepopulationForSmlObjectMapper(data, i, mapping_Data)
      }
    })
  }

  formDataPrepopulationForSmlObjectMapper(data, i, mapping_Data) {
    data.sectionContent.config.data.forEach((obj, j) => {
      Object.keys(obj).forEach((o, k) => {
        if (this.config[i].sectionContent.config.headers[k].maskedData) {
          let maskedData = this.config[i].sectionContent.config.headers[k].maskedData
          let maskedValue = this.journey.metaData.capturedData
          maskedData?.forEach((da) => {
            if (maskedValue) {
              let capturedData = maskedValue[da];
              maskedValue = capturedData;
            }
          })
          this.config[i].sectionContent.config.data[j][o] = this.ArrayMethods.maskData(maskedValue)
        } else {
          this.config[i].sectionContent.config.data[j][o] = mapping_Data[o];
        }
      })
    })
  }

}
