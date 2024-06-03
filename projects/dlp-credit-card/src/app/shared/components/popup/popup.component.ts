import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { ApiService } from '../../../services/api.service';
import { InitializeJourneyService } from '@cc-app/services/initialize-journey.service';

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
    public apiService:ApiService,
    private initializeJourneyService:InitializeJourneyService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.data.popupContent = this.commonService.ParseConfig(this.data.popupContent)
    }

  actionClick(action){
    if(action=='submit'){
      if(this.commonService.sectionValidationSystem(this.data.popupContent)){
        this.initializeJourneyService.configSubmitFlowValidator(this.data.popupContent)
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
