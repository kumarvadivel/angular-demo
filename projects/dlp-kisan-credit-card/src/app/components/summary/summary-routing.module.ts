import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanEligibilityComponent } from './components/loan-eligibility/loan-eligibility.component';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';
import { STPCongratulationsComponent } from './components/stp-congratulations/stp-congratulations.component';

const routes: Routes = [
   
  {
    path:'summary',
    component:LoanSummaryComponent
  },
  {
    path:'eligibility',
    component:LoanEligibilityComponent
  },
  {
    path:'stp-congratulations',
    component:STPCongratulationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
