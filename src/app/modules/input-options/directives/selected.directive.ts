import { Directive, ElementRef, Renderer2, Host, HostListener, Output, EventEmitter } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';


@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {

  constructor(private ref: ElementRef, private rendered: Renderer2) {
    console.log(ref);
  }

  @Output() s: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event']) selectedChip($event: Event) {
    this.s.emit($event);
  }



}
