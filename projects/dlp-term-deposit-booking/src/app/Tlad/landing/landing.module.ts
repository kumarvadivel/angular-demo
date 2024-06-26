import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingTheme1Module} from './landing-routing.module';
import {LandingComponent} from './components/landing/landing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedTladModule} from '../../shared/sharedTlad.module';
import {SessionExpiredComponent} from './components/session-expired/session-expired.component';
import {TladCommonModule} from '../common/common.module';

@NgModule({
    declarations: [LandingComponent,
        SessionExpiredComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingTheme1Module,
        SharedTladModule,
        FormsModule,
        ReactiveFormsModule,
        TladCommonModule
    ]
})
export class LandingModule {
}
