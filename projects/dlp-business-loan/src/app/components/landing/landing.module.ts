import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingTheme1Module } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '@bl-app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedBlModule } from '../../shared/sharedBl.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingTheme1Module,
    SharedBlModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    KlCommonModule
  ]

})
export class LandingModule { }
