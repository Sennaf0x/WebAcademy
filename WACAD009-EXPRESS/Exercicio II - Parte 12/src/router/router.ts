import express from 'express';
import controllers from '../controllers/controllers';

const router = express.Router();

router.get('/product', controllers.index);
router.route('/product/create')
    .get(controllers.create)
    .post(controllers.create);
router.get('/product/:id', controllers.read);
router.route('/product/edit/:id')
    .get(controllers.update)
    .post(controllers.update);
router.post('/product/delete/:id', controllers.remove);

export default router;