import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';
import { SharedMsmeModule } from '../../shared/sharedMsme.module';


@NgModule({
  declarations: [
    LoanSummaryComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedMsmeModule
  ]
})
export class SummaryModule { }
