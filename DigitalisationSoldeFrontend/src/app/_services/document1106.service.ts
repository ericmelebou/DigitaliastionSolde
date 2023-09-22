import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1106 } from '../_interfaces/document1106';

@Injectable({
  providedIn: 'root'
})
export class Document1106Service {

  constructor(private http: HttpClient) { }

  getDocument1106s(): Observable<IDocument1106[]> {
    return this.http.get<IDocument1106[]>(apiUrl + '/document1106s');
  }
  getDocument1106(id: number): Observable<IDocument1106> {
    return this.http.get<IDocument1106>(apiUrl + '/document1106/' + id);
  }

  createDocument1106(document1106: IDocument1106): Observable<IDocument1106> {
    return this.http.post<IDocument1106>(apiUrl + '/document1106', document1106);
  }

  updateDocument1106(document1106: IDocument1106): Observable<IDocument1106> {
    return this.http.put<IDocument1106>(apiUrl + '/document1106/' + document1106.id, document1106);
  }
  deleteDocument1106(id: number): Observable<void> {
    return this.http.delete<void>(apiUrl + '/document1106/' + id);
  }
}
