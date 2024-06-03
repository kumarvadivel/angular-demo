import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkycComponent } from './vkyc/vkyc.component';
import { BasicInformationRoutingModule } from '../basic-information/basic-information-routing.module'; 
import { VKYCRoutingModule } from './vkyc-routing.module';
import { SharedVlDigiModule } from '@vldigi-app/shared/sharedVl-digi.module';
import { VkycProcessingComponent } from './vkyc-processing/vkyc-processing.component';



@NgModule({
  declarations: [
    VkycComponent,
    VkycProcessingComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule, 
    SharedVlDigiModule,
    VKYCRoutingModule
  ]
})
export class VkycModule { }
