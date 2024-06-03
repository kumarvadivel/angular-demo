import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router'; 
import { CommonCommonService } from '@ca-app/services/common-common.service';
import { CommonVariableService } from '@ca-app/services/common-variable-service'; 
declare let Appice:any;
@Component({
  selector: 'app-existing-relationship',
  templateUrl: './existing-relationship.component.html'
})
export class ExistingRelationshipComponent {
  showloader:boolean = false
  constructor(public dialogRef: MatDialogRef<ExistingRelationshipComponent>,public commonService: CommonCommonService,
    @Inject(MAT_DIALOG_DATA) public data: any,public router:Router,public commonVariableService:CommonVariableService) { 
      
    }
 
  continue() {
    this.dialogRef.close(); 
    this.showloader = true; 
    this.commonService.NavigateJourney('ADDRESS_DETAILS') 
  }
}
