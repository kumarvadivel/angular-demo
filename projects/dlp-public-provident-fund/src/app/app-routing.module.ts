import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './components/common/app-layout/app-layout.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./components/public-provident.module').then(m => m.PublicProvidentModule)
},
{
  path:"resume-journey",component: AppLayoutComponent,
  loadChildren: () => import('./components/resume-application/resume-application.module').then(m => m.ResumeApplicationTheme1Module)
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
