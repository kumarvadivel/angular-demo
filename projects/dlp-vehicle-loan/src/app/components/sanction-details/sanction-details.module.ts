import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SanctionDetailsRoutingModule} from './sanction-details-routing.module';
import {SanctionComponent} from './components/sanction/sanction.component';
import {FormsModule} from '@angular/forms';
import {SharedVlModule} from '@vl-app/shared/sharedVl.module';

@NgModule({
    declarations: [
        SanctionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SanctionDetailsRoutingModule,
        SharedVlModule
    ]
})
export class SanctionDetailsModule {
}
