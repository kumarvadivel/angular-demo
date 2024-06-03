import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonCommonService } from '@sba-app/services/common-common.service';
import { CommonVariableService } from '@sba-app/services/common-variable-service';
import { FetchFlowApiService } from '@sba-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@sba-app/services/meta-config.service';
import { SubmitFlowApiService } from '@sba-app/services/submit-flow-api.service';
import { ApiService } from '../../../../services/api.service';
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  journey: any;
  tabsData: any;
    showloader=false;
    metaConfig;
    $scope:any = {}
    config
    pageCode = 'PERSONAL_DETAILS'
  scopeSubscriber: any;
  public isPreview = false;
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;  
  apiService:ApiService;   
  submitFlowApiService:SubmitFlowApiService; 
  fetchFlowApiService:FetchFlowApiService;
  constructor(public ArrayMethods:ArrayMethod,
    private route: ActivatedRoute,private injector: Injector
    ) { 
      this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
      this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
      this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService); 
      this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
      this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode)
    }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow();
    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
      this.isPreview = true;
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

  //disabled status of the submit button
  ContinueButtonStatus(){ 
        return this.commonService.sectionMandatoryValidationSystem(this.config) 
  }

  submitValidationForProduct(){ 
        this.journey = this.commonService.getJourney()
        if(this.commonService.sectionValidationSystem(this.config)){
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
  sectionBuilderEmitter(){
    switch(this.journey.product.productCode){
      case 'PTLEX':
       
      break;
      case 'PSL':
        
      break;
      case 'VLN':
        
      break;
      case 'CA':
       
      break;
    }
  }

   //------------------------------custom/other methods and varaible should be writtern down below this line------------------
}
