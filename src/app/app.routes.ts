import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { OnTheFieldComponent } from './pages/on-the-field/on-the-field.component';
import { AllAboardComponent } from './pages/all-aboard/all-aboard.component';
import { ExtendedTeamComponent } from './pages/extended-team/extended-team.component';
import { XpressSocialComponent } from './pages/xpress-social/xpress-social.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams/:id', component: TeamComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'on-the-field', component: OnTheFieldComponent },
  { path: 'all-aboard', component: AllAboardComponent },
  { path: 'extended-team', component: ExtendedTeamComponent },
  { path: 'xpress-social', component: XpressSocialComponent },
];
