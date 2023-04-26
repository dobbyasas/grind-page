import * as fs from 'fs';

import { DATA_DIRECTORY, QUOTE_FILE } from '../index.mjs';

export const setupDataDirectory = () => {
  if (!fs.existsSync(DATA_DIRECTORY)) fs.mkdirSync(DATA_DIRECTORY);
  if (!fs.existsSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`)) {
    fs.writeFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`, '{"quotes":[]}');
  }
};

export const getQuotesFromFile = () => {
  // Reading the quotes file
  const quotesContent = fs.readFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`);
  const existingQuotes = JSON.parse(quotesContent.toString()).quotes;
  return existingQuotes;
};

export const addQuoteToFile = (quoteInfo) => {
  // Reading the quotes file
  const quotesContent = fs.readFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`);
  const existingQuotes = JSON.parse(quotesContent.toString()).quotes;

  // Adding the new quote
  const newQuotesContent = {
    quotes: [...existingQuotes, quoteInfo],
  };
  fs.writeFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`, JSON.stringify(newQuotesContent, null, 2));
};
