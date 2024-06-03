import {PlatformLocation} from '@angular/common';
import {Component, Injector} from '@angular/core';
import {NavigationStart, Router, RouterOutlet} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';
import {EnvironmentService} from './../environments/environment.service';
import {SharedService} from '@cc-app/shared/services/utils/shared.service';
import {CommonCommonService} from './services/common-common.service';
import {CommonVariableService} from './services/common-variable-service';
import IdleTimer from '@cc-app/shared/helpers/IdleTimer.js';
import {LocalStorage} from './shared/helpers/localStorage';
import { applicationConfig } from './services/utils/data';
import { LinkInjectorService } from './services/link-injector.service';

declare let Appice: any;
export let browserRefresh = false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Integreat';
  subscription: Subscription;
  timer: any;
  environmentService: EnvironmentService;
  localStorage: LocalStorage;
  linkInjectorService:LinkInjectorService
  constructor(
              private router: Router,
              private location: PlatformLocation,
              public commonVariableService: CommonVariableService,
              public commonService: CommonCommonService,
              public sharedService: SharedService,
              private injector: Injector,
  ) {
    this.linkInjectorService = this.injector.get<LinkInjectorService>(LinkInjectorService)
      document.title = applicationConfig.clientShortName
      this.environmentService = this.injector.get<EnvironmentService>(EnvironmentService)
      this.localStorage = this.injector.get<LocalStorage>(LocalStorage)
      this.loadExternalScript('https://webcdn.appice.io/appicewebsdkv2/appice.js');
      this.detectUserAgent()
      this.subscription = this.router.events.subscribe((event) => {
          if (event instanceof NavigationStart) {
              browserRefresh = !router.navigated;
          }
      });
      this.linkInjectorService.createLinkForPreconnectOriginURL()
  }

  detectUserAgent() {
      if (window.navigator.userAgent == 'Integreat_Borrower_MobileApp') {
          this.commonVariableService.appLayoutConfig.mobileView = true
      }
      if (this.localStorage.getItem("isMobile")) {
          this.commonVariableService.appLayoutConfig.mobileView = true
      }
  }

  ngOnInit() {
      this.sessionDetector();
  }

  ngAfterViewInit() {
      if (this.environmentService.config?.appConfig?.disableDevelopersTools) this.disableContextMenu();
      if (!this.commonVariableService.tenentConfiguration.devMode) {
          this.location.onPopState(() => {
              window.location.href = `${window.origin}/core/session-expired`;
          });
      }
  }

  disableContextMenu() {
      window.onload = function () {
          document.addEventListener("contextmenu", function (e) {
              e.preventDefault();
          }, false);
          document.addEventListener("keydown", function (e) {
              let n: any = navigator
              if ((e.ctrlKey && ((e.key == 'i' && e.shiftKey) || (e.key == "j" && e.shiftKey) || e.key == 'u')) || (e.key == 's' && (n.userAgentData.platform.match("Mac") ? e.metaKey : e.ctrlKey)) || (e.key == 'F12')) {
                  disabledEvent(e);
              }
          }, false);

          function disabledEvent(e) {
              if (e.stopPropagation) {
                  e.stopPropagation();
              } else if (e) {
                  e.cancelBubble = true;
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
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      script.data_src = this.environmentService.configData.appConfig.appiceConfig
      let swpath = 'serviceworker.js'
      script.addEventListener('load', (_ev) => {
        if(typeof Appice != 'undefined'){
            const config = script.data_src
            Appice.initializeWithConfig(swpath, config.app_version, config.app_package, config.app_key, config.app_id, config.api_key, config.applicationKey, "", "", "", "")
            Appice.showPermissionForPush(window.location.href);
        }
      })
      body.appendChild(script);
  }

  sessionDetector() {
      this.timer = new IdleTimer({
          timeout: this.environmentService.configData.appConfig.sessionTimeout * 60,
          onTimeout: () => {
              this.navigateToExpiry()
          },
          onExpired: () => {
              this.navigateToExpiry()
          }
      });
  }

  navigateToExpiry() {
      if (this.localStorage.SessionGetItem('CURRENT_JOURNEY') && !this.commonVariableService.tenentConfiguration.devMode) {
          this.sharedService.openSnackBar('session Expired');
          window.location.href = `${window.origin}/core/session-expired`;
      }
      this.sessionDetector()
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
