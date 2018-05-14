import express from 'express';
import user from './user'

const router = express.Router();
const app = express()

router.use('/users', user)


export default router;

console.log('Executing Server: routes.js ...');