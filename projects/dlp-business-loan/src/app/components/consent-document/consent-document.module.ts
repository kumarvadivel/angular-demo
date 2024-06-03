import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentDocumentRoutingModule } from './consent-document-routing.module';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SharedBlModule } from '../../shared/sharedBl.module';


@NgModule({
  declarations: [
    DeclarationComponent
  ],
  imports: [
    CommonModule,
    ConsentDocumentRoutingModule,
    SharedBlModule
  ]
})
export class ConsentDocumentModule { }
