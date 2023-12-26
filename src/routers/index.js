import { Router } from 'express';
import productRouter from './ProductRouter.js';

const router = Router();

router.use("/", productRouter);

export default router;
