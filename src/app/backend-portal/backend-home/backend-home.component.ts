import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-backend-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Backend Portal</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Team Management</h2>
          <p class="mb-4">Manage team rosters and player information.</p>
          <a
            routerLink="./team-management"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >Go to Team Management</a
          >
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">PDF Generator</h2>
          <p class="mb-4">Generate PDF reports for teams and players.</p>
          <a
            routerLink="./pdf-generator"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >Go to PDF Generator</a
          >
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Blog Management</h2>
          <p class="mb-4">Create and manage blog posts for the website.</p>
          <a
            routerLink="./blog-management"
            class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >Go to Blog Management</a
          >
        </div>
      </div>
      <div class="mt-8">
        <button
          (click)="logout()"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background-color: #f0f0f0;
      }
    `,
  ],
})
export class BackendHomeComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
