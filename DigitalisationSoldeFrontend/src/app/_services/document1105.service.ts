import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument1105 } from '../_interfaces/document1105';

@Injectable({
  providedIn: 'root'
})
export class Document1105Service {

  constructor(private http: HttpClient) { }

  getDocument1105s(): Observable<IDocument1105[]> {
    return this.http.get<IDocument1105[]>(apiUrl + '/document1105s');
  }
  getDocument1105(id: number): Observable<IDocument1105> {
    return this.http.get<IDocument1105>(apiUrl + '/document1105/' + id);
  }

  createDocument1105(document1105: IDocument1105): Observable<IDocument1105> {
    return this.http.post<IDocument1105>(apiUrl + '/document1105', document1105);
  }

  updateDocument1105(document1105: IDocument1105): Observable<IDocument1105> {
    return this.http.put<IDocument1105>(apiUrl + '/document1105/' + document1105.id, document1105);
  }
}
