import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    </header>

    <!-- Navigation - Sticky -->
    <nav class="bg-[#161659] text-white py-3 sticky top-0 z-50">
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
            <ul class="absolute hidden group-hover:block bg-[#161659] p-2 z-10">
              <li *ngFor="let year of teamYears">
                <a
                  [routerLink]="['/team', year]"
                  class="hover:text-[#D29C9C] block py-1 whitespace-nowrap"
                >
                  Miami Valley Xpress {{ year }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a routerLink="/alumni" class="hover:text-[#D29C9C] text-lg"
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
            <a routerLink="/extended-team" class="hover:text-[#D29C9C] text-lg"
              >Our Extended Team</a
            >
          </li>
          <li>
            <a routerLink="/xpress-social" class="hover:text-[#D29C9C] text-lg"
              >Xpress Social</a
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
        <ul class="space-y-4">
          <li>
            <a routerLink="/" class="hover:text-[#D29C9C] text-lg">Home</a>
          </li>
          <li class="relative group">
            <a class="hover:text-[#D29C9C] cursor-pointer text-lg"
              >Xpress Teams</a
            >
            <ul class="hidden group-hover:block bg-[#161659] p-2 z-10">
              <li *ngFor="let year of teamYears">
                <a
                  [routerLink]="['/team', year]"
                  class="hover:text-[#D29C9C] block py-1 whitespace-nowrap"
                >
                  Xpress {{ year }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a routerLink="/alumni" class="hover:text-[#D29C9C] text-lg"
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
            <a routerLink="/extended-team" class="hover:text-[#D29C9C] text-lg"
              >Our Extended Team</a
            >
          </li>
          <li>
            <a routerLink="/xpress-social" class="hover:text-[#D29C9C] text-lg"
              >Xpress Social</a
            >
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
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
  teamYears: number[] = Array.from({ length: 9 }, (_, i) => 2014 - i);
  isMobileMenuOpen = false;

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
