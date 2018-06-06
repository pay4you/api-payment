import express from 'express';
import users from './users'
import establishments from './establishments'

const router = express.Router();
const app = express()

router.use('/users', users)
router.use('/establishments', establishments)


export default router;

console.log('Executing Server: routes.js ...');