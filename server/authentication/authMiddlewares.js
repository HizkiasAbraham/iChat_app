/**
 * Middle ware to authenticate user
 */
const passport = require('passport');

module.exports = {
    isLoggedIn: passport.authenticate('jwt', { session: false })
}