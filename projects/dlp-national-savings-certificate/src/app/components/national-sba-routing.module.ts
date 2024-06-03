import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { AppLayoutComponent } from '@nsc-app/components/common/app-layout/app-layout.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path:"core",component: AppLayoutComponent,
    loadChildren: () => import('@nsc-app-components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'basic-info', component:AppLayoutComponent,loadChildren: () => import('@nsc-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },  
  {
    path: 'product-declaration', component:AppLayoutComponent,loadChildren: () => import('@nsc-app-components/product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
  }, 
  {
    path: 'vkyc', component:AppLayoutComponent,loadChildren: () => import('@nsc-app-components/vkyc/vkyc.module').then(m => m.VkycModule)
  }, 
  {
    path:"loan",component:AppLayoutComponent,loadChildren: () =>  import('@nsc-app-components/summary/summary.module').then(m =>  m.SummaryModule)
  },  
  {  
    path:"application/product/:product", component: QuickStartProductComponent
  },
  {path:'',redirectTo:'core',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationalSbaRoutingModule { }
