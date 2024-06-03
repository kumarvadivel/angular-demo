import { NgModule } from '@angular/core';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './modules/common/components/app-layout/app-layout.component';


function routesFactory() {
  return [
    {
      path:"",
      component:AppLayoutComponent,
      loadChildren: ()=>import('./modules/landing/landing.module').then(m=>m.LandingModule)
    },
    {
      path:"resume-journey",
      component:AppLayoutComponent,
      loadChildren: () => import("./modules/resume-application/resume-application.module").then(m=>m.ResumeApplicationModule)
    },
      {
          path: '**',
          redirectTo: ''
      },
  ]
}
@NgModule({
  imports: [RouterModule.forRoot([], {
      
      onSameUrlNavigation: 'reload',
      'urlUpdateStrategy': 'eager'
  })],
  providers: [{
      provide: ROUTES,
      useFactory: routesFactory,
      multi: true,
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
