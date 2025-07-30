import { Router } from 'express';
import authRouter from '../resources/authentication/auth.router';
import productRouter from './product.router';

const router = Router();

router.use('/', authRouter);
router.use("/auth",
            // #swagger.tags = ['Auth'] 
            authRouter
            );
 router.use(
            "/product",
            // #swagger.tags = ['Product']
            productRouter
 );

export default router;