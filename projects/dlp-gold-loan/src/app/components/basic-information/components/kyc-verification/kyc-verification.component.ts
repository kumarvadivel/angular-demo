import { Component, Injector, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { CommonCommonService } from "../../../../services/common-common.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ApiService } from "../../../../services/api.service"; 
import { ExistingRelationshipComponent } from "../../../../shared/components/existing-relationship/existing-relationship.component";
import { routerTransition } from "../../../../services/utils/route-animation";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";
import { JourneyEventsService } from "../../../../services/journey-events.service";
import { ITabsData } from "../../../../interfaces/common.interface";
@Component({
  selector: "app-kyc-verification",
  templateUrl: "./kyc-verification.component.html",
  styleUrls: ["./kyc-verification.component.scss"],
  animations: [routerTransition],
})
export class KycVerificationComponent implements OnInit {
  showSubmit = true;
  showloader = false;
  journey;
  tabsData: ITabsData[];
  metaConfig;
  pageCode = "EKYC_VERIFY";
  scopeSubscriber: Subscription;
  $scope: any = {};
  config: any;
  dialog:MatDialog;
  journeyEventsService: JourneyEventsService;
  metaConfigService: MetaConfigService;
  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public commonVariableService: CommonVariableService,
    public fetchFlowApiService: FetchFlowApiService,
    public submitFlowApiService: SubmitFlowApiService,
    private injector: Injector
  ) {
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.journeyEventsService =
      this.injector.get<JourneyEventsService>(JourneyEventsService);
    this.metaConfigService =
      this.injector.get<MetaConfigService>(MetaConfigService);
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
    this.customInitializerBasedOnProduct();
    
  }

  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    const { dataScopeFetchFlow } = this.metaConfig;
    if (dataScopeFetchFlow?.length) {
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
  }

  continue() {
    this.journey = this.commonService.getJourney();
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.commonService.saveSectionFormDataToJourney(
        this.config,
        this.pageCode
      );
      this.journey = this.commonService.getJourney();
      this.showOtpView();
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

  //section builder event observer
  sectionBuilderEmitter($event) {
    if ($event.TriggerSection !== "OTP") {
      return;
    }
    this.journey = this.commonService.getJourney();

    switch ($event.status) {
      case "OTP_SUCCESS":
        this.handleOtpSuccess();
        break;
      case "OTP_ERROR":
        this.resetFlow();
        break;
      default:
        this.handleDefaultOtp();
    }
  }

  handleOtpSuccess() {
    this.resetFlow();
    this.journey = this.commonService.getJourney();
    this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode);
    if (!this.journey.isEtb) {
      this.formSubmitFlow();
    } else {
      this.openExistingRelationshipPopup();
    }
  }

  handleDefaultOtp() {
    this.journey = this.commonService.getJourney();
    this.showloader = true;
    if (!this.journey.isEtb) {
      this.formSubmitFlow();
    } else {
      this.openExistingRelationshipPopup();
    }
    this.customInitializerBasedOnProduct();
    this.submitFlowApiService.proceedJourney(
      "EKYC_VERIFY",
      undefined,
      this.config
    );
  }

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  showOtpView() {
    this.showSubmit = false;
    this.config[
      this.metaConfig.formIndex
    ].sectionContent.fields[0].fieldAccessModifier = "READ_ONLY";
    this.config[
      this.metaConfig.formIndex
    ].sectionContent.formValueEmitter.next();
    this.config[this.metaConfig.otpIndex].sectionContent.options.value =
      this.config[this.metaConfig.formIndex].sectionContent?.formValue[
        "identityNumberOne"
      ];
    this.config[this.metaConfig.otpIndex].sectionContent.options.loanProduct =
      this.journey["product"];
    this.config[this.metaConfig.otpIndex].sectionContent.isShow = true;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;
  }
 
  customInitializerBasedOnProduct() {
    let prop = {
      Constitution: this.journey?.constitution,
      Products:
        this.journey?.metaData?.capturedData?.MOBILE_VERIFY
          ?.borrowerEmploymentHistoryTextVariable1,
      Continue: "True",
      Verify: "True",
      CustomerType: this.journey.isEtb ? "ETB" : "NTB",
      ContinuePopup: "False",
    };
    this.journeyEventsService.triggerAppiceEvent("AGLStartJourney", prop);
  }

  //calling existingrelationship popup when the etb is true
  public openExistingRelationshipPopup() {
    this.showloader = false;
    this.journey = this.commonService.getJourney();
    const dialogRef = this.dialog.open(ExistingRelationshipComponent, {
      panelClass: ["common-popup", "w-500", "mob-w-90"],
      data: {
        title: "Existing Relationship found",
        content:
          this.journey.metaData.capturedData?.existingaadharData?.etbMessage,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.formSubmitFlow();
    });
  }

  resetFlow() {
    this.metaConfig.showSubmit = false;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = true;
    this.config[this.metaConfig.otpIndex].sectionContent.isShow = false;
  }
}
