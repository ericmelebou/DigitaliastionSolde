import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITypeDossier } from '../_interfaces/type-dossier';
import { apiUrl } from '../_helpers/variables';

@Injectable({
  providedIn: 'root'
})
export class TypeDossierService {

  constructor(private http: HttpClient) { }

  getTypeDossiers(): Observable<ITypeDossier[]> {
    return this.http.get<ITypeDossier[]>(apiUrl + '/typeDossiers');
  }
  getTypeDossier(id: number): Observable<ITypeDossier> {
    return this.http.get<ITypeDossier>(apiUrl + '/typeDossier/' + id);
  }

  createTypeDossier(typeDossier: ITypeDossier): Observable<ITypeDossier> {
    return this.http.post<ITypeDossier>(apiUrl + '/typeDossier', typeDossier);
  }

  updateTypeDossier(typeDossier: ITypeDossier): Observable<ITypeDossier> {
    return this.http.put<ITypeDossier>(apiUrl + '/typeDossier/' + typeDossier.id, typeDossier);
  }
}
