import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdRoutingModule } from './fd-routing.module';
import { CommonFdModule } from '@fd-app-components/common/common.module';
import { SharedFDModule } from '@fd-app/shared/sharedFD.module';
import { HttpClientModule } from '@angular/common/http'; 
import { Configuration, EnvironmentService } from '@fd-environments/environment.service';
import { SuccessComponent } from '@fd-app-components//success/success.component'; 
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
    FdRoutingModule,
    CommonFdModule,
    SharedFDModule
  ],
  providers:[]
})
export class FdModule { }
