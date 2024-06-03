import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentDocumentRoutingModule } from './consent-document-routing.module';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SharedMsmeModule } from '../../shared/sharedMsme.module';


@NgModule({
  declarations: [
    DeclarationComponent
  ],
  imports: [
    CommonModule,
    ConsentDocumentRoutingModule,
    SharedMsmeModule
  ]
})
export class ConsentDocumentModule { }
