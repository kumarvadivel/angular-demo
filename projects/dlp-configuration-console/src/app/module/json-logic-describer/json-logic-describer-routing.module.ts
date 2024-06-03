import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonLogicDescriberComponent } from './components/json-logic-describer/json-logic-describer.component';

const routes: Routes = [
  {
    path:"",
    component:JsonLogicDescriberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonLogicDescriberRoutingModule { }
