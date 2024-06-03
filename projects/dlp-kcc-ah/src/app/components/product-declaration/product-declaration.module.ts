import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { SharedKCCModule } from '../../shared/sharedKCC.module';
import { KCCCommonModule } from '../common/common.module';
import { AddMorePageDetailsComponent } from './components/add-more-page-details/add-more-page-details.component';

@NgModule({
  declarations: [ AddMorePageDetailsComponent],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedKCCModule,
    KCCCommonModule
  ]
})
export class ProductDeclarationModule { }
