import { ScreenResService } from './screen-res.service';
import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'nk-screen-res',
  templateUrl: './screen-res.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ScreenResComponent implements OnInit {
 @ViewChild('content', null) content: ElementRef;
 @ViewChild('title', null) title: ElementRef;
 @Input() name1;
largeStyle = {};
titleStyle = {};
@Input() Image0;
@Input() Image1;
@Input() Image2;
@Input() Image3;
@Input() Image4;
@Input() Image5;
@Input() titleText = '';
@Input() Image6;
@Input() height = 90;
@Input() width = 90;
@Input() fontFamily = '"Courier New", Courier, monospace';
@Input() fontSize = 4;
@Input() fontColour = 'white';
originalContent: string;
controlledContent: string;
constructor(private screenRes: ScreenResService) { }

  ngOnInit() {
    let ratio = window.innerWidth / window.innerHeight;
    if (ratio >= 0.4 && ratio < 0.5) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image0 + '")';

      } else if (ratio >= 0.5 && ratio < 0.58) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image1 + '")';
        // Add to 0.7
      } else if (ratio >= 0.7 && ratio < 0.78) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image2 + '")';
        // Add to 1.3
    } else if (ratio >= 1.3 && ratio < 1.4) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image3 + '")';
      // Add to 1.7
    } else if (ratio >= 1.7 && ratio < 1.8) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image4 + '")';

    } else if (ratio >= 1.8 && ratio < 1.9) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image5 + '")';
    } else if (ratio >= 1.9) {
      this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image6 + '")';
    }
    this.largeStyle = {'min-height': this.height + 'vh', 'min-width': this.width + 'vw',
    'background-repeat': 'no-repeat',
    'background-size': 100 + '%'
  };
    this.titleStyle = {
    'font-family': this.fontFamily,
    'font-size': this.fontSize + 'rem',
    'color': this.fontColour
  };
   // this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image1 + '")';
    this.screenRes.resizeSubject.subscribe((result) => {
       ratio = result.width / result.height;
       if (ratio >= 0.4 && ratio < 0.5) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image0 + '")';

        } else if (ratio >= 0.5 && ratio < 0.58) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image1 + '")';

        } else if (ratio >= 0.7 && ratio < 0.78) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image2 + '")';

      } else if (ratio >= 1.3 && ratio < 1.4) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image3 + '")';

      } else if (ratio >= 1.7 && ratio < 1.8) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image4 + '")';

      } else if (ratio >= 1.8 && ratio < 1.9) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image5 + '")';
      } else if (ratio >= 1.9) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image6 + '")';
      }
       console.log((result.width / result.height).toFixed(2));
       console.log(result);
    });
  //  this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
    console.log(this.name1);
    console.log(this.Image1);
  }

  markText(value: any) {
console.log(value);
  }
}
