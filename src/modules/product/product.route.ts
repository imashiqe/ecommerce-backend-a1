import express from 'express';
import productController from './product.controller';


const router = express.Router();

// will  call the controller function
router.post('/create-product', productController.createproduct);

router.get('/', productController.getAllproduct);
router.get('/:productId', productController.getSingleproduct);

export const productRoutes = router;