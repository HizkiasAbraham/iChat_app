/**
 * default routes
 */
const router = require('express').Router();
const { validateSignup, validateLogin } = require('../utils/inputValidator');
const { signup, login } = require('../controllers/usersController');

router.post(
    '/signup',
    validateSignup(),
    signup
);

router.post(
    '/login',
    validateLogin(),
    login
)

module.exports = router;