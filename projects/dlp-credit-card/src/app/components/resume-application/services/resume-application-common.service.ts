import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { SharedService } from '../../../shared/services/utils/shared.service';
import { ResumeVariableService } from './resume-application-variable.service';
import { SubmitFlowApiService } from '@cc-app/services/submit-flow-api.service';


@Injectable({
  providedIn: 'root'
})
export class ResumeCommonService {
  constructor(public commonVariableService: CommonVariableService, public router: Router, public resumeVariableService: ResumeVariableService,
    public sharedService: SharedService, public commonService: CommonCommonService, public submitFlowApiService: SubmitFlowApiService) { }
  public showToaster: boolean = false;

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

  showToast() {
    this.sharedService.openSnackBar('No page found', 'success');
  }
}
