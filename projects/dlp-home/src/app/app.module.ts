import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonAppModule } from './modules/common/common.module';
import { Configuration, EnvironmentService } from '@home-environments/environment.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LogicFunctions } from './shared/helpers/JsonLogic';
import { LocalStorage } from './shared/helpers/localStorage';
import { ApiInterceptor } from './shared/interceptor/api.interceptor';

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
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonAppModule,
    AppRoutingModule
  ],
  providers: [LogicFunctions,LocalStorage,{provide: LocationStrategy, useClass: HashLocationStrategy},
    {
        provide: APP_INITIALIZER, useFactory: ConfigLoader,deps:[EnvironmentService,HttpClient],  multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
