import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blog-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Sticky Header -->
    <div class="sticky top-[48px] z-40 bg-secondary text-white py-4 shadow-md">
      <div class="container mx-auto px-4 flex items-center">
        <a routerLink="/on-the-field" class="text-white hover:underline mr-4">
          &larr; Back
        </a>
        <h1 class="text-3xl font-bold">{{ post?.title }}</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row">
        <!-- Main content -->
        <div class="lg:w-3/4 lg:pr-8">
          <div class="bg-gray-100 p-4 rounded-lg mb-6">
            <p class="text-gray-600 mb-2">
              <span class="font-semibold">Season:</span> {{ post?.season }}
            </p>
            <p class="text-gray-600 mb-2">
              <span class="font-semibold">Date:</span>
              {{ post?.date | date : 'longDate' }}
            </p>
            <p class="text-gray-600 mb-2">
              <span class="font-semibold">Location:</span> {{ post?.location }}
            </p>
            <p class="text-gray-600 mb-2">
              <span class="font-semibold">Tournament:</span>
              {{ post?.tournamentName }}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Place:</span> {{ post?.place }}
            </p>
          </div>
          <img
            *ngIf="post?.image"
            [src]="'assets/blog/' + post?.image"
            [alt]="post?.title"
            class="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
          />
          <div [innerHTML]="post?.content" class="prose max-w-none"></div>
        </div>

        <!-- Sidebar -->
        <div class="lg:w-1/4 mt-8 lg:mt-0">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Other Posts</h2>
          <div class="space-y-4">
            <a
              *ngFor="let otherPost of otherPosts"
              [routerLink]="['/on-the-field', otherPost.slug]"
              class="block bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                [src]="'assets/blog/' + otherPost.image"
                [alt]="otherPost.title"
                class="w-full h-32 object-cover"
              />
              <div class="p-4">
                <h3
                  class="text-lg font-semibold mb-2 text-gray-800 line-clamp-2"
                >
                  {{ otherPost.title }}
                </h3>
                <span class="text-blue-500 text-sm">Read more</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .prose {
        max-width: 65ch;
        @apply text-gray-800;
      }
      .prose p {
        @apply mb-4;
      }
    `,
  ],
})
export class BlogPostDetailComponent implements OnInit {
  post: BlogPost | undefined;
  otherPosts: BlogPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.loadBlogPost(slug);
    });
  }

  loadBlogPost(slug: string) {
    this.dataService.getBlogPosts().subscribe((posts: BlogPost[]) => {
      this.post = posts.find((p) => p.slug === slug);
      this.otherPosts = posts
        .filter((p) => p.slug !== slug)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 6);
    });
  }
}
