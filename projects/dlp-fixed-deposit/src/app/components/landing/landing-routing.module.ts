import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyPreviewComponent } from './components/journey-preview/journey-preview.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component'; 
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';

const routes: Routes = [
  
  {
    path:"home",component:LandingComponent
  },
  {
    path:"error",
    component:ProductErrorComponent
  },
  {
    path:"saving-account",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"shishu-mudra",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"personal-loan",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"kcc-loan",
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
    path:"fixed-deposit",
    loadChildren: () => import('../basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  {
    path:"choose-loan",
    component:ProductDescriptionComponent,
  },
  {
    path: 'session-expired',
    component: SessionExpiredComponent,
    data: { state: 'session-expired' }
  },
  {
    path: 'preview-page',
    component: JourneyPreviewComponent
  },
  {
    path:"",redirectTo:"choose-loan",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingTheme1Module { }
