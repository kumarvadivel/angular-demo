import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { LocalStorage } from '../../helpers/localStorage';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';

@Component({
  selector: 'app-crm-lead-popup',
  templateUrl: './crm-lead-popup.component.html',
  styleUrls: ['./crm-lead-popup.component.scss']
})
export class CrmLeadPopupComponent {
  showloader: boolean = false
  constructor(public dialogRef: MatDialogRef<CrmLeadPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public commonVariableService: CommonVariableService,public localStorage: LocalStorage) {

  }

  continue() {
    this.dialogRef.close();
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY');
    if (journey.product.productCode === 'LA776') {
      this.router.navigateByUrl('/kcc/loan/summary');
    }
  }

  createNewLead() {
    this.dialogRef.close();
  }
}
