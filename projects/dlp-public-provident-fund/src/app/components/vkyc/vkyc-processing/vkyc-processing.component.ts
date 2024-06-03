import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@ppf-app/services/common-common.service';
import { CommonVariableService } from '@ppf-app/services/common-variable-service';
import { FetchFlowApiService } from '@ppf-app/services/fetch-flow-api.service';
import { InitializeJourneyService } from '@ppf-app/services/initialize-journey.service';
import { MetaConfigService } from '@ppf-app/services/meta-config.service';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../../shared/services/utils/shared.service';

@Component({
  selector: 'app-vkyc-processing',
  templateUrl: './vkyc-processing.component.html'
})
export class VkycProcessingComponent implements OnInit {
  showloader = false;
  metaConfig;
  showSubmit = true
  journey;
  config: any
  pageObjList: any = [];
  $scope: any;
  pageCode = 'VKYC_Processing'
  scopeSubscriber: any;
  tabsData: any;
  commonService:CommonCommonService;
  commonVariableService:CommonVariableService;
  initializeJourneyService:InitializeJourneyService; 
  sharedService:SharedService; 
  apiService:ApiService;  
  metaConfigService:MetaConfigService; 
  constructor(   
    public router: Router,
    public fetchFlowApiService: FetchFlowApiService, 
    private route: ActivatedRoute,private injector: Injector) {
      this.initializeJourneyService = this.injector.get<InitializeJourneyService>(InitializeJourneyService);
      this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService); 
      this.commonService = this.injector.get<CommonCommonService>(CommonCommonService);
      this.sharedService = this.injector.get<SharedService>(SharedService); 
      this.apiService = this.injector.get<ApiService>(ApiService);  
      this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);  

  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams) {
      let encryptedData: any = this.route.snapshot.queryParams;
      this.loadIntitialData(encryptedData);
    }

  }
  loadIntitialData(encryptedData) {
    if (encryptedData && encryptedData.encrypedParams) {
      let decryptedData: any = atob(encryptedData.encrypedParams);
      let decryptedDataArr = decryptedData ? decryptedData.replaceAll("&", "=").split("=") : [];
      if (decryptedDataArr && decryptedDataArr.length > 0) {
        let redirectUrlData=this.setRedirectUrlDataObj(decryptedDataArr);
        this.journey = this.commonService.getJourney();
        if (this.journey) {
          this.setConfig();
          this.dataScopeFetchFlow();
        } else {
          this.initializeJourneyService.initializeJourney(this.commonVariableService.loanProductInfo.find(o => o.productCode === 'SBA'));
          this.journey = this.commonService.getJourney();
          this.setConfig();
          setTimeout(() => {
            this.journey.metaData.globalScopeData["redirectUrlData"] = redirectUrlData;
            this.commonService.setJourney(this.journey);
            this.dataScopeFetchFlow();
          }, 100)
        }
      }
    }
  }
  setRedirectUrlDataObj(decryptedDataArr) {
    let redirectUrlData = {};
    redirectUrlData['mobileNumber'] = decryptedDataArr[1] ? decryptedDataArr[1] : '';
    redirectUrlData['crmLeadId'] = decryptedDataArr[3] ? decryptedDataArr[3] : '';
    redirectUrlData['loanPurposeUuid'] = decryptedDataArr[5] ? decryptedDataArr[5] : '';
    return redirectUrlData;
  }
  setConfig() {
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.metaConfigService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey, this.pageCode)
    this.tabsData = this.journey['tabsData'];
  }
  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
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
    this.formDataPrepopulationForProduct()
    this.contentModerationForProduct()
  }

  formDataPrepopulationForProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }
  contentModerationForProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
  }
}
