import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { BorrowerEmployeeinfoComponent } from './components/employment-details/borrower-employeeinfo.component';

const routes: Routes = [
  {
  path:'more-info', component:MoreInfoComponent
  
},
{
  path:'employment-details',component:BorrowerEmployeeinfoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeclarationRoutingModule { }
