import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInformationRoutingModule } from './custom-information-routing.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SharedBlModule } from '../../shared/sharedBl.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    ProductErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedBlModule,
    KlCommonModule,
    CustomInformationRoutingModule
  ]
})
export class CustomInformationModule { }
