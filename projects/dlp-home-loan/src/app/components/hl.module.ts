import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HLRoutingModule} from './hl-routing.module';
import {SharedHlModule} from '../shared/sharedHl.module';
import {HttpClientModule} from '@angular/common/http';
import {Configuration, EnvironmentService} from '@hl-environments/environment.service';
import {SuccessComponent} from '@hl-app-components/success/success.component';
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
        HLRoutingModule,
        HlCommonModule,
        SharedHlModule
    ],
    providers: []
})
export class HLModule {
}
