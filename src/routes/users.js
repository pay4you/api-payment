import express from 'express';
import users from '../controllers/userController'

const router = express.Router();

router.get('/:id', users.getById)
router.get('/', users.get)
router.post('/', users.post)
router.put('/:id', users.put)
router.delete('/:id', users.remove);

export default router