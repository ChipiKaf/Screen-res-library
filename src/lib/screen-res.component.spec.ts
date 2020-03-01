import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenResComponent } from './screen-res.component';

describe('ScreenResComponent', () => {
  let component: ScreenResComponent;
  let fixture: ComponentFixture<ScreenResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
