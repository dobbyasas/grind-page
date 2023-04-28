import { Router } from 'express';

import {
  getDataFromFile,
  addQuoteToFile,
  deleteQuoteFromFile,
} from '../utils/data';

const quoteRouter = Router();

// GET Endpoint for Quotes
quoteRouter.get('/', (_, res) => {
  try {
    const quotes = getDataFromFile('quotes');
    return res.json(quotes);
  } catch (error) {
    console.log(error);
    return res.status(500).json([]);
  }
});

// POST Endpoint for Quotes
quoteRouter.post('/', (req, res) => {
  try {
    const { quote, author } = req.body;
    const newQuote = addQuoteToFile({
      quote,
      author,
    });
    return res.json(newQuote);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error!');
  }
});

// DELETE Endpoint for Quotes
quoteRouter.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    deleteQuoteFromFile(Number(id));
    return res.json({
      id,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error!');
  }
});

export default quoteRouter;
