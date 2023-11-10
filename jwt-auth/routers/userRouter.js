const express = require('express');
const { register, login, verifyToken, logout } = require('../controllers/authControllers');
const { welcomeUser } = require('../controllers/standardController');
const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.get('/welcome',verifyToken,welcomeUser);
router.post('/logout',logout)

module.exports = router;