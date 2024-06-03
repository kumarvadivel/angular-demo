import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '@ssa-app-components/common/app-layout/app-layout.component';
import { FooterComponent } from '@ssa-app-components/common//footer/footer.component';
import { HeaderComponent } from '@ssa-app-components/common//header/header.component';
import { SideNavComponent } from '@ssa-app-components/common//side-nav/side-nav.component';
import { UnauthorizedComponent } from '@ssa-app-components/common//unauthorized/unauthorized.component';
import { CommonSbaRoutingModule } from './common-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import {MatSliderModule } from '@angular/material/slider';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {  MatTabsModule } from '@angular/material/tabs';
import { BreadCrumbComponent } from '@ssa-app-components/common/bread-crumb/bread-crumb.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppLayoutComponent,FooterComponent, HeaderComponent,
     SideNavComponent, UnauthorizedComponent,BreadCrumbComponent],
  imports: [
    HttpClientModule,
    CommonSbaRoutingModule,
    CommonModule,
    MatSliderModule,MatTooltipModule,MatExpansionModule,FormsModule,MatTabsModule,
    MatIconModule
  ],
  exports:[HeaderComponent,FooterComponent,BreadCrumbComponent],
  schemas: [ ]
})
export class CommonSbaModule { }
