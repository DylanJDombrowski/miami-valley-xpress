import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Alumni {
  id: string;
  playerName: string;
  xpressTeam: string;
  gradYear: number;
  position: string;
  highSchool: string;
  college: string;
  imageUrl: string;
  hsLogoUrl: string;
  collegeLogoUrl: string;
}

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Sticky Alumni Header -->
    <div
      class="sticky top-0 md:top-[48px] text-left z-40 bg-secondary text-white py-4 shadow-md"
    >
      <div class="container mx-auto px-4">
        <h1 class="text-2xl md:text-3xl font-bold">Xpress Alumni</h1>
      </div>
    </div>

    <div class="bg-gray-100 min-h-screen">
      <div class="container mx-auto py-8 md:py-12 px-4">
        <div
          *ngFor="let gradYearGroup of groupedAlumni | keyvalue"
          class="mb-12 md:mb-16"
        >
          <h2
            class="text-2xl md:text-3xl font-semibold text-primary mb-6 border-l-4 border-secondary pl-4"
          >
            Grad Year: {{ gradYearGroup.key }}
          </h2>

          <!-- Mobile view -->
          <div class="md:hidden">
            <div
              *ngFor="let player of gradYearGroup.value"
              class="bg-white rounded-lg shadow-md overflow-hidden mb-6"
            >
              <img
                [src]="getImageUrl(player.imageUrl)"
                [alt]="player.playerName"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  {{ player.playerName }}
                </h3>
                <p class="text-gray-600 mb-2">{{ player.position }}</p>
                <div class="flex items-center space-x-2 mb-2">
                  <img
                    [src]="getImageUrl(player.hsLogoUrl)"
                    alt="High School Logo"
                    class="w-8 h-8 object-contain"
                  />
                  <span class="text-sm">{{ player.highSchool }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <img
                    [src]="getImageUrl(player.collegeLogoUrl)"
                    alt="College Logo"
                    class="w-8 h-8 object-contain"
                  />
                  <span class="text-sm">{{ player.college }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop view -->
          <div class="hidden md:block overflow-x-auto">
            <table class="w-full bg-white shadow-lg rounded-lg">
              <thead class="bg-gray-200">
                <tr>
                  <th class="py-3 px-4 text-left">Image</th>
                  <th class="py-3 px-4 text-left">Name</th>
                  <th class="py-3 px-4 text-left">Position</th>
                  <th class="py-3 px-4 text-left">High School</th>
                  <th class="py-3 px-4 text-left">Committed School</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  *ngFor="let player of gradYearGroup.value"
                  class="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td class="py-4 px-4">
                    <img
                      [src]="getImageUrl(player.imageUrl)"
                      [alt]="player.playerName"
                      class="w-32 h-32 object-cover rounded-lg shadow-md"
                    />
                  </td>
                  <td class="py-4 px-4 text-lg font-medium">
                    {{ player.playerName }}
                  </td>
                  <td class="py-4 px-4">{{ player.position }}</td>
                  <td class="py-4 px-4">
                    <div class="flex items-center space-x-3">
                      <img
                        [src]="getImageUrl(player.hsLogoUrl)"
                        alt="High School Logo"
                        class="w-12 h-12 object-contain"
                      />
                      <span>{{ player.highSchool }}</span>
                    </div>
                  </td>
                  <td class="py-4 px-4">
                    <div class="flex items-center space-x-3">
                      <img
                        [src]="getImageUrl(player.collegeLogoUrl)"
                        alt="College Logo"
                        class="w-12 h-12 object-contain"
                      />
                      <span>{{ player.college }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
export class AlumniComponent implements OnInit {
  alumni: Alumni[] = [];
  groupedAlumni: { [key: number]: Alumni[] } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ alumni: Alumni[] }>('assets/data/alumni.json').subscribe(
      (data) => {
        this.alumni = data.alumni;
        this.groupAlumniByGradYear();
      },
      (error) => console.error('Error fetching alumni data:', error)
    );
  }

  groupAlumniByGradYear() {
    this.groupedAlumni = this.alumni.reduce((acc, player) => {
      if (!acc[player.gradYear]) {
        acc[player.gradYear] = [];
      }
      acc[player.gradYear].push(player);
      return acc;
    }, {} as { [key: number]: Alumni[] });

    // Sort players within each grad year
    Object.values(this.groupedAlumni).forEach((group) => {
      group.sort((a, b) => a.playerName.localeCompare(b.playerName));
    });

    // Sort grad years in descending order
    this.groupedAlumni = Object.keys(this.groupedAlumni)
      .sort((a, b) => Number(b) - Number(a))
      .reduce((obj, key) => {
        obj[Number(key)] = this.groupedAlumni[Number(key)];
        return obj;
      }, {} as { [key: number]: Alumni[] });
  }

  getImageUrl(url: string): string {
    if (!url) return 'assets/teams/defaultpfp.jpg';
    if (url.startsWith('http')) return url; // For external URLs
    return url.startsWith('assets/') ? url : `assets/${url}`; // Prepend 'assets/' only if needed
  }
}
