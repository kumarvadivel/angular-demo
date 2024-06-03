import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailIdVerificationComponent } from './components/email-id-verification/email-id-verification.component';

const routes: Routes = [
  {path: "email-verify", component: EmailIdVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasicInformationRoutingModule { }
