import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonVariableService } from './common-variable-service'; 
import { EnvironmentService } from '@fd-environments/environment.service';
import { Encrypt } from '@fd-app/shared/helpers/Encrypt';
@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(public httpClient: HttpClient,
    public commonVariableService:CommonVariableService,
    private environmentService:EnvironmentService,
    private encrypt: Encrypt
    //public encrypt:Encrypt
    ) { }

    headersResponse(res, resolve) {
      let body = res.body
      let headers: HttpHeaders = res.headers
      body = this.responseDecryptorIntreceptor(body, headers)
      resolve(body)
    }

  // common api functions starts 
  public doGetApiCall(url, queryParams, customHeaders?) {
    return new Promise((resolve, reject) => {
        this.httpClient.get(url, {params: queryParams, headers: customHeaders || {},observe:"response"},).subscribe(
            (res:any) => {
              return this.headersResponse(res,resolve)
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
            return this.headersResponse(res,resolve)
          },
          err => {
              reject(err);
          }
      );
  });
}

  public doPostApiCall(url, requestBody, responseType?, param?,customHeaders?) {
    const httpOptions = {
      headers: new HttpHeaders(customHeaders==undefined?{
        'Content-Type': 'application/x-www-form-urlencoded',
      }:customHeaders),
      responseType,
      params: param
    };
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, requestBody, {...httpOptions,observe:"response"}).subscribe(
          (res:any) => {
              let body = res.body
              let headers:HttpHeaders = res.headers
              body = this.responseDecryptorIntreceptor(body,headers)
              resolve(body);
          },
        err => {
          reject(err);
        }
      );
    });
  }
  
  public doPostApiCallForUploadFile(url, requestBody, responseType?,_params?,customHeaders?) {
    const httpOptions = {
      headers: new HttpHeaders(customHeaders==undefined?{
        'Accept':"application/json"
      }:{...customHeaders,'Accept':"application/json"}),
      observe:"response"
    };
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, requestBody, {...responseType,...httpOptions}).subscribe(
        (res:any) => {
          return this.headersResponse(res,resolve)
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
