import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { ContactBranchComponent } from './components/contact-branch/contact-branch.component';
import { CustomerTypeComponent } from './components/customer-type/customer-type.component';
import { UdhyamRegistrationVerificationComponent } from './components/udhyam-registration-verification/udhyam-registration-verification.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';

const routes: Routes = [
  {
    path:"customer-type",
    component:CustomerTypeComponent
  },
  {
    path: "account-number-verification",
    component: AccountNumberVerificationComponent
  },
  {
    path: "mobile-verify",
    component: MobileNumberVerificationComponent
  },
  {
    path: "more-info",
    component: MoreInfoComponent
  },
  {path:"udyam-verify",component:UdhyamRegistrationVerificationComponent},
  {path:"pan-verify",component:PanVerificationComponent},
  {path:"email-verify",component:EmailIdVerificationComponent},
  {path:'contact-branch',component:ContactBranchComponent},
  {
    path:"", redirectTo:"customer-type",pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
