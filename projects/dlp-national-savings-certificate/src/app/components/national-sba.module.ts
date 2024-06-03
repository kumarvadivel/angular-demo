import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationalSbaRoutingModule } from './national-sba-routing.module';
import { Configuration, EnvironmentService } from '../../environments/environment.service';
import { SuccessComponent } from './success/success.component';
import { CommonSbaModule } from '@nsc-app/components/common/common.module';
import { SharedSBAModule } from '@nsc-app/shared/sharedSBA.module';
import { HttpClientModule } from '@angular/common/http';


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
    NationalSbaRoutingModule,
    CommonSbaModule,
    SharedSBAModule
  ],
  providers:[]
})
export class NationalSbaModule { }
