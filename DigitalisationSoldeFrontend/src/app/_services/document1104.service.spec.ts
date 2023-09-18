import { TestBed } from '@angular/core/testing';

import { Document1104Service } from './document1104.service';

describe('Document1104Service', () => {
  let service: Document1104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
