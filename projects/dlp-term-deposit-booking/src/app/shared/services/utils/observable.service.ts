import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {
    public masterData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public stepper: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public mobileStepper: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public layoutConfig: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public stepperData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public spinnerLoader: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public documentList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public VASdetails: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMasterData(): Observable<any> {
        return this.masterData.asObservable();
    }

    setMasterData(data: any) {
        this.masterData.next(data);
    }

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

    getMobileStepper(): Observable<any> {
        return this.mobileStepper.asObservable();
    }

    setMobileStepper(data: any) {
        this.mobileStepper.next(data);
    }

    getLayout(): Observable<any> {
        return this.layoutConfig.asObservable();
    }

    setLayout(data: any) {
        this.layoutConfig.next(data);
    }

    getSpinner(): Observable<any> {
        return this.spinnerLoader.asObservable();
    }

    setSpinner(data: any) {
        this.spinnerLoader.next(data);
    }

    getDocument(): Observable<any> {
        return this.documentList.asObservable();
    }

    setDocument(data: any) {
        this.documentList.next(data);
    }
}
