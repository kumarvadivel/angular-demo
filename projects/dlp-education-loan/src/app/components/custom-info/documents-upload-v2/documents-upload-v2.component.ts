import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@el-app/services/common-common.service';
import { CommonVariableService } from '@el-app/services/common-variable-service';
import { ApiService } from '@el-app/services/api.service';
import { SharedService } from '@el-app/shared/services/shared.service';
import { LocalStorage } from '@el-app/shared/helpers/LocalStorage';

@Component({
  selector: 'app-documents-upload-v2',
  templateUrl: './documents-upload-v2.component.html',
  styleUrls: ['./documents-upload-v2.component.scss']
})
export class DocumentsUploadV2Component implements OnInit {

  journey;
    showloader = false
    tabsData: any;
    metaConfig;
    showSubmit = true
    gstNumber
    config: any;
    $scope: any;
    pageCode = 'DOCUMENT_UPLOAD_V2'
    scopeSubscriber: any;
    gst: any;
    storedGST: any;
    bankParams:any;
    showShareSection: boolean = false;
    hideBankSelection: boolean = false;

    constructor(public commonService: CommonCommonService,
                public theme1ApiService: ApiService,
                public commonVariableService: CommonVariableService,
                public sharedService: SharedService,
                private localStorage: LocalStorage,
                public route: ActivatedRoute,
                public router: Router) {
        this.journey = this.commonService.getJourney()
        this.commonService.bindHeaderFooterTypes(this.pageCode)
        this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
        this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    }

    ngOnInit(): void {
        this.dataScopeFetchFlow()
    }

    onSubmit($event) {
        if ($event.length == 15) {
            this.storedGST = $event
        }
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
      if(this.journey.product.productCode == "EDL"){
        this.formdataPrepopulationWithRespectToProduct()
        this.configContentModerationWithRespectToProduct()
        this.parameterSubscriberWithRespectToProduct()
      }
    }

    formdataPrepopulationWithRespectToProduct() {
      if(this.journey.product.productCode == "EDL"){
        this.config = this.commonService.formDataEditDataPopulator(this.config, {...this.$scope, ...this.journey}, this.metaConfig)
      }
    }

    parameterSubscriberWithRespectToProductSimplify(){
        this.route.queryParams.subscribe((params) => {
            if (params.clientTransactionId) {
                let docindx = this.metaConfig.documentList.findIndex(d => d.documentCategoryCode == this.localStorage.SessionGetItem('TRANSACTION_DOCUMENT').documentCategoryCode)
                this.edwDocumentStatusPinger(this.metaConfig.documentList[docindx], 1, true)
            }
            if (params.documentUploadComplete && params.documentUploadComplete == 'true') {
                let docindx = this.metaConfig.documentList.findIndex(d => d.documentCategoryCode == this.localStorage.SessionGetItem('TRANSACTION_DOCUMENT').documentCategoryCode)
                this.edwDocumentStatusPinger(this.metaConfig.documentList[docindx], 1, true)
            }
        })
    }

    parameterSubscriberWithRespectToProduct() {
      if(this.journey.product.productCode == "EDL"){
        this.parameterSubscriberWithRespectToProductSimplify();
        this.hideBankSelection = true;
        this.metaConfig.documentList[0].selectedBank.OB.bankname = "Any bank";
      }
    }

    configContentModerationWithRespectToProductsimplify(){
        this.metaConfig.documentList.forEach(documentObj => {
            documentObj.showDocument = this.commonService.applyJsonLogic(documentObj.showDocument, this.$scope)
        })
        this.metaConfig.documentList = this.metaConfig.documentList.filter(e => e.showDocument === true)
        this.metaConfig.documentList.forEach(documentObj => {
            documentObj['documentData'] = this.$scope.documentTypeFetch.requiredDocuments.find(doc => doc.documentCategoryCode == documentObj.documentCategoryCode && doc.documentFor == documentObj.documentFor)
            documentObj.periodOfData = Number(documentObj.documentData.periodOfData)
            if(documentObj.documentCategoryCode =='DOC17'){
              documentObj = this.calculateMonth(documentObj.periodOfData,documentObj)
            }
            let findeddoc = this.$scope.documentFetch.supportingDocuments.find(d => d.documentCategoryCode == documentObj.documentData.documentCategoryCode && documentObj.documentFor == d.DocumentFor && d.documentUploadedSuccessfully === true)
            if (findeddoc != undefined) {
                this.commonVariableService.globalLoaderState = false
                documentObj.documentUploadStatus = 'COMPLETED'
                documentObj.documentUploadStatuslocalisation = 'Completed'
                this.showShareSection = true;
            }
        })
    }

