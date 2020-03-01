import { WindowModel } from './Models/window.model';
import { ScreenResService } from './screen-res.service';
import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[nkScreenRes]'
})

export class ScreenResDirective implements OnInit {
    public innerwidth: any;
public innerheight: any;
windowSize: WindowModel = {height: 0, width: 0};
  constructor(private screenRes: ScreenResService) { }

  @HostListener('window:resize', ['$event'])
  onResizing(event) {
    this.windowSize = {
        height: window.innerHeight,
        width: window.innerWidth
    };
    this.screenRes.onResize(this.windowSize);
 // this.windowEvent.emit();

}
ngOnInit() {
    this.windowSize = {
        height: window.innerHeight,
        width: window.innerWidth
    };
}

}
