import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-widget',
  template: '<div id="twitter-feed"></div>',
  standalone: true,
})
export class TwitterWidgetComponent implements OnInit {
  @Input() username: string = 'XpressSoftball';
  @Input() tweetLimit: number = 20;
  @Input() height: string = '600px';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.loadTwitterWidget();
  }

  loadTwitterWidget() {
    const script = this.renderer.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    this.renderer.appendChild(document.body, script);

    const widget = this.renderer.createElement('a');
    widget.className = 'twitter-timeline';
    widget.href = `https://twitter.com/${this.username}`;
    widget.setAttribute('data-tweet-limit', this.tweetLimit.toString());
    widget.setAttribute('data-chrome', 'noheader nofooter');
    widget.setAttribute('data-height', this.height);
    widget.setAttribute('data-dnt', 'false');
    widget.setAttribute('data-include-retweets', 'true');
    widget.setAttribute('data-tweet-limit', '30');
    this.renderer.setProperty(
      widget,
      'innerHTML',
      `Tweets by ${this.username}`
    );

    const container = document.getElementById('twitter-feed');
    if (container) {
      this.renderer.appendChild(container, widget);
    }
  }
}

export default TwitterWidgetComponent;
