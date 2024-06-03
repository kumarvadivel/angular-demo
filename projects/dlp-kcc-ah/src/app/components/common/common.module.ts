import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { Theme1CommonRoutingModule } from './common-routing.module';
import { HttpClientModule } from '@angular/common/http';
 
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
 
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppLayoutComponent,FooterComponent, HeaderComponent,
     SideNavComponent, UnauthorizedComponent],
  imports: [
    HttpClientModule,
    Theme1CommonRoutingModule,
    CommonModule,
    MatSliderModule,MatTooltipModule,MatExpansionModule,FormsModule,MatTabsModule,
    MatIconModule
  ],
  exports:[HeaderComponent,FooterComponent],
  schemas: [ ]
})
export class KCCCommonModule { }
