import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import quoteRouter from './routes/quote';
import taskRouter from './routes/task';

import { DEFAULT_EXPRESS_PORT } from './utils/constants';

// Setup
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Directories and Files
export const DATA_DIRECTORY = 'data';
export const QUOTE_FILE = 'quotes.json';
export const TASK_FILE = 'tasks.json';

// Ports
const expressPort = Number(process.env.EXPRESS_PORT) || DEFAULT_EXPRESS_PORT;

// Routes
app.use('/quote', quoteRouter);
app.use('/task', taskRouter);

// Express Server
app.listen(expressPort, () => {
  console.log(`[STATUS] Express listening on port ${expressPort}...`);
});
