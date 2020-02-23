/**
 * default routes
 */
const router = require('express').Router();
const inputValidators = require('../utils/inputValidator');
const { signup } = require('../controllers/usersController');

router.post(
    '/signup',
    inputValidators.validateSignup(),
    signup
);


module.exports = router;