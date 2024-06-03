import { Component, OnInit } from "@angular/core";
import { CommonCommonService } from "@cc-app/services/common-common.service";
import { CommonVariableService } from "@cc-app/services/common-variable-service";
import { ApiService } from "@cc-app/services/api.service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { ActivatedRoute } from "@angular/router";
import { SubmitFlowApiService } from "@cc-app/services/submit-flow-api.service";
@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
})
export class MoreInfoComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any;
  config: any;
  pageCode = "MORE_INFO";
  scopeSubscriber: any;
  public isPreview = false;
  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public ArrayMethods: ArrayMethod,
    public sharedService: SharedService,
    public commonVariableService: CommonVariableService,
    private route: ActivatedRoute,
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
    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
        this.isPreview = true;
        this.journey = this.commonService.getJourney()
        this.journey.metaData.globalScopeData["isPreview"] =this.isPreview
        this.commonService.setJourney(this.journey)
      }
      else{
        this.journey = this.commonService.getJourney()
        this.journey.metaData.globalScopeData["isPreview"] =this.isPreview
        this.commonService.setJourney(this.journey)
      }
    });
  }

  bindMappingData() {
    if (this.journey?.isEtb) {
      this.config[1].sectionContent.options['mapSupplyData'] = true;
      this.config[1].sectionContent.options['mapAndDisable'] = true;
      this.config[1].sectionContent.options['mappingFields'] = { ...this.journey.metaData.capturedData.AccountData, ...this.journey.metaData.capturedData.aadharData };
    } else {
      this.config[1].sectionContent.options['mapSupplyData'] = true;
      if (this.isPreview) {
        this.config[1].sectionContent.options['mappingFields'] = this.journey.metaData.globalScopeData['borrowerDetail']['borrowerDetail'];
        this.config[1].sectionContent.options['mapAndDisable'] = false;
      } else {
        this.config[1].sectionContent.options['mappingFields'] = { ...this.journey.metaData.capturedData.aadharData, ...this.journey.metaData.capturedData.EMAIL_VERIFY };
        this.config[1].sectionContent.options['mapAndDisable'] = true;
      }
      this.config[1].sectionContent.options['mappingFields']['emailId'] = this.config[1].sectionContent.options['mappingFields']['alternativeUsername'];
    }
  }

  ngOnDestroy(): void {
    this.config=null
    this.scopeSubscriber.unsubscribe();
  }

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
    this.config[2].sectionContent.options.externalFeedDataforValidationJson =
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
