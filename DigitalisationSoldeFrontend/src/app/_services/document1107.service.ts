import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1107 } from '../_interfaces/document1107';

@Injectable({
  providedIn: 'root'
})
export class Document1107Service {

  constructor(private http: HttpClient) { }

  getDocument1107s(): Observable<IDocument1107[]> {
    return this.http.get<IDocument1107[]>(apiUrl + '/document1107s');
  }
  getDocument1107(id: number): Observable<IDocument1107> {
    return this.http.get<IDocument1107>(apiUrl + '/document1107/' + id);
  }

  createDocument1107(document1107: IDocument1107): Observable<IDocument1107> {
    return this.http.post<IDocument1107>(apiUrl + '/document1107', document1107);
  }

  updateDocument1107(document1107: IDocument1107): Observable<IDocument1107> {
    return this.http.put<IDocument1107>(apiUrl + '/document1107/' + document1107.id, document1107);
  }
}
