import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { DocumentsUploadV2Component } from './components/documents-upload-v2/documents-upload-v2.component';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedSBAModule } from '@ca-app/shared/sharedSBA.module';



@NgModule({
  declarations: [
    DocumentsUploadV2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomPagesRoutingModule,
    SharedSBAModule,
    MatStepperModule
  ]
})
export class CustomPagesModule { }
