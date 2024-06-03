import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CommonVariableService} from './common-variable-service';
import { Theme1CommonService } from './common.service';
import { CustomHttpParamEncoder } from '@pl-app/shared/helpers/customHttpEncoder';
import { EnvironmentService } from '@pl-environments/environment.service';
import { Encrypt } from '@pl-app/shared/helpers/Encrypt';
import { LocalStorage } from '@pl-app/shared/helpers/localStorage';
import { Formatters } from '@pl-app/shared/helpers/Formatters';

@Injectable({
    providedIn: 'root'
})
export class CommonApiService {
    constructor(public httpClient: HttpClient,
                public commonVariableService: CommonVariableService,
                private commonService:Theme1CommonService,
                public environmentService:EnvironmentService,
                public encrypt:Encrypt,
                private formatters:Formatters,
                private localStorage:LocalStorage
    ) {
    }
    BASE_URL = this.environmentService.config?.appConfig['primaryHost'];
    UPDATE_LOAN_APPLICATION_STATUS = `api/v1/loanApplication/createSubStatusActivity`;
    private parseResponse(res,resolve,url){
        let body = res.body
        let headers:HttpHeaders = res.headers
        body = this.responseDecryptorIntreceptor(body,headers)
        if(body.code && body.code!="200"){
            this.callRejectionIntreceptor(url,body)
        }
        resolve(body);
    }
    public doGetApiCall(url, queryParams, customHeaders?) {
        return new Promise((resolve, reject) => {
            this.httpClient.get(url, {params: queryParams, headers: customHeaders || {},observe:'response'},).subscribe(
                (res:any) => {
                    return this.parseResponse(res,resolve,url)
                },
                err => {
                    this.callRejectionIntreceptor(url,err)
                    reject(err);
                }
            );
        });
    }

    public doDeleteApiCall(url, queryParams) {
        return new Promise((resolve, reject) => {
            this.httpClient.delete(url, {params: queryParams,observe:'response'}).subscribe(
                res => {
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

    public doPostApiCall(url, requestBody, responseType?, param?, customHeaders?,skipErrorLogging?) {
        const httpOptions = {
            headers: new HttpHeaders(customHeaders ?? {
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            responseType,
            params: param
        };
        return this.returnPromise(url, requestBody, httpOptions,skipErrorLogging)
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
              return this.parseResponse(res,resolve,url)
            },
            err => {
              reject(err);
            }
          );
        });
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

    returnPromise(url, requestBody, httpOptions,skipErrorLogging?) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(url, requestBody, {...httpOptions,observe:'response'}).subscribe(
                (res:any) => {
                    let body = res.body
                    let headers:HttpHeaders = res.headers
                    body = this.responseDecryptorIntreceptor(body,headers)
                    if(body.code && body.code!="200" &&!skipErrorLogging){
                        this.callRejectionIntreceptor(url,body)
                    }
                    resolve(body);
                },
                err => {
                    if(!skipErrorLogging){
                        this.callRejectionIntreceptor(url,err)
                    }
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

    callRejectionIntreceptor(url,res){
        let message = `
        url:${url}
        message:${res.message ||res.error}
        ErrorLog: ${JSON.stringify(res)}`
        let journey = this.localStorage.getItem("CURRENT_JOURNEY")
        if( journey?.product?.access_token && journey?.product?.loanUuid && this.commonVariableService.ErrorCodeSubStatus[journey?.product?.productCode]){
            let params = {
                access_token:journey.product.access_token,
                loanUuid:journey.product.loanUuid,
                newSubStatus:this.commonVariableService.ErrorCodeSubStatus[journey.product.productCode],
                subStatusChangeDescription: message
            }
            this.updateLoanApplicationStatus(params,true)
        }
    }

    updateLoanApplicationStatus(params,skipErrorLogging?){
        let body = new HttpParams({ encoder: new CustomHttpParamEncoder() });
        for(const prop in params){
          body = body.set(prop,params[prop])
        }
        let encrypted = this.encryptFormBodyData(body)
        return this.doPostApiCall(this.BASE_URL + this.UPDATE_LOAN_APPLICATION_STATUS, encrypted.body, undefined, undefined, this.environmentService.configData.appConfig.isEncryption ? {...this.commonVariableService.encryptionHeaders,clientApiKey:encrypted.plainiv} : undefined,skipErrorLogging)
      }

      encryptFormBodyData(body){
        let temp_body
        let obj={}
        
        if(this.environmentService.configData.appConfig.isEncryption===true){
          temp_body= new HttpParams({ encoder: new CustomHttpParamEncoder() })
          if(body.updates && body.updates.length!=0){
            body.updates.forEach(data=>{
              if(data.param=='access_token'){
                temp_body = temp_body.set(data.param,data.value)
              }else{
                obj[data.param] = data.value
              }
            })
          }
          //encrypt object
          let plainiv = `${this.environmentService.config.appConfig.tenantId}${this.formatters.getEncryptionFormattedTimestamp()}`
          let key  = CryptoJS.enc.Latin1.parse(this.environmentService.config.appConfig.clientApiKey);
          let iv   = CryptoJS.enc.Latin1.parse(plainiv);  
          let encrypted = this.encrypt.encrypt(key,iv,JSON.stringify(obj))
          temp_body = temp_body.set('encryptedRequestData',encrypted)
          return {body:temp_body,plainiv}
        }else{
          return {body}
        }
      }
}
