import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[alphaOnly]'
})
export class AlphaOnlyDirective {

  
  regexStr = '^[a-zA-Z. ]*$';
  @Input() alphaOnly: boolean;

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if(this.alphaOnly){
      return new RegExp(this.regexStr).test(event.key);
    }
  }

}
