import express from 'express';
import users from '../controllers/userController'
import { loginRequired, isAuthenticated } from '../middlewares'

const router = express.Router();

router.get('/:id', users.getById)
router.get('/', isAuthenticated, users.get)
router.post('/', users.post)
router.post('/authenticate', users.authenticate)
router.put('/:id', users.put)
router.delete('/:id', users.remove);

export default router