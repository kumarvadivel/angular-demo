import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { CommonCommonService } from "../../../../services/common-common.service";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";

@Component({
  selector: 'app-product-error',
  templateUrl: './product-error.component.html',
})
export class ProductErrorComponent implements OnInit {
  showloader;
  leftConfig: any;
  metaConfig;
  config: any;
  journey: any;
  $scope;
  categoryType: string;
  pageCode = "PRODUCT_ERROR";
  tabsData: any;
  scopeSubscriber: any;
  metaConfigService:MetaConfigService;
  fetchFlowApiService:FetchFlowApiService;
  submitFlowApiService:SubmitFlowApiService;
  commonVariableService:CommonVariableService;
  constructor(
    public ArrayMethods: ArrayMethod, 
    public commonService: CommonCommonService,
    public apiService: ApiService,
    private route: ActivatedRoute,
    public sharedService: SharedService,
    private injector: Injector
  ) {
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService);
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);
    this.commonVariableService.globalLoaderState = true;
    this.journey = this.commonService.getJourney();
    this.config = this.metaConfigService.fetchProductPageConfig(
      this.journey,
      this.pageCode
    );
    this.metaConfig = this.metaConfigService.fetchProductMetaConfig(
      this.journey,
      this.pageCode
    );
  }

  ngOnInit(): void {
    this.commonService.bindHeaderFooterTypes(this.pageCode);
    this.tabsData = this.journey["tabsData"];
    this.dataScopeFetchFlow();
  }

  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    const {dataScopeFetchFlow} = this.metaConfig;
    if (dataScopeFetchFlow?.length) {
      this.commonVariableService.globalLoaderState = true;
      this.fetchFlowApiService.fetchDataScopeData(
        this.metaConfig.dataScopeFetchFlow[0],
        this.metaConfig.dataScopeFetchFlow.length,
        0,
        {},
        this.metaConfig.dataScopeFetchFlow,
        this.config,
        "PRODUCT_ERROR"
      );
    } else {
      this.triggerAfterScopeEffect();
    }
    this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
      this.$scope = scopeData;
      this.triggerAfterScopeEffect();
    });
  }

  triggerAfterScopeEffect() {
    this.commonVariableService.globalLoaderState = false;
    this.customInitializerWithRespectToProduct();
  }

  customInitializerWithRespectToProduct() {
    this.config = this.commonService.formDataEditDataPopulator(
      this.config,
      { ...this.$scope, ...this.journey },
      this.metaConfig
    );
    this.parameterSubscriberWithRespectToProduct();
    this.config = this.commonService.pageSectionContentModeration(this.config, {
      $scope: { ...this.$scope },
      journey: { ...this.journey },
      metaConfig: { ...this.metaConfig },
    });
  }

  parameterSubscriberWithRespectToProduct() {
    this.route.queryParams.subscribe((params) => {
      if (params.errorCode) {
        if (this.metaConfig.errorCodes[params.errorCode]) {
          this.config[1].sectionContent.paragraphData =
            this.metaConfig.errorCodes[params.errorCode];
        } else {
          if (this.journey.localisation[params.errorCode]) {
            this.config[1].sectionContent.paragraphData =
              this.metaConfig.errorCodes[
                this.journey.localisation[params.errorCode]
              ];
          } else {
            this.config[1].sectionContent.paragraphData = params.errorCode;
          }
        }
      }
    });
  } 

  continue() {
    this.submitValidationForProduct();
  }

  //disabled status of the submit button
  continueButtonStatus(): boolean {
    return this.commonService.sectionMandatoryValidationSystem(this.config);
  }

  previousContinue() {
    this.commonService.findPreviouspageCode("PRODUCT_ERROR", 1);
  }

  submitValidationForProduct() {
    this.journey = this.commonService.getJourney()
    if(this.commonService.sectionValidationSystem(this.config)){
      this.commonVariableService.globalLoaderState=true
      this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
      this.journey = this.commonService.getJourney()   
      this.formSubmitFlow()
    }
  }

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.commonVariableService.globalLoaderState = true;
        this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.commonVariableService.globalLoaderState = true;
      this.submitFlowApiService.proceedJourney(this.pageCode,undefined,this.config)
    }
  } 
 

  goBack() {
    this.commonService.flushJourney();
  }

}
