import { BrowserModule } from '@angular/platform-browser';
import { CommonModule,HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Configuration, EnvironmentService } from '@bl-environments/environment.service';
import { ApiInterceptor } from './shared/interceptor/api.interceptor';
import { SharedService } from './shared/services/utils/shared.service';
import { LocalStorage } from './shared/helpers/localStorage';
import { LogicFunctions } from './shared/helpers/JsonLogic';
import { ArrayMethod } from './shared/helpers/ArrayMethods';
import { Formatters } from './shared/helpers/Formatters';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedBlModule } from './shared/sharedBl.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    SharedBlModule
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
export class AppModule { }
