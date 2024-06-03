import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../services/utils/shared.service';
import { CommonVariableService } from '@msme-app/services/common-variable-service';
import { CommonCommonService } from '@msme-app/services/common-common.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input() fileUploadList;
  @Input() options;
  @Input() sendModalData;
  @Input() sendFormData;
  errorText = 'Please fill all mandatory fields';
  showError:boolean = false;
  errorObjList:any = []
  bankName :any = '';
  accountNumber:any; 
  journey: any;
  fileToUpload: File = null;
  uploadedFileList:any = [];
  selectedFile = '';
  
  constructor(public theme1ApiService : ApiService, public sharedService:SharedService,public commonVariableService:CommonVariableService,
    public commonService:CommonCommonService) { }

  ngOnInit(): void {
    this.fileUploadList=this.groupFieldBasedongroup(this.fileUploadList)
  }

  groupFieldBasedongroup(fileUploadList){
    const grouplist: any[] = [];
    const unique: any[] = [...new Set(fileUploadList.map(item => item.groupIndex))];

    unique
        .filter(group => group !== undefined)
        .sort((a, b) => (typeof a === 'number' && typeof b === 'number') ? a - b : 0)
        .forEach(group => {
            const filtered = fileUploadList.filter(e => e.groupIndex === group);
            const fields: any = [...filtered];
            fields.groupName = filtered[0]?.groupName;
            grouplist.push(fields);
        });

    return grouplist;
  }

  

  uploadFiles(target: any) {
    let files = target?.files
    this.journey = this.commonService.getJourney();

    if (this.sendModalData?.parentObj?.documentName === '6 Months Bank Statement' && this.sendModalData?.childObj?.category === 'scannedStatementUpload') {
        if (this.sendFormData !== undefined) {
            this.processSendFormData();
        } else {
            this.showError = true;
        }

        if (files.length !== 0 && this.bankName !== null) {
            this.uploadScannedDocuments(files);
        }
    }

    if (this.sendModalData?.parentObj?.documentName === 'threeMonthSalarySlip' && this.sendModalData?.childObj?.category === 'scannedStatementUpload') {
        if (files.length !== 0) {
            this.uploadSalarySlipDocuments(files);
        }
    }
}


processSendFormData() {
  for (const element of this.sendFormData.fields) {
      if (element.value !== null) {
          this.errorObjList.push('false');
          if (element.fieldName === 'bankName') {
              this.bankName = element.value;
          }
          if (element.fieldName === 'accountNumber') {
              this.accountNumber = element.value;
          }
      } else {
          this.showError = true;
          this.errorObjList.push('true');
      }
  }

  if (this.errorObjList.length !== 0) {
      if (this.errorObjList.includes('true')) {
          this.showError = true;
      }
  }
}


uploadScannedDocuments(files: any) {
  const url = 'api/v1/restPerfiosApi/uploadScannedDocuments';

  for (const element of files) {
      const params = {
          access_token: this.journey?.product?.access_token,
          loanUuid: this.journey.product.productUuid,
          documentCategoryUuid: this.sendModalData.selectedDocumentData.documentTypeUuid,
          accountNumber: this.accountNumber,
          aliasId: this.bankName,
          document: element,
          perfiosTransactionId: this.sendModalData.response.perfiosTransactionId,
          clientTransactionId: this.sendModalData.response.clientTransactionId,
          applicationSource: 'WEB_JOURNEY'
      };

      this.uploadDocAPICall(params, url, element);
  }
}


uploadSalarySlipDocuments(files: any) {
  const url = 'api/v1/restPerfiosApi/uploadSalarySlipDocuments';

  for (const element of files) {
      const params = {
          access_token: this.journey?.product?.access_token,
          loanUuid: this.journey.product.productUuid,
          documentCategoryUuid: this.sendModalData.selectedDocumentData.documentTypeUuid,
          document: element,
          perfiosTransactionId: this.sendModalData?.response?.perfiosTransactionId,
          clientTransactionId: this.sendModalData?.response?.clientTransactionId,
          applicationSource: 'WEB_JOURNEY'
      };

      this.uploadDocAPICall(params, url, element);
  }
}

  uploadDocAPICall(params,url,file) {
  
  this.theme1ApiService.uploadDocument(params,url).then((res:any)=>{
    //this.fileUploadComplete.emit({"fileupload":true,TriggerSection:'FILE_UPLOAD'})
    if(res.code==200){
      this.commonVariableService.selectedFile = file.name;
      this.commonService.getDocumentList();
      this.commonVariableService.disableProceedBtn = false;
      this.sharedService.openSnackBar(res?.message, 'success', res?.status);
    }else if(res.code != 200 || res.status == 'ERROR'){
      this.sharedService.openSnackBar(res?.message, 'error', res?.status);
    }
  },err=>{
    this.sharedService.openSnackBar(err?.message, 'error', err?.status);
  })
  }

  ngOnDestroy() {
    this.commonVariableService.disableProceedBtn = true;
  }
}


