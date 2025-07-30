import { Router } from 'express';
import authRouter from '../resources/authentication/auth.router';

const router = Router();

router.use('/', authRouter);

export default router;