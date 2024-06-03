import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonCommonService } from "@bl-app/services/common-common.service";
import { CommonVariableService } from "@bl-app/services/common-variable-service";
import { ApiService } from "@bl-app/services/api.service";
import { ArrayMethod } from "../../../../shared/helpers/ArrayMethods";
import { SharedService } from "../../../../shared/services/utils/shared.service";
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';


@Component({
  selector: 'app-director-kyc',
  templateUrl: './director-kyc.component.html',
  styleUrls: []
})
export class DirectorKycComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader=false;
  metaConfig;
  $scope: any;
  config:any
  pageCode = 'DIRECTOR_KYC'
  scopeSubscriber: any;
  constructor(public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public ArrayMethods:ArrayMethod,
    public sharedService:SharedService,
    public commonVariableService:CommonVariableService,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey,this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)
    }

  ngOnInit(): void {
    this.tabsData = this.journey['tabsData']
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
    this.journey = this.commonService.getJourney()
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)
    }
  }
  
  contentModeratorWithRespectToProduct() {
    if(this.journey.product.productCode == "BL10AB"){
      this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
    }
    if(this.config[2].sectionContent.options.mappingFields.identityNumberTwo!=null&&this.config[2].sectionContent.options.autoVerifyMappedFields===true){
      this.config[2].sectionContent.fields[0].fieldAccessModifier='READ_ONLY' 
      this.config[2].sectionContent.fields[1].fieldAccessModifier='READ_ONLY' 
      this.config[2].sectionContent.fields[2].fieldAccessModifier='READ_ONLY' 
  }
  this.config[2].sectionContent.fields[2].options.extraParams={
      objectUuid:this.journey.product.borrowerUuid,
      requestFor:"DIRECTOR"
  }
  }

  continue(){
    this.submitValidationForProduct()
  }

  //disabled status of the submit button
  ContinueButtonStatus(){
    if(this.journey.product.productCode == "BL10AB"){
      return this.commonService.SectionMandatoryValidationSystem(this.config)
    }
  }

  submitValidationForProduct(){
    if(this.journey.product.productCode == "BL10AB"){
      this.journey = this.commonService.getJourney()
      if(this.commonService.SectionValidationSystem(this.config)){
        this.commonVariableService.globalLoaderState=true
        this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode)
        this.journey = this.commonService.getJourney()   
        this.journey.metaData.capturedData.directorPanAadharInfo = this.config[2].sectionContent.formValue
        this.commonService.setJourney(this.journey)
        this.saveCompanyRepresentative()
        this.commonService.journeyEventsExecutor("DIRECTOR_KYC")
        this.callDedupeCheck();
        // this.formSubmitFlow()
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

  //section builder event observer
  sectionBuilderEmitterForAction($event){
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
      this.config[3].sectionContent.config.options[0].disabled = true
  }
  if ($event.TriggerSection == 'FORM' && $event?.formValue?.identityNumberOneVerified === true) {
      this.config[3].sectionContent.config.options[0].disabled = true
  }
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

  sectionBuilderEmitter($event) {
    if (this.journey.product.productCode == 'BL10AB') {
      this.sectionBuilderEmitterForAction($event)
    }
  }


  saveCompanyRepresentative(){
    if(this.$scope.retrieve.companyRepresentativeList.length == 0){
      this.showloader = true
      let params = {
        identityNumberOne: this.config[3].sectionContent.formValue.identityNumberOne,
        identityNumberTwo: this.config[2].sectionContent.formValue.identityNumberTwo,
        identityNumberOneVerified: true,
        identityNumberTwoVerified: true,
        keyPerson: true,
        access_token: this.journey.product.access_token,
        companyUuidDirector: this.$scope.borrowerDetails.borrowerDetail.companyUuid,
        designationUuid: this.$scope.designations.responseAttr.designations[0].uuid,
        isOnboarding: false,
        isValidationRequired: false
      }
      this.theme1ApiService.saveCompanyRepresentative(params).then((res: any) => {
        if (res.responseAttr.code == "200") {
          this.sharedService.openSnackBar(res.responseAttr.message, 'success');
        } else {
          this.showloader = false;
          this.sharedService.openSnackBar(res.responseAttr.message, 'error', 400)
        }
      }, err  => {
        this.showloader = false;
        this.sharedService.openSnackBar(err.message, 'error', 400)
      })
    }
  }

  callDedupeCheck() {
    this.showloader = true
    this.journey = this.commonService.getJourney()
    let params = {
      requestFor: "DIRECTOR",
      panNumber: this.config[2].sectionContent.formValue.identityNumberTwo,
      loanUuid: this.journey.product.loanUuid,
      access_token: this.journey.product.access_token,
      microservicetoken: this.journey.product.oauthAccessToken,
      applicationSource: "WEB_JOURNEY",
    }
    if(this.journey.metaData.capturedData.aadharData){
      params["referenceKey"] =  this.journey.metaData.capturedData.aadharData.referenceKey
    } else {
      params["aadhaarNumber"] =  this.config[2].sectionContent.formValue.identityNumberOne
    }
    this.theme1ApiService.cbsDedupe(params).then((res: any) => {
      if (res.code == "200") {
        this.showloader = false
        if(res.isETB){
          this.journey.isEtb = res.isETB
          this.journey.metaData.capturedData.dedupeCheckcustId = res.custId
          this.commonService.setJourney(this.journey)
          this.formSubmitFlow()
        } else {
          this.openNoCbsData()
        }
        this.sharedService.openSnackBar(res.message, 'success');
      } else {
        this.showloader = false;
        this.sharedService.openSnackBar(res.message, 'error', 400)
      }

    },
      error => {
        this.showloader = false;
        this.sharedService.openSnackBar(error.message, 'error', 400)
      })
  }


  openNoCbsData() {
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-30', 'mob-w-100'],
      height: '30%',
      disableClose: true,
      role:"dialog",
      ariaLabel:"Renewal Section",
      data: {
        popupContent: this.metaConfig.noCbsData,
        title: 'CBS Dedupe',
        pageCode: this.pageCode,
        showBtns: false,
        actionItems: [{actionKey: true,actionLabel: 'Yes'},{actionKey: true,actionLabel: 'No'}],
        journey: this.journey
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result.action.actionLabel == "Yes"){
        this.formSubmitFlow()
      }
    })
  }


  executeAppiceEvent(){
    let prop = { ProductName: this.journey?.metaData?.capturedData?.MORE_INFO?.borrowerEmploymentHistoryTextVariable1, Continue: 'True', LoanAmount: this.journey?.metaData?.capturedData?.loanAmount}
    this.commonService.triggerAppiceEvent('AGLAddInfo',prop);
    this.commonService.triggerAppiceEvent('setUser');      
  }
}
