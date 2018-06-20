import express from 'express';
import establisments from '../controllers/establishmentController'
import { isAuthenticated } from '../middlewares'

const router = express.Router();

router.get('/', isAuthenticated, establisments.get)
router.post('/',isAuthenticated,  establisments.post)
router.get('/:id',isAuthenticated, establisments.getById)
router.put('/:id', isAuthenticated, establisments.put)
router.get('/:id/products', isAuthenticated, establisments.getProducts)
router.post('/:id/products', isAuthenticated, establisments.postProducts)
router.get('/:id/orders', isAuthenticated, establisments.getOrders)
router.post('/:id/user/:user', isAuthenticated, establisments.postUser)

export default router