import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { VkycProcessingComponent } from './vkyc-processing/vkyc-processing.component';

const routes: Routes = [
  {
    path:"processing",component:VkycProcessingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VKYCRoutingModule { }
