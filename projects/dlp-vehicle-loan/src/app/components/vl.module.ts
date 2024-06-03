import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VLRoutingModule} from './vl-routing.module';
import {SharedVlModule} from '../shared/sharedVl.module';
import {HttpClientModule} from '@angular/common/http';
import {Configuration, EnvironmentService} from '@vl-environments/environment.service';
import {SuccessComponent} from '@vl-app-components/success/success.component';
import {VlCommonModule} from './common/common.module';

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
        VLRoutingModule,
        VlCommonModule,
        SharedVlModule
    ],
    providers: []
})
export class VLModule {
}
