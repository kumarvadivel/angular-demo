import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JourneyEventsService } from '../../../services/journey-events.service';
import { LocalStorage } from '../../../shared/helpers/localStorage';

@Component({
  selector: 'app-existing-relationship',
  templateUrl: './existing-relationship.component.html',
})
export class ExistingRelationshipComponent {
  showloader:boolean = false
  constructor(
    public localStorage: LocalStorage,    
    public dialogRef: MatDialogRef<ExistingRelationshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public router:Router,
    public journeyEventsService:JourneyEventsService) { 
      
    }
  continue() {
    this.dialogRef.close();
    let product = this.localStorage.SessionGetItem('CURRENT_JOURNEY')?.product
    let journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.showloader = true;
    if(product.productCode){      
        let prop = { Constitution: journey?.constitution,Products:journey?.metaData?.capturedData?.MOBILE_VERIFY?.borrowerEmploymentHistoryTextVariable1, Continue: 'True', Verify: 'True', CustomerType: 'ETB', ContinuePopup: 'True' }
        this.journeyEventsService.triggerAppiceEvent('AGLStartJourney',prop);        
        
    }else{
      this.router.navigateByUrl('/' + product + '/basicinfo/account-number-verification').catch(console.error);
    }
  }
}
