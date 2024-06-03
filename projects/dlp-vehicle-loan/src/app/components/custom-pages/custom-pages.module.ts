import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPagesRoutingModule} from './custom-pages-routing.module';
import {BranchDetailsComponent} from './components/branch-details/branch-details.component';
import {ESignComponent} from './components/e-sign/e-sign.component';
import {KeyFactStatementComponent} from './components/key-fact-statement/key-fact-statement.component';
import {AdditionalInformationComponent} from './components/additional-information/additional-information.component';
import {DocumentUploadV2Component} from './components/documents-upload-v2/documents-upload-v2.component';
import {FormsModule} from '@angular/forms';
import {StatusChecklistComponent} from './components/status-checklist/status-checklist.component';
import {ErrorPtlexComponent} from './components/error-ptlex/error-ptlex.component';
import {SharedVlModule} from '@vl-app/shared/sharedVl.module';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@NgModule({
    declarations: [
        BranchDetailsComponent,
        ESignComponent,
        KeyFactStatementComponent,
        AdditionalInformationComponent,
        DocumentUploadV2Component,
        StatusChecklistComponent,
        ErrorPtlexComponent,
        VehicleDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomPagesRoutingModule,
        SharedVlModule,
    ]
})
export class CustomPagesModule {
}
