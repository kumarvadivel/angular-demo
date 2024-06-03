import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentDocumentRoutingModule } from './consent-document-routing.module';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { SharedPmmyModule } from '../../shared/sharedPmmy.module';


@NgModule({
  declarations: [
    DeclarationComponent
  ],
  imports: [
    CommonModule,
    ConsentDocumentRoutingModule,
    SharedPmmyModule
  ]
})
export class ConsentDocumentModule { }
