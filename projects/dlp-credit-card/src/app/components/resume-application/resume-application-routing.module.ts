import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { TrackStatusComponent } from './components/track-status/track-status.component';

const routes: Routes = [
  {
    path:"resume-application",
    component: TrackStatusComponent
  },
  {
    path:"application-status",
    component: ApplicationStatusComponent
  },
  {
    path:"",redirectTo:"resume-journey",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeApplicationRoutingModule { }