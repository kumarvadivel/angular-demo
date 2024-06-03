import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';

import { SharedElModule } from '@el-app/shared/sharedEl.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { ELCommonModule } from '../common/common.module';
import { LandingComponent } from '../landing/components/landing/landing.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    EmailIdVerificationComponent,
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedElModule, 
    ELCommonModule,
  ],
})

export class BasicInformationModule { }
