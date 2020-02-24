/**
 * default routes
 */
const router = require('express').Router();
const { validateSignup, validateLogin } = require('../utils/inputValidator');
const { signup, login } = require('../controllers/usersController');
const { isLoggedIn } = require('../authentication/authMiddlewares');

router.get('/', isLoggedIn, (req, res) => {
    res.json({ msg: 'Logged in' })
})

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