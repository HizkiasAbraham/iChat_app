/**
 * Validators for user inputs
 */
const { body } = require('express-validator');

module.exports = {
    validateSignup: () => {
        return [
            body('firstName')
                .exists().withMessage('First Name is required'),
            body('lastName')
                .exists().withMessage('Last Name is required'),
            body('email')
                .exists().withMessage('Email is required')
                .isEmail().withMessage('Invalid email')
        ]
    }
}