import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="font-oswald bg-white">
      <!-- Top ribbon -->
      <div class="bg-secondary text-white py-1 px-4">
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
        <div class="flex items-center justify-center">
          <div class="mr-4">
            <img
              src="assets/logos/mvxLogo2.png"
              alt="MVX Logo"
              class="h-16 md:h-24"
            />
          </div>
          <div class="text-center md:text-left">
            <h1 class="text-2xl md:text-5xl uppercase font-medium text-primary">
              Miami Valley Xpress
            </h1>
            <p
              class="text-sm md:text-2xl uppercase text-ribbon hidden md:block"
            >
              Champions on the diamond, friends for life.
            </p>
          </div>
        </div>
      </div>

      <nav
        class="font-roboto sticky top-0 z-[9999] bg-[#161659] text-white py-3 shadow-md"
      >
        <div class="container mx-auto px-4">
          <!-- Mobile Navigation Toggle -->
          <div class="flex justify-end items-center md:hidden">
            <button
              (click)="toggleMobileMenu($event)"
              class="mobile-menu-button focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex justify-center space-x-8">
            <li>
              <a routerLink="/" class="hover:text-[#D29C9C] text-lg">Home</a>
            </li>
            <li class="relative group">
              <a class="hover:text-[#D29C9C] cursor-pointer text-lg"
                >Xpress Teams</a
              >
              <ul
                class="absolute hidden group-hover:block bg-[#161659] p-2 z-10"
              >
                <li *ngFor="let team of teams">
                  <a
                    [routerLink]="['/team', team.id]"
                    class="hover:text-[#D29C9C] block py-1 whitespace-nowrap"
                  >
                    {{ team.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                routerLink="/alumni"
                class="hover:text-[#D29C9C] font-bold font-size: 1.2rem font-weight: 700"
                >Xpress Alumni</a
              >
            </li>
            <li>
              <a routerLink="/on-the-field" class="hover:text-[#D29C9C] text-lg"
                >On The Field</a
              >
            </li>
            <li>
              <a routerLink="/all-aboard" class="hover:text-[#D29C9C] text-lg"
                >All Aboard</a
              >
            </li>
            <li>
              <a
                routerLink="/extended-team"
                class="hover:text-[#D29C9C] text-lg"
                >Our Extended Team</a
              >
            </li>
            <li>
              <a
                routerLink="/xpress-social"
                class="hover:text-[#D29C9C] text-lg"
                >Xpress Social</a
              >
            </li>
            <li *ngIf="authService.user$ | async">
              <a
                routerLink="/backend-portal"
                class="hover:text-[#D29C9C] text-lg"
                >Backend Portal</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <!-- Mobile menu (slide-out) -->
      <div
        class="mobile-menu fixed inset-y-0 right-0 w-64 bg-[#161659] text-white transform translate-x-full transition-transform duration-300 ease-in-out z-50 md:hidden"
      >
        <div class="p-4">
          <button
            (click)="toggleMobileMenu($event)"
            class="mb-4 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul class="absolute hidden group-hover:block bg-[#161659] p-2 z-10">
            <li *ngFor="let team of teams">
              <a
                [routerLink]="['/team', team.id]"
                class="hover:text-[#D29C9C] block py-1 whitespace-nowrap"
              >
                {{ team.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .mobile-menu {
        transition: transform 0.3s ease-in-out;
      }
      .mobile-menu.open {
        transform: translateX(0);
      }
    `,
  ],
})
export class HeaderComponent {
  teams: { id: string; name: string }[] = [
    { id: '18U', name: 'Miami Valley Xpress 18U' },
    { id: '2014', name: 'Miami Valley Xpress 2014' },
    { id: '2013', name: 'Miami Valley Xpress 2013' },
    { id: '2012', name: 'Miami Valley Xpress 2012' },
    { id: '2011', name: 'Miami Valley Xpress 2011' },
    { id: '2010', name: 'Miami Valley Xpress 2010' },
    { id: '2009', name: 'Miami Valley Xpress 2009' },
    { id: '2008', name: 'Miami Valley Xpress 2008' },
    { id: '2007', name: 'Miami Valley Xpress 2007' },
  ];
  isMobileMenuOpen = false;

  constructor(public authService: AuthService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu?.classList.toggle('open');
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu?.classList.remove('open');
  }
}
