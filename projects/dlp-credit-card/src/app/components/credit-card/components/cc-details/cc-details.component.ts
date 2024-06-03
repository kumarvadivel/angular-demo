import { Component, OnInit } from '@angular/core';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { ApiService } from "@cc-app/services/api.service";
import { SharedService } from '../../../../shared/services/utils/shared.service';
import {MatDialog } from '@angular/material/dialog';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';

@Component({
  selector: 'app-cc-details',
  templateUrl: './cc-details.component.html',
})
export class CcDetailsComponent implements OnInit {
  metaConfig;
  showSubmit = true
  journey;
  config: any
  showloader = false;
  radioIconStr: string = '';
  $scope: any;
  fdDetails:any[];
  selectedCard;
  scopeSubscriber: any;
  pageCode = 'CHOOSE_CC';
  // @ViewChild('perfectScroll') perfectScroll: PerfectScrollbarComponent;
  constructor(public commonService: CommonCommonService, public commonVariableService: CommonVariableService, public apiService: ApiService, public sharedService: SharedService, public dialog: MatDialog,private localStorage:LocalStorage,public submitFlowApiService: SubmitFlowApiService) {
    this.showloader = true
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
  }

  ngOnInit(): void {
    this.dataScopeFetchFlow()
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow && this.metaConfig.dataScopeFetchFlow.length) {
      this.showloader = true
      this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0], this.metaConfig.dataScopeFetchFlow.length, 0, {}, this.metaConfig.dataScopeFetchFlow, this.config, this.pageCode)
    } else {
      this.triggerAfterScopeEffect()
    }
    this.scopeSubscriber = this.commonVariableService.scopeSubject$.subscribe((scopeData) => {
      this.$scope = scopeData;
      this.triggerAfterScopeEffect()
    })
  }
  triggerAfterScopeEffect() {
    this.showloader = false
    this.customInitializerWithRespectToProduct()
  }

  customInitializerWithRespectToProduct() {
    this.contentModerationForProduct()
    this.formDataPrepopulationForProduct()
  }

  contentModerationForProduct() {
    this.handleSwadhancard(this.$scope)
    this.config[4].sectionContent.config.data = this.$scope.fetchFDAccountsDetails?.accountList;
    this.config[7].sectionContent.paragraphData =  "There are no Credit Card(s) to be displayed" //this.$scope.fetchExistingCreditCardDetails?.existingCreditCardList?.length == 0 ? "There are no Credit Card(s) to be displayed." : this.$scope.fetchExistingCreditCardDetails.existingCreditCardList
    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
  }

  formDataPrepopulationForProduct() {
    this.config = this.commonService.formDataEditDataPopulator(this.config, { ...this.$scope, ...this.journey }, this.metaConfig)
  }

  continue() {
    this.submitValidationForProduct()
  }

  //disabled status of the submit button
  ContinueButtonStatus() {
    return this.commonService.SectionMandatoryValidationSystem(this.config)
  }

  previousContinue() {
    this.commonService.findPreviouspageCode(this.pageCode)
  }

  submitValidationForProduct() {
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.commonService.setJourney(this.journey)
      this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
      this.formSubmitFlow()
    }

  }

  formSubmitFlow() {
    this.journey = this.commonService.getJourney()
    if (this.metaConfig.formSubmitFlow) {
      this.showloader = true;
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config, this.$scope)
      } else {
        this.showloader = false;
        this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      }
    } else {
      this.showloader = false;
      this.commonService.proceedJourney(this.pageCode, undefined, this.config)
    }

  }

  sectionBuilderEmitter($event) {
    if ($event.TriggerSection == "CARD") {
      if($event.data.isSelected){
        let selectedCardType = { 'selectedCreditCardType': $event.data.description };
        this.$scope['selectedCreditCard'] = $event.data;
        this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
        this.journey['selectedCreditCardUuid'] = $event.data.uuid;
        this.localStorage.SessionSetItem("CURRENT_JOURNEY", this.journey);
        this.config[7].sectionContent.fields[0].value = selectedCardType.selectedCreditCardType;
      }else{
        this.config[7].sectionContent.fields[0].value = null
      }
    }
  }

  renderRadioIcons(item?) {
    this.radioIconStr = `assets/images/${item}.webp`;
    return this.radioIconStr;
  }

  onCardSelect(field) {
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.selectedCard = field.uuid
    this.journey.product['SelectedLoanProgram'] = this.selectedCard
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", JSON.stringify(this.journey))
  }

  kfsDownload(){
    window.open(`${window.origin}/credit-card/assets/documents/SchemeSelectionPDF.pdf`,"_blank")
  }

  handleSwadhancard($scope) {
    if ($scope.fetchFDDetails.code == '200') {
      this.fetchFDDetails($scope);

    }
    else {
      this.fdDetails = [];
      this.Swadhancardarray($scope);
    }
  }

  fetchFDDetails($scope) {
    const accounts = $scope.fetchFDAccountsDetails?.accountList;
    if (accounts) {
      this.fdDetails = accounts;
    } else {
      this.fdDetails = [];
    }
    this.Swadhancardarray($scope);
  }

  Swadhancardarray($scope) {
    const loanPrograms = $scope.fetchAllEligibleLoanPrograms?.loanProgramList;
    let index = loanPrograms.findIndex(p => p.code == "CC103");
    if (index !== -1 && this.fdDetails.length === 0) {
      loanPrograms.splice(index, 1);
    }
  }
}
