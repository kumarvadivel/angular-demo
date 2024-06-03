import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@kcc-renewal-app/services/api.service';
import { CommonCommonService } from '@kcc-renewal-app/services/common-common.service';
import { CommonVariableService } from '@kcc-renewal-app/services/common-variable-service';
import { SharedService } from '@kcc-renewal-app/shared/services/utils/shared.service';

@Component({
  selector: 'app-loan-sanction',
  templateUrl: './loan-sanction.component.html',
  styleUrls: ['./loan-sanction.component.scss']
})
export class LoanSanctionComponent implements OnInit,OnDestroy {
  journey;
  showloader = false
  tabsData: any;
  metaConfig;
  showSubmit = true
  config: any;
  $scope: any;
  pageCode = 'LOAN_SANCTION_DETAILS'
  scopeSubscriber: any;
  constructor(public commonService: CommonCommonService,
    public theme1ApiService: ApiService,
    public commonVariableService: CommonVariableService,
    public sharedService: SharedService,
    public dialog: MatDialog,
    public router: Router,
    public route:ActivatedRoute) {
      this.journey = this.commonService.getJourney()
      this.commonService.bindHeaderFooterTypes(this.pageCode)
      this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
      this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
}

  ngOnInit(): void {
    this.dataScopeFetchFlow()
  }
  ngOnDestroy(): void {
    this.scopeSubscriber.unsubscribe()
  }

  dataScopeFetchFlow() {
    if (this.metaConfig.dataScopeFetchFlow?.length) {
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
    if (this.journey.product.productCode == '1000290') {
        this.formdataPrepopulationWithRespectToProduct()
        this.contentModeratorWithRespectToProduct()
    }
  }

  formdataPrepopulationWithRespectToProduct() {
    if (this.journey.product.productCode == '1000290') {
        this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
    }
  }

  contentModeratorWithRespectToProduct() {
    let current_Date
    if (this.journey.product.productCode == '1000290') {
        current_Date = new Date()
        this.metaConfig.customData.todayDate = current_Date.getDate().toString() + "/" + (current_Date.getMonth() + 1).toString() + "/" + current_Date.getFullYear().toString()
        this.config = this.commonService.pageSectionContentModeration(this.config, {
            "$scope": {...this.$scope},
            "journey": {...this.journey},
            "metaConfig": {...this.metaConfig}
        })
    }
  }
  continue(amount,status) {
    this.$scope.kccRenewalAmount=amount
    this.$scope.kccRenewalStatus=status
    this.formSubmitFlow();
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

  errorNavigate() {
    this.commonService.NavigateJourney('PRODUCT_ERROR')
    this.commonVariableService.globalLoaderState = false
    this.showloader = false
  }
}
