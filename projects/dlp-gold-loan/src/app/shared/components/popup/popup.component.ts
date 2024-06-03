import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
  closeAble = true;
  value;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  actionClick(action) {
    // action['value']= this.value
    this.dialogRef.close(action);
  }

  selectedValue(e) {
    this.value = e.formValue;
  }
}
