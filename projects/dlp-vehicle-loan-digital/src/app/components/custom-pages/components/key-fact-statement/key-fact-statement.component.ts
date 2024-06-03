import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonCommonService} from '@vldigi-app/services/common-common.service';
import {CommonVariableService} from '@vldigi-app/services/common-variable-service';
import {SharedService} from '../../../../shared/services/utils/shared.service';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../../../../shared/components/popup/popup.component';
import {ApiService} from '@vldigi-app/services/api.service';

@Component({
    selector: 'app-key-fact-statement',
    templateUrl: './key-fact-statement.component.html',
    styleUrls: ['./key-fact-statement.component.scss']
})
export class KeyFactStatementComponent implements OnInit {
    journey;
    showloader = false
    tabsData: any;
    metaConfig;
    showSubmit = true
    config: any;
    $scope: any;
    pageCode = 'KEY_FACT_DETAILS'
    scopeSubscriber: any;

    constructor(public commonService: CommonCommonService,
                public theme1ApiService: ApiService,
                public commonVariableService: CommonVariableService,
                public sharedService: SharedService,
                public dialog: MatDialog,
                public router: Router) {
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
        if (this.journey.product.productCode == 'SDVLN') {
            this.formdataPrepopulationWithRespectToProduct()
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == 'SDVLN') {
            this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
        }
    }

    contentModeratorWithRespectToProduct() {
        let current_Date
        if (this.journey.product.productCode == 'SDVLN') {
            current_Date = new Date()
            this.metaConfig.customData.todayDate = current_Date.getDate().toString() + "/" + (current_Date.getMonth() + 1).toString() + "/" + current_Date.getFullYear().toString()
            this.config[8].sectionContent.config.data = this.$scope.fetchRepaymentSchedule.object.repaymentSchedule
            this.config = this.commonService.pageSectionContentModeration(this.config, {
                "$scope": {...this.$scope},
                "journey": {...this.journey},
                "metaConfig": {...this.metaConfig}
            })
        }
    }

    continue(status?) {

        this.submitValidationForProduct(status)
    }

    ContinueButtonStatus() {
        if (this.journey.product.productCode == 'SDVLN') {
            return this.commonService.SectionMandatoryValidationSystem(this.config)
        }
        return false
    }

    submitValidationForProduct(status?, _reason?) {
        if (this.journey.product.productCode == 'SDVLN') {
            this.journey = this.commonService.getJourney()
            if (this.commonService.SectionValidationSystem(this.config)) {
                this.commonVariableService.globalLoaderState = true
                this.commonService.saveSectionFormDataToJourney(this.config, 'KEY_FACT_DETAILS')
                this.journey = this.commonService.getJourney()
                this.journey.metaData.capturedData['KEY_FACT_DETAILS'] = {}
                this.journey.metaData.capturedData['KEY_FACT_DETAILS']['acceptStatus'] = status
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

    sectionBuilderEmitter($event) {
        if (this.journey.product.productCode == 'SDVLN') {
            if ($event.TriggerSection == 'BUTTON') {
                if ($event.data == 'KEYFACT_DOWNLOAD') {
                    this.downloadKeyFactStatement()
                }
                if ($event.data == 'REPAYMENT_SCHEDULE_DOWNLOAD') {
                    this.downloadRepaymentSchedule()
                }
                if ($event.data == 'KEYFACT_ACCEPT') {
                    this.continue('ACCEPT')
                }
                if ($event.data == 'KEYFACT_DECLINE') {
                    this.continue('DECLINE')
                }
            }
        }
    }

    //------------------------------custom/other methods and varaible should be writtern down below this line------------------
    downloadRepaymentSchedule() {
        this.commonService.exportTableDataToExcel(this.config[8].sectionContent.config, 'Repayment Schedule')
    }

    exportAsPDF(divId, divId_parent) {
        if (this.metaConfig.DownloadMode == 'UI') {
            let data_child = document.getElementById(divId);
            let data_parent = document.getElementById(divId_parent)
            data_parent.style.height = `${data_child.scrollHeight + data_child.offsetHeight}px`
        }
        if (this.metaConfig.DownloadMode == 'API') {
            this.downloadKeyFactStatement()
        }
    }

    downloadKeyFactStatement() {
        let params
        if (this.journey.product.productCode == 'SDVLN') {
            params = {
                access_token: this.journey.product.access_token,
                loanUuid: this.journey.product.loanUuid
            }
            this.theme1ApiService.fetchContractToAccept(params).then((res: any) => {
                if (res.code == '200') {
                    let contractToDownload = res.activeContracts.find(c => c.code == 'KFSVL')
                    if (contractToDownload) {
                        this.downloadContract(contractToDownload)
                    } else {
                        this.sharedService.openSnackBar(this.journey.localisation['SWR'])
                    }
                } else {
                    this.sharedService.openSnackBar(this.journey.localisation['SWR'])
                }
            }, () => {
                this.sharedService.openSnackBar(this.journey.localisation['SWR'])
            })
        }
    }

    downloadContract(contract) {
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            contractUuid: contract.contractUuid
        }
        this.theme1ApiService.downloadContract(params)
    }

    openPopup() {
        let dialogRef = this.dialog.open(PopupComponent, {
            panelClass: ['w-50', 'mob-w-100'],
            height: '50%',
            disableClose: true,
            ariaLabel:"popup",
            role:"dialog",
            data: {
                title: 'Please select valid reason for rejection',
                popupContent: this.commonVariableService.rejectionConsent,
                pageCode: this.pageCode,
                showBtns: true,
                journey: this.journey
            }
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result.action == "submit") {
                this.submitValidationForProduct("DECLINE", result.value.reason);
            }
        })
    }
}
