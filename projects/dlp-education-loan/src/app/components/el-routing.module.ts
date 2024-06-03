import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '@el-app/components/basic-information/components/app-layout/app-layout.component'

const routes: Routes = [
  {
    path:"1",
    component: AppLayoutComponent,
    loadChildren: () => import('@el-app-components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: ":product/basicinfo", 
    component: AppLayoutComponent, 
    loadChildren: () => import('@el-app-components/basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:":product/custom-information",
    component:AppLayoutComponent,
    loadChildren: () => import('@el-app-components/custom-info/custom-info.module').then(m => m.CustomInfoModule )
  },
  {
    path: ":product/loan", 
    component: AppLayoutComponent,
    loadChildren: () => import('@el-app-components/summary/summary.module').then(m=> m.SummaryModule)
  },
  {
    path:"",redirectTo:"1",pathMatch: 'full'
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ELRoutingModule { }
  