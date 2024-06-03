import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[TextOnly]'
})
export class OnlyText {

  constructor(private el: ElementRef) { }

  @Input() TextOnly: boolean;

  @HostListener('input', ['$event']) onInput(event: Event): void {
    if(this.TextOnly){
      const inputElement = event.target as HTMLInputElement;
      const inputValue = inputElement.value;
      
      // Use a regular expression to match only text characters (letters)
      const regex = new RegExp(`^[a-zA-Z${" "}]*$`, 'g');
      const isValid = regex.test(inputValue);
  
      if (!isValid) {
        // If the input contains non-text characters, remove them
        const sanitizedValue = inputValue.replace(new RegExp(`[^a-zA-Z${" "}]`, 'g'), '');
        inputElement.value = sanitizedValue;
      }
    }
  }
}
