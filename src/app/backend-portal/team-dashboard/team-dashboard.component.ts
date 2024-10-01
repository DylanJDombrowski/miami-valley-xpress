import { Component, Input } from '@angular/core';
import { PlayerListComponent } from '../player-list/player-list.component';
import { CoachListComponent } from '../coach-list/coach-list.component';
import { EventListComponent } from '../event-list/event-list.component';
import { TeamInfoComponent } from '../team-info/team-info.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  selector: 'app-team-dashboard',
  imports: [
    MatTabsModule,
    PlayerListComponent,
    CoachListComponent,
    EventListComponent,
    TeamInfoComponent,
  ],
  template: `
    <mat-tab-group>
      <mat-tab label="Players">
        <app-player-list [teamId]="selectedTeamId"></app-player-list>
      </mat-tab>
      <mat-tab label="Coaches">
        <app-coach-list [teamId]="selectedTeamId"></app-coach-list>
      </mat-tab>
      <mat-tab label="Events">
        <app-event-list [teamId]="selectedTeamId"></app-event-list>
      </mat-tab>
      <mat-tab label="Team Info">
        <app-team-info [teamId]="selectedTeamId"></app-team-info>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class TeamDashboardComponent {
  @Input() selectedTeamId!: number;
}
