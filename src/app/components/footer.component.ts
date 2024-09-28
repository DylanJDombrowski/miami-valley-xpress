import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <!-- Column 1: Logo -->
        <div class="footer-column logo-column">
          <img src="assets/logos/mvxLogo1.png" alt="Logo" class="logo" />
        </div>

        <!-- Column 2: Contact Information -->
        <div class="footer-column contact-column">
          <h2 class="footer-heading">CONTACT US</h2>
          <div class="contact-info">
            <p><strong>Alexis Harvey</strong></p>
            <p><em>President</em></p>
            <a href="mailto:mvxpresssoftballorg@gmail.com" class="email-link"
              >mvxpresssoftballorg&#64;gmail.com</a
            >
          </div>
          <div class="contact-info">
            <p><strong>Rodney Coffey</strong></p>
            <p><em>Vice President</em></p>
            <a href="mailto:mvxpresssoftballorg@gmail.com" class="email-link"
              >mvxpresssoftballorg&#64;gmail.com</a
            >
          </div>
        </div>

        <!-- Column 3: Links and Social Media -->
        <div class="footer-column xpress-column">
          <h2 class="footer-heading">XPRESS YOURSELF</h2>
          <div class="xpress-links">
            <a
              href="https://www.nmdxapparel.com/shop/MVXpressTeamStore/9?page=1&limit=60&sort_by=category_order&sort_order=asc"
              target="_blank"
              class="footer-link"
            >
              <strong>NMDX Apparel</strong>
            </a>
            <a
              href="https://sideline.bsnsports.com/schools/ohio/miamisburg/miami-valley-xpress"
              target="_blank"
              class="footer-link"
            >
              <strong>Sideline Stores</strong>
            </a>
          </div>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/XpressSoftball"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p><strong>© 2024 Miami Valley Xpress. All Rights Reserved.</strong></p>
        <a routerLink="/backend-portal">Backend Portal</a>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        font-family: 'Oswald', sans-serif;
        background-color: var(--color-secondary);
        color: var(--color-background);
        padding: 40px 20px 20px;
      }
      .footer-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        max-width: 1200px;
        margin: 0 auto;
      }
      .footer-column {
        flex: 0 1 33.333%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .logo-column {
        justify-content: center;
      }
      .contact-column {
        align-items: center;
      }
      .xpress-column {
        align-items: center;
      }
      .logo {
        width: 100%;
        max-width: 250px;
      }
      .footer-heading {
        font-size: 24px;
        font-weight: 600;
        color: var(--color-background);
        margin-bottom: 20px;
        text-align: center;
      }
      .contact-info {
        margin-bottom: 15px;
        text-align: center;
      }
      p {
        margin: 5px 0;
        text-align: center;
      }
      .email-link {
        color: var(--color-background);
        text-decoration: none;
        transition: color 0.3s ease;
        display: block;
        text-align: center;
      }
      .email-link:hover {
        color: var(--color-accent);
      }
      .xpress-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
      }
      .footer-link {
        color: var(--color-primary);
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 18px;
      }
      .footer-link:hover {
        color: var(--color-accent);
      }
      .social-icons {
        display: flex;
        justify-content: center;
        gap: 20px;
      }
      .social-icon {
        font-size: 24px;
        color: var(--color-background);
        transition: color 0.3s ease;
      }
      .social-icon:hover {
        color: var(--color-accent);
      }
      .copyright {
        text-align: center;
        margin-top: 30px;
        font-size: 14px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 20px;
      }
      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column;
          align-items: center;
        }
        .footer-column {
          margin-bottom: 30px;
          width: 100%;
        }
        .logo-column {
          order: -1;
        }
      }
    `,
  ],
})
export class FooterComponent {}
