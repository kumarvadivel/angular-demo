import { Component } from '@angular/core';
import { CommonVariableService } from './services/common-variable.service';
import { LinkInjectorService } from './services/link-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dlp-home';
  constructor(public commonVariableService:CommonVariableService,
    private linkInjectorService:LinkInjectorService){
      this.linkInjectorService.createLinkForPreconnectOriginURL()
    
  }
}
