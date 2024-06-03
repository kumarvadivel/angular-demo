import { CommonCommonService } from "@cc-app/services/common-common.service";
import { CommonVariableService } from "@cc-app/services/common-variable-service";
import { ApiService } from "@cc-app/services/api.service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { SubmitFlowApiService } from "@cc-app/services/submit-flow-api.service";
@Component({
  selector: "app-add-on-card",
  templateUrl: "./add-on-card.component.html",
})
export class AddOnCardComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any;
  config: any;
  pageCode = "ADD_ON_CARD";
  scopeSubscriber: any;
  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public ArrayMethods: ArrayMethod,
    public sharedService: SharedService,
    public commonVariableService: CommonVariableService,
    private changeDetectorRef: ChangeDetectorRef,
    public submitFlowApiService: SubmitFlowApiService
  ) {
    this.journey = this.commonService.getJourney();
    this.commonService.bindHeaderFooterTypes(this.pageCode);
    this.config = this.commonService.fetchProductPageConfig(
      this.journey,
      this.pageCode
    );
    this.metaConfig = this.commonService.fetchProductMetaConfig(
      this.journey,
      this.pageCode
    );
  }

  ngOnInit(): void {
    this.tabsData = this.journey["tabsData"];
    this.dataScopeFetchFlow();
  }

  /* ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  } */

  dataScopeFetchFlow() {
    const { dataScopeFetchFlow } = this.metaConfig;
    if (dataScopeFetchFlow && dataScopeFetchFlow.length) {
      this.showloader = true;
      this.commonService.fetchDataScopeData(
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
  ContinueButtonStatus() {
    return this.commonService.SectionMandatoryValidationSystem(this.config);
  }

  submitValidationForProduct() {
    this.journey = this.commonService.getJourney();
    if (this.commonService.SectionValidationSystem(this.config)) {
      const index = this.config.findIndex((c) => c.componentType === "FORM");
      if (
        this.config[index].sectionContent.formValue.alternativeUsername !==
        null &&
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
        this.commonService.proceedJourney(
          this.pageCode,
          undefined,
          this.config
        );
      }
    } else {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.proceedJourney(this.pageCode, undefined, this.config);
    }
  }
}
