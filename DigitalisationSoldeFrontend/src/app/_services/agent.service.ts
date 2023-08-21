import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_helpers/variables';
import { IAgent } from '../_interfaces/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAgents(): Observable<IAgent[]> {
    return this.http.get<IAgent[]>(apiUrl + '/agents');
  }
  getAgent(id: number): Observable<IAgent> {
    return this.http.get<IAgent>(apiUrl + '/agent/' + id);
  }

  createAgent(agent: IAgent): Observable<IAgent> {
    return this.http.post<IAgent>(apiUrl + '/agent', agent);
  }

  updateAgent(agent: IAgent): Observable<IAgent> {
    return this.http.put<IAgent>(apiUrl + '/agent/' + agent.id, agent);
  }
}
