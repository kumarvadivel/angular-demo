import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicInformationRoutingModule} from './basic-information-routing.module';
import {
    MobileNumberVerificationComponent
} from './components/mobile-number-verification/mobile-number-verification.component';
import {SharedVlModule} from '../../shared/sharedVl.module';
import {AppLayoutComponent} from './components/app-layout/app-layout.component';
import {VlCommonModule} from '../common/common.module';
import {ContactBranchComponent} from './components/contact-branch/contact-branch.component';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';

@NgModule({
    declarations: [AppLayoutComponent,
        MobileNumberVerificationComponent,
        ContactBranchComponent,
        MobileNumberVerificationComponent,
        QuickStartProductComponent
    ],
    imports: [
        CommonModule,
        BasicInformationRoutingModule,
        SharedVlModule,
        VlCommonModule
    ]
})
export class BasicInformationModule {
}
