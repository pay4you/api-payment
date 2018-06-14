import express from 'express';
import users from './users'
import establishments from './establishments'
import orders from './orders'

const router = express.Router();
const app = express()

router.use('/users', users)
router.use('/establishments', establishments)
router.use('/orders', orders)



export default router;

console.log('Executing Server: routes.js ...');