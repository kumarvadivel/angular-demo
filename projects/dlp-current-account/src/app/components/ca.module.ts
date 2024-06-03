import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaRoutingModule } from './ca-routing.module';
import { CommonSbaModule } from '@ca-app-components/common/common.module';
import { SharedSBAModule } from '@ca-app/shared/sharedSBA.module';
import { HttpClientModule } from '@angular/common/http'; 
import { Configuration, EnvironmentService } from '@ca-environments/environment.service';
import { SuccessComponent } from '@ca-app-components//success/success.component'; 
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
    CaRoutingModule,
    CommonSbaModule,
    SharedSBAModule
  ],
  providers:[]
})
export class CaModule { }
