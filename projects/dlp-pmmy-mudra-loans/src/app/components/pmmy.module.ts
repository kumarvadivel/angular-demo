import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmmyRoutingModule } from './pmmy-routing.module';

import { SharedPmmyModule } from '../shared/sharedPmmy.module';
import { HttpClientModule } from '@angular/common/http';
import { KlCommonModule } from './common/common.module';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    PmmyRoutingModule,
    HttpClientModule,
    CommonModule,
    KlCommonModule,
    SharedPmmyModule
  ]
})
export class PmmyModule { }
