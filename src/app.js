import express from 'express';
import { createSeedData } from './data/seed.js';

export function createApp({ data = createSeedData() } = {}) {
  const app = express();

  app.use(express.json());

  app.get('/health', (_request, response) => {
    response.status(200).json({ status: 'ok' });
  });

  app.get('/api/tools', (_request, response) => {
    response.status(200).json(data.tools);
  });

  return app;
}
