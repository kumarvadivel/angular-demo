import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDeclarationRoutingModule} from './product-declaration-routing.module';
import {MoreInfoComponent} from './components/more-info/more-info.component'
import {SharedHlModule} from '../../shared/sharedHl.module';
import {HlCommonModule} from '../common/common.module';
import {PersonalDetailsComponent} from './components/personal-details/personal-details.component';
import {BorrowerEmployeeinfoComponent} from './components/employment-details/borrower-employeeinfo.component';

@NgModule({
    declarations: [MoreInfoComponent, PersonalDetailsComponent, BorrowerEmployeeinfoComponent],
    imports: [
        CommonModule,
        ProductDeclarationRoutingModule,
        SharedHlModule,
        HlCommonModule
    ]
})
export class ProductDeclarationModule {
}
