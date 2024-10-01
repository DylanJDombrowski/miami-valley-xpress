import { Component, Input, OnInit } from '@angular/core';
import { CoachService } from '../../core/services/coach.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
interface Coach {
  id: number;
  name: string;
  position: string;
  image_url: string;
}

@Component({
  standalone: true,
  selector: 'app-coach-list',
  imports: [MatGridListModule, MatCardContent, MatCardModule, NgFor],
  template: `
    <mat-grid-list cols="3" rowHeight="4:3">
      <mat-grid-tile *ngFor="let coach of coaches">
        <mat-card (click)="editCoach(coach)">
          <img mat-card-image [src]="coach.image_url" alt="Coach photo" />
          <mat-card-content>
            <h3>{{ coach.name }}</h3>
            <p>{{ coach.position }}</p>
          </mat-card-content>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
})
export class CoachListComponent implements OnInit {
  @Input() teamId!: number;
  coaches: Coach[] = [];

  constructor(private coachService: CoachService) {}

  ngOnInit() {
    this.loadCoaches();
  }

  loadCoaches() {
    this.coachService.getCoachesByTeam(this.teamId).subscribe(
      (coaches) => (this.coaches = coaches),
      (error) => console.error('Error loading coaches:', error)
    );
  }

  editCoach(coach: Coach) {
    // Implement edit functionality
  }
}
