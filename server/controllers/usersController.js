/**
 * users controller
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { successJsonResponse, failureResponse } = require('../utils/responseGenerator');
const User = require('../models/user');

require('dotenv').config();

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
            let { password, ...rest } = userCreated._doc;

            successJsonResponse(res, rest)

        } catch (error) {
            failureResponse(res, 500);
        }
    },

    login: async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            failureResponse(res, 422, errors.array());
            return;
        }

        try {
            let user = await User.findOne({ email: req.body.email });

            if (!user) {
                failureResponse(res, 401, [{ msg: "User does not exist" }]);
                return;
            }

            let isMatch = await bcrypt.compare(req.body.password, user.password);

            if (!isMatch) {
                failureResponse(res, 401, [{ msg: "Incorrect password" }]);
                return;
            }

            let token = jwt.sign({ id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );
            successJsonResponse(res, { token });

        } catch (error) {

        }


    },

    resetPassword: async (req, res) => {

    }
}