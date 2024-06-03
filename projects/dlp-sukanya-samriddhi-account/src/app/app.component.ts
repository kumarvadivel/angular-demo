import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription'; 
import { EnvironmentService } from '../environments/environment.service'; 
import { CommonVariableService } from '@ssa-app/services/common-variable-service'; 
import { SharedService } from '@ssa-app/shared/services/utils/shared.service';
import  IdleTimer  from '@ssa-app/shared/helpers/IdleTimer.js';
import { LocalStorage } from '@ssa-app/shared/helpers/LocalStorage';
import { LinkInjectorService } from './services/link-injector.service';
declare let Appice: any;
export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BOI';
  subscription: Subscription;
  timer: any;
  //BOI development
  constructor(public translate: TranslateService, private location: PlatformLocation, private router: Router,
    public commonVariableService:CommonVariableService, 
    public sharedService:SharedService,
    private linkInjectorService:LinkInjectorService,
    public environmentService:EnvironmentService,private localStorage:LocalStorage) {
      this.loadExternalScript('https://webcdn.appice.io/appicewebsdkv2/appice.js');
    this.detectUserAgent()
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en/) ? 'en' : '');
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
    this.linkInjectorService.createLinkForPreconnectOriginURL()
  }

  detectUserAgent(){
    if(window.navigator.userAgent=='BOI_Borrower_MobileApp'){
      this.commonVariableService.appLayoutConfig.mobileView = true
    }
    let sWidth = screen.width;
    if(JSON.parse(localStorage.getItem("isMobile")) || (sWidth >= 320 && sWidth <= 996)){
      this.commonVariableService.appLayoutConfig.mobileView = true
    }
  }
  ngOnInit() {
   this.sessionDetector();
    //End Broweser Version Checking
  }
  ngAfterViewInit() {
    if (this.environmentService.config?.appConfig?.disableDevelopersTools) this.disableContextMenu();
    if(!this.commonVariableService.tenentConfiguration.devMode){
      this.location.onPopState(() => {
        window.location.href = `${window.origin}/core/session-expired`;
      });
    }

  }

 
  disableContextMenu() {
    window.onload = function () {
        document.addEventListener("contextmenu", preventDefaultEvent, false);
        document.addEventListener("keydown", handleKeydownEvent, false);

        function preventDefaultEvent(e) {
            e.preventDefault();
        }

        function handleKeydownEvent(e) {
            const isMac = navigator.userAgent.indexOf('Mac') !==1
            const keyBindings = [
                { keys: [e.ctrlKey, e.shiftKey, e.keyCode == 73] },
                { keys: [e.ctrlKey, e.shiftKey, e.keyCode == 74] },
                { keys: [e.keyCode == 83, isMac ? e.metaKey : e.ctrlKey] },
                { keys: [e.ctrlKey, e.keyCode == 85] },
                { keys: [e.keyCode == 123] },
            ];

            if (keyBindings.some(binding => binding.keys.every(Boolean))) {
                disabledEvent(e);
            }
        }

       
        function disabledEvent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.preventDefault();
            return false;
        }
        
    }
}


  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

  public loadExternalScript(url: string) {

    const body = document.body;
    const script:any = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    script.data_src = this.environmentService.configData.appConfig.appiceConfig
    let swpath =  'serviceworker.js'
    script.addEventListener('load',()=>{
      const config = script.data_src
      Appice.initializeWithConfig(swpath,config.app_version,config.app_package,config.app_key,config.app_id,config.api_key,config.applicationKey, "","", "", "")
      Appice.showPermissionForPush(window.location.href);
    })
    body.appendChild(script);
   }

   redirectToSessionExpired(){
    if (this.localStorage.SessionGetItem('CURRENT_JOURNEY') && !this.commonVariableService.tenentConfiguration.devMode) {
        this.sharedService.openSnackBar('session Expired');
        this.router.navigateByUrl('core/session-expired').catch(console.error);
    }
    this.sessionDetector()
}

   sessionDetector(){

    this.timer = new IdleTimer({
        timeout: this.environmentService.configData.appConfig.sessionTimeout*60,
        onTimeout:() => {
          this.redirectToSessionExpired();
        },//expired after 10 secs //for 30 min: 60*30
        onExpired: () => { 
          this.redirectToSessionExpired();
        }
      });
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
