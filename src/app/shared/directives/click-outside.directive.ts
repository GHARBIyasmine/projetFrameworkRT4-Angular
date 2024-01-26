import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';



@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  
  
  @Output() clickOutside = new EventEmitter<void>();

  @Input() set isOpen(value: boolean) {
    this.toggleClickSubscription(value);
  }
  
  documentClickSubscription: Subscription | undefined;

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    
    
    
  }
  
    private toggleClickSubscription(isSubscribed: boolean): void {

      if (isSubscribed) {
        this.documentClickSubscription = fromEvent(this.document, 'click')
        .pipe(
          filter((event) => {
            event.stopPropagation();
            return !this.isInside(event.target as HTMLElement);
          })
        )
        .subscribe(() => {
          this.clickOutside.emit();
        });  
        
      }
      else{

        this.documentClickSubscription?.unsubscribe();
        
      }
    }
  
  isInside(elementToCheck: HTMLElement): boolean {
    
    return (
    
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck)
    );
  }
   
}
