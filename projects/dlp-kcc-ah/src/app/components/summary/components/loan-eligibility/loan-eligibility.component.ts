import { Component, Injector, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Formatters } from '../../../../shared/helpers/Formatters';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
import { InitializeJourneyService } from '@kcc-ah-app/services/initialize-journey.service';
import { EnvironmentService } from '@kcc-ah-environments/environment.service';
declare let Appice: any;
declare let $: any;
@Component({
  selector: 'app-loan-eligibility',
  templateUrl: './loan-eligibility.component.html',
  styleUrls: ['./loan-eligibility.component.scss']
})
export class LoanEligibilityComponent implements OnInit {
  journey: any;
  config: any;
  metaConfig: any;
  showloader = false
  fetchedData;
  temp: any
  branchConfig
  rejectionView: any
  $scope: any;
  pageCode = 'LOAN_ELIGIBILITY'
  scopeSubscriber: any;
  dialog: MatDialog;
  envService:EnvironmentService;
  formatter: Formatters;
  sharedService: SharedService
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    private initializeJourneyService: InitializeJourneyService,
    public theme1ApiService: ApiService,
    private injector: Injector) {
    this.dialog = this.injector.get<MatDialog>(MatDialog)
    this.envService = this.injector.get<EnvironmentService>(EnvironmentService)
    this.formatter = this.injector.get<Formatters>(Formatters)
    this.sharedService = this.injector.get<SharedService>(SharedService)
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    this.temp = this.commonService.ParseConfigFormJourneyPreview([this.metaConfig.temp.fields])[0]
    this.branchConfig = this.metaConfig.branchConfig
    this.rejectionView = this.commonService.ParseConfig(this.metaConfig.rejectionView)
  }

  ngOnInit(): void {
    this.dataScopeFetchFlow()
  }

  ngOnDestroy() {
    this.scopeSubscriber.unsubscribe()
  }
  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
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
    this.formdataPrepopulationWithRespectToProduct()
    this.contentModeratorWithRespectToProduct()

  }
  formdataPrepopulationWithRespectToProduct() {

    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)

  }

  contentModeratorWithRespectToProduct() {

    this.branchConfig.branchDetails.name = `Bank Of India ${this.$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName} Branch`
    this.branchConfig.branchDetails.address = `${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value}${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue}`
    this.rejectionView[0].sectionContent.titleData = `${this.rejectionView[0].sectionContent.titleData}${this.$scope.loanDetails.loanDetails.borrower},`
    this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.$scope.loanDetails.loanDetails.crmLeadId || this.$scope.loanDetails.loanId}`
    this.metaConfig.kccViewConfig = this.commonService.pageSectionContentModeration(this.metaConfig.kccViewConfig,{ "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })

  }

  continue() {
    this.submitValidationForProduct()
  }

  ContinueButtonStatus() {
    return this.commonService.SectionMandatoryValidationSystem(this.config);
  }

  submitValidationForProduct() {

    this.journey = this.commonService.getJourney()
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.commonVariableService.globalLoaderState = true
      this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
      this.journey = this.commonService.getJourney()
      this.formSubmitFlow()
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

  //section builder event observer

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  home() {
    this.commonService.flushJourney()
  }
  fetchLoanDetails() {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.theme1ApiService.fetchLoanDetails(params).then((res: any) => {
      if (res.code == '200') {
        this.fetchedData = res.loanDetails
        this.journey.metaData.capturedData = { ...this.journey.metaData.capturedData, ...res.loanDetails }
        this.branchConfig.branchDetails.name = `Bank Of India ${res.userHierarchyUnit.userHierarchyUnitName} Branch`
        this.branchConfig.branchDetails.address = `${res.userHierarchyUnit.addressAssigned.line1Value}${res.userHierarchyUnit.addressAssigned.cityValue},${res.userHierarchyUnit.addressAssigned.stateValue},${res.userHierarchyUnit.addressAssigned.zipCodeValue}`
        this.showloader = false

        this.parseConfig()
      }
    })
  }


  fetchProductDetails() {
    let params = {
      uuid: this.journey.product.loanPurposeUuid,
    }
    this.theme1ApiService.fetchProductDetail(params).then((res: any) => {
      this.metaConfig.temp.fields[1].minLength = res.minLoanAmount
      this.metaConfig.temp.fields[1].maxLength = res.maxLoanAmount
      if (this.journey.product.productCode == 'LA763') {
        this.metaConfig.showEmiCalculatorSection = false
        this.metaConfig.showKccdataSection = true
      }
    })

  }

  parseConfig() {
    this.config[this.metaConfig.titleIndex].sectionContent.titleData = `${this.config[this.metaConfig.titleIndex].sectionContent.titleData} ${this.fetchedData.borrower}`
    this.rejectionView[0].sectionContent.titleData = `${this.rejectionView[0].sectionContent.titleData}${this.fetchedData.borrower},`
    if (this.journey.product.productCode != 'LA776') {
      this.config[this.metaConfig.loanAmountIndex].sectionContent.htmlData = `${this.config[this.metaConfig.loanAmountIndex].sectionContent.htmlData} ${this.fetchedData.loanAmount} &nbsp;</div>  ${this.metaConfig?.loanAmountSuffix || ''}`;
    } else {
      this.config[this.metaConfig.loanAmountIndex].sectionContent.htmlData = `Your Application has been assigned to the selected bank branch. Please visit selected branch for further details.`
      if (this.fetchedData.crmLeadId == null) {
        let prop = { LeadID: this.fetchedData.crmLeadId, ContinuetoSBA: 'False' }
        this.commonService.triggerAppiceEvent('AGLLeadGen', prop);
        
        try{
          if(typeof Appice != 'undefined'){
            Appice.setUserId(this.fetchedData.crmLeadId);
          }
        }catch(e){

        }

        this.metaConfig.showRejectionSection = true
        this.metaConfig.showMainContent = false
      }
    }
    this.config[this.metaConfig.refNoInx].sectionContent.paragraphData = `${this.config[this.metaConfig.refNoInx].sectionContent.paragraphData} ${this.fetchedData.crmLeadId || this.fetchedData.loanId}`

    this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.fetchedData.crmLeadId || this.fetchedData.loanId}`
  }


  Continue() {
    let prop = { LeadID: this.fetchedData.crmLeadId, ReferenceID: this.fetchedData.crmLeadId, ContinuetoSBA: 'True' }
    this.commonService.triggerAppiceEvent('AGLLeadGen', prop);

    this.commonService.quickInitiateProduct('SBA');
  }


  fetchBankDetails(iteration, totaliteration) {
    let params = {
      offset: 0,
      access_token: this.journey.product.access_token
    }
    this.theme1ApiService.fetchBankDetails(params).then((res: any) => {
      if (res.code == '200' && res.bankDetails.length != 0) {
        this.showloader = false
        this.$scope['bankDetails'] = res
        this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
      } else {
        if (iteration == totaliteration) {
          this.showloader = false
          this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
        } else {
          setTimeout(() => {
            this.fetchBankDetails(iteration + 1, totaliteration)
          }, this.metaConfig.bankDetails.delay)
        }
      }
    }, () => {
      this.showloader = false
    })
  }

  downloadKFS(){
    $(".kfs-action-items").hide(); 
    let DATA: any = document.getElementsByClassName('kfs-table');
    html2canvas(DATA[0]).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png',3.0);
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('KFS.pdf');
      $(".kfs-action-items").show(); 
    });
  }
  onCLickYes() {
    if(this.commonService.SectionValidationSystem(this.metaConfig.kccViewConfig)){
      if (this.envService.config?.appConfig?.appice) {
        let prop = {Proceed: 'True'}
        let obj = { key: 'KCCApply', properties: prop }
        try{
          if(typeof Appice != 'undefined'){
            Appice.recordEvent({ key: obj.key, segment: obj.properties });
          }
        }catch(e){
          
        }
      }
      this.initializeJourneyService.navigateJourney("LOAN_SUMMARY");
    }else {
      this.sharedService.openSnackBar("Read Consent is Mandatory")
    }
  }

  onCLickWantToAddMoreLand() {
    this.initializeJourneyService.navigateJourney("KCC_LAND");  
  }
}
