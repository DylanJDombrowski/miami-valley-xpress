import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import { Team } from '../models/team.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class PDFGeneratorService {
  private readonly templatePath: string;

  constructor() {
    this.templatePath = path.join(
      __dirname,
      '..',
      '..',
      'templates',
      'teamRoster.hbs'
    );
  }

  async generateTeamPDF(team: Team): Promise<Buffer> {
    const template = await fs.readFile(this.templatePath, 'utf-8');
    const compiledTemplate = handlebars.compile(template);
    const html = compiledTemplate(team);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    return pdf;
  }
}
