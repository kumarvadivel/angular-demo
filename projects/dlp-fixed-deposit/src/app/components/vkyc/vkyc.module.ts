import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkycComponent } from './vkyc/vkyc.component';
import { VkycProcessingComponent } from './vkyc-processing/vkyc-processing.component';
import { BasicInformationRoutingModule } from '../basic-information/basic-information-routing.module'; 
import { VKYCRoutingModule } from './vkyc-routing.module';
import { SharedFDModule } from '@fd-app/shared/sharedFD.module';
import { CommonFdModule } from '../common/common.module';



@NgModule({
  declarations: [
    VkycComponent,
    VkycProcessingComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule, 
    SharedFDModule,
    CommonFdModule,
    VKYCRoutingModule
  ]
})
export class VkycModule { }
