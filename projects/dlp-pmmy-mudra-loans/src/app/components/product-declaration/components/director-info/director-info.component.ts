import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonCommonService } from "@pmmy-app/services/common-common.service";
import { CommonVariableService } from "@pmmy-app/services/common-variable-service";
import { ApiService } from "@pmmy-app/services/api.service";
import { SharedService } from '@pmmy-app/shared/services/utils/shared.service';
import { ArrayMethod } from '@pmmy-app/shared/helpers/ArrayMethods';

@Component({
  selector: 'app-director-info',
  templateUrl: './director-info.component.html',
  styleUrls: ['./director-info.component.scss']
})
export class DirectorInfoComponent implements OnInit {

  showSubmit=true;
  showloader=false;
  journey
  config:any;
  tabsData: any;
  metaConfig
  $scope: any={};
  isSubmit: boolean = false;
  pageCode = "DIRECTOR_INFO";
  scopeSubscriber: any;
  constructor(public commonService:CommonCommonService,
              public theme1ApiService:ApiService,
              public ArrayMethods:ArrayMethod,
              public commonVariableService:CommonVariableService,public sharedService:SharedService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
  }

  ngOnInit(): void {
    this.journey = this.commonService.getJourney();
    this.tabsData= this.journey['tabsData']
    //this.test_config = this.commonService.mapCommonPropertiestoConfig(this.test_config)
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
    if(this.journey.product.productCode == "KML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
      this.formDataPrepopulation()
    }
    if(this.journey.product.productCode == "TML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
      this.formDataPrepopulation()
    }
    if(this.journey.product.productCode == "SML"){
      this.formdataPrepopulationWithRespectToProduct()
      this.contentModeratorWithRespectToProduct()
      this.formDataPrepopulation()
    }
  }
  formdataPrepopulationWithRespectToProduct() {
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }
  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "KML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
      this.config[this.metaConfig.formSectionIndex].sectionContent.options.externalFeedDataforValidationJson = {...this.$scope, ...this.journey}
    }
    if(this.journey.product.productCode == "TML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
      this.config[this.metaConfig.formSectionIndex].sectionContent.options.externalFeedDataforValidationJson = {...this.$scope, ...this.journey}
    }
    if(this.journey.product.productCode == "SML"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
    }
  }

  Continue() {
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.showloader = true
      this.commonService.saveSectionFormDataToJourney(this.config,'DIRECTOR_INFO')
      this.journey = this.commonService.getJourney()
      this.formSubmitFlow()
    }
  }

  formSubmitFlow(){
    if(this.metaConfig.formSubmitFlow){
      this.commonService.setJourney(this.journey)
      if(this.metaConfig.formSubmitFlow.length){
        this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'DIRECTOR_INFO',this.metaConfig,this.config)
      }else{
        this.commonService.proceedJourney('DIRECTOR_INFO',undefined,this.config)
      }
    }else{
      this.commonService.proceedJourney('DIRECTOR_INFO',undefined,this.config)
    }

  }

  bindMappingData(){
    if(this.journey?.isEtb){
      this.config[1].sectionContent.options['mapSupplyData']=true;
      this.config[1].sectionContent.options['mapAndDisable']=true;
      this.config[1].sectionContent.options['mappingFields']={...this.journey.metaData.capturedData.AccountData,...this.journey.metaData.capturedData};
    }else{
      this.config[1].sectionContent.options['mapSupplyData']=true;
      this.config[1].sectionContent.options['mapAndDisable']=true;
      this.config[1].sectionContent.options['mappingFields']={...this.journey.metaData.capturedData.AccountData,...this.journey.metaData.capturedData,...this.journey.metaData.capturedData.panData,...this.journey.metaData.capturedData.aadharData};

    }
  }

  // customInitializerBasedOnProduct(){
  //   switch(this.journey.product.productCode){
  //     case 'SML':
  //       this.formDataPrepopulation()
  //       break;
  //     case 'KML':
  //       this.formDataPrepopulation()
  //       break;
  //     case 'TML':
  //       this.formDataPrepopulation()
  //       break;
  //   }
  // }

  formDataPrepopulationObjectMapper(mapping_Data){
    this.config.forEach((data,i) =>{
      if(data.componentType == 'TABLE'){
        data.sectionContent.config.data.forEach((obj,j)=>{
          Object.keys(obj).forEach((o,k)=>{
            if(this.config[i].sectionContent.config.headers[k].maskedData){
              let maskedData = this.config[i].sectionContent.config.headers[k].maskedData
              let maskedValue =this.journey.metaData.capturedData
              maskedData?.forEach(()=>{
                if(maskedValue) {
                  let capturedData =  maskedValue[data]
                  maskedValue = capturedData
                }
              })
              this.config[i].sectionContent.config.data[j][o] = this.ArrayMethods.maskData(maskedValue)
            }else{
              this.config[i].sectionContent.config.data[j][o] =mapping_Data[o];
            }
          })

        })
      }

    })
  }

  formDataPrepopulation(){
    let mapping_Data={}
    for(const prop in this.metaConfig.prepopulationRemaps){
      mapping_Data[prop] = this.ArrayMethods.getPathVal({...this.journey,...this.$scope},this.commonService.applyJsonLogic(this.metaConfig.prepopulationRemaps[prop],this.journey))
    }
    this.formDataPrepopulationObjectMapper(mapping_Data);
  }

  editClick(e){
    if(e.data.action.actionCode === 'EDIT' && e.data.action.isDisplay && e.data.action.navigationPageCode){
      this.commonService.findPreviouspageCode(e.data.action.navigationPageCode)
    }
  }

  sectionBuilderEmitterForAction(event){
    if (event.TriggerSection == 'CONSENT') {
      this.config = this.consentSectionModifier()
    }
    if (event.TriggerSection == 'FORM' && event?.data?.eventName == 'OTP_ERROR') {
      setTimeout(() => {
        this.config[3].sectionContent.config.options[0].completed = false
        this.changeDetectorRef.detectChanges();
      });
    }
    if (event.TriggerSection == 'FORM' && event?.data?.eventName == 'OTP_GENERATE_SUCCESS') {
      this.config[3].sectionContent.config.options[0].disabled = true
    }
    if (event.TriggerSection == 'FORM' && event?.formValue?.identityNumberOneVerified) {
      this.config[3].sectionContent.config.options[0].disabled = true
    }
  }

  sectionBuilderEmitter($event) {
    if (this.journey.product.productCode == 'KML' ||
      this.journey.product.productCode == 'TML' ||
      this.journey.product.productCode == 'SML') {
      this.sectionBuilderEmitterForAction($event)
    }
  }

  consentSectionModifier() {
    if(this.config[3].sectionContent?.isValid===true && this.commonService.validationCheck(this.config[2].sectionContent.fields[1])){
      if(!this.config[2].sectionContent.fields[1].isVerified){
        this.config[2].sectionContent.verificationExternalTrigger.next({"ok":true,"fieldName":'identityNumberOne'})
        setTimeout(() => {
          this.config[3].sectionContent.config.options[0].completed = true
          this.changeDetectorRef.detectChanges();
        });

      }
    }else{

      setTimeout(() => {
        this.config[3].sectionContent.config.options[0].completed = false
        this.changeDetectorRef.detectChanges();
      });
      this.sharedService.openSnackBar("Please Enter a valid Aadhaar Number")

    }
    return this.config
  }

  proceedAfterKyc() {
    this.config[2].sectionContent.isShow = false;
    this.config[3].sectionContent.isShow = false;
    this.config[4].sectionContent.isShow = true;
    this.config[4].sectionContent.options['mapSupplyData'] = true;
    this.config[4].sectionContent.options['mapAndDisable'] = true;
    this.config[4].sectionContent.options['mappingFields'] = {...this.journey.metaData.capturedData.aadharData, "directorTextVariable3" : this.journey.metaData.capturedData.aadharData.gender};
  }

  proceed() {
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.showloader = true
      this.commonService.saveSectionFormDataToJourney(this.config,'DIRECTOR_INFO')
      this.journey = this.commonService.getJourney()
      this.commonService.journeyEventsExecutor("DIRECTOR_KYC")
      this.journey.metaData.capturedData.directorPanAadharInfo = this.config[2].sectionContent.formValue
      this.proceedAfterKyc()
      this.isSubmit = true
      this.commonService.setJourney(this.journey)
      this.showloader = false
    }
  }
}

