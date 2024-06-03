import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component' 
import { CommonSbaModule } from '@ca-app-components/common/common.module';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component'; 
import { SharedSBAModule } from '@ca-app/shared/sharedSBA.module';
import { DirectorInfoComponent } from './components/director-info/director-info.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';

@NgModule({
  declarations: [ MoreInfoComponent, ProductSelectionComponent, PersonalDetailsComponent ,DirectorInfoComponent, BusinessDetailsComponent],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedSBAModule,
    CommonSbaModule
  ]
})
export class ProductDeclarationModule { }
