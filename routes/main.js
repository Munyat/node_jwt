const express = require('express');
const router = express.Router();
const { Login, Dashboard } = require('../controllers/main');
const authMiddleware = require('../middleware/auth')


router.route('/login').post(Login);
router.route('/dashboard').get(authMiddleware,Dashboard);

module.exports = router;