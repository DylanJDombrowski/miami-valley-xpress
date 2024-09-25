import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import * as puppeteer from 'puppeteer';
import { Team } from '../models/team.model';

export class PDFGeneratorService {
  private template: HandlebarsTemplateDelegate;

  constructor() {
    const templatePath = path.join(__dirname, '../templates/teamRoster.hbs');
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    this.template = Handlebars.compile(templateContent);
  }

  async generateTeamPDF(team: Team): Promise<Buffer> {
    const html = this.template(team);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
    });

    await browser.close();

    return pdf;
  }
}
