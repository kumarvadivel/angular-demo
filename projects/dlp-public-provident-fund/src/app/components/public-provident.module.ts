import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration, EnvironmentService } from '../../environments/environment.service';
import { SuccessComponent } from './success/success.component';
import { CommonSbaModule } from '@ppf-app/components/common/common.module';
import { SharedSBAModule } from '@ppf-app/shared/sharedSBA.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicProvidentRoutingModule } from './public-provident-routing.module';


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
    PublicProvidentRoutingModule,
    CommonSbaModule,
    SharedSBAModule
  ],
  providers:[]
})
export class PublicProvidentModule { }
