/**
 * Jwt strategy goes here
 */
const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
require('dotenv').config();

const opt = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}

module.exports = new Strategy(opt, async (payload, done) => {
    try {
        let userFound = await User.findById(payload.id);
        if (userFound) {
            return done(null, userFound)
        }
        else {
            return done(null, false)
        }
    } catch (error) {

    }
})