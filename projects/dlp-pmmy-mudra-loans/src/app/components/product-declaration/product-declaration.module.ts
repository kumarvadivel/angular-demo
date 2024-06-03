import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component'
import { SharedPmmyModule } from '../../shared/sharedPmmy.module';
import { KlCommonModule } from '../common/common.module';
import { BorrowerEmployeeinfoComponent } from './components/employment-details/borrower-employeeinfo.component';
import { FacilityDetailsComponent } from './components/facility-details/facility-details.component';
import { DirectorInfoComponent } from './components/director-info/director-info.component';


@NgModule({
  declarations: [
    BorrowerEmployeeinfoComponent,
    MoreInfoComponent,
    FacilityDetailsComponent,
    DirectorInfoComponent
  ],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedPmmyModule,
    KlCommonModule
  ]
})
export class ProductDeclarationModule { }
