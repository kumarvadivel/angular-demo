import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
import { EnvironmentService } from '@kcc-ah-environments/environment.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private commonVariableService:CommonVariableService,private environmentService:EnvironmentService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.commonVariableService.tenentConfiguration?.removeAccessToken){
      if(request.url.includes(this.commonVariableService.tenentConfiguration?.IG_API_KEY) && request.body && request.body?.access_token){
        delete request.body.access_token;
      }
    }
    return next.handle(request)
  }
}
