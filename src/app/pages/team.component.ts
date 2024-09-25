import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Team } from '../models/team.model';
import { PDFGenerator } from '../../../backend/pdf/pdfController';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Sticky Team Header -->
    <div
      class="sticky  top-[48px] text-left z-40 bg-secondary text-white py-4 shadow-md"
    >
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold">{{ team?.name }}</h1>
      </div>
    </div>

    <div class="container mx-auto py-8">
      <!-- Team Image (smaller for mobile) -->
      <div class="mb-6">
        <img
          *ngIf="team?.teamImageUrl"
          [src]="team?.teamImageUrl"
          alt="{{ team?.name }}"
          class="mx-auto h-32 sm:h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- Roster Section -->
      <div id="roster" class="mb-16">
        <h2
          class="text-3xl font-semibold text-primary mb-6 border-l-4 border-secondary pl-4"
        >
          Roster
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div
            *ngFor="let player of team?.players"
            class="card bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div class="relative">
              <img
                [src]="getImageUrl(player.imageUrl)"
                [alt]="player.name"
                (error)="player.imageUrl = 'assets/teams/defaultpfp.jpg'"
                class="w-full h-64 object-cover"
                loading="lazy"
              />
              <div
                class="absolute top-2 left-2 bg-primary text-white rounded-md px-2 py-1 text-sm font-bold"
              >
                {{ player.gradYear }}
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2"
              >
                <h3 class="text-xl font-semibold">{{ player.name }}</h3>
              </div>
              <div
                class="absolute bottom-2 right-2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold z-10"
              >
                #{{ player.number }}
              </div>
            </div>
            <div class="p-4">
              <div class="space-y-2">
                <p class="bg-gray-100 p-2 rounded">
                  Position: {{ player.position }}
                </p>
                <p class="bg-gray-100 p-2 rounded">
                  Height: {{ player.height }}
                </p>
                <p class="bg-gray-200 p-2 rounded">
                  Bats/Throws: {{ player.bats }}/{{ player.throws }}
                </p>
                <p class="bg-gray-100 p-2 rounded">Town: {{ player.town }}</p>
                <p class="bg-gray-200 p-2 rounded">
                  School: {{ player.school }}
                </p>
                <p class="bg-gray-100 p-2 rounded">GPA: {{ player.gpa }}</p>
                <p class="bg-gray-200 p-2 rounded" *ngIf="player.status">
                  Status: {{ player.status }}
                </p>
              </div>
              <div class="mt-4 flex justify-center">
                <a
                  *ngIf="player.twitter"
                  [href]="'https://twitter.com/' + player.twitter"
                  target="_blank"
                  class="inline-flex items-center justify-center bg-secondary hover:bg-blue-500 text-white rounded-full w-10 h-10 transition-colors duration-300"
                  title="Twitter Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Schedule Section -->
      <div id="Schedule">
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
                <td class="py-2 px-4">{{ formatDate(event.date) }}</td>
                <td class="py-2 px-4">{{ event.eventName }}</td>
                <td class="py-2 px-4">{{ event.location }}</td>
                <td class="py-2 px-4">{{ event.sanction }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Coaches Section -->
      <div>
        <h2 class="text-3xl font-semibold text-primary mb-4 px-4">Coaches</h2>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 px-4"
        >
          <div
            *ngFor="let coach of team?.coaches; let even = even"
            class="card p-4 rounded-lg shadow-md"
            [ngClass]="{ 'bg-white': even, 'bg-gray-50': !even }"
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
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
      .getDate()
      .toString()
      .padStart(2, '0')}`;
  }

  generatePDF() {
    this.dataService.getTeamTemplate().subscribe((template) => {
      const pdfGenerator = new PDFGenerator(template);
      const pdf = pdfGenerator.generateTeamPDF(this.team);
      pdf.save(`${this.team.name}-roster.pdf`);
    });
  }
}
