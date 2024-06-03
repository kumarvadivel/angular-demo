import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { SharedCcModule } from '../../shared/sharedCc.module';
import { GlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedCcModule,
    GlCommonModule
  ]
})
export class ProductDeclarationModule { }
