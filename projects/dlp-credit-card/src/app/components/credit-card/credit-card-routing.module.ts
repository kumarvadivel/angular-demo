import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CcDetailsComponent } from './components/cc-details/cc-details.component';
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
const routes: Routes = [
  { path: 'cc-details', component: CcDetailsComponent },
  { path: 'ccdeclaration', component: DeclarationComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'add-on-card', component: AddOnCardComponent },
  { path: 'document-list', component: DocumentListComponent },
  { path: 'preview-page', component: DetailsPreviewComponent },
  { path: 'cc-summary', component: CcSummaryComponent },
  { path: 'congratulations', component: CongratulationsComponent },
  { path: "product-error", component: ProductErrorComponent },
  { path: "resume-application", component: TrackStatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
