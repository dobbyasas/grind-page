import express from 'express';
import cors from 'cors';

import quoteRouter from './routes/quote.mjs';

import { setupDataDirectory } from './utils/data.mjs';

// Setup
const app = express();
app.use(cors());
app.use(express.json());

// Directories and Files
export const DATA_DIRECTORY = 'data';
export const QUOTE_FILE = 'quotes.json';
export const TASK_FILE = 'tasks.json';

// Ports
const EXPRESS_PORT = 3001;

// Routes
app.use('/quote', quoteRouter);

// Express Server
app.listen(EXPRESS_PORT, () => {
  console.log(`[STATUS] Express listening on port ${EXPRESS_PORT}...`);
});

setupDataDirectory();
