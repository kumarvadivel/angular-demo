import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@fd-app/services/common-common.service';
import { CommonVariableService } from '@fd-app/services/common-variable-service';
import { FetchFlowApiService } from '@fd-app/services/fetch-flow-api.service';
import { InitializeJourneyService } from '@fd-app/services/initialize-journey.service';
import { MetaConfigService } from '@fd-app/services/meta-config.service';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../../shared/services/utils/shared.service';
import { LocalStorage } from '@fd-app/shared/helpers/LocalStorage';

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
  localStorage:LocalStorage;
  redirectUrlData: any;
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
      this.localStorage = this.injector.get<LocalStorage>(LocalStorage)
  }

  ngOnInit(): void {
    this.showloader=true
      this.journey = this.commonService.getJourney();
      if(this.journey && this.journey.product.access_token){
        this.commonService.bindHeaderFooterTypes(this.pageCode);
        this.config = this.metaConfigService.fetchProductPageConfig(
            this.journey,
            this.pageCode
        );
        this.metaConfig = this.metaConfigService.fetchProductMetaConfig(
            this.journey,
            this.pageCode
        );
        this.tabsData = this.journey['tabsData']
        this.dataScopeFetchFlow()
      }else{
        this.parameterSubscriberForProduct()
      }
      
    
  }
  loadIntitialData(encryptedData) {
    if (encryptedData && encryptedData.encrypedParams) {
      let decryptedData: any = atob(encryptedData.encrypedParams);
      let decryptedDataArr = decryptedData ? decryptedData.replaceAll("&", "=").split("=") : [];
      if (decryptedDataArr && decryptedDataArr.length > 0) {
        let redirectUrlData=this.setRedirectUrlDataObj(decryptedDataArr);
        this.redirectUrlData = redirectUrlData
        this.journey = this.commonService.getJourney();
        if (this.journey && this.journey.product.access_token) {
          this.setConfig();
          this.dataScopeFetchFlow();
        } else {
          this.handleJourneySnap()
        }
      }
    }
  }

  handleJourneySnap(){
    let snap = this.localStorage.getItem("JOURNEY_SNAP")
    if(snap && snap !=null){
      let params = {
        access_token:snap.product.access_token,
        loanUuid:snap.product.loanUuid,
        microservicetoken: snap.product.oauthAccessToken
      }
      this.apiService.fetchBorrowerDetails(params).then((res:any)=>{
        this.showloader = false
        if(res.code=='200'){
          this.commonService.setJourney(snap)
          this.journey = this.commonService.getJourney()
          this.setConfig();
          this.dataScopeFetchFlow();
        }else{
          this.initializeJourneyService.initializeJourney(this.commonVariableService.loanProductInfo.find(o => o.productCode === 'SBA'),undefined,true,{"functionskel":this.vkycFlow,"arguments":this});
        }
        this.localStorage.removeItem("JOURNEY_SNAP")
      },_err=>{
        this.initializeJourneyService.initializeJourney(this.commonVariableService.loanProductInfo.find(o => o.productCode === 'SBA'),undefined,true,{"functionskel":this.vkycFlow,"arguments":this});
        this.localStorage.removeItem("JOURNEY_SNAP")
      })
    }else{
      this.initializeJourneyService.initializeJourney(this.commonVariableService.loanProductInfo.find(o => o.productCode === 'SBA'),undefined,true,{"functionskel":this.vkycFlow,"arguments":this});
      this.localStorage.removeItem("JOURNEY_SNAP")
    }
  }
  vkycFlow(){
    let journey = this.commonService.getJourney();
    journey.metaData.globalScopeData["redirectUrlData"] = this.redirectUrlData;
    this.commonService.setJourney(journey);
    this.initializeJourneyService.navigateJourney("MOBILE_VERIFY",false,undefined,"vkyc=true")
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
     this.scopeSubscriber?.unsubscribe()
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

  parameterSubscriberForProduct(){
    this.route.queryParams.subscribe((_params) => {
      let encryptedData: any = this.route.snapshot.queryParams;
      this.loadIntitialData(encryptedData);
  })
    
  }
  formDataPrepopulationForProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }
  contentModerationForProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
  }
}
