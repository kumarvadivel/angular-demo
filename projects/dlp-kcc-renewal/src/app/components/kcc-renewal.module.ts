import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KccRenewalRoutingModule } from './kcc-renewal-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedKccRenewalModule } from '../shared/sharedkccrenewal.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KccRenewalRoutingModule,
    HttpClientModule,
    SharedKccRenewalModule
  ]
})
export class KccRenewalModule { }
