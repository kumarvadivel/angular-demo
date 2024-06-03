import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorKycComponent } from './components/director-kyc/director-kyc.component';
import { DirectorDetailsComponent } from './components/director-details/director-details.component';

const routes: Routes = [
  {
    path: 'director-kyc', component: DirectorKycComponent
  },
  {
    path: 'director-details', component: DirectorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorInfoRoutingModule { }
