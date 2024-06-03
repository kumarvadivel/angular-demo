import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingTheme1Module } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';
import { JourneyPreviewComponent } from './components/journey-preview/journey-preview.component';
import { SharedSBAModule } from '@ca-app/shared/sharedSBA.module';
import { CommonSbaModule } from '../common/common.module';
import { SharedModule } from '@ca-app/shared/shared.module';

@NgModule({
  declarations: [LandingComponent, ProductDescriptionComponent,
    ProductErrorComponent,
    SessionExpiredComponent,JourneyPreviewComponent
    ],
  imports: [
    CommonModule,
    LandingRoutingTheme1Module, 
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
    SharedSBAModule,
    CommonSbaModule
  ]

})
export class LandingModule { }
