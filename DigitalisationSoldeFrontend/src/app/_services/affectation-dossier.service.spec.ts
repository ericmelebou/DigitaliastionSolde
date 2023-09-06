import { TestBed } from '@angular/core/testing';

import { AffectationDossierService } from './affectation-dossier.service';

describe('AffectationDossierService', () => {
  let service: AffectationDossierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffectationDossierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
