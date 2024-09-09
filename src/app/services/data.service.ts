import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(`assets/data/teams/${id}.json`);
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('assets/data/teams.json');
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('assets/data/blog-posts.json');
  }

  getAlumni(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/alumni.json');
  }

  getExtendedTeam(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/extended-team.json');
  }
}
