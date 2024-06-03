import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewModuleRoutingModule } from './preview-module-routing.module';
import { JourneyPreviewComponent } from './components/journey-preview/journey-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@kcc-app/shared/shared.module';
import { SharedKCCModule } from '@kcc-app/shared/sharedKCC.module';
import { KCCCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    JourneyPreviewComponent
  ],
  imports: [
    CommonModule,
    PreviewModuleRoutingModule,
    SharedKCCModule,
    KCCCommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PreviewModuleModule { }
