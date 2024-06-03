import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonCommonService } from "@kcc-renewal-app/services/common-common.service";
import { CommonVariableService } from "@kcc-renewal-app/services/common-variable-service";
import { ApiService } from "@kcc-renewal-app/services/api.service";
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { LoanSummaryActionPopupComponent } from "../../../../shared/components/loan-summary-action-popup/loan-summary-action-popup.component";
declare let Appice: any;
@Component({
  selector: "app-loan-summary",
  templateUrl: "./loan-summary.component.html",
  styleUrls: ["./loan-summary.component.scss"],
})
export class LoanSummaryComponent implements OnInit {
  journey: any;
  config: any;
  metaConfig: any;
  showloader = false;
  fetchedData;
  temp: any;
  chartConfig;
  chartFooter;
  ratingSection: any;
  emiCalculatorConfig: any;
  branchConfig;
  rejectionView: any;
  tableConfig;
  $scope: any;
  pageCode = "LOAN_SUMMARY";
  scopeSubscriber: any;

  constructor(
      public commonService: CommonCommonService,
      public commonVariableService: CommonVariableService,
      public dialog: MatDialog,
      private route: ActivatedRoute,
      private router: Router,
      private sharedService: SharedService,
      public theme1ApiService: ApiService
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
      this.chartConfig = this.metaConfig.chartConfig;
      this.chartFooter = this.metaConfig.chartFooter;
      this.ratingSection = this.commonService.ParseConfig(
          this.metaConfig.ratingSection
      );
      this.branchConfig = this.metaConfig.branchConfig;
      this.rejectionView = this.commonService.ParseConfig(
          this.metaConfig.rejectionView
      );
      this.tableConfig = this.metaConfig.tableConfig;
  }

  ngOnInit(): void {
      this.dataScopeFetchFlow();
  }

  ngOnDestroy() {
      this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
      if (
          this.metaConfig.dataScopeFetchFlow?.length
      ) {
          this.showloader = true;
          this.commonService.fetchDataScopeData(
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
              this.showloader=false
              this.$scope = scopeData;
              this.triggerAfterScopeEffect();
          }
      );
  }

  triggerAfterScopeEffect() {
      this.customInitializerWithRespectToProduct();
  }

  customInitializerWithRespectToProduct() {
      if (this.journey.product.productCode == '1000290' ) {
          this.formdataPrepopulationWithRespectToProduct()
          this.parameterSubscriberWithRespectToProduct()
          this.contentModeratorWithRespectToProduct()
      }
  }

  formdataPrepopulationWithRespectToProduct() {
      if (this.journey.product.productCode == '1000290' ) {
          this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
      }
  }

  parameterSubscriberWithRespectToProduct() {
      this.route.queryParams.subscribe(params => {
          if (params.esignDone == "true") {
              this.metaConfig.showRatingSection = true
              this.showloader = true;
          }
      })
  }


