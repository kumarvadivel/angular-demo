import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeApplicationRoutingTheme1Module } from './resume-application-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedKCCModule } from '../../shared/sharedKCC.module';
import { TrackStatusComponent } from '../resume-application/components/track-status/track-status.component';
import { ApplicationStatusComponent } from '../resume-application/components/application-status/application-status.component';
import { KCCCommonModule } from '../common/common.module';
import { SharedModule } from '@kcc-ah-app/shared/shared.module';

@NgModule({
  declarations: [ 
    TrackStatusComponent,
    ApplicationStatusComponent,    
    ],
  imports: [
    CommonModule,
    SharedKCCModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    KCCCommonModule,
    ResumeApplicationRoutingTheme1Module
  ]
 
})
export class ResumeApplicationTheme1Module { }
