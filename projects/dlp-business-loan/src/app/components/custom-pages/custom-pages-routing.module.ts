import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsUploadV2Component } from './components/documents-upload-v2/documents-upload-v2.component';
import { KeyFactStatementComponent } from './components/key-fact-statement/key-fact-statement.component';


const routes: Routes = [
  {
    path:"document-upload-v2", component:DocumentsUploadV2Component
  },
  {
    path:"key-fact-statement",component:KeyFactStatementComponent
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
