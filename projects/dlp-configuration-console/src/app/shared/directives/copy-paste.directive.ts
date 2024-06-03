import {Directive, HostListener} from '@angular/core';
import enJson from '@config-assets/configuration/commonConfig.json'

@Directive({
    selector: '[appCopyPaste]'
})
export class CopyPasteDirective {

    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
        this.disableCopyPaste(e)
    }

    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
        this.disableCopyPaste(e)
    }

    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
        this.disableCopyPaste(e)
    }

    disableCopyPaste(e) {
        if (enJson.disableCopyPaste) {
            e.preventDefault();
        }
    }
}
