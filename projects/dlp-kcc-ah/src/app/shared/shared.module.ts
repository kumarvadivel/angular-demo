import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { FormsModule } from '@angular/forms';
import {  MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    SharedRoutingModule
  ],
  exports:[MatSliderModule,MatTooltipModule,MatExpansionModule,FormsModule,MatTabsModule]
})
export class SharedModule { }
