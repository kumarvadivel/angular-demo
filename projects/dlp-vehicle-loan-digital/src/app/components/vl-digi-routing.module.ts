import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from '@vldigi-app/components/basic-information/components/app-layout/app-layout.component';
import {SuccessComponent} from '@vldigi-app/components/success/success.component';
import {ResumeApplicationComponent} from '@vldigi-app/shared/components/resume-application/resume-application.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';

const routes: Routes = [
    {
        path: "basicinfo",
        component: AppLayoutComponent,
        loadChildren: () => import('@vldigi-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
    },
    {
        path: "product-declaration",
        component: AppLayoutComponent,
        loadChildren: () => import('@vldigi-app-components/product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
    },
    {
        path: "custom-information",
        component: AppLayoutComponent,
        loadChildren: () => import('@vldigi-app-components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
    },
    {
        path: "sanction-details",
        component: AppLayoutComponent,
        loadChildren: () => import('@vldigi-app-components/sanction-details/sanction-details.module').then(m => m.SanctionDetailsModule)
    },
    {
        path: "loan",
        component: AppLayoutComponent,
        loadChildren: () => import('@vldigi-app-components/summary/summary.module').then(m => m.SummaryModule)
    },
    {
        path: 'vkyc', component:AppLayoutComponent,loadChildren: () => import('@vldigi-app-components/vkyc/vkyc.module').then(m => m.VkycModule)
    }, 
    {
        path: "1",
        component: AppLayoutComponent,
        loadChildren: () => import('@vldigi-app-components/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: "", redirectTo: "1", pathMatch: 'full'
    },
    {
        path: "", component: SuccessComponent, pathMatch: 'full'
    },
    {
        path: "application/resume/resumeApplication", component: ResumeApplicationComponent
    },
    {
        path:"application/product/:product", component: QuickStartProductComponent
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VLDigiRoutingModule {
}
