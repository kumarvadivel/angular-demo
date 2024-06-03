import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeApplicationRoutingModule } from './resume-application-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackStatusComponent } from '../resume-application/components/track-status/track-status.component';
import { ApplicationStatusComponent } from '../resume-application/components/application-status/application-status.component';
import { SharedHomeModule } from '@home-app/shared/sharedHome.module';
import { SnackBarService } from '@home-app/services/snackbar.service';
@NgModule({
  declarations: [ 
    TrackStatusComponent,
    ApplicationStatusComponent,    
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedHomeModule,
    ResumeApplicationRoutingModule
  ],
  providers:[SnackBarService]
 
})
export class ResumeApplicationModule { }
