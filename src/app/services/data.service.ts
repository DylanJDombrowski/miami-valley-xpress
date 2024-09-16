import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { BlogPost } from '../models/blog-post.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'assets/data/teams/';
  constructor(private http: HttpClient) {}

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}${id}.json`);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('assets/data/blog-posts.json');
  }
}
