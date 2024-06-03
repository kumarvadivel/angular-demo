import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeApplicationRoutingModule } from './resume-application-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedGlModule } from '../../shared/sharedGl.module';
import { TrackStatusComponent } from '../resume-application/components/track-status/track-status.component';
import { ApplicationStatusComponent } from '../resume-application/components/application-status/application-status.component';
import { GlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [ 
    TrackStatusComponent,
    ApplicationStatusComponent,    
    ],
  imports: [
    CommonModule,
    SharedGlModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GlCommonModule,
    ResumeApplicationRoutingModule
  ]
 
})
export class ResumeApplicationModule { }
