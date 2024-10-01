import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../../core/services/player.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgIf, NgFor } from '@angular/common';
import { MatCardContent, MatCardModule } from '@angular/material/card';

interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  image_url: string;
}

@Component({
  standalone: true,
  selector: 'app-player-list',
  imports: [MatGridListModule, MatCardContent, NgIf, NgFor, MatCardModule],
  template: `
    <mat-grid-list cols="3" rowHeight="4:3">
      <mat-grid-tile *ngFor="let player of players">
        <mat-card (click)="editPlayer(player)">
          <img mat-card-image [src]="player.image_url" alt="Player photo" />
          <mat-card-content>
            <h3>{{ player.name }}</h3>
            <p>#{{ player.number }} - {{ player.position }}</p>
          </mat-card-content>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
})
export class PlayerListComponent implements OnInit {
  @Input() teamId!: number;
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.getPlayersByTeam(this.teamId).subscribe(
      (players: any) => (this.players = players),
      (error: any) => console.error('Error loading players:', error)
    );
  }

  editPlayer(player: Player) {
    // Open a dialog or navigate to edit page
  }
}
