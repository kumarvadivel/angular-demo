import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELRoutingModule } from './el-routing.module';

import { SharedElModule } from '@el-app/shared/sharedEl.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ELCommonModule } from './common/common.module';


@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ELRoutingModule,
    ELCommonModule,
    SharedElModule,
  ],
  providers: [HttpClient]
})

export class ElModule { }
