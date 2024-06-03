import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeApplicationRoutingTheme1Module } from './resume-application-routing.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { TrackStatusComponent } from '../resume-application/components/track-status/track-status.component';
import { ApplicationStatusComponent } from '../resume-application/components/application-status/application-status.component'; 
import { SharedFDModule } from '../../shared/sharedFD.module';
import { CommonFdModule } from '@fd-app-components/common/common.module';
import { SharedModule } from '@fd-app/shared/shared.module';
@NgModule({
  declarations: [ 
    TrackStatusComponent,
    ApplicationStatusComponent,    
    ],
  imports: [
    CommonModule,
    SharedFDModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonFdModule,
    ResumeApplicationRoutingTheme1Module
  ]
 
})
export class ResumeApplicationTheme1Module { }
