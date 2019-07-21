import { Directive, Input, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
  // tslint:disable-next-line:no-output-rename
  @Output('appSubmit') submitEvent = new EventEmitter();
  showFormattedInput: HTMLDivElement;
  constructor(private el: ElementRef, private render: Renderer2) {
    this.showFormattedInput = this.render.createElement('div');
  }

  @HostListener('keydown', ['$event']) keyEnter(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === 13) {
      // this.submitEvent.emit();
      // console.log('emitted');
      this.onkeyup();
      this.onBlur();
    }
  }
  @HostListener('keyup') onkeyup() {
    console.log(this.format);
    const val = this.changeCase();
    const parentEle = this.render.parentNode(this.el.nativeElement);
    this.showFormattedInput.innerHTML = val;
    this.render.setStyle(parentEle, 'position', 'relative');
    this.render.setStyle(this.showFormattedInput, 'position', 'absolute');
    this.render.setStyle(this.showFormattedInput, 'width', '100%');
    this.render.setStyle(this.showFormattedInput, 'z-index', '9');
    this.render.setStyle(this.showFormattedInput, 'background-color', '#cccccc');

    this.render.appendChild(parentEle, this.showFormattedInput);
    console.log(parentEle);
    console.log('keyup happend');
  }
  @HostListener('blur') onBlur() {
    console.log(this.format);
    const val = this.changeCase();
    const parentEle = this.render.parentNode(this.el.nativeElement);
    this.render.removeStyle(parentEle, 'position');
    this.render.removeChild(parentEle, this.showFormattedInput);
    (this.el.nativeElement as HTMLInputElement).value = val;
    console.log('onBlur happend');
  }

  changeCase() {
    const val = (this.el.nativeElement as HTMLInputElement).value;
    if (this.format === 'uppercase') {
      return val.toUpperCase();
    } else
      if (this.format === 'lowercase') {
        return val.toLowerCase();
      } else {
        return val;
      }
  }
}
