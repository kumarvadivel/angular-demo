import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EnvironmentService } from '@tlad-environments/environment.service';

@Injectable({
  providedIn: 'root'
})
export class LinkInjectorService {

  constructor(@Inject(DOCUMENT) private doc,
  private environmentService:EnvironmentService) { }


  createLinkForPreconnectOriginURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'preconnect');
    link.setAttribute('href', this.environmentService.config.appConfig.secondaryHost);
    link.setAttribute('crossorigin',"")
    this.doc.head.appendChild(link);
    let link2: HTMLLinkElement = this.doc.createElement('link');
    link2.setAttribute('rel', 'preconnect');
    link2.setAttribute('href', this.environmentService.config.appConfig.primaryHost);
    this.doc.head.appendChild(link2);
  }
}
