import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { Theme1CommonRoutingModule } from './common-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocalStorage } from '@home-app/shared/helpers/localStorage';
import { LogicFunctions } from '@home-app/shared/helpers/JsonLogic';



@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Theme1CommonRoutingModule
  ],
  exports:[],
  providers:[LocalStorage,LogicFunctions]
})
export class CommonAppModule { }
