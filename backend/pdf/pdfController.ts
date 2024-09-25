import { Request, Response } from 'express';
import { PDFGeneratorService } from './pdfGeneratorService';
import { Team } from '../../src/app/models/team.model';

export class PDFController {
  private pdfGenerator: PDFGeneratorService;

  constructor() {
    this.pdfGenerator = new PDFGeneratorService();
  }

  async generateTeamPDF(req: Request, res: Response) {
    try {
      const teamId: string = req.params['teamId'];
      const team: Team = await this.getTeamData(teamId); // Implement this method to fetch team data

      const pdf = await this.pdfGenerator.generateTeamPDF(team);

      res.contentType('application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${team.name}-roster.pdf"`
      );
      res.send(pdf);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  }

  private async getTeamData(teamId: string): Promise<Team> {
    // Implement this method to fetch team data from your database or service
    // For now, we'll return a mock team
    return {
      id: teamId,
      name: 'Mock Team',
      year: 2024,
      players: [
        {
          name: 'John Doe',
          position: 'Forward',
          number: 10,
          imageUrl: '',
        },
        {
          name: 'Jane Smith',
          position: 'Midfielder',
          number: 8,
          imageUrl: '',
        },
        // Add more players as needed
      ],
      schedule: [], // Add a mock schedule
      coaches: [], // Add a mock coaches list
    };
  }
}
