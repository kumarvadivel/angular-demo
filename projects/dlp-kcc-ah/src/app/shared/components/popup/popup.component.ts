import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ApiService } from '@kcc-ah-app/services/api.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';

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
