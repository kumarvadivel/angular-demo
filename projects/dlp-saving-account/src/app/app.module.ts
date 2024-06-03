import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { EnvironmentService,Configuration } from '../environments/environment.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedService } from './shared/services/utils/shared.service';
import { ApiInterceptor } from './shared/interceptor/api.interceptor';
import { Formatters } from './shared/helpers/Formatters';
import { ArrayMethod } from './shared/helpers/ArrayMethods';
import { LocalStorage } from './shared/helpers/LocalStorage';
import { LogicFunctions } from './shared/helpers/JsonLogic';
import { SharedSBAModule } from './shared/sharedSBA.module';

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
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    SharedSBAModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    // ServiceWorkerModule.register('serviceworker.js', { enabled: true })
  ],
  providers: [
    Formatters,
    ArrayMethod,
    LogicFunctions,
    LocalStorage,
    HttpClientModule,
        SharedService,
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
    // { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
