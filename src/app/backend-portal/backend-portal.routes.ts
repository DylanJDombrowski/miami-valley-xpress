import { Routes } from '@angular/router';
import { BackendHomeComponent } from './backend-home/backend-home.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const BACKEND_ROUTES: Routes = [
  {
    path: '',
    component: BackendHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'team-management', component: TeamManagementComponent },
      { path: 'pdf-generator', component: PdfGeneratorComponent },
      { path: 'blog-management', component: BlogManagementComponent },
    ],
  },
];
