import { Component } from '@angular/core';
import { TwitterWidgetComponent } from '../../components/twitter-widget/twitter-widget.component';

@Component({
  selector: 'app-xpress-social',
  standalone: true,
  imports: [TwitterWidgetComponent],
  template: `
    <div class="xpress-social-container">
      <h2>&#64;XpressSoftball Tweets</h2>
      <app-twitter-widget
        [username]="'XpressSoftball'"
        [tweetLimit]="20"
        [height]="'600px'"
      >
      </app-twitter-widget>
    </div>
  `,
  styles: [
    `
      .xpress-social-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
    `,
  ],
})
export class XpressSocialComponent {}
