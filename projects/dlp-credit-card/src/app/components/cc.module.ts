import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCRoutingModule } from './cc-routing.module'; 
import { SharedCcModule } from '../shared/sharedCc.module';
import { HttpClientModule } from '@angular/common/http';
import { Configuration, EnvironmentService } from '@cc-environments/environment.service';
import { SuccessComponent } from '@cc-app-components/success/success.component';
import { GlCommonModule } from './common/common.module';
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
    CCRoutingModule,
    GlCommonModule,
    SharedCcModule
  ],
  providers:[]
})
export class CCModule { }
