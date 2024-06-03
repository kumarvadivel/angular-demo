import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from '@tl-app/components/basic-information/components/app-layout/app-layout.component';
import {SuccessComponent} from '@tl-app/components/success/success.component';
import {ResumeApplicationComponent} from '@tl-app/shared/components/resume-application/resume-application.component';
import { QuickStartProductComponent } from './basic-information/components/quick-start-product/quick-start-product.component';

const routes: Routes = [
    {
        path: "basicinfo",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
    },
    {
        path: "product-declaration",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/product-declaration/product-declaration.module').then(m => m.ProductDeclarationModule)
    },
    {
        path: "custom-information",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
    },
    {
        path: "sanction-details",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/sanction-details/sanction-details.module').then(m => m.SanctionDetailsModule)
    },
    {
        path: "co-applicant",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/co-applicant/co-applicant.module').then(m=>m.CoApplicantModule)
    },
    {
        path: "loan",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/summary/summary.module').then(m => m.SummaryModule)
    },
    {
        path: "1",
        component: AppLayoutComponent,
        loadChildren: () => import('@tl-app-components/landing/landing.module').then(m => m.LandingModule)
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
export class TLRoutingModule {
}
