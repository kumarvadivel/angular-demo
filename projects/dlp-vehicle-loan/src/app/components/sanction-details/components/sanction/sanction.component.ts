import {Component, OnInit} from '@angular/core';
import {CommonCommonService} from '@vl-app/services/common-common.service';
import {CommonVariableService} from '@vl-app/services/common-variable-service';
import {Router} from '@angular/router';
import {AddNewItemPopupComponent} from '../../../../shared/components/add-new-item-popup/add-new-item-popup.component';
import {MatDialog} from '@angular/material/dialog';
import {SharedService} from '../../../../shared/services/utils/shared.service';
import {LocalStorage} from '../../../../shared/helpers/localStorage';
import {ApiService} from '@vl-app/services/api.service';
import { cloneDeep } from '@vl-app/shared/utils/utils';
@Component({
    selector: 'app-sanction',
    templateUrl: './sanction.component.html',
    styleUrls: ['./sanction.component.scss']
})
export class SanctionComponent implements OnInit {
    journey: any;
    config: any;
    metaConfig: any;
    showSubmit = true
    showloader = false;
    loanAmount: number = 1000;
    tenure: number = 1;
    interest: number = 7.35;
    isChecked: boolean = false
    chartConfig
    chartFooter
    emiCalculatorConfig: any;
    tableConfig
    isshowEnhancedDetails = false
    showEnhanceSanction = false;
    customData: any = {}
    loanAmtDisp = {
        dispName: 'Loan Amount',
        min: null,
        max: null,
        steps: 1000,
        binder: null,
        footerStartVal: null,
        footerEndVal: null,
        func: this.formatAmount
    }
    tenureDisp = {
        dispName: 'Tenure',
        min: null,
        max: null,
        steps: 1,
        binder: null,
        footerStartVal: null,
        footerEndVal: null,
        func: this.formatTenure
    }
    LoanData: any = {}
    temp: any;
    branchConfig
    $scope: any;
    pageCode = 'SANCTION_DETAILS'
    scopeSubscriber: any;
    slideContent: boolean = false;
    showSanctionInformation: any = false;

    constructor(public commonService: CommonCommonService,
                public commonVariableService: CommonVariableService,
                public dialog: MatDialog,
                public theme1ApiService: ApiService,
                public localStorage: LocalStorage,
                public route: Router,
                public sharedService: SharedService) {
        this.journey = this.commonService.getJourney()
        this.commonService.bindHeaderFooterTypes(this.pageCode)
        this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
        this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
        this.chartConfig = this.metaConfig.chartConfig
        this.chartFooter = this.metaConfig.chartFooter
        this.branchConfig = this.metaConfig.customData.BranchDetails
        this.temp = this.metaConfig.temp
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
        if (this.journey.product.productCode == 'VLN') {
            this.formdataPrepopulationWithRespectToProduct()
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
        }
    }

    contentModeratorWithRespectToProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.showEnhanceSanction = true;
        this.config = this.commonService.pageSectionContentModeration(this.config,{"$scope":{...this.$scope},"journey":{...this.journey},"metaConfig":{...this.metaConfig}})
        this.metaConfig.customData.showEsignButton=this.$scope.fetchEligibilityData.output.plEligOutput.stpFlag=='STP'?true:false
        this.metaConfig.customData.showEnhanceButton=this.$scope.fetchEligibilityData.output.plEligOutput.stpFlag=='STP'?true:false
        this.metaConfig.customData.maxLoanAmount=this.$scope.fetchEligibilityData.output.plEligOutput.sanctionedFinalAmount
        this.metaConfig.customData.enhancedsanctionedAmount =this.$scope.fetchEligibilityData.output.plEligOutput.sanctionedFinalAmount
        this.metaConfig.customData.minLoanAmount=this.$scope.fetchEligibilityData.output.plEligOutput.productMinLoanAmount
        this.metaConfig.customData.minTenure=this.$scope.fetchEligibilityData.output.plEligOutput.productMinTenure
        this.metaConfig.customData.maxTenure=this.$scope.fetchEligibilityData.output.plEligOutput.tenure
        this.metaConfig.customData.loanAmount=this.$scope.fetchEligibilityData.output.plEligOutput.sanctionedFinalAmount
        this.metaConfig.customData.sanctionedAmount=this.$scope.fetchEligibilityData.output.plEligOutput.sanctionedFinalAmount
        this.metaConfig.customData.tenure=this.$scope.fetchEligibilityData.output.plEligOutput.tenure
        this.metaConfig.customData.maxEmi=this.$scope.fetchEligibilityData.output.plEligOutput.maxEmi
        this.metaConfig.customData.enhancedtenure = this.$scope.fetchEligibilityData.output.plEligOutput.tenure
        this.metaConfig.customData.interest= this.$scope.fetchEligibilityData.output.plEligOutput.roi
        this.metaConfig.showEmical =true
        this.metaConfig.customData.sanctionProceedBtnEnable = false
        this.commonVariableService.globalLoaderState = false
        this.metaConfig.customData.emiToBePaid = this.$scope.fetchRepaymentSchedule.object.emiToBePaid
        this.metaConfig.chartConfig.centerData.value = this.$scope.fetchRepaymentSchedule.object.emiToBePaid
        this.metaConfig.chartConfig.data[0].value = this.metaConfig.customData.loanAmount
        this.metaConfig.chartConfig.data[1].value = (this.metaConfig.customData.emiToBePaid*this.metaConfig.customData.tenure)-this.metaConfig.customData.loanAmount
        this.metaConfig.customData.totalPayable = this.$scope.fetchRepaymentSchedule.object.totalPayable
        this.metaConfig.customData.totalInterestPaid = this.$scope.fetchRepaymentSchedule.object.payableInterest
        this.metaConfig.customData.sanctionProceedBtnEnable=true
        this.chartConfig.updateChart.next()
        this.showloader=false
        this.metaConfig.customData.BranchDetails.name = `Bank Of India ${this.$scope.loanDetails.userHierarchyUnit.userHierarchyUnitName} Branch`
        this.metaConfig.customData.BranchDetails.address = `${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value} ${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue},${this.$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue}` 
        }
    }

    continue() {
        this.submitValidationForProduct()
    }

    ContinueButtonStatus() {
        if (this.journey.product.productCode == 'VLN') {
            return this.commonService.SectionMandatoryValidationSystem(this.config)
        }
        return false
    }

    submitValidationForProduct() {
        if (this.journey.product.productCode == 'VLN') {
            this.journey = this.commonService.getJourney()
            if (this.commonService.SectionValidationSystem(this.config)) {
                this.metaConfig.customData.isSanctionEnhanced = false
                this.journey.metaData.capturedData['SANCTION_DETAILS'] = this.metaConfig.customData
                this.commonService.setJourney(this.journey)
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
    formatAmount(value: number) {
        return '₹ ' + new Intl.NumberFormat('en-IN').format(value);
    }

    formatTenure(value: number) {
        return value + ' months'
    }

    valueBind($event) {
        this.metaConfig.customData.sanctionProceedBtnEnable = false
        this.metaConfig.customData = $event
    }

    enhanceSanction() {
        this.metaConfig.customData.isshowEnhancedDetails = true
        this.config[0].sectionContent.titleData = `Sanction Details`
        this.config[1].sectionContent.paragraphData = `Please Customise Your Loan Details To Best Suit Your Needs`
    }

    enhanceSanctionAmount(status) {
        if (this.commonService.SectionValidationSystem(this.config)) {
            this.commonService.saveSectionFormDataToJourney(this.config, 'SANCTION_DETAILS')
            this.journey = this.commonService.getJourney()
            this.journey.metaData.capturedData['SANCTION_DETAILS'] = {}
            this.journey.metaData.capturedData['SANCTION_DETAILS']['acceptStatus'] = status
            this.localStorage.SessionSetItem('SANCTION_DETAILS', this.journey)
            this.formSubmitFlow()
        }
    }

    fetchRepaymentSchedule() {
        if(this.metaConfig.customData.tenure<this.metaConfig.customData.minTenure){
            this.sharedService.openSnackBar("Please enter valid tenure");
          }
          if(this.metaConfig.customData.loanAmount<this.metaConfig.customData.minLoanAmount){
            this.sharedService.openSnackBar("Please enter valid loan amount");
          }else{
            let params = {
                access_token: this.journey.product.access_token,
                microservicetoken: this.journey.product.oauthAccessToken,
                interestRate: this.metaConfig.customData.interest,
                loanTenure: this.metaConfig.customData.tenure,
                loanAmount: this.metaConfig.customData.loanAmount,
            }
    
            this.theme1ApiService.fetchRepaymentSchedule(params).then((res: any) => {
                if (res.code == '200') {
                    this.commonVariableService.globalLoaderState = false
                    this.metaConfig.customData.emiToBePaid = res.object.emiToBePaid
                    this.metaConfig.chartConfig.centerData.value = res.object.emiToBePaid
                    this.metaConfig.chartConfig.data[0].value = this.metaConfig.customData.loanAmount
                    this.metaConfig.chartConfig.data[1].value = (this.metaConfig.customData.emiToBePaid * this.metaConfig.customData.tenure) - this.metaConfig.customData.loanAmount
                    this.metaConfig.customData.totalPayable = res.object.totalPayable
                    this.metaConfig.customData.totalInterestPaid = res.object.payableInterest
                    this.metaConfig.customData.firstEmiDate = res.object.firstEmiDate
                    this.metaConfig.customData.principal = res.object.principal
                    this.metaConfig.customData.sanctionProceedBtnEnable = true
                    this.chartConfig.updateChart.next()
                    this.showloader = false
                } else {
                    this.commonVariableService.globalLoaderState = false
                    this.showloader = false
                    this.sharedService.openSnackBar(res?.message, 'success');
                }
            }).catch(this.commonService.catchErrors)

          }
       
    }


    Editbranch() {
        let sanctionInfo
        //@ts-ignore
        sanctionInfo = cloneDeep(this.metaConfig.addConfig)
        let dialogRef = this.dialog.open(AddNewItemPopupComponent, {
            panelClass: ['w-70', 'mob-w-100'],
            height: '70%',
            disableClose: true,
            ariaLabel:"popup",
            role:"dialog",
            data: {
                title: '',
                popupContent: sanctionInfo,
                action: 'EDIT',
                journey: this.journey,
                pageCode: "BRANCH_UPDATE"
            }
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result && result == 'DONE') {
                this.fetchLoanDetails()
            }
        })
    }

    returntoSanctionPage() {
        this.metaConfig.customData.sanctionProceedBtnEnable = true
        this.metaConfig.customData.isshowEnhancedDetails = false;
    }

    fetchLoanDetails() {
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            microservicetoken:this.journey.product.oauthAccessToken
        }
        this.theme1ApiService.fetchLoanDetails(params).then((res: any) => {
                if (res.code == '200') {
                    this.metaConfig.customData.BranchDetails.name = `Bank Of India ${res.userHierarchyUnit.userHierarchyUnitName} Branch`
                    this.metaConfig.customData.BranchDetails.address = `${res.userHierarchyUnit.addressAssigned.line1Value} ${res.userHierarchyUnit.addressAssigned.cityValue},${res.userHierarchyUnit.addressAssigned.stateValue},${res.userHierarchyUnit.addressAssigned.zipCodeValue}`
                }
            },
            (_err) => {
                this.commonService.NavigateJourney('PRODUCT_ERROR')
                this.commonVariableService.globalLoaderState = false
                this.showloader = false
            })
    }

    enhanceSanctionSubmit() {
        this.metaConfig.customData.isSanctionEnhanced = true
        this.journey.metaData.capturedData['SANCTION_DETAILS'] = this.metaConfig.customData
        this.commonService.setJourney(this.journey)
        this.formSubmitFlow()
    }
}
