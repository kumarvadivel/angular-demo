import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from '../shared/helpers/localStorage';


@Injectable({
    providedIn: 'root'
})

export class ConfigurationService {
    
    public  totalEmi = new BehaviorSubject<any>(0);
    public  principalAmount = new BehaviorSubject<any>(0);
    constructor(private httpClient: HttpClient,public localStorage: LocalStorage) {
    }
  

    setItem(key, value) {
        this.localStorage.SessionSetItem(key, value);
    }

    getItem(key) { 
        return this.localStorage.SessionGetItem(key);
    }
}
