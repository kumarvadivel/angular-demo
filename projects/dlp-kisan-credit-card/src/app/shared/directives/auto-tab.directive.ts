import {Directive, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[autoTab]'
})
export class AutoTabDirective {
    @Input() autoTab;

    @HostListener('input', ['$event.target']) onInput(input) {
        const length = input.value.length;
        const maxLength = input.attributes.maxlength.value;
        if (length >= maxLength && this.autoTab) {
            const field = document.getElementById(this.autoTab);
            if (field) {
                field.focus();
            }
        }
    }
}
