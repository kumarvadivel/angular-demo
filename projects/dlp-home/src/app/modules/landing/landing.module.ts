import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedHomeModule } from '@home-app/shared/sharedHome.module';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedHomeModule
  ]
})
export class LandingModule { }
