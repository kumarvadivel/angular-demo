import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoreInfoComponent} from '../product-declaration/components/more-info/more-info.component';
import {
    MobileNumberVerificationComponent
} from './components/mobile-number-verification/mobile-number-verification.component';
import {ContactBranchComponent} from './components/contact-branch/contact-branch.component';
import { AccountNumberVerificationComponent } from './components/account-number-verification/account-number-verification.component';

const routes: Routes = [
    {path: "mobile-verify", component: MobileNumberVerificationComponent},
    {path: "account-verify", component: AccountNumberVerificationComponent},
    {path: "more-info", component: MoreInfoComponent},
    {path: 'contact-branch', component: ContactBranchComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicInformationRoutingModule {
}
