import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <div class="dropdown">
        <button class="dropbtn">Express Teams</button>
        <div class="dropdown-content">
          <a *ngFor="let team of teams" [routerLink]="['/teams', team.id]">{{
            team.name
          }}</a>
        </div>
      </div>
      <a routerLink="/alumni">Express Alumni</a>
      <a routerLink="/on-the-field">On The Field</a>
      <a routerLink="/all-aboard">All Aboard</a>
      <a routerLink="/extended-team">Extended Team</a>
      <a routerLink="/xpress-social">Xpress Social</a>
    </nav>
  `,
})
export class HeaderComponent implements OnInit {
  teams: Team[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllTeams().subscribe((teams) => (this.teams = teams));
  }
}
