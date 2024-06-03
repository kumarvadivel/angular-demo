import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbaRoutingModule } from './sba-routing.module';
import { CommonSbaModule } from '@sba-app-components/common/common.module';
import { SharedSBAModule } from '@sba-app/shared/sharedSBA.module';
import { HttpClientModule } from '@angular/common/http'; 
import { Configuration, EnvironmentService } from '@sba-environments/environment.service';
import { SuccessComponent } from '@sba-app-components//success/success.component'; 
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
    SbaRoutingModule,
    CommonSbaModule,
    SharedSBAModule
  ],
  providers:[]
})
export class SbaModule { }
