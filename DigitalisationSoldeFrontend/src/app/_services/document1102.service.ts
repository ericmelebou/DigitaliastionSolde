import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1102 } from '../_interfaces/document1102';

@Injectable({
  providedIn: 'root'
})
export class Document1102Service {

  constructor(private http: HttpClient) { }

  getDocument1102s(): Observable<IDocument1102[]> {
    return this.http.get<IDocument1102[]>(apiUrl + '/document1102s');
  }
  getDocument1102(id: number): Observable<IDocument1102> {
    return this.http.get<IDocument1102>(apiUrl + '/document1102/' + id);
  }

  createDocument1102(document1102: IDocument1102): Observable<IDocument1102> {
    return this.http.post<IDocument1102>(apiUrl + '/document1102', document1102);
  }

  updateDocument1102(document1102: IDocument1102): Observable<IDocument1102> {
    return this.http.put<IDocument1102>(apiUrl + '/document1102/' + document1102.id, document1102);
  }
}
