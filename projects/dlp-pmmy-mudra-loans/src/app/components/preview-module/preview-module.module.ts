import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewModuleRoutingModule } from './preview-module-routing.module';
import { JourneyPreviewComponent } from './components/journey-preview/journey-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KlCommonModule } from '../common/common.module';
import { SharedPmmyModule } from '../../shared/sharedPmmy.module';

@NgModule({
  declarations: [
    JourneyPreviewComponent
  ],
  imports: [
    CommonModule,
    PreviewModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KlCommonModule,
    SharedPmmyModule,
  ]
})
export class PreviewModuleModule { }
