const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();
const authMiddleware = require('../authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
// Protected route - authentication needed
router.get('/dashboard', authMiddleware, (req, res) => {
    // Only users with valid JWT token can access this
    res.json({ msg: 'Welcome to your dashboard' });
  });

module.exports = router;