import { CommonModule, LocationStrategy, HashLocationStrategy } from "@angular/common"
import { NgModule, APP_INITIALIZER } from "@angular/core"
import { EnvironmentService } from "@vldigi-environments/environment.service"
import { Configuration } from "webpack"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ArrayMethod } from "./shared/helpers/ArrayMethods"
import { Formatters } from "./shared/helpers/Formatters"
import { LogicFunctions } from "./shared/helpers/JsonLogic"
import { LocalStorage } from "./shared/helpers/localStorage"
import { ApiInterceptor } from "./shared/interceptor/api.interceptor"
import { SharedService } from "./shared/services/utils/shared.service"
import { SharedVlDigiModule } from "./shared/sharedVl-digi.module"
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
export function ConfigLoader(environmentService: EnvironmentService): () => Promise<Configuration> {
    return (): Promise<any> => {
        return environmentService.loadConfiguration()
    }
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatSnackBarModule,
        CommonModule,
        SharedVlDigiModule
    ],
    providers: [
        Formatters,
       HttpClientModule,
        SharedService,
       LocalStorage,
       LogicFunctions,
       ArrayMethod,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {
            provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [EnvironmentService,HttpClient], multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
          }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
