import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollVisibility]',
  standalone: true
})
export class ScrollVisibilityDirective {

  @Input() threshold: number = 1; // Umbral de visibilidad (50%)
  @Input() rootElement?: HTMLElement; // Contenedor raíz opcional

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const options: IntersectionObserverInit = {
      root: this.rootElement || null, // Usar el contenedor si está definido; de lo contrario, el viewport
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'visible');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    // Desconectar el observador para evitar fugas de memoria
    this.observer.disconnect();
  }
}
