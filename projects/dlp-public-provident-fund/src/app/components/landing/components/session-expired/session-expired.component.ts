import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@ppf-app/services/common-common.service';
import { SharedService } from '../../../../shared/services/utils/shared.service';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss']
})
export class SessionExpiredComponent implements OnInit {

  public sessionLabel: Array<any> = [{"message":"The session will expire automatically, due to inactivity on the page."},{ "message":"For security reason, we have disabled double clicks, Back, Forward and Refresh tabs of the browser."}, {"message":"If the problem persists, please try again after clearing the Temporary Files from your web browser."}]
  constructor(private sharedService: SharedService,private router: Router, public activeRouter: ActivatedRoute,private commonService:CommonCommonService) {
  }
  
  ngOnInit(): void {
    this.commonService.bindHeaderFooterTypes('SESSION_EXPIRED')
  }

  closeApp() {
    sessionStorage.clear()
  }

  continue() {
    this.router.navigateByUrl('/core/home')
  }
}
