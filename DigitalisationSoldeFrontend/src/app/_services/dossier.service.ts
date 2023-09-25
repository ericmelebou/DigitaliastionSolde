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
  getDossiersByAgent(idAgent: number): Observable<IDossier[]> {
    return this.http.get<IDossier[]>(apiUrl + '/dossiers/' + idAgent);
  }
  getDossier(id: number): Observable<IDossier> {
    return this.http.get<IDossier>(apiUrl + '/dossier/' + id);
  }

  createDossier(dossier: FormData): any {
    return this.http.post<any>(apiUrl + '/dossier', dossier);
  }

  updateDossier(dossier: FormData): any {
    return this.http.post<any>(`${apiUrl}/updateDossier`, dossier);
  }
}
