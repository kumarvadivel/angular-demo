import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../../../shared/services/utils/shared.service';
import { ResumeTheme1VariableService } from './resume-application-theme1-variable.service';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';

@Injectable({
  providedIn: 'root'
})
export class ResumeTheme1CommonService {
  constructor(public commonVariableService: CommonVariableService,public router:Router, public resumeVariableService:ResumeTheme1VariableService,
    public sharedService:SharedService,public commonService:CommonCommonService) { }
    public showToaster:boolean = false;

  resumeJoruney(loan) {
    let localJourneyPages = this.commonVariableService.pageSequenceData[loan.loanPurposeCode].journeyPages;
    if (loan?.isIndividual || loan?.isIndividual == undefined) {
      this.isIndividualFunction(localJourneyPages, loan);
    }
    if (loan?.isCorporate) {
      this.isCorporateFunction(localJourneyPages, loan);
    }
  }

  isIndividualFunction(localJourneyPages, loan) {
    if (localJourneyPages.individual.length !== 0) { // for this loan product if  local loan journey pages present
      for (let dual of localJourneyPages.individual) {
        this.isIndividualSubStatusFunction(dual, loan, localJourneyPages);
      }
      if (this.resumeVariableService.pageObjList.length != 0) {
        if (!this.resumeVariableService.pageObjList.includes('true')) {
          this.showToast()
        }
      }
    } else {
      this.sharedService.openSnackBar('No page found', 'success');
    }
  }

  isIndividualSubStatusFunction(dual, loan, localJourneyPages){
    if (loan.status == dual.status && loan.subStatus == dual.subStatus) {
      this.resumeVariableService.pageObjList.push('true')
      if (dual.lastPage !== true) {
        let pageCode = dual?.pageCode;
        this.commonService.proceedJourney(pageCode);
      } else {
        let number = dual.pageIndex;
        let pageCode = localJourneyPages[number].pageCode;
        this.commonService.proceedJourney(pageCode);
      }
    } else {
      this.resumeVariableService.pageObjList.push('false')
    }
  }

  isCorporateFunction(localJourneyPages, loan) {
    if (localJourneyPages.company.length !== 0) { // for this loan product if  local loan journey pages present
      for (let indi of localJourneyPages.individual) {
        this.isCorporateSubStatusFunction(indi, loan, localJourneyPages);
      }
      if (this.resumeVariableService.pageObjList.length != 0) {
        if (!this.resumeVariableService.pageObjList.includes('true')) {
          this.showToast()
        }
      }
    } else {
      this.sharedService.openSnackBar('No page found', 'success');
    }
  }

  isCorporateSubStatusFunction(indi, loan, localJourneyPages){
    if (loan.status == indi.status && loan.subStatus == indi.subStatus) {
      this.resumeVariableService.pageObjList.push('true')
      if (indi.lastPage !== true) {
        let number = indi?.pageIndex;
        let pageCode = localJourneyPages.individual[number + 1].pageCode
        this.commonService.proceedJourney(pageCode);
      } else {
        let pageCode = indi.pageCode;
        this.commonService.proceedJourney(pageCode);
      }
    } else {
      this.resumeVariableService.pageObjList.push('false')
    }
  }

  showToast() {
    this.sharedService.openSnackBar('No page found', 'success');
  }
}
