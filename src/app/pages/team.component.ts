import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Team Component Template -->
    <div class="container mx-auto py-8 bg-gray-100">
      <!-- Team Header -->
      <div class="text-center mb-8 bg-white rounded-lg shadow-md p-6">
        <h1 class="text-4xl font-bold text-primary mb-2">{{ team?.name }}</h1>
        <img
          [src]="team?.teamImageUrl"
          alt="{{ team?.name }}"
          class="mx-auto h-64 object-cover mb-4 rounded-lg"
        />
      </div>

      <!-- Players Section -->
      <h2 class="text-3xl font-semibold text-primary mb-4 px-4">Players</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 px-4"
      >
        <div
          *ngFor="let player of team?.players"
          class="card w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <!-- Player Image with Number Overlay and Grad Year -->
          <div class="relative">
            <img
              [src]="getImageUrl(player.imageUrl)"
              [alt]="player.name"
              (error)="player.imageUrl = 'assets/teams/defaultpfp.jpg'"
              class="w-full h-64 object-cover"
            />
            <div
              class="absolute top-2 left-2 bg-primary text-white rounded-md px-2 py-1 text-sm font-bold"
            >
              {{ player.gradYear }}
            </div>
            <div
              class="absolute bottom-2 right-2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold"
            >
              #{{ player.number }}
            </div>
          </div>
          <!-- Player Information -->
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ player.name }}</h3>
            <div class="space-y-1">
              <p class="bg-gray-100 p-1 rounded">{{ player.position }}</p>
              <p class="bg-gray-200 p-1 rounded">Height: {{ player.height }}</p>
              <p class="bg-gray-100 p-1 rounded">
                Bats/Throws: {{ player.bats }}/{{ player.throws }}
              </p>
              <p class="bg-gray-200 p-1 rounded">Town: {{ player.town }}</p>
              <p class="bg-gray-100 p-1 rounded">School: {{ player.school }}</p>
              <p class="bg-gray-200 p-1 rounded">GPA: {{ player.gpa }}</p>
              <p class="bg-gray-100 p-1 rounded" *ngIf="player.status">
                Status: {{ player.status }}
              </p>
            </div>

            <!-- Twitter Link -->
            <a
              *ngIf="player.twitter"
              [href]="'https://twitter.com/' + player.twitter"
              target="_blank"
              class="text-blue-500 hover:underline text-sm flex items-center mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>

      <!-- Schedule Section -->
      <h2 class="text-3xl font-semibold text-primary my-8 px-4">
        {{ team?.year ?? 'N/A' }} - {{ (team?.year ?? 0) + 1 }} Schedule
      </h2>
      <div class="overflow-x-auto px-4">
        <table class="w-full mb-8 bg-white rounded-lg shadow-md">
          <thead class="bg-primary text-white">
            <tr>
              <th class="py-2 px-4 text-left">Date</th>
              <th class="py-2 px-4 text-left">Event</th>
              <th class="py-2 px-4 text-left">Location</th>
              <th class="py-2 px-4 text-left">Sanction</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let event of team?.schedule; let even = even"
              [ngClass]="{ 'bg-gray-100': even, 'bg-white': !even }"
            >
              <td class="py-2 px-4">{{ event.date }}</td>
              <td class="py-2 px-4">{{ event.eventName }}</td>
              <td class="py-2 px-4">{{ event.location }}</td>
              <td class="py-2 px-4">{{ event.sanction }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Coaches Section -->
      <h2 class="text-3xl font-semibold text-primary mb-4 px-4">Coaches</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4"
      >
        <div
          *ngFor="let coach of team?.coaches"
          class="card p-4 bg-white rounded-lg shadow-md"
        >
          <img
            [src]="coach.imageUrl"
            [alt]="coach.name"
            class="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 class="text-xl font-semibold mb-2">{{ coach.name }}</h3>
          <p class="text-gray-600 mb-1">{{ coach.position }}</p>
          <p class="text-sm mb-1">{{ coach.email }}</p>
          <p class="text-sm">{{ coach.phone }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class TeamComponent implements OnInit {
  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const teamId = params['id'];
      this.dataService.getTeam(teamId).subscribe(
        (team) => (this.team = team),
        (error) => console.error('Error fetching team data:', error)
      );
    });
  }

  getImageUrl(url: string): string {
    if (!url) return 'assets/teams/defaultpfp.jpg';
    if (url.startsWith('http')) return url; // For external URLs
    return url.startsWith('assets/') ? url : `assets/${url}`; // Prepend 'assets/' only if needed
  }
}
