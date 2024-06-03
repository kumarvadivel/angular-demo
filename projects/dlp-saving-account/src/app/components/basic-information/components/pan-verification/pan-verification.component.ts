import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog'; 
import { CommonCommonService } from '@sba-app/services/common-common.service';
import { CommonVariableService } from '@sba-app/services/common-variable-service';
import { ApiService } from '@sba-app/services/api.service';
import { ExistingRelationshipComponent } from '@sba-app/shared/components/existing-relationship/existing-relationship.component';
import { FetchFlowApiService } from '@sba-app/services/fetch-flow-api.service';
import { SubmitFlowApiService } from '@sba-app/services/submit-flow-api.service';
import { MetaConfigService } from '@sba-app/services/meta-config.service';
declare let Appice:any;
@Component({
  selector: 'app-pan-verification',
  templateUrl: './pan-verification.component.html',
  styleUrls: ['./pan-verification.component.scss']
})
export class PanVerificationComponent implements OnInit {

  journey;
  tabsData: any;
  showloader = false;
  metaConfig;
  pageCode = "PAN_VERIFY"
  scopeSubscriber: any;
  $scope:any = {} 
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;  
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService; 
  fetchFlowApiService:FetchFlowApiService;
  constructor( public dialog: MatDialog,private injector: Injector ) {
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

  config
  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow();
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
          this.formSubmitFlow()
        } 
  }
  
   //calling existingrelationship popup when the etb is true
   public openExistingRelationshipPopup() {
    this.showloader=false
    this.journey = this.commonService.getJourney()
    const dialogRef = this.dialog.open(ExistingRelationshipComponent, {
      ariaLabel:"popup",
      role:"dialog",
      panelClass:['common-popup' , 'w-500', 'mob-w-90'],
      data: { "title": "Existing Relationship found","content": this.journey.metaData.capturedData?.panData?.etbMessage},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      if(this.journey.product.productCode=='LA776'){
        this.submitFlowApiService.proceedJourney('PAN_VERIFY',undefined,this.config)
      }
    });
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


  navigatePanGenerateLink() {
    window.open('https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/getNewEpan', '_blank');
  }

}
