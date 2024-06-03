import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentDocumentRoutingModule } from './consent-document-routing.module';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SharedKccRenewalModule } from '../../shared/sharedkccrenewal.module';


@NgModule({
  declarations: [ DeclarationComponent],
  imports: [
    CommonModule,
    ConsentDocumentRoutingModule,
    SharedKccRenewalModule
  ]
})
export class ConsentDocumentModule { }
