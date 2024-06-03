import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSectionConfigurationConsoleComponent } from './components/page-section-configuration-console/page-section-configuration-console.component';

const routes: Routes = [
  {
    path:"",
    component:PageSectionConfigurationConsoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSectionRoutingModule { }
