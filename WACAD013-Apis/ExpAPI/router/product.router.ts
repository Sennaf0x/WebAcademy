import { Router } from 'express';
import * as productController from '../controller/product.controller';
import { validate } from '../middlewares/validate';
import { productSchema } from '../schemas/product.schema';
import isAdmin from '../middlewares/isAdmin';

const router = Router();

router.get('/', productController.index);
router.post('/', validate(productSchema), isAdmin, productController.create);
router.get('/:id', productController.read);
router.put('/:id', isAdmin, productController.update);
router.delete('/:id', isAdmin, productController.remove);

export default router;