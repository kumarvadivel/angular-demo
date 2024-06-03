import { NgModule } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import { CommonVariableService } from './services/common-variable-service';

function routesFactory() {
  return [
   {
     path: '',
     loadChildren: () => { return import('../app/components/kcc.module').then(m => m.KCCModule)
      }
   }, 
  ]
}
@NgModule({
  imports: [RouterModule.forRoot([], { onSameUrlNavigation: 'reload', 'urlUpdateStrategy':'eager' })],
  providers: [{
    provide: ROUTES,
    useFactory: routesFactory,
    multi: true,
    deps: [CommonVariableService]
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
