import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonCommonService} from '@kcc-renewal-app/services/common-common.service';
import {CommonVariableService} from '@kcc-renewal-app/services/common-variable-service';
import {SharedService} from '../../../../shared/services/utils/shared.service';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../../../../shared/components/popup/popup.component';
import {ApiService} from '@kcc-renewal-app/services/api.service';

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
            this.parametersubscriberwithRespectToProduct();
            this.contentModeratorWithRespectToProduct()
        }
    }

    formdataPrepopulationWithRespectToProduct() {
        if (this.journey.product.productCode == '1000290') {
            this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
        }
    }
    parametersubscriberwithRespectToProduct(){
        this.route.queryParams.subscribe((params: any) => {
            if (params.eSignStatus) {
                if (params.eSignStatus == 'success') {
                    this.formSubmitFlow()
                }
                if (params.eSignStatus == 'error') {
                    this.formSubmitFlow()
                }
            }
        })
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

    continue(_status?) {
        this.showloader = true
        let data = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            subStatusToBeChanged:"SUB_STATUS_6",
            statusChangeDescription:"esign initiate",
            applicationSource:"WEB_JOURNEY"
        }
        this.updateApplicationStatus(data)
    }
    updateApplicationStatus(data){
        this.theme1ApiService.updateLoanApplicationStatus(data).then((res:any)=>{
            if(res.code == "200"){
                let params1 = {
                    access_token: this.journey.product.access_token,
                    loanUuid: this.journey.product.loanUuid,
                    forESign: true,
                    isDownload:false
                }
                this.theme1ApiService.fetchContractToAccept(params1).then((res1: any) => {
                    if(res1.code != "404"){
                        this.$scope['fetchContracts'] = res1
                        this.metaConfig['customData'] = {}
                        this.metaConfig['customData']['SelectedContract'] = res1.activeContracts[0]
                        this.acceptContract()
                    }else{
                        this.errorNavigate()
                    }
                    },
                (_err) => {
                    this.errorNavigate()
                })
            }else{
                this.errorNavigate()
            }
        })
    }
    ContinueButtonStatus() {
        if (this.journey.product.productCode == '1000290') {
            return this.commonService.SectionMandatoryValidationSystem(this.config)
        }
        return false
    }

    submitValidationForProduct(status?, _reason?) {
        if (this.journey.product.productCode == '1000290') {
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

    sectionBuilderEmitter($event) {
        if (this.journey.product.productCode == '1000290') {
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

    acceptContract() {
        let params1 = {
            access_token: this.journey.product.access_token,
            loanId: this.journey.product.loanUuid,
            contractId: this.$scope.fetchContracts.activeContracts[0].contractUuid,
            activityStatus: 'acceptContract',
            microservicetoken:this.journey.product.oauthAccessToken
        }
        this.theme1ApiService.acceptContract(params1).then((res1: any) => {
                this.$scope['acceptContract'] = res1
                this.initiateEsign('kcc-renewal')
            },
            (_err) => {
                this.errorNavigate()
            })
    }

    errorNavigate() {
        this.commonService.NavigateJourney('PRODUCT_ERROR')
        this.commonVariableService.globalLoaderState = false
        this.showloader = false
    }

    initiateEsign(productName) {
        let params = {
            "access_token": this.journey.product.access_token,
            "loanUuid": this.journey.product.loanUuid,
            "contractUuid": this.$scope.fetchContracts.activeContracts[0].contractUuid,
            "successUrl": this.returnPLUrl(productName) + `?eSignStatus=success`,
            "errorUrl": this.returnPLUrl(productName) + `?eSignStatus=error`,
            "f2f": true
        }
        this.theme1ApiService.initiateEsign(params).then((res: any) => {
                this.journey.metaData.capturedData['ESIGN'] = res
                this.commonService.setJourney(this.journey)
                let decodeHtml = window.atob(res.docHtml);
                let fileHtml = new Blob([decodeHtml], {type: 'text/html'});
                let fileURL = URL.createObjectURL(fileHtml);
                window.open(fileURL, '_self');
                this.commonVariableService.globalLoaderState = false
            },
            (_err) => {
                this.errorNavigate()
            })
    }

    readOrigin() {
        let getOrigin = window.origin;
        return getOrigin.includes('localhost') ? window.origin + "/#" : window.origin + '/kcc-renewal' + "/#";
    }

    returnPLUrl(_productName) {
        let org = this.readOrigin();
        return org + this.router.url.split('?')[0];
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
        if (this.journey.product.productCode == '1000290') {
            params = {
                access_token: this.journey.product.access_token,
                loanUuid: this.journey.product.loanUuid,
                isDownload:true
            }
            this.theme1ApiService.fetchContractToAccept(params).then((res: any) => {
                if (res.code == '200') {
                    let contractToDownload = res.activeContracts.find(c => c.code == 'KCCRENEWALWEB_KFS')
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
