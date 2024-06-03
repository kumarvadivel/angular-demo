import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from '../product-declaration/components/more-info/more-info.component';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';
import { KycVerificationComponent } from './components/kyc-verification/kyc-verification.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';
import { CustomerTypeComponent } from './components/customer-type/customer-type.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { SanctionComponent } from '../sanction-details/components/sanction/sanction.component';
import { ContactBranchComponent } from './components/contact-branch/contact-branch.component';

const routes: Routes = [
  {path:"customer-type",component:CustomerTypeComponent},
  {path:"mobile-verify",component:MobileNumberVerificationComponent},
  {path:"email-verify",component:EmailIdVerificationComponent},
  {path:"kyc-verify",component:KycVerificationComponent},
  {path:"more-info",component:MoreInfoComponent},
  {path:"udyam-verify",component:UdhyamRegistrationVerificationComponent},
  {path:"pan-verify",component:PanVerificationComponent},
  {path:"account-number-verification",component:AccountNumberVerificationComponent},
  {path:"sanction", component:SanctionComponent},
  {path:'contact-branch',component:ContactBranchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
