import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoApplicantRoutingModule } from './co-applicant-routing.module';
import { CoApplicantMoreInfoComponent } from './components/co-applicant-more-info/co-applicant-more-info.component';
import { CoApplicantPersonalDetailsComponent } from './components/co-applicant-personal-details/co-applicant-personal-details.component';
import { CoApplicantEmploymentDetailsComponent } from './components/co-applicant-employment-details/co-applicant-employment-details.component';
import { CoApplicantDocumentUploadComponent } from './components/co-applicant-document-upload/co-applicant-document-upload.component';
import { SharedTlModule } from '@tl-app/shared/sharedTl.module';
import { CoApplicantDetailsComponent } from './components/co-applicant-details/co-applicant-details.component';


@NgModule({
  declarations: [
    CoApplicantMoreInfoComponent,
    CoApplicantPersonalDetailsComponent,
    CoApplicantEmploymentDetailsComponent,
    CoApplicantDocumentUploadComponent,
    CoApplicantDetailsComponent
  ],
  imports: [
    CommonModule,
    CoApplicantRoutingModule,
    SharedTlModule
  ]
})
export class CoApplicantModule { }
