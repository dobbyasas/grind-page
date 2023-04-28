import * as fs from 'fs';

import { DATA_DIRECTORY, QUOTE_FILE, TASK_FILE } from '../index.mjs';

export const setupDataDirectory = () => {
  if (!fs.existsSync(DATA_DIRECTORY)) fs.mkdirSync(DATA_DIRECTORY);
  if (!fs.existsSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`)) {
    fs.writeFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`, '{"quotes":[]}');
  }
  if (!fs.existsSync(`${DATA_DIRECTORY}/${TASK_FILE}`)) {
    fs.writeFileSync(`${DATA_DIRECTORY}/${TASK_FILE}`, '{"tasks":[]}');
  }
};

export const getDataFromFile = (type) => {
  // Reading the target file
  const content = fs.readFileSync(`${DATA_DIRECTORY}/${type}.json`);
  const parsedContent = JSON.parse(content.toString()).quotes;
  return parsedContent;
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
  const maxQuoteId = Math.max(...existingQuotes.map((q) => q.id));

  // Adding the new quote
  const newQuotesContent = {
    quotes: [...existingQuotes, {
      id: maxQuoteId + 1,
      ...quoteInfo
    }],
  };
  fs.writeFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`, JSON.stringify(newQuotesContent, null, 2));
  return {
    id: maxQuoteId + 1,
    ...quoteInfo
  };
};

export const deleteQuoteFromFile = (id) => {
  // Reading the quotes file
  const quotesContent = fs.readFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`);
  const existingQuotes = JSON.parse(quotesContent.toString()).quotes;

  // Deleting the quote
  const newQuotesContent = {
    quotes: existingQuotes.filter((quote) => quote.id !== Number(id)),
  };
  fs.writeFileSync(`${DATA_DIRECTORY}/${QUOTE_FILE}`, JSON.stringify(newQuotesContent, null, 2));
};
