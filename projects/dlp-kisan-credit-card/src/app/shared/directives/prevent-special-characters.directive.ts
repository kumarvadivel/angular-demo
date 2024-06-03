import {Directive, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[preventSpecialChar]'
})
export class PreventSpecialCharactersDirective {
    regexStr = "^[a-zA-Z0-9.@_-]";
    @Input() preventSpecialChar: boolean;

    @HostListener('keypress', ['$event']) onKeyPress(event) {
        if (this.preventSpecialChar) {
            return new RegExp(this.regexStr).test(event.key);
        }
    }
}
