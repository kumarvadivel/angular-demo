import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentDocumentRoutingModule } from './consent-document-routing.module';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SharedKCCModule } from '@kcc-ah-app/shared/sharedKCC.module';


@NgModule({
  declarations: [ DeclarationComponent],
  imports: [
    CommonModule,
    ConsentDocumentRoutingModule,
    SharedKCCModule
  ]
})
export class ConsentDocumentModule { }
