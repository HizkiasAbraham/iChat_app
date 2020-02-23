/**
 * Validators for user inputs
 */
const { body } = require('express-validator');
const User = require('../models/user');

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
                .custom(email => {
                    return User.findOne({ email })
                        .then(user => {
                            if (user) {
                                return Promise.reject('Email in already exists!')
                            }
                        })
                }),
            body('username')
                .exists().withMessage('Username is required')
                .custom(
                    username => {
                        return User.findOne({ username })
                            .then(
                                user => {
                                    if (user) {
                                        return Promise.reject('Username taken')
                                    }
                                }
                            )
                    }
                )
            ,
            body('password')
                .exists().withMessage('Password is required')
                .isLength({ min: 5 }).withMessage('Password must be atleast 5 characters long')

        ]
    },

    validateLogin: () => {
        return [
            body('email')
                .exists().withMessage('Email or username is required'),
            body('password')
                .exists().withMessage('Password is required')
        ]
    }
}