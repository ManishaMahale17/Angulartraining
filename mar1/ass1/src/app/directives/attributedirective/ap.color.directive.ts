import { Directive, Input, ElementRef, Renderer2, HostListener } from "@angular/core";

// The attribute directive is generally used for Property Binding
// so set the selector as a syntax of Angular Property Binding
// [SELECTOR-NAME]
@Directive({
  selector:'[setColor]'
})
export class ColorDirective{
// define @Input Decorated Property, map this property with
// the Selector-Name
  @Input('setColor')
  setColor:string;

  // define a Constructor and inject it with following classes
  // 1. ElementRef: The HTML Element on which Directive is applied
  // 2. Renderer2: The new rendering for the HTML element
  // Instance of these classes will be resolved by 'BrowserModule'

  constructor(private ele:ElementRef, private renderer: Renderer2){
     this.setColor = '';
  }


  // private method
  applyColor(color:string):void {
    // update the style of teh HTMl Element
    this.renderer.setStyle(this.ele.nativeElement, "backgroundColor", color);
  }


  // define public method(s) those will be used to execute the Business Logic
  // for the Directive when an event occurres
  // apply HostListener Directive on Following methods so that they will be executed
  // when an event is raised on HTML element where the Directive is applied
  // The HostListener will accept JavaScript event

  @HostListener("mouseenter")
  onmouseenter(){
     this.applyColor(this.setColor);
  }
  @HostListener("mouseleave")
  onmouseleave(){
    this.applyColor('');
  }

}
