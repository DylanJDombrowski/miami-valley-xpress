import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterService } from '../../services/twitter.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-xpress-social',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [TwitterService],
  template: `
    <div class="xpress-social-container">
      <h2>&#64;XpressSoftball Tweets</h2>
      <div *ngIf="loading">Loading tweets...</div>
      <div *ngIf="error" class="error-message">{{ error }}</div>
      <div class="masonry-grid">
        <div *ngFor="let tweet of tweets" class="tweet-card">
          <p>{{ tweet.text }}</p>
          <small>{{ tweet.created_at | date }}</small>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .xpress-social-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      .masonry-grid {
        column-count: 3;
        column-gap: 20px;
      }

      @media (max-width: 800px) {
        .masonry-grid {
          column-count: 2;
        }
      }

      @media (max-width: 500px) {
        .masonry-grid {
          column-count: 1;
        }
      }

      .tweet-card {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        padding: 15px;
        margin-bottom: 20px;
        break-inside: avoid;
      }

      .error-message {
        color: #721c24;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class XpressSocialComponent implements OnInit {
  tweets: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private twitterService: TwitterService) {}

  ngOnInit() {
    this.fetchTweets();
  }

  fetchTweets() {
    this.loading = true;
    this.error = null;
    this.twitterService.getTweets().subscribe({
      next: (response: any) => {
        this.tweets = response.data;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to fetch tweets. Please try again later.';
        this.loading = false;
        console.error('Error fetching tweets:', err);
      },
    });
  }
}
