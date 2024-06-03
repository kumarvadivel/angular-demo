import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyFactStatementComponent } from './components/key-fact-statement/key-fact-statement.component';
import { LoanSanctionComponent } from './components/loan-sanction/loan-sanction.component';


const routes: Routes = [
  {
    path:"key-fact-statement",component:KeyFactStatementComponent
  },
  {
    path:"loan-sanction",component:LoanSanctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
