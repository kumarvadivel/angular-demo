import {Directive, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[alphaNumberOnly]'
})
export class AlphaNumberOnlyDirective {
    regexStr = '^[a-zA-Z0-9]*$';
    @Input() alphaNumberOnly: boolean;

    @HostListener('keypress', ['$event']) onKeyPress(event) {
        if (this.alphaNumberOnly) {
            return new RegExp(this.regexStr).test(event.key);
        }
    }
}
