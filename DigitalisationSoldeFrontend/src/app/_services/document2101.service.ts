import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument2101 } from '../_interfaces/document2101';

@Injectable({
  providedIn: 'root'
})
export class Document2101Service {

  constructor(private http: HttpClient) { }

  getDocument2101s(): Observable<IDocument2101[]> {
    return this.http.get<IDocument2101[]>(apiUrl + '/document2101s');
  }
  getDocument2101(id: number): Observable<IDocument2101> {
    return this.http.get<IDocument2101>(apiUrl + '/document2101/' + id);
  }

  createDocument2101(document2101: IDocument2101): Observable<IDocument2101> {
    return this.http.post<IDocument2101>(apiUrl + '/document2101', document2101);
  }

  updateDocument2101(document2101: IDocument2101): Observable<IDocument2101> {
    return this.http.put<IDocument2101>(apiUrl + '/document2101/' + document2101.id, document2101);
  }
}