  contentModeratorWithRespectToProduct() {
    this.branchConfig.branchDetails.name = `Bank Of India ${this.$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName} Branch`
    this.branchConfig.branchDetails.address =  `${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value}${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue}`
    this.rejectionView[0].sectionContent.titleData = `${this.rejectionView[0].sectionContent.titleData}${this.$scope.loanDetails.loanDetails.borrower},`
    this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.$scope.loanDetails.loanDetails.crmLeadId || this.$scope.loanDetails.loanId}`
    this.config = this.commonService.pageSectionContentModeration(this.config, {
        "$scope": {...this.$scope},
        "journey": {...this.journey},
        "metaConfig": {...this.metaConfig}
    })

  }

  redirectToHome() {
      this.commonService.flushJourney();
      this.router.navigateByUrl("/1/landing")
  }

  continue() {
      this.submitValidationForProduct();
  }

  ContinueButtonStatus() {

      return this.commonService.SectionMandatoryValidationSystem(this.config)

  }

  submitValidationForProduct() {
      this.journey = this.commonService.getJourney()
      if (this.commonService.SectionValidationSystem(this.config)) {
          this.commonVariableService.globalLoaderState = true
          this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
          this.journey = this.commonService.getJourney()
          this.formSubmitFlow()
      }
  }

  formSubmitFlow() {
      this.journey = this.commonService.getJourney();
      if (this.metaConfig.formSubmitFlow) {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.setJourney(this.journey);
          if (this.metaConfig.formSubmitFlow.length) {
              this.commonService.apiCall(
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

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------
  home() {
      this.commonService.flushJourney();
  }

  fetchRepaymentSchedule() {
      let params = {
          access_token: this.journey.product.access_token,
          applicationId: this.journey.product.loanUuid,
          amount: this.emiCalculatorConfig.options.formValue.loanAmount,
          loanTenure: this.emiCalculatorConfig.options.formValue.tenure,
          interestRate: this.emiCalculatorConfig.options.formValue.interestRate,
          microservicetoken: this.journey.product.oauthAccessToken,
      };
      this.theme1ApiService.fetchRepaymentSchedule(params).then((res: any) => {
          if (res.code == "200") {
              this.tableConfig.data = res.object.repaymentSchedule;
              this.chartFooter.map((ft) => {
                  ft.value = res.object[ft.fieldName];
              });
              this.metaConfig.showRepaymentSchedule = true;
              if (this.journey.product.productCode !== "LA763") {
                  this.metaConfig.showProceedSection = true;
              }
              this.showloader = false;
          }
      });
  }

  Continue() {
      let prop = {
          LeadID: this.fetchedData.crmLeadId,
          ReferenceID: this.fetchedData.crmLeadId,
          ContinuetoSBA: "True",
      };
      this.commonService.triggerAppiceEvent("AGLLeadGen", prop);
      this.commonService.quickInitiateProduct("SBA");
  }

  appiceEventForKmlTml(action){
    let appiceParams = {}
    let appiceEvent = this.journey.product.productCode=='1000290' ? "KCCRENEWALRateUs" : "";

    if(action == "feedback"){
      let selectedFb = this.ratingSection[2].sectionContent.fields[0].options.find(el => el.optionKey == this.ratingSection[2].sectionContent.formValue.rating)
      appiceParams["FeedbackValue"] = selectedFb.optionName
    }
    if(action == "submit"){
      appiceParams["FeedbackSubmitted"] = true
    }
    this.commonService.triggerAppiceEvent(appiceEvent,appiceParams);
  }

  ratingsAction(action) {
      if (action == 'SUBMIT') {
          this.ratingSection[2].sectionContent.formValueEmitter.next()
          if (this.commonService.SectionValidationSystem(this.ratingSection)) {
              let params = {
                  ...this.ratingSection[2].sectionContent.formValue,
                  access_token: this.journey.product.access_token,
                  loanApplicationUuid: this.journey.product.loanUuid,
              }
              this.theme1ApiService.submitFeedback(params).then((res: any) => {
                  if (res.code == '200') {
                      this.metaConfig.showRatingSection = false
                      this.sharedService.openSnackBar(res.message)
                  }
              }, (_err) => {
                  this.sharedService.openSnackBar("something Went Wrong!! please Try again after sometime")
              })
          }
      } else {
          this.metaConfig.showRatingSection = false
      }
  }

  confirmAction(Action) {
      let dialogRef = this.dialog.open(LoanSummaryActionPopupComponent, {
          height: "auto",
          width: "60%",
          data: {
              title:
                  Action == "YES"
                      ? "Confirm Loan Details"
                      : "Please select valid reason for rejection",
              action: Action,
              data: this.chartFooter,
          },
      });
      dialogRef.afterClosed().subscribe((res) => {
          if (res.ok === true) {
              if (Action == "YES") {
                  this.config[
                      this.metaConfig.loanAmountIndex
                      ].sectionContent.htmlData =
                      "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details.";
                  this.metaConfig.showEmiCalculatorSection = false;
                  this.metaConfig.showBranchSection = true;
                  this.metaConfig.showRepaymentSchedule = false;
                  this.metaConfig.showRatingSection = true;
                  this.metaConfig.showProceedSection = false;
              } else {
                  this.metaConfig.showRejectionSection = true;
                  this.metaConfig.showEmiCalculatorSection = false;
                  this.metaConfig.showBranchSection = false;
                  this.metaConfig.showRepaymentSchedule = false;
                  this.metaConfig.showRatingSection = false;
                  this.metaConfig.showMainContent = false;
                  this.metaConfig.showProceedSection = false;
              }
          }
      });

  }

  downloadRepaymentSchedule() {
      this.commonService.exportTableDataToExcel(
          this.tableConfig,
          "Repayment Schedule"
      );
  }
}
