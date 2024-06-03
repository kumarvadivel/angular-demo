import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {SnackBarComponent} from '../shared/components/snack-bar/snack-bar.component';
@Injectable({
    providedIn: 'any'
})
export class SnackBarService {
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private _snackBar: MatSnackBar) {
    }

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
