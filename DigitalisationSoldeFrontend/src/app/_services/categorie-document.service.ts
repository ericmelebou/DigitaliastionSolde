import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorieDocument } from '../_interfaces/categorie-document';
import { apiUrl } from '../_helpers/variables';

@Injectable({
  providedIn: 'root'
})
export class CategorieDocumentService {

  constructor(private http: HttpClient) { }

  getCategorieDocuments(): Observable<ICategorieDocument[]> {
    return this.http.get<ICategorieDocument[]>(apiUrl + '/categorieDocuments');
  }
  getCategorieDocument(id: number): Observable<ICategorieDocument> {
    return this.http.get<ICategorieDocument>(apiUrl + '/categorieDocument/' + id);
  }

  createCategorieDocument(categorieDocument: ICategorieDocument): Observable<ICategorieDocument> {
    return this.http.post<ICategorieDocument>(apiUrl + '/categorieDocument', categorieDocument);
  }

  updateCategorieDocument(categorieDocument: ICategorieDocument): Observable<ICategorieDocument> {
    return this.http.put<ICategorieDocument>(apiUrl + '/categorieDocument/' + categorieDocument.id, categorieDocument);
  }
}
