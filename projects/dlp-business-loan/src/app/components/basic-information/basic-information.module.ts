import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';

import { SharedBlModule } from '../../shared/sharedBl.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component'; 
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { KlCommonModule } from '../common/common.module';
import { CustomerTypeComponent } from './components/customer-type/customer-type.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';
import { ContactBranchComponent } from './components/contact-branch/contact-branch.component';


@NgModule({
  declarations: [AppLayoutComponent,
    MobileNumberVerificationComponent, 
    EmailIdVerificationComponent, 
    KycVerificationComponent, 
    UdhyamRegistrationVerificationComponent, 
    PanVerificationComponent,
    MobileNumberVerificationComponent,
    CustomerTypeComponent,
    AccountNumberVerificationComponent,
    QuickStartProductComponent,
    ContactBranchComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedBlModule,
    KlCommonModule
  ]
})
export class BasicInformationModule { }
