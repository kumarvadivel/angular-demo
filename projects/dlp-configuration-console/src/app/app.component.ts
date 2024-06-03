import { Component } from '@angular/core';
import { sampleconfig,componentTypes, section_base_configs, configurationFields } from './services/utils/config';
import { CommonCommonService } from './services/common-common.service';
import { SharedService } from './shared/services/utils/shared.service';
import { Subject } from 'rxjs';
import { LinkInjectorService } from './services/link-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Configuration Console';
  config = sampleconfig
  componentTypes = componentTypes
  previewconfig:any = []
  previewRefresh = new Subject<void>()
  currentSection:any = null
  sectionConfigurationfields = null
  currentSectionConfiguredConfig:any ={}
  isCurrentSectionisOnPreview = false
  mainConfig = []
  constructor(private linkInjectorService:LinkInjectorService){
    this.linkInjectorService.createLinkForPreconnectOriginURL()
  }
 
}
