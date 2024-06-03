import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CommonCommonService } from '@ca-app/services/common-common.service';
import { CommonVariableService } from '@ca-app/services/common-variable-service';
import { FetchFlowApiService } from '@ca-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@ca-app/services/meta-config.service';
import { SubmitFlowApiService } from '@ca-app/services/submit-flow-api.service';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../../shared/services/utils/shared.service';

@Component({
  selector: 'app-vkyc',
  templateUrl: './vkyc.component.html',
  styleUrls: ['./vkyc.component.scss']
})
export class VkycComponent implements OnInit {  
  showloader=false;
  metaConfig;
  categoryType:any = "";
  showSubmit=true
  journey; 
  config:any
  pageObjList:any =[];
  $scope: any;
  pageCode = 'VKYC'
  scopeSubscriber: any;
  submitFlowApiService:SubmitFlowApiService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService; 
  fetchFlowApiService:FetchFlowApiService;
  sharedService:SharedService; 
  apiService:ApiService;  
  metaConfigService:MetaConfigService;   
  constructor(   
    public router:Router,  
    private activeRoute: ActivatedRoute,private injector: Injector) { 
      this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
      this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
      this.sharedService = this.injector.get<SharedService>(SharedService); 
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
    this.categoryType = this.activeRoute.snapshot.queryParams.resumeJourney
    this.dataScopeFetchFlow()
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

  customInitializerWithRespectToProduct() { 
        this.formDataPrepopulationForProduct() 
        this.contentModerationForProduct() 
  }

  formDataPrepopulationForProduct(){ 
        this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig) 
  } 
  contentModerationForProduct() { 
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
  }

  continue(){
    this.formSubmitFlow()
  }
 

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
    }
  } 
}
