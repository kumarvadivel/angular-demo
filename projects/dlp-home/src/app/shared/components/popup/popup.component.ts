import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonCommonService} from '@home-app/services/common-common.service';
import {ApiService} from '../../../services/api.service';

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
