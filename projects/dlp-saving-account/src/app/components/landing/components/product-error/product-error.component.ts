import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@sba-app/services/common-common.service';
import { CommonVariableService } from '@sba-app/services/common-variable-service';
import { FetchFlowApiService } from '@sba-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@sba-app/services/meta-config.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-product-error',
  templateUrl: './product-error.component.html',
  styleUrls: ['./product-error.component.scss']
})
export class ProductErrorComponent implements OnInit {

  config
  journey
  fetchedData: any;
  showloader: boolean; 
  metaConfig;  
  pageObjList:any =[];
  $scope: any;
  pageCode = 'PRODUCT_ERROR'
  scopeSubscriber: any; 
  metaConfigService:MetaConfigService;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;  
  apiService:ApiService;    
  fetchFlowApiService:FetchFlowApiService;
  constructor(public router:Router,private injector: Injector) { 
    this.commonService = this.injector.get<CommonCommonService>(CommonCommonService); 
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService)
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.journey = this.commonService.getJourney()
    this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode);
    this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode);
   }

  ngOnInit(): void {
    
    this.dataScopeFetchFlow()
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
    this.commonVariableService.globalLoaderState= false
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
  goBack(){
    this.router.navigateByUrl('')
  }

}
