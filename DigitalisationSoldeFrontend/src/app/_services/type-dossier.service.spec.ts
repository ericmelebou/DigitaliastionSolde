import { TestBed } from '@angular/core/testing';

import { TypeDossierService } from './type-dossier.service';

describe('TypeDossierService', () => {
  let service: TypeDossierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDossierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
