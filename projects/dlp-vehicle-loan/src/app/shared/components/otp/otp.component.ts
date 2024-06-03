import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgxOtpInputComponent} from 'ngx-otp-input';
import {SpinnerService} from '../../../shared/services/utils/spinner.service';
import {ApiService} from '@vl-app/services/api.service';
import {SharedService} from '../../services/utils/shared.service'
import {CommonCommonService} from '@vl-app/services/common-common.service';
import {CommonVariableService} from '@vl-app/services/common-variable-service';
import {LocalStorage} from '@vl-app/shared/helpers/localStorage';
import { isNull, reject } from '@vl-app/shared/utils/utils';

@Component({
    selector: 'otp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit, AfterViewInit {
    @Input() field: any
    @Input() options: any
    @Output() onSuccess = new EventEmitter<any>();
    @Output() onGenerateSuccess = new EventEmitter<any>();
    @Output() onAttemptsComplete = new EventEmitter<any>();
    @Output() onError = new EventEmitter<any>();
    @ViewChild('ngxotp') ngxOtp: NgxOtpInputComponent;
    timeIntravel: any;
    timeLeft: number = 0;
    minsLeft: number = 0;
    secsLeft: number = 0;
    lastIndex: any;
    otpAttempt: any = 0;
    otpGate: boolean = true
    showloader = false
    journey;
    metaConfig;
    config
    loanProduct: any = {};

    constructor(private spinner: SpinnerService,
                public theme1ApiService: ApiService,
                public commonService: CommonCommonService,
                private localStorage: LocalStorage,
                public commonVariableService: CommonVariableService,
                public sharedService: SharedService) {
    }

    ngAfterViewInit(): void {
        this.otpAttempt = this.field.otpAttempts;
    }

    ngOnInit(): void {
        this.journey = this.commonService.getJourney();
        if (this.options?.generateOtp === true) {
            this.otpAttempt = this.field.otpAttempts;
            this.generateOTP(undefined, true)
        } else {
            this.StartTimer()
            this.otpAttempt = this.field.otpAttempts;
        }
        this.loanProduct = JSON.parse(sessionStorage.getItem('SELECTED_LOAN_PRODUCT'));
    }

    ngOnDestroy() {
        clearInterval(this.timeIntravel);
    }

    StartTimer() {
        this.timeIntravel = setInterval(() => {
            this.minsLeft = Math.floor(this.timeLeft / 60);
            this.secsLeft = this.timeLeft % 60;
            if (this.timeLeft > 0)
                this.timeLeft--;
            else {
                clearInterval(this.timeIntravel);
            }
        }, 1000)
        this.timeLeft = this.field.waitTimeInSeconds;
    }

    handeOtpChange(value: string[]): void {
        let filledArray = reject(value, isNull);
        this.lastIndex = filledArray.length;
    }

    handleFillEvent(value) {
        this.field.value = value
        if (this.otpGate) {
            this.validateOtp();
        }
        /*to avoid Multiple API calls becuase of the external OTP Library*/
        this.otpGate = false;
        setTimeout(() => {
            this.otpGate = true;
        }, 2000)
    }

    generateOTP(resendOtp?, _generateOtp?) {
        this.showloader = true;

        if (this.field.otpType === 'MOBILE') {
            this.generateMobileOTP(resendOtp);
        } else if (this.field.otpType === 'EMAIL') {
            this.generateEmailOTP(resendOtp);
        } else if (this.field.otpType === 'AADHAR') {
            this.generateAadharOTP(resendOtp);
        } else if (this.field.otpType === 'ACCOUNT_NO') {
            this.generateAccountOTP();
        }
    }

    generateMobileOTP(resendOtp?: boolean) {
        const params = {
            usernameOrPhoneNumber: this.options.value,
            notificationType: this.options.notificationType,
            microservicetoken:this.journey.product.oauthAccessToken,
            individualOrCompany: this.journey.productUserType.toUpperCase(),
            //transactionId: this.options.transactionId,
            applicationSource: 'WEB_JOURNEY'
        };

        if (this.options.loanProduct?.access_token) {
            params['access_token'] = this.options.loanProduct.access_token;
        }

        if (this.options.extraParams) {
            for (const prop in this.options.extraParams) {
                params[prop] = this.options.extraParams[prop];
            }
        }

        this.journey.metaData.capturedData.mobileNumber = this.options.value;

        this.theme1ApiService.generateMobileOtp(params)
            .then((res: any) => {
                this.apiresponseHandler(res, resendOtp)
            })
            .catch(error => {
                this.handleError(error, true);
            });
    }

    apiresponseHandler(res, resendOtp) {
        if (res.code === '200') {
            this.handleSuccess(res, resendOtp);
        } else {
            this.handleError(res, true);
        }
    }

    generateEmailOTP(resendOtp?: boolean) {
        const params = {
            email: this.options.value
        };

        if (this.options.loanProduct?.access_token) {
            params['access_token'] = this.options.loanProduct.access_token;
        }
        if(this.options.loanProduct?.oauthAccessToken){
            params["microservicetoken"] =this.options.loanProduct.oauthAccessToken
        }

        if (this.options.extraParams) {
            for (const prop in this.options.extraParams) {
                params[prop] = this.options.extraParams[prop];
            }
        }

        this.theme1ApiService.generateEmailOtp(params)
            .then((res: any) => {
                this.apiresponseHandler(res, resendOtp)

            })
            .catch(error => {
                this.handleError(error, false);
            });
    }

    generateAadharOTP(resendOtp?: boolean) {
        const params = {
            microservicetoken:this.journey.product.oauthAccessToken,
            aadharNumber: this.options.value,
            requestFor: 'BORROWER'
        };

        if (this.options.loanProduct?.access_token) {
            params['access_token'] = this.options.loanProduct.access_token;
        }

        if (this.options.loanProduct?.loanUuid) {
            params['loanUuid'] = this.options.loanProduct.loanUuid;
        }

        if (this.options.extraParams) {
            for (const prop in this.options.extraParams) {
                params[prop] = this.options.extraParams[prop];
            }
        }

        this.theme1ApiService.generateAadharOtp(params)
            .then((res: any) => {
                if (res.code === '200') {
                    this.handleSuccess(res, resendOtp);
                    this.options.txnId = res.txn;
                } else {
                    this.handleError(res, false);
                }
            })
            .catch(error => {
                this.handleError(error, false);
            });
    }

    generateAccountOTP() {
        const params = {
            transactionId: this.options.txnId,
            notificationType: 'COMMON_OTP_TWO'
        };

        if (this.options.extraParams) {
            for (const prop in this.options.extraParams) {
                params[prop] = this.options.extraParams[prop];
            }
        }

        this.theme1ApiService.generateAadharOtp(params)
            .then((res: any) => {
                if (res.code === '200') {
                    this.handleSuccess(res, false);
                } else {
                    this.handleError(res, false);
                }
            })
            .catch(error => {
                this.handleError(error, false);
            });
    }

    handleSuccess(res: any, resendOtp?: boolean) {
        this.showloader = false;
        let journey = this.commonService.getJourney();
        journey.metaData.capturedData = {...journey.metaData.capturedData, ...res};
        this.commonService.setJourney(journey);

        if (resendOtp) {
            this.otpAttempt = this.otpAttempt - 1;
        }

        this.StartTimer();
        this.clear();
        this.sharedService.openSnackBar(res.message, 'success', res.statusCode);
    }

    handleError(error: any, emitEvents: boolean) {
        this.showloader = false;
        this.sharedService.openSnackBar(error.message, 'error', 400);

        if (emitEvents) {
            if (this.field.otpType === 'MOBILE') {
                this.onAttemptsComplete.emit({isVerfied: false});
            } else {
                this.onError.emit({isVerfied: false, otpConfig: this.field});
            }
        }
    }

    mapMobileValidateOtpParams(params) {
        if (this.options.value) {
            params['usernameOrPhoneNumber'] = this.options.value
        }
        if (this.options.transactionId) {
            params['transactionId'] = this.options.transactionId
        }
        params['createBorrower'] = this.options.createBorrower ? true : false
        if ((this.options.createBorrower && !this.options.isResume) || (!this.options.createBorrower && this.options.isResume)) {
            params['productCode'] = this.loanProduct.productCode
        }
        if (this.options.loanProduct && !this.options.isResume) {
            params['productCode'] = this.options.loanProduct.loanPurposeCode
        }
        if (this.options.individualOrCompany) {
            params['individualOrCompany'] = this.journey.productUserType.toUpperCase()
        }
        params['applicationSource'] = 'WEB_JOURNEY';
        params['microservicetoken'] = this.journey.product.oauthAccessToken
        if (this.options.accountNumber) {
            params['accountNumber'] = this.options.accountNumber
        }
        params['loanPurposeUuid'] = this.journey.product.loanPurposeUuid || this.journey.product.userId
        return params
    }

    mapValidateOtpParams(params) {
        switch (this.field.otpType) {
            case 'MOBILE':
                params = this.mapMobileValidateOtpParams(params)
                break;
            case 'EMAIL':
                params['email'] = this.options.value
                params["microservicetoken"] = this.options.loanProduct.oauthAccessToken;
                break;
            case 'AADHAR':
                params = {
                    "aadharNumber": this.options.value,
                    "loanUuid": this.options.loanProduct.loanUuid,
                    "txn": this.options.txnId,
                    "onboardingVerificationType": "EKYC_OTP_VERIFICATION",
                    "requestFor": this.options.requestFor,
                    "access_token": this.options.loanProduct.access_token,
                    "microservicetoken":this.journey.product.oauthAccessToken
                };
                break;
        }
        params['otp'] = this.field.value
        params = {...params, ...this.options?.extraValidateParams}
        return params
    }

    verifyMobileOtp(params) {
        this.theme1ApiService.verifyMobileOtp(params).then((res: any) => {
            this.verifyMobileOtpResposeValidate(res)
        }, error => {
            this.showloader = false
            this.sharedService.openSnackBar(error.message, 'error', 400)
        })
    }

    verifyMobileOtpResposeValidate(res) {
        this.showloader = false
        if (res.code == '200') {
            if (this.options.saveData !== false) {
                let journey = this.commonService.getJourney();
                journey.product = {...journey.product, ...res}
                if (res.loanDetailsWithAccessToken?.length > 0) {
                    let resumeJourney = res.loanDetailsWithAccessToken.find(resume => resume.productType == this.journey.product.finacleRequest)
                    if (resumeJourney) {
                        journey.product.access_token = resumeJourney.access_token;
                        journey.product.loanUuid = resumeJourney.loanUuid;
                        journey.resumeJourney = resumeJourney;
                        journey.resumeJourney.productCode = this.journey.product.productCode;
                        journey.product = {...journey.product, ...resumeJourney}
                    }
                }
                this.commonService.setJourney(journey)
                this.options.journeyEventCode ?? this.commonService.journeyEventsExecutor(this.options.journeyEventCode)
            }
            setTimeout(() => {
                this.onSuccess.emit({verified: true, otpConfig: this.field})
            });
            return
        }
        if (this.otpAttempt > 0) {
            this.otpAttempt -= 1
        }

        if (this.otpAttempt == 0) {
            this.onAttemptsComplete.emit({isVerfied: false, otpConfig: this.field})
        }
        this.clear()
        this.sharedService.openSnackBar(res.message, 'success', res.statusCode);

    }

    verifyEmailOtp(params) {
        this.theme1ApiService.verifyEmailOtp(params).then((res: any) => {
            this.showloader = false
            if (res.code == '200') {
                setTimeout(() => {
                    this.onSuccess.emit({verified: true, otpConfig: this.field})
                }, 500);
                if (this.options.journeyEventCode) {
                    this.commonService.journeyEventsExecutor(this.options.journeyEventCode)
                }
            } else {
                if (this.otpAttempt > 0) {
                    this.otpAttempt -= 1
                }
                if (this.otpAttempt == 0) {
                    this.onAttemptsComplete.emit({isVerfied: false, otpConfig: this.field})
                }
                this.clear()
                this.sharedService.openSnackBar(res.message, 'success', res.statusCode);
            }
        }, error => {
            this.showloader = false;
            this.sharedService.openSnackBar(error.message, 'error', 400)
        })
    }

    verifyAadharOtp(params) {
        this.theme1ApiService.verifyAadharOtp(params).then((res: any) => {
            this.showloader = false;
            if (res.code == '200') {
                if (this.options.saveToSubFlow) {
                    let subFlow = this.localStorage.SessionGetItem('SUBFLOW')
                    subFlow.capturedData['aadharData'] = res.mappingFields
                    subFlow.capturedData = {...subFlow.capturedData, ...res.mappingFields}
                    this.localStorage.SessionSetItem('SUBFLOW', subFlow)
                } else {
                    if (res.isETB === true) {
                        this.journey.isEtb = true
                    }
                    let journey = this.commonService.getJourney();
                    this.journey.metaData.capturedData = {...journey.metaData.capturedData, ...res.mappingFields, ...res.mappingFields.addressOne}
                    this.journey.metaData.capturedData['existingaadharData'] = {...res}
                    this.journey.metaData.capturedData['aadharData'] = res.mappingFields
                    this.journey.metaData.capturedData['aadharData']['aadharNumber'] = this.options.value
                    this.commonService.setJourney(this.journey)
                }
                setTimeout(() => {
                    this.onSuccess.emit({verified: true, otpConfig: this.field})
                });
                if (this.options.journeyEventCode) {
                    this.commonService.journeyEventsExecutor(this.options.journeyEventCode)
                }
            } else {
                if(res.code=='500'){
                    this.handleError(res, true);
                }else{
                    this.handleOtpAttempts()
                    this.clear()
                    this.sharedService.openSnackBar(res.message, 'success', res.statusCode);
                }
            }
        }, error => {
            this.showloader = false;
            this.sharedService.openSnackBar(error.message, 'error', 400)
        })
    }

    handleOtpAttempts(){
        if (this.otpAttempt > 0) {
            this.otpAttempt -= 1
        }
        if (this.otpAttempt == 0) {
            this.onAttemptsComplete.emit({isVerfied: false})
        }
    }

    validateOtp() {
        let params = {}
        this.showloader = true
        params = this.mapValidateOtpParams(params)
        switch (this.field.otpType) {
            case 'MOBILE':
                this.verifyMobileOtp(params)
                break;
            case 'EMAIL':
                this.verifyEmailOtp(params)
                break;
            case 'AADHAR':
                this.verifyAadharOtp(params)
                break;
        }
    }

    resendOtp() {
        if (this.otpAttempt != 0) {
            this.generateOTP(true);
        } else {
            this.sharedService.openSnackBar("No of attempts exceeds", 'error', 200)
        }
    }

    clear() {
        this.ngxOtp.clear()
    }

    preview(field: { isPreview: boolean; fieldDataType: any; OtpMasking: boolean; Masking: boolean; }) {
        field.isPreview = !field.isPreview
        switch (field.fieldDataType) {
            case 'OTP':
                field.OtpMasking = !field.OtpMasking
                break;
            case 'AADHAR':
                field.Masking = !field.Masking
                break;
        }
    }
}
