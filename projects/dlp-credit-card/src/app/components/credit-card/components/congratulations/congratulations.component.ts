import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@cc-app/services/api.service';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { Formatters } from '@cc-app/shared/helpers/Formatters';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss']
})
export class CongratulationsComponent implements OnInit {

  journey: any;
  config: any;
  metaConfig: any;
  showloader = false
  ratingSection: any;
  // Month	Opening Balance	Interest	Principle Repayment	Closing Balance

  branchConfig
  submitDisable = false

  rejectionView: any;
  $scope: any;
  pageCode = 'CONGRATULATIONS'
  scopeSubscriber: any;
  branchDetails: string;
  branchDetailsExtended: string;
  constructor(public commonService: CommonCommonService,
    public commonVariableService: CommonVariableService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public formatter: Formatters,
    public apiService: ApiService) {
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    this.ratingSection = this.commonService.ParseConfig(this.metaConfig.ratingSection)
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
    this.branchConfig.accountDetails.forEach(obj => {
      if (this.$scope.fetchAtosCardDetails.hasOwnProperty(obj.name)) {
        obj.value = this.$scope.fetchAtosCardDetails[obj.name];
      }
      else if(this.$scope.fetchAtosCardDetails.atosAddOnCardResponseVOList[0].hasOwnProperty(obj.name)) {
        obj.value =this.$scope.fetchAtosCardDetails.atosAddOnCardResponseVOList[0]?.addOnCardHolderName
      }
    });
    this.config[2].sectionContent.paragraphData = this.config[2].sectionContent.paragraphData + this.$scope.loanDetailsWithoutBorrowerDetails.loanDetails.crmLeadId;
    this.branchDetails = this.$scope.loanDetailsWithoutBorrowerDetails.userHierarchyUnit.addressAssigned.line1Value;
    this.branchDetailsExtended = `${this.$scope.loanDetailsWithoutBorrowerDetails.userHierarchyUnit?.addressAssigned?.districtValue} ${this.$scope.loanDetailsWithoutBorrowerDetails.userHierarchyUnit?.addressAssigned?.subDistrictName} ${this.$scope.loanDetailsWithoutBorrowerDetails.userHierarchyUnit?.addressAssigned?.districtValue} ${this.$scope.loanDetailsWithoutBorrowerDetails.userHierarchyUnit?.addressAssigned?.zipCodeValue}`;
    this.rejectionView[0].sectionContent.titleData = `${this.rejectionView[0].sectionContent.titleData}${this.$scope.loanDetailsWithoutBorrowerDetails.loanDetails.borrower},`
    this.rejectionView[2].sectionContent.paragraphData = `${this.rejectionView[2].sectionContent.paragraphData} ${this.$scope.loanDetailsWithoutBorrowerDetails.loanDetails.crmLeadId || this.$scope.loanDetailsWithoutBorrowerDetails.loanDetails.loanId}`

    this.config = this.commonService.pageSectionContentModeration(this.config, { "$scope": { ...this.$scope }, "journey": { ...this.journey }, "metaConfig": { ...this.metaConfig } })
  }




  //------------------------------custom/other methods and varaible should be writtern down below this line------------------

  home() {
    this.commonService.flushJourney()
  }


  //ratings action method
  ratingsAction(action) {
    if (action == 'SUBMIT') {
      this.ratingSection[2].sectionContent.formValueEmitter.next()
      let params = {
        ...this.ratingSection[2].sectionContent.formValue,
        access_token: this.journey.product.access_token,
        loanApplicationUuid: this.journey.product.loanUuid,
        microservicetoken: this.journey.product.oauthAccessToken,
      }
      this.apiService.submitFeedback(params).then((res: any) => {
        if (res.code == '200') {
          this.metaConfig["ratingSection"][2].sectionContent.fields[2].fieldAccessModifier = 'READ_ONLY'
          this.metaConfig["ratingSection"][2].sectionContent.fields[1].fieldAccessModifier = 'READ_ONLY'
          this.commonVariableService.submitFeedBack = true
          this.submitDisable = true
        }
      })
    } else {
      this.metaConfig.showRatingSection = false
    }
  }

}
