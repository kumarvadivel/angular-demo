import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-document-popup',
  templateUrl: './view-document-popup.component.html',
  styleUrls: ['./view-document-popup.component.scss'],
  
})
export class ViewDocumentPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewDocumentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
   this.data.url= this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
  }

}
