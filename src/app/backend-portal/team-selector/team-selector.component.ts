import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
interface Team {
  id: number;
  name: string;
  season: string;
}

@Component({
  standalone: true,
  selector: 'app-team-selector',
  imports: [MatSelectModule],
  template: `
    <mat-form-field>
      <mat-label>Select Team</mat-label>
      <mat-select [(value)]="selectedTeam" (selectionChange)="onTeamSelect()">
        <mat-option *ngFor="let team of teams" [value]="team.id">
          {{ team.name }} - {{ team.season }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class TeamSelectorComponent {
  @Input() teams: Team[] = [];
  @Output() teamSelected = new EventEmitter<number>();
  selectedTeam?: number;

  onTeamSelect() {
    if (this.selectedTeam) {
      this.teamSelected.emit(this.selectedTeam);
    }
  }
}
