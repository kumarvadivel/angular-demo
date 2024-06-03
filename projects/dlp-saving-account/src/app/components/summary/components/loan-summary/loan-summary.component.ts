import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog'; 
import { CommonCommonService } from '@sba-app/services/common-common.service';
import { CommonVariableService } from '@sba-app/services/common-variable-service';
import { FetchFlowApiService } from '@sba-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@sba-app/services/meta-config.service';
import { ApiService } from '../../../../services/api.service'; 
import { Formatters } from '../../../../shared/helpers/Formatters';
declare let Appice: any;
@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.scss']
})
export class LoanSummaryComponent implements OnInit {
  journey: any;
  config: any;
  metaConfig: any;
  showloader=false
  ratingSection:any;
  // Month	Opening Balance	Interest	Principle Repayment	Closing Balance

  branchConfig

  rejectionView:any;
  $scope: any;
  pageCode = 'LOAN_SUMMARY'
  scopeSubscriber: any;
  metaConfigService:MetaConfigService;
  constructor(public commonService:CommonCommonService,
    public commonVariableService:CommonVariableService,
    public dialog:MatDialog,
    private injector: Injector,
    public formatter:Formatters,
    public apiService:ApiService,public fetchFlowApiService:FetchFlowApiService) { 
      this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode) 
    this.ratingSection = this.metaConfigService.parseConfig(this.metaConfig.ratingSection)
    this.branchConfig = this.metaConfig.branchConfig
    this.rejectionView = this.metaConfigService.parseConfig(this.metaConfig.rejectionView) 
  }

  ngOnInit(): void {
    this.dataScopeFetchFlow()
  }

  ngOnDestroy(){
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
        this.branchConfig.accountDetails.forEach(obj => {
          if(this.$scope.fetchBankDetails.bankDetails[0]?.hasOwnProperty(obj.name)){
            obj.value = this.$scope.fetchBankDetails.bankDetails[0][obj.name];
          }
        });  
        this.rejectionView[0].sectionContent.titleData=`${this.rejectionView[0].sectionContent.titleData}${this.$scope.loanDetails.loanDetails.borrower},`
        this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.$scope.loanDetails.loanDetails.crmLeadId || this.$scope.loanDetails.loanId}`
        
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
  }
   

   //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  home(){
    this.commonService.flushJourney()
  } 
 
 
  //ratings action method
  ratingsAction(action){
    if(action=='SUBMIT'){
      this.ratingSection[2].sectionContent.formValueEmitter.next()
      let params = {
        ...this.ratingSection[2].sectionContent.formValue,
      access_token:this.journey.product.access_token,
      loanApplicationUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken,
      }
      this.apiService.submitFeedback(params).then((res:any)=>{
        if(res.code=='200'){
          this.metaConfig.showRatingSection=false
        }
      })
    }else{
      this.metaConfig.showRatingSection=false
    }
  }
     
  
}
