import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component'; 
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';
const routes: Routes = [ 
  {path:"mobile-number-verification",component:MobileNumberVerificationComponent},
  {path:"account-number-verification",component:AccountNumberVerificationComponent},
  {path:"email-verification",component:EmailIdVerificationComponent},
  {path:"pan-verification",component:PanVerificationComponent},
  {path:"aadhaar-verification",component:KycVerificationComponent},
  {path:"address-details",component:AddressDetailsComponent},
  {path:"udyam-verify",component:UdhyamRegistrationVerificationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
