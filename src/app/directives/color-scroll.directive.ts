import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

interface ColorConfig {
  defaultColor: string;
  newColor: string;
}

@Directive({
  selector: '[appColorScroll]'
})
export class ColorScrollDirective {

  @Input('appColorScroll')
  config: ColorConfig;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 200) {
      this._setColor(this.config.newColor);
    } else {
      this._setColor(this.config.defaultColor);
    }

  }

  private _setColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', color);
  }

}
