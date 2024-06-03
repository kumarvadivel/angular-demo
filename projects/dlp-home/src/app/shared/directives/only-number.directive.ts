import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[directiveOnlyNumber]'
})
export class OnlyNumber {
    @Input() OnlyNumber: boolean

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const inputValue = this.el.nativeElement.value;
        const key = event.key;
        const isSpecialKey =
            event.ctrlKey ||
            ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight'].includes(key);
        const isCopyPasteKey = (event.ctrlKey || event.metaKey) && ['a', 'c', 'v'].includes(key);
        const isNumberKey = /^\d+$/.test(key);
        const isFirstCharacterMinusSign = key === '-' && inputValue.length === 0;
        const isDecimalPoint = key === '.';

        if (isSpecialKey || isCopyPasteKey || (isNumberKey && !isFirstCharacterMinusSign && !isDecimalPoint)) {
            return;
        }

        event.preventDefault();
    }
}
