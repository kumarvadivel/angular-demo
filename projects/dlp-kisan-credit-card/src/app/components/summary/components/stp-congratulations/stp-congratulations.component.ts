import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Formatters } from '../../../../shared/helpers/Formatters';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ApiService } from '@kcc-app/services/api.service';
import { CommonCommonService } from '@kcc-app/services/common-common.service';
import { CommonVariableService } from '@kcc-app/services/common-variable-service';
import { InitializeJourneyService } from '@kcc-app/services/initialize-journey.service';
declare let Appice: any;
declare let $: any;
@Component({
  selector: 'app-stp-congratulations',
  templateUrl: './stp-congratulations.component.html',
  styleUrls: ['./stp-congratulations.component.scss']
})
export class STPCongratulationsComponent implements OnInit {
  journey: any;
  config: any;
  metaConfig: any;
  showloader = false
  fetchedData;
  temp: any 
  rejectionView: any
  $scope: any;
  pageCode = 'STP_CONGRATULATIONS'
  scopeSubscriber: any;
  dialog: MatDialog;
  formatter: Formatters;
  sharedService: SharedService
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    private initializeJourneyService: InitializeJourneyService,
    public theme1ApiService: ApiService,
    private injector: Injector) {
    this.dialog = this.injector.get<MatDialog>(MatDialog)
    this.formatter = this.injector.get<Formatters>(Formatters)
    this.sharedService = this.injector.get<SharedService>(SharedService)
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    this.temp = this.commonService.ParseConfigFormJourneyPreview([this.metaConfig.temp.fields])[0]
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
   this.rejectionView[0].sectionContent.titleData = `${this.rejectionView[0].sectionContent.titleData}${this.$scope.loanDetails.loanDetails.borrower},`
    this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.$scope.loanDetails.loanDetails.crmLeadId || this.$scope.loanDetails.loanId}`

    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
    this.metaConfig.kccViewConfig = this.commonService.pageSectionContentModeration(this.metaConfig.kccViewConfig, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })

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
  sectionBuilderEmitter($event) {
    if ($event.TriggerSection == 'BUTTON') {
      if ($event.data === 'KEYFACT_DOWNLOAD') {
        this.downloadKFS();
      }
    }
  }

  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  home() {
    this.commonService.flushJourney()
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
 
  accept() {
    if(this.commonService.SectionValidationSystem(this.metaConfig.kccViewConfig)){
      this.initializeJourneyService.navigateJourney("LOAN_SUMMARY");
    }else {
      this.sharedService.openSnackBar("Read Consent is Mandatory")
    }
  }

  decline() {
    this.initializeJourneyService.navigateJourney("CONTACT_BRANCH");  
  }
}
