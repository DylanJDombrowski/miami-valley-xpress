import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  template: `
    <header class="font-oswald bg-white">
      <!-- Top ribbon -->
      <div class="bg-secondary text-white py-1 px-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-sm">mvxpresssoftballorg&#64;gmail.com</div>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/miamivalleyxpress/" class="text-white hover:text-accent">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/XpressSoftball" class="text-white hover:text-accent">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Logo and title -->
      <div class="container mx-auto py-4 px-4">
        <div class="flex items-center justify-center">
          <div class="mr-4">
            <img src="assets/logos/mvxLogo2.png" alt="MVX Logo" class="h-16 md:h-24" />
          </div>
          <div class="text-center md:text-left">
            <h1 class="text-2xl md:text-5xl uppercase font-medium text-primary">Miami Valley Xpress</h1>
            <p class="text-sm md:text-2xl uppercase text-ribbon hidden md:block">Champions on the diamond, friends for life.</p>
          </div>
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
