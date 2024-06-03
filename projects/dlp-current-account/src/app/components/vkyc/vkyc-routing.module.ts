import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { VkycProcessingComponent } from './vkyc-processing/vkyc-processing.component';
import { VkycComponent } from './vkyc/vkyc.component';

const routes: Routes = [
  {
    path:"processing",component:VkycProcessingComponent
  },
  {
    path:"vkyc",component:VkycComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VKYCRoutingModule { }
