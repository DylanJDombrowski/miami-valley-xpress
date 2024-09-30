// src/app/backend-portal/team-management/team-management.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../core/services/team.service';

@Component({
  selector: 'app-team-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss'],
})
export class TeamManagementComponent implements OnInit {
  teams: any[] = [];
  selectedTeam: any;
  players: any[] = [];
  coaches: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe(
      (data: any) => {
        this.teams = data;
      },
      (error: any) => console.error('Error loading teams:', error)
    );
  }

  onTeamSelect(team: any) {
    this.selectedTeam = team;
    // Implement loadPlayers and loadCoaches methods in TeamService if needed
  }

  updateTeam(team: any) {
    this.teamService.updateTeam(team.id, team).subscribe(
      () => {
        console.log('Team updated successfully');
        this.loadTeams();
      },
      (error: any) => console.error('Error updating team:', error)
    );
  }

  // Add methods for updating players and coaches
}
