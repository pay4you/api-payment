import express from 'express';
import users from '../controllers/users'

const app = express.Router();

app.get('/users/:id', users.getById)
app.get('/users', users.get)
app.post('/users', users.post)
app.put('/users/:id', users.put)
app.delete('/users/:id', users.remove);

export default app;

console.log('Executing Server: routes.js ...');