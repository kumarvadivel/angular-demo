import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { SharedTladModule } from '@tlad-app/shared/sharedTlad.module';
import { EkycVerificationComponent } from './components/ekyc-verification/ekyc-verification.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SchemeSelectionComponent } from './components/scheme-selection/scheme-selection.component';
import { SanctionDetailsComponent } from './components/sanction-details/sanction-details.component';
import { KeyFactDetailsComponent } from './components/key-fact-details/key-fact-details.component';
import { EsignComponent } from './components/esign/esign.component';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';


@NgModule({
  declarations: [
    AccountNumberVerificationComponent,
    EkycVerificationComponent,
    PersonalDetailsComponent,
    SchemeSelectionComponent,
    SanctionDetailsComponent,
    KeyFactDetailsComponent,
    EsignComponent,
    LoanSummaryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedTladModule
  ]
})
export class PagesModule { }
