import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument2011 } from '../_interfaces/document2011';

@Injectable({
  providedIn: 'root'
})
export class Document2011Service {

  constructor(private http: HttpClient) { }

  getDocument2011s(): Observable<IDocument2011[]> {
    return this.http.get<IDocument2011[]>(apiUrl + '/document2011s');
  }
  getDocument2011(id: number): Observable<IDocument2011> {
    return this.http.get<IDocument2011>(apiUrl + '/document2011/' + id);
  }

  createDocument2011(document2011: IDocument2011): Observable<IDocument2011> {
    return this.http.post<IDocument2011>(apiUrl + '/document2011', document2011);
  }

  updateDocument2011(document2011: IDocument2011): Observable<IDocument2011> {
    return this.http.put<IDocument2011>(apiUrl + '/document2011/' + document2011.id, document2011);
  }
}
