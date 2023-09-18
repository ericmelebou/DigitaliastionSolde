import { TestBed } from '@angular/core/testing';

import { Document1105Service } from './document1105.service';

describe('Document1105Service', () => {
  let service: Document1105Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1105Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
