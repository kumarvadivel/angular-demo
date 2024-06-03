import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInformationRoutingModule } from './custom-information-routing.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SharedKCCModule } from '../../shared/sharedKCC.module';
import { KCCCommonModule } from '../common/common.module';
import { ESignComponent } from './e-sign/e-sign.component';


@NgModule({
  declarations: [
    ProductErrorComponent,
    ESignComponent
  ],
  imports: [
    CommonModule,
    SharedKCCModule,
    KCCCommonModule,
    CustomInformationRoutingModule
  ]
})
export class CustomInformationModule { }
