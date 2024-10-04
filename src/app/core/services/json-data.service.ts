import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Team } from '../../models/team.model';
import { BlogPost } from '../../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cache: { [key: string]: any } = {};

  constructor(private http: HttpClient) {}

  getTeamData(year: string): Observable<Team> {
    const jsonUrl = `assets/data/teams/${year}.json`;
    if (this.cache[year]) {
      return of(this.cache[year]);
    }
    return this.http.get<Team>(jsonUrl).pipe(
      tap((data) => (this.cache[year] = data)),
      catchError(this.handleError<Team>(`getTeamData year=${year}`))
    );
  }

  getBlogPosts(): Observable<BlogPost[]> {
    const url = 'assets/data/blog-posts.json';
    if (this.cache['blogPosts']) {
      return of(this.cache['blogPosts']);
    }
    return this.http.get<BlogPost[]>(url).pipe(
      tap((posts) => (this.cache['blogPosts'] = posts)),
      catchError(this.handleError<BlogPost[]>('getBlogPosts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
