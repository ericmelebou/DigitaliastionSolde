import { TestBed } from '@angular/core/testing';

import { Document2101Service } from './document2101.service';

describe('Document2101Service', () => {
  let service: Document2101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document2101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
