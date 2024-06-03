import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LandingComponent } from './components/landing/landing.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
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
  {
    path:"personal-loan",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"kcc-crop",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"personal-loan-express",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"current-account",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"product-description",
    component:ProductDescriptionComponent,
  },
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
export class LandingRoutingTheme1Module { }
