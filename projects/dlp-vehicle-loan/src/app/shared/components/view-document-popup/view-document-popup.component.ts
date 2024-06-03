import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-document-popup',
  templateUrl: './view-document-popup.component.html',
  styleUrls: [],
  
})
export class ViewDocumentPopupComponent  {

  constructor(public dialogRef: MatDialogRef<ViewDocumentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer:DomSanitizer) { }


}
