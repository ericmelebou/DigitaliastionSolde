import { TestBed } from '@angular/core/testing';

import { Document1103Service } from './document1103.service';

describe('Document1103Service', () => {
  let service: Document1103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
