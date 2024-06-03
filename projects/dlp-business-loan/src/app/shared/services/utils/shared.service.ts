import { Injectable } from '@angular/core';
import {  MatSnackBarHorizontalPosition,  MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component'
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar,) { }
  
  openSnackBar(message: any, _action?: string, statusCode?, invalid: boolean = false) {
    if (statusCode == 401) {
        let data = {
            message: 'Session timed out',
            error: false
        }
        this._snackBar.openFromComponent(SnackBarComponent, {
            data,
            duration: 5000,
            
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
        })
        sessionStorage.clear();
    } else {
        let data = {
            message,
            error: invalid
        }
        this._snackBar.openFromComponent(SnackBarComponent, {
            data,
            duration: 7000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
        })
    }
}
}
