import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInformationRoutingModule } from './custom-information-routing.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SharedPmmyModule } from '../../shared/sharedPmmy.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    ProductErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedPmmyModule,
    KlCommonModule,
    CustomInformationRoutingModule
  ]
})
export class CustomInformationModule { }
