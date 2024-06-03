import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { DocumentsUploadV2Component } from './components/documents-upload-v2/documents-upload-v2.component';
import { FormsModule } from '@angular/forms';
import { SharedBlModule } from '@bl-app/shared/sharedBl.module';
import { MatStepperModule } from '@angular/material/stepper';
import { KeyFactStatementComponent } from './components/key-fact-statement/key-fact-statement.component';


@NgModule({
  declarations: [
    DocumentsUploadV2Component,
    KeyFactStatementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomPagesRoutingModule,
    SharedBlModule,
    MatStepperModule
  ]
})
export class CustomPagesModule { }
