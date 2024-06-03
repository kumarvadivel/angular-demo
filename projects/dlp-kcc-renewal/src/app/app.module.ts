import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTabsModule } from '@angular/material/tabs';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Configuration, EnvironmentService } from '@kcc-renewal-environments/environment.service';
import { ApiInterceptor } from './shared/intreceptors/api.interceptor';
import { Formatters } from './shared/helpers/Formatters';
import { LogicFunctions } from './shared/helpers/JsonLogic';
import { ArrayMethod } from './shared/helpers/ArrayMethods';
import { LocalStorage } from './shared/helpers/localStorage';
import { SharedKccRenewalModule } from './shared/sharedkccrenewal.module';
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedKccRenewalModule
  ],
  providers: [
    Formatters,
    LogicFunctions,
    ArrayMethod,
    LocalStorage,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER, useFactory:ConfigLoader,deps:[EnvironmentService],multi: true
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
