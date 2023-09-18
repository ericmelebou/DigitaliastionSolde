import { TestBed } from '@angular/core/testing';

import { Document1101Service } from './document1101.service';

describe('Document1101Service', () => {
  let service: Document1101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
