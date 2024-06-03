import {NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import {NgxOtpInputModule} from 'ngx-otp-input';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS,  MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionBuilderComponent } from './components/section-builder/section-builder.component';
import { LogicFunctions } from './helpers/JsonLogic';
import { LocalStorage } from './helpers/localStorage';
import { ChartComponent } from './components/chart/chart.component';
import { DynamicFieldsComponent } from './components/dynamic-fields/dynamic-fields.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { SnackBarService } from '@home-app/services/snackbar.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ArrayMethod } from './helpers/ArrayMethods';
import { Formatters } from './helpers/Formatters';
import { PopupComponent } from './components/popup/popup.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CommonCommonService } from '@home-app/services/common-common.service';
import { Encrypt } from './helpers/Encrypt';
import { OtpComponent } from './components/otp/otp.component';
import { StepperComponent } from './components/stepper/stepper.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        CarouselComponent,
        SectionBuilderComponent,
        ChartComponent,
        DynamicFieldsComponent,
        SnackBarComponent,
        SpinnerComponent,
        PopupComponent,
        BreadCrumbComponent,
        OtpComponent,
        StepperComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatTooltipModule,
        NgxOtpInputModule,
        MatRadioModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTableModule,
        MatSliderModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        MatIconModule,
        SelectDropDownModule,
        MatGridListModule,
        MatAutocompleteModule,
        MatStepperModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ClipboardModule,
    ],
    exports: [
        HttpClientModule,
        MatTooltipModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTableModule,
        MatSliderModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatAutocompleteModule,
        MatStepperModule,
        FormsModule,
        ClipboardModule,
        CarouselComponent,
        SectionBuilderComponent,
        ChartComponent,
        DynamicFieldsComponent,
        SnackBarComponent,
        SpinnerComponent,
        PopupComponent,
        BreadCrumbComponent,
        OtpComponent,
        StepperComponent
    ],
    providers: [LogicFunctions,LocalStorage,ArrayMethod,Formatters,Encrypt,SnackBarService, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},{
        provide: MAT_DATE_LOCALE,
        useValue: 'en-GB'
    },
 {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},]
})
export class SharedHomeModule {
}
