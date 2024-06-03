import { NgModule } from '@angular/core';
import { ROUTES, RouterModule } from '@angular/router';
import { CommonVariableService } from './services/common-variable-service';

function routesFactory() {
  return [
   {
     path: '',
     loadChildren: () => { return import('@kcc-renewal-app-components/kcc-renewal.module').then(m => m.KccRenewalModule)
      }
   },
   {
      path: '**',
      redirectTo: ''
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
