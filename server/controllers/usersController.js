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
        successJsonResponse(res, req.body);
    },

    login: async (req, res) => {

    },

    resetPassword: async (req, res) => {

    }
}