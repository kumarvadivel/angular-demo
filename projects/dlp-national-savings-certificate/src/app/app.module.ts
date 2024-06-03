import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Configuration, EnvironmentService } from '@nsc-environments/environment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatSliderModule } from '@angular/material/slider';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { SharedSBAModule } from './shared/sharedSBA.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ApiInterceptor } from './shared/interceptor/api.interceptor';
import { ArrayMethod } from './shared/helpers/ArrayMethods';

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
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    ClipboardModule,
    MatSliderModule,
    MatTooltipModule,
    MatExpansionModule,
    FormsModule,
    SharedSBAModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // ServiceWorkerModule.register('serviceworker.js', { enabled: true })
  ],
  providers: [
    ArrayMethod,
    
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
