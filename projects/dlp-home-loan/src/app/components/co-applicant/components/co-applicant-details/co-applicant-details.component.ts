import { Component, OnInit } from '@angular/core';
import { ApiService } from '@hl-app/services/api.service';
import { CommonCommonService } from '@hl-app/services/common-common.service';
import { CommonVariableService } from '@hl-app/services/common-variable-service';
import { ArrayMethod } from '@hl-app/shared/helpers/ArrayMethods';
import { SharedService } from '@hl-app/shared/services/utils/shared.service';

@Component({
  selector: 'app-co-applicant-details',
  templateUrl: './co-applicant-details.component.html',
  styleUrls: []
})
export class CoApplicantDetailsComponent implements OnInit {
  journey: any;
  tabsData: any;
  showloader = false;
  metaConfig;
  $scope: any = {}
  config
  pageCode = 'COAPPLICANT_DETAILS'
  scopeSubscriber: any;

  constructor(public commonService: CommonCommonService,
              public commonVariableService: CommonVariableService,
              public theme1ApiService: ApiService,
              public ArrayMethods: ArrayMethod,
              private sharedService:SharedService
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
      this.scopeSubscriber?.unsubscribe()
  }

  dataScopeFetchFlow(noLoader?) {
      if (this.metaConfig.dataScopeFetchFlow?.length) {
        if(noLoader==undefined){
            this.showloader = true
        }
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
      if (this.journey.product.productCode == 'HL') {
          this.formdataPrepopulationWithRespectToProduct()
          this.contentModeratorWithRespectToProduct()
      }
  }

  formdataPrepopulationWithRespectToProduct() {
      if (this.journey.product.productCode == 'HL') {
          this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
      }
  }

  contentModeratorWithRespectToProduct() {
      if (this.journey.product.productCode == 'HL') {
        this.dropUncreatedCoapplicantsAndRefetchCoapplicants()
          this.config = this.commonService.pageSectionContentModeration(this.config, {
              "$scope": {...this.$scope},
              "journey": {...this.journey},
              "metaConfig": {...this.metaConfig}
          })
           this.config[2].sectionContent.config.data = this.coapplicantDataFormatter(this.$scope.fetchCoApplicant.coApplicantList)
      }
  }

  dropUncreatedCoapplicantsAndRefetchCoapplicants(){
    this.$scope.fetchCoApplicant.coApplicantList.forEach(co=>{
        if(co.GUARANTOR_DETAIL.coApplicantTextVariable37==null){
            this.deleteCoapplicant(co)
        
        }
    })
    this.$scope.fetchCoApplicant.coApplicantList = this.$scope.fetchCoApplicant.coApplicantList.filter(f=>f.GUARANTOR_DETAIL.coApplicantTextVariable37!=null)
  }

  deleteCoapplicant(co,rowDelete?){
    let params = {
        access_token:this.journey.product.access_token,
        loanUuid:this.journey.product.loanUuid,
        coApplicantUuid: co?.GUARANTOR_DETAIL?.coApplicantUuid || co.coApplicantUuid
    }

    this.theme1ApiService.deleteCoApplicant(params).then((res:any)=>{
        if(res.code=="200"){
            this.substatusChange("SUB_STATUS_33",`Coapplicant ${co?.GUARANTOR_DETAIL?.coApplicantUuid || co.coApplicantUuid}`)
            if(rowDelete){
             this.dataScopeFetchFlow(true)
            } 
        }
    },_err=>{
        this.sharedService.openSnackBar("Something Went Wrong !! please try again")
    })
  }

  coapplicantDataFormatter(list){
    let formattedList = []
    let tempActions = [
        {
            "actionCode": "EDIT",
            "buttonLabel":"Complete",
            "className": "clr-green",
            "isDisplay": false
          },
        {
            "actionCode": "DELETE",
            "buttonLabel":"Delete",
            "className": "clr-red",
            "isDisplay": true
        },
        
    ]
    let borrower = {
        "fullName":this.$scope.borrowerDetails.borrowerDetail.fullName,
        "isEligible":"Yes",
        "identityNumberOne": this.commonService.applyJsonLogic({"maskData":[{var:"borrowerDetails.borrowerDetail.identityNumberOne"}]},this.$scope),
        "identityNumberTwo": this.commonService.applyJsonLogic({"maskData":[{var:"borrowerDetails.borrowerDetail.identityNumberTwo"}]},this.$scope),
        "type":"Main Applicant"
    }
    borrower['recordActions'] = JSON.parse(JSON.stringify(tempActions))
    borrower['recordActions'].map(a=> a.isDisplay=false)
    formattedList.push(borrower)
    let incompleteCoapplicantCount = 0
    list.forEach(item=>{
        let temp:any = {}
        for(const prop in item){
            temp={...temp,...item[prop]}
        }
        temp['isEligible']= this.coapplicantELigiblityTypeCheck(item)
        temp["identityNumberOne"] = this.commonService.applyJsonLogic({"maskData":[{var:"identityNumberOne"}]},temp)
        temp["identityNumberTwo"] = this.commonService.applyJsonLogic({"maskData":[{var:"identityNumberTwo"}]},temp)
        temp['type'] = "Co Applicant"
        temp['recordActions'] = JSON.parse(JSON.stringify(tempActions))
        if(temp.coApplicantTextVariable37==='COAPPLICANT_COMPLETED'){
            temp['recordActions'][0].isDisplay = false
        }else{
            temp['recordActions'][0].isDisplay = true
            incompleteCoapplicantCount+=1
        }
        formattedList.push(temp)
    })

    if(incompleteCoapplicantCount !=0){
        this.config[2].sectionContent.config.showRecordEachRecordLevelActions = true
        this.config[3].sectionContent.fields[0].fieldAccessModifier = 'READ_ONLY'
        this.config[4].sectionContent.isShow = true
        this.config[5].sectionContent.disabled = true
    }else{
        this.config[3].sectionContent.fields[0].fieldAccessModifier = 'EDITABLE'
        this.config[5].sectionContent.disabled = false
        this.config[4].sectionContent.isShow = false
    }

    return formattedList
  }
  coapplicantELigiblityTypeCheck(obj){
    if(obj.GUARANTOR_DETAIL.coApplicantEmploymentType!=null){
        switch(obj.GUARANTOR_DETAIL.coApplicantEmploymentType){
            case 'SALARIED':
                return obj.GUARANOR_EMP_DETAIL.coApplicantEmploymentBooleanVariable1 === true ? "Yes" : "No"
            case 'SELF_EMPLOYED':
                return obj.GUARANTOR_SELF_EMP_DETAIL.textVariable13=== "true" ? "Yes" : "No"
            case 'PENSIONER':
                return obj.CO_APPLICANT_PENSIONER_DETAIL.coApplicantPensionerDetailBooleanVariable1=== true ? "Yes" : "No"
            default:
                return "No"
        }
    }
        return "No"
  }
  continue() {
      this.submitValidationForProduct()
  }

  ContinueButtonStatus() {
      if (this.journey.product.productCode == 'HL') {
          return this.commonService.SectionMandatoryValidationSystem(this.config)
      }
      return false
  }

  submitValidationForProduct() {
      if (this.journey.product.productCode == 'HL') {
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
              this.commonService.apiCall({ submitflow: this.metaConfig.formSubmitFlow[0], currentIndex: 0, totalLength: this.metaConfig.formSubmitFlow.length, pageCode: this.pageCode, configList: this.metaConfig, pageconfig: this.config, extraCloudParams: this.$scope })
          } else {
              this.commonVariableService.globalLoaderState = true;
              this.commonService.proceedJourney(this.pageCode, undefined, this.config)
          }
      } else {
          this.commonVariableService.globalLoaderState = true;
          this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
  }

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  sectionBuilderEmitter($event){
    if($event.TriggerSection=='BUTTON'){
        if ($event.data == 'COAPPLICANT_SUBMIT') {
            this.continue()
        }
    }

    if($event.TriggerSection=='TABLE'){
        if($event.data.action.actionCode == 'DELETE'){
            this.deleteCoapplicant($event.data.record,this.dataScopeFetchFlow)
        }

        if($event.data.action.actionCode == 'EDIT'){
             this.progressCoapplicant($event.data)
        }
    }
  }

  progressCoapplicant(record){
    this.journey.metaData.capturedData.entityUuid = record.record.coApplicantUuid
    this.commonService.setJourney(this.journey)
    this.commonService.NavigateJourney(record.record.coApplicantTextVariable37)
  }

  substatusChange(substatus,description){
    let params = {
        access_token:this.journey.product.access_token,
        loanUuid:this.journey.product.loanUuid,
        "newSubStatus": substatus,
        "subStatusChangeDescription": description
    }

    this.theme1ApiService.updateLoanApplicationStatus(params).then((res:any)=>{
        if(res.code!="200"){
            this.commonService.navigateError()
        }
    },_err=>{
        this.commonService.navigateError()
    })
}
}
