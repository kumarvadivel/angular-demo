import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInformationRoutingModule } from './custom-information-routing.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SharedKccRenewalModule } from '../../shared/sharedkccrenewal.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    ProductErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedKccRenewalModule,
    KlCommonModule,
    CustomInformationRoutingModule
  ]
})
export class CustomInformationModule { }
