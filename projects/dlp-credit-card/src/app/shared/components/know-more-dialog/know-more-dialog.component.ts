import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-know-more-dialog',
  templateUrl: './know-more-dialog.component.html',
})
export class KnowMoreDialogComponent {

  constructor(public dialogRef: MatDialogRef<KnowMoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    }


}
