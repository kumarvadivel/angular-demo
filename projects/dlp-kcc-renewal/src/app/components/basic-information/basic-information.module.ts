import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';

import { SharedKccRenewalModule } from '../../shared/sharedkccrenewal.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component'; 
import { KlCommonModule } from '../common/common.module';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';


@NgModule({
  declarations: [AppLayoutComponent,
    MobileNumberVerificationComponent, 
    MobileNumberVerificationComponent,
    AccountNumberVerificationComponent
    ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedKccRenewalModule,
    KlCommonModule
  ],
})
export class BasicInformationModule { }
