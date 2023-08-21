import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IStructure } from '../_interfaces/structure';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http: HttpClient) { }

  getStructures(): Observable<IStructure[]> {
    return this.http.get<IStructure[]>(apiUrl + '/structures');
  }
  getStructure(id: number): Observable<IStructure> {
    return this.http.get<IStructure>(apiUrl + '/structure/' + id);
  }

  createStructure(structure: IStructure): Observable<IStructure> {
    return this.http.post<IStructure>(apiUrl + '/structure', structure);
  }

  updateStructure(structure: IStructure): Observable<IStructure> {
    return this.http.put<IStructure>(apiUrl + '/structure/' + structure.id, structure);
  }
}
