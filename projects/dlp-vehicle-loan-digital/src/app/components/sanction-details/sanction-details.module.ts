import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SanctionDetailsRoutingModule} from './sanction-details-routing.module';
import {SanctionComponent} from './components/sanction/sanction.component';
import {FormsModule} from '@angular/forms';
import {SharedVlDigiModule} from '@vldigi-app/shared/sharedVl-digi.module';

@NgModule({
    declarations: [
        SanctionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SanctionDetailsRoutingModule,
        SharedVlDigiModule
    ]
})
export class SanctionDetailsModule {
}
