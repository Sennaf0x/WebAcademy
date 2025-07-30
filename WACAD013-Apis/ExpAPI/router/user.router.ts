import { Router } from 'express';
import * as userController from '../resources/userType/user/user.controller';

const router = Router();

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:id', userController.read);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

export default router;