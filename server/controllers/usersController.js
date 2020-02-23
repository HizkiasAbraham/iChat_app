/**
 * users controller
 */
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { successJsonResponse, failureResponse } = require('../utils/responseGenerator');
const User = require('../models/user');

module.exports = {
    signup: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            failureResponse(res, 422, errors.array());
            return;
        }

        try {
            let salt = await bcrypt.genSalt(12);
            let newUser = Object.assign({}, req.body);
            newUser.password = await bcrypt.hash(newUser.password, salt);

            let userCreated = await User.create(newUser);
            let {password, ...rest} = userCreated._doc;

            successJsonResponse(res, rest)

        } catch (error) {
            failureResponse(res, 500);
        }
    },

    login: async (req, res) => {

    },

    resetPassword: async (req, res) => {

    }
}