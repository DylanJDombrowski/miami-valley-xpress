import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Event {
  id: number;
  date: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = '/api/events';

  constructor(private http: HttpClient) {}

  getEventsByTeam(teamId: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}?teamId=${teamId}`);
  }
}
