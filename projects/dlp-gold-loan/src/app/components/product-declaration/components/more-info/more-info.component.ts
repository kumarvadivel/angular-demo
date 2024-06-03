import { Component, Injector, OnInit } from "@angular/core";
import { CommonCommonService } from "../../../../services/common-common.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ApiService } from "../../../../services/api.service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";
import { Subscription } from "rxjs";
import { ITabsData } from "../../../../interfaces/common.interface";
import { IJourney } from "../../../../interfaces/journey.interface";

@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
})
export class MoreInfoComponent implements OnInit {
  journey: IJourney;
  tabsData: ITabsData[];
  showloader = false;
  metaConfig;
  $scope: any;
  config: any;
  pageCode = "MORE_INFO";
  scopeSubscriber: Subscription;
  metaConfigService:MetaConfigService;
  fetchFlowApiService:FetchFlowApiService;
  submitFlowApiService:SubmitFlowApiService;
  commonVariableService:CommonVariableService;
  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public ArrayMethods: ArrayMethod,
    public sharedService: SharedService,
    private injector: Injector
  ) {
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);
    this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService);
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);


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
    this.tabsData = this.journey["tabsData"];
    this.commonService.bindHeaderFooterTypes(this.pageCode);
    this.dataScopeFetchFlow();
  }

  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    const { dataScopeFetchFlow } = this.metaConfig;
    if (dataScopeFetchFlow && dataScopeFetchFlow.length) {
      this.showloader = true;
      this.fetchFlowApiService.fetchDataScopeData(
        dataScopeFetchFlow[0],
        dataScopeFetchFlow.length,
        0,
        {},
        dataScopeFetchFlow,
        this.config,
        this.pageCode
      );
    } else {
      this.triggerAfterScopeEffect();
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe(
      (scopeData) => {
        this.$scope = scopeData;
        this.triggerAfterScopeEffect();
      }
    );
  }
  triggerAfterScopeEffect() {
    this.showloader = false;
    this.config = this.commonService.formDataEditDataPopulator(
      this.config,
      { ...this.$scope, ...this.journey },
      this.metaConfig
    );
    this.config = this.commonService.pageSectionContentModeration(this.config, {
      $scope: { ...this.$scope },
      journey: { ...this.journey },
      metaConfig: { ...this.metaConfig },
    });
    this.config[1].sectionContent.options.externalFeedDataforValidationJson =
      this.$scope;
  }

  continue() {
    this.submitValidationForProduct();
  }

  //disabled status of the submit button
  continueButtonStatus():boolean {
    return this.commonService.sectionMandatoryValidationSystem(this.config);
  }

  submitValidationForProduct() {
    this.journey = this.commonService.getJourney();
    if (this.commonService.sectionValidationSystem(this.config)) {
      const index = this.config.findIndex((c) => c.componentType === "FORM");
      if (
        (this.config[index].sectionContent.formValue.alternativeUsername !==
          null && this.config[index].sectionContent.formValue.alternativeUsername !==
          '' ) &&
        this.config[index].sectionContent.formValue
          .alternativeUsernameVerified === false
      ) {
        this.sharedService.openSnackBar("Please verify the email id", "error");
      } else {
        this.commonVariableService.globalLoaderState = true;
        this.commonService.saveSectionFormDataToJourney(
          this.config,
          this.pageCode
        );
        this.journey = this.commonService.getJourney();
        this.formSubmitFlow();
      }
    }
  }

  formSubmitFlow() {
    this.journey = this.commonService.getJourney();
    if (this.metaConfig.formSubmitFlow) {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey);
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(
          this.metaConfig.formSubmitFlow[0],
          0,
          this.metaConfig.formSubmitFlow.length,
          this.pageCode,
          this.metaConfig,
          this.config,
          this.$scope
        );
      } else {
        this.commonVariableService.globalLoaderState = true;
        this.submitFlowApiService.proceedJourney(
          this.pageCode,
          undefined,
          this.config
        );
      }
    } else {
      this.commonVariableService.globalLoaderState = true;
      this.submitFlowApiService.proceedJourney(this.pageCode, undefined, this.config);
    }
  }
}
