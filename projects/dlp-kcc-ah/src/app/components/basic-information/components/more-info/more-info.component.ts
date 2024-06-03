import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "@kcc-ah-app/services/api.service";
import { CommonCommonService } from "@kcc-ah-app/services/common-common.service";
import { CommonVariableService } from "@kcc-ah-app/services/common-variable-service";
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
  public isPreview = false;
  constructor(public commonService:CommonCommonService,
    public apiService:ApiService,
    public ArrayMethods:ArrayMethod,
    public sharedService:SharedService,
    public commonVariableService:CommonVariableService,
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
    }

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
        this.formdataPrepopulationWithRespectToProduct() 
        this.contentModeratorWithRespectToProduct()
     
    
  }
  formdataPrepopulationWithRespectToProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
    for(let con of this.config){
      if(con.componentType == "FORM" && this.journey.isPreviewUpdate){
        con.sectionContent.options.disableMode = true;
      }
    }
  }
 
  
  contentModeratorWithRespectToProduct() {
   
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
     
  }

  continue(){
    this.showloader=true;
    this.submitValidationForProduct()
  }

  //disabled status of the submit button
  ContinueButtonStatus(){  
        return this.commonService.SectionMandatoryValidationSystem(this.config)    
  }

  submitValidationForProduct(){   
        this.journey = this.commonService.getJourney()
        if(!this.commonService.SectionValidationSystem(this.config)){
          this.commonVariableService.globalLoaderState=true
          this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
          this.journey = this.commonService.getJourney()   
          this.formSubmitFlow()
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

  
}
