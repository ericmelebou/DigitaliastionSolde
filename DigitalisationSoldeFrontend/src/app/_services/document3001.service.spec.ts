import { TestBed } from '@angular/core/testing';

import { Document3001Service } from './document3001.service';

describe('Document3001Service', () => {
  let service: Document3001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document3001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
