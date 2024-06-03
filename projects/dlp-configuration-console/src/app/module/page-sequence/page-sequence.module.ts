import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSequenceRoutingModule } from './page-sequence-routing.module';
import { PageSequenceConfigurationConsoleComponent } from './components/page-sequence-configuration-console/page-sequence-configuration-console.component';
import { SharedConsoleModule } from '@config-app/shared/SharedConsole.module';


@NgModule({
  declarations: [
    PageSequenceConfigurationConsoleComponent
  ],
  imports: [
    CommonModule,
    SharedConsoleModule,
    PageSequenceRoutingModule
  ]
})
export class PageSequenceModule { }
