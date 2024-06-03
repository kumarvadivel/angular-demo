import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLRoutingModule } from './kcc-routing.module'; 
import { SharedKCCModule } from '../shared/sharedKCC.module';
import { HttpClientModule } from '@angular/common/http';

import { KCCCommonModule } from './common/common.module';
import { Configuration, EnvironmentService } from '@kcc-ah-environments/environment.service';
import { SuccessComponent } from './success/success.component';
export function ConfigLoader(injector: Injector): () => Promise<Configuration> {
  return () => injector.get(EnvironmentService).loadConfiguration();
}
@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    GLRoutingModule,
    KCCCommonModule,
    SharedKCCModule
  ],
  providers:[]
})
export class KCCModule { }
