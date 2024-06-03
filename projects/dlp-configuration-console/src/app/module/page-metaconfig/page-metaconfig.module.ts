import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMetaconfigRoutingModule } from './page-metaconfig-routing.module';
import { PageMetaconfigConsoleComponent } from './components/page-metaconfig-console/page-metaconfig-console.component';
import { SharedConsoleModule } from '@config-app/shared/SharedConsole.module';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    PageMetaconfigConsoleComponent
  ],
  imports: [
    CommonModule,
    SharedConsoleModule,
    PageMetaconfigRoutingModule
  ]
})
export class PageMetaconfigModule { }
