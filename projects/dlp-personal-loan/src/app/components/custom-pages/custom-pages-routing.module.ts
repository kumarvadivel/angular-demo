import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdditionalInformationComponent} from './components/additional-information/additional-information.component';
import {BranchDetailsComponent} from './components/branch-details/branch-details.component';
import {DocumentUploadV2Component} from './components/documents-upload-v2/documents-upload-v2.component';
import {ESignComponent} from './components/e-sign/e-sign.component';
import {ErrorPtlexComponent} from './components/error-ptlex/error-ptlex.component';
import {KeyFactStatementComponent} from './components/key-fact-statement/key-fact-statement.component';
import {StatusChecklistComponent} from './components/status-checklist/status-checklist.component';

const routes: Routes = [{
    path: "branch-details", component: BranchDetailsComponent
},
    {
        path: "e-sign", component: ESignComponent
    },
    {
        path: "key-fact-statement", component: KeyFactStatementComponent
    },
    {
        path: "additional-information", component: AdditionalInformationComponent
    },
    {
        path: "document-upload-v2", component: DocumentUploadV2Component
    }, {
        path: "status-checklist", component: StatusChecklistComponent
    }, {
        path: 'product-error', component: ErrorPtlexComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomPagesRoutingModule {
}
