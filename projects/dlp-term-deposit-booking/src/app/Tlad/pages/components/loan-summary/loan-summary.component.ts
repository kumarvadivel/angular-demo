import { Component, OnInit } from '@angular/core';
import { ApiService } from '@tlad-app/services/api.service';
import { CommonCommonService } from '@tlad-app/services/common-common.service';
import { CommonVariableService } from '@tlad-app/services/common-variable-service';
import { ArrayMethod } from '@tlad-app/shared/helpers/ArrayMethods';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: []
})
export class LoanSummaryComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any = {}
  config
  pageCode = 'LOAN_SUMMARY'
  scopeSubscriber: any;

  constructor(public commonService: CommonCommonService,
              public commonVariableService: CommonVariableService,
              public theme1ApiService: ApiService,
              public ArrayMethods: ArrayMethod
  ) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  ngOnInit(): void {
      this.tabsData = this.journey['tabsData']
      this.dataScopeFetchFlow()
  }

  ngOnDestroy(): void {
      this.scopeSubscriber.unsubscribe()
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

  triggerAfterScopeEffect() {
      this.showloader = false
      this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.formdataPrepopulationWithRespectToProduct()
          this.contentModeratorWithRespectToProduct()
      }
  }

  formdataPrepopulationWithRespectToProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
      }
  }

  contentModeratorWithRespectToProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.config = this.commonService.pageSectionContentModeration(this.config, {
              "$scope": {...this.$scope},
              "journey": {...this.journey},
              "metaConfig": {...this.metaConfig}
          })
      }
  }

  continue() {
      this.submitValidationForProduct()
  }

  ContinueButtonStatus() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          return this.commonService.SectionMandatoryValidationSystem(this.config)
      }
      return false

  }

  submitValidationForProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.journey = this.commonService.getJourney()
          if (this.commonService.SectionValidationSystem(this.config)) {
              this.commonVariableService.globalLoaderState = true
              this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
              this.journey = this.commonService.getJourney()
              this.formSubmitFlow()
          }

      }
  }

  formSubmitFlow() {
      this.journey = this.commonService.getJourney()
      if (this.metaConfig.formSubmitFlow) {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.setJourney(this.journey)
          if (this.metaConfig.formSubmitFlow.length) {
              this.commonService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config, this.$scope)
          } else {
              this.commonVariableService.globalLoaderState = true;
              this.commonService.proceedJourney(this.pageCode, undefined, this.config)
          }
      } else {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
  }

  sectionBuilderEmitter($event){
    if(this.journey.product.productCode=='LAAODTDR'){
       if($event.TriggerSection=='BUTTON'){
            if($event.data == 'RATINGS_SUBMIT'){
                this.submitRatings()
            }
       }
    }
  }

  submitRatings(){
    this.config[9].sectionContent.formValueEmitter.next()
    this.ToggleRatingSection()

    // if(this.commonService.sectionValidationSystem(this.config[10])){
    //     let params = {
    //         ...this.config[10].sectionContent.formValue,
    //       access_token:this.journey.product.access_token,
    //       loanApplicationUuid: this.journey.product.loanUuid,
    //       }
    //       this.theme1ApiService.submitFeedback(params).then((res:any)=>{
    //         if(res.code=='200'){
    //             this.ToggleRatingSection()
    //         }
    //       },(err)=>{
           
    //       })
    // }
  } 

  ToggleRatingSection(){
    this.config.forEach(s=>{
        if(s.groupName && s.groupName=='ratingsSection'){
            s.sectionContent.isShow = false
        }
    })
  }

   
     
}
