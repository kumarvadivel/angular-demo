import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatSliderModule } from '@angular/material/slider';
import {  MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionBuilderComponent } from './components/section-builder/section-builder.component';
import { DynamicFieldsComponent } from './components/dynamic-fields/dynamic-fields.component';
import { DynamicTabsComponent } from './components/dynamic-tabs/dynamic-tabs.component';
import { Formatters } from './helpers/Formatters';
import { ArrayMethod } from './helpers/ArrayMethods';
import { LogicFunctions } from './helpers/JsonLogic';
import { LocalStorage } from './helpers/LocalStorage';
import { Encrypt } from './helpers/Encrypt';
import { CustomHttpParamEncoder } from './helpers/customHttpEncoder';
import { AddressDirective } from './directives/address.directive';
import { AlphaNumberOnlyDirective } from './directives/alpha-number-only.directive';
import { AlphaOnlyDirective } from './directives/alpha-only.directive';
import { AutoTabDirective } from './directives/auto-tab.directive';
import { CopyPasteDirective } from './directives/copy-paste.directive';
import { InputModeDirective } from './directives/input-mode.directive';
import { OnlyNumber } from './directives/only-number.directive';
import { PreventSpecialCharactersDirective } from './directives/prevent-special-characters.directive';
import { UdyamHyphenDirective } from './directives/udyam-hyphen.directive';
import { UppercaseDirective } from './directives/uppercase.directive';
import { EmiCalculatorComponent } from './components/emi-calculator/emi-calculator.component';
import { OtpComponent } from './components/otp/otp.component';
import { PopupComponent } from './components/popup/popup.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { ConsentComponent } from './components/consent/consent.component';
import { ExistingRelationshipComponent } from './components/existing-relationship/existing-relationship.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { GuageChartComponent } from './components/guage-chart/guage-chart.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { LoanSummaryActionPopupComponent } from './components/loan-summary-action-popup/loan-summary-action-popup.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { UploadScanDocComponent } from './components/upload-scan-doc/upload-scan-doc.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    CarouselComponent,
    SectionBuilderComponent,
    DynamicFieldsComponent,
    DynamicTabsComponent,
    EmiCalculatorComponent,
    OtpComponent,
    PopupComponent,
    CaptchaComponent,
    ConsentComponent,
    EmiCalculatorComponent,
    ExistingRelationshipComponent,
    FileUploadComponent,
    GuageChartComponent,
    IframeComponent,
    LoanSummaryActionPopupComponent,
    OtpComponent,
    PopupComponent,
    SnackBarComponent,
    StepperComponent,
    TableComponent,
    UploadScanDocComponent,
    ChartComponent,

    AddressDirective,
    AlphaNumberOnlyDirective,
    AlphaOnlyDirective,
    AutoTabDirective,
    CopyPasteDirective,
    InputModeDirective,
    OnlyNumber,
    PreventSpecialCharactersDirective,
    UdyamHyphenDirective,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    FormsModule, 
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTooltipModule,
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
    MatGridListModule,
    MatStepperModule,
    NgxOtpInputModule,
    SelectDropDownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  exports:[
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTooltipModule,
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
    MatGridListModule,
    MatStepperModule,
    // BrowserAnimationsModule,

    AddressDirective,
    AlphaNumberOnlyDirective,
    AlphaOnlyDirective,
    AutoTabDirective,
    CopyPasteDirective,
    InputModeDirective,
    OnlyNumber,
    PreventSpecialCharactersDirective,
    UdyamHyphenDirective,
    UppercaseDirective,

    CarouselComponent,
    SectionBuilderComponent,
    DynamicFieldsComponent,
    DynamicTabsComponent,
    EmiCalculatorComponent,
    OtpComponent,
    PopupComponent,
    CaptchaComponent,
    ConsentComponent,
    EmiCalculatorComponent,
    ExistingRelationshipComponent,
    FileUploadComponent,
    GuageChartComponent,
    IframeComponent,
    LoanSummaryActionPopupComponent,
    OtpComponent,
    PopupComponent,
    SnackBarComponent,
    StepperComponent,
    TableComponent,
    UploadScanDocComponent,
    ChartComponent,
  ],
  providers:[Formatters,LogicFunctions,Encrypt,LocalStorage,ArrayMethod,{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, ]
})

export class SharedElModule { }
