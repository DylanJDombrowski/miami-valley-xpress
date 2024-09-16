import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Sticky Header -->
    <div
      class="sticky top-[48px] text-left z-40 bg-secondary text-white py-4 shadow-md"
    >
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold">Our Partners</h1>
      </div>
    </div>

    <div class="container mx-auto py-8 px-4">
      <!-- Miami Valley Sports Foundation -->
      <div class="partner-section flex items-center mb-12">
        <img
          src="assets/logos/mvsf-logo.jpg"
          alt="Miami Valley Sports Foundation Logo"
          class="w-40 h-40 object-contain mr-8"
        />
        <div>
          <h2 class="text-2xl font-semibold mb-4">
            Miami Valley Sports Foundation
          </h2>
          <p class="mb-4">
            Miami Valley Xpress could not be what it is today if it were not for
            its founding members and the assistance of the Miami Valley Sports
            Foundation. The organization is over 25+ years old today and while
            it has had different leadership in the legacy of the program the
            Miami Valley Sports Foundation and its members have continued to
            advocate for competitive youth softball.
          </p>
          <a
            href="https://miamivalleysportsfoundation.org"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 font-semibold"
            >Visit our Partners at the Miami Valley Sports Foundation</a
          >
        </div>
      </div>

      <!-- West Carrollton City Schools -->
      <div class="partner-section flex items-center mb-12">
        <img
          src="assets/logos/wccs-logo.png"
          alt="West Carrollton City Schools Logo"
          class="w-40 h-40 object-contain mr-8"
        />
        <div>
          <h2 class="text-2xl font-semibold mb-4">
            West Carrollton City Schools
          </h2>
          <p class="mb-4">
            The West Carrollton High School field and surrounding softball
            complex have long been home to the Miami Valley Xpress Softball
            program through our partnership with West Carrollton City Schools.
            These fields are where the organization was founded, and has
            continued to develop over its storied 25+ year history. Xpress teams
            are fortunate to call this complex home today and because of the
            continued support of the West Carrollton City Schools and our long
            standing relationship we are able to secure the program's future for
            the foreseeable future.
          </p>
          <a
            href="https://www.westcarrolltonschools.com"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 font-semibold"
            >Visit our Partners at West Carrollton City Schools</a
          >
        </div>
      </div>

      <!-- Homefield Instruction -->
      <div class="partner-section flex items-center mb-12">
        <img
          src="assets/logos/homefield-logo.jpg"
          alt="Homefield Instruction Logo"
          class="w-40 h-40 object-contain mr-8"
        />
        <div>
          <h2 class="text-2xl font-semibold mb-4">Homefield Instruction</h2>
          <p class="mb-4">
            We are proud to be in another year of our partnership with Home
            Field Instruction in Franklin, OH. This partnership has given us the
            opportunity to have an indoor home for our whole organization. The
            additional training opportunities this has given our organization
            and our athletes has been incredible. This has afforded us valuable
            organizational time having a home site for organizational events
            like our annual Hit-A-Thon and Hitting Gauntlets, as well as
            valuable individual player development time in the form of our
            winter open gyms. The facility is perfectly suited and equipped for
            our needs and we could not have better partners than the owners at
            Home Field.
          </p>
          <a
            href="https://www.homefieldfranklin.com"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 font-semibold"
            >Visit our Partners at Home Field Instruction</a
          >
        </div>
      </div>

      <!-- Nomadx -->
      <div class="partner-section flex items-center">
        <img
          src="assets/logos/nomadx-logo.webp"
          alt="Nomadx Logo"
          class="w-40 h-40 object-contain mr-8"
        />
        <div>
          <h2 class="text-2xl font-semibold mb-4">Nomadx</h2>
          <p class="mb-4">
            Look great, play great! For the last 5 years our organization has
            focused on consolidating our brand and ensuring our teams hit the
            field looking great. This includes having uniforms that will last
            the course of a demanding season, and keeping our fanbase looking
            great no matter which of the 4 seasons we are playing in. Over that
            time Amanda Poteet and her Nomadx organization have been our go to
            partner. Paired with quality uniforms and apparel has come a
            personalized service that ensures things are done properly and
            delivered on time. Her services have also included artwork design
            for logos, uniforms, etc. We are fortunate to have a provider as
            flexible and efficient as Nomadx.
          </p>
          <a
            href="https://nomadx.com"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 font-semibold"
            >Visit our Partners at Nomadx</a
          >
        </div>
      </div>
    </div>
  `,
  styles: `
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .partner-section {
      background-color: #f8f8f8;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .partner-section {
        flex-direction: column;
      }

      .partner-section img {
        margin-right: 0;
        margin-bottom: 16px;
        width: 120px;
        height: 120px;
      }
    }
  `,
})
export class ExtendedTeamComponent {}
