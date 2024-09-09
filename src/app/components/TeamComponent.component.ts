import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../app/services/data.service';
import { Team } from '../../app/models/team.model';

@Component({
  selector: 'app-team',
  template: `
    <div class="container mx-auto p-4" *ngIf="team">
      <h1 class="text-4xl font-bold mb-6 text-center">{{ team.name }}</h1>

      <img
        *ngIf="team.teamImageUrl"
        [src]="team.teamImageUrl"
        [alt]="team.name"
        class="w-full max-w-4xl mx-auto mb-8 rounded-lg shadow-lg"
      />

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Players</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let player of team.players"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              [src]="player.imageUrl"
              [alt]="player.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold">{{ player.name }}</h3>
              <p>Position: {{ player.position }}</p>
              <p>Height: {{ player.height }}</p>
              <p>Bats/Throws: {{ player.bats }}/{{ player.throws }}</p>
              <p>Town: {{ player.town }}</p>
              <p>School: {{ player.school }}</p>
              <p>Grad Year: {{ player.gradYear }}</p>
              <p>GPA: {{ player.gpa }}</p>
              <p>Status: {{ player.status }}</p>
              <a
                *ngIf="player.twitter"
                [href]="player.twitter"
                target="_blank"
                class="text-blue-500"
              >
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Schedule</h2>
        <table class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-2 text-left">Date</th>
              <th class="p-2 text-left">Sanction</th>
              <th class="p-2 text-left">Event Name</th>
              <th class="p-2 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let event of team.schedule" class="border-b">
              <td class="p-2">{{ event.date | date : 'mediumDate' }}</td>
              <td class="p-2">{{ event.sanction }}</td>
              <td class="p-2">{{ event.eventName }}</td>
              <td class="p-2">{{ event.location }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Coaches</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let coach of team.coaches"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              [src]="coach.imageUrl"
              [alt]="coach.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold">{{ coach.name }}</h3>
              <p>Position: {{ coach.position }}</p>
              <p>Email: {{ coach.email }}</p>
              <p>Phone: {{ coach.phone }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      /* Add any component-specific styles here */
    `,
  ],
})
export class TeamComponent implements OnInit {
  team: Team = {
    id: '',
    name: '',
    players: [],
    schedule: [],
    coaches: [],
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const teamId = params['id'];
      this.dataService.getTeam(teamId).subscribe(
        (data: Team) => {
          this.team = data;
        },
        (error) => console.error('Error fetching team data:', error)
      );
    });
  }
}
