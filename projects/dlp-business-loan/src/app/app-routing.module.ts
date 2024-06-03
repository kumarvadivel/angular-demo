import { NgModule } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import { CommonVariableService } from './services/common-variable-service';

function routesFactory() {
  return [
   {
     path: '',
     loadChildren: () => { return import('@bl-app/components/bl.module').then(m => m.BlModule)
      }
   },
   {
      path: '**',
      redirectTo: ''
    },
  ]
}
@NgModule({
  imports: [RouterModule.forRoot([], { onSameUrlNavigation: 'reload', 'urlUpdateStrategy': 'eager' })],
  providers: [{
    provide: ROUTES,
    useFactory: routesFactory,
    multi: true,
    deps: [CommonVariableService]
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
