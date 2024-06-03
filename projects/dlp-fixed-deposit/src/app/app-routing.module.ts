import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { AppLayoutComponent } from './components/common/app-layout/app-layout.component';
const routes: Routes = [{
    path: '',
    loadChildren: () => import('./components/fd.module').then(m => m.FdModule)
  },
  {
    path:"resume-journey",component: AppLayoutComponent,
    loadChildren: () => import('./components/resume-application/resume-application.module').then(m => m.ResumeApplicationTheme1Module)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', 'urlUpdateStrategy': 'eager' })],
  exports: [RouterModule]
})

 
export class AppRoutingModule { }
