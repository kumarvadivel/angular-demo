import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingTheme1Module} from './landing-routing.module';
import {LandingComponent} from './components/landing/landing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedVlModule} from '../../shared/sharedVl.module';
import {SessionExpiredComponent} from './components/session-expired/session-expired.component';
import {VlCommonModule} from '../common/common.module';

@NgModule({
    declarations: [LandingComponent,
        SessionExpiredComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingTheme1Module,
        SharedVlModule,
        FormsModule,
        ReactiveFormsModule,
        VlCommonModule
    ]
})
export class LandingModule {
}
