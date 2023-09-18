import { TestBed } from '@angular/core/testing';

import { Document1107Service } from './document1107.service';

describe('Document1107Service', () => {
  let service: Document1107Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1107Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
