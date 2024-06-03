import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component' 
import { CommonSbaModule } from '@nsc-app-components/common/common.module';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component'; 
import { SharedSBAModule } from '@nsc-app/shared/sharedSBA.module';

@NgModule({
  declarations: [ MoreInfoComponent, ProductSelectionComponent, PersonalDetailsComponent],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedSBAModule,
    CommonSbaModule
  ]
})
export class ProductDeclarationModule { }
