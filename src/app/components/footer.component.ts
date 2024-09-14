import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer
      class="font-oswald"
      style="background-color: #f8f9fa; padding: 20px;"
    >
      <div
        style="display: flex; justify-content: space-between; align-items: center; "
      >
        <!-- Column 1: Logo -->
        <div>
          <img src="assets/mvxLogo1.png" alt="Logo" style="width: 250px;" />
        </div>

        <!-- Column 2: Contact Information -->
        <div>
          <h1>Contact Us</h1>
          <p>Alexis Harvey</p>
          <p><i>President</i></p>
          <p>Email: mvxpresssoftballorg&#64;gmail.com</p>
          <br />
          <p>Rodney Coffey</p>
          <p><i>Vice President</i></p>
          <p>Email: mvxpresssoftballorg&#64;gmail.com</p>
        </div>

        <!-- Column 3: Social Media Links -->
        <div>
          <h1>Xpress Yourself</h1>
          <a href="https://facebook.com" target="_blank">Facebook</a><br />
          <a href="https://twitter.com" target="_blank">Twitter</a><br />
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
