import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1104 } from '../_interfaces/document1104';

@Injectable({
  providedIn: 'root'
})
export class Document1104Service {

  constructor(private http: HttpClient) { }

  getDocument1104s(): Observable<IDocument1104[]> {
    return this.http.get<IDocument1104[]>(apiUrl + '/document1104s');
  }
  getDocument1104(id: number): Observable<IDocument1104> {
    return this.http.get<IDocument1104>(apiUrl + '/document1104/' + id);
  }
  createDocument1104(document1104: IDocument1104): Observable<IDocument1104> {
    return this.http.post<IDocument1104>(apiUrl + '/document1104', document1104);
  }

  updateDocument1104(document1104: IDocument1104): Observable<IDocument1104> {
    return this.http.put<IDocument1104>(apiUrl + '/document1104/' + document1104.id, document1104);
  }
  deleteDocument1104(id: number): Observable<void> {
    return this.http.delete<void>(apiUrl + '/document1104/' + id);
  }
}
