import { Component, Injector, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '@cc-app/services/api.service';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { IframeComponent } from '@cc-app/shared/components/iframe/iframe.component';
import { UploadScanDocComponent } from '@cc-app/shared/components/upload-scan-doc/upload-scan-doc.component';
import { SharedService } from '@cc-app/shared/services/utils/shared.service';
import { EMP_TYPE } from '../../credit-card.constant';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documentMasterDate = [];
  availableDocument: any = {};
  employerType = EMP_TYPE;
  isForCreditCard = true;
  journey: any;
  showloader = false;
  metaConfig;
  config: any
  documentUploadList: any = [];
  selectedDocumentData: any;
  isBrand = false
  isOtherBankSelected = false
  errorText = 'Please fill all mandatory fields';
  showError: boolean = false;
  fileToUpload: File = null;
  uploadedFileList: any = [];
  selectedFile = '';
  pageCode = "DOCUMENT_LIST";
  dialog: MatDialog;
  router: Router;
  constructor(
    public commonService: CommonCommonService,
    public apiService: ApiService,
    public commonVariableService: CommonVariableService,
    public sharedService: SharedService,
    private localStorage: LocalStorage,
    public submitFlowApiService: SubmitFlowApiService,
    private injector: Injector) {
    this.journey = this.commonService.getJourney()
    this.commonService.bindHeaderFooterTypes(this.pageCode)
    this.config = this.commonService.fetchProductPageConfig(this.journey, this.pageCode)
    this.metaConfig = this.commonService.fetchProductMetaConfig(this.journey, this.pageCode)
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.router = this.injector.get<Router>(Router);
  }

  ngOnInit(): void {
    this.journey = this.commonService.getJourney();
    this.commonVariableService.documentList = this.commonService.fetchProductDocumentList(this.journey);
    this.localStorage.SessionSetItem('STATIC_DOCUMENT_LIST', this.commonVariableService.documentList);
    this.getDocMasterData();
    this.fetchBorrowerDetails();
    this.getBorrowerDetails();
    this.getRequiredDoc();
    this.customisationInitialisationsBasedOnproduct();
    this.getDocumentListAadhaar();
  }

  fetchBorrowerDetails() {
    this.journey = this.getJourney();
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey?.product?.loanUuid;
    params['microservicetoken'] = this.journey?.product?.oauthAccessToken;

    this.apiService.fetchBorrowerDetails(params).then((res: any) => {
      if (res?.code == 200) {
        this.commonVariableService.borrowerDetails = res;
        this.employerType = res.borrowerDetail.borrowerEmploymentType;
        this.localStorage.SessionSetItem('BORROWER_DETAILS', this.commonVariableService.borrowerDetails);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  getBorrowerDetails() {
    this.journey = this.getJourney()
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey?.product?.loanUuid;
    params['microservicetoken'] = this.journey.product.oauthAccessToken;
    this.apiService.borrowerDetails(params).then((res: any) => {
      if (res?.code == 200) {
        this.commonVariableService.borrowerDetails = res;
        this.localStorage.SessionSetItem('BORROWER_DETAILS', this.commonVariableService.borrowerDetails)
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  getDocumentListAadhaar() {
    this.journey = this.getJourney();
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey?.product?.loanUuid
    params['microservicetoken'] = this.journey.product.oauthAccessToken;
    this.apiService.getUploadedDoc(params).then((res: any) => {
      let resp = res.supportingDocuments
      resp?.forEach(data => {
        if (data && data.DocumentCateoryType === 'AADHAR_CARD') {
          this.availableDocument = data;
        }
      })
    })
  }

  getRequiredDoc() {
    this.journey = this.commonService.getJourney()
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanPurposeUuid'] = this.journey.product.loanPurposeUuid ? this.journey.product.loanPurposeUuid : this.journey.product.userId;
    params['microservicetoken'] = this.journey.product.oauthAccessToken;

    this.apiService.getSupportingDoc(params).then((res: any) => {
      this.commonVariableService.reqSupportingDocList = res.requiredDocuments;
      this.localStorage.SessionSetItem('REQUIRED_SUPPORTING_DOCUMENTS', this.commonVariableService.reqSupportingDocList);
      this.getDocumentList();
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }


  getDocMasterData() {
    const params = {
      access_token: this.journey?.product?.access_token,
      loanPurposeUuid: this.journey.product.loanPurposeUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    };

    this.apiService.getSupportingDoc(params)
      .then((resp: any) => {
        this.documentMasterDate = resp.requiredDocuments;
        this.filterSelectedDocumentData();
        this.getDocumentList();
      })
      .catch(() => {
        this.sharedService.openSnackBar('Something went wrong', 'error', 400);
      });
  }

  filterSelectedDocumentData() {
    const documentList = this.commonVariableService.documentList;
    const isForCreditCard = this.isForCreditCard;
    const docCategoryCode = documentList.documentCategoryCode;

    this.documentMasterDate?.forEach(item => {
      const isDocCategoryMatch = this.isDocCategoryMatch(item, docCategoryCode, isForCreditCard);
      const isLoanPurposeDocMatch = this.isLoanPurposeDocMatch(item, docCategoryCode);

      if (isDocCategoryMatch || isLoanPurposeDocMatch) {
        if (item.documentFor === 'MAIN_APPLICANT' || (item.documentCategoryCode !== 'DOC55' && item.loanPurposeDocumentCategoryCode !== 'DOC55')) {
          this.selectedDocumentData = item;
          return;
        }
      }
    });
  }

  isDocCategoryMatch(item, docCategoryCode, isForCreditCard) {
    return (
      item.documentCategoryCode === docCategoryCode &&
      !isForCreditCard
    );
  }

  isLoanPurposeDocMatch(item, docCategoryCode) {
    return (
      item.documentCategoryCode === docCategoryCode &&
      item.loanPurposeDocumentCategoryCode === docCategoryCode
    );
  }  

  callMicroService_subMethod1(data){
    for (const element of this.commonVariableService.reqSupportingDocList) {
      if (data.documentCategoryCode == element.documentCategoryCode) {
        this.selectedDocumentData = element;
      }
    }
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey.product.loanUuid;
    params['documentCategoryUuid'] = this.selectedDocumentData?.documentTypeUuid;
    params['loanPurposeDocumentCategoryUuid'] = this.selectedDocumentData?.loanPurposeDocumentCategoryUuid;
    params['perfiosAnalysis'] = data.category;
    params['returnUrl'] = this.readOrigin()
    this.apiService.callMicroservice(params).then((res: any) => {
      if (res.code == 200) {
        window.open(res.urlToRedirect, '_self', 'height=800,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
      } else if (res.code != 200 || res.status == 'ERROR') {
        this.sharedService.openSnackBar(res?.message, 'error', res?.status);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  callMicroService_subMethod2(data){
    for (const element of this.commonVariableService.reqSupportingDocList) {
      if (data.documentCategoryCode == element.documentCategoryCode) {
        this.selectedDocumentData = element;
      }
    }
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey.product.loanUuid;
    params['documentCategoryUuid'] = this.selectedDocumentData?.documentTypeUuid;
    params['loanPurposeDocumentCategoryUuid'] = this.selectedDocumentData?.loanPurposeDocumentCategoryUuid;
    params['perfiosAnalysis'] = data.category;
    params['returnUrl'] = this.readOrigin()
    this.apiService.callMicroservice(params).then((res: any) => {
      if (res.code == 200) {
        let resData = {
          clientTransactionId: res.clientTransactionId,
          perfiosTransactionId: res.perfiosTransactionId,
        }
        this.uploadScanDoc(this.selectedDocumentData, data, document, resData, 'fields_with_upload')
      } else if (res.code != 200 || res.status == 'ERROR') {
        this.sharedService.openSnackBar(res?.message, 'error', res?.status);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  callMicroService_subMethod3(data){
    for (const element of this.commonVariableService.reqSupportingDocList) {
      if (data.documentCategoryCode == element.documentCategoryCode) {
        this.selectedDocumentData = element;
      }
    }
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey.product.loanUuid;
    params['documentCategoryUuid'] = this.selectedDocumentData.documentTypeUuid;
    params['loanPurposeDocumentCategoryUuid'] = this.selectedDocumentData.loanPurposeDocumentCategoryUuid;
    params['perfiosAnalysis'] = data.category;
    params['returnUrl'] = this.readOrigin()
    this.apiService.callMicroservice(params).then((res: any) => {
      if (res.code == 200) {
        this.openIframeModal(res, data, document);
      } else if (res.code != 200 || res.status == 'ERROR') {
        this.sharedService.openSnackBar(res?.message ? res?.message : 'Something went wrong!', 'error', res?.status);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  callMicroService_subMethod4(data){
    for (const element of this.commonVariableService.reqSupportingDocList) {
      if (data.documentCategoryCode == element.documentCategoryCode) {
        this.selectedDocumentData = element;
      }
    }
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey.product?.loanUuid;
    params['documentCategoryUuid'] = this.selectedDocumentData?.documentTypeUuid;
    params['loanPurposeDocumentCategoryUuid'] = this.selectedDocumentData?.loanPurposeDocumentCategoryUuid;
    params['perfiosAnalysis'] = data.category;
    params['returnUrl'] = this.readOrigin()
    this.apiService.initiatePaySlip(params).then(() => {
      this.uploadScanDoc(this.selectedDocumentData, data, document, 'ytyy', 'only_upload')
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  callMicroService_subMethod5(data){
    for (const element of this.commonVariableService.reqSupportingDocList) {
      if (data.documentCategoryCode == element.documentCategoryCode) {
        this.selectedDocumentData = element;
      }
    }
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey.product.loanUuid;
    params['documentCategoryUuid'] = this.selectedDocumentData.documentTypeUuid;
    params['loanPurposeDocumentCategoryUuid'] = this.selectedDocumentData?.loanPurposeDocumentCategoryUuid;
    params['perfiosAnalysis'] = data.category;
    params['returnUrl'] = window.origin + this.router.url;
    params['panNumber'] = this.commonVariableService.borrowerDetails.borrowerDetail.identityNumberTwo;
    this.openIframeModalMethod(params, data)
  }

  callMicroService_subMethod6(data){
    for (const element of this.commonVariableService.reqSupportingDocList) {
      if (data.documentCategoryCode == element.documentCategoryCode) {
        this.selectedDocumentData = element;
      }
    }
    let params = {};
    params['access_token'] = this.journey?.product?.access_token;
    params['loanUuid'] = this.journey.product.loanUuid;
    params['documentCategoryUuid'] = this.selectedDocumentData?.documentTypeUuid;
    params['loanPurposeDocumentCategoryUuid'] = this.selectedDocumentData?.loanPurposeDocumentCategoryUuid;
    params['perfiosAnalysis'] = data.category;
    params['returnUrl'] = this.readOrigin()
    params['panNumber'] = this.commonVariableService.borrowerDetails.borrowerDetail.identityNumberTwo;
    this.openIframeModalMethod(params, data)
  }

  openIframeModalMethod(params, data){
    this.apiService.callMicroservice(params).then((res: any) => {
      if (res.code == 200) {
        this.openIframeModal(res, data, document);
      } else if (res.code != 200 || res.status == 'ERROR') {
        this.sharedService.openSnackBar(res?.message, 'error', res?.status);
      }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  callMicroService(data, document) {
    this.commonVariableService.reqSupportingDocList = this.localStorage.SessionGetItem('REQUIRED_SUPPORTING_DOCUMENTS');
    this.commonVariableService.borrowerDetails = this.localStorage.SessionGetItem('BORROWER_DETAILS')
    if (document.documentName == '6 Months Bank Statement') {
      if (data?.category != 'scannedStatementUpload') {
        this.callMicroService_subMethod1(data);
      } else {
        this.callMicroService_subMethod2(data);
      }
    } else if (document.documentName === 'threeMonthSalarySlip') {
      if (data.category != 'scannedStatementUpload') {
        this.callMicroService_subMethod3(data);
      } else {
        this.callMicroService_subMethod4(data);
      }
    } else if (document.documentName === 'incomeTaxReturnofLastYears') {
      if (data.category != 'scannedStatementUpload') {
        this.callMicroService_subMethod5(data)
      } else {
        this.callMicroService_subMethod6(data)
      }
    }
  }



  openIframeModal(response, data, document) {
    const dialogRef = this.dialog.open(IframeComponent, {
      role:"dialog",
      ariaLabel:"popup",
      panelClass: ['iframe-panel', 'mob-w-90'],
      data: { "response": response, "size": 'large', 'childObj': data, 'parentObj': document },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe();
  }

  uploadScanDoc(selectedDocument, data?, document?, resData?, type?) {
    this.dialog.open(UploadScanDocComponent, {
      panelClass: ['common-popup', 'w-500', 'mob-w-90'],
      disableClose: true,
      role:"dialog",
      ariaLabel:"popup",
      data: {
        title: 'Upload Scanned Document',
        selectedDocumentData: selectedDocument,
        childObj: data,
        parentObj: document,
        response: resData,
        type: type
      }
    })
  }

  uploadFiles(files: FileList, data) {
    const reqSupportingDocList = this.localStorage.SessionGetItem('REQUIRED_SUPPORTING_DOCUMENTS');
    const selectedDocumentData = reqSupportingDocList.find(reqDoc => reqDoc.loanPurposeDocumentCategoryCode === data.loanPurposeDocumentCategoryCode);
  
    if (!selectedDocumentData) {
      return;
    }
  
    const aliasUuid = selectedDocumentData.alias?.find(element => element.name === 'Udyam Registration')?.uuid;
  
    const journey = this.commonService.getJourney();
    const params = {
      access_token: journey?.product?.access_token,
      loanUuid: journey.product.loanUuid,
      documentCategoryUuid: selectedDocumentData.documentTypeUuid,
      aliasUuid,
      microservicetoken:this.journey.product.oauthAccessToken
    };
  
    if (files.length !== 0) {
      const url = '/api-v3/borrower/uploadDocument';
  
      Array.from(files).forEach(file => {
        this.selectedFile = file.name;
        params['document'] = file;
  
        this.apiService.uploadDocument(params, url).then(
          (res: any) => {
            if (res.code == 200) {
              this.commonVariableService.selectedFile = this.selectedFile;
              this.sharedService.openSnackBar(res?.message, 'success', res?.status);
              this.getDocumentList();
            } else if (res.code != 200 || res.status == 'ERROR') {
              this.sharedService.openSnackBar(res?.message, 'error', res?.status);
            }
          },
          err => {
            this.sharedService.openSnackBar(err?.message, 'error', err?.status);
          }
        );
      });
    }
  }

  continue() {
    if (this.commonService.SectionValidationSystem(this.config)) {
      this.customValidationSystem()
    }
  }

  deleteDocument(data) {
    this.journey = this.commonService.getJourney()
    let params = {}
    params['access_token'] = this.journey?.product?.access_token;
    params['supportingDocumentUuid'] = data.uuid
    this.apiService.deleteDoc(params).then((res: any) => {
      this.sharedService.openSnackBar(res?.responseAttr?.success, 'success', res?.status);
      this.getDocumentList();
      // }else if(res.code != 200 || res.status == 'ERROR'){
      //   this.sharedService.openSnackBar(res?.success, 'error', res?.status);
      // }
    }, err => {
      this.sharedService.openSnackBar(err?.message, 'error', err?.status);
    })
  }

  onChange(item) {
    if (item.key == "BOI") {
      this.isBrand = true
      this.isOtherBankSelected = false
    }
    else {
      this.isBrand = false
      this.isOtherBankSelected = true
    }
  }

  customisationInitialisationsBasedOnproduct() {
    let params = {
      access_token: this.journey.product.access_token,
      loanUuid: this.journey.product.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    }
    this.apiService.fetchLoanDetails(params).then((res: any) => {
      this.config[1].sectionContent.paragraphData = `${this.config[1].sectionContent.paragraphData} ${res.loanDetails.crmLeadId || res.loanDetails.loanId}`
    })
  }

  otherBankModeSelect(mode) {
    switch (mode) {
      case 'AA':

        break;
      case 'NB':

        break;
    }
  }

  formSubmitFlow() {
    if (this.metaConfig.formSubmitFlow) {
      this.commonService.setJourney(this.journey)
      if (this.metaConfig.formSubmitFlow.length) {
        this.submitFlowApiService.apiCall(this.metaConfig.formSubmitFlow[0], 0, this.metaConfig.formSubmitFlow.length, this.pageCode, this.metaConfig, this.config)
      } else {
        this.commonService.proceedJourney(this.pageCode, undefined, this.config)
        this.commonVariableService.globalLoaderState = false
      }
    } else {
      this.commonService.proceedJourney(this.pageCode, undefined, this.config)
      this.commonVariableService.globalLoaderState = false
    }
  }

  customValidationSystem() {
    this.formSubmitFlow();
  }

  validationSystemForKcc() {
    let documentValidityStatus = []
    if (this.commonVariableService.documentList.length == 1) {
      documentValidityStatus = this.commonVariableService.documentList.map(document => {
        if (document.documentCategoryCode == 'DOC66') {
          if (document.required) {
            if (document.itemUploaded) {
              return { "ok": true }
            }
            else {
              return { "ok": false }
            }
          }

        }
      })
    }
    return documentValidityStatus
  }

  getDocumentList() {
    let params = {
      access_token: this.journey?.product?.access_token,
      loanUuid: this.journey?.product?.loanUuid,
      microservicetoken: this.journey.product.oauthAccessToken
    };

    this.apiService.getUploadedDoc(params)
      .then((res: any) => {
        this.commonVariableService.uploadedDocList = res.supportingDocuments.filter((obj) => obj.size > 0);
        this.localStorage.SessionSetItem("UPLOADED_DOC_LIST", this.commonVariableService.uploadedDocList);

        this.setCommonVariableServiceProperties();
        this.updateDocumentListWithUploadedValues();
      })
      .catch((err) => {
        this.sharedService.openSnackBar(err?.message, "error", err?.status);
      });
  }
  
  setCommonVariableServiceProperties() {
    this.commonVariableService.reqSupportingDocList = this.localStorage.SessionGetItem("REQUIRED_SUPPORTING_DOCUMENTS");
    this.commonVariableService.documentList = this.localStorage.SessionGetItem("STATIC_DOCUMENT_LIST");
  }
  
  updateDocumentListWithUploadedValues() {
    this.commonVariableService.uploadedDocList?.forEach((data) => {
      this.commonVariableService.reqSupportingDocList.forEach((item) => {
        if (data.DocumentCategoryUuid == item.documentTypeUuid){
        this.commonVariableService.documentList.forEach((element) => {
          let documents = element.documentList;
  
          documents.forEach((name) => {
            if (item.documentCategoryCode == "DOC19") {
              this.updateUdyamDoc(data, name, element);
            } else if (item.documentCategoryCode == "DOC88") {
              this.updateOtherDoc(data, name, element);
            } else if (item.documentCategoryCode == "DOC55") {
              this.updateSalaryDoc(data, name, element);
            } else if (item.documentCategoryCode == "DOC66") {
              this.updateScannedStatementUpload(data, name, element);
            }else if(item.loanPurposeDocumentCategoryCode=="DOC2") {
              this.updateSelfUpload(data,name,element)
            }
             else {
              this.updateDefaultDocs(data, name, element,item);
            }
          });
        });
      }
      });
    });
  }
  
  updateUdyamDoc(data, name, element) {
    if (data.aliasName == "Udyam Registration" && name.category == "udayamdoc") {
      name.uploadedValue = data.Name;
      name.uuid = data.documentUuid;
      name.uploadFailed = data.documentUploadStatus;
      if (name.uploadedValue) {
        element.itemUploaded = true;
      }
    }
  }
  
  updateOtherDoc(data, name, element) {
    if (data.categoryName == "Other Documents" && name.category == "otherDoc") {
      name.uploadedValue = data.Name;
      name.uuid = data.documentUuid;
      name.uploadFailed = data.documentUploadStatus;
      if (name.uploadedValue) {
        element.itemUploaded = true;
      }
    }
  }
  
  updateSalaryDoc(data, name, element) {
    if (data.aliasName == "Personal Loan" && name.category == "salary") {
      name.uploadedValue = data.Name;
      name.uuid = data.documentUuid;
      name.uploadFailed = data.documentUploadStatus;
      if (name.uploadedValue) {
        element.itemUploaded = true;
      }
    }
  }
  
  updateScannedStatementUpload(data, name, element) {
    if (name.category == "statementUpload") {
      name.uploadedValue = data.Name;
      name.uuid = data.documentUuid;
      name.uploadFailed = data.documentUploadStatus;
      if (name.uploadedValue) {
        element.itemUploaded = true;
      }
    }
  }
  updateSelfUpload(data,name,element) {
    if (name.category == "self" && data.DocumentCateoryType=="SALARY") {
      name.uploadedValue = data.Name;
      name.uuid = data.documentUuid;
      name.uploadFailed = data.documentUploadStatus;
      if (name.uploadedValue) {
        element.itemUploaded = true;
      }
    }
  }
  
  updateDefaultDocs(data, name, element, item) {
    const { documentType, Name, documentUuid } = data;
    if (
      (name.documentCategoryCode === "DOC17" ||
        name.documentCategoryCode === "DOC70" ||
        name.documentCategoryCode === "DOC14")
    ) {
      if (element.loanPurposeDocumentCategoryCode == item.loanPurposeDocumentCategoryCode) {
        this.updateDefaultDocsSimply(documentType, Name, documentUuid, element, name)
      }
    }
  }

  updateDefaultDocsSimply(documentType, Name, documentUuid, element, name){
    switch (documentType) {
      case "ONLINE_FETCH":
        if (name.category === "onlineFetch") {
          name.uploadedValue = Name;
          name.uuid = documentUuid;
          element.itemUploaded = !!name.uploadedValue;
        }
        break;
      case "STATEMENT_UPLOAD":
        if (name.category === "scannedStatementUpload") {
          name.uploadedValue = '';
          name.uuid = documentUuid;
          element.itemUploaded = !!name.uploadedValue;
        }
        break;
      case "SCANNED_BANK_STATEMENTS":
        if (name.category === "statementUpload") {
          name.uploadedValue = 'File Received';
          name.uuid = documentUuid;
          element.itemUploaded = !!name.uploadedValue;
        }
        break;
    }
  }

  setJourney(journey) {
    this.localStorage.SessionSetItem("CURRENT_JOURNEY", journey);
  }
  getJourney() {
    return this.localStorage.SessionGetItem("CURRENT_JOURNEY");
  }
  readOrigin() {
    let getOrigin = window.origin;
    const returnWithOrigin = getOrigin.includes('localhost') ? window.origin+"/"+"#" + this.router.url: window.origin+"/"+"credit-card/"+"#" + this.router.url
    sessionStorage.setItem('returnWithOrigin', returnWithOrigin);
    return returnWithOrigin;
  }

}
