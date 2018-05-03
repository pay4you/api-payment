import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

// Check alternative_db.js for localhost connection

const app = express();

// Middelware
app.use(bodyParser.json());
app.use('/v1', routes);

export default app;

console.log('Executing Server: app.js ...');