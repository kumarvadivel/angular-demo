import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryRoutingModule} from './summary-routing.module';
import {LoanSummaryComponent} from './components/loan-summary/loan-summary.component';
import {SharedVlDigiModule} from '../../shared/sharedVl-digi.module';

@NgModule({
    declarations: [
        LoanSummaryComponent
    ],
    imports: [
        CommonModule,
        SummaryRoutingModule,
        SharedVlDigiModule
    ]
})
export class SummaryModule {
}
