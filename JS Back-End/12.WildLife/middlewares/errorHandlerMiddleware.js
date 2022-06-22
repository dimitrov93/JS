const {getErrorMsg} = require('../utils/errorHelpers')

exports.errorHandler = (err, req, res, next) => {
    const status = err.status || 404;

    res.status(status).render('404', {error: getErrorMsg(err)})
}