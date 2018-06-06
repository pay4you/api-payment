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



export default router