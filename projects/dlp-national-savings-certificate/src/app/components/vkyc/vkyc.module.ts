import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkycComponent } from './vkyc/vkyc.component';
import { VkycProcessingComponent } from './vkyc-processing/vkyc-processing.component';
import { BasicInformationRoutingModule } from '../basic-information/basic-information-routing.module'; 
import { VKYCRoutingModule } from './vkyc-routing.module';
import { SharedSBAModule } from '@nsc-app/shared/sharedSBA.module';
import { CommonSbaModule } from '../common/common.module';



@NgModule({
  declarations: [
    VkycComponent,
    VkycProcessingComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule, 
    SharedSBAModule,
    CommonSbaModule,
    VKYCRoutingModule
  ]
})
export class VkycModule { }
