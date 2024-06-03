import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { CommonCommonService } from '@ppf-app/services/common-common.service';
import { CommonVariableService } from '@ppf-app/services/common-variable-service'; 
import { ApiService } from '@ppf-app/services/api.service';
import { ExistingRelationshipComponent } from '@ppf-app/shared/components/existing-relationship/existing-relationship.component';
import { ArrayMethod } from '@ppf-app/shared/helpers/ArrayMethods';
import { FetchFlowApiService } from '@ppf-app/services/fetch-flow-api.service';
import { SubmitFlowApiService } from '@ppf-app/services/submit-flow-api.service';
import { MetaConfigService } from '@ppf-app/services/meta-config.service';
import { ActivatedRoute } from '@angular/router';
declare let Appice: any; 
@Component({
  selector: 'app-kyc-verification',
  templateUrl: './kyc-verification.component.html',
  styleUrls: ['./kyc-verification.component.scss']
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
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;  
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService; 
  fetchFlowApiService:FetchFlowApiService;
  constructor(public activeRouter:ActivatedRoute,public ArrayMethods:ArrayMethod,private injector: Injector ,public dialog: MatDialog) { 
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService); 
    this.apiService = this.injector.get<ApiService>(ApiService);  
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);  
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode)
      
    }
  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow();
    this.activeRouter.queryParams.subscribe((params) => {
      if (params) {
        if (params?.isDedupe) {
          this.journey = this.commonService.getJourney()
          const dialogRef = this.dialog.open(ExistingRelationshipComponent, {
            panelClass:['common-popup' , 'w-500', 'mob-w-90'],
            width: '70%', 
            data: { "title": "Existing Relationship found","content": this.journey.resumeJourney?.etbMessage},
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(() => {
            this.dataScopeFetchFlow();
          });
        }
      }
    });
  }

  ngOnDestroy():void{
    this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow(){
    if(this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length){
      this.showloader=true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)
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
        this.formdataPrepopulationWithRespectToProduct() 
        this.contentModeratorWithRespectToProduct()  
  }
  formdataPrepopulationWithRespectToProduct() { 
        this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig) 
  }
 
  
  contentModeratorWithRespectToProduct() { 
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
  }

  continue(){
    this.submitValidationForProduct()
  }

  submitValidationForProduct(){ 
        this.journey = this.commonService.getJourney()
        if(this.commonService.sectionValidationSystem(this.config)){
          this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
          this.journey = this.commonService.getJourney()   
          this.showOtpView()
        } 
  }

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.commonVariableService.globalLoaderState = true;
        this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.commonVariableService.globalLoaderState = true;
      this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
    }
  }

  //section builder event observer
  sectionBuilderEmitter($event){
    this.journey = this.commonService.getJourney() 
        if($event.TriggerSection=='OTP'){
          if($event.status!= undefined && $event.status =="OTP_SUCCESS"){
            this.resetFlow()
          }
          if($event.status=='OTP_SUCCESS'){
            this.journey = this.commonService.getJourney()
            if(this.journey.isEtb) {  
              this.openExistingRelationshipPopup()
             }else{
              this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode);
              this.showloader=true; 
              this.formSubmitFlow()
            }
           
          }else  if($event.status == 'OTP_ERROR'){
            this.resetFlow()
          }
            // if name match is there do name match otherwise check etb or not if etb show popup else proceed journey
            else{
              this.submitFlowApiService.proceedJourney('EKYC_VERIFY',undefined,this.config)
            }
          
        } 
  }

   //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  showOtpView(){
    this.showSubmit=false
    this.config[this.metaConfig.formIndex].sectionContent.fields[0].fieldAccessModifier = 'READ_ONLY'
    //this.config[1].sectionContent.fields[1].showField=false
    // show the otp section with mapping some values
    this.config[this.metaConfig.formIndex].sectionContent.formValueEmitter.next()
    this.config[this.metaConfig.otpIndex].sectionContent.options.value = this.config[this.metaConfig.formIndex].sectionContent?.formValue['identityNumberOne']
    this.config[this.metaConfig.otpIndex].sectionContent.options.loanProduct = this.journey['product']
    this.config[this.metaConfig.otpIndex].sectionContent.isShow=true
    this.config[this.metaConfig.consentIndex].sectionContent.isShow=false
  }
 
 


  //calling existingrelationship popup when the etb is true
  public openExistingRelationshipPopup() {
    this.showloader=false
    this.journey = this.commonService.getJourney()
    const dialogRef = this.dialog.open(ExistingRelationshipComponent, {
      panelClass:['common-popup' , 'w-500', 'mob-w-90'],
      width: '70%', 
      data: { "title": "Existing Relationship found","content": this.journey.metaData.capturedData?.existingaadharData?.etbMessage},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataScopeFetchFlow();
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
  }
 
  
}
