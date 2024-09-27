// src/app/features/backend-portal/backend-home/backend-home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-backend-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Backend Portal</h1>
    <nav>
      <ul>
        <li><a routerLink="./team-management">Team Management</a></li>
        <li><a routerLink="./pdf-generator">PDF Generator</a></li>
        <li><a routerLink="./blog-management">Blog Management</a></li>
      </ul>
    </nav>
  `,
  styles: [``],
})
export class BackendHomeComponent {}
