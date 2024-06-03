import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { SharedService } from '../../../../shared/services/utils/shared.service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss']
})
export class SessionExpiredComponent implements OnInit {

  public sessionLabel: Array<any> = [{"message":"The session will expire automatically, due to inactivity on the page."},{ "message":"For security reason, we have disabled double clicks, Back, Forward and Refresh tabs of the browser."}, {"message":"If the problem persists, please try again after clearing the Temporary Files from your web browser."}]
  constructor(private sharedService: SharedService,private router: Router, public activeRouter: ActivatedRoute,private commonService:CommonCommonService,private localStorage:LocalStorage) {
  }
  
  ngOnInit(): void {
    this.commonService.bindHeaderFooterTypes('SESSION_EXPIRED')
  }

  closeApp() {
    this.localStorage.sessionClear()
  }

  continue() {
    this.router.navigateByUrl('/1/landing')
  }
}
