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
      <main class="content-wrapper">
        <app-header></app-header>
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
    width: 100%;
  }
  
  .content-wrapper {
    flex: 1;
  }
  `,
})
export class AppComponent {
  title = 'Miami Valley Xpress';
}
