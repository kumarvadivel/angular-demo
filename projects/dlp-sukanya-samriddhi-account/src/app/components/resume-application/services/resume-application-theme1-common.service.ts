import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonCommonService } from '@ssa-app/services/common-common.service';
import { CommonVariableService } from '@ssa-app/services/common-variable-service';
import { SubmitFlowApiService } from '@ssa-app/services/submit-flow-api.service';
import { SharedService } from '../../../shared/services/utils/shared.service';
import { ResumeTheme1VariableService } from './resume-application-theme1-variable.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeTheme1CommonService {
  constructor(public commonVariableService: CommonVariableService,public router:Router, public resumeVariableService:ResumeTheme1VariableService,
    public sharedService:SharedService,public commonService:CommonCommonService,public submitFlowApiService:SubmitFlowApiService) { }
    public showToaster:boolean = false;


    resumeJoruney(loan) {
      const localJourneyPages = this.commonVariableService.pageSequenceData[loan.loanPurposeCode].journeyPages;
      const loanTypes = this.getLoanTypes(loan);
      
      loanTypes.forEach(loanType => {
        const journeyPages = localJourneyPages[loanType];
        
        if (journeyPages.length !== 0) {
          this.processJourneyPages(journeyPages, loan, localJourneyPages);
        } else {
          this.sharedService.openSnackBar("No page found", "success");
        }
      });
    }
    
    getLoanTypes(loan) {
      const loanTypes = [];
    
      if (loan?.isIndividual !== false) {
        loanTypes.push('individual');
      }
    
      if (loan?.isCorporate === true) {
        loanTypes.push('company');
      }
    
      return loanTypes;
    }
    
    processJourneyPages(journeyPages, loan, localJourneyPages) {
      journeyPages.forEach(page => {
        if (loan.status == page.status && loan.subStatus == page.subStatus) {
          this.resumeVariableService.pageObjList.push("true");
          this.proceedJourneyBasedOnLastPage(page, localJourneyPages);
        } else {
          this.resumeVariableService.pageObjList.push("false");
        }
      });
    
      if (this.resumeVariableService.pageObjList.length != 0 && !this.resumeVariableService.pageObjList.includes("true")) {
        this.showToast();
      }
    }
    
    proceedJourneyBasedOnLastPage(page, localJourneyPages) {
      
      let pageCode;
    
      if (!page.lastPage) {
        pageCode = page?.pageCode;
      } else {
        let number = page.pageIndex;
        pageCode = localJourneyPages[number].pageCode;
      }
    
      this.submitFlowApiService.proceedJourney(pageCode);
    }
  showToast() {
    this.sharedService.openSnackBar('No page found', 'success');
  }
}
