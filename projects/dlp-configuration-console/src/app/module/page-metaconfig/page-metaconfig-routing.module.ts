import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMetaconfigConsoleComponent } from './components/page-metaconfig-console/page-metaconfig-console.component';

const routes: Routes = [
  {
    path:"",
    component:PageMetaconfigConsoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMetaconfigRoutingModule { }
