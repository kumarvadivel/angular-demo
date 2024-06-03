import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component'; 

const routes: Routes = [
  {
  path:'', component:MoreInfoComponent
  
},
{
  path:'personal-details',component:PersonalDetailsComponent
},
{
  path:'product-selection',component:ProductSelectionComponent 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeclarationRoutingModule { }
