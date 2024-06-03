import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PLRoutingModule} from './pl-routing.module';
import {SharedPlModule} from '../shared/sharedPl.module';
import {HttpClientModule} from '@angular/common/http';
import {Configuration, EnvironmentService} from '@pl-environments/environment.service';
import {SuccessComponent} from '@pl-app-components/success/success.component';
import {PlCommonModule} from './common/common.module';

export function ConfigLoader(injector: Injector): () => Promise<Configuration> {
    return () => injector.get(EnvironmentService).loadConfiguration();
}

@NgModule({
    declarations: [
        SuccessComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        PLRoutingModule,
        PlCommonModule,
        SharedPlModule
    ],
    providers: []
})
export class PLModule {
}
