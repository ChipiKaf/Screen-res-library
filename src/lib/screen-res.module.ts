import { ScreenResDirective } from './screen-res.directive';
import { NgModule } from '@angular/core';
import { ScreenResComponent } from './screen-res.component';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ScreenResComponent, ScreenResDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [ScreenResComponent]
})
export class ScreenResModule { }
