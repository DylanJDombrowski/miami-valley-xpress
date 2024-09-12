import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'assets/data/teams/';
  constructor(private http: HttpClient) {}

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}${id}.json`);
  }

  getAllTeams(): Observable<{ id: string; name: string }[]> {
    return this.http.get<{ id: string; name: string }[]>(
      'assets/data/teams.json'
    );
  }
}
