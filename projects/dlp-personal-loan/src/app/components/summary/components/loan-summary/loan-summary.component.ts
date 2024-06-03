import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '@pl-app/services/api.service';
import {CommonCommonService} from '@pl-app/services/common-common.service';
import {CommonVariableService} from '@pl-app/services/common-variable-service';
import {SharedService} from '@pl-app/shared/services/utils/shared.service';
import {
    LoanSummaryActionPopupComponent,
} from '../../../../shared/components/loan-summary-action-popup/loan-summary-action-popup.component';

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
        this.temp = this.commonService.ParseConfigFormJourneyPreview([
            this.metaConfig.temp.fields,
        ])[0];
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
        if (this.journey.product.productCode == 'PTLEX') {
            this.formdataPrepopulationWithRespectToProduct()
            this.parameterSubscriberWithRespectToProduct()
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == 'PTLEX') {
            this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
        }
    }

    parameterSubscriberWithRespectToProduct() {
        this.route.queryParams.subscribe(params => {
            if (params.esignDone == "true") {
                this.metaConfig.showRatingSection = true
                this.showloader = true
                this.fetchBankDetails(0, this.metaConfig.bankDetails.iterationCount)
            } else {
                if (this.$scope?.fetchEligibilityData.output?.plEligOutput?.stpFlag == 'STP') {
                    if (this.$scope.loanDetails.loanDetails.loanApplicationTextVariable54 == "true") {
                        this.metaConfig.showRatingSection = true
                    } else {
                        this.metaConfig.showRatingSection = false
                    }
                } else {
                    this.metaConfig.showRatingSection = true
                }
            }
        })
    }


    contentModeratorWithRespectToProduct() {
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
                    { submitflow: this.metaConfig.formSubmitFlow[0], currentIndex: 0, totalLength: this.metaConfig.formSubmitFlow.length, pageCode: this.pageCode, configList: this.metaConfig, pageconfig: this.config, extraCloudParams: this.$scope }                );
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

    sectionBuilderEmitter($event) {
        if ($event.TriggerSection == 'BUTTON') {
            if ($event.data == 'ESIGN_PROCEED') {
                this.esignContinue('ACCEPT')
            }
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

    ratingsAction(action) {
        if (action == 'SUBMIT') {
            this.ratingSection[2].sectionContent.formValueEmitter.next()
            if (this.commonService.SectionValidationSystem(this.ratingSection)) {
                let params = {
                    ...this.ratingSection[2].sectionContent.formValue,
                    access_token: this.journey.product.access_token,
                    loanApplicationUuid: this.journey.product.loanUuid,
                    microservicetoken: this.journey.product.oauthAccessToken,
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

    esignContinue(_status) {
        this.formSubmitFlow();
    }

    fetchBankDetails(iteration, totaliteration) {
        let params = {
            offset: 0,
            access_token: this.journey.product.access_token,
        };
        this.theme1ApiService.fetchBankDetails(params).then(
            (res: any) => {
                if (res.code == "200" && res.bankDetails.length != 0) {
                    this.showloader = false;
                    this.config[3].sectionContent.isShow = true;
                    this.config[3].sectionContent.paragraphData =
                        this.config[3].sectionContent.paragraphData +
                        res.bankDetails[0].accountNumber;
                        this.commonService.journeyEventsExecutor("BANK_DETAILS_FETCH",{LoanApprovedDate:res.bankDetails[0].dateCreated,CustomerID:this.$scope.borrowerDetails.borrowerDetail.borrowerProfileTextVariable1,LoanNumber:res.bankDetails[0].accountNumber})
                } else {
                    if (iteration == totaliteration) {
                        this.showloader = false;
                    } else {
                        setTimeout(() => {
                            this.fetchBankDetails(iteration + 1, totaliteration);
                        }, this.metaConfig.bankDetails.delay);
                    }
                }
            },
            (_err) => {
                this.showloader = false;
            }
        );
    }
}
