import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationComponent } from './components/declaration/declaration.component';

const routes: Routes = [
  {
    path:'declaration',component:DeclarationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentDocumentRoutingModule { }
