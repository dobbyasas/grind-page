import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const quotesFilePath = path.join(process.cwd(), 'src', 'banners', 'quotes.json');

app.post('/api/saveQuotes', async (req, res) => {
  const quotes = req.body;

  try {
    await fs.writeFile(quotesFilePath, JSON.stringify(quotes, null, 2));
    res.status(200).send('Quotes saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save quotes');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
