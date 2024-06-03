import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { MobileNumberVerificationComponent } from '@ssa-app-components/basic-information/components/mobile-number-verification/mobile-number-verification.component'; 
import { CommonSbaModule } from '@ssa-app-components/common/common.module';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { SharedSBAModule } from '@ssa-app/shared/sharedSBA.module';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';


@NgModule({
  declarations: [ 
    MobileNumberVerificationComponent,
    EmailIdVerificationComponent,
    PanVerificationComponent,
    KycVerificationComponent,
    AddressDetailsComponent,
    AccountNumberVerificationComponent,
    QuickStartProductComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule, 
    SharedSBAModule,
    CommonSbaModule
  ]
})
export class BasicInformationModule { }
