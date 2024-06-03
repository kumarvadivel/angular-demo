import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
    selector: "[uppercase]",
    host: {
        '(input)': '$event',
    },
})
export class UppercaseDirective {
    @Input() uppercase: boolean = false;
    lastValue: string;

    constructor(public ref: ElementRef) {
    }

    @HostListener("input", ["$event"]) onInput($event) {
        if (this.uppercase) {
            let start = $event.target.selectionStart;
            let end = $event.target.selectionEnd;
            $event.target.value = $event.target.value.toUpperCase();
            $event.target.setSelectionRange(start, end);
            $event.preventDefault();
            if (
                !this.lastValue ||
                (this.lastValue &&
                    $event.target.value.length > 0 &&
                    this.lastValue !== $event.target.value)
            ) {
                this.lastValue = this.ref.nativeElement.value = $event.target.value;
                const evt = new InputEvent("input", {
                    bubbles: false,
                    cancelable: true
                });
                $event.target.dispatchEvent(evt);
            }
        }
    }
}
