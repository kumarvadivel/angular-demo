import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlRoutingModule } from './bl-routing.module';

import { SharedBlModule } from '../shared/sharedBl.module';
import { HttpClientModule } from '@angular/common/http';
import { KlCommonModule } from './common/common.module';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    BlRoutingModule,
    HttpClientModule,
    CommonModule,
    KlCommonModule,
    SharedBlModule
  ]
})
export class BlModule { }
