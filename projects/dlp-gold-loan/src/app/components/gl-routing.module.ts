import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from './basic-information/components/app-layout/app-layout.component';
import { SuccessComponent } from './success/success.component';
import { ResumeApplicationComponent } from './../shared/components/resume-application/resume-application.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';

const routes: Routes = [
  {
    path:"basicinfo",component:AppLayoutComponent,loadChildren: () => import('./basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"product-declaration",component:AppLayoutComponent,loadChildren: () => import('./product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
  },
  {
    path:"custom-information", component:AppLayoutComponent,loadChildren: () => import('./custom-information/custom-information.module').then(m=> m.CustomInformationModule)
  },
  {
    path:"loan",component:AppLayoutComponent,loadChildren: () =>  import('./summary/summary.module').then(m =>  m.SummaryModule)
  },
  // {
  //   path:"core",component:AppLayoutComponent,loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  // },
  {
    path:"", component: SuccessComponent,pathMatch: 'full'
  },
  {
    path:"application/product/:product", component: QuickStartProductComponent
  },
  {
    path:"application/resume/resumeApplication", component: ResumeApplicationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GLRoutingModule { }
