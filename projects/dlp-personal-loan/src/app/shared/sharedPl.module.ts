import {NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFieldsComponent} from './components/dynamic-fields/dynamic-fields.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import {NgxOtpInputModule} from 'ngx-otp-input';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule} from '@angular/material/button';
import {PreventSpecialCharactersDirective} from './directives/prevent-special-characters.directive';
import {AutoTabDirective} from './directives/auto-tab.directive';
import {AlphaNumberOnlyDirective} from './directives/alpha-number-only.directive';
import {AlphaOnlyDirective} from './directives/alpha-only.directive';
import {AddressDirective} from './directives/address.directive';
import {CopyPasteDirective} from './directives/copy-paste.directive';
import {InputModeDirective} from './directives/input-mode.directive';
import {OnlyNumber} from './directives/only-number.directive';
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
import {Formatters} from './helpers/Formatters';
import {LogicFunctions} from './helpers/JsonLogic';
import {OtpComponent} from './components/otp/otp.component';
import {ConsentComponent} from './components/consent/consent.component';
import {SnackBarComponent} from './components/snack-bar/snack-bar.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {StepperComponent} from './components/stepper/stepper.component';
import {Encrypt} from './helpers/Encrypt';
import {PopupComponent} from './components/popup/popup.component';
import {CaptchaComponent} from './components/captcha/captcha.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {SectionBuilderComponent} from './components/section-builder/section-builder.component';
import {SubstepperComponent} from './components/substepper/substepper.component';
import {DynamicTabsComponent} from './components/dynamic-tabs/dynamic-tabs.component';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {EmiCalculatorComponent} from './components/emi-calculator/emi-calculator.component';
import {ExistingRelationshipComponent} from './components/existing-relationship/existing-relationship.component';
import {TableComponent} from './components/table/table.component';
import {ChartComponent} from './components/chart/chart.component';
import {
    LoanSummaryActionPopupComponent
} from './components/loan-summary-action-popup/loan-summary-action-popup.component';
import {UploadScanDocComponent} from './components/upload-scan-doc/upload-scan-doc.component';
import {IframeComponent} from './components/iframe/iframe.component';
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {ArrayMethod} from './helpers/ArrayMethods';
import {AddNewItemPopupComponent} from './components/add-new-item-popup/add-new-item-popup.component';
import {MatIconModule} from '@angular/material/icon';
import {UppercaseDirective} from './directives/uppercase.directive';
import {GuageChartComponent} from './components/guage-chart/guage-chart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CrmLeadPopupComponent} from './components/crm-lead-popup/crm-lead-popup.component';
import {ResumeApplicationComponent} from './components/resume-application/resume-application.component';
import {UdyamHyphenDirective} from './directives/udyam-hyphen.directive';
import {LocalStorage} from './helpers/localStorage';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ViewDocumentPopupComponent } from './components/view-document-popup/view-document-popup.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        DynamicFieldsComponent,
        PreventSpecialCharactersDirective,
        AlphaNumberOnlyDirective,
        AlphaOnlyDirective,
        AutoTabDirective,
        AddressDirective,
        CopyPasteDirective,
        InputModeDirective,
        OnlyNumber,
        OtpComponent,
        ConsentComponent,
        SnackBarComponent,
        PopupComponent,
        CaptchaComponent,
        CarouselComponent,
        StepperComponent,
        SectionBuilderComponent,
        SubstepperComponent,
        DynamicTabsComponent,
        EmiCalculatorComponent,
        ExistingRelationshipComponent,
        CrmLeadPopupComponent,
        TableComponent,
        ChartComponent,
        GuageChartComponent,
        LoanSummaryActionPopupComponent,
        UploadScanDocComponent,
        IframeComponent,
        FileUploadComponent,
        SpinnerComponent,
        AddNewItemPopupComponent,
        UppercaseDirective,
        ResumeApplicationComponent,
        UdyamHyphenDirective,
        ViewDocumentPopupComponent
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
    exports: [DynamicFieldsComponent,
        HttpClientModule,
        MatTooltipModule,
        MatExpansionModule,
        PreventSpecialCharactersDirective,
        AlphaNumberOnlyDirective,
        AlphaOnlyDirective,
        InputModeDirective,
        AutoTabDirective,
        AddressDirective,
        CopyPasteDirective,
        OnlyNumber,
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
        OtpComponent,
        ConsentComponent,
        SnackBarComponent,
        CaptchaComponent,
        CarouselComponent,
        StepperComponent,
        SectionBuilderComponent,
        SubstepperComponent,
        DynamicTabsComponent,
        MatCardModule,
        MatGridListModule,
        EmiCalculatorComponent,
        TableComponent,
        ChartComponent,
        GuageChartComponent,
        LoanSummaryActionPopupComponent,
        UppercaseDirective,
        MatIconModule,
        MatAutocompleteModule,
        MatStepperModule,
        FormsModule,
        ClipboardModule,
        SpinnerComponent,
        ViewDocumentPopupComponent
    ],
    providers: [Formatters, LogicFunctions, LocalStorage, Encrypt, ArrayMethod, {
        provide: MAT_DATE_LOCALE,
        useValue: 'en-GB'
    },
 {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},]
})
export class SharedPlModule {
}
