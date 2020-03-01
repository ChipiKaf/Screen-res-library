import { WindowModel } from './Models/window.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScreenResService {
  resizeSubject = new Subject<WindowModel>();
  windowProperties: WindowModel;
  constructor() { }
  onResize(window: WindowModel) {
    this.resizeSubject.next(window);
  }
}
