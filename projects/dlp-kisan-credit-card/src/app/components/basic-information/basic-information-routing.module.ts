import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { ContactBranchComponent } from './components/contact-branch/contact-branch.component';

const routes: Routes = [
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
  {path:'contact-branch',component:ContactBranchComponent},
  {
    path:"", redirectTo:"account-number-verification",pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
