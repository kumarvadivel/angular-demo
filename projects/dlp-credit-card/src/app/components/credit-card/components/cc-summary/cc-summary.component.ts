import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@cc-app/services/api.service';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';
import { SharedService } from '@cc-app/shared/services/utils/shared.service';

@Component({
  selector: 'app-cc-summary',
  templateUrl: './cc-summary.component.html',
  styleUrls: ['./cc-summary.component.scss']
})
export class CcSummaryComponent implements OnInit {

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
  percentageValues = [];
  // Month	Opening Balance	Interest	Principle Repayment	Closing Balance
  branchConfig;
  rejectionView: any;
  tableConfig;
  $scope: any;
  pageCode = "CC_SUMMARY";
  scopeSubscriber: any;
  bgcolor = [
    "#0090E5",
    "#00C5AB",
    "#c55e1d",
    "#C5811D",
    "#6E44C3",
    "#D6BB4E",
    "#93159C",
    "#43551A",
    "#1FC5AB",
    "#6A85A9",
    "#6E44C3",
  ];
  constructor(
    public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService,
    public sharedService: SharedService,
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
    this.branchConfig = this.metaConfig.branchConfig;
  }

  ngOnInit(): void {
    this.dataScopeFetchFlow();
  }

  ngOnDestroy() {
    this.scopeSubscriber.unsubscribe();
  }
  dataScopeFetchFlow() {
    if (
      this.metaConfig.dataScopeFetchFlow &&
      this.metaConfig.dataScopeFetchFlow.length
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
        this.$scope = scopeData;
        this.triggerAfterScopeEffect();
      }
    );
  }
  triggerAfterScopeEffect() {
    this.showloader = false
    this.customInitializerWithRespectToProduct();
  }

  customInitializerWithRespectToProduct() {
    this.formdataPrepopulationWithRespectToProduct();
    // this.parameterSubscriberWithRespectToProduct()
    this.contentModeratorWithRespectToProduct();
  }

  formdataPrepopulationWithRespectToProduct() {
    this.config = this.commonService.formDataEditDataPopulator(
      this.config,
      { ...this.$scope, ...this.journey },
      this.metaConfig
    );
  }

  parameterSubscriberWithRespectToProduct() {
    this.route.queryParams.subscribe((params) => {
      if (params.esignDone == "true") {
        this.metaConfig.showRatingSection = true;
        this.showloader = true;
        this.fetchBankDetails(
          0,
          this.metaConfig.bankDetails.iterationCount
        );
        if (
          this.$scope?.fetchEligibilityData.output?.plEligOutput?.stpFlag ==
          "STP"
        ) {
          this.config[this.metaConfig.titleIndex].sectionContent.titleData =
            "Congratulations, your Personal Loan is Sanctioned. Please visit branch for the disbursement";
          this.config[2].sectionContent.isShow = false;
        } else {
          this.config[
            this.metaConfig.titleIndex
          ].sectionContent.titleData = `${this.config[this.metaConfig.titleIndex].sectionContent.titleData
          } ${this.$scope.loanDetails.loanDetails.borrower}`;
        }
      } else {
        if (
          this.$scope?.fetchEligibilityData.output?.plEligOutput?.stpFlag ==
          "STP"
        ) {
          this.metaConfig.showRatingSection = false;
        } else {
          this.metaConfig.showRatingSection = true;
        }
        this.config[
          this.metaConfig.titleIndex
        ].sectionContent.titleData = `${this.config[this.metaConfig.titleIndex].sectionContent.titleData
        } ${this.$scope.loanDetails.loanDetails.borrower}`;
      }
    });
  }

  contentModeratorWithRespectToProduct() {
    this.branchConfig.accountDetails.forEach(obj => {
      if (this.$scope.fetchAtosCardDetails.hasOwnProperty(obj.name)) {
        obj.value = this.$scope.fetchAtosCardDetails[obj.name];
      }
      else if(this.$scope.fetchAtosCardDetails.atosAddOnCardResponseVOList[0].hasOwnProperty(obj.name)) {
        obj.value =this.$scope.fetchAtosCardDetails.atosAddOnCardResponseVOList[0]?.addOnCardHolderName
      }
    });

    this.config = this.commonService.pageSectionContentModeration(
      this.config,
      {
        $scope: { ...this.$scope },
        journey: { ...this.journey },
        metaConfig: { ...this.metaConfig },
      }
    );
  }

  redirectToHome() {
    this.commonService.flushJourney();
    this.router.navigateByUrl("/1/landing");
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
      this.commonVariableService.globalLoaderState = true;
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

  fetchProductDetails() {
    let params = {
      uuid: this.journey.product.loanPurposeUuid,
    };
    this.apiService.fetchProductDetail(params).then((res: any) => {
      this.metaConfig.temp.fields[1].minLength = res.minLoanAmount;
      this.metaConfig.temp.fields[1].maxLength = res.maxLoanAmount;
      this.emiCalculatorConfig = this.temp;
      if (this.journey.product.productCode == "CCA") {
        this.metaConfig.showEmiCalculatorSection = false;
        this.metaConfig.showKccdataSection = true;
      } else {
        // this.metaConfig.showEmiCalculatorSection = true
      }
    });
  }

  generateRepaymentSchedule() {
    this.updateLoanApplication();
  }
  updateLoanApplication() {
    this.showloader = true;
    this.emiCalculatorConfig.options.formValueEmitter.next();
    let params = {
      access_token: this.journey.product.access_token,
      applicationId: this.journey.product.loanUuid,
      loanUuid: this.journey.product.loanUuid,
      laonAmount: this.emiCalculatorConfig.options.formValue.loanAmount,
      loanTenure: this.emiCalculatorConfig.options.formValue.tenure,
      loanApplicationNumberVariable8:
        this.journey.metaData.capturedData["loanApplicationNumberVariable8"],
      loanApplicationNumberVariable3:
        this.journey.metaData.capturedData["loanApplicationNumberVariable3"],
      loanApplicationNumberVariable4:
        this.journey.metaData.capturedData["loanApplicationNumberVariable4"],
      loanApplicationNumberVariable5:
        this.journey.metaData.capturedData["loanApplicationNumberVariable5"],
    };

    this.apiService.updateLoanApplication(params).then(() => {
      this.fetchRepaymentSchedule();
    });
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
    this.apiService.fetchRepaymentSchedule(params).then((res: any) => {
      if (res.code == "200") {
        this.tableConfig.data = res.object.repaymentSchedule;
        this.chartFooter.map((ft) => {
          ft.value = res.object[ft.fieldName];
        });
        this.metaConfig.showRepaymentSchedule = true;
        
          this.metaConfig.showProceedSection = true;
        
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
    this.commonService.quickInitiateProduct("CCA");
  }

  //ratings action method
  ratingsAction(action) {
    if (action == "SUBMIT") {
      this.ratingSection[2].sectionContent.formValueEmitter.next();
      let params = {
        ...this.ratingSection[2].sectionContent.formValue,
        access_token: this.journey.product.access_token,
        loanApplicationUuid: this.journey.product.loanUuid,
        microservicetoken: this.journey.product.oauthAccessToken,
      };
      this.apiService.submitFeedback(params).then((res: any) => {
        if (res.code == "200") {
          this.metaConfig.showRatingSection = false;
        }
      });
    } else {
      this.metaConfig.showRatingSection = false;
    }
  }

  confirmAction(_Action) {
    this.formSubmitFlow();
  }


  purposeOfLoanAndTenure = {}
  topFormSectionTrigger($event) {
    if ($event.TriggerSection == "FORM") {
      if ($event?.formValue?.purposeOfLoan)
        this.purposeOfLoanAndTenure['purposeOfLoan'] = $event?.formValue?.purposeOfLoan;
      if ($event?.formValue?.tenure)
        this.purposeOfLoanAndTenure['tenure'] = $event?.formValue?.tenure;
      if ($event?.formValue?.articles)
        this.purposeOfLoanAndTenure['noOfArticles'] = $event?.formValue?.articles;
      //this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.formValueEmitter.next()
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.externalFeedDataforValidationJson =
        { ...$event.formValue, ...this.$scope };
    }
  }

  fetchBankDetails(iteration, totaliteration) {
    let params = {
      offset: 0,
      access_token: this.journey.product.access_token,
    };
    this.apiService.fetchBankDetails(params).then(
      (res: any) => {
        if (res.code == "200" && res.bankDetails.length != 0) {
          this.showloader = false;
          this.config[3].sectionContent.isShow = true;
          this.config[3].sectionContent.paragraphData =
            this.config[3].sectionContent.paragraphData +
            res.bankDetails[0].accountNumber;
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
      () => {
        this.showloader = false;
      }
    );
  }

  isValueNumber(value: any): boolean {
    return typeof value === 'number';
  }
}
