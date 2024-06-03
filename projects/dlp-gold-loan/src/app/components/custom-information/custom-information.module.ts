import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInformationRoutingModule } from './custom-information-routing.module';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { SharedGlModule } from '../../shared/sharedGl.module';
import { GlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    ProductErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedGlModule,
    GlCommonModule,
    CustomInformationRoutingModule
  ]
})
export class CustomInformationModule { }
