import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { BorrowerEmployeeinfoComponent } from './components/employment-details/borrower-employeeinfo.component';
import { FacilityDetailsComponent } from './components/facility-details/facility-details.component';
import { DirectorInfoComponent } from './components/director-info/director-info.component';

const routes: Routes = [
  {
  path:'more-info', component:MoreInfoComponent
  
},
{
  path:'employment-details',component:BorrowerEmployeeinfoComponent
},
{
  path:'facility-details',component:FacilityDetailsComponent
},
{
  path:'director-info',component:DirectorInfoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeclarationRoutingModule { }
