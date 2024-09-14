import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="font-oswald">
      <!-- Top ribbon -->
      <div class="bg-ribbon text-white py-1 px-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-sm">mvxpresssoftballorg&#64;gmail.com</div>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-accent">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-white hover:text-accent">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Logo, title, and navigation -->
      <div class="container mx-auto py-4 px-4">
        <div class="flex items-center justify-between">
          <img src="assets/mvxLogo2.png" alt="MVX Logo" class="h-24" />
          <div class="text-center flex-grow">
            <h1 class="text-5xl uppercase font-semibold text-primary">
              Miami Valley Xpress
            </h1>
            <p class="text-2xl uppercase text-ribbon">
              Champions on the diamond, friends for life.
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="bg-[#161659] text-white py-2">
        <!-- ... (navigation content remains the same) ... -->
      </nav>
    </header>
  `,
  styles: `.group:hover .group-hover\:block {
    display: block;
  }
  
  nav ul li {
    position: relative;
  }
  
  nav ul li ul {
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    background-color: var(--color-primary);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  nav ul li ul li {
    padding: 10px;
  }
  
  nav ul li ul li:hover {
    background-color: var(--color-accent);
  }
  `,
})
export class HeaderComponent {
  teamYears: number[] = Array.from({ length: 9 }, (_, i) => 2014 - i);
}
