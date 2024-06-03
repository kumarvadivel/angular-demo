import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component'
import { SharedKccRenewalModule } from '../../shared/sharedkccrenewal.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedKccRenewalModule,
    KlCommonModule
  ]
})
export class ProductDeclarationModule { }
