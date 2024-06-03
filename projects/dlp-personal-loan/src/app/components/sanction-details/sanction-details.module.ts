import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SanctionDetailsRoutingModule} from './sanction-details-routing.module';
import {SanctionComponent} from './components/sanction/sanction.component';
import {FormsModule} from '@angular/forms';
import {SharedPlModule} from '@pl-app/shared/sharedPl.module';

@NgModule({
    declarations: [
        SanctionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SanctionDetailsRoutingModule,
        SharedPlModule
    ]
})
export class SanctionDetailsModule {
}
