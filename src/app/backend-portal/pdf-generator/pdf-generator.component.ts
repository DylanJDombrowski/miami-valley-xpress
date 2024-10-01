import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../core/services/json-data.service';

@Component({
  standalone: true,
  selector: 'app-pdf-generator',
  imports: [CommonModule, FormsModule, RouterModule],

  template: `
    <select [(ngModel)]="selectedYear" (change)="loadTeamData()">
      <option *ngFor="let year of years" [value]="year">{{ year }}</option>
    </select>
    <button (click)="generatePDF()">Generate PDF</button>
  `,
})
export class PdfGeneratorComponent implements OnInit {
  years: string[] = [
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
  ];
  selectedYear: string = '';
  teamData: any;

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.selectedYear = this.years[0];
    this.loadTeamData();
  }

  loadTeamData() {
    this.DataService.getTeamData(this.selectedYear).subscribe(
      (data: any) => (this.teamData = data),
      (error: any) => console.error('Error loading team data:', error)
    );
  }

  generatePDF() {
    // Implement PDF generation logic here
    console.log(
      'Generating PDF for',
      this.selectedYear,
      'with data:',
      this.teamData
    );
  }
}
