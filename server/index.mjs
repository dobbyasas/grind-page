import express from 'express';
import cors from 'cors';

import { getQuotesFromFile, addQuoteToFile, setupDataDirectory } from './utils/data.mjs';

// Setup
const app = express();
app.use(cors());
app.use(express.json());

// Directories and Files
export const DATA_DIRECTORY = 'data';
export const QUOTE_FILE = 'quotes.json';

// Ports
const EXPRESS_PORT = 3001;

// Express Server
app.listen(EXPRESS_PORT, () => {
  console.log(`[STATUS] Express listening on port ${EXPRESS_PORT}...`);
});

// GET Endpoint for Quotes
app.get('/quote', (_, res) => {
  try {
    const quotes = getQuotesFromFile();
    return res.json(quotes);
  } catch (error) {
    console.log(error);
    return res.status(500).json([]);
  }
});

// POST Endpoint for Quotes
app.post('/quote', (req, res) => {
  try {
    const { quote, author } = req.body;
    addQuoteToFile({
      quote,
      author,
    });
    return res.json({
      quote,
      author,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error!');
  }
});

setupDataDirectory();
