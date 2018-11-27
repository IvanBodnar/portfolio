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
    const scroll = window.scrollY;
    const height = document.body.scrollHeight;
    // breakPoint -> a partir de donde cambia al color nuevo
    const breakPoint = height < 1500 ? 3000 : height > 1500 && height < 3200 ? 2100 : 3800;
    if (scroll > 400 && scroll < breakPoint) {
      this._setColor(this.config.newColor);
    } else if (scroll > breakPoint) {
      this._setColor(this.config.defaultColor);
    } else {
      this._setColor(this.config.defaultColor);
    }
    // Test
    // console.log(scroll, height);
  }


  private _setColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', color);
  }

}
