import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsmeRoutingModule } from './msme-routing.module';

import { SharedMsmeModule } from '../shared/sharedMsme.module';
import { HttpClientModule } from '@angular/common/http';
import { KlCommonModule } from './common/common.module';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    MsmeRoutingModule,
    HttpClientModule,
    CommonModule,
    KlCommonModule,
    SharedMsmeModule
  ]
})
export class MsmeModule { }
