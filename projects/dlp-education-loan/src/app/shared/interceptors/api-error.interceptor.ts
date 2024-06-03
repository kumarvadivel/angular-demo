import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { LocalStorage } from '../helpers/LocalStorage';
import { ApiService } from '@el-app/services/api.service';
import { EnvironmentService } from '@el-environments/environment.service';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorage, private apiService: ApiService, private environmentService: EnvironmentService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = `ApiPath: ${request.urlWithParams}
                            Error Code: ${error.status},  
                            Message: ${error.message}`;
          }
          this.updateSubstatus(errorMsg)
          return throwError(errorMsg);
        })
      )

  }

  updateSubstatus(error) {
    if (this.localStorage.getItem("CURRENT_JOURNEY")) {
      let params = {
        access_token: this.localStorage.getItem("CURRENT_JOURNEY").product.access_token,
        loanUuid: this.localStorage.getItem("CURRENT_JOURNEY").product.loanUuid,
        newSubStatus: "SUB_STATUS_ERROR",
        subStatusChangeDescription: error
      }

      this.apiService.updateLoanApplicationStatus(params)
    }
  }
}
