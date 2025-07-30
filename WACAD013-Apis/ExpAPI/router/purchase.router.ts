import { Router } from 'express';
import { isAuth } from '../middlewares/isAuth';
import * as purchaseController from '../controller/purchase.controller';

const router = Router();

router.get('/cart', isAuth, purchaseController.index);

router.post('/cart', isAuth, purchaseController.addToCart);
router.post('/checkout', isAuth, purchaseController.completePurchase);

export default router;