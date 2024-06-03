import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {CommonCommonService} from "@vl-app/services/common-common.service";
import {CommonVariableService} from "@vl-app/services/common-variable-service";
import {ApiService} from "@vl-app/services/api.service";
import {ArrayMethod} from "../../../../shared/helpers/ArrayMethods";
import {SharedService} from "../../../../shared/services/utils/shared.service";

@Component({
    selector: "app-more-info",
    templateUrl: "./more-info.component.html",
    styleUrls: [],
})
export class MoreInfoComponent implements OnInit {
    journey: any;
    tabsData: any;
    showloader = false;
    metaConfig;
    $scope: any;
    config: any;
    pageCode = "MORE_INFO";
    scopeSubscriber: any;

    constructor(
        public commonService: CommonCommonService,
        public theme1ApiService: ApiService,
        public ArrayMethods: ArrayMethod,
        public sharedService: SharedService,
        public commonVariableService: CommonVariableService,
        private changeDetectorRef: ChangeDetectorRef
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
        this.dataScopeFetchFlow();
    }

    ngOnDestroy(): void {
        if (this.scopeSubscriber) {
            this.scopeSubscriber.unsubscribe()
        }
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
        this.customInitializerWithRespectToProduct();
    }

    customInitializerWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.formdataPrepopulationWithRespectToProduct()
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.formDataEditDataPopulator(
                this.config,
                {...this.$scope, ...this.journey},
                this.metaConfig
            );
            if(this.config[2].sectionContent.options.mappingFields.identityNumberTwo!=null&&this.config[2].sectionContent.options.autoVerifyMappedFields===true){
                this.config[2].sectionContent.fields[0].fieldAccessModifier='READ_ONLY' 
                this.config[2].sectionContent.fields[1].fieldAccessModifier='READ_ONLY' 
                this.config[2].sectionContent.fields[2].fieldAccessModifier='READ_ONLY' 
            }
            this.config[2].sectionContent.fields[2].options.extraParams={
                objectUuid:this.journey.product.borrowerUuid,
                requestFor:"BORROWER"
              }
        }
    }

    contentModeratorWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.pageSectionContentModeration(
                this.config,
                {
                    $scope: {...this.$scope},
                    journey: {...this.journey},
                    metaConfig: {...this.metaConfig},
                }
            );
        }
    }

    continue() {
        this.submitValidationForProduct();
    }

    ContinueButtonStatus() {
        if (this.journey.product.productCode == 'VLN') {
            return this.commonService.SectionMandatoryValidationSystem(this.config);
        }
        return false;
    }

    submitValidationForProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.journey = this.commonService.getJourney()
            if (this.commonService.SectionValidationSystem(this.config)) {
                this.commonVariableService.globalLoaderState = true
                this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
                this.journey = this.commonService.getJourney()
                this.formSubmitFlow()
            }
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
        if (this.journey.product.productCode == 'VLN') {
            if ($event.TriggerSection == 'CONSENT') {
                this.config = this.consentSectionModifier($event)
            }
            if ($event.TriggerSection == 'FORM' && $event?.data?.eventName == 'OTP_ERROR') {
              setTimeout(() => {
                this.config[5].sectionContent.config.options[0].completed = false
                this.changeDetectorRef.detectChanges();
              });
            }
            if ($event.TriggerSection == 'FORM' && $event?.data?.eventName == 'OTP_GENERATE_SUCCESS') {
                this.config[5].sectionContent.config.options[0].disabled = true
            }
            if ($event.TriggerSection == 'FORM' && $event?.formValue?.identityNumberOneVerified === true) {
                this.config[5].sectionContent.config.options[0].disabled = true
            }
            this.handleallFormEvent($event)
           
        }
    }

    handleallFormEvent($event){
        if ($event.TriggerSection == 'FORM' && $event?.formValue?.identityNumberTwoVerified === true) {
            this.config[2].sectionContent.fields[0].fieldAccessModifier='READ_ONLY' 
            this.config[2].sectionContent.fields[1].fieldAccessModifier='READ_ONLY' 
            this.config[2].sectionContent.fields[2].fieldAccessModifier='READ_ONLY' 
        }
        if($event.TriggerSection=='FORM'){
            this.checkPanVerifyButtonEnableStatus()
        }
    }
    checkPanVerifyButtonEnableStatus(){
        if(this.config[2].sectionContent.fields[0].value!=null && this.config[2].sectionContent.fields[1].value!=null && this.config[2].sectionContent.fields[2].value!=null && this.commonService.validationCheck(this.config[2].sectionContent.fields[0])&&this.commonService.validationCheck(this.config[2].sectionContent.fields[1]) && this.commonService.validationCheck(this.config[2].sectionContent.fields[2])){
            this.config[2].sectionContent.fields[2].disableVerifyButton=false
        }else{
            this.config[2].sectionContent.fields[2].disableVerifyButton=true
        }
    }

    consentSectionModifier(_$event) {
        if(this.config[4].sectionContent?.isValid===true && this.commonService.validationCheck(this.config[3].sectionContent.fields[0])){
          if(!this.config[3].sectionContent.fields[0].isVerified){
            this.config[3].sectionContent.verificationExternalTrigger.next({"ok":true,"fieldName":'identityNumberOne'})
            setTimeout(() => {
              this.config[4].sectionContent.config.options[0].completed = true
              this.changeDetectorRef.detectChanges();
            });
            
          }
        }else{
          
           setTimeout(() => {
             this.config[4].sectionContent.config.options[0].completed = false
             this.changeDetectorRef.detectChanges();
           });
          this.sharedService.openSnackBar("Please Enter a valid Aadhaar Number")
          
        }
          return this.config
      }
}
