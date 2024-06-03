import { Directive, HostListener } from '@angular/core';
import enJson from '@cc-assets/configuration/commonConfig.json'
@Directive({
  selector: '[appCopyPaste]'
})
export class CopyPasteDirective {
  @HostListener("paste", ["$event"])
  @HostListener("copy", ["$event"])
  @HostListener("cut", ["$event"])
  blockEvent(e: KeyboardEvent) {
    if (enJson.disableCopyPaste) {
      e.preventDefault();
    }
  }
}
