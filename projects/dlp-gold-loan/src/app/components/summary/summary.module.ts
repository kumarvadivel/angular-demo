import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';
import { SharedGlModule } from '../../shared/sharedGl.module';


@NgModule({
  declarations: [
    LoanSummaryComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedGlModule
  ]
})
export class SummaryModule { }
