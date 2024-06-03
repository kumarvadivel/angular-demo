import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '@kcc-app/services/api.service';
import { CommonCommonService } from '@kcc-app/services/common-common.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  closeAble = true;
  value;
  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    public commonService: CommonCommonService,
    public theme1ApiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

  }


  actionClick(action) {
    this.dialogRef.close(action)
  }

  selectedValue(e) {
    this.value = e.formValue
  }
}
