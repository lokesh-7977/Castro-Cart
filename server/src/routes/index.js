import { Router } from 'express';
import authRoute from './auth.route.js';
import collectionRoute from './collection.route.js';
import couponRoute from './coupan.route.js';
import orderRoute from './order.route.js';
import productRoute from './product.route.js';


const router = Router();

router.use('/auth', authRoute);
router.use('/collections', collectionRoute);
router.use('/coupons', couponRoute);
router.use('/orders', orderRoute);
router.use('/products', productRoute);


export default router;