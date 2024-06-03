import { Directive,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[address]'
})
export class AddressDirective { 
  // ^[a-zA-Z0-9 /.&-]*$
  regexStr = '^[a-zA-Z0-9 ]*$';
  @Input() address: boolean;

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if(this.address){
      return new RegExp(this.regexStr).test(event.key);
    }
  }
}
