import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CommonCommonService } from '@pmmy-app/services/common-common.service';
import { CommonVariableService } from '@pmmy-app/services/common-variable-service';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../services/utils/shared.service';

@Component({
  selector: 'app-upload-scan-doc',
  templateUrl: './upload-scan-doc.component.html',
  styleUrls: ['./upload-scan-doc.component.scss']
})
export class UploadScanDocComponent implements OnInit {

  @Output() sendModalData = new EventEmitter<any>();
  journey:any;
  constructor(public dialogRef: MatDialogRef<UploadScanDocComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public commonService:CommonCommonService,public theme1ApiService : ApiService,
    public commonVariableService:CommonVariableService,public sharedService:SharedService) { }
    uploadScandocfields:any = [];

    commonProperty_static= {
      'BANK_NAMES':[
        ]
    }


    uploadBankStatements = [
      {
        "componentType":"FORM",
        "className":'mb-3 w-100 medium',
        "validateSection":true,
        "mandatory":true,
        "sectionContent":{
          "options":{'columnSize':1},
          "isShow":true,
          "fields": [
            {
              "fieldDataType":"DROPDOWN",
              "dependentField":null,
              "isMandatory":true,
              "fieldLabel": "Name Of The Bank",
              "fieldAccessModifier":"EDITABLE", 
              "minLength":6,
              "maxLength":15,
              "error":null,
              "value":null,
              "validationJson":null,
              "rulesFor":null,
              "regex":null,
              "regexErrorMessage":null,
              "errorIconPath":null,
              "rowNo":null,
              "columnNo":null,
              "placeholderText":"- Select Bank -",
              "fieldName":"bankName",
              "showLabel":true,
              "labelInfo":null,
              "groupIndex":null,
              "showField":true,
              "options":this.commonProperty_static.BANK_NAMES,
              "searchOptions":[{}]
            },
              {
              "fieldDataType":"NUMBER",
              "isMandatory":true,
              "fieldLabel": "Account Number",
              "fieldAccessModifier":"EDITABLE",
              "minLength":null,
              "maxLength":null,
              "error":null,
              "value":null,
              "validationJson":null,
              "rulesFor":null,
              "regex":null,
              "regexErrorMessage":null,
              "rowNo":null,
              "columnNo":null,
              "placeholderText":"Enter Valid Account Number",
              "fieldName":"accountNumber",
              "labelInfo":null,
              "showLabel":true,
              "groupName":null,
              "groupIndex":null,
              "showField":true
              }
          ],
          validityEmitter:new Subject<void>(),
          formValueEmitter:new Subject<void>()
        },
      },
      {
      "componentType":"FILE_UPLOAD",
        "className":'mb-3 w-100 medium',
        "validateSection":true,
        "mandatory":true,
        "sectionContent":{
          "options":{'columnSize':1},
          "isShow":true,
          "fields": [
              {
                "fieldDataType":"FILEUPLOAD",
                "isMandatory":true,
                "fieldLabel": "File Upload",
                "fieldAccessModifier":"EDITABLE", 
                "minLength":null,
                "maxLength":null,
                "error":null,
                "value":null,
                "validationJson":null,
                "rulesFor":null,
                "regex":null,
                "regexErrorMessage":null,
                "rowNo":null,
                "columnNo":null,
                "placeholderText":"",
                "fieldName":"uploadFile",
                "labelInfo":null,
                "showLabel":true,
                "groupName":null,
                "groupIndex":null,
                "showField":true
                }
          ],
          validityEmitter:new Subject<void>(),
          formValueEmitter:new Subject<void>()
        }
      }
    ]
     
    uploadFields = [
      {
        "componentType":"FILE_UPLOAD",
          "className":'mb-3 w-100 medium',
          "validateSection":true,
          "mandatory":true,
          "sectionContent":{
            "options":{'columnSize':1},
            "isShow":true,
            "fields": [
                {
                  "fieldDataType":"FILEUPLOAD",
                  "isMandatory":true,
                  "fieldLabel": "File Upload",
                  "fieldAccessModifier":"EDITABLE", 
                  "minLength":null,
                  "maxLength":null,
                  "error":null,
                  "value":null,
                  "validationJson":null,
                  "rulesFor":null,
                  "regex":null,
                  "regexErrorMessage":null,
                  "rowNo":null,
                  "columnNo":null,
                  "placeholderText":"",
                  "fieldName":"uploadFile",
                  "labelInfo":null,
                  "showLabel":true,
                  "groupName":null,
                  "groupIndex":null,
                  "showField":true
                  }
            ],
            validityEmitter:new Subject<void>(),
            formValueEmitter:new Subject<void>()
          }
        }
    ]

  ngOnInit(): void {
    this.commonVariableService.disableProceedBtn = true;
    if(this.data?.type == 'fields_with_upload') {
      for(let i of this.data.selectedDocumentData.alias){
            this.commonProperty_static.BANK_NAMES.push({
              'optionName' : i.name,
              'optionKey' : i.uuid,
              'optionCode' : i.code
          })
      }
      this.uploadScandocfields = this.uploadBankStatements;
    } 
    if(this.data?.type == 'only_upload') {
      this.uploadScandocfields = this.uploadFields;
    }
  }

  completeTransaction(){
    this.journey = this.commonService.getJourney()
    let params = {}
    params['access_token']= this.journey?.product?.access_token;
    params['perfiosTransactionId']= this.data?.response?.perfiosTransactionId;
    params['loanPurposeDocumentCategoryUuid']=this.data?.selectedDocumentData?.loanPurposeDocumentCategoryUuid;
    if(this.data.parentObj.documentName == '6 Months Bank Statement' && this.data.childObj.category == 'scannedStatementUpload') {
      let url = 'api/v1/restPerfiosApi/completeScannedBankStatementTransaction'
        this.theme1ApiService.completeTransact(params,url).then((res:any)=>{
          this.completeTransactSimp(res);
        },err=>{
          this.dialogRef.close()
          this.sharedService.openSnackBar(err?.message, 'error', err?.status);
        })
    } 
    if(this.data.parentObj.documentName == 'threeMonthSalarySlip' && this.data.childObj.category == 'scannedStatementUpload') {
      let url = 'api/v1/restPerfiosApi/completeSalarySlipTransaction'
      this.theme1ApiService.completeTransact(params,url).then((res:any)=>{
        this.completeTransactSimp(res);
      },err=>{
        this.dialogRef.close()
        this.sharedService.openSnackBar(err?.message, 'error', err?.status);
      })
    }
  }

  completeTransactSimp(resp){
    if(resp.code==200){
      this.dialogRef.close()
      this.sharedService.openSnackBar(resp?.message, 'success', resp?.status);
    }else if(resp.code != 200 || resp.status == 'ERROR'){
      this.dialogRef.close()
      this.sharedService.openSnackBar(resp?.message, 'error', resp?.status);
    }
  }

  close() {
    this.dialogRef.close(false);
  }
}
