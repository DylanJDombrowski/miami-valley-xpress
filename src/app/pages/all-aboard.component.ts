import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavigationComponent } from '../components/navigation.component';

@Component({
  selector: 'app-all-aboard',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <!-- Sticky Header -->
    <div class="sticky top-[48px] text-left z-40 bg-secondary text-white py-4 shadow-md">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold">All Aboard!</h1>
      </div>
    </div>

    <div class="container mx-auto py-8 px-4">
      <div class="content-wrapper">
        <mat-accordion class="accordion">
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title> Hoping to Join Us? </mat-panel-title>
            </mat-expansion-panel-header>
            <p>Are you interested in becoming an Xpress coach for the upcoming season?</p>
            <p>Are you entertaining bringing a team aboard our organization?</p>
            <p>Please fill out the below application and a member of our Miami Valley Xpress Board will reach out to follow up.</p>
            <a href="https://forms.gle/eqzJs4Ymh6P9hpiJ7" target="_blank" class="link">New and Returning Coaches Application</a>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title> Hoping to Sponsor us? </mat-panel-title>
            </mat-expansion-panel-header>
            <p>
              Are you interested in renewing your sponsorship, or becoming a new sponsor of Miami Valley Xpress. Submit the below information and
              remit payment to the appropriate head coach, or organization head. All payments should be made out to Miami Valley Xpress.
            </p>
            <a href="https://forms.gle/kgxeqJ9A7v3JYGZ68" target="_blank" class="link">New and Returning Sponsors Application</a>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title> Have a player needing Financial Assistance? </mat-panel-title>
            </mat-expansion-panel-header>
            <p>
              Our goal is to make competitive fastpitch an option for all players despite their financial situation. If you have an existing player
              that is committed to playing with Miami Valley Xpress for the upcoming season and is in need of financial assistance submit the below
              application for review of the Miami Valley Xpress board for financial aid. All applications are due by the last day of September for the
              playing year.
            </p>
            <a href="https://forms.gle/r1xvR2enqaAc3TbZ9" target="_blank" class="link">Hardship Scholarship Application</a>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title> Have an Xpress player that would like to submit for our Academic Scholarship? </mat-panel-title>
            </mat-expansion-panel-header>
            <p>
              Through our generous partners at the Miami Valley Sports Foundation we are able to provide scholarship opportunities for players
              completing our programs and continuing to college. For more information on the requirements and how to submit for this honor please
              email our organization at
              <a href="mailto:mvxpresssoftballorg@gmail.com" class="link">mvxpresssoftballorg&#64;gmail.com</a>.
            </p>
          </mat-expansion-panel>
        </mat-accordion>

        <div class="image-container">
          <img src="assets/stock/stock-img-1.jpg" alt="Stock Image" class="stock-image" />
        </div>
      </div>
    </div>
  `,
  styles: `
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .content-wrapper {
      display: flex;
      gap: 30px;
    }

    .accordion {
      flex: 1;
    }

    .image-container {
      flex: 1;
    }

    .stock-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    ::ng-deep .mat-expansion-panel {
      margin-bottom: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ::ng-deep .mat-expansion-panel-header {
      background-color: #f0f0f0;
    }

    ::ng-deep .mat-expansion-panel-header-title {
      font-weight: bold;
      color: #333;
    }

    ::ng-deep .mat-expansion-panel-body {
      padding: 16px;
    }

    .link {
      color: #007bff;
      text-decoration: underline;
      font-weight: bold;
    }

    .link:hover {
      color: #0056b3;
    }

    @media (max-width: 768px) {
      .content-wrapper {
        flex-direction: column;
      }

      .image-container {
        order: -1;
        margin-bottom: 20px;
      }
    }
  `,
})
export class AllAboardComponent {}
