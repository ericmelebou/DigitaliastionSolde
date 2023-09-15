import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { ICredential } from '../_interfaces/credential';
import { IAgent } from '../_interfaces/agent';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(credential: ICredential): Observable<any> {
    return this.http.post<any>(apiUrl + '/auth/authenticate', credential);
  }
  signUp(agent: IAgent): Observable<any> {
    return this.http.post<any>(apiUrl + '/auth/register', agent);
  }
}
