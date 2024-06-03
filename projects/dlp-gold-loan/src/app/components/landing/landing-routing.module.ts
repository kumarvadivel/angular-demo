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
