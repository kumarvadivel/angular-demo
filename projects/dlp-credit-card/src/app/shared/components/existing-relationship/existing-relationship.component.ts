import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
@Component({
  selector: 'app-existing-relationship',
  templateUrl: './existing-relationship.component.html',
})
export class ExistingRelationshipComponent {
  showloader:boolean = false
  constructor(public dialogRef: MatDialogRef<ExistingRelationshipComponent>,public commonService: CommonCommonService,
    @Inject(MAT_DIALOG_DATA) public data: any,public router:Router,public commonVariableService:CommonVariableService,private localStorage:LocalStorage) { 
      
    }

  continue() {
    this.dialogRef.close();
    let product = this.localStorage.SessionGetItem('CURRENT_JOURNEY')?.product
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.showloader = true;
    if(product.productCode=='LA776'){      
        let prop = { Constitution: journey?.constitution,Products:journey?.metaData?.capturedData?.MOBILE_VERIFY?.borrowerEmploymentHistoryTextVariable1, Continue: 'True', Verify: 'True', CustomerType: 'ETB', ContinuePopup: 'True' }
        this.commonService.triggerAppiceEvent('AGLStartJourney',prop);
        
    }else{
      this.router.navigateByUrl('/' + product + '/basicinfo/account-number-verification');
    }
  }
}
