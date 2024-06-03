import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Configuration, EnvironmentService } from '@tlad-environments/environment.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './shared/interceptor/api.interceptor';
import { Formatters } from './shared/helpers/Formatters';
import { LogicFunctions } from './shared/helpers/JsonLogic';
import { ArrayMethod } from './shared/helpers/ArrayMethods';
import { LocalStorage } from './shared/helpers/localStorage';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [ 
    Formatters,LogicFunctions,ArrayMethod,LocalStorage,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
        provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [EnvironmentService], multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
