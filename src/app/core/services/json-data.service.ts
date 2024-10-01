import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../models/team.model';
import { BlogPost } from '../../models/blog-post.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: any;
  apiUrl: any;
  constructor(private http: HttpClient) {}

  getTeamData(year: string): Observable<any> {
    return this.http.get(`assets/data/teams/${year}.json`);
  }

  updateTeamData(year: string, data: any): Observable<any> {
    // In a real-world scenario, you'd need a backend API to handle file updates
    // This is a placeholder for demonstration purposes
    console.log(`Updating team data for ${year}`, data);
    return new Observable((observer) => {
      observer.next({ success: true });
      observer.complete();
    });
  }

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}${id}.json`);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('assets/data/blog-posts.json');
  }

  generateTeamPDF(team: Team): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/generatePDF`, team, {
      responseType: 'blob',
    });
  }
}
