import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingTheme1Module } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';
import { JourneyPreviewComponent } from './components/journey-preview/journey-preview.component';
import { SharedFDModule } from '@fd-app/shared/sharedFD.module';
import { CommonFdModule } from '../common/common.module';
import { SharedModule } from '@fd-app/shared/shared.module';

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
    SharedFDModule,
    CommonFdModule
  ]

})
export class LandingModule { }
