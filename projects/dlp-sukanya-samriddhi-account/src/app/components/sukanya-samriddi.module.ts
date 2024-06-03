import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration, EnvironmentService } from '../../environments/environment.service';
import { SuccessComponent } from './success/success.component';
import { CommonSbaModule } from '@ssa-app/components/common/common.module';
import { SharedSBAModule } from '@ssa-app/shared/sharedSBA.module';
import { HttpClientModule } from '@angular/common/http';
import { SukanyaSamriddiRoutingModule } from './sukanya-samriddi-routing.module';


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
    SukanyaSamriddiRoutingModule,
    CommonSbaModule,
    SharedSBAModule
  ],
  providers:[]
})
export class SukanyaSamriddiModule { }
