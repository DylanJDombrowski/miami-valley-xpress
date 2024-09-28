import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { TeamComponent } from './pages/team.component';
import { AlumniComponent } from './pages/alumni.component';
import { OnTheFieldComponent } from './pages/on-the-field.component';
import { AllAboardComponent } from './pages/all-aboard.component';
import { ExtendedTeamComponent } from './pages/extended-team.component';
import { XpressSocialComponent } from './pages/xpress-social.component';
import { BlogPostDetailComponent } from './components/blog-post-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'on-the-field', component: OnTheFieldComponent },
  { path: 'on-the-field/:slug', component: BlogPostDetailComponent },
  { path: 'all-aboard', component: AllAboardComponent },
  { path: 'extended-team', component: ExtendedTeamComponent },
  { path: 'xpress-social', component: XpressSocialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'backend-portal',
    loadChildren: () =>
      import('./backend-portal/backend-portal.routes').then(
        (m) => m.BACKEND_ROUTES
      ),
    canActivate: [AuthGuard],
  },
];
