import { Component, OnInit } from '@angular/core';
import { ApiService } from '@tlad-app/services/api.service';
import { CommonCommonService } from '@tlad-app/services/common-common.service';
import { CommonVariableService } from '@tlad-app/services/common-variable-service';
import { ArrayMethod } from '@tlad-app/shared/helpers/ArrayMethods';

@Component({
  selector: 'app-account-number-verification',
  templateUrl: './account-number-verification.component.html',
  styleUrls: []
})
export class AccountNumberVerificationComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any = {}
  config
  pageCode = 'ACCOUNT_VERIFY'
  scopeSubscriber: any;

  constructor(public commonService: CommonCommonService,
              public commonVariableService: CommonVariableService,
              public theme1ApiService: ApiService,
              public ArrayMethods: ArrayMethod
  ) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  ngOnInit(): void {
      this.tabsData = this.journey['tabsData']
      this.dataScopeFetchFlow()
  }

  ngOnDestroy(): void {
      this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow() {
      if (this.metaConfig.dataScopeFetchFlow?.length) {
          this.showloader = true
          this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
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
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.formdataPrepopulationWithRespectToProduct()
          this.contentModeratorWithRespectToProduct()
      }
  }

  formdataPrepopulationWithRespectToProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
      }
  }

  contentModeratorWithRespectToProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          this.config = this.commonService.pageSectionContentModeration(this.config, {
              "$scope": {...this.$scope},
              "journey": {...this.journey},
              "metaConfig": {...this.metaConfig}
          })
      }
  }

  continue() {
      this.submitValidationForProduct()
  }

  ContinueButtonStatus() {
      if (this.journey.product.productCode == 'LAAODTDR') {
          return this.commonService.SectionMandatoryValidationSystem(this.config)
      }
      return false

  }

  submitValidationForProduct() {
      if (this.journey.product.productCode == 'LAAODTDR') {
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
      this.journey = this.commonService.getJourney()
      if (this.metaConfig.formSubmitFlow) {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.setJourney(this.journey)
          if (this.metaConfig.formSubmitFlow.length) {
              this.commonService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config, this.$scope)
          } else {
              this.commonVariableService.globalLoaderState = true;
              this.commonService.proceedJourney(this.pageCode, undefined, this.config)
          }
      } else {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
  }

  sectionBuilderEmitter($event){
    if(this.journey.product.productCode=='LAAODTDR'){
        this.buttonActions($event)
        if($event.TriggerSection == 'LINK'){
            if($event.data == 'CHANGE_ACCOUNT_NUMBER'){
                this.disableForm(true)
                this.togglegroup(true)
            }
        }

        if($event.TriggerSection == 'FORM'){
            if($event.status == 'FORM_EDIT'){
                this.togglegroup(true)
            }
        }
        this.otpActions($event)
        
    }
  }
  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  buttonActions($event){
    if($event.TriggerSection=='BUTTON'){
        if($event.data == 'SUBMIT_STAGE_1'){
            this.validateSubmitStage1()
        }
        if($event.data == 'SUBMIT_STAGE_2'){
            this.validateSubmitStage2()
        }
    }
  }
  otpActions($event){
    if($event.TriggerSection=='OTP'){
        if($event.status!= undefined && $event.status =="OTP_ATTEMPT_DONE"){
            this.disableForm(true)
            this.togglegroup(true)
        }
        if($event.status!=undefined && $event.status == 'OTP_SUCCESS'){
            this.formSubmitFlow()
        }
    }
  }
  validateSubmitStage1(){
    if(this.commonService.sectionValidationSystem(this.config)){
        this.verifyAccountNumber()
    }
  }

  validateSubmitStage2(){
    this.formSubmitFlow()
   // this.triggerVerification()
  }
  triggerVerification(){
    this.config[7].sectionContent.verificationExternalTrigger.next()
  }

  verifyAccountNumber(){
    this.disableForm()
    this.togglegroup()
  }

  togglegroup(revert?){
    this.config.forEach(s=>{
        if(revert){
            if(s?.groupName=='stage1'){
                s.sectionContent.isShow = true
            }
            if(s?.groupName=='stage2'){
                s.sectionContent.isShow = false
            }
        }else{
            if(s?.groupName=='stage1'){
                s.sectionContent.isShow = false
            }
            if(s?.groupName=='stage2'){
                s.sectionContent.isShow = true
            }
        }
    })
  }

  disableForm(revert?) {
    this.config[2].sectionContent.fields.forEach(
        (f) => {
            if(revert){
                f.fieldAccessModifier = "EDITABLE";
            }else{
                f.fieldAccessModifier = "READ_ONLY";
            }
        }
    );
}
}
