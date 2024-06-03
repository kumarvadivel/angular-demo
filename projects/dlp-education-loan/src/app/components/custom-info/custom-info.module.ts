import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInfoRoutingModule } from './custom-info-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { SharedElModule } from '@el-app/shared/sharedEl.module';
import { MatStepperModule } from '@angular/material/stepper';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { AdmissionDetailsComponent } from './admission-details/admission-details.component';
import { CoAppDetailsComponent } from './co-app-details/co-app-details.component';
import { CoAppEmpDetailsComponent } from './co-app-emp-details/co-app-emp-details.component';
import { DocumentsUploadV2Component } from './documents-upload-v2/documents-upload-v2.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ScholarFinanceComponent } from './scholar-finance/scholar-finance.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { SanctionComponent } from './sanction/sanction.component';


@NgModule({
  declarations: [
    StudentDetailsComponent,
    EmploymentDetailsComponent,
    AdmissionDetailsComponent,
    CoAppDetailsComponent,
    CoAppEmpDetailsComponent,
    DocumentsUploadV2Component,
    CollegeDetailsComponent,
    CourseDetailsComponent,
    ScholarFinanceComponent,
    LoanDetailsComponent,
    SanctionComponent,
  ],
  imports: [
    CommonModule,
    CustomInfoRoutingModule,
    FormsModule,
    SharedElModule,
    MatStepperModule
  ]
})
export class CustomInfoModule { }
