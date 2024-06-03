import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from '@cc-app/components/common/app-layout/app-layout.component';
import { SuccessComponent } from '@cc-app/components/success/success.component';
import { ResumeApplicationComponent } from '@cc-app/shared/components/resume-application/resume-application.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';

const routes: Routes = [
  // {
  //   path: "", component: AppLayoutComponent, children: [
  //     {
  //       path: "basicinfo", loadChildren: () => import('@cc-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  //     },
  //     {
  //       path: "", loadChildren: () => import('@cc-app-components/credit-card/credit-card.module').then(m => m.CreditCardModule)
  //     },
  //     {
  //       path:"choose-loan",
  //       component:ProductDescriptionComponent,
  //     },
  //   ]
  // },
  {
    path: "basicinfo",component:AppLayoutComponent, loadChildren: () => import('@cc-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path: "cards", component:AppLayoutComponent,loadChildren: () => import('@cc-app-components/credit-card/credit-card.module').then(m => m.CreditCardModule)
  },
  // {
  //   path: "choose-loan", loadChildren: () => import('@cc-app-components/landing/landing.module').then(m => m.LandingModule)
  // },
  {
    path:"1",component:AppLayoutComponent,loadChildren: () => import('@cc-app-components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:"",redirectTo:"1",pathMatch: 'full'
  },
  {
    path: "", component: SuccessComponent, pathMatch: 'full'
  },
  {
    path: "application/product/:product", component: QuickStartProductComponent
  },
  {
    path: "application/resume/resumeApplication", component: ResumeApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCRoutingModule { }
