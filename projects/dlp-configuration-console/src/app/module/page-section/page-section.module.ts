import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSectionRoutingModule } from './page-section-routing.module';
import { PageSectionConfigurationConsoleComponent } from './components/page-section-configuration-console/page-section-configuration-console.component';
import { SharedConsoleModule } from '@config-app/shared/SharedConsole.module';


@NgModule({
  declarations: [
    PageSectionConfigurationConsoleComponent
  ],
  imports: [
    CommonModule,
    SharedConsoleModule,
    PageSectionRoutingModule
  ]
})
export class PageSectionModule { }
