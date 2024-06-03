import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeclarationRoutingModule } from './product-declaration-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component'
import { SharedMsmeModule } from '../../shared/sharedMsme.module';
import { KlCommonModule } from '../common/common.module';
import { BorrowerEmployeeinfoComponent } from './components/employment-details/borrower-employeeinfo.component';


@NgModule({
  declarations: [
    BorrowerEmployeeinfoComponent,
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    ProductDeclarationRoutingModule,
    SharedMsmeModule,
    KlCommonModule
  ]
})
export class ProductDeclarationModule { }
