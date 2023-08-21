import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument } from '../_interfaces/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(apiUrl + '/documents');
  }
  getDocument(id: number): Observable<IDocument> {
    return this.http.get<IDocument>(apiUrl + '/document/' + id);
  }

  createDocument(document: IDocument): Observable<IDocument> {
    return this.http.post<IDocument>(apiUrl + '/document', document);
  }

  updateDocument(document: IDocument): Observable<IDocument> {
    return this.http.put<IDocument>(apiUrl + '/document/' + document.id, document);
  }
}
