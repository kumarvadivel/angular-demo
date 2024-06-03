import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSequenceConfigurationConsoleComponent } from './components/page-sequence-configuration-console/page-sequence-configuration-console.component';

const routes: Routes = [
  {
    path:"",
    component:PageSequenceConfigurationConsoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSequenceRoutingModule { }
