import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { CommonCommonService } from "../../../../services/common-common.service";

@Component({
  selector: 'app-product-error',
  templateUrl: './product-error.component.html',
  styleUrls: []
})
export class ProductErrorComponent implements OnInit {
  journey: any;
  tabsData: any;
    showloader=false;
    metaConfig;
    $scope:any = {}
    config
    pageCode = 'PRODUCT_ERROR'
  scopeSubscriber: any;
  constructor(public commonService:CommonCommonService,
    public commonVariableService:CommonVariableService,
    public theme1ApiService:ApiService,
    public ArrayMethods:ArrayMethod,
    private route:ActivatedRoute) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
   }
​
   ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()  
  }
​
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
​
  customInitializerWithRespectToProduct(){
    if(this.journey.product.productCode == "LA763"){
      this.formdataPrepopulationWithRespectToProduct()
      this.parameterSubscriberWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
  }
  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "LA763"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }
​
  parameterSubscriberWithRespectToProductSimplify(){
    this.route.queryParams.subscribe((params)=>{
      if(params.errorCode){
        if(this.metaConfig.errorCodes[params.errorCode]){
          this.config[1].sectionContent.paragraphData = this.metaConfig.errorCodes[params.errorCode]
        }else{
          if(this.journey.localisation[params.errorCode]){
            this.config[1].sectionContent.paragraphData = this.metaConfig.errorCodes[this.journey.localisation[params.errorCode]]
          }else{
            this.config[1].sectionContent.paragraphData = params.errorCode
          }
        }
      }
    })
  }
​
  parameterSubscriberWithRespectToProduct() {
    if(this.journey.product.productCode == "LA763"){
      this.parameterSubscriberWithRespectToProductSimplify()
    }
  }
  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "LA763"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
  }
​
  continue(){
    this.submitValidationForProduct()
  }
​
  //disabled status of the submit button
  ContinueButtonStatus(){
    if(this.journey.product.productCode == "LA763"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }
​
  submitValidationForProductSimply(){
    this.journey = this.commonService.getJourney()
    if(this.commonService.SectionValidationSystem(this.config)){
      this.commonVariableService.globalLoaderState=true
      this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
      this.journey = this.commonService.getJourney()   
      this.formSubmitFlow()
    }
  }
​
  submitValidationForProduct(){
    if(this.journey.product.productCode == "LA763"){
      this.submitValidationForProductSimply()
    }
  }
  
​
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
​
   //------------------------------custom/other methods and varaible should be writtern down below this line------------------
​
   goBack(){
    this.commonService.flushJourney()
  }

}
