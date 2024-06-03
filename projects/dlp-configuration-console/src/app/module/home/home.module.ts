import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedConsoleModule } from '@config-app/shared/SharedConsole.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedConsoleModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
