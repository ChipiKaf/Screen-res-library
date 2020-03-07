import { ScreenResService } from './screen-res.service';
import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { faCoffee, faPowerOff } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'nk-screen-res',
  templateUrl: './screen-res.html',
  styleUrls: ['./screen-res.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScreenResComponent implements OnInit {
 @ViewChild('content', null) content: ElementRef;
 @ViewChild('title', null) title: ElementRef;
 @ViewChild('caption', null) captionReference: ElementRef;
 @Input() name1;
 @Input() chosen = 'fas fa-power-off';
largeStyle = {};
titleStyle = {};
captionStyle = {};
linkStyle = {};
originalContent: string;
controlledContent: string;
faCoffee = faPowerOff;
linkColour = 'white';
@Input() Image0;

@Input() Image1;
@Input() Image2;
@Input() Image3;
@Input() Image4;
@Input() Image5;
@Input() isTitle = false;
@Input() isCaption = false;
@Input() isButton = false;
@Input() titleText = '';
@Input() buttonSize = 'lg';
@Input() Image6;
@Input() height = 90;
@Input() captionText= "You matter a lot";
@Input() width = 90;
@Input() fontFamilyCaption = '"Courier New", Courier, monospace';
@Input() fontSizeCaption = 2;
@Input() fontColourCaption = 'white';
@Input() fontFamily = '"Courier New", Courier, monospace';
@Input() fontSize = 4;
@Input() fontColour = 'white';

@Output() buttonClick = new EventEmitter<void>();

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
    this.captionStyle = {
    'font-family': this.fontFamilyCaption,
    'font-size': this.fontSizeCaption + 'rem',
    'color': this.fontColourCaption
  };
    this.linkStyle = {
    'color': this.linkColour
  };
   // this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image1 + '")';
    this.screenRes.resizeSubject.subscribe((result) => {
       ratio = result.width / result.height;
       if (ratio >= 0.4 && ratio < 0.5) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image0 + '")';

        } else if (ratio >= 0.5 && ratio < 0.6) {
        this.content.nativeElement.style.background = 'no-repeat center/100% url("' + this.Image1 + '")';

        } else if (ratio >= 0.7 && ratio < 0.8) {
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
