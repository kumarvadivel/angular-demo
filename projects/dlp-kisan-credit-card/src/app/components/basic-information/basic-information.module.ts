import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { MobileNumberVerificationComponent } from './components/mobile-number-verification/mobile-number-verification.component';
import { SharedKCCModule } from '../../shared/sharedKCC.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { KCCCommonModule } from '../common/common.module';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ContactBranchComponent } from './components/contact-branch/contact-branch.component';
import { QuickStartProductComponent } from './components/quick-start-product/quick-start-product.component';


@NgModule({
  declarations: [
    AppLayoutComponent,
    MobileNumberVerificationComponent,
    AccountNumberVerificationComponent,
    MoreInfoComponent,
    ContactBranchComponent,
    QuickStartProductComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    SharedKCCModule,
    KCCCommonModule
  ]
})
export class BasicInformationModule { }
