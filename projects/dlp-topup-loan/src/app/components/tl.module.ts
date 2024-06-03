import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TLRoutingModule} from './tl-routing.module';
import {SharedTlModule} from '../shared/sharedTl.module';
import {HttpClientModule} from '@angular/common/http';
import {Configuration, EnvironmentService} from '@tl-environments/environment.service';
import {SuccessComponent} from '@tl-app-components/success/success.component';
import {HlCommonModule} from './common/common.module';

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
        TLRoutingModule,
        HlCommonModule,
        SharedTlModule
    ],
    providers: []
})
export class TLModule {
}
