import { Injectable } from "@angular/core";
import { CommonVariableService } from "@cc-app/services/common-variable-service";
import { EnvironmentService } from '../../../environments/environment.service';
import { EncryptStorage } from "encrypt-storage";

@Injectable({
    providedIn: "root",
})
export class LocalStorage {
    ls
    ss

    constructor(private environmentService: EnvironmentService,
                private commonVariableService: CommonVariableService) {
        this.ls = new EncryptStorage(this.environmentService.config.appConfig.clientApiKey)
        this.ss = new EncryptStorage(this.environmentService.config.appConfig.clientApiKey,{
            "storageType":"sessionStorage"
        })
    }

    setItem(key, value, iterationCount = 1) {
        try {
            if (this.commonVariableService.tenentConfiguration.devMode === true) {
                sessionStorage.setItem(key, JSON.stringify(value))
            } else {
                this.ls.setItem(key, value);
            }
        } catch (e) {
            if (iterationCount < 2) {
                this.setItem(key, value, iterationCount + 1)
            } else {
                console.error("[LOCAL_STORAGE]Unable to set local storage encryption due to exception");
            }
        }
    }
    SessionSetItem(key, value, iterationCount = 1) {
        try {
            if (this.commonVariableService.tenentConfiguration.devMode === true) {
                sessionStorage.setItem(key, JSON.stringify(value))
            } else {
                this.ss.setItem(key, value);
            }
        } catch (e) {
            if (iterationCount < 2) {
                this.SessionSetItem(key, value, iterationCount + 1)
            } else {
                console.error("[SESSION_STORAGE]Unable to set local storage encryption due to exception");
            }
        }
    }

    getItem(key) {
        try {
            if (this.commonVariableService.tenentConfiguration.devMode === true) {
                return JSON.parse(localStorage.getItem(key))
            } else {
                return this.ls.getItem(key);
            }
        } catch (e) {
            console.error("[LOCAL_STORAGE]Unable to read local storage encryption due to exception");
            this.clear()
        }
    }

    SessionGetItem(key) {
        try {
            if (this.commonVariableService.tenentConfiguration.devMode === true) {
                return JSON.parse(sessionStorage.getItem(key))
            } else {
                return this.ss.getItem(key);
            }
        } catch (e) {
            console.error("[SESSION_STORAGE]Unable to read local storage encryption due to exception");
            this.clear()
        }
    }

    clear() {
        this.ls.clear()
    }
    sessionClear(){
        this.ss.clear()
    }

    removeItem(key) {
        this.ls.removeItem(key);
    }

    SessionremoveItem(key) {
        this.ss.removeItem(key);
    }
}
