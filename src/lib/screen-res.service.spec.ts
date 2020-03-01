import { TestBed } from '@angular/core/testing';

import { ScreenResService } from './screen-res.service';

describe('ScreenResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenResService = TestBed.get(ScreenResService);
    expect(service).toBeTruthy();
  });
});
