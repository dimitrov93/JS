import { Directive, Input, OnChanges, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnChanges {

  @Input() appMyIf = false;
  @Input() template: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<{value: string, $implicit: number}>,
    private vc: ViewContainerRef
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.appMyIf) {
      const template = this.templateRef || this.template;
      if (!template) {
        return;
      }
      this.vc.createEmbeddedView(template, { value: "Testing 123", $implicit: 123})
    } else {
      this.vc.clear();
    }
  }

}
