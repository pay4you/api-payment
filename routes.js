import express from 'express';

const routes = express();

// Basic routes
routes.get('/', (req, res) => {
    res.send('HAHAHAHAHAHAHA')
});


export default routes;

console.log('Executing Server: routes.js ...');