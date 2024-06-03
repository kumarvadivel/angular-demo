import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[udyamHyphen]',
  host: {
    '(input)': '$event',
  },
})
export class UdyamHyphenDirective {
  @Input() udyamHyphen: any;

  constructor(public ref: ElementRef) {
  }

  @HostListener("input", ["$event"]) onInput($event) {
    if (this.udyamHyphen) {
      const input = $event.target as HTMLInputElement;
      let trimmed = input.value.replace(/\s+/g, '');
      trimmed = trimmed.replace(/-/g, '');
      let numbers = [];
      numbers.push(trimmed.substring(0, 5));
      if (trimmed.substring(5, 7) !== '') numbers.push(trimmed.substring(5, 7));
      if (trimmed.substring(7, 9) !== '') numbers.push(trimmed.substring(7, 9));
      if (trimmed.substring(9, 16) !== '') numbers.push(trimmed.substring(9, 16));
      input.value = numbers.join('-');
    }
  }
}
