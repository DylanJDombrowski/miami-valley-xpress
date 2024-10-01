import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../../core/services/team.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface Team {
  id: number;
  name: string;
  ageGroup: string;
  season: string;
}

@Component({
  standalone: true,
  selector: 'app-team-info',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    NgIf,
  ],
  template: `
    <form *ngIf="team" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <mat-label>Team Name</mat-label>
        <input matInput [(ngModel)]="team.name" name="name" required />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Age Group</mat-label>
        <input matInput [(ngModel)]="team.ageGroup" name="ageGroup" required />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Season</mat-label>
        <input matInput [(ngModel)]="team.season" name="season" required />
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit">
        Update Team
      </button>
    </form>
  `,
})
export class TeamInfoComponent implements OnInit {
  @Input() teamId!: number;
  team?: Team;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadTeamInfo();
  }

  loadTeamInfo() {
    this.teamService.getTeamById(this.teamId.toString()).subscribe(
      (team) => (this.team = team),
      (error) => console.error('Error loading team info:', error)
    );
  }

  onSubmit() {
    if (this.team) {
      this.teamService.updateTeam(this.team.id.toString(), this.team).subscribe(
        () => console.log('Team updated successfully'),
        (error) => console.error('Error updating team:', error)
      );
    }
  }
}
