import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LandingComponent } from './components/landing/landing.component';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';

const routes: Routes = [
  
  {
    path:"landing",component:LandingComponent
  },
  {
    path:"error",
    component:ProductErrorComponent
  },
  // {
  //   path:"saving-account",
  //   loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  // },
  // {
  //   path:"shishu-mudra",
  //   loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  // },
  // {
  //   path:"personal-loan",
  //   loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  // },
  // {
  //   path:"kcc-loan",
  //   loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  // },
  // {
  //   path:"personal-loan-express",
  //   loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  // },
  // {
  //   path:"current-account",
  //   loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  // },
  {
    path: 'session-expired',
    component: SessionExpiredComponent,
    data: { state: 'session-expired' }
  },
  {
    path:"",redirectTo:"landing",pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
