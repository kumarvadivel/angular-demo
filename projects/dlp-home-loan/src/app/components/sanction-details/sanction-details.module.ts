import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SanctionDetailsRoutingModule} from './sanction-details-routing.module';
import {SanctionComponent} from './components/sanction/sanction.component';
import {FormsModule} from '@angular/forms';
import {SharedHlModule} from '@hl-app/shared/sharedHl.module';

@NgModule({
    declarations: [
        SanctionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SanctionDetailsRoutingModule,
        SharedHlModule
    ]
})
export class SanctionDetailsModule {
}
