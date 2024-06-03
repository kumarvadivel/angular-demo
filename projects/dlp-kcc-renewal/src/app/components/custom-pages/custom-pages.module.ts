import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedKccRenewalModule } from '../../shared/sharedkccrenewal.module';
import { MatStepperModule } from '@angular/material/stepper';
import { KeyFactStatementComponent } from './components/key-fact-statement/key-fact-statement.component';
import { LoanSanctionComponent } from './components/loan-sanction/loan-sanction.component';


@NgModule({
  declarations: [
    KeyFactStatementComponent,
    LoanSanctionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomPagesRoutingModule,
    SharedKccRenewalModule,
    MatStepperModule
  ]
})
export class CustomPagesModule { }
