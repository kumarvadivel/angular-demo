import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ResumeTheme1VariableService } from './resume-application-theme1-variable.service';
import { CommonCommonService } from '@home-app/services/common-common.service';
import { CommonVariableService } from '@home-app/services/common-variable.service';
@Injectable({
  providedIn: 'root'
})
export class ResumeTheme1CommonService {
  constructor(public commonVariableService: CommonVariableService,public router:Router, public resumeVariableService:ResumeTheme1VariableService,
    
    public commonService:CommonCommonService) { }
    public showToaster:boolean = false;

  resumeJoruney(loan){
    let finded_product = this.commonVariableService.loanProductInfo.find(d=>d.productCode == loan.loanPurposeCode)
    if(finded_product){
      sessionStorage.setItem("RESUME_APPLICATION_DATA",loan)
      this.router.navigateByUrl(finded_product.url+"application/resume/resumeApplication")
    }
  }
}
