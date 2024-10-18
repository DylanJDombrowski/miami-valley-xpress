import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xpress-social',
  standalone: true,
  template: `
    <div class="xpress-social-container">
      <div #twitterContainer></div>
    </div>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
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
  imports: [],
})
export class XpressSocialComponent implements AfterViewInit {
  @ViewChild('twitterContainer') twitterContainer!: ElementRef;

  ngAfterViewInit() {
    this.loadTwitterWidget();
  }

  loadTwitterWidget() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;

    script.onload = () => {
      // @ts-ignore: Ignoring 'twttr' property as it's added by the Twitter script
      twttr.widgets
        .createTimeline(
          {
            sourceType: 'profile',
            screenName: 'XpressSoftball',
          },
          this.twitterContainer.nativeElement,
          {
            maxHeight: 600,
            chrome: 'noheader, nofooter',
            // tweetLimit: 20, // Remove this line to show more tweets
          }
        )
        .then((el: any) => {
          // Add a "Load more" button
          const loadMoreButton = document.createElement('button');
          loadMoreButton.textContent = 'Load more tweets';
          loadMoreButton.addEventListener('click', () => {
            // @ts-ignore: Ignoring 'twttr' property
            twttr.widgets.load(this.twitterContainer.nativeElement);
          });
          this.twitterContainer.nativeElement.appendChild(loadMoreButton);
        });
    };

    document.body.appendChild(script);
  }
}
