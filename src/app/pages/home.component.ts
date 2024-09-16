import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Full-screen video -->
    <div class="video-container">
      <video autoplay loop muted playsinline>
        <source src="assets/videos/MVX-HomePage.mp4" type="video/mp4" />
      </video>
      <div class="overlay"></div>
    </div>

    <!-- Indoor Facility -->
    <div class="container">
      <h2>Xpress Indoor Facility and Training Partner</h2>
      <p>
        We are proud to announce our indoor facility and training partnership
        with Home Field Instruction in Franklin, OH for the 2023-24 season.
      </p>
    </div>

    <!-- Simple Image Carousel -->
    <div class="container">
      <div class="carousel">
        <img [src]="currentImage" alt="Carousel image" class="carousel-image" />
        <div class="carousel-controls">
          <button (click)="prevSlide()" class="carousel-button">&lt;</button>
          <button (click)="nextSlide()" class="carousel-button">&gt;</button>
        </div>
      </div>
    </div>

    <!-- Google Maps -->
    <div class="container">
      <h2>Our Home Field</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  `,
  styles: [
    `
      .video-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
      }
      .video-container video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .container {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 1rem;
      }
      h2 {
        font-size: 1.875rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .carousel {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
      }
      .carousel-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .carousel-controls {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .carousel-button {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
      }
    `,
  ],
})
export class HomeComponent {
  images: string[] = [
    'assets/home-carousel/Xpress.jpg',
    'assets/home-carousel/Xpress-team-pic.jpg',
    'assets/home-carousel/Xpress-org.jpg',
  ];

  currentIndex = 0;

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
