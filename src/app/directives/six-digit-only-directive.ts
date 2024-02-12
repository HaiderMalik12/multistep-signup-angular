import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSixDigitOnly]',
  standalone: true,
})
export class SixDigitOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue: string = this.el.nativeElement.value;
    const newValue: string = initialValue.replace(/[^0-9]/g, '').substr(0, 6);
    this.el.nativeElement.value = newValue;
  }
}
