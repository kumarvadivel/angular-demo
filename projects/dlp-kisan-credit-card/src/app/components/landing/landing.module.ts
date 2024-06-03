import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingTheme1Module } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '@kcc-app/app/shared/shared.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedKCCModule } from '../../shared/sharedKCC.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';
import { KCCCommonModule } from '../common/common.module';


@NgModule({
  declarations: [LandingComponent, ProductDescriptionComponent,
    ProductErrorComponent,
    SessionExpiredComponent,
    ],
  imports: [
    CommonModule,
    LandingRoutingTheme1Module,
    SharedKCCModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    KCCCommonModule
  ]

})
export class LandingModule { }
