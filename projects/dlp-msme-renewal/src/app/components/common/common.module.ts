import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Theme1CommonRoutingModule } from './common-routing.module';
import { HttpClientModule } from '@angular/common/http';
 
import {MatSliderModule } from '@angular/material/slider';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {  MatTabsModule } from '@angular/material/tabs';
 
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppLayoutComponent, AppLayoutComponent, FooterComponent, HeaderComponent],
  imports: [
      HttpClientModule,
      Theme1CommonRoutingModule,
      CommonModule,
      MatSliderModule, MatTooltipModule, MatExpansionModule, FormsModule, MatTabsModule,
      MatIconModule
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: []
})
export class KlCommonModule {
}
