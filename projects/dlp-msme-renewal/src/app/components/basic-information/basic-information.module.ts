import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';

import { SharedMsmeModule } from '../../shared/sharedMsme.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component'; 
import { KlCommonModule } from '../common/common.module';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';


@NgModule({
  declarations: [AppLayoutComponent,
    KycVerificationComponent, 
    UdhyamRegistrationVerificationComponent, 
    AccountNumberVerificationComponent,
    QuickStartProductComponent
    ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedMsmeModule,
    KlCommonModule
  ],
})
export class BasicInformationModule { }
