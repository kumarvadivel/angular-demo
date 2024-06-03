import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonLogicDescriberRoutingModule } from './json-logic-describer-routing.module';
import { JsonLogicDescriberComponent } from './components/json-logic-describer/json-logic-describer.component';
import { SharedConsoleModule } from '@config-app/shared/SharedConsole.module';


@NgModule({
  declarations: [
    JsonLogicDescriberComponent
  ],
  imports: [
    CommonModule,
    SharedConsoleModule,
    JsonLogicDescriberRoutingModule
  ]
})
export class JsonLogicDescriberModule { }
