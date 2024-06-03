import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclarationComponent } from './components/declaration/declaration.component';

const routes: Routes = [
  {
    path: 'declaration',
    component: DeclarationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentDocumentRoutingModule { }
