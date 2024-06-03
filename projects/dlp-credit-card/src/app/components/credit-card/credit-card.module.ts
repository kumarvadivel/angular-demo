import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CcDetailsComponent } from './components/cc-details/cc-details.component';
import { SharedCcModule } from '@cc-app/shared/sharedCc.module';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { AddOnCardComponent } from './components/add-on-card/add-on-card.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DetailsPreviewComponent } from './components/details-preview/details-preview.component';
import { CcSummaryComponent } from './components/cc-summary/cc-summary.component';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { TrackStatusComponent } from './components/track-status/track-status.component';
import { SharedModule } from '@cc-app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    CcDetailsComponent,
    DeclarationComponent,
    MoreInfoComponent,
    EmploymentComponent,
    AddOnCardComponent,
    DocumentListComponent,
    DetailsPreviewComponent,
    CcSummaryComponent,
    ProductErrorComponent,
    CongratulationsComponent,
    TrackStatusComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    SharedCcModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GlCommonModule
  ]
})
export class CreditCardModule { }
