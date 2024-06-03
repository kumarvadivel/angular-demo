import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component'; 
import { DirectorInfoComponent } from './components/director-info/director-info.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';

const routes: Routes = [
  {
  path:'', component:MoreInfoComponent
  
},
{
  path:'personal-details',component:PersonalDetailsComponent
},
{
  path:'product-selection',component:ProductSelectionComponent 
},
{
  path:'director-info',component:DirectorInfoComponent
},
{
  path:'business-details',component:BusinessDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeclarationRoutingModule { }
