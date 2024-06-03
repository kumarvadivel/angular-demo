import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


 const routes: Routes = [
 {
  path:"resume-journey",
  loadChildren: () => import('../resume-application/resume-application.module').then(m => m.ResumeApplicationModule)
},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
