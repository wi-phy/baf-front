import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appGradientText]',
})
export class GradientTextDirective {
  private el = inject(ElementRef);

  constructor() {
    const classes = [
      'bg-linear-to-tr',
      'from-orange-600',
      'via-accent',
      'to-accent',
      'bg-clip-text',
      'text-transparent',
    ];
    this.el.nativeElement.classList.add(...classes);
  }
}
