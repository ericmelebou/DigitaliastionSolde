import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../_helpers/variables';
import { IDossier } from '../_interfaces/dossier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http: HttpClient) { }

  getDossiers(): Observable<IDossier[]> {
    return this.http.get<IDossier[]>(apiUrl + '/dossiers');
  }
  getDossier(id: number): Observable<IDossier> {
    return this.http.get<IDossier>(apiUrl + '/dossier/' + id);
  }

  createDossier(dossier: IDossier): Observable<IDossier> {
    return this.http.post<IDossier>(apiUrl + '/dossier', dossier);
  }

  updateDossier(dossier: IDossier): Observable<IDossier> {
    return this.http.put<IDossier>(apiUrl + '/dossier/' + dossier.id, dossier);
  }
}
