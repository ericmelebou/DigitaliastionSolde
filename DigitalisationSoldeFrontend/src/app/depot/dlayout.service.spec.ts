import { TestBed } from '@angular/core/testing';

import { DlayoutService } from './dlayout.service';

describe('DlayoutService', () => {
  let service: DlayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
