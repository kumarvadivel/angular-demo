import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '@cc-app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedCcModule } from '../../shared/sharedCc.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';
import { GlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [LandingComponent,
    ProductErrorComponent,
    SessionExpiredComponent,
    ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedCcModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GlCommonModule
  ]

})
export class LandingModule { }
