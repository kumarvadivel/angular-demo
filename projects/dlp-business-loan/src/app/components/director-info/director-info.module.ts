import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorInfoRoutingModule } from './director-info-routing.module';
import { DirectorKycComponent } from './components/director-kyc/director-kyc.component';
import { DirectorDetailsComponent } from './components/director-details/director-details.component';
import { SharedBlModule } from '../../shared/sharedBl.module';
import { KlCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    DirectorKycComponent,
    DirectorDetailsComponent
  ],
  imports: [
    CommonModule,
    DirectorInfoRoutingModule,
    SharedBlModule,
    KlCommonModule
  ]
})
export class DirectorInfoModule { }
