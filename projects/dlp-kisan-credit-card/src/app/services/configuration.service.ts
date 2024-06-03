import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ConfigurationService {

    public totalEmi = new BehaviorSubject<any>(0);
    public principalAmount = new BehaviorSubject<any>(0);
    constructor(private httpClient: HttpClient) {
    }


    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }


}
