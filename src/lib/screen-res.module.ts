import { ScreenResDirective } from './screen-res.directive';
import { NgModule } from '@angular/core';
import { ScreenResComponent } from './screen-res.component';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ScreenResComponent, ScreenResDirective],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ScreenResComponent]
})
export class ScreenResModule { }
