import { Component } from '@angular/core';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';


@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: []
})
export class DeclarationComponent {
  journey: any;
  config: any;
  metaConfig: any;
  showloader=false
  constructor(public commonVariableService:CommonVariableService,
    public commonService:CommonCommonService,
    public apiService:ApiService) {
      this.commonService.bindHeaderFooterTypes('DECLARATION')
      this.journey = this.commonService.getJourney()
      this.config = this.commonService.fetchProductPageConfig(this.journey,'DECLARATION')
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,'DECLARATION')
     }

  Continue(){
    if(this.commonService.SectionValidationSystem(this.config)){
      this.showloader=true
      this.commonService.saveSectionFormDataToJourney(this.config,'')
      this.formSubmitFlow()
    }
  }
  formSubmitFlow(){
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'DECLARATION',this.metaConfig,this.config)
      }else{
        this.commonService.proceedJourney('DECLARATION',undefined,this.config)
      }
    }else{
      this.commonService.proceedJourney('DECLARATION',undefined,this.config)
    }
    
  }
}
