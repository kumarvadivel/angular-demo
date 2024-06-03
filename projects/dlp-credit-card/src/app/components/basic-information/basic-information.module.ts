import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';

import { SharedCcModule } from '../../shared/sharedCc.module';
import { GlCommonModule } from '../common/common.module';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';
import { SharedModule } from '@cc-app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';

@NgModule({
  declarations: [
    MobileNumberVerificationComponent, 
    AccountNumberVerificationComponent,
    MobileNumberVerificationComponent,
    QuickStartProductComponent,
    ProductDescriptionComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedCcModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GlCommonModule
  ]
})
export class BasicInformationModule { }
