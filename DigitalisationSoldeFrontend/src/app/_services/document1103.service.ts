import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1103 } from '../_interfaces/document1103';

@Injectable({
  providedIn: 'root'
})
export class Document1103Service {

  constructor(private http: HttpClient) { }

  getDocument1103s(): Observable<IDocument1103[]> {
    return this.http.get<IDocument1103[]>(apiUrl + '/document1103s');
  }
  getDocument1103(id: number): Observable<IDocument1103> {
    return this.http.get<IDocument1103>(apiUrl + '/document1103/' + id);
  }

  createDocument1103(document1103: IDocument1103): Observable<IDocument1103> {
    return this.http.post<IDocument1103>(apiUrl + '/document1103', document1103);
  }

  updateDocument1103(document1103: IDocument1103): Observable<IDocument1103> {
    return this.http.put<IDocument1103>(apiUrl + '/document1103/' + document1103.id, document1103);
  }
}
