import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { Theme1CommonRoutingModule } from './common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import {MatSliderModule } from '@angular/material/slider';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {  MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { homeMenu } from '@el-configuration/mock-replacements-configurations/data';


@NgModule({
  declarations: [AppLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    Theme1CommonRoutingModule,
    CommonModule,
    MatSliderModule, MatTooltipModule, MatExpansionModule, FormsModule, MatTabsModule, MatIconModule, 
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: []
})

export class ELCommonModule { }
