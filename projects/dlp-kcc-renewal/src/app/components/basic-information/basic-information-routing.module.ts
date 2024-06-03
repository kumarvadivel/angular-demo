import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from '../product-declaration/components/more-info/more-info.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';

const routes: Routes = [
  {path:"mobile-verify",component:MobileNumberVerificationComponent},
  {path:"more-info",component:MoreInfoComponent},
  {path:"account-number-verification",component:AccountNumberVerificationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
