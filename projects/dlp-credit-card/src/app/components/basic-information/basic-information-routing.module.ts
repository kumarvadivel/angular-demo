import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from '../credit-card/components/more-info/more-info.component';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { CcDetailsComponent } from '../credit-card/components/cc-details/cc-details.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
const routes: Routes = [
  { path: "account-number-verification", component: AccountNumberVerificationComponent },
  { path: "mobile-verify", component: MobileNumberVerificationComponent },
  { path: "more-info", component: MoreInfoComponent },
  { path: 'cc-details', component: CcDetailsComponent },
  { path:"choose-loan",component:ProductDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
