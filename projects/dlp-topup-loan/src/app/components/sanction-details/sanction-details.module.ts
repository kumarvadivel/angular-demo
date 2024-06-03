import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SanctionDetailsRoutingModule} from './sanction-details-routing.module';
import {SanctionComponent} from './components/sanction/sanction.component';
import {FormsModule} from '@angular/forms';
import {SharedTlModule} from '@tl-app/shared/sharedTl.module';

@NgModule({
    declarations: [
        SanctionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SanctionDetailsRoutingModule,
        SharedTlModule
    ]
})
export class SanctionDetailsModule {
}
