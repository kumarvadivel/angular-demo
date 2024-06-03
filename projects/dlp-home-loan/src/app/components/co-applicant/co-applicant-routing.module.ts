import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoApplicantMoreInfoComponent } from './components/co-applicant-more-info/co-applicant-more-info.component';
import { CoApplicantPersonalDetailsComponent } from './components/co-applicant-personal-details/co-applicant-personal-details.component';
import { CoApplicantEmploymentDetailsComponent } from './components/co-applicant-employment-details/co-applicant-employment-details.component';
import { CoApplicantDocumentUploadComponent } from './components/co-applicant-document-upload/co-applicant-document-upload.component';
import { CoApplicantDetailsComponent } from './components/co-applicant-details/co-applicant-details.component';

const routes: Routes = [
  {
    path:"more-info",
    component:CoApplicantMoreInfoComponent
  },
  {
    path:"personal-details",
    component:CoApplicantPersonalDetailsComponent
  },{
    path:"employment-details",
    component:CoApplicantEmploymentDetailsComponent
  },{
    path:"document-upload",
    component:CoApplicantDocumentUploadComponent
  },
  {
    path:"coapplicant-details",
    component:CoApplicantDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoApplicantRoutingModule { }
