import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {   MatTooltipModule } from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule} from '@angular/material/tabs';


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
