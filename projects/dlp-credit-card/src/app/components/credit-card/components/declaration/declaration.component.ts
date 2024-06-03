import { Component } from '@angular/core';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { ApiService } from '@cc-app/services/api.service';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';
@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
})
export class DeclarationComponent {
  journey: any;
  config: any;
  metaConfig: any;
  showloader = false;
  pageCode = "CC_DECLARATION";
  constructor(public commonVariableService: CommonVariableService,
    public commonService: CommonCommonService,
    public apiService: ApiService,public submitFlowApiService: SubmitFlowApiService) {
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.journey = this.commonService.getJourney()
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }


  Continue() {
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.showloader = true
      this.commonService.saveSectionFormDataToJourney(this.config, '')
      this.formSubmitFlow()
    }
  }
  formSubmitFlow() {
    if (this.metaConfig.formSubmitFlow) {
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config)
      } else {
        this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
    } else {
      this.commonService.proceedJourney(this.pageCode, undefined, this.config)
    }

  }
}
