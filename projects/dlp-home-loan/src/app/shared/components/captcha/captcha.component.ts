import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {SharedService} from '../../services/utils/shared.service';

@Component({
    selector: 'captcha',
    templateUrl: './captcha.component.html',
    styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {
    @Output() status = new EventEmitter<any>()
    captcha: string;
    captchaEntered: string;
    validitySubscription: Subscription;
    @Input() validityCheck: Observable<void>;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
        this.validitySubscription = this.validityCheck.subscribe(() => this.validateCaptcha(true));
        this.loadCaptcha();
    }

    loadCaptcha() {
        this.captcha = '';
        this.captchaEntered = null
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            this.captcha += possible.charAt(Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] * possible.length));
        }
    }

    playCaptcha() {
        for (const element of this.captcha) {
            this.speechSynthesis(element);
        }
    }

    speechSynthesis(charecter) {
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'en-US';
        utter.text = charecter;
        utter.volume = 1;
        window.speechSynthesis.speak(utter);
    }

    validateCaptcha(blur?) {
        if (this.captchaEntered == '') {
            if (blur === true) {
                this.sharedService.openSnackBar('Please Enter the Captcha', 'error', 200);
            }
            this.status.emit({"ok": false})
        } else if (this.captchaEntered != this.captcha) {
            if (blur === true) {
                this.sharedService.openSnackBar('Please Enter the valid Captcha', 'error', 200);
            }
            this.status.emit({"ok": false})
        } else if (this.captchaEntered == this.captcha) {
            this.status.emit({"ok": true})
        }
    }
}
