import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component'
import { SharedGlModule } from '../../shared/sharedGl.module';
import { GlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [ MoreInfoComponent],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedGlModule,
    GlCommonModule
  ]
})
export class ProductDeclarationModule { }
