import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonCommonService } from '@fd-app/services/common-common.service';
import { CommonVariableService } from '@fd-app/services/common-variable-service';
import { FetchFlowApiService } from '@fd-app/services/fetch-flow-api.service';
import { MetaConfigService } from '@fd-app/services/meta-config.service';
import { SubmitFlowApiService } from '@fd-app/services/submit-flow-api.service';
import { ApiService } from '../../../../services/api.service';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';
import { SharedService } from '../../../../shared/services/utils/shared.service';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent implements OnInit {
  journey: any;
  metaConfig;
  tabsData: any;
  public isPreview = false;
  submitFlowApiService:SubmitFlowApiService;
  commonCommonService:CommonCommonService;
  commonVariableService:CommonVariableService; 
  fetchFlowApiService:FetchFlowApiService;
  showMessage = false;
  metaConfigService:MetaConfigService;
  constructor(  
    public apiService:ApiService,
    public dialog:MatDialog,private sharedService:SharedService,private route: ActivatedRoute, private injector: Injector ) { 
      this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
      this.dialog = this.injector.get<MatDialog>(MatDialog);
      this.commonCommonService = this.injector.get<CommonCommonService>(CommonCommonService);
      this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService); 
      this.fetchFlowApiService = this.injector.get<FetchFlowApiService>(FetchFlowApiService); 
      this.metaConfigService = this.injector.get<MetaConfigService>(MetaConfigService); 
      this.commonCommonService.bindHeaderFooterTypes('PRODUCT_SELECTION')
      this.journey = this.commonCommonService.getJourney()
      this.config = this.metaConfigService.fetchProductPageConfig(this.journey,'PRODUCT_SELECTION')
      this.metaConfig = this.metaConfigService.fetchProductMetaConfig(this.journey,'PRODUCT_SELECTION')
      
    }
  bannerList = []
  stepperData = []
  showloader=false
  loanprogramData
  loanProgramValue
  ngOnInit(): void {
    //this.showloader=true
    this.bannerList = this.commonVariableService.homeBanner;
    this.tabsData = this.journey['tabsData']
    this.fetchLoanProgramData()
    this.stepperData = this.commonVariableService.stepper_test_data;
    this.route.queryParams.subscribe((params) => {
      if (params && params.isPreviwUpdate) {
      this.isPreview = true;
      this.bindMappingData();
    }

  });
  }
  config:any
  bindMappingData(){  
      if(this.isPreview ){ 
        this.config[5].sectionContent.options['mapSupplyData']=true; 
      this.config[5].sectionContent.options['mappingFields']=this.journey.metaData.globalScopeData['fetchVas']['vasData'][0]
      this.config[5].sectionContent.options['mapAndDisable']=false;
      } 
    
}
continue(){
this.commonCommonService.isShowError(this.config);
if(!this.loanProgramValue){
  this.sharedService.openSnackBar('Please select the product')
 }else if(this.commonCommonService.sectionValidationSystem(this.config)){ 
    this.commonCommonService.saveSectionFormDataToJourney(this.config,'BRANCH_DETAIL');
    this.config[5].sectionContent.formValue['programUuid']=this.loanProgramValue; 
    this.showloader=true
    this.formSubmitFlow()
  }
}

formSubmitFlow(){
  if(this.metaConfig.formSubmitFlow){
    this.commonCommonService.setJourney(this.journey)
    if(this.metaConfig.formSubmitFlow.length){
      this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,'PRODUCT_SELECTION',this.metaConfig,this.config)
    }else{
      this.submitFlowApiService.proceedJourney('PRODUCT_SELECTION',undefined,this.config)
    }
  }else{
    this.submitFlowApiService.proceedJourney('PRODUCT_SELECTION',undefined,this.config)
  }
  
}
 


fetchLoanProgramData(){
  this.showloader=true
  let params={
    access_token: this.journey.product.access_token,
    applicationId: this.journey.product.loanUuid,
    microservicetoken: this.journey.product.oauthAccessToken
  }
  this.apiService.fetchLoanProgramData(params).then((res:any)=>{
    this.loanprogramData = res.output.output
    this.showloader=false
  })
}
showDescription(product){
  this.dialog.open(PopupComponent,{
    width: '70%',
    height: '70%',
    ariaLabel:"popup",
      role:"dialog",
    disableClose: true,
    data:{
      title:product.accountDescription,
      popupContent:this.generateSection(product)
    },
  });
}

generateSection(product){
  return [{
    componentType:'HTML_CONTENT',
    sectionContent:{
      isShow:true,
      htmlData:product.descriptionHtml
    }
  }]
}
selectProduct(product){ 
  this.loanProgramValue=product.uuid;
    this.showMessage = (product.schemeCode == 'SB121') ? true:false; 
}
}
