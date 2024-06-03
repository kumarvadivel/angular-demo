import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingTheme1Module } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '@pmmy-app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPmmyModule } from '../../shared/sharedPmmy.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingTheme1Module,
    SharedPmmyModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    KlCommonModule
  ]

})
export class LandingModule { }
