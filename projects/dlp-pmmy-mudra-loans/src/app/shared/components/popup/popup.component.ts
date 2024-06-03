import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonCommonService } from '@pmmy-app/services/common-common.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  closeAble = true;
  value;
  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      
    }

    actionClick(action){
      if(this.data?.validate){
        if(action == 'submit'){
          if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
            this.closePopup(action);
          }
        } else {
          this.closePopup(action);
        }
      } else {
        this.closePopup(action);
      }
  
    }

  selectedValue(e){
  this.value = e.formValue
  }

  closePopup(action){
    let data = {
      action: action,
      value: this.value
    }
    this.dialogRef.close(data)
  }
}
