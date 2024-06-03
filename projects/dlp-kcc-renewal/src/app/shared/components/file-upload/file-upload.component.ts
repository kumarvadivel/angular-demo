import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../services/utils/shared.service';
import { CommonVariableService } from '@kcc-renewal-app/services/common-variable-service';
import { CommonCommonService } from '@kcc-renewal-app/services/common-common.service';

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

  

  uploadFiles(_target: any) {
    this.journey = this.commonService.getJourney();

    if (this.sendModalData?.parentObj?.documentName === '6 Months Bank Statement' && this.sendModalData?.childObj?.category === 'scannedStatementUpload') {
        if (this.sendFormData !== undefined) {
            this.processSendFormData();
        } else {
            this.showError = true;
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

  ngOnDestroy() {
    this.commonVariableService.disableProceedBtn = true;
  }
}


