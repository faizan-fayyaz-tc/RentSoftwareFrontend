import { Agent } from './../../Models/Agent';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../Models/Car';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  private apiUrl = `${environment.adminApiUrl}`;

  constructor(private httpClient: HttpClient) {}

  CreateAgent(agent: Agent): Observable<Agent> {
    return this.httpClient.post<Agent>(this.apiUrl, agent);
  }

  getAgents(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.apiUrl);
  }
}
