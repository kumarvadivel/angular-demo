import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Formatters } from '../../../../shared/helpers/Formatters';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { ApiService } from '@kcc-app/services/api.service';
import { CommonCommonService } from '@kcc-app/services/common-common.service';
import { CommonVariableService } from '@kcc-app/services/common-variable-service';
import html2canvas from 'html2canvas';
declare let Appice: any;
@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.scss']
})
export class LoanSummaryComponent implements OnInit {
  journey: any;
  config: any;
  metaConfig: any;
  showloader = false
  fetchedData; 
  branchConfig 
  $scope: any;
  pageCode = 'LOAN_SUMMARY'
  scopeSubscriber: any;
  dialog: MatDialog;
  formatter: Formatters;
  sharedService: SharedService
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    private router: Router,
    private injector: Injector,
    public theme1ApiService: ApiService) {
    this.dialog = this.injector.get<MatDialog>(MatDialog)
    this.formatter = this.injector.get<Formatters>(Formatters)
    this.sharedService = this.injector.get<SharedService>(SharedService)
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    this.branchConfig = this.metaConfig.branchConfig;
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


  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  home() {
    this.commonService.flushJourney()
  } 
 

  Continue() {
    let prop = { LeadID: this.fetchedData.crmLeadId, ReferenceID: this.fetchedData.crmLeadId, ContinuetoSBA: 'True' }
    this.commonService.triggerAppiceEvent('AGLLeadGen', prop);

    this.commonService.quickInitiateProduct('SBA');
  }

 

  downloadKFS(){
    let DATA: any = document.getElementsByClassName('kfs-table');
    html2canvas(DATA[0]).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png',3.0);
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('KFS.pdf');
    });
  }
  onCLickYes() {
    if(this.commonService.SectionValidationSystem(this.config)){
      this.router.navigate(['/loan/summary']); 
    }else {
      this.sharedService.openSnackBar("Read Consent is Mandatory")
    }
  }

  onCLickWantToAddMoreLand() {
    this.router.navigate(['/product-declaration/details/kcc_land']);    
  }
}
