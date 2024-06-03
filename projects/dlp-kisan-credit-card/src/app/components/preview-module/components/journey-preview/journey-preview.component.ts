import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ArrayMethod } from '../../../../shared/helpers/ArrayMethods';
import { ApiService } from '@kcc-app/services/api.service';
import { CommonCommonService } from '@kcc-app/services/common-common.service';
import { CommonVariableService } from '@kcc-app/services/common-variable-service';

@Component({
  selector: 'app-journey-preview',
  templateUrl: './journey-preview.component.html',
  styleUrls: ['./journey-preview.component.scss']
})
export class JourneyPreviewComponent implements OnInit {

  showloader = false
  previewData
  config;
  metaConfig;
  $scope: any = {}
  apifetchedData = {}
  journey
  tabsData: any;
  pageCode = 'JOURNEY_PREVIEW'
  scopeSubscriber: any
  isEdit: boolean;

  constructor(public commonService: CommonCommonService,
    public apiService: ApiService,
    public commonVariableService: CommonVariableService,
    public sharedService: SharedService, public ArrayMethods: ArrayMethod
  ) {

    this.journey = this.commonService.getJourney();
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.previewData = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow();
    this.getLandList();
    this.getCropList();
  }

  ngOnDestroy() {
    this.config = undefined
    this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
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
    this.contentModerationForProduct()
    this.formDataPrepopulationForProduct()
  }



  contentModerationForProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    this.config.forEach(s => {
      if(s.componentType == 'FORM'){
        s.sectionContent.options.externalFeedDataforValidationJson = this.$scope
      }
    })
  }

  formDataPrepopulationForProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }


  ContinueButtonStatus() {
    return false;
  }

  continue() {
    this.formSubmitFlow();
  }

  formSubmitFlow() {
    if (this.metaConfig.formSubmitFlow) {
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, 'JOURNEY_PREVIEW', this.metaConfig, this.config)
      } else {
        this.commonService.proceedJourney('JOURNEY_PREVIEW', undefined, this.config)
      }
    } else {
      this.commonService.proceedJourney('JOURNEY_PREVIEW', undefined, this.config)
    }
  }


  getLandList() {
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
    }
    this.apiService.fetchLandHoldingDetails(data).then((res: any) => {
      this.config[8].sectionContent.config.data = res.landholdingDetailsList;
    })

  }

  getCropList() {
    let data = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.apiService.fetchCropDetails(data).then((res: any) => {
      this.config[10].sectionContent.config.data = res.cropDetailList;
    })
  }

}
