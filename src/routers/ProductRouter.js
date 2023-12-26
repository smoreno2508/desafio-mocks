import { Router } from "express";
import * as productController from '../controllers/ProductController.js';

const router = Router();

router.get('/api/product', productController.getAll);
router.get('/api/product/:id', productController.getById);
router.post('/api/product', productController.create);
router.delete('/api/product/:id', productController.deleteById);
router.get('/api/mockingproducts', productController.productMocks);


export default router;