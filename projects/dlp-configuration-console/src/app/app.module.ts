import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedConsoleModule } from './shared/SharedConsole.module';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService, Configuration } from '@config-environments/environment.service';

export function ConfigLoader(environmentService: EnvironmentService): () => Promise<Configuration> {
  return (): Promise<any> => {
      return environmentService.loadConfiguration()
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedConsoleModule
  ],
  providers: [
     {
    provide: APP_INITIALIZER, useFactory: ConfigLoader,deps:[EnvironmentService,HttpClient],  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
