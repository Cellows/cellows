import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[celTooltip]'
})
export class TooltipDirective {
  @Input() tooltip: string = "<provide tooltip string>";
  @Input() placement: string = "bottom";
  @Input() delay: number = 300;
  tooltipElement!: HTMLElement | null;
  offset = 10;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) { this.hide(); }
  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltipElement, 'cel-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltipElement, 'cel-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }, this.delay);
  }

  create() {
    this.tooltipElement = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.tooltip)
    );

    this.renderer.appendChild(document.body, this.tooltipElement);

    this.renderer.addClass(this.tooltipElement, 'cel-tooltip');
    this.renderer.addClass(this.tooltipElement, `cel-tooltip-${this.placement}`);
    this.renderer.setStyle(this.tooltipElement, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltipElement, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltipElement, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltipElement, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    if (this.tooltipElement != null) {
      const tooltipPos = this.tooltipElement.getBoundingClientRect();

      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      let top, left;

      if (this.placement === 'top') {
        top = hostPos.top - tooltipPos.height - this.offset;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
      }

      if (this.placement === 'bottom' || '') {
        top = hostPos.bottom + this.offset;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
      }

      if (this.placement === 'left') {
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.left - tooltipPos.width - this.offset;
      }

      if (this.placement === 'right') {
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.right + this.offset;
      }

      this.renderer.setStyle(this.tooltipElement, 'top', `${top + scrollPos}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  }
}
