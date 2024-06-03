import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from '@pmmy-app/components/basic-information/components/app-layout/app-layout.component';
import { ResumeApplicationComponent } from '@pmmy-app/shared/components/resume-application/resume-application.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';
import { SuccessComponent } from '@pmmy-app/components/success/success.component';

const routes: Routes = [
  {
    path:":product/basicinfo",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:":product/product-declaration",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
  },
  {
    path:":product/director-info",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/director-info/director-info.module').then(m => m.DirectorInfoModule)
  },
  {
    path:":product/custom-information", component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/custom-information/custom-information.module').then(m=> m.CustomInformationModule)
  },
  {
    path:":product/consent-document",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/consent-document/consent-document.module').then(m => m.ConsentDocumentModule)
  },
  {
    path:":product/custom-information",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
  },
  {
    path:":product/loan",component:AppLayoutComponent,loadChildren: () =>  import('@pmmy-app-components/summary/summary.module').then(m =>  m.SummaryModule)
  },
  {
    path:":product/sanction-details",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/sanction-details/sanction-details.module').then(m => m.SanctionDetailsModule)
  },
  {
    path:"1",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:":product/journey-preview",component:AppLayoutComponent,loadChildren: () => import('@pmmy-app-components/preview-module/preview-module.module').then(m => m.PreviewModuleModule)
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
export class PmmyRoutingModule { }
