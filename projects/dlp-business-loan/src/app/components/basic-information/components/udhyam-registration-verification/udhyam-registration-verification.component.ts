import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@bl-app/services/common-common.service';
import { CommonVariableService } from '@bl-app/services/common-variable-service';
import { ApiService } from '@bl-app/services/api.service';
import { SharedService } from '../../../../shared/services/utils/shared.service';

@Component({
  selector: 'app-udhyam-registration-verification',
  templateUrl: './udhyam-registration-verification.component.html',
  styleUrls: ['./udhyam-registration-verification.component.scss']
})
export class UdhyamRegistrationVerificationComponent implements OnInit {

  showloader = false
  journey: any;
  config: any;
  showSubmit = true
  tabsData: any;
  metaConfig: any;
  pageCode = "UDYAM_VERIFY"
  scopeSubscriber: any;
  $scope:any = {} 
  constructor(private router: Router,
    public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    public theme1ApiService: ApiService, public sharedService: SharedService) {
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
  }

  ngOnInit(): void {
    this.dataScopeFetchFlow()
  }

  ngOnDestroy():void{
    this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow(){
    if(this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length){
      this.showloader=true
      this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)
    }else{
      this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData)=>{
      this.$scope = scopeData
      this.triggerAfterScopeEffect()
    })
  }


  triggerAfterScopeEffect(){
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct(){
    if(this.journey.product.productCode == "BL10AB"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
    }
  }
  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }

  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}}) 
    }
  }


  continue(){
    this.submitValidationForProduct()
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "BL10AB"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.formSubmitFlow()
      }
    }
  }

  formSubmitFlow(){
    this.journey = this.commonService.getJourney()
    if(this.metaConfig.formSubmitFlow){
      this.commonVariableService.globalLoaderState = true;
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope)
      }else{
        this.commonVariableService.globalLoaderState = true;
        this.commonService.proceedJourney(this.pageCode,undefined,this.config)
      }
    }else{
      this.commonVariableService.globalLoaderState = true;
      this.commonService.proceedJourney(this.pageCode,undefined,this.config)
    }
  }

  nextStep() {
    this.router.navigateByUrl('1/shishu-mudra/borrower');
  }

  SkipPage(){
    let skipped = true;
    this.commonService.proceedJourney('UDYAM_VERIFY', skipped,this.config)
   }

  verifyUdyam() {
    let params = {
      udhyamNumber: this.config[1].sectionContent.formValue['textVariable3'],
      infoType: 'udhyam',
      requestFor: 'COMPANY_DETAIL',
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
    }
    this.theme1ApiService.verifyUdyam(params).then((res: any) => {
      if (res.code == "200") {
        this.journey.metaData.capturedData['udyamData'] = res.mappingFields;
        this.journey.metaData.capturedData['udyamData'].udhyamNumber = this.config[1].sectionContent.formValue['textVariable3'];
        this.journey.metaData.capturedData = { ...this.journey.metaData.capturedData, ...res.mappingFields,...res.mappingFields.companyAddress}
       this.formSubmitFlow()
      } else {
        this.showloader = false;
        this.sharedService.openSnackBar(res?.message, 'error', res?.status);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }



  udyamLinkRedirect(linkType) {
    if (linkType == 'VERIFY') {
      window.open('https://udyamregistration.gov.in/Udyam_Verify.aspx', '_blank');

    }
    if (linkType == 'DOWNLOAD') {
      window.open('https://udyamregistration.gov.in/Udyam_Login.aspx', '_blank');
    }
    if (linkType == 'REGISTER') {
      window.open('https://udyamregistration.gov.in/UAM-convert-udyam-msme-free-registration.htm', '_blank')
    }
  }
  bindMappingData() {
    if (this.journey?.isEtb) {
      this.config[1].sectionContent.options['mapSupplyData'] = true;
      this.config[1].sectionContent.options['mapAndDisable'] = true;
      this.config[1].sectionContent.options['mappingFields'] = this.journey.metaData.capturedData.AccountData;
    }
  }

}
