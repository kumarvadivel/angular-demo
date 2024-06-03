import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from '../product-declaration/components/more-info/more-info.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';

const routes: Routes = [
  {path:"kyc-verify",component:KycVerificationComponent},
  {path:"more-info",component:MoreInfoComponent},
  {path:"udyam-verify",component:UdhyamRegistrationVerificationComponent},
  {path:"account-number-verification",component:AccountNumberVerificationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
