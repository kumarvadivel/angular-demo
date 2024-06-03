import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';

import { SharedGlModule } from '../../shared/sharedGl.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component'; 
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { GlCommonModule } from '../common/common.module';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';


@NgModule({
  declarations: [AppLayoutComponent,
    MobileNumberVerificationComponent,  
    KycVerificationComponent, 
    UdhyamRegistrationVerificationComponent, 
    PanVerificationComponent,
    QuickStartProductComponent,
    AccountNumberVerificationComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedGlModule,
    GlCommonModule
  ]
})
export class BasicInformationModule { }
