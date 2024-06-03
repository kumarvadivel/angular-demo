import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicInformationRoutingModule} from './basic-information-routing.module';
import {
    MobileNumberVerificationComponent
} from './components/mobile-number-verification/mobile-number-verification.component';
import {SharedTlModule} from '../../shared/sharedTl.module';
import {AppLayoutComponent} from './components/app-layout/app-layout.component';
import {HlCommonModule} from '../common/common.module';
import {ContactBranchComponent} from './components/contact-branch/contact-branch.component';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';

@NgModule({
    declarations: [AppLayoutComponent,
        MobileNumberVerificationComponent,
        AccountNumberVerificationComponent,
        ContactBranchComponent,
        MobileNumberVerificationComponent,
        QuickStartProductComponent
    ],
    imports: [
        CommonModule,
        BasicInformationRoutingModule,
        SharedTlModule,
        HlCommonModule
    ]
})
export class BasicInformationModule {
}
