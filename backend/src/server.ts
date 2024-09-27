import express from 'express';
import { PDFController } from './pdf/pdfController.js';
import { Team } from './models/team.model.js';

const app = express();
const pdfController = new PDFController();

app.use(express.json());

app.post('/generate-pdf', pdfController.generateTeamPDF.bind(pdfController));

app.get('/test-pdf', async (req, res) => {
  const testTeam: Team = {
    name: 'Test Team',
    players: [
      { name: 'John Doe', position: 'Forward', number: 10 },
      { name: 'Jane Smith', position: 'Defender', number: 5 },
      { name: 'Mike Johnson', position: 'Goalkeeper', number: 1 },
    ],
  };

  try {
    const pdf = await pdfController.pdfGenerator.generateTeamPDF(testTeam);
    res.contentType('application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${testTeam.name}-roster.pdf"`
    );
    res.send(pdf);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
