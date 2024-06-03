import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from '@tlad-app/Tlad/common/app-layout/app-layout.component';
import {ResumeApplicationComponent} from '@tlad-app/shared/components/resume-application/resume-application.component';
import { SuccessComponent } from '@tlad-app/shared/components/success/success.component';

const routes: Routes = [
    {
        path: "1",
        component: AppLayoutComponent,
        loadChildren: () => import('@tlad-app/Tlad/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: "", redirectTo: "1", pathMatch: 'full'
    },
    {
        path:"term-loan-against-OD",
        component: AppLayoutComponent,
        loadChildren: () => import('@tlad-app/Tlad/pages/pages.module').then(m=>m.PagesModule)
    },
    {
        path: "", component: SuccessComponent, pathMatch: 'full'
    },
    {
        path: "application/resume/resumeApplication", component: ResumeApplicationComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TladRoutingModule {
}
