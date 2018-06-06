import express from 'express';
import orders from '../controllers/orderController'
import { isAuthenticated } from '../middlewares'

const router = express.Router();

router.get('/', isAuthenticated, orders.get)
router.get('/:id', isAuthenticated, orders.getById)
router.post('/', isAuthenticated,orders.post)
router.put('/', isAuthenticated, orders.put)
/*router.delete('/:id', users.remove);*/

export default router