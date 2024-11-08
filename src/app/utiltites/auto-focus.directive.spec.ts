import { AutoFocusDirective } from './auto-focus.directive';
import { ElementRef } from '@angular/core';

describe('AutoFocusDirective', () => {
  let directive: AutoFocusDirective;
  let eleRef: ElementRef;
  beforeEach(()=>{
    eleRef = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    directive = new AutoFocusDirective(eleRef);
  })
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
