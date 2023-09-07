import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IAffectationDossier } from '../_interfaces/affectation-dossier';

@Injectable({
  providedIn: 'root'
})
export class AffectationDossierService {

  constructor(private http: HttpClient) { }

  getAffectationDossiers(): Observable<IAffectationDossier[]> {
    return this.http.get<IAffectationDossier[]>(apiUrl + '/affectationDossiers');
  }
  getAffectationDossier(id: number): Observable<IAffectationDossier> {
    return this.http.get<IAffectationDossier>(apiUrl + '/affectationDossier/' + id);
  }
  getAffectationDossierByLastestAffectation(id: number): Observable<IAffectationDossier> {
    return this.http.get<IAffectationDossier>(apiUrl + '/affectationDossierByDossierId/' + id);
  }
  createAffectationDossier(affectationDossier: IAffectationDossier): Observable<IAffectationDossier> {
    return this.http.post<IAffectationDossier>(apiUrl + '/affectationDossier', affectationDossier);
  }

  updateAffectationDossier(affectationDossier: IAffectationDossier): Observable<IAffectationDossier> {
    return this.http.put<IAffectationDossier>(apiUrl + '/affectationDossier/' + affectationDossier.id, affectationDossier);
  }
}
