import express from 'express';
import { signup, login, getAllUsers } from '../controllers/authController.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET route for signup page
router.get('/signup', (req, res) => {
    res.json({ 
        message: "Signup Form", 
        instructions: "Send a POST request to this endpoint with name, email, and password in the body"
    });
});

// POST routes for authentication
router.post('/signup', signup);
router.post('/login', login);

// GET route for all users (admin only)
router.get('/users', verifyToken, verifyAdmin, getAllUsers);

export default router;