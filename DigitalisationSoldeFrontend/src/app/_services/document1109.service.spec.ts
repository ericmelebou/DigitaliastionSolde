import { TestBed } from '@angular/core/testing';

import { Document1109Service } from './document1109.service';

describe('Document1109Service', () => {
  let service: Document1109Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1109Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
