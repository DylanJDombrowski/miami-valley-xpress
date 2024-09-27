import express from 'express';
import { PDFController } from './pdf/pdfController.js';

const app = express();
const pdfController = new PDFController();

app.use(express.json());

app.post('/generate-pdf', pdfController.generateTeamPDF.bind(pdfController));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
