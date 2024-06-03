import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss']
})
export class SessionExpiredComponent {

  public sessionLabel: Array<{message:string}> = [{"message":"The session will expire automatically, due to inactivity on the page."},{ "message":"For security reason, we have disabled double clicks, Back, Forward and Refresh tabs of the browser."}, {"message":"If the problem persists, please try again after clearing the Temporary Files from your web browser."}]
  constructor(private router: Router, public activeRouter: ActivatedRoute) {
  }

  closeApp() {
    sessionStorage.clear()
  }

  continue() {
    this.router.navigateByUrl('/core/home').catch(console.error);
  }
}
