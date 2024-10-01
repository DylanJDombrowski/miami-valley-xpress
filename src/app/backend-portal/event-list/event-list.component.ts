import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { MatListModule } from '@angular/material/list';
import { MatList, MatListItem } from '@angular/material/list';
import { NgFor } from '@angular/common';
interface Event {
  id: number;
  date: string;
  location: string;
  description: string;
}

@Component({
  standalone: true,
  selector: 'app-event-list',
  imports: [MatListModule, MatList, MatListItem, NgFor],
  template: `
    <mat-list>
      <mat-list-item *ngFor="let event of events" (click)="editEvent(event)">
        <h3 matLine>{{ event.date }} - {{ event.location }}</h3>
        <p matLine>{{ event.description }}</p>
      </mat-list-item>
    </mat-list>
  `,
})
export class EventListComponent implements OnInit {
  @Input() teamId!: number;
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEventsByTeam(this.teamId).subscribe(
      (events: any) => (this.events = events),
      (error: any) => console.error('Error loading events:', error)
    );
  }

  editEvent(event: Event) {
    // Implement edit functionality
  }
}
