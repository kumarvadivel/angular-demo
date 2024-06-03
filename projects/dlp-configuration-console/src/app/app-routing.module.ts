import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"pageSectionConfig",
    loadChildren:() => import('./module/page-section/page-section.module').then(m => m.PageSectionModule)
  },
  {
    path:"pageSequenceConfig",
    loadChildren:() => import('./module/page-sequence/page-sequence.module').then(m => m.PageSequenceModule)
  },
  {
    path:"pageMetaConfig",
    loadChildren:() => import('./module/page-metaconfig/page-metaconfig.module').then(m=> m.PageMetaconfigModule)
  },
  {
    path:"json-logic-descriptor",
    loadChildren: () => import('./module/json-logic-describer/json-logic-describer.module').then(m => m.JsonLogicDescriberModule)
  },
 {
  path:"",
  loadChildren:()=> import('./module/home/home.module').then(m=>m.HomeModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
