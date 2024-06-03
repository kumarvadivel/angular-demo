import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from "@bl-app/services/common-common.service";
import { CommonVariableService } from "@bl-app/services/common-variable-service";
import { ApiService } from "@bl-app/services/api.service";

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: []
})
export class DeclarationComponent implements OnInit{

  journey: any;
  config: any;
  metaConfig: any;
  showloader=false
  $scope: any;
  pageCode = 'DECLARATION'
  scopeSubscriber: any;
  constructor(public commonVariableService:CommonVariableService,
    public commonService:CommonCommonService,
    public theme1ApiService:ApiService) {
      this.commonService.bindHeaderFooterTypes('DECLARATION')
      this.journey = this.commonService.getJourney()
      this.config = this.commonService.fetchProductPageConfig(this.journey,'DECLARATION')
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,'DECLARATION')
     }


  ngOnInit(): void {
    this.dataScopeFetchFlow()
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow?.length) {
        this.showloader = true
        this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
    } else {
        this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
        this.$scope = scopeData
        this.triggerAfterScopeEffect()
    })
  }

  triggerAfterScopeEffect(){
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
  }

  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
    }
  }

  contentModeratorWithRespectToProduct(){
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
      this.mappingSectionContentData();
    }
  }

  mappingSectionContentData(){
    for( let field of this.config[this.metaConfig.formIndex].sectionContent.fields){
      for( let checkList of this.$scope.listChecklist.checkListGroupedByStatus[0].checkLists){
        if(field.fieldCode == checkList.code){
          field.fieldLabel = checkList.name;
          field.uuid = checkList.checkListUuid;
          field.showField = true
        }
      }
    }
  }

  Continue(){
    if(this.commonService.SectionValidationSystem(this.config)){
      this.showloader=true
      this.commonService.saveSectionFormDataToJourney(this.config,'')
      this.saveUpdateChecklistActivity()
      this.formSubmitFlow()
    }
  }
  formSubmitFlow(){
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'DECLARATION',this.metaConfig,this.config)
      }else{
        this.commonService.proceedJourney('DECLARATION',undefined,this.config)
      }
    }else{
      this.commonService.proceedJourney('DECLARATION',undefined,this.config)
    }
    
  }

  saveUpdateChecklistActivity(){
    if(this.journey.product.productCode == "BL10AB"){
      let checkList = []
      for( let field of this.config[this.metaConfig.formIndex].sectionContent.fields){
        let list = {
          uuid: field.uuid,
          desc: "",
          datePicker: "",
          observations: field.value
        };
        checkList.push(list);
      }
      this.journey = this.commonService.getJourney()
      this.journey.metaData.capturedData['DECLARATION']={}
      this.journey.metaData.capturedData['DECLARATION']['checkListData'] = checkList;
      this.commonService.setJourney(this.journey)
    }

  }

}
