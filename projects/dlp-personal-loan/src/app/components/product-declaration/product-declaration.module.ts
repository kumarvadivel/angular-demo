import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDeclarationRoutingModule} from './product-declaration-routing.module';
import {MoreInfoComponent} from './components/more-info/more-info.component'
import {SharedPlModule} from '../../shared/sharedPl.module';
import {PlCommonModule} from '../common/common.module';
import {PersonalDetailsComponent} from './components/personal-details/personal-details.component';
import {BorrowerEmployeeinfoComponent} from './components/employment-details/borrower-employeeinfo.component';

@NgModule({
    declarations: [MoreInfoComponent, PersonalDetailsComponent, BorrowerEmployeeinfoComponent],
    imports: [
        CommonModule,
        ProductDeclarationRoutingModule,
        SharedPlModule,
        PlCommonModule
    ]
})
export class ProductDeclarationModule {
}
