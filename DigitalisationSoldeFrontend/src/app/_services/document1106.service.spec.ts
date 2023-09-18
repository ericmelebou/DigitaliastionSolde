import { TestBed } from '@angular/core/testing';

import { Document1106Service } from './document1106.service';

describe('Document1106Service', () => {
  let service: Document1106Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1106Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
