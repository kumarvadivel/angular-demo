import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';
import { ResumeApplicationComponent } from '@kcc-ah-app/shared/components/resume-application/resume-application.component';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';

const routes: Routes = [
  {
    path:"basicinfo",component:AppLayoutComponent,loadChildren: () => import('../components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"product-declaration",component:AppLayoutComponent,loadChildren: () => import('../components/product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
  },
  {
    path:"consent-document",component:AppLayoutComponent,loadChildren: () => import('../components/consent-document/consent-document.module').then(m => m.ConsentDocumentModule)
  },
  {
    path:"journey-preview",component:AppLayoutComponent,loadChildren: () => import('../components/preview-module/preview-module.module').then(m => m.PreviewModuleModule)
  },
  {
    path:"custom-information", component:AppLayoutComponent,loadChildren: () => import('../components/custom-information/custom-information.module').then(m=> m.CustomInformationModule)
  },
  {
    path:"loan",component:AppLayoutComponent,loadChildren: () =>  import('../components/summary/summary.module').then(m =>  m.SummaryModule)
  },
  {
    path:"application/product/:product", component: QuickStartProductComponent
  },
  {
    path:"",redirectTo:"basicinfo",pathMatch: 'full'
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
