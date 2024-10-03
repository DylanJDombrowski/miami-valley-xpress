import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Team } from '../../models/team.model';
import { BlogPost } from '../../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://your-api-url/api'; // Update with your actual API URL
  private cache: { [key: string]: any } = {};

  constructor(private http: HttpClient) {}

  getTeamData(year: string): Observable<Team> {
    const url = `${this.apiUrl}/teams/${year}`;
    return this.getWithCache<Team>(url);
  }

  updateTeamData(year: string, data: Partial<Team>): Observable<any> {
    const url = `${this.apiUrl}/teams/${year}`;
    return this.http.put(url, data).pipe(
      tap(() => this.clearCache(url)),
      catchError(this.handleError<any>('updateTeamData'))
    );
  }

  getBlogPosts(): Observable<BlogPost[]> {
    const url = `${this.apiUrl}/blog-posts`;
    return this.getWithCache<BlogPost[]>(url);
  }

  generateTeamPDF(team: Team): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/generatePDF`, team, {
      responseType: 'blob',
    });
  }

  private getWithCache<T>(url: string): Observable<T> {
    if (this.cache[url]) {
      return of(this.cache[url]);
    }
    return this.http.get<T>(url).pipe(
      tap((data) => (this.cache[url] = data)),
      catchError(this.handleError<T>(`getFromUrl ${url}`))
    );
  }

  private clearCache(url?: string) {
    if (url) {
      delete this.cache[url];
    } else {
      this.cache = {};
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
