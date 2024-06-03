import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-document-popup',
  templateUrl: './view-document-popup.component.html',
  styleUrls: [],
  
})
export class ViewDocumentPopupComponent {

  constructor(public dialogRef: MatDialogRef<ViewDocumentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


}
