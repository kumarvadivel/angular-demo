import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductErrorComponent } from './components/product-error/product-error.component';
import { ESignComponent } from './e-sign/e-sign.component';

const routes: Routes = [

  {
    path: "product-error",
    component: ProductErrorComponent
  },
  {
    path:'esign',
    component:ESignComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomInformationRoutingModule { }
