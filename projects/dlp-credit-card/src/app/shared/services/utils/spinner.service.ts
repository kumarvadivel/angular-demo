import { Injectable } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import { Subject } from 'rxjs';
import { scan, map, distinctUntilChanged } from 'rxjs/operators';
import { ObservableService } from './observable.service';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinnerTopRef: OverlayRef;

    private spin$: Subject<number> = new Subject();

    constructor(private overlay: Overlay,private observableService: ObservableService) {
        this.spinnerTopRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy: this.overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
        });

        this.spin$
            .asObservable()
            .pipe(
                scan((acc, next) => {
                    if (!next) {
                        return 0;
                    }
                    return acc + next >= 0 ? acc + next : 0;
                }, 0),
                map(val => val > 0),
                distinctUntilChanged()
            )
            .subscribe(res => {
                if (res) {
                    
                    this.observableService.setSpinner(true);
                    // this.spinnerTopRef.attach(new ComponentPortal(MatSpinner))
                } else {
                    this.observableService.setSpinner(false);
                }
            });
    }
    show(): void {
        this.spin$.next(1);
    }
    hide(): void {
        this.spin$.next(-1);
    }
    reset(): void {
        this.spin$.next(0);
    }
}

