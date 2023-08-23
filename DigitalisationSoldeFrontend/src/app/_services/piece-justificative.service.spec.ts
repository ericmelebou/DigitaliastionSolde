import { TestBed } from '@angular/core/testing';

import { PieceJustificativeService } from './piece-justificative.service';

describe('PieceJustificativeService', () => {
  let service: PieceJustificativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceJustificativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
