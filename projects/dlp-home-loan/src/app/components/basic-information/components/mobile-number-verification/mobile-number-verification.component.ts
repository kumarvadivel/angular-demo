import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonCommonService} from "@hl-app/services/common-common.service";
import {CommonVariableService} from "@hl-app/services/common-variable-service";
import {ApiService} from "@hl-app/services/api.service";
import {SharedService} from "../../../../shared/services/utils/shared.service";

@Component({
    selector: "app-mobile-number-verification",
    templateUrl: "./mobile-number-verification.component.html",
    styleUrls: [],
})
export class MobileNumberVerificationComponent implements OnInit {
    showloader = false;
    metaConfig;
    categoryType: any = "";
    showSubmit = true;
    journey;
    tabsData: any;
    config: any;
    pageObjList: any = [];
    $scope: any;
    pageCode = "MOBILE_VERIFY";
    scopeSubscriber: any;

    constructor(
        public commonService: CommonCommonService,
        public theme1ApiService: ApiService,
        public commonVariableService: CommonVariableService,
        public router: Router,
        private activeRoute: ActivatedRoute,
        public sharedService: SharedService,
        private route: ActivatedRoute
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
        this.categoryType = this.activeRoute.snapshot.queryParams.resumeJourney;
        this.dataScopeFetchFlow();
    }

    ngOnDestroy(): void {
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
                $scope: {...this.$scope},
                journey: {...this.journey},
                metaConfig: {...this.metaConfig},
            }
        );
        this.config = this.commonService.formDataEditDataPopulator(
            this.config,
            {...this.$scope, ...this.journey},
            this.metaConfig
        );
    }

    continue() {
        this.showOtpView();
    }

    ContinueButtonStatus() {
        return this.commonService.SectionMandatoryValidationSystem(this.config);
    }

    formSubmitFlow() {
        this.journey = this.commonService.getJourney();
        if (this.metaConfig.formSubmitFlow) {
            this.commonService.setJourney(this.journey);
            if (this.metaConfig.formSubmitFlow.length) {
                this.commonService.apiCall(
                    { submitflow: this.metaConfig.formSubmitFlow[0], currentIndex: 0, totalLength: this.metaConfig.formSubmitFlow.length, pageCode: this.pageCode, configList: this.metaConfig, pageconfig: this.config, extraCloudParams: this.$scope }                );
            } else {
                this.commonService.proceedJourney(
                    this.pageCode,
                    undefined,
                    this.config
                );
            }
        } else {
            this.commonService.proceedJourney(this.pageCode, undefined, this.config);
        }
    }

    sectionBuilderEmitter($event) {
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
        journey.product = {...journey.product, ...product};
        this.commonService.setJourney(journey);
    }

    //------------------------------custom/other methods and varaible should be writtern down below this line------------------
    showOtpView() {
        if (this.commonService.SectionValidationSystem(this.config)) {
            this.showSubmit = false;
            this.disableForm();
            this.config[
                this.metaConfig.formIndex
                ].sectionContent.formValueEmitter.next();
            this.hideTriggerOtpSections();
            this.config[this.metaConfig.consentIndex].sectionContent.isShow = false;
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
        this.config[this.metaConfig.formIndex].sectionContent.fields[2].fieldAccessModifier = "READ_ONLY"
    }

    hideTriggerOtpSections(reset?) {
        this.config.forEach((co) => {
            if (co.sectionName) {
                if (co.sectionName == "hideOtpView") {
                    if (reset) {
                        co.sectionContent.isShow = reset;
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
