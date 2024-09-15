import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Full-screen video -->
    <div class="relative h-screen">
      <video
        autoplay
        loop
        muted
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="assets/videos/MVX-HomePage.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      ></div>
    </div>

    <!-- Tryouts and Signing Day -->
    <div class="container mx-auto my-8 flex flex-wrap">
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-3xl font-bold mb-4">
          Miami Valley Xpress 23-24 Tryouts
        </h2>
        <p>
          We are excited to be hosting a full tryout schedule as an organization
          for the 2024-25 season. We will have a full lineup of teams from 8u –
          18u. The organization runs tryouts together at the Miami Valley Xpress
          Complex / WC Softball Varsity Field.
        </p>
        <h3 class="text-2xl font-bold mt-4">Tryout Dates</h3>
        <p>August 5th - 7th</p>
        <!-- Add more content here -->
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-3xl font-bold mb-4">Miami Valley Xpress Signing Day</h2>
        <p>
          Signing Day and our Annual Cornhole Tournament will return this
          season. We plan to have an assortment of activities at the event this
          year surrounding the signing activities and tournament.
        </p>
        <h3 class="text-2xl font-bold mt-4">Date and Location</h3>
        <p>
          August 17th at The Miamisburg Moose Lodge (2110 E Central Ave
          Miamisburg, OH)
        </p>
        <!-- Add more content here -->
      </div>
    </div>

    <!-- Indoor Facility -->
    <div class="container mx-auto my-8">
      <h2 class="text-3xl font-bold mb-4">
        Xpress Indoor Facility and Training Partner
      </h2>
      <p>
        We are proud to announce our indoor facility and training partnership
        with Home Field Instruction in Franklin, OH for the 2023-24 season.
      </p>
      <!-- Add more content here -->
    </div>

    <!-- Image Carousel -->
    <div class="container mx-auto my-8">
      <!-- You can use a third-party carousel library or implement a simple one using Angular -->
      <!-- Placeholder for carousel -->
      <div class="bg-gray-200 h-64 flex items-center justify-center">
        <p>Image Carousel Placeholder</p>
      </div>
    </div>

    <!-- Google Maps -->
    <div class="container mx-auto my-8">
      <h2 class="text-3xl font-bold mb-4">Our Home Field</h2>
      <!-- Embed Google Maps here -->
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </div>
  `,
})
export class HomeComponent {}
