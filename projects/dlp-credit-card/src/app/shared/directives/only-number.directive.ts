import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumber {

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if(this.OnlyNumber){
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
}
