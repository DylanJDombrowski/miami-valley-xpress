import { Request, Response } from 'express';
import { PDFGeneratorService } from './pdfGeneratorService.js';
import { Team } from '../models/team.model.js';

export class PDFController {
  private pdfGenerator: PDFGeneratorService;

  constructor() {
    this.pdfGenerator = new PDFGeneratorService();
  }

  async generateTeamPDF(req: Request, res: Response) {
    try {
      const team: Team = req.body;

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
}
