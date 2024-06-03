import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog, MatDialogRef} from '@angular/material/dialog';

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
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.url = this.data.response.urlToRedirect;
        this.urlSafe = this.url;
    }

    close() {
        this.dialogRef.close()
    }
}
