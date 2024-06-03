import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanSummaryComponent } from './components/loan-summary.component';

const routes: Routes = [
  {
    path: 'loan-summary', component: LoanSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
