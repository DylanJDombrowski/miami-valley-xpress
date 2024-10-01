import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../core/services/team.service';
import { TeamSelectorComponent } from '../team-selector/team-selector.component';
import { TeamDashboardComponent } from '../team-dashboard/team-dashboard.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-team-management',
  template: `
    <app-team-selector
      [teams]="teams"
      (teamSelected)="onTeamSelect($event)"
    ></app-team-selector>
    <app-team-dashboard
      *ngIf="selectedTeamId"
      [selectedTeamId]="selectedTeamId"
    ></app-team-dashboard>
  `,
  standalone: true,
  imports: [TeamSelectorComponent, TeamDashboardComponent, NgIf],
})
export class TeamManagementComponent implements OnInit {
  teams: any[] = [];
  selectedTeamId?: number;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe(
      (data) => (this.teams = data),
      (error) => console.error('Error loading teams:', error)
    );
  }

  onTeamSelect(teamId: number) {
    this.selectedTeamId = teamId;
  }
}
