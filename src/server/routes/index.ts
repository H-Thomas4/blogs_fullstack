import { Router } from "express";
import blogRouter from './blogs';

const router = Router();

router.use('/blogs', blogRouter);

export default router;