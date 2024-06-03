import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component' 
import { CommonFdModule } from '@fd-app-components/common/common.module';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component'; 
import { SharedFDModule } from '@fd-app/shared/sharedFD.module';
import { DepositDetailsComponent } from './components/deposit-details/deposit-details.component';
@NgModule({
  declarations: [ MoreInfoComponent, ProductSelectionComponent, PersonalDetailsComponent, DepositDetailsComponent],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedFDModule,
    CommonFdModule
  ]
})
export class ProductDeclarationModule { }
