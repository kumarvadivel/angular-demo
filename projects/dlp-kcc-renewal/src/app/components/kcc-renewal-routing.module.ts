import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from '@kcc-renewal-app/components/basic-information/components/app-layout/app-layout.component';
import { SuccessComponent } from '@kcc-renewal-app/components/success/success.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';
import { ResumeApplicationComponent } from '@kcc-renewal-app/shared/components/resume-application/resume-application.component';

const routes: Routes = [
  {
    path:":product/basicinfo",component:AppLayoutComponent,loadChildren: () => import('@kcc-renewal-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path: 'product/product-declaration', component:AppLayoutComponent,loadChildren: () => import('@kcc-renewal-app-components/product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
  },
  {
    path: 'product/consent-document', component:AppLayoutComponent,loadChildren: () => import('@kcc-renewal-app-components/consent-document/consent-document.module').then(m => m.ConsentDocumentModule)
  },
  {
    path:"product/custom-information",component:AppLayoutComponent,loadChildren: () => import('@kcc-renewal-app-components/custom-information/custom-information.module').then(m => m.CustomInformationModule)
  },
  {
    path:":product/custom-pages",component:AppLayoutComponent,loadChildren: () => import('@kcc-renewal-app-components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
  },
  {
    path:":product/loan",component:AppLayoutComponent,loadChildren: () =>  import('@kcc-renewal-app-components/summary/summary.module').then(m =>  m.SummaryModule)
  },
  {
    path:"1",component:AppLayoutComponent,loadChildren: () => import('@kcc-renewal-app-components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:"",redirectTo:"1",pathMatch: 'full'
  },
  {
    path: "", component: SuccessComponent, pathMatch: 'full'
  },
  {
    path:"application/resume/resumeApplication", component: ResumeApplicationComponent
  },
  {
    path:"application/product/:product", component: QuickStartProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KccRenewalRoutingModule { }
