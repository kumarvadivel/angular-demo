import { Component, Injector, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { CommonCommonService } from "../../../../services/common-common.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ApiService } from "../../../../services/api.service";
import { Formatters } from "../../../../shared/helpers/Formatters";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";
import { JourneyEventsService } from "../../../../services/journey-events.service";
import { IJourney } from "../../../../interfaces/journey.interface";
import { EnvironmentService } from "../../../../../environments/environment.service"; 
declare let Appice: any;
@Component({
  selector: "app-loan-summary",
  templateUrl: "./loan-summary.component.html",
  styleUrls: ["./loan-summary.component.scss"],
})
export class LoanSummaryComponent implements OnInit {
  journey: IJourney;
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
  public appiceData={};
  pageCode = "LOAN_SUMMARY";
  scopeSubscriber: Subscription;
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
  metaConfigService:MetaConfigService;
  fetchFlowApiService:FetchFlowApiService;
  submitFlowApiService:SubmitFlowApiService;
  commonVariableService:CommonVariableService;
  dialog:MatDialog
  formatter:Formatters
  apiService:ApiService
  journeyEventsService:JourneyEventsService
  constructor(
    public commonService: CommonCommonService,  
    private router: Router,  
    public sharedService: SharedService,
    private envService: EnvironmentService,
    private injector: Injector
  ) {
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.formatter = this.injector.get<Formatters>(Formatters);
    this.apiService = this.injector.get<ApiService>(ApiService);
    this.journeyEventsService = this.injector.get<JourneyEventsService>(JourneyEventsService);
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
    this.temp = this.metaConfigService.parseConfigFormJourneyPreview([
      this.metaConfig.temp.fields,
    ])[0];
    this.chartConfig = this.metaConfig.chartConfig;
    this.chartFooter = this.metaConfig.chartFooter;
    this.ratingSection = this.metaConfigService.parseConfig(
      this.metaConfig.ratingSection
    );
    this.branchConfig = this.metaConfig.branchConfig;
    this.rejectionView = this.metaConfigService.parseConfig(
      this.metaConfig.rejectionView
    );
    this.tableConfig = this.metaConfig.tableConfig;
  }

  ngOnInit(): void {
    this.commonService.bindHeaderFooterTypes(this.pageCode);
    this.dataScopeFetchFlow();
  }

  ngOnDestroy() {
    this.scopeSubscriber.unsubscribe();
  }
  dataScopeFetchFlow() {
    const {dataScopeFetchFlow} = this.metaConfig;
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
    //this.showloader = false
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

  contentModeratorWithRespectToProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, {
      $scope: { ...this.$scope },
      journey: { ...this.journey },
      metaConfig: { ...this.metaConfig },
    });
    const purposeOfLoan = this.$scope.fetchAgriGoldLoanTenure.productList.map(
      (pro) => {
        return {
          optionCode: pro.value,
          optionKey: pro.value,
          optionName: this.commonVariableService.loanAndTenureMap[pro.value],
          optionParentCode: null,
          optionParentProperty: null,
          optionValue: pro.value,
          sortIndex: 0,
        };
      }
    );
    this.commonVariableService.commonProperty_static.PURPOSE_OF_LOAN =
      purposeOfLoan;

    const tenure = this.$scope.fetchAgriGoldLoanTenure.tenureList.map((ten) => {
      return {
        optionCode: ten.value,
        optionKey: ten.value,
        optionName: this.commonVariableService.loanAndTenureMap[ten.value],
        optionParentCode: null,
        optionParentProperty: null,
        optionValue: ten.value,
        sortIndex: 0,
      };
    });
    this.commonVariableService.commonProperty_static.TENURE = tenure;
    //this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2] = this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2]
    this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.fields[1].options =
      this.commonVariableService.commonProperty_static.TENURE;
    this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.fields[0].options =
      this.commonVariableService.commonProperty_static.PURPOSE_OF_LOAN;
    this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options[
      "externalFeedDataforValidationJson"
    ] = { ...this.$scope };
    this.branchConfig.branchDetails.name = `Bank Of India ${this.$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName} Branch`;
    this.branchConfig.branchDetails.address = `${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value}${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue}`;

    this.metaConfig.goldLoanEligiblityCalculator.topFormSection =
      this.metaConfigService.parseConfig(
        this.metaConfig.goldLoanEligiblityCalculator.topFormSection
      );
    this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options =
      {
        ...this.metaConfig.goldLoanEligiblityCalculator.bottomSection
          .tableSection.options,
        validityEmitter: new Subject<void>(),
        formValueEmitter: new Subject<void>(),
      };
    this.metaConfig.goldLoanEligiblityCalculator.bottomSection.chartSection = {
      ...this.metaConfig.goldLoanEligiblityCalculator.bottomSection
        .chartSection,
      updateChart: new Subject<void>(),
    };

    this.showloader = false;
  }

  redirectToHome() {
    this.commonService.flushJourney();
    this.router.navigateByUrl("/core/home").catch(console.error);
  }

  continue() {
    this.submitValidationForProduct();
  }

  //disabled status of the submit button
  continueButtonStatus(): boolean {
    return this.commonService.sectionMandatoryValidationSystem(this.config);
  }

  submitValidationForProduct() {
    this.journey = this.commonService.getJourney();
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.commonVariableService.globalLoaderState = true;
      this.commonService.saveSectionFormDataToJourney(
        this.config,
        this.pageCode
      );
      this.journey = this.commonService.getJourney();
    }
  }
  //section builder event observer 

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  home() {
    this.commonService.flushJourney();
  }
  
  continueToSB() {
    let prop = {
      LeadID: this.$scope.loanDetails.loanDetails.crmLeadId,
      ReferenceID: this.$scope.loanDetails.loanDetails.crmLeadId,
      ContinuetoSBA: "True",
    };
    this.journeyEventsService.triggerAppiceEvent("AGLLeadGen", prop);
    sessionStorage.setItem('productToNavigate', 'savings-account');
    
    setTimeout(() => {
      const SBA_BASIC_INFO = `${window.origin}` + '/savings-account/#/core/choose-loan';
      window.open(SBA_BASIC_INFO, '_self');
    }, 200);
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
      }).catch(err => {
        console.error(err);
        // handle the error as needed
    });
    } else {
      this.metaConfig.showRatingSection = false;
    }
  }

  
   
 
  
 
  
  updateMetaConfigAfterDialogClose(Action) {
    if (Action == "YES") {
      this.handleYesAction();
    } else {
      this.handleNoAction();
    }
  }
  
  handleYesAction() {
    this.updateHtmlData();
    this.metaConfig.showEmiCalculatorSection = false;
    this.metaConfig.showBranchSection = true;
    this.metaConfig.showRepaymentSchedule = false;
    this.metaConfig.showRatingSection = this.journey.product.productCode != "LA763";
    this.metaConfig.showProceedSection = false;
  }
  
  handleNoAction() {
    this.metaConfig.showRejectionSection = true;
    this.metaConfig.showEmiCalculatorSection = false;
    this.metaConfig.showBranchSection = false;
    this.metaConfig.showRepaymentSchedule = false;
    this.metaConfig.showRatingSection = false;
    this.metaConfig.showMainContent = false;
    this.metaConfig.showProceedSection = false;
  }
  
  updateHtmlData() { 
      this.config[
        this.metaConfig.loanAmountIndex
      ].sectionContent.htmlData =
        "Your Application has been assigned to the selected bank branch. Please visit selected branch for further details.";
    
  }
  

  purposeOfLoanAndTenure = {};
  topFormSectionTrigger($event) {
    if ($event.TriggerSection == "FORM") {
      if ($event?.formValue?.purposeOfLoan)
        this.purposeOfLoanAndTenure["purposeOfLoan"] =
          $event?.formValue?.purposeOfLoan;
      if ($event?.formValue?.tenure)
        this.purposeOfLoanAndTenure["tenure"] = $event?.formValue?.tenure;
      if ($event?.formValue?.articles)
        this.purposeOfLoanAndTenure["noOfArticles"] =
          $event?.formValue?.articles;
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.externalFeedDataforValidationJson =
        { ...$event.formValue, ...this.$scope };
    }
  }
  currentRow = { fieldIndex: 0 };
  goldLoanOtherEventBinder($event) {
    if ($event?.hasOwnProperty("fieldIndex")) {
      this.currentRow.fieldIndex = $event?.fieldIndex;
    }
    if ($event.eventType == "TABLE_ADD") {
      if (
        this.commonService.sectionValidationSystem(
          this.metaConfig.goldLoanEligiblityCalculator.topFormSection
        )
      ) {
        this.bindNoOfArticles();
      } else {
        this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.fields[0].value =
          [];
      }
    }

    if ($event.eventType == "TABLE_DELETE") {
      //update no of articles
      this.bindNoOfArticles();
      // this.metaConfig.goldLoanEligiblityCalculator.topFormSection
    }
  }

  //method only for gold loan
  bindNoOfArticles() {
    this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.formValueEmitter.next();
    this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.formValueEmitter.next();
    this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.fields[2].value =
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.formValue.loanApplicationTableVariable1.length || null;
    this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.externalFeedDataforValidationJson =
      {
        ...this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2]
          .sectionContent.formValue,
        ...this.$scope,
      };

  }
 

  emittedGrandValues = { grandTotal: 0, loanApplicationTableVariable1: {} };
  goldloanFormValueBinder($event) {
    this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.formValue =
      $event;
      let eligiblecalculated = []
  
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.formValue.loanApplicationTableVariable1.forEach(f=>{
        let RateObj = this.$scope.fetchGoldRateTvList.result.find(g=>this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.formValue.purposeOfLoan == g.purposeOfLoan && g.tenure == this.metaConfig.goldLoanEligiblityCalculator.topFormSection[2].sectionContent.formValue.tenure && g.carat==f.goldCarat)    
        let eligibleData = {
          articleType:f.articleType,
          carat:f.goldCarat,
          eligibleAmount:RateObj?parseFloat(((parseFloat(RateObj.ltv)/ 100) * f.totalAmount).toFixed(2)):0
        }
        eligiblecalculated.push(eligibleData)
      })
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.totalEligbleAmount = 0
      let totalEligib:any = 0
      eligiblecalculated.forEach(f=>{
        totalEligib=totalEligib+f.eligibleAmount
      })
      if(totalEligib>5000000){
        let t1:any=0
        this.sharedService.openSnackBar(
          "Loan eligibility amount should not exceed product limit 50,00,000",
          "error",
          200
        );
        eligiblecalculated[this.currentRow.fieldIndex].eligibleAmount=0
        this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.options.formValue.loanApplicationTableVariable1[this.currentRow.fieldIndex]['totalAmount'] = 0
        this.metaConfig.goldLoanEligiblityCalculator.bottomSection.tableSection.fields[0].value[this.currentRow.fieldIndex][4]['value'] = 0
        eligiblecalculated.forEach(f=>{t1=t1+f.eligibleAmount})
        this.metaConfig.goldLoanEligiblityCalculator.bottomSection.totalEligbleAmount = Math.round(t1)
      }else{
        this.appiceData['LoanAmount'] = totalEligib;
        if (this.envService.config?.appConfig?.appice) {
          let obj = { key: 'AGLLoanEligibilityCheck', properties: this.appiceData };
          try{
            if(typeof Appice != 'undefined'){
              Appice.recordEvent({ key: obj.key, segment: obj.properties }); 
            }
          }catch(e){
              
          }
        }
        this.metaConfig.goldLoanEligiblityCalculator.bottomSection.totalEligbleAmount = Math.round(totalEligib)
      }
      //calculate article percentage with total
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.chartSection.data=[]
      eligiblecalculated.forEach((f,i)=>{
        f['percentage'] = Math.round((f.eligibleAmount/this.metaConfig.goldLoanEligiblityCalculator.bottomSection.totalEligbleAmount)*100)
        let skel={
          fieldLabel: `Ornament ${i + 1}`,
          value: f['percentage'],
          bgColor: this.bgcolor[i%this.bgcolor.length],
        };
        this.metaConfig.goldLoanEligiblityCalculator.bottomSection.chartSection.data.push(
          skel
        );
      })
      this.metaConfig.goldLoanEligiblityCalculator.bottomSection.chartSection.updateChart.next();
  }
}
