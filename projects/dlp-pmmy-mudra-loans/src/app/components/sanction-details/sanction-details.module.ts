import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanctionDetailsRoutingModule } from './sanction-details-routing.module';
import { SanctionComponent } from './components/sanction/sanction.component';
import { FormsModule } from '@angular/forms';
import { SharedPmmyModule } from '@pmmy-app/shared/sharedPmmy.module';


@NgModule({
  declarations: [
    SanctionComponent
  ],
  imports: [
    CommonModule,
    SanctionDetailsRoutingModule,
    FormsModule,
    SharedPmmyModule
  ]
})
export class SanctionDetailsModule { }
