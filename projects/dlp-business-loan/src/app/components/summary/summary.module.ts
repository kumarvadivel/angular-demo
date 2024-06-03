import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';
import { SharedBlModule } from '../../shared/sharedBl.module';


@NgModule({
  declarations: [
    LoanSummaryComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedBlModule
  ]
})
export class SummaryModule { }
