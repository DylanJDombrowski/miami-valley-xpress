import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="content-wrapper">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: `
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content-wrapper {
    flex: 1;
  }
  `,
})
export class AppComponent {
  title = 'Miami Valley Xpress';
}
