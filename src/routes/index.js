import express from 'express';
import users from './users'

const router = express.Router();
const app = express()

router.use('/users', users)


export default router;

console.log('Executing Server: routes.js ...');