import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonCommonService } from "../../../../services/common-common.service";
import { CommonVariableService } from "../../../../services/common-variable-service";
import { ApiService } from "../../../../services/api.service";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import { routerTransition } from "../../../../services/utils/route-animation";
import { FetchFlowApiService } from "../../../../services/fetch-flow-api.service";
import { SubmitFlowApiService } from "../../../../services/submit-flow-api.service";
import { MetaConfigService } from "../../../../services/meta-config.service";
import { Subscription } from "rxjs";
import { ITabsData } from "../../../../interfaces/common.interface";

@Component({
  selector: "app-mobile-number-verification",
  templateUrl: "./mobile-number-verification.component.html",
  styleUrls: ["./mobile-number-verification.component.scss"],
  animations: [
    routerTransition
  ]
})
export class MobileNumberVerificationComponent implements OnInit {
  showloader = false;
  metaConfig;
  categoryType = "";
  showSubmit = true;
  journey;
  tabsData: ITabsData[];
  config: any;
  pageObjList: any = [];
  $scope: any;
  pageCode = "MOBILE_VERIFY";
  scopeSubscriber:Subscription
  metaConfigService:MetaConfigService;
  fetchFlowApiService:FetchFlowApiService;
  submitFlowApiService:SubmitFlowApiService;
  commonVariableService:CommonVariableService;
  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public router: Router,
    private activeRoute: ActivatedRoute,
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
    this.categoryType = this.activeRoute.snapshot.queryParams.resumeJourney;
    //If the resume journey link is clicked we have to show only the Mobile Number field
    if(this.categoryType){
      this.config[0].sectionContent.isShow =false
      this.config[2].sectionContent.fields.forEach((field)=>{
        field.isMandatory = false;
        field.showField = false;
        if(field.fieldName=="mobileNumber"){
          field.isMandatory = true;
          field.showField = true;
        }        
      })
    }
    this.dataScopeFetchFlow();
  }

  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    const {dataScopeFetchFlow} = this.metaConfig;
    if (dataScopeFetchFlow?.length) {
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
    this.config = this.commonService.pageSectionContentModeration(
      this.config,
      {
        $scope: { ...this.$scope },
        journey: { ...this.journey },
        metaConfig: { ...this.metaConfig },
      }
    );
    this.config = this.commonService.formDataEditDataPopulator(
      this.config,
      { ...this.$scope, ...this.journey },
      this.metaConfig
    );
  }


  continue() {
    this.journey = this.commonService.getJourney();
    //SET THE TYPE OF constitution
    this.journey.constitution=this.config[this.metaConfig.formIndex].sectionContent?.formValue[
      "constitution"
      ];
    this.commonService.setJourney(this.journey)
    this.showOtpView();
  }

  //disabled status of the submit button
  continueButtonStatus():boolean {
    return this.commonService.sectionMandatoryValidationSystem(this.config);
  }

  formSubmitFlow() {
    this.journey = this.commonService.getJourney();
    if (this.metaConfig.formSubmitFlow) {
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
        this.submitFlowApiService.proceedJourney(
          this.pageCode,
          undefined,
          this.config
        );
      }
    } else {
      this.submitFlowApiService.proceedJourney(this.pageCode, undefined, this.config);
    }
  }

  sectionBuilderEmitter($event) {
    if ($event?.formValue?.borrowerEmploymentHistoryTextVariable1) {
      const { borrowerEmploymentHistoryTextVariable1 } = $event?.formValue || null;
      const { loanProductList } = this.$scope?.productListForProductGroup || null;
      this.updateLoanRelatedUuidsWithRespectToProduct(
        borrowerEmploymentHistoryTextVariable1,
        loanProductList
      );
    }
    if ($event.TriggerSection == "OTP") {
      if (
        $event.status != undefined &&
        $event.status == "OTP_ATTEMPT_DONE"
      ) {
        this.resetFlow();
      }
      if ($event.status == "OTP_SUCCESS") {
        this.journey = this.commonService.getJourney();
        this.commonService.saveSectionFormDataToJourney(
          this.config,
          this.pageCode
        );
        this.formSubmitFlow();
      }
    }
    if ($event.TriggerSection == "FORM") {
      if ($event.status != undefined) {
        if ($event.status == "FORM_EDIT") {
          this.resetFlow();
        }
      }
    }
  }

  updateLoanRelatedUuidsWithRespectToProduct(
    selectedProductName,
    loanProductList
  ) {
    const product = loanProductList.find(
      (loanProduct) => loanProduct.name === selectedProductName
    );
    const journey = this.commonService.getJourney();
    journey.product = { ...journey.product, ...product };
    this.commonService.setJourney(journey);
  }

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  showOtpView() {
    // remove submit button from the view
    if (this.commonService.sectionValidationSystem(this.config)) {
      this.showSubmit = false;
      //then remove the checkbox and disable the mobile number
      this.disableForm();
      //this.config[this.metaConfig.formIndex].sectionContent.fields[this.metaConfig.mobileFieldIndex].fieldAccessModifier = 'READ_ONLY'
      // show the otp section with mapping some values
      this.config[
        this.metaConfig.formIndex
      ].sectionContent.formValueEmitter.next();
      this.hideTriggerOtpSections();
      this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;
      this.config[
        this.metaConfig.otpIndex
      ].sectionContent.options.individualOrCompany =
        this.config[this.metaConfig.formIndex].sectionContent?.formValue[
        "constitution"
        ];
      this.config[this.metaConfig.otpIndex].sectionContent.options.value =
        this.config[this.metaConfig.formIndex].sectionContent?.formValue[
        "mobileNumber"
        ];
      this.config[this.metaConfig.otpIndex].sectionContent.options.loanProduct =
        this.journey["product"];
      this.config[this.metaConfig.otpIndex].sectionContent.isShow = true;
    }
  }

  disableForm() {
    this.config[this.metaConfig.formIndex].sectionContent.fields.forEach(
      (f) => {
        f.fieldAccessModifier = "READ_ONLY";
      }
    );
  }

  hideTriggerOtpSections(reset?) {
    this.config.forEach((co) => {
      if (co.sectionName) {
        if (co.sectionName == "hideOtpView") {
          if (reset) {
            co.sectionContent.isShow = true;
          } else {
            co.sectionContent.isShow = false;
          }
        }
      }
    });
  }

  resetFlow() {
    this.showSubmit = true;
    this.config[this.metaConfig.consentIndex].sectionContent.isShow = true;
    this.hideTriggerOtpSections(true);
    this.config[this.metaConfig.otpIndex].sectionContent.isShow = false;
    this.config[this.metaConfig.formIndex].sectionContent.fields[
      this.metaConfig.mobileFieldIndex
    ].fieldAccessModifier = "EDITABLE";
  }
}
