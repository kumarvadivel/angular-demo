import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VLDigiRoutingModule} from './vl-digi-routing.module';
import {SharedVlDigiModule} from '../shared/sharedVl-digi.module';
import {HttpClientModule} from '@angular/common/http';
import {Configuration, EnvironmentService} from '@vldigi-environments/environment.service';
import {SuccessComponent} from '@vldigi-app-components/success/success.component';
import { VlDigiCommonModule} from './common/common.module';

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
        VLDigiRoutingModule,
        VlDigiCommonModule,
        SharedVlDigiModule
    ],
    providers: []
})
export class VLDigiModule {
}
