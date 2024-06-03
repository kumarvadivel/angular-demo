import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from '../product-declaration/components/more-info/more-info.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';

const routes: Routes = [
  {path:"mobile-verify",component:MobileNumberVerificationComponent},
  {path:"account-verify",component:AccountNumberVerificationComponent},
  {path:"kyc-verify",component:KycVerificationComponent},
  {path:"more-info",component:MoreInfoComponent},
  {path:"udyam-verify",component:UdhyamRegistrationVerificationComponent},
  {path:"pan-verify",component:PanVerificationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
