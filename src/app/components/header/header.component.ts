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

      <!-- Logo and title -->
      <div class="container mx-auto py-4 px-4">
        <div class="flex items-center space-x-4">
          <img src="mvxLogo1.png" alt="MVX Logo" class="h-16" />
          <div>
            <h1 class="text-5xl uppercase font-bold text-primary">
              Miami Valley Xpress
            </h1>
            <p class="text-2xl uppercase text-ribbon">
              Champions on the diamond, friends for life.
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="bg-primary text-white py-2">
        <div class="container mx-auto">
          <ul class="flex justify-center space-x-6">
            <li><a routerLink="/" class="hover:text-accent">Home</a></li>
            <li class="relative group">
              <a class="hover:text-accent cursor-pointer">Express Teams</a>
              <ul class="absolute hidden group-hover:block bg-primary p-2 z-10">
                <li *ngFor="let team of teams">
                  <a
                    [routerLink]="['/team', team.id]"
                    class="hover:text-accent block py-1"
                    >{{ team.name }}</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a routerLink="/alumni" class="hover:text-accent">Alumni</a>
            </li>
            <li>
              <a routerLink="/on-the-field" class="hover:text-accent"
                >On The Field</a
              >
            </li>
            <li>
              <a routerLink="/all-aboard" class="hover:text-accent"
                >All Aboard</a
              >
            </li>
            <li>
              <a routerLink="/extended-team" class="hover:text-accent"
                >Extended Team</a
              >
            </li>
            <li>
              <a routerLink="/xpress-social" class="hover:text-accent"
                >Xpress Social</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  teams = [
    { id: '2006', name: 'MVX 2006' },
    { id: '2007', name: 'MVX 2007' },
    { id: '2008', name: 'MVX 2008' },
    // Add more teams as needed
  ];
}
