import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})

export class ConfigurationService {
    
    public  totalEmi = new BehaviorSubject<any>(0);
    public  principalAmount = new BehaviorSubject<any>(0); 

    setItem(key, value) { 
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) { 
        return sessionStorage.getItem(key); 
    }
   
    
}
