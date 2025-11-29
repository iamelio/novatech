import express from 'express';
import { createTest, getUserTests, deleteTest } from '../controllers/textController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(verifyToken);

router.post('/', verifyToken, createTest);
router.get('/', verifyToken, getUserTests);
router.delete('/:id', verifyToken, deleteTest);

export default router;