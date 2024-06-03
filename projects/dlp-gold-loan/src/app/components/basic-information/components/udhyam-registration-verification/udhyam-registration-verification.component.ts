import { Component, Injector, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonCommonService } from "../../../../services/common-common.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ApiService } from "../../../../services/api.service"; 
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";
import { Subscription } from "rxjs";
import { ITabsData } from "../../../../interfaces/common.interface";

@Component({
  selector: "app-udhyam-registration-verification",
  templateUrl: "./udhyam-registration-verification.component.html",
  styleUrls: ["./udhyam-registration-verification.component.scss"],
})
export class UdhyamRegistrationVerificationComponent implements OnInit {
  showloader = false;
  journey: any;
  config: any;
  showSubmit = true;
  tabsData: ITabsData[];
  metaConfig: any;
  pageCode = "UDYAM_VERIFY";
  scopeSubscriber: Subscription;
  $scope: any = {};

  metaConfigService:MetaConfigService;
  fetchFlowApiService:FetchFlowApiService;
  submitFlowApiService:SubmitFlowApiService;
  commonVariableService:CommonVariableService;
  constructor(
    private router: Router,
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public sharedService: SharedService,
    private injector: Injector
  ) {
    this.commonVariableService = this.injector.get<CommonVariableService>(
      CommonVariableService
    );
    this.metaConfigService =
      this.injector.get<MetaConfigService>(MetaConfigService);
    this.fetchFlowApiService =
      this.injector.get<FetchFlowApiService>(FetchFlowApiService);
    this.submitFlowApiService =
      this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);

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

  //https://udyamregistration.gov.in/Udyam_Login.aspx
  //https://udyamregistration.gov.in/Udyam_Verify.aspx
  ngOnInit(): void {
    this.dataScopeFetchFlow();
  }

  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    if (
      this.metaConfig?.dataScopeFetchFlow &&
      this.metaConfig?.dataScopeFetchFlow?.length
    ) {
      this.showloader = true;
      this.fetchFlowApiService.fetchDataScopeData(
        this.metaConfig.dataScopeFetchFlow[0],
        this.metaConfig.dataScopeFetchFlow.length,
        0,
        {},
        this.metaConfig.dataScopeFetchFlow,
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
    this.customInitializerWithRespectToProduct();
  }

  customInitializerWithRespectToProduct() {
    this.formdataPrepopulationWithRespectToProduct();
    this.contentModeratorWithRespectToProduct();
  }
  formdataPrepopulationWithRespectToProduct() {
    this.config = this.commonService.formDataEditDataPopulator(
      this.config,
      { ...this.$scope, ...this.journey },
      this.metaConfig
    );
  }

  contentModeratorWithRespectToProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, {
      $scope: { ...this.$scope },
      journey: { ...this.journey },
      metaConfig: { ...this.metaConfig },
    });
  }

  continue() {
    this.submitValidationForProduct();
  }

  submitValidationForProduct() {
    this.journey = this.commonService.getJourney();
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.commonService.saveSectionFormDataToJourney(
        this.config,
        this.pageCode
      );
      this.journey = this.commonService.getJourney();
      this.formSubmitFlow();
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
      this.submitFlowApiService.proceedJourney(
        this.pageCode,
        undefined,
        this.config
      );
    }
  }

  nextStep() {
    this.router.navigateByUrl("core/shishu-mudra/borrower").catch(console.error);
  }

  SkipPage() {
    let skipped = true;
    this.submitFlowApiService.proceedJourney(
      "UDYAM_VERIFY",
      skipped,
      this.config
    );
  }

  verifyUdyam() {
    let params = {
      udhyamNumber: this.config[1].sectionContent.formValue["textVariable3"],
      infoType: "udhyam",
      requestFor: "COMPANY_DETAIL",
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
    };
    this.apiService.verifyUdyam(params).then((res: any) => {
      if (res.code == "200") {
        this.journey.metaData.capturedData["udyamData"] = res.mappingFields;
        this.journey.metaData.capturedData["udyamData"].udhyamNumber =
          this.config[1].sectionContent.formValue["textVariable3"];
        this.journey.metaData.capturedData = {
          ...this.journey.metaData.capturedData,
          ...res.mappingFields,
          ...res.mappingFields.companyAddress,
        };
        this.formSubmitFlow();
      } else {
        this.showloader = false;
        this.sharedService.openSnackBar(res?.message, "error", res?.status);
      }
    }).catch(console.error);
  }

  udyamLinkRedirect(linkType) {
    if (linkType == "VERIFY") {
      window.open(
        "https://udyamregistration.gov.in/Udyam_Verify.aspx",
        "_blank", "noopener"
      );
    }
    if (linkType == "DOWNLOAD") {
      window.open(
        "https://udyamregistration.gov.in/Udyam_Login.aspx",
        "_blank", "noopener"
      );
    }
    if (linkType == "REGISTER") {
      window.open(
        "https://udyamregistration.gov.in/UAM-convert-udyam-msme-free-registration.htm",
        "_blank", "noopener"
      );
    }
  }
  bindMappingData() {
    if (this.journey?.isEtb) {
      this.config[1].sectionContent.options["mapSupplyData"] = true;
      this.config[1].sectionContent.options["mapAndDisable"] = true;
      this.config[1].sectionContent.options["mappingFields"] =
        this.journey.metaData.capturedData.AccountData;
    }
  }
}
