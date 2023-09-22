import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1109 } from '../_interfaces/document1109';

@Injectable({
  providedIn: 'root'
})
export class Document1109Service {

  constructor(private http: HttpClient) { }

  getDocument1109s(): Observable<IDocument1109[]> {
    return this.http.get<IDocument1109[]>(apiUrl + '/document1109s');
  }
  getDocument1109(id: number): Observable<IDocument1109> {
    return this.http.get<IDocument1109>(apiUrl + '/document1109/' + id);
  }

  createDocument1109(document1109: IDocument1109): Observable<IDocument1109> {
    return this.http.post<IDocument1109>(apiUrl + '/document1109', document1109);
  }

  updateDocument1109(document1109: IDocument1109): Observable<IDocument1109> {
    return this.http.put<IDocument1109>(apiUrl + '/document1109/' + document1109.id, document1109);
  }
  deleteDocument1109(id: number): Observable<void> {
    return this.http.delete<void>(apiUrl + '/document1109/' + id);
  }
}
