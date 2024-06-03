import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Configuration, EnvironmentService } from '@gl-environments/environment.service';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ArrayMethod } from './shared/helpers/ArrayMethods';
import { LogicFunctions } from './shared/helpers/JsonLogic';
import { LocalStorage } from './shared/helpers/localStorage';
import { SharedService } from './shared/services/utils/shared.service';

import { ApiInterceptor } from './shared/interceptor/api.interceptor';
import { Formatters } from './shared/helpers/Formatters';
import { SharedGlModule } from './shared/sharedGl.module';

export function ConfigLoader(environmentService:EnvironmentService): () => Promise<Configuration> {
  return  ():Promise<any> => {
      return environmentService.loadConfiguration()
  }
}
@NgModule({
  declarations: [
    AppComponent,
    // EligibilityCalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    CommonModule,
    SharedGlModule
  ],
  providers: [
    HttpClientModule,
    SharedService,
    LocalStorage,
    LogicFunctions,
    ArrayMethod,
    Formatters,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [EnvironmentService, HttpClient], multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
