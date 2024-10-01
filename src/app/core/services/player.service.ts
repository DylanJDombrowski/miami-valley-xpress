import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  image_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = '/api/players';

  constructor(private http: HttpClient) {}

  getPlayersByTeam(teamId: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}?teamId=${teamId}`);
  }
}
