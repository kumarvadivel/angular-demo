import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { EkycVerificationComponent } from './components/ekyc-verification/ekyc-verification.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SchemeSelectionComponent } from './components/scheme-selection/scheme-selection.component';
import { SanctionDetailsComponent } from './components/sanction-details/sanction-details.component';
import { KeyFactDetailsComponent } from './components/key-fact-details/key-fact-details.component';
import { EsignComponent } from './components/esign/esign.component';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';
const routes: Routes = [
  {
    path:"account-verification",component:AccountNumberVerificationComponent
  },
  {
    path:"aadhar-verification",component:EkycVerificationComponent
  },
  {
    path:"personal-details",component:PersonalDetailsComponent
  },
  {
    path:"select-scheme",component:SchemeSelectionComponent
  },
  {
    path:"sanction-details",component:SanctionDetailsComponent
  },
  {
    path:"key-fact-details",component:KeyFactDetailsComponent
  },
  {
    path:"e-sign",component:EsignComponent
  },
  {
    path:'loan-summary', component:LoanSummaryComponent
  }
];    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
