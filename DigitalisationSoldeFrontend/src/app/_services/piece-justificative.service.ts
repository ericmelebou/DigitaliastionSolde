import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPieceJustificative } from '../_interfaces/piece-justificative';
import { apiUrl } from '../_helpers/variables';

@Injectable({
  providedIn: 'root'
})
export class PieceJustificativeService {

  constructor(private http: HttpClient) { }

  getPieceJustificatives(): Observable<IPieceJustificative[]> {
    return this.http.get<IPieceJustificative[]>(apiUrl + '/pieceJustificatives');
  }
  getPieceJustificative(id: number): Observable<IPieceJustificative> {
    return this.http.get<IPieceJustificative>(apiUrl + '/pieceJustificative/' + id);
  }

  createPieceJustificative(pieceJustificative: IPieceJustificative): Observable<IPieceJustificative> {
    return this.http.post<IPieceJustificative>(apiUrl + '/pieceJustificative', pieceJustificative);
  }

  updatePieceJustificative(pieceJustificative: IPieceJustificative): Observable<IPieceJustificative> {
    return this.http.put<IPieceJustificative>(apiUrl + '/pieceJustificative/' + pieceJustificative.id, pieceJustificative);
  }
}
