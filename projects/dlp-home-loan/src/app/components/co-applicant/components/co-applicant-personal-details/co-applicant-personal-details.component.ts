import { Component, OnInit } from '@angular/core';
import { ApiService } from '@hl-app/services/api.service';
import { CommonCommonService } from '@hl-app/services/common-common.service';
import { CommonVariableService } from '@hl-app/services/common-variable-service';
import { ArrayMethod } from '@hl-app/shared/helpers/ArrayMethods';

@Component({
  selector: 'app-co-applicant-personal-details',
  templateUrl: './co-applicant-personal-details.component.html',
  styleUrls: []
})
export class CoApplicantPersonalDetailsComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any = {}
  config
  pageCode = 'COAPPLICANT_PERSONAL_DETAILS'
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
      this.scopeSubscriber?.unsubscribe()
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
      if (this.journey.product.productCode == 'HL') {
          this.formdataPrepopulationWithRespectToProduct()
          this.contentModeratorWithRespectToProduct()
      }
  }

  formdataPrepopulationWithRespectToProduct() {
      if (this.journey.product.productCode == 'HL') {
          this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
      }
  }

  contentModeratorWithRespectToProduct() {
      if (this.journey.product.productCode == 'HL') {
          this.config = this.commonService.pageSectionContentModeration(this.config, {
              "$scope": {...this.$scope},
              "journey": {...this.journey},
              "metaConfig": {...this.metaConfig}
          })
          this.config[2].sectionContent.options.externalFeedDataforValidationJson = this.$scope
      }
  }

  continue() {
      this.submitValidationForProduct()
  }

  ContinueButtonStatus() {
      if (this.journey.product.productCode == 'HL') {
          return this.commonService.SectionMandatoryValidationSystem(this.config)
      }
      return false
  }

  submitValidationForProduct() {
      if (this.journey.product.productCode == 'HL') {
          this.journey = this.commonService.getJourney()
          if (this.commonService.SectionValidationSystem(this.config)) {
              this.commonVariableService.globalLoaderState = true
              this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode,this.$scope)
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
              this.commonService.apiCall({ submitflow: this.metaConfig.formSubmitFlow[0], currentIndex: 0, totalLength: this.metaConfig.formSubmitFlow.length, pageCode: this.pageCode, configList: this.metaConfig, pageconfig: this.config, extraCloudParams: this.$scope })
          } else {
              this.commonVariableService.globalLoaderState = true;
              this.commonService.proceedJourney(this.pageCode, undefined, this.config)
          }
      } else {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
  }

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------
}
