import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/services/json-data.service';
import { BlogPost } from '../models/blog-post.model';
import { NavigationComponent } from '../components/navigation.component';

@Component({
  selector: 'app-on-the-field',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <!-- Sticky Header -->
    <div class="sticky top-[48px] z-40 bg-secondary text-white py-4 shadow-md">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">On The Field</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <!-- Filter -->
      <div class="mb-8 flex flex-col sm:flex-row justify-center items-center">
        <label for="seasonFilter" class="mr-2 text-lg mb-2 sm:mb-0">Filter by Season:</label>
        <select
          id="seasonFilter"
          [(ngModel)]="selectedSeason"
          (change)="filterPosts()"
          class="border rounded p-2 bg-white shadow-sm w-full sm:w-auto"
        >
          <option value="">All Seasons</option>
          <option *ngFor="let season of seasons" [value]="season">
            {{ season }}
          </option>
        </select>
      </div>

      <!-- Blog post grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <a
          *ngFor="let post of displayedPosts"
          [routerLink]="['/on-the-field', post.slug]"
          class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
        >
          <img [src]="'assets/blog/' + post.image" [alt]="post.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2 text-gray-800">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 mb-4 text-sm">
              {{ post.shortDescription }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-blue-500 font-medium">Read more</span>
              <p class="text-sm text-gray-500">
                {{ post.date | date : 'mediumDate' }}
              </p>
            </div>
          </div>
        </a>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex flex-col sm:flex-row justify-center items-center">
        <button
          (click)="changePage(-1)"
          [disabled]="currentPage === 1"
          class="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition duration-300 mb-2 sm:mb-0"
        >
          Previous
        </button>
        <span class="mx-2 py-2 text-lg font-medium"> Page {{ currentPage }} of {{ totalPages }} </span>
        <button
          (click)="changePage(1)"
          [disabled]="currentPage === totalPages"
          class="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition duration-300 mt-2 sm:mt-0"
        >
          Next
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      /* Add any additional styles here */
    `,
  ],
})
export class OnTheFieldComponent implements OnInit {
  allPosts: BlogPost[] = [];
  displayedPosts: BlogPost[] = [];
  seasons: string[] = [];
  selectedSeason: string = '';
  currentPage: number = 1;
  postsPerPage: number = 14;
  totalPages: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    this.dataService.getBlogPosts().subscribe((posts: BlogPost[]) => {
      this.allPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.seasons = [...new Set(posts.map((post: BlogPost) => post.season))];
      this.filterPosts();
    });
  }

  filterPosts() {
    let filteredPosts = this.allPosts;
    if (this.selectedSeason) {
      filteredPosts = filteredPosts.filter((post) => post.season === this.selectedSeason);
    }
    this.totalPages = Math.ceil(filteredPosts.length / this.postsPerPage);
    this.currentPage = 1;
    this.updateDisplayedPosts(filteredPosts);
  }

  updateDisplayedPosts(posts: BlogPost[]) {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    this.displayedPosts = posts.slice(startIndex, startIndex + this.postsPerPage);
  }

  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updateDisplayedPosts(this.selectedSeason ? this.allPosts.filter((post) => post.season === this.selectedSeason) : this.allPosts);
    }
  }
}