    configContentModerationWithRespectToProduct() {
      if(this.journey.product.productCode == "MSMERE"){
        this.configContentModerationWithRespectToProductsimplify();
      }
    }

    continue() {
        this.submitValidationForProduct()
    }

    ContinueButtonStatus() {
      if(this.journey.product.productCode == "MSMERE"){
        return this.commonService.SectionMandatoryValidationSystem(this.config)
      }
      return false
    }

    submitValidationForProduct() {
      if(this.journey.product.productCode == "MSMERE"){
        if (this.commonService.SectionValidationSystem(this.config)) {
          this.validationSystemForPtlex()
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

    //------------------------------custom/other methods and varaible should be writtern down below this line------------------
    uploadDocument(option, documentObj) {
        if (option.disabled !== true) {
            let params = {
                access_token: this.journey.product.access_token,
                loanUuid: this.journey.product.loanUuid,
                perfiosAnalysis: option.perfiosAnalysis,
                loanPurposeDocumentCategoryUuid: documentObj.documentData.loanPurposeDocumentCategoryUuid,
                documentCategoryUuid: documentObj.documentData.documentTypeUuid,
                returnUrl: this.returnPLUrl() + '?documentUploadComplete=true'
            }
            this.showloader = true
            switch (documentObj.documentType) {
                case 'BANK_STATEMENT':
                    if (documentObj.selectedBank.OB.bankname) {
                        this.callperfiosmicroservice(params, documentObj)
                    } else {
                        this.showloader = false
                        this.sharedService.openSnackBar('Please Select a bank')
                    }
                    break;
                case 'ITR':
                    params["panNumber"] = this.$scope.borrowerDetails.borrowerDetail.identityNumberTwo
                    this.callperfiosmicroservice(params, documentObj)
                    break;
                case 'GST':
                    params['gstNumber'] = this.storedGST
                    this.callperfiosmicroservice(params, documentObj)
                    break;
            }
        }
    }

    callperfiosmicroservice(params, documentObj) {
        this.theme1ApiService.callMicroservice(params).then((res: any) => {
                if (res.code == '200') {
                    if(documentObj.journeyEventCode){
                        if (Array.isArray(documentObj.journeyEventCode)) {
                            documentObj.jourenyEvent.forEach(j => {
                                this.commonService.journeyEventsExecutor(j)
                            })
                        } else {
                            this.commonService.journeyEventsExecutor(documentObj.journeyEventCode)
                        }
                    }
                    sessionStorage.setItem('TRANSACTION_DOCUMENT', JSON.stringify(documentObj))
                    this.localStorage.SessionSetItem('TRANSACTION_DOCUMENT', documentObj)
                    setTimeout(() => {
                        window.open(res.urlToRedirect, "_self")
                    }, 3000);
                }
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

    fetchDocumentStatus(documentObj, iterationCount) {
        this.showloader = true
        let params = {
            access_token: this.journey.product.access_token,
            clientTransactionId: JSON.parse(sessionStorage.getItem('documentTransactionId'))
        }
        this.theme1ApiService.checkDocumentUploadStatus(params).then((res: any) => {
            if (res.code == '200') {
                if (res.documentRefetch === true) {
                    this.showloader = false
                    documentObj.documentUploadStatus = 'COMPLETED'
                    documentObj.documentUploadStatuslocalisation = 'Completed'
                    this.showShareSection = true;
                } else {
                    if (iterationCount != this.metaConfig.documentStatusCheckData.iteration) {
                        setTimeout(() => {
                            this.fetchDocumentStatus(documentObj, iterationCount + 1)
                        }, this.metaConfig.documentStatusCheckData.iterationDelay * 1000)
                    } else {
                        this.showloader = false
                        this.sharedService.openSnackBar("Please Try Again")
                    }
                    sessionStorage.removeItem('documentTransactionId')
                }
            } else {
                if (iterationCount != this.metaConfig.documentStatusCheckData.iteration) {
                    setTimeout(() => {
                        this.fetchDocumentStatus(documentObj, iterationCount + 1)
                    }, this.metaConfig.documentStatusCheckData.iterationDelay * 1000)
                } else {
                    this.showloader = false
                    this.sharedService.openSnackBar("Please Try Again")
                }
            }
        })
    }

    edwLookupforPtlex(_document, notSubmit?) {
        this.commonVariableService.globalLoaderState = true
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            "newSubStatus": "SUB_STATUS_5",
            "subStatusChangeDescription": "EDW Bank Statement"
        }
        this.edwUpdate(params, notSubmit,_document)
    }

    edwUpdate(params, notSubmit,_document) {
        this.theme1ApiService.updateLoanApplicationStatus(params).then((res: any) => {
            if (res.code == '200') {
                this.edwDocumentStatusPinger(_document, 1, notSubmit)
            } else {
                this.commonVariableService.globalLoaderState = false
            }
        }, _err => {
            this.commonVariableService.globalLoaderState = false
        })
    }

    pingRecursive(iteration,_document,notSubmit){
        if (iteration != this.metaConfig.documentStatusCheckData.iteration) {
            setTimeout(() => {
                this.edwDocumentStatusPinger(_document, iteration + 1, notSubmit)
            }, this.metaConfig.documentStatusCheckData.iterationDelay * 1000)
        } else {
            this.commonVariableService.globalLoaderState = false
            this.commonVariableService.globalLoaderState = false
            this.sharedService.openSnackBar("Please Try Again")
        }
    }

    edwDocumentStatusPinger(_document, iteration, notSubmit?) {
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            microservicetoken:this.journey.product.oauthAccessToken
        }
        this.theme1ApiService.getUploadedDoc(params).then((res: any) => {
            if(res.code=='200' || res.code==undefined){
                let doc = res.supportingDocuments.find(d => d.documentCategoryCode == _document.documentData.documentCategoryCode && _document.documentData.documentFor == d.DocumentFor && d.documentUploadedSuccessfully === true)
                if (doc != undefined) {
                    this.commonVariableService.globalLoaderState = false
                    this.commonVariableService.globalLoaderState = false
                    _document.documentUploadStatus = 'COMPLETED'
                    _document.documentUploadStatuslocalisation = 'Completed'
                    this.showShareSection = true
                    if (!notSubmit) {
                        this.formSubmitFlow()
                    }
                } else {
                this.pingRecursive(iteration,_document,notSubmit)
                }
            }else{
                this.pingRecursive(iteration,_document,notSubmit)
            }
            
        }, _err => {
           this.pingRecursive(iteration,_document,notSubmit)
        })
    }

    updateAccount(accountNumber) {
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            accountNumber: accountNumber,
            microservicetoken: this.journey.product.oauthAccessToken
        }
        this.theme1ApiService.updateSalaryAccount(params).then(undefined,
            (_err) => {
                this.errorNavigate()
            })
    }

    singleDocumentValidate() {
        this.metaConfig.documentList.forEach(doc=>{
            if(doc.documentCategoryCode=='DOC17'){
                switch(doc.selectedBankData.value){
                    case 'Bank of India':
                        if(doc.documentUploadStatus=='COMPLETED'){
                            this.customDataSaverForpage()
                            this.formSubmitFlow()
                        }else{
                          this.edwLookupforPtlex(doc)
                        }
                    break;
                    case 'Other Banks':
                        if(doc.documentUploadStatus=='COMPLETED'){
                            sessionStorage.removeItem('TRANSACTION_DOCUMENT')
                            this.customDataSaverForpage() 
                            this.formSubmitFlow()
                            this.bsaFetch()
                          }else{
                            this.customDataSaverForpage() 
                            this.formSubmitFlow()
                            this.bsaFetch()
                          }
                    break;
                    case null:
                        if (doc.documentUploadStatus == 'COMPLETED') {
                            sessionStorage.removeItem('TRANSACTION_DOCUMENT')
                            this.customDataSaverForpage()
                            this.formSubmitFlow()
                        } else {
                            this.commonVariableService.globalLoaderState = false
                            this.showloader = false
                            this.sharedService.openSnackBar('Please Upload Document')
                        }
                    break;
                }
                
            }
          })
    }

    multiDocumentValidate() {
        let documentValidityStatus = []
        this.metaConfig.documentList.forEach(doc => {
            if ((!doc.documentVariant || doc.documentVariant == 'SINGLE')) {
                if ((doc.documentData.isMandatory === true && doc.documentUploadStatus == 'COMPLETED') || (doc.documentData.isMandatory !== true)) {
                    documentValidityStatus.push({"ok": true})
                } else {
                    documentValidityStatus.push({"ok": false})
                }
            } else {
                let subDocumentValidity = []
                doc.documents.forEach(subDoc => {
                    if (subDoc.documentUploadStatus == 'COMPLETED') {
                        subDocumentValidity.push({"ok": true})
                    } else {
                        subDocumentValidity.push({"ok": false})
                    }
                })
                if (subDocumentValidity.filter(f => f.ok === true).length == 0) {
                    documentValidityStatus.push({"ok": false})
                } else {
                    documentValidityStatus.push({"ok": true})
                }
            }
        })
        return documentValidityStatus
    }

    validationSystemForPtlex() {
        if (this.metaConfig.documentList.length == 1) {
            this.singleDocumentValidate()
        } else {
            this.multiDocumentValidate()
            this.customDataSaverForpage()
            this.formSubmitFlow()
        }
    }

    customDataSaverForpage() {
        this.commonService.saveSectionFormDataToJourney(this.config, this.pageCode)
        this.journey = this.commonService.getJourney()
        let f = this.metaConfig.documentList
        let o = {}
        f.filter(d => d.showDocument === true).forEach((s, i) => {
            o[i] = s
        })
        this.journey.metaData.capturedData.DOCUMENT_UPLOAD_V2 = {
            ...this.journey.metaData.capturedData.DOCUMENT_UPLOAD_V2,
            DOCUMENT_DATA: o
        }
        this.commonService.setJourney(this.journey)
    }

    calculateMonth(period, documentObj) {
        let return_message = ""
        let current_Date = new Date()
        documentObj.currentDate = current_Date.getDate().toString() + current_Date.getMonth().toString() + current_Date.getFullYear().toString()
        const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
            "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
        ];
        return_message = return_message + monthNames[current_Date.getMonth() == 0 ? 11 : current_Date.getMonth() - 1].toString().substring(0, 3) + " " + current_Date.getFullYear()
        let todate = new Date(new Date().setMonth(current_Date.getMonth() - period))
        documentObj.todate = `${todate.getDate().toString().length == 1 ? "0" + todate.getDate().toString() : todate.getDate().toString()}` + `${todate.getMonth().toString().length == 1 ? "0" + todate.getMonth().toString() : todate.getMonth().toString()}` + todate.getFullYear().toString()
        return_message = monthNames[todate.getMonth()].toString().substring(0, 3) + " " + todate.getFullYear() + " to " + return_message;
        documentObj['description'] = return_message
        return documentObj
    }

    changeRadioButton(item, documentObj) {
        documentObj.selectedBankData.value = item.name
    }

    readOrigin() {
        let getOrigin = window.origin;
        return getOrigin.includes('localhost') ? window.origin + "/#" : window.origin + '/msme-renewal' + "/#";
    }

    returnPLUrl() {
        let org = this.readOrigin();
        return org + this.router.url.split('?')[0];
    }

    changeBank(item, documentObj) {
        documentObj.selectedBank.OB.bankname = item.uuid
    }

    bsaFetch() {
        this.commonService.journeyEventsExecutor('BSA_FETCH');
    }

    fetchEdwDocument(documentObj) {
      if(this.journey.product.productCode == "MSMERE"){
        this.edwLookupforPtlex(documentObj, true)
      }
    }

    fileInputTrigger($document) {
        document.getElementById($document.documentData.documentName).click()
    }

    fileChange(documentObj, event) {
        documentObj.uploadedDoc = event.target.files[0]
        documentObj.uploaddone = false
        this.uploadFieldDocument(documentObj)
    }

    uploadFieldDocument(documentObj) {
        let params = {
            access_token: this.journey.product.access_token,
            loanUuid: this.journey.product.loanUuid,
            documentCategoryUuid: documentObj.documentData.documentTypeUuid,
            document: documentObj.uploadedDoc
        }
        this.theme1ApiService.uploadDocumentFile(params).then((res: any) => {
            if (res.code == '200') {
                if (documentObj.journeyEventCode) {
                    if (Array.isArray(documentObj.journeyEventCode)) {
                        documentObj.jourenyEvent.forEach(j => {
                            this.commonService.journeyEventsExecutor(j)
                        })
                    } else {
                        this.commonService.journeyEventsExecutor(documentObj.journeyEventCode)
                    }
                }
                documentObj.uploaddone = true
                documentObj.uploadUuid = res.supportingDocumentUuid
                documentObj.documentUploadStatus = 'COMPLETED'
                documentObj.documentUploadStatuslocalisation = 'Completed'
                this.showShareSection = true;
            } else {
                documentObj.uploaddone = null
                this.sharedService.openSnackBar('Document Upload Failed')
            }
        }, _err => {
            documentObj.uploaddone = null
            this.sharedService.openSnackBar('Document Upload Failed')
        })
    }

}
