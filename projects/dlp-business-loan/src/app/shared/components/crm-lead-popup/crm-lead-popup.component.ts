import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonVariableService } from '@bl-app/services/common-variable-service';
import {CommonCommonService} from '@bl-app/services/common-common.service';

@Component({
  selector: 'app-crm-lead-popup',
  templateUrl: './crm-lead-popup.component.html',
  styleUrls: ['./crm-lead-popup.component.scss']
})
export class CrmLeadPopupComponent {
  showloader: boolean = false
  constructor(public dialogRef: MatDialogRef<CrmLeadPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, private commonService: CommonCommonService, public commonVariableService: CommonVariableService) {

  }

  continue() {
    this.dialogRef.close();
    let journey = this.commonService.getJourney()
    if (journey.product.productCode === 'LA776') {
      this.router.navigateByUrl('/agri-gold-loan/loan/summary');
    }
  }

  createNewLead() {
    this.dialogRef.close();
  }
}
