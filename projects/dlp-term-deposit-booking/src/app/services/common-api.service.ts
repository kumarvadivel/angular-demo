import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonVariableService} from './common-variable-service';
import { Encrypt } from '@tlad-app/shared/helpers/Encrypt';
import { EnvironmentService } from '@tlad-environments/environment.service';

@Injectable({
    providedIn: 'root'
})
export class CommonApiService {
    constructor(public httpClient: HttpClient,
                public commonVariableService: CommonVariableService,
                private environmentService:EnvironmentService,
                private encrypt: Encrypt
    ) {
    }

    public doGetApiCall(url, queryParams, customHeaders?) {
        return new Promise((resolve, reject) => {
            this.httpClient.get(url, {params: queryParams, headers: customHeaders || {},observe:"response"},).subscribe(
                (res:any) => {
                    this.mappingHeaderResponse(res, resolve);
                },
                err => {
                    reject(err);
                }
            );
        });
    }

    public doDeleteApiCall(url, queryParams) {
        return new Promise((resolve, reject) => {
            this.httpClient.delete(url, {params: queryParams,observe:'response'}).subscribe(
                res => {
                    this.mappingHeaderResponse(res, resolve);
                },
                err => {
                    reject(err);
                }
            );
        });
    }

    mappingHeaderResponse(res, resolve){
        let body = res.body
        let headers: HttpHeaders = res.headers
        body = this.responseDecryptorIntreceptor(body, headers)
        resolve(body);
      }

    public doPostApiCall(url, requestBody, responseType?, param?, customHeaders?) {
        const httpOptions = {
            headers: new HttpHeaders(customHeaders ?? {
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            responseType,
            params: param
        };
        return this.returnPromise(url, requestBody, httpOptions)
    }

    public doPostApiForCustomHeadersCall(url, requestBody, responseType?, param?, customHeaders?) {
        const httpOptions = {
            headers: new HttpHeaders(customHeaders),
            responseType,
            params: param
        };
        return this.returnPromise(url, requestBody, httpOptions)
    }

    public doPostApiCallForJson(url, requestBody, responseType?, param?) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType,
            params: param
        };
        return this.returnPromise(url, requestBody, httpOptions)
    }

    public doPostApiCallForUploadFile(url, requestBody, responseType?, _params?, _customHeaders?) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(url, requestBody, {...responseType,observe:'response'}).subscribe(
                (res:any) => {
                    this.mappingHeaderResponse(res, resolve);
                },
                err => {
                    reject(err);
                }
            );
        })
    }

    public doDownloadApiCall(url, requestBody, _responseType?, param?) {
        const httpOptions: any = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            responseType: 'blob' as 'json',
            observe: 'response',
            params: param,
        };
        return new Promise((resolve, reject) => {
            this.httpClient.post<Blob>(url, requestBody, httpOptions).subscribe(
                (res: any) => {
                    if (res.status == 200) {
                        const filename = "myfile.zip"
                        let binaryData = [];
                        binaryData.push(res.body);
                        let downloadLink = document.createElement('a');
                        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: 'blob'}));
                        downloadLink.setAttribute('download', filename);
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                    }
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            );
        })
    }

    returnPromise(url, requestBody, httpOptions,_skipErrorLogging?) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(url, requestBody, {...httpOptions,observe:'response'}).subscribe(
                (res:any) => {
                    this.mappingHeaderResponse(res, resolve);
                },
                err => {
                    reject(err);
                }
            );
        });
    }

    responseDecryptorIntreceptor(response,responseHeaders:HttpHeaders){
        let temp_encrypted = response
        let plainiv = responseHeaders.get('Clientapikey')
        if(temp_encrypted['encryptedResponseData']){
            let encrypted = temp_encrypted['encryptedResponseData']
            let key  = CryptoJS.enc.Latin1.parse(this.environmentService.config.appConfig.clientApiKey);
            let iv   = CryptoJS.enc.Latin1.parse(plainiv);  
            let data = this.encrypt.decrypt_api(key,iv,encrypted)
           response = data
        }
        return response
    }
}
