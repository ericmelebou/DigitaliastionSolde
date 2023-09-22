import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IDocument2021 } from '../_interfaces/document2021';

@Injectable({
  providedIn: 'root'
})
export class Document2021Service {

  constructor(private http: HttpClient) { }

  getDocument2021s(): Observable<IDocument2021[]> {
    return this.http.get<IDocument2021[]>(apiUrl + '/document2021s');
  }
  getDocument2021(id: number): Observable<IDocument2021> {
    return this.http.get<IDocument2021>(apiUrl + '/document2021/' + id);
  }

  createDocument2021(document2021: IDocument2021): Observable<IDocument2021> {
    return this.http.post<IDocument2021>(apiUrl + '/document2021', document2021);
  }

  updateDocument2021(document2021: IDocument2021): Observable<IDocument2021> {
    return this.http.put<IDocument2021>(apiUrl + '/document2021/' + document2021.id, document2021);
  }
  deleteDocument2021(id: number): Observable<void> {
    return this.http.delete<void>(apiUrl + '/document2021/' + id);
  }
}


