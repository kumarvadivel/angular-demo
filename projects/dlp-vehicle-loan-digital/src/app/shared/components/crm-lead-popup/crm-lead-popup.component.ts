import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CommonVariableService} from '@vldigi-app/services/common-variable-service';

@Component({
    selector: 'app-crm-lead-popup',
    templateUrl: './crm-lead-popup.component.html',
    styleUrls: ['./crm-lead-popup.component.scss']
})
export class CrmLeadPopupComponent {
    showloader: boolean = false

    constructor(public dialogRef: MatDialogRef<CrmLeadPopupComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public commonVariableService: CommonVariableService) {
    }

    continue() {
        this.dialogRef.close();
        let journey = JSON.parse(sessionStorage.getItem('CURRENT_JOURNEY'))
        if (journey.product.productCode === 'LA776') {
            this.router.navigateByUrl('/agri-gold-loan/loan/summary').catch(e => console.log(e));
        }
    }

    createNewLead() {
        this.dialogRef.close();
    }
}
