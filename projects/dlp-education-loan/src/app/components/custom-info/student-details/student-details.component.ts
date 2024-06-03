import { Component, OnInit, Injector } from '@angular/core';
import { CommonVariableService } from '@el-app/services/common-variable-service';
import { CommonCommonService } from '@el-app/services/common-common.service';
import { SubmitFlowApiService } from '@el-app/services/submit-flow-api.service';
import { MetaConfigService } from '@el-app/services/meta-config.service';
import { FetchFlowApiService } from '@el-app/services/fetch-flow-api.service';
import { ApiService } from '@el-app/services/api.service';
import { ArrayMethod } from '@el-app/shared/helpers/ArrayMethods';
import { SharedService } from '@el-app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any;
  config: any;
  pageCode = "STUDENT_DETAILS";

  scopeSubscriber: Subscription;
  metaConfigService: MetaConfigService;
  fetchFlowApiService: FetchFlowApiService;
  submitFlowApiService: SubmitFlowApiService;
  commonVariableService: CommonVariableService;

  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public ArrayMethods: ArrayMethod,
    public sharedService: SharedService,
    private injector: Injector,
    private router: Router,
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
    const index = this.config.findIndex((c) => c.componentType === "FORM");

    this.dataScopeFetchFlow();
  }

  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe();
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.fetchFlowApiService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
    } else {
      this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
      this.$scope = scopeData
      this.triggerAfterScopeEffect()
    })
  }

  triggerAfterScopeEffect() {
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct() {
    this.formdataPrepopulationWithRespectToProduct()
    this.contentModeratorWithRespectToProduct()
  }
  formdataPrepopulationWithRespectToProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }

  contentModeratorWithRespectToProduct() {
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
  }

  continue() {
    this.submitValidationForProduct();
  }

  //disabled status of the submit button
  continueButtonStatus() {
    return this.commonService.sectionMandatoryValidationSystem(this.config);
  }

  submitValidationForProduct() {
    this.router.navigateByUrl('products/custom-information/employment-details')
    // this.journey = this.commonService.getJourney();
    // if (this.commonService.sectionValidationSystem(this.config)) {
    //   const index = this.config.findIndex((c) => c.componentType === "FORM");
    //   if (
    //     (this.config[index].sectionContent.formValue.alternativeUsername !==
    //       null && this.config[index].sectionContent.formValue.alternativeUsername !==
    //       '') &&
    //     this.config[index].sectionContent.formValue
    //       .alternativeUsernameVerified === false
    //   ) {
    //     this.sharedService.openSnackBar("Please verify the email id", "error");
    //   } else {
    //     this.commonVariableService.globalLoaderState = true;
    //     this.commonService.saveSectionFormDataToJourney(
    //       this.config,
    //       this.pageCode
    //     );
    //     this.journey = this.commonService.getJourney();
    //     this.formSubmitFlow();
    //   }
    // }
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
      this.submitFlowApiService.proceedJourney(this.pageCode, undefined, this.config);
    }
  }

}
