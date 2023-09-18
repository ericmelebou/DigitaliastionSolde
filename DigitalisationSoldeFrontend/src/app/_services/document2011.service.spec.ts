import { TestBed } from '@angular/core/testing';

import { Document2011Service } from './document2011.service';

describe('Document2011Service', () => {
  let service: Document2011Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document2011Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
