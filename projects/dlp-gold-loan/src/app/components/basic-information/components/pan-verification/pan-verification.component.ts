import { Component, Injector, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { CommonCommonService } from "../../../../services/common-common.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ApiService } from "../../../../services/api.service"; 
import { ExistingRelationshipComponent } from "../../../../shared/components/existing-relationship/existing-relationship.component";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";
import { JourneyEventsService } from "../../../../services/journey-events.service";
import { ITabsData } from "../../../../interfaces/common.interface";
import { LocalStorage } from "../../../../shared/helpers/localStorage";
import { SharedService } from "@gl-app/shared/services/utils/shared.service";
@Component({
  selector: "app-pan-verification",
  templateUrl: "./pan-verification.component.html",
  styleUrls: ["./pan-verification.component.scss"],
})
export class PanVerificationComponent implements OnInit {
  journey;
  tabsData: ITabsData[];
  showloader = false;
  metaConfig;
  pageCode = "PAN_VERIFY";
  scopeSubscriber: Subscription;
  $scope: any = {};
  metaConfigService: MetaConfigService;
  fetchFlowApiService: FetchFlowApiService;
  submitFlowApiService: SubmitFlowApiService;
  commonVariableService: CommonVariableService;
  sharedService: SharedService;
  constructor(
    public commonService: CommonCommonService,
    public dialog: MatDialog,
    public apiService: ApiService,
    public journeyEventsService: JourneyEventsService,
    public localStorage: LocalStorage,
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
    this.sharedService = this.injector.get<SharedService>(SharedService);
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

  config;
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
    this.showloader = true;
    this.journey = this.commonService.getJourney();
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.commonService.saveSectionFormDataToJourney(
        this.config,
        this.pageCode
      );
      this.journey = this.commonService.getJourney();
      this.callVerifyAPI()
    }else{
      this.showloader = false
    }
  }

  callVerifyAPI(){
    this.journey = this.commonService.getJourney();
    let params = {
      access_token: this.journey.product.access_token,
      objectUuid: this.journey.metaData.globalScopeData.borrowerDetails.borrowerDetail.companyUuid,
      loanUuid:this.journey.product.loanUuid,
      identityNumberTwo: this.config[1].sectionContent.formValue.identityNumberTwo,
      name: this.config[1].sectionContent.formValue.panholdername,
      dateOfBirth: this.config[1].sectionContent.formValue.panholderdob,
      microservicetoken: this.journey.product.oauthAccessToken,
      requestFor: "BORROWER_COMPANY",
      applicationSource: "WEB_JOURNEY"
    }

    this.apiService.verifyPanNumber_v3(params).then(
      (res: any) => {
        this.showloader = false;
        if (res.code == "200") {
          this.journey.metaData.capturedData["panData"] = {
            ...res,
          };
          if (res.isETB === true) {
            this.journey.isEtb = true;
          }
          this.commonService.setJourney(this.journey);
          this.checkETB()
        } else {
          this.sharedService.openSnackBar(
            res.message,
            "success",
            res.statusCode
          );
        }
      },
      (error) => {
        this.showloader = false;
        this.sharedService.openSnackBar(error.message, "error", 400);
      })
  }

  checkETB(){
    if (!this.journey?.isEtb) {
      this.formSubmitFlow();
    } else {
      this.openExistingRelationshipPopup();
    }
  }
   

  customInitializerBasedOnProduct() {
    let prop = {
      Constitution: this.journey?.constitution,
      Products:
        this.journey?.metaData?.capturedData?.MOBILE_VERIFY
          ?.borrowerEmploymentHistoryTextVariable1,
      Continue: "True",
      Verify: "True",
      CustomerType: "NTB",
      ContinuePopup: "False",
    };
    this.journeyEventsService.triggerAppiceEvent("AGLStartJourney", prop);
  }
  //calling existingrelationship popup when the etb is true
  public openExistingRelationshipPopup() {
    this.showloader = false;
    this.journey = this.localStorage.SessionGetItem("CURRENT_JOURNEY");
    const dialogRef = this.dialog.open(ExistingRelationshipComponent, {
      panelClass: ["common-popup", "w-500", "mob-w-90"],
      data: {
        title: "Existing Relationship found",
        content: this.journey.metaData.capturedData?.panData?.etbMessage,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.submitFlowApiService.proceedJourney(
        "PAN_VERIFY",
        undefined,
        this.config
      );
    });
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

  navigatePanGenerateLink() {
    window.open(
      "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/getNewEpan",
      "_blank", "noopener"
    );
  }
}
