import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Coach {
  id: number;
  name: string;
  position: string;
  image_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  private apiUrl = '/api/coaches';

  constructor(private http: HttpClient) {}

  getCoachesByTeam(teamId: number): Observable<Coach[]> {
    return this.http.get<Coach[]>(`${this.apiUrl}?teamId=${teamId}`);
  }
}
