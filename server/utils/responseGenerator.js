/**
 * Functions that generate response
 */

module.exports = {
    successJsonResponse: (res, data) => {
        res.json(data)
    },

    failureResponse: (res, statusCode, error = null) => {
        res.status(statusCode).json(error != null ? error : { code: statusCode })
    }
}