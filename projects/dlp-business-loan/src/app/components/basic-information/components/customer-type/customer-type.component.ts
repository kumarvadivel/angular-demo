import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonCommonService } from '@bl-app/services/common-common.service';
import { CommonVariableService } from '@bl-app/services/common-variable-service';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: []
})
export class CustomerTypeComponent {

  journey
  config;
  metaConfig;
  constructor(private router : Router, private dialog: MatDialog
    ,public commonService:CommonCommonService,public commonVariableService:CommonVariableService) { 
      this.journey = this.commonService.getJourney()
      this.config = this.commonService.fetchProductPageConfig(this.journey,'CUSTOMER_TYPE')
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,'CUSTOMER_TYPE')
      this.commonService.bindHeaderFooterTypes('CUSTOMER_TYPE')
  }

  tabsData: any; 


   
  moveToNextPage(){
    this.router.navigateByUrl('/basicinfo/mobile-verify');
}
// navigatePage(item) {
//   if(item.linkType){
//     this.router.navigateByUrl( "/" + item.url);
//   }
// }


  continue(){
    if(this.commonService.SectionValidationSystem(this.config)){
      //hit api
      this.commonService.saveSectionFormDataToJourney(this.config,'CUSTOMER_TYPE')
        this.config[2].sectionContent.formValueEmitter.next()
        if(this.config[2].sectionContent.formValue.identifyYourself == 'NewCustomer') {
          this.commonService.proceedJourney('CUSTOMER_TYPE',undefined,this.config)
        } else {
         this.journey= this.commonService.getJourney();
            this.journey['isEtb'] = true
            this.journey['etbProcceedPageCode']='CUSTOMER_TYPE'
            this.commonService.setJourney(this.journey)
            this.commonService.proceedJourney('CUSTOMER_TYPE',undefined,this.config)

        }
    }
  }

  ButtonStatus(){
    return this.commonService.SectionMandatoryValidationSystem(this.config)
  }

  SectionBuilderStatus($event){
    if($event.TriggerSection=='FORM'){
      this.commonService.parseJourneyType($event.formValue)
    }
  }

}