import getReview from '../controller/ai.controller.js';
import express from 'express';

const router = express.Router();

router.post('/get-review', getReview);

export default router;