import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loan-summary-action-popup',
  templateUrl: './loan-summary-action-popup.component.html',
  styleUrls: ['./loan-summary-action-popup.component.scss']
})
export class LoanSummaryActionPopupComponent {

  constructor(public dialogRef: MatDialogRef<LoanSummaryActionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    noConfig={
      fields:[{
        "fieldDataType":"DROPDOWN",
        "dependentField":null,
        "isMandatory":true,
        "commonpropertyType":'AWAITING_APPROVAL_L7_REASON',
        "fieldLabel": "Rejection Reason",
        "fieldAccessModifier":"EDITABLE", //editable,readonly  //top,right,bottom,left
        "minLength":6,
        "maxLength":15,
        "error":null,
        "value":null,
        "validationJson":null,
        "rulesFor":null,
        "regex":null,
        "options":[],
        "regexErrorMessage":null,
        "errorIconPath":null,
        "rowNo":null,
        "columnNo":null,
        "placeholderText":"please Select",
        "fieldName":"constitution",
        "showLabel":true,
        "labelInfo":null,
        "groupName":null,
        "groupIndex":null,
        "showField":true
     },{
      "fieldDataType":"TEXT_AREA",
      "isMandatory":false,
      "fieldLabel": "Remarks",
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
      "placeholderText":"Tell us in words",
      "fieldName":"line2",
      "labelInfo":null,
      "showLabel":true,
      "rows":3
  }],
      options:{
        columnSize:1
      }
    }

  cancelAction() {
    this.dialogRef.close({ "ok": false })
  }

  OkAction() {
    this.dialogRef.close({ "ok": true })
  }

}
