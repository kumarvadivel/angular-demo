import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingTheme1Module } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '@el-app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedElModule } from '@el-app/shared/sharedEl.module';
import { ELCommonModule } from '@el-app/components/common/common.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingTheme1Module,
    SharedElModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    ELCommonModule,
  ]
})
export class LandingModule { }
