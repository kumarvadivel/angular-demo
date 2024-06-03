import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  url: any = "";
  urlSafe: any;

  constructor(public dialogRef: MatDialogRef<IframeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog:MatDialog,
    private cdr: ChangeDetectorRef,
  public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.url = this.data.response.urlToRedirect;
    this.urlSafe= this.url;
  }


  close() {
    this.dialogRef.close()
  }

}
