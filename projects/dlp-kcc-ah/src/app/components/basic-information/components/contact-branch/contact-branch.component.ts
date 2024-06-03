import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
import { ArrayMethod } from '@kcc-ah-app/shared/helpers/ArrayMethods';

@Component({
  selector: 'app-contact-branch',
  templateUrl: './contact-branch.component.html',
  styleUrls: ['./contact-branch.component.scss']
})
export class ContactBranchComponent implements OnInit {
  journey: any;
  tabsData: any;
    showloader=false;
    metaConfig;
    $scope:any = {}
    config
    pageCode='CONTACT_BRANCH';
    branchConfig;
  scopeSubscriber: any;
  constructor(public commonService:CommonCommonService,
    public commonVariableService:CommonVariableService, 
    public ArrayMethods:ArrayMethod,
    private route:ActivatedRoute
    ) { 
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode);
      this.branchConfig = this.metaConfig.branchConfig;
    }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow()  
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
        this.parameterSubscriberWithRespectToProduct()
        this.contentModeratorWithRespectToProduct()  
  }
  formdataPrepopulationWithRespectToProduct() { 
        this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig) 
  }

  parameterSubscriberWithRespectToProduct() { 
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
  
  contentModeratorWithRespectToProduct() { 
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
        this.branchConfig.branchDetails.name = `Bank Of India ${this.$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName} Branch`
        this.branchConfig.branchDetails.address = `${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value}${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue}`    
      }
  

   goBack(){
    this.commonService.flushJourney()
  }

}
