import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import models from './models'

// Check alternative_db.js for localhost connection

const app = express();

// Middelware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/v1', routes);
app.use((req, res, next) => {
    req.$models = models;
    next()
})

export default app;

console.log('Executing Server: app.js ...');