import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {
    public stepper: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public stepperData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getStepperData(): Observable<any> {
        return this.stepperData.asObservable();
    }

    setStepperData(data: any) {
        this.stepperData.next(data);
    }

    getStepperList(): Observable<any> {
        return this.stepper.asObservable();
    }

    setStepperList(data: any) {
        this.stepper.next(data);
    }
}
