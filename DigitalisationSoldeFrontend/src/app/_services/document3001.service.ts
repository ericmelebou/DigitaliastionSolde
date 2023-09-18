import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument3001 } from '../_interfaces/document3001';

@Injectable({
  providedIn: 'root'
})
export class Document3001Service {

  constructor(private http: HttpClient) { }

  getDocument3001s(): Observable<IDocument3001[]> {
    return this.http.get<IDocument3001[]>(apiUrl + '/document3001s');
  }
  getDocument3001(id: number): Observable<IDocument3001> {
    return this.http.get<IDocument3001>(apiUrl + '/document3001/' + id);
  }

  createDocument3001(document3001: IDocument3001): Observable<IDocument3001> {
    return this.http.post<IDocument3001>(apiUrl + '/document3001', document3001);
  }

  updateDocument3001(document3001: IDocument3001): Observable<IDocument3001> {
    return this.http.put<IDocument3001>(apiUrl + '/document3001/' + document3001.id, document3001);
  }
}
