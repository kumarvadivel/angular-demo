import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@ca-app/services/api.service';
import { CommonCommonService } from '@ca-app/services/common-common.service';
import { CommonVariableService } from '@ca-app/services/common-variable-service';
import { FetchFlowApiService } from '@ca-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@ca-app/services/meta-config.service';
import { ArrayMethod } from '@ca-app/shared/helpers/ArrayMethods';
import { SharedService } from '@ca-app/shared/services/utils/shared.service';

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
  pageCode = 'DIRECTOR_INFO'
  $scope: any={};
  isSubmit = true;
  public isPreview = false;
  scopeSubscriber: any;
  metaConfigService:MetaConfigService;
  theme1ApiService: ApiService
  ArrayMethods: ArrayMethod
  constructor(private route: ActivatedRoute, public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService, public sharedService: SharedService,
    public fetchFlowApiService: FetchFlowApiService,
    private changeDetectorRef: ChangeDetectorRef, private injector: Injector) {
    this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService);
    this.theme1ApiService = this.injector.get<ApiService>(ApiService);
    this.ArrayMethods = this.injector.get<ArrayMethod>(ArrayMethod);
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.metaConfigService.fetchProductPageConfig(this.journey,this.pageCode)
    this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,this.pageCode)
  }

  ngOnInit(): void {
    this.journey = this.commonService.getJourney();
    this.tabsData = this.journey['tabsData']
    this.dataScopeFetchFlow();
    this.customInitializerBasedOnProduct()

    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
      this.isPreview = true;
    }
    this.bindMappingData();
  });
  }
  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe()
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
  
  bindMappingData() {
    if (this.isPreview) {
      this.config[2].sectionContent.options['mapSupplyData'] = true;
      this.config[2].sectionContent.options['mapAndDisable'] = false;
      this.config[2].sectionContent.options['mappingFields'] = { ...this.journey.metaData.globalScopeData['retrieve'], ...this.journey.metaData.globalScopeData['retrieve']['companyRepresentativeList'][0] }
      this.config[3].sectionContent.options['mappingFields'] = { ...this.journey.metaData.globalScopeData['retrieve'], ...this.journey.metaData.globalScopeData['retrieve']['companyRepresentativeList'][0] }
    } else {
      this.config[2].sectionContent.options['mapSupplyData'] = true;
      this.config[2].sectionContent.options['mapAndDisable'] = true;
      this.config[2].sectionContent.options['mappingFields'] = JSON.parse(JSON.stringify({ ...this.journey.metaData.capturedData.aadharData, ...this.journey.metaData.capturedData.borrowerDetails }));
    }
  }

  customInitializerBasedOnProduct(){
    if(this.journey.product.productCode == "CA"){
      this.formDataPrepopulationForSml()
    }
  } 

  formDataPrepopulationForSml(){
    let mapping_Data={}
    for(const prop in this.metaConfig.prepopulationRemaps){
      mapping_Data[prop] = this.ArrayMethods.getPathVal({...this.journey,...this.$scope},this.commonService.applyJsonLogic(this.metaConfig.prepopulationRemaps[prop],this.journey))
    }
  }


  sectionBuilderEmitter($event) {
    if (this.journey.product.productCode == 'CA') {
      if ($event.TriggerSection == 'CONSENT') {
        this.config = this.consentSectionModifier($event)
      }
      if ($event.TriggerSection == 'FORM' && $event?.data?.eventName == 'OTP_ERROR') {
        setTimeout(() => {
          this.config[3].sectionContent.config.options[0].completed = false
          this.changeDetectorRef.detectChanges();
        });
      }
      if ($event.TriggerSection == 'FORM' && $event?.data?.eventName == 'OTP_GENERATE_SUCCESS') {
        this.config[3].sectionContent.config.options[0].disabled = true
      }
      if ($event.TriggerSection == 'FORM' && $event?.formValue?.identityNumberOneVerified === true) {
        this.config[3].sectionContent.config.options[0].disabled = true
      }
    }
  }

  consentSectionModifier(_$event) {
    if (this.config[3].sectionContent?.isValid === true && this.commonService.validationCheck(this.config[2].sectionContent.fields[1])) {
      if (!this.config[2].sectionContent.fields[1].isVerified) {
        this.config[2].sectionContent.verificationExternalTrigger.next({ "ok": true, "fieldName": 'identityNumberOne' })
        setTimeout(() => {
          this.config[3].sectionContent.config.options[0].completed = true
          this.changeDetectorRef.detectChanges();
        });

      }
    } else {
      setTimeout(() => {
        this.config[3].sectionContent.config.options[0].completed = false
        this.changeDetectorRef.detectChanges();
      });
      this.sharedService.openSnackBar("Please Enter a valid Aadhaar Number")

    }
    return this.config
  }

}

