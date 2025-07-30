// product.router.ts
import { Router } from 'express';
import * as productController from '../controller/product.controller';
import { validate } from '../middlewares/validate';
import { productSchema } from '../schemas/product.schema';
import isAdmin from '../middlewares/isAdmin';
import { isAuth } from '../middlewares/isAuth';

const router = Router();

router.get('/', productController.index);

router.post('/', validate(productSchema), isAuth, isAdmin, productController.create);
router.get('/:id', isAuth, productController.read);
router.put('/:id', isAuth, isAdmin, productController.update);
router.delete('/:id', isAuth, isAdmin, productController.remove);

export default router;