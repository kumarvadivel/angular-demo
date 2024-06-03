import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';
import { SharedKCCModule } from '../../shared/sharedKCC.module';
import { LoanEligibilityComponent } from './components/loan-eligibility/loan-eligibility.component';
import { STPCongratulationsComponent } from './components/stp-congratulations/stp-congratulations.component';


@NgModule({
  declarations: [
    LoanSummaryComponent,
    LoanEligibilityComponent,
    STPCongratulationsComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedKCCModule
  ]
})
export class SummaryModule { }
