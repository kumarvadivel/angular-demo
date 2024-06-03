import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonCommonService } from '@kcc-renewal-app/services/common-common.service';
import { ApiService } from '../../../services/api.service';
import { SharedService } from "../../../shared/services/utils/shared.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  closeAble = true;
  value;
  journey
  securityDetailList: any;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    public commonService:CommonCommonService,
    public theme1ApiService:ApiService,
    public sharedService:SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
    this.data.popupContent = this.commonService.ParseConfig(this.data.popupContent);
    this.journey = this.commonService.getJourney()
    }
    actionClick(action){
      // action['value']= this.value
      if(action == 'submit'){
        if (this.commonService.SectionValidationSystem(this.data.popupContent)) {
          this.dialogRef.close(action)
        }
      }else{
        this.dialogRef.close(action)
      }
    }
  
    selectedValue(e){
    this.value = e.formValue
    }


}
