import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TladRoutingModule} from './Tlad-routing.module';
import {SharedTladModule} from '../shared/sharedTlad.module';
import {HttpClientModule} from '@angular/common/http';
import {Configuration, EnvironmentService} from '@tlad-environments/environment.service';
import {TladCommonModule} from './common/common.module';

export function ConfigLoader(injector: Injector): () => Promise<Configuration> {
    return () => injector.get(EnvironmentService).loadConfiguration();
}

@NgModule({
    declarations: [
        
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        TladRoutingModule,
        TladCommonModule,
        SharedTladModule
    ],
    providers: []
})
export class TladModule {
}
