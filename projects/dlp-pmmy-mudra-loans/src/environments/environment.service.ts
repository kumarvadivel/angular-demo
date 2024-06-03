import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {
    public configData: Configuration | undefined;
    
    private readonly configPath: string = 'assets/configuration/app.config.json';
    constructor(
        private http: HttpClient
    ) {
     }

    async loadConfiguration(): Promise<Configuration> {
        try {
            const response = await this.http.get<Configuration>(`${this.configPath}`)
                .toPromise();
                this.configData =  response;
   
                let readConfig = response.appConfig['encodeData'];
                let removePre = readConfig.substring(9);
                let removePost = removePre.slice(0, -9);
                 let actual = JSON.parse(atob(removePost));
                 this.configData.appConfig = actual;
                let BASE_URL = this.configData.appConfig['primaryHost'];
                let BASE_URL_MICROSERVICE = this.configData.appConfig['secondaryHost'];
                let UI_BASE_URL = this.configData.appConfig['UI_BASE_URL'];
                this.configData["BASE_URL"]=BASE_URL;
                this.configData["BASE_URL_MICROSERVICE"]=BASE_URL_MICROSERVICE;
                this.configData.appConfig["UI_BASE_URL"]=UI_BASE_URL;
                return this.configData;
               

        } catch (err) {
            return Promise.reject(err);
        }
    }

    get config(): Configuration | undefined {
        return this.configData;
    }
}

export interface Configuration {
    appConfig: {
        isEncryption: boolean,
        disableCopyPaste: boolean,
        clientApiKey: string,
        nameMatch: boolean,
        nameMatchingPer: number,
        disableDevelopersTools:boolean,
        appice: boolean,
        appiceConfig:Object,
        primaryHost: string,
        secondaryHost: string,
        sessionTimeout:number,
        tenantId:number,
        display_brandable_images:boolean
    }

}
