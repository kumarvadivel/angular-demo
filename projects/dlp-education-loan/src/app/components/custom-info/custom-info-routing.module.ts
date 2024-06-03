import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { AdmissionDetailsComponent } from './admission-details/admission-details.component';
import { CoAppDetailsComponent } from './co-app-details/co-app-details.component';
import { DocumentsUploadV2Component } from './documents-upload-v2/documents-upload-v2.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ScholarFinanceComponent } from './scholar-finance/scholar-finance.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { CoAppEmpDetailsComponent } from './co-app-emp-details/co-app-emp-details.component';
import { SanctionComponent } from './sanction/sanction.component';

const routes: Routes = [
  {
    path:"student-details",
    component:StudentDetailsComponent
  },
  {
    path:"employment-details",
    component: EmploymentDetailsComponent
  },
  {
    path: "admission-details",
    component: AdmissionDetailsComponent
  },
  {
    path: "coApplicant-details",
    component: CoAppDetailsComponent
  },
  {
    path: "coApplicantEmp-details",
    component: CoAppEmpDetailsComponent
  },
  {
    path: "document-upload-v2",
    component: DocumentsUploadV2Component
  },
  {
    path: "college-details",
    component: CollegeDetailsComponent
  },
  {
    path: "course-details",
    component: CourseDetailsComponent
  },
  {
    path: "scholar-finance",
    component: ScholarFinanceComponent
  },
  {
    path: "loan-details",
    component: LoanDetailsComponent
  },
  {
    path: "sanction",
    component: SanctionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomInfoRoutingModule { }
