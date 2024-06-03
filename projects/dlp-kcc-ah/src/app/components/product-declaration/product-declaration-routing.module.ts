import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMorePageDetailsComponent } from './components/add-more-page-details/add-more-page-details.component';

const routes: Routes = [  
  {
    path: "details/:show",
    component: AddMorePageDetailsComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeclarationRoutingModule { }
