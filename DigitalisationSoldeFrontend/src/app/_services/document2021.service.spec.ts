import { TestBed } from '@angular/core/testing';

import { Document2021Service } from './document2021.service';

describe('Document2021Service', () => {
  let service: Document2021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Document2021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
