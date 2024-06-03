import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryRoutingModule} from './summary-routing.module';
import {LoanSummaryComponent} from './components/loan-summary/loan-summary.component';
import {SharedHlModule} from '../../shared/sharedHl.module';

@NgModule({
    declarations: [
        LoanSummaryComponent
    ],
    imports: [
        CommonModule,
        SummaryRoutingModule,
        SharedHlModule
    ]
})
export class SummaryModule {
}
