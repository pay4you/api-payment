import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import models from './models'
import jwt from 'jsonwebtoken'
import config from './config/config'

const env = process.env.NODE_ENV || 'development';


const app = express();

// Middelware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use((req, res, next) => {
    req.$models = models;
    next()
})


app.use('/v1', routes);

export default app;

console.log('Executing Server: app.js ...');