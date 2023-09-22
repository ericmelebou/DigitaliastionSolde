import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1101 } from '../_interfaces/document1101';

@Injectable({
  providedIn: 'root'
})
export class Document1101Service {

  constructor(private http: HttpClient) { }

  getDocument1101s(): Observable<IDocument1101[]> {
    return this.http.get<IDocument1101[]>(apiUrl + '/document1101s');
  }
  getDocument1101(id: number): Observable<IDocument1101> {
    return this.http.get<IDocument1101>(apiUrl + '/document1101/' + id);
  }

  createDocument1101(document1101: IDocument1101): Observable<IDocument1101> {
    return this.http.post<IDocument1101>(apiUrl + '/document1101', document1101);
  }
  updateDocument1101(document1101: IDocument1101): Observable<IDocument1101> {
    return this.http.put<IDocument1101>(apiUrl + '/document1101/' + document1101.id, document1101);
  }
  deleteDocument1101(id: number): Observable<void> {
    return this.http.delete<void>(apiUrl + '/document1101/' + id);
  }
}
