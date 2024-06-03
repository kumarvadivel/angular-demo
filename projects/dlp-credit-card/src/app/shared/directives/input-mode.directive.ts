import {
    Attribute,
    Directive,
    HostBinding,
    Input
  } from "@angular/core";
  
  @Directive({
    selector: "input[inputmode]"
  })
  export class InputModeDirective {
    @Input()
    @HostBinding("attr.inputmode")
    inputmode = "text";
  
    constructor(
      @Attribute("pattern") private readonly pattern: string,
    ) {}
  
    @HostBinding("attr.pattern")
    get patternAttribute(): string {
      return this.inputmode === "numeric" && !this.pattern ? "[0-9]*" : this.pattern;
    }
  }
  