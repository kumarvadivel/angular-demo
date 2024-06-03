import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLRoutingModule } from './gl-routing.module'; 
import { SharedGlModule } from '../shared/sharedGl.module';
import { HttpClientModule } from '@angular/common/http';
import { Configuration, EnvironmentService } from '../../environments/environment.service';
import { SuccessComponent } from './success/success.component';
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
    GLRoutingModule,
    GlCommonModule,
    SharedGlModule
  ],
  providers:[]
})
export class GLModule { }
