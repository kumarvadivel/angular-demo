import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Configuration, EnvironmentService } from '@el-environments/environment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedElModule } from '@el-app/shared/sharedEl.module';
import { ApiErrorInterceptor } from './shared/interceptors/api-error.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';

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
    AppRoutingModule,

    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    ClipboardModule,
    MatSliderModule,
    MatTooltipModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    SharedElModule,
    SharedModule,
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
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER, useFactory:ConfigLoader,deps:[EnvironmentService],multi: true
    },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorInterceptor,
      multi: true,
      deps:[EnvironmentService]
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
