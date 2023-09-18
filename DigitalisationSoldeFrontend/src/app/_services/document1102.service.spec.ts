import { TestBed } from '@angular/core/testing';

import { Document1102Service } from './document1102.service';

describe('Document1102Service', () => {
  let service: Document1102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document1102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
