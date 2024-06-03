import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingTheme1Module} from './landing-routing.module';
import {LandingComponent} from './components/landing/landing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedVlDigiModule} from '../../shared/sharedVl-digi.module';
import {SessionExpiredComponent} from './components/session-expired/session-expired.component';
import {VlDigiCommonModule} from '../common/common.module';

@NgModule({
    declarations: [LandingComponent,
        SessionExpiredComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingTheme1Module,
        SharedVlDigiModule,
        FormsModule,
        ReactiveFormsModule,
        VlDigiCommonModule
    ]
})
export class LandingModule {
}
