import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  private apiUrl = 'http://localhost:3000/api/tweets';

  constructor(private http: HttpClient) {}

  getTweets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
